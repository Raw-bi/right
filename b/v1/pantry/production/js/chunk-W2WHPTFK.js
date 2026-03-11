// ../../node_modules/svelte/src/runtime/internal/utils.js
function oe() {
}
function Zs(t, e) {
  for (const r in e) t[r] = e[r];
  return (
    /** @type {T & S} */
    t
  );
}
function jo(t) {
  return t();
}
function Or() {
  return /* @__PURE__ */ Object.create(null);
}
function Gt(t) {
  t.forEach(jo);
}
function Er(t) {
  return typeof t === "function";
}
function Sb(t, e) {
  return t != t ? e == e : t !== e || t && typeof t === "object" || typeof t === "function";
}
var Ar;
function Tb(t, e) {
  if (t === e) return true;
  if (!Ar) {
    Ar = document.createElement("a");
  }
  Ar.href = e;
  return t === Ar.href;
}
function kn(t) {
  return Object.keys(t).length === 0;
}
function Ys(t, ...e) {
  if (t == null) {
    for (const o of e) {
      o(void 0);
    }
    return oe;
  }
  const r = t.subscribe(...e);
  return r.unsubscribe ? () => r.unsubscribe() : r;
}
function kb(t, e, r) {
  t.$$.on_destroy.push(Ys(e, r));
}
function Cb(t, e, r, o) {
  if (t) {
    const n = Cn(t, e, r, o);
    return t[0](n);
  }
}
function Cn(t, e, r, o) {
  return t[1] && o ? Zs(r.ctx.slice(), t[1](o(e))) : r.ctx;
}
function Mb(t, e, r, o) {
  if (t[2] && o) {
    const n = t[2](o(r));
    if (e.dirty === void 0) {
      return n;
    }
    if (typeof n === "object") {
      const i = [];
      const a = Math.max(e.dirty.length, n.length);
      for (let f = 0; f < a; f += 1) {
        i[f] = e.dirty[f] | n[f];
      }
      return i;
    }
    return e.dirty | n;
  }
  return e.dirty;
}
function Nb(t, e, r, o, n, i) {
  if (n) {
    const a = Cn(e, r, o, i);
    t.p(a, n);
  }
}
function Pb(t) {
  if (t.ctx.length > 32) {
    const e = [];
    const r = t.ctx.length / 32;
    for (let o = 0; o < r; o++) {
      e[o] = -1;
    }
    return e;
  }
  return -1;
}
function Lb(t) {
  return t == null ? "" : t;
}
function Fb(t, e, r) {
  t.set(r);
  return e;
}

// ../../node_modules/svelte/src/runtime/internal/globals.js
var Do = typeof window !== "undefined" ? window : typeof globalThis !== "undefined" ? globalThis : (
  // @ts-ignore Node typings have this
  global
);

// ../../node_modules/svelte/src/runtime/internal/ResizeObserverSingleton.js
var Sr = class t {
  /**
   * @private
   * @readonly
   * @type {WeakMap<Element, import('./private.js').Listener>}
   */
  _listeners = "WeakMap" in Do ? /* @__PURE__ */ new WeakMap() : void 0;
  /**
   * @private
   * @type {ResizeObserver}
   */
  _observer = void 0;
  /** @type {ResizeObserverOptions} */
  options;
  /** @param {ResizeObserverOptions} options */
  constructor(e) {
    this.options = e;
  }
  /**
   * @param {Element} element
   * @param {import('./private.js').Listener} listener
   * @returns {() => void}
   */
  observe(e, r) {
    this._listeners.set(e, r);
    this._getObserver().observe(e, this.options);
    return () => {
      this._listeners.delete(e);
      this._observer.unobserve(e);
    };
  }
  /**
   * @private
   */
  _getObserver() {
    return this._observer ?? (this._observer = new ResizeObserver((e) => {
      for (const r of e) {
        t.entries.set(r.target, r);
        this._listeners.get(r.target)?.(r);
      }
    }));
  }
};
Sr.entries = "WeakMap" in Do ? /* @__PURE__ */ new WeakMap() : void 0;

// ../../node_modules/svelte/src/runtime/internal/dom.js
var Mn = false;
function Nn() {
  Mn = true;
}
function Pn() {
  Mn = false;
}
function Go(t, e) {
  t.appendChild(e);
}
function qb(t, e, r) {
  const o = Ln(t);
  if (!o.getElementById(e)) {
    const n = kr("style");
    n.id = e;
    n.textContent = r;
    Vs(o, n);
  }
}
function Ln(t) {
  if (!t) return document;
  const e = t.getRootNode ? t.getRootNode() : t.ownerDocument;
  if (e && /** @type {ShadowRoot} */
  e.host) {
    return (
      /** @type {ShadowRoot} */
      e
    );
  }
  return t.ownerDocument;
}
function Vs(t, e) {
  Go(
    /** @type {Document} */
    t.head || t,
    e
  );
  return e.sheet;
}
function Uo(t, e, r) {
  t.insertBefore(e, r || null);
}
function Pe(t) {
  if (t.parentNode) {
    t.parentNode.removeChild(t);
  }
}
function zb(t, e) {
  for (let r = 0; r < t.length; r += 1) {
    if (t[r]) t[r].d(e);
  }
}
function kr(t) {
  return document.createElement(t);
}
function Hb(t) {
  return document.createElementNS("http://www.w3.org/2000/svg", t);
}
function Fn(t) {
  return document.createTextNode(t);
}
function Wb() {
  return Fn(" ");
}
function Kb() {
  return Fn("");
}
function Ro(t, e, r, o) {
  t.addEventListener(e, r, o);
  return () => t.removeEventListener(e, r, o);
}
function qo(t, e, r) {
  if (r == null) t.removeAttribute(e);
  else if (t.getAttribute(e) !== r) t.setAttribute(e, r);
}
function In(t) {
  return Array.from(t.childNodes);
}
function Zb(t, e) {
  e = "" + e;
  if (t.data === e) return;
  t.data = /** @type {string} */
  e;
}
function Yb(t, e, r, o) {
  if (r == null) {
    t.style.removeProperty(e);
  } else {
    t.style.setProperty(e, r, o ? "important" : "");
  }
}
var Tr;
function Js() {
  if (Tr === void 0) {
    Tr = false;
    try {
      if (typeof window !== "undefined" && window.parent) {
        void window.parent.document;
      }
    } catch (t) {
      Tr = true;
    }
  }
  return Tr;
}
function Xb(t, e) {
  const r = getComputedStyle(t);
  if (r.position === "static") {
    t.style.position = "relative";
  }
  const o = kr("iframe");
  o.setAttribute(
    "style",
    "display: block; position: absolute; top: 0; left: 0; width: 100%; height: 100%; overflow: hidden; border: 0; opacity: 0; pointer-events: none; z-index: -1;"
  );
  o.setAttribute("aria-hidden", "true");
  o.tabIndex = -1;
  const n = Js();
  let i;
  if (n) {
    o.src = "data:text/html,<script>onresize=function(){parent.postMessage(0,'*')}<\/script>";
    i = Ro(
      window,
      "message",
      /** @param {MessageEvent} event */
      (a) => {
        if (a.source === o.contentWindow) e();
      }
    );
  } else {
    o.src = "about:blank";
    o.onload = () => {
      i = Ro(o.contentWindow, "resize", e);
      e();
    };
  }
  Go(t, o);
  return () => {
    if (n) {
      i();
    } else if (i && o.contentWindow) {
      i();
    }
    Pe(o);
  };
}
function Vb(t, e, r) {
  t.classList.toggle(e, !!r);
}
function Bn(t) {
  const e = {};
  t.childNodes.forEach(
    /** @param {Element} node */
    (r) => {
      e[r.slot || "default"] = true;
    }
  );
  return e;
}

// ../../node_modules/svelte/src/runtime/internal/lifecycle.js
var ne;
function Yt(t) {
  ne = t;
}
function Cr() {
  if (!ne) throw new Error("Function called outside component initialization");
  return ne;
}
function sx(t) {
  Cr().$$.on_mount.push(t);
}
function lx(t, e) {
  Cr().$$.context.set(t, e);
  return e;
}
function ux(t) {
  return Cr().$$.context.get(t);
}

// ../../node_modules/svelte/src/runtime/internal/scheduler.js
var Ae = [];
var Dn = [];
var Fe = [];
var Rn = [];
var tl = /* @__PURE__ */ Promise.resolve();
var Ho = false;
function Gn() {
  if (!Ho) {
    Ho = true;
    tl.then(Mr);
  }
}
function mr(t) {
  Fe.push(t);
}
var zo = /* @__PURE__ */ new Set();
var Le = 0;
function Mr() {
  if (Le !== 0) {
    return;
  }
  const t = ne;
  do {
    try {
      while (Le < Ae.length) {
        const e = Ae[Le];
        Le++;
        Yt(e);
        el(e.$$);
      }
    } catch (e) {
      Ae.length = 0;
      Le = 0;
      throw e;
    }
    Yt(null);
    Ae.length = 0;
    Le = 0;
    while (Dn.length) Dn.pop()();
    for (let e = 0; e < Fe.length; e += 1) {
      const r = Fe[e];
      if (!zo.has(r)) {
        zo.add(r);
        r();
      }
    }
    Fe.length = 0;
  } while (Ae.length);
  while (Rn.length) {
    Rn.pop()();
  }
  Ho = false;
  zo.clear();
  Yt(t);
}
function el(t) {
  if (t.fragment !== null) {
    t.update();
    Gt(t.before_update);
    const e = t.dirty;
    t.dirty = [-1];
    t.fragment && t.fragment.p(t.ctx, e);
    t.after_update.forEach(mr);
  }
}
function Un(t) {
  const e = [];
  const r = [];
  Fe.forEach((o) => t.indexOf(o) === -1 ? e.push(o) : r.push(o));
  r.forEach((o) => o());
  Fe = e;
}

// ../../node_modules/svelte/src/runtime/internal/transitions.js
var Nr = /* @__PURE__ */ new Set();
var Oe;
function fl() {
  Oe = {
    r: 0,
    c: [],
    p: Oe
    // parent group
  };
}
function sl() {
  if (!Oe.r) {
    Gt(Oe.c);
  }
  Oe = Oe.p;
}
function Pr(t, e) {
  if (t && t.i) {
    Nr.delete(t);
    t.i(e);
  }
}
function qn(t, e, r, o) {
  if (t && t.o) {
    if (Nr.has(t)) return;
    Nr.add(t);
    Oe.c.push(() => {
      Nr.delete(t);
      if (o) {
        if (r) t.d(1);
        o();
      }
    });
    t.o(e);
  } else if (o) {
    o();
  }
}

// ../../node_modules/svelte/src/runtime/internal/each.js
function zn(t) {
  return t?.length !== void 0 ? t : Array.from(t);
}

// ../../node_modules/svelte/src/runtime/internal/Component.js
function Cx(t) {
  t && t.c();
}
function ll(t, e, r) {
  const { fragment: o, after_update: n } = t.$$;
  o && o.m(e, r);
  mr(() => {
    const i = t.$$.on_mount.map(jo).filter(Er);
    if (t.$$.on_destroy) {
      t.$$.on_destroy.push(...i);
    } else {
      Gt(i);
    }
    t.$$.on_mount = [];
  });
  n.forEach(mr);
}
function ul(t, e) {
  const r = t.$$;
  if (r.fragment !== null) {
    Un(r.after_update);
    Gt(r.on_destroy);
    r.fragment && r.fragment.d(e);
    r.on_destroy = r.fragment = null;
    r.ctx = [];
  }
}
function cl(t, e) {
  if (t.$$.dirty[0] === -1) {
    Ae.push(t);
    Gn();
    t.$$.dirty.fill(0);
  }
  t.$$.dirty[e / 31 | 0] |= 1 << e % 31;
}
function Mx(t, e, r, o, n, i, a = null, f = [-1]) {
  const s = ne;
  Yt(t);
  const u = t.$$ = {
    fragment: null,
    ctx: [],
    // state
    props: i,
    update: oe,
    not_equal: n,
    bound: Or(),
    // lifecycle
    on_mount: [],
    on_destroy: [],
    on_disconnect: [],
    before_update: [],
    after_update: [],
    context: new Map(e.context || (s ? s.$$.context : [])),
    // everything else
    callbacks: Or(),
    dirty: f,
    skip_bound: false,
    root: e.target || s.$$.root
  };
  a && a(u.root);
  let d = false;
  u.ctx = r ? r(t, e.props || {}, (x, _, ...T) => {
    const F = T.length ? T[0] : _;
    if (u.ctx && n(u.ctx[x], u.ctx[x] = F)) {
      if (!u.skip_bound && u.bound[x]) u.bound[x](F);
      if (d) cl(t, x);
    }
    return _;
  }) : [];
  u.update();
  d = true;
  Gt(u.before_update);
  u.fragment = o ? o(u.ctx) : false;
  if (e.target) {
    if (e.hydrate) {
      Nn();
      const x = In(e.target);
      u.fragment && u.fragment.l(x);
      x.forEach(Pe);
    } else {
      u.fragment && u.fragment.c();
    }
    if (e.intro) Pr(t.$$.fragment);
    ll(t, e.target, e.anchor);
    Pn();
    Mr();
  }
  Yt(s);
}
var pl;
if (typeof HTMLElement === "function") {
  pl = class extends HTMLElement {
    /** The Svelte component constructor */
    $$ctor;
    /** Slots */
    $$s;
    /** The Svelte component instance */
    $$c;
    /** Whether or not the custom element is connected */
    $$cn = false;
    /** Component props data */
    $$d = {};
    /** `true` if currently in the process of reflecting component props back to attributes */
    $$r = false;
    /** @type {Record<string, CustomElementPropDefinition>} Props definition (name, reflected, type etc) */
    $$p_d = {};
    /** @type {Record<string, Function[]>} Event listeners */
    $$l = {};
    /** @type {Map<Function, Function>} Event listener unsubscribe functions */
    $$l_u = /* @__PURE__ */ new Map();
    constructor(t, e, r) {
      super();
      this.$$ctor = t;
      this.$$s = e;
      if (r) {
        this.attachShadow({ mode: "open" });
      }
    }
    addEventListener(t, e, r) {
      this.$$l[t] = this.$$l[t] || [];
      this.$$l[t].push(e);
      if (this.$$c) {
        const o = this.$$c.$on(t, e);
        this.$$l_u.set(e, o);
      }
      super.addEventListener(t, e, r);
    }
    removeEventListener(t, e, r) {
      super.removeEventListener(t, e, r);
      if (this.$$c) {
        const o = this.$$l_u.get(e);
        if (o) {
          o();
          this.$$l_u.delete(e);
        }
      }
    }
    async connectedCallback() {
      this.$$cn = true;
      if (!this.$$c) {
        let t = function(n) {
          return () => {
            let i;
            const a = {
              c: function f() {
                i = kr("slot");
                if (n !== "default") {
                  qo(i, "name", n);
                }
              },
              /**
               * @param {HTMLElement} target
               * @param {HTMLElement} [anchor]
               */
              m: function f(s, u) {
                Uo(s, i, u);
              },
              d: function f(s) {
                if (s) {
                  Pe(i);
                }
              }
            };
            return a;
          };
        };
        await Promise.resolve();
        if (!this.$$cn || this.$$c) {
          return;
        }
        const e = {};
        const r = Bn(this);
        for (const n of this.$$s) {
          if (n in r) {
            e[n] = [t(n)];
          }
        }
        for (const n of this.attributes) {
          const i = this.$$g_p(n.name);
          if (!(i in this.$$d)) {
            this.$$d[i] = Wo(i, n.value, this.$$p_d, "toProp");
          }
        }
        for (const n in this.$$p_d) {
          if (!(n in this.$$d) && this[n] !== void 0) {
            this.$$d[n] = this[n];
            delete this[n];
          }
        }
        this.$$c = new this.$$ctor({
          target: this.shadowRoot || this,
          props: {
            ...this.$$d,
            $$slots: e,
            $$scope: {
              ctx: []
            }
          }
        });
        const o = () => {
          this.$$r = true;
          for (const n in this.$$p_d) {
            this.$$d[n] = this.$$c.$$.ctx[this.$$c.$$.props[n]];
            if (this.$$p_d[n].reflect) {
              const i = Wo(
                n,
                this.$$d[n],
                this.$$p_d,
                "toAttribute"
              );
              if (i == null) {
                this.removeAttribute(this.$$p_d[n].attribute || n);
              } else {
                this.setAttribute(this.$$p_d[n].attribute || n, i);
              }
            }
          }
          this.$$r = false;
        };
        this.$$c.$$.after_update.push(o);
        o();
        for (const n in this.$$l) {
          for (const i of this.$$l[n]) {
            const a = this.$$c.$on(n, i);
            this.$$l_u.set(i, a);
          }
        }
        this.$$l = {};
      }
    }
    // We don't need this when working within Svelte code, but for compatibility of people using this outside of Svelte
    // and setting attributes through setAttribute etc, this is helpful
    attributeChangedCallback(t, e, r) {
      if (this.$$r) return;
      t = this.$$g_p(t);
      this.$$d[t] = Wo(t, r, this.$$p_d, "toProp");
      this.$$c?.$set({ [t]: this.$$d[t] });
    }
    disconnectedCallback() {
      this.$$cn = false;
      Promise.resolve().then(() => {
        if (!this.$$cn && this.$$c) {
          this.$$c.$destroy();
          this.$$c = void 0;
        }
      });
    }
    $$g_p(t) {
      return Object.keys(this.$$p_d).find(
        (e) => this.$$p_d[e].attribute === t || !this.$$p_d[e].attribute && e.toLowerCase() === t
      ) || t;
    }
  };
}
function Wo(t, e, r, o) {
  const n = r[t]?.type;
  e = n === "Boolean" && typeof e !== "boolean" ? e != null : e;
  if (!o || !r[t]) {
    return e;
  } else if (o === "toAttribute") {
    switch (n) {
      case "Object":
      case "Array":
        return e == null ? null : JSON.stringify(e);
      case "Boolean":
        return e ? "" : null;
      case "Number":
        return e == null ? null : e;
      default:
        return e;
    }
  } else {
    switch (n) {
      case "Object":
      case "Array":
        return e && JSON.parse(e);
      case "Boolean":
        return e;
      case "Number":
        return e != null ? +e : e;
      default:
        return e;
    }
  }
}
var Ko = class {
  /**
   * ### PRIVATE API
   *
   * Do not use, may change at any time
   *
   * @type {any}
   */
  $$ = void 0;
  /**
   * ### PRIVATE API
   *
   * Do not use, may change at any time
   *
   * @type {any}
   */
  $$set = void 0;
  /** @returns {void} */
  $destroy() {
    ul(this, 1);
    this.$destroy = oe;
  }
  /**
   * @template {Extract<keyof Events, string>} K
   * @param {K} type
   * @param {((e: Events[K]) => void) | null | undefined} callback
   * @returns {() => void}
   */
  $on(e, r) {
    if (!Er(r)) {
      return oe;
    }
    const o = this.$$.callbacks[e] || (this.$$.callbacks[e] = []);
    o.push(r);
    return () => {
      const n = o.indexOf(r);
      if (n !== -1) o.splice(n, 1);
    };
  }
  /**
   * @param {Partial<Props>} props
   * @returns {void}
   */
  $set(e) {
    if (this.$$set && !kn(e)) {
      this.$$.skip_bound = true;
      this.$$set(e);
      this.$$.skip_bound = false;
    }
  }
};

// ../../node_modules/svelte/src/runtime/internal/spread.js
function Hx(t, e) {
  const r = {};
  const o = {};
  const n = { $$scope: 1 };
  let i = t.length;
  while (i--) {
    const a = t[i];
    const f = e[i];
    if (f) {
      for (const s in a) {
        if (!(s in f)) o[s] = 1;
      }
      for (const s in f) {
        if (!n[s]) {
          r[s] = f[s];
          n[s] = 1;
        }
      }
      t[i] = f;
    } else {
      for (const s in a) {
        n[s] = 1;
      }
    }
  }
  for (const a in o) {
    if (!(a in r)) r[a] = void 0;
  }
  return r;
}
function Wx(t) {
  return typeof t === "object" && t !== null ? t : {};
}

// ../../node_modules/svelte/src/shared/boolean_attributes.js
var ml = (
  /** @type {const} */
  [
    "allowfullscreen",
    "allowpaymentrequest",
    "async",
    "autofocus",
    "autoplay",
    "checked",
    "controls",
    "default",
    "defer",
    "disabled",
    "formnovalidate",
    "hidden",
    "inert",
    "ismap",
    "loop",
    "multiple",
    "muted",
    "nomodule",
    "novalidate",
    "open",
    "playsinline",
    "readonly",
    "required",
    "reversed",
    "selected"
  ]
);
var dl = /* @__PURE__ */ new Set([...ml]);

// ../../node_modules/svelte/src/shared/version.js
var Hn = "4";

// ../../node_modules/svelte/src/runtime/internal/disclose-version/index.js
if (typeof window !== "undefined")
  (window.__svelte || (window.__svelte = { v: /* @__PURE__ */ new Set() })).v.add(Hn);

// ../../node_modules/lodash-es/_freeGlobal.js
var gl = typeof global == "object" && global && global.Object === Object && global;
var Lr = gl;

// ../../node_modules/lodash-es/_root.js
var bl = typeof self == "object" && self && self.Object === Object && self;
var xl = Lr || bl || Function("return this")();
var at = xl;

// ../../node_modules/lodash-es/_Symbol.js
var yl = at.Symbol;
var pt = yl;

// ../../node_modules/lodash-es/_getRawTag.js
var Wn = Object.prototype;
var _l = Wn.hasOwnProperty;
var wl = Wn.toString;
var dr = pt ? pt.toStringTag : void 0;
function vl(t) {
  var e = _l.call(t, dr), r = t[dr];
  try {
    t[dr] = void 0;
    var o = true;
  } catch (i) {
  }
  var n = wl.call(t);
  if (o) {
    if (e) {
      t[dr] = r;
    } else {
      delete t[dr];
    }
  }
  return n;
}
var Kn = vl;

// ../../node_modules/lodash-es/_objectToString.js
var $l = Object.prototype;
var Al = $l.toString;
function Ol(t) {
  return Al.call(t);
}
var Zn = Ol;

// ../../node_modules/lodash-es/_baseGetTag.js
var El = "[object Null]";
var Sl = "[object Undefined]";
var Yn = pt ? pt.toStringTag : void 0;
function Tl(t) {
  if (t == null) {
    return t === void 0 ? Sl : El;
  }
  return Yn && Yn in Object(t) ? Kn(t) : Zn(t);
}
var vt = Tl;

// ../../node_modules/lodash-es/isObjectLike.js
function kl(t) {
  return t != null && typeof t == "object";
}
var mt = kl;

// ../../node_modules/lodash-es/isNumber.js
var Cl = "[object Number]";
function Ml(t) {
  return typeof t == "number" || mt(t) && vt(t) == Cl;
}
var Zo = Ml;

// ../../node_modules/lodash-es/isNaN.js
function Nl(t) {
  return Zo(t) && t != +t;
}
var Pl = Nl;

// ../../node_modules/lodash-es/isSymbol.js
var Ll = "[object Symbol]";
function Fl(t) {
  return typeof t == "symbol" || mt(t) && vt(t) == Ll;
}
var Pt = Fl;

// ../../node_modules/lodash-es/_arrayMap.js
function Il(t, e) {
  var r = -1, o = t == null ? 0 : t.length, n = Array(o);
  while (++r < o) {
    n[r] = e(t[r], r, t);
  }
  return n;
}
var Ie = Il;

// ../../node_modules/lodash-es/isArray.js
var Bl = Array.isArray;
var J = Bl;

// ../../node_modules/lodash-es/_baseToString.js
var jl = 1 / 0;
var Xn = pt ? pt.prototype : void 0;
var Vn = Xn ? Xn.toString : void 0;
function Jn(t) {
  if (typeof t == "string") {
    return t;
  }
  if (J(t)) {
    return Ie(t, Jn) + "";
  }
  if (Pt(t)) {
    return Vn ? Vn.call(t) : "";
  }
  var e = t + "";
  return e == "0" && 1 / t == -jl ? "-0" : e;
}
var Qn = Jn;

// ../../node_modules/lodash-es/isObject.js
function Dl(t) {
  var e = typeof t;
  return t != null && (e == "object" || e == "function");
}
var _t = Dl;

// ../../node_modules/lodash-es/identity.js
function Rl(t) {
  return t;
}
var Ut = Rl;

// ../../node_modules/lodash-es/isFunction.js
var Gl = "[object AsyncFunction]";
var Ul = "[object Function]";
var ql = "[object GeneratorFunction]";
var zl = "[object Proxy]";
function Hl(t) {
  if (!_t(t)) {
    return false;
  }
  var e = vt(t);
  return e == Ul || e == ql || e == Gl || e == zl;
}
var Fr = Hl;

// ../../node_modules/lodash-es/_coreJsData.js
var Wl = at["__core-js_shared__"];
var Ir = Wl;

// ../../node_modules/lodash-es/_isMasked.js
var ti = function() {
  var t = /[^.]+$/.exec(Ir && Ir.keys && Ir.keys.IE_PROTO || "");
  return t ? "Symbol(src)_1." + t : "";
}();
function Kl(t) {
  return !!ti && ti in t;
}
var ei = Kl;

// ../../node_modules/lodash-es/_toSource.js
var Zl = Function.prototype;
var Yl = Zl.toString;
function Xl(t) {
  if (t != null) {
    try {
      return Yl.call(t);
    } catch (e) {
    }
    try {
      return t + "";
    } catch (e) {
    }
  }
  return "";
}
var Xt = Xl;

