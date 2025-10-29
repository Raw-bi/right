import {
  m as s,
  s as o,
  t as n
} from "./chunk-4FPRIH7L.js";

// src/ToasterEmbed.ts
var c = `https://mississippi.river.to/right/b/charts`;
var h = 250;
var a = class l {
  sizeInterval;
  iframe;
  resizeCheckCount;
  isSameOrigin;
  options;
  height;
  abortController;
  loaded;
  id;
  src;
  onReady;
  onLoad;
  onResize;
  element;
  constructor(e, t) {
    this.element = e;
    this.sizeInterval = 0;
    this.abortController = new AbortController();
    this.id = t.id;
    this.src = t.src;
    this.onLoad = t.onLoad;
    this.onResize = t.onResize;
    this.onReady = t.onReady;
    this.loaded = false;
    this.resizeCheckCount = 0;
    this.height = h;
    this.isSameOrigin = false;
    this.options = {
      variant: "light",
      // spread in other options, such
      // as isTerminalClient
      ...t
    };
    this.iframe = document.createElement("iframe");
    this.setup();
  }
  static measureHeight(e, t = true) {
    try {
      let i = n(e.contentDocument?.body, t);
      return i;
    } catch {
      return null;
    }
  }
  get iframeSrc() {
    const e = s(this.options);
    if (this.src) {
      try {
        const t = new URL(this.src);
        return `${t.origin}${t.pathname}?${e.toString()}`;
      } catch {
        console.error(
          `Invalid URL: ${this.src}. Falling back to iframe src by id.`
        );
      }
    }
    return `${this.options.baseEndpoint ?? c}/${this.options.id}?${e.toString()}`;
  }
  setup() {
    this.iframe.setAttribute("scrolling", "no");
    this.iframe.setAttribute("allowTransparency", "true");
    this.iframe.loading = "lazy";
    this.iframe.src = this.iframeSrc;
    this.iframe.width = "100%";
    this.iframe.height = `${l.measureHeight(this.iframe) ?? h}`;
    this.iframe.style.border = "0";
    this.iframe.title = this.options?.title ?? "Toaster Chart";
    this.iframe.id = `frame-${this.id}`;
    this.iframe.dataset.variant = this.options.variant;
    try {
      const e = new URL(this.iframe.src);
      if (e.host === window.location.host) {
        this.isSameOrigin = true;
      }
    } catch {
    }
    this.subscribe();
    this.element.appendChild(this.iframe);
  }
  resizeIframe(e) {
    if (e !== this.height) {
      this.iframe.height = `${e}`;
      this.height = parseInt(`${e}`, 10);
    }
  }
  triggerResizeCallback(e) {
    if (this.onResize && typeof this.onResize === "function") {
      this.onResize(parseFloat(`${e}`));
    }
  }
  triggerOnloadCallback() {
    if (this.onLoad && typeof this.onLoad === "function") {
      this.onLoad();
    }
  }
  triggerOnReadyCallback() {
    if (this.onReady && typeof this.onReady === "function") {
      this.onReady();
    }
  }
  subscribe = () => {
    const e = this;
    this.iframe.onerror = console.error;
    this.iframe.onload = async () => {
      this.loaded = true;
      this.iframe.setAttribute("data-loaded", "true");
      this.iframe.contentWindow?.postMessage(
        {
          // toaster-client uses the 'method' key
          method: "register",
          windowId: this.id
        },
        "*"
      );
      this.triggerOnloadCallback();
      console.log(`TOASTER: Legacy registered with id ${this.id}`);
    };
    globalThis.addEventListener(
      "message",
      (t) => {
        let i;
        if (typeof t.data === "string") {
          try {
            i = JSON.parse(t.data);
          } catch (r) {
            console.error(`Failed to parse event data: ${r}`);
            return;
          }
        } else {
          i = t.data;
        }
        function d(r) {
          return "windowId" in r && "method" in r;
        }
        function m(r) {
          return "event" in r && "id" in r;
        }
        if (d(i) && i.windowId === e.id) {
          if (i.method === "resize" && i.height) {
            e.resizeIframe(i.height);
            e.triggerResizeCallback(i.height);
            e.triggerOnReadyCallback();
            return;
          }
        }
        if (m(i)) {
          if (i.id !== this.id) {
            return;
          }
          if (i.event === "resize") {
            this.resizeIframe(i.height);
            this.triggerResizeCallback(i.height);
          }
          if (i.event === "chart-loaded") {
            this.loaded = true;
            this.iframe.setAttribute("data-loaded", "true");
            this.triggerOnloadCallback();
            e.triggerOnReadyCallback();
          }
        }
      },
      // add the signal to the abort controller
      // so we can kill it if need be
      {
        signal: this.abortController.signal
      }
    );
  };
  // rerender the iframe with new props by sending
  // message down to it via postMessage
  // limit changes to theme/variant only,
  // as we don't want to allow updates to stored data
  rerender = (e) => {
    let t = {
      event: "rerender",
      id: this.id,
      props: {
        ...e
      }
    };
    if (e.theme) {
      this.iframe.dataset.theme = e.theme;
    }
    this.iframe.dataset.variant = e.variant ?? this.iframe.dataset.variant;
    o(this.iframe, t);
  };
  /* c8 ignore start */
  destroy() {
    this.abortController?.abort();
    clearTimeout(this.sizeInterval);
    while (this.element.firstChild) {
      this.element.removeChild(this.element.firstChild);
    }
  }
  /* c8 ignore stop */
};

export {
  a
};
