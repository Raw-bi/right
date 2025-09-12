import {
  a as p
} from "./chunk-ADMZL3B2.js";
import {
  a as E
} from "./chunk-WIWVBOHN.js";
import {
  d as x
} from "./chunk-CYI2CMRG.js";

// ../../node_modules/nanoid/url-alphabet/index.js
var v = "useandom-26T198340PX75pxJACKVERYMINDBUSHWOLF_GQZbfghjklqvwyzrict";

// ../../node_modules/nanoid/index.browser.js
var I = (t = 21) => {
  let e = "";
  let r = crypto.getRandomValues(new Uint8Array(t |= 0));
  while (t--) {
    e += v[r[t] & 63];
  }
  return e;
};

// ../utils/src/misc/index.ts
function U() {
  return void 0;
}

// src/utils/styles.ts
function H(t, e) {
  let r;
  let n = 0;
  function a() {
    if (Boolean(t.sheet)) {
      cancelAnimationFrame(r);
      e();
    } else if (n > 200) {
      cancelAnimationFrame(r);
      console.error(
        "Stylesheet failed to load within the expected time.",
        t.getAttribute("href")
      );
    } else {
      n += 1;
      r = requestAnimationFrame(a);
    }
  }
  r = requestAnimationFrame(a);
}
async function B(t, e) {
  return new Promise((r, n) => {
    H(t, () => {
      if (e) e();
      return r(true);
    });
  });
}

// src/utils/config.ts
var J = 5 / 2;
var _ = "https://assets.bwbx.io/font-service/css/BWHaasGroteskWebDingbat:400%7CBloomberg-PropU_N:400,600%7CBloomberg-PropU_N-Bold:700/styled-font-face.css?cacheBust";
var C = "data:image/png;base64,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";

// src/utils/messenger.ts
function ee(t, e) {
  t.contentWindow?.postMessage(e, "*");
}
function u(t) {
  window.parent.postMessage(t, "*");
}

// src/utils/sizing.ts
function w(t, e = true) {
  if (!t) return null;
  const r = t.offsetHeight;
  if (!e) return r;
  try {
    const n = globalThis.getComputedStyle(t);
    let a = parseInt(n.marginTop);
    let i = parseInt(n.marginBottom);
    if (Number.isNaN(a)) {
      a = 0;
    }
    if (Number.isNaN(i)) {
      i = 0;
    }
    const s = a + i;
    return r + s;
  } catch (n) {
    return r;
  }
}