// ../../node_modules/lodash-es/_baseIsNative.js
var Vl = /[\\^$.*+?()[\]{}|]/g;
var Jl = /^\[object .+?Constructor\]$/;
var Ql = Function.prototype;
var tu = Object.prototype;
var eu = Ql.toString;
var ru = tu.hasOwnProperty;
var ou = RegExp(
  "^" + eu.call(ru).replace(Vl, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
);
function nu(t) {
  if (!_t(t) || ei(t)) {
    return false;
  }
  var e = Fr(t) ? ou : Jl;
  return e.test(Xt(t));
}
var ri = nu;

// ../../node_modules/lodash-es/_getValue.js
function iu(t, e) {
  return t == null ? void 0 : t[e];
}
var oi = iu;

// ../../node_modules/lodash-es/_getNative.js
function au(t, e) {
  var r = oi(t, e);
  return ri(r) ? r : void 0;
}
var wt = au;

// ../../node_modules/lodash-es/_WeakMap.js
var fu = wt(at, "WeakMap");
var Br = fu;

// ../../node_modules/lodash-es/_baseCreate.js
var ni = Object.create;
var su = /* @__PURE__ */ function() {
  function t() {
  }
  return function(e) {
    if (!_t(e)) {
      return {};
    }
    if (ni) {
      return ni(e);
    }
    t.prototype = e;
    var r = new t();
    t.prototype = void 0;
    return r;
  };
}();
var ii = su;

// ../../node_modules/lodash-es/_apply.js
function lu(t, e, r) {
  switch (r.length) {
    case 0:
      return t.call(e);
    case 1:
      return t.call(e, r[0]);
    case 2:
      return t.call(e, r[0], r[1]);
    case 3:
      return t.call(e, r[0], r[1], r[2]);
  }
  return t.apply(e, r);
}
var ai = lu;

// ../../node_modules/lodash-es/noop.js
function uu() {
}
var fi = uu;

// ../../node_modules/lodash-es/_copyArray.js
function cu(t, e) {
  var r = -1, o = t.length;
  e || (e = Array(o));
  while (++r < o) {
    e[r] = t[r];
  }
  return e;
}
var si = cu;

// ../../node_modules/lodash-es/_shortOut.js
var pu = 800;
var mu = 16;
var du = Date.now;
function hu(t) {
  var e = 0, r = 0;
  return function() {
    var o = du(), n = mu - (o - r);
    r = o;
    if (n > 0) {
      if (++e >= pu) {
        return arguments[0];
      }
    } else {
      e = 0;
    }
    return t.apply(void 0, arguments);
  };
}
var li = hu;

// ../../node_modules/lodash-es/constant.js
function gu(t) {
  return function() {
    return t;
  };
}
var ui = gu;

// ../../node_modules/lodash-es/_defineProperty.js
var bu = function() {
  try {
    var t = wt(Object, "defineProperty");
    t({}, "", {});
    return t;
  } catch (e) {
  }
}();
var Be = bu;

// ../../node_modules/lodash-es/_baseSetToString.js
var xu = !Be ? Ut : function(t, e) {
  return Be(t, "toString", {
    "configurable": true,
    "enumerable": false,
    "value": ui(e),
    "writable": true
  });
};
var ci = xu;

// ../../node_modules/lodash-es/_setToString.js
var yu = li(ci);
var pi = yu;

// ../../node_modules/lodash-es/_arrayEach.js
function _u(t, e) {
  var r = -1, o = t == null ? 0 : t.length;
  while (++r < o) {
    if (e(t[r], r, t) === false) {
      break;
    }
  }
  return t;
}
var mi = _u;

// ../../node_modules/lodash-es/_baseFindIndex.js
function wu(t, e, r, o) {
  var n = t.length, i = r + (o ? 1 : -1);
  while (o ? i-- : ++i < n) {
    if (e(t[i], i, t)) {
      return i;
    }
  }
  return -1;
}
var di = wu;

// ../../node_modules/lodash-es/_baseIsNaN.js
function vu(t) {
  return t !== t;
}
var hi = vu;

// ../../node_modules/lodash-es/_strictIndexOf.js
function $u(t, e, r) {
  var o = r - 1, n = t.length;
  while (++o < n) {
    if (t[o] === e) {
      return o;
    }
  }
  return -1;
}
var gi = $u;

// ../../node_modules/lodash-es/_baseIndexOf.js
function Au(t, e, r) {
  return e === e ? gi(t, e, r) : di(t, hi, r);
}
var bi = Au;

// ../../node_modules/lodash-es/_arrayIncludes.js
function Ou(t, e) {
  var r = t == null ? 0 : t.length;
  return !!r && bi(t, e, 0) > -1;
}
var xi = Ou;

// ../../node_modules/lodash-es/_isIndex.js
var Eu = 9007199254740991;
var Su = /^(?:0|[1-9]\d*)$/;
function Tu(t, e) {
  var r = typeof t;
  e = e == null ? Eu : e;
  return !!e && (r == "number" || r != "symbol" && Su.test(t)) && (t > -1 && t % 1 == 0 && t < e);
}
var je = Tu;

// ../../node_modules/lodash-es/_baseAssignValue.js
function ku(t, e, r) {
  if (e == "__proto__" && Be) {
    Be(t, e, {
      "configurable": true,
      "enumerable": true,
      "value": r,
      "writable": true
    });
  } else {
    t[e] = r;
  }
}
var De = ku;

// ../../node_modules/lodash-es/eq.js
function Cu(t, e) {
  return t === e || t !== t && e !== e;
}
var ie = Cu;

// ../../node_modules/lodash-es/_assignValue.js
var Mu = Object.prototype;
var Nu = Mu.hasOwnProperty;
function Pu(t, e, r) {
  var o = t[e];
  if (!(Nu.call(t, e) && ie(o, r)) || r === void 0 && !(e in t)) {
    De(t, e, r);
  }
}
var jr = Pu;

// ../../node_modules/lodash-es/_copyObject.js
function Lu(t, e, r, o) {
  var n = !r;
  r || (r = {});
  var i = -1, a = e.length;
  while (++i < a) {
    var f = e[i];
    var s = o ? o(r[f], t[f], f, r, t) : void 0;
    if (s === void 0) {
      s = t[f];
    }
    if (n) {
      De(r, f, s);
    } else {
      jr(r, f, s);
    }
  }
  return r;
}
var ae = Lu;

// ../../node_modules/lodash-es/_overRest.js
var yi = Math.max;
function Fu(t, e, r) {
  e = yi(e === void 0 ? t.length - 1 : e, 0);
  return function() {
    var o = arguments, n = -1, i = yi(o.length - e, 0), a = Array(i);
    while (++n < i) {
      a[n] = o[e + n];
    }
    n = -1;
    var f = Array(e + 1);
    while (++n < e) {
      f[n] = o[n];
    }
    f[e] = r(a);
    return ai(t, this, f);
  };
}
var _i = Fu;

// ../../node_modules/lodash-es/_baseRest.js
function Iu(t, e) {
  return pi(_i(t, e, Ut), t + "");
}
var wi = Iu;

// ../../node_modules/lodash-es/isLength.js
var Bu = 9007199254740991;
function ju(t) {
  return typeof t == "number" && t > -1 && t % 1 == 0 && t <= Bu;
}
var Re = ju;

// ../../node_modules/lodash-es/isArrayLike.js
function Du(t) {
  return t != null && Re(t.length) && !Fr(t);
}
var St = Du;

// ../../node_modules/lodash-es/_isIterateeCall.js
function Ru(t, e, r) {
  if (!_t(r)) {
    return false;
  }
  var o = typeof e;
  if (o == "number" ? St(r) && je(e, r.length) : o == "string" && e in r) {
    return ie(r[e], t);
  }
  return false;
}
var Yo = Ru;

// ../../node_modules/lodash-es/_isPrototype.js
var Gu = Object.prototype;
function Uu(t) {
  var e = t && t.constructor, r = typeof e == "function" && e.prototype || Gu;
  return t === r;
}
var fe = Uu;

// ../../node_modules/lodash-es/_baseTimes.js
function qu(t, e) {
  var r = -1, o = Array(t);
  while (++r < t) {
    o[r] = e(r);
  }
  return o;
}
var vi = qu;

// ../../node_modules/lodash-es/_baseIsArguments.js
var zu = "[object Arguments]";
function Hu(t) {
  return mt(t) && vt(t) == zu;
}
var Xo = Hu;

// ../../node_modules/lodash-es/isArguments.js
var $i = Object.prototype;
var Wu = $i.hasOwnProperty;
var Ku = $i.propertyIsEnumerable;
var Zu = Xo(/* @__PURE__ */ function() {
  return arguments;
}()) ? Xo : function(t) {
  return mt(t) && Wu.call(t, "callee") && !Ku.call(t, "callee");
};
var se = Zu;

// ../../node_modules/lodash-es/stubFalse.js
function Yu() {
  return false;
}
var Ai = Yu;

// ../../node_modules/lodash-es/isBuffer.js
var Si = typeof exports == "object" && exports && !exports.nodeType && exports;
var Oi = Si && typeof module == "object" && module && !module.nodeType && module;
var Xu = Oi && Oi.exports === Si;
var Ei = Xu ? at.Buffer : void 0;
var Vu = Ei ? Ei.isBuffer : void 0;
var Ju = Vu || Ai;
var Vt = Ju;

// ../../node_modules/lodash-es/_baseIsTypedArray.js
var Qu = "[object Arguments]";
var tc = "[object Array]";
var ec = "[object Boolean]";
var rc = "[object Date]";
var oc = "[object Error]";
var nc = "[object Function]";
var ic = "[object Map]";
var ac = "[object Number]";
var fc = "[object Object]";
var sc = "[object RegExp]";
var lc = "[object Set]";
var uc = "[object String]";
var cc = "[object WeakMap]";
var pc = "[object ArrayBuffer]";
var mc = "[object DataView]";
var dc = "[object Float32Array]";
var hc = "[object Float64Array]";
var gc = "[object Int8Array]";
var bc = "[object Int16Array]";
var xc = "[object Int32Array]";
var yc = "[object Uint8Array]";
var _c = "[object Uint8ClampedArray]";
var wc = "[object Uint16Array]";
var vc = "[object Uint32Array]";
var rt = {};
rt[dc] = rt[hc] = rt[gc] = rt[bc] = rt[xc] = rt[yc] = rt[_c] = rt[wc] = rt[vc] = true;
rt[Qu] = rt[tc] = rt[pc] = rt[ec] = rt[mc] = rt[rc] = rt[oc] = rt[nc] = rt[ic] = rt[ac] = rt[fc] = rt[sc] = rt[lc] = rt[uc] = rt[cc] = false;
function $c(t) {
  return mt(t) && Re(t.length) && !!rt[vt(t)];
}
var Ti = $c;

// ../../node_modules/lodash-es/_baseUnary.js
function Ac(t) {
  return function(e) {
    return t(e);
  };
}
var le = Ac;

// ../../node_modules/lodash-es/_nodeUtil.js
var ki = typeof exports == "object" && exports && !exports.nodeType && exports;
var hr = ki && typeof module == "object" && module && !module.nodeType && module;
var Oc = hr && hr.exports === ki;
var Vo = Oc && Lr.process;
var Ec = function() {
  try {
    var t = hr && hr.require && hr.require("util").types;
    if (t) {
      return t;
    }
    return Vo && Vo.binding && Vo.binding("util");
  } catch (e) {
  }
}();
var Jt = Ec;

// ../../node_modules/lodash-es/isTypedArray.js
var Ci = Jt && Jt.isTypedArray;
var Sc = Ci ? le(Ci) : Ti;
var Ge = Sc;

// ../../node_modules/lodash-es/_arrayLikeKeys.js
var Tc = Object.prototype;
var kc = Tc.hasOwnProperty;
function Cc(t, e) {
  var r = J(t), o = !r && se(t), n = !r && !o && Vt(t), i = !r && !o && !n && Ge(t), a = r || o || n || i, f = a ? vi(t.length, String) : [], s = f.length;
  for (var u in t) {
    if ((e || kc.call(t, u)) && !(a && // Safari 9 has enumerable `arguments.length` in strict mode.
    (u == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
    n && (u == "offset" || u == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
    i && (u == "buffer" || u == "byteLength" || u == "byteOffset") || // Skip index properties.
    je(u, s)))) {
      f.push(u);
    }
  }
  return f;
}
var Dr = Cc;

// ../../node_modules/lodash-es/_overArg.js
function Mc(t, e) {
  return function(r) {
    return t(e(r));
  };
}
var Rr = Mc;

// ../../node_modules/lodash-es/_nativeKeys.js
var Nc = Rr(Object.keys, Object);
var Mi = Nc;

// ../../node_modules/lodash-es/_baseKeys.js
var Pc = Object.prototype;
var Lc = Pc.hasOwnProperty;
function Fc(t) {
  if (!fe(t)) {
    return Mi(t);
  }
  var e = [];
  for (var r in Object(t)) {
    if (Lc.call(t, r) && r != "constructor") {
      e.push(r);
    }
  }
  return e;
}
var Gr = Fc;

// ../../node_modules/lodash-es/keys.js
function Ic(t) {
  return St(t) ? Dr(t) : Gr(t);
}
var qt = Ic;

// ../../node_modules/lodash-es/_nativeKeysIn.js
function Bc(t) {
  var e = [];
  if (t != null) {
    for (var r in Object(t)) {
      e.push(r);
    }
  }
  return e;
}
var Ni = Bc;

// ../../node_modules/lodash-es/_baseKeysIn.js
var jc = Object.prototype;
var Dc = jc.hasOwnProperty;
function Rc(t) {
  if (!_t(t)) {
    return Ni(t);
  }
  var e = fe(t), r = [];
  for (var o in t) {
    if (!(o == "constructor" && (e || !Dc.call(t, o)))) {
      r.push(o);
    }
  }
  return r;
}
var Pi = Rc;

// ../../node_modules/lodash-es/keysIn.js
function Gc(t) {
  return St(t) ? Dr(t, true) : Pi(t);
}
var Ue = Gc;

// ../../node_modules/lodash-es/_isKey.js
var Uc = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/;
var qc = /^\w*$/;
function zc(t, e) {
  if (J(t)) {
    return false;
  }
  var r = typeof t;
  if (r == "number" || r == "symbol" || r == "boolean" || t == null || Pt(t)) {
    return true;
  }
  return qc.test(t) || !Uc.test(t) || e != null && t in Object(e);
}
var qe = zc;

// ../../node_modules/lodash-es/_nativeCreate.js
var Hc = wt(Object, "create");
var Qt = Hc;

// ../../node_modules/lodash-es/_hashClear.js
function Wc() {
  this.__data__ = Qt ? Qt(null) : {};
  this.size = 0;
}
var Li = Wc;

// ../../node_modules/lodash-es/_hashDelete.js
function Kc(t) {
  var e = this.has(t) && delete this.__data__[t];
  this.size -= e ? 1 : 0;
  return e;
}
var Fi = Kc;

// ../../node_modules/lodash-es/_hashGet.js
var Zc = "__lodash_hash_undefined__";
var Yc = Object.prototype;
var Xc = Yc.hasOwnProperty;
function Vc(t) {
  var e = this.__data__;
  if (Qt) {
    var r = e[t];
    return r === Zc ? void 0 : r;
  }
  return Xc.call(e, t) ? e[t] : void 0;
}
var Ii = Vc;

// ../../node_modules/lodash-es/_hashHas.js
var Jc = Object.prototype;
var Qc = Jc.hasOwnProperty;
function tp(t) {
  var e = this.__data__;
  return Qt ? e[t] !== void 0 : Qc.call(e, t);
}
var Bi = tp;

// ../../node_modules/lodash-es/_hashSet.js
var ep = "__lodash_hash_undefined__";
function rp(t, e) {
  var r = this.__data__;
  this.size += this.has(t) ? 0 : 1;
  r[t] = Qt && e === void 0 ? ep : e;
  return this;
}
var ji = rp;

// ../../node_modules/lodash-es/_Hash.js
function ze(t) {
  var e = -1, r = t == null ? 0 : t.length;
  this.clear();
  while (++e < r) {
    var o = t[e];
    this.set(o[0], o[1]);
  }
}
ze.prototype.clear = Li;
ze.prototype["delete"] = Fi;
ze.prototype.get = Ii;
ze.prototype.has = Bi;
ze.prototype.set = ji;
var Jo = ze;

// ../../node_modules/lodash-es/_listCacheClear.js
function op() {
  this.__data__ = [];
  this.size = 0;
}
var Di = op;

// ../../node_modules/lodash-es/_assocIndexOf.js
function np(t, e) {
  var r = t.length;
  while (r--) {
    if (ie(t[r][0], e)) {
      return r;
    }
  }
  return -1;
}
var ue = np;

// ../../node_modules/lodash-es/_listCacheDelete.js
var ip = Array.prototype;
var ap = ip.splice;
function fp(t) {
  var e = this.__data__, r = ue(e, t);
  if (r < 0) {
    return false;
  }
  var o = e.length - 1;
  if (r == o) {
    e.pop();
  } else {
    ap.call(e, r, 1);
  }
  --this.size;
  return true;
}
var Ri = fp;

// ../../node_modules/lodash-es/_listCacheGet.js
function sp(t) {
  var e = this.__data__, r = ue(e, t);
  return r < 0 ? void 0 : e[r][1];
}
var Gi = sp;

// ../../node_modules/lodash-es/_listCacheHas.js
function lp(t) {
  return ue(this.__data__, t) > -1;
}
var Ui = lp;

// ../../node_modules/lodash-es/_listCacheSet.js
function up(t, e) {
  var r = this.__data__, o = ue(r, t);
  if (o < 0) {
    ++this.size;
    r.push([t, e]);
  } else {
    r[o][1] = e;
  }
  return this;
}
var qi = up;

// ../../node_modules/lodash-es/_ListCache.js
function He(t) {
  var e = -1, r = t == null ? 0 : t.length;
  this.clear();
  while (++e < r) {
    var o = t[e];
    this.set(o[0], o[1]);
  }
}
He.prototype.clear = Di;
He.prototype["delete"] = Ri;
He.prototype.get = Gi;
He.prototype.has = Ui;
He.prototype.set = qi;
var ce = He;

// ../../node_modules/lodash-es/_Map.js
var cp = wt(at, "Map");
var pe = cp;

// ../../node_modules/lodash-es/_mapCacheClear.js
function pp() {
  this.size = 0;
  this.__data__ = {
    "hash": new Jo(),
    "map": new (pe || ce)(),
    "string": new Jo()
  };
}
var zi = pp;

// ../../node_modules/lodash-es/_isKeyable.js
function mp(t) {
  var e = typeof t;
  return e == "string" || e == "number" || e == "symbol" || e == "boolean" ? t !== "__proto__" : t === null;
}
var Hi = mp;

// ../../node_modules/lodash-es/_getMapData.js
function dp(t, e) {
  var r = t.__data__;
  return Hi(e) ? r[typeof e == "string" ? "string" : "hash"] : r.map;
}
var me = dp;

// ../../node_modules/lodash-es/_mapCacheDelete.js
function hp(t) {
  var e = me(this, t)["delete"](t);
  this.size -= e ? 1 : 0;
  return e;
}
var Wi = hp;

// ../../node_modules/lodash-es/_mapCacheGet.js
function gp(t) {
  return me(this, t).get(t);
}
var Ki = gp;

// ../../node_modules/lodash-es/_mapCacheHas.js
function bp(t) {
  return me(this, t).has(t);
}
var Zi = bp;

// ../../node_modules/lodash-es/_mapCacheSet.js
function xp(t, e) {
  var r = me(this, t), o = r.size;
  r.set(t, e);
  this.size += r.size == o ? 0 : 1;
  return this;
}
var Yi = xp;

// ../../node_modules/lodash-es/_MapCache.js
function We(t) {
  var e = -1, r = t == null ? 0 : t.length;
  this.clear();
  while (++e < r) {
    var o = t[e];
    this.set(o[0], o[1]);
  }
}
We.prototype.clear = zi;
We.prototype["delete"] = Wi;
We.prototype.get = Ki;
We.prototype.has = Zi;
We.prototype.set = Yi;
var Ee = We;

// ../../node_modules/lodash-es/memoize.js
var yp = "Expected a function";
function Qo(t, e) {
  if (typeof t != "function" || e != null && typeof e != "function") {
    throw new TypeError(yp);
  }
  var r = function() {
    var o = arguments, n = e ? e.apply(this, o) : o[0], i = r.cache;
    if (i.has(n)) {
      return i.get(n);
    }
    var a = t.apply(this, o);
    r.cache = i.set(n, a) || i;
    return a;
  };
  r.cache = new (Qo.Cache || Ee)();
  return r;
}
Qo.Cache = Ee;
var tn = Qo;

// ../../node_modules/lodash-es/_memoizeCapped.js
var _p = 500;
function wp(t) {
  var e = tn(t, function(o) {
    if (r.size === _p) {
      r.clear();
    }
    return o;
  });
  var r = e.cache;
  return e;
}
var Xi = wp;

// ../../node_modules/lodash-es/_stringToPath.js
var vp = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g;
var $p = /\\(\\)?/g;
var Ap = Xi(function(t) {
  var e = [];
  if (t.charCodeAt(0) === 46) {
    e.push("");
  }
  t.replace(vp, function(r, o, n, i) {
    e.push(n ? i.replace($p, "$1") : o || r);
  });
  return e;
});
var Vi = Ap;

// ../../node_modules/lodash-es/toString.js
function Op(t) {
  return t == null ? "" : Qn(t);
}
var Ji = Op;

// ../../node_modules/lodash-es/_castPath.js
function Ep(t, e) {
  if (J(t)) {
    return t;
  }
  return qe(t, e) ? [t] : Vi(Ji(t));
}
var Ur = Ep;

// ../../node_modules/lodash-es/_toKey.js
var Sp = 1 / 0;
function Tp(t) {
  if (typeof t == "string" || Pt(t)) {
    return t;
  }
  var e = t + "";
  return e == "0" && 1 / t == -Sp ? "-0" : e;
}
var de = Tp;

// ../../node_modules/lodash-es/_baseGet.js
function kp(t, e) {
  e = Ur(e, t);
  var r = 0, o = e.length;
  while (t != null && r < o) {
    t = t[de(e[r++])];
  }
  return r && r == o ? t : void 0;
}
var Ke = kp;

// ../../node_modules/lodash-es/get.js
function Cp(t, e, r) {
  var o = t == null ? void 0 : Ke(t, e);
  return o === void 0 ? r : o;
}
var Qi = Cp;

// ../../node_modules/lodash-es/_arrayPush.js
function Mp(t, e) {
  var r = -1, o = e.length, n = t.length;
  while (++r < o) {
    t[n + r] = e[r];
  }
  return t;
}
var Ze = Mp;

// ../../node_modules/lodash-es/_isFlattenable.js
var ta = pt ? pt.isConcatSpreadable : void 0;
function Np(t) {
  return J(t) || se(t) || !!(ta && t && t[ta]);
}
var ea = Np;

// ../../node_modules/lodash-es/_baseFlatten.js
function ra(t, e, r, o, n) {
  var i = -1, a = t.length;
  r || (r = ea);
  n || (n = []);
  while (++i < a) {
    var f = t[i];
    if (e > 0 && r(f)) {
      if (e > 1) {
        ra(f, e - 1, r, o, n);
      } else {
        Ze(n, f);
      }
    } else if (!o) {
      n[n.length] = f;
    }
  }
  return n;
}
var oa = ra;

// ../../node_modules/lodash-es/_getPrototype.js
var Pp = Rr(Object.getPrototypeOf, Object);
var qr = Pp;

// ../../node_modules/lodash-es/_stackClear.js
function Lp() {
  this.__data__ = new ce();
  this.size = 0;
}
var na = Lp;

// ../../node_modules/lodash-es/_stackDelete.js
function Fp(t) {
  var e = this.__data__, r = e["delete"](t);
  this.size = e.size;
  return r;
}
var ia = Fp;

// ../../node_modules/lodash-es/_stackGet.js
function Ip(t) {
  return this.__data__.get(t);
}
var aa = Ip;

// ../../node_modules/lodash-es/_stackHas.js
function Bp(t) {
  return this.__data__.has(t);
}
var fa = Bp;

// ../../node_modules/lodash-es/_stackSet.js
var jp = 200;
function Dp(t, e) {
  var r = this.__data__;
  if (r instanceof ce) {
    var o = r.__data__;
    if (!pe || o.length < jp - 1) {
      o.push([t, e]);
      this.size = ++r.size;
      return this;
    }
    r = this.__data__ = new Ee(o);
  }
  r.set(t, e);
  this.size = r.size;
  return this;
}
var sa = Dp;

// ../../node_modules/lodash-es/_Stack.js
function Ye(t) {
  var e = this.__data__ = new ce(t);
  this.size = e.size;
}
Ye.prototype.clear = na;
Ye.prototype["delete"] = ia;
Ye.prototype.get = aa;
Ye.prototype.has = fa;
Ye.prototype.set = sa;
var he = Ye;

// ../../node_modules/lodash-es/_baseAssign.js
function Rp(t, e) {
  return t && ae(e, qt(e), t);
}
var la = Rp;

// ../../node_modules/lodash-es/_baseAssignIn.js
function Gp(t, e) {
  return t && ae(e, Ue(e), t);
}
var ua = Gp;

// ../../node_modules/lodash-es/_cloneBuffer.js
var da = typeof exports == "object" && exports && !exports.nodeType && exports;
var ca = da && typeof module == "object" && module && !module.nodeType && module;
var Up = ca && ca.exports === da;
var pa = Up ? at.Buffer : void 0;
var ma = pa ? pa.allocUnsafe : void 0;
function qp(t, e) {
  if (e) {
    return t.slice();
  }
  var r = t.length, o = ma ? ma(r) : new t.constructor(r);
  t.copy(o);
  return o;
}
var ha = qp;

// ../../node_modules/lodash-es/_arrayFilter.js
function zp(t, e) {
  var r = -1, o = t == null ? 0 : t.length, n = 0, i = [];
  while (++r < o) {
    var a = t[r];
    if (e(a, r, t)) {
      i[n++] = a;
    }
  }
  return i;
}
var ga = zp;

// ../../node_modules/lodash-es/stubArray.js
function Hp() {
  return [];
}
var zr = Hp;

// ../../node_modules/lodash-es/_getSymbols.js
var Wp = Object.prototype;
var Kp = Wp.propertyIsEnumerable;
var ba = Object.getOwnPropertySymbols;
var Zp = !ba ? zr : function(t) {
  if (t == null) {
    return [];
  }
  t = Object(t);
  return ga(ba(t), function(e) {
    return Kp.call(t, e);
  });
};
var Xe = Zp;

// ../../node_modules/lodash-es/_copySymbols.js
function Yp(t, e) {
  return ae(t, Xe(t), e);
}
var xa = Yp;

// ../../node_modules/lodash-es/_getSymbolsIn.js
var Xp = Object.getOwnPropertySymbols;
var Vp = !Xp ? zr : function(t) {
  var e = [];
  while (t) {
    Ze(e, Xe(t));
    t = qr(t);
  }
  return e;
};
var Hr = Vp;

// ../../node_modules/lodash-es/_copySymbolsIn.js
function Jp(t, e) {
  return ae(t, Hr(t), e);
}
var ya = Jp;

// ../../node_modules/lodash-es/_baseGetAllKeys.js
function Qp(t, e, r) {
  var o = e(t);
  return J(t) ? o : Ze(o, r(t));
}
var Wr = Qp;

// ../../node_modules/lodash-es/_getAllKeys.js
function tm(t) {
  return Wr(t, qt, Xe);
}
var gr = tm;

// ../../node_modules/lodash-es/_getAllKeysIn.js
function em(t) {
  return Wr(t, Ue, Hr);
}
var _a = em;

// ../../node_modules/lodash-es/_DataView.js
var rm = wt(at, "DataView");
var Kr = rm;

// ../../node_modules/lodash-es/_Promise.js
var om = wt(at, "Promise");
var Zr = om;

// ../../node_modules/lodash-es/_Set.js
var nm = wt(at, "Set");
var ge = nm;

// ../../node_modules/lodash-es/_getTag.js
var wa = "[object Map]";
var im = "[object Object]";
var va = "[object Promise]";
var $a = "[object Set]";
var Aa = "[object WeakMap]";
var Oa = "[object DataView]";
var am = Xt(Kr);
var fm = Xt(pe);
var sm = Xt(Zr);
var lm = Xt(ge);
var um = Xt(Br);
var Se = vt;
if (Kr && Se(new Kr(new ArrayBuffer(1))) != Oa || pe && Se(new pe()) != wa || Zr && Se(Zr.resolve()) != va || ge && Se(new ge()) != $a || Br && Se(new Br()) != Aa) {
  Se = function(t) {
    var e = vt(t), r = e == im ? t.constructor : void 0, o = r ? Xt(r) : "";
    if (o) {
      switch (o) {
        case am:
          return Oa;
        case fm:
          return wa;
        case sm:
          return va;
        case lm:
          return $a;
        case um:
          return Aa;
      }
    }
    return e;
  };
}
var Lt = Se;

// ../../node_modules/lodash-es/_initCloneArray.js
var cm = Object.prototype;
var pm = cm.hasOwnProperty;
function mm(t) {
  var e = t.length, r = new t.constructor(e);
  if (e && typeof t[0] == "string" && pm.call(t, "index")) {
    r.index = t.index;
    r.input = t.input;
  }
  return r;
}
var Ea = mm;

// ../../node_modules/lodash-es/_Uint8Array.js
var dm = at.Uint8Array;
var Ve = dm;

// ../../node_modules/lodash-es/_cloneArrayBuffer.js
function hm(t) {
  var e = new t.constructor(t.byteLength);
  new Ve(e).set(new Ve(t));
  return e;
}
var Je = hm;

// ../../node_modules/lodash-es/_cloneDataView.js
function gm(t, e) {
  var r = e ? Je(t.buffer) : t.buffer;
  return new t.constructor(r, t.byteOffset, t.byteLength);
}
var Sa = gm;

// ../../node_modules/lodash-es/_cloneRegExp.js
var bm = /\w*$/;
function xm(t) {
  var e = new t.constructor(t.source, bm.exec(t));
  e.lastIndex = t.lastIndex;
  return e;
}
var Ta = xm;

// ../../node_modules/lodash-es/_cloneSymbol.js
var ka = pt ? pt.prototype : void 0;
var Ca = ka ? ka.valueOf : void 0;
function ym(t) {
  return Ca ? Object(Ca.call(t)) : {};
}
var Ma = ym;

// ../../node_modules/lodash-es/_cloneTypedArray.js
function _m(t, e) {
  var r = e ? Je(t.buffer) : t.buffer;
  return new t.constructor(r, t.byteOffset, t.length);
}
var Na = _m;

// ../../node_modules/lodash-es/_initCloneByTag.js
var wm = "[object Boolean]";
var vm = "[object Date]";
var $m = "[object Map]";
var Am = "[object Number]";
var Om = "[object RegExp]";
var Em = "[object Set]";
var Sm = "[object String]";
var Tm = "[object Symbol]";
var km = "[object ArrayBuffer]";
var Cm = "[object DataView]";
var Mm = "[object Float32Array]";
var Nm = "[object Float64Array]";
var Pm = "[object Int8Array]";
var Lm = "[object Int16Array]";
var Fm = "[object Int32Array]";
var Im = "[object Uint8Array]";
var Bm = "[object Uint8ClampedArray]";
var jm = "[object Uint16Array]";
var Dm = "[object Uint32Array]";
function Rm(t, e, r) {
  var o = t.constructor;
  switch (e) {
    case km:
      return Je(t);
    case wm:
    case vm:
      return new o(+t);
    case Cm:
      return Sa(t, r);
    case Mm:
    case Nm:
    case Pm:
    case Lm:
    case Fm:
    case Im:
    case Bm:
    case jm:
    case Dm:
      return Na(t, r);
    case $m:
      return new o();
    case Am:
    case Sm:
      return new o(t);
    case Om:
      return Ta(t);
    case Em:
      return new o();
    case Tm:
      return Ma(t);
  }
}
var Pa = Rm;

// ../../node_modules/lodash-es/_initCloneObject.js
function Gm(t) {
  return typeof t.constructor == "function" && !fe(t) ? ii(qr(t)) : {};
}
var La = Gm;

// ../../node_modules/lodash-es/_baseIsMap.js
var Um = "[object Map]";
function qm(t) {
  return mt(t) && Lt(t) == Um;
}
var Fa = qm;

// ../../node_modules/lodash-es/isMap.js
var Ia = Jt && Jt.isMap;
var zm = Ia ? le(Ia) : Fa;
var Ba = zm;

// ../../node_modules/lodash-es/_baseIsSet.js
var Hm = "[object Set]";
function Wm(t) {
  return mt(t) && Lt(t) == Hm;
}
var ja = Wm;

// ../../node_modules/lodash-es/isSet.js
var Da = Jt && Jt.isSet;
var Km = Da ? le(Da) : ja;
var Ra = Km;

// ../../node_modules/lodash-es/_baseClone.js
var Zm = 1;
var Ym = 2;
var Xm = 4;
var Ga = "[object Arguments]";
var Vm = "[object Array]";
var Jm = "[object Boolean]";
var Qm = "[object Date]";
var td = "[object Error]";
var Ua = "[object Function]";
var ed = "[object GeneratorFunction]";
var rd = "[object Map]";
var od = "[object Number]";
var qa = "[object Object]";
var nd = "[object RegExp]";
var id = "[object Set]";
var ad = "[object String]";
var fd = "[object Symbol]";
var sd = "[object WeakMap]";
var ld = "[object ArrayBuffer]";
var ud = "[object DataView]";
var cd = "[object Float32Array]";
var pd = "[object Float64Array]";
var md = "[object Int8Array]";
var dd = "[object Int16Array]";
var hd = "[object Int32Array]";
var gd = "[object Uint8Array]";
var bd = "[object Uint8ClampedArray]";
var xd = "[object Uint16Array]";
var yd = "[object Uint32Array]";
var et = {};
et[Ga] = et[Vm] = et[ld] = et[ud] = et[Jm] = et[Qm] = et[cd] = et[pd] = et[md] = et[dd] = et[hd] = et[rd] = et[od] = et[qa] = et[nd] = et[id] = et[ad] = et[fd] = et[gd] = et[bd] = et[xd] = et[yd] = true;
et[td] = et[Ua] = et[sd] = false;
function Yr(t, e, r, o, n, i) {
  var a, f = e & Zm, s = e & Ym, u = e & Xm;
  if (r) {
    a = n ? r(t, o, n, i) : r(t);
  }
  if (a !== void 0) {
    return a;
  }
  if (!_t(t)) {
    return t;
  }
  var d = J(t);
  if (d) {
    a = Ea(t);
    if (!f) {
      return si(t, a);
    }
  } else {
    var x = Lt(t), _ = x == Ua || x == ed;
    if (Vt(t)) {
      return ha(t, f);
    }
    if (x == qa || x == Ga || _ && !n) {
      a = s || _ ? {} : La(t);
      if (!f) {
        return s ? ya(t, ua(a, t)) : xa(t, la(a, t));
      }
    } else {
      if (!et[x]) {
        return n ? t : {};
      }
      a = Pa(t, x, f);
    }
  }
  i || (i = new he());
  var T = i.get(t);
  if (T) {
    return T;
  }
  i.set(t, a);
  if (Ra(t)) {
    t.forEach(function(S) {
      a.add(Yr(S, e, r, S, t, i));
    });
  } else if (Ba(t)) {
    t.forEach(function(S, M) {
      a.set(M, Yr(S, e, r, M, t, i));
    });
  }
  var F = u ? s ? _a : gr : s ? Ue : qt;
  var I = d ? void 0 : F(t);
  mi(I || t, function(S, M) {
    if (I) {
      M = S;
      S = t[M];
    }
    jr(a, M, Yr(S, e, r, M, t, i));
  });
  return a;
}
var za = Yr;

// ../../node_modules/lodash-es/cloneDeep.js
var _d = 1;
var wd = 4;
function vd(t) {
  return za(t, _d | wd);
}
var $d = vd;

// ../../node_modules/lodash-es/_setCacheAdd.js
var Ad = "__lodash_hash_undefined__";
function Od(t) {
  this.__data__.set(t, Ad);
  return this;
}
var Ha = Od;

// ../../node_modules/lodash-es/_setCacheHas.js
function Ed(t) {
  return this.__data__.has(t);
}
var Wa = Ed;

// ../../node_modules/lodash-es/_SetCache.js
function Xr(t) {
  var e = -1, r = t == null ? 0 : t.length;
  this.__data__ = new Ee();
  while (++e < r) {
    this.add(t[e]);
  }
}
Xr.prototype.add = Xr.prototype.push = Ha;
Xr.prototype.has = Wa;
var Vr = Xr;

// ../../node_modules/lodash-es/_arraySome.js
function Sd(t, e) {
  var r = -1, o = t == null ? 0 : t.length;
  while (++r < o) {
    if (e(t[r], r, t)) {
      return true;
    }
  }
  return false;
}
var Ka = Sd;

// ../../node_modules/lodash-es/_cacheHas.js
function Td(t, e) {
  return t.has(e);
}
var Jr = Td;

// ../../node_modules/lodash-es/_equalArrays.js
var kd = 1;
var Cd = 2;
function Md(t, e, r, o, n, i) {
  var a = r & kd, f = t.length, s = e.length;
  if (f != s && !(a && s > f)) {
    return false;
  }
  var u = i.get(t);
  var d = i.get(e);
  if (u && d) {
    return u == e && d == t;
  }
  var x = -1, _ = true, T = r & Cd ? new Vr() : void 0;
  i.set(t, e);
  i.set(e, t);
  while (++x < f) {
    var F = t[x], I = e[x];
    if (o) {
      var S = a ? o(I, F, x, e, t, i) : o(F, I, x, t, e, i);
    }
    if (S !== void 0) {
      if (S) {
        continue;
      }
      _ = false;
      break;
    }
    if (T) {
      if (!Ka(e, function(M, j) {
        if (!Jr(T, j) && (F === M || n(F, M, r, o, i))) {
          return T.push(j);
        }
      })) {
        _ = false;
        break;
      }
    } else if (!(F === I || n(F, I, r, o, i))) {
      _ = false;
      break;
    }
  }
  i["delete"](t);
  i["delete"](e);
  return _;
}
var Qr = Md;

// ../../node_modules/lodash-es/_mapToArray.js
function Nd(t) {
  var e = -1, r = Array(t.size);
  t.forEach(function(o, n) {
    r[++e] = [n, o];
  });
  return r;
}
var Za = Nd;

// ../../node_modules/lodash-es/_setToArray.js
function Pd(t) {
  var e = -1, r = Array(t.size);
  t.forEach(function(o) {
    r[++e] = o;
  });
  return r;
}
var Qe = Pd;

// ../../node_modules/lodash-es/_equalByTag.js
var Ld = 1;
var Fd = 2;
var Id = "[object Boolean]";
var Bd = "[object Date]";
var jd = "[object Error]";
var Dd = "[object Map]";
var Rd = "[object Number]";
var Gd = "[object RegExp]";
var Ud = "[object Set]";
var qd = "[object String]";
var zd = "[object Symbol]";
var Hd = "[object ArrayBuffer]";
var Wd = "[object DataView]";
var Ya = pt ? pt.prototype : void 0;
var en = Ya ? Ya.valueOf : void 0;
function Kd(t, e, r, o, n, i, a) {
  switch (r) {
    case Wd:
      if (t.byteLength != e.byteLength || t.byteOffset != e.byteOffset) {
        return false;
      }
      t = t.buffer;
      e = e.buffer;
    case Hd:
      if (t.byteLength != e.byteLength || !i(new Ve(t), new Ve(e))) {
        return false;
      }
      return true;
    case Id:
    case Bd:
    case Rd:
      return ie(+t, +e);
    case jd:
      return t.name == e.name && t.message == e.message;
    case Gd:
    case qd:
      return t == e + "";
    case Dd:
      var f = Za;
    case Ud:
      var s = o & Ld;
      f || (f = Qe);
      if (t.size != e.size && !s) {
        return false;
      }
      var u = a.get(t);
      if (u) {
        return u == e;
      }
      o |= Fd;
      a.set(t, e);
      var d = Qr(f(t), f(e), o, n, i, a);
      a["delete"](t);
      return d;
    case zd:
      if (en) {
        return en.call(t) == en.call(e);
      }
  }
  return false;
}
var Xa = Kd;

// ../../node_modules/lodash-es/_equalObjects.js
var Zd = 1;
var Yd = Object.prototype;
var Xd = Yd.hasOwnProperty;
function Vd(t, e, r, o, n, i) {
  var a = r & Zd, f = gr(t), s = f.length, u = gr(e), d = u.length;
  if (s != d && !a) {
    return false;
  }
  var x = s;
  while (x--) {
    var _ = f[x];
    if (!(a ? _ in e : Xd.call(e, _))) {
      return false;
    }
  }
  var T = i.get(t);
  var F = i.get(e);
  if (T && F) {
    return T == e && F == t;
  }
  var I = true;
  i.set(t, e);
  i.set(e, t);
  var S = a;
  while (++x < s) {
    _ = f[x];
    var M = t[_], j = e[_];
    if (o) {
      var Y = a ? o(j, M, _, e, t, i) : o(M, j, _, t, e, i);
    }
    if (!(Y === void 0 ? M === j || n(M, j, r, o, i) : Y)) {
      I = false;
      break;
    }
    S || (S = _ == "constructor");
  }
  if (I && !S) {
    var Z = t.constructor, H = e.constructor;
    if (Z != H && ("constructor" in t && "constructor" in e) && !(typeof Z == "function" && Z instanceof Z && typeof H == "function" && H instanceof H)) {
      I = false;
    }
  }
  i["delete"](t);
  i["delete"](e);
  return I;
}
var Va = Vd;

// ../../node_modules/lodash-es/_baseIsEqualDeep.js
var Jd = 1;
var Ja = "[object Arguments]";
var Qa = "[object Array]";
var to = "[object Object]";
var Qd = Object.prototype;
var tf = Qd.hasOwnProperty;
function t0(t, e, r, o, n, i) {
  var a = J(t), f = J(e), s = a ? Qa : Lt(t), u = f ? Qa : Lt(e);
  s = s == Ja ? to : s;
  u = u == Ja ? to : u;
  var d = s == to, x = u == to, _ = s == u;
  if (_ && Vt(t)) {
    if (!Vt(e)) {
      return false;
    }
    a = true;
    d = false;
  }
  if (_ && !d) {
    i || (i = new he());
    return a || Ge(t) ? Qr(t, e, r, o, n, i) : Xa(t, e, s, r, o, n, i);
  }
  if (!(r & Jd)) {
    var T = d && tf.call(t, "__wrapped__"), F = x && tf.call(e, "__wrapped__");
    if (T || F) {
      var I = T ? t.value() : t, S = F ? e.value() : e;
      i || (i = new he());
      return n(I, S, r, o, i);
    }
  }
  if (!_) {
    return false;
  }
  i || (i = new he());
  return Va(t, e, r, o, n, i);
}
var ef = t0;

// ../../node_modules/lodash-es/_baseIsEqual.js
function rf(t, e, r, o, n) {
  if (t === e) {
    return true;
  }
  if (t == null || e == null || !mt(t) && !mt(e)) {
    return t !== t && e !== e;
  }
  return ef(t, e, r, o, rf, n);
}
var eo = rf;

// ../../node_modules/lodash-es/_baseIsMatch.js
var e0 = 1;
var r0 = 2;
function o0(t, e, r, o) {
  var n = r.length, i = n, a = !o;
  if (t == null) {
    return !i;
  }
  t = Object(t);
  while (n--) {
    var f = r[n];
    if (a && f[2] ? f[1] !== t[f[0]] : !(f[0] in t)) {
      return false;
    }
  }
  while (++n < i) {
    f = r[n];
    var s = f[0], u = t[s], d = f[1];
    if (a && f[2]) {
      if (u === void 0 && !(s in t)) {
        return false;
      }
    } else {
      var x = new he();
      if (o) {
        var _ = o(u, d, s, t, e, x);
      }
      if (!(_ === void 0 ? eo(d, u, e0 | r0, o, x) : _)) {
        return false;
      }
    }
  }
  return true;
}
var of = o0;

// ../../node_modules/lodash-es/_isStrictComparable.js
function n0(t) {
  return t === t && !_t(t);
}
var ro = n0;

// ../../node_modules/lodash-es/_getMatchData.js
function i0(t) {
  var e = qt(t), r = e.length;
  while (r--) {
    var o = e[r], n = t[o];
    e[r] = [o, n, ro(n)];
  }
  return e;
}
var nf = i0;

// ../../node_modules/lodash-es/_matchesStrictComparable.js
function a0(t, e) {
  return function(r) {
    if (r == null) {
      return false;
    }
    return r[t] === e && (e !== void 0 || t in Object(r));
  };
}
var oo = a0;

// ../../node_modules/lodash-es/_baseMatches.js
function f0(t) {
  var e = nf(t);
  if (e.length == 1 && e[0][2]) {
    return oo(e[0][0], e[0][1]);
  }
  return function(r) {
    return r === t || of(r, t, e);
  };
}
var af = f0;

// ../../node_modules/lodash-es/_baseHasIn.js
function s0(t, e) {
  return t != null && e in Object(t);
}
var ff = s0;

// ../../node_modules/lodash-es/_hasPath.js
function l0(t, e, r) {
  e = Ur(e, t);
  var o = -1, n = e.length, i = false;
  while (++o < n) {
    var a = de(e[o]);
    if (!(i = t != null && r(t, a))) {
      break;
    }
    t = t[a];
  }
  if (i || ++o != n) {
    return i;
  }
  n = t == null ? 0 : t.length;
  return !!n && Re(n) && je(a, n) && (J(t) || se(t));
}
var sf = l0;

// ../../node_modules/lodash-es/hasIn.js
function u0(t, e) {
  return t != null && sf(t, e, ff);
}
var lf = u0;

// ../../node_modules/lodash-es/_baseMatchesProperty.js
var c0 = 1;
var p0 = 2;
function m0(t, e) {
  if (qe(t) && ro(e)) {
    return oo(de(t), e);
  }
  return function(r) {
    var o = Qi(r, t);
    return o === void 0 && o === e ? lf(r, t) : eo(e, o, c0 | p0);
  };
}
var uf = m0;

// ../../node_modules/lodash-es/_baseProperty.js
function d0(t) {
  return function(e) {
    return e == null ? void 0 : e[t];
  };
}
var cf = d0;

// ../../node_modules/lodash-es/_basePropertyDeep.js
function h0(t) {
  return function(e) {
    return Ke(e, t);
  };
}
var pf = h0;

// ../../node_modules/lodash-es/property.js
function g0(t) {
  return qe(t) ? cf(de(t)) : pf(t);
}
var mf = g0;

// ../../node_modules/lodash-es/_baseIteratee.js
function b0(t) {
  if (typeof t == "function") {
    return t;
  }
  if (t == null) {
    return Ut;
  }
  if (typeof t == "object") {
    return J(t) ? uf(t[0], t[1]) : af(t);
  }
  return mf(t);
}
var be = b0;

// ../../node_modules/lodash-es/_arrayAggregator.js
function x0(t, e, r, o) {
  var n = -1, i = t == null ? 0 : t.length;
  while (++n < i) {
    var a = t[n];
    e(o, a, r(a), t);
  }
  return o;
}
var df = x0;

// ../../node_modules/lodash-es/_createBaseFor.js
function y0(t) {
  return function(e, r, o) {
    var n = -1, i = Object(e), a = o(e), f = a.length;
    while (f--) {
      var s = a[t ? f : ++n];
      if (r(i[s], s, i) === false) {
        break;
      }
    }
    return e;
  };
}
var hf = y0;

// ../../node_modules/lodash-es/_baseFor.js
var _0 = hf();
var gf = _0;

// ../../node_modules/lodash-es/_baseForOwn.js
function w0(t, e) {
  return t && gf(t, e, qt);
}
var bf = w0;

// ../../node_modules/lodash-es/_createBaseEach.js
function v0(t, e) {
  return function(r, o) {
    if (r == null) {
      return r;
    }
    if (!St(r)) {
      return t(r, o);
    }
    var n = r.length, i = e ? n : -1, a = Object(r);
    while (e ? i-- : ++i < n) {
      if (o(a[i], i, a) === false) {
        break;
      }
    }
    return r;
  };
}
var xf = v0;

// ../../node_modules/lodash-es/_baseEach.js
var $0 = xf(bf);
var no = $0;

// ../../node_modules/lodash-es/_baseAggregator.js
function A0(t, e, r, o) {
  no(t, function(n, i, a) {
    e(o, n, r(n), a);
  });
  return o;
}
var yf = A0;

// ../../node_modules/lodash-es/_createAggregator.js
function O0(t, e) {
  return function(r, o) {
    var n = J(r) ? df : yf, i = e ? e() : {};
    return n(r, t, be(o, 2), i);
  };
}
var _f = O0;

// ../../node_modules/lodash-es/_arrayIncludesWith.js
function E0(t, e, r) {
  var o = -1, n = t == null ? 0 : t.length;
  while (++o < n) {
    if (r(e, t[o])) {
      return true;
    }
  }
  return false;
}
var wf = E0;

// ../../node_modules/lodash-es/_baseMap.js
function S0(t, e) {
  var r = -1, o = St(t) ? Array(t.length) : [];
  no(t, function(n, i, a) {
    o[++r] = e(n, i, a);
  });
  return o;
}
var vf = S0;

// ../../node_modules/lodash-es/groupBy.js
var T0 = Object.prototype;
var k0 = T0.hasOwnProperty;
var C0 = _f(function(t, e, r) {
  if (k0.call(t, r)) {
    t[r].push(e);
  } else {
    De(t, r, [e]);
  }
});
var M0 = C0;

// ../../node_modules/lodash-es/_baseGt.js
function N0(t, e) {
  return t > e;
}
var io = N0;

// ../../node_modules/lodash-es/isEmpty.js
var P0 = "[object Map]";
var L0 = "[object Set]";
var F0 = Object.prototype;
var I0 = F0.hasOwnProperty;
function B0(t) {
  if (t == null) {
    return true;
  }
  if (St(t) && (J(t) || typeof t == "string" || typeof t.splice == "function" || Vt(t) || Ge(t) || se(t))) {
    return !t.length;
  }
  var e = Lt(t);
  if (e == P0 || e == L0) {
    return !t.size;
  }
  if (fe(t)) {
    return !Gr(t).length;
  }
  for (var r in t) {
    if (I0.call(t, r)) {
      return false;
    }
  }
  return true;
}
var j0 = B0;

// ../../node_modules/lodash-es/isFinite.js
var D0 = at.isFinite;
function R0(t) {
  return typeof t == "number" && D0(t);
}
var G0 = R0;

// ../../node_modules/lodash-es/isNil.js
function U0(t) {
  return t == null;
}
var q0 = U0;

// ../../node_modules/lodash-es/_baseExtremum.js
function z0(t, e, r) {
  var o = -1, n = t.length;
  while (++o < n) {
    var i = t[o], a = e(i);
    if (a != null && (f === void 0 ? a === a && !Pt(a) : r(a, f))) {
      var f = a, s = i;
    }
  }
  return s;
}
var ao = z0;

// ../../node_modules/lodash-es/max.js
function H0(t) {
  return t && t.length ? ao(t, Ut, io) : void 0;
}
var W0 = H0;

// ../../node_modules/lodash-es/maxBy.js
function K0(t, e) {
  return t && t.length ? ao(t, be(e, 2), io) : void 0;
}
var Z0 = K0;

// ../../node_modules/lodash-es/_baseSortBy.js
function Y0(t, e) {
  var r = t.length;
  t.sort(e);
  while (r--) {
    t[r] = t[r].value;
  }
  return t;
}
var $f = Y0;

// ../../node_modules/lodash-es/_compareAscending.js
function X0(t, e) {
  if (t !== e) {
    var r = t !== void 0, o = t === null, n = t === t, i = Pt(t);
    var a = e !== void 0, f = e === null, s = e === e, u = Pt(e);
    if (!f && !u && !i && t > e || i && a && s && !f && !u || o && a && s || !r && s || !n) {
      return 1;
    }
    if (!o && !i && !u && t < e || u && r && n && !o && !i || f && r && n || !a && n || !s) {
      return -1;
    }
  }
  return 0;
}
var Af = X0;

// ../../node_modules/lodash-es/_compareMultiple.js
function V0(t, e, r) {
  var o = -1, n = t.criteria, i = e.criteria, a = n.length, f = r.length;
  while (++o < a) {
    var s = Af(n[o], i[o]);
    if (s) {
      if (o >= f) {
        return s;
      }
      var u = r[o];
      return s * (u == "desc" ? -1 : 1);
    }
  }
  return t.index - e.index;
}
var Of = V0;

// ../../node_modules/lodash-es/_baseOrderBy.js
function J0(t, e, r) {
  if (e.length) {
    e = Ie(e, function(i) {
      if (J(i)) {
        return function(a) {
          return Ke(a, i.length === 1 ? i[0] : i);
        };
      }
      return i;
    });
  } else {
    e = [Ut];
  }
  var o = -1;
  e = Ie(e, le(be));
  var n = vf(t, function(i, a, f) {
    var s = Ie(e, function(u) {
      return u(i);
    });
    return { "criteria": s, "index": ++o, "value": i };
  });
  return $f(n, function(i, a) {
    return Of(i, a, r);
  });
}
var fo = J0;

// ../../node_modules/lodash-es/orderBy.js
function Q0(t, e, r, o) {
  if (t == null) {
    return [];
  }
  if (!J(e)) {
    e = e == null ? [] : [e];
  }
  r = o ? void 0 : r;
  if (!J(r)) {
    r = r == null ? [] : [r];
  }
  return fo(t, e, r);
}
var th = Q0;

// ../../node_modules/lodash-es/sortBy.js
var eh = wi(function(t, e) {
  if (t == null) {
    return [];
  }
  var r = e.length;
  if (r > 1 && Yo(t, e[0], e[1])) {
    e = [];
  } else if (r > 2 && Yo(e[0], e[1], e[2])) {
    e = [e[0]];
  }
  return fo(t, oa(e, 1), []);
});
var rh = eh;

// ../../node_modules/lodash-es/_createSet.js
var oh = 1 / 0;
var nh = !(ge && 1 / Qe(new ge([, -0]))[1] == oh) ? fi : function(t) {
  return new ge(t);
};
var Ef = nh;

// ../../node_modules/lodash-es/_baseUniq.js
var ih = 200;
function ah(t, e, r) {
  var o = -1, n = xi, i = t.length, a = true, f = [], s = f;
  if (r) {
    a = false;
    n = wf;
  } else if (i >= ih) {
    var u = e ? null : Ef(t);
    if (u) {
      return Qe(u);
    }
    a = false;
    n = Jr;
    s = new Vr();
  } else {
    s = e ? [] : f;
  }
  t:
    while (++o < i) {
      var d = t[o], x = e ? e(d) : d;
      d = r || d !== 0 ? d : 0;
      if (a && x === x) {
        var _ = s.length;
        while (_--) {
          if (s[_] === x) {
            continue t;
          }
        }
        if (e) {
          s.push(x);
        }
        f.push(d);
      } else if (!n(s, x, r)) {
        if (s !== f) {
          s.push(x);
        }
        f.push(d);
      }
    }
  return f;
}
var so = ah;

// ../../node_modules/lodash-es/uniq.js
function fh(t) {
  return t && t.length ? so(t) : [];
}
var sh = fh;

// ../../node_modules/lodash-es/uniqBy.js
function lh(t, e) {
  return t && t.length ? so(t, be(e, 2)) : [];
}
var uh = lh;

// ../../node_modules/numbro/dist/es/numbro.js
var ch = typeof globalThis !== "undefined" ? globalThis : typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : {};
function ph(t) {
  return t && t.__esModule && Object.prototype.hasOwnProperty.call(t, "default") ? t["default"] : t;
}
var rn;
var Sf;
function mh() {
  if (Sf) return rn;
  Sf = 1;
  rn = {
    languageTag: "en-US",
    delimiters: {
      thousands: ",",
      decimal: "."
    },
    abbreviations: {
      thousand: "k",
      million: "m",
      billion: "b",
      trillion: "t"
    },
    spaceSeparated: false,
    ordinal: function(t) {
      let e = t % 10;
      return ~~(t % 100 / 10) === 1 ? "th" : e === 1 ? "st" : e === 2 ? "nd" : e === 3 ? "rd" : "th";
    },
    bytes: {
      binarySuffixes: ["B", "KiB", "MiB", "GiB", "TiB", "PiB", "EiB", "ZiB", "YiB"],
      decimalSuffixes: ["B", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"]
    },
    currency: {
      symbol: "$",
      position: "prefix",
      code: "USD"
    },
    currencyFormat: {
      thousandSeparated: true,
      totalLength: 4,
      spaceSeparated: true,
      spaceSeparatedCurrency: true
    },
    formats: {
      fourDigits: {
        totalLength: 4,
        spaceSeparated: true
      },
      fullWithTwoDecimals: {
        output: "currency",
        thousandSeparated: true,
        mantissa: 2
      },
      fullWithTwoDecimalsNoCurrency: {
        thousandSeparated: true,
        mantissa: 2
      },
      fullWithNoDecimals: {
        output: "currency",
        thousandSeparated: true,
        mantissa: 0
      }
    }
  };
  return rn;
}
var on;
var Tf;
function Mf() {
  if (Tf) return on;
  Tf = 1;
  const t = [
    { key: "ZiB", factor: Math.pow(1024, 7) },
    { key: "ZB", factor: Math.pow(1e3, 7) },
    { key: "YiB", factor: Math.pow(1024, 8) },
    { key: "YB", factor: Math.pow(1e3, 8) },
    { key: "TiB", factor: Math.pow(1024, 4) },
    { key: "TB", factor: Math.pow(1e3, 4) },
    { key: "PiB", factor: Math.pow(1024, 5) },
    { key: "PB", factor: Math.pow(1e3, 5) },
    { key: "MiB", factor: Math.pow(1024, 2) },
    { key: "MB", factor: Math.pow(1e3, 2) },
    { key: "KiB", factor: Math.pow(1024, 1) },
    { key: "KB", factor: Math.pow(1e3, 1) },
    { key: "GiB", factor: Math.pow(1024, 3) },
    { key: "GB", factor: Math.pow(1e3, 3) },
    { key: "EiB", factor: Math.pow(1024, 6) },
    { key: "EB", factor: Math.pow(1e3, 6) },
    { key: "B", factor: 1 }
  ];
  function e(s) {
    return s.replace(/[-/\\^$*+?.()|[\]{}]/g, "\\$&");
  }
  function r(s, u, d, x, _, T, F) {
    if (!isNaN(+s)) {
      return +s;
    }
    let I = "";
    let S = s.replace(/(^[^(]*)\((.*)\)([^)]*$)/, "$1$2$3");
    if (S !== s) {
      return -1 * r(S, u, d, x, _, T);
    }
    for (let k = 0; k < t.length; k++) {
      let h = t[k];
      I = s.replace(RegExp(`([0-9 ])(${h.key})$`), "$1");
      if (I !== s) {
        return r(I, u, d, x, _, T) * h.factor;
      }
    }
    I = s.replace("%", "");
    if (I !== s) {
      return r(I, u, d, x, _, T) / 100;
    }
    let M = parseFloat(s);
    if (isNaN(M)) {
      return void 0;
    }
    let j = x(M);
    if (j && j !== ".") {
      I = s.replace(new RegExp(`${e(j)}$`), "");
      if (I !== s) {
        return r(I, u, d, x, _, T);
      }
    }
    let Y = {};
    Object.keys(T).forEach((k) => {
      Y[T[k]] = k;
    });
    let Z = Object.keys(Y).sort().reverse();
    let H = Z.length;
    for (let k = 0; k < H; k++) {
      let h = Z[k];
      let N = Y[h];
      I = s.replace(h, "");
      if (I !== s) {
        let B = void 0;
        switch (N) {
          case "thousand":
            B = Math.pow(10, 3);
            break;
          case "million":
            B = Math.pow(10, 6);
            break;
          case "billion":
            B = Math.pow(10, 9);
            break;
          case "trillion":
            B = Math.pow(10, 12);
            break;
        }
        return r(I, u, d, x, _, T) * B;
      }
    }
    return void 0;
  }
  function o(s, u, d) {
    let x = s.replace(d, "");
    x = x.replace(new RegExp(`([0-9])${e(u.thousands)}([0-9])`, "g"), "$1$2");
    x = x.replace(u.decimal, ".");
    return x;
  }
  function n(s, u, d = "", x, _, T, F) {
    if (s === "") {
      return void 0;
    }
    if (s === _) {
      return 0;
    }
    let I = o(s, u, d);
    return r(I, u, d, x, _, T);
  }
  function i(s, u) {
    let d = s.indexOf(":") && u.thousands !== ":";
    if (!d) {
      return false;
    }
    let x = s.split(":");
    if (x.length !== 3) {
      return false;
    }
    let _ = +x[0];
    let T = +x[1];
    let F = +x[2];
    return !isNaN(_) && !isNaN(T) && !isNaN(F);
  }
  function a(s) {
    let u = s.split(":");
    let d = +u[0];
    let x = +u[1];
    let _ = +u[2];
    return _ + 60 * x + 3600 * d;
  }
  function f(s, u) {
    const d = ln();
    let x = d.currentDelimiters();
    let _ = d.currentCurrency().symbol;
    let T = d.currentOrdinal();
    let F = d.getZeroFormat();
    let I = d.currentAbbreviations();
    let S = void 0;
    if (typeof s === "string") {
      if (i(s, x)) {
        S = a(s);
      } else {
        S = n(s, x, _, T, F, I);
      }
    } else if (typeof s === "number") {
      S = s;
    } else {
      return void 0;
    }
    if (S === void 0) {
      return void 0;
    }
    return S;
  }
  on = {
    unformat: f
  };
  return on;
}
var nn;
var kf;
function fn() {
  if (kf) return nn;
  kf = 1;
  let t = Mf();
  const e = /^[a-z]{2,3}(-[a-zA-Z]{4})?(-([A-Z]{2}|[0-9]{3}))?$/;
  const r = [
    "currency",
    "percent",
    "byte",
    "time",
    "ordinal",
    "number"
  ];
  const o = [
    "trillion",
    "billion",
    "million",
    "thousand"
  ];
  const n = [
    "prefix",
    "infix",
    "postfix"
  ];
  const i = [
    "sign",
    "parenthesis"
  ];
  const a = {
    type: "object",
    children: {
      thousand: {
        type: "string",
        mandatory: true
      },
      million: {
        type: "string",
        mandatory: true
      },
      billion: {
        type: "string",
        mandatory: true
      },
      trillion: {
        type: "string",
        mandatory: true
      }
    },
    mandatory: true
  };
  const f = {
    type: "object",
    children: {
      thousand: "string",
      million: "string",
      billion: "string",
      trillion: "string"
    }
  };
  const s = [
    "decimal",
    "binary",
    "general"
  ];
  const u = {
    output: {
      type: "string",
      validValues: r
    },
    base: {
      type: "string",
      validValues: s,
      restriction: (S, M) => M.output === "byte",
      message: "`base` must be provided only when the output is `byte`",
      mandatory: (S) => S.output === "byte"
    },
    characteristic: {
      type: "number",
      restriction: (S) => S >= 0,
      message: "value must be positive"
    },
    prefix: "string",
    postfix: "string",
    forceAverage: {
      type: "string",
      validValues: o
    },
    average: "boolean",
    lowPrecision: {
      type: "boolean",
      restriction: (S, M) => M.average === true,
      message: "`lowPrecision` must be provided only when the option `average` is set"
    },
    currencyPosition: {
      type: "string",
      validValues: n
    },
    currencySymbol: "string",
    totalLength: {
      type: "number",
      restrictions: [
        {
          restriction: (S) => S >= 0,
          message: "value must be positive"
        },
        {
          restriction: (S, M) => !M.exponential,
          message: "`totalLength` is incompatible with `exponential`"
        }
      ]
    },
    mantissa: {
      type: "number",
      restriction: (S) => S >= 0,
      message: "value must be positive"
    },
    optionalMantissa: "boolean",
    trimMantissa: "boolean",
    roundingFunction: "function",
    optionalCharacteristic: "boolean",
    thousandSeparated: "boolean",
    spaceSeparated: "boolean",
    spaceSeparatedCurrency: "boolean",
    spaceSeparatedAbbreviation: "boolean",
    abbreviations: f,
    negative: {
      type: "string",
      validValues: i
    },
    forceSign: "boolean",
    exponential: {
      type: "boolean"
    },
    prefixSymbol: {
      type: "boolean",
      restriction: (S, M) => M.output === "percent",
      message: "`prefixSymbol` can be provided only when the output is `percent`"
    }
  };
  const d = {
    languageTag: {
      type: "string",
      mandatory: true,
      restriction: (S) => {
        return S.match(e);
      },
      message: "the language tag must follow the BCP 47 specification (see https://tools.ieft.org/html/bcp47)"
    },
    delimiters: {
      type: "object",
      children: {
        thousands: "string",
        decimal: "string",
        thousandsSize: "number"
      },
      mandatory: true
    },
    abbreviations: a,
    spaceSeparated: "boolean",
    spaceSeparatedCurrency: "boolean",
    ordinal: {
      type: "function",
      mandatory: true
    },
    bytes: {
      type: "object",
      children: {
        binarySuffixes: "object",
        decimalSuffixes: "object"
      }
    },
    currency: {
      type: "object",
      children: {
        symbol: "string",
        position: "string",
        code: "string"
      },
      mandatory: true
    },
    defaults: "format",
    ordinalFormat: "format",
    byteFormat: "format",
    percentageFormat: "format",
    currencyFormat: "format",
    timeDefaults: "format",
    formats: {
      type: "object",
      children: {
        fourDigits: {
          type: "format",
          mandatory: true
        },
        fullWithTwoDecimals: {
          type: "format",
          mandatory: true
        },
        fullWithTwoDecimalsNoCurrency: {
          type: "format",
          mandatory: true
        },
        fullWithNoDecimals: {
          type: "format",
          mandatory: true
        }
      }
    }
  };
  function x(S, M) {
    let j = _(S);
    let Y = F(M);
    return j && Y;
  }
  function _(S) {
    let M = t.unformat(S);
    return M !== void 0;
  }
  function T(S, M, j, Y = false) {
    let Z = Object.keys(S).map((H) => {
      if (!M[H]) {
        console.error(`${j} Invalid key: ${H}`);
        return false;
      }
      let k = S[H];
      let h = M[H];
      if (typeof h === "string") {
        h = { type: h };
      }
      if (h.type === "format") {
        let N = T(k, u, `[Validate ${H}]`, true);
        if (!N) {
          return false;
        }
      } else if (typeof k !== h.type) {
        console.error(`${j} ${H} type mismatched: "${h.type}" expected, "${typeof k}" provided`);
        return false;
      }
      if (h.restrictions && h.restrictions.length) {
        let N = h.restrictions.length;
        for (let B = 0; B < N; B++) {
          let { restriction: E, message: U } = h.restrictions[B];
          if (!E(k, S)) {
            console.error(`${j} ${H} invalid value: ${U}`);
            return false;
          }
        }
      }
      if (h.restriction && !h.restriction(k, S)) {
        console.error(`${j} ${H} invalid value: ${h.message}`);
        return false;
      }
      if (h.validValues && h.validValues.indexOf(k) === -1) {
        console.error(`${j} ${H} invalid value: must be among ${JSON.stringify(h.validValues)}, "${k}" provided`);
        return false;
      }
      if (h.children) {
        let N = T(k, h.children, `[Validate ${H}]`);
        if (!N) {
          return false;
        }
      }
      return true;
    });
    if (!Y) {
      Z.push(...Object.keys(M).map((H) => {
        let k = M[H];
        if (typeof k === "string") {
          k = { type: k };
        }
        if (k.mandatory) {
          let h = k.mandatory;
          if (typeof h === "function") {
            h = h(S);
          }
          if (h && S[H] === void 0) {
            console.error(`${j} Missing mandatory key "${H}"`);
            return false;
          }
        }
        return true;
      }));
    }
    return Z.reduce((H, k) => {
      return H && k;
    }, true);
  }
  function F(S) {
    return T(S, u, "[Validate format]");
  }
  function I(S) {
    return T(S, d, "[Validate language]");
  }
  nn = {
    validate: x,
    validateFormat: F,
    validateInput: _,
    validateLanguage: I
  };
  return nn;
}
function dh(t, e) {
  let r = t.match(/^{([^}]*)}/);
  if (r) {
    e.prefix = r[1];
    return t.slice(r[0].length);
  }
  return t;
}
function hh(t, e) {
  let r = t.match(/{([^}]*)}$/);
  if (r) {
    e.postfix = r[1];
    return t.slice(0, -r[0].length);
  }
  return t;
}
function gh(t, e) {
  if (t.indexOf("$") !== -1) {
    e.output = "currency";
    return;
  }
  if (t.indexOf("%") !== -1) {
    e.output = "percent";
    return;
  }
  if (t.indexOf("bd") !== -1) {
    e.output = "byte";
    e.base = "general";
    return;
  }
  if (t.indexOf("b") !== -1) {
    e.output = "byte";
    e.base = "binary";
    return;
  }
  if (t.indexOf("d") !== -1) {
    e.output = "byte";
    e.base = "decimal";
    return;
  }
  if (t.indexOf(":") !== -1) {
    e.output = "time";
    return;
  }
  if (t.indexOf("o") !== -1) {
    e.output = "ordinal";
  }
}
function bh(t, e) {
  if (t.indexOf(",") !== -1) {
    e.thousandSeparated = true;
  }
}
function xh(t, e) {
  if (t.indexOf(" ") !== -1) {
    e.spaceSeparated = true;
    e.spaceSeparatedCurrency = true;
    if (e.average || e.forceAverage) {
      e.spaceSeparatedAbbreviation = true;
    }
  }
}
function yh(t, e) {
  let r = t.match(/[1-9]+[0-9]*/);
  if (r) {
    e.totalLength = +r[0];
  }
}
function _h(t, e) {
  let r = t.split(".")[0];
  let o = r.match(/0+/);
  if (o) {
    e.characteristic = o[0].length;
  }
}
function wh(t, e) {
  let r = t.split(".")[1];
  if (r) {
    let o = r.match(/0+/);
    if (o) {
      e.mantissa = o[0].length;
    }
  }
}
function vh(t, e) {
  const r = t.split(".")[1];
  if (r) {
    e.trimMantissa = r.indexOf("[") !== -1;
  }
}
function $h(t, e) {
  if (t.indexOf("a") !== -1) {
    e.average = true;
  }
}
function Ah(t, e) {
  if (t.indexOf("K") !== -1) {
    e.forceAverage = "thousand";
  } else if (t.indexOf("M") !== -1) {
    e.forceAverage = "million";
  } else if (t.indexOf("B") !== -1) {
    e.forceAverage = "billion";
  } else if (t.indexOf("T") !== -1) {
    e.forceAverage = "trillion";
  }
}
function Oh(t, e) {
  if (t.match(/\[\.]/)) {
    e.optionalMantissa = true;
  } else if (t.match(/\./)) {
    e.optionalMantissa = false;
  }
}
function Eh(t, e) {
  if (t.indexOf(".") !== -1) {
    let r = t.split(".")[0];
    e.optionalCharacteristic = r.indexOf("0") === -1;
  }
}
function Sh(t, e) {
  if (t.match(/^\+?\([^)]*\)$/)) {
    e.negative = "parenthesis";
  }
  if (t.match(/^\+?-/)) {
    e.negative = "sign";
  }
}
function Th(t, e) {
  if (t.match(/^\+/)) {
    e.forceSign = true;
  }
}
function kh(t, e = {}) {
  if (typeof t !== "string") {
    return t;
  }
  t = dh(t, e);
  t = hh(t, e);
  gh(t, e);
  yh(t, e);
  _h(t, e);
  Eh(t, e);
  $h(t, e);
  Ah(t, e);
  wh(t, e);
  Oh(t, e);
  vh(t, e);
  bh(t, e);
  xh(t, e);
  Sh(t, e);
  Th(t, e);
  return e;
}
var sn = {
  parseFormat: kh
};
var an;
var Cf;
function ln() {
  if (Cf) return an;
  Cf = 1;
  const t = mh();
  const e = fn();
  const r = sn;
  let o = {};
  let n = void 0;
  let i = {};
  let a = null;
  let f = {};
  function s(d) {
    n = d;
  }
  function u() {
    return i[n];
  }
  o.languages = () => Object.assign({}, i);
  o.currentLanguage = () => n;
  o.currentBytes = () => u().bytes || {};
  o.currentCurrency = () => u().currency;
  o.currentAbbreviations = () => u().abbreviations;
  o.currentDelimiters = () => u().delimiters;
  o.currentOrdinal = () => u().ordinal;
  o.currentDefaults = () => Object.assign({}, u().defaults, f);
  o.currentOrdinalDefaultFormat = () => Object.assign({}, o.currentDefaults(), u().ordinalFormat);
  o.currentByteDefaultFormat = () => Object.assign({}, o.currentDefaults(), u().byteFormat);
  o.currentPercentageDefaultFormat = () => Object.assign({}, o.currentDefaults(), u().percentageFormat);
  o.currentCurrencyDefaultFormat = () => Object.assign({}, o.currentDefaults(), u().currencyFormat);
  o.currentTimeDefaultFormat = () => Object.assign({}, o.currentDefaults(), u().timeFormat);
  o.setDefaults = (d) => {
    d = r.parseFormat(d);
    if (e.validateFormat(d)) {
      f = d;
    }
  };
  o.getZeroFormat = () => a;
  o.setZeroFormat = (d) => a = typeof d === "string" ? d : null;
  o.hasZeroFormat = () => a !== null;
  o.languageData = (d) => {
    if (d) {
      if (i[d]) {
        return i[d];
      }
      throw new Error(`Unknown tag "${d}"`);
    }
    return u();
  };
  o.registerLanguage = (d, x = false) => {
    if (!e.validateLanguage(d)) {
      throw new Error("Invalid language data");
    }
    i[d.languageTag] = d;
    if (x) {
      s(d.languageTag);
    }
  };
  o.setLanguage = (d, x = t.languageTag) => {
    if (!i[d]) {
      let _ = d.split("-")[0];
      let T = Object.keys(i).find((F) => {
        return F.split("-")[0] === _;
      });
      if (!i[T]) {
        s(x);
        return;
      }
      s(T);
      return;
    }
    s(d);
  };
  o.registerLanguage(t);
  n = t.languageTag;
  an = o;
  return an;
}
function Ch(t) {
  throw new Error('Could not dynamically require "' + t + '". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.');
}
function Mh(t, e) {
  t.forEach((r) => {
    let o = void 0;
    try {
      o = Ch(`../languages/${r}`);
    } catch (n) {
      console.error(`Unable to load "${r}". No matching language file found.`);
    }
    if (o) {
      e.registerLanguage(o);
    }
  });
}
var Nh = (t) => ({
  loadLanguagesInNode: (e) => Mh(e, t)
});
var Nf = { exports: {} };
(function(t) {
  (function(e) {
    var r, o = /^-?(?:\d+(?:\.\d*)?|\.\d+)(?:e[+-]?\d+)?$/i, n = Math.ceil, i = Math.floor, a = "[BigNumber Error] ", f = a + "Number primitive has more than 15 significant digits: ", s = 1e14, u = 14, d = 9007199254740991, x = [1, 10, 100, 1e3, 1e4, 1e5, 1e6, 1e7, 1e8, 1e9, 1e10, 1e11, 1e12, 1e13], _ = 1e7, T = 1e9;
    function F(k) {
      var h, N, B, E = P.prototype = { constructor: P, toString: null, valueOf: null }, U = new P(1), R = 20, K = 4, ot = -7, ut = 21, At = -1e7, gt = 1e7, jt = false, ve = 1, Dt = 0, cr = {
        prefix: "",
        groupSize: 3,
        secondaryGroupSize: 0,
        groupSeparator: ",",
        decimalSeparator: ".",
        fractionGroupSize: 0,
        fractionGroupSeparator: "\xA0",
        // non-breaking space
        suffix: ""
      }, Kt = "0123456789abcdefghijklmnopqrstuvwxyz", $e = true;
      function P(l, c) {
        var p, v, g, y, A, m, b, $, w = this;
        if (!(w instanceof P)) return new P(l, c);
        if (c == null) {
          if (l && l._isBigNumber === true) {
            w.s = l.s;
            if (!l.c || l.e > gt) {
              w.c = w.e = null;
            } else if (l.e < At) {
              w.c = [w.e = 0];
            } else {
              w.e = l.e;
              w.c = l.c.slice();
            }
            return;
          }
          if ((m = typeof l == "number") && l * 0 == 0) {
            w.s = 1 / l < 0 ? (l = -l, -1) : 1;
            if (l === ~~l) {
              for (y = 0, A = l; A >= 10; A /= 10, y++) ;
              if (y > gt) {
                w.c = w.e = null;
              } else {
                w.e = y;
                w.c = [l];
              }
              return;
            }
            $ = String(l);
          } else {
            if (!o.test($ = String(l))) return B(w, $, m);
            w.s = $.charCodeAt(0) == 45 ? ($ = $.slice(1), -1) : 1;
          }
          if ((y = $.indexOf(".")) > -1) $ = $.replace(".", "");
          if ((A = $.search(/e/i)) > 0) {
            if (y < 0) y = A;
            y += +$.slice(A + 1);
            $ = $.substring(0, A);
          } else if (y < 0) {
            y = $.length;
          }
        } else {
          j(c, 2, Kt.length, "Base");
          if (c == 10 && $e) {
            w = new P(l);
            return Ot(w, R + w.e + 1, K);
          }
          $ = String(l);
          if (m = typeof l == "number") {
            if (l * 0 != 0) return B(w, $, m, c);
            w.s = 1 / l < 0 ? ($ = $.slice(1), -1) : 1;
            if (P.DEBUG && $.replace(/^0\.0*|\./, "").length > 15) {
              throw Error(f + l);
            }
          } else {
            w.s = $.charCodeAt(0) === 45 ? ($ = $.slice(1), -1) : 1;
          }
          p = Kt.slice(0, c);
          y = A = 0;
          for (b = $.length; A < b; A++) {
            if (p.indexOf(v = $.charAt(A)) < 0) {
              if (v == ".") {
                if (A > y) {
                  y = b;
                  continue;
                }
              } else if (!g) {
                if ($ == $.toUpperCase() && ($ = $.toLowerCase()) || $ == $.toLowerCase() && ($ = $.toUpperCase())) {
                  g = true;
                  A = -1;
                  y = 0;
                  continue;
                }
              }
              return B(w, String(l), m, c);
            }
          }
          m = false;
          $ = N($, c, 10, w.s);
          if ((y = $.indexOf(".")) > -1) $ = $.replace(".", "");
          else y = $.length;
        }
        for (A = 0; $.charCodeAt(A) === 48; A++) ;
        for (b = $.length; $.charCodeAt(--b) === 48; ) ;
        if ($ = $.slice(A, ++b)) {
          b -= A;
          if (m && P.DEBUG && b > 15 && (l > d || l !== i(l))) {
            throw Error(f + w.s * l);
          }
          if ((y = y - A - 1) > gt) {
            w.c = w.e = null;
          } else if (y < At) {
            w.c = [w.e = 0];
          } else {
            w.e = y;
            w.c = [];
            A = (y + 1) % u;
            if (y < 0) A += u;
            if (A < b) {
              if (A) w.c.push(+$.slice(0, A));
              for (b -= u; A < b; ) {
                w.c.push(+$.slice(A, A += u));
              }
              A = u - ($ = $.slice(A)).length;
            } else {
              A -= b;
            }
            for (; A--; $ += "0") ;
            w.c.push(+$);
          }
        } else {
          w.c = [w.e = 0];
        }
      }
      P.clone = F;
      P.ROUND_UP = 0;
      P.ROUND_DOWN = 1;
      P.ROUND_CEIL = 2;
      P.ROUND_FLOOR = 3;
      P.ROUND_HALF_UP = 4;
      P.ROUND_HALF_DOWN = 5;
      P.ROUND_HALF_EVEN = 6;
      P.ROUND_HALF_CEIL = 7;
      P.ROUND_HALF_FLOOR = 8;
      P.EUCLID = 9;
      P.config = P.set = function(l) {
        var c, p;
        if (l != null) {
          if (typeof l == "object") {
            if (l.hasOwnProperty(c = "DECIMAL_PLACES")) {
              p = l[c];
              j(p, 0, T, c);
              R = p;
            }
            if (l.hasOwnProperty(c = "ROUNDING_MODE")) {
              p = l[c];
              j(p, 0, 8, c);
              K = p;
            }
            if (l.hasOwnProperty(c = "EXPONENTIAL_AT")) {
              p = l[c];
              if (p && p.pop) {
                j(p[0], -T, 0, c);
                j(p[1], 0, T, c);
                ot = p[0];
                ut = p[1];
              } else {
                j(p, -T, T, c);
                ot = -(ut = p < 0 ? -p : p);
              }
            }
            if (l.hasOwnProperty(c = "RANGE")) {
              p = l[c];
              if (p && p.pop) {
                j(p[0], -T, -1, c);
                j(p[1], 1, T, c);
                At = p[0];
                gt = p[1];
              } else {
                j(p, -T, T, c);
                if (p) {
                  At = -(gt = p < 0 ? -p : p);
                } else {
                  throw Error(a + c + " cannot be zero: " + p);
                }
              }
            }
            if (l.hasOwnProperty(c = "CRYPTO")) {
              p = l[c];
              if (p === !!p) {
                if (p) {
                  if (typeof crypto != "undefined" && crypto && (crypto.getRandomValues || crypto.randomBytes)) {
                    jt = p;
                  } else {
                    jt = !p;
                    throw Error(a + "crypto unavailable");
                  }
                } else {
                  jt = p;
                }
              } else {
                throw Error(a + c + " not true or false: " + p);
              }
            }
            if (l.hasOwnProperty(c = "MODULO_MODE")) {
              p = l[c];
              j(p, 0, 9, c);
              ve = p;
            }
            if (l.hasOwnProperty(c = "POW_PRECISION")) {
              p = l[c];
              j(p, 0, T, c);
              Dt = p;
            }
            if (l.hasOwnProperty(c = "FORMAT")) {
              p = l[c];
              if (typeof p == "object") cr = p;
              else throw Error(a + c + " not an object: " + p);
            }
            if (l.hasOwnProperty(c = "ALPHABET")) {
              p = l[c];
              if (typeof p == "string" && !/^.?$|[+\-.\s]|(.).*\1/.test(p)) {
                $e = p.slice(0, 10) == "0123456789";
                Kt = p;
              } else {
                throw Error(a + c + " invalid: " + p);
              }
            }
          } else {
            throw Error(a + "Object expected: " + l);
          }
        }
        return {
          DECIMAL_PLACES: R,
          ROUNDING_MODE: K,
          EXPONENTIAL_AT: [ot, ut],
          RANGE: [At, gt],
          CRYPTO: jt,
          MODULO_MODE: ve,
          POW_PRECISION: Dt,
          FORMAT: cr,
          ALPHABET: Kt
        };
      };
      P.isBigNumber = function(l) {
        if (!l || l._isBigNumber !== true) return false;
        if (!P.DEBUG) return true;
        var c, p, v = l.c, g = l.e, y = l.s;
        t: if ({}.toString.call(v) == "[object Array]") {
          if ((y === 1 || y === -1) && g >= -T && g <= T && g === i(g)) {
            if (v[0] === 0) {
              if (g === 0 && v.length === 1) return true;
              break t;
            }
            c = (g + 1) % u;
            if (c < 1) c += u;
            if (String(v[0]).length == c) {
              for (c = 0; c < v.length; c++) {
                p = v[c];
                if (p < 0 || p >= s || p !== i(p)) break t;
              }
              if (p !== 0) return true;
            }
          }
        } else if (v === null && g === null && (y === null || y === 1 || y === -1)) {
          return true;
        }
        throw Error(a + "Invalid BigNumber: " + l);
      };
      P.maximum = P.max = function() {
        return Tn(arguments, -1);
      };
      P.minimum = P.min = function() {
        return Tn(arguments, 1);
      };
      P.random = function() {
        var l = 9007199254740992;
        var c = Math.random() * l & 2097151 ? function() {
          return i(Math.random() * l);
        } : function() {
          return (Math.random() * 1073741824 | 0) * 8388608 + (Math.random() * 8388608 | 0);
        };
        return function(p) {
          var v, g, y, A, m, b = 0, $ = [], w = new P(U);
          if (p == null) p = R;
          else j(p, 0, T);
          A = n(p / u);
          if (jt) {
            if (crypto.getRandomValues) {
              v = crypto.getRandomValues(new Uint32Array(A *= 2));
              for (; b < A; ) {
                m = v[b] * 131072 + (v[b + 1] >>> 11);
                if (m >= 9e15) {
                  g = crypto.getRandomValues(new Uint32Array(2));
                  v[b] = g[0];
                  v[b + 1] = g[1];
                } else {
                  $.push(m % 1e14);
                  b += 2;
                }
              }
              b = A / 2;
            } else if (crypto.randomBytes) {
              v = crypto.randomBytes(A *= 7);
              for (; b < A; ) {
                m = (v[b] & 31) * 281474976710656 + v[b + 1] * 1099511627776 + v[b + 2] * 4294967296 + v[b + 3] * 16777216 + (v[b + 4] << 16) + (v[b + 5] << 8) + v[b + 6];
                if (m >= 9e15) {
                  crypto.randomBytes(7).copy(v, b);
                } else {
                  $.push(m % 1e14);
                  b += 7;
                }
              }
              b = A / 7;
            } else {
              jt = false;
              throw Error(a + "crypto unavailable");
            }
          }
          if (!jt) {
            for (; b < A; ) {
              m = c();
              if (m < 9e15) $[b++] = m % 1e14;
            }
          }
          A = $[--b];
          p %= u;
          if (A && p) {
            m = x[u - p];
            $[b] = i(A / m) * m;
          }
          for (; $[b] === 0; $.pop(), b--) ;
          if (b < 0) {
            $ = [y = 0];
          } else {
            for (y = -1; $[0] === 0; $.splice(0, 1), y -= u) ;
            for (b = 1, m = $[0]; m >= 10; m /= 10, b++) ;
            if (b < u) y -= u - b;
          }
          w.e = y;
          w.c = $;
          return w;
        };
      }();
      P.sum = function() {
        var l = 1, c = arguments, p = new P(c[0]);
        for (; l < c.length; ) p = p.plus(c[l++]);
        return p;
      };
      N = /* @__PURE__ */ function() {
        var l = "0123456789";
        function c(p, v, g, y) {
          var A, m = [0], b, $ = 0, w = p.length;
          for (; $ < w; ) {
            for (b = m.length; b--; m[b] *= v) ;
            m[0] += y.indexOf(p.charAt($++));
            for (A = 0; A < m.length; A++) {
              if (m[A] > g - 1) {
                if (m[A + 1] == null) m[A + 1] = 0;
                m[A + 1] += m[A] / g | 0;
                m[A] %= g;
              }
            }
          }
          return m.reverse();
        }
        return function(p, v, g, y, A) {
          var m, b, $, w, C, q, W, V, nt = p.indexOf("."), ct = R, X = K;
          if (nt >= 0) {
            w = Dt;
            Dt = 0;
            p = p.replace(".", "");
            V = new P(v);
            q = V.pow(p.length - nt);
            Dt = w;
            V.c = c(
              H(S(q.c), q.e, "0"),
              10,
              g,
              l
            );
            V.e = V.c.length;
          }
          W = c(p, v, g, A ? (m = Kt, l) : (m = l, Kt));
          $ = w = W.length;
          for (; W[--w] == 0; W.pop()) ;
          if (!W[0]) return m.charAt(0);
          if (nt < 0) {
            --$;
          } else {
            q.c = W;
            q.e = $;
            q.s = y;
            q = h(q, V, ct, X, g);
            W = q.c;
            C = q.r;
            $ = q.e;
          }
          b = $ + ct + 1;
          nt = W[b];
          w = g / 2;
          C = C || b < 0 || W[b + 1] != null;
          C = X < 4 ? (nt != null || C) && (X == 0 || X == (q.s < 0 ? 3 : 2)) : nt > w || nt == w && (X == 4 || C || X == 6 && W[b - 1] & 1 || X == (q.s < 0 ? 8 : 7));
          if (b < 1 || !W[0]) {
            p = C ? H(m.charAt(1), -ct, m.charAt(0)) : m.charAt(0);
          } else {
            W.length = b;
            if (C) {
              for (--g; ++W[--b] > g; ) {
                W[b] = 0;
                if (!b) {
                  ++$;
                  W = [1].concat(W);
                }
              }
            }
            for (w = W.length; !W[--w]; ) ;
            for (nt = 0, p = ""; nt <= w; p += m.charAt(W[nt++])) ;
            p = H(p, $, m.charAt(0));
          }
          return p;
        };
      }();
      h = /* @__PURE__ */ function() {
        function l(v, g, y) {
          var A, m, b, $, w = 0, C = v.length, q = g % _, W = g / _ | 0;
          for (v = v.slice(); C--; ) {
            b = v[C] % _;
            $ = v[C] / _ | 0;
            A = W * b + $ * q;
            m = q * b + A % _ * _ + w;
            w = (m / y | 0) + (A / _ | 0) + W * $;
            v[C] = m % y;
          }
          if (w) v = [w].concat(v);
          return v;
        }
        function c(v, g, y, A) {
          var m, b;
          if (y != A) {
            b = y > A ? 1 : -1;
          } else {
            for (m = b = 0; m < y; m++) {
              if (v[m] != g[m]) {
                b = v[m] > g[m] ? 1 : -1;
                break;
              }
            }
          }
          return b;
        }
        function p(v, g, y, A) {
          var m = 0;
          for (; y--; ) {
            v[y] -= m;
            m = v[y] < g[y] ? 1 : 0;
            v[y] = m * A + v[y] - g[y];
          }
          for (; !v[0] && v.length > 1; v.splice(0, 1)) ;
        }
        return function(v, g, y, A, m) {
          var b, $, w, C, q, W, V, nt, ct, X, Q, bt, $r, Io, Bo, Rt, pr, Et = v.s == g.s ? 1 : -1, xt = v.c, it = g.c;
          if (!xt || !xt[0] || !it || !it[0]) {
            return new P(
              // Return NaN if either NaN, or both Infinity or 0.
              !v.s || !g.s || (xt ? it && xt[0] == it[0] : !it) ? NaN : (
                // Return ±0 if x is ±0 or y is ±Infinity, or return ±Infinity as y is ±0.
                xt && xt[0] == 0 || !it ? Et * 0 : Et / 0
              )
            );
          }
          nt = new P(Et);
          ct = nt.c = [];
          $ = v.e - g.e;
          Et = y + $ + 1;
          if (!m) {
            m = s;
            $ = I(v.e / u) - I(g.e / u);
            Et = Et / u | 0;
          }
          for (w = 0; it[w] == (xt[w] || 0); w++) ;
          if (it[w] > (xt[w] || 0)) $--;
          if (Et < 0) {
            ct.push(1);
            C = true;
          } else {
            Io = xt.length;
            Rt = it.length;
            w = 0;
            Et += 2;
            q = i(m / (it[0] + 1));
            if (q > 1) {
              it = l(it, q, m);
              xt = l(xt, q, m);
              Rt = it.length;
              Io = xt.length;
            }
            $r = Rt;
            X = xt.slice(0, Rt);
            Q = X.length;
            for (; Q < Rt; X[Q++] = 0) ;
            pr = it.slice();
            pr = [0].concat(pr);
            Bo = it[0];
            if (it[1] >= m / 2) Bo++;
            do {
              q = 0;
              b = c(it, X, Rt, Q);
              if (b < 0) {
                bt = X[0];
                if (Rt != Q) bt = bt * m + (X[1] || 0);
                q = i(bt / Bo);
                if (q > 1) {
                  if (q >= m) q = m - 1;
                  W = l(it, q, m);
                  V = W.length;
                  Q = X.length;
                  while (c(W, X, V, Q) == 1) {
                    q--;
                    p(W, Rt < V ? pr : it, V, m);
                    V = W.length;
                    b = 1;
                  }
                } else {
                  if (q == 0) {
                    b = q = 1;
                  }
                  W = it.slice();
                  V = W.length;
                }
                if (V < Q) W = [0].concat(W);
                p(X, W, Q, m);
                Q = X.length;
                if (b == -1) {
                  while (c(it, X, Rt, Q) < 1) {
                    q++;
                    p(X, Rt < Q ? pr : it, Q, m);
                    Q = X.length;
                  }
                }
              } else if (b === 0) {
                q++;
                X = [0];
              }
              ct[w++] = q;
              if (X[0]) {
                X[Q++] = xt[$r] || 0;
              } else {
                X = [xt[$r]];
                Q = 1;
              }
            } while (($r++ < Io || X[0] != null) && Et--);
            C = X[0] != null;
            if (!ct[0]) ct.splice(0, 1);
          }
          if (m == s) {
            for (w = 1, Et = ct[0]; Et >= 10; Et /= 10, w++) ;
            Ot(nt, y + (nt.e = w + $ * u - 1) + 1, A, C);
          } else {
            nt.e = $;
            nt.r = +C;
          }
          return nt;
        };
      }();
      function Lo(l, c, p, v) {
        var g, y, A, m, b;
        if (p == null) p = K;
        else j(p, 0, 8);
        if (!l.c) return l.toString();
        g = l.c[0];
        A = l.e;
        if (c == null) {
          b = S(l.c);
          b = v == 1 || v == 2 && (A <= ot || A >= ut) ? Z(b, A) : H(b, A, "0");
        } else {
          l = Ot(new P(l), c, p);
          y = l.e;
          b = S(l.c);
          m = b.length;
          if (v == 1 || v == 2 && (c <= y || y <= ot)) {
            for (; m < c; b += "0", m++) ;
            b = Z(b, y);
          } else {
            c -= A;
            b = H(b, y, "0");
            if (y + 1 > m) {
              if (--c > 0) for (b += "."; c--; b += "0") ;
            } else {
              c += y - m;
              if (c > 0) {
                if (y + 1 == m) b += ".";
                for (; c--; b += "0") ;
              }
            }
          }
        }
        return l.s < 0 && g ? "-" + b : b;
      }
      function Tn(l, c) {
        var p, v, g = 1, y = new P(l[0]);
        for (; g < l.length; g++) {
          v = new P(l[g]);
          if (!v.s || (p = M(y, v)) === c || p === 0 && y.s === c) {
            y = v;
          }
        }
        return y;
      }
      function Fo(l, c, p) {
        var v = 1, g = c.length;
        for (; !c[--g]; c.pop()) ;
        for (g = c[0]; g >= 10; g /= 10, v++) ;
        if ((p = v + p * u - 1) > gt) {
          l.c = l.e = null;
        } else if (p < At) {
          l.c = [l.e = 0];
        } else {
          l.e = p;
          l.c = c;
        }
        return l;
      }
      B = /* @__PURE__ */ function() {
        var l = /^(-?)0([xbo])(?=\w[\w.]*$)/i, c = /^([^.]+)\.$/, p = /^\.([^.]+)$/, v = /^-?(Infinity|NaN)$/, g = /^\s*\+(?=[\w.])|^\s+|\s+$/g;
        return function(y, A, m, b) {
          var $, w = m ? A : A.replace(g, "");
          if (v.test(w)) {
            y.s = isNaN(w) ? null : w < 0 ? -1 : 1;
          } else {
            if (!m) {
              w = w.replace(l, function(C, q, W) {
                $ = (W = W.toLowerCase()) == "x" ? 16 : W == "b" ? 2 : 8;
                return !b || b == $ ? q : C;
              });
              if (b) {
                $ = b;
                w = w.replace(c, "$1").replace(p, "0.$1");
              }
              if (A != w) return new P(w, $);
            }
            if (P.DEBUG) {
              throw Error(a + "Not a" + (b ? " base " + b : "") + " number: " + A);
            }
            y.s = null;
          }
          y.c = y.e = null;
        };
      }();
      function Ot(l, c, p, v) {
        var g, y, A, m, b, $, w, C = l.c, q = x;
        if (C) {
          t: {
            for (g = 1, m = C[0]; m >= 10; m /= 10, g++) ;
            y = c - g;
            if (y < 0) {
              y += u;
              A = c;
              b = C[$ = 0];
              w = i(b / q[g - A - 1] % 10);
            } else {
              $ = n((y + 1) / u);
              if ($ >= C.length) {
                if (v) {
                  for (; C.length <= $; C.push(0)) ;
                  b = w = 0;
                  g = 1;
                  y %= u;
                  A = y - u + 1;
                } else {
                  break t;
                }
              } else {
                b = m = C[$];
                for (g = 1; m >= 10; m /= 10, g++) ;
                y %= u;
                A = y - u + g;
                w = A < 0 ? 0 : i(b / q[g - A - 1] % 10);
              }
            }
            v = v || c < 0 || // Are there any non-zero digits after the rounding digit?
            // The expression  n % pows10[d - j - 1]  returns all digits of n to the right
            // of the digit at j, e.g. if n is 908714 and j is 2, the expression gives 714.
            C[$ + 1] != null || (A < 0 ? b : b % q[g - A - 1]);
            v = p < 4 ? (w || v) && (p == 0 || p == (l.s < 0 ? 3 : 2)) : w > 5 || w == 5 && (p == 4 || v || p == 6 && // Check whether the digit to the left of the rounding digit is odd.
            (y > 0 ? A > 0 ? b / q[g - A] : 0 : C[$ - 1]) % 10 & 1 || p == (l.s < 0 ? 8 : 7));
            if (c < 1 || !C[0]) {
              C.length = 0;
              if (v) {
                c -= l.e + 1;
                C[0] = q[(u - c % u) % u];
                l.e = -c || 0;
              } else {
                C[0] = l.e = 0;
              }
              return l;
            }
            if (y == 0) {
              C.length = $;
              m = 1;
              $--;
            } else {
              C.length = $ + 1;
              m = q[u - y];
              C[$] = A > 0 ? i(b / q[g - A] % q[A]) * m : 0;
            }
            if (v) {
              for (; ; ) {
                if ($ == 0) {
                  for (y = 1, A = C[0]; A >= 10; A /= 10, y++) ;
                  A = C[0] += m;
                  for (m = 1; A >= 10; A /= 10, m++) ;
                  if (y != m) {
                    l.e++;
                    if (C[0] == s) C[0] = 1;
                  }
                  break;
                } else {
                  C[$] += m;
                  if (C[$] != s) break;
                  C[$--] = 0;
                  m = 1;
                }
              }
            }
            for (y = C.length; C[--y] === 0; C.pop()) ;
          }
          if (l.e > gt) {
            l.c = l.e = null;
          } else if (l.e < At) {
            l.c = [l.e = 0];
          }
        }
        return l;
      }
      function Zt(l) {
        var c, p = l.e;
        if (p === null) return l.toString();
        c = S(l.c);
        c = p <= ot || p >= ut ? Z(c, p) : H(c, p, "0");
        return l.s < 0 ? "-" + c : c;
      }
      E.absoluteValue = E.abs = function() {
        var l = new P(this);
        if (l.s < 0) l.s = 1;
        return l;
      };
      E.comparedTo = function(l, c) {
        return M(this, new P(l, c));
      };
      E.decimalPlaces = E.dp = function(l, c) {
        var p, v, g, y = this;
        if (l != null) {
          j(l, 0, T);
          if (c == null) c = K;
          else j(c, 0, 8);
          return Ot(new P(y), l + y.e + 1, c);
        }
        if (!(p = y.c)) return null;
        v = ((g = p.length - 1) - I(this.e / u)) * u;
        if (g = p[g]) for (; g % 10 == 0; g /= 10, v--) ;
        if (v < 0) v = 0;
        return v;
      };
      E.dividedBy = E.div = function(l, c) {
        return h(this, new P(l, c), R, K);
      };
      E.dividedToIntegerBy = E.idiv = function(l, c) {
        return h(this, new P(l, c), 0, 1);
      };
      E.exponentiatedBy = E.pow = function(l, c) {
        var p, v, g, y, A, m, b, $, w, C = this;
        l = new P(l);
        if (l.c && !l.isInteger()) {
          throw Error(a + "Exponent not an integer: " + Zt(l));
        }
        if (c != null) c = new P(c);
        m = l.e > 14;
        if (!C.c || !C.c[0] || C.c[0] == 1 && !C.e && C.c.length == 1 || !l.c || !l.c[0]) {
          w = new P(Math.pow(+Zt(C), m ? l.s * (2 - Y(l)) : +Zt(l)));
          return c ? w.mod(c) : w;
        }
        b = l.s < 0;
        if (c) {
          if (c.c ? !c.c[0] : !c.s) return new P(NaN);
          v = !b && C.isInteger() && c.isInteger();
          if (v) C = C.mod(c);
        } else if (l.e > 9 && (C.e > 0 || C.e < -1 || (C.e == 0 ? C.c[0] > 1 || m && C.c[1] >= 24e7 : C.c[0] < 8e13 || m && C.c[0] <= 9999975e7))) {
          y = C.s < 0 && Y(l) ? -0 : 0;
          if (C.e > -1) y = 1 / y;
          return new P(b ? 1 / y : y);
        } else if (Dt) {
          y = n(Dt / u + 2);
        }
        if (m) {
          p = new P(0.5);
          if (b) l.s = 1;
          $ = Y(l);
        } else {
          g = Math.abs(+Zt(l));
          $ = g % 2;
        }
        w = new P(U);
        for (; ; ) {
          if ($) {
            w = w.times(C);
            if (!w.c) break;
            if (y) {
              if (w.c.length > y) w.c.length = y;
            } else if (v) {
              w = w.mod(c);
            }
          }
          if (g) {
            g = i(g / 2);
            if (g === 0) break;
            $ = g % 2;
          } else {
            l = l.times(p);
            Ot(l, l.e + 1, 1);
            if (l.e > 14) {
              $ = Y(l);
            } else {
              g = +Zt(l);
              if (g === 0) break;
              $ = g % 2;
            }
          }
          C = C.times(C);
          if (y) {
            if (C.c && C.c.length > y) C.c.length = y;
          } else if (v) {
            C = C.mod(c);
          }
        }
        if (v) return w;
        if (b) w = U.div(w);
        return c ? w.mod(c) : y ? Ot(w, Dt, K, A) : w;
      };
      E.integerValue = function(l) {
        var c = new P(this);
        if (l == null) l = K;
        else j(l, 0, 8);
        return Ot(c, c.e + 1, l);
      };
      E.isEqualTo = E.eq = function(l, c) {
        return M(this, new P(l, c)) === 0;
      };
      E.isFinite = function() {
        return !!this.c;
      };
      E.isGreaterThan = E.gt = function(l, c) {
        return M(this, new P(l, c)) > 0;
      };
      E.isGreaterThanOrEqualTo = E.gte = function(l, c) {
        return (c = M(this, new P(l, c))) === 1 || c === 0;
      };
      E.isInteger = function() {
        return !!this.c && I(this.e / u) > this.c.length - 2;
      };
      E.isLessThan = E.lt = function(l, c) {
        return M(this, new P(l, c)) < 0;
      };
      E.isLessThanOrEqualTo = E.lte = function(l, c) {
        return (c = M(this, new P(l, c))) === -1 || c === 0;
      };
      E.isNaN = function() {
        return !this.s;
      };
      E.isNegative = function() {
        return this.s < 0;
      };
      E.isPositive = function() {
        return this.s > 0;
      };
      E.isZero = function() {
        return !!this.c && this.c[0] == 0;
      };
      E.minus = function(l, c) {
        var p, v, g, y, A = this, m = A.s;
        l = new P(l, c);
        c = l.s;
        if (!m || !c) return new P(NaN);
        if (m != c) {
          l.s = -c;
          return A.plus(l);
        }
        var b = A.e / u, $ = l.e / u, w = A.c, C = l.c;
        if (!b || !$) {
          if (!w || !C) return w ? (l.s = -c, l) : new P(C ? A : NaN);
          if (!w[0] || !C[0]) {
            return C[0] ? (l.s = -c, l) : new P(w[0] ? A : (
              // IEEE 754 (2008) 6.3: n - n = -0 when rounding to -Infinity
              K == 3 ? -0 : 0
            ));
          }
        }
        b = I(b);
        $ = I($);
        w = w.slice();
        if (m = b - $) {
          if (y = m < 0) {
            m = -m;
            g = w;
          } else {
            $ = b;
            g = C;
          }
          g.reverse();
          for (c = m; c--; g.push(0)) ;
          g.reverse();
        } else {
          v = (y = (m = w.length) < (c = C.length)) ? m : c;
          for (m = c = 0; c < v; c++) {
            if (w[c] != C[c]) {
              y = w[c] < C[c];
              break;
            }
          }
        }
        if (y) {
          g = w;
          w = C;
          C = g;
          l.s = -l.s;
        }
        c = (v = C.length) - (p = w.length);
        if (c > 0) for (; c--; w[p++] = 0) ;
        c = s - 1;
        for (; v > m; ) {
          if (w[--v] < C[v]) {
            for (p = v; p && !w[--p]; w[p] = c) ;
            --w[p];
            w[v] += s;
          }
          w[v] -= C[v];
        }
        for (; w[0] == 0; w.splice(0, 1), --$) ;
        if (!w[0]) {
          l.s = K == 3 ? -1 : 1;
          l.c = [l.e = 0];
          return l;
        }
        return Fo(l, w, $);
      };
      E.modulo = E.mod = function(l, c) {
        var p, v, g = this;
        l = new P(l, c);
        if (!g.c || !l.s || l.c && !l.c[0]) {
          return new P(NaN);
        } else if (!l.c || g.c && !g.c[0]) {
          return new P(g);
        }
        if (ve == 9) {
          v = l.s;
          l.s = 1;
          p = h(g, l, 0, 3);
          l.s = v;
          p.s *= v;
        } else {
          p = h(g, l, 0, ve);
        }
        l = g.minus(p.times(l));
        if (!l.c[0] && ve == 1) l.s = g.s;
        return l;
      };
      E.multipliedBy = E.times = function(l, c) {
        var p, v, g, y, A, m, b, $, w, C, q, W, V, nt, ct, X = this, Q = X.c, bt = (l = new P(l, c)).c;
        if (!Q || !bt || !Q[0] || !bt[0]) {
          if (!X.s || !l.s || Q && !Q[0] && !bt || bt && !bt[0] && !Q) {
            l.c = l.e = l.s = null;
          } else {
            l.s *= X.s;
            if (!Q || !bt) {
              l.c = l.e = null;
            } else {
              l.c = [0];
              l.e = 0;
            }
          }
          return l;
        }
        v = I(X.e / u) + I(l.e / u);
        l.s *= X.s;
        b = Q.length;
        C = bt.length;
        if (b < C) {
          V = Q;
          Q = bt;
          bt = V;
          g = b;
          b = C;
          C = g;
        }
        for (g = b + C, V = []; g--; V.push(0)) ;
        nt = s;
        ct = _;
        for (g = C; --g >= 0; ) {
          p = 0;
          q = bt[g] % ct;
          W = bt[g] / ct | 0;
          for (A = b, y = g + A; y > g; ) {
            $ = Q[--A] % ct;
            w = Q[A] / ct | 0;
            m = W * $ + w * q;
            $ = q * $ + m % ct * ct + V[y] + p;
            p = ($ / nt | 0) + (m / ct | 0) + W * w;
            V[y--] = $ % nt;
          }
          V[y] = p;
        }
        if (p) {
          ++v;
        } else {
          V.splice(0, 1);
        }
        return Fo(l, V, v);
      };
      E.negated = function() {
        var l = new P(this);
        l.s = -l.s || null;
        return l;
      };
      E.plus = function(l, c) {
        var p, v = this, g = v.s;
        l = new P(l, c);
        c = l.s;
        if (!g || !c) return new P(NaN);
        if (g != c) {
          l.s = -c;
          return v.minus(l);
        }
        var y = v.e / u, A = l.e / u, m = v.c, b = l.c;
        if (!y || !A) {
          if (!m || !b) return new P(g / 0);
          if (!m[0] || !b[0]) return b[0] ? l : new P(m[0] ? v : g * 0);
        }
        y = I(y);
        A = I(A);
        m = m.slice();
        if (g = y - A) {
          if (g > 0) {
            A = y;
            p = b;
          } else {
            g = -g;
            p = m;
          }
          p.reverse();
          for (; g--; p.push(0)) ;
          p.reverse();
        }
        g = m.length;
        c = b.length;
        if (g - c < 0) {
          p = b;
          b = m;
          m = p;
          c = g;
        }
        for (g = 0; c; ) {
          g = (m[--c] = m[c] + b[c] + g) / s | 0;
          m[c] = s === m[c] ? 0 : m[c] % s;
        }
        if (g) {
          m = [g].concat(m);
          ++A;
        }
        return Fo(l, m, A);
      };
      E.precision = E.sd = function(l, c) {
        var p, v, g, y = this;
        if (l != null && l !== !!l) {
          j(l, 1, T);
          if (c == null) c = K;
          else j(c, 0, 8);
          return Ot(new P(y), l, c);
        }
        if (!(p = y.c)) return null;
        g = p.length - 1;
        v = g * u + 1;
        if (g = p[g]) {
          for (; g % 10 == 0; g /= 10, v--) ;
          for (g = p[0]; g >= 10; g /= 10, v++) ;
        }
        if (l && y.e + 1 > v) v = y.e + 1;
        return v;
      };
      E.shiftedBy = function(l) {
        j(l, -d, d);
        return this.times("1e" + l);
      };
      E.squareRoot = E.sqrt = function() {
        var l, c, p, v, g, y = this, A = y.c, m = y.s, b = y.e, $ = R + 4, w = new P("0.5");
        if (m !== 1 || !A || !A[0]) {
          return new P(!m || m < 0 && (!A || A[0]) ? NaN : A ? y : 1 / 0);
        }
        m = Math.sqrt(+Zt(y));
        if (m == 0 || m == 1 / 0) {
          c = S(A);
          if ((c.length + b) % 2 == 0) c += "0";
          m = Math.sqrt(+c);
          b = I((b + 1) / 2) - (b < 0 || b % 2);
          if (m == 1 / 0) {
            c = "5e" + b;
          } else {
            c = m.toExponential();
            c = c.slice(0, c.indexOf("e") + 1) + b;
          }
          p = new P(c);
        } else {
          p = new P(m + "");
        }
        if (p.c[0]) {
          b = p.e;
          m = b + $;
          if (m < 3) m = 0;
          for (; ; ) {
            g = p;
            p = w.times(g.plus(h(y, g, $, 1)));
            if (S(g.c).slice(0, m) === (c = S(p.c)).slice(0, m)) {
              if (p.e < b) --m;
              c = c.slice(m - 3, m + 1);
              if (c == "9999" || !v && c == "4999") {
                if (!v) {
                  Ot(g, g.e + R + 2, 0);
                  if (g.times(g).eq(y)) {
                    p = g;
                    break;
                  }
                }
                $ += 4;
                m += 4;
                v = 1;
              } else {
                if (!+c || !+c.slice(1) && c.charAt(0) == "5") {
                  Ot(p, p.e + R + 2, 1);
                  l = !p.times(p).eq(y);
                }
                break;
              }
            }
          }
        }
        return Ot(p, p.e + R + 1, K, l);
      };
      E.toExponential = function(l, c) {
        if (l != null) {
          j(l, 0, T);
          l++;
        }
        return Lo(this, l, c, 1);
      };
      E.toFixed = function(l, c) {
        if (l != null) {
          j(l, 0, T);
          l = l + this.e + 1;
        }
        return Lo(this, l, c);
      };
      E.toFormat = function(l, c, p) {
        var v, g = this;
        if (p == null) {
          if (l != null && c && typeof c == "object") {
            p = c;
            c = null;
          } else if (l && typeof l == "object") {
            p = l;
            l = c = null;
          } else {
            p = cr;
          }
        } else if (typeof p != "object") {
          throw Error(a + "Argument not an object: " + p);
        }
        v = g.toFixed(l, c);
        if (g.c) {
          var y, A = v.split("."), m = +p.groupSize, b = +p.secondaryGroupSize, $ = p.groupSeparator || "", w = A[0], C = A[1], q = g.s < 0, W = q ? w.slice(1) : w, V = W.length;
          if (b) {
            y = m;
            m = b;
            b = y;
            V -= y;
          }
          if (m > 0 && V > 0) {
            y = V % m || m;
            w = W.substr(0, y);
            for (; y < V; y += m) w += $ + W.substr(y, m);
            if (b > 0) w += $ + W.slice(y);
            if (q) w = "-" + w;
          }
          v = C ? w + (p.decimalSeparator || "") + ((b = +p.fractionGroupSize) ? C.replace(
            new RegExp("\\d{" + b + "}\\B", "g"),
            "$&" + (p.fractionGroupSeparator || "")
          ) : C) : w;
        }
        return (p.prefix || "") + v + (p.suffix || "");
      };
      E.toFraction = function(l) {
        var c, p, v, g, y, A, m, b, $, w, C, q, W = this, V = W.c;
        if (l != null) {
          m = new P(l);
          if (!m.isInteger() && (m.c || m.s !== 1) || m.lt(U)) {
            throw Error(a + "Argument " + (m.isInteger() ? "out of range: " : "not an integer: ") + Zt(m));
          }
        }
        if (!V) return new P(W);
        c = new P(U);
        $ = p = new P(U);
        v = b = new P(U);
        q = S(V);
        y = c.e = q.length - W.e - 1;
        c.c[0] = x[(A = y % u) < 0 ? u + A : A];
        l = !l || m.comparedTo(c) > 0 ? y > 0 ? c : $ : m;
        A = gt;
        gt = 1 / 0;
        m = new P(q);
        b.c[0] = 0;
        for (; ; ) {
          w = h(m, c, 0, 1);
          g = p.plus(w.times(v));
          if (g.comparedTo(l) == 1) break;
          p = v;
          v = g;
          $ = b.plus(w.times(g = $));
          b = g;
          c = m.minus(w.times(g = c));
          m = g;
        }
        g = h(l.minus(p), v, 0, 1);
        b = b.plus(g.times($));
        p = p.plus(g.times(v));
        b.s = $.s = W.s;
        y = y * 2;
        C = h($, v, y, K).minus(W).abs().comparedTo(
          h(b, p, y, K).minus(W).abs()
        ) < 1 ? [$, v] : [b, p];
        gt = A;
        return C;
      };
      E.toNumber = function() {
        return +Zt(this);
      };
      E.toPrecision = function(l, c) {
        if (l != null) j(l, 1, T);
        return Lo(this, l, c, 2);
      };
      E.toString = function(l) {
        var c, p = this, v = p.s, g = p.e;
        if (g === null) {
          if (v) {
            c = "Infinity";
            if (v < 0) c = "-" + c;
          } else {
            c = "NaN";
          }
        } else {
          if (l == null) {
            c = g <= ot || g >= ut ? Z(S(p.c), g) : H(S(p.c), g, "0");
          } else if (l === 10 && $e) {
            p = Ot(new P(p), R + g + 1, K);
            c = H(S(p.c), p.e, "0");
          } else {
            j(l, 2, Kt.length, "Base");
            c = N(H(S(p.c), g, "0"), 10, l, v, true);
          }
          if (v < 0 && p.c[0]) c = "-" + c;
        }
        return c;
      };
      E.valueOf = E.toJSON = function() {
        return Zt(this);
      };
      E._isBigNumber = true;
      if (k != null) P.set(k);
      return P;
    }
    function I(k) {
      var h = k | 0;
      return k > 0 || k === h ? h : h - 1;
    }
    function S(k) {
      var h, N, B = 1, E = k.length, U = k[0] + "";
      for (; B < E; ) {
        h = k[B++] + "";
        N = u - h.length;
        for (; N--; h = "0" + h) ;
        U += h;
      }
      for (E = U.length; U.charCodeAt(--E) === 48; ) ;
      return U.slice(0, E + 1 || 1);
    }
    function M(k, h) {
      var N, B, E = k.c, U = h.c, R = k.s, K = h.s, ot = k.e, ut = h.e;
      if (!R || !K) return null;
      N = E && !E[0];
      B = U && !U[0];
      if (N || B) return N ? B ? 0 : -K : R;
      if (R != K) return R;
      N = R < 0;
      B = ot == ut;
      if (!E || !U) return B ? 0 : !E ^ N ? 1 : -1;
      if (!B) return ot > ut ^ N ? 1 : -1;
      K = (ot = E.length) < (ut = U.length) ? ot : ut;
      for (R = 0; R < K; R++) if (E[R] != U[R]) return E[R] > U[R] ^ N ? 1 : -1;
      return ot == ut ? 0 : ot > ut ^ N ? 1 : -1;
    }
    function j(k, h, N, B) {
      if (k < h || k > N || k !== i(k)) {
        throw Error(a + (B || "Argument") + (typeof k == "number" ? k < h || k > N ? " out of range: " : " not an integer: " : " not a primitive number: ") + String(k));
      }
    }
    function Y(k) {
      var h = k.c.length - 1;
      return I(k.e / u) == h && k.c[h] % 2 != 0;
    }
    function Z(k, h) {
      return (k.length > 1 ? k.charAt(0) + "." + k.slice(1) : k) + (h < 0 ? "e" : "e+") + h;
    }
    function H(k, h, N) {
      var B, E;
      if (h < 0) {
        for (E = N + "."; ++h; E += N) ;
        k = E + k;
      } else {
        B = k.length;
        if (++h > B) {
          for (E = N, h -= B; --h; E += N) ;
          k += E;
        } else if (h < B) {
          k = k.slice(0, h) + "." + k.slice(h);
        }
      }
      return k;
    }
    r = F();
    r["default"] = r.BigNumber = r;
    if (t.exports) {
      t.exports = r;
    } else {
      if (!e) {
        e = typeof self != "undefined" && self ? self : window;
      }
      e.BigNumber = r;
    }
  })(ch);
})(Nf);
var Pf = Nf.exports;
var Ft = ln();
var Ph = fn();
var Lh = sn;
var Fh = Pf;
var dt = {
  trillion: Math.pow(10, 12),
  billion: Math.pow(10, 9),
  million: Math.pow(10, 6),
  thousand: Math.pow(10, 3)
};
var br = {
  totalLength: 0,
  characteristic: 0,
  forceAverage: false,
  average: false,
  mantissa: -1,
  optionalMantissa: true,
  thousandSeparated: false,
  spaceSeparated: false,
  negative: "sign",
  forceSign: false,
  roundingFunction: Math.round,
  spaceSeparatedAbbreviation: false
};
var { binarySuffixes: Lf, decimalSuffixes: uo } = Ft.currentBytes();
var un = {
  general: { scale: 1024, suffixes: uo, marker: "bd" },
  binary: { scale: 1024, suffixes: Lf, marker: "b" },
  decimal: { scale: 1e3, suffixes: uo, marker: "d" }
};
function Ih(t, e = {}, r) {
  if (typeof e === "string") {
    e = Lh.parseFormat(e);
  }
  let o = Ph.validateFormat(e);
  if (!o) {
    return "ERROR: invalid format";
  }
  let n = e.prefix || "";
  let i = e.postfix || "";
  let a = Bh(t, e, r);
  a = rg(a, n);
  a = og(a, i);
  return a;
}
function Bh(t, e, r) {
  switch (e.output) {
    case "currency": {
      e = tr(e, Ft.currentCurrencyDefaultFormat());
      return Hh(t, e, Ft);
    }
    case "percent": {
      e = tr(e, Ft.currentPercentageDefaultFormat());
      return zh(t, e, Ft, r);
    }
    case "byte":
      e = tr(e, Ft.currentByteDefaultFormat());
      return Gh(t, e, Ft, r);
    case "time":
      e = tr(e, Ft.currentTimeDefaultFormat());
      return qh(t);
    case "ordinal":
      e = tr(e, Ft.currentOrdinalDefaultFormat());
      return Uh(t, e, Ft);
    case "number":
    default:
      return xr({
        instance: t,
        providedFormat: e,
        numbro: r
      });
  }
}
function jh(t) {
  let e = un.decimal;
  return po(t._value, e.suffixes, e.scale).suffix;
}
function Dh(t) {
  let e = un.binary;
  return po(t._value, e.suffixes, e.scale).suffix;
}
function Rh(t) {
  let e = un.general;
  return po(t._value, e.suffixes, e.scale).suffix;
}
function po(t, e, r) {
  let o = e[0];
  let n = Math.abs(t);
  if (n >= r) {
    for (let i = 1; i < e.length; ++i) {
      let a = Math.pow(r, i);
      let f = Math.pow(r, i + 1);
      if (n >= a && n < f) {
        o = e[i];
        t = t / a;
        break;
      }
    }
    if (o === e[0]) {
      t = t / Math.pow(r, e.length - 1);
      o = e[e.length - 1];
    }
  }
  return { value: t, suffix: o };
}
function Gh(t, e, r, o) {
  let n = e.base || "binary";
  let i = Object.assign({}, br, e);
  const { binarySuffixes: a, decimalSuffixes: f } = r.currentBytes();
  const s = {
    general: { scale: 1024, suffixes: f || uo, marker: "bd" },
    binary: { scale: 1024, suffixes: a || Lf, marker: "b" },
    decimal: { scale: 1e3, suffixes: f || uo, marker: "d" }
  };
  let u = s[n];
  let { value: d, suffix: x } = po(t._value, u.suffixes, u.scale);
  let _ = xr({
    instance: o(d),
    providedFormat: e,
    state: r,
    defaults: r.currentByteDefaultFormat()
  });
  return `${_}${i.spaceSeparated ? " " : ""}${x}`;
}
function Uh(t, e, r) {
  let o = r.currentOrdinal();
  let n = Object.assign({}, br, e);
  let i = xr({
    instance: t,
    providedFormat: e,
    state: r
  });
  let a = o(t._value);
  return `${i}${n.spaceSeparated ? " " : ""}${a}`;
}
function qh(t) {
  let e = Math.floor(t._value / 60 / 60);
  let r = Math.floor((t._value - e * 60 * 60) / 60);
  let o = Math.round(t._value - e * 60 * 60 - r * 60);
  return `${e}:${r < 10 ? "0" : ""}${r}:${o < 10 ? "0" : ""}${o}`;
}
function zh(t, e, r, o) {
  let n = e.prefixSymbol;
  let i = xr({
    instance: o(t._value * 100),
    providedFormat: e,
    state: r
  });
  let a = Object.assign({}, br, e);
  if (n) {
    return `%${a.spaceSeparated ? " " : ""}${i}`;
  }
  return `${i}${a.spaceSeparated ? " " : ""}%`;
}
function Hh(t, e, r) {
  const o = r.currentCurrency();
  let n = Object.assign({}, e);
  let i = Object.assign({}, br, n);
  let a = void 0;
  let f = "";
  let s = !!i.totalLength || !!i.forceAverage || i.average;
  let u = n.currencyPosition || o.position;
  let d = n.currencySymbol || o.symbol;
  const x = i.spaceSeparatedCurrency !== void 0 ? i.spaceSeparatedCurrency : i.spaceSeparated;
  if (n.lowPrecision === void 0) {
    n.lowPrecision = false;
  }
  if (x) {
    f = " ";
  }
  if (u === "infix") {
    a = f + d + f;
  }
  let _ = xr({
    instance: t,
    providedFormat: n,
    state: r,
    decimalSeparator: a
  });
  if (u === "prefix") {
    if (t._value < 0 && i.negative === "sign") {
      _ = `-${f}${d}${_.slice(1)}`;
    } else if (t._value > 0 && i.forceSign) {
      _ = `+${f}${d}${_.slice(1)}`;
    } else {
      _ = d + f + _;
    }
  }
  if (!u || u === "postfix") {
    f = !i.spaceSeparatedAbbreviation && s ? "" : f;
    _ = _ + f + d;
  }
  return _;
}
function Wh({ value: t, forceAverage: e, lowPrecision: r = true, abbreviations: o, spaceSeparated: n = false, totalLength: i = 0, roundingFunction: a = Math.round }) {
  let f = "";
  let s = Math.abs(t);
  let u = -1;
  if (e && o[e] && dt[e]) {
    f = o[e];
    t = t / dt[e];
  } else {
    if (s >= dt.trillion || r && a(s / dt.trillion) === 1) {
      f = o.trillion;
      t = t / dt.trillion;
    } else if (s < dt.trillion && s >= dt.billion || r && a(s / dt.billion) === 1) {
      f = o.billion;
      t = t / dt.billion;
    } else if (s < dt.billion && s >= dt.million || r && a(s / dt.million) === 1) {
      f = o.million;
      t = t / dt.million;
    } else if (s < dt.million && s >= dt.thousand || r && a(s / dt.thousand) === 1) {
      f = o.thousand;
      t = t / dt.thousand;
    }
  }
  let d = n ? " " : "";
  if (f) {
    f = d + f;
  }
  if (i) {
    let x = t < 0;
    let _ = t.toString().split(".")[0];
    let T = x ? _.length - 1 : _.length;
    u = Math.max(i - T, 0);
  }
  return { value: t, abbreviation: f, mantissaPrecision: u };
}
function Kh({ value: t, characteristicPrecision: e }) {
  let [r, o] = t.toExponential().split("e");
  let n = +r;
  if (!e) {
    return {
      value: n,
      abbreviation: `e${o}`
    };
  }
  let i = 1;
  if (i < e) {
    n = n * Math.pow(10, e - i);
    o = +o - (e - i);
    o = o >= 0 ? `+${o}` : o;
  }
  return {
    value: n,
    abbreviation: `e${o}`
  };
}
function lo(t) {
  let e = "";
  for (let r = 0; r < t; r++) {
    e += "0";
  }
  return e;
}
function Zh(t, e) {
  let r = t.toString();
  let [o, n] = r.split("e");
  let [i, a = ""] = o.split(".");
  if (+n > 0) {
    r = i + a + lo(n - a.length);
  } else {
    let f = ".";
    if (+i < 0) {
      f = `-0${f}`;
    } else {
      f = `0${f}`;
    }
    let s = (lo(-n - 1) + Math.abs(i) + a).substr(0, e);
    if (s.length < e) {
      s += lo(e - s.length);
    }
    r = f + s;
  }
  if (+n > 0 && e > 0) {
    r += `.${lo(e)}`;
  }
  return r;
}
function Yh(t, e, r = Math.round) {
  if (t.toString().indexOf("e") !== -1) {
    return Zh(t, e);
  }
  const o = new Fh(r(+`${t}e+${e}`) / Math.pow(10, e));
  return o.toFixed(e);
}
function Xh(t, e, r, o, n, i) {
  if (o === -1) {
    return t;
  }
  let a = Yh(e, o, i);
  let [f, s = ""] = a.toString().split(".");
  if (s.match(/^0+$/) && (r || n)) {
    return f;
  }
  let u = s.match(/0+$/);
  if (n && u) {
    return `${f}.${s.toString().slice(0, u.index)}`;
  }
  return a.toString();
}
function Vh(t, e, r, o) {
  let n = t;
  let [i, a] = n.toString().split(".");
  if (i.match(/^-?0$/) && r) {
    if (!a) {
      return i.replace("0", "");
    }
    return `${i.replace("0", "")}.${a}`;
  }
  const f = e < 0 && i.indexOf("-") === 0;
  if (f) {
    i = i.slice(1);
    n = n.slice(1);
  }
  if (i.length < o) {
    let s = o - i.length;
    for (let u = 0; u < s; u++) {
      n = `0${n}`;
    }
  }
  if (f) {
    n = `-${n}`;
  }
  return n.toString();
}
function Jh(t, e) {
  let r = [];
  let o = 0;
  for (let n = t; n > 0; n--) {
    if (o === e) {
      r.unshift(n);
      o = 0;
    }
    o++;
  }
  return r;
}
function Qh(t, e, r, o, n) {
  let i = o.currentDelimiters();
  let a = i.thousands;
  n = n || i.decimal;
  let f = i.thousandsSize || 3;
  let s = t.toString();
  let u = s.split(".")[0];
  let d = s.split(".")[1];
  const x = e < 0 && u.indexOf("-") === 0;
  if (r) {
    if (x) {
      u = u.slice(1);
    }
    let _ = Jh(u.length, f);
    _.forEach((T, F) => {
      u = u.slice(0, T + F) + a + u.slice(T + F);
    });
    if (x) {
      u = `-${u}`;
    }
  }
  if (!d) {
    s = u;
  } else {
    s = u + n + d;
  }
  return s;
}
function tg(t, e) {
  return t + e;
}
function eg(t, e, r) {
  if (e === 0) {
    return t;
  }
  if (+t === 0) {
    return t.replace("-", "");
  }
  if (e > 0) {
    return `+${t}`;
  }
  if (r === "sign") {
    return t;
  }
  return `(${t.replace("-", "")})`;
}
function rg(t, e) {
  return e + t;
}
function og(t, e) {
  return t + e;
}
function xr({ instance: t, providedFormat: e, state: r = Ft, decimalSeparator: o, defaults: n = r.currentDefaults() }) {
  let i = t._value;
  if (i === 0 && r.hasZeroFormat()) {
    return r.getZeroFormat();
  }
  if (!isFinite(i)) {
    return i.toString();
  }
  let a = Object.assign({}, br, n, e);
  let f = a.totalLength;
  let s = f ? 0 : a.characteristic;
  let u = a.optionalCharacteristic;
  let d = a.forceAverage;
  let x = a.lowPrecision;
  let _ = !!f || !!d || a.average;
  let T = f ? -1 : _ && e.mantissa === void 0 ? 0 : a.mantissa;
  let F = f ? false : e.optionalMantissa === void 0 ? T === -1 : a.optionalMantissa;
  let I = a.trimMantissa;
  let S = a.thousandSeparated;
  let M = a.spaceSeparated;
  let j = a.negative;
  let Y = a.forceSign;
  let Z = a.exponential;
  let H = a.roundingFunction;
  let k = "";
  if (_) {
    let N = Wh({
      value: i,
      forceAverage: d,
      lowPrecision: x,
      abbreviations: r.currentAbbreviations(),
      spaceSeparated: M,
      roundingFunction: H,
      totalLength: f
    });
    i = N.value;
    k += N.abbreviation;
    if (f) {
      T = N.mantissaPrecision;
    }
  }
  if (Z) {
    let N = Kh({
      value: i,
      characteristicPrecision: s
    });
    i = N.value;
    k = N.abbreviation + k;
  }
  let h = Xh(i.toString(), i, F, T, I, H);
  h = Vh(h, i, u, s);
  h = Qh(h, i, S, r, o);
  if (_ || Z) {
    h = tg(h, k);
  }
  if (Y || i < 0) {
    h = eg(h, i, j);
  }
  return h;
}
function tr(t, e) {
  if (!t) {
    return e;
  }
  let r = Object.keys(t);
  if (r.length === 1 && r[0] === "output") {
    return e;
  }
  return t;
}
var ng = (t) => ({
  format: (...e) => Ih(...e, t),
  getByteUnit: (...e) => Rh(...e, t),
  getBinaryByteUnit: (...e) => Dh(...e, t),
  getDecimalByteUnit: (...e) => jh(...e, t),
  formatOrDefault: tr
});
var te = Pf;
function ig(t, e, r) {
  let o = new te(t._value);
  let n = e;
  if (r.isNumbro(e)) {
    n = e._value;
  }
  n = new te(n);
  t._value = o.plus(n).toNumber();
  return t;
}
function Ff(t, e, r) {
  let o = new te(t._value);
  let n = e;
  if (r.isNumbro(e)) {
    n = e._value;
  }
  n = new te(n);
  t._value = o.minus(n).toNumber();
  return t;
}
function ag(t, e, r) {
  let o = new te(t._value);
  let n = e;
  if (r.isNumbro(e)) {
    n = e._value;
  }
  n = new te(n);
  t._value = o.times(n).toNumber();
  return t;
}
function fg(t, e, r) {
  let o = new te(t._value);
  let n = e;
  if (r.isNumbro(e)) {
    n = e._value;
  }
  n = new te(n);
  t._value = o.dividedBy(n).toNumber();
  return t;
}
function sg(t, e, r) {
  let o = e;
  if (r.isNumbro(e)) {
    o = e._value;
  }
  t._value = o;
  return t;
}
function lg(t, e, r) {
  let o = r(t._value);
  Ff(o, e, r);
  return Math.abs(o._value);
}
var ug = (t) => ({
  add: (e, r) => ig(e, r, t),
  subtract: (e, r) => Ff(e, r, t),
  multiply: (e, r) => ag(e, r, t),
  divide: (e, r) => fg(e, r, t),
  set: (e, r) => sg(e, r, t),
  difference: (e, r) => lg(e, r, t),
  BigNumber: te
});
var cg = "2.5.0";
var zt = ln();
var pg = fn();
var mg = Nh(ft);
var dg = Mf();
var Te = ng(ft);
var ke = ug(ft);
var hg = sn;
var co = class {
  constructor(e) {
    this._value = e;
  }
  clone() {
    return ft(this._value);
  }
  format(e = {}) {
    return Te.format(this, e);
  }
  formatCurrency(e) {
    if (typeof e === "string") {
      e = hg.parseFormat(e);
    }
    e = Te.formatOrDefault(e, zt.currentCurrencyDefaultFormat());
    e.output = "currency";
    return Te.format(this, e);
  }
  formatTime(e = {}) {
    e.output = "time";
    return Te.format(this, e);
  }
  binaryByteUnits() {
    return Te.getBinaryByteUnit(this);
  }
  decimalByteUnits() {
    return Te.getDecimalByteUnit(this);
  }
  byteUnits() {
    return Te.getByteUnit(this);
  }
  difference(e) {
    return ke.difference(this, e);
  }
  add(e) {
    return ke.add(this, e);
  }
  subtract(e) {
    return ke.subtract(this, e);
  }
  multiply(e) {
    return ke.multiply(this, e);
  }
  divide(e) {
    return ke.divide(this, e);
  }
  set(e) {
    return ke.set(this, If(e));
  }
  value() {
    return this._value;
  }
  valueOf() {
    return this._value;
  }
};
function If(t) {
  let e = t;
  if (ft.isNumbro(t)) {
    e = t._value;
  } else if (typeof t === "string") {
    e = ft.unformat(t);
  } else if (isNaN(t)) {
    e = NaN;
  }
  return e;
}
function ft(t) {
  return new co(If(t));
}
ft.version = cg;
ft.isNumbro = function(t) {
  return t instanceof co;
};
ft.language = zt.currentLanguage;
ft.registerLanguage = zt.registerLanguage;
ft.setLanguage = zt.setLanguage;
ft.languages = zt.languages;
ft.languageData = zt.languageData;
ft.zeroFormat = zt.setZeroFormat;
ft.defaultFormat = zt.currentDefaults;
ft.setDefaults = zt.setDefaults;
ft.defaultCurrencyFormat = zt.currentCurrencyDefaultFormat;
ft.validate = pg.validate;
ft.loadLanguagesInNode = mg.loadLanguagesInNode;
ft.unformat = dg.unformat;
ft.BigNumber = ke.BigNumber;
var gg = ft;
var KO = /* @__PURE__ */ ph(gg);

// src/charts/_common/config.ts
var YO = 618;
var XO = 300;
var Bf = 25;
var VO = "#efefef";
var JO = "#282828";
var QO = {
  titles: true,
  logo: true,
  footer: true,
  variant: "light",
  isTerminalClient: false
};

// ../../node_modules/chroma-js/src/utils/limit.js
var { min: bg, max: xg } = Math;
var Tt = (t, e = 0, r = 1) => {
  return bg(xg(e, t), r);
};

// ../../node_modules/chroma-js/src/utils/clip_rgb.js
var Ce = (t) => {
  t._clipped = false;
  t._unclipped = t.slice(0);
  for (let e = 0; e <= 3; e++) {
    if (e < 3) {
      if (t[e] < 0 || t[e] > 255) t._clipped = true;
      t[e] = Tt(t[e], 0, 255);
    } else if (e === 3) {
      t[e] = Tt(t[e], 0, 1);
    }
  }
  return t;
};

// ../../node_modules/chroma-js/src/utils/type.js
var jf = {};
for (let t of [
  "Boolean",
  "Number",
  "String",
  "Function",
  "Array",
  "Date",
  "RegExp",
  "Undefined",
  "Null"
]) {
  jf[`[object ${t}]`] = t.toLowerCase();
}
function D(t) {
  return jf[Object.prototype.toString.call(t)] || "object";
}