// src/ToasterChart.ts
var A = "business";
var V = 500;
var K = 500;
var G = "toaster-chart";
var D = class {
  cachedHeight;
  resizeCheckCount;
  loaded;
  element;
  data;
  options;
  id;
  type;
  error;
  instance;
  mod;
  tier;
  sizeInterval;
  pkg;
  constructor(e, r) {
    this.element = e;
    this.sizeInterval = 0;
    this.cachedHeight = 0;
    this.resizeCheckCount = 0;
    this.loaded = false;
    this.tier = r.tier ?? "production";
    this.pkg = null;
    this.mod = null;
    this.instance = null;
    this.error = "";
    this.data = f(r.data);
    if (!r.data) {
      throw new Error("No data supplied to chart");
    }
    this.id = r?.id ?? this.data.id ?? k();
    this.type = this.data.type || this.data.chartType;
    this.options = {
      variant: "light",
      // option to determine whether or not
      // to dynamically fetch + inject the css
      // needed for legacy charts into the document.head
      // this will have no effect for contemporary "pantry"
      // charts, but will only run for legacy toaster-client charts
      //
      // this should be set to false if the themed CSS file
      // for a toaster chart is already on the page
      injectStyles: true,
      ...r
    };
    if (!this.type) {
      console.error("Chart has no type specified in data");
      this.prepareFallback();
      return;
    }
    this.setup();
  }
  /**
   *
   * @returns
   */
  get theme() {
    const e = this.data;
    const r = this.id;
    const n = y({
      requestedTheme: M(e),
      isTerminalClient: this.options?.isTerminalClient,
      variant: m(this.options.variant),
      themeOverride: this.options.forceThemeOverride
    });
    if (typeof window !== "undefined") {
      const a = `_toaster_debug_${r}`;
      window[a] = function() {
        return { theme: n, data: e };
      };
    }
    return n;
  }
  async setup() {
    console.log(`ToasterChart rendered via Pantry - ${E}`);
    const e = b(this.data, {
      env: this.tier,
      assetPath: this.options?.assetPath
    });
    if (!e) {
      const a = `Unable to resolve pkg for ${this.data.chartType || this.data.type}`;
      console.error(a);
      return;
    }
    const { importPath: r, importPkg: n } = e;
    this.pkg = n;
    this.mod = this.pkg.legacy ? await p(r) : await p(r);
    this.prepareHTML();
    this.addListeners();
    setTimeout(() => {
      this.handleSizing();
    }, K);
    if (this.pkg.legacy) {
      if (this.options.injectStyles) {
        this.updateRootClasses();
        await c({
          id: this.id,
          pkg: this.pkg,
          options: this.options,
          theme: this.theme.legacyTheme
        });
      }
      return this._legacyRender({
        element: this.element,
        // legacy chart renders use the theme from data
        // so overwrite here if possible
        data: {
          ...this.data,
          theme: this.theme.legacyTheme
        },
        options: {
          ...this.options,
          // this is important to get scatterplot scales
          // to show up w correct dark mode
          ...this.theme.variant === "dark" && {
            darkTheme: true
          },
          // pass original/deprecated theme
          // to options for svelte scales
          theme: this.theme.legacyTheme
        },
        mod: this.mod
      });
    }
    this.render();
    if (this.options.onLoad) this.options.onLoad();
  }
  updateRootClasses() {
    const e = this.element;
    e.classList.forEach((r) => {
      if (r.startsWith("toaster-theme")) {
        e.classList.remove(r);
      }
    });
    e.classList.remove("toaster-variant-dark");
    e.classList.remove("toaster-variant-light");
    e.classList.remove("toaster-transparent-bg");
    if (this.options.isTerminalClient) {
      e.classList.add("toaster-is-terminal");
    }
    if (this.pkg?.legacy) {
      if (this.options.isTerminalClient) {
        e.setAttribute(
          "data-toaster-theme",
          this.theme.legacyTerminalTheme
        );
        e.classList.add(
          `toaster-theme-${this.theme.legacyTerminalTheme}`
        );
      } else {
        e.setAttribute("data-toaster-theme", this.theme.legacyTheme);
        e.classList.add(`toaster-theme-${this.theme.legacyTheme}`);
      }
    } else {
      if (this.options.isTerminalClient) {
        e.setAttribute("data-toaster-theme", this.theme.terminalTheme);
        e.classList.add(`toaster-theme-${this.theme.terminalTheme}`);
      } else {
        e.setAttribute("data-toaster-theme", this.theme.theme);
        e.classList.add(`toaster-theme-${this.theme.theme}`);
      }
    }
    if (this.theme.variant === "dark") {
      e.classList.add(`toaster-variant-dark`);
    } else {
      e.classList.add("toaster-variant-light");
    }
    if (this.options.transparency === true) {
      e.classList.add("toaster-transparent-bg");
    }
  }
  addListeners() {
    let e = this;
    window.addEventListener("load", async (n) => {
      this.loaded = true;
      document.documentElement.classList.add("loaded");
      u({ event: "chart-loaded", id: this.id });
    });
    let r = window.matchMedia("(prefers-color-scheme: dark)");
    r.addEventListener("change", async (n) => {
      if (e.options.variant === "auto") {
        e.destroy();
        e.updateRootClasses();
        const a = m("auto");
        if (e.pkg?.legacy) {
          await c({
            id: this.id,
            pkg: this.pkg,
            options: this.options,
            theme: this.theme.legacyTheme
          });
          const i = {
            element: e.element,
            // legacy chart renders use the theme from data
            // so overwrite here if possible
            data: {
              ...e.data,
              theme: e.theme.legacyTheme
            },
            options: {
              ...e.options,
              // this is important to get scatterplot scales
              // to show up w correct dark mode
              ...a === "dark" && {
                darkTheme: true
              },
              // pass original/deprecated theme
              // to options for svelte scales
              theme: this.theme.legacyTheme,
              variant: a
            },
            mod: this.mod
          };
          e._legacyRender(i);
        } else {
          await e.render();
        }
      }
    });
    globalThis.addEventListener(
      "message",
      async (n) => {
        let a = this.pkg?.legacy && this.options.injectStyles;
        if (n.data.id !== this.id) return;
        if (n.data.event === "rerender") {
          if (n.data.props.variant) {
            this.options.variant = n.data.props.variant;
          }
          if (n.data.props.theme) {
            this.updateRootClasses();
            if (a) {
              await c({
                pkg: this.pkg,
                options: this.options,
                id: this.id,
                theme: this.theme.legacyTheme
              });
            }
          }
          if (this.pkg?.legacy) {
            this.destroy();
            this.setup();
          }
        }
      }
    );
    document.fonts.ready.then(() => {
      window.dispatchEvent(new Event("load"));
    });
  }
  prepareFallback = () => {
    this.element.classList.add("error");
    this.element.style.display = "flex";
    this.element.style.alignItems = "center";
    this.element.style.flexDirection = "column";
    this.element.style.justifyContent = "center";
    this.element.style.width = "100%";
    this.element.style.height = "200px";
    const e = document.createElement("img");
    e.width = 96;
    e.height = 96;
    e.src = C;
    const r = document.createElement("p");
    r.style.fontFamily = "sans-serif";
    r.textContent = "Untyped Toaster chart";
    this.element.appendChild(e);
    this.element.appendChild(r);
  };
  prepareHTML = () => {
    const e = `toaster-type-${this.type}`;
    this.element.setAttribute(`data-chart-id`, this.id);
    this.element.id = `toaster-id-${this.id}`;
    this.element.classList.add(G, e);
    this.updateRootClasses();
    if (this.options.padding) {
      this.element.style.padding = "20px 14px";
    } else {
      this.element.style.padding = "0px";
    }
    if (this.options.transparency === true) {
      if (this.element.parentElement) {
        this.element.parentElement.style.backgroundColor = "transparent";
      } else {
        this.element.style.backgroundColor = "transparent";
      }
    }
  };
  // Check size on a regular interval,
  // and broadcast out if any change has occurred
  // this is a pretty simple setup and avoids the
  // any possibility of an infinite loop
  handleSizing = () => {
    const e = this.element;
    this.sizeInterval = globalThis.setTimeout(
      this.handleSizing,
      V
    );
    let r = w(e) ?? 0;
    this.resizeCheckCount += 1;
    if (Math.round(this.cachedHeight) === Math.round(r)) {
      return;
    }
    if (r > 0) {
      e.setAttribute("data-height", `${r}`);
    }
    this.cachedHeight = r;
    if (this.options.onResize) {
      this.options.onResize(r);
    }
    u({
      event: "resize",
      height: r,
      id: this.id
    });
  };
  // "New" pantry chart render function
  render = async () => {
    this.instance = await this.mod.render({
      element: this.element,
      options: {
        ...this.options,
        variant: m(this.options.variant)
      },
      // we want to pass any explicit theme
      // onto the chartData
      chartData: {
        ...this.data,
        // legacy schema...
        theme: this.theme,
        // new schema...
        design: {
          ...this.data.design || {},
          originalTheme: this.theme.theme
        }
      }
    });
    document.fonts.ready.then(() => {
      window.dispatchEvent(new Event("load"));
    });
  };
  // Re-render with updated props
  // Right now, this only allows updating
  // theme/variant in one go, but can be expanded
  // to allow live updating data
  rerender = async (e) => {
    const { data: r, variant: n, isTerminalClient: a } = e;
    if (a === true || a === false) {
      this.options.isTerminalClient = a;
    }
    this.data = {
      ...this.data,
      ...r
    };
    if (n) {
      this.options.variant = n ?? this.theme.variant;
      this.updateRootClasses();
      if (this.pkg?.legacy && this.options.injectStyles) {
        await c({
          pkg: this.pkg,
          options: this.options,
          id: this.id,
          theme: this.theme.legacyTheme
        });
      }
    }
    this.instance?.rerender({
      ...r && {
        chartData: f(r)
      },
      ...n && { variant: n }
    });
  };
  _legacyRender({
    element: e,
    data: r,
    options: n,
    mod: a
  }) {
    return a.factory(e, r, n);
  }
  /**
   * Destroy method. Called from consumer side...
   */
  destroy = () => {
    this.instance?.destroy();
    window.clearTimeout(this.sizeInterval);
  };
};