// ../../node_modules/chroma-js/src/utils/unpack.js
var L = (t, e = null) => {
  if (t.length >= 3) return Array.prototype.slice.call(t);
  if (D(t[0]) == "object" && e) {
    return e.split("").filter((r) => t[0][r] !== void 0).map((r) => t[0][r]);
  }
  return t[0].slice(0);
};

// ../../node_modules/chroma-js/src/utils/last.js
var $t = (t) => {
  if (t.length < 2) return null;
  const e = t.length - 1;
  if (D(t[e]) == "string") return t[e].toLowerCase();
  return null;
};

// ../../node_modules/chroma-js/src/utils/index.js
var { PI: mo, min: ho, max: go } = Math;
var ht = (t) => Math.round(t * 100) / 100;
var yr = (t) => Math.round(t * 100) / 100;
var kt = mo * 2;
var bo = mo / 3;
var Df = mo / 180;
var Rf = 180 / mo;
function xo(t) {
  return [...t.slice(0, 3).reverse(), ...t.slice(3)];
}

// ../../node_modules/chroma-js/src/io/input.js
var G = {
  format: {},
  autodetect: []
};

// ../../node_modules/chroma-js/src/Color.js
var cn = class {
  constructor(...e) {
    const r = this;
    if (D(e[0]) === "object" && e[0].constructor && e[0].constructor === this.constructor) {
      return e[0];
    }
    let o = $t(e);
    let n = false;
    if (!o) {
      n = true;
      if (!G.sorted) {
        G.autodetect = G.autodetect.sort((i, a) => a.p - i.p);
        G.sorted = true;
      }
      for (let i of G.autodetect) {
        o = i.test(...e);
        if (o) break;
      }
    }
    if (G.format[o]) {
      const i = G.format[o].apply(
        null,
        n ? e : e.slice(0, -1)
      );
      r._rgb = Ce(i);
    } else {
      throw new Error("unknown format: " + e);
    }
    if (r._rgb.length === 3) r._rgb.push(1);
  }
  toString() {
    if (D(this.hex) == "function") return this.hex();
    return `[${this._rgb.join(",")}]`;
  }
};
var O = cn;

// ../../node_modules/chroma-js/src/version.js
var Gf = "3.1.2";

// ../../node_modules/chroma-js/src/chroma.js
var Uf = (...t) => {
  return new O(...t);
};
Uf.version = Gf;
var z = Uf;

// ../../node_modules/chroma-js/src/colors/w3cx11.js
var yg = {
  aliceblue: "#f0f8ff",
  antiquewhite: "#faebd7",
  aqua: "#00ffff",
  aquamarine: "#7fffd4",
  azure: "#f0ffff",
  beige: "#f5f5dc",
  bisque: "#ffe4c4",
  black: "#000000",
  blanchedalmond: "#ffebcd",
  blue: "#0000ff",
  blueviolet: "#8a2be2",
  brown: "#a52a2a",
  burlywood: "#deb887",
  cadetblue: "#5f9ea0",
  chartreuse: "#7fff00",
  chocolate: "#d2691e",
  coral: "#ff7f50",
  cornflowerblue: "#6495ed",
  cornsilk: "#fff8dc",
  crimson: "#dc143c",
  cyan: "#00ffff",
  darkblue: "#00008b",
  darkcyan: "#008b8b",
  darkgoldenrod: "#b8860b",
  darkgray: "#a9a9a9",
  darkgreen: "#006400",
  darkgrey: "#a9a9a9",
  darkkhaki: "#bdb76b",
  darkmagenta: "#8b008b",
  darkolivegreen: "#556b2f",
  darkorange: "#ff8c00",
  darkorchid: "#9932cc",
  darkred: "#8b0000",
  darksalmon: "#e9967a",
  darkseagreen: "#8fbc8f",
  darkslateblue: "#483d8b",
  darkslategray: "#2f4f4f",
  darkslategrey: "#2f4f4f",
  darkturquoise: "#00ced1",
  darkviolet: "#9400d3",
  deeppink: "#ff1493",
  deepskyblue: "#00bfff",
  dimgray: "#696969",
  dimgrey: "#696969",
  dodgerblue: "#1e90ff",
  firebrick: "#b22222",
  floralwhite: "#fffaf0",
  forestgreen: "#228b22",
  fuchsia: "#ff00ff",
  gainsboro: "#dcdcdc",
  ghostwhite: "#f8f8ff",
  gold: "#ffd700",
  goldenrod: "#daa520",
  gray: "#808080",
  green: "#008000",
  greenyellow: "#adff2f",
  grey: "#808080",
  honeydew: "#f0fff0",
  hotpink: "#ff69b4",
  indianred: "#cd5c5c",
  indigo: "#4b0082",
  ivory: "#fffff0",
  khaki: "#f0e68c",
  laserlemon: "#ffff54",
  lavender: "#e6e6fa",
  lavenderblush: "#fff0f5",
  lawngreen: "#7cfc00",
  lemonchiffon: "#fffacd",
  lightblue: "#add8e6",
  lightcoral: "#f08080",
  lightcyan: "#e0ffff",
  lightgoldenrod: "#fafad2",
  lightgoldenrodyellow: "#fafad2",
  lightgray: "#d3d3d3",
  lightgreen: "#90ee90",
  lightgrey: "#d3d3d3",
  lightpink: "#ffb6c1",
  lightsalmon: "#ffa07a",
  lightseagreen: "#20b2aa",
  lightskyblue: "#87cefa",
  lightslategray: "#778899",
  lightslategrey: "#778899",
  lightsteelblue: "#b0c4de",
  lightyellow: "#ffffe0",
  lime: "#00ff00",
  limegreen: "#32cd32",
  linen: "#faf0e6",
  magenta: "#ff00ff",
  maroon: "#800000",
  maroon2: "#7f0000",
  maroon3: "#b03060",
  mediumaquamarine: "#66cdaa",
  mediumblue: "#0000cd",
  mediumorchid: "#ba55d3",
  mediumpurple: "#9370db",
  mediumseagreen: "#3cb371",
  mediumslateblue: "#7b68ee",
  mediumspringgreen: "#00fa9a",
  mediumturquoise: "#48d1cc",
  mediumvioletred: "#c71585",
  midnightblue: "#191970",
  mintcream: "#f5fffa",
  mistyrose: "#ffe4e1",
  moccasin: "#ffe4b5",
  navajowhite: "#ffdead",
  navy: "#000080",
  oldlace: "#fdf5e6",
  olive: "#808000",
  olivedrab: "#6b8e23",
  orange: "#ffa500",
  orangered: "#ff4500",
  orchid: "#da70d6",
  palegoldenrod: "#eee8aa",
  palegreen: "#98fb98",
  paleturquoise: "#afeeee",
  palevioletred: "#db7093",
  papayawhip: "#ffefd5",
  peachpuff: "#ffdab9",
  peru: "#cd853f",
  pink: "#ffc0cb",
  plum: "#dda0dd",
  powderblue: "#b0e0e6",
  purple: "#800080",
  purple2: "#7f007f",
  purple3: "#a020f0",
  rebeccapurple: "#663399",
  red: "#ff0000",
  rosybrown: "#bc8f8f",
  royalblue: "#4169e1",
  saddlebrown: "#8b4513",
  salmon: "#fa8072",
  sandybrown: "#f4a460",
  seagreen: "#2e8b57",
  seashell: "#fff5ee",
  sienna: "#a0522d",
  silver: "#c0c0c0",
  skyblue: "#87ceeb",
  slateblue: "#6a5acd",
  slategray: "#708090",
  slategrey: "#708090",
  snow: "#fffafa",
  springgreen: "#00ff7f",
  steelblue: "#4682b4",
  tan: "#d2b48c",
  teal: "#008080",
  thistle: "#d8bfd8",
  tomato: "#ff6347",
  turquoise: "#40e0d0",
  violet: "#ee82ee",
  wheat: "#f5deb3",
  white: "#ffffff",
  whitesmoke: "#f5f5f5",
  yellow: "#ffff00",
  yellowgreen: "#9acd32"
};
var xe = yg;