// src/utils/theme.ts
var z = [
  "bi",
  "bnef",
  "business",
  "opinion",
  // we don't allow choosing terminal
  // in the ui, but we do allow it via
  // query param
  "terminal"
];
function y({
  requestedTheme: t,
  variant: e,
  isTerminalClient: r,
  themeOverride: n
}) {
  let a = n ?? t;
  const i = a.replace("-dark", "");
  let s = r ?? false;
  if (e && e === "dark") {
    s = true;
  } else if (!e && (a.includes("-dark") || d.includes(i))) {
    s = true;
  }
  if (i === "terminal") {
    if (r) {
      return {
        theme: "terminal",
        legacyTheme: "terminal",
        terminalTheme: "terminal",
        legacyTerminalTheme: "terminal",
        variant: "dark"
      };
    }
    return {
      theme: A,
      legacyTheme: `${A}${s ? "-dark" : ""}`,
      terminalTheme: "terminal",
      legacyTerminalTheme: "terminal",
      variant: s ? "dark" : "light"
    };
  }
  if (r) {
    return {
      theme: l.includes(i) ? i : "terminal",
      legacyTheme: l.includes(i) ? d.includes(i) ? i : `${i}-dark` : "terminal",
      terminalTheme: l.includes(i) ? i : "terminal",
      legacyTerminalTheme: l.includes(i) ? d.includes(i) ? i : `${i}-dark` : "terminal",
      variant: "dark"
    };
  }
  if (d.includes(i)) {
    return {
      theme: i,
      legacyTheme: i,
      terminalTheme: l.includes(i) ? i : "terminal",
      legacyTerminalTheme: l.includes(i) ? i : "terminal",
      variant: "dark"
    };
  }
  if (!z.includes(i)) {
    return {
      theme: A,
      legacyTheme: `${A}${s ? "-dark" : ""}`,
      terminalTheme: "terminal",
      legacyTerminalTheme: "terminal",
      variant: s ? "dark" : "light"
    };
  }
  return {
    theme: i,
    legacyTheme: `${i}${s ? "-dark" : ""}`,
    terminalTheme: l.includes(i) ? i : "terminal",
    // should always be dark
    legacyTerminalTheme: l.includes(i) ? `${i}-dark` : "terminal",
    variant: s ? "dark" : "light"
  };
}