// ../../node_modules/chroma-js/src/io/hex/hex2rgb.js
var _g = /^#?([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/;
var wg = /^#?([A-Fa-f0-9]{8}|[A-Fa-f0-9]{4})$/;
var vg = (t) => {
  if (t.match(_g)) {
    if (t.length === 4 || t.length === 7) {
      t = t.substr(1);
    }
    if (t.length === 3) {
      t = t.split("");
      t = t[0] + t[0] + t[1] + t[1] + t[2] + t[2];
    }
    const e = parseInt(t, 16);
    const r = e >> 16;
    const o = e >> 8 & 255;
    const n = e & 255;
    return [r, o, n, 1];
  }
  if (t.match(wg)) {
    if (t.length === 5 || t.length === 9) {
      t = t.substr(1);
    }
    if (t.length === 4) {
      t = t.split("");
      t = t[0] + t[0] + t[1] + t[1] + t[2] + t[2] + t[3] + t[3];
    }
    const e = parseInt(t, 16);
    const r = e >> 24 & 255;
    const o = e >> 16 & 255;
    const n = e >> 8 & 255;
    const i = Math.round((e & 255) / 255 * 100) / 100;
    return [r, o, n, i];
  }
  throw new Error(`unknown hex color: ${t}`);
};
var yo = vg;

// ../../node_modules/chroma-js/src/io/hex/rgb2hex.js
var { round: _o } = Math;
var $g = (...t) => {
  let [e, r, o, n] = L(t, "rgba");
  let i = $t(t) || "auto";
  if (n === void 0) n = 1;
  if (i === "auto") {
    i = n < 1 ? "rgba" : "rgb";
  }
  e = _o(e);
  r = _o(r);
  o = _o(o);
  const a = e << 16 | r << 8 | o;
  let f = "000000" + a.toString(16);
  f = f.substr(f.length - 6);
  let s = "0" + _o(n * 255).toString(16);
  s = s.substr(s.length - 2);
  switch (i.toLowerCase()) {
    case "rgba":
      return `#${f}${s}`;
    case "argb":
      return `#${s}${f}`;
    default:
      return `#${f}`;
  }
};
var wo = $g;

// ../../node_modules/chroma-js/src/io/named/index.js
O.prototype.name = function() {
  const t = wo(this._rgb, "rgb");
  for (let e of Object.keys(xe)) {
    if (xe[e] === t) return e.toLowerCase();
  }
  return t;
};
G.format.named = (t) => {
  t = t.toLowerCase();
  if (xe[t]) return yo(xe[t]);
  throw new Error("unknown color name: " + t);
};
G.autodetect.push({
  p: 5,
  test: (t, ...e) => {
    if (!e.length && D(t) === "string" && xe[t.toLowerCase()]) {
      return "named";
    }
  }
});

// ../../node_modules/chroma-js/src/ops/alpha.js
O.prototype.alpha = function(t, e = false) {
  if (t !== void 0 && D(t) === "number") {
    if (e) {
      this._rgb[3] = t;
      return this;
    }
    return new O([this._rgb[0], this._rgb[1], this._rgb[2], t], "rgb");
  }
  return this._rgb[3];
};

// ../../node_modules/chroma-js/src/ops/clipped.js
O.prototype.clipped = function() {
  return this._rgb._clipped || false;
};

// ../../node_modules/chroma-js/src/io/lab/lab-constants.js
var _r = {
  // Corresponds roughly to RGB brighter/darker
  Kn: 18,
  // D65 standard referent
  labWhitePoint: "d65",
  Xn: 0.95047,
  Yn: 1,
  Zn: 1.08883,
  t0: 0.137931034,
  // 4 / 29
  t1: 0.206896552,
  // 6 / 29
  t2: 0.12841855,
  // 3 * t1 * t1
  t3: 8856452e-9,
  // t1 * t1 * t1,
  kE: 216 / 24389,
  kKE: 8,
  kK: 24389 / 27,
  RefWhiteRGB: {
    // sRGB
    X: 0.95047,
    Y: 1,
    Z: 1.08883
  },
  MtxRGB2XYZ: {
    m00: 0.4124564390896922,
    m01: 0.21267285140562253,
    m02: 0.0193338955823293,
    m10: 0.357576077643909,
    m11: 0.715152155287818,
    m12: 0.11919202588130297,
    m20: 0.18043748326639894,
    m21: 0.07217499330655958,
    m22: 0.9503040785363679
  },
  MtxXYZ2RGB: {
    m00: 3.2404541621141045,
    m01: -0.9692660305051868,
    m02: 0.055643430959114726,
    m10: -1.5371385127977166,
    m11: 1.8760108454466942,
    m12: -0.2040259135167538,
    m20: -0.498531409556016,
    m21: 0.041556017530349834,
    m22: 1.0572251882231791
  },
  // used in rgb2xyz
  As: 0.9414285350000001,
  Bs: 1.040417467,
  Cs: 1.089532651,
  MtxAdaptMa: {
    m00: 0.8951,
    m01: -0.7502,
    m02: 0.0389,
    m10: 0.2664,
    m11: 1.7135,
    m12: -0.0685,
    m20: -0.1614,
    m21: 0.0367,
    m22: 1.0296
  },
  MtxAdaptMaI: {
    m00: 0.9869929054667123,
    m01: 0.43230526972339456,
    m02: -0.008528664575177328,
    m10: -0.14705425642099013,
    m11: 0.5183602715367776,
    m12: 0.04004282165408487,
    m20: 0.15996265166373125,
    m21: 0.0492912282128556,
    m22: 0.9684866957875502
  }
};
var Ht = _r;
var Ag = /* @__PURE__ */ new Map([
  // ASTM E308-01
  ["a", [1.0985, 0.35585]],
  // Wyszecki & Stiles, p. 769
  ["b", [1.0985, 0.35585]],
  // C ASTM E308-01
  ["c", [0.98074, 1.18232]],
  // D50 (ASTM E308-01)
  ["d50", [0.96422, 0.82521]],
  // D55 (ASTM E308-01)
  ["d55", [0.95682, 0.92149]],
  // D65 (ASTM E308-01)
  ["d65", [0.95047, 1.08883]],
  // E (ASTM E308-01)
  ["e", [1, 1, 1]],
  // F2 (ASTM E308-01)
  ["f2", [0.99186, 0.67393]],
  // F7 (ASTM E308-01)
  ["f7", [0.95041, 1.08747]],
  // F11 (ASTM E308-01)
  ["f11", [1.00962, 0.6435]],
  ["icc", [0.96422, 0.82521]]
]);
function Ct(t) {
  const e = Ag.get(String(t).toLowerCase());
  if (!e) {
    throw new Error("unknown Lab illuminant " + t);
  }
  _r.labWhitePoint = t;
  _r.Xn = e[0];
  _r.Zn = e[1];
}
function ye() {
  return _r.labWhitePoint;
}

// ../../node_modules/chroma-js/src/io/lab/lab2rgb.js
var Og = (...t) => {
  t = L(t, "lab");
  const [e, r, o] = t;
  const [n, i, a] = Eg(e, r, o);
  const [f, s, u] = mn(n, i, a);
  return [f, s, u, t.length > 3 ? t[3] : 1];
};
var Eg = (t, e, r) => {
  const { kE: o, kK: n, kKE: i, Xn: a, Yn: f, Zn: s } = Ht;
  const u = (t + 16) / 116;
  const d = 2e-3 * e + u;
  const x = u - 5e-3 * r;
  const _ = d * d * d;
  const T = x * x * x;
  const F = _ > o ? _ : (116 * d - 16) / n;
  const I = t > i ? Math.pow((t + 16) / 116, 3) : t / n;
  const S = T > o ? T : (116 * x - 16) / n;
  const M = F * a;
  const j = I * f;
  const Y = S * s;
  return [M, j, Y];
};
var pn = (t) => {
  const e = Math.sign(t);
  t = Math.abs(t);
  return (t <= 31308e-7 ? t * 12.92 : 1.055 * Math.pow(t, 1 / 2.4) - 0.055) * e;
};
var mn = (t, e, r) => {
  const { MtxAdaptMa: o, MtxAdaptMaI: n, MtxXYZ2RGB: i, RefWhiteRGB: a, Xn: f, Yn: s, Zn: u } = Ht;
  const d = f * o.m00 + s * o.m10 + u * o.m20;
  const x = f * o.m01 + s * o.m11 + u * o.m21;
  const _ = f * o.m02 + s * o.m12 + u * o.m22;
  const T = a.X * o.m00 + a.Y * o.m10 + a.Z * o.m20;
  const F = a.X * o.m01 + a.Y * o.m11 + a.Z * o.m21;
  const I = a.X * o.m02 + a.Y * o.m12 + a.Z * o.m22;
  const S = (t * o.m00 + e * o.m10 + r * o.m20) * (T / d);
  const M = (t * o.m01 + e * o.m11 + r * o.m21) * (F / x);
  const j = (t * o.m02 + e * o.m12 + r * o.m22) * (I / _);
  const Y = S * n.m00 + M * n.m10 + j * n.m20;
  const Z = S * n.m01 + M * n.m11 + j * n.m21;
  const H = S * n.m02 + M * n.m12 + j * n.m22;
  const k = pn(
    Y * i.m00 + Z * i.m10 + H * i.m20
  );
  const h = pn(
    Y * i.m01 + Z * i.m11 + H * i.m21
  );
  const N = pn(
    Y * i.m02 + Z * i.m12 + H * i.m22
  );
  return [k * 255, h * 255, N * 255];
};
var er = Og;

// ../../node_modules/chroma-js/src/io/lab/rgb2lab.js
var Sg = (...t) => {
  const [e, r, o, ...n] = L(t, "rgb");
  const [i, a, f] = hn(e, r, o);
  const [s, u, d] = Tg(i, a, f);
  return [s, u, d, ...n.length > 0 && n[0] < 1 ? [n[0]] : []];
};
function Tg(t, e, r) {
  const { Xn: o, Yn: n, Zn: i, kE: a, kK: f } = Ht;
  const s = t / o;
  const u = e / n;
  const d = r / i;
  const x = s > a ? Math.pow(s, 1 / 3) : (f * s + 16) / 116;
  const _ = u > a ? Math.pow(u, 1 / 3) : (f * u + 16) / 116;
  const T = d > a ? Math.pow(d, 1 / 3) : (f * d + 16) / 116;
  return [116 * _ - 16, 500 * (x - _), 200 * (_ - T)];
}
function dn(t) {
  const e = Math.sign(t);
  t = Math.abs(t);
  const r = t <= 0.04045 ? t / 12.92 : Math.pow((t + 0.055) / 1.055, 2.4);
  return r * e;
}
var hn = (t, e, r) => {
  t = dn(t / 255);
  e = dn(e / 255);
  r = dn(r / 255);
  const { MtxRGB2XYZ: o, MtxAdaptMa: n, MtxAdaptMaI: i, Xn: a, Yn: f, Zn: s, As: u, Bs: d, Cs: x } = Ht;
  let _ = t * o.m00 + e * o.m10 + r * o.m20;
  let T = t * o.m01 + e * o.m11 + r * o.m21;
  let F = t * o.m02 + e * o.m12 + r * o.m22;
  const I = a * n.m00 + f * n.m10 + s * n.m20;
  const S = a * n.m01 + f * n.m11 + s * n.m21;
  const M = a * n.m02 + f * n.m12 + s * n.m22;
  let j = _ * n.m00 + T * n.m10 + F * n.m20;
  let Y = _ * n.m01 + T * n.m11 + F * n.m21;
  let Z = _ * n.m02 + T * n.m12 + F * n.m22;
  j *= I / u;
  Y *= S / d;
  Z *= M / x;
  _ = j * i.m00 + Y * i.m10 + Z * i.m20;
  T = j * i.m01 + Y * i.m11 + Z * i.m21;
  F = j * i.m02 + Y * i.m12 + Z * i.m22;
  return [_, T, F];
};
var rr = Sg;

// ../../node_modules/chroma-js/src/io/lab/index.js
O.prototype.lab = function() {
  return rr(this._rgb);
};
var kg = (...t) => new O(...t, "lab");
Object.assign(z, { lab: kg, getLabWhitePoint: ye, setLabWhitePoint: Ct });
G.format.lab = er;
G.autodetect.push({
  p: 2,
  test: (...t) => {
    t = L(t, "lab");
    if (D(t) === "array" && t.length === 3) {
      return "lab";
    }
  }
});

// ../../node_modules/chroma-js/src/ops/darken.js
O.prototype.darken = function(t = 1) {
  const e = this;
  const r = e.lab();
  r[0] -= Ht.Kn * t;
  return new O(r, "lab").alpha(e.alpha(), true);
};
O.prototype.brighten = function(t = 1) {
  return this.darken(-t);
};
O.prototype.darker = O.prototype.darken;
O.prototype.brighter = O.prototype.brighten;

// ../../node_modules/chroma-js/src/ops/get.js
O.prototype.get = function(t) {
  const [e, r] = t.split(".");
  const o = this[e]();
  if (r) {
    const n = e.indexOf(r) - (e.substr(0, 2) === "ok" ? 2 : 0);
    if (n > -1) return o[n];
    throw new Error(`unknown channel ${r} in mode ${e}`);
  } else {
    return o;
  }
};

// ../../node_modules/chroma-js/src/ops/luminance.js
var { pow: Cg } = Math;
var Mg = 1e-7;
var Ng = 20;
O.prototype.luminance = function(t, e = "rgb") {
  if (t !== void 0 && D(t) === "number") {
    if (t === 0) {
      return new O([0, 0, 0, this._rgb[3]], "rgb");
    }
    if (t === 1) {
      return new O([255, 255, 255, this._rgb[3]], "rgb");
    }
    let r = this.luminance();
    let o = Ng;
    const n = (a, f) => {
      const s = a.interpolate(f, 0.5, e);
      const u = s.luminance();
      if (Math.abs(t - u) < Mg || !o--) {
        return s;
      }
      return u > t ? n(a, s) : n(s, f);
    };
    const i = (r > t ? n(new O([0, 0, 0]), this) : n(this, new O([255, 255, 255]))).rgb();
    return new O([...i, this._rgb[3]]);
  }
  return Pg(...this._rgb.slice(0, 3));
};
var Pg = (t, e, r) => {
  t = gn(t);
  e = gn(e);
  r = gn(r);
  return 0.2126 * t + 0.7152 * e + 0.0722 * r;
};
var gn = (t) => {
  t /= 255;
  return t <= 0.03928 ? t / 12.92 : Cg((t + 0.055) / 1.055, 2.4);
};

// ../../node_modules/chroma-js/src/interpolator/index.js
var tt = {};

// ../../node_modules/chroma-js/src/generator/mix.js
var Wt = (t, e, r = 0.5, ...o) => {
  let n = o[0] || "lrgb";
  if (!tt[n] && !o.length) {
    n = Object.keys(tt)[0];
  }
  if (!tt[n]) {
    throw new Error(`interpolation mode ${n} is not defined`);
  }
  if (D(t) !== "object") t = new O(t);
  if (D(e) !== "object") e = new O(e);
  return tt[n](t, e, r).alpha(
    t.alpha() + r * (e.alpha() - t.alpha())
  );
};

// ../../node_modules/chroma-js/src/ops/mix.js
O.prototype.mix = O.prototype.interpolate = function(t, e = 0.5, ...r) {
  return Wt(this, t, e, ...r);
};

// ../../node_modules/chroma-js/src/ops/premultiply.js
O.prototype.premultiply = function(t = false) {
  const e = this._rgb;
  const r = e[3];
  if (t) {
    this._rgb = [e[0] * r, e[1] * r, e[2] * r, r];
    return this;
  } else {
    return new O([e[0] * r, e[1] * r, e[2] * r, r], "rgb");
  }
};

// ../../node_modules/chroma-js/src/io/lch/lch2lab.js
var { sin: Lg, cos: Fg } = Math;
var Ig = (...t) => {
  let [e, r, o] = L(t, "lch");
  if (isNaN(o)) o = 0;
  o = o * Df;
  return [e, Fg(o) * r, Lg(o) * r];
};
var vo = Ig;

// ../../node_modules/chroma-js/src/io/lch/lch2rgb.js
var Bg = (...t) => {
  t = L(t, "lch");
  const [e, r, o] = t;
  const [n, i, a] = vo(e, r, o);
  const [f, s, u] = er(n, i, a);
  return [f, s, u, t.length > 3 ? t[3] : 1];
};
var or = Bg;

// ../../node_modules/chroma-js/src/io/lch/hcl2rgb.js
var jg = (...t) => {
  const e = xo(L(t, "hcl"));
  return or(...e);
};
var qf = jg;

// ../../node_modules/chroma-js/src/io/lch/lab2lch.js
var { sqrt: Dg, atan2: Rg, round: Gg } = Math;
var Ug = (...t) => {
  const [e, r, o] = L(t, "lab");
  const n = Dg(r * r + o * o);
  let i = (Rg(o, r) * Rf + 360) % 360;
  if (Gg(n * 1e4) === 0) i = Number.NaN;
  return [e, n, i];
};
var $o = Ug;

// ../../node_modules/chroma-js/src/io/lch/rgb2lch.js
var qg = (...t) => {
  const [e, r, o, ...n] = L(t, "rgb");
  const [i, a, f] = rr(e, r, o);
  const [s, u, d] = $o(i, a, f);
  return [s, u, d, ...n.length > 0 && n[0] < 1 ? [n[0]] : []];
};
var wr = qg;

// ../../node_modules/chroma-js/src/io/lch/index.js
O.prototype.lch = function() {
  return wr(this._rgb);
};
O.prototype.hcl = function() {
  return xo(wr(this._rgb));
};
var zg = (...t) => new O(...t, "lch");
var Hg = (...t) => new O(...t, "hcl");
Object.assign(z, { lch: zg, hcl: Hg });
G.format.lch = or;
G.format.hcl = qf;
["lch", "hcl"].forEach(
  (t) => G.autodetect.push({
    p: 2,
    test: (...e) => {
      e = L(e, t);
      if (D(e) === "array" && e.length === 3) {
        return t;
      }
    }
  })
);

// ../../node_modules/chroma-js/src/ops/saturate.js
O.prototype.saturate = function(t = 1) {
  const e = this;
  const r = e.lch();
  r[1] += Ht.Kn * t;
  if (r[1] < 0) r[1] = 0;
  return new O(r, "lch").alpha(e.alpha(), true);
};
O.prototype.desaturate = function(t = 1) {
  return this.saturate(-t);
};

// ../../node_modules/chroma-js/src/ops/set.js
O.prototype.set = function(t, e, r = false) {
  const [o, n] = t.split(".");
  const i = this[o]();
  if (n) {
    const a = o.indexOf(n) - (o.substr(0, 2) === "ok" ? 2 : 0);
    if (a > -1) {
      if (D(e) == "string") {
        switch (e.charAt(0)) {
          case "+":
            i[a] += +e;
            break;
          case "-":
            i[a] += +e;
            break;
          case "*":
            i[a] *= +e.substr(1);
            break;
          case "/":
            i[a] /= +e.substr(1);
            break;
          default:
            i[a] = +e;
        }
      } else if (D(e) === "number") {
        i[a] = e;
      } else {
        throw new Error(`unsupported value for Color.set`);
      }
      const f = new O(i, o);
      if (r) {
        this._rgb = f._rgb;
        return this;
      }
      return f;
    }
    throw new Error(`unknown channel ${n} in mode ${o}`);
  } else {
    return i;
  }
};

// ../../node_modules/chroma-js/src/ops/shade.js
O.prototype.tint = function(t = 0.5, ...e) {
  return Wt(this, "white", t, ...e);
};
O.prototype.shade = function(t = 0.5, ...e) {
  return Wt(this, "black", t, ...e);
};

// ../../node_modules/chroma-js/src/interpolator/rgb.js
var Wg = (t, e, r) => {
  const o = t._rgb;
  const n = e._rgb;
  return new O(
    o[0] + r * (n[0] - o[0]),
    o[1] + r * (n[1] - o[1]),
    o[2] + r * (n[2] - o[2]),
    "rgb"
  );
};
tt.rgb = Wg;

// ../../node_modules/chroma-js/src/interpolator/lrgb.js
var { sqrt: bn, pow: nr } = Math;
var Kg = (t, e, r) => {
  const [o, n, i] = t._rgb;
  const [a, f, s] = e._rgb;
  return new O(
    bn(nr(o, 2) * (1 - r) + nr(a, 2) * r),
    bn(nr(n, 2) * (1 - r) + nr(f, 2) * r),
    bn(nr(i, 2) * (1 - r) + nr(s, 2) * r),
    "rgb"
  );
};
tt.lrgb = Kg;

// ../../node_modules/chroma-js/src/interpolator/lab.js
var Zg = (t, e, r) => {
  const o = t.lab();
  const n = e.lab();
  return new O(
    o[0] + r * (n[0] - o[0]),
    o[1] + r * (n[1] - o[1]),
    o[2] + r * (n[2] - o[2]),
    "lab"
  );
};
tt.lab = Zg;

// ../../node_modules/chroma-js/src/interpolator/_hsx.js
var Mt = (t, e, r, o) => {
  let n, i;
  if (o === "hsl") {
    n = t.hsl();
    i = e.hsl();
  } else if (o === "hsv") {
    n = t.hsv();
    i = e.hsv();
  } else if (o === "hcg") {
    n = t.hcg();
    i = e.hcg();
  } else if (o === "hsi") {
    n = t.hsi();
    i = e.hsi();
  } else if (o === "lch" || o === "hcl") {
    o = "hcl";
    n = t.hcl();
    i = e.hcl();
  } else if (o === "oklch") {
    n = t.oklch().reverse();
    i = e.oklch().reverse();
  }
  let a, f, s, u, d, x;
  if (o.substr(0, 1) === "h" || o === "oklch") {
    [a, s, d] = n;
    [f, u, x] = i;
  }
  let _, T, F, I;
  if (!isNaN(a) && !isNaN(f)) {
    if (f > a && f - a > 180) {
      I = f - (a + 360);
    } else if (f < a && a - f > 180) {
      I = f + 360 - a;
    } else {
      I = f - a;
    }
    T = a + r * I;
  } else if (!isNaN(a)) {
    T = a;
    if ((x == 1 || x == 0) && o != "hsv") _ = s;
  } else if (!isNaN(f)) {
    T = f;
    if ((d == 1 || d == 0) && o != "hsv") _ = u;
  } else {
    T = Number.NaN;
  }
  if (_ === void 0) _ = s + r * (u - s);
  F = d + r * (x - d);
  return o === "oklch" ? new O([F, _, T], o) : new O([T, _, F], o);
};

// ../../node_modules/chroma-js/src/interpolator/lch.js
var zf = (t, e, r) => {
  return Mt(t, e, r, "lch");
};
tt.lch = zf;
tt.hcl = zf;

// ../../node_modules/chroma-js/src/io/num/num2rgb.js
var Yg = (t) => {
  if (D(t) == "number" && t >= 0 && t <= 16777215) {
    const e = t >> 16;
    const r = t >> 8 & 255;
    const o = t & 255;
    return [e, r, o, 1];
  }
  throw new Error("unknown num color: " + t);
};
var Hf = Yg;

// ../../node_modules/chroma-js/src/io/num/rgb2num.js
var Xg = (...t) => {
  const [e, r, o] = L(t, "rgb");
  return (e << 16) + (r << 8) + o;
};
var Wf = Xg;

// ../../node_modules/chroma-js/src/io/num/index.js
O.prototype.num = function() {
  return Wf(this._rgb);
};
var Vg = (...t) => new O(...t, "num");
Object.assign(z, { num: Vg });
G.format.num = Hf;
G.autodetect.push({
  p: 5,
  test: (...t) => {
    if (t.length === 1 && D(t[0]) === "number" && t[0] >= 0 && t[0] <= 16777215) {
      return "num";
    }
  }
});

// ../../node_modules/chroma-js/src/interpolator/num.js
var Jg = (t, e, r) => {
  const o = t.num();
  const n = e.num();
  return new O(o + r * (n - o), "num");
};
tt.num = Jg;

// ../../node_modules/chroma-js/src/io/hcg/hcg2rgb.js
var { floor: Qg } = Math;
var t1 = (...t) => {
  t = L(t, "hcg");
  let [e, r, o] = t;
  let n, i, a;
  o = o * 255;
  const f = r * 255;
  if (r === 0) {
    n = i = a = o;
  } else {
    if (e === 360) e = 0;
    if (e > 360) e -= 360;
    if (e < 0) e += 360;
    e /= 60;
    const s = Qg(e);
    const u = e - s;
    const d = o * (1 - r);
    const x = d + f * (1 - u);
    const _ = d + f * u;
    const T = d + f;
    switch (s) {
      case 0:
        [n, i, a] = [T, _, d];
        break;
      case 1:
        [n, i, a] = [x, T, d];
        break;
      case 2:
        [n, i, a] = [d, T, _];
        break;
      case 3:
        [n, i, a] = [d, x, T];
        break;
      case 4:
        [n, i, a] = [_, d, T];
        break;
      case 5:
        [n, i, a] = [T, d, x];
        break;
    }
  }
  return [n, i, a, t.length > 3 ? t[3] : 1];
};
var Kf = t1;

// ../../node_modules/chroma-js/src/io/hcg/rgb2hcg.js
var e1 = (...t) => {
  const [e, r, o] = L(t, "rgb");
  const n = ho(e, r, o);
  const i = go(e, r, o);
  const a = i - n;
  const f = a * 100 / 255;
  const s = n / (255 - a) * 100;
  let u;
  if (a === 0) {
    u = Number.NaN;
  } else {
    if (e === i) u = (r - o) / a;
    if (r === i) u = 2 + (o - e) / a;
    if (o === i) u = 4 + (e - r) / a;
    u *= 60;
    if (u < 0) u += 360;
  }
  return [u, f, s];
};
var Zf = e1;

// ../../node_modules/chroma-js/src/io/hcg/index.js
O.prototype.hcg = function() {
  return Zf(this._rgb);
};
var r1 = (...t) => new O(...t, "hcg");
z.hcg = r1;
G.format.hcg = Kf;
G.autodetect.push({
  p: 1,
  test: (...t) => {
    t = L(t, "hcg");
    if (D(t) === "array" && t.length === 3) {
      return "hcg";
    }
  }
});

// ../../node_modules/chroma-js/src/interpolator/hcg.js
var o1 = (t, e, r) => {
  return Mt(t, e, r, "hcg");
};
tt.hcg = o1;

// ../../node_modules/chroma-js/src/io/hsi/hsi2rgb.js
var { cos: ir } = Math;
var n1 = (...t) => {
  t = L(t, "hsi");
  let [e, r, o] = t;
  let n, i, a;
  if (isNaN(e)) e = 0;
  if (isNaN(r)) r = 0;
  if (e > 360) e -= 360;
  if (e < 0) e += 360;
  e /= 360;
  if (e < 1 / 3) {
    a = (1 - r) / 3;
    n = (1 + r * ir(kt * e) / ir(bo - kt * e)) / 3;
    i = 1 - (a + n);
  } else if (e < 2 / 3) {
    e -= 1 / 3;
    n = (1 - r) / 3;
    i = (1 + r * ir(kt * e) / ir(bo - kt * e)) / 3;
    a = 1 - (n + i);
  } else {
    e -= 2 / 3;
    i = (1 - r) / 3;
    a = (1 + r * ir(kt * e) / ir(bo - kt * e)) / 3;
    n = 1 - (i + a);
  }
  n = Tt(o * n * 3);
  i = Tt(o * i * 3);
  a = Tt(o * a * 3);
  return [n * 255, i * 255, a * 255, t.length > 3 ? t[3] : 1];
};
var Yf = n1;

// ../../node_modules/chroma-js/src/io/hsi/rgb2hsi.js
var { min: i1, sqrt: a1, acos: f1 } = Math;
var s1 = (...t) => {
  let [e, r, o] = L(t, "rgb");
  e /= 255;
  r /= 255;
  o /= 255;
  let n;
  const i = i1(e, r, o);
  const a = (e + r + o) / 3;
  const f = a > 0 ? 1 - i / a : 0;
  if (f === 0) {
    n = NaN;
  } else {
    n = (e - r + (e - o)) / 2;
    n /= a1((e - r) * (e - r) + (e - o) * (r - o));
    n = f1(n);
    if (o > r) {
      n = kt - n;
    }
    n /= kt;
  }
  return [n * 360, f, a];
};
var Xf = s1;

// ../../node_modules/chroma-js/src/io/hsi/index.js
O.prototype.hsi = function() {
  return Xf(this._rgb);
};
var l1 = (...t) => new O(...t, "hsi");
z.hsi = l1;
G.format.hsi = Yf;
G.autodetect.push({
  p: 2,
  test: (...t) => {
    t = L(t, "hsi");
    if (D(t) === "array" && t.length === 3) {
      return "hsi";
    }
  }
});

// ../../node_modules/chroma-js/src/interpolator/hsi.js
var u1 = (t, e, r) => {
  return Mt(t, e, r, "hsi");
};
tt.hsi = u1;

// ../../node_modules/chroma-js/src/io/hsl/hsl2rgb.js
var c1 = (...t) => {
  t = L(t, "hsl");
  const [e, r, o] = t;
  let n, i, a;
  if (r === 0) {
    n = i = a = o * 255;
  } else {
    const f = [0, 0, 0];
    const s = [0, 0, 0];
    const u = o < 0.5 ? o * (1 + r) : o + r - o * r;
    const d = 2 * o - u;
    const x = e / 360;
    f[0] = x + 1 / 3;
    f[1] = x;
    f[2] = x - 1 / 3;
    for (let _ = 0; _ < 3; _++) {
      if (f[_] < 0) f[_] += 1;
      if (f[_] > 1) f[_] -= 1;
      if (6 * f[_] < 1) s[_] = d + (u - d) * 6 * f[_];
      else if (2 * f[_] < 1) s[_] = u;
      else if (3 * f[_] < 2) s[_] = d + (u - d) * (2 / 3 - f[_]) * 6;
      else s[_] = d;
    }
    [n, i, a] = [s[0] * 255, s[1] * 255, s[2] * 255];
  }
  if (t.length > 3) {
    return [n, i, a, t[3]];
  }
  return [n, i, a, 1];
};
var vr = c1;

// ../../node_modules/chroma-js/src/io/hsl/rgb2hsl.js
var p1 = (...t) => {
  t = L(t, "rgba");
  let [e, r, o] = t;
  e /= 255;
  r /= 255;
  o /= 255;
  const n = ho(e, r, o);
  const i = go(e, r, o);
  const a = (i + n) / 2;
  let f, s;
  if (i === n) {
    f = 0;
    s = Number.NaN;
  } else {
    f = a < 0.5 ? (i - n) / (i + n) : (i - n) / (2 - i - n);
  }
  if (e == i) s = (r - o) / (i - n);
  else if (r == i) s = 2 + (o - e) / (i - n);
  else if (o == i) s = 4 + (e - r) / (i - n);
  s *= 60;
  if (s < 0) s += 360;
  if (t.length > 3 && t[3] !== void 0) return [s, f, a, t[3]];
  return [s, f, a];
};
var Ao = p1;

// ../../node_modules/chroma-js/src/io/hsl/index.js
O.prototype.hsl = function() {
  return Ao(this._rgb);
};
var m1 = (...t) => new O(...t, "hsl");
z.hsl = m1;
G.format.hsl = vr;
G.autodetect.push({
  p: 2,
  test: (...t) => {
    t = L(t, "hsl");
    if (D(t) === "array" && t.length === 3) {
      return "hsl";
    }
  }
});

// ../../node_modules/chroma-js/src/interpolator/hsl.js
var d1 = (t, e, r) => {
  return Mt(t, e, r, "hsl");
};
tt.hsl = d1;

// ../../node_modules/chroma-js/src/io/hsv/hsv2rgb.js
var { floor: h1 } = Math;
var g1 = (...t) => {
  t = L(t, "hsv");
  let [e, r, o] = t;
  let n, i, a;
  o *= 255;
  if (r === 0) {
    n = i = a = o;
  } else {
    if (e === 360) e = 0;
    if (e > 360) e -= 360;
    if (e < 0) e += 360;
    e /= 60;
    const f = h1(e);
    const s = e - f;
    const u = o * (1 - r);
    const d = o * (1 - r * s);
    const x = o * (1 - r * (1 - s));
    switch (f) {
      case 0:
        [n, i, a] = [o, x, u];
        break;
      case 1:
        [n, i, a] = [d, o, u];
        break;
      case 2:
        [n, i, a] = [u, o, x];
        break;
      case 3:
        [n, i, a] = [u, d, o];
        break;
      case 4:
        [n, i, a] = [x, u, o];
        break;
      case 5:
        [n, i, a] = [o, u, d];
        break;
    }
  }
  return [n, i, a, t.length > 3 ? t[3] : 1];
};
var Vf = g1;

// ../../node_modules/chroma-js/src/io/hsv/rgb2hsv.js
var { min: b1, max: x1 } = Math;
var y1 = (...t) => {
  t = L(t, "rgb");
  let [e, r, o] = t;
  const n = b1(e, r, o);
  const i = x1(e, r, o);
  const a = i - n;
  let f, s, u;
  u = i / 255;
  if (i === 0) {
    f = Number.NaN;
    s = 0;
  } else {
    s = a / i;
    if (e === i) f = (r - o) / a;
    if (r === i) f = 2 + (o - e) / a;
    if (o === i) f = 4 + (e - r) / a;
    f *= 60;
    if (f < 0) f += 360;
  }
  return [f, s, u];
};
var Jf = y1;

// ../../node_modules/chroma-js/src/io/hsv/index.js
O.prototype.hsv = function() {
  return Jf(this._rgb);
};
var _1 = (...t) => new O(...t, "hsv");
z.hsv = _1;
G.format.hsv = Vf;
G.autodetect.push({
  p: 2,
  test: (...t) => {
    t = L(t, "hsv");
    if (D(t) === "array" && t.length === 3) {
      return "hsv";
    }
  }
});

// ../../node_modules/chroma-js/src/interpolator/hsv.js
var w1 = (t, e, r) => {
  return Mt(t, e, r, "hsv");
};
tt.hsv = w1;

// ../../node_modules/chroma-js/src/utils/multiply-matrices.js
function Me(t, e) {
  let r = t.length;
  if (!Array.isArray(t[0])) {
    t = [t];
  }
  if (!Array.isArray(e[0])) {
    e = e.map((a) => [a]);
  }
  let o = e[0].length;
  let n = e[0].map((a, f) => e.map((s) => s[f]));
  let i = t.map(
    (a) => n.map((f) => {
      if (!Array.isArray(a)) {
        return f.reduce((s, u) => s + u * a, 0);
      }
      return a.reduce((s, u, d) => s + u * (f[d] || 0), 0);
    })
  );
  if (r === 1) {
    i = i[0];
  }
  if (o === 1) {
    return i.map((a) => a[0]);
  }
  return i;
}

// ../../node_modules/chroma-js/src/io/oklab/oklab2rgb.js
var v1 = (...t) => {
  t = L(t, "lab");
  const [e, r, o, ...n] = t;
  const [i, a, f] = $1([e, r, o]);
  const [s, u, d] = mn(i, a, f);
  return [s, u, d, ...n.length > 0 && n[0] < 1 ? [n[0]] : []];
};
function $1(t) {
  var e = [
    [1.2268798758459243, -0.5578149944602171, 0.2813910456659647],
    [-0.0405757452148008, 1.112286803280317, -0.0717110580655164],
    [-0.0763729366746601, -0.4214933324022432, 1.5869240198367816]
  ];
  var r = [
    [1, 0.3963377773761749, 0.2158037573099136],
    [1, -0.1055613458156586, -0.0638541728258133],
    [1, -0.0894841775298119, -1.2914855480194092]
  ];
  var o = Me(r, t);
  return Me(
    e,
    o.map((n) => n ** 3)
  );
}
var ar = v1;

// ../../node_modules/chroma-js/src/io/oklab/rgb2oklab.js
var A1 = (...t) => {
  const [e, r, o, ...n] = L(t, "rgb");
  const i = hn(e, r, o);
  const a = O1(i);
  return [...a, ...n.length > 0 && n[0] < 1 ? [n[0]] : []];
};
function O1(t) {
  const e = [
    [0.819022437996703, 0.3619062600528904, -0.1288737815209879],
    [0.0329836539323885, 0.9292868615863434, 0.0361446663506424],
    [0.0481771893596242, 0.2642395317527308, 0.6335478284694309]
  ];
  const r = [
    [0.210454268309314, 0.7936177747023054, -0.0040720430116193],
    [1.9779985324311684, -2.42859224204858, 0.450593709617411],
    [0.0259040424655478, 0.7827717124575296, -0.8086757549230774]
  ];
  const o = Me(e, t);
  return Me(
    r,
    o.map((n) => Math.cbrt(n))
  );
}
var fr = A1;

// ../../node_modules/chroma-js/src/io/oklab/index.js
O.prototype.oklab = function() {
  return fr(this._rgb);
};
var E1 = (...t) => new O(...t, "oklab");
Object.assign(z, { oklab: E1 });
G.format.oklab = ar;
G.autodetect.push({
  p: 2,
  test: (...t) => {
    t = L(t, "oklab");
    if (D(t) === "array" && t.length === 3) {
      return "oklab";
    }
  }
});

// ../../node_modules/chroma-js/src/interpolator/oklab.js
var S1 = (t, e, r) => {
  const o = t.oklab();
  const n = e.oklab();
  return new O(
    o[0] + r * (n[0] - o[0]),
    o[1] + r * (n[1] - o[1]),
    o[2] + r * (n[2] - o[2]),
    "oklab"
  );
};
tt.oklab = S1;

// ../../node_modules/chroma-js/src/interpolator/oklch.js
var T1 = (t, e, r) => {
  return Mt(t, e, r, "oklch");
};
tt.oklch = T1;

// ../../node_modules/chroma-js/src/generator/average.js
var { pow: xn, sqrt: yn, PI: _n, cos: Qf, sin: ts, atan2: k1 } = Math;
var es = (t, e = "lrgb", r = null) => {
  const o = t.length;
  if (!r) r = Array.from(new Array(o)).map(() => 1);
  const n = o / r.reduce(function(x, _) {
    return x + _;
  });
  r.forEach((x, _) => {
    r[_] *= n;
  });
  t = t.map((x) => new O(x));
  if (e === "lrgb") {
    return C1(t, r);
  }
  const i = t.shift();
  const a = i.get(e);
  const f = [];
  let s = 0;
  let u = 0;
  for (let x = 0; x < a.length; x++) {
    a[x] = (a[x] || 0) * r[0];
    f.push(isNaN(a[x]) ? 0 : r[0]);
    if (e.charAt(x) === "h" && !isNaN(a[x])) {
      const _ = a[x] / 180 * _n;
      s += Qf(_) * r[0];
      u += ts(_) * r[0];
    }
  }
  let d = i.alpha() * r[0];
  t.forEach((x, _) => {
    const T = x.get(e);
    d += x.alpha() * r[_ + 1];
    for (let F = 0; F < a.length; F++) {
      if (!isNaN(T[F])) {
        f[F] += r[_ + 1];
        if (e.charAt(F) === "h") {
          const I = T[F] / 180 * _n;
          s += Qf(I) * r[_ + 1];
          u += ts(I) * r[_ + 1];
        } else {
          a[F] += T[F] * r[_ + 1];
        }
      }
    }
  });
  for (let x = 0; x < a.length; x++) {
    if (e.charAt(x) === "h") {
      let _ = k1(u / f[x], s / f[x]) / _n * 180;
      while (_ < 0) _ += 360;
      while (_ >= 360) _ -= 360;
      a[x] = _;
    } else {
      a[x] = a[x] / f[x];
    }
  }
  d /= o;
  return new O(a, e).alpha(d > 0.99999 ? 1 : d, true);
};
var C1 = (t, e) => {
  const r = t.length;
  const o = [0, 0, 0, 0];
  for (let n = 0; n < t.length; n++) {
    const i = t[n];
    const a = e[n] / r;
    const f = i._rgb;
    o[0] += xn(f[0], 2) * a;
    o[1] += xn(f[1], 2) * a;
    o[2] += xn(f[2], 2) * a;
    o[3] += f[3] * a;
  }
  o[0] = yn(o[0]);
  o[1] = yn(o[1]);
  o[2] = yn(o[2]);
  if (o[3] > 0.9999999) o[3] = 1;
  return new O(Ce(o));
};

// ../../node_modules/chroma-js/src/generator/scale.js
var { pow: M1 } = Math;
function Ne(t) {
  let e = "rgb";
  let r = z("#ccc");
  let o = 0;
  let n = [0, 1];
  let i = [];
  let a = [0, 0];
  let f = false;
  let s = [];
  let u = false;
  let d = 0;
  let x = 1;
  let _ = false;
  let T = {};
  let F = true;
  let I = 1;
  const S = function(h) {
    h = h || ["#fff", "#000"];
    if (h && D(h) === "string" && z.brewer && z.brewer[h.toLowerCase()]) {
      h = z.brewer[h.toLowerCase()];
    }
    if (D(h) === "array") {
      if (h.length === 1) {
        h = [h[0], h[0]];
      }
      h = h.slice(0);
      for (let N = 0; N < h.length; N++) {
        h[N] = z(h[N]);
      }
      i.length = 0;
      for (let N = 0; N < h.length; N++) {
        i.push(N / (h.length - 1));
      }
    }
    H();
    return s = h;
  };
  const M = function(h) {
    if (f != null) {
      const N = f.length - 1;
      let B = 0;
      while (B < N && h >= f[B]) {
        B++;
      }
      return B - 1;
    }
    return 0;
  };
  let j = (h) => h;
  let Y = (h) => h;
  const Z = function(h, N) {
    let B, E;
    if (N == null) {
      N = false;
    }
    if (isNaN(h) || h === null) {
      return r;
    }
    if (!N) {
      if (f && f.length > 2) {
        const R = M(h);
        E = R / (f.length - 2);
      } else if (x !== d) {
        E = (h - d) / (x - d);
      } else {
        E = 1;
      }
    } else {
      E = h;
    }
    E = Y(E);
    if (!N) {
      E = j(E);
    }
    if (I !== 1) {
      E = M1(E, I);
    }
    E = a[0] + E * (1 - a[0] - a[1]);
    E = Tt(E, 0, 1);
    const U = Math.floor(E * 1e4);
    if (F && T[U]) {
      B = T[U];
    } else {
      if (D(s) === "array") {
        for (let R = 0; R < i.length; R++) {
          const K = i[R];
          if (E <= K) {
            B = s[R];
            break;
          }
          if (E >= K && R === i.length - 1) {
            B = s[R];
            break;
          }
          if (E > K && E < i[R + 1]) {
            E = (E - K) / (i[R + 1] - K);
            B = z.interpolate(
              s[R],
              s[R + 1],
              E,
              e
            );
            break;
          }
        }
      } else if (D(s) === "function") {
        B = s(E);
      }
      if (F) {
        T[U] = B;
      }
    }
    return B;
  };
  var H = () => T = {};
  S(t);
  const k = function(h) {
    const N = z(Z(h));
    if (u && N[u]) {
      return N[u]();
    } else {
      return N;
    }
  };
  k.classes = function(h) {
    if (h != null) {
      if (D(h) === "array") {
        f = h;
        n = [h[0], h[h.length - 1]];
      } else {
        const N = z.analyze(n);
        if (h === 0) {
          f = [N.min, N.max];
        } else {
          f = z.limits(N, "e", h);
        }
      }
      return k;
    }
    return f;
  };
  k.domain = function(h) {
    if (!arguments.length) {
      return n;
    }
    d = h[0];
    x = h[h.length - 1];
    i = [];
    const N = s.length;
    if (h.length === N && d !== x) {
      for (let B of Array.from(h)) {
        i.push((B - d) / (x - d));
      }
    } else {
      for (let B = 0; B < N; B++) {
        i.push(B / (N - 1));
      }
      if (h.length > 2) {
        const B = h.map((U, R) => R / (h.length - 1));
        const E = h.map((U) => (U - d) / (x - d));
        if (!E.every((U, R) => B[R] === U)) {
          Y = (U) => {
            if (U <= 0 || U >= 1) return U;
            let R = 0;
            while (U >= E[R + 1]) R++;
            const K = (U - E[R]) / (E[R + 1] - E[R]);
            const ot = B[R] + K * (B[R + 1] - B[R]);
            return ot;
          };
        }
      }
    }
    n = [d, x];
    return k;
  };
  k.mode = function(h) {
    if (!arguments.length) {
      return e;
    }
    e = h;
    H();
    return k;
  };
  k.range = function(h, N) {
    S(h, N);
    return k;
  };
  k.out = function(h) {
    u = h;
    return k;
  };
  k.spread = function(h) {
    if (!arguments.length) {
      return o;
    }
    o = h;
    return k;
  };
  k.correctLightness = function(h) {
    if (h == null) {
      h = true;
    }
    _ = h;
    H();
    if (_) {
      j = function(N) {
        const B = Z(0, true).lab()[0];
        const E = Z(1, true).lab()[0];
        const U = B > E;
        let R = Z(N, true).lab()[0];
        const K = B + (E - B) * N;
        let ot = R - K;
        let ut = 0;
        let At = 1;
        let gt = 20;
        while (Math.abs(ot) > 0.01 && gt-- > 0) {
          (function() {
            if (U) {
              ot *= -1;
            }
            if (ot < 0) {
              ut = N;
              N += (At - N) * 0.5;
            } else {
              At = N;
              N += (ut - N) * 0.5;
            }
            R = Z(N, true).lab()[0];
            return ot = R - K;
          })();
        }
        return N;
      };
    } else {
      j = (N) => N;
    }
    return k;
  };
  k.padding = function(h) {
    if (h != null) {
      if (D(h) === "number") {
        h = [h, h];
      }
      a = h;
      return k;
    } else {
      return a;
    }
  };
  k.colors = function(h, N) {
    if (arguments.length < 2) {
      N = "hex";
    }
    let B = [];
    if (arguments.length === 0) {
      B = s.slice(0);
    } else if (h === 1) {
      B = [k(0.5)];
    } else if (h > 1) {
      const E = n[0];
      const U = n[1] - E;
      B = N1(0, h, false).map(
        (R) => k(E + R / (h - 1) * U)
      );
    } else {
      t = [];
      let E = [];
      if (f && f.length > 2) {
        for (let U = 1, R = f.length, K = 1 <= R; K ? U < R : U > R; K ? U++ : U--) {
          E.push((f[U - 1] + f[U]) * 0.5);
        }
      } else {
        E = n;
      }
      B = E.map((U) => k(U));
    }
    if (z[N]) {
      B = B.map((E) => E[N]());
    }
    return B;
  };
  k.cache = function(h) {
    if (h != null) {
      F = h;
      return k;
    } else {
      return F;
    }
  };
  k.gamma = function(h) {
    if (h != null) {
      I = h;
      return k;
    } else {
      return I;
    }
  };
  k.nodata = function(h) {
    if (h != null) {
      r = z(h);
      return k;
    } else {
      return r;
    }
  };
  return k;
}
function N1(t, e, r) {
  let o = [];
  let n = t < e;
  let i = !r ? e : n ? e + 1 : e - 1;
  for (let a = t; n ? a < i : a > i; n ? a++ : a--) {
    o.push(a);
  }
  return o;
}

// ../../node_modules/chroma-js/src/generator/bezier.js
var P1 = function(t) {
  let e = [1, 1];
  for (let r = 1; r < t; r++) {
    let o = [1];
    for (let n = 1; n <= e.length; n++) {
      o[n] = (e[n] || 0) + e[n - 1];
    }
    e = o;
  }
  return e;
};
var L1 = function(t) {
  let e, r, o, n;
  t = t.map((i) => new O(i));
  if (t.length === 2) {
    [r, o] = t.map((i) => i.lab());
    e = function(i) {
      const a = [0, 1, 2].map((f) => r[f] + i * (o[f] - r[f]));
      return new O(a, "lab");
    };
  } else if (t.length === 3) {
    [r, o, n] = t.map((i) => i.lab());
    e = function(i) {
      const a = [0, 1, 2].map(
        (f) => (1 - i) * (1 - i) * r[f] + 2 * (1 - i) * i * o[f] + i * i * n[f]
      );
      return new O(a, "lab");
    };
  } else if (t.length === 4) {
    let i;
    [r, o, n, i] = t.map((a) => a.lab());
    e = function(a) {
      const f = [0, 1, 2].map(
        (s) => (1 - a) * (1 - a) * (1 - a) * r[s] + 3 * (1 - a) * (1 - a) * a * o[s] + 3 * (1 - a) * a * a * n[s] + a * a * a * i[s]
      );
      return new O(f, "lab");
    };
  } else if (t.length >= 5) {
    let i, a, f;
    i = t.map((s) => s.lab());
    f = t.length - 1;
    a = P1(f);
    e = function(s) {
      const u = 1 - s;
      const d = [0, 1, 2].map(
        (x) => i.reduce(
          (_, T, F) => _ + a[F] * u ** (f - F) * s ** F * T[x],
          0
        )
      );
      return new O(d, "lab");
    };
  } else {
    throw new RangeError("No point in running bezier with only one color.");
  }
  return e;
};
var rs = (t) => {
  const e = L1(t);
  e.scale = () => Ne(e);
  return e;
};

// ../../node_modules/chroma-js/src/io/rgb/index.js
var { round: os } = Math;
O.prototype.rgb = function(t = true) {
  if (t === false) return this._rgb.slice(0, 3);
  return this._rgb.slice(0, 3).map(os);
};
O.prototype.rgba = function(t = true) {
  return this._rgb.slice(0, 4).map((e, r) => {
    return r < 3 ? t === false ? e : os(e) : e;
  });
};
var F1 = (...t) => new O(...t, "rgb");
Object.assign(z, { rgb: F1 });
G.format.rgb = (...t) => {
  const e = L(t, "rgba");
  if (e[3] === void 0) e[3] = 1;
  return e;
};
G.autodetect.push({
  p: 3,
  test: (...t) => {
    t = L(t, "rgba");
    if (D(t) === "array" && (t.length === 3 || t.length === 4 && D(t[3]) == "number" && t[3] >= 0 && t[3] <= 1)) {
      return "rgb";
    }
  }
});

// ../../node_modules/chroma-js/src/generator/blend.js
var It = (t, e, r) => {
  if (!It[r]) {
    throw new Error("unknown blend mode " + r);
  }
  return It[r](t, e);
};
var _e = (t) => (e, r) => {
  const o = z(r).rgb();
  const n = z(e).rgb();
  return z.rgb(t(o, n));
};
var we = (t) => (e, r) => {
  const o = [];
  o[0] = t(e[0], r[0]);
  o[1] = t(e[1], r[1]);
  o[2] = t(e[2], r[2]);
  return o;
};
var I1 = (t) => t;
var B1 = (t, e) => t * e / 255;
var j1 = (t, e) => t > e ? e : t;
var D1 = (t, e) => t > e ? t : e;
var R1 = (t, e) => 255 * (1 - (1 - t / 255) * (1 - e / 255));
var G1 = (t, e) => e < 128 ? 2 * t * e / 255 : 255 * (1 - 2 * (1 - t / 255) * (1 - e / 255));
var U1 = (t, e) => 255 * (1 - (1 - e / 255) / (t / 255));
var q1 = (t, e) => {
  if (t === 255) return 255;
  t = 255 * (e / 255) / (1 - t / 255);
  return t > 255 ? 255 : t;
};
It.normal = _e(we(I1));
It.multiply = _e(we(B1));
It.screen = _e(we(R1));
It.overlay = _e(we(G1));
It.darken = _e(we(j1));
It.lighten = _e(we(D1));
It.dodge = _e(we(q1));
It.burn = _e(we(U1));
var ns = It;

// ../../node_modules/chroma-js/src/generator/cubehelix.js
var { pow: z1, sin: H1, cos: W1 } = Math;
function is(t = 300, e = -1.5, r = 1, o = 1, n = [0, 1]) {
  let i = 0, a;
  if (D(n) === "array") {
    a = n[1] - n[0];
  } else {
    a = 0;
    n = [n, n];
  }
  const f = function(s) {
    const u = kt * ((t + 120) / 360 + e * s);
    const d = z1(n[0] + a * s, o);
    const x = i !== 0 ? r[0] + s * i : r;
    const _ = x * d * (1 - d) / 2;
    const T = W1(u);
    const F = H1(u);
    const I = d + _ * (-0.14861 * T + 1.78277 * F);
    const S = d + _ * (-0.29227 * T - 0.90649 * F);
    const M = d + _ * (1.97294 * T);
    return z(Ce([I * 255, S * 255, M * 255, 1]));
  };
  f.start = function(s) {
    if (s == null) {
      return t;
    }
    t = s;
    return f;
  };
  f.rotations = function(s) {
    if (s == null) {
      return e;
    }
    e = s;
    return f;
  };
  f.gamma = function(s) {
    if (s == null) {
      return o;
    }
    o = s;
    return f;
  };
  f.hue = function(s) {
    if (s == null) {
      return r;
    }
    r = s;
    if (D(r) === "array") {
      i = r[1] - r[0];
      if (i === 0) {
        r = r[1];
      }
    } else {
      i = 0;
    }
    return f;
  };
  f.lightness = function(s) {
    if (s == null) {
      return n;
    }
    if (D(s) === "array") {
      n = s;
      a = s[1] - s[0];
    } else {
      n = [s, s];
      a = 0;
    }
    return f;
  };
  f.scale = () => z.scale(f);
  f.hue(r);
  return f;
}

// ../../node_modules/chroma-js/src/generator/random.js
var K1 = "0123456789abcdef";
var { floor: Z1, random: Y1 } = Math;
var as = () => {
  let t = "#";
  for (let e = 0; e < 6; e++) {
    t += K1.charAt(Z1(Y1() * 16));
  }
  return new O(t, "hex");
};

// ../../node_modules/chroma-js/src/utils/analyze.js
var { log: fs, pow: X1, floor: V1, abs: J1 } = Math;
function wn(t, e = null) {
  const r = {
    min: Number.MAX_VALUE,
    max: Number.MAX_VALUE * -1,
    sum: 0,
    values: [],
    count: 0
  };
  if (D(t) === "object") {
    t = Object.values(t);
  }
  t.forEach((o) => {
    if (e && D(o) === "object") o = o[e];
    if (o !== void 0 && o !== null && !isNaN(o)) {
      r.values.push(o);
      r.sum += o;
      if (o < r.min) r.min = o;
      if (o > r.max) r.max = o;
      r.count += 1;
    }
  });
  r.domain = [r.min, r.max];
  r.limits = (o, n) => vn(r, o, n);
  return r;
}
function vn(t, e = "equal", r = 7) {
  if (D(t) == "array") {
    t = wn(t);
  }
  const { min: o, max: n } = t;
  const i = t.values.sort((f, s) => f - s);
  if (r === 1) {
    return [o, n];
  }
  const a = [];
  if (e.substr(0, 1) === "c") {
    a.push(o);
    a.push(n);
  }
  if (e.substr(0, 1) === "e") {
    a.push(o);
    for (let f = 1; f < r; f++) {
      a.push(o + f / r * (n - o));
    }
    a.push(n);
  } else if (e.substr(0, 1) === "l") {
    if (o <= 0) {
      throw new Error(
        "Logarithmic scales are only possible for values > 0"
      );
    }
    const f = Math.LOG10E * fs(o);
    const s = Math.LOG10E * fs(n);
    a.push(o);
    for (let u = 1; u < r; u++) {
      a.push(X1(10, f + u / r * (s - f)));
    }
    a.push(n);
  } else if (e.substr(0, 1) === "q") {
    a.push(o);
    for (let f = 1; f < r; f++) {
      const s = (i.length - 1) * f / r;
      const u = V1(s);
      if (u === s) {
        a.push(i[u]);
      } else {
        const d = s - u;
        a.push(i[u] * (1 - d) + i[u + 1] * d);
      }
    }
    a.push(n);
  } else if (e.substr(0, 1) === "k") {
    let f;
    const s = i.length;
    const u = new Array(s);
    const d = new Array(r);
    let x = true;
    let _ = 0;
    let T = null;
    T = [];
    T.push(o);
    for (let S = 1; S < r; S++) {
      T.push(o + S / r * (n - o));
    }
    T.push(n);
    while (x) {
      for (let M = 0; M < r; M++) {
        d[M] = 0;
      }
      for (let M = 0; M < s; M++) {
        const j = i[M];
        let Y = Number.MAX_VALUE;
        let Z;
        for (let H = 0; H < r; H++) {
          const k = J1(T[H] - j);
          if (k < Y) {
            Y = k;
            Z = H;
          }
          d[Z]++;
          u[M] = Z;
        }
      }
      const S = new Array(r);
      for (let M = 0; M < r; M++) {
        S[M] = null;
      }
      for (let M = 0; M < s; M++) {
        f = u[M];
        if (S[f] === null) {
          S[f] = i[M];
        } else {
          S[f] += i[M];
        }
      }
      for (let M = 0; M < r; M++) {
        S[M] *= 1 / d[M];
      }
      x = false;
      for (let M = 0; M < r; M++) {
        if (S[M] !== T[M]) {
          x = true;
          break;
        }
      }
      T = S;
      _++;
      if (_ > 200) {
        x = false;
      }
    }
    const F = {};
    for (let S = 0; S < r; S++) {
      F[S] = [];
    }
    for (let S = 0; S < s; S++) {
      f = u[S];
      F[f].push(i[S]);
    }
    let I = [];
    for (let S = 0; S < r; S++) {
      I.push(F[S][0]);
      I.push(F[S][F[S].length - 1]);
    }
    I = I.sort((S, M) => S - M);
    a.push(I[0]);
    for (let S = 1; S < I.length; S += 2) {
      const M = I[S];
      if (!isNaN(M) && a.indexOf(M) === -1) {
        a.push(M);
      }
    }
  }
  return a;
}

// ../../node_modules/chroma-js/src/utils/contrast.js
var ss = (t, e) => {
  t = new O(t);
  e = new O(e);
  const r = t.luminance();
  const o = e.luminance();
  return r > o ? (r + 0.05) / (o + 0.05) : (o + 0.05) / (r + 0.05);
};

// ../../node_modules/chroma-js/src/utils/contrastAPCA.js
var ls = 0.027;
var Q1 = 5e-4;
var tb = 0.1;
var us = 1.14;
var Oo = 0.022;
var cs = 1.414;
var ms = (t, e) => {
  t = new O(t);
  e = new O(e);
  if (t.alpha() < 1) {
    t = Wt(e, t, t.alpha(), "rgb");
  }
  const r = ps(...t.rgb());
  const o = ps(...e.rgb());
  const n = r >= Oo ? r : r + Math.pow(Oo - r, cs);
  const i = o >= Oo ? o : o + Math.pow(Oo - o, cs);
  const a = Math.pow(i, 0.56) - Math.pow(n, 0.57);
  const f = Math.pow(i, 0.65) - Math.pow(n, 0.62);
  const s = Math.abs(i - n) < Q1 ? 0 : n < i ? a * us : f * us;
  const u = Math.abs(s) < tb ? 0 : s > 0 ? s - ls : s + ls;
  return u * 100;
};
function ps(t, e, r) {
  return 0.2126729 * Math.pow(t / 255, 2.4) + 0.7151522 * Math.pow(e / 255, 2.4) + 0.072175 * Math.pow(r / 255, 2.4);
}