// src/utils/index.ts
var l = [
  "bi",
  "bnef",
  "beco",
  "opinion",
  "terminal"
];
var d = ["bi", "terminal"];
var ye = "toaster-theme-css";
var j = "https://www.bloomberg.com/toaster-packages/v1/custom";
function f(t) {
  if (typeof t === "string") {
    return JSON.parse(t);
  }
  return t;
}
function k() {
  return I();
}
function q(t) {
  if (!t) return 0;
  const [e] = t.split(".");
  if (!e) return 0;
  const r = parseInt(e, 10);
  if (Number.isNaN(r)) return 0;
  return r;
}
function b(t, e) {
  const r = typeof window !== "undefined";
  let n = e?.env ?? "production";
  if (r) {
    let h = new URLSearchParams(window.location.search);
    if (h.has("envOverride")) {
      n = h.get("envOverride");
    }
  }
  const a = q(t.version);
  let i = x(t.type ?? t.chartType, {
    assetPath: e?.assetPath,
    env: n,
    version: a,
    terminal: Boolean(e?.terminal)
  });
  let s;
  if (!i && t.customRenderImportPath) {
    s = `${j}/${t.customRenderImportPath}`;
  } else if (i) {
    s = i.path;
  } else {
    return null;
  }
  return { importPkg: i, importPath: s };
}
function Te(t = "terminal", e = "dark") {
  if (e === "dark" && t.includes("-dark")) {
    return t;
  }
  if (e === "light" && t.includes("-dark")) {
    return t.replace("-dark", "");
  }
  if (d.includes(t)) {
    return t;
  }
  if (e === "dark") {
    return `${t}-${e}`;
  }
  return t;
}
function xe(t, e) {
  if (d.includes(t)) {
    return { theme: t, variant: "dark" };
  }
  const r = t.includes("-dark") || e === "dark";
  const n = t.replace("-dark", "");
  return {
    theme: n || "business",
    variant: r ? "dark" : "light"
  };
}
function m(t) {
  if (!t) return "light";
  if (t === "light" || t === "dark") return t;
  if (t === "auto" && typeof window !== "undefined") {
    try {
      let e = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
      return e;
    } catch (e) {
      console.error("Unable to get auto color scheme");
      return "light";
    }
  }
  return "light";
}
function Ee(t) {
  const e = m(t.variant);
  const r = t.titles ?? true;
  const n = t.footer ?? true;
  const a = t.logo ?? true;
  const i = t.transparency ?? false;
  const s = t.padding ?? false;
  const h = t.animationParams;
  const o = t.preventMobileFont;
  const g = t.forceThemeOverride;
  const Q = t.forceLegacyRender;
  const T = t.isTerminalClient;
  const O = t.interactive ?? true;
  const P = true;
  const L = {
    web: P,
    variant: e,
    logo: a,
    titles: r,
    interactive: O,
    padding: s,
    footer: n,
    hideLogo: !a,
    ...i === true && { transparency: i },
    ...g && { forceThemeOverride: g },
    ...Q && { forceLegacyRender: "true" },
    ...T && { isTerminalClient: T },
    // add legacy query params for legacy charts
    // NOTE: There is a bug in toaster-client
    // that simply checks existence of hideTitles
    // and will affect padding. This means
    // we only send hideTitles param if explicitly true
    ...r === false && { hideTitles: true },
    // same goes for noPadding
    ...s === false && { noPadding: true },
    ...h && { ...h },
    ...o && { preventMobileFont: o }
  };
  return new URLSearchParams(
    Object.fromEntries(
      Object.entries(L).map(([R, S]) => [R, String(S)])
    )
  ).toString();
}
function ve(t) {
  return new Promise((e) => {
    setTimeout(e, t);
  });
}
function N({
  pkg: t,
  theme: e,
  id: r
}) {
  const n = t.path;
  const [a, i] = n.split("/js/");
  let s = `${a}/css/${e}.css`;
  return s;
}
async function c({
  id: t,
  theme: e,
  pkg: r,
  options: n
}) {
  const { onLoad: a } = n;
  let i = N({
    pkg: r,
    theme: e
  });
  const s = document.getElementById(`toaster-stylesheet-${t}`);
  if (s) {
    s.parentElement?.removeChild(s);
  }
  const h = document.querySelectorAll("link");
  if (Array.from(h).some(
    (g) => g.getAttribute("href") === i
  )) {
    return Promise.resolve();
  }
  const o = document.createElement("link");
  o.href = i;
  o.type = "text/css";
  o.rel = "stylesheet";
  o.id = `toaster-stylesheet-${t}`;
  o.setAttribute("data-testid", "legacy-stylesheet");
  if (n.injectionElement) {
    n.injectionElement.appendChild(o);
  } else {
    document.head.appendChild(o);
  }
  await B(o, a);
}
function Ie(t) {
  const e = /\/charts\/([^/]+?)(?:\.html|\?|$)/;
  const r = t.match(e);
  return r ? r[1] : null;
}
function M(t) {
  const e = (
    // prefer explicit options passed in
    // otherwise, look at new chart schema
    (t.design?.originalTheme ?? // otherwise, look at legacy chart schema
    t.theme ?? t.webTheme) || // otherwise, just use business
    "business"
  );
  return e;
}

export {
  _ as a,
  U as b,
  y as c,
  l as d,
  d as e,
  ye as f,
  j as g,
  f as h,
  k as i,
  q as j,
  b as k,
  Te as l,
  xe as m,
  m as n,
  Ee as o,
  ve as p,
  N as q,
  c as r,
  Ie as s,
  M as t,
  ee as u,
  w as v,
  D as w
};