// ../../node_modules/chroma-js/src/utils/delta-e.js
var { sqrt: ee, pow: st, min: eb, max: rb, atan2: ds, abs: hs, cos: Eo, sin: gs, exp: ob, PI: bs } = Math;
function xs(t, e, r = 1, o = 1, n = 1) {
  var i = function($e) {
    return 360 * $e / (2 * bs);
  };
  var a = function($e) {
    return 2 * bs * $e / 360;
  };
  t = new O(t);
  e = new O(e);
  const [f, s, u] = Array.from(t.lab());
  const [d, x, _] = Array.from(e.lab());
  const T = (f + d) / 2;
  const F = ee(st(s, 2) + st(u, 2));
  const I = ee(st(x, 2) + st(_, 2));
  const S = (F + I) / 2;
  const M = 0.5 * (1 - ee(st(S, 7) / (st(S, 7) + st(25, 7))));
  const j = s * (1 + M);
  const Y = x * (1 + M);
  const Z = ee(st(j, 2) + st(u, 2));
  const H = ee(st(Y, 2) + st(_, 2));
  const k = (Z + H) / 2;
  const h = i(ds(u, j));
  const N = i(ds(_, Y));
  const B = h >= 0 ? h : h + 360;
  const E = N >= 0 ? N : N + 360;
  const U = hs(B - E) > 180 ? (B + E + 360) / 2 : (B + E) / 2;
  const R = 1 - 0.17 * Eo(a(U - 30)) + 0.24 * Eo(a(2 * U)) + 0.32 * Eo(a(3 * U + 6)) - 0.2 * Eo(a(4 * U - 63));
  let K = E - B;
  K = hs(K) <= 180 ? K : E <= B ? K + 360 : K - 360;
  K = 2 * ee(Z * H) * gs(a(K) / 2);
  const ot = d - f;
  const ut = H - Z;
  const At = 1 + 0.015 * st(T - 50, 2) / ee(20 + st(T - 50, 2));
  const gt = 1 + 0.045 * k;
  const jt = 1 + 0.015 * k * R;
  const ve = 30 * ob(-st((U - 275) / 25, 2));
  const Dt = 2 * ee(st(k, 7) / (st(k, 7) + st(25, 7)));
  const cr = -Dt * gs(2 * a(ve));
  const Kt = ee(
    st(ot / (r * At), 2) + st(ut / (o * gt), 2) + st(K / (n * jt), 2) + cr * (ut / (o * gt)) * (K / (n * jt))
  );
  return rb(0, eb(100, Kt));
}

// ../../node_modules/chroma-js/src/utils/distance.js
function ys(t, e, r = "lab") {
  t = new O(t);
  e = new O(e);
  const o = t.get(r);
  const n = e.get(r);
  let i = 0;
  for (let a in o) {
    const f = (o[a] || 0) - (n[a] || 0);
    i += f * f;
  }
  return Math.sqrt(i);
}

// ../../node_modules/chroma-js/src/utils/valid.js
var _s = (...t) => {
  try {
    new O(...t);
    return true;
  } catch (e) {
    return false;
  }
};

// ../../node_modules/chroma-js/src/utils/scales.js
var ws = {
  cool() {
    return Ne([z.hsl(180, 1, 0.9), z.hsl(250, 0.7, 0.4)]);
  },
  hot() {
    return Ne(["#000", "#f00", "#ff0", "#fff"], [0, 0.25, 0.75, 1]).mode(
      "rgb"
    );
  }
};

// ../../node_modules/chroma-js/src/colors/colorbrewer.js
var $n = {
  // sequential
  OrRd: ["#fff7ec", "#fee8c8", "#fdd49e", "#fdbb84", "#fc8d59", "#ef6548", "#d7301f", "#b30000", "#7f0000"],
  PuBu: ["#fff7fb", "#ece7f2", "#d0d1e6", "#a6bddb", "#74a9cf", "#3690c0", "#0570b0", "#045a8d", "#023858"],
  BuPu: ["#f7fcfd", "#e0ecf4", "#bfd3e6", "#9ebcda", "#8c96c6", "#8c6bb1", "#88419d", "#810f7c", "#4d004b"],
  Oranges: ["#fff5eb", "#fee6ce", "#fdd0a2", "#fdae6b", "#fd8d3c", "#f16913", "#d94801", "#a63603", "#7f2704"],
  BuGn: ["#f7fcfd", "#e5f5f9", "#ccece6", "#99d8c9", "#66c2a4", "#41ae76", "#238b45", "#006d2c", "#00441b"],
  YlOrBr: ["#ffffe5", "#fff7bc", "#fee391", "#fec44f", "#fe9929", "#ec7014", "#cc4c02", "#993404", "#662506"],
  YlGn: ["#ffffe5", "#f7fcb9", "#d9f0a3", "#addd8e", "#78c679", "#41ab5d", "#238443", "#006837", "#004529"],
  Reds: ["#fff5f0", "#fee0d2", "#fcbba1", "#fc9272", "#fb6a4a", "#ef3b2c", "#cb181d", "#a50f15", "#67000d"],
  RdPu: ["#fff7f3", "#fde0dd", "#fcc5c0", "#fa9fb5", "#f768a1", "#dd3497", "#ae017e", "#7a0177", "#49006a"],
  Greens: ["#f7fcf5", "#e5f5e0", "#c7e9c0", "#a1d99b", "#74c476", "#41ab5d", "#238b45", "#006d2c", "#00441b"],
  YlGnBu: ["#ffffd9", "#edf8b1", "#c7e9b4", "#7fcdbb", "#41b6c4", "#1d91c0", "#225ea8", "#253494", "#081d58"],
  Purples: ["#fcfbfd", "#efedf5", "#dadaeb", "#bcbddc", "#9e9ac8", "#807dba", "#6a51a3", "#54278f", "#3f007d"],
  GnBu: ["#f7fcf0", "#e0f3db", "#ccebc5", "#a8ddb5", "#7bccc4", "#4eb3d3", "#2b8cbe", "#0868ac", "#084081"],
  Greys: ["#ffffff", "#f0f0f0", "#d9d9d9", "#bdbdbd", "#969696", "#737373", "#525252", "#252525", "#000000"],
  YlOrRd: ["#ffffcc", "#ffeda0", "#fed976", "#feb24c", "#fd8d3c", "#fc4e2a", "#e31a1c", "#bd0026", "#800026"],
  PuRd: ["#f7f4f9", "#e7e1ef", "#d4b9da", "#c994c7", "#df65b0", "#e7298a", "#ce1256", "#980043", "#67001f"],
  Blues: ["#f7fbff", "#deebf7", "#c6dbef", "#9ecae1", "#6baed6", "#4292c6", "#2171b5", "#08519c", "#08306b"],
  PuBuGn: ["#fff7fb", "#ece2f0", "#d0d1e6", "#a6bddb", "#67a9cf", "#3690c0", "#02818a", "#016c59", "#014636"],
  Viridis: ["#440154", "#482777", "#3f4a8a", "#31678e", "#26838f", "#1f9d8a", "#6cce5a", "#b6de2b", "#fee825"],
  // diverging
  Spectral: ["#9e0142", "#d53e4f", "#f46d43", "#fdae61", "#fee08b", "#ffffbf", "#e6f598", "#abdda4", "#66c2a5", "#3288bd", "#5e4fa2"],
  RdYlGn: ["#a50026", "#d73027", "#f46d43", "#fdae61", "#fee08b", "#ffffbf", "#d9ef8b", "#a6d96a", "#66bd63", "#1a9850", "#006837"],
  RdBu: ["#67001f", "#b2182b", "#d6604d", "#f4a582", "#fddbc7", "#f7f7f7", "#d1e5f0", "#92c5de", "#4393c3", "#2166ac", "#053061"],
  PiYG: ["#8e0152", "#c51b7d", "#de77ae", "#f1b6da", "#fde0ef", "#f7f7f7", "#e6f5d0", "#b8e186", "#7fbc41", "#4d9221", "#276419"],
  PRGn: ["#40004b", "#762a83", "#9970ab", "#c2a5cf", "#e7d4e8", "#f7f7f7", "#d9f0d3", "#a6dba0", "#5aae61", "#1b7837", "#00441b"],
  RdYlBu: ["#a50026", "#d73027", "#f46d43", "#fdae61", "#fee090", "#ffffbf", "#e0f3f8", "#abd9e9", "#74add1", "#4575b4", "#313695"],
  BrBG: ["#543005", "#8c510a", "#bf812d", "#dfc27d", "#f6e8c3", "#f5f5f5", "#c7eae5", "#80cdc1", "#35978f", "#01665e", "#003c30"],
  RdGy: ["#67001f", "#b2182b", "#d6604d", "#f4a582", "#fddbc7", "#ffffff", "#e0e0e0", "#bababa", "#878787", "#4d4d4d", "#1a1a1a"],
  PuOr: ["#7f3b08", "#b35806", "#e08214", "#fdb863", "#fee0b6", "#f7f7f7", "#d8daeb", "#b2abd2", "#8073ac", "#542788", "#2d004b"],
  // qualitative
  Set2: ["#66c2a5", "#fc8d62", "#8da0cb", "#e78ac3", "#a6d854", "#ffd92f", "#e5c494", "#b3b3b3"],
  Accent: ["#7fc97f", "#beaed4", "#fdc086", "#ffff99", "#386cb0", "#f0027f", "#bf5b17", "#666666"],
  Set1: ["#e41a1c", "#377eb8", "#4daf4a", "#984ea3", "#ff7f00", "#ffff33", "#a65628", "#f781bf", "#999999"],
  Set3: ["#8dd3c7", "#ffffb3", "#bebada", "#fb8072", "#80b1d3", "#fdb462", "#b3de69", "#fccde5", "#d9d9d9", "#bc80bd", "#ccebc5", "#ffed6f"],
  Dark2: ["#1b9e77", "#d95f02", "#7570b3", "#e7298a", "#66a61e", "#e6ab02", "#a6761d", "#666666"],
  Paired: ["#a6cee3", "#1f78b4", "#b2df8a", "#33a02c", "#fb9a99", "#e31a1c", "#fdbf6f", "#ff7f00", "#cab2d6", "#6a3d9a", "#ffff99", "#b15928"],
  Pastel2: ["#b3e2cd", "#fdcdac", "#cbd5e8", "#f4cae4", "#e6f5c9", "#fff2ae", "#f1e2cc", "#cccccc"],
  Pastel1: ["#fbb4ae", "#b3cde3", "#ccebc5", "#decbe4", "#fed9a6", "#ffffcc", "#e5d8bd", "#fddaec", "#f2f2f2"]
};
var $s = Object.keys($n);
var vs = new Map($s.map((t) => [t.toLowerCase(), t]));
var nb = typeof Proxy === "function" ? new Proxy($n, {
  get(t, e) {
    const r = e.toLowerCase();
    if (vs.has(r)) {
      return t[vs.get(r)];
    }
  },
  getOwnPropertyNames() {
    return Object.getOwnPropertyNames($s);
  }
}) : $n;
var As = nb;

// ../../node_modules/chroma-js/src/io/cmyk/cmyk2rgb.js
var ib = (...t) => {
  t = L(t, "cmyk");
  const [e, r, o, n] = t;
  const i = t.length > 4 ? t[4] : 1;
  if (n === 1) return [0, 0, 0, i];
  return [
    e >= 1 ? 0 : 255 * (1 - e) * (1 - n),
    // r
    r >= 1 ? 0 : 255 * (1 - r) * (1 - n),
    // g
    o >= 1 ? 0 : 255 * (1 - o) * (1 - n),
    // b
    i
  ];
};
var Os = ib;

// ../../node_modules/chroma-js/src/io/cmyk/rgb2cmyk.js
var { max: Es } = Math;
var ab = (...t) => {
  let [e, r, o] = L(t, "rgb");
  e = e / 255;
  r = r / 255;
  o = o / 255;
  const n = 1 - Es(e, Es(r, o));
  const i = n < 1 ? 1 / (1 - n) : 0;
  const a = (1 - e - n) * i;
  const f = (1 - r - n) * i;
  const s = (1 - o - n) * i;
  return [a, f, s, n];
};
var Ss = ab;

// ../../node_modules/chroma-js/src/io/cmyk/index.js
O.prototype.cmyk = function() {
  return Ss(this._rgb);
};
var fb = (...t) => new O(...t, "cmyk");
Object.assign(z, { cmyk: fb });
G.format.cmyk = Os;
G.autodetect.push({
  p: 2,
  test: (...t) => {
    t = L(t, "cmyk");
    if (D(t) === "array" && t.length === 4) {
      return "cmyk";
    }
  }
});

// ../../node_modules/chroma-js/src/io/css/hsl2css.js
var sb = (...t) => {
  const e = L(t, "hsla");
  let r = $t(t) || "lsa";
  e[0] = ht(e[0] || 0) + "deg";
  e[1] = ht(e[1] * 100) + "%";
  e[2] = ht(e[2] * 100) + "%";
  if (r === "hsla" || e.length > 3 && e[3] < 1) {
    e[3] = "/ " + (e.length > 3 ? e[3] : 1);
    r = "hsla";
  } else {
    e.length = 3;
  }
  return `${r.substr(0, 3)}(${e.join(" ")})`;
};
var Ts = sb;

// ../../node_modules/chroma-js/src/io/css/lab2css.js
var lb = (...t) => {
  const e = L(t, "lab");
  let r = $t(t) || "lab";
  e[0] = ht(e[0]) + "%";
  e[1] = ht(e[1]);
  e[2] = ht(e[2]);
  if (r === "laba" || e.length > 3 && e[3] < 1) {
    e[3] = "/ " + (e.length > 3 ? e[3] : 1);
  } else {
    e.length = 3;
  }
  return `lab(${e.join(" ")})`;
};
var ks = lb;

// ../../node_modules/chroma-js/src/io/css/lch2css.js
var ub = (...t) => {
  const e = L(t, "lch");
  let r = $t(t) || "lab";
  e[0] = ht(e[0]) + "%";
  e[1] = ht(e[1]);
  e[2] = isNaN(e[2]) ? "none" : ht(e[2]) + "deg";
  if (r === "lcha" || e.length > 3 && e[3] < 1) {
    e[3] = "/ " + (e.length > 3 ? e[3] : 1);
  } else {
    e.length = 3;
  }
  return `lch(${e.join(" ")})`;
};
var Cs = ub;

// ../../node_modules/chroma-js/src/io/css/oklab2css.js
var cb = (...t) => {
  const e = L(t, "lab");
  e[0] = ht(e[0] * 100) + "%";
  e[1] = yr(e[1]);
  e[2] = yr(e[2]);
  if (e.length > 3 && e[3] < 1) {
    e[3] = "/ " + (e.length > 3 ? e[3] : 1);
  } else {
    e.length = 3;
  }
  return `oklab(${e.join(" ")})`;
};
var Ms = cb;

// ../../node_modules/chroma-js/src/io/oklch/rgb2oklch.js
var pb = (...t) => {
  const [e, r, o, ...n] = L(t, "rgb");
  const [i, a, f] = fr(e, r, o);
  const [s, u, d] = $o(i, a, f);
  return [s, u, d, ...n.length > 0 && n[0] < 1 ? [n[0]] : []];
};
var So = pb;

// ../../node_modules/chroma-js/src/io/css/oklch2css.js
var mb = (...t) => {
  const e = L(t, "lch");
  e[0] = ht(e[0] * 100) + "%";
  e[1] = yr(e[1]);
  e[2] = isNaN(e[2]) ? "none" : ht(e[2]) + "deg";
  if (e.length > 3 && e[3] < 1) {
    e[3] = "/ " + (e.length > 3 ? e[3] : 1);
  } else {
    e.length = 3;
  }
  return `oklch(${e.join(" ")})`;
};
var Ns = mb;

// ../../node_modules/chroma-js/src/io/css/rgb2css.js
var { round: An } = Math;
var db = (...t) => {
  const e = L(t, "rgba");
  let r = $t(t) || "rgb";
  if (r.substr(0, 3) === "hsl") {
    return Ts(Ao(e), r);
  }
  if (r.substr(0, 3) === "lab") {
    const o = ye();
    Ct("d50");
    const n = ks(rr(e), r);
    Ct(o);
    return n;
  }
  if (r.substr(0, 3) === "lch") {
    const o = ye();
    Ct("d50");
    const n = Cs(wr(e), r);
    Ct(o);
    return n;
  }
  if (r.substr(0, 5) === "oklab") {
    return Ms(fr(e));
  }
  if (r.substr(0, 5) === "oklch") {
    return Ns(So(e));
  }
  e[0] = An(e[0]);
  e[1] = An(e[1]);
  e[2] = An(e[2]);
  if (r === "rgba" || e.length > 3 && e[3] < 1) {
    e[3] = "/ " + (e.length > 3 ? e[3] : 1);
    r = "rgba";
  }
  return `${r.substr(0, 3)}(${e.slice(0, r === "rgb" ? 3 : 4).join(" ")})`;
};
var Ps = db;

// ../../node_modules/chroma-js/src/io/oklch/oklch2rgb.js
var hb = (...t) => {
  t = L(t, "lch");
  const [e, r, o, ...n] = t;
  const [i, a, f] = vo(e, r, o);
  const [s, u, d] = ar(i, a, f);
  return [s, u, d, ...n.length > 0 && n[0] < 1 ? [n[0]] : []];
};
var To = hb;

// ../../node_modules/chroma-js/src/io/css/css2rgb.js
var re = /((?:-?\d+)|(?:-?\d+(?:\.\d+)?)%|none)/.source;
var Bt = /((?:-?(?:\d+(?:\.\d*)?|\.\d+)%?)|none)/.source;
var ko = /((?:-?(?:\d+(?:\.\d*)?|\.\d+)%)|none)/.source;
var Nt = /\s*/.source;
var lr = /\s+/.source;
var On = /\s*,\s*/.source;
var Co = /((?:-?(?:\d+(?:\.\d*)?|\.\d+)(?:deg)?)|none)/.source;
var ur = /\s*(?:\/\s*((?:[01]|[01]?\.\d+)|\d+(?:\.\d+)?%))?/.source;
var Ls = new RegExp(
  "^rgba?\\(" + Nt + [re, re, re].join(lr) + ur + "\\)$"
);
var Fs = new RegExp(
  "^rgb\\(" + Nt + [re, re, re].join(On) + Nt + "\\)$"
);
var Is = new RegExp(
  "^rgba\\(" + Nt + [re, re, re, Bt].join(On) + Nt + "\\)$"
);
var Bs = new RegExp(
  "^hsla?\\(" + Nt + [Co, ko, ko].join(lr) + ur + "\\)$"
);
var js = new RegExp(
  "^hsl?\\(" + Nt + [Co, ko, ko].join(On) + Nt + "\\)$"
);
var Ds = /^hsla\(\s*(-?\d+(?:\.\d+)?),\s*(-?\d+(?:\.\d+)?)%\s*,\s*(-?\d+(?:\.\d+)?)%\s*,\s*([01]|[01]?\.\d+)\)$/;
var Rs = new RegExp(
  "^lab\\(" + Nt + [Bt, Bt, Bt].join(lr) + ur + "\\)$"
);
var Gs = new RegExp(
  "^lch\\(" + Nt + [Bt, Bt, Co].join(lr) + ur + "\\)$"
);
var Us = new RegExp(
  "^oklab\\(" + Nt + [Bt, Bt, Bt].join(lr) + ur + "\\)$"
);
var qs = new RegExp(
  "^oklch\\(" + Nt + [Bt, Bt, Co].join(lr) + ur + "\\)$"
);
var { round: zs } = Math;
var sr = (t) => {
  return t.map((e, r) => r <= 2 ? Tt(zs(e), 0, 255) : e);
};
var lt = (t, e = 0, r = 100, o = false) => {
  if (typeof t === "string" && t.endsWith("%")) {
    t = parseFloat(t.substring(0, t.length - 1)) / 100;
    if (o) {
      t = e + (t + 1) * 0.5 * (r - e);
    } else {
      t = e + t * (r - e);
    }
  }
  return +t;
};
var yt = (t, e) => {
  return t === "none" ? e : t;
};
var Hs = (t) => {
  t = t.toLowerCase().trim();
  if (t === "transparent") {
    return [0, 0, 0, 0];
  }
  let e;
  if (G.format.named) {
    try {
      return G.format.named(t);
    } catch (r) {
    }
  }
  if ((e = t.match(Ls)) || (e = t.match(Fs))) {
    let r = e.slice(1, 4);
    for (let n = 0; n < 3; n++) {
      r[n] = +lt(yt(r[n], 0), 0, 255);
    }
    r = sr(r);
    const o = e[4] !== void 0 ? +lt(e[4], 0, 1) : 1;
    r[3] = o;
    return r;
  }
  if (e = t.match(Is)) {
    const r = e.slice(1, 5);
    for (let o = 0; o < 4; o++) {
      r[o] = +lt(r[o], 0, 255);
    }
    return r;
  }
  if ((e = t.match(Bs)) || (e = t.match(js))) {
    const r = e.slice(1, 4);
    r[0] = +yt(r[0].replace("deg", ""), 0);
    r[1] = +lt(yt(r[1], 0), 0, 100) * 0.01;
    r[2] = +lt(yt(r[2], 0), 0, 100) * 0.01;
    const o = sr(vr(r));
    const n = e[4] !== void 0 ? +lt(e[4], 0, 1) : 1;
    o[3] = n;
    return o;
  }
  if (e = t.match(Ds)) {
    const r = e.slice(1, 4);
    r[1] *= 0.01;
    r[2] *= 0.01;
    const o = vr(r);
    for (let n = 0; n < 3; n++) {
      o[n] = zs(o[n]);
    }
    o[3] = +e[4];
    return o;
  }
  if (e = t.match(Rs)) {
    const r = e.slice(1, 4);
    r[0] = lt(yt(r[0], 0), 0, 100);
    r[1] = lt(yt(r[1], 0), -125, 125, true);
    r[2] = lt(yt(r[2], 0), -125, 125, true);
    const o = ye();
    Ct("d50");
    const n = sr(er(r));
    Ct(o);
    const i = e[4] !== void 0 ? +lt(e[4], 0, 1) : 1;
    n[3] = i;
    return n;
  }
  if (e = t.match(Gs)) {
    const r = e.slice(1, 4);
    r[0] = lt(r[0], 0, 100);
    r[1] = lt(yt(r[1], 0), 0, 150, false);
    r[2] = +yt(r[2].replace("deg", ""), 0);
    const o = ye();
    Ct("d50");
    const n = sr(or(r));
    Ct(o);
    const i = e[4] !== void 0 ? +lt(e[4], 0, 1) : 1;
    n[3] = i;
    return n;
  }
  if (e = t.match(Us)) {
    const r = e.slice(1, 4);
    r[0] = lt(yt(r[0], 0), 0, 1);
    r[1] = lt(yt(r[1], 0), -0.4, 0.4, true);
    r[2] = lt(yt(r[2], 0), -0.4, 0.4, true);
    const o = sr(ar(r));
    const n = e[4] !== void 0 ? +lt(e[4], 0, 1) : 1;
    o[3] = n;
    return o;
  }
  if (e = t.match(qs)) {
    const r = e.slice(1, 4);
    r[0] = lt(yt(r[0], 0), 0, 1);
    r[1] = lt(yt(r[1], 0), 0, 0.4, false);
    r[2] = +yt(r[2].replace("deg", ""), 0);
    const o = sr(To(r));
    const n = e[4] !== void 0 ? +lt(e[4], 0, 1) : 1;
    o[3] = n;
    return o;
  }
};
Hs.test = (t) => {
  return (
    // modern
    Ls.test(t) || Bs.test(t) || Rs.test(t) || Gs.test(t) || Us.test(t) || qs.test(t) || // legacy
    Fs.test(t) || Is.test(t) || js.test(t) || Ds.test(t) || t === "transparent"
  );
};
var En = Hs;

// ../../node_modules/chroma-js/src/io/css/index.js
O.prototype.css = function(t) {
  return Ps(this._rgb, t);
};
var gb = (...t) => new O(...t, "css");
z.css = gb;
G.format.css = En;
G.autodetect.push({
  p: 5,
  test: (t, ...e) => {
    if (!e.length && D(t) === "string" && En.test(t)) {
      return "css";
    }
  }
});

// ../../node_modules/chroma-js/src/io/gl/index.js
G.format.gl = (...t) => {
  const e = L(t, "rgba");
  e[0] *= 255;
  e[1] *= 255;
  e[2] *= 255;
  return e;
};
var bb = (...t) => new O(...t, "gl");
z.gl = bb;
O.prototype.gl = function() {
  const t = this._rgb;
  return [t[0] / 255, t[1] / 255, t[2] / 255, t[3]];
};

// ../../node_modules/chroma-js/src/io/hex/index.js
O.prototype.hex = function(t) {
  return wo(this._rgb, t);
};
var xb = (...t) => new O(...t, "hex");
z.hex = xb;
G.format.hex = yo;
G.autodetect.push({
  p: 4,
  test: (t, ...e) => {
    if (!e.length && D(t) === "string" && [3, 4, 5, 6, 7, 8, 9].indexOf(t.length) >= 0) {
      return "hex";
    }
  }
});

// ../../node_modules/chroma-js/src/io/temp/temperature2rgb.js
var { log: Mo } = Math;
var yb = (t) => {
  const e = t / 100;
  let r, o, n;
  if (e < 66) {
    r = 255;
    o = e < 6 ? 0 : -155.25485562709179 - 0.44596950469579133 * (o = e - 2) + 104.49216199393888 * Mo(o);
    n = e < 20 ? 0 : -254.76935184120902 + 0.8274096064007395 * (n = e - 10) + 115.67994401066147 * Mo(n);
  } else {
    r = 351.97690566805693 + 0.114206453784165 * (r = e - 55) - 40.25366309332127 * Mo(r);
    o = 325.4494125711974 + 0.07943456536662342 * (o = e - 50) - 28.0852963507957 * Mo(o);
    n = 255;
  }
  return [r, o, n, 1];
};
var No = yb;

// ../../node_modules/chroma-js/src/io/temp/rgb2temperature.js
var { round: _b } = Math;
var wb = (...t) => {
  const e = L(t, "rgb");
  const r = e[0], o = e[2];
  let n = 1e3;
  let i = 4e4;
  const a = 0.4;
  let f;
  while (i - n > a) {
    f = (i + n) * 0.5;
    const s = No(f);
    if (s[2] / s[0] >= o / r) {
      i = f;
    } else {
      n = f;
    }
  }
  return _b(f);
};
var Ws = wb;

// ../../node_modules/chroma-js/src/io/temp/index.js
O.prototype.temp = O.prototype.kelvin = O.prototype.temperature = function() {
  return Ws(this._rgb);
};
var Sn = (...t) => new O(...t, "temp");
Object.assign(z, { temp: Sn, kelvin: Sn, temperature: Sn });
G.format.temp = G.format.kelvin = G.format.temperature = No;

// ../../node_modules/chroma-js/src/io/oklch/index.js
O.prototype.oklch = function() {
  return So(this._rgb);
};
var vb = (...t) => new O(...t, "oklch");
Object.assign(z, { oklch: vb });
G.format.oklch = To;
G.autodetect.push({
  p: 2,
  test: (...t) => {
    t = L(t, "oklch");
    if (D(t) === "array" && t.length === 3) {
      return "oklch";
    }
  }
});

// ../../node_modules/chroma-js/index.js
Object.assign(z, {
  analyze: wn,
  average: es,
  bezier: rs,
  blend: ns,
  brewer: As,
  Color: O,
  colors: xe,
  contrast: ss,
  contrastAPCA: ms,
  cubehelix: is,
  deltaE: xs,
  distance: ys,
  input: G,
  interpolate: Wt,
  limits: vn,
  mix: Wt,
  random: as,
  scale: Ne,
  scales: ws,
  valid: _s
});
var Po = z;

// ../utils/src/color/index.ts
var Ks = (t) => {
  const e = {
    pie: "categorical",
    comparison: "categorical"
  };
  if (t in e) {
    return e[t];
  } else {
    return "categorical";
  }
};

// src/charts/utils/color-utils.ts
var $b = "#CCCCCC";
var A7 = "#B3B3B3";
var Ab = "#545454";
var O7 = "#707070";
var Ob = 0.6;
var Eb = 0.92;
var E7 = (t, e, r) => {
  if (!t) {
    return {
      palette: []
    };
  }
  const o = t?.colorPalette ?? null;
  if (!o) {
    const n = document.querySelector(
      `.toaster-chart${e ? ".toaster-is-terminal" : ""}${r === "dark" ? ".toaster-variant-dark" : ""}`
    );
    const i = o ? o.type : Ks(t?.type ?? "pie");
    const a = [];
    if (n) {
      for (let f = 0; f <= Bf; f++) {
        const s = getComputedStyle(n).getPropertyValue(
          `--toas-color-palette-${i}-${f}`
        );
        if (s) {
          a.push(s);
        }
      }
      return {
        palette: a,
        highlight: {
          included: getComputedStyle(n).getPropertyValue(
            `--toas-color-${i}-highlight-included`
          ),
          notIncluded: getComputedStyle(n).getPropertyValue(
            `--toas-color-${i}-highlight-notIncluded`
          )
        }
      };
    } else {
      return {
        palette: [],
        highlight: {
          included: "",
          notIncluded: ""
        }
      };
    }
  } else {
    return o.colors[r];
  }
};
var S7 = (t, e) => {
  try {
    Po(t);
  } catch (r) {
    return e === "dark" ? Ab : $b;
  }
  if (e === "dark") {
    return Po(t).shade(Eb).hex();
  } else {
    return Po(t).tint(Ob).hex();
  }
};

export {
  oe as a,
  Zs as b,
  Gt as c,
  Sb as d,
  Tb as e,
  kb as f,
  Cb as g,
  Mb as h,
  Nb as i,
  Pb as j,
  Lb as k,
  Fb as l,
  Go as m,
  qb as n,
  Uo as o,
  Pe as p,
  zb as q,
  kr as r,
  Hb as s,
  Fn as t,
  Wb as u,
  Kb as v,
  Ro as w,
  qo as x,
  Zb as y,
  Yb as z,
  Xb as A,
  Vb as B,
  sx as C,
  lx as D,
  ux as E,
  Dn as F,
  mr as G,
  Mr as H,
  fl as I,
  sl as J,
  Pr as K,
  qn as L,
  zn as M,
  Hx as N,
  Wx as O,
  Cx as P,
  ll as Q,
  ul as R,
  Mx as S,
  Ko as T,
  tn as U,
  $d as V,
  M0 as W,
  j0 as X,
  G0 as Y,
  Zo as Z,
  Pl as _,
  q0 as $,
  W0 as aa,
  Z0 as ba,
  th as ca,
  rh as da,
  sh as ea,
  uh as fa,
  KO as ga,
  YO as ha,
  XO as ia,
  VO as ja,
  JO as ka,
  QO as la,
  $b as ma,
  A7 as na,
  Ab as oa,
  O7 as pa,
  E7 as qa,
  S7 as ra
};
/*! Bundled license information:

lodash-es/lodash.js:
  (**
   * @license
   * Lodash (Custom Build) <https://lodash.com/>
   * Build: `lodash modularize exports="es" -o ./`
   * Copyright OpenJS Foundation and other contributors <https://openjsf.org/>
   * Released under MIT license <https://lodash.com/license>
   * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
   * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
   *)

numbro/dist/es/numbro.js:
  (*!
   * Copyright (c) 2017 Benjamin Van Ryseghem<benjamin@vanryseghem.com>
   *
   * Permission is hereby granted, free of charge, to any person obtaining a copy
   * of this software and associated documentation files (the "Software"), to deal
   * in the Software without restriction, including without limitation the rights
   * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
   * copies of the Software, and to permit persons to whom the Software is
   * furnished to do so, subject to the following conditions:
   *
   * The above copyright notice and this permission notice shall be included in
   * all copies or substantial portions of the Software.
   *
   * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
   * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
   * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
   * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
   * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
   * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
   * SOFTWARE.
   *)

chroma-js/src/utils/contrastAPCA.js:
  (**
   * @license
   *
   * The APCA contrast prediction algorithm is based of the formulas published
   * in the APCA-1.0.98G specification by Myndex. The specification is available at:
   * https://raw.githubusercontent.com/Myndex/apca-w3/master/images/APCAw3_0.1.17_APCA0.0.98G.svg
   *
   * Note that the APCA implementation is still beta, so please update to
   * future versions of chroma.js when they become available.
   *
   * You can read more about the APCA Readability Criterion at
   * https://readtech.org/ARC/
   *)
*/
