import {
  b as Bp,
  c as ha,
  e as Lp,
  g as rt,
  h as Vp,
  i as ga,
  k as fi,
  l as Hp,
  m as Up,
  o as Gp,
  q as qp,
  r as Fc,
  s as Pc,
  t as Rc,
  u as $c,
  v as zp,
  w as Wp,
  x as Zp,
  y as jp,
  z as Xp
} from "./chunk-LMFSDKL5.js";

// ../../node_modules/chroma-js/src/utils/limit.js
var { min: Cy, max: Iy } = Math;
var gr = (e, t = 0, r = 1) => {
  return Cy(Iy(t, e), r);
};

// ../../node_modules/chroma-js/src/utils/clip_rgb.js
var To = (e) => {
  e._clipped = false;
  e._unclipped = e.slice(0);
  for (let t = 0; t <= 3; t++) {
    if (t < 3) {
      if (e[t] < 0 || e[t] > 255) e._clipped = true;
      e[t] = gr(e[t], 0, 255);
    } else if (t === 3) {
      e[t] = gr(e[t], 0, 1);
    }
  }
  return e;
};

// ../../node_modules/chroma-js/src/utils/type.js
var Jp = {};
for (let e of [
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
  Jp[`[object ${e}]`] = e.toLowerCase();
}
function oe(e) {
  return Jp[Object.prototype.toString.call(e)] || "object";
}

// ../../node_modules/chroma-js/src/utils/unpack.js
var Q = (e, t = null) => {
  if (e.length >= 3) return Array.prototype.slice.call(e);
  if (oe(e[0]) == "object" && t) {
    return t.split("").filter((r) => e[0][r] !== void 0).map((r) => e[0][r]);
  }
  return e[0].slice(0);
};

// ../../node_modules/chroma-js/src/utils/last.js
var ar = (e) => {
  if (e.length < 2) return null;
  const t = e.length - 1;
  if (oe(e[t]) == "string") return e[t].toLowerCase();
  return null;
};

// ../../node_modules/chroma-js/src/utils/index.js
var { PI: Ms, min: Ds, max: ws } = Math;
var St = (e) => Math.round(e * 100) / 100;
var _a = (e) => Math.round(e * 100) / 100;
var _r = Ms * 2;
var Es = Ms / 3;
var Kp = Ms / 180;
var Qp = 180 / Ms;
function As(e) {
  return [...e.slice(0, 3).reverse(), ...e.slice(3)];
}

// ../../node_modules/chroma-js/src/io/input.js
var ae = {
  format: {},
  autodetect: []
};

// ../../node_modules/chroma-js/src/Color.js
var Bc = class {
  constructor(...t) {
    const r = this;
    if (oe(t[0]) === "object" && t[0].constructor && t[0].constructor === this.constructor) {
      return t[0];
    }
    let n = ar(t);
    let o = false;
    if (!n) {
      o = true;
      if (!ae.sorted) {
        ae.autodetect = ae.autodetect.sort((i, a) => a.p - i.p);
        ae.sorted = true;
      }
      for (let i of ae.autodetect) {
        n = i.test(...t);
        if (n) break;
      }
    }
    if (ae.format[n]) {
      const i = ae.format[n].apply(
        null,
        o ? t : t.slice(0, -1)
      );
      r._rgb = To(i);
    } else {
      throw new Error("unknown format: " + t);
    }
    if (r._rgb.length === 3) r._rgb.push(1);
  }
  toString() {
    if (oe(this.hex) == "function") return this.hex();
    return `[${this._rgb.join(",")}]`;
  }
};
var V = Bc;

// ../../node_modules/chroma-js/src/version.js
var ed = "3.2.0";

// ../../node_modules/chroma-js/src/chroma.js
var td = (...e) => {
  return new V(...e);
};
td.version = ed;
var fe = td;

// ../../node_modules/chroma-js/src/colors/w3cx11.js
var Oy = {
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
var Gn = Oy;

// ../../node_modules/chroma-js/src/io/hex/hex2rgb.js
var Fy = /^#?([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/;
var Py = /^#?([A-Fa-f0-9]{8}|[A-Fa-f0-9]{4})$/;
var Ry = (e) => {
  if (e.match(Fy)) {
    if (e.length === 4 || e.length === 7) {
      e = e.substr(1);
    }
    if (e.length === 3) {
      e = e.split("");
      e = e[0] + e[0] + e[1] + e[1] + e[2] + e[2];
    }
    const t = parseInt(e, 16);
    const r = t >> 16;
    const n = t >> 8 & 255;
    const o = t & 255;
    return [r, n, o, 1];
  }
  if (e.match(Py)) {
    if (e.length === 5 || e.length === 9) {
      e = e.substr(1);
    }
    if (e.length === 4) {
      e = e.split("");
      e = e[0] + e[0] + e[1] + e[1] + e[2] + e[2] + e[3] + e[3];
    }
    const t = parseInt(e, 16);
    const r = t >> 24 & 255;
    const n = t >> 16 & 255;
    const o = t >> 8 & 255;
    const i = Math.round((t & 255) / 255 * 100) / 100;
    return [r, n, o, i];
  }
  throw new Error(`unknown hex color: ${e}`);
};
var Ns = Ry;

// ../../node_modules/chroma-js/src/io/hex/rgb2hex.js
var { round: Ys } = Math;
var $y = (...e) => {
  let [t, r, n, o] = Q(e, "rgba");
  let i = ar(e) || "auto";
  if (o === void 0) o = 1;
  if (i === "auto") {
    i = o < 1 ? "rgba" : "rgb";
  }
  t = Ys(t);
  r = Ys(r);
  n = Ys(n);
  const a = t << 16 | r << 8 | n;
  let s = "000000" + a.toString(16);
  s = s.substr(s.length - 6);
  let l = "0" + Ys(o * 255).toString(16);
  l = l.substr(l.length - 2);
  switch (i.toLowerCase()) {
    case "rgba":
      return `#${s}${l}`;
    case "argb":
      return `#${l}${s}`;
    default:
      return `#${s}`;
  }
};
var ks = $y;

// ../../node_modules/chroma-js/src/io/named/index.js
V.prototype.name = function() {
  const e = ks(this._rgb, "rgb");
  for (let t of Object.keys(Gn)) {
    if (Gn[t] === e) return t.toLowerCase();
  }
  return e;
};
ae.format.named = (e) => {
  e = e.toLowerCase();
  if (Gn[e]) return Ns(Gn[e]);
  throw new Error("unknown color name: " + e);
};
ae.autodetect.push({
  p: 5,
  test: (e, ...t) => {
    if (!t.length && oe(e) === "string" && Gn[e.toLowerCase()]) {
      return "named";
    }
  }
});

// ../../node_modules/chroma-js/src/ops/alpha.js
V.prototype.alpha = function(e, t = false) {
  if (e !== void 0 && oe(e) === "number") {
    if (t) {
      this._rgb[3] = e;
      return this;
    }
    return new V([this._rgb[0], this._rgb[1], this._rgb[2], e], "rgb");
  }
  return this._rgb[3];
};

// ../../node_modules/chroma-js/src/ops/clipped.js
V.prototype.clipped = function() {
  return this._rgb._clipped || false;
};

// ../../node_modules/chroma-js/src/io/lab/lab-constants.js
var ya = {
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
var ln = ya;
var By = /* @__PURE__ */ new Map([
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
function yr(e) {
  const t = By.get(String(e).toLowerCase());
  if (!t) {
    throw new Error("unknown Lab illuminant " + e);
  }
  ya.labWhitePoint = e;
  ya.Xn = t[0];
  ya.Zn = t[1];
}
function qn() {
  return ya.labWhitePoint;
}

// ../../node_modules/chroma-js/src/io/lab/lab2rgb.js
var Ly = (...e) => {
  e = Q(e, "lab");
  const [t, r, n] = e;
  const [o, i, a] = Vy(t, r, n);
  const [s, l, c] = Vc(o, i, a);
  return [s, l, c, e.length > 3 ? e[3] : 1];
};
var Vy = (e, t, r) => {
  const { kE: n, kK: o, kKE: i, Xn: a, Yn: s, Zn: l } = ln;
  const c = (e + 16) / 116;
  const f = 2e-3 * t + c;
  const p = c - 5e-3 * r;
  const u = f * f * f;
  const d = p * p * p;
  const h = u > n ? u : (116 * f - 16) / o;
  const _ = e > i ? Math.pow((e + 16) / 116, 3) : e / o;
  const m = d > n ? d : (116 * p - 16) / o;
  const x = h * a;
  const A = _ * s;
  const D = m * l;
  return [x, A, D];
};
var Lc = (e) => {
  const t = Math.sign(e);
  e = Math.abs(e);
  return (e <= 31308e-7 ? e * 12.92 : 1.055 * Math.pow(e, 1 / 2.4) - 0.055) * t;
};
var Vc = (e, t, r) => {
  const { MtxAdaptMa: n, MtxAdaptMaI: o, MtxXYZ2RGB: i, RefWhiteRGB: a, Xn: s, Yn: l, Zn: c } = ln;
  const f = s * n.m00 + l * n.m10 + c * n.m20;
  const p = s * n.m01 + l * n.m11 + c * n.m21;
  const u = s * n.m02 + l * n.m12 + c * n.m22;
  const d = a.X * n.m00 + a.Y * n.m10 + a.Z * n.m20;
  const h = a.X * n.m01 + a.Y * n.m11 + a.Z * n.m21;
  const _ = a.X * n.m02 + a.Y * n.m12 + a.Z * n.m22;
  const m = (e * n.m00 + t * n.m10 + r * n.m20) * (d / f);
  const x = (e * n.m01 + t * n.m11 + r * n.m21) * (h / p);
  const A = (e * n.m02 + t * n.m12 + r * n.m22) * (_ / u);
  const D = m * o.m00 + x * o.m10 + A * o.m20;
  const N = m * o.m01 + x * o.m11 + A * o.m21;
  const F = m * o.m02 + x * o.m12 + A * o.m22;
  const T = Lc(
    D * i.m00 + N * i.m10 + F * i.m20
  );
  const v = Lc(
    D * i.m01 + N * i.m11 + F * i.m21
  );
  const S = Lc(
    D * i.m02 + N * i.m12 + F * i.m22
  );
  return [T * 255, v * 255, S * 255];
};
var ui = Ly;

// ../../node_modules/chroma-js/src/io/lab/rgb2lab.js
var Hy = (...e) => {
  const [t, r, n, ...o] = Q(e, "rgb");
  const [i, a, s] = Uc(t, r, n);
  const [l, c, f] = Uy(i, a, s);
  return [l, c, f, ...o.length > 0 && o[0] < 1 ? [o[0]] : []];
};
function Uy(e, t, r) {
  const { Xn: n, Yn: o, Zn: i, kE: a, kK: s } = ln;
  const l = e / n;
  const c = t / o;
  const f = r / i;
  const p = l > a ? Math.pow(l, 1 / 3) : (s * l + 16) / 116;
  const u = c > a ? Math.pow(c, 1 / 3) : (s * c + 16) / 116;
  const d = f > a ? Math.pow(f, 1 / 3) : (s * f + 16) / 116;
  return [116 * u - 16, 500 * (p - u), 200 * (u - d)];
}
function Hc(e) {
  const t = Math.sign(e);
  e = Math.abs(e);
  const r = e <= 0.04045 ? e / 12.92 : Math.pow((e + 0.055) / 1.055, 2.4);
  return r * t;
}
var Uc = (e, t, r) => {
  e = Hc(e / 255);
  t = Hc(t / 255);
  r = Hc(r / 255);
  const { MtxRGB2XYZ: n, MtxAdaptMa: o, MtxAdaptMaI: i, Xn: a, Yn: s, Zn: l, As: c, Bs: f, Cs: p } = ln;
  let u = e * n.m00 + t * n.m10 + r * n.m20;
  let d = e * n.m01 + t * n.m11 + r * n.m21;
  let h = e * n.m02 + t * n.m12 + r * n.m22;
  const _ = a * o.m00 + s * o.m10 + l * o.m20;
  const m = a * o.m01 + s * o.m11 + l * o.m21;
  const x = a * o.m02 + s * o.m12 + l * o.m22;
  let A = u * o.m00 + d * o.m10 + h * o.m20;
  let D = u * o.m01 + d * o.m11 + h * o.m21;
  let N = u * o.m02 + d * o.m12 + h * o.m22;
  A *= _ / c;
  D *= m / f;
  N *= x / p;
  u = A * i.m00 + D * i.m10 + N * i.m20;
  d = A * i.m01 + D * i.m11 + N * i.m21;
  h = A * i.m02 + D * i.m12 + N * i.m22;
  return [u, d, h];
};
var pi = Hy;

// ../../node_modules/chroma-js/src/io/lab/index.js
V.prototype.lab = function() {
  return pi(this._rgb);
};
var Gy = (...e) => new V(...e, "lab");
Object.assign(fe, { lab: Gy, getLabWhitePoint: qn, setLabWhitePoint: yr });
ae.format.lab = ui;
ae.autodetect.push({
  p: 2,
  test: (...e) => {
    e = Q(e, "lab");
    if (oe(e) === "array" && e.length === 3) {
      return "lab";
    }
  }
});

// ../../node_modules/chroma-js/src/ops/darken.js
V.prototype.darken = function(e = 1) {
  const t = this;
  const r = t.lab();
  r[0] -= ln.Kn * e;
  return new V(r, "lab").alpha(t.alpha(), true);
};
V.prototype.brighten = function(e = 1) {
  return this.darken(-e);
};
V.prototype.darker = V.prototype.darken;
V.prototype.brighter = V.prototype.brighten;

// ../../node_modules/chroma-js/src/ops/get.js
V.prototype.get = function(e) {
  const [t, r] = e.split(".");
  const n = this[t]();
  if (r) {
    const o = t.indexOf(r) - (t.substr(0, 2) === "ok" ? 2 : 0);
    if (o > -1) return n[o];
    throw new Error(`unknown channel ${r} in mode ${t}`);
  } else {
    return n;
  }
};

// ../../node_modules/chroma-js/src/ops/luminance.js
var { pow: qy } = Math;
var zy = 1e-7;
var Wy = 20;
V.prototype.luminance = function(e, t = "rgb") {
  if (e !== void 0 && oe(e) === "number") {
    if (e === 0) {
      return new V([0, 0, 0, this._rgb[3]], "rgb");
    }
    if (e === 1) {
      return new V([255, 255, 255, this._rgb[3]], "rgb");
    }
    let r = this.luminance();
    let n = Wy;
    const o = (a, s) => {
      const l = a.interpolate(s, 0.5, t);
      const c = l.luminance();
      if (Math.abs(e - c) < zy || !n--) {
        return l;
      }
      return c > e ? o(a, l) : o(l, s);
    };
    const i = (r > e ? o(new V([0, 0, 0]), this) : o(this, new V([255, 255, 255]))).rgb();
    return new V([...i, this._rgb[3]]);
  }
  return Zy(...this._rgb.slice(0, 3));
};
var Zy = (e, t, r) => {
  e = Gc(e);
  t = Gc(t);
  r = Gc(r);
  return 0.2126 * e + 0.7152 * t + 0.0722 * r;
};
var Gc = (e) => {
  e /= 255;
  return e <= 0.03928 ? e / 12.92 : qy((e + 0.055) / 1.055, 2.4);
};

// ../../node_modules/chroma-js/src/interpolator/index.js
var Ee = {};

// ../../node_modules/chroma-js/src/generator/mix.js
var cn = (e, t, r = 0.5, ...n) => {
  let o = n[0] || "lrgb";
  if (!Ee[o] && !n.length) {
    o = Object.keys(Ee)[0];
  }
  if (!Ee[o]) {
    throw new Error(`interpolation mode ${o} is not defined`);
  }
  if (oe(e) !== "object") e = new V(e);
  if (oe(t) !== "object") t = new V(t);
  return Ee[o](e, t, r).alpha(
    e.alpha() + r * (t.alpha() - e.alpha())
  );
};

// ../../node_modules/chroma-js/src/ops/mix.js
V.prototype.mix = V.prototype.interpolate = function(e, t = 0.5, ...r) {
  return cn(this, e, t, ...r);
};

// ../../node_modules/chroma-js/src/ops/premultiply.js
V.prototype.premultiply = function(e = false) {
  const t = this._rgb;
  const r = t[3];
  if (e) {
    this._rgb = [t[0] * r, t[1] * r, t[2] * r, r];
    return this;
  } else {
    return new V([t[0] * r, t[1] * r, t[2] * r, r], "rgb");
  }
};

// ../../node_modules/chroma-js/src/io/lch/lch2lab.js
var { sin: jy, cos: Xy } = Math;
var Jy = (...e) => {
  let [t, r, n] = Q(e, "lch");
  if (isNaN(n)) n = 0;
  n = n * Kp;
  return [t, Xy(n) * r, jy(n) * r];
};
var Cs = Jy;

// ../../node_modules/chroma-js/src/io/lch/lch2rgb.js
var Ky = (...e) => {
  e = Q(e, "lch");
  const [t, r, n] = e;
  const [o, i, a] = Cs(t, r, n);
  const [s, l, c] = ui(o, i, a);
  return [s, l, c, e.length > 3 ? e[3] : 1];
};
var di = Ky;

// ../../node_modules/chroma-js/src/io/lch/hcl2rgb.js
var Qy = (...e) => {
  const t = As(Q(e, "hcl"));
  return di(...t);
};
var rd = Qy;

// ../../node_modules/chroma-js/src/io/lch/lab2lch.js
var { sqrt: ex, atan2: tx, round: rx } = Math;
var nx = (...e) => {
  const [t, r, n] = Q(e, "lab");
  const o = ex(r * r + n * n);
  let i = (tx(n, r) * Qp + 360) % 360;
  if (rx(o * 1e4) === 0) i = Number.NaN;
  return [t, o, i];
};
var Is = nx;

// ../../node_modules/chroma-js/src/io/lch/rgb2lch.js
var ox = (...e) => {
  const [t, r, n, ...o] = Q(e, "rgb");
  const [i, a, s] = pi(t, r, n);
  const [l, c, f] = Is(i, a, s);
  return [l, c, f, ...o.length > 0 && o[0] < 1 ? [o[0]] : []];
};
var xa = ox;

// ../../node_modules/chroma-js/src/io/lch/index.js
V.prototype.lch = function() {
  return xa(this._rgb);
};
V.prototype.hcl = function() {
  return As(xa(this._rgb));
};
var ix = (...e) => new V(...e, "lch");
var ax = (...e) => new V(...e, "hcl");
Object.assign(fe, { lch: ix, hcl: ax });
ae.format.lch = di;
ae.format.hcl = rd;
["lch", "hcl"].forEach(
  (e) => ae.autodetect.push({
    p: 2,
    test: (...t) => {
      t = Q(t, e);
      if (oe(t) === "array" && t.length === 3) {
        return e;
      }
    }
  })
);

// ../../node_modules/chroma-js/src/ops/saturate.js
V.prototype.saturate = function(e = 1) {
  const t = this;
  const r = t.lch();
  r[1] += ln.Kn * e;
  if (r[1] < 0) r[1] = 0;
  return new V(r, "lch").alpha(t.alpha(), true);
};
V.prototype.desaturate = function(e = 1) {
  return this.saturate(-e);
};

// ../../node_modules/chroma-js/src/ops/set.js
V.prototype.set = function(e, t, r = false) {
  const [n, o] = e.split(".");
  const i = this[n]();
  if (o) {
    const a = n.indexOf(o) - (n.substr(0, 2) === "ok" ? 2 : 0);
    if (a > -1) {
      if (oe(t) == "string") {
        switch (t.charAt(0)) {
          case "+":
            i[a] += +t;
            break;
          case "-":
            i[a] += +t;
            break;
          case "*":
            i[a] *= +t.substr(1);
            break;
          case "/":
            i[a] /= +t.substr(1);
            break;
          default:
            i[a] = +t;
        }
      } else if (oe(t) === "number") {
        i[a] = t;
      } else {
        throw new Error(`unsupported value for Color.set`);
      }
      const s = new V(i, n);
      if (r) {
        this._rgb = s._rgb;
        return this;
      }
      return s;
    }
    throw new Error(`unknown channel ${o} in mode ${n}`);
  } else {
    return i;
  }
};

// ../../node_modules/chroma-js/src/ops/shade.js
V.prototype.tint = function(e = 0.5, ...t) {
  return cn(this, "white", e, ...t);
};
V.prototype.shade = function(e = 0.5, ...t) {
  return cn(this, "black", e, ...t);
};

// ../../node_modules/chroma-js/src/interpolator/rgb.js
var sx = (e, t, r) => {
  const n = e._rgb;
  const o = t._rgb;
  return new V(
    n[0] + r * (o[0] - n[0]),
    n[1] + r * (o[1] - n[1]),
    n[2] + r * (o[2] - n[2]),
    "rgb"
  );
};
Ee.rgb = sx;

// ../../node_modules/chroma-js/src/interpolator/lrgb.js
var { sqrt: qc, pow: mi } = Math;
var lx = (e, t, r) => {
  const [n, o, i] = e._rgb;
  const [a, s, l] = t._rgb;
  return new V(
    qc(mi(n, 2) * (1 - r) + mi(a, 2) * r),
    qc(mi(o, 2) * (1 - r) + mi(s, 2) * r),
    qc(mi(i, 2) * (1 - r) + mi(l, 2) * r),
    "rgb"
  );
};
Ee.lrgb = lx;

// ../../node_modules/chroma-js/src/interpolator/lab.js
var cx = (e, t, r) => {
  const n = e.lab();
  const o = t.lab();
  return new V(
    n[0] + r * (o[0] - n[0]),
    n[1] + r * (o[1] - n[1]),
    n[2] + r * (o[2] - n[2]),
    "lab"
  );
};
Ee.lab = cx;

// ../../node_modules/chroma-js/src/interpolator/_hsx.js
var xr = (e, t, r, n) => {
  let o, i;
  if (n === "hsl") {
    o = e.hsl();
    i = t.hsl();
  } else if (n === "hsv") {
    o = e.hsv();
    i = t.hsv();
  } else if (n === "hcg") {
    o = e.hcg();
    i = t.hcg();
  } else if (n === "hsi") {
    o = e.hsi();
    i = t.hsi();
  } else if (n === "lch" || n === "hcl") {
    n = "hcl";
    o = e.hcl();
    i = t.hcl();
  } else if (n === "oklch") {
    o = e.oklch().reverse();
    i = t.oklch().reverse();
  }
  let a, s, l, c, f, p;
  if (n.substr(0, 1) === "h" || n === "oklch") {
    [a, l, f] = o;
    [s, c, p] = i;
  }
  let u, d, h, _;
  if (!isNaN(a) && !isNaN(s)) {
    if (s > a && s - a > 180) {
      _ = s - (a + 360);
    } else if (s < a && a - s > 180) {
      _ = s + 360 - a;
    } else {
      _ = s - a;
    }
    d = a + r * _;
  } else if (!isNaN(a)) {
    d = a;
    if ((p == 1 || p == 0) && n != "hsv") u = l;
  } else if (!isNaN(s)) {
    d = s;
    if ((f == 1 || f == 0) && n != "hsv") u = c;
  } else {
    d = Number.NaN;
  }
  if (u === void 0) u = l + r * (c - l);
  h = f + r * (p - f);
  return n === "oklch" ? new V([h, u, d], n) : new V([d, u, h], n);
};

// ../../node_modules/chroma-js/src/interpolator/lch.js
var nd = (e, t, r) => {
  return xr(e, t, r, "lch");
};
Ee.lch = nd;
Ee.hcl = nd;

// ../../node_modules/chroma-js/src/io/num/num2rgb.js
var fx = (e) => {
  if (oe(e) == "number" && e >= 0 && e <= 16777215) {
    const t = e >> 16;
    const r = e >> 8 & 255;
    const n = e & 255;
    return [t, r, n, 1];
  }
  throw new Error("unknown num color: " + e);
};
var od = fx;

// ../../node_modules/chroma-js/src/io/num/rgb2num.js
var ux = (...e) => {
  const [t, r, n] = Q(e, "rgb");
  return (t << 16) + (r << 8) + n;
};
var id = ux;

// ../../node_modules/chroma-js/src/io/num/index.js
V.prototype.num = function() {
  return id(this._rgb);
};
var px = (...e) => new V(...e, "num");
Object.assign(fe, { num: px });
ae.format.num = od;
ae.autodetect.push({
  p: 5,
  test: (...e) => {
    if (e.length === 1 && oe(e[0]) === "number" && e[0] >= 0 && e[0] <= 16777215) {
      return "num";
    }
  }
});

// ../../node_modules/chroma-js/src/interpolator/num.js
var dx = (e, t, r) => {
  const n = e.num();
  const o = t.num();
  return new V(n + r * (o - n), "num");
};
Ee.num = dx;

// ../../node_modules/chroma-js/src/io/hcg/hcg2rgb.js
var { floor: mx } = Math;
var hx = (...e) => {
  e = Q(e, "hcg");
  let [t, r, n] = e;
  let o, i, a;
  n = n * 255;
  const s = r * 255;
  if (r === 0) {
    o = i = a = n;
  } else {
    if (t === 360) t = 0;
    if (t > 360) t -= 360;
    if (t < 0) t += 360;
    t /= 60;
    const l = mx(t);
    const c = t - l;
    const f = n * (1 - r);
    const p = f + s * (1 - c);
    const u = f + s * c;
    const d = f + s;
    switch (l) {
      case 0:
        [o, i, a] = [d, u, f];
        break;
      case 1:
        [o, i, a] = [p, d, f];
        break;
      case 2:
        [o, i, a] = [f, d, u];
        break;
      case 3:
        [o, i, a] = [f, p, d];
        break;
      case 4:
        [o, i, a] = [u, f, d];
        break;
      case 5:
        [o, i, a] = [d, f, p];
        break;
    }
  }
  return [o, i, a, e.length > 3 ? e[3] : 1];
};
var ad = hx;

// ../../node_modules/chroma-js/src/io/hcg/rgb2hcg.js
var gx = (...e) => {
  const [t, r, n] = Q(e, "rgb");
  const o = Ds(t, r, n);
  const i = ws(t, r, n);
  const a = i - o;
  const s = a * 100 / 255;
  const l = o / (255 - a) * 100;
  let c;
  if (a === 0) {
    c = Number.NaN;
  } else {
    if (t === i) c = (r - n) / a;
    if (r === i) c = 2 + (n - t) / a;
    if (n === i) c = 4 + (t - r) / a;
    c *= 60;
    if (c < 0) c += 360;
  }
  return [c, s, l];
};
var sd = gx;

// ../../node_modules/chroma-js/src/io/hcg/index.js
V.prototype.hcg = function() {
  return sd(this._rgb);
};
var _x = (...e) => new V(...e, "hcg");
fe.hcg = _x;
ae.format.hcg = ad;
ae.autodetect.push({
  p: 1,
  test: (...e) => {
    e = Q(e, "hcg");
    if (oe(e) === "array" && e.length === 3) {
      return "hcg";
    }
  }
});

// ../../node_modules/chroma-js/src/interpolator/hcg.js
var yx = (e, t, r) => {
  return xr(e, t, r, "hcg");
};
Ee.hcg = yx;

// ../../node_modules/chroma-js/src/io/hsi/hsi2rgb.js
var { cos: hi } = Math;
var xx = (...e) => {
  e = Q(e, "hsi");
  let [t, r, n] = e;
  let o, i, a;
  if (isNaN(t)) t = 0;
  if (isNaN(r)) r = 0;
  if (t > 360) t -= 360;
  if (t < 0) t += 360;
  t /= 360;
  if (t < 1 / 3) {
    a = (1 - r) / 3;
    o = (1 + r * hi(_r * t) / hi(Es - _r * t)) / 3;
    i = 1 - (a + o);
  } else if (t < 2 / 3) {
    t -= 1 / 3;
    o = (1 - r) / 3;
    i = (1 + r * hi(_r * t) / hi(Es - _r * t)) / 3;
    a = 1 - (o + i);
  } else {
    t -= 2 / 3;
    i = (1 - r) / 3;
    a = (1 + r * hi(_r * t) / hi(Es - _r * t)) / 3;
    o = 1 - (i + a);
  }
  o = gr(n * o * 3);
  i = gr(n * i * 3);
  a = gr(n * a * 3);
  return [o * 255, i * 255, a * 255, e.length > 3 ? e[3] : 1];
};
var ld = xx;

// ../../node_modules/chroma-js/src/io/hsi/rgb2hsi.js
var { min: bx, sqrt: vx, acos: Tx } = Math;
var Sx = (...e) => {
  let [t, r, n] = Q(e, "rgb");
  t /= 255;
  r /= 255;
  n /= 255;
  let o;
  const i = bx(t, r, n);
  const a = (t + r + n) / 3;
  const s = a > 0 ? 1 - i / a : 0;
  if (s === 0) {
    o = NaN;
  } else {
    o = (t - r + (t - n)) / 2;
    o /= vx((t - r) * (t - r) + (t - n) * (r - n));
    o = Tx(o);
    if (n > r) {
      o = _r - o;
    }
    o /= _r;
  }
  return [o * 360, s, a];
};
var cd = Sx;

// ../../node_modules/chroma-js/src/io/hsi/index.js
V.prototype.hsi = function() {
  return cd(this._rgb);
};
var Mx = (...e) => new V(...e, "hsi");
fe.hsi = Mx;
ae.format.hsi = ld;
ae.autodetect.push({
  p: 2,
  test: (...e) => {
    e = Q(e, "hsi");
    if (oe(e) === "array" && e.length === 3) {
      return "hsi";
    }
  }
});

// ../../node_modules/chroma-js/src/interpolator/hsi.js
var Dx = (e, t, r) => {
  return xr(e, t, r, "hsi");
};
Ee.hsi = Dx;

// ../../node_modules/chroma-js/src/io/hsl/hsl2rgb.js
var wx = (...e) => {
  e = Q(e, "hsl");
  const [t, r, n] = e;
  let o, i, a;
  if (r === 0) {
    o = i = a = n * 255;
  } else {
    const s = [0, 0, 0];
    const l = [0, 0, 0];
    const c = n < 0.5 ? n * (1 + r) : n + r - n * r;
    const f = 2 * n - c;
    const p = t / 360;
    s[0] = p + 1 / 3;
    s[1] = p;
    s[2] = p - 1 / 3;
    for (let u = 0; u < 3; u++) {
      if (s[u] < 0) s[u] += 1;
      if (s[u] > 1) s[u] -= 1;
      if (6 * s[u] < 1) l[u] = f + (c - f) * 6 * s[u];
      else if (2 * s[u] < 1) l[u] = c;
      else if (3 * s[u] < 2) l[u] = f + (c - f) * (2 / 3 - s[u]) * 6;
      else l[u] = f;
    }
    [o, i, a] = [l[0] * 255, l[1] * 255, l[2] * 255];
  }
  if (e.length > 3) {
    return [o, i, a, e[3]];
  }
  return [o, i, a, 1];
};
var ba = wx;

// ../../node_modules/chroma-js/src/io/hsl/rgb2hsl.js
var Ex = (...e) => {
  e = Q(e, "rgba");
  let [t, r, n] = e;
  t /= 255;
  r /= 255;
  n /= 255;
  const o = Ds(t, r, n);
  const i = ws(t, r, n);
  const a = (i + o) / 2;
  let s, l;
  if (i === o) {
    s = 0;
    l = Number.NaN;
  } else {
    s = a < 0.5 ? (i - o) / (i + o) : (i - o) / (2 - i - o);
  }
  if (t == i) l = (r - n) / (i - o);
  else if (r == i) l = 2 + (n - t) / (i - o);
  else if (n == i) l = 4 + (t - r) / (i - o);
  l *= 60;
  if (l < 0) l += 360;
  if (e.length > 3 && e[3] !== void 0) return [l, s, a, e[3]];
  return [l, s, a];
};
var Os = Ex;

// ../../node_modules/chroma-js/src/io/hsl/index.js
V.prototype.hsl = function() {
  return Os(this._rgb);
};
var Ax = (...e) => new V(...e, "hsl");
fe.hsl = Ax;
ae.format.hsl = ba;
ae.autodetect.push({
  p: 2,
  test: (...e) => {
    e = Q(e, "hsl");
    if (oe(e) === "array" && e.length === 3) {
      return "hsl";
    }
  }
});

// ../../node_modules/chroma-js/src/interpolator/hsl.js
var Nx = (e, t, r) => {
  return xr(e, t, r, "hsl");
};
Ee.hsl = Nx;

// ../../node_modules/chroma-js/src/io/hsv/hsv2rgb.js
var { floor: Yx } = Math;
var kx = (...e) => {
  e = Q(e, "hsv");
  let [t, r, n] = e;
  let o, i, a;
  n *= 255;
  if (r === 0) {
    o = i = a = n;
  } else {
    if (t === 360) t = 0;
    if (t > 360) t -= 360;
    if (t < 0) t += 360;
    t /= 60;
    const s = Yx(t);
    const l = t - s;
    const c = n * (1 - r);
    const f = n * (1 - r * l);
    const p = n * (1 - r * (1 - l));
    switch (s) {
      case 0:
        [o, i, a] = [n, p, c];
        break;
      case 1:
        [o, i, a] = [f, n, c];
        break;
      case 2:
        [o, i, a] = [c, n, p];
        break;
      case 3:
        [o, i, a] = [c, f, n];
        break;
      case 4:
        [o, i, a] = [p, c, n];
        break;
      case 5:
        [o, i, a] = [n, c, f];
        break;
    }
  }
  return [o, i, a, e.length > 3 ? e[3] : 1];
};
var fd = kx;

// ../../node_modules/chroma-js/src/io/hsv/rgb2hsv.js
var { min: Cx, max: Ix } = Math;
var Ox = (...e) => {
  e = Q(e, "rgb");
  let [t, r, n] = e;
  const o = Cx(t, r, n);
  const i = Ix(t, r, n);
  const a = i - o;
  let s, l, c;
  c = i / 255;
  if (i === 0) {
    s = Number.NaN;
    l = 0;
  } else {
    l = a / i;
    if (t === i) s = (r - n) / a;
    if (r === i) s = 2 + (n - t) / a;
    if (n === i) s = 4 + (t - r) / a;
    s *= 60;
    if (s < 0) s += 360;
  }
  return [s, l, c];
};
var ud = Ox;

// ../../node_modules/chroma-js/src/io/hsv/index.js
V.prototype.hsv = function() {
  return ud(this._rgb);
};
var Fx = (...e) => new V(...e, "hsv");
fe.hsv = Fx;
ae.format.hsv = fd;
ae.autodetect.push({
  p: 2,
  test: (...e) => {
    e = Q(e, "hsv");
    if (oe(e) === "array" && e.length === 3) {
      return "hsv";
    }
  }
});

// ../../node_modules/chroma-js/src/interpolator/hsv.js
var Px = (e, t, r) => {
  return xr(e, t, r, "hsv");
};
Ee.hsv = Px;

// ../../node_modules/chroma-js/src/utils/multiply-matrices.js
function So(e, t) {
  let r = e.length;
  if (!Array.isArray(e[0])) {
    e = [e];
  }
  if (!Array.isArray(t[0])) {
    t = t.map((a) => [a]);
  }
  let n = t[0].length;
  let o = t[0].map((a, s) => t.map((l) => l[s]));
  let i = e.map(
    (a) => o.map((s) => {
      if (!Array.isArray(a)) {
        return s.reduce((l, c) => l + c * a, 0);
      }
      return a.reduce((l, c, f) => l + c * (s[f] || 0), 0);
    })
  );
  if (r === 1) {
    i = i[0];
  }
  if (n === 1) {
    return i.map((a) => a[0]);
  }
  return i;
}

// ../../node_modules/chroma-js/src/io/oklab/oklab2rgb.js
var Rx = (...e) => {
  e = Q(e, "lab");
  const [t, r, n, ...o] = e;
  const [i, a, s] = $x([t, r, n]);
  const [l, c, f] = Vc(i, a, s);
  return [l, c, f, ...o.length > 0 && o[0] < 1 ? [o[0]] : []];
};
function $x(e) {
  var t = [
    [1.2268798758459243, -0.5578149944602171, 0.2813910456659647],
    [-0.0405757452148008, 1.112286803280317, -0.0717110580655164],
    [-0.0763729366746601, -0.4214933324022432, 1.5869240198367816]
  ];
  var r = [
    [1, 0.3963377773761749, 0.2158037573099136],
    [1, -0.1055613458156586, -0.0638541728258133],
    [1, -0.0894841775298119, -1.2914855480194092]
  ];
  var n = So(r, e);
  return So(
    t,
    n.map((o) => o ** 3)
  );
}
var gi = Rx;

// ../../node_modules/chroma-js/src/io/oklab/rgb2oklab.js
var Bx = (...e) => {
  const [t, r, n, ...o] = Q(e, "rgb");
  const i = Uc(t, r, n);
  const a = Lx(i);
  return [...a, ...o.length > 0 && o[0] < 1 ? [o[0]] : []];
};
function Lx(e) {
  const t = [
    [0.819022437996703, 0.3619062600528904, -0.1288737815209879],
    [0.0329836539323885, 0.9292868615863434, 0.0361446663506424],
    [0.0481771893596242, 0.2642395317527308, 0.6335478284694309]
  ];
  const r = [
    [0.210454268309314, 0.7936177747023054, -0.0040720430116193],
    [1.9779985324311684, -2.42859224204858, 0.450593709617411],
    [0.0259040424655478, 0.7827717124575296, -0.8086757549230774]
  ];
  const n = So(t, e);
  return So(
    r,
    n.map((o) => Math.cbrt(o))
  );
}
var _i = Bx;

// ../../node_modules/chroma-js/src/io/oklab/index.js
V.prototype.oklab = function() {
  return _i(this._rgb);
};
var Vx = (...e) => new V(...e, "oklab");
Object.assign(fe, { oklab: Vx });
ae.format.oklab = gi;
ae.autodetect.push({
  p: 2,
  test: (...e) => {
    e = Q(e, "oklab");
    if (oe(e) === "array" && e.length === 3) {
      return "oklab";
    }
  }
});

// ../../node_modules/chroma-js/src/interpolator/oklab.js
var Hx = (e, t, r) => {
  const n = e.oklab();
  const o = t.oklab();
  return new V(
    n[0] + r * (o[0] - n[0]),
    n[1] + r * (o[1] - n[1]),
    n[2] + r * (o[2] - n[2]),
    "oklab"
  );
};
Ee.oklab = Hx;

// ../../node_modules/chroma-js/src/interpolator/oklch.js
var Ux = (e, t, r) => {
  return xr(e, t, r, "oklch");
};
Ee.oklch = Ux;

// ../../node_modules/chroma-js/src/generator/average.js
var { pow: zc, sqrt: Wc, PI: Zc, cos: pd, sin: dd, atan2: Gx } = Math;
var md = (e, t = "lrgb", r = null) => {
  const n = e.length;
  if (!r) r = Array.from(new Array(n)).map(() => 1);
  const o = n / r.reduce(function(p, u) {
    return p + u;
  });
  r.forEach((p, u) => {
    r[u] *= o;
  });
  e = e.map((p) => new V(p));
  if (t === "lrgb") {
    return qx(e, r);
  }
  const i = e.shift();
  const a = i.get(t);
  const s = [];
  let l = 0;
  let c = 0;
  for (let p = 0; p < a.length; p++) {
    a[p] = (a[p] || 0) * r[0];
    s.push(isNaN(a[p]) ? 0 : r[0]);
    if (t.charAt(p) === "h" && !isNaN(a[p])) {
      const u = a[p] / 180 * Zc;
      l += pd(u) * r[0];
      c += dd(u) * r[0];
    }
  }
  let f = i.alpha() * r[0];
  e.forEach((p, u) => {
    const d = p.get(t);
    f += p.alpha() * r[u + 1];
    for (let h = 0; h < a.length; h++) {
      if (!isNaN(d[h])) {
        s[h] += r[u + 1];
        if (t.charAt(h) === "h") {
          const _ = d[h] / 180 * Zc;
          l += pd(_) * r[u + 1];
          c += dd(_) * r[u + 1];
        } else {
          a[h] += d[h] * r[u + 1];
        }
      }
    }
  });
  for (let p = 0; p < a.length; p++) {
    if (t.charAt(p) === "h") {
      let u = Gx(c / s[p], l / s[p]) / Zc * 180;
      while (u < 0) u += 360;
      while (u >= 360) u -= 360;
      a[p] = u;
    } else {
      a[p] = a[p] / s[p];
    }
  }
  f /= n;
  return new V(a, t).alpha(f > 0.99999 ? 1 : f, true);
};
var qx = (e, t) => {
  const r = e.length;
  const n = [0, 0, 0, 0];
  for (let o = 0; o < e.length; o++) {
    const i = e[o];
    const a = t[o] / r;
    const s = i._rgb;
    n[0] += zc(s[0], 2) * a;
    n[1] += zc(s[1], 2) * a;
    n[2] += zc(s[2], 2) * a;
    n[3] += s[3] * a;
  }
  n[0] = Wc(n[0]);
  n[1] = Wc(n[1]);
  n[2] = Wc(n[2]);
  if (n[3] > 0.9999999) n[3] = 1;
  return new V(To(n));
};

// ../../node_modules/chroma-js/src/generator/scale.js
var { pow: zx } = Math;
function Mo(e) {
  let t = "rgb";
  let r = fe("#ccc");
  let n = 0;
  let o = [0, 1];
  let i = [0, 1];
  let a = [];
  let s = [0, 0];
  let l = false;
  let c = [];
  let f = false;
  let p = 0;
  let u = 1;
  let d = false;
  let h = {};
  let _ = true;
  let m = 1;
  const x = function(S) {
    S = S || ["#fff", "#000"];
    if (S && oe(S) === "string" && fe.brewer && fe.brewer[S.toLowerCase()]) {
      S = fe.brewer[S.toLowerCase()];
    }
    if (oe(S) === "array") {
      if (S.length === 1) {
        S = [S[0], S[0]];
      }
      S = S.slice(0);
      for (let Y = 0; Y < S.length; Y++) {
        S[Y] = fe(S[Y]);
      }
      a.length = 0;
      for (let Y = 0; Y < S.length; Y++) {
        a.push(Y / (S.length - 1));
      }
    }
    T();
    return c = S;
  };
  const A = function(S) {
    if (l != null) {
      const Y = l.length - 1;
      let E = 0;
      while (E < Y && S >= l[E]) {
        E++;
      }
      return E - 1;
    }
    return 0;
  };
  let D = (S) => S;
  let N = (S) => S;
  const F = function(S, Y) {
    let E, O;
    if (Y == null) {
      Y = false;
    }
    if (isNaN(S) || S === null) {
      return r;
    }
    if (!Y) {
      if (l && l.length > 2) {
        const R = A(S);
        O = R / (l.length - 2);
      } else if (u !== p) {
        O = (S - p) / (u - p);
      } else {
        O = 1;
      }
    } else {
      O = S;
    }
    O = N(O);
    if (!Y) {
      O = D(O);
    }
    if (m !== 1) {
      O = zx(O, m);
    }
    O = s[0] + O * (1 - s[0] - s[1]);
    O = gr(O, 0, 1);
    const H = Math.floor(O * 1e4);
    if (_ && h[H]) {
      E = h[H];
    } else {
      if (oe(c) === "array") {
        for (let R = 0; R < a.length; R++) {
          const L = a[R];
          if (O <= L) {
            E = c[R];
            break;
          }
          if (O >= L && R === a.length - 1) {
            E = c[R];
            break;
          }
          if (O > L && O < a[R + 1]) {
            O = (O - L) / (a[R + 1] - L);
            E = fe.interpolate(
              c[R],
              c[R + 1],
              O,
              t
            );
            break;
          }
        }
      } else if (oe(c) === "function") {
        E = c(O);
      }
      if (_) {
        h[H] = E;
      }
    }
    return E;
  };
  var T = () => h = {};
  x(e);
  const v = function(S) {
    const Y = fe(F(S));
    if (f && Y[f]) {
      return Y[f]();
    } else {
      return Y;
    }
  };
  v.classes = function(S) {
    if (S != null) {
      if (oe(S) === "array") {
        l = S;
        o = [S[0], S[S.length - 1]];
      } else {
        const Y = fe.analyze(o);
        if (S === 0) {
          l = [Y.min, Y.max];
        } else {
          l = fe.limits(Y, "e", S);
        }
      }
      return v;
    }
    return l;
  };
  v.domain = function(S) {
    if (!arguments.length) {
      return i;
    }
    i = S.slice(0);
    p = S[0];
    u = S[S.length - 1];
    a = [];
    const Y = c.length;
    if (S.length === Y && p !== u) {
      for (let E of Array.from(S)) {
        a.push((E - p) / (u - p));
      }
    } else {
      for (let E = 0; E < Y; E++) {
        a.push(E / (Y - 1));
      }
      if (S.length > 2) {
        const E = S.map((H, R) => R / (S.length - 1));
        const O = S.map((H) => (H - p) / (u - p));
        if (!O.every((H, R) => E[R] === H)) {
          N = (H) => {
            if (H <= 0 || H >= 1) return H;
            let R = 0;
            while (H >= O[R + 1]) R++;
            const L = (H - O[R]) / (O[R + 1] - O[R]);
            const G = E[R] + L * (E[R + 1] - E[R]);
            return G;
          };
        }
      }
    }
    o = [p, u];
    return v;
  };
  v.mode = function(S) {
    if (!arguments.length) {
      return t;
    }
    t = S;
    T();
    return v;
  };
  v.range = function(S, Y) {
    x(S, Y);
    return v;
  };
  v.out = function(S) {
    f = S;
    return v;
  };
  v.spread = function(S) {
    if (!arguments.length) {
      return n;
    }
    n = S;
    return v;
  };
  v.correctLightness = function(S) {
    if (S == null) {
      S = true;
    }
    d = S;
    T();
    if (d) {
      D = function(Y) {
        const E = F(0, true).lab()[0];
        const O = F(1, true).lab()[0];
        const H = E > O;
        let R = F(Y, true).lab()[0];
        const L = E + (O - E) * Y;
        let G = R - L;
        let z = 0;
        let J = 1;
        let Z = 20;
        while (Math.abs(G) > 0.01 && Z-- > 0) {
          (function() {
            if (H) {
              G *= -1;
            }
            if (G < 0) {
              z = Y;
              Y += (J - Y) * 0.5;
            } else {
              J = Y;
              Y += (z - Y) * 0.5;
            }
            R = F(Y, true).lab()[0];
            return G = R - L;
          })();
        }
        return Y;
      };
    } else {
      D = (Y) => Y;
    }
    return v;
  };
  v.padding = function(S) {
    if (S != null) {
      if (oe(S) === "number") {
        S = [S, S];
      }
      s = S;
      return v;
    } else {
      return s;
    }
  };
  v.colors = function(S, Y) {
    if (arguments.length < 2) {
      Y = "hex";
    }
    let E = [];
    if (arguments.length === 0) {
      E = c.slice(0);
    } else if (S === 1) {
      E = [v(0.5)];
    } else if (S > 1) {
      const O = o[0];
      const H = o[1] - O;
      E = Wx(0, S, false).map(
        (R) => v(O + R / (S - 1) * H)
      );
    } else {
      e = [];
      let O = [];
      if (l && l.length > 2) {
        for (let H = 1, R = l.length, L = 1 <= R; L ? H < R : H > R; L ? H++ : H--) {
          O.push((l[H - 1] + l[H]) * 0.5);
        }
      } else {
        O = o;
      }
      E = O.map((H) => v(H));
    }
    if (fe[Y]) {
      E = E.map((O) => O[Y]());
    }
    return E;
  };
  v.cache = function(S) {
    if (S != null) {
      _ = S;
      return v;
    } else {
      return _;
    }
  };
  v.gamma = function(S) {
    if (S != null) {
      m = S;
      return v;
    } else {
      return m;
    }
  };
  v.nodata = function(S) {
    if (S != null) {
      r = fe(S);
      return v;
    } else {
      return r;
    }
  };
  return v;
}
function Wx(e, t, r) {
  let n = [];
  let o = e < t;
  let i = !r ? t : o ? t + 1 : t - 1;
  for (let a = e; o ? a < i : a > i; o ? a++ : a--) {
    n.push(a);
  }
  return n;
}

// ../../node_modules/chroma-js/src/generator/bezier.js
var Zx = function(e) {
  let t = [1, 1];
  for (let r = 1; r < e; r++) {
    let n = [1];
    for (let o = 1; o <= t.length; o++) {
      n[o] = (t[o] || 0) + t[o - 1];
    }
    t = n;
  }
  return t;
};
var jx = function(e) {
  let t, r, n, o;
  e = e.map((i) => new V(i));
  if (e.length === 2) {
    [r, n] = e.map((i) => i.lab());
    t = function(i) {
      const a = [0, 1, 2].map((s) => r[s] + i * (n[s] - r[s]));
      return new V(a, "lab");
    };
  } else if (e.length === 3) {
    [r, n, o] = e.map((i) => i.lab());
    t = function(i) {
      const a = [0, 1, 2].map(
        (s) => (1 - i) * (1 - i) * r[s] + 2 * (1 - i) * i * n[s] + i * i * o[s]
      );
      return new V(a, "lab");
    };
  } else if (e.length === 4) {
    let i;
    [r, n, o, i] = e.map((a) => a.lab());
    t = function(a) {
      const s = [0, 1, 2].map(
        (l) => (1 - a) * (1 - a) * (1 - a) * r[l] + 3 * (1 - a) * (1 - a) * a * n[l] + 3 * (1 - a) * a * a * o[l] + a * a * a * i[l]
      );
      return new V(s, "lab");
    };
  } else if (e.length >= 5) {
    let i, a, s;
    i = e.map((l) => l.lab());
    s = e.length - 1;
    a = Zx(s);
    t = function(l) {
      const c = 1 - l;
      const f = [0, 1, 2].map(
        (p) => i.reduce(
          (u, d, h) => u + a[h] * c ** (s - h) * l ** h * d[p],
          0
        )
      );
      return new V(f, "lab");
    };
  } else {
    throw new RangeError("No point in running bezier with only one color.");
  }
  return t;
};
var hd = (e) => {
  const t = jx(e);
  t.scale = () => Mo(t);
  return t;
};

// ../../node_modules/chroma-js/src/io/rgb/index.js
var { round: gd } = Math;
V.prototype.rgb = function(e = true) {
  if (e === false) return this._rgb.slice(0, 3);
  return this._rgb.slice(0, 3).map(gd);
};
V.prototype.rgba = function(e = true) {
  return this._rgb.slice(0, 4).map((t, r) => {
    return r < 3 ? e === false ? t : gd(t) : t;
  });
};
var Xx = (...e) => new V(...e, "rgb");
Object.assign(fe, { rgb: Xx });
ae.format.rgb = (...e) => {
  const t = Q(e, "rgba");
  if (t[3] === void 0) t[3] = 1;
  return t;
};
ae.autodetect.push({
  p: 3,
  test: (...e) => {
    e = Q(e, "rgba");
    if (oe(e) === "array" && (e.length === 3 || e.length === 4 && oe(e[3]) == "number" && e[3] >= 0 && e[3] <= 1)) {
      return "rgb";
    }
  }
});

// ../../node_modules/chroma-js/src/generator/blend.js
var Br = (e, t, r) => {
  if (!Br[r]) {
    throw new Error("unknown blend mode " + r);
  }
  return Br[r](e, t);
};
var zn = (e) => (t, r) => {
  const n = fe(r).rgb();
  const o = fe(t).rgb();
  return fe.rgb(e(n, o));
};
var Wn = (e) => (t, r) => {
  const n = [];
  n[0] = e(t[0], r[0]);
  n[1] = e(t[1], r[1]);
  n[2] = e(t[2], r[2]);
  return n;
};
var Jx = (e) => e;
var Kx = (e, t) => e * t / 255;
var Qx = (e, t) => e > t ? t : e;
var eb = (e, t) => e > t ? e : t;
var tb = (e, t) => 255 * (1 - (1 - e / 255) * (1 - t / 255));
var rb = (e, t) => t < 128 ? 2 * e * t / 255 : 255 * (1 - 2 * (1 - e / 255) * (1 - t / 255));
var nb = (e, t) => 255 * (1 - (1 - t / 255) / (e / 255));
var ob = (e, t) => {
  if (e === 255) return 255;
  e = 255 * (t / 255) / (1 - e / 255);
  return e > 255 ? 255 : e;
};
Br.normal = zn(Wn(Jx));
Br.multiply = zn(Wn(Kx));
Br.screen = zn(Wn(tb));
Br.overlay = zn(Wn(rb));
Br.darken = zn(Wn(Qx));
Br.lighten = zn(Wn(eb));
Br.dodge = zn(Wn(ob));
Br.burn = zn(Wn(nb));
var _d = Br;

// ../../node_modules/chroma-js/src/generator/cubehelix.js
var { pow: ib, sin: ab, cos: sb } = Math;
function yd(e = 300, t = -1.5, r = 1, n = 1, o = [0, 1]) {
  let i = 0, a;
  if (oe(o) === "array") {
    a = o[1] - o[0];
  } else {
    a = 0;
    o = [o, o];
  }
  const s = function(l) {
    const c = _r * ((e + 120) / 360 + t * l);
    const f = ib(o[0] + a * l, n);
    const p = i !== 0 ? r[0] + l * i : r;
    const u = p * f * (1 - f) / 2;
    const d = sb(c);
    const h = ab(c);
    const _ = f + u * (-0.14861 * d + 1.78277 * h);
    const m = f + u * (-0.29227 * d - 0.90649 * h);
    const x = f + u * (1.97294 * d);
    return fe(To([_ * 255, m * 255, x * 255, 1]));
  };
  s.start = function(l) {
    if (l == null) {
      return e;
    }
    e = l;
    return s;
  };
  s.rotations = function(l) {
    if (l == null) {
      return t;
    }
    t = l;
    return s;
  };
  s.gamma = function(l) {
    if (l == null) {
      return n;
    }
    n = l;
    return s;
  };
  s.hue = function(l) {
    if (l == null) {
      return r;
    }
    r = l;
    if (oe(r) === "array") {
      i = r[1] - r[0];
      if (i === 0) {
        r = r[1];
      }
    } else {
      i = 0;
    }
    return s;
  };
  s.lightness = function(l) {
    if (l == null) {
      return o;
    }
    if (oe(l) === "array") {
      o = l;
      a = l[1] - l[0];
    } else {
      o = [l, l];
      a = 0;
    }
    return s;
  };
  s.scale = () => fe.scale(s);
  s.hue(r);
  return s;
}

// ../../node_modules/chroma-js/src/generator/random.js
var lb = "0123456789abcdef";
var { floor: cb, random: fb } = Math;
var xd = (e = fb) => {
  let t = "#";
  for (let r = 0; r < 6; r++) {
    t += lb.charAt(cb(e() * 16));
  }
  return new V(t, "hex");
};

// ../../node_modules/chroma-js/src/utils/analyze.js
var { log: bd, pow: ub, floor: pb, abs: db } = Math;
function jc(e, t = null) {
  const r = {
    min: Number.MAX_VALUE,
    max: Number.MAX_VALUE * -1,
    sum: 0,
    values: [],
    count: 0
  };
  if (oe(e) === "object") {
    e = Object.values(e);
  }
  e.forEach((n) => {
    if (t && oe(n) === "object") n = n[t];
    if (n !== void 0 && n !== null && !isNaN(n)) {
      r.values.push(n);
      r.sum += n;
      if (n < r.min) r.min = n;
      if (n > r.max) r.max = n;
      r.count += 1;
    }
  });
  r.domain = [r.min, r.max];
  r.limits = (n, o) => Xc(r, n, o);
  return r;
}
function Xc(e, t = "equal", r = 7) {
  if (oe(e) == "array") {
    e = jc(e);
  }
  const { min: n, max: o } = e;
  const i = e.values.sort((s, l) => s - l);
  if (r === 1) {
    return [n, o];
  }
  const a = [];
  if (t.substr(0, 1) === "c") {
    a.push(n);
    a.push(o);
  }
  if (t.substr(0, 1) === "e") {
    a.push(n);
    for (let s = 1; s < r; s++) {
      a.push(n + s / r * (o - n));
    }
    a.push(o);
  } else if (t.substr(0, 1) === "l") {
    if (n <= 0) {
      throw new Error(
        "Logarithmic scales are only possible for values > 0"
      );
    }
    const s = Math.LOG10E * bd(n);
    const l = Math.LOG10E * bd(o);
    a.push(n);
    for (let c = 1; c < r; c++) {
      a.push(ub(10, s + c / r * (l - s)));
    }
    a.push(o);
  } else if (t.substr(0, 1) === "q") {
    a.push(n);
    for (let s = 1; s < r; s++) {
      const l = (i.length - 1) * s / r;
      const c = pb(l);
      if (c === l) {
        a.push(i[c]);
      } else {
        const f = l - c;
        a.push(i[c] * (1 - f) + i[c + 1] * f);
      }
    }
    a.push(o);
  } else if (t.substr(0, 1) === "k") {
    let s;
    const l = i.length;
    const c = new Array(l);
    const f = new Array(r);
    let p = true;
    let u = 0;
    let d = null;
    d = [];
    d.push(n);
    for (let m = 1; m < r; m++) {
      d.push(n + m / r * (o - n));
    }
    d.push(o);
    while (p) {
      for (let x = 0; x < r; x++) {
        f[x] = 0;
      }
      for (let x = 0; x < l; x++) {
        const A = i[x];
        let D = Number.MAX_VALUE;
        let N;
        for (let F = 0; F < r; F++) {
          const T = db(d[F] - A);
          if (T < D) {
            D = T;
            N = F;
          }
          f[N]++;
          c[x] = N;
        }
      }
      const m = new Array(r);
      for (let x = 0; x < r; x++) {
        m[x] = null;
      }
      for (let x = 0; x < l; x++) {
        s = c[x];
        if (m[s] === null) {
          m[s] = i[x];
        } else {
          m[s] += i[x];
        }
      }
      for (let x = 0; x < r; x++) {
        m[x] *= 1 / f[x];
      }
      p = false;
      for (let x = 0; x < r; x++) {
        if (m[x] !== d[x]) {
          p = true;
          break;
        }
      }
      d = m;
      u++;
      if (u > 200) {
        p = false;
      }
    }
    const h = {};
    for (let m = 0; m < r; m++) {
      h[m] = [];
    }
    for (let m = 0; m < l; m++) {
      s = c[m];
      h[s].push(i[m]);
    }
    let _ = [];
    for (let m = 0; m < r; m++) {
      _.push(h[m][0]);
      _.push(h[m][h[m].length - 1]);
    }
    _ = _.sort((m, x) => m - x);
    a.push(_[0]);
    for (let m = 1; m < _.length; m += 2) {
      const x = _[m];
      if (!isNaN(x) && a.indexOf(x) === -1) {
        a.push(x);
      }
    }
  }
  return a;
}

// ../../node_modules/chroma-js/src/utils/contrast.js
var vd = (e, t) => {
  e = new V(e);
  t = new V(t);
  const r = e.luminance();
  const n = t.luminance();
  return r > n ? (r + 0.05) / (n + 0.05) : (n + 0.05) / (r + 0.05);
};

// ../../node_modules/chroma-js/src/utils/contrastAPCA.js
var Td = 0.027;
var mb = 5e-4;
var hb = 0.1;
var Sd = 1.14;
var Fs = 0.022;
var Md = 1.414;
var wd = (e, t) => {
  e = new V(e);
  t = new V(t);
  if (e.alpha() < 1) {
    e = cn(t, e, e.alpha(), "rgb");
  }
  const r = Dd(...e.rgb());
  const n = Dd(...t.rgb());
  const o = r >= Fs ? r : r + Math.pow(Fs - r, Md);
  const i = n >= Fs ? n : n + Math.pow(Fs - n, Md);
  const a = Math.pow(i, 0.56) - Math.pow(o, 0.57);
  const s = Math.pow(i, 0.65) - Math.pow(o, 0.62);
  const l = Math.abs(i - o) < mb ? 0 : o < i ? a * Sd : s * Sd;
  const c = Math.abs(l) < hb ? 0 : l > 0 ? l - Td : l + Td;
  return c * 100;
};
function Dd(e, t, r) {
  return 0.2126729 * Math.pow(e / 255, 2.4) + 0.7151522 * Math.pow(t / 255, 2.4) + 0.072175 * Math.pow(r / 255, 2.4);
}

// ../../node_modules/chroma-js/src/utils/delta-e.js
var { sqrt: Yn, pow: nt, min: gb, max: _b, atan2: Ed, abs: Ad, cos: Ps, sin: Nd, exp: yb, PI: Yd } = Math;
function kd(e, t, r = 1, n = 1, o = 1) {
  var i = function(me) {
    return 360 * me / (2 * Yd);
  };
  var a = function(me) {
    return 2 * Yd * me / 360;
  };
  e = new V(e);
  t = new V(t);
  const [s, l, c] = Array.from(e.lab());
  const [f, p, u] = Array.from(t.lab());
  const d = (s + f) / 2;
  const h = Yn(nt(l, 2) + nt(c, 2));
  const _ = Yn(nt(p, 2) + nt(u, 2));
  const m = (h + _) / 2;
  const x = 0.5 * (1 - Yn(nt(m, 7) / (nt(m, 7) + nt(25, 7))));
  const A = l * (1 + x);
  const D = p * (1 + x);
  const N = Yn(nt(A, 2) + nt(c, 2));
  const F = Yn(nt(D, 2) + nt(u, 2));
  const T = (N + F) / 2;
  const v = i(Ed(c, A));
  const S = i(Ed(u, D));
  const Y = v >= 0 ? v : v + 360;
  const E = S >= 0 ? S : S + 360;
  const O = Ad(Y - E) > 180 ? (Y + E + 360) / 2 : (Y + E) / 2;
  const H = 1 - 0.17 * Ps(a(O - 30)) + 0.24 * Ps(a(2 * O)) + 0.32 * Ps(a(3 * O + 6)) - 0.2 * Ps(a(4 * O - 63));
  let R = E - Y;
  R = Ad(R) <= 180 ? R : E <= Y ? R + 360 : R - 360;
  R = 2 * Yn(N * F) * Nd(a(R) / 2);
  const L = f - s;
  const G = F - N;
  const z = 1 + 0.015 * nt(d - 50, 2) / Yn(20 + nt(d - 50, 2));
  const J = 1 + 0.045 * T;
  const Z = 1 + 0.015 * T * H;
  const te = 30 * yb(-nt((O - 275) / 25, 2));
  const X = 2 * Yn(nt(T, 7) / (nt(T, 7) + nt(25, 7)));
  const re = -X * Nd(2 * a(te));
  const le = Yn(
    nt(L / (r * z), 2) + nt(G / (n * J), 2) + nt(R / (o * Z), 2) + re * (G / (n * J)) * (R / (o * Z))
  );
  return _b(0, gb(100, le));
}

// ../../node_modules/chroma-js/src/utils/distance.js
function Cd(e, t, r = "lab") {
  e = new V(e);
  t = new V(t);
  const n = e.get(r);
  const o = t.get(r);
  let i = 0;
  for (let a in n) {
    const s = (n[a] || 0) - (o[a] || 0);
    i += s * s;
  }
  return Math.sqrt(i);
}

// ../../node_modules/chroma-js/src/utils/valid.js
var Id = (...e) => {
  try {
    new V(...e);
    return true;
  } catch (t) {
    return false;
  }
};

// ../../node_modules/chroma-js/src/utils/scales.js
var Od = {
  cool() {
    return Mo([fe.hsl(180, 1, 0.9), fe.hsl(250, 0.7, 0.4)]);
  },
  hot() {
    return Mo(["#000", "#f00", "#ff0", "#fff"], [0, 0.25, 0.75, 1]).mode(
      "rgb"
    );
  }
};

// ../../node_modules/chroma-js/src/colors/colorbrewer.js
var Jc = {
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
var Pd = Object.keys(Jc);
var Fd = new Map(Pd.map((e) => [e.toLowerCase(), e]));
var xb = typeof Proxy === "function" ? new Proxy(Jc, {
  get(e, t) {
    const r = t.toLowerCase();
    if (Fd.has(r)) {
      return e[Fd.get(r)];
    }
  },
  getOwnPropertyNames() {
    return Object.getOwnPropertyNames(Pd);
  }
}) : Jc;
var Rd = xb;

// ../../node_modules/chroma-js/src/io/cmyk/cmyk2rgb.js
var bb = (...e) => {
  e = Q(e, "cmyk");
  const [t, r, n, o] = e;
  const i = e.length > 4 ? e[4] : 1;
  if (o === 1) return [0, 0, 0, i];
  return [
    t >= 1 ? 0 : 255 * (1 - t) * (1 - o),
    // r
    r >= 1 ? 0 : 255 * (1 - r) * (1 - o),
    // g
    n >= 1 ? 0 : 255 * (1 - n) * (1 - o),
    // b
    i
  ];
};
var $d = bb;

// ../../node_modules/chroma-js/src/io/cmyk/rgb2cmyk.js
var { max: Bd } = Math;
var vb = (...e) => {
  let [t, r, n] = Q(e, "rgb");
  t = t / 255;
  r = r / 255;
  n = n / 255;
  const o = 1 - Bd(t, Bd(r, n));
  const i = o < 1 ? 1 / (1 - o) : 0;
  const a = (1 - t - o) * i;
  const s = (1 - r - o) * i;
  const l = (1 - n - o) * i;
  return [a, s, l, o];
};
var Ld = vb;

// ../../node_modules/chroma-js/src/io/cmyk/index.js
V.prototype.cmyk = function() {
  return Ld(this._rgb);
};
var Tb = (...e) => new V(...e, "cmyk");
Object.assign(fe, { cmyk: Tb });
ae.format.cmyk = $d;
ae.autodetect.push({
  p: 2,
  test: (...e) => {
    e = Q(e, "cmyk");
    if (oe(e) === "array" && e.length === 4) {
      return "cmyk";
    }
  }
});

// ../../node_modules/chroma-js/src/io/css/hsl2css.js
var Sb = (...e) => {
  const t = Q(e, "hsla");
  let r = ar(e) || "lsa";
  t[0] = St(t[0] || 0) + "deg";
  t[1] = St(t[1] * 100) + "%";
  t[2] = St(t[2] * 100) + "%";
  if (r === "hsla" || t.length > 3 && t[3] < 1) {
    t[3] = "/ " + (t.length > 3 ? t[3] : 1);
    r = "hsla";
  } else {
    t.length = 3;
  }
  return `${r.substr(0, 3)}(${t.join(" ")})`;
};
var Vd = Sb;

// ../../node_modules/chroma-js/src/io/css/lab2css.js
var Mb = (...e) => {
  const t = Q(e, "lab");
  let r = ar(e) || "lab";
  t[0] = St(t[0]) + "%";
  t[1] = St(t[1]);
  t[2] = St(t[2]);
  if (r === "laba" || t.length > 3 && t[3] < 1) {
    t[3] = "/ " + (t.length > 3 ? t[3] : 1);
  } else {
    t.length = 3;
  }
  return `lab(${t.join(" ")})`;
};
var Hd = Mb;

// ../../node_modules/chroma-js/src/io/css/lch2css.js
var Db = (...e) => {
  const t = Q(e, "lch");
  let r = ar(e) || "lab";
  t[0] = St(t[0]) + "%";
  t[1] = St(t[1]);
  t[2] = isNaN(t[2]) ? "none" : St(t[2]) + "deg";
  if (r === "lcha" || t.length > 3 && t[3] < 1) {
    t[3] = "/ " + (t.length > 3 ? t[3] : 1);
  } else {
    t.length = 3;
  }
  return `lch(${t.join(" ")})`;
};
var Ud = Db;

// ../../node_modules/chroma-js/src/io/css/oklab2css.js
var wb = (...e) => {
  const t = Q(e, "lab");
  t[0] = St(t[0] * 100) + "%";
  t[1] = _a(t[1]);
  t[2] = _a(t[2]);
  if (t.length > 3 && t[3] < 1) {
    t[3] = "/ " + (t.length > 3 ? t[3] : 1);
  } else {
    t.length = 3;
  }
  return `oklab(${t.join(" ")})`;
};
var Gd = wb;

// ../../node_modules/chroma-js/src/io/oklch/rgb2oklch.js
var Eb = (...e) => {
  const [t, r, n, ...o] = Q(e, "rgb");
  const [i, a, s] = _i(t, r, n);
  const [l, c, f] = Is(i, a, s);
  return [l, c, f, ...o.length > 0 && o[0] < 1 ? [o[0]] : []];
};
var Rs = Eb;

// ../../node_modules/chroma-js/src/io/css/oklch2css.js
var Ab = (...e) => {
  const t = Q(e, "lch");
  t[0] = St(t[0] * 100) + "%";
  t[1] = _a(t[1]);
  t[2] = isNaN(t[2]) ? "none" : St(t[2]) + "deg";
  if (t.length > 3 && t[3] < 1) {
    t[3] = "/ " + (t.length > 3 ? t[3] : 1);
  } else {
    t.length = 3;
  }
  return `oklch(${t.join(" ")})`;
};
var qd = Ab;

// ../../node_modules/chroma-js/src/io/css/rgb2css.js
var { round: Kc } = Math;
var Nb = (...e) => {
  const t = Q(e, "rgba");
  let r = ar(e) || "rgb";
  if (r.substr(0, 3) === "hsl") {
    return Vd(Os(t), r);
  }
  if (r.substr(0, 3) === "lab") {
    const n = qn();
    yr("d50");
    const o = Hd(pi(t), r);
    yr(n);
    return o;
  }
  if (r.substr(0, 3) === "lch") {
    const n = qn();
    yr("d50");
    const o = Ud(xa(t), r);
    yr(n);
    return o;
  }
  if (r.substr(0, 5) === "oklab") {
    return Gd(_i(t));
  }
  if (r.substr(0, 5) === "oklch") {
    return qd(Rs(t));
  }
  t[0] = Kc(t[0]);
  t[1] = Kc(t[1]);
  t[2] = Kc(t[2]);
  if (r === "rgba" || t.length > 3 && t[3] < 1) {
    t[3] = "/ " + (t.length > 3 ? t[3] : 1);
    r = "rgba";
  }
  return `${r.substr(0, 3)}(${t.slice(0, r === "rgb" ? 3 : 4).join(" ")})`;
};
var zd = Nb;

// ../../node_modules/chroma-js/src/io/oklch/oklch2rgb.js
var Yb = (...e) => {
  e = Q(e, "lch");
  const [t, r, n, ...o] = e;
  const [i, a, s] = Cs(t, r, n);
  const [l, c, f] = gi(i, a, s);
  return [l, c, f, ...o.length > 0 && o[0] < 1 ? [o[0]] : []];
};
var $s = Yb;

// ../../node_modules/chroma-js/src/io/css/css2rgb.js
var kn = /((?:-?\d+)|(?:-?\d+(?:\.\d+)?)%|none)/.source;
var Lr = /((?:-?(?:\d+(?:\.\d*)?|\.\d+)%?)|none)/.source;
var Bs = /((?:-?(?:\d+(?:\.\d*)?|\.\d+)%)|none)/.source;
var br = /\s*/.source;
var xi = /\s+/.source;
var Qc = /\s*,\s*/.source;
var Ls = /((?:-?(?:\d+(?:\.\d*)?|\.\d+)(?:deg)?)|none)/.source;
var bi = /\s*(?:\/\s*((?:[01]|[01]?\.\d+)|\d+(?:\.\d+)?%))?/.source;
var Wd = new RegExp(
  "^rgba?\\(" + br + [kn, kn, kn].join(xi) + bi + "\\)$"
);
var Zd = new RegExp(
  "^rgb\\(" + br + [kn, kn, kn].join(Qc) + br + "\\)$"
);
var jd = new RegExp(
  "^rgba\\(" + br + [kn, kn, kn, Lr].join(Qc) + br + "\\)$"
);
var Xd = new RegExp(
  "^hsla?\\(" + br + [Ls, Bs, Bs].join(xi) + bi + "\\)$"
);
var Jd = new RegExp(
  "^hsl?\\(" + br + [Ls, Bs, Bs].join(Qc) + br + "\\)$"
);
var Kd = /^hsla\(\s*(-?\d+(?:\.\d+)?),\s*(-?\d+(?:\.\d+)?)%\s*,\s*(-?\d+(?:\.\d+)?)%\s*,\s*([01]|[01]?\.\d+)\)$/;
var Qd = new RegExp(
  "^lab\\(" + br + [Lr, Lr, Lr].join(xi) + bi + "\\)$"
);
var em = new RegExp(
  "^lch\\(" + br + [Lr, Lr, Ls].join(xi) + bi + "\\)$"
);
var tm = new RegExp(
  "^oklab\\(" + br + [Lr, Lr, Lr].join(xi) + bi + "\\)$"
);
var rm = new RegExp(
  "^oklch\\(" + br + [Lr, Lr, Ls].join(xi) + bi + "\\)$"
);
var { round: nm } = Math;
var yi = (e) => {
  return e.map((t, r) => r <= 2 ? gr(nm(t), 0, 255) : t);
};
var ot = (e, t = 0, r = 100, n = false) => {
  if (typeof e === "string" && e.endsWith("%")) {
    e = parseFloat(e.substring(0, e.length - 1)) / 100;
    if (n) {
      e = t + (e + 1) * 0.5 * (r - t);
    } else {
      e = t + e * (r - t);
    }
  }
  return +e;
};
var Gt = (e, t) => {
  return e === "none" ? t : e;
};
var om = (e) => {
  e = e.toLowerCase().trim();
  if (e === "transparent") {
    return [0, 0, 0, 0];
  }
  let t;
  if (ae.format.named) {
    try {
      return ae.format.named(e);
    } catch (r) {
    }
  }
  if ((t = e.match(Wd)) || (t = e.match(Zd))) {
    let r = t.slice(1, 4);
    for (let o = 0; o < 3; o++) {
      r[o] = +ot(Gt(r[o], 0), 0, 255);
    }
    r = yi(r);
    const n = t[4] !== void 0 ? +ot(t[4], 0, 1) : 1;
    r[3] = n;
    return r;
  }
  if (t = e.match(jd)) {
    const r = t.slice(1, 5);
    for (let n = 0; n < 4; n++) {
      r[n] = +ot(r[n], 0, 255);
    }
    return r;
  }
  if ((t = e.match(Xd)) || (t = e.match(Jd))) {
    const r = t.slice(1, 4);
    r[0] = +Gt(r[0].replace("deg", ""), 0);
    r[1] = +ot(Gt(r[1], 0), 0, 100) * 0.01;
    r[2] = +ot(Gt(r[2], 0), 0, 100) * 0.01;
    const n = yi(ba(r));
    const o = t[4] !== void 0 ? +ot(t[4], 0, 1) : 1;
    n[3] = o;
    return n;
  }
  if (t = e.match(Kd)) {
    const r = t.slice(1, 4);
    r[1] *= 0.01;
    r[2] *= 0.01;
    const n = ba(r);
    for (let o = 0; o < 3; o++) {
      n[o] = nm(n[o]);
    }
    n[3] = +t[4];
    return n;
  }
  if (t = e.match(Qd)) {
    const r = t.slice(1, 4);
    r[0] = ot(Gt(r[0], 0), 0, 100);
    r[1] = ot(Gt(r[1], 0), -125, 125, true);
    r[2] = ot(Gt(r[2], 0), -125, 125, true);
    const n = qn();
    yr("d50");
    const o = yi(ui(r));
    yr(n);
    const i = t[4] !== void 0 ? +ot(t[4], 0, 1) : 1;
    o[3] = i;
    return o;
  }
  if (t = e.match(em)) {
    const r = t.slice(1, 4);
    r[0] = ot(r[0], 0, 100);
    r[1] = ot(Gt(r[1], 0), 0, 150, false);
    r[2] = +Gt(r[2].replace("deg", ""), 0);
    const n = qn();
    yr("d50");
    const o = yi(di(r));
    yr(n);
    const i = t[4] !== void 0 ? +ot(t[4], 0, 1) : 1;
    o[3] = i;
    return o;
  }
  if (t = e.match(tm)) {
    const r = t.slice(1, 4);
    r[0] = ot(Gt(r[0], 0), 0, 1);
    r[1] = ot(Gt(r[1], 0), -0.4, 0.4, true);
    r[2] = ot(Gt(r[2], 0), -0.4, 0.4, true);
    const n = yi(gi(r));
    const o = t[4] !== void 0 ? +ot(t[4], 0, 1) : 1;
    n[3] = o;
    return n;
  }
  if (t = e.match(rm)) {
    const r = t.slice(1, 4);
    r[0] = ot(Gt(r[0], 0), 0, 1);
    r[1] = ot(Gt(r[1], 0), 0, 0.4, false);
    r[2] = +Gt(r[2].replace("deg", ""), 0);
    const n = yi($s(r));
    const o = t[4] !== void 0 ? +ot(t[4], 0, 1) : 1;
    n[3] = o;
    return n;
  }
};
om.test = (e) => {
  return (
    // modern
    Wd.test(e) || Xd.test(e) || Qd.test(e) || em.test(e) || tm.test(e) || rm.test(e) || // legacy
    Zd.test(e) || jd.test(e) || Jd.test(e) || Kd.test(e) || e === "transparent"
  );
};
var ef = om;

// ../../node_modules/chroma-js/src/io/css/index.js
V.prototype.css = function(e) {
  return zd(this._rgb, e);
};
var kb = (...e) => new V(...e, "css");
fe.css = kb;
ae.format.css = ef;
ae.autodetect.push({
  p: 5,
  test: (e, ...t) => {
    if (!t.length && oe(e) === "string" && ef.test(e)) {
      return "css";
    }
  }
});

// ../../node_modules/chroma-js/src/io/gl/index.js
ae.format.gl = (...e) => {
  const t = Q(e, "rgba");
  t[0] *= 255;
  t[1] *= 255;
  t[2] *= 255;
  return t;
};
var Cb = (...e) => new V(...e, "gl");
fe.gl = Cb;
V.prototype.gl = function() {
  const e = this._rgb;
  return [e[0] / 255, e[1] / 255, e[2] / 255, e[3]];
};

// ../../node_modules/chroma-js/src/io/hex/index.js
V.prototype.hex = function(e) {
  return ks(this._rgb, e);
};
var Ib = (...e) => new V(...e, "hex");
fe.hex = Ib;
ae.format.hex = Ns;
ae.autodetect.push({
  p: 4,
  test: (e, ...t) => {
    if (!t.length && oe(e) === "string" && [3, 4, 5, 6, 7, 8, 9].indexOf(e.length) >= 0) {
      return "hex";
    }
  }
});

// ../../node_modules/chroma-js/src/io/temp/temperature2rgb.js
var { log: Vs } = Math;
var Ob = (e) => {
  const t = e / 100;
  let r, n, o;
  if (t < 66) {
    r = 255;
    n = t < 6 ? 0 : -155.25485562709179 - 0.44596950469579133 * (n = t - 2) + 104.49216199393888 * Vs(n);
    o = t < 20 ? 0 : -254.76935184120902 + 0.8274096064007395 * (o = t - 10) + 115.67994401066147 * Vs(o);
  } else {
    r = 351.97690566805693 + 0.114206453784165 * (r = t - 55) - 40.25366309332127 * Vs(r);
    n = 325.4494125711974 + 0.07943456536662342 * (n = t - 50) - 28.0852963507957 * Vs(n);
    o = 255;
  }
  return [r, n, o, 1];
};
var Hs = Ob;

// ../../node_modules/chroma-js/src/io/temp/rgb2temperature.js
var { round: Fb } = Math;
var Pb = (...e) => {
  const t = Q(e, "rgb");
  const r = t[0], n = t[2];
  let o = 1e3;
  let i = 4e4;
  const a = 0.4;
  let s;
  while (i - o > a) {
    s = (i + o) * 0.5;
    const l = Hs(s);
    if (l[2] / l[0] >= n / r) {
      i = s;
    } else {
      o = s;
    }
  }
  return Fb(s);
};
var im = Pb;

// ../../node_modules/chroma-js/src/io/temp/index.js
V.prototype.temp = V.prototype.kelvin = V.prototype.temperature = function() {
  return im(this._rgb);
};
var tf = (...e) => new V(...e, "temp");
Object.assign(fe, { temp: tf, kelvin: tf, temperature: tf });
ae.format.temp = ae.format.kelvin = ae.format.temperature = Hs;

// ../../node_modules/chroma-js/src/io/oklch/index.js
V.prototype.oklch = function() {
  return Rs(this._rgb);
};
var Rb = (...e) => new V(...e, "oklch");
Object.assign(fe, { oklch: Rb });
ae.format.oklch = $s;
ae.autodetect.push({
  p: 2,
  test: (...e) => {
    e = Q(e, "oklch");
    if (oe(e) === "array" && e.length === 3) {
      return "oklch";
    }
  }
});

// ../../node_modules/chroma-js/index.js
Object.assign(fe, {
  analyze: jc,
  average: md,
  bezier: hd,
  blend: _d,
  brewer: Rd,
  Color: V,
  colors: Gn,
  contrast: vd,
  contrastAPCA: wd,
  cubehelix: yd,
  deltaE: kd,
  distance: Cd,
  input: ae,
  interpolate: cn,
  limits: Xc,
  mix: cn,
  random: xd,
  scale: Mo,
  scales: Od,
  valid: Id
});
var Zn = fe;

// ../colors/dist/index.js
var hI = [
  "categorical",
  "continuous",
  "diverging"
];
var $b = {
  // Categorical only (most chart types)
  ai2html: ["categorical"],
  area: ["categorical"],
  bar: ["categorical"],
  barline: ["categorical"],
  breakdown: ["categorical"],
  candlestick: ["categorical"],
  comparison: ["categorical"],
  dumbbell: ["categorical"],
  embed: ["categorical"],
  hbar: ["categorical"],
  horizontalDumbbell: ["categorical"],
  line: ["categorical"],
  locatormap: ["categorical"],
  multiples: ["categorical"],
  performanceChart: ["categorical"],
  pie: ["categorical"],
  stackedHbar: ["categorical"],
  stackedVbar: ["categorical"],
  table: ["categorical"],
  // Continuous/Diverging only (heatmap-style)
  heatmap: ["continuous", "diverging"],
  // Mixed support (maps, scatter)
  choropleth: ["categorical", "continuous", "diverging"],
  bubblemap: ["categorical", "continuous", "diverging"],
  scatterPlot: ["categorical", "continuous", "diverging"]
};
function Bb(e) {
  return $b[e] || ["categorical"];
}
function am(e) {
  return Bb(e)[0];
}
var ue = {
  bnews: {
    amber: "#FFA028",
    white: "#FFFFFF",
    darkGray: "#787878",
    lightGray: "#CCCCCC",
    blue: "#27BBFA",
    magenta: "#F73BA9",
    cyan: "#19E9F7",
    green: "#00CC44",
    purple: "#A62BFF",
    yellow: "#FFD00D",
    black: "#000000"
  },
  opinion: {
    blue: "#0072FF",
    white: "#FFFFFF",
    slate: "#99A4B3",
    coral: "#FF644D",
    mint: "#2EE6A9",
    pink: "#E653DA",
    lemon: "#FFEC19",
    black: "#282828"
  },
  marketPerformance: {
    green: "#00C88A",
    red: "#FF415F",
    gray: ""
  }
};
var gI = [
  // ============================================================================
  // BNEWS Palettes
  // ============================================================================
  // bnews default categorical
  {
    type: "categorical",
    name: "Business Default Categorical",
    id: "business-default-categorical",
    colors: {
      dark: {
        palette: [
          ue.bnews.amber,
          ue.bnews.white,
          ue.bnews.darkGray,
          ue.bnews.blue,
          ue.bnews.magenta,
          ue.bnews.cyan,
          ue.bnews.green,
          ue.bnews.purple,
          ue.bnews.yellow
        ]
      },
      light: {
        palette: [
          ue.bnews.amber,
          ue.bnews.black,
          ue.bnews.lightGray,
          ue.bnews.blue,
          ue.bnews.magenta,
          ue.bnews.cyan,
          ue.bnews.green,
          ue.bnews.purple,
          ue.bnews.yellow
        ]
      }
    },
    destinations: ["bnews"],
    chartTypes: ["*"],
    priority: 1
  },
  // bnews barline-specific categorical (different color ordering)
  {
    type: "categorical",
    name: "Business Default Categorical",
    id: "business-default-categorical-barline",
    colors: {
      dark: {
        palette: [
          ue.bnews.white,
          ue.bnews.purple,
          ue.bnews.darkGray,
          ue.bnews.yellow,
          ue.bnews.magenta,
          ue.bnews.green,
          ue.bnews.blue,
          ue.bnews.amber
        ]
      },
      light: {
        palette: [
          ue.bnews.black,
          ue.bnews.purple,
          ue.bnews.lightGray,
          ue.bnews.yellow,
          ue.bnews.magenta,
          ue.bnews.green,
          ue.bnews.blue,
          ue.bnews.amber
        ]
      }
    },
    destinations: ["bnews"],
    chartTypes: ["barline"],
    priority: 1
  },
  // bnews candlestick-specific (no red/green conflict colors)
  {
    type: "categorical",
    name: "Business Default Categorical",
    id: "business-candlestick-categorical",
    colors: {
      dark: {
        palette: ["#FFA028", "#27BBFA", "#19E9F7", "#A62BFF", "#FFD00D"]
      },
      light: {
        palette: ["#FFA028", "#27BBFA", "#19E9F7", "#A62BFF", "#FFD00D"]
      }
    },
    destinations: ["bnews"],
    chartTypes: ["candlestick"],
    priority: 1
  },
  // bnews continuous - Amber
  {
    type: "continuous",
    name: "Amber",
    id: "continuous-amber",
    colors: {
      light: {
        palette: [
          "#FFF4E5",
          "#FFE4C2",
          "#FFCD8F",
          "#FFB75C",
          "#FFA028",
          "#F58900"
        ]
      },
      dark: {
        palette: [
          "#3D2200",
          "#703F00",
          "#AD6100",
          "#EB8300",
          "#FFA028",
          "#FFB252",
          "#FFC47A"
        ]
      }
    },
    destinations: ["bnews", "beco", "indggov", "indglaw", "indgtax"],
    chartTypes: ["*"],
    priority: 1
  },
  // bnews continuous - Blue
  {
    type: "continuous",
    name: "Blue",
    id: "continuous-blue",
    colors: {
      light: {
        palette: [
          "#E6F1FF",
          "#CDE2FE",
          "#9AC6FE",
          "#68A9FD",
          "#358CFD",
          "#036FFC",
          "#0364E3"
        ]
      },
      dark: {
        palette: [
          "#01285B",
          "#023A83",
          "#024CAB",
          "#035ED4",
          "#036FFC",
          "#2B86FC",
          "#549DFD"
        ]
      }
    },
    destinations: ["bnews", "beco", "indggov", "indglaw", "indgtax"],
    chartTypes: ["*"],
    priority: 2
  },
  // ============================================================================
  // BI Palettes
  // ============================================================================
  // bi default categorical
  {
    type: "categorical",
    name: "BI Default Categorical",
    id: "bi-default-categorical",
    colors: {
      dark: {
        palette: [
          "#FDA315",
          "#024CEA",
          "#00B050",
          "#FF4FAF",
          "#11B2C3",
          "#EE4D3C",
          "#888888",
          "#844AA6",
          "#BA152D",
          "#7BB559",
          "#45EAD2",
          "#D9D9D9"
        ]
      },
      light: {
        palette: [
          "#FDA315",
          "#024CEA",
          "#00B050",
          "#FF4FAF",
          "#11B2C3",
          "#EE4D3C",
          "#888888",
          "#844AA6",
          "#BA152D",
          "#7BB559",
          "#45EAD2",
          "#D9D9D9"
        ]
      }
    },
    destinations: ["bi"],
    chartTypes: ["*"],
    priority: 1
  },
  // bi default continuous
  {
    type: "continuous",
    name: "BI Continuous Blue",
    id: "bi-continuous-blue",
    colors: {
      dark: {
        palette: [
          "#06102b",
          "#071639",
          "#071a4a",
          "#061e5a",
          "#05226a",
          "#03247c",
          "#01268f",
          "#0027a3",
          "#0026b8",
          "#0024ce"
        ]
      },
      light: {
        palette: [
          "#f0f1fb",
          "#dfe5f6",
          "#ced8f2",
          "#bccbee",
          "#a9bde9",
          "#97afe5",
          "#84a1e0",
          "#7092dc",
          "#5c81d7",
          "#4770d2",
          "#2f5dce",
          "#1446cc",
          "#0024ce"
        ]
      }
    },
    destinations: ["bi"],
    chartTypes: ["*"],
    priority: 1
  },
  {
    type: "continuous",
    name: "BI Continuous Green",
    id: "bi-continuous-green",
    colors: {
      dark: {
        palette: [
          "#0A3615",
          "#104D1E",
          "#166427",
          "#1C7B30",
          "#23923A",
          "#29A943",
          "#2FC04C",
          "#35D655"
        ]
      },
      light: {
        palette: [
          "#E6FFEA",
          "#CCFFD4",
          "#B3F8BF",
          "#99F2AA",
          "#80EB95",
          "#67E47F",
          "#4EDD6A",
          "#35D655"
        ]
      }
    },
    destinations: ["bi"],
    chartTypes: ["*"],
    priority: 2
  },
  {
    type: "continuous",
    name: "BI Continuous Red",
    id: "bi-continuous-red",
    colors: {
      dark: {
        palette: [
          "#33070E",
          "#660E1D",
          "#801324",
          "#99182C",
          "#B31D33",
          "#CC223B",
          "#E62742",
          "#FF2C4A"
        ]
      },
      light: {
        palette: [
          "#FFF0F2",
          "#FFE0E3",
          "#FFC2C9",
          "#FFA4B0",
          "#FF8696",
          "#FF687D",
          "#FF4A63",
          "#FF2C4A"
        ]
      }
    },
    destinations: ["bi"],
    chartTypes: ["*"],
    priority: 2
  },
  {
    type: "diverging",
    name: "BI Diverging Stoplight",
    id: "bi-diverging-stoplight",
    colors: {
      dark: {
        palette: [
          "#fe2f49",
          "#fd6342",
          "#ff9e31",
          "#fec51d",
          "#fed700",
          "#d3db32",
          "#9de048",
          "#74d64d",
          "#3cd554"
        ]
      },
      light: {
        palette: [
          "#fe2f49",
          "#fd6342",
          "#ff9e31",
          "#fec51d",
          "#fed700",
          "#d3db32",
          "#9de048",
          "#74d64d",
          "#3cd554"
        ]
      }
    },
    destinations: ["bi"],
    chartTypes: ["*"],
    priority: 1
  },
  // bi candlestick-specific
  {
    type: "categorical",
    name: "BI Default Categorical",
    id: "bi-candlestick-categorical",
    colors: {
      dark: {
        palette: ["#FDA315", "#024CEA", "#844AA6", "#45EAD2"]
      },
      light: {
        palette: ["#FDA315", "#024CEA", "#844AA6", "#45EAD2"]
      }
    },
    destinations: ["bi"],
    chartTypes: ["candlestick"],
    priority: 1
  },
  // ============================================================================
  // BNEF Palettes
  // ============================================================================
  // bnef default categorical
  {
    type: "categorical",
    name: "BNEF Default Categorical",
    id: "bnef-default-categorical",
    colors: {
      dark: {
        palette: [
          "#0D9DDB",
          "#8A5DB5",
          "#00D2B3",
          "#ED4436",
          "#FFCC1D",
          "#EA60A7",
          "#4DAA50",
          "#D9D9D9",
          "#3B3B3B",
          "#A5D5EE",
          "#CBB8E0",
          "#A6ECE1",
          "#FFB1A9",
          "#FFEAA5",
          "#F8BDDB",
          "#B2DBB4",
          "#F4F4F4",
          "#717171",
          "#046A96",
          "#563A70",
          "#009D86",
          "#B13025",
          "#B08B08",
          "#B54A81",
          "#36793B",
          "#B7B7B7",
          "#FFFFFF"
        ]
      },
      light: {
        palette: [
          "#0D9DDB",
          "#8A5DB5",
          "#00D2B3",
          "#ED4436",
          "#FFCC1D",
          "#EA60A7",
          "#4DAA50",
          "#D9D9D9",
          "#3B3B3B",
          "#A5D5EE",
          "#CBB8E0",
          "#A6ECE1",
          "#FFB1A9",
          "#FFEAA5",
          "#F8BDDB",
          "#B2DBB4",
          "#F4F4F4",
          "#717171",
          "#046A96",
          "#563A70",
          "#009D86",
          "#B13025",
          "#B08B08",
          "#B54A81",
          "#36793B",
          "#B7B7B7",
          "#000000"
        ]
      }
    },
    destinations: ["bnef"],
    chartTypes: ["*"],
    priority: 1
  },
  // bnef candlestick-specific (filters conflict colors)
  {
    type: "categorical",
    name: "BNEF Default Categorical",
    id: "bnef-candlestick-categorical",
    colors: {
      dark: {
        palette: [
          "#8A5DB5",
          "#FFCC1D",
          "#A5D5EE",
          "#FFB1A9",
          "#B2DBB4",
          "#563A70",
          "#B08B08"
        ]
      },
      light: {
        palette: [
          "#8A5DB5",
          "#FFCC1D",
          "#A5D5EE",
          "#FFB1A9",
          "#B2DBB4",
          "#563A70",
          "#B08B08"
        ]
      }
    },
    destinations: ["bnef"],
    chartTypes: ["candlestick"],
    priority: 1
  },
  // bnef continuous - Blue
  {
    type: "continuous",
    name: "BNEF Continuous Blue",
    id: "bnef-continuous-blue",
    colors: {
      light: {
        palette: [
          "#AAE5FF",
          "#76CDF3",
          "#41B5E7",
          "#0D9DDB",
          "#0984B9",
          "#046A96",
          "#005174"
        ]
      },
      dark: {
        palette: [
          "#AAE5FF",
          "#76CDF3",
          "#41B5E7",
          "#0D9DDB",
          "#0984B9",
          "#046A96",
          "#005174"
        ]
      }
    },
    destinations: ["bnef"],
    chartTypes: ["*"],
    priority: 1
  },
  // bnef continuous - Green
  {
    type: "continuous",
    name: "BNEF Continuous Green",
    id: "bnef-continuous-green",
    colors: {
      light: {
        palette: [
          "#93FFEF",
          "#62F0DB",
          "#31E1C7",
          "#00D2B3",
          "#01B69B",
          "#029983",
          "#037D6B"
        ]
      },
      dark: {
        palette: [
          "#93FFEF",
          "#62F0DB",
          "#31E1C7",
          "#00D2B3",
          "#01B69B",
          "#029983",
          "#037D6B"
        ]
      }
    },
    destinations: ["bnef"],
    chartTypes: ["*"],
    priority: 2
  },
  // bnef continuous - Purple
  {
    type: "continuous",
    name: "BNEF Continuous Purple",
    id: "bnef-continuous-purple",
    colors: {
      light: {
        palette: [
          "#DDBAFF",
          "#C19BE6",
          "#A67CCE",
          "#8A5DB5",
          "#704C93",
          "#563A70",
          "#3C294E"
        ]
      },
      dark: {
        palette: [
          "#DDBAFF",
          "#C19BE6",
          "#A67CCE",
          "#8A5DB5",
          "#704C93",
          "#563A70",
          "#3C294E"
        ]
      }
    },
    destinations: ["bnef"],
    chartTypes: ["*"],
    priority: 3
  },
  // bnef diverging - Blue/Green
  {
    type: "diverging",
    name: "BNEF diverging Blue/Green",
    id: "bnef-diverging-blue-green",
    colors: {
      light: {
        palette: [
          "#0D9DDB",
          "#1DB8FB",
          "#62D0FF",
          "#E5E5E5",
          "#93FFEF",
          "#62F0DB",
          "#00D2B3"
        ]
      },
      dark: {
        palette: [
          "#0D9DDB",
          "#1DB8FB",
          "#62D0FF",
          "#E5E5E5",
          "#93FFEF",
          "#62F0DB",
          "#00D2B3"
        ]
      }
    },
    destinations: ["bnef"],
    chartTypes: ["*"],
    priority: 1
  },
  // ============================================================================
  // Opinion Palettes
  // ============================================================================
  // opinion default categorical
  {
    type: "categorical",
    name: "Opinion Default Categorical",
    id: "opinion-default-categorical",
    colors: {
      dark: {
        palette: [
          ue.opinion.blue,
          ue.opinion.white,
          ue.opinion.slate,
          ue.opinion.coral,
          ue.opinion.mint,
          ue.opinion.pink,
          ue.opinion.lemon
        ]
      },
      light: {
        palette: [
          ue.opinion.blue,
          ue.opinion.black,
          ue.opinion.slate,
          ue.opinion.coral,
          ue.opinion.mint,
          ue.opinion.pink,
          ue.opinion.lemon
        ]
      }
    },
    destinations: ["opinion"],
    chartTypes: ["*"],
    priority: 1
  },
  // opinion candlestick-specific (filters conflict colors)
  {
    type: "categorical",
    name: "Opinion Default Categorical",
    id: "opinion-candlestick-categorical",
    colors: {
      dark: {
        palette: ["#0072FF", "#E653DA", "#FFEC19"]
      },
      light: {
        palette: ["#0072FF", "#E653DA", "#FFEC19"]
      }
    },
    destinations: ["opinion"],
    chartTypes: ["candlestick"],
    priority: 1
  },
  // opinion continuous - Blue
  {
    type: "continuous",
    name: "Opinion Continuous Blue",
    id: "opinion-continuous-blue",
    colors: {
      dark: {
        palette: [
          "#031023",
          "#072145",
          "#0D3169",
          "#15438C",
          "#1B53AF",
          "#2264D2",
          "#0072ff"
        ]
      },
      light: {
        palette: [
          "#daeaff",
          "#b6d6ff",
          "#91c2ff",
          "#6daeff",
          "#489aff",
          "#2486ff",
          "#0072ff"
        ]
      }
    },
    destinations: ["opinion"],
    chartTypes: ["*"],
    priority: 1
  },
  // opinion diverging - Blue/Orange
  {
    type: "diverging",
    name: "Opinion Diverging Blue/Orange",
    id: "opinion-diverging-blue-orange",
    colors: {
      dark: {
        palette: [
          "#4da0ff",
          "#398ded",
          "#2b7ad5",
          "#3669a3",
          "#3c5777",
          "#3a4552",
          "#525252",
          "#4a4035",
          "#664d33",
          "#86592d",
          "#aa6622",
          "#d27313",
          "#ff8000"
        ]
      },
      light: {
        palette: [
          "#0072ff",
          "#2486ff",
          "#489aff",
          "#6daeff",
          "#91c2ff",
          "#b6d6ff",
          "#daeaff",
          "#efefef",
          "#f6ddd3",
          "#fccdb9",
          "#ffba9a",
          "#ffa170",
          "#ff8944",
          "#f57528",
          "#e56417",
          "#d65200"
        ]
      }
    },
    destinations: ["opinion"],
    chartTypes: ["*"],
    priority: 1
  },
  // ============================================================================
  // INDG Law Palettes
  // ============================================================================
  // indglaw default categorical
  {
    type: "categorical",
    name: "INDG Law Categorical",
    id: "indg_law_1",
    colors: {
      dark: {
        palette: [
          "#5FCFB4",
          "#479BD6",
          "#835FB0",
          "#ED763A",
          "#E63B67",
          "#F7CE4C",
          "#DB5241",
          "#2405EE",
          "#AFAFAF"
        ]
      },
      light: {
        palette: [
          "#5FCFB4",
          "#479BD6",
          "#835FB0",
          "#ED763A",
          "#E63B67",
          "#F7CE4C",
          "#DB5241",
          "#2405EE",
          "#AFAFAF"
        ]
      }
    },
    destinations: ["indglaw"],
    chartTypes: ["*"],
    priority: 1
  },
  // indglaw politics
  {
    type: "categorical",
    name: "INDG Politics",
    id: "indg_politics_us_law",
    colors: {
      dark: {
        palette: ["#479BD6", "#E63B67", "#835FB0", "#AFAFAF"]
      },
      light: {
        palette: ["#479BD6", "#E63B67", "#835FB0", "#AFAFAF"]
      }
    },
    destinations: ["indglaw"],
    chartTypes: ["*"],
    priority: 2
  },
  // indglaw candlestick-specific (filters conflict colors)
  {
    type: "categorical",
    name: "INDG Law Categorical",
    id: "indglaw-candlestick-categorical",
    colors: {
      dark: {
        palette: ["#479BD6", "#835FB0", "#F7CE4C", "#2405EE"]
      },
      light: {
        palette: ["#479BD6", "#835FB0", "#F7CE4C", "#2405EE"]
      }
    },
    destinations: ["indglaw"],
    chartTypes: ["candlestick"],
    priority: 1
  },
  // ============================================================================
  // INDG Tax Palettes
  // ============================================================================
  // indgtax default categorical
  {
    type: "categorical",
    name: "INDG Tax Categorical",
    id: "indg_tax_1",
    colors: {
      dark: {
        palette: [
          "#479BD6",
          "#5FCFB4",
          "#835FB0",
          "#ED763A",
          "#E63B67",
          "#F7CE4C",
          "#DB5241",
          "#2405EE",
          "#AFAFAF"
        ]
      },
      light: {
        palette: [
          "#479BD6",
          "#5FCFB4",
          "#835FB0",
          "#ED763A",
          "#E63B67",
          "#F7CE4C",
          "#DB5241",
          "#2405EE",
          "#AFAFAF"
        ]
      }
    },
    destinations: ["indgtax"],
    chartTypes: ["*"],
    priority: 1
  },
  // indgtax politics
  {
    type: "categorical",
    name: "INDG Politics",
    id: "indg_politics_us_tax",
    colors: {
      dark: {
        palette: ["#479BD6", "#E63B67", "#835FB0", "#AFAFAF"]
      },
      light: {
        palette: ["#479BD6", "#E63B67", "#835FB0", "#AFAFAF"]
      }
    },
    destinations: ["indgtax"],
    chartTypes: ["*"],
    priority: 2
  },
  // indgtax candlestick-specific (filters conflict colors)
  {
    type: "categorical",
    name: "INDG Tax Categorical",
    id: "indgtax-candlestick-categorical",
    colors: {
      dark: {
        palette: ["#479BD6", "#835FB0", "#F7CE4C", "#2405EE"]
      },
      light: {
        palette: ["#479BD6", "#835FB0", "#F7CE4C", "#2405EE"]
      }
    },
    destinations: ["indgtax"],
    chartTypes: ["candlestick"],
    priority: 1
  },
  // ============================================================================
  // INDG Gov Palettes
  // ============================================================================
  // indggov default categorical
  {
    type: "categorical",
    name: "INDG Gov Categorical",
    id: "indg_gov_1",
    colors: {
      dark: {
        palette: [
          "#835FB0",
          "#479BD6",
          "#5FCFB4",
          "#ED763A",
          "#E63B67",
          "#F7CE4C",
          "#DB5241",
          "#2405EE",
          "#AFAFAF"
        ]
      },
      light: {
        palette: [
          "#835FB0",
          "#479BD6",
          "#5FCFB4",
          "#ED763A",
          "#E63B67",
          "#F7CE4C",
          "#DB5241",
          "#2405EE",
          "#AFAFAF"
        ]
      }
    },
    destinations: ["indggov"],
    chartTypes: ["*"],
    priority: 1
  },
  // indggov politics
  {
    type: "categorical",
    name: "INDG Politics",
    id: "indg_politics_us_gov",
    colors: {
      dark: {
        palette: ["#479BD6", "#E63B67", "#835FB0", "#AFAFAF"]
      },
      light: {
        palette: ["#479BD6", "#E63B67", "#835FB0", "#AFAFAF"]
      }
    },
    destinations: ["indggov"],
    chartTypes: ["*"],
    priority: 2
  },
  // indggov candlestick-specific (filters conflict colors)
  {
    type: "categorical",
    name: "INDG Gov Categorical",
    id: "indggov-candlestick-categorical",
    colors: {
      dark: {
        palette: ["#835FB0", "#479BD6", "#F7CE4C", "#2405EE"]
      },
      light: {
        palette: ["#835FB0", "#479BD6", "#F7CE4C", "#2405EE"]
      }
    },
    destinations: ["indggov"],
    chartTypes: ["candlestick"],
    priority: 1
  },
  // ============================================================================
  // BECO Palettes
  // ============================================================================
  // beco default categorical
  {
    type: "categorical",
    name: "BECO Categorical",
    id: "beco_1",
    colors: {
      dark: {
        palette: [
          "#FFFFFF",
          "#FDA315",
          "#4AB0FF",
          "#FF00FF",
          "#FFE273",
          "#92D050",
          "#FF1E28",
          "#AB78EE"
        ]
      },
      light: {
        palette: [
          "#000000",
          "#FDA315",
          "#4AB0FF",
          "#FF00FF",
          "#FFE273",
          "#92D050",
          "#FF1E28",
          "#AB78EE"
        ]
      }
    },
    destinations: ["beco"],
    chartTypes: ["*"],
    priority: 1
  },
  // beco candlestick-specific (filters conflict colors)
  {
    type: "categorical",
    name: "BECO Categorical",
    id: "beco-candlestick-categorical",
    colors: {
      dark: {
        palette: ["#FDA315", "#4AB0FF", "#FF00FF", "#FFE273", "#AB78EE"]
      },
      light: {
        palette: ["#FDA315", "#4AB0FF", "#FF00FF", "#FFE273", "#AB78EE"]
      }
    },
    destinations: ["beco"],
    chartTypes: ["candlestick"],
    priority: 1
  },
  // ============================================================================
  // Common Palettes (Available to All Destinations)
  // ============================================================================
  // Market Performance
  {
    type: "categorical",
    name: "Market Performance",
    id: "market-performance",
    colors: {
      dark: {
        palette: [
          ue.marketPerformance.green,
          ue.marketPerformance.red,
          "#FFFFFF"
        ]
      },
      light: {
        palette: [
          ue.marketPerformance.green,
          ue.marketPerformance.red,
          "#000000"
        ]
      }
    },
    destinations: ["*"],
    chartTypes: ["*"],
    priority: 100
  },
  // Politics US
  {
    type: "categorical",
    name: "Politics US",
    id: "politics-us",
    colors: {
      dark: {
        palette: ["#43B7FA", "#FF5059", "#999999"]
      },
      light: {
        palette: ["#43B7FA", "#FF5059", "#999999"]
      }
    },
    destinations: ["*"],
    chartTypes: ["*"],
    priority: 101
  },
  // Politics UK
  {
    type: "categorical",
    name: "Politics UK",
    id: "politics-uk",
    colors: {
      dark: {
        palette: [
          "#FF0038",
          "#666666",
          "#00FF2A",
          "#FFF200",
          "#00AEFF",
          "#FF008C",
          "#860000"
        ]
      },
      light: {
        palette: [
          "#FF0038",
          "#262626",
          "#00FF2A",
          "#FFF200",
          "#00AEFF",
          "#FF008C",
          "#860000"
        ]
      }
    },
    destinations: ["*"],
    chartTypes: ["*"],
    priority: 102
  },
  // Politics Germany
  {
    type: "categorical",
    name: "Politics Germany",
    id: "politics-germany",
    colors: {
      dark: {
        palette: [
          "#DC241F",
          "#0087DC",
          "#FDBB30",
          "#FFFF00",
          "#008142",
          "#09B7D0"
        ]
      },
      light: {
        palette: [
          "#DC241F",
          "#0087DC",
          "#FDBB30",
          "#FFFF00",
          "#008142",
          "#09B7D0"
        ]
      }
    },
    destinations: ["*"],
    chartTypes: ["*"],
    priority: 103
  },
  // Diverging Performance (common, for heatmaps)
  {
    type: "diverging",
    name: "Diverging Performance",
    id: "diverging-performance",
    colors: {
      light: {
        palette: [
          "#E51503",
          "#E83A21",
          "#ED644B",
          "#EF846E",
          "#EF9F8F",
          "#EEB7AB",
          "#EECBC4",
          "#F5F5F5",
          "#CAD7CA",
          "#B5CAB4",
          "#9FBC9D",
          "#85AE82",
          "#699F67",
          "#488F48",
          "#338736"
        ]
      },
      dark: {
        palette: [
          "#FF001E",
          "#EC1C22",
          "#D92826",
          "#C63029",
          "#B2342C",
          "#9E372E",
          "#8A3930",
          "#753831",
          "#5F3731",
          "#4A3331",
          "#303030",
          "#3D473A",
          "#465E42",
          "#4D7347",
          "#50894A",
          "#529D4D",
          "#51B14D",
          "#4CC54B",
          "#43D848",
          "#32EC43",
          "#00FF3C"
        ]
      }
    },
    destinations: ["*"],
    chartTypes: ["*"],
    priority: 100
  },
  // Diverging Accessible (common, for heatmaps)
  {
    type: "diverging",
    name: "Diverging Accessible",
    id: "diverging-accessible",
    colors: {
      light: {
        palette: [
          "#FA5A28",
          "#FA6A3D",
          "#F9855F",
          "#F89C7F",
          "#F6B19B",
          "#F3C4B5",
          "#F1D4CB",
          "#F1E2DC",
          "#F5F5F5",
          "#DDE2EA",
          "#CCD6E5",
          "#B7C8E0",
          "#A1BADE",
          "#86AADF",
          "#6699E4",
          "#3B86F1",
          "#087BFF"
        ]
      },
      dark: {
        palette: [
          "#FA5A28",
          "#E7592C",
          "#D4572F",
          "#C15531",
          "#AE5134",
          "#994E36",
          "#864A36",
          "#714536",
          "#5D3E35",
          "#473833",
          "#303030",
          "#343840",
          "#374151",
          "#394964",
          "#3A5277",
          "#39598C",
          "#3761A1",
          "#3268B7",
          "#2C6ECE",
          "#2075E6",
          "#087BFF"
        ]
      }
    },
    destinations: ["*"],
    chartTypes: ["*"],
    priority: 101
  }
];

// ../utils/src/color/index.ts
var sm = (e, t, r, n) => {
  const o = Math.floor(n / 2);
  const i = r - e;
  const a = t - r;
  const s = i / o;
  const l = a / o;
  const c = [];
  for (let f = 0; f < o; f++) {
    c.push(e + s * f);
  }
  c.push(r);
  for (let f = 1; f <= o; f++) {
    c.push(r + l * f);
  }
  return c;
};
var lm = (e) => {
  return am(e);
};

// ../utils/src/constants/date.ts
var Us = 1e3 * 60 * 60 * 24;
var bI = 1e3 * 60;

// ../utils/src/data/format.ts
var cm = (e) => {
  if (!e?.trim()) return null;
  try {
    return JSON.parse(e);
  } catch (t) {
    try {
      const r = [e].map((n) => n.replace(/([{,]\s*)'([^']+)'(\s*:)/g, '$1"$2"$3')).map(
        (n) => n.replace(/([{,]\s*)([a-zA-Z0-9_$]+)(\s*:)/g, '$1"$2"$3')
      ).map((n) => n.replace(/:\s*'(([^'\\]|\\.)*?)'/g, ': "$1"')).map((n) => n.replace(/,\s*]/g, "]").replace(/,\s*}/g, "}")).pop();
      return JSON.parse(r);
    } catch (r) {
      throw new Error(`Invalid JSON: ${t.message}`);
    }
  }
};

// ../utils/src/font/measureTextWidth.ts
function Lb(e, t) {
  const r = /* @__PURE__ */ new Map();
  const n = function(...o) {
    const i = t ? t(...o) : JSON.stringify(o);
    if (r.has(i)) {
      return r.get(i);
    }
    const a = e.apply(this, o);
    r.set(i, a);
    return a;
  };
  n.cache = r;
  return n;
}
function va(e, t, r) {
  const n = va._ctx ||= document.createElement("canvas").getContext("2d");
  if (!n) {
    return 0;
  }
  const o = `${r} ${t}`;
  if (n.font !== o) {
    n.font = o;
    n.measureText("M");
  }
  const i = n.measureText(e);
  return Math.round(i.width * 100) / 100;
}
((t) => {
  t._ctx = null;
})(va || (va = {}));
var fm = Lb(
  va,
  (e, t, r) => `${e}|${t}|${r}`
);

// ../utils/src/font/getTextWidth.ts
function Ne(e, t, r) {
  return fm(e, t, r);
}

// ../utils/src/font/textCalculations.ts
function Vb(e, t) {
  const r = /* @__PURE__ */ new Map();
  const n = function(...o) {
    const i = t ? t(...o) : JSON.stringify(o);
    if (r.has(i)) {
      return r.get(i);
    }
    const a = e.apply(this, o);
    r.set(i, a);
    return a;
  };
  n.cache = r;
  return n;
}
var um = (e, t, r) => {
  const n = `${e}`.match(/\S+|\s+/g) || [];
  return {
    wordsWithWidth: n.map((o) => ({
      word: o,
      width: Ne(o, t, r)
    })),
    spaceWidth: Ne("\xA0", t, r)
  };
};
var Hb = (e, t, r, n, o = false) => {
  let i = 0;
  let a = 0;
  let s = [""];
  if (!e) return [];
  const l = um(e, r, n);
  for (const c of l.wordsWithWidth) {
    if (c.word === "\n") {
      i++;
      s[i] = "";
      a = 0;
      continue;
    }
    let f = c.word;
    if (!o) {
      f = f.trim();
    } else {
      if (f.slice(-1) === " ") {
        f = f.slice(0, -1);
      }
    }
    if (!f) continue;
    const p = Ne(f, r, n);
    if (a === 0 && p > t) {
      s[i] = f;
      i++;
      s[i] = "";
      a = 0;
      continue;
    }
    const u = a !== 0 ? l.spaceWidth : 0;
    if (t - a - p - u < 0) {
      if (o && s[i].length > 0 && s[i].slice(-1) === " ") {
        s[i] = s[i].slice(0, -1);
      }
      i++;
      s[i] = "";
      a = 0;
    }
    s[i] += `${a !== 0 ? " " : ""}${f}`;
    a = a !== 0 ? a + p + l.spaceWidth : p;
  }
  if (!s[s.length - 1]) {
    s.pop();
  }
  return s;
};
var Gs = Vb(
  Hb,
  (e, t, r, n, o = false) => `${e}_${t}_${n}_${r}_${o}`
);
var Ub = "BWHaasText, sans-serif";
var Gb = 'Bloomberg-PropU_N, "BB.Proportional", sans-serif';
var EI = "13px";
var rf = 13;
var pm = 14;
var nf = 12;
var $e = (e) => e ? Gb : Ub;
var Ve = (e) => e ? nf : rf;
var qs = (e) => e <= qb;
var qb = 375;

// ../utils/src/numbers/index.ts
var zs = (e) => {
  const t = `${e}`;
  if (!t.split(".")[1]) {
    return 0;
  } else {
    return t.split(".")[1].length;
  }
};
var dm = (e) => {
  return e.reduce((t, r) => {
    const n = zs(r);
    return Math.max(t, n);
  }, 0);
};

// src/charts/utils/config.ts
var vi = ["stackedVbar", "stackedHbar", "area"];
var mm = ["hbar"];
var of = [
  "hbar",
  "stackedHbar",
  "horizontalDumbbell"
];
var zb = ["hbar", "stackedVbar"];
var kI = 618;
var CI = 300;
var II = 32;
var OI = 20;
var Wb = 12;
var Zb = 6;
var hm = 7;
var FI = (e, t) => {
  return e + (e ? t ? Zb : Wb : 0);
};
var gm = (e) => of.includes(e);
var _m = (e) => zb.includes(e);
var ym = 25;
var Ta = 7;
var Ws = 7;
var Jt = 7;
var Zs = 14;
var Ti = 28;
var js = 3;
var af = 1;
var xm = 3;
var PI = 1;
var RI = 1;
var $I = 4;
var sf = 7;
var BI = rf;
var Xs = 3.5;
var bm = "#555555";
var vm = "#BBBBBB";
var Tm = "#CCCCCC";
var Sm = "#555555";
var Mm = "#000000";
var Dm = "#FFFFFF";
var lf = 10;
var cf = 5;
var wm = 21;
var LI = "#96969659";
var VI = "#96969659";
var HI = {
  titles: true,
  logo: true,
  footer: true,
  variant: "light",
  isTerminalClient: false
};
var Em = 3500;

// src/charts/utils/color.utils.ts
var fn = "#CCCCCC";
var Am = "#B3B3B3";
var un = "#545454";
var Nm = "#707070";
var jb = 0.6;
var Xb = 0.85;
var WI = (e, t, r) => r !== void 0 ? `--toas-palette-${e}-${r}: ${t};` : `--toas-color-${e}: ${t};`;
var jn = (e, t, r) => {
  if (!e) {
    return {
      palette: []
    };
  }
  const n = e?.colorPalette ?? null;
  if (!n) {
    const o = document.querySelector(
      `.toaster-chart${t ? ".toaster-is-terminal" : ""}${r === "dark" ? ".toaster-variant-dark" : ""}`
    );
    const i = n ? n.type : lm(e?.type ?? "pie");
    const a = [];
    if (o) {
      for (let s = 0; s <= ym; s++) {
        const l = getComputedStyle(o).getPropertyValue(
          `--toas-color-palette-${i}-${s}`
        );
        if (l) {
          a.push(l);
        }
      }
      return {
        palette: a
      };
    } else {
      return {
        palette: []
      };
    }
  } else {
    return n.colors[r];
  }
};
var ff = (e, t) => {
  try {
    Zn(e);
  } catch {
    return t === "dark" ? un : fn;
  }
  if (t === "dark") {
    return Zn(e).shade(Xb).hex();
  } else {
    return Zn(e).tint(jb).hex();
  }
};

// ../../node_modules/d3-shape/src/constant.js
function he(e) {
  return function t() {
    return e;
  };
}

// ../../node_modules/d3-shape/src/math.js
var uf = Math.abs;
var Mt = Math.atan2;
var Xn = Math.cos;
var Ym = Math.max;
var Js = Math.min;
var Vr = Math.sin;
var Do = Math.sqrt;
var qt = 1e-12;
var Si = Math.PI;
var Sa = Si / 2;
var Mi = 2 * Si;
function km(e) {
  return e > 1 ? 0 : e < -1 ? Si : Math.acos(e);
}
function pf(e) {
  return e >= 1 ? Sa : e <= -1 ? -Sa : Math.asin(e);
}

// ../../node_modules/d3-path/src/path.js
var df = Math.PI;
var mf = 2 * df;
var wo = 1e-6;
var Jb = mf - wo;
function Cm(e) {
  this._ += e[0];
  for (let t = 1, r = e.length; t < r; ++t) {
    this._ += arguments[t] + e[t];
  }
}
function Kb(e) {
  let t = Math.floor(e);
  if (!(t >= 0)) throw new Error(`invalid digits: ${e}`);
  if (t > 15) return Cm;
  const r = 10 ** t;
  return function(n) {
    this._ += n[0];
    for (let o = 1, i = n.length; o < i; ++o) {
      this._ += Math.round(arguments[o] * r) / r + n[o];
    }
  };
}
var Eo = class {
  constructor(t) {
    this._x0 = this._y0 = // start of current subpath
    this._x1 = this._y1 = null;
    this._ = "";
    this._append = t == null ? Cm : Kb(t);
  }
  moveTo(t, r) {
    this._append`M${this._x0 = this._x1 = +t},${this._y0 = this._y1 = +r}`;
  }
  closePath() {
    if (this._x1 !== null) {
      this._x1 = this._x0, this._y1 = this._y0;
      this._append`Z`;
    }
  }
  lineTo(t, r) {
    this._append`L${this._x1 = +t},${this._y1 = +r}`;
  }
  quadraticCurveTo(t, r, n, o) {
    this._append`Q${+t},${+r},${this._x1 = +n},${this._y1 = +o}`;
  }
  bezierCurveTo(t, r, n, o, i, a) {
    this._append`C${+t},${+r},${+n},${+o},${this._x1 = +i},${this._y1 = +a}`;
  }
  arcTo(t, r, n, o, i) {
    t = +t, r = +r, n = +n, o = +o, i = +i;
    if (i < 0) throw new Error(`negative radius: ${i}`);
    let a = this._x1, s = this._y1, l = n - t, c = o - r, f = a - t, p = s - r, u = f * f + p * p;
    if (this._x1 === null) {
      this._append`M${this._x1 = t},${this._y1 = r}`;
    } else if (!(u > wo)) ;
    else if (!(Math.abs(p * l - c * f) > wo) || !i) {
      this._append`L${this._x1 = t},${this._y1 = r}`;
    } else {
      let d = n - a, h = o - s, _ = l * l + c * c, m = d * d + h * h, x = Math.sqrt(_), A = Math.sqrt(u), D = i * Math.tan((df - Math.acos((_ + u - m) / (2 * x * A))) / 2), N = D / A, F = D / x;
      if (Math.abs(N - 1) > wo) {
        this._append`L${t + N * f},${r + N * p}`;
      }
      this._append`A${i},${i},0,0,${+(p * d > f * h)},${this._x1 = t + F * l},${this._y1 = r + F * c}`;
    }
  }
  arc(t, r, n, o, i, a) {
    t = +t, r = +r, n = +n, a = !!a;
    if (n < 0) throw new Error(`negative radius: ${n}`);
    let s = n * Math.cos(o), l = n * Math.sin(o), c = t + s, f = r + l, p = 1 ^ a, u = a ? o - i : i - o;
    if (this._x1 === null) {
      this._append`M${c},${f}`;
    } else if (Math.abs(this._x1 - c) > wo || Math.abs(this._y1 - f) > wo) {
      this._append`L${c},${f}`;
    }
    if (!n) return;
    if (u < 0) u = u % mf + mf;
    if (u > Jb) {
      this._append`A${n},${n},0,1,${p},${t - s},${r - l}A${n},${n},0,1,${p},${this._x1 = c},${this._y1 = f}`;
    } else if (u > wo) {
      this._append`A${n},${n},0,${+(u >= df)},${p},${this._x1 = t + n * Math.cos(i)},${this._y1 = r + n * Math.sin(i)}`;
    }
  }
  rect(t, r, n, o) {
    this._append`M${this._x0 = this._x1 = +t},${this._y0 = this._y1 = +r}h${n = +n}v${+o}h${-n}Z`;
  }
  toString() {
    return this._;
  }
};
function Im() {
  return new Eo();
}
Im.prototype = Eo.prototype;

// ../../node_modules/d3-shape/src/path.js
function Di(e) {
  let t = 3;
  e.digits = function(r) {
    if (!arguments.length) return t;
    if (r == null) {
      t = null;
    } else {
      const n = Math.floor(r);
      if (!(n >= 0)) throw new RangeError(`invalid digits: ${r}`);
      t = n;
    }
    return e;
  };
  return () => new Eo(t);
}

// ../../node_modules/d3-shape/src/arc.js
function Qb(e) {
  return e.innerRadius;
}
function ev(e) {
  return e.outerRadius;
}
function tv(e) {
  return e.startAngle;
}
function rv(e) {
  return e.endAngle;
}
function nv(e) {
  return e && e.padAngle;
}
function ov(e, t, r, n, o, i, a, s) {
  var l = r - e, c = n - t, f = a - o, p = s - i, u = p * l - f * c;
  if (u * u < qt) return;
  u = (f * (t - i) - p * (e - o)) / u;
  return [e + u * l, t + u * c];
}
function Ks(e, t, r, n, o, i, a) {
  var s = e - r, l = t - n, c = (a ? i : -i) / Do(s * s + l * l), f = c * l, p = -c * s, u = e + f, d = t + p, h = r + f, _ = n + p, m = (u + h) / 2, x = (d + _) / 2, A = h - u, D = _ - d, N = A * A + D * D, F = o - i, T = u * _ - h * d, v = (D < 0 ? -1 : 1) * Do(Ym(0, F * F * N - T * T)), S = (T * D - A * v) / N, Y = (-T * A - D * v) / N, E = (T * D + A * v) / N, O = (-T * A + D * v) / N, H = S - m, R = Y - x, L = E - m, G = O - x;
  if (H * H + R * R > L * L + G * G) S = E, Y = O;
  return {
    cx: S,
    cy: Y,
    x01: -f,
    y01: -p,
    x11: S * (o / F - 1),
    y11: Y * (o / F - 1)
  };
}
function iv() {
  var e = Qb, t = ev, r = he(0), n = null, o = tv, i = rv, a = nv, s = null, l = Di(c);
  function c() {
    var f, p, u = +e.apply(this, arguments), d = +t.apply(this, arguments), h = o.apply(this, arguments) - Sa, _ = i.apply(this, arguments) - Sa, m = uf(_ - h), x = _ > h;
    if (!s) s = f = l();
    if (d < u) p = d, d = u, u = p;
    if (!(d > qt)) s.moveTo(0, 0);
    else if (m > Mi - qt) {
      s.moveTo(d * Xn(h), d * Vr(h));
      s.arc(0, 0, d, h, _, !x);
      if (u > qt) {
        s.moveTo(u * Xn(_), u * Vr(_));
        s.arc(0, 0, u, _, h, x);
      }
    } else {
      var A = h, D = _, N = h, F = _, T = m, v = m, S = a.apply(this, arguments) / 2, Y = S > qt && (n ? +n.apply(this, arguments) : Do(u * u + d * d)), E = Js(uf(d - u) / 2, +r.apply(this, arguments)), O = E, H = E, R, L;
      if (Y > qt) {
        var G = pf(Y / u * Vr(S)), z = pf(Y / d * Vr(S));
        if ((T -= G * 2) > qt) G *= x ? 1 : -1, N += G, F -= G;
        else T = 0, N = F = (h + _) / 2;
        if ((v -= z * 2) > qt) z *= x ? 1 : -1, A += z, D -= z;
        else v = 0, A = D = (h + _) / 2;
      }
      var J = d * Xn(A), Z = d * Vr(A), te = u * Xn(F), X = u * Vr(F);
      if (E > qt) {
        var re = d * Xn(D), le = d * Vr(D), me = u * Xn(N), q = u * Vr(N), ye;
        if (m < Si) {
          if (ye = ov(J, Z, me, q, re, le, te, X)) {
            var qe = J - ye[0], ze = Z - ye[1], we = re - ye[0], K = le - ye[1], g = 1 / Vr(km((qe * we + ze * K) / (Do(qe * qe + ze * ze) * Do(we * we + K * K))) / 2), b = Do(ye[0] * ye[0] + ye[1] * ye[1]);
            O = Js(E, (u - b) / (g - 1));
            H = Js(E, (d - b) / (g + 1));
          } else {
            O = H = 0;
          }
        }
      }
      if (!(v > qt)) s.moveTo(J, Z);
      else if (H > qt) {
        R = Ks(me, q, J, Z, d, H, x);
        L = Ks(re, le, te, X, d, H, x);
        s.moveTo(R.cx + R.x01, R.cy + R.y01);
        if (H < E) s.arc(R.cx, R.cy, H, Mt(R.y01, R.x01), Mt(L.y01, L.x01), !x);
        else {
          s.arc(R.cx, R.cy, H, Mt(R.y01, R.x01), Mt(R.y11, R.x11), !x);
          s.arc(0, 0, d, Mt(R.cy + R.y11, R.cx + R.x11), Mt(L.cy + L.y11, L.cx + L.x11), !x);
          s.arc(L.cx, L.cy, H, Mt(L.y11, L.x11), Mt(L.y01, L.x01), !x);
        }
      } else s.moveTo(J, Z), s.arc(0, 0, d, A, D, !x);
      if (!(u > qt) || !(T > qt)) s.lineTo(te, X);
      else if (O > qt) {
        R = Ks(te, X, re, le, u, -O, x);
        L = Ks(J, Z, me, q, u, -O, x);
        s.lineTo(R.cx + R.x01, R.cy + R.y01);
        if (O < E) s.arc(R.cx, R.cy, O, Mt(R.y01, R.x01), Mt(L.y01, L.x01), !x);
        else {
          s.arc(R.cx, R.cy, O, Mt(R.y01, R.x01), Mt(R.y11, R.x11), !x);
          s.arc(0, 0, u, Mt(R.cy + R.y11, R.cx + R.x11), Mt(L.cy + L.y11, L.cx + L.x11), x);
          s.arc(L.cx, L.cy, O, Mt(L.y11, L.x11), Mt(L.y01, L.x01), !x);
        }
      } else s.arc(0, 0, u, F, N, x);
    }
    s.closePath();
    if (f) return s = null, f + "" || null;
  }
  c.centroid = function() {
    var f = (+e.apply(this, arguments) + +t.apply(this, arguments)) / 2, p = (+o.apply(this, arguments) + +i.apply(this, arguments)) / 2 - Si / 2;
    return [Xn(p) * f, Vr(p) * f];
  };
  c.innerRadius = function(f) {
    return arguments.length ? (e = typeof f === "function" ? f : he(+f), c) : e;
  };
  c.outerRadius = function(f) {
    return arguments.length ? (t = typeof f === "function" ? f : he(+f), c) : t;
  };
  c.cornerRadius = function(f) {
    return arguments.length ? (r = typeof f === "function" ? f : he(+f), c) : r;
  };
  c.padRadius = function(f) {
    return arguments.length ? (n = f == null ? null : typeof f === "function" ? f : he(+f), c) : n;
  };
  c.startAngle = function(f) {
    return arguments.length ? (o = typeof f === "function" ? f : he(+f), c) : o;
  };
  c.endAngle = function(f) {
    return arguments.length ? (i = typeof f === "function" ? f : he(+f), c) : i;
  };
  c.padAngle = function(f) {
    return arguments.length ? (a = typeof f === "function" ? f : he(+f), c) : a;
  };
  c.context = function(f) {
    return arguments.length ? (s = f == null ? null : f, c) : s;
  };
  return c;
}

// ../../node_modules/d3-shape/src/array.js
var sO = Array.prototype.slice;
function Jn(e) {
  return typeof e === "object" && "length" in e ? e : Array.from(e);
}

// ../../node_modules/d3-shape/src/curve/linear.js
function Om(e) {
  this._context = e;
}
Om.prototype = {
  areaStart: function() {
    this._line = 0;
  },
  areaEnd: function() {
    this._line = NaN;
  },
  lineStart: function() {
    this._point = 0;
  },
  lineEnd: function() {
    if (this._line || this._line !== 0 && this._point === 1) this._context.closePath();
    this._line = 1 - this._line;
  },
  point: function(e, t) {
    e = +e, t = +t;
    switch (this._point) {
      case 0:
        this._point = 1;
        this._line ? this._context.lineTo(e, t) : this._context.moveTo(e, t);
        break;
      case 1:
        this._point = 2;
      default:
        this._context.lineTo(e, t);
        break;
    }
  }
};
function Ma(e) {
  return new Om(e);
}

// ../../node_modules/d3-shape/src/point.js
function Qs(e) {
  return e[0];
}
function el(e) {
  return e[1];
}

// ../../node_modules/d3-shape/src/line.js
function hf(e, t) {
  var r = he(true), n = null, o = Ma, i = null, a = Di(s);
  e = typeof e === "function" ? e : e === void 0 ? Qs : he(e);
  t = typeof t === "function" ? t : t === void 0 ? el : he(t);
  function s(l) {
    var c, f = (l = Jn(l)).length, p, u = false, d;
    if (n == null) i = o(d = a());
    for (c = 0; c <= f; ++c) {
      if (!(c < f && r(p = l[c], c, l)) === u) {
        if (u = !u) i.lineStart();
        else i.lineEnd();
      }
      if (u) i.point(+e(p, c, l), +t(p, c, l));
    }
    if (d) return i = null, d + "" || null;
  }
  s.x = function(l) {
    return arguments.length ? (e = typeof l === "function" ? l : he(+l), s) : e;
  };
  s.y = function(l) {
    return arguments.length ? (t = typeof l === "function" ? l : he(+l), s) : t;
  };
  s.defined = function(l) {
    return arguments.length ? (r = typeof l === "function" ? l : he(!!l), s) : r;
  };
  s.curve = function(l) {
    return arguments.length ? (o = l, n != null && (i = o(n)), s) : o;
  };
  s.context = function(l) {
    return arguments.length ? (l == null ? n = i = null : i = o(n = l), s) : n;
  };
  return s;
}

// ../../node_modules/d3-shape/src/area.js
function av(e, t, r) {
  var n = null, o = he(true), i = null, a = Ma, s = null, l = Di(c);
  e = typeof e === "function" ? e : e === void 0 ? Qs : he(+e);
  t = typeof t === "function" ? t : t === void 0 ? he(0) : he(+t);
  r = typeof r === "function" ? r : r === void 0 ? el : he(+r);
  function c(p) {
    var u, d, h, _ = (p = Jn(p)).length, m, x = false, A, D = new Array(_), N = new Array(_);
    if (i == null) s = a(A = l());
    for (u = 0; u <= _; ++u) {
      if (!(u < _ && o(m = p[u], u, p)) === x) {
        if (x = !x) {
          d = u;
          s.areaStart();
          s.lineStart();
        } else {
          s.lineEnd();
          s.lineStart();
          for (h = u - 1; h >= d; --h) {
            s.point(D[h], N[h]);
          }
          s.lineEnd();
          s.areaEnd();
        }
      }
      if (x) {
        D[u] = +e(m, u, p), N[u] = +t(m, u, p);
        s.point(n ? +n(m, u, p) : D[u], r ? +r(m, u, p) : N[u]);
      }
    }
    if (A) return s = null, A + "" || null;
  }
  function f() {
    return hf().defined(o).curve(a).context(i);
  }
  c.x = function(p) {
    return arguments.length ? (e = typeof p === "function" ? p : he(+p), n = null, c) : e;
  };
  c.x0 = function(p) {
    return arguments.length ? (e = typeof p === "function" ? p : he(+p), c) : e;
  };
  c.x1 = function(p) {
    return arguments.length ? (n = p == null ? null : typeof p === "function" ? p : he(+p), c) : n;
  };
  c.y = function(p) {
    return arguments.length ? (t = typeof p === "function" ? p : he(+p), r = null, c) : t;
  };
  c.y0 = function(p) {
    return arguments.length ? (t = typeof p === "function" ? p : he(+p), c) : t;
  };
  c.y1 = function(p) {
    return arguments.length ? (r = p == null ? null : typeof p === "function" ? p : he(+p), c) : r;
  };
  c.lineX0 = c.lineY0 = function() {
    return f().x(e).y(t);
  };
  c.lineY1 = function() {
    return f().x(e).y(r);
  };
  c.lineX1 = function() {
    return f().x(n).y(t);
  };
  c.defined = function(p) {
    return arguments.length ? (o = typeof p === "function" ? p : he(!!p), c) : o;
  };
  c.curve = function(p) {
    return arguments.length ? (a = p, i != null && (s = a(i)), c) : a;
  };
  c.context = function(p) {
    return arguments.length ? (p == null ? i = s = null : s = a(i = p), c) : i;
  };
  return c;
}

// ../../node_modules/d3-shape/src/descending.js
function Fm(e, t) {
  return t < e ? -1 : t > e ? 1 : t >= e ? 0 : NaN;
}

// ../../node_modules/d3-shape/src/identity.js
function Pm(e) {
  return e;
}

// ../../node_modules/d3-shape/src/pie.js
function sv() {
  var e = Pm, t = Fm, r = null, n = he(0), o = he(Mi), i = he(0);
  function a(s) {
    var l, c = (s = Jn(s)).length, f, p, u = 0, d = new Array(c), h = new Array(c), _ = +n.apply(this, arguments), m = Math.min(Mi, Math.max(-Mi, o.apply(this, arguments) - _)), x, A = Math.min(Math.abs(m) / c, i.apply(this, arguments)), D = A * (m < 0 ? -1 : 1), N;
    for (l = 0; l < c; ++l) {
      if ((N = h[d[l] = l] = +e(s[l], l, s)) > 0) {
        u += N;
      }
    }
    if (t != null) d.sort(function(F, T) {
      return t(h[F], h[T]);
    });
    else if (r != null) d.sort(function(F, T) {
      return r(s[F], s[T]);
    });
    for (l = 0, p = u ? (m - c * D) / u : 0; l < c; ++l, _ = x) {
      f = d[l], N = h[f], x = _ + (N > 0 ? N * p : 0) + D, h[f] = {
        data: s[f],
        index: l,
        value: N,
        startAngle: _,
        endAngle: x,
        padAngle: A
      };
    }
    return h;
  }
  a.value = function(s) {
    return arguments.length ? (e = typeof s === "function" ? s : he(+s), a) : e;
  };
  a.sortValues = function(s) {
    return arguments.length ? (t = s, r = null, a) : t;
  };
  a.sort = function(s) {
    return arguments.length ? (r = s, t = null, a) : r;
  };
  a.startAngle = function(s) {
    return arguments.length ? (n = typeof s === "function" ? s : he(+s), a) : n;
  };
  a.endAngle = function(s) {
    return arguments.length ? (o = typeof s === "function" ? s : he(+s), a) : o;
  };
  a.padAngle = function(s) {
    return arguments.length ? (i = typeof s === "function" ? s : he(+s), a) : i;
  };
  return a;
}

// ../../node_modules/d3-shape/src/curve/step.js
function gf(e, t) {
  this._context = e;
  this._t = t;
}
gf.prototype = {
  areaStart: function() {
    this._line = 0;
  },
  areaEnd: function() {
    this._line = NaN;
  },
  lineStart: function() {
    this._x = this._y = NaN;
    this._point = 0;
  },
  lineEnd: function() {
    if (0 < this._t && this._t < 1 && this._point === 2) this._context.lineTo(this._x, this._y);
    if (this._line || this._line !== 0 && this._point === 1) this._context.closePath();
    if (this._line >= 0) this._t = 1 - this._t, this._line = 1 - this._line;
  },
  point: function(e, t) {
    e = +e, t = +t;
    switch (this._point) {
      case 0:
        this._point = 1;
        this._line ? this._context.lineTo(e, t) : this._context.moveTo(e, t);
        break;
      case 1:
        this._point = 2;
      default: {
        if (this._t <= 0) {
          this._context.lineTo(this._x, t);
          this._context.lineTo(e, t);
        } else {
          var r = this._x * (1 - this._t) + e * this._t;
          this._context.lineTo(r, this._y);
          this._context.lineTo(r, t);
        }
        break;
      }
    }
    this._x = e, this._y = t;
  }
};
function lv(e) {
  return new gf(e, 0);
}
function cv(e) {
  return new gf(e, 1);
}

// ../../node_modules/d3-shape/src/offset/none.js
function Kn(e, t) {
  if (!((a = e.length) > 1)) return;
  for (var r = 1, n, o, i = e[t[0]], a, s = i.length; r < a; ++r) {
    o = i, i = e[t[r]];
    for (n = 0; n < s; ++n) {
      i[n][1] += i[n][0] = isNaN(o[n][1]) ? o[n][0] : o[n][1];
    }
  }
}

// ../../node_modules/d3-shape/src/order/none.js
function Qn(e) {
  var t = e.length, r = new Array(t);
  while (--t >= 0) r[t] = t;
  return r;
}

// ../../node_modules/d3-shape/src/stack.js
function fv(e, t) {
  return e[t];
}
function uv(e) {
  const t = [];
  t.key = e;
  return t;
}
function _f() {
  var e = he([]), t = Qn, r = Kn, n = fv;
  function o(i) {
    var a = Array.from(e.apply(this, arguments), uv), s, l = a.length, c = -1, f;
    for (const p of i) {
      for (s = 0, ++c; s < l; ++s) {
        (a[s][c] = [0, +n(p, a[s].key, c, i)]).data = p;
      }
    }
    for (s = 0, f = Jn(t(a)); s < l; ++s) {
      a[f[s]].index = s;
    }
    r(a, f);
    return a;
  }
  o.keys = function(i) {
    return arguments.length ? (e = typeof i === "function" ? i : he(Array.from(i)), o) : e;
  };
  o.value = function(i) {
    return arguments.length ? (n = typeof i === "function" ? i : he(+i), o) : n;
  };
  o.order = function(i) {
    return arguments.length ? (t = i == null ? Qn : typeof i === "function" ? i : he(Array.from(i)), o) : t;
  };
  o.offset = function(i) {
    return arguments.length ? (r = i == null ? Kn : i, o) : r;
  };
  return o;
}

// ../../node_modules/d3-shape/src/offset/expand.js
function yf(e, t) {
  if (!((n = e.length) > 0)) return;
  for (var r, n, o = 0, i = e[0].length, a; o < i; ++o) {
    for (a = r = 0; r < n; ++r) a += e[r][o][1] || 0;
    if (a) for (r = 0; r < n; ++r) e[r][o][1] /= a;
  }
  Kn(e, t);
}

// ../../node_modules/d3-shape/src/offset/diverging.js
function xf(e, t) {
  if (!((l = e.length) > 0)) return;
  for (var r, n = 0, o, i, a, s, l, c = e[t[0]].length; n < c; ++n) {
    for (a = s = 0, r = 0; r < l; ++r) {
      if ((i = (o = e[t[r]][n])[1] - o[0]) > 0) {
        o[0] = a, o[1] = a += i;
      } else if (i < 0) {
        o[1] = s, o[0] = s += i;
      } else {
        o[0] = 0, o[1] = i;
      }
    }
  }
}

// ../../node_modules/d3-shape/src/order/ascending.js
function Da(e) {
  var t = e.map(pv);
  return Qn(e).sort(function(r, n) {
    return t[r] - t[n];
  });
}
function pv(e) {
  var t = 0, r = -1, n = e.length, o;
  while (++r < n) if (o = +e[r][1]) t += o;
  return t;
}

// ../../node_modules/d3-shape/src/order/descending.js
function bf(e) {
  return Da(e).reverse();
}

// src/charts/area/utils.ts
var tl = {
  DIVERGING: "stackOffsetDiverging",
  EXPAND: "stackOffsetExpand",
  NONE: "stackOffsetNone"
};
var rl = {
  NONE: "stackOrderNone",
  ASCENDING: "stackOrderAscending",
  DESCENDING: "stackOrderDescending"
};
var eo = (e) => !!e && e?.type === "area" && e?.area?.style === "proportional";
var Rm = (e) => !!e && e?.type === "area" && !!e?.area?.displayActualValues;
function uF(e) {
  let t = 0;
  return e.map((r, n) => {
    if (r[0] === 0 && r[1] === 0 && n > 0) {
      return [t, t];
    } else {
      t = r[1];
      return r;
    }
  });
}
var pF = ({
  scales: e,
  chartData: t,
  stackedData: r
}) => {
  const n = pn(t);
  const o = n ? n.id : "";
  let i = r.map((a, s) => {
    return {
      key: a[0].data?.[o],
      formattedData: [
        // Format the primary value (x)
        e.primaryScale.scale.formatValue(t.data[s][0]),
        // Spread the stacked y0, y1 values
        ...a
      ]
    };
  });
  return vf(i, e, t);
};
var $m = ({
  nonPrimaryFieldIds: e,
  order: t,
  seriesDataLookup: r
}) => {
  if (t === "none") {
    return e;
  }
  const n = {};
  Object.keys(r).forEach((i) => {
    const a = r[i];
    e.forEach((s) => {
      const l = a[s];
      if (rt(l)) {
        n[s] = (n[s] || 0) + Math.abs(l);
      }
    });
  });
  const o = e.map((i, a) => ({ id: i, sum: n[i] || 0, index: a })).sort((i, a) => {
    const s = t === "ascending" ? i.sum - a.sum : a.sum - i.sum;
    if (s !== 0) return s;
    return t === "ascending" ? i.index - a.index : a.index - i.index;
  });
  return o.map((i) => i.id);
};
var Tf = ({
  fields: e,
  order: t
}) => {
  const r = e.map((i) => i.id);
  if (t === "none") {
    return r;
  }
  const n = {};
  e.forEach((i) => {
    if (i.data) {
      let a = 0;
      for (let s = 0; s < i.data.length; s++) {
        const l = i.data[s];
        if (rt(l)) {
          a += Math.abs(l);
        }
      }
      n[i.id] = a;
    }
  });
  const o = r.map((i, a) => ({ id: i, sum: n[i] || 0, index: a })).sort((i, a) => {
    const s = t === "ascending" ? i.sum - a.sum : a.sum - i.sum;
    if (s !== 0) return s;
    return t === "ascending" ? i.index - a.index : a.index - i.index;
  });
  return o.map((i) => i.id);
};

// src/charts/utils/data.utils.ts
function dv(e) {
  if (!e || e.length === 0) return [];
  return e[0].map((t, r) => e.map((n) => n[r]));
}
var Oe = (e) => e?.fields?.filter((t) => !t.taxonomy?.isPrimary) ?? [];
var Lm = (e) => {
  const t = e?.type;
  return t === "bar" || t === "hbar";
};
var xF = (e) => {
  const t = Bp(e);
  const r = dv(e.data);
  const n = e.fields.map((o) => ({
    ...o,
    data: r[o.index]
  }));
  if (e.design.overrideOptions) {
    try {
      const o = JSON.parse(e.design.overrideOptions);
      t.design.parsedOverrideOptions = o;
    } catch (o) {
      try {
        const i = cm(e.design.overrideOptions);
        t.design.parsedOverrideOptions = i;
      } catch (i) {
        console.warn(i);
        t.design["parsedOverrideOptions"] = void 0;
      }
    }
  } else {
    t.design["parsedOverrideOptions"] = void 0;
  }
  return { ...t, fields: n };
};
var vf = (e, t, r) => {
  if ((t.primaryScale.scale.type === "time" || t.primaryScale.scale.type === "linear" || t.primaryScale.scale.type === "timeBand") && !r.axis?.primary?.preserveOrder) {
    return Gp(e, (n) => n.formattedData[0]);
  }
  return e;
};
var bF = ({
  scales: e,
  chartData: t
}) => {
  let r = [];
  r = t.data.map((n) => {
    return {
      key: n[0],
      formattedData: n.map((o, i) => {
        return i === 0 ? e.primaryScale.scale.formatValue(o) : e.secondaryScale?.scale.formatValue(o);
      })
    };
  });
  return vf(r, e, t);
};
var vF = ({
  dottedLineSegmentInfos: e,
  primaryScale: t
}) => {
  return e.filter((r) => r.from !== null && r.to !== null).map((r) => {
    return {
      seriesId: r.seriesId,
      from: t.formatValue(r.from),
      to: t.formatValue(r.to)
    };
  });
};
var Bm = ({
  chartType: e,
  fieldType: t
}) => {
  if (e && gm(e)) {
    return Ao;
  }
  switch (t) {
    case "date":
    case "year":
    case "quarter":
    case "month":
    case "month/day":
    case "year/month":
      return wi;
    case "numeric":
      return dn;
    case "string":
    default:
      return Ao;
  }
};
var TF = (e) => {
  let t = {};
  const r = e.fields.find(
    (o) => o.taxonomy?.isPrimary === true
  );
  const n = r?.id;
  for (let o = 0; o < e.data.length; o++) {
    let i = {};
    for (const a of e.fields) {
      if (a.id !== n) {
        const s = Bm({
          fieldType: a.type,
          chartType: void 0
          // we want to only choose on field type, not chart type
        });
        const l = new s({ field: a });
        i[a.id] = i[a.id] !== null ? l.formatValue(a.data?.[o]) : null;
      }
    }
    if (r && r.data && r.data[o] !== null && r.data[o] !== void 0) {
      const a = Bm({
        fieldType: r.type,
        chartType: e.type
        // in the case of a horizontal scale we need to make sure the converted time scales are treated as band scales
      });
      const s = new a({ field: r });
      const l = r.data[o] !== null ? s.stringifyValue(r.data[o]) : null;
      if (l !== null && l !== void 0) {
        t[l] = i;
      }
    }
  }
  return t;
};
var SF = (e, t = tl.DIVERGING, r = rl.NONE) => {
  const { data: n, fields: o } = e;
  const i = t === tl.DIVERGING;
  const a = t === tl.EXPAND;
  const s = r === rl.ASCENDING;
  const l = r === rl.DESCENDING;
  const c = o.find((d) => d.taxonomy?.isPrimary);
  let f = o.filter((d) => !d.taxonomy?.isPrimary);
  if (!c) {
    throw new Error("No primary field found in the chart data");
  }
  const p = _f().keys(f.map((d) => d.id)).value((d, h) => d[h]).offset(
    i ? xf : a ? yf : Kn
  ).order(
    s ? Da : l ? bf : Qn
  );
  const u = p(
    n.map((d) => {
      const h = {};
      h[c.id] = d[c.index];
      f.forEach((_) => {
        const m = d[_.index];
        h[_.id] = eo(e) && m < 0 ? 0 : m;
      });
      return h;
    })
  );
  if (a) {
    return u.map(
      (d) => d.map((h) => h.map((_) => _ * 100))
    );
  }
  return u;
};

// ../../node_modules/numbro/dist/es/numbro.js
var mv = typeof globalThis !== "undefined" ? globalThis : typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : {};
function hv(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e["default"] : e;
}
var Sf;
var Vm;
function gv() {
  if (Vm) return Sf;
  Vm = 1;
  Sf = {
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
    ordinal: function(e) {
      let t = e % 10;
      return ~~(e % 100 / 10) === 1 ? "th" : t === 1 ? "st" : t === 2 ? "nd" : t === 3 ? "rd" : "th";
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
  return Sf;
}
var Mf;
var Hm;
function qm() {
  if (Hm) return Mf;
  Hm = 1;
  const e = [
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
  function t(l) {
    return l.replace(/[-/\\^$*+?.()|[\]{}]/g, "\\$&");
  }
  function r(l, c, f, p, u, d, h) {
    if (!isNaN(+l)) {
      return +l;
    }
    let _ = "";
    let m = l.replace(/(^[^(]*)\((.*)\)([^)]*$)/, "$1$2$3");
    if (m !== l) {
      return -1 * r(m, c, f, p, u, d);
    }
    for (let T = 0; T < e.length; T++) {
      let v = e[T];
      _ = l.replace(RegExp(`([0-9 ])(${v.key})$`), "$1");
      if (_ !== l) {
        return r(_, c, f, p, u, d) * v.factor;
      }
    }
    _ = l.replace("%", "");
    if (_ !== l) {
      return r(_, c, f, p, u, d) / 100;
    }
    let x = parseFloat(l);
    if (isNaN(x)) {
      return void 0;
    }
    let A = p(x);
    if (A && A !== ".") {
      _ = l.replace(new RegExp(`${t(A)}$`), "");
      if (_ !== l) {
        return r(_, c, f, p, u, d);
      }
    }
    let D = {};
    Object.keys(d).forEach((T) => {
      D[d[T]] = T;
    });
    let N = Object.keys(D).sort().reverse();
    let F = N.length;
    for (let T = 0; T < F; T++) {
      let v = N[T];
      let S = D[v];
      _ = l.replace(v, "");
      if (_ !== l) {
        let Y = void 0;
        switch (S) {
          case "thousand":
            Y = Math.pow(10, 3);
            break;
          case "million":
            Y = Math.pow(10, 6);
            break;
          case "billion":
            Y = Math.pow(10, 9);
            break;
          case "trillion":
            Y = Math.pow(10, 12);
            break;
        }
        return r(_, c, f, p, u, d) * Y;
      }
    }
    return void 0;
  }
  function n(l, c, f) {
    let p = l.replace(f, "");
    p = p.replace(new RegExp(`([0-9])${t(c.thousands)}([0-9])`, "g"), "$1$2");
    p = p.replace(c.decimal, ".");
    return p;
  }
  function o(l, c, f = "", p, u, d, h) {
    if (l === "") {
      return void 0;
    }
    if (l === u) {
      return 0;
    }
    let _ = n(l, c, f);
    return r(_, c, f, p, u, d);
  }
  function i(l, c) {
    let f = l.indexOf(":") && c.thousands !== ":";
    if (!f) {
      return false;
    }
    let p = l.split(":");
    if (p.length !== 3) {
      return false;
    }
    let u = +p[0];
    let d = +p[1];
    let h = +p[2];
    return !isNaN(u) && !isNaN(d) && !isNaN(h);
  }
  function a(l) {
    let c = l.split(":");
    let f = +c[0];
    let p = +c[1];
    let u = +c[2];
    return u + 60 * p + 3600 * f;
  }
  function s(l, c) {
    const f = Nf();
    let p = f.currentDelimiters();
    let u = f.currentCurrency().symbol;
    let d = f.currentOrdinal();
    let h = f.getZeroFormat();
    let _ = f.currentAbbreviations();
    let m = void 0;
    if (typeof l === "string") {
      if (i(l, p)) {
        m = a(l);
      } else {
        m = o(l, p, u, d, h, _);
      }
    } else if (typeof l === "number") {
      m = l;
    } else {
      return void 0;
    }
    if (m === void 0) {
      return void 0;
    }
    return m;
  }
  Mf = {
    unformat: s
  };
  return Mf;
}
var Df;
var Um;
function Ef() {
  if (Um) return Df;
  Um = 1;
  let e = qm();
  const t = /^[a-z]{2,3}(-[a-zA-Z]{4})?(-([A-Z]{2}|[0-9]{3}))?$/;
  const r = [
    "currency",
    "percent",
    "byte",
    "time",
    "ordinal",
    "number"
  ];
  const n = [
    "trillion",
    "billion",
    "million",
    "thousand"
  ];
  const o = [
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
  const s = {
    type: "object",
    children: {
      thousand: "string",
      million: "string",
      billion: "string",
      trillion: "string"
    }
  };
  const l = [
    "decimal",
    "binary",
    "general"
  ];
  const c = {
    output: {
      type: "string",
      validValues: r
    },
    base: {
      type: "string",
      validValues: l,
      restriction: (m, x) => x.output === "byte",
      message: "`base` must be provided only when the output is `byte`",
      mandatory: (m) => m.output === "byte"
    },
    characteristic: {
      type: "number",
      restriction: (m) => m >= 0,
      message: "value must be positive"
    },
    prefix: "string",
    postfix: "string",
    forceAverage: {
      type: "string",
      validValues: n
    },
    average: "boolean",
    lowPrecision: {
      type: "boolean",
      restriction: (m, x) => x.average === true,
      message: "`lowPrecision` must be provided only when the option `average` is set"
    },
    currencyPosition: {
      type: "string",
      validValues: o
    },
    currencySymbol: "string",
    totalLength: {
      type: "number",
      restrictions: [
        {
          restriction: (m) => m >= 0,
          message: "value must be positive"
        },
        {
          restriction: (m, x) => !x.exponential,
          message: "`totalLength` is incompatible with `exponential`"
        }
      ]
    },
    mantissa: {
      type: "number",
      restriction: (m) => m >= 0,
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
    abbreviations: s,
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
      restriction: (m, x) => x.output === "percent",
      message: "`prefixSymbol` can be provided only when the output is `percent`"
    }
  };
  const f = {
    languageTag: {
      type: "string",
      mandatory: true,
      restriction: (m) => {
        return m.match(t);
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
  function p(m, x) {
    let A = u(m);
    let D = h(x);
    return A && D;
  }
  function u(m) {
    let x = e.unformat(m);
    return x !== void 0;
  }
  function d(m, x, A, D = false) {
    let N = Object.keys(m).map((F) => {
      if (!x[F]) {
        console.error(`${A} Invalid key: ${F}`);
        return false;
      }
      let T = m[F];
      let v = x[F];
      if (typeof v === "string") {
        v = { type: v };
      }
      if (v.type === "format") {
        let S = d(T, c, `[Validate ${F}]`, true);
        if (!S) {
          return false;
        }
      } else if (typeof T !== v.type) {
        console.error(`${A} ${F} type mismatched: "${v.type}" expected, "${typeof T}" provided`);
        return false;
      }
      if (v.restrictions && v.restrictions.length) {
        let S = v.restrictions.length;
        for (let Y = 0; Y < S; Y++) {
          let { restriction: E, message: O } = v.restrictions[Y];
          if (!E(T, m)) {
            console.error(`${A} ${F} invalid value: ${O}`);
            return false;
          }
        }
      }
      if (v.restriction && !v.restriction(T, m)) {
        console.error(`${A} ${F} invalid value: ${v.message}`);
        return false;
      }
      if (v.validValues && v.validValues.indexOf(T) === -1) {
        console.error(`${A} ${F} invalid value: must be among ${JSON.stringify(v.validValues)}, "${T}" provided`);
        return false;
      }
      if (v.children) {
        let S = d(T, v.children, `[Validate ${F}]`);
        if (!S) {
          return false;
        }
      }
      return true;
    });
    if (!D) {
      N.push(...Object.keys(x).map((F) => {
        let T = x[F];
        if (typeof T === "string") {
          T = { type: T };
        }
        if (T.mandatory) {
          let v = T.mandatory;
          if (typeof v === "function") {
            v = v(m);
          }
          if (v && m[F] === void 0) {
            console.error(`${A} Missing mandatory key "${F}"`);
            return false;
          }
        }
        return true;
      }));
    }
    return N.reduce((F, T) => {
      return F && T;
    }, true);
  }
  function h(m) {
    return d(m, c, "[Validate format]");
  }
  function _(m) {
    return d(m, f, "[Validate language]");
  }
  Df = {
    validate: p,
    validateFormat: h,
    validateInput: u,
    validateLanguage: _
  };
  return Df;
}
function _v(e, t) {
  let r = e.match(/^{([^}]*)}/);
  if (r) {
    t.prefix = r[1];
    return e.slice(r[0].length);
  }
  return e;
}
function yv(e, t) {
  let r = e.match(/{([^}]*)}$/);
  if (r) {
    t.postfix = r[1];
    return e.slice(0, -r[0].length);
  }
  return e;
}
function xv(e, t) {
  if (e.indexOf("$") !== -1) {
    t.output = "currency";
    return;
  }
  if (e.indexOf("%") !== -1) {
    t.output = "percent";
    return;
  }
  if (e.indexOf("bd") !== -1) {
    t.output = "byte";
    t.base = "general";
    return;
  }
  if (e.indexOf("b") !== -1) {
    t.output = "byte";
    t.base = "binary";
    return;
  }
  if (e.indexOf("d") !== -1) {
    t.output = "byte";
    t.base = "decimal";
    return;
  }
  if (e.indexOf(":") !== -1) {
    t.output = "time";
    return;
  }
  if (e.indexOf("o") !== -1) {
    t.output = "ordinal";
  }
}
function bv(e, t) {
  if (e.indexOf(",") !== -1) {
    t.thousandSeparated = true;
  }
}
function vv(e, t) {
  if (e.indexOf(" ") !== -1) {
    t.spaceSeparated = true;
    t.spaceSeparatedCurrency = true;
    if (t.average || t.forceAverage) {
      t.spaceSeparatedAbbreviation = true;
    }
  }
}
function Tv(e, t) {
  let r = e.match(/[1-9]+[0-9]*/);
  if (r) {
    t.totalLength = +r[0];
  }
}
function Sv(e, t) {
  let r = e.split(".")[0];
  let n = r.match(/0+/);
  if (n) {
    t.characteristic = n[0].length;
  }
}
function Mv(e, t) {
  let r = e.split(".")[1];
  if (r) {
    let n = r.match(/0+/);
    if (n) {
      t.mantissa = n[0].length;
    }
  }
}
function Dv(e, t) {
  const r = e.split(".")[1];
  if (r) {
    t.trimMantissa = r.indexOf("[") !== -1;
  }
}
function wv(e, t) {
  if (e.indexOf("a") !== -1) {
    t.average = true;
  }
}
function Ev(e, t) {
  if (e.indexOf("K") !== -1) {
    t.forceAverage = "thousand";
  } else if (e.indexOf("M") !== -1) {
    t.forceAverage = "million";
  } else if (e.indexOf("B") !== -1) {
    t.forceAverage = "billion";
  } else if (e.indexOf("T") !== -1) {
    t.forceAverage = "trillion";
  }
}
function Av(e, t) {
  if (e.match(/\[\.]/)) {
    t.optionalMantissa = true;
  } else if (e.match(/\./)) {
    t.optionalMantissa = false;
  }
}
function Nv(e, t) {
  if (e.indexOf(".") !== -1) {
    let r = e.split(".")[0];
    t.optionalCharacteristic = r.indexOf("0") === -1;
  }
}
function Yv(e, t) {
  if (e.match(/^\+?\([^)]*\)$/)) {
    t.negative = "parenthesis";
  }
  if (e.match(/^\+?-/)) {
    t.negative = "sign";
  }
}
function kv(e, t) {
  if (e.match(/^\+/)) {
    t.forceSign = true;
  }
}
function Cv(e, t = {}) {
  if (typeof e !== "string") {
    return e;
  }
  e = _v(e, t);
  e = yv(e, t);
  xv(e, t);
  Tv(e, t);
  Sv(e, t);
  Nv(e, t);
  wv(e, t);
  Ev(e, t);
  Mv(e, t);
  Av(e, t);
  Dv(e, t);
  bv(e, t);
  vv(e, t);
  Yv(e, t);
  kv(e, t);
  return t;
}
var Af = {
  parseFormat: Cv
};
var wf;
var Gm;
function Nf() {
  if (Gm) return wf;
  Gm = 1;
  const e = gv();
  const t = Ef();
  const r = Af;
  let n = {};
  let o = void 0;
  let i = {};
  let a = null;
  let s = {};
  function l(f) {
    o = f;
  }
  function c() {
    return i[o];
  }
  n.languages = () => Object.assign({}, i);
  n.currentLanguage = () => o;
  n.currentBytes = () => c().bytes || {};
  n.currentCurrency = () => c().currency;
  n.currentAbbreviations = () => c().abbreviations;
  n.currentDelimiters = () => c().delimiters;
  n.currentOrdinal = () => c().ordinal;
  n.currentDefaults = () => Object.assign({}, c().defaults, s);
  n.currentOrdinalDefaultFormat = () => Object.assign({}, n.currentDefaults(), c().ordinalFormat);
  n.currentByteDefaultFormat = () => Object.assign({}, n.currentDefaults(), c().byteFormat);
  n.currentPercentageDefaultFormat = () => Object.assign({}, n.currentDefaults(), c().percentageFormat);
  n.currentCurrencyDefaultFormat = () => Object.assign({}, n.currentDefaults(), c().currencyFormat);
  n.currentTimeDefaultFormat = () => Object.assign({}, n.currentDefaults(), c().timeFormat);
  n.setDefaults = (f) => {
    f = r.parseFormat(f);
    if (t.validateFormat(f)) {
      s = f;
    }
  };
  n.getZeroFormat = () => a;
  n.setZeroFormat = (f) => a = typeof f === "string" ? f : null;
  n.hasZeroFormat = () => a !== null;
  n.languageData = (f) => {
    if (f) {
      if (i[f]) {
        return i[f];
      }
      throw new Error(`Unknown tag "${f}"`);
    }
    return c();
  };
  n.registerLanguage = (f, p = false) => {
    if (!t.validateLanguage(f)) {
      throw new Error("Invalid language data");
    }
    i[f.languageTag] = f;
    if (p) {
      l(f.languageTag);
    }
  };
  n.setLanguage = (f, p = e.languageTag) => {
    if (!i[f]) {
      let u = f.split("-")[0];
      let d = Object.keys(i).find((h) => {
        return h.split("-")[0] === u;
      });
      if (!i[d]) {
        l(p);
        return;
      }
      l(d);
      return;
    }
    l(f);
  };
  n.registerLanguage(e);
  o = e.languageTag;
  wf = n;
  return wf;
}
function Iv(e) {
  throw new Error('Could not dynamically require "' + e + '". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.');
}
function Ov(e, t) {
  e.forEach((r) => {
    let n = void 0;
    try {
      n = Iv(`../languages/${r}`);
    } catch (o) {
      console.error(`Unable to load "${r}". No matching language file found.`);
    }
    if (n) {
      t.registerLanguage(n);
    }
  });
}
var Fv = (e) => ({
  loadLanguagesInNode: (t) => Ov(t, e)
});
var zm = { exports: {} };
(function(e) {
  (function(t) {
    var r, n = /^-?(?:\d+(?:\.\d*)?|\.\d+)(?:e[+-]?\d+)?$/i, o = Math.ceil, i = Math.floor, a = "[BigNumber Error] ", s = a + "Number primitive has more than 15 significant digits: ", l = 1e14, c = 14, f = 9007199254740991, p = [1, 10, 100, 1e3, 1e4, 1e5, 1e6, 1e7, 1e8, 1e9, 1e10, 1e11, 1e12, 1e13], u = 1e7, d = 1e9;
    function h(T) {
      var v, S, Y, E = q.prototype = { constructor: q, toString: null, valueOf: null }, O = new q(1), H = 20, R = 4, L = -7, G = 21, z = -1e7, J = 1e7, Z = false, te = 1, X = 0, re = {
        prefix: "",
        groupSize: 3,
        secondaryGroupSize: 0,
        groupSeparator: ",",
        decimalSeparator: ".",
        fractionGroupSize: 0,
        fractionGroupSeparator: "\xA0",
        // non-breaking space
        suffix: ""
      }, le = "0123456789abcdefghijklmnopqrstuvwxyz", me = true;
      function q(g, b) {
        var y, I, w, k, P, M, C, B, $ = this;
        if (!($ instanceof q)) return new q(g, b);
        if (b == null) {
          if (g && g._isBigNumber === true) {
            $.s = g.s;
            if (!g.c || g.e > J) {
              $.c = $.e = null;
            } else if (g.e < z) {
              $.c = [$.e = 0];
            } else {
              $.e = g.e;
              $.c = g.c.slice();
            }
            return;
          }
          if ((M = typeof g == "number") && g * 0 == 0) {
            $.s = 1 / g < 0 ? (g = -g, -1) : 1;
            if (g === ~~g) {
              for (k = 0, P = g; P >= 10; P /= 10, k++) ;
              if (k > J) {
                $.c = $.e = null;
              } else {
                $.e = k;
                $.c = [g];
              }
              return;
            }
            B = String(g);
          } else {
            if (!n.test(B = String(g))) return Y($, B, M);
            $.s = B.charCodeAt(0) == 45 ? (B = B.slice(1), -1) : 1;
          }
          if ((k = B.indexOf(".")) > -1) B = B.replace(".", "");
          if ((P = B.search(/e/i)) > 0) {
            if (k < 0) k = P;
            k += +B.slice(P + 1);
            B = B.substring(0, P);
          } else if (k < 0) {
            k = B.length;
          }
        } else {
          A(b, 2, le.length, "Base");
          if (b == 10 && me) {
            $ = new q(g);
            return we($, H + $.e + 1, R);
          }
          B = String(g);
          if (M = typeof g == "number") {
            if (g * 0 != 0) return Y($, B, M, b);
            $.s = 1 / g < 0 ? (B = B.slice(1), -1) : 1;
            if (q.DEBUG && B.replace(/^0\.0*|\./, "").length > 15) {
              throw Error(s + g);
            }
          } else {
            $.s = B.charCodeAt(0) === 45 ? (B = B.slice(1), -1) : 1;
          }
          y = le.slice(0, b);
          k = P = 0;
          for (C = B.length; P < C; P++) {
            if (y.indexOf(I = B.charAt(P)) < 0) {
              if (I == ".") {
                if (P > k) {
                  k = C;
                  continue;
                }
              } else if (!w) {
                if (B == B.toUpperCase() && (B = B.toLowerCase()) || B == B.toLowerCase() && (B = B.toUpperCase())) {
                  w = true;
                  P = -1;
                  k = 0;
                  continue;
                }
              }
              return Y($, String(g), M, b);
            }
          }
          M = false;
          B = S(B, b, 10, $.s);
          if ((k = B.indexOf(".")) > -1) B = B.replace(".", "");
          else k = B.length;
        }
        for (P = 0; B.charCodeAt(P) === 48; P++) ;
        for (C = B.length; B.charCodeAt(--C) === 48; ) ;
        if (B = B.slice(P, ++C)) {
          C -= P;
          if (M && q.DEBUG && C > 15 && (g > f || g !== i(g))) {
            throw Error(s + $.s * g);
          }
          if ((k = k - P - 1) > J) {
            $.c = $.e = null;
          } else if (k < z) {
            $.c = [$.e = 0];
          } else {
            $.e = k;
            $.c = [];
            P = (k + 1) % c;
            if (k < 0) P += c;
            if (P < C) {
              if (P) $.c.push(+B.slice(0, P));
              for (C -= c; P < C; ) {
                $.c.push(+B.slice(P, P += c));
              }
              P = c - (B = B.slice(P)).length;
            } else {
              P -= C;
            }
            for (; P--; B += "0") ;
            $.c.push(+B);
          }
        } else {
          $.c = [$.e = 0];
        }
      }
      q.clone = h;
      q.ROUND_UP = 0;
      q.ROUND_DOWN = 1;
      q.ROUND_CEIL = 2;
      q.ROUND_FLOOR = 3;
      q.ROUND_HALF_UP = 4;
      q.ROUND_HALF_DOWN = 5;
      q.ROUND_HALF_EVEN = 6;
      q.ROUND_HALF_CEIL = 7;
      q.ROUND_HALF_FLOOR = 8;
      q.EUCLID = 9;
      q.config = q.set = function(g) {
        var b, y;
        if (g != null) {
          if (typeof g == "object") {
            if (g.hasOwnProperty(b = "DECIMAL_PLACES")) {
              y = g[b];
              A(y, 0, d, b);
              H = y;
            }
            if (g.hasOwnProperty(b = "ROUNDING_MODE")) {
              y = g[b];
              A(y, 0, 8, b);
              R = y;
            }
            if (g.hasOwnProperty(b = "EXPONENTIAL_AT")) {
              y = g[b];
              if (y && y.pop) {
                A(y[0], -d, 0, b);
                A(y[1], 0, d, b);
                L = y[0];
                G = y[1];
              } else {
                A(y, -d, d, b);
                L = -(G = y < 0 ? -y : y);
              }
            }
            if (g.hasOwnProperty(b = "RANGE")) {
              y = g[b];
              if (y && y.pop) {
                A(y[0], -d, -1, b);
                A(y[1], 1, d, b);
                z = y[0];
                J = y[1];
              } else {
                A(y, -d, d, b);
                if (y) {
                  z = -(J = y < 0 ? -y : y);
                } else {
                  throw Error(a + b + " cannot be zero: " + y);
                }
              }
            }
            if (g.hasOwnProperty(b = "CRYPTO")) {
              y = g[b];
              if (y === !!y) {
                if (y) {
                  if (typeof crypto != "undefined" && crypto && (crypto.getRandomValues || crypto.randomBytes)) {
                    Z = y;
                  } else {
                    Z = !y;
                    throw Error(a + "crypto unavailable");
                  }
                } else {
                  Z = y;
                }
              } else {
                throw Error(a + b + " not true or false: " + y);
              }
            }
            if (g.hasOwnProperty(b = "MODULO_MODE")) {
              y = g[b];
              A(y, 0, 9, b);
              te = y;
            }
            if (g.hasOwnProperty(b = "POW_PRECISION")) {
              y = g[b];
              A(y, 0, d, b);
              X = y;
            }
            if (g.hasOwnProperty(b = "FORMAT")) {
              y = g[b];
              if (typeof y == "object") re = y;
              else throw Error(a + b + " not an object: " + y);
            }
            if (g.hasOwnProperty(b = "ALPHABET")) {
              y = g[b];
              if (typeof y == "string" && !/^.?$|[+\-.\s]|(.).*\1/.test(y)) {
                me = y.slice(0, 10) == "0123456789";
                le = y;
              } else {
                throw Error(a + b + " invalid: " + y);
              }
            }
          } else {
            throw Error(a + "Object expected: " + g);
          }
        }
        return {
          DECIMAL_PLACES: H,
          ROUNDING_MODE: R,
          EXPONENTIAL_AT: [L, G],
          RANGE: [z, J],
          CRYPTO: Z,
          MODULO_MODE: te,
          POW_PRECISION: X,
          FORMAT: re,
          ALPHABET: le
        };
      };
      q.isBigNumber = function(g) {
        if (!g || g._isBigNumber !== true) return false;
        if (!q.DEBUG) return true;
        var b, y, I = g.c, w = g.e, k = g.s;
        e: if ({}.toString.call(I) == "[object Array]") {
          if ((k === 1 || k === -1) && w >= -d && w <= d && w === i(w)) {
            if (I[0] === 0) {
              if (w === 0 && I.length === 1) return true;
              break e;
            }
            b = (w + 1) % c;
            if (b < 1) b += c;
            if (String(I[0]).length == b) {
              for (b = 0; b < I.length; b++) {
                y = I[b];
                if (y < 0 || y >= l || y !== i(y)) break e;
              }
              if (y !== 0) return true;
            }
          }
        } else if (I === null && w === null && (k === null || k === 1 || k === -1)) {
          return true;
        }
        throw Error(a + "Invalid BigNumber: " + g);
      };
      q.maximum = q.max = function() {
        return qe(arguments, -1);
      };
      q.minimum = q.min = function() {
        return qe(arguments, 1);
      };
      q.random = function() {
        var g = 9007199254740992;
        var b = Math.random() * g & 2097151 ? function() {
          return i(Math.random() * g);
        } : function() {
          return (Math.random() * 1073741824 | 0) * 8388608 + (Math.random() * 8388608 | 0);
        };
        return function(y) {
          var I, w, k, P, M, C = 0, B = [], $ = new q(O);
          if (y == null) y = H;
          else A(y, 0, d);
          P = o(y / c);
          if (Z) {
            if (crypto.getRandomValues) {
              I = crypto.getRandomValues(new Uint32Array(P *= 2));
              for (; C < P; ) {
                M = I[C] * 131072 + (I[C + 1] >>> 11);
                if (M >= 9e15) {
                  w = crypto.getRandomValues(new Uint32Array(2));
                  I[C] = w[0];
                  I[C + 1] = w[1];
                } else {
                  B.push(M % 1e14);
                  C += 2;
                }
              }
              C = P / 2;
            } else if (crypto.randomBytes) {
              I = crypto.randomBytes(P *= 7);
              for (; C < P; ) {
                M = (I[C] & 31) * 281474976710656 + I[C + 1] * 1099511627776 + I[C + 2] * 4294967296 + I[C + 3] * 16777216 + (I[C + 4] << 16) + (I[C + 5] << 8) + I[C + 6];
                if (M >= 9e15) {
                  crypto.randomBytes(7).copy(I, C);
                } else {
                  B.push(M % 1e14);
                  C += 7;
                }
              }
              C = P / 7;
            } else {
              Z = false;
              throw Error(a + "crypto unavailable");
            }
          }
          if (!Z) {
            for (; C < P; ) {
              M = b();
              if (M < 9e15) B[C++] = M % 1e14;
            }
          }
          P = B[--C];
          y %= c;
          if (P && y) {
            M = p[c - y];
            B[C] = i(P / M) * M;
          }
          for (; B[C] === 0; B.pop(), C--) ;
          if (C < 0) {
            B = [k = 0];
          } else {
            for (k = -1; B[0] === 0; B.splice(0, 1), k -= c) ;
            for (C = 1, M = B[0]; M >= 10; M /= 10, C++) ;
            if (C < c) k -= c - C;
          }
          $.e = k;
          $.c = B;
          return $;
        };
      }();
      q.sum = function() {
        var g = 1, b = arguments, y = new q(b[0]);
        for (; g < b.length; ) y = y.plus(b[g++]);
        return y;
      };
      S = /* @__PURE__ */ function() {
        var g = "0123456789";
        function b(y, I, w, k) {
          var P, M = [0], C, B = 0, $ = y.length;
          for (; B < $; ) {
            for (C = M.length; C--; M[C] *= I) ;
            M[0] += k.indexOf(y.charAt(B++));
            for (P = 0; P < M.length; P++) {
              if (M[P] > w - 1) {
                if (M[P + 1] == null) M[P + 1] = 0;
                M[P + 1] += M[P] / w | 0;
                M[P] %= w;
              }
            }
          }
          return M.reverse();
        }
        return function(y, I, w, k, P) {
          var M, C, B, $, j, se, ce, _e, Re = y.indexOf("."), Qe = H, xe = R;
          if (Re >= 0) {
            $ = X;
            X = 0;
            y = y.replace(".", "");
            _e = new q(I);
            se = _e.pow(y.length - Re);
            X = $;
            _e.c = b(
              F(m(se.c), se.e, "0"),
              10,
              w,
              g
            );
            _e.e = _e.c.length;
          }
          ce = b(y, I, w, P ? (M = le, g) : (M = g, le));
          B = $ = ce.length;
          for (; ce[--$] == 0; ce.pop()) ;
          if (!ce[0]) return M.charAt(0);
          if (Re < 0) {
            --B;
          } else {
            se.c = ce;
            se.e = B;
            se.s = k;
            se = v(se, _e, Qe, xe, w);
            ce = se.c;
            j = se.r;
            B = se.e;
          }
          C = B + Qe + 1;
          Re = ce[C];
          $ = w / 2;
          j = j || C < 0 || ce[C + 1] != null;
          j = xe < 4 ? (Re != null || j) && (xe == 0 || xe == (se.s < 0 ? 3 : 2)) : Re > $ || Re == $ && (xe == 4 || j || xe == 6 && ce[C - 1] & 1 || xe == (se.s < 0 ? 8 : 7));
          if (C < 1 || !ce[0]) {
            y = j ? F(M.charAt(1), -Qe, M.charAt(0)) : M.charAt(0);
          } else {
            ce.length = C;
            if (j) {
              for (--w; ++ce[--C] > w; ) {
                ce[C] = 0;
                if (!C) {
                  ++B;
                  ce = [1].concat(ce);
                }
              }
            }
            for ($ = ce.length; !ce[--$]; ) ;
            for (Re = 0, y = ""; Re <= $; y += M.charAt(ce[Re++])) ;
            y = F(y, B, M.charAt(0));
          }
          return y;
        };
      }();
      v = /* @__PURE__ */ function() {
        function g(I, w, k) {
          var P, M, C, B, $ = 0, j = I.length, se = w % u, ce = w / u | 0;
          for (I = I.slice(); j--; ) {
            C = I[j] % u;
            B = I[j] / u | 0;
            P = ce * C + B * se;
            M = se * C + P % u * u + $;
            $ = (M / k | 0) + (P / u | 0) + ce * B;
            I[j] = M % k;
          }
          if ($) I = [$].concat(I);
          return I;
        }
        function b(I, w, k, P) {
          var M, C;
          if (k != P) {
            C = k > P ? 1 : -1;
          } else {
            for (M = C = 0; M < k; M++) {
              if (I[M] != w[M]) {
                C = I[M] > w[M] ? 1 : -1;
                break;
              }
            }
          }
          return C;
        }
        function y(I, w, k, P) {
          var M = 0;
          for (; k--; ) {
            I[k] -= M;
            M = I[k] < w[k] ? 1 : 0;
            I[k] = M * P + I[k] - w[k];
          }
          for (; !I[0] && I.length > 1; I.splice(0, 1)) ;
        }
        return function(I, w, k, P, M) {
          var C, B, $, j, se, ce, _e, Re, Qe, xe, Se, _t, ir, Nn, vo, sn, ma, hr = I.s == w.s ? 1 : -1, Ut = I.c, We = w.c;
          if (!Ut || !Ut[0] || !We || !We[0]) {
            return new q(
              // Return NaN if either NaN, or both Infinity or 0.
              !I.s || !w.s || (Ut ? We && Ut[0] == We[0] : !We) ? NaN : (
                // Return ±0 if x is ±0 or y is ±Infinity, or return ±Infinity as y is ±0.
                Ut && Ut[0] == 0 || !We ? hr * 0 : hr / 0
              )
            );
          }
          Re = new q(hr);
          Qe = Re.c = [];
          B = I.e - w.e;
          hr = k + B + 1;
          if (!M) {
            M = l;
            B = _(I.e / c) - _(w.e / c);
            hr = hr / c | 0;
          }
          for ($ = 0; We[$] == (Ut[$] || 0); $++) ;
          if (We[$] > (Ut[$] || 0)) B--;
          if (hr < 0) {
            Qe.push(1);
            j = true;
          } else {
            Nn = Ut.length;
            sn = We.length;
            $ = 0;
            hr += 2;
            se = i(M / (We[0] + 1));
            if (se > 1) {
              We = g(We, se, M);
              Ut = g(Ut, se, M);
              sn = We.length;
              Nn = Ut.length;
            }
            ir = sn;
            xe = Ut.slice(0, sn);
            Se = xe.length;
            for (; Se < sn; xe[Se++] = 0) ;
            ma = We.slice();
            ma = [0].concat(ma);
            vo = We[0];
            if (We[1] >= M / 2) vo++;
            do {
              se = 0;
              C = b(We, xe, sn, Se);
              if (C < 0) {
                _t = xe[0];
                if (sn != Se) _t = _t * M + (xe[1] || 0);
                se = i(_t / vo);
                if (se > 1) {
                  if (se >= M) se = M - 1;
                  ce = g(We, se, M);
                  _e = ce.length;
                  Se = xe.length;
                  while (b(ce, xe, _e, Se) == 1) {
                    se--;
                    y(ce, sn < _e ? ma : We, _e, M);
                    _e = ce.length;
                    C = 1;
                  }
                } else {
                  if (se == 0) {
                    C = se = 1;
                  }
                  ce = We.slice();
                  _e = ce.length;
                }
                if (_e < Se) ce = [0].concat(ce);
                y(xe, ce, Se, M);
                Se = xe.length;
                if (C == -1) {
                  while (b(We, xe, sn, Se) < 1) {
                    se++;
                    y(xe, sn < Se ? ma : We, Se, M);
                    Se = xe.length;
                  }
                }
              } else if (C === 0) {
                se++;
                xe = [0];
              }
              Qe[$++] = se;
              if (xe[0]) {
                xe[Se++] = Ut[ir] || 0;
              } else {
                xe = [Ut[ir]];
                Se = 1;
              }
            } while ((ir++ < Nn || xe[0] != null) && hr--);
            j = xe[0] != null;
            if (!Qe[0]) Qe.splice(0, 1);
          }
          if (M == l) {
            for ($ = 1, hr = Qe[0]; hr >= 10; hr /= 10, $++) ;
            we(Re, k + (Re.e = $ + B * c - 1) + 1, P, j);
          } else {
            Re.e = B;
            Re.r = +j;
          }
          return Re;
        };
      }();
      function ye(g, b, y, I) {
        var w, k, P, M, C;
        if (y == null) y = R;
        else A(y, 0, 8);
        if (!g.c) return g.toString();
        w = g.c[0];
        P = g.e;
        if (b == null) {
          C = m(g.c);
          C = I == 1 || I == 2 && (P <= L || P >= G) ? N(C, P) : F(C, P, "0");
        } else {
          g = we(new q(g), b, y);
          k = g.e;
          C = m(g.c);
          M = C.length;
          if (I == 1 || I == 2 && (b <= k || k <= L)) {
            for (; M < b; C += "0", M++) ;
            C = N(C, k);
          } else {
            b -= P;
            C = F(C, k, "0");
            if (k + 1 > M) {
              if (--b > 0) for (C += "."; b--; C += "0") ;
            } else {
              b += k - M;
              if (b > 0) {
                if (k + 1 == M) C += ".";
                for (; b--; C += "0") ;
              }
            }
          }
        }
        return g.s < 0 && w ? "-" + C : C;
      }
      function qe(g, b) {
        var y, I, w = 1, k = new q(g[0]);
        for (; w < g.length; w++) {
          I = new q(g[w]);
          if (!I.s || (y = x(k, I)) === b || y === 0 && k.s === b) {
            k = I;
          }
        }
        return k;
      }
      function ze(g, b, y) {
        var I = 1, w = b.length;
        for (; !b[--w]; b.pop()) ;
        for (w = b[0]; w >= 10; w /= 10, I++) ;
        if ((y = I + y * c - 1) > J) {
          g.c = g.e = null;
        } else if (y < z) {
          g.c = [g.e = 0];
        } else {
          g.e = y;
          g.c = b;
        }
        return g;
      }
      Y = /* @__PURE__ */ function() {
        var g = /^(-?)0([xbo])(?=\w[\w.]*$)/i, b = /^([^.]+)\.$/, y = /^\.([^.]+)$/, I = /^-?(Infinity|NaN)$/, w = /^\s*\+(?=[\w.])|^\s+|\s+$/g;
        return function(k, P, M, C) {
          var B, $ = M ? P : P.replace(w, "");
          if (I.test($)) {
            k.s = isNaN($) ? null : $ < 0 ? -1 : 1;
          } else {
            if (!M) {
              $ = $.replace(g, function(j, se, ce) {
                B = (ce = ce.toLowerCase()) == "x" ? 16 : ce == "b" ? 2 : 8;
                return !C || C == B ? se : j;
              });
              if (C) {
                B = C;
                $ = $.replace(b, "$1").replace(y, "0.$1");
              }
              if (P != $) return new q($, B);
            }
            if (q.DEBUG) {
              throw Error(a + "Not a" + (C ? " base " + C : "") + " number: " + P);
            }
            k.s = null;
          }
          k.c = k.e = null;
        };
      }();
      function we(g, b, y, I) {
        var w, k, P, M, C, B, $, j = g.c, se = p;
        if (j) {
          e: {
            for (w = 1, M = j[0]; M >= 10; M /= 10, w++) ;
            k = b - w;
            if (k < 0) {
              k += c;
              P = b;
              C = j[B = 0];
              $ = i(C / se[w - P - 1] % 10);
            } else {
              B = o((k + 1) / c);
              if (B >= j.length) {
                if (I) {
                  for (; j.length <= B; j.push(0)) ;
                  C = $ = 0;
                  w = 1;
                  k %= c;
                  P = k - c + 1;
                } else {
                  break e;
                }
              } else {
                C = M = j[B];
                for (w = 1; M >= 10; M /= 10, w++) ;
                k %= c;
                P = k - c + w;
                $ = P < 0 ? 0 : i(C / se[w - P - 1] % 10);
              }
            }
            I = I || b < 0 || // Are there any non-zero digits after the rounding digit?
            // The expression  n % pows10[d - j - 1]  returns all digits of n to the right
            // of the digit at j, e.g. if n is 908714 and j is 2, the expression gives 714.
            j[B + 1] != null || (P < 0 ? C : C % se[w - P - 1]);
            I = y < 4 ? ($ || I) && (y == 0 || y == (g.s < 0 ? 3 : 2)) : $ > 5 || $ == 5 && (y == 4 || I || y == 6 && // Check whether the digit to the left of the rounding digit is odd.
            (k > 0 ? P > 0 ? C / se[w - P] : 0 : j[B - 1]) % 10 & 1 || y == (g.s < 0 ? 8 : 7));
            if (b < 1 || !j[0]) {
              j.length = 0;
              if (I) {
                b -= g.e + 1;
                j[0] = se[(c - b % c) % c];
                g.e = -b || 0;
              } else {
                j[0] = g.e = 0;
              }
              return g;
            }
            if (k == 0) {
              j.length = B;
              M = 1;
              B--;
            } else {
              j.length = B + 1;
              M = se[c - k];
              j[B] = P > 0 ? i(C / se[w - P] % se[P]) * M : 0;
            }
            if (I) {
              for (; ; ) {
                if (B == 0) {
                  for (k = 1, P = j[0]; P >= 10; P /= 10, k++) ;
                  P = j[0] += M;
                  for (M = 1; P >= 10; P /= 10, M++) ;
                  if (k != M) {
                    g.e++;
                    if (j[0] == l) j[0] = 1;
                  }
                  break;
                } else {
                  j[B] += M;
                  if (j[B] != l) break;
                  j[B--] = 0;
                  M = 1;
                }
              }
            }
            for (k = j.length; j[--k] === 0; j.pop()) ;
          }
          if (g.e > J) {
            g.c = g.e = null;
          } else if (g.e < z) {
            g.c = [g.e = 0];
          }
        }
        return g;
      }
      function K(g) {
        var b, y = g.e;
        if (y === null) return g.toString();
        b = m(g.c);
        b = y <= L || y >= G ? N(b, y) : F(b, y, "0");
        return g.s < 0 ? "-" + b : b;
      }
      E.absoluteValue = E.abs = function() {
        var g = new q(this);
        if (g.s < 0) g.s = 1;
        return g;
      };
      E.comparedTo = function(g, b) {
        return x(this, new q(g, b));
      };
      E.decimalPlaces = E.dp = function(g, b) {
        var y, I, w, k = this;
        if (g != null) {
          A(g, 0, d);
          if (b == null) b = R;
          else A(b, 0, 8);
          return we(new q(k), g + k.e + 1, b);
        }
        if (!(y = k.c)) return null;
        I = ((w = y.length - 1) - _(this.e / c)) * c;
        if (w = y[w]) for (; w % 10 == 0; w /= 10, I--) ;
        if (I < 0) I = 0;
        return I;
      };
      E.dividedBy = E.div = function(g, b) {
        return v(this, new q(g, b), H, R);
      };
      E.dividedToIntegerBy = E.idiv = function(g, b) {
        return v(this, new q(g, b), 0, 1);
      };
      E.exponentiatedBy = E.pow = function(g, b) {
        var y, I, w, k, P, M, C, B, $, j = this;
        g = new q(g);
        if (g.c && !g.isInteger()) {
          throw Error(a + "Exponent not an integer: " + K(g));
        }
        if (b != null) b = new q(b);
        M = g.e > 14;
        if (!j.c || !j.c[0] || j.c[0] == 1 && !j.e && j.c.length == 1 || !g.c || !g.c[0]) {
          $ = new q(Math.pow(+K(j), M ? g.s * (2 - D(g)) : +K(g)));
          return b ? $.mod(b) : $;
        }
        C = g.s < 0;
        if (b) {
          if (b.c ? !b.c[0] : !b.s) return new q(NaN);
          I = !C && j.isInteger() && b.isInteger();
          if (I) j = j.mod(b);
        } else if (g.e > 9 && (j.e > 0 || j.e < -1 || (j.e == 0 ? j.c[0] > 1 || M && j.c[1] >= 24e7 : j.c[0] < 8e13 || M && j.c[0] <= 9999975e7))) {
          k = j.s < 0 && D(g) ? -0 : 0;
          if (j.e > -1) k = 1 / k;
          return new q(C ? 1 / k : k);
        } else if (X) {
          k = o(X / c + 2);
        }
        if (M) {
          y = new q(0.5);
          if (C) g.s = 1;
          B = D(g);
        } else {
          w = Math.abs(+K(g));
          B = w % 2;
        }
        $ = new q(O);
        for (; ; ) {
          if (B) {
            $ = $.times(j);
            if (!$.c) break;
            if (k) {
              if ($.c.length > k) $.c.length = k;
            } else if (I) {
              $ = $.mod(b);
            }
          }
          if (w) {
            w = i(w / 2);
            if (w === 0) break;
            B = w % 2;
          } else {
            g = g.times(y);
            we(g, g.e + 1, 1);
            if (g.e > 14) {
              B = D(g);
            } else {
              w = +K(g);
              if (w === 0) break;
              B = w % 2;
            }
          }
          j = j.times(j);
          if (k) {
            if (j.c && j.c.length > k) j.c.length = k;
          } else if (I) {
            j = j.mod(b);
          }
        }
        if (I) return $;
        if (C) $ = O.div($);
        return b ? $.mod(b) : k ? we($, X, R, P) : $;
      };
      E.integerValue = function(g) {
        var b = new q(this);
        if (g == null) g = R;
        else A(g, 0, 8);
        return we(b, b.e + 1, g);
      };
      E.isEqualTo = E.eq = function(g, b) {
        return x(this, new q(g, b)) === 0;
      };
      E.isFinite = function() {
        return !!this.c;
      };
      E.isGreaterThan = E.gt = function(g, b) {
        return x(this, new q(g, b)) > 0;
      };
      E.isGreaterThanOrEqualTo = E.gte = function(g, b) {
        return (b = x(this, new q(g, b))) === 1 || b === 0;
      };
      E.isInteger = function() {
        return !!this.c && _(this.e / c) > this.c.length - 2;
      };
      E.isLessThan = E.lt = function(g, b) {
        return x(this, new q(g, b)) < 0;
      };
      E.isLessThanOrEqualTo = E.lte = function(g, b) {
        return (b = x(this, new q(g, b))) === -1 || b === 0;
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
      E.minus = function(g, b) {
        var y, I, w, k, P = this, M = P.s;
        g = new q(g, b);
        b = g.s;
        if (!M || !b) return new q(NaN);
        if (M != b) {
          g.s = -b;
          return P.plus(g);
        }
        var C = P.e / c, B = g.e / c, $ = P.c, j = g.c;
        if (!C || !B) {
          if (!$ || !j) return $ ? (g.s = -b, g) : new q(j ? P : NaN);
          if (!$[0] || !j[0]) {
            return j[0] ? (g.s = -b, g) : new q($[0] ? P : (
              // IEEE 754 (2008) 6.3: n - n = -0 when rounding to -Infinity
              R == 3 ? -0 : 0
            ));
          }
        }
        C = _(C);
        B = _(B);
        $ = $.slice();
        if (M = C - B) {
          if (k = M < 0) {
            M = -M;
            w = $;
          } else {
            B = C;
            w = j;
          }
          w.reverse();
          for (b = M; b--; w.push(0)) ;
          w.reverse();
        } else {
          I = (k = (M = $.length) < (b = j.length)) ? M : b;
          for (M = b = 0; b < I; b++) {
            if ($[b] != j[b]) {
              k = $[b] < j[b];
              break;
            }
          }
        }
        if (k) {
          w = $;
          $ = j;
          j = w;
          g.s = -g.s;
        }
        b = (I = j.length) - (y = $.length);
        if (b > 0) for (; b--; $[y++] = 0) ;
        b = l - 1;
        for (; I > M; ) {
          if ($[--I] < j[I]) {
            for (y = I; y && !$[--y]; $[y] = b) ;
            --$[y];
            $[I] += l;
          }
          $[I] -= j[I];
        }
        for (; $[0] == 0; $.splice(0, 1), --B) ;
        if (!$[0]) {
          g.s = R == 3 ? -1 : 1;
          g.c = [g.e = 0];
          return g;
        }
        return ze(g, $, B);
      };
      E.modulo = E.mod = function(g, b) {
        var y, I, w = this;
        g = new q(g, b);
        if (!w.c || !g.s || g.c && !g.c[0]) {
          return new q(NaN);
        } else if (!g.c || w.c && !w.c[0]) {
          return new q(w);
        }
        if (te == 9) {
          I = g.s;
          g.s = 1;
          y = v(w, g, 0, 3);
          g.s = I;
          y.s *= I;
        } else {
          y = v(w, g, 0, te);
        }
        g = w.minus(y.times(g));
        if (!g.c[0] && te == 1) g.s = w.s;
        return g;
      };
      E.multipliedBy = E.times = function(g, b) {
        var y, I, w, k, P, M, C, B, $, j, se, ce, _e, Re, Qe, xe = this, Se = xe.c, _t = (g = new q(g, b)).c;
        if (!Se || !_t || !Se[0] || !_t[0]) {
          if (!xe.s || !g.s || Se && !Se[0] && !_t || _t && !_t[0] && !Se) {
            g.c = g.e = g.s = null;
          } else {
            g.s *= xe.s;
            if (!Se || !_t) {
              g.c = g.e = null;
            } else {
              g.c = [0];
              g.e = 0;
            }
          }
          return g;
        }
        I = _(xe.e / c) + _(g.e / c);
        g.s *= xe.s;
        C = Se.length;
        j = _t.length;
        if (C < j) {
          _e = Se;
          Se = _t;
          _t = _e;
          w = C;
          C = j;
          j = w;
        }
        for (w = C + j, _e = []; w--; _e.push(0)) ;
        Re = l;
        Qe = u;
        for (w = j; --w >= 0; ) {
          y = 0;
          se = _t[w] % Qe;
          ce = _t[w] / Qe | 0;
          for (P = C, k = w + P; k > w; ) {
            B = Se[--P] % Qe;
            $ = Se[P] / Qe | 0;
            M = ce * B + $ * se;
            B = se * B + M % Qe * Qe + _e[k] + y;
            y = (B / Re | 0) + (M / Qe | 0) + ce * $;
            _e[k--] = B % Re;
          }
          _e[k] = y;
        }
        if (y) {
          ++I;
        } else {
          _e.splice(0, 1);
        }
        return ze(g, _e, I);
      };
      E.negated = function() {
        var g = new q(this);
        g.s = -g.s || null;
        return g;
      };
      E.plus = function(g, b) {
        var y, I = this, w = I.s;
        g = new q(g, b);
        b = g.s;
        if (!w || !b) return new q(NaN);
        if (w != b) {
          g.s = -b;
          return I.minus(g);
        }
        var k = I.e / c, P = g.e / c, M = I.c, C = g.c;
        if (!k || !P) {
          if (!M || !C) return new q(w / 0);
          if (!M[0] || !C[0]) return C[0] ? g : new q(M[0] ? I : w * 0);
        }
        k = _(k);
        P = _(P);
        M = M.slice();
        if (w = k - P) {
          if (w > 0) {
            P = k;
            y = C;
          } else {
            w = -w;
            y = M;
          }
          y.reverse();
          for (; w--; y.push(0)) ;
          y.reverse();
        }
        w = M.length;
        b = C.length;
        if (w - b < 0) {
          y = C;
          C = M;
          M = y;
          b = w;
        }
        for (w = 0; b; ) {
          w = (M[--b] = M[b] + C[b] + w) / l | 0;
          M[b] = l === M[b] ? 0 : M[b] % l;
        }
        if (w) {
          M = [w].concat(M);
          ++P;
        }
        return ze(g, M, P);
      };
      E.precision = E.sd = function(g, b) {
        var y, I, w, k = this;
        if (g != null && g !== !!g) {
          A(g, 1, d);
          if (b == null) b = R;
          else A(b, 0, 8);
          return we(new q(k), g, b);
        }
        if (!(y = k.c)) return null;
        w = y.length - 1;
        I = w * c + 1;
        if (w = y[w]) {
          for (; w % 10 == 0; w /= 10, I--) ;
          for (w = y[0]; w >= 10; w /= 10, I++) ;
        }
        if (g && k.e + 1 > I) I = k.e + 1;
        return I;
      };
      E.shiftedBy = function(g) {
        A(g, -f, f);
        return this.times("1e" + g);
      };
      E.squareRoot = E.sqrt = function() {
        var g, b, y, I, w, k = this, P = k.c, M = k.s, C = k.e, B = H + 4, $ = new q("0.5");
        if (M !== 1 || !P || !P[0]) {
          return new q(!M || M < 0 && (!P || P[0]) ? NaN : P ? k : 1 / 0);
        }
        M = Math.sqrt(+K(k));
        if (M == 0 || M == 1 / 0) {
          b = m(P);
          if ((b.length + C) % 2 == 0) b += "0";
          M = Math.sqrt(+b);
          C = _((C + 1) / 2) - (C < 0 || C % 2);
          if (M == 1 / 0) {
            b = "5e" + C;
          } else {
            b = M.toExponential();
            b = b.slice(0, b.indexOf("e") + 1) + C;
          }
          y = new q(b);
        } else {
          y = new q(M + "");
        }
        if (y.c[0]) {
          C = y.e;
          M = C + B;
          if (M < 3) M = 0;
          for (; ; ) {
            w = y;
            y = $.times(w.plus(v(k, w, B, 1)));
            if (m(w.c).slice(0, M) === (b = m(y.c)).slice(0, M)) {
              if (y.e < C) --M;
              b = b.slice(M - 3, M + 1);
              if (b == "9999" || !I && b == "4999") {
                if (!I) {
                  we(w, w.e + H + 2, 0);
                  if (w.times(w).eq(k)) {
                    y = w;
                    break;
                  }
                }
                B += 4;
                M += 4;
                I = 1;
              } else {
                if (!+b || !+b.slice(1) && b.charAt(0) == "5") {
                  we(y, y.e + H + 2, 1);
                  g = !y.times(y).eq(k);
                }
                break;
              }
            }
          }
        }
        return we(y, y.e + H + 1, R, g);
      };
      E.toExponential = function(g, b) {
        if (g != null) {
          A(g, 0, d);
          g++;
        }
        return ye(this, g, b, 1);
      };
      E.toFixed = function(g, b) {
        if (g != null) {
          A(g, 0, d);
          g = g + this.e + 1;
        }
        return ye(this, g, b);
      };
      E.toFormat = function(g, b, y) {
        var I, w = this;
        if (y == null) {
          if (g != null && b && typeof b == "object") {
            y = b;
            b = null;
          } else if (g && typeof g == "object") {
            y = g;
            g = b = null;
          } else {
            y = re;
          }
        } else if (typeof y != "object") {
          throw Error(a + "Argument not an object: " + y);
        }
        I = w.toFixed(g, b);
        if (w.c) {
          var k, P = I.split("."), M = +y.groupSize, C = +y.secondaryGroupSize, B = y.groupSeparator || "", $ = P[0], j = P[1], se = w.s < 0, ce = se ? $.slice(1) : $, _e = ce.length;
          if (C) {
            k = M;
            M = C;
            C = k;
            _e -= k;
          }
          if (M > 0 && _e > 0) {
            k = _e % M || M;
            $ = ce.substr(0, k);
            for (; k < _e; k += M) $ += B + ce.substr(k, M);
            if (C > 0) $ += B + ce.slice(k);
            if (se) $ = "-" + $;
          }
          I = j ? $ + (y.decimalSeparator || "") + ((C = +y.fractionGroupSize) ? j.replace(
            new RegExp("\\d{" + C + "}\\B", "g"),
            "$&" + (y.fractionGroupSeparator || "")
          ) : j) : $;
        }
        return (y.prefix || "") + I + (y.suffix || "");
      };
      E.toFraction = function(g) {
        var b, y, I, w, k, P, M, C, B, $, j, se, ce = this, _e = ce.c;
        if (g != null) {
          M = new q(g);
          if (!M.isInteger() && (M.c || M.s !== 1) || M.lt(O)) {
            throw Error(a + "Argument " + (M.isInteger() ? "out of range: " : "not an integer: ") + K(M));
          }
        }
        if (!_e) return new q(ce);
        b = new q(O);
        B = y = new q(O);
        I = C = new q(O);
        se = m(_e);
        k = b.e = se.length - ce.e - 1;
        b.c[0] = p[(P = k % c) < 0 ? c + P : P];
        g = !g || M.comparedTo(b) > 0 ? k > 0 ? b : B : M;
        P = J;
        J = 1 / 0;
        M = new q(se);
        C.c[0] = 0;
        for (; ; ) {
          $ = v(M, b, 0, 1);
          w = y.plus($.times(I));
          if (w.comparedTo(g) == 1) break;
          y = I;
          I = w;
          B = C.plus($.times(w = B));
          C = w;
          b = M.minus($.times(w = b));
          M = w;
        }
        w = v(g.minus(y), I, 0, 1);
        C = C.plus(w.times(B));
        y = y.plus(w.times(I));
        C.s = B.s = ce.s;
        k = k * 2;
        j = v(B, I, k, R).minus(ce).abs().comparedTo(
          v(C, y, k, R).minus(ce).abs()
        ) < 1 ? [B, I] : [C, y];
        J = P;
        return j;
      };
      E.toNumber = function() {
        return +K(this);
      };
      E.toPrecision = function(g, b) {
        if (g != null) A(g, 1, d);
        return ye(this, g, b, 2);
      };
      E.toString = function(g) {
        var b, y = this, I = y.s, w = y.e;
        if (w === null) {
          if (I) {
            b = "Infinity";
            if (I < 0) b = "-" + b;
          } else {
            b = "NaN";
          }
        } else {
          if (g == null) {
            b = w <= L || w >= G ? N(m(y.c), w) : F(m(y.c), w, "0");
          } else if (g === 10 && me) {
            y = we(new q(y), H + w + 1, R);
            b = F(m(y.c), y.e, "0");
          } else {
            A(g, 2, le.length, "Base");
            b = S(F(m(y.c), w, "0"), 10, g, I, true);
          }
          if (I < 0 && y.c[0]) b = "-" + b;
        }
        return b;
      };
      E.valueOf = E.toJSON = function() {
        return K(this);
      };
      E._isBigNumber = true;
      if (T != null) q.set(T);
      return q;
    }
    function _(T) {
      var v = T | 0;
      return T > 0 || T === v ? v : v - 1;
    }
    function m(T) {
      var v, S, Y = 1, E = T.length, O = T[0] + "";
      for (; Y < E; ) {
        v = T[Y++] + "";
        S = c - v.length;
        for (; S--; v = "0" + v) ;
        O += v;
      }
      for (E = O.length; O.charCodeAt(--E) === 48; ) ;
      return O.slice(0, E + 1 || 1);
    }
    function x(T, v) {
      var S, Y, E = T.c, O = v.c, H = T.s, R = v.s, L = T.e, G = v.e;
      if (!H || !R) return null;
      S = E && !E[0];
      Y = O && !O[0];
      if (S || Y) return S ? Y ? 0 : -R : H;
      if (H != R) return H;
      S = H < 0;
      Y = L == G;
      if (!E || !O) return Y ? 0 : !E ^ S ? 1 : -1;
      if (!Y) return L > G ^ S ? 1 : -1;
      R = (L = E.length) < (G = O.length) ? L : G;
      for (H = 0; H < R; H++) if (E[H] != O[H]) return E[H] > O[H] ^ S ? 1 : -1;
      return L == G ? 0 : L > G ^ S ? 1 : -1;
    }
    function A(T, v, S, Y) {
      if (T < v || T > S || T !== i(T)) {
        throw Error(a + (Y || "Argument") + (typeof T == "number" ? T < v || T > S ? " out of range: " : " not an integer: " : " not a primitive number: ") + String(T));
      }
    }
    function D(T) {
      var v = T.c.length - 1;
      return _(T.e / c) == v && T.c[v] % 2 != 0;
    }
    function N(T, v) {
      return (T.length > 1 ? T.charAt(0) + "." + T.slice(1) : T) + (v < 0 ? "e" : "e+") + v;
    }
    function F(T, v, S) {
      var Y, E;
      if (v < 0) {
        for (E = S + "."; ++v; E += S) ;
        T = E + T;
      } else {
        Y = T.length;
        if (++v > Y) {
          for (E = S, v -= Y; --v; E += S) ;
          T += E;
        } else if (v < Y) {
          T = T.slice(0, v) + "." + T.slice(v);
        }
      }
      return T;
    }
    r = h();
    r["default"] = r.BigNumber = r;
    if (e.exports) {
      e.exports = r;
    } else {
      if (!t) {
        t = typeof self != "undefined" && self ? self : window;
      }
      t.BigNumber = r;
    }
  })(mv);
})(zm);
var Wm = zm.exports;
var Hr = Nf();
var Pv = Ef();
var Rv = Af;
var $v = Wm;
var Dt = {
  trillion: Math.pow(10, 12),
  billion: Math.pow(10, 9),
  million: Math.pow(10, 6),
  thousand: Math.pow(10, 3)
};
var wa = {
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
var { binarySuffixes: Zm, decimalSuffixes: ol } = Hr.currentBytes();
var Yf = {
  general: { scale: 1024, suffixes: ol, marker: "bd" },
  binary: { scale: 1024, suffixes: Zm, marker: "b" },
  decimal: { scale: 1e3, suffixes: ol, marker: "d" }
};
function Bv(e, t = {}, r) {
  if (typeof t === "string") {
    t = Rv.parseFormat(t);
  }
  let n = Pv.validateFormat(t);
  if (!n) {
    return "ERROR: invalid format";
  }
  let o = t.prefix || "";
  let i = t.postfix || "";
  let a = Lv(e, t, r);
  a = i1(a, o);
  a = a1(a, i);
  return a;
}
function Lv(e, t, r) {
  switch (t.output) {
    case "currency": {
      t = Ei(t, Hr.currentCurrencyDefaultFormat());
      return Zv(e, t, Hr);
    }
    case "percent": {
      t = Ei(t, Hr.currentPercentageDefaultFormat());
      return Wv(e, t, Hr, r);
    }
    case "byte":
      t = Ei(t, Hr.currentByteDefaultFormat());
      return Gv(e, t, Hr, r);
    case "time":
      t = Ei(t, Hr.currentTimeDefaultFormat());
      return zv(e);
    case "ordinal":
      t = Ei(t, Hr.currentOrdinalDefaultFormat());
      return qv(e, t, Hr);
    case "number":
    default:
      return Ea({
        instance: e,
        providedFormat: t,
        numbro: r
      });
  }
}
function Vv(e) {
  let t = Yf.decimal;
  return al(e._value, t.suffixes, t.scale).suffix;
}
function Hv(e) {
  let t = Yf.binary;
  return al(e._value, t.suffixes, t.scale).suffix;
}
function Uv(e) {
  let t = Yf.general;
  return al(e._value, t.suffixes, t.scale).suffix;
}
function al(e, t, r) {
  let n = t[0];
  let o = Math.abs(e);
  if (o >= r) {
    for (let i = 1; i < t.length; ++i) {
      let a = Math.pow(r, i);
      let s = Math.pow(r, i + 1);
      if (o >= a && o < s) {
        n = t[i];
        e = e / a;
        break;
      }
    }
    if (n === t[0]) {
      e = e / Math.pow(r, t.length - 1);
      n = t[t.length - 1];
    }
  }
  return { value: e, suffix: n };
}
function Gv(e, t, r, n) {
  let o = t.base || "binary";
  let i = Object.assign({}, wa, t);
  const { binarySuffixes: a, decimalSuffixes: s } = r.currentBytes();
  const l = {
    general: { scale: 1024, suffixes: s || ol, marker: "bd" },
    binary: { scale: 1024, suffixes: a || Zm, marker: "b" },
    decimal: { scale: 1e3, suffixes: s || ol, marker: "d" }
  };
  let c = l[o];
  let { value: f, suffix: p } = al(e._value, c.suffixes, c.scale);
  let u = Ea({
    instance: n(f),
    providedFormat: t,
    state: r,
    defaults: r.currentByteDefaultFormat()
  });
  return `${u}${i.spaceSeparated ? " " : ""}${p}`;
}
function qv(e, t, r) {
  let n = r.currentOrdinal();
  let o = Object.assign({}, wa, t);
  let i = Ea({
    instance: e,
    providedFormat: t,
    state: r
  });
  let a = n(e._value);
  return `${i}${o.spaceSeparated ? " " : ""}${a}`;
}
function zv(e) {
  let t = Math.floor(e._value / 60 / 60);
  let r = Math.floor((e._value - t * 60 * 60) / 60);
  let n = Math.round(e._value - t * 60 * 60 - r * 60);
  return `${t}:${r < 10 ? "0" : ""}${r}:${n < 10 ? "0" : ""}${n}`;
}
function Wv(e, t, r, n) {
  let o = t.prefixSymbol;
  let i = Ea({
    instance: n(e._value * 100),
    providedFormat: t,
    state: r
  });
  let a = Object.assign({}, wa, t);
  if (o) {
    return `%${a.spaceSeparated ? " " : ""}${i}`;
  }
  return `${i}${a.spaceSeparated ? " " : ""}%`;
}
function Zv(e, t, r) {
  const n = r.currentCurrency();
  let o = Object.assign({}, t);
  let i = Object.assign({}, wa, o);
  let a = void 0;
  let s = "";
  let l = !!i.totalLength || !!i.forceAverage || i.average;
  let c = o.currencyPosition || n.position;
  let f = o.currencySymbol || n.symbol;
  const p = i.spaceSeparatedCurrency !== void 0 ? i.spaceSeparatedCurrency : i.spaceSeparated;
  if (o.lowPrecision === void 0) {
    o.lowPrecision = false;
  }
  if (p) {
    s = " ";
  }
  if (c === "infix") {
    a = s + f + s;
  }
  let u = Ea({
    instance: e,
    providedFormat: o,
    state: r,
    decimalSeparator: a
  });
  if (c === "prefix") {
    if (e._value < 0 && i.negative === "sign") {
      u = `-${s}${f}${u.slice(1)}`;
    } else if (e._value > 0 && i.forceSign) {
      u = `+${s}${f}${u.slice(1)}`;
    } else {
      u = f + s + u;
    }
  }
  if (!c || c === "postfix") {
    s = !i.spaceSeparatedAbbreviation && l ? "" : s;
    u = u + s + f;
  }
  return u;
}
function jv({ value: e, forceAverage: t, lowPrecision: r = true, abbreviations: n, spaceSeparated: o = false, totalLength: i = 0, roundingFunction: a = Math.round }) {
  let s = "";
  let l = Math.abs(e);
  let c = -1;
  if (t && n[t] && Dt[t]) {
    s = n[t];
    e = e / Dt[t];
  } else {
    if (l >= Dt.trillion || r && a(l / Dt.trillion) === 1) {
      s = n.trillion;
      e = e / Dt.trillion;
    } else if (l < Dt.trillion && l >= Dt.billion || r && a(l / Dt.billion) === 1) {
      s = n.billion;
      e = e / Dt.billion;
    } else if (l < Dt.billion && l >= Dt.million || r && a(l / Dt.million) === 1) {
      s = n.million;
      e = e / Dt.million;
    } else if (l < Dt.million && l >= Dt.thousand || r && a(l / Dt.thousand) === 1) {
      s = n.thousand;
      e = e / Dt.thousand;
    }
  }
  let f = o ? " " : "";
  if (s) {
    s = f + s;
  }
  if (i) {
    let p = e < 0;
    let u = e.toString().split(".")[0];
    let d = p ? u.length - 1 : u.length;
    c = Math.max(i - d, 0);
  }
  return { value: e, abbreviation: s, mantissaPrecision: c };
}
function Xv({ value: e, characteristicPrecision: t }) {
  let [r, n] = e.toExponential().split("e");
  let o = +r;
  if (!t) {
    return {
      value: o,
      abbreviation: `e${n}`
    };
  }
  let i = 1;
  if (i < t) {
    o = o * Math.pow(10, t - i);
    n = +n - (t - i);
    n = n >= 0 ? `+${n}` : n;
  }
  return {
    value: o,
    abbreviation: `e${n}`
  };
}
function nl(e) {
  let t = "";
  for (let r = 0; r < e; r++) {
    t += "0";
  }
  return t;
}
function Jv(e, t) {
  let r = e.toString();
  let [n, o] = r.split("e");
  let [i, a = ""] = n.split(".");
  if (+o > 0) {
    r = i + a + nl(o - a.length);
  } else {
    let s = ".";
    if (+i < 0) {
      s = `-0${s}`;
    } else {
      s = `0${s}`;
    }
    let l = (nl(-o - 1) + Math.abs(i) + a).substr(0, t);
    if (l.length < t) {
      l += nl(t - l.length);
    }
    r = s + l;
  }
  if (+o > 0 && t > 0) {
    r += `.${nl(t)}`;
  }
  return r;
}
function Kv(e, t, r = Math.round) {
  if (e.toString().indexOf("e") !== -1) {
    return Jv(e, t);
  }
  const n = new $v(r(+`${e}e+${t}`) / Math.pow(10, t));
  return n.toFixed(t);
}
function Qv(e, t, r, n, o, i) {
  if (n === -1) {
    return e;
  }
  let a = Kv(t, n, i);
  let [s, l = ""] = a.toString().split(".");
  if (l.match(/^0+$/) && (r || o)) {
    return s;
  }
  let c = l.match(/0+$/);
  if (o && c) {
    return `${s}.${l.toString().slice(0, c.index)}`;
  }
  return a.toString();
}
function e1(e, t, r, n) {
  let o = e;
  let [i, a] = o.toString().split(".");
  if (i.match(/^-?0$/) && r) {
    if (!a) {
      return i.replace("0", "");
    }
    return `${i.replace("0", "")}.${a}`;
  }
  const s = t < 0 && i.indexOf("-") === 0;
  if (s) {
    i = i.slice(1);
    o = o.slice(1);
  }
  if (i.length < n) {
    let l = n - i.length;
    for (let c = 0; c < l; c++) {
      o = `0${o}`;
    }
  }
  if (s) {
    o = `-${o}`;
  }
  return o.toString();
}
function t1(e, t) {
  let r = [];
  let n = 0;
  for (let o = e; o > 0; o--) {
    if (n === t) {
      r.unshift(o);
      n = 0;
    }
    n++;
  }
  return r;
}
function r1(e, t, r, n, o) {
  let i = n.currentDelimiters();
  let a = i.thousands;
  o = o || i.decimal;
  let s = i.thousandsSize || 3;
  let l = e.toString();
  let c = l.split(".")[0];
  let f = l.split(".")[1];
  const p = t < 0 && c.indexOf("-") === 0;
  if (r) {
    if (p) {
      c = c.slice(1);
    }
    let u = t1(c.length, s);
    u.forEach((d, h) => {
      c = c.slice(0, d + h) + a + c.slice(d + h);
    });
    if (p) {
      c = `-${c}`;
    }
  }
  if (!f) {
    l = c;
  } else {
    l = c + o + f;
  }
  return l;
}
function n1(e, t) {
  return e + t;
}
function o1(e, t, r) {
  if (t === 0) {
    return e;
  }
  if (+e === 0) {
    return e.replace("-", "");
  }
  if (t > 0) {
    return `+${e}`;
  }
  if (r === "sign") {
    return e;
  }
  return `(${e.replace("-", "")})`;
}
function i1(e, t) {
  return t + e;
}
function a1(e, t) {
  return e + t;
}
function Ea({ instance: e, providedFormat: t, state: r = Hr, decimalSeparator: n, defaults: o = r.currentDefaults() }) {
  let i = e._value;
  if (i === 0 && r.hasZeroFormat()) {
    return r.getZeroFormat();
  }
  if (!isFinite(i)) {
    return i.toString();
  }
  let a = Object.assign({}, wa, o, t);
  let s = a.totalLength;
  let l = s ? 0 : a.characteristic;
  let c = a.optionalCharacteristic;
  let f = a.forceAverage;
  let p = a.lowPrecision;
  let u = !!s || !!f || a.average;
  let d = s ? -1 : u && t.mantissa === void 0 ? 0 : a.mantissa;
  let h = s ? false : t.optionalMantissa === void 0 ? d === -1 : a.optionalMantissa;
  let _ = a.trimMantissa;
  let m = a.thousandSeparated;
  let x = a.spaceSeparated;
  let A = a.negative;
  let D = a.forceSign;
  let N = a.exponential;
  let F = a.roundingFunction;
  let T = "";
  if (u) {
    let S = jv({
      value: i,
      forceAverage: f,
      lowPrecision: p,
      abbreviations: r.currentAbbreviations(),
      spaceSeparated: x,
      roundingFunction: F,
      totalLength: s
    });
    i = S.value;
    T += S.abbreviation;
    if (s) {
      d = S.mantissaPrecision;
    }
  }
  if (N) {
    let S = Xv({
      value: i,
      characteristicPrecision: l
    });
    i = S.value;
    T = S.abbreviation + T;
  }
  let v = Qv(i.toString(), i, h, d, _, F);
  v = e1(v, i, c, l);
  v = r1(v, i, m, r, n);
  if (u || N) {
    v = n1(v, T);
  }
  if (D || i < 0) {
    v = o1(v, i, A);
  }
  return v;
}
function Ei(e, t) {
  if (!e) {
    return t;
  }
  let r = Object.keys(e);
  if (r.length === 1 && r[0] === "output") {
    return t;
  }
  return e;
}
var s1 = (e) => ({
  format: (...t) => Bv(...t, e),
  getByteUnit: (...t) => Uv(...t, e),
  getBinaryByteUnit: (...t) => Hv(...t, e),
  getDecimalByteUnit: (...t) => Vv(...t, e),
  formatOrDefault: Ei
});
var Cn = Wm;
function l1(e, t, r) {
  let n = new Cn(e._value);
  let o = t;
  if (r.isNumbro(t)) {
    o = t._value;
  }
  o = new Cn(o);
  e._value = n.plus(o).toNumber();
  return e;
}
function jm(e, t, r) {
  let n = new Cn(e._value);
  let o = t;
  if (r.isNumbro(t)) {
    o = t._value;
  }
  o = new Cn(o);
  e._value = n.minus(o).toNumber();
  return e;
}
function c1(e, t, r) {
  let n = new Cn(e._value);
  let o = t;
  if (r.isNumbro(t)) {
    o = t._value;
  }
  o = new Cn(o);
  e._value = n.times(o).toNumber();
  return e;
}
function f1(e, t, r) {
  let n = new Cn(e._value);
  let o = t;
  if (r.isNumbro(t)) {
    o = t._value;
  }
  o = new Cn(o);
  e._value = n.dividedBy(o).toNumber();
  return e;
}
function u1(e, t, r) {
  let n = t;
  if (r.isNumbro(t)) {
    n = t._value;
  }
  e._value = n;
  return e;
}
function p1(e, t, r) {
  let n = r(e._value);
  jm(n, t, r);
  return Math.abs(n._value);
}
var d1 = (e) => ({
  add: (t, r) => l1(t, r, e),
  subtract: (t, r) => jm(t, r, e),
  multiply: (t, r) => c1(t, r, e),
  divide: (t, r) => f1(t, r, e),
  set: (t, r) => u1(t, r, e),
  difference: (t, r) => p1(t, r, e),
  BigNumber: Cn
});
var m1 = "2.5.0";
var mn = Nf();
var h1 = Ef();
var g1 = Fv(Ze);
var _1 = qm();
var No = s1(Ze);
var Yo = d1(Ze);
var y1 = Af;
var il = class {
  constructor(t) {
    this._value = t;
  }
  clone() {
    return Ze(this._value);
  }
  format(t = {}) {
    return No.format(this, t);
  }
  formatCurrency(t) {
    if (typeof t === "string") {
      t = y1.parseFormat(t);
    }
    t = No.formatOrDefault(t, mn.currentCurrencyDefaultFormat());
    t.output = "currency";
    return No.format(this, t);
  }
  formatTime(t = {}) {
    t.output = "time";
    return No.format(this, t);
  }
  binaryByteUnits() {
    return No.getBinaryByteUnit(this);
  }
  decimalByteUnits() {
    return No.getDecimalByteUnit(this);
  }
  byteUnits() {
    return No.getByteUnit(this);
  }
  difference(t) {
    return Yo.difference(this, t);
  }
  add(t) {
    return Yo.add(this, t);
  }
  subtract(t) {
    return Yo.subtract(this, t);
  }
  multiply(t) {
    return Yo.multiply(this, t);
  }
  divide(t) {
    return Yo.divide(this, t);
  }
  set(t) {
    return Yo.set(this, Xm(t));
  }
  value() {
    return this._value;
  }
  valueOf() {
    return this._value;
  }
};
function Xm(e) {
  let t = e;
  if (Ze.isNumbro(e)) {
    t = e._value;
  } else if (typeof e === "string") {
    t = Ze.unformat(e);
  } else if (isNaN(e)) {
    t = NaN;
  }
  return t;
}
function Ze(e) {
  return new il(Xm(e));
}
Ze.version = m1;
Ze.isNumbro = function(e) {
  return e instanceof il;
};
Ze.language = mn.currentLanguage;
Ze.registerLanguage = mn.registerLanguage;
Ze.setLanguage = mn.setLanguage;
Ze.languages = mn.languages;
Ze.languageData = mn.languageData;
Ze.zeroFormat = mn.setZeroFormat;
Ze.defaultFormat = mn.currentDefaults;
Ze.setDefaults = mn.setDefaults;
Ze.defaultCurrencyFormat = mn.currentCurrencyDefaultFormat;
Ze.validate = h1.validate;
Ze.loadLanguagesInNode = g1.loadLanguagesInNode;
Ze.unformat = _1.unformat;
Ze.BigNumber = Yo.BigNumber;
var x1 = Ze;
var kf = /* @__PURE__ */ hv(x1);

// src/charts/utils/number.utils.ts
var b1 = {
  none: 1,
  thousand: 1e3,
  million: 1e6,
  billion: 1e9,
  trillion: 1e12
};
var Aa = {
  none: "",
  thousand: "K",
  million: "M",
  billion: "B",
  trillion: "T"
};
var Na = (e) => {
  const t = Math.abs(e);
  if (t < 1e4) {
    return "none";
  } else if (t < 1e6) {
    return "thousand";
  } else if (t < 1e9) {
    return "million";
  } else if (t < 1e12) {
    return "billion";
  } else {
    return "trillion";
  }
};
var Ya = (e, t) => {
  return kf(e).divide(b1[t]).value();
};
var Ai = (e, t) => {
  const r = {
    optionalMantissa: true,
    thousandSeparated: t.commas ?? false
  };
  if (!ga(t.decimals) && !Vp(t.decimals) && t.decimals >= 0) {
    r["mantissa"] = t.decimals;
    r["optionalMantissa"] = false;
  } else if (t.maxDecimals) {
    r["mantissa"] = t.maxDecimals;
    r["trimMantissa"] = true;
  } else {
    r["mantissa"] = t.maxMantissa;
    r["optionalMantissa"] = false;
  }
  const n = kf(e).format(r);
  return n;
};
var AF = (e, t) => {
  const r = !t.displayFullNumbers ? Na(e) : "none";
  const n = Ya(e, r);
  const o = Ai(n, {
    decimals: t.decimals,
    commas: t.commas ?? true,
    maxMantissa: 6,
    maxDecimals: t.maxDecimals ?? 6
  });
  const i = Aa[r];
  const a = t.forceLowerCaseUnits ? i.toLowerCase() : i;
  return `${o}${a}`;
};

// src/fonts/BWHaasText-55Roman.woff2
var Jm = "data:font/woff2;base64,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";

// src/fonts/Bloomberg-PropU_N.woff2
var Km = "data:font/woff2;base64,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";

// src/charts/utils/text.utils.ts
var ka = false;
var sl = null;
var Qm = async () => {
  if (ka) return;
  if (sl) return sl;
  sl = (async () => {
    try {
      if (typeof document === "undefined" || !("fonts" in document)) {
        ka = true;
        return;
      }
      const e = [
        new FontFace("BWHaasText", `url(${Jm})`),
        new FontFace("Bloomberg-PropU_N", `url(${Km})`)
      ];
      await Promise.all(
        e.map(async (t) => {
          try {
            const r = await t.load();
            document.fonts.add(r);
            return r;
          } catch (r) {
            console.error(
              `[text-utils] Failed to load font: ${t.family}`,
              r
            );
            throw r;
          }
        })
      );
      ka = true;
    } catch (e) {
      console.error("[text-utils] Failed to load local fonts:", e);
      ka = true;
    }
  })();
  return sl;
};
if (typeof window !== "undefined") {
  Qm();
}
var ll = ({
  text: e,
  width: t,
  fontFamily: r,
  fontSize: n,
  overrideLineHeight: o = Zs,
  trimSpace: i = false
}) => {
  if (!ka && typeof document !== "undefined") {
    Qm();
  }
  return Gs(e, t, r, `${n}px`, i).length * o;
};
var PF = () => {
  if (Gs.cache.clear) {
    Gs.cache.clear();
  }
};

// src/charts/line-bar/utils.ts
var S1 = (e) => {
  if (!e?.fields?.length) {
    return void 0;
  }
  const t = Oe(e);
  return t.length > 0 ? t.reduce(
    (r, n) => n.index < r.index ? n : r,
    t[0]
  ) : void 0;
};
var et = (e) => {
  if (e?.type !== "barline" || !e || !e.fields) {
    return {};
  }
  const t = e.barline?.barlineStyle ?? "lineStackedBar";
  const r = e.barline?.seriesInfo ?? [];
  const n = S1(e);
  const o = Oe(e).map(
    (c) => c.id
  );
  let i = [];
  if (r?.length > 0) {
    i = r.filter((c) => c.type === "bar").map((c) => c.seriesId);
    if (t === "lineStackedBar" || t === "lineGroupedBar") {
      o.forEach((c) => {
        if (!r.find((f) => f.seriesId === c) && c !== n?.id) {
          i.push(c);
        }
      });
    }
  } else if (n) {
    const c = o.filter(
      (f) => f !== n.id
    );
    i = c;
  }
  if (i.length === 0) {
    return {
      isStacked: false,
      hasBar: false,
      hasLine: o.length > 0
    };
  }
  const a = t === "lineStackedBar" && i.length > 1;
  const s = pn(e)?.type;
  const l = Ni.includes(s ?? "");
  if (i.length === o.length) {
    return {
      isStacked: a,
      hasBar: true,
      hasLine: false,
      barIds: i,
      isTime: l
    };
  }
  return {
    isStacked: a,
    hasBar: true,
    hasLine: o.length > i.length,
    barIds: i,
    tooltipOverride: true,
    isTime: l
  };
};

// src/charts/_common/Tooltip/tooltip.utils.ts
function M1(e, t) {
  const r = Object.keys(e).reduce(
    (n, o) => {
      if (t.includes(o) && isFinite(e[o]) && typeof e[o] === "number") {
        return [...n, e[o]];
      } else {
        return n;
      }
    },
    []
  );
  return Math.max(...r);
}
var D1 = (e, t) => {
  return t.reduce((r, n) => {
    const o = e[n];
    if (rt(o) && o > 0) {
      return r + o;
    }
    return r;
  }, 0);
};
function qF({
  tooltipIndex: e,
  seriesDatas: t,
  scales: r,
  chartData: n,
  numericFieldIds: o,
  topTransformAmount: i = 0,
  rightTransformAmount: a = 0
}) {
  if (!e || !t) {
    return null;
  }
  let s = void 0;
  let l = void 0;
  const c = r.primaryScale?.scale;
  const f = "secondaryScales" in r ? r.secondaryScales[0]?.scale : r.secondaryScale?.scale;
  const p = et(n);
  const u = In(n);
  if ("subBandIndex" in e && e.subBandIndex !== void 0 && c.isBand) {
    s = c.scale(
      c.formatValue(e.value),
      e.subBandIndex,
      u.length
    );
    if (f?.type === "linear" && e.subBandIndex !== void 0) {
      if (p.hasBar && !p.isStacked) {
        l = E1(
          e.subBandIndex,
          n,
          t,
          f
        );
      }
      if (l === void 0) {
        const d = n.fields[e.subBandIndex + 1].id;
        l = f.scale(t[d]);
      }
    }
  } else {
    s = c.scale(
      c.formatValue(e.value)
    );
    const d = M1(t, o);
    if (typeof d !== "number") {
      return null;
    }
    const h = D1(
      t,
      o
    );
    const _ = vi.includes(n.type) ? h : d;
    if (f?.type === "linear") {
      l = f.scale(_);
    }
  }
  if (s !== void 0 && l !== void 0 && isFinite(s) && isFinite(l)) {
    if (of.includes(n.type)) {
      return {
        x: l + a,
        y: s + i
      };
    } else {
      return {
        x: s + a,
        y: l + i
      };
    }
  }
  return null;
}
var w1 = ({
  chartData: e,
  isPrimary: t,
  seriesId: r
}) => {
  const n = t ? "primary" : "secondary";
  const o = e.axis?.[n];
  if (!["stackedPanel", "multiples", "dualAxis"].includes(e.type)) {
    return o;
  }
  let i = o;
  if (e.type === "multiples") {
    if (!e.multiples || !r) {
      return o;
    }
    const a = e.multiples.options?.find(
      (s) => s.fieldIds.includes(r)
    );
    if (a && "axisProperties" in a) {
      i = a.axisProperties;
    }
  } else if (e.type === "stackedPanel") {
    if (!e.stackedPanels || !r) {
      return o;
    }
    const a = e.stackedPanels.options?.find(
      (s) => s.fieldIds.includes(r)
    );
    if (a && "axisProperties" in a) {
      i = a.axisProperties;
    }
  } else if (e.type === "dualAxis") {
    if (!e.dualAxis || !r) {
      return o;
    }
    if (e.dualAxis.left.fieldIds.includes(r)) {
      i = e.dualAxis.left.axisProperties;
    } else if (e.dualAxis.right?.fieldIds.includes(r)) {
      i = e.dualAxis.right.axisProperties;
    }
  }
  return i;
};
var Ca = ({
  v: e,
  chartData: t,
  isPrimary: r = false,
  maxPrefixPostfixLength: n = 4,
  percentage: o = 100,
  seriesId: i
}) => {
  const a = Oe(t);
  const s = w1({ chartData: t, isPrimary: r, seriesId: i });
  const l = t.design?.tooltips?.displayFullNumbers ?? false;
  const c = eo(t);
  const f = Rm(t);
  const p = t.design?.tooltips?.tooltipDecimals ?? "auto";
  const u = t?.axis?.secondary?.forceLowerCaseUnits ?? false;
  const d = s?.decimals ?? null;
  const h = Math.max(
    ...a.map((A) => A.stats?.maxMantissa ?? 0)
  );
  const _ = s?.preventNumericalFormatting ?? false;
  const m = s?.label?.prefix ?? "";
  const x = s?.label?.postfix ?? "";
  if (e !== null && !isNaN(e) && rt(e)) {
    const A = !l ? Na(e) : "none";
    const D = m.length <= n ? m : "";
    const N = x.length <= n ? x : "";
    let F;
    if (p === "auto") {
      if (d !== void 0 && d !== null) {
        F = d;
      } else {
        F = A !== "none" ? 2 : Math.min(h, 2);
      }
    } else {
      F = +p;
    }
    const T = Aa[A];
    const v = `${Ai(Ya(e, A), {
      decimals: F,
      maxDecimals: 6,
      maxMantissa: 6,
      commas: !_
    })}${u ? T.toLowerCase() : T}`;
    if (c && o !== null && !isNaN(o) && rt(o)) {
      const S = `${Ai(o, {
        decimals: F,
        maxDecimals: 6,
        maxMantissa: 6,
        commas: !_
      })}`;
      return f ? `${D}${S}% (${v})${N}` : `${D}${S}%${N}`;
    }
    return `${D}${v}${N}`;
  } else {
    return "\u2014";
  }
};
function E1(e, t, r, n) {
  const o = t.fields.length - 1;
  for (let i = 0; i < o; i++) {
    const a = (e + i) % o;
    const s = t.fields[a + 1].id;
    const l = r[s];
    if (l !== null && l !== void 0 && isFinite(l)) {
      return n.scale(l);
    }
  }
  return void 0;
}
var cl = (e) => {
  const t = Object.entries(e).filter(
    ([, n]) => typeof n === "number" && n !== null && !isNaN(n) && n > 0
  );
  const r = t.reduce(
    (n, [, o]) => n + o,
    0
  );
  if (r === 0 || t.length === 0) {
    return Object.fromEntries(Object.keys(e).map((n) => [n, 0]));
  }
  return Object.fromEntries(
    Object.entries(e).map(([n, o]) => [
      n,
      typeof o === "number" && o !== null && !isNaN(o) && o > 0 ? o / r * 100 : 0
    ])
  );
};
function Cf(e, t, r, n) {
  let o = false;
  if (r.type === "stackedPanel") {
    const a = r.stackedPanels?.options?.flatMap(
      (s) => s.fieldIds
    );
    if (!a?.includes(t)) {
      o = true;
    }
  }
  if (r.type === "dualAxis") {
    const a = [
      ...r?.dualAxis?.left.fieldIds ?? [],
      ...r?.dualAxis?.right?.fieldIds ?? []
    ];
    return a.includes(t);
  }
  const i = e && e[t] !== null && !isNaN(e[t]) && rt(e[t]) || !n;
  return i && !o;
}

// ../utils/dist/isNil-C9uIlMoV.js
var WF = " 2000";
var ZF = " 2001";
var jF = 2e3;
var XF = 2002;
var If = [
  // The most common list
  "YYYY-MM-DD",
  "M/D/YY",
  "YYYY-MM-DD HH:mm:ssZ",
  "YYYY-MM-DD HH:mm:ss[Z]",
  // Formats with day of week, full month name, and 4-digit year
  "dddd, MMMM D, YYYY",
  "dddd, D MMMM YYYY",
  // Formats with day of week, abbreviated month name, and 4-digit year
  "dddd, MMM D, YYYY",
  "dddd, D MMM YYYY",
  // Formats with full month name and 4-digit year
  "MMMM D, YYYY",
  "MMMM DD, YYYY",
  "D MMMM YYYY",
  "DD MMMM YYYY",
  "YYYY MMMM D",
  "YYYY MMMM DD",
  // Formats with abbreviated month name and 4-digit year
  "MMM D, YYYY",
  "MMM DD, YYYY",
  "D MMM YYYY",
  "DD MMM YYYY",
  "YYYY MMM D",
  "YYYY MMM DD",
  "D-MMM-YY",
  "DD-MMM-YY",
  // Full numeric formats with 4-digit year
  "YYYY/MM/DD",
  "YYYY.MM.DD",
  "MM-DD-YYYY",
  "MM/DD/YYYY",
  // Partial numeric formats with 4-digit year
  "YYYY-MM-D",
  "YYYY/MM/D",
  "YYYY.MM.D",
  "YYYY-M-DD",
  "YYYY/M/DD",
  "YYYY.M.DD",
  "YYYY-M-D",
  "YYYY/M/D",
  "YYYY.M.D",
  "MM-D-YYYY",
  "MM/D/YYYY",
  "M-DD-YYYY",
  "M/DD/YYYY",
  "M-D-YYYY",
  "M/D/YYYY",
  // Formats with 2-digit year
  "YY-MM-DD",
  "YY/MM/DD",
  "YY.MM.DD",
  "MM-DD-YY",
  "MM/DD/YY",
  // Partial formats with 2-digit year
  "YY-MM-D",
  "YY/MM/D",
  "YY.MM.D",
  "YY-M-DD",
  "YY/M/DD",
  "YY.M.DD",
  "YY-M-D",
  "YY/M/D",
  "YY.M.D",
  "MM-D-YY",
  "MM/D/YY",
  "M-DD-YY",
  "M/DD/YY",
  "M-D-YY",
  // Localized formats
  "D MMMM YYYY",
  // French
  "D. MMMM YYYY",
  // German
  "YYYY\u5E74MM\u6708DD\u65E5"
  // Japanese
];
var eh = " ";
var th = [
  // Formats with minutes and timezone
  "HH:mm ZZ",
  "HH:mm Z",
  "H:mm ZZ",
  "H:mm Z",
  // Basic time formats
  "HH:mm",
  "H:mm",
  "hh:mm A",
  "hh:mm a",
  "h:mm A",
  "h:mm a",
  // Most detailed formats
  "HH:mm:ss.SSS ZZ",
  "HH:mm:ss.SSS Z",
  "HH:mm:ss.SSSZ",
  "HH:mm:ss.SSS[Z]",
  "hh:mm:ss.SSS A",
  "hh:mm:ss.SSS a",
  "HH:mm:ss.SSS",
  // Formats with seconds and timezone
  "HH:mm:ss ZZ [GMT]",
  "HH:mm:ss Z [GMT]",
  "hh:mm:ss A Z [GMT]",
  "hh:mm:ss a ZZ [GMT]",
  "HH:mm:ss ZZ",
  "HH:mm:ss Z",
  "HH:mm:ssZZ",
  "HH:mm:ssZ",
  "HH:mm:ss[Z]",
  // Formats with seconds
  "HH:mm:ss",
  "hh:mm:ss A",
  "hh:mm:ss a",
  // Special format
  "HH\u6642mm\u5206ss\u79D2"
];
var rh = ["MMM", "MMMM", "M", "MM"];
var nh = [
  "MM/DD YYYY",
  "M/D YYYY",
  "M/DD YYYY",
  "MM/D YYYY",
  "MM-DD YYYY",
  "M-D YYYY",
  "M-DD YYYY",
  "MM-D YYYY",
  "MMM-DD YYYY",
  "MMM-D YYYY",
  "MMM DD YYYY",
  "MMM D YYYY",
  "MMMM DD YYYY",
  "MMMM D YYYY",
  "MM.DD YYYY",
  "M.D YYYY",
  "M.DD YYYY",
  "MM.D YYYY",
  "DD MMM YYYY",
  "D MMM YYYY",
  "DD MMMM YYYY",
  "D MMMM YYYY",
  "DD-MMM YYYY",
  "D-MMM YYYY",
  "DD/MM YYYY",
  "D/M YYYY",
  "D/MM YYYY",
  "DD/M YYYY"
];
var oh = [
  "YYYY-MM DD",
  "YYYY/MM DD",
  "YYYY.MM DD",
  "YYYY-M DD",
  "YYYY/M DD",
  "YYYY.M DD",
  "MM/YYYY DD",
  "M/YYYY DD",
  "MM-YYYY DD",
  "M-YYYY DD",
  "YY-MM DD",
  "YY/MM DD",
  "YY.MM DD",
  "YY-M DD",
  "YY/M DD",
  "YY.M DD",
  "MM/YY DD",
  "M/YY DD",
  "MM-YY DD",
  "M-YY DD",
  "MM.YY DD",
  "M.YY DD",
  "YYYY MMM DD",
  "YYYY-MMM DD",
  "YY MMM DD",
  "YY-MMM DD",
  "YYYY MMMM DD",
  "MMMM YYYY DD",
  "MMM-YY DD",
  "MMM YY DD"
];
var ko = {
  MIN_YEAR: 1600,
  MAX_YEAR: 3e3,
  MIN_MONTH: 0,
  MAX_MONTH: 11,
  MIN_DAY: 1,
  MAX_DAY: 31
};
var JF = {
  1: "03-31",
  2: "06-30",
  3: "09-30",
  4: "12-31"
};
var mt = {
  quarter_year: /Q[1234]\s\d{4}/,
  quarter_year_alt: /[1234]Q\s\d{4}/,
  year_quarter: /\d{4}\sQ[1234]/,
  year_quarter_alt: /\d{4}\s[1234]Q/,
  year_quarter_nospace: /\d{4}Q[1234]/,
  quarter_year_nospace: /Q[1234]\d{4}/,
  quarter_year_nospace2: /[1234]Q\d{4}/,
  quarter_dash_year: /Q[1234]-\d{4}/,
  year_dash_nospace: /\d{4}-Q[1234]/,
  quarter_two_digit_year: /Q[1234]\s\d{2}/,
  two_digit_year_quarter: /\d{2}\sQ[1234]/,
  quarter_two_digit_year_alt: /[1234]Q\s\d{2}/,
  quarter_two_digit_year_nospace: /[1234]Q\d{2}/,
  quarter_dash_two_digit_year: /Q[1234]-\d{2}/,
  quarter_apostrophe_two_digit_year: /Q([1234])\s?[’'](\d{2})/
};
var ih = /^(1[6-9]\d{2}|2\d{3}|30[0-9]{2})$/;
var ah = /^(18[0-9]{2}|19[0-9]{2}|20[0-9]{2}|2100)$/;
var sh = /^['’](\d{2})$/;
var lh = /\bFY(?:\s(\d{4})|\s?[’']\s?(\d{2}))\b/i;
var ch = {
  quarter: mt
};
var fh = "hours";
var uh = "days";
var ph = "weeks";
var dh = "months";
var mh = "years";
var hh = "decade";
var gh = "multidecade";
var _h = "century";
function to(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
function fl(e) {
  return e == null;
}

// ../utils/dist/date.es.js
var A1 = Object.defineProperty;
var N1 = (e, t, r) => t in e ? A1(e, t, { enumerable: true, configurable: true, writable: true, value: r }) : e[t] = r;
var sr = (e, t, r) => N1(e, typeof t != "symbol" ? t + "" : t, r);
var On = (e, t, r) => {
  var n, o;
  const i = (n = e == null ? void 0 : e.stats) == null ? void 0 : n.suffix;
  if (!i || !e || !t)
    return "";
  if (r) {
    const a = (o = e.data) == null ? void 0 : o.indexOf(t);
    if (a !== void 0 && a >= 0 && i.unordered) {
      const s = Object.entries(i.unordered).sort(
        (c, f) => c[1] - f[1]
      );
      let l = 0;
      for (const [c, f] of s) {
        if (a >= l && a <= f)
          return c;
        l = f;
      }
    }
  } else
    return i.ordered ?? "";
  return "";
};
var Of = /* @__PURE__ */ new Date();
var Ff = /* @__PURE__ */ new Date();
function Uf(e, t, r, n) {
  function o(i) {
    return e(i = arguments.length === 0 ? /* @__PURE__ */ new Date() : /* @__PURE__ */ new Date(+i)), i;
  }
  return o.floor = (i) => (e(i = /* @__PURE__ */ new Date(+i)), i), o.ceil = (i) => (e(i = new Date(i - 1)), t(i, 1), e(i), i), o.round = (i) => {
    const a = o(i), s = o.ceil(i);
    return i - a < s - i ? a : s;
  }, o.offset = (i, a) => (t(i = /* @__PURE__ */ new Date(+i), a == null ? 1 : Math.floor(a)), i), o.range = (i, a, s) => {
    const l = [];
    if (i = o.ceil(i), s = s == null ? 1 : Math.floor(s), !(i < a) || !(s > 0)) return l;
    let c;
    do
      l.push(c = /* @__PURE__ */ new Date(+i)), t(i, s), e(i);
    while (c < i && i < a);
    return l;
  }, o.filter = (i) => Uf((a) => {
    if (a >= a) for (; e(a), !i(a); ) a.setTime(a - 1);
  }, (a, s) => {
    if (a >= a)
      if (s < 0) for (; ++s <= 0; )
        for (; t(a, -1), !i(a); )
          ;
      else for (; --s >= 0; )
        for (; t(a, 1), !i(a); )
          ;
  }), r && (o.count = (i, a) => (Of.setTime(+i), Ff.setTime(+a), e(Of), e(Ff), Math.floor(r(Of, Ff))), o.every = (i) => (i = Math.floor(i), !isFinite(i) || !(i > 0) ? null : i > 1 ? o.filter(n ? (a) => n(a) % i === 0 : (a) => o.count(0, a) % i === 0) : o)), o;
}
var Fn = Uf(
  //floor
  (e) => {
    const t = e.getMonth(), r = Math.floor(t / 3) * 3;
    e.setMonth(r, 1), e.setHours(0, 0, 0, 0);
  },
  //offset
  (e, t) => {
    e.setMonth(e.getMonth() + t * 3);
  },
  //count
  (e, t) => {
    const r = e.getFullYear(), n = Math.floor(e.getMonth() / 3), o = t.getFullYear(), i = Math.floor(t.getMonth() / 3);
    return (o - r) * 4 + (i - n);
  },
  //field
  (e) => Math.floor(e.getMonth() / 3)
);
var ul = Uf(
  //floor
  (e) => {
    const t = e.getMonth(), r = e.getFullYear();
    e.setMonth(9, 1), e.setHours(0, 0, 0, 0), t < 9 && e.setFullYear(r - 1);
  },
  //offset
  (e, t) => {
    e.setFullYear(e.getFullYear() + t);
  },
  //count
  (e, t) => {
    const r = e.getFullYear();
    return t.getFullYear() - r;
  },
  //field
  (e) => Math.floor((e.getMonth() + 9 / 3) % 12)
);
var Pf = { exports: {} };
var Y1 = Pf.exports;
var yh;
function k1() {
  return yh || (yh = 1, function(e, t) {
    (function(r, n) {
      e.exports = n();
    })(Y1, function() {
      var r = 1e3, n = 6e4, o = 36e5, i = "millisecond", a = "second", s = "minute", l = "hour", c = "day", f = "week", p = "month", u = "quarter", d = "year", h = "date", _ = "Invalid Date", m = /^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/, x = /\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g, A = { name: "en", weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"), months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"), ordinal: function(L) {
        var G = ["th", "st", "nd", "rd"], z = L % 100;
        return "[" + L + (G[(z - 20) % 10] || G[z] || G[0]) + "]";
      } }, D = function(L, G, z) {
        var J = String(L);
        return !J || J.length >= G ? L : "" + Array(G + 1 - J.length).join(z) + L;
      }, N = { s: D, z: function(L) {
        var G = -L.utcOffset(), z = Math.abs(G), J = Math.floor(z / 60), Z = z % 60;
        return (G <= 0 ? "+" : "-") + D(J, 2, "0") + ":" + D(Z, 2, "0");
      }, m: function L(G, z) {
        if (G.date() < z.date()) return -L(z, G);
        var J = 12 * (z.year() - G.year()) + (z.month() - G.month()), Z = G.clone().add(J, p), te = z - Z < 0, X = G.clone().add(J + (te ? -1 : 1), p);
        return +(-(J + (z - Z) / (te ? Z - X : X - Z)) || 0);
      }, a: function(L) {
        return L < 0 ? Math.ceil(L) || 0 : Math.floor(L);
      }, p: function(L) {
        return { M: p, y: d, w: f, d: c, D: h, h: l, m: s, s: a, ms: i, Q: u }[L] || String(L || "").toLowerCase().replace(/s$/, "");
      }, u: function(L) {
        return L === void 0;
      } }, F = "en", T = {};
      T[F] = A;
      var v = "$isDayjsObject", S = function(L) {
        return L instanceof H || !(!L || !L[v]);
      }, Y = function L(G, z, J) {
        var Z;
        if (!G) return F;
        if (typeof G == "string") {
          var te = G.toLowerCase();
          T[te] && (Z = te), z && (T[te] = z, Z = te);
          var X = G.split("-");
          if (!Z && X.length > 1) return L(X[0]);
        } else {
          var re = G.name;
          T[re] = G, Z = re;
        }
        return !J && Z && (F = Z), Z || !J && F;
      }, E = function(L, G) {
        if (S(L)) return L.clone();
        var z = typeof G == "object" ? G : {};
        return z.date = L, z.args = arguments, new H(z);
      }, O = N;
      O.l = Y, O.i = S, O.w = function(L, G) {
        return E(L, { locale: G.$L, utc: G.$u, x: G.$x, $offset: G.$offset });
      };
      var H = function() {
        function L(z) {
          this.$L = Y(z.locale, null, true), this.parse(z), this.$x = this.$x || z.x || {}, this[v] = true;
        }
        var G = L.prototype;
        return G.parse = function(z) {
          this.$d = function(J) {
            var Z = J.date, te = J.utc;
            if (Z === null) return /* @__PURE__ */ new Date(NaN);
            if (O.u(Z)) return /* @__PURE__ */ new Date();
            if (Z instanceof Date) return new Date(Z);
            if (typeof Z == "string" && !/Z$/i.test(Z)) {
              var X = Z.match(m);
              if (X) {
                var re = X[2] - 1 || 0, le = (X[7] || "0").substring(0, 3);
                return te ? new Date(Date.UTC(X[1], re, X[3] || 1, X[4] || 0, X[5] || 0, X[6] || 0, le)) : new Date(X[1], re, X[3] || 1, X[4] || 0, X[5] || 0, X[6] || 0, le);
              }
            }
            return new Date(Z);
          }(z), this.init();
        }, G.init = function() {
          var z = this.$d;
          this.$y = z.getFullYear(), this.$M = z.getMonth(), this.$D = z.getDate(), this.$W = z.getDay(), this.$H = z.getHours(), this.$m = z.getMinutes(), this.$s = z.getSeconds(), this.$ms = z.getMilliseconds();
        }, G.$utils = function() {
          return O;
        }, G.isValid = function() {
          return this.$d.toString() !== _;
        }, G.isSame = function(z, J) {
          var Z = E(z);
          return this.startOf(J) <= Z && Z <= this.endOf(J);
        }, G.isAfter = function(z, J) {
          return E(z) < this.startOf(J);
        }, G.isBefore = function(z, J) {
          return this.endOf(J) < E(z);
        }, G.$g = function(z, J, Z) {
          return O.u(z) ? this[J] : this.set(Z, z);
        }, G.unix = function() {
          return Math.floor(this.valueOf() / 1e3);
        }, G.valueOf = function() {
          return this.$d.getTime();
        }, G.startOf = function(z, J) {
          var Z = this, te = !!O.u(J) || J, X = O.p(z), re = function(K, g) {
            var b = O.w(Z.$u ? Date.UTC(Z.$y, g, K) : new Date(Z.$y, g, K), Z);
            return te ? b : b.endOf(c);
          }, le = function(K, g) {
            return O.w(Z.toDate()[K].apply(Z.toDate("s"), (te ? [0, 0, 0, 0] : [23, 59, 59, 999]).slice(g)), Z);
          }, me = this.$W, q = this.$M, ye = this.$D, qe = "set" + (this.$u ? "UTC" : "");
          switch (X) {
            case d:
              return te ? re(1, 0) : re(31, 11);
            case p:
              return te ? re(1, q) : re(0, q + 1);
            case f:
              var ze = this.$locale().weekStart || 0, we = (me < ze ? me + 7 : me) - ze;
              return re(te ? ye - we : ye + (6 - we), q);
            case c:
            case h:
              return le(qe + "Hours", 0);
            case l:
              return le(qe + "Minutes", 1);
            case s:
              return le(qe + "Seconds", 2);
            case a:
              return le(qe + "Milliseconds", 3);
            default:
              return this.clone();
          }
        }, G.endOf = function(z) {
          return this.startOf(z, false);
        }, G.$set = function(z, J) {
          var Z, te = O.p(z), X = "set" + (this.$u ? "UTC" : ""), re = (Z = {}, Z[c] = X + "Date", Z[h] = X + "Date", Z[p] = X + "Month", Z[d] = X + "FullYear", Z[l] = X + "Hours", Z[s] = X + "Minutes", Z[a] = X + "Seconds", Z[i] = X + "Milliseconds", Z)[te], le = te === c ? this.$D + (J - this.$W) : J;
          if (te === p || te === d) {
            var me = this.clone().set(h, 1);
            me.$d[re](le), me.init(), this.$d = me.set(h, Math.min(this.$D, me.daysInMonth())).$d;
          } else re && this.$d[re](le);
          return this.init(), this;
        }, G.set = function(z, J) {
          return this.clone().$set(z, J);
        }, G.get = function(z) {
          return this[O.p(z)]();
        }, G.add = function(z, J) {
          var Z, te = this;
          z = Number(z);
          var X = O.p(J), re = function(q) {
            var ye = E(te);
            return O.w(ye.date(ye.date() + Math.round(q * z)), te);
          };
          if (X === p) return this.set(p, this.$M + z);
          if (X === d) return this.set(d, this.$y + z);
          if (X === c) return re(1);
          if (X === f) return re(7);
          var le = (Z = {}, Z[s] = n, Z[l] = o, Z[a] = r, Z)[X] || 1, me = this.$d.getTime() + z * le;
          return O.w(me, this);
        }, G.subtract = function(z, J) {
          return this.add(-1 * z, J);
        }, G.format = function(z) {
          var J = this, Z = this.$locale();
          if (!this.isValid()) return Z.invalidDate || _;
          var te = z || "YYYY-MM-DDTHH:mm:ssZ", X = O.z(this), re = this.$H, le = this.$m, me = this.$M, q = Z.weekdays, ye = Z.months, qe = Z.meridiem, ze = function(g, b, y, I) {
            return g && (g[b] || g(J, te)) || y[b].slice(0, I);
          }, we = function(g) {
            return O.s(re % 12 || 12, g, "0");
          }, K = qe || function(g, b, y) {
            var I = g < 12 ? "AM" : "PM";
            return y ? I.toLowerCase() : I;
          };
          return te.replace(x, function(g, b) {
            return b || function(y) {
              switch (y) {
                case "YY":
                  return String(J.$y).slice(-2);
                case "YYYY":
                  return O.s(J.$y, 4, "0");
                case "M":
                  return me + 1;
                case "MM":
                  return O.s(me + 1, 2, "0");
                case "MMM":
                  return ze(Z.monthsShort, me, ye, 3);
                case "MMMM":
                  return ze(ye, me);
                case "D":
                  return J.$D;
                case "DD":
                  return O.s(J.$D, 2, "0");
                case "d":
                  return String(J.$W);
                case "dd":
                  return ze(Z.weekdaysMin, J.$W, q, 2);
                case "ddd":
                  return ze(Z.weekdaysShort, J.$W, q, 3);
                case "dddd":
                  return q[J.$W];
                case "H":
                  return String(re);
                case "HH":
                  return O.s(re, 2, "0");
                case "h":
                  return we(1);
                case "hh":
                  return we(2);
                case "a":
                  return K(re, le, true);
                case "A":
                  return K(re, le, false);
                case "m":
                  return String(le);
                case "mm":
                  return O.s(le, 2, "0");
                case "s":
                  return String(J.$s);
                case "ss":
                  return O.s(J.$s, 2, "0");
                case "SSS":
                  return O.s(J.$ms, 3, "0");
                case "Z":
                  return X;
              }
              return null;
            }(g) || X.replace(":", "");
          });
        }, G.utcOffset = function() {
          return 15 * -Math.round(this.$d.getTimezoneOffset() / 15);
        }, G.diff = function(z, J, Z) {
          var te, X = this, re = O.p(J), le = E(z), me = (le.utcOffset() - this.utcOffset()) * n, q = this - le, ye = function() {
            return O.m(X, le);
          };
          switch (re) {
            case d:
              te = ye() / 12;
              break;
            case p:
              te = ye();
              break;
            case u:
              te = ye() / 3;
              break;
            case f:
              te = (q - me) / 6048e5;
              break;
            case c:
              te = (q - me) / 864e5;
              break;
            case l:
              te = q / o;
              break;
            case s:
              te = q / n;
              break;
            case a:
              te = q / r;
              break;
            default:
              te = q;
          }
          return Z ? te : O.a(te);
        }, G.daysInMonth = function() {
          return this.endOf(p).$D;
        }, G.$locale = function() {
          return T[this.$L];
        }, G.locale = function(z, J) {
          if (!z) return this.$L;
          var Z = this.clone(), te = Y(z, J, true);
          return te && (Z.$L = te), Z;
        }, G.clone = function() {
          return O.w(this.$d, this);
        }, G.toDate = function() {
          return new Date(this.valueOf());
        }, G.toJSON = function() {
          return this.isValid() ? this.toISOString() : null;
        }, G.toISOString = function() {
          return this.$d.toISOString();
        }, G.toString = function() {
          return this.$d.toUTCString();
        }, L;
      }(), R = H.prototype;
      return E.prototype = R, [["$ms", i], ["$s", a], ["$m", s], ["$H", l], ["$W", c], ["$M", p], ["$y", d], ["$D", h]].forEach(function(L) {
        R[L[1]] = function(G) {
          return this.$g(G, L[0], L[1]);
        };
      }), E.extend = function(L, G) {
        return L.$i || (L(G, H, E), L.$i = true), E;
      }, E.locale = Y, E.isDayjs = S, E.unix = function(L) {
        return E(1e3 * L);
      }, E.en = T[F], E.Ls = T, E.p = {}, E;
    });
  }(Pf)), Pf.exports;
}
var C1 = k1();
var Pn = /* @__PURE__ */ to(C1);
var Rf = { exports: {} };
var I1 = Rf.exports;
var xh;
function O1() {
  return xh || (xh = 1, function(e, t) {
    (function(r, n) {
      e.exports = n();
    })(I1, function() {
      return function(r, n) {
        var o = n.prototype, i = o.format;
        o.format = function(a) {
          var s = this, l = this.$locale();
          if (!this.isValid()) return i.bind(this)(a);
          var c = this.$utils(), f = (a || "YYYY-MM-DDTHH:mm:ssZ").replace(/\[([^\]]+)]|Q|wo|ww|w|WW|W|zzz|z|gggg|GGGG|Do|X|x|k{1,2}|S/g, function(p) {
            switch (p) {
              case "Q":
                return Math.ceil((s.$M + 1) / 3);
              case "Do":
                return l.ordinal(s.$D);
              case "gggg":
                return s.weekYear();
              case "GGGG":
                return s.isoWeekYear();
              case "wo":
                return l.ordinal(s.week(), "W");
              case "w":
              case "ww":
                return c.s(s.week(), p === "w" ? 1 : 2, "0");
              case "W":
              case "WW":
                return c.s(s.isoWeek(), p === "W" ? 1 : 2, "0");
              case "k":
              case "kk":
                return c.s(String(s.$H === 0 ? 24 : s.$H), p === "k" ? 1 : 2, "0");
              case "X":
                return Math.floor(s.$d.getTime() / 1e3);
              case "x":
                return s.$d.getTime();
              case "z":
                return "[" + s.offsetName() + "]";
              case "zzz":
                return "[" + s.offsetName("long") + "]";
              default:
                return p;
            }
          });
          return i.bind(this)(f);
        };
      };
    });
  }(Rf)), Rf.exports;
}
var F1 = O1();
var P1 = /* @__PURE__ */ to(F1);
var $f = { exports: {} };
var R1 = $f.exports;
var bh;
function $1() {
  return bh || (bh = 1, function(e, t) {
    (function(r, n) {
      e.exports = n();
    })(R1, function() {
      var r = { LTS: "h:mm:ss A", LT: "h:mm A", L: "MM/DD/YYYY", LL: "MMMM D, YYYY", LLL: "MMMM D, YYYY h:mm A", LLLL: "dddd, MMMM D, YYYY h:mm A" }, n = /(\[[^[]*\])|([-_:/.,()\s]+)|(A|a|Q|YYYY|YY?|ww?|MM?M?M?|Do|DD?|hh?|HH?|mm?|ss?|S{1,3}|z|ZZ?)/g, o = /\d/, i = /\d\d/, a = /\d\d?/, s = /\d*[^-_:/,()\s\d]+/, l = {}, c = function(m) {
        return (m = +m) + (m > 68 ? 1900 : 2e3);
      }, f = function(m) {
        return function(x) {
          this[m] = +x;
        };
      }, p = [/[+-]\d\d:?(\d\d)?|Z/, function(m) {
        (this.zone || (this.zone = {})).offset = function(x) {
          if (!x || x === "Z") return 0;
          var A = x.match(/([+-]|\d\d)/g), D = 60 * A[1] + (+A[2] || 0);
          return D === 0 ? 0 : A[0] === "+" ? -D : D;
        }(m);
      }], u = function(m) {
        var x = l[m];
        return x && (x.indexOf ? x : x.s.concat(x.f));
      }, d = function(m, x) {
        var A, D = l.meridiem;
        if (D) {
          for (var N = 1; N <= 24; N += 1) if (m.indexOf(D(N, 0, x)) > -1) {
            A = N > 12;
            break;
          }
        } else A = m === (x ? "pm" : "PM");
        return A;
      }, h = { A: [s, function(m) {
        this.afternoon = d(m, false);
      }], a: [s, function(m) {
        this.afternoon = d(m, true);
      }], Q: [o, function(m) {
        this.month = 3 * (m - 1) + 1;
      }], S: [o, function(m) {
        this.milliseconds = 100 * +m;
      }], SS: [i, function(m) {
        this.milliseconds = 10 * +m;
      }], SSS: [/\d{3}/, function(m) {
        this.milliseconds = +m;
      }], s: [a, f("seconds")], ss: [a, f("seconds")], m: [a, f("minutes")], mm: [a, f("minutes")], H: [a, f("hours")], h: [a, f("hours")], HH: [a, f("hours")], hh: [a, f("hours")], D: [a, f("day")], DD: [i, f("day")], Do: [s, function(m) {
        var x = l.ordinal, A = m.match(/\d+/);
        if (this.day = A[0], x) for (var D = 1; D <= 31; D += 1) x(D).replace(/\[|\]/g, "") === m && (this.day = D);
      }], w: [a, f("week")], ww: [i, f("week")], M: [a, f("month")], MM: [i, f("month")], MMM: [s, function(m) {
        var x = u("months"), A = (u("monthsShort") || x.map(function(D) {
          return D.slice(0, 3);
        })).indexOf(m) + 1;
        if (A < 1) throw new Error();
        this.month = A % 12 || A;
      }], MMMM: [s, function(m) {
        var x = u("months").indexOf(m) + 1;
        if (x < 1) throw new Error();
        this.month = x % 12 || x;
      }], Y: [/[+-]?\d+/, f("year")], YY: [i, function(m) {
        this.year = c(m);
      }], YYYY: [/\d{4}/, f("year")], Z: p, ZZ: p };
      function _(m) {
        var x, A;
        x = m, A = l && l.formats;
        for (var D = (m = x.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g, function(E, O, H) {
          var R = H && H.toUpperCase();
          return O || A[H] || r[H] || A[R].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g, function(L, G, z) {
            return G || z.slice(1);
          });
        })).match(n), N = D.length, F = 0; F < N; F += 1) {
          var T = D[F], v = h[T], S = v && v[0], Y = v && v[1];
          D[F] = Y ? { regex: S, parser: Y } : T.replace(/^\[|\]$/g, "");
        }
        return function(E) {
          for (var O = {}, H = 0, R = 0; H < N; H += 1) {
            var L = D[H];
            if (typeof L == "string") R += L.length;
            else {
              var G = L.regex, z = L.parser, J = E.slice(R), Z = G.exec(J)[0];
              z.call(O, Z), E = E.replace(Z, "");
            }
          }
          return function(te) {
            var X = te.afternoon;
            if (X !== void 0) {
              var re = te.hours;
              X ? re < 12 && (te.hours += 12) : re === 12 && (te.hours = 0), delete te.afternoon;
            }
          }(O), O;
        };
      }
      return function(m, x, A) {
        A.p.customParseFormat = true, m && m.parseTwoDigitYear && (c = m.parseTwoDigitYear);
        var D = x.prototype, N = D.parse;
        D.parse = function(F) {
          var T = F.date, v = F.utc, S = F.args;
          this.$u = v;
          var Y = S[1];
          if (typeof Y == "string") {
            var E = S[2] === true, O = S[3] === true, H = E || O, R = S[2];
            O && (R = S[2]), l = this.$locale(), !E && R && (l = A.Ls[R]), this.$d = function(J, Z, te, X) {
              try {
                if (["x", "X"].indexOf(Z) > -1) return new Date((Z === "X" ? 1e3 : 1) * J);
                var re = _(Z)(J), le = re.year, me = re.month, q = re.day, ye = re.hours, qe = re.minutes, ze = re.seconds, we = re.milliseconds, K = re.zone, g = re.week, b = /* @__PURE__ */ new Date(), y = q || (le || me ? 1 : b.getDate()), I = le || b.getFullYear(), w = 0;
                le && !me || (w = me > 0 ? me - 1 : b.getMonth());
                var k, P = ye || 0, M = qe || 0, C = ze || 0, B = we || 0;
                return K ? new Date(Date.UTC(I, w, y, P, M, C, B + 60 * K.offset * 1e3)) : te ? new Date(Date.UTC(I, w, y, P, M, C, B)) : (k = new Date(I, w, y, P, M, C, B), g && (k = X(k).week(g).toDate()), k);
              } catch {
                return /* @__PURE__ */ new Date("");
              }
            }(T, Y, v, A), this.init(), R && R !== true && (this.$L = this.locale(R).$L), H && T != this.format(Y) && (this.$d = /* @__PURE__ */ new Date("")), l = {};
          } else if (Y instanceof Array) for (var L = Y.length, G = 1; G <= L; G += 1) {
            S[1] = Y[G - 1];
            var z = A.apply(this, S);
            if (z.isValid()) {
              this.$d = z.$d, this.$L = z.$L, this.init();
              break;
            }
            G === L && (this.$d = /* @__PURE__ */ new Date(""));
          }
          else N.call(this, F);
        };
      };
    });
  }($f)), $f.exports;
}
var B1 = $1();
var L1 = /* @__PURE__ */ to(B1);
var Bf = { exports: {} };
var V1 = Bf.exports;
var vh;
function H1() {
  return vh || (vh = 1, function(e, t) {
    (function(r, n) {
      e.exports = n();
    })(V1, function() {
      return function(r, n, o) {
        n.prototype.isBetween = function(i, a, s, l) {
          var c = o(i), f = o(a), p = (l = l || "()")[0] === "(", u = l[1] === ")";
          return (p ? this.isAfter(c, s) : !this.isBefore(c, s)) && (u ? this.isBefore(f, s) : !this.isAfter(f, s)) || (p ? this.isBefore(c, s) : !this.isAfter(c, s)) && (u ? this.isAfter(f, s) : !this.isBefore(f, s));
        };
      };
    });
  }(Bf)), Bf.exports;
}
var U1 = H1();
var G1 = /* @__PURE__ */ to(U1);
var Lf = { exports: {} };
var q1 = Lf.exports;
var Th;
function z1() {
  return Th || (Th = 1, function(e, t) {
    (function(r, n) {
      e.exports = n();
    })(q1, function() {
      return function(r, n, o) {
        var i = function(a, s) {
          if (!s || !s.length || s.length === 1 && !s[0] || s.length === 1 && Array.isArray(s[0]) && !s[0].length) return null;
          var l;
          s.length === 1 && s[0].length > 0 && (s = s[0]), l = (s = s.filter(function(f) {
            return f;
          }))[0];
          for (var c = 1; c < s.length; c += 1) s[c].isValid() && !s[c][a](l) || (l = s[c]);
          return l;
        };
        o.max = function() {
          var a = [].slice.call(arguments, 0);
          return i("isAfter", a);
        }, o.min = function() {
          var a = [].slice.call(arguments, 0);
          return i("isBefore", a);
        };
      };
    });
  }(Lf)), Lf.exports;
}
var W1 = z1();
var Z1 = /* @__PURE__ */ to(W1);
var Vf = { exports: {} };
var j1 = Vf.exports;
var Sh;
function X1() {
  return Sh || (Sh = 1, function(e, t) {
    (function(r, n) {
      e.exports = n();
    })(j1, function() {
      return function(r, n, o) {
        o.updateLocale = function(i, a) {
          var s = o.Ls[i];
          if (s) return (a ? Object.keys(a) : []).forEach(function(l) {
            s[l] = a[l];
          }), s;
        };
      };
    });
  }(Vf)), Vf.exports;
}
var J1 = X1();
var K1 = /* @__PURE__ */ to(J1);
var Hf = { exports: {} };
var Q1 = Hf.exports;
var Mh;
function eT() {
  return Mh || (Mh = 1, function(e, t) {
    (function(r, n) {
      e.exports = n();
    })(Q1, function() {
      var r = "minute", n = /[+-]\d\d(?::?\d\d)?/g, o = /([+-]|\d\d)/g;
      return function(i, a, s) {
        var l = a.prototype;
        s.utc = function(_) {
          var m = { date: _, utc: true, args: arguments };
          return new a(m);
        }, l.utc = function(_) {
          var m = s(this.toDate(), { locale: this.$L, utc: true });
          return _ ? m.add(this.utcOffset(), r) : m;
        }, l.local = function() {
          return s(this.toDate(), { locale: this.$L, utc: false });
        };
        var c = l.parse;
        l.parse = function(_) {
          _.utc && (this.$u = true), this.$utils().u(_.$offset) || (this.$offset = _.$offset), c.call(this, _);
        };
        var f = l.init;
        l.init = function() {
          if (this.$u) {
            var _ = this.$d;
            this.$y = _.getUTCFullYear(), this.$M = _.getUTCMonth(), this.$D = _.getUTCDate(), this.$W = _.getUTCDay(), this.$H = _.getUTCHours(), this.$m = _.getUTCMinutes(), this.$s = _.getUTCSeconds(), this.$ms = _.getUTCMilliseconds();
          } else f.call(this);
        };
        var p = l.utcOffset;
        l.utcOffset = function(_, m) {
          var x = this.$utils().u;
          if (x(_)) return this.$u ? 0 : x(this.$offset) ? p.call(this) : this.$offset;
          if (typeof _ == "string" && (_ = function(F) {
            F === void 0 && (F = "");
            var T = F.match(n);
            if (!T) return null;
            var v = ("" + T[0]).match(o) || ["-", 0, 0], S = v[0], Y = 60 * +v[1] + +v[2];
            return Y === 0 ? 0 : S === "+" ? Y : -Y;
          }(_), _ === null)) return this;
          var A = Math.abs(_) <= 16 ? 60 * _ : _;
          if (A === 0) return this.utc(m);
          var D = this.clone();
          if (m) return D.$offset = A, D.$u = false, D;
          var N = this.$u ? this.toDate().getTimezoneOffset() : -1 * this.utcOffset();
          return (D = this.local().add(A + N, r)).$offset = A, D.$x.$localOffset = N, D;
        };
        var u = l.format;
        l.format = function(_) {
          var m = _ || (this.$u ? "YYYY-MM-DDTHH:mm:ss[Z]" : "");
          return u.call(this, m);
        }, l.valueOf = function() {
          var _ = this.$utils().u(this.$offset) ? 0 : this.$offset + (this.$x.$localOffset || this.$d.getTimezoneOffset());
          return this.$d.valueOf() - 6e4 * _;
        }, l.isUTC = function() {
          return !!this.$u;
        }, l.toISOString = function() {
          return this.toDate().toISOString();
        }, l.toString = function() {
          return this.toDate().toUTCString();
        };
        var d = l.toDate;
        l.toDate = function(_) {
          return _ === "s" && this.$offset ? s(this.format("YYYY-MM-DD HH:mm:ss:SSS")).toDate() : d.call(this);
        };
        var h = l.diff;
        l.diff = function(_, m, x) {
          if (_ && this.$u === _.$u) return h.call(this, _, m, x);
          var A = this.local(), D = s(_).local();
          return h.call(A, D, m, x);
        };
      };
    });
  }(Hf)), Hf.exports;
}
var tT = eT();
var rT = /* @__PURE__ */ to(tT);
var nT = "YYYY-MM-DDTHH:mm:ssZ";
var oT = (e, t) => {
  const r = t.prototype, n = r.format, o = [
    "Jan.",
    "Feb.",
    "March",
    "April",
    "May",
    "June",
    "July",
    "Aug.",
    "Sept.",
    "Oct.",
    "Nov.",
    "Dec."
  ];
  r.format = function(i) {
    const a = i || nT;
    return n.bind(this)(a).replace(
      /(\[[^\]]+])|ttt/g,
      () => {
        const s = Number(this.$M);
        return o[s];
      }
    );
  };
};
var Yi = /* @__PURE__ */ new Map();
var iT = 3e3;
var aT = (e, t) => {
  t.prototype.plainFormat = function() {
    const r = `${this.valueOf()}`;
    if (Yi.has(r))
      return Yi.get(r);
    const n = this.format("YYYY-MM-DD HH:mm:ss");
    if (Yi.size >= iT) {
      const o = Yi.keys().next().value;
      o !== void 0 && Yi.delete(o);
    }
    return Yi.set(r, n), n;
  };
};
Pn.extend(G1);
Pn.extend(Z1);
Pn.extend(rT);
Pn.extend(L1);
Pn.extend(P1);
Pn.extend(K1);
Pn.extend(oT);
Pn.extend(aT);
var ne = Pn;
var eP = [
  "date",
  "quarter",
  "month",
  "year",
  "month/day",
  "year/month"
];
var vr = {
  quarter: "YYYY Q",
  month: "MMMM",
  "month/day": "MMMM DD YYYY",
  "year/month": "MMMM YYYY DD",
  year: "YYYY"
};
var Dh = (e) => {
  switch (e) {
    case "minutes":
      return "minute";
    case "hours":
      return "hour";
    case "days":
      return "day";
    case "weeks":
      return "week";
    case "months":
      return "month";
    case "quarters":
      return "years";
    case "years":
      return "year";
    default:
      return "minute";
  }
};
var sT = (e) => e.endsWith("Z") ? e.slice(0, -1) : e;
var tt = (e, t, r) => {
  if (!e)
    return null;
  let n = sT(typeof e == "string" ? e : `${e}`);
  return r && (n += r), ne(n, t).toDate();
};
var He = class ro {
  static isPossibleDate(t) {
    if (!t) return [false, null];
    const r = ne(t);
    return r.isValid() ? [true, r] : [false, null];
  }
  static isDateOnly(t) {
    return t.hour() === 0 && t.minute() === 0 && t.second() === 0 && t.millisecond() === 0;
  }
  static isPossibleMonth(t, r) {
    if (!t) return [false, null];
    const n = t.toString(), o = ro.capitalizeMonth(n);
    for (const i of r)
      if (ne(o, i, true).isValid())
        return [true, i];
    return [false, null];
  }
  static isPossibleYearMonthDay(t, r) {
    if (!t) return [false, null];
    const n = t.toString(), o = ro.capitalizeMonth(n);
    for (const i of r)
      if (ne(o, i, true).isValid())
        return [true, i];
    return [false, null];
  }
  static capitalizeMonth(t) {
    return t.toLowerCase().replace(/\b\w/g, (r) => r.toUpperCase());
  }
  /**
   * find the difference in days between max and min value given
   * Possible format: date ISOstring,
   */
  static parseRange(t, r) {
    if (!t || !r)
      return "";
    const n = ne.utc(r).diff(ne.utc(t), "day");
    return n < 2 ? fh : n >= 2 && n < 16 ? uh : n >= 16 && n < 120 ? ph : n >= 120 && n < 365 * 4 ? dh : n >= 365 * 4 && n < 365 * 8 ? mh : n >= 365 * 8 && n < 365 * 15 ? hh : n >= 365 * 15 && n < 365 * 100 ? gh : _h;
  }
  // return a function that parses [year, quarter]
  static quarterSplitValueParser(t) {
    const r = ro.getFirstValue(t), n = ro.getRegex(r, "quarter");
    return function(o) {
      if (o === null || typeof o != "string" || n === null) return null;
      let i, a;
      switch (n) {
        case mt.quarter_year:
        case mt.quarter_year_alt:
        case mt.quarter_two_digit_year:
          [a, i] = o.split(" ");
          break;
        case mt.quarter_apostrophe_two_digit_year: {
          const c = mt.quarter_apostrophe_two_digit_year.exec(o);
          if (!c) return null;
          a = "Q" + c[1], i = c[2];
          break;
        }
        case mt.quarter_dash_year:
        case mt.quarter_dash_two_digit_year:
          [a, i] = o.split("-");
          break;
        case mt.quarter_year_nospace:
          a = o.slice(1, 2), i = o.slice(2);
          break;
        case mt.quarter_year_nospace2:
        case mt.quarter_two_digit_year_alt:
        case mt.quarter_two_digit_year_nospace:
          [a, i] = o.replace(/\s|-|'/g, "").split("Q");
          break;
        case mt.year_quarter:
        case mt.year_quarter_alt:
        case mt.year_quarter_nospace:
        case mt.two_digit_year_quarter:
          [i, a] = o.replace(/\s|-|'/g, "").split("Q");
          break;
        default:
          return null;
      }
      i = (i || "").replace("'", ""), a = (a || "").replace("Q", ""), i.length === 2 && (i = Number(i) < 50 ? "20" + i : "19" + i);
      const s = parseInt(i, 10), l = parseInt(a, 10);
      return isNaN(s) || isNaN(l) ? null : { year: s, quarter: l };
    };
  }
  static getRegex(t, r) {
    let n = null;
    const o = ch[r];
    return Object.keys(o).forEach(function(i) {
      n || o[i].test(t) && (n = o[i]);
    }), n;
  }
  static statParserQuarter(t) {
    const r = ro.quarterSplitValueParser(t), n = { year: Number.MIN_VALUE, quarter: Number.MIN_VALUE }, o = { year: Number.MAX_VALUE, quarter: Number.MAX_VALUE };
    let i = "", a = "";
    const s = (c) => c.year < o.year || c.year === o.year && c.quarter < o.quarter, l = (c) => c.year > n.year || c.year === n.year && c.quarter > n.quarter;
    return t.forEach((c) => {
      if (!c || !r) return;
      const f = r(c);
      f && (s(f) && (o.year = f.year, o.quarter = f.quarter, a = c), l(f) && (n.year = f.year, n.quarter = f.quarter, i = c));
    }), { min: o, max: n, minVal: a, maxVal: i };
  }
  static getFirstValue(t, r = 0, n = false) {
    let o, i;
    const a = r || 0;
    for (let s = a; s < t.length; s++)
      if (!fl(ro.validateValue(t[s]))) {
        o = t[s], i = s;
        break;
      }
    return n ? [i, o] : o;
  }
  static getLastValue(t, r = 0, n = false) {
    let o, i;
    if (r === 0) return [null, null];
    const a = r || t.length - 1;
    for (let s = a; s >= 0; s--)
      if (!fl(ro.validateValue(t[s]))) {
        o = t[s], i = s;
        break;
      }
    return n ? [i, o] : o;
  }
  static validateValue(t) {
    return fl(t) || t === "null" || t === "na" || t === "n/a" || t === "" ? null : t;
  }
};
sr(He, "isDate", (e) => {
  const t = e.toString().trim(), r = cT(t);
  if (r) {
    const n = r.year(), o = r.month(), i = r.date();
    if (n > ko.MIN_YEAR && n < ko.MAX_YEAR && o >= ko.MIN_MONTH && o <= ko.MAX_MONTH && i >= ko.MIN_DAY && i <= ko.MAX_DAY)
      return true;
  }
  return false;
}), sr(He, "isStrictFormatDate", (e) => {
  const t = (e ?? "").toString().trim();
  return ne(t, "YYYY-MM-DD", true).isValid() || ne(t, "YYYY-MM-DD HH:mm:ss", true).isValid() ? He.isDate(e) : false;
}), sr(He, "isFiscalYear", (e) => lh.test(e.toString().trim())), sr(He, "isApostropheTwoDigitYear", (e) => sh.test(e.toString().trim())), sr(He, "isYear", (e) => ih.test(e.toString().trim())), sr(He, "isStrictYear", (e) => ah.test(e.toString().trim())), sr(He, "isQuarter", (e) => {
  for (var t in mt)
    if (mt[t].test(
      e.toString().trim()
    ))
      return true;
  return false;
}), sr(He, "isMonth", (e) => He.isPossibleMonth(
  e.toString().trim(),
  rh
)[0]), sr(He, "isMonthDay", (e) => {
  const t = `${e} 2000`;
  return He.isPossibleYearMonthDay(
    t,
    nh
  )[0];
}), sr(He, "isYearMonth", (e) => {
  const t = `${e} 01`;
  return He.isPossibleYearMonthDay(
    t,
    oh
  )[0];
}), /**
* Validate if all values in the array can be parsed into dates
* @param values input value array
*/
sr(He, "validateParseDateArray", (e) => e.every((t) => !t || He.isQuarter(t) ? true : He.isDate(t))), /**
* Validate if all values in the array can be parsed into year
* @param values input value array
*/
sr(He, "validateParseYearArray", (e) => e.every((t) => t ? He.isDate(t.toString()) || He.isYear(parseInt(t)) : true)), /**
* Validate if all values in the array can be parsed into quarter
* @param values input value array
*/
sr(He, "validateParseQuarterArray", (e) => e.every((t) => !(t && !He.isQuarter(t))));
var lT = He;
function tP(e) {
  if (!e)
    return null;
  const t = /(.+?)(?:[+-]\d{2}:?\d{2})$/, r = e.toString().match(t);
  return r ? r[1].trim() : e;
}
var cT = (e) => {
  if (!e) return null;
  const t = /^(Monday|Tuesday|Wednesday|Thursday|Friday|Saturday|Sunday),?\s*/i;
  for (const n of If) {
    const o = ne.utc(
      e.toString().replace(t, ""),
      n,
      true
    );
    if (o.isValid())
      return o;
  }
  const r = e.toString().replace("T", " ");
  for (const n of If)
    for (const o of th) {
      const i = `${n}${eh}${o}`, a = ne.utc(r, i, true);
      if (a.isValid())
        return a;
    }
  return null;
};
var rP = (e) => lT.isDateOnly(e) ? e.format("YYYY-MM-DD") : e.format("YYYY-MM-DD HH:mm:ss");
var fT = (e, t, r = 1 / 0) => {
  if (e.length === 0) return r;
  const n = [...e].sort((c, f) => c - f), o = n.length, i = (o - 1) * t + 1, a = Math.floor(i), s = i - a;
  let l;
  return a <= 0 ? l = n[0] : a >= o ? l = n[o - 1] : s === 0 ? l = n[a - 1] : l = n[a - 1] + s * (n[a] - n[a - 1]), Math.max(l, n[0]);
};
var uT = (e) => e < 3600 ? "minutes" : e < 86400 ? "hours" : e < 604800 ? "days" : e < 2419200 ? "weeks" : e < 7776e3 ? "months" : e < 31536e3 ? "quarters" : "years";
var pT = (e) => e < 3600 ? "minutes" : e < 77760 ? "hours" : e < 518400 ? "days" : e < 2246400 ? "weeks" : e < 7603200 ? "months" : e < 31363200 ? "quarters" : "years";
var nP = (e) => {
  let t = 1 / 0, r = [];
  if (e.length > 1) {
    const a = [...e].sort((s, l) => s.unix() - l.unix());
    for (let s = 1; s < a.length; s++) {
      const l = a[s - 1], c = a[s], f = Math.abs(c.unix() - l.unix());
      f !== 0 && (r.push(f), f < t && (t = f));
    }
  }
  const n = fT(
    r,
    // Changing the percentile to 0.3 from 0.05
    // We are not 100% sure how this loosen percentile will result
    // 8/14/2025 Ruby
    0.3,
    t
  ), o = uT(t), i = pT(n);
  return {
    minimumSpan: o,
    percentileSpan: i,
    granularityMode: i
  };
};
var oP = (e, t) => {
  const { granularityMode: r } = t || {}, n = r;
  let o = 1 / 0;
  if (n === "minutes" || n === "hours" ? o = 36e5 : n === "days" && (o = 1728e5), o === 1 / 0 || e.length < 2) return [];
  const i = [], a = [...e].sort((s, l) => s.unix() - l.unix());
  for (let s = 1; s < a.length; s++) {
    const l = a[s - 1], c = a[s];
    Math.abs(l.diff(c)) > o && i.push([l.toISOString(), c.toISOString()]);
  }
  return i;
};

// ../../node_modules/d3-time/src/interval.js
var Gf = /* @__PURE__ */ new Date();
var qf = /* @__PURE__ */ new Date();
function Ye(e, t, r, n) {
  function o(i) {
    return e(i = arguments.length === 0 ? /* @__PURE__ */ new Date() : /* @__PURE__ */ new Date(+i)), i;
  }
  o.floor = (i) => {
    return e(i = /* @__PURE__ */ new Date(+i)), i;
  };
  o.ceil = (i) => {
    return e(i = new Date(i - 1)), t(i, 1), e(i), i;
  };
  o.round = (i) => {
    const a = o(i), s = o.ceil(i);
    return i - a < s - i ? a : s;
  };
  o.offset = (i, a) => {
    return t(i = /* @__PURE__ */ new Date(+i), a == null ? 1 : Math.floor(a)), i;
  };
  o.range = (i, a, s) => {
    const l = [];
    i = o.ceil(i);
    s = s == null ? 1 : Math.floor(s);
    if (!(i < a) || !(s > 0)) return l;
    let c;
    do
      l.push(c = /* @__PURE__ */ new Date(+i)), t(i, s), e(i);
    while (c < i && i < a);
    return l;
  };
  o.filter = (i) => {
    return Ye((a) => {
      if (a >= a) while (e(a), !i(a)) a.setTime(a - 1);
    }, (a, s) => {
      if (a >= a) {
        if (s < 0) while (++s <= 0) {
          while (t(a, -1), !i(a)) {
          }
        }
        else while (--s >= 0) {
          while (t(a, 1), !i(a)) {
          }
        }
      }
    });
  };
  if (r) {
    o.count = (i, a) => {
      Gf.setTime(+i), qf.setTime(+a);
      e(Gf), e(qf);
      return Math.floor(r(Gf, qf));
    };
    o.every = (i) => {
      i = Math.floor(i);
      return !isFinite(i) || !(i > 0) ? null : !(i > 1) ? o : o.filter(n ? (a) => n(a) % i === 0 : (a) => o.count(0, a) % i === 0);
    };
  }
  return o;
}

// ../../node_modules/d3-time/src/millisecond.js
var Ur = Ye(() => {
}, (e, t) => {
  e.setTime(+e + t);
}, (e, t) => {
  return t - e;
});
Ur.every = (e) => {
  e = Math.floor(e);
  if (!isFinite(e) || !(e > 0)) return null;
  if (!(e > 1)) return Ur;
  return Ye((t) => {
    t.setTime(Math.floor(t / e) * e);
  }, (t, r) => {
    t.setTime(+t + r * e);
  }, (t, r) => {
    return (r - t) / e;
  });
};
var wh = Ur.range;

// ../../node_modules/d3-time/src/duration.js
var lr = 1e3;
var wt = lr * 60;
var Gr = wt * 60;
var qr = Gr * 24;
var Ia = qr * 7;
var zf = qr * 30;
var pl = qr * 365;

// ../../node_modules/d3-time/src/second.js
var hn = Ye((e) => {
  e.setTime(e - e.getMilliseconds());
}, (e, t) => {
  e.setTime(+e + t * lr);
}, (e, t) => {
  return (t - e) / lr;
}, (e) => {
  return e.getUTCSeconds();
});
var Eh = hn.range;

// ../../node_modules/d3-time/src/minute.js
var Tr = Ye((e) => {
  e.setTime(e - e.getMilliseconds() - e.getSeconds() * lr);
}, (e, t) => {
  e.setTime(+e + t * wt);
}, (e, t) => {
  return (t - e) / wt;
}, (e) => {
  return e.getMinutes();
});
var dT = Tr.range;
var dl = Ye((e) => {
  e.setUTCSeconds(0, 0);
}, (e, t) => {
  e.setTime(+e + t * wt);
}, (e, t) => {
  return (t - e) / wt;
}, (e) => {
  return e.getUTCMinutes();
});
var mT = dl.range;

// ../../node_modules/d3-time/src/hour.js
var Sr = Ye((e) => {
  e.setTime(e - e.getMilliseconds() - e.getSeconds() * lr - e.getMinutes() * wt);
}, (e, t) => {
  e.setTime(+e + t * Gr);
}, (e, t) => {
  return (t - e) / Gr;
}, (e) => {
  return e.getHours();
});
var hT = Sr.range;
var ml = Ye((e) => {
  e.setUTCMinutes(0, 0, 0);
}, (e, t) => {
  e.setTime(+e + t * Gr);
}, (e, t) => {
  return (t - e) / Gr;
}, (e) => {
  return e.getUTCHours();
});
var gT = ml.range;

// ../../node_modules/d3-time/src/day.js
var it = Ye(
  (e) => e.setHours(0, 0, 0, 0),
  (e, t) => e.setDate(e.getDate() + t),
  (e, t) => (t - e - (t.getTimezoneOffset() - e.getTimezoneOffset()) * wt) / qr,
  (e) => e.getDate() - 1
);
var _T = it.range;
var Co = Ye((e) => {
  e.setUTCHours(0, 0, 0, 0);
}, (e, t) => {
  e.setUTCDate(e.getUTCDate() + t);
}, (e, t) => {
  return (t - e) / qr;
}, (e) => {
  return e.getUTCDate() - 1;
});
var yT = Co.range;
var hl = Ye((e) => {
  e.setUTCHours(0, 0, 0, 0);
}, (e, t) => {
  e.setUTCDate(e.getUTCDate() + t);
}, (e, t) => {
  return (t - e) / qr;
}, (e) => {
  return Math.floor(e / qr);
});
var xT = hl.range;

// ../../node_modules/d3-time/src/week.js
function Io(e) {
  return Ye((t) => {
    t.setDate(t.getDate() - (t.getDay() + 7 - e) % 7);
    t.setHours(0, 0, 0, 0);
  }, (t, r) => {
    t.setDate(t.getDate() + r * 7);
  }, (t, r) => {
    return (r - t - (r.getTimezoneOffset() - t.getTimezoneOffset()) * wt) / Ia;
  });
}
var Kt = Io(0);
var cr = Io(1);
var Oo = Io(2);
var Fo = Io(3);
var fr = Io(4);
var Po = Io(5);
var Ro = Io(6);
var Ah = Kt.range;
var bT = cr.range;
var vT = Oo.range;
var TT = Fo.range;
var ST = fr.range;
var MT = Po.range;
var DT = Ro.range;
function $o(e) {
  return Ye((t) => {
    t.setUTCDate(t.getUTCDate() - (t.getUTCDay() + 7 - e) % 7);
    t.setUTCHours(0, 0, 0, 0);
  }, (t, r) => {
    t.setUTCDate(t.getUTCDate() + r * 7);
  }, (t, r) => {
    return (r - t) / Ia;
  });
}
var Bo = $o(0);
var ki = $o(1);
var Nh = $o(2);
var Yh = $o(3);
var no = $o(4);
var kh = $o(5);
var Ch = $o(6);
var Ih = Bo.range;
var wT = ki.range;
var ET = Nh.range;
var AT = Yh.range;
var NT = no.range;
var YT = kh.range;
var kT = Ch.range;

// ../../node_modules/d3-time/src/month.js
var zt = Ye((e) => {
  e.setDate(1);
  e.setHours(0, 0, 0, 0);
}, (e, t) => {
  e.setMonth(e.getMonth() + t);
}, (e, t) => {
  return t.getMonth() - e.getMonth() + (t.getFullYear() - e.getFullYear()) * 12;
}, (e) => {
  return e.getMonth();
});
var CT = zt.range;
var gl = Ye((e) => {
  e.setUTCDate(1);
  e.setUTCHours(0, 0, 0, 0);
}, (e, t) => {
  e.setUTCMonth(e.getUTCMonth() + t);
}, (e, t) => {
  return t.getUTCMonth() - e.getUTCMonth() + (t.getUTCFullYear() - e.getUTCFullYear()) * 12;
}, (e) => {
  return e.getUTCMonth();
});
var IT = gl.range;

// ../../node_modules/d3-time/src/year.js
var je = Ye((e) => {
  e.setMonth(0, 1);
  e.setHours(0, 0, 0, 0);
}, (e, t) => {
  e.setFullYear(e.getFullYear() + t);
}, (e, t) => {
  return t.getFullYear() - e.getFullYear();
}, (e) => {
  return e.getFullYear();
});
je.every = (e) => {
  return !isFinite(e = Math.floor(e)) || !(e > 0) ? null : Ye((t) => {
    t.setFullYear(Math.floor(t.getFullYear() / e) * e);
    t.setMonth(0, 1);
    t.setHours(0, 0, 0, 0);
  }, (t, r) => {
    t.setFullYear(t.getFullYear() + r * e);
  });
};
var OT = je.range;
var zr = Ye((e) => {
  e.setUTCMonth(0, 1);
  e.setUTCHours(0, 0, 0, 0);
}, (e, t) => {
  e.setUTCFullYear(e.getUTCFullYear() + t);
}, (e, t) => {
  return t.getUTCFullYear() - e.getUTCFullYear();
}, (e) => {
  return e.getUTCFullYear();
});
zr.every = (e) => {
  return !isFinite(e = Math.floor(e)) || !(e > 0) ? null : Ye((t) => {
    t.setUTCFullYear(Math.floor(t.getUTCFullYear() / e) * e);
    t.setUTCMonth(0, 1);
    t.setUTCHours(0, 0, 0, 0);
  }, (t, r) => {
    t.setUTCFullYear(t.getUTCFullYear() + r * e);
  });
};
var FT = zr.range;

// ../../node_modules/d3-array/src/ascending.js
function gn(e, t) {
  return e == null || t == null ? NaN : e < t ? -1 : e > t ? 1 : e >= t ? 0 : NaN;
}

// ../../node_modules/d3-array/src/descending.js
function Wf(e, t) {
  return e == null || t == null ? NaN : t < e ? -1 : t > e ? 1 : t >= e ? 0 : NaN;
}

// ../../node_modules/d3-array/src/bisector.js
function Lo(e) {
  let t, r, n;
  if (e.length !== 2) {
    t = gn;
    r = (s, l) => gn(e(s), l);
    n = (s, l) => e(s) - l;
  } else {
    t = e === gn || e === Wf ? e : PT;
    r = e;
    n = e;
  }
  function o(s, l, c = 0, f = s.length) {
    if (c < f) {
      if (t(l, l) !== 0) return f;
      do {
        const p = c + f >>> 1;
        if (r(s[p], l) < 0) c = p + 1;
        else f = p;
      } while (c < f);
    }
    return c;
  }
  function i(s, l, c = 0, f = s.length) {
    if (c < f) {
      if (t(l, l) !== 0) return f;
      do {
        const p = c + f >>> 1;
        if (r(s[p], l) <= 0) c = p + 1;
        else f = p;
      } while (c < f);
    }
    return c;
  }
  function a(s, l, c = 0, f = s.length) {
    const p = o(s, l, c, f - 1);
    return p > c && n(s[p - 1], l) > -n(s[p], l) ? p - 1 : p;
  }
  return { left: o, center: a, right: i };
}
function PT() {
  return 0;
}

// ../../node_modules/d3-array/src/number.js
function Oa(e) {
  return e === null ? NaN : +e;
}

// ../../node_modules/d3-array/src/bisect.js
var Oh = Lo(gn);
var Fh = Oh.right;
var RT = Oh.left;
var $T = Lo(Oa).center;
var Vo = Fh;

// ../../node_modules/internmap/src/index.js
var Ci = class extends Map {
  constructor(t, r = VT) {
    super();
    Object.defineProperties(this, { _intern: { value: /* @__PURE__ */ new Map() }, _key: { value: r } });
    if (t != null) for (const [n, o] of t) this.set(n, o);
  }
  get(t) {
    return super.get(Ph(this, t));
  }
  has(t) {
    return super.has(Ph(this, t));
  }
  set(t, r) {
    return super.set(BT(this, t), r);
  }
  delete(t) {
    return super.delete(LT(this, t));
  }
};
function Ph({ _intern: e, _key: t }, r) {
  const n = t(r);
  return e.has(n) ? e.get(n) : r;
}
function BT({ _intern: e, _key: t }, r) {
  const n = t(r);
  if (e.has(n)) return e.get(n);
  e.set(n, r);
  return r;
}
function LT({ _intern: e, _key: t }, r) {
  const n = t(r);
  if (e.has(n)) {
    r = e.get(n);
    e.delete(n);
  }
  return r;
}
function VT(e) {
  return e !== null && typeof e === "object" ? e.valueOf() : e;
}

// ../../node_modules/d3-array/src/ticks.js
var HT = Math.sqrt(50);
var UT = Math.sqrt(10);
var GT = Math.sqrt(2);
function _l(e, t, r) {
  const n = (t - e) / Math.max(0, r), o = Math.floor(Math.log10(n)), i = n / Math.pow(10, o), a = i >= HT ? 10 : i >= UT ? 5 : i >= GT ? 2 : 1;
  let s, l, c;
  if (o < 0) {
    c = Math.pow(10, -o) / a;
    s = Math.round(e * c);
    l = Math.round(t * c);
    if (s / c < e) ++s;
    if (l / c > t) --l;
    c = -c;
  } else {
    c = Math.pow(10, o) * a;
    s = Math.round(e / c);
    l = Math.round(t / c);
    if (s * c < e) ++s;
    if (l * c > t) --l;
  }
  if (l < s && 0.5 <= r && r < 2) return _l(e, t, r * 2);
  return [s, l, c];
}
function yl(e, t, r) {
  t = +t, e = +e, r = +r;
  if (!(r > 0)) return [];
  if (e === t) return [e];
  const n = t < e, [o, i, a] = n ? _l(t, e, r) : _l(e, t, r);
  if (!(i >= o)) return [];
  const s = i - o + 1, l = new Array(s);
  if (n) {
    if (a < 0) for (let c = 0; c < s; ++c) l[c] = (i - c) / -a;
    else for (let c = 0; c < s; ++c) l[c] = (i - c) * a;
  } else {
    if (a < 0) for (let c = 0; c < s; ++c) l[c] = (o + c) / -a;
    else for (let c = 0; c < s; ++c) l[c] = (o + c) * a;
  }
  return l;
}
function Fa(e, t, r) {
  t = +t, e = +e, r = +r;
  return _l(e, t, r)[2];
}
function Ii(e, t, r) {
  t = +t, e = +e, r = +r;
  const n = t < e, o = n ? Fa(t, e, r) : Fa(e, t, r);
  return (n ? -1 : 1) * (o < 0 ? 1 / -o : o);
}

// ../../node_modules/d3-array/src/quantile.js
function Zf(e, t, r = Oa) {
  if (!(n = e.length) || isNaN(t = +t)) return;
  if (t <= 0 || n < 2) return +r(e[0], 0, e);
  if (t >= 1) return +r(e[n - 1], n - 1, e);
  var n, o = (n - 1) * t, i = Math.floor(o), a = +r(e[i], i, e), s = +r(e[i + 1], i + 1, e);
  return a + (s - a) * (o - i);
}

// ../../node_modules/d3-array/src/range.js
function xl(e, t, r) {
  e = +e, t = +t, r = (o = arguments.length) < 2 ? (t = e, e = 0, 1) : o < 3 ? 1 : +r;
  var n = -1, o = Math.max(0, Math.ceil((t - e) / r)) | 0, i = new Array(o);
  while (++n < o) {
    i[n] = e + n * r;
  }
  return i;
}

// ../../node_modules/d3-time/src/ticks.js
function Rh(e, t, r, n, o, i) {
  const a = [
    [hn, 1, lr],
    [hn, 5, 5 * lr],
    [hn, 15, 15 * lr],
    [hn, 30, 30 * lr],
    [i, 1, wt],
    [i, 5, 5 * wt],
    [i, 15, 15 * wt],
    [i, 30, 30 * wt],
    [o, 1, Gr],
    [o, 3, 3 * Gr],
    [o, 6, 6 * Gr],
    [o, 12, 12 * Gr],
    [n, 1, qr],
    [n, 2, 2 * qr],
    [r, 1, Ia],
    [t, 1, zf],
    [t, 3, 3 * zf],
    [e, 1, pl]
  ];
  function s(c, f, p) {
    const u = f < c;
    if (u) [c, f] = [f, c];
    const d = p && typeof p.range === "function" ? p : l(c, f, p);
    const h = d ? d.range(c, +f + 1) : [];
    return u ? h.reverse() : h;
  }
  function l(c, f, p) {
    const u = Math.abs(f - c) / p;
    const d = Lo(([, , m]) => m).right(a, u);
    if (d === a.length) return e.every(Ii(c / pl, f / pl, p));
    if (d === 0) return Ur.every(Math.max(Ii(c, f, p), 1));
    const [h, _] = a[u / a[d - 1][2] < a[d][2] / u ? d - 1 : d];
    return h.every(_);
  }
  return [s, l];
}
var [qT, zT] = Rh(zr, gl, Bo, hl, ml, dl);
var [jf, Xf] = Rh(je, zt, Kt, it, Sr, Tr);

// src/charts/utils/ticks/majorMinorTick.utils.ts
var WT = 50;
var ZT = 40;
var jT = 10;
var ER = 30;
var XT = 90;
var AR = 365 * 5;
var Pa = {
  century: 7,
  multidecade: 6,
  decade: 6,
  years: 5,
  yearlyQuarters: 4,
  quarters: 4,
  months: 4,
  weeks: 3,
  multiweek: 3,
  daysofweek: 3,
  days: 3,
  hours: 2,
  minutes: 1,
  [""]: -Infinity
};
var JT = (e) => {
  return Pa[e];
};
var KT = [
  [100, "years"],
  [20, "years"],
  [10, "years"],
  [5, "years"],
  [2, "years"],
  [1, "years"],
  [3, "months"],
  [1, "months"],
  [1, "weeks"],
  [1, "days"],
  [12, "hours"],
  [6, "hours"],
  [3, "hours"],
  [1, "hours"],
  [30, "minutes"],
  [15, "minutes"],
  [5, "minutes"],
  [1, "minutes"]
];
var QT = {
  "100years": [
    [50, "years"],
    [25, "years"],
    [20, "years"]
  ],
  "20years": [
    [10, "years"],
    [5, "years"],
    [2, "years"]
  ],
  "10years": [
    [5, "years"],
    [2, "years"],
    [1, "years"]
  ],
  "5years": [[1, "years"]],
  "2years": [[1, "years"]],
  "1years": [
    [6, "months"],
    [3, "months"],
    [1, "months"]
  ],
  "6months": [
    [3, "months"],
    [2, "months"],
    [1, "months"]
  ],
  "3months": [[1, "months"]],
  "2months": [[1, "months"]],
  "1months": [],
  "1weeks": [[1, "days"]],
  "3days": [
    [1, "days"],
    [12, "hours"],
    [6, "hours"],
    [3, "hours"],
    [2, "hours"],
    [1, "hours"]
  ],
  "1days": [
    [12, "hours"],
    [6, "hours"],
    [3, "hours"],
    [2, "hours"],
    [1, "hours"]
  ],
  "12hours": [
    [6, "hours"],
    [3, "hours"],
    [2, "hours"],
    [1, "hours"]
  ],
  "6hours": [
    [3, "hours"],
    [2, "hours"],
    [1, "hours"],
    [30, "minutes"]
  ],
  "3hours": [
    [1, "hours"],
    [30, "minutes"]
  ],
  "1hours": [
    [30, "minutes"],
    [15, "minutes"],
    [10, "minutes"],
    [5, "minutes"],
    [1, "minutes"]
  ],
  "30minutes": [
    [15, "minutes"],
    [10, "minutes"],
    [5, "minutes"],
    [1, "minutes"]
  ],
  "15minutes": [
    [5, "minutes"],
    [1, "minutes"]
  ],
  "5minutes": [[1, "minutes"]],
  "1minutes": []
};
var eS = [
  [10, "years"],
  [5, "years"],
  [2, "years"],
  [1, "years"],
  [2, "quarters"],
  [1, "quarters"]
];
var tS = (e, t, r) => {
  const n = r.scale.domain()[0];
  let o = new Date(n.getTime());
  let i = new Date(n.getTime());
  switch (t.toLowerCase()) {
    case "minutes":
      i.setMinutes(o.getMinutes() + e);
      break;
    case "hours":
      i.setHours(o.getHours() + e);
      break;
    case "days":
      i.setDate(o.getDate() + e);
      break;
    case "weeks":
      i.setDate(o.getDate() + e * 7);
      break;
    case "months": {
      const a = o.getDate();
      i.setDate(1);
      i.setMonth(o.getMonth() + e);
      const s = new Date(
        i.getFullYear(),
        i.getMonth() + 1,
        0
      ).getDate();
      i.setDate(Math.min(a, s));
      break;
    }
    case "quarters":
      i.setMonth(o.getMonth() + e * 3);
      break;
    case "years":
      i.setFullYear(o.getFullYear() + e);
      break;
    default:
      break;
  }
  return {
    start: o,
    end: i
  };
};
var rS = (e, t) => {
  const { start: r, end: n } = tS(t[0], t[1], e);
  if (e.scale(r) === void 0 || e.scale(n) === void 0) {
    return Infinity;
  }
  return Math.abs(e.scale(r) - e.scale(n));
};
var $h = (e, t, r, n = false, o = false) => {
  let i = [100, "years"];
  let a = [];
  if (n) {
    a = eS;
  } else if (o) {
    const s = `${r?.[0]}${r?.[1]}`;
    a = QT[s];
  } else {
    a = KT;
  }
  for (const s of a) {
    const l = rS(e, s);
    if (l > t) {
      if (
        // prevents subticks from being more than 1 "level" away from their parent tick level
        // i.e. blocks super ticks being 'years' and major ticks being 'days', even if there is space
        r && Pa[r[1]] - Pa[s[1]] > 1
      ) {
        break;
      } else if (e.granularity && Pa[s[1]] < Pa[e.granularity]) {
        break;
      }
      i = s;
    } else {
      break;
    }
  }
  return i;
};
var nS = (e, t, r) => {
  const n = e.filter((c) => c.rank === "super");
  const o = t.scale.discontinuityProvider();
  const i = Object.values(
    ha(n, (c) => t.scale(c.value))
  ).map((c) => fi(c, (f) => f.value)).filter((c) => c !== void 0);
  let a = e.filter((c) => !c.hideTick && c.rank !== "super");
  const s = ha(
    a,
    (c) => (
      //clampUp - When given a value, if it falls within a discontinuity (i.e. an excluded domain range) it should be shifted forwards to the discontinuity boundary. Otherwise, it should be returned unchanged.
      // i.e. - this is the shifted value
      o.clampUp(c.value).toString()
    )
  );
  a = Object.values(s).map((c) => {
    const f = fi(
      c,
      (p) => ["minor", "major", "custom"].indexOf(p.rank ?? "minor")
    );
    return f;
  }).filter((c) => c !== void 0);
  const l = a.filter((c) => c.rank === "custom");
  for (const c of l) {
    const f = t.scale(c.value);
    const p = Ne(
      c.label.value,
      $e(r),
      "13px"
    );
    const u = a.find((_) => _.rank === "major");
    const d = u ? Ne(
      u.label.value,
      $e(r),
      "13px"
    ) : 0;
    const h = p / 2 + d / 2 + 4;
    a = a.map(
      (_) => _.rank === "major" && Math.abs(t.scale(_.value) - f) < h ? { ..._, rank: "minor" } : _
    );
  }
  return [...a, ...i];
};
var bl = (e, t, r, n = false) => {
  if (!e) return "";
  if (e[1] === "quarters") {
    return `Q`;
  }
  switch (t) {
    case "custom":
      switch (e[1]) {
        case "years":
          return "YYYY";
        case "months":
          return n ? "ttt" : "ttt YYYY";
        case "weeks":
        case "days":
          return "ttt D";
        case "hours":
        case "minutes":
          if (r && JT(r[1]) >= 3) {
            return "MM/DD HH:mm";
          } else {
            return "HH:mm";
          }
        default:
          return "";
      }
    case "super":
      switch (e[1]) {
        case "years":
          return "YYYY";
        case "months":
          return n ? "ttt" : "ttt YYYY";
        case "weeks":
        case "days":
          return "ttt D";
        case "hours":
        case "minutes":
          return "HH:mm";
        default:
          return "";
      }
    case "major":
    case "minor":
    default:
      switch (e[1]) {
        case "years":
          return "YYYY";
        case "months":
          return "MMM";
        case "weeks":
        case "days":
          return "D";
        case "hours":
          return "HH:mm";
        case "minutes":
          return ":mm";
        default:
      }
  }
};
var oS = (e) => {
  const [t, r] = e;
  const n = Math.floor((r.getTime() - t.getTime()) / Us);
  if (n <= 7) {
    return [1, "days"];
  } else if (n <= XT) {
    return [1, "months"];
  } else {
    return [1, "years"];
  }
};
var iS = (e) => {
  if (e[1] === "days") {
    return [1, "months"];
  } else if (e[1] === "months") {
    return [1, "years"];
  } else {
    return null;
  }
};
var aS = (e, t, r = false) => {
  let n = [];
  if (e === "days") {
    const [o, i] = [
      it.floor(t[0]),
      ne(it.ceil(t[1])).add(1, "s").toDate()
    ];
    n = it.every(1)?.range(o, i) ?? [];
  } else if (e === "months") {
    const [o, i] = [
      zt.floor(t[0]),
      ne(zt.ceil(t[1])).add(1, "s").toDate()
    ];
    n = zt.every(1)?.range(o, i) ?? [];
  } else if (r) {
    const [o, i] = [
      ul.floor(t[0]),
      ne(ul.ceil(t[1])).add(1, "s").toDate()
    ];
    n = ul.every(1)?.range(o, i) ?? [];
  } else {
    const [o, i] = [
      je.floor(t[0]),
      ne(je.ceil(t[1])).add(1, "s").toDate()
    ];
    n = je.every(1)?.range(o, i) ?? [];
  }
  if (n.length === 2) {
    return { values: [t[0]], hideTicks: true };
  }
  return { values: n, hideTicks: false };
};
var Bh = ({
  superTickDuration: e,
  domain: t,
  skipYear: r,
  isQuarters: n = false,
  scale: o
}) => {
  const { values: i, hideTicks: a } = e[1] !== "" ? aS(e[1], t, n) : { values: [], hideTicks: true };
  return i?.map((s) => {
    const l = n ? s : sS(s, e, o);
    const c = n ? ne(s).add(1, "year").toDate() : s;
    return {
      value: s,
      label: {
        pre: ne(l).format(
          bl(
            e,
            "super",
            void 0,
            r
          )
        ),
        value: ne(c).format(
          bl(
            e,
            "super",
            void 0,
            r
          )
        ),
        post: ""
      },
      rank: "super",
      hideTick: a
    };
  }) ?? [];
};
var Lh = ({
  timeSpan: e,
  domain: t,
  axisProperties: r,
  scaleWeekday: n
}) => {
  let o = cr;
  if (r?.startWeekday === "Monday") {
    o = cr;
  } else if (r?.startWeekday === "Tuesday") {
    o = Oo;
  } else if (r?.startWeekday === "Wednesday") {
    o = Fo;
  } else if (r?.startWeekday === "Thursday") {
    o = fr;
  } else if (r?.startWeekday === "Friday") {
    o = Po;
  } else if (r?.startWeekday === "Saturday") {
    o = Ro;
  } else if (r?.startWeekday === "Sunday") {
    o = Kt;
  }
  if (n === 1) {
    o = cr;
  } else if (n === 2) {
    o = Oo;
  } else if (n === 3) {
    o = Fo;
  } else if (n === 4) {
    o = fr;
  } else if (n === 5) {
    o = Po;
  } else if (n === 6) {
    o = Ro;
  } else if (n === 0) {
    o = Kt;
  }
  switch (e[1]) {
    case "minutes":
      return Tr.every(e[0])?.range(
        Tr.floor(t[0]),
        ne(t[1]).add(1, "s").toDate()
      );
    case "hours":
      return Sr.every(e[0])?.range(
        Sr(t[0]),
        ne(t[1]).add(1, "s").toDate()
      );
    case "days":
      return it.every(e[0])?.range(it(t[0]), ne(t[1]).add(1, "s").toDate());
    case "weeks":
      return o.every(e[0])?.range(
        o.floor(t[0]),
        ne(t[1]).add(1, "s").toDate()
      );
    case "months":
      return zt.every(e[0])?.range(
        zt.floor(t[0]),
        ne(t[1]).add(1, "s").toDate()
      );
    case "quarters":
      return Fn.every(e[0])?.range(
        Fn.floor(t[0]),
        ne(t[1]).add(1, "s").toDate()
      );
    case "years":
    default:
      return je.every(e[0])?.range(
        je.floor(t[0]),
        ne(t[1]).add(1, "s").toDate()
      );
  }
};
var sS = (e, t, r) => {
  let n = je.offset(e, -1 * t[0]);
  switch (t[1]) {
    case "minutes":
      n = Tr.offset(e, -1 * t[0]);
      break;
    case "hours":
      n = Sr.offset(e, -1 * t[0]);
      break;
    case "days":
      n = it.offset(e, -1 * t[0]);
      break;
    case "weeks":
      n = cr.offset(e, -1 * t[0]);
      break;
    case "months":
      n = zt.offset(e, -1 * t[0]);
      break;
  }
  return r?.scale.discontinuityProvider().clampDown(n) ?? n;
};
var lS = ({
  tickDateSpan: e,
  tickValues: t,
  scale: r
}) => {
  let n = [];
  const o = r.scale?.discontinuityProvider();
  for (const i of t) {
    const a = o.clampUp(i);
    if (i === a) {
      n.push(i);
    } else {
      if (e && e[1] !== "hours") {
        n.push(a);
      }
    }
  }
  return qp(n, (i) => i.toString());
};
var Vh = (e, t, r, n) => {
  const o = t.isTerminalClient ?? false;
  const i = e.fieldType === "quarter" || n?.dateAxisGrouping === "quarters" || e.granularity === "quarters";
  const a = e.fieldType === "month";
  const s = e.fieldType === "month/day";
  const l = e.scale.domain();
  let c = oS(l);
  let f = a || s && c[1] === "years" ? [] : Bh({
    superTickDuration: c,
    domain: l,
    skipYear: s,
    isQuarters: i,
    scale: e
  });
  let p = $h(
    e,
    r ? ZT : WT,
    c,
    i
  );
  let u = p ? Lh({
    timeSpan: p,
    domain: e.scale.domain(),
    axisProperties: n,
    scaleWeekday: e.type === "timeBand" ? e?.weekday : void 0
  }) ?? [] : [];
  u = lS({
    tickValues: u,
    tickDateSpan: p,
    scale: e
  });
  let d = u ? u?.map((v) => ({
    value: v,
    label: {
      pre: p[1] === "quarters" ? "Q" : "",
      value: ne(v).format(
        bl(p, "major")
      ),
      post: ""
    },
    rank: "major"
  })) : [];
  let h = $h(
    e,
    jT,
    p,
    i,
    true
  );
  const _ = h ? Lh({
    timeSpan: h,
    domain: e.scale.domain(),
    axisProperties: n
  }) : [];
  const m = _?.map((v) => ({
    value: v,
    label: {
      pre: "",
      value: "",
      post: ""
    },
    rank: "minor"
  })) ?? [];
  const x = c[1] === p?.[1];
  if (x) {
    const v = iS(c);
    if (v) {
      f = Bh({
        superTickDuration: v,
        domain: l,
        skipYear: s,
        isQuarters: i,
        scale: e
      });
      c = v;
    } else {
      f = [];
    }
  }
  const A = !n?.customTickDateFormat || n.customTickDateFormat === "auto" ? bl(
    [1, e.granularity ?? "days"],
    "custom",
    c
  ) : n.customTickDateFormat;
  const D = n?.forceFirstLast ? e.scale.domain().map((v) => ({
    value: v,
    label: {
      pre: "",
      value: ne(v).format(A),
      post: ""
    },
    rank: "custom"
  })) : [];
  const N = [
    ...f,
    ...D,
    ...d,
    ...m
  ];
  let F = Hp(N, ["value"], ["asc"]);
  let T = nS(
    F,
    e,
    o
  ).filter((v) => {
    if (i) {
      return ne(Fn(v?.value)).isBetween(
        Fn(e.scale.domain()[0]),
        Fn(e.scale.domain()[1]),
        "months",
        "[]"
        // i.e. inclusive
      );
    } else {
      return ne(v?.value).isBetween(
        e.scale.domain()[0],
        e.scale.domain()[1],
        e.isBand ? Dh(
          !i && !(e.granularity === "quarters") ? e.granularity : "quarters"
        ) : void 0,
        "[]"
        // i.e. inclusive
      );
    }
  });
  return T;
};

// src/charts/utils/ticks/miniAxisTick.utils.ts
var cS = (e, t) => {
  switch (t) {
    case "minutes":
    case "hours":
      return ne(e).format("h:mm[\n]MMM D");
    case "days":
    case "weeks":
      return ne(e).format("ttt D[\n]YYYY");
    case "months":
      return ne(e).format("ttt[\n]YYYY");
    case "years":
      return ne(e).format("YYYY");
    case "quarters":
      return ne(e).format("[Q]Q[\n]YYYY");
    default:
      return "";
  }
};
var Hh = (e) => {
  const t = e.granularity ?? "days";
  const r = e.scale.domain();
  const n = r[0];
  const o = r[1];
  return [n, o].map((i) => ({
    value: i,
    label: {
      pre: "",
      value: cS(i, t),
      post: ""
    }
  }));
};

// src/charts/utils/ticks/numericTick.utils.ts
var fS = 20;
var uS = ({
  value: e,
  axisProperties: t,
  isLastTick: r,
  unit: n,
  displayPercentage: o = false
}) => {
  let i = "";
  let a = "";
  if (r) {
    let s = Aa[n];
    if (t?.forceLowerCaseUnits) {
      s = s.toLowerCase();
    }
    i = t.label?.prefix ?? "";
    a = `${o ? "%" : ""}${s}${t.label?.postfix ?? ""}`;
  }
  return {
    pre: i,
    value: e,
    post: a
  };
};
var pS = (e) => {
  const t = Math.abs(e.scale.range()[1] - e.scale.range()[0]);
  switch (e.type) {
    case "time":
      if (t < 550) {
        return 3;
      } else {
        return 8;
      }
    case "linear":
      if (t < 150) {
        return 3;
      } else if (t < 280) {
        return 4;
      } else {
        return 6;
      }
    case "band":
    default:
      return e.scale.domain().length;
  }
};
var Uh = (e, t, r = true) => {
  const n = pS(e);
  if (!t?.min && !t?.max && r) {
    e.scale = e.scale.nice(n);
  }
  let o = e.scale.ticks(n);
  return o;
};
var dS = (e, t) => {
  const r = [];
  const n = e.scale.domain()[0];
  const o = e.scale.domain()[1];
  const i = Math.max(
    zs(t),
    zs(n)
  );
  for (let a = n; a <= o; a += t) {
    r.push(+a.toFixed(i));
  }
  return r;
};
var Gh = ({
  scale: e,
  isPrimary: t,
  chartData: r,
  nice: n = true
}) => {
  const o = r.axis ? r.axis[t ? "primary" : "secondary"] ?? {} : {};
  const i = o.forceFirstLast ?? false;
  const a = o.interval ?? -1;
  let s = [];
  if (a <= 0) {
    s = Uh(e, o, n);
  }
  if (a > 0) {
    const d = e.scale.domain();
    const h = e.scale.range();
    const _ = Math.abs(d[1] - d[0]);
    const m = Math.abs(h[1] - h[0]);
    const x = m / _ * a;
    const A = m / 2;
    const D = x > fS && x <= A;
    if (D) {
      s = dS(e, a);
    } else {
      s = Uh(e, o, n);
    }
  }
  if (i && s.length >= 2) {
    if (e?.originalDomain?.[0]) {
      s[0] = +e.originalDomain[0];
    }
    if (e?.originalDomain?.[1]) {
      s[s.length - 1] = +e.originalDomain[1];
    }
  }
  const l = !o?.displayFullNumbers ? Na(Math.max(...s)) : "none";
  const c = s.map((d) => Ya(d, l));
  const f = dm(c);
  const p = o?.preventNumericalFormatting ?? false;
  const u = eo(r);
  return s.map((d, h) => ({
    value: d,
    label: uS({
      value: Ai(c[h], {
        decimals: o.decimals,
        maxMantissa: f,
        commas: p ? false : l === "none"
      }),
      axisProperties: o,
      unit: l,
      isLastTick: h === s.length - 1,
      displayPercentage: u
    })
  }));
};

// src/charts/utils/ticks/tick.utils.ts
var qh = (e) => `${e.pre}${e.value}${e.post}`;
function mS(e) {
  const t = e.split(/\r?\n|\r/);
  if (t.length === 1) {
    return e;
  }
  return t.reduce(
    (r, n) => n.replace(".", "").length > r.replace(".", "").length ? n : r
  );
}
var Jf = (e, t) => {
  const r = e.pre.length <= af ? e.pre : "";
  const n = mS(e.value);
  const o = e.post.length <= xm ? e.post : "";
  if (t) return `${r}${n}`;
  return `${r}${n}${o}`;
};
var zh = (e) => {
  const t = e.pre.length <= af ? e.pre : "";
  const r = e.value;
  return `${t}${r}`;
};
var UR = (e = "automatic", t, r) => {
  const n = {
    yearTracker: -1,
    monthTracker: -1,
    dayTracker: -1,
    hourTracker: -1
  };
  const o = _S(n, r);
  const i = o[e] || o["automatic"];
  return t.map((a) => {
    const s = ne(a).year();
    const l = ne(a).month();
    const c = ne(a).day();
    const f = ne(a).hour();
    const p = i(a);
    if (s !== n.yearTracker) {
      n.yearTracker = s;
    }
    if (l !== n.monthTracker) {
      n.monthTracker = l;
    }
    if (c !== n.dayTracker) {
      n.dayTracker = c;
    }
    if (f !== n.hourTracker) {
      n.hourTracker = f;
    }
    return p;
  });
};
var hS = (e) => {
  return {
    pre: "",
    value: e,
    post: ""
  };
};
var Wr = (e, t, r, n, o, i) => {
  if (n === "horizontal") {
    const a = Ne(
      Jf(e.label),
      $e(o),
      `${Ve(i)}px`
    );
    const s = t.scale(t.formatValue(e.value));
    const l = t.scale.range()[r === "start" ? 0 : 1];
    if (r === "start") {
      if (s - a / 2 < l) {
        return Math.abs(s - a / 2 + l);
      } else {
        return 0;
      }
    } else {
      if (s + a / 2 > l) {
        return Math.abs(s + a / 2 - l);
      } else {
        return 0;
      }
    }
  } else {
    const a = Zs + Ws;
    const s = t.scale(t.formatValue(e.value));
    const l = r === "end" ? 0 : t.scale.range()[0];
    if (s - a < l) {
      if (r === "start") {
        return Math.abs(s - a + l);
      } else {
        return Math.abs(s - a - l);
      }
    } else {
      return 0;
    }
  }
};
var Wh = ({
  scale: e,
  isPrimary: t,
  chartData: r,
  options: n,
  nice: o = true,
  isMobile: i
}) => {
  const a = r.axis ? t ? r.axis.primary : r.axis.secondary : {};
  if (e.type === "band") {
    return e.scale.domain().map((s) => ({
      value: s,
      label: hS(s)
      // this is where we'd format the label (if needed)
    }));
  } else if (e.type === "time" || e.type === "timeBand") {
    if (r.isSubChart) {
      return Hh(e);
    } else {
      return Vh(e, n, i, a);
    }
  } else if (e.type === "linear") {
    return Gh({ scale: e, isPrimary: t, chartData: r, nice: o });
  } else {
    return [];
  }
};
var Ho = (e, t) => ({
  value: e,
  label: {
    pre: "",
    value: ne(e).format(t),
    post: ""
  }
});
var Oi = (e, t, r, n) => {
  const o = ne(e).year();
  const i = o !== n.yearTracker ? t : r;
  const a = (r === "Q" ? "Q" : "") + ne(e).format(i);
  return {
    value: e,
    label: {
      pre: "",
      value: a,
      post: ""
    }
  };
};
var gS = (e) => {
  const t = ne(e).day();
  const r = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  return {
    value: e,
    label: {
      pre: "",
      value: r[t],
      post: ""
    }
  };
};
var vl = (e, t, r, n) => {
  const o = ne(e).year();
  const i = ne(e).month();
  const a = ne(e).day();
  let s = "";
  if (r.month) {
    s += i !== n.monthTracker ? " " + r.month : "";
  }
  if (r.day) {
    s += a !== n.dayTracker ? " " + r.day : "";
  }
  if (r.dayAndMonth) {
    s += i !== n.monthTracker || a !== n.dayTracker ? " " + r.dayAndMonth : "";
  }
  if (r.year) {
    s += o !== n.yearTracker ? r.year : "";
  }
  s = t + (s ? "\n" + s.trim() : "");
  return {
    value: e,
    label: {
      pre: "",
      value: ne(e).format(s),
      post: ""
    }
  };
};
var _S = (e, t) => {
  const r = {
    "YYYY/M/D": (n) => Oi(n, "M/D\nYYYY", "M/D", e),
    YYYY: (n) => Ho(n, "YYYY"),
    "YYYY, 'YY": (n) => Oi(n, "YYYY", "'YY", e),
    "'YY": (n) => Ho(n, "'YY"),
    "YYYY MMM": (n) => Oi(n, "MMM\nYYYY", "MMM", e),
    "YYYY MMMM": (n) => Oi(n, "MMMM\nYYYY", "MMMM", e),
    "MMM 'YY": (n) => Ho(n, "MMM\n'YY"),
    "MMMM D, YYYY": (n) => vl(n, "MMMM D", { year: "YYYY" }, e),
    MMM: (n) => Ho(n, "MMM"),
    MMMM: (n) => Ho(n, "MMMM"),
    "MMM D": (n) => Ho(n, "MMM D"),
    "M/D": (n) => Ho(n, "M/D"),
    "YYYY QN, QN+1": (n) => Oi(n, "Q\nYYYY", "Q", e),
    "'YY QN": (n) => Oi(n, `Q
'YY`, "Q", e),
    automatic: (n) => vl(
      n,
      Xp[t],
      xS(t),
      e
    ),
    "HH, MMM D": (n) => vl(n, "HH:mm", { dayAndMonth: "MMM D" }, e),
    "HH, MM/D": (n) => vl(n, "HH:mm", { dayAndMonth: "MM/D" }, e),
    "days of week": (n) => gS(n)
  };
  return r;
};
var GR = (e) => {
  const t = e.map((r) => {
    return ne(r).year();
  });
  return new Set(t).size === e.length;
};
var qR = (e) => {
  const [t, r] = e;
  return yS(t, r);
};
var yS = (e, t) => {
  if (!e || !t) return "";
  const r = Math.floor((t.getTime() - e.getTime()) / Us);
  if (r <= 2) {
    return Fc;
  } else if (r > 2 && r < 16) {
    return Pc;
  } else if (r >= 16 && r < 120) {
    return Rc;
  } else if (r >= 120 && r < 365 * 4) {
    return $c;
  } else if (r >= 365 * 4 && r < 365 * 8) {
    return zp;
  } else if (r >= 365 * 8 && r < 365 * 15) {
    return Wp;
  } else if (r >= 365 * 15 && r < 365 * 100) {
    return Zp;
  } else {
    return jp;
  }
};
var xS = (e) => {
  switch (e) {
    case Fc:
      return {
        day: "MMM D"
      };
    case Pc:
    case Rc:
      return {
        month: "MMM"
      };
    case $c:
      return {
        year: "YYYY"
      };
    default:
      return {};
  }
};

// src/charts/utils/axis-padding-calculators/horizontalDirectLabelPaddingCalculator.ts
var Zh = ({
  chartData: e,
  ticks: t,
  scale: r,
  isTerminalClient: n,
  isMobile: o
}) => {
  const i = $e(n);
  const a = `${Ve(o)}px`;
  const s = Wr(
    t[0],
    r,
    "start",
    "horizontal",
    n,
    o
  );
  const l = Wr(
    t[t.length - 1],
    r,
    "end",
    "horizontal",
    n,
    o
  );
  const c = Oe(e);
  const f = c.map((_) => _.data).flat();
  let p = 0;
  let u = 0;
  f.forEach((_, m) => {
    let x = Ne(
      Ca({
        v: _,
        chartData: e,
        isPrimary: false,
        maxPrefixPostfixLength: m === 0 ? 100 : 0
      }),
      i,
      a
    );
    const A = (D, N) => Math.max(D, N);
    if (e.type === "hbar") {
      if (_ >= 0) {
        u = A(u, x);
      } else {
        p = A(p, x);
      }
    } else if (e.type === "horizontalDumbbell" && e.dumbbell?.useArrow) {
      u = A(u, x);
      p = A(p, x);
    }
  });
  const d = p > 0 ? p + cf + lf : 0;
  const h = u > 0 ? u + cf + lf : 0;
  return {
    ticks: t,
    padding: {
      main: Ti,
      // assumes one line
      start: Math.max(s, d),
      // left
      end: Math.max(l, h),
      // right
      tickLength: Jt,
      textShift: 0
      // no text shift for horizontal direct labels
    }
  };
};

// src/charts/utils/axis-padding-calculators/bandHorizontalPaddingCalculator.ts
var jh = ({
  ticks: e,
  scale: t,
  isTerminalClient: r,
  isMobile: n
}) => {
  const o = e.map(
    (a) => ll({
      text: qh(a.label),
      width: t.scale.bandwidth(),
      fontFamily: $e(r),
      fontSize: Ve(n)
    })
  );
  const i = Math.max(...o);
  return {
    ticks: e,
    padding: {
      main: i + Jt + Ws,
      // vertical padding
      start: 0,
      // won't have overhang becuase text wraps to fit
      end: 0,
      // see above
      tickLength: Jt,
      textShift: 0
    }
  };
};

// src/charts/utils/axis-padding-calculators/bandVerticalPaddingCalculator.ts
var Xh = ({
  ticks: e,
  isTerminalClient: t,
  isMobile: r,
  maxPadding: n = 0
}) => {
  let o = 0;
  const i = $e(t);
  const a = Ve(r);
  e.forEach((l) => {
    const c = Ne(
      `${l.value}`,
      i,
      `${a}px`
    );
    if (c > o) {
      o = c;
    }
  });
  const s = Math.min(
    o + wm,
    n
  );
  return {
    ticks: e,
    padding: {
      main: s,
      start: 0,
      end: 0,
      tickLength: 7,
      // TODO: calculate? this may be static for vertical band scales
      textShift: 0
    }
  };
};

// src/charts/utils/axis-padding-calculators/linearHorizontalPaddingCalculator.ts
var Jh = ({
  ticks: e,
  scale: t,
  isTerminalClient: r,
  isMobile: n
}) => {
  const o = Wr(
    e[0],
    t,
    "start",
    "horizontal",
    r,
    n
  );
  const i = Wr(
    e[e.length - 1],
    t,
    "end",
    "horizontal",
    r,
    n
  );
  return {
    ticks: e,
    padding: {
      main: Ti,
      // vertical padding - assumes one line (for now)
      start: o,
      // left
      end: i,
      // right
      tickLength: Jt,
      textShift: 0
    }
  };
};

// src/charts/utils/axis-padding-calculators/paddingCalculator.utils.ts
var Tl = (e, t, r) => {
  const n = $e(t);
  const o = `${Ve(r)}px`;
  return e.reduce((i, a, s) => {
    if (s === 0 || Ne(a.label.value, n, o) > Ne(i, n, o)) {
      return a.label.value;
    } else {
      return i;
    }
  }, "");
};

// src/charts/utils/axis-padding-calculators/linearVerticalPaddingCalculator.ts
var Kh = ({
  ticks: e,
  scale: t,
  isTerminalClient: r,
  axisProperties: n,
  isMobile: o,
  isOppositeSide: i
}) => {
  const a = Boolean(n?.unit) && n?.unit !== "";
  const s = $e(r ?? false);
  const l = Tl(
    e,
    r,
    o
  );
  const c = {
    pre: e[e.length - 1].label.pre,
    value: l,
    post: e[e.length - 1].label.post
  };
  const f = Ne(
    Jf(c, i),
    s,
    `${Ve(o)}px`
  );
  const p = Ne(
    zh(c),
    s,
    `${Ve(o)}px`
  );
  const u = Wr(
    e[e.length - 1],
    // calculate length of tick at the end of the scale
    t,
    "end",
    "vertical",
    r,
    o
  );
  const d = a ? Ve(o) + js : 0;
  return {
    ticks: e,
    padding: {
      main: f,
      // horizontal padding
      start: 0,
      // bottom
      end: u + d,
      // top
      tickLength: p,
      textShift: Math.abs(f - p)
    }
  };
};

// src/charts/_common/Axes/axis.utils.ts
var x$ = (e, t, r, n) => {
  const o = 8;
  if (t.length === 0) return [];
  let i = [];
  const [a, s] = e.scale.domain();
  const l = e.scale(t[0].value) - e.scale(a);
  const c = Ne(
    t[0].label.pre,
    $e(r.isTerminalClient ?? false),
    `${Ve(n)}px`
  ) + o;
  if (l > c) {
    i = [
      {
        start: 0,
        end: e.scale(t[0].value),
        position: (0 + e.scale(t[0].value)) / 2,
        label: t[0].label.pre
      }
    ];
  }
  const f = t.reduce((p, u, d) => {
    let h = {
      start: 0,
      end: 0,
      position: 0,
      label: ""
    };
    if (d === t.length - 1) {
      h = {
        start: e.scale(u.value),
        end: e.scale.range()[1],
        position: (e.scale(u.value) + e.scale.range()[1]) / 2,
        label: u.label.value
      };
    } else {
      h = {
        start: e.scale(u.value),
        end: e.scale(t[d + 1].value),
        position: (e.scale(u.value) + e.scale(t[d + 1].value)) / 2,
        label: u.label.value
      };
    }
    const _ = Ne(
      h.label,
      $e(r.isTerminalClient ?? false),
      `${Ve(n)}px`
    ) + o;
    if (h.end - h.start > _) {
      return [...p, h];
    } else {
      return p;
    }
  }, []);
  return [...i, ...f];
};
var b$ = ({
  tickValue: e,
  variant: t
}) => {
  return e === 0 ? t === "dark" ? Dm : Mm : t === "dark" ? Sm : Tm;
};
var v$ = (e) => e === "dark" ? vm : bm;
var bS = (e) => {
  return sf + // tick
  Xs + // gap
  e + // number
  Xs + // gap
  e;
};
var vS = (e) => {
  return sf + Xs + e;
};
var Qh = ({
  hasSuperTicks: e,
  isMobile: t
}) => {
  const r = Ve(t);
  if (e) {
    return bS(r);
  } else {
    return vS(r);
  }
};
var T$ = (e, t) => {
  return e === t - 1;
};

// src/charts/_common/Axes/config.ts
var eg = 7;

// src/charts/utils/axis-padding-calculators/timeHorizontalPaddingCalculator.ts
var tg = ({
  ticks: e,
  scale: t,
  isTerminalClient: r,
  isMobile: n,
  isSubChart: o
}) => {
  const i = o;
  const a = e.filter(
    (f) => f.label.value !== "" && f.rank !== "super"
  );
  const s = a.length > 0 ? Wr(
    a[0],
    t,
    "start",
    "horizontal",
    r,
    n
  ) : 0;
  const l = a.length > 0 ? Wr(
    a[a.length - 1],
    t,
    "end",
    "horizontal",
    r,
    n
  ) : 0;
  const c = e.some((f) => f.rank === "super");
  return {
    ticks: e,
    padding: {
      main: i ? Jt + eg + (Ve(true) + 2) * 2 : Qh({ hasSuperTicks: c, isMobile: n }),
      start: s,
      // left
      end: l,
      // right
      tickLength: Jt,
      textShift: 0
    }
  };
};

// src/charts/utils/axis-padding-calculators/timeVerticalPaddingCalculator.ts
var rg = ({
  ticks: e
}) => {
  return {
    ticks: e,
    padding: {
      main: 28,
      // horizontal space - TODO: calculate longest value
      start: 0,
      // top
      end: 0,
      // bottom
      tickLength: 7,
      // TODO: calculate? this may be static for vertical time axes
      textShift: 0
    }
  };
};

// src/charts/utils/axis-padding-calculators/ruledVerticalRulePaddingCalculator.ts
var ng = ({
  ticks: e,
  isTerminalClient: t,
  axisProperties: r,
  isMobile: n
}) => {
  const o = Boolean(r?.unit) && r?.unit !== "";
  const i = $e(t ?? false);
  const a = Tl(
    e,
    t,
    n
  );
  const s = {
    pre: e[e.length - 1].label.pre,
    value: a,
    post: e[e.length - 1].label.post
  };
  const l = Ne(
    `${s.pre}${s.value}${s.post}`,
    i,
    `${Ve(n)}px`
  ) + Jt * 2;
  const c = Ve(n) / 2;
  const f = o ? Ve(n) + js : 0;
  return {
    ticks: e,
    padding: {
      main: l,
      start: 0,
      end: c + f,
      // top
      tickLength: 0,
      textShift: 0
    }
  };
};

// src/charts/utils/scales/scale-types/annotation/AnnotationScale.ts
var Ra = class {
  scale;
  type = "annotation";
  constructor({
    scale: t
  }) {
    this.scale = t;
  }
  formatValue(t) {
    return t;
  }
  stringifyValue(t) {
    return `${t}`;
  }
};

// src/charts/utils/tooltip/tooltip.utils.ts
var og = 10;
var TS = ["bar", "stackedVbar"];
var U$ = ({
  width: e,
  height: t,
  tooltipPositionPx: r,
  settings: n = {
    mode: "quadrant",
    vertical: { offset: 0, transformAmount: 0 },
    horizontal: { offset: 0, transformAmount: 0 }
  }
}) => {
  const o = n.horizontal?.offset || og;
  const i = n.vertical?.offset || og;
  const a = r.x / e;
  const s = a <= 0.5 ? "left" : "right";
  const l = s === "left" ? `left: ${o + (n.horizontal?.transformAmount ?? 0)}px;` : `right: ${o - (n.horizontal?.transformAmount ?? 0)}px;`;
  if (n.mode === "horizontal-only") {
    return l;
  }
  if (n.mode === "center-vertical") {
    return `top: 50%; transform: translateY(-50%);
      ${l}`;
  }
  const c = r.y / t;
  const f = c <= 0.5 ? "top" : "bottom";
  if (s === "left" && f === "top") {
    return `top: ${i}px;
      left: ${o}px;`;
  } else if (s === "left" && f === "bottom") {
    return `bottom: ${i}px;
      left: ${o}px;`;
  } else if (s === "right" && f === "top") {
    return `top: ${i}px;
      right: ${o}px;`;
  } else {
    return `bottom: ${i}px;
      right: ${o}px;`;
  }
};
var Sl = ({
  chartData: e,
  field: t,
  scale: r,
  leftPadding: n,
  scaleIsVertical: o
}) => {
  let i = [];
  if (r.isBand && t.data) {
    const s = Lm(e);
    const l = et(e);
    const c = Boolean(l?.hasBar && l?.isTime);
    const f = Boolean(l?.hasBar && !l.isStacked);
    const p = (s || f) && !l?.tooltipOverride ? Oe(e).length : 1;
    const u = t.data.filter((d) => d !== null && d !== void 0 && d !== "").reduce((d, h) => {
      const _ = SS({
        curDataPoint: h,
        numSubBands: p,
        considerSubBands: s,
        isGroupedBar: f,
        barLineInfo: l,
        chartData: e,
        field: t,
        scale: r,
        bandwidth: r.scale.bandwidth(),
        subBandWidth: r.scale.subBandWidth(p)
      });
      return [...d, ..._];
    }, []).sort((d, h) => d.pos - h.pos);
    if (TS.includes(e.type) || c) {
      i = MS(u);
    } else {
      i = u;
    }
  } else if (t.data) {
    i = t.data.filter((s) => s !== null && s !== void 0 && s !== "").map((s) => ({
      pos: r.scale(r.formatValue(s)),
      data: s
    })).sort((s, l) => s.pos - l.pos);
  }
  const a = (s) => {
    if (i.length === 0) {
      return { index: 0, value: null };
    }
    if (i.length === 1) {
      return {
        index: 0,
        value: i[0].data,
        subBandIndex: i[0].subBand
      };
    }
    const l = o ? s[1] - n : s[0] - n;
    let c = 0;
    let f = i.length - 1;
    let p = Math.round((f + c) / 2);
    while (Math.abs(c - f) > 1) {
      if (i[p].pos >= l) {
        f = p;
      } else {
        c = p;
      }
      p = Math.round((f + c) / 2);
    }
    const u = Math.abs(i[c].pos - l);
    const d = Math.abs(i[f].pos - l);
    const h = u < d ? c : f;
    return {
      index: h,
      value: i[h].data,
      subBandIndex: i[h].subBand
    };
  };
  a.domain = (s) => s;
  a.range = (s) => s;
  return new Ml({ scale: a });
};
function SS({
  curDataPoint: e,
  numSubBands: t,
  considerSubBands: r,
  isGroupedBar: n,
  barLineInfo: o,
  chartData: i,
  field: a,
  scale: s
}) {
  const l = [];
  for (let c = 0; c < t; c++) {
    const f = s.formatValue(e);
    if (f === void 0 || s.scale === void 0) {
      continue;
    }
    let p = 0;
    if ((r || n) && !o?.tooltipOverride) {
      if (typeof s.scale === "function" && "subBandWidth" in s.scale) {
        p = s.scale(f, c, t) ?? 0;
      }
    } else {
      if (typeof s.scale === "function" && "bandwidth" in s.scale) {
        p = s.scale(f, 0) ?? 0;
      }
    }
    let u;
    const d = Oe(i);
    if (d[c] && a.data) {
      const h = a.data.indexOf(e);
      if (h >= 0 && d[c].data) {
        if (i.type === "bar") {
          u = d?.[c]?.data?.[h] ?? 0;
        } else if (i.type === "stackedVbar") {
          u = d.reduce(
            (_, m) => _ + (m.data?.[h] ?? 0),
            0
          );
        }
      }
    }
    l.push({
      pos: p,
      data: e,
      subBand: r || n ? c : void 0,
      yValue: u
    });
  }
  return l;
}
function MS(e) {
  const t = ha(e, "pos");
  return Object.values(t).map((r) => {
    if (r.length === 1) {
      return r[0];
    }
    return fi(
      r,
      (n) => n.yValue !== void 0 ? n.yValue : -Infinity
    ) || r[0];
  }).sort((r, n) => r.pos - n.pos);
}
var G$ = ({
  tooltipIndex: e,
  primaryValue: t,
  primaryScale: r,
  xPosition: n = 0,
  fieldIndex: o,
  sortedBarData: i,
  numSeriesPerMultiple: a
}) => {
  if (!e || !t) return false;
  const s = r.stringifyValue(
    e.value
  );
  const l = r.stringifyValue(t);
  const c = !o || (a ? (o - 1) % a === e.subBandIndex : o - 1 === e.subBandIndex);
  const f = i?.filter(
    (p) => Math.abs(p.xPos - n) < 1e-3
  );
  if (f && f.length > 1) {
    const p = fi(f, (d) => {
      if (d.totalHeight !== void 0) {
        return d.totalHeight;
      }
      return d.yValue !== void 0 ? d.yValue : d.value !== void 0 ? d.value : -Infinity;
    });
    const u = p && r.stringifyValue(p.primaryValue) === s;
    return u && c;
  }
  return s === l && c;
};

// src/charts/utils/annotation/annotation.utils.ts
var ig = ({
  xField: e,
  yFields: t,
  xScale: r,
  yScale: n,
  leftPadding: o,
  topPadding: i = 0,
  maxDistance: a = 15,
  chartData: s
}) => {
  let l = [];
  if (e.data && r.scale && n.scale) {
    l = [];
    const d = s?.type === "area";
    const h = s ? Oe(s).map((x) => x.id) : [];
    let _ = h;
    if (d && s) {
      const x = s.area?.order ?? "none";
      _ = Tf({
        fields: t,
        order: x
      });
    }
    const m = e.data.filter((x) => x !== null || x !== void 0 || x !== "").map((x, A) => ({
      index: A,
      pos: r.scale(r.formatValue(x)),
      data: x
    })).sort((x, A) => x.pos - A.pos);
    t.forEach((x) => {
      if (!x.data) return;
      const A = Math.min(e.data.length, x.data.length);
      for (let D = 0; D < A; D++) {
        const N = m[D];
        const F = N?.data;
        let T = x.data?.[N?.index];
        if (d && s) {
          const Y = {};
          t.forEach((O) => {
            if (O.data && O.data[N.index] !== null && O.data[N.index] !== void 0) {
              Y[O.id] = O.data[N.index];
            }
          });
          const E = _.indexOf(x.id);
          if (E !== -1) {
            T = _.slice(0, E + 1).reduce((O, H) => {
              const R = Y[H] ?? 0;
              if (rt(R) && R > 0) {
                return O + R;
              }
              return O;
            }, 0);
          }
        }
        if (F === null || F === void 0 || F === "" || T === null || T === void 0 || T === "") {
          continue;
        }
        const v = r.scale(r.formatValue(F));
        const S = n.scale(n.formatValue(T));
        if (isFinite(v) && isFinite(S)) {
          l.push({
            x: v,
            y: S,
            xData: F,
            yData: T,
            index: D,
            seriesId: x.id,
            seriesName: x.name
          });
        }
      }
    });
  }
  const c = (d, h, _, m) => {
    return Math.sqrt(Math.pow(_ - d, 2) + Math.pow(m - h, 2));
  };
  const f = a;
  const p = /* @__PURE__ */ new Map();
  l.forEach((d) => {
    const h = Math.floor(d.x / f);
    const _ = Math.floor(d.y / f);
    const m = `${h},${_}`;
    if (!p.has(m)) {
      p.set(m, []);
    }
    p.get(m).push(d);
  });
  const u = (d) => {
    if (l.length === 0) {
      return { index: 0, value: null };
    }
    const h = d[0] - o;
    const _ = d[1] - i;
    const m = Math.floor(h / f);
    const x = Math.floor(_ / f);
    let A = null;
    let D = Infinity;
    for (let N = -1; N <= 1; N++) {
      for (let F = -1; F <= 1; F++) {
        const T = `${m + N},${x + F}`;
        const v = p.get(T);
        if (v) {
          for (const S of v) {
            const Y = c(
              h,
              _,
              S.x,
              S.y
            );
            if (Y <= a && Y < D) {
              D = Y;
              A = S;
              A.distance = Y;
            }
          }
        }
      }
    }
    if (!A) {
      return { index: -1, value: null };
    }
    return {
      index: A.index,
      value: {
        x: A.xData,
        y: A.yData,
        seriesId: A.seriesId,
        seriesName: A.seriesName,
        distance: A.distance
      }
    };
  };
  u.domain = (d) => d;
  u.range = (d) => d;
  return new Ra({ scale: u });
};
var X$ = ({
  xField: e,
  axisConfigs: t,
  xScale: r,
  leftPadding: n,
  topPadding: o = 0,
  maxDistance: i = 15
}) => {
  let a = [];
  if (e.data && r.scale) {
    a = [];
    const p = e.data.filter((u) => u !== null && u !== void 0 && u !== "").map((u, d) => ({
      index: d,
      pos: r.scale(r.formatValue(u)),
      data: u
    })).sort((u, d) => u.pos - d.pos);
    t.forEach((u, d) => {
      const { yFields: h, yScale: _, chartData: m } = u;
      if (!_.scale) return;
      const x = m?.type === "area";
      const A = m ? Oe(m).map((N) => N.id) : [];
      let D = A;
      if (x && m) {
        const N = m.area?.order ?? "none";
        D = Tf({
          fields: h,
          order: N
        });
      }
      h.forEach((N) => {
        if (!N.data) return;
        const F = Math.min(e.data.length, N.data.length);
        for (let T = 0; T < F; T++) {
          const v = p[T];
          const S = v?.data;
          let Y = N.data?.[v?.index];
          if (x && m) {
            const H = {};
            h.forEach((L) => {
              if (L.data && L.data[v.index] !== null && L.data[v.index] !== void 0) {
                H[L.id] = L.data[v.index];
              }
            });
            const R = D.indexOf(N.id);
            if (R !== -1) {
              Y = D.slice(0, R + 1).reduce((L, G) => {
                const z = H[G] ?? 0;
                if (rt(z) && z > 0) {
                  return L + z;
                }
                return L;
              }, 0);
            }
          }
          if (S === null || S === void 0 || S === "" || Y === null || Y === void 0 || Y === "") {
            continue;
          }
          const E = r.scale(r.formatValue(S));
          const O = _.scale(_.formatValue(Y));
          if (isFinite(E) && isFinite(O)) {
            a.push({
              x: E,
              y: O,
              xData: S,
              yData: Y,
              index: T,
              seriesId: N.id,
              seriesName: N.name,
              axisIndex: d
              // Track which axis this point belongs to
            });
          }
        }
      });
    });
  }
  const s = (p, u, d, h) => {
    return Math.sqrt(Math.pow(d - p, 2) + Math.pow(h - u, 2));
  };
  const l = i;
  const c = /* @__PURE__ */ new Map();
  a.forEach((p) => {
    const u = Math.floor(p.x / l);
    const d = Math.floor(p.y / l);
    const h = `${u},${d}`;
    if (!c.has(h)) {
      c.set(h, []);
    }
    c.get(h).push(p);
  });
  const f = (p) => {
    if (a.length === 0) {
      return { index: 0, value: null };
    }
    const u = p[0] - n;
    const d = p[1] - o;
    const h = Math.floor(u / l);
    const _ = Math.floor(d / l);
    let m = null;
    let x = Infinity;
    for (let A = -1; A <= 1; A++) {
      for (let D = -1; D <= 1; D++) {
        const N = `${h + A},${_ + D}`;
        const F = c.get(N);
        if (F) {
          for (const T of F) {
            const v = s(
              u,
              d,
              T.x,
              T.y
            );
            if (v <= i && v < x) {
              x = v;
              m = T;
              m.distance = v;
            }
          }
        }
      }
    }
    if (!m) {
      return { index: -1, value: null };
    }
    return {
      index: m.index,
      value: {
        x: m.xData,
        y: m.yData,
        seriesId: m.seriesId,
        seriesName: m.seriesName,
        distance: m.distance,
        axisIndex: m.axisIndex
        // Include which axis the point belongs to
      }
    };
  };
  f.domain = (p) => p;
  f.range = (p) => p;
  return new Ra({ scale: f });
};

// src/charts/utils/textAnnotation.utils.ts
var ag = 80;
var sg = 14;
var DS = 4;
var wS = 376;
var Ae = DS + 4;
var lg = 5.5;
var Uo = 12;
var aB = 14;
var sB = 1;
var lB = 100;
var cB = (e) => {
  switch (e) {
    case "top":
    case "bottom":
      return "middle";
    case "left":
    case "leftTop":
    case "leftBottom":
      return "end";
    case "right":
    case "rightTop":
    case "rightBottom":
      return "start";
    default:
      return "middle";
  }
};
var fB = (e) => {
  switch (e) {
    case "top":
    case "leftTop":
    case "rightTop":
      return "auto";
    case "bottom":
    case "leftBottom":
    case "rightBottom":
      return "hanging";
    default:
      return "middle";
  }
};
var ES = (e) => {
  const t = e.xOffset ?? 0;
  switch (e.orientation) {
    case "top":
    case "bottom":
      return t;
    case "left":
    case "leftTop":
    case "leftBottom":
      return t - Ae;
    case "right":
    case "rightTop":
    case "rightBottom":
      return t + Ae;
    default:
      return t;
  }
};
var AS = (e) => {
  const t = e.yOffset ?? 0;
  switch (e.orientation) {
    case "top":
    case "leftTop":
    case "rightTop":
      return t - Ae;
    case "bottom":
    case "leftBottom":
    case "rightBottom":
      return t + Ae;
    default:
      return t;
  }
};
var uB = (e) => {
  switch (e) {
    case "top":
    case "leftTop":
    case "rightTop":
      return "up";
    case "left":
    case "right":
      return "middle";
    default:
      return "down";
  }
};
var NS = ({
  seriesDataLookup: e,
  lookupPositionKey: t,
  seriesId: r,
  scale: n,
  chartData: o
}) => {
  if (!e || e[t] === void 0) {
    return void 0;
  }
  const i = Oe(o).map((p) => p.id);
  const a = e?.[t];
  const s = eo(o) ? cl(a) : a;
  const l = s?.[r];
  let c;
  if (o.type === "area") {
    const p = o.area?.order ?? "none";
    const u = $m({
      nonPrimaryFieldIds: i,
      order: p,
      seriesDataLookup: e
    });
    const d = u.indexOf(r);
    if (d !== -1) {
      c = u.slice(0, d + 1).reduce((h, _) => {
        const m = s[_] ?? 0;
        if (rt(m) && m > 0) {
          return h + m;
        }
        return h;
      }, 0);
    } else {
      c = l ?? 0;
    }
  } else {
    c = Object.values(
      Up(s, i)
      // only use keys that are in the chart data (stacked panels may have more)
    ).reduce((p, u) => {
      const d = +u;
      if (rt(d) && d > 0) {
        return p + d;
      } else {
        return p;
      }
    }, 0);
  }
  if (o.type === "barline") {
    const p = et(o);
    if (p?.isStacked) {
      if (!p.barIds?.includes(r)) {
        return l;
      }
      const u = p.barIds?.map(
        (d) => o.fields.find((h) => h.id === d)?.index
      );
      return Object.values(e?.[t]).reduce(
        (d, h, _) => {
          const m = +h;
          if (rt(m) && m > 0 && u?.includes(_ + 1)) {
            return d + h;
          } else {
            return d;
          }
        },
        0
      );
    }
  }
  const f = "isStacked" in n && n.isStacked ? c : l;
  return f;
};
var cg = ({
  primaryAxisPosition: e,
  seriesId: t,
  seriesDataLookup: r,
  primaryScale: n,
  secondaryScale: o,
  chartData: i
}) => {
  if (!i || !n || !o) {
    return null;
  }
  const a = et(i);
  let s = void 0;
  const l = i.type;
  let c = Oe(i).length;
  if (n.isBand) {
    if (l === "barline") {
      if (a?.barIds?.includes(t)) {
        if (!a.isStacked) {
          const h = Oe(i).filter(
            (_) => a?.barIds?.includes(_.id)
          );
          s = h.findIndex((_) => _.id === t);
          c = h.length;
        }
      } else if ((!("isStacked" in o) || !o.isStacked) && !a?.hasBar) {
        s = Oe(i).findIndex(
          (h) => h.id === t
        );
      }
    } else {
      if (!("isStacked" in o) || !o.isStacked) {
        s = Oe(i).findIndex(
          (h) => h.id === t
        );
      }
    }
  }
  let f = n.stringifyValue(e);
  const p = NS({
    seriesDataLookup: r,
    lookupPositionKey: f,
    seriesId: t,
    scale: o,
    chartData: i
  });
  if (p === void 0) {
    return null;
  }
  let u;
  if (n.isBand && i.type !== "candlestick" && i.type !== "dumbbell" && // dumbbells don't have subbands.
  i.type !== "line") {
    u = n.scale(
      n.formatValue(e),
      s,
      c
    ) ?? 0;
  } else {
    u = n.scale(n.formatValue(e));
  }
  const d = o.type === "linear" ? o.scale(o.formatValue(p)) : void 0;
  if (u === void 0 || d === void 0) {
    return null;
  }
  return { x: u, y: d };
};
var pB = (e) => {
  const { el: t, xScale: r, yScale: n, chartData: o, seriesDataLookup: i, isMobile: a } = e;
  if (!r || !n || ga(t.primaryAxisPosition) && ga(t.primaryAnchorPosition))
    return null;
  const s = r.type;
  if (t.pointer && t.seriesId) {
    const f = cg({
      primaryAxisPosition: `${t.primaryAxisPosition}`,
      seriesId: t.seriesId,
      seriesDataLookup: i,
      primaryScale: r,
      secondaryScale: n,
      chartData: o
    });
    if (f && f.x !== void 0 && f.y !== void 0) {
      return { scaledX: f.x, scaledY: f.y };
    }
  }
  const l = a ? t.primaryAnchorPositionMobile ?? t.primaryAnchorPosition : t.primaryAnchorPosition;
  const c = a ? t.secondaryAnchorPositionMobile ?? t.secondaryAnchorPosition : t.secondaryAnchorPosition;
  if (l) {
    let f = 0;
    if (s === "timeBand") {
      const p = tt(`${new Date(l)}`);
      f = r.scale.timeScale(p);
    } else if (r.isTime) {
      const p = tt(`${new Date(l)}`);
      f = r.scale(p);
    } else if (s === "linear") {
      f = r.scale(l) ?? 0;
    } else if (s === "band") {
      const p = r.scale.bandwidth();
      const u = r.scale.step();
      const d = l;
      f = d * u + p / 2;
    }
    return {
      scaledX: f,
      scaledY: n.scale(c ?? 0) ?? 0
    };
  }
  return null;
};
var fg = (e, t, r, n, o, i) => {
  const a = e?.annotations?.textAnnotations;
  if (!a || !r || !n) return [];
  return a.filter((s) => {
    return !s.hideOnMobile ? true : i > wS;
  }).map((s) => {
    let { text: l, seriesId: c, primaryAxisPosition: f, orientation: p } = s;
    if (!c || !f) {
      return null;
    }
    const u = cg({
      primaryAxisPosition: `${f}`,
      seriesId: c,
      seriesDataLookup: t,
      primaryScale: r,
      secondaryScale: n,
      chartData: e
    });
    if (!u) {
      return null;
    }
    const d = ll({
      text: l,
      width: ag,
      fontSize: sg,
      fontFamily: $e(o.isTerminalClient ?? false)
    });
    const h = Math.min(
      Ne(
        l,
        $e(o.isTerminalClient ?? false),
        `${sg}px`
      ),
      ag
    );
    const _ = ES(s);
    const m = AS(s);
    switch (p) {
      case "top":
        return {
          maxX: u.x + h / 2 + _,
          maxY: u.y + m - Ae,
          minX: u.x - h / 2 + _,
          minY: u.y + m - d - Ae
        };
      case "bottom":
        return {
          maxX: u.x + h / 2 + _,
          maxY: u.y + m + d + Ae,
          minX: u.x - h / 2 + _,
          minY: u.y + m + Ae
        };
      case "left":
        return {
          maxX: u.x + _ - Ae,
          maxY: u.y + d / 2 + m,
          minX: u.x + _ - h - Ae,
          minY: u.y - d / 2 + m
        };
      case "right":
        return {
          maxX: u.x + _ + h + Ae,
          maxY: u.y + d / 2 + m,
          minX: u.x + _ + Ae,
          minY: u.y - d / 2 + m
        };
      case "rightTop":
        return {
          maxX: u.x + h + _ + Ae,
          maxY: u.y + m - Ae,
          minX: u.x + _ + Ae,
          minY: u.y + m - d - Ae
        };
      case "rightBottom":
        return {
          maxX: u.x + h + _ + Ae,
          maxY: u.y + m + d + Ae,
          minX: u.x + _ + Ae,
          minY: u.y + m - Ae
        };
      case "leftTop":
        return {
          maxX: u.x + _ + Ae,
          maxY: u.y + m - Ae,
          minX: u.x + _ - h - Ae,
          minY: u.y + m - d - Ae
        };
      case "leftBottom":
        return {
          maxX: u.x + _ - Ae,
          maxY: u.y + m + d + Ae,
          minX: u.x + _ - h - Ae,
          minY: u.y + m + Ae
        };
      default:
        return null;
    }
  }).filter((s) => s !== null);
};
var ug = (e) => {
  if (e.length === 0) {
    return { minX: 0, maxX: 0, minY: 0, maxY: 0 };
  }
  const t = Math.min(...e.map((i) => i.minX));
  const r = Math.max(...e.map((i) => i.maxX));
  const n = Math.min(...e.map((i) => i.minY));
  const o = Math.max(...e.map((i) => i.maxY));
  return { minX: t, maxX: r, minY: n, maxY: o };
};
var pg = ({
  bbox: e,
  width: t,
  height: r
}) => {
  if (!e) {
    return { top: 0, right: 0, bottom: 0, left: 0 };
  }
  const n = Math.max(0, -e.minY);
  const o = Math.max(0, e.maxY - r);
  const i = Math.max(0, e.maxX - t);
  const a = Math.max(0, -e.minX);
  return { top: n, right: i, bottom: o, left: a };
};
var dB = (e) => {
  switch (e) {
    case "center":
      return "middle";
    case "right":
      return "end";
    case "left":
    default:
      return "start";
  }
};
var mB = (e, t) => {
  switch (e) {
    case "center":
      return t / 2;
    case "right":
      return t;
    case "left":
    default:
      return 0;
  }
};
var hB = (e, t) => {
  if (!e) return 0;
  switch (t) {
    case "left":
      return lg;
    case "right":
      return -(e + lg);
    default:
      return -e / 2;
  }
};
var gB = ({
  alignment: e,
  xOffset: t,
  yOffset: r,
  width: n,
  height: o
}) => {
  const i = o - Uo;
  const a = Math.abs(r) <= i / 2;
  const s = (() => {
    switch (e) {
      case "left":
        return t <= 0 && t >= -n;
      case "center":
        return Math.abs(t) <= n / 2;
      case "right":
        return t >= 0 && t <= n;
      default:
        return false;
    }
  })();
  const l = () => {
    if (e === "left") {
      return t > 0 ? t + Uo / 2 : t + n - Uo / 2;
    }
    if (e === "center") {
      return t > 0 ? t - n / 2 + Uo / 2 : t + n / 2 - Uo / 2;
    }
    return t > 0 ? t - n + Uo / 2 : t - Uo / 2;
  };
  const c = (f) => ({
    x1: 0,
    y1: 0,
    x2: 0,
    y2: f
  });
  if (s && a) return null;
  if (s && !a) {
    const f = r > 0 ? r - i / 2 : r + i / 2;
    return { verticalLine: c(f) };
  }
  if (!s && a) {
    return {
      horizontalLine: {
        x1: 0,
        y1: 0,
        x2: l(),
        y2: 0
      }
    };
  }
  return {
    horizontalLine: {
      x1: 0,
      y1: r,
      x2: l(),
      y2: r
    },
    verticalLine: c(r)
  };
};
var _B = (e, t) => {
  return (e ? "terminal" : "web") + (t ? "Mobile" : "Desktop");
};

// ../../node_modules/d3-scale/src/init.js
function Mr(e, t) {
  switch (arguments.length) {
    case 0:
      break;
    case 1:
      this.range(e);
      break;
    default:
      this.range(t).domain(e);
      break;
  }
  return this;
}

// ../../node_modules/d3-scale/src/ordinal.js
var Kf = Symbol("implicit");
function _n() {
  var e = new Ci(), t = [], r = [], n = Kf;
  function o(i) {
    let a = e.get(i);
    if (a === void 0) {
      if (n !== Kf) return n;
      e.set(i, a = t.push(i) - 1);
    }
    return r[a % r.length];
  }
  o.domain = function(i) {
    if (!arguments.length) return t.slice();
    t = [], e = new Ci();
    for (const a of i) {
      if (e.has(a)) continue;
      e.set(a, t.push(a) - 1);
    }
    return o;
  };
  o.range = function(i) {
    return arguments.length ? (r = Array.from(i), o) : r.slice();
  };
  o.unknown = function(i) {
    return arguments.length ? (n = i, o) : n;
  };
  o.copy = function() {
    return _n(t, r).unknown(n);
  };
  Mr.apply(o, arguments);
  return o;
}

// ../../node_modules/d3-scale/src/band.js
function Rn() {
  var e = _n().unknown(void 0), t = e.domain, r = e.range, n = 0, o = 1, i, a, s = false, l = 0, c = 0, f = 0.5;
  delete e.unknown;
  function p() {
    var u = t().length, d = o < n, h = d ? o : n, _ = d ? n : o;
    i = (_ - h) / Math.max(1, u - l + c * 2);
    if (s) i = Math.floor(i);
    h += (_ - h - i * (u - l)) * f;
    a = i * (1 - l);
    if (s) h = Math.round(h), a = Math.round(a);
    var m = xl(u).map(function(x) {
      return h + i * x;
    });
    return r(d ? m.reverse() : m);
  }
  e.domain = function(u) {
    return arguments.length ? (t(u), p()) : t();
  };
  e.range = function(u) {
    return arguments.length ? ([n, o] = u, n = +n, o = +o, p()) : [n, o];
  };
  e.rangeRound = function(u) {
    return [n, o] = u, n = +n, o = +o, s = true, p();
  };
  e.bandwidth = function() {
    return a;
  };
  e.step = function() {
    return i;
  };
  e.round = function(u) {
    return arguments.length ? (s = !!u, p()) : s;
  };
  e.padding = function(u) {
    return arguments.length ? (l = Math.min(1, c = +u), p()) : l;
  };
  e.paddingInner = function(u) {
    return arguments.length ? (l = Math.min(1, u), p()) : l;
  };
  e.paddingOuter = function(u) {
    return arguments.length ? (c = +u, p()) : c;
  };
  e.align = function(u) {
    return arguments.length ? (f = Math.max(0, Math.min(1, u)), p()) : f;
  };
  e.copy = function() {
    return Rn(t(), [n, o]).round(s).paddingInner(l).paddingOuter(c).align(f);
  };
  return Mr.apply(p(), arguments);
}

// ../../node_modules/d3-color/src/define.js
function Dl(e, t, r) {
  e.prototype = t.prototype = r;
  r.constructor = e;
}
function Qf(e, t) {
  var r = Object.create(e.prototype);
  for (var n in t) r[n] = t[n];
  return r;
}

// ../../node_modules/d3-color/src/color.js
function La() {
}
var $a = 0.7;
var Al = 1 / $a;
var Fi = "\\s*([+-]?\\d+)\\s*";
var Ba = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*";
var yn = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*";
var YS = /^#([0-9a-f]{3,8})$/;
var kS = new RegExp(`^rgb\\(${Fi},${Fi},${Fi}\\)$`);
var CS = new RegExp(`^rgb\\(${yn},${yn},${yn}\\)$`);
var IS = new RegExp(`^rgba\\(${Fi},${Fi},${Fi},${Ba}\\)$`);
var OS = new RegExp(`^rgba\\(${yn},${yn},${yn},${Ba}\\)$`);
var FS = new RegExp(`^hsl\\(${Ba},${yn},${yn}\\)$`);
var PS = new RegExp(`^hsla\\(${Ba},${yn},${yn},${Ba}\\)$`);
var dg = {
  aliceblue: 15792383,
  antiquewhite: 16444375,
  aqua: 65535,
  aquamarine: 8388564,
  azure: 15794175,
  beige: 16119260,
  bisque: 16770244,
  black: 0,
  blanchedalmond: 16772045,
  blue: 255,
  blueviolet: 9055202,
  brown: 10824234,
  burlywood: 14596231,
  cadetblue: 6266528,
  chartreuse: 8388352,
  chocolate: 13789470,
  coral: 16744272,
  cornflowerblue: 6591981,
  cornsilk: 16775388,
  crimson: 14423100,
  cyan: 65535,
  darkblue: 139,
  darkcyan: 35723,
  darkgoldenrod: 12092939,
  darkgray: 11119017,
  darkgreen: 25600,
  darkgrey: 11119017,
  darkkhaki: 12433259,
  darkmagenta: 9109643,
  darkolivegreen: 5597999,
  darkorange: 16747520,
  darkorchid: 10040012,
  darkred: 9109504,
  darksalmon: 15308410,
  darkseagreen: 9419919,
  darkslateblue: 4734347,
  darkslategray: 3100495,
  darkslategrey: 3100495,
  darkturquoise: 52945,
  darkviolet: 9699539,
  deeppink: 16716947,
  deepskyblue: 49151,
  dimgray: 6908265,
  dimgrey: 6908265,
  dodgerblue: 2003199,
  firebrick: 11674146,
  floralwhite: 16775920,
  forestgreen: 2263842,
  fuchsia: 16711935,
  gainsboro: 14474460,
  ghostwhite: 16316671,
  gold: 16766720,
  goldenrod: 14329120,
  gray: 8421504,
  green: 32768,
  greenyellow: 11403055,
  grey: 8421504,
  honeydew: 15794160,
  hotpink: 16738740,
  indianred: 13458524,
  indigo: 4915330,
  ivory: 16777200,
  khaki: 15787660,
  lavender: 15132410,
  lavenderblush: 16773365,
  lawngreen: 8190976,
  lemonchiffon: 16775885,
  lightblue: 11393254,
  lightcoral: 15761536,
  lightcyan: 14745599,
  lightgoldenrodyellow: 16448210,
  lightgray: 13882323,
  lightgreen: 9498256,
  lightgrey: 13882323,
  lightpink: 16758465,
  lightsalmon: 16752762,
  lightseagreen: 2142890,
  lightskyblue: 8900346,
  lightslategray: 7833753,
  lightslategrey: 7833753,
  lightsteelblue: 11584734,
  lightyellow: 16777184,
  lime: 65280,
  limegreen: 3329330,
  linen: 16445670,
  magenta: 16711935,
  maroon: 8388608,
  mediumaquamarine: 6737322,
  mediumblue: 205,
  mediumorchid: 12211667,
  mediumpurple: 9662683,
  mediumseagreen: 3978097,
  mediumslateblue: 8087790,
  mediumspringgreen: 64154,
  mediumturquoise: 4772300,
  mediumvioletred: 13047173,
  midnightblue: 1644912,
  mintcream: 16121850,
  mistyrose: 16770273,
  moccasin: 16770229,
  navajowhite: 16768685,
  navy: 128,
  oldlace: 16643558,
  olive: 8421376,
  olivedrab: 7048739,
  orange: 16753920,
  orangered: 16729344,
  orchid: 14315734,
  palegoldenrod: 15657130,
  palegreen: 10025880,
  paleturquoise: 11529966,
  palevioletred: 14381203,
  papayawhip: 16773077,
  peachpuff: 16767673,
  peru: 13468991,
  pink: 16761035,
  plum: 14524637,
  powderblue: 11591910,
  purple: 8388736,
  rebeccapurple: 6697881,
  red: 16711680,
  rosybrown: 12357519,
  royalblue: 4286945,
  saddlebrown: 9127187,
  salmon: 16416882,
  sandybrown: 16032864,
  seagreen: 3050327,
  seashell: 16774638,
  sienna: 10506797,
  silver: 12632256,
  skyblue: 8900331,
  slateblue: 6970061,
  slategray: 7372944,
  slategrey: 7372944,
  snow: 16775930,
  springgreen: 65407,
  steelblue: 4620980,
  tan: 13808780,
  teal: 32896,
  thistle: 14204888,
  tomato: 16737095,
  turquoise: 4251856,
  violet: 15631086,
  wheat: 16113331,
  white: 16777215,
  whitesmoke: 16119285,
  yellow: 16776960,
  yellowgreen: 10145074
};
Dl(La, oo, {
  copy(e) {
    return Object.assign(new this.constructor(), this, e);
  },
  displayable() {
    return this.rgb().displayable();
  },
  hex: mg,
  // Deprecated! Use color.formatHex.
  formatHex: mg,
  formatHex8: RS,
  formatHsl: $S,
  formatRgb: hg,
  toString: hg
});
function mg() {
  return this.rgb().formatHex();
}
function RS() {
  return this.rgb().formatHex8();
}
function $S() {
  return vg(this).formatHsl();
}
function hg() {
  return this.rgb().formatRgb();
}
function oo(e) {
  var t, r;
  e = (e + "").trim().toLowerCase();
  return (t = YS.exec(e)) ? (r = t[1].length, t = parseInt(t[1], 16), r === 6 ? gg(t) : r === 3 ? new Qt(t >> 8 & 15 | t >> 4 & 240, t >> 4 & 15 | t & 240, (t & 15) << 4 | t & 15, 1) : r === 8 ? wl(t >> 24 & 255, t >> 16 & 255, t >> 8 & 255, (t & 255) / 255) : r === 4 ? wl(t >> 12 & 15 | t >> 8 & 240, t >> 8 & 15 | t >> 4 & 240, t >> 4 & 15 | t & 240, ((t & 15) << 4 | t & 15) / 255) : null) : (t = kS.exec(e)) ? new Qt(t[1], t[2], t[3], 1) : (t = CS.exec(e)) ? new Qt(t[1] * 255 / 100, t[2] * 255 / 100, t[3] * 255 / 100, 1) : (t = IS.exec(e)) ? wl(t[1], t[2], t[3], t[4]) : (t = OS.exec(e)) ? wl(t[1] * 255 / 100, t[2] * 255 / 100, t[3] * 255 / 100, t[4]) : (t = FS.exec(e)) ? xg(t[1], t[2] / 100, t[3] / 100, 1) : (t = PS.exec(e)) ? xg(t[1], t[2] / 100, t[3] / 100, t[4]) : dg.hasOwnProperty(e) ? gg(dg[e]) : e === "transparent" ? new Qt(NaN, NaN, NaN, 0) : null;
}
function gg(e) {
  return new Qt(e >> 16 & 255, e >> 8 & 255, e & 255, 1);
}
function wl(e, t, r, n) {
  if (n <= 0) e = t = r = NaN;
  return new Qt(e, t, r, n);
}
function BS(e) {
  if (!(e instanceof La)) e = oo(e);
  if (!e) return new Qt();
  e = e.rgb();
  return new Qt(e.r, e.g, e.b, e.opacity);
}
function Pi(e, t, r, n) {
  return arguments.length === 1 ? BS(e) : new Qt(e, t, r, n == null ? 1 : n);
}
function Qt(e, t, r, n) {
  this.r = +e;
  this.g = +t;
  this.b = +r;
  this.opacity = +n;
}
Dl(Qt, Pi, Qf(La, {
  brighter(e) {
    e = e == null ? Al : Math.pow(Al, e);
    return new Qt(this.r * e, this.g * e, this.b * e, this.opacity);
  },
  darker(e) {
    e = e == null ? $a : Math.pow($a, e);
    return new Qt(this.r * e, this.g * e, this.b * e, this.opacity);
  },
  rgb() {
    return this;
  },
  clamp() {
    return new Qt(qo(this.r), qo(this.g), qo(this.b), Nl(this.opacity));
  },
  displayable() {
    return -0.5 <= this.r && this.r < 255.5 && (-0.5 <= this.g && this.g < 255.5) && (-0.5 <= this.b && this.b < 255.5) && (0 <= this.opacity && this.opacity <= 1);
  },
  hex: _g,
  // Deprecated! Use color.formatHex.
  formatHex: _g,
  formatHex8: LS,
  formatRgb: yg,
  toString: yg
}));
function _g() {
  return `#${Go(this.r)}${Go(this.g)}${Go(this.b)}`;
}
function LS() {
  return `#${Go(this.r)}${Go(this.g)}${Go(this.b)}${Go((isNaN(this.opacity) ? 1 : this.opacity) * 255)}`;
}
function yg() {
  const e = Nl(this.opacity);
  return `${e === 1 ? "rgb(" : "rgba("}${qo(this.r)}, ${qo(this.g)}, ${qo(this.b)}${e === 1 ? ")" : `, ${e})`}`;
}
function Nl(e) {
  return isNaN(e) ? 1 : Math.max(0, Math.min(1, e));
}
function qo(e) {
  return Math.max(0, Math.min(255, Math.round(e) || 0));
}
function Go(e) {
  e = qo(e);
  return (e < 16 ? "0" : "") + e.toString(16);
}
function xg(e, t, r, n) {
  if (n <= 0) e = t = r = NaN;
  else if (r <= 0 || r >= 1) e = t = NaN;
  else if (t <= 0) e = NaN;
  return new Zr(e, t, r, n);
}
function vg(e) {
  if (e instanceof Zr) return new Zr(e.h, e.s, e.l, e.opacity);
  if (!(e instanceof La)) e = oo(e);
  if (!e) return new Zr();
  if (e instanceof Zr) return e;
  e = e.rgb();
  var t = e.r / 255, r = e.g / 255, n = e.b / 255, o = Math.min(t, r, n), i = Math.max(t, r, n), a = NaN, s = i - o, l = (i + o) / 2;
  if (s) {
    if (t === i) a = (r - n) / s + (r < n) * 6;
    else if (r === i) a = (n - t) / s + 2;
    else a = (t - r) / s + 4;
    s /= l < 0.5 ? i + o : 2 - i - o;
    a *= 60;
  } else {
    s = l > 0 && l < 1 ? 0 : a;
  }
  return new Zr(a, s, l, e.opacity);
}
function Tg(e, t, r, n) {
  return arguments.length === 1 ? vg(e) : new Zr(e, t, r, n == null ? 1 : n);
}
function Zr(e, t, r, n) {
  this.h = +e;
  this.s = +t;
  this.l = +r;
  this.opacity = +n;
}
Dl(Zr, Tg, Qf(La, {
  brighter(e) {
    e = e == null ? Al : Math.pow(Al, e);
    return new Zr(this.h, this.s, this.l * e, this.opacity);
  },
  darker(e) {
    e = e == null ? $a : Math.pow($a, e);
    return new Zr(this.h, this.s, this.l * e, this.opacity);
  },
  rgb() {
    var e = this.h % 360 + (this.h < 0) * 360, t = isNaN(e) || isNaN(this.s) ? 0 : this.s, r = this.l, n = r + (r < 0.5 ? r : 1 - r) * t, o = 2 * r - n;
    return new Qt(
      eu(e >= 240 ? e - 240 : e + 120, o, n),
      eu(e, o, n),
      eu(e < 120 ? e + 240 : e - 120, o, n),
      this.opacity
    );
  },
  clamp() {
    return new Zr(bg(this.h), El(this.s), El(this.l), Nl(this.opacity));
  },
  displayable() {
    return (0 <= this.s && this.s <= 1 || isNaN(this.s)) && (0 <= this.l && this.l <= 1) && (0 <= this.opacity && this.opacity <= 1);
  },
  formatHsl() {
    const e = Nl(this.opacity);
    return `${e === 1 ? "hsl(" : "hsla("}${bg(this.h)}, ${El(this.s) * 100}%, ${El(this.l) * 100}%${e === 1 ? ")" : `, ${e})`}`;
  }
}));
function bg(e) {
  e = (e || 0) % 360;
  return e < 0 ? e + 360 : e;
}
function El(e) {
  return Math.max(0, Math.min(1, e || 0));
}
function eu(e, t, r) {
  return (e < 60 ? t + (r - t) * e / 60 : e < 180 ? r : e < 240 ? t + (r - t) * (240 - e) / 60 : t) * 255;
}

// ../../node_modules/d3-interpolate/src/basis.js
function tu(e, t, r, n, o) {
  var i = e * e, a = i * e;
  return ((1 - 3 * e + 3 * i - a) * t + (4 - 6 * i + 3 * a) * r + (1 + 3 * e + 3 * i - 3 * a) * n + a * o) / 6;
}
function Sg(e) {
  var t = e.length - 1;
  return function(r) {
    var n = r <= 0 ? r = 0 : r >= 1 ? (r = 1, t - 1) : Math.floor(r * t), o = e[n], i = e[n + 1], a = n > 0 ? e[n - 1] : 2 * o - i, s = n < t - 1 ? e[n + 2] : 2 * i - o;
    return tu((r - n / t) * t, a, o, i, s);
  };
}

// ../../node_modules/d3-interpolate/src/basisClosed.js
function Mg(e) {
  var t = e.length;
  return function(r) {
    var n = Math.floor(((r %= 1) < 0 ? ++r : r) * t), o = e[(n + t - 1) % t], i = e[n % t], a = e[(n + 1) % t], s = e[(n + 2) % t];
    return tu((r - n / t) * t, o, i, a, s);
  };
}

// ../../node_modules/d3-interpolate/src/constant.js
var Va = (e) => () => e;

// ../../node_modules/d3-interpolate/src/color.js
function VS(e, t) {
  return function(r) {
    return e + r * t;
  };
}
function HS(e, t, r) {
  return e = Math.pow(e, r), t = Math.pow(t, r) - e, r = 1 / r, function(n) {
    return Math.pow(e + n * t, r);
  };
}
function Dg(e) {
  return (e = +e) === 1 ? Yl : function(t, r) {
    return r - t ? HS(t, r, e) : Va(isNaN(t) ? r : t);
  };
}
function Yl(e, t) {
  var r = t - e;
  return r ? VS(e, r) : Va(isNaN(e) ? t : e);
}

// ../../node_modules/d3-interpolate/src/rgb.js
var ru = function e(t) {
  var r = Dg(t);
  function n(o, i) {
    var a = r((o = Pi(o)).r, (i = Pi(i)).r), s = r(o.g, i.g), l = r(o.b, i.b), c = Yl(o.opacity, i.opacity);
    return function(f) {
      o.r = a(f);
      o.g = s(f);
      o.b = l(f);
      o.opacity = c(f);
      return o + "";
    };
  }
  n.gamma = e;
  return n;
}(1);
function wg(e) {
  return function(t) {
    var r = t.length, n = new Array(r), o = new Array(r), i = new Array(r), a, s;
    for (a = 0; a < r; ++a) {
      s = Pi(t[a]);
      n[a] = s.r || 0;
      o[a] = s.g || 0;
      i[a] = s.b || 0;
    }
    n = e(n);
    o = e(o);
    i = e(i);
    s.opacity = 1;
    return function(l) {
      s.r = n(l);
      s.g = o(l);
      s.b = i(l);
      return s + "";
    };
  };
}
var HB = wg(Sg);
var UB = wg(Mg);

// ../../node_modules/d3-interpolate/src/numberArray.js
function Eg(e, t) {
  if (!t) t = [];
  var r = e ? Math.min(t.length, e.length) : 0, n = t.slice(), o;
  return function(i) {
    for (o = 0; o < r; ++o) n[o] = e[o] * (1 - i) + t[o] * i;
    return n;
  };
}
function Ag(e) {
  return ArrayBuffer.isView(e) && !(e instanceof DataView);
}

// ../../node_modules/d3-interpolate/src/array.js
function Ng(e, t) {
  var r = t ? t.length : 0, n = e ? Math.min(r, e.length) : 0, o = new Array(n), i = new Array(r), a;
  for (a = 0; a < n; ++a) o[a] = zo(e[a], t[a]);
  for (; a < r; ++a) i[a] = t[a];
  return function(s) {
    for (a = 0; a < n; ++a) i[a] = o[a](s);
    return i;
  };
}

// ../../node_modules/d3-interpolate/src/date.js
function Yg(e, t) {
  var r = /* @__PURE__ */ new Date();
  return e = +e, t = +t, function(n) {
    return r.setTime(e * (1 - n) + t * n), r;
  };
}

// ../../node_modules/d3-interpolate/src/number.js
function io(e, t) {
  return e = +e, t = +t, function(r) {
    return e * (1 - r) + t * r;
  };
}

// ../../node_modules/d3-interpolate/src/object.js
function kg(e, t) {
  var r = {}, n = {}, o;
  if (e === null || typeof e !== "object") e = {};
  if (t === null || typeof t !== "object") t = {};
  for (o in t) {
    if (o in e) {
      r[o] = zo(e[o], t[o]);
    } else {
      n[o] = t[o];
    }
  }
  return function(i) {
    for (o in r) n[o] = r[o](i);
    return n;
  };
}

// ../../node_modules/d3-interpolate/src/string.js
var ou = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g;
var nu = new RegExp(ou.source, "g");
function US(e) {
  return function() {
    return e;
  };
}
function GS(e) {
  return function(t) {
    return e(t) + "";
  };
}
function Cg(e, t) {
  var r = ou.lastIndex = nu.lastIndex = 0, n, o, i, a = -1, s = [], l = [];
  e = e + "", t = t + "";
  while ((n = ou.exec(e)) && (o = nu.exec(t))) {
    if ((i = o.index) > r) {
      i = t.slice(r, i);
      if (s[a]) s[a] += i;
      else s[++a] = i;
    }
    if ((n = n[0]) === (o = o[0])) {
      if (s[a]) s[a] += o;
      else s[++a] = o;
    } else {
      s[++a] = null;
      l.push({ i: a, x: io(n, o) });
    }
    r = nu.lastIndex;
  }
  if (r < t.length) {
    i = t.slice(r);
    if (s[a]) s[a] += i;
    else s[++a] = i;
  }
  return s.length < 2 ? l[0] ? GS(l[0].x) : US(t) : (t = l.length, function(c) {
    for (var f = 0, p; f < t; ++f) s[(p = l[f]).i] = p.x(c);
    return s.join("");
  });
}

// ../../node_modules/d3-interpolate/src/value.js
function zo(e, t) {
  var r = typeof t, n;
  return t == null || r === "boolean" ? Va(t) : (r === "number" ? io : r === "string" ? (n = oo(t)) ? (t = n, ru) : Cg : t instanceof oo ? ru : t instanceof Date ? Yg : Ag(t) ? Eg : Array.isArray(t) ? Ng : typeof t.valueOf !== "function" && typeof t.toString !== "function" || isNaN(t) ? kg : io)(e, t);
}

// ../../node_modules/d3-interpolate/src/round.js
function iu(e, t) {
  return e = +e, t = +t, function(r) {
    return Math.round(e * (1 - r) + t * r);
  };
}

// ../../node_modules/d3-scale/src/constant.js
function au(e) {
  return function() {
    return e;
  };
}

// ../../node_modules/d3-scale/src/number.js
function Ri(e) {
  return +e;
}

// ../../node_modules/d3-scale/src/continuous.js
var Ig = [0, 1];
function $i(e) {
  return e;
}
function su(e, t) {
  return (t -= e = +e) ? function(r) {
    return (r - e) / t;
  } : au(isNaN(t) ? NaN : 0.5);
}
function qS(e, t) {
  var r;
  if (e > t) r = e, e = t, t = r;
  return function(n) {
    return Math.max(e, Math.min(t, n));
  };
}
function zS(e, t, r) {
  var n = e[0], o = e[1], i = t[0], a = t[1];
  if (o < n) n = su(o, n), i = r(a, i);
  else n = su(n, o), i = r(i, a);
  return function(s) {
    return i(n(s));
  };
}
function WS(e, t, r) {
  var n = Math.min(e.length, t.length) - 1, o = new Array(n), i = new Array(n), a = -1;
  if (e[n] < e[0]) {
    e = e.slice().reverse();
    t = t.slice().reverse();
  }
  while (++a < n) {
    o[a] = su(e[a], e[a + 1]);
    i[a] = r(t[a], t[a + 1]);
  }
  return function(s) {
    var l = Vo(e, s, 1, n) - 1;
    return i[l](o[l](s));
  };
}
function kl(e, t) {
  return t.domain(e.domain()).range(e.range()).interpolate(e.interpolate()).clamp(e.clamp()).unknown(e.unknown());
}
function ZS() {
  var e = Ig, t = Ig, r = zo, n, o, i, a = $i, s, l, c;
  function f() {
    var u = Math.min(e.length, t.length);
    if (a !== $i) a = qS(e[0], e[u - 1]);
    s = u > 2 ? WS : zS;
    l = c = null;
    return p;
  }
  function p(u) {
    return u == null || isNaN(u = +u) ? i : (l || (l = s(e.map(n), t, r)))(n(a(u)));
  }
  p.invert = function(u) {
    return a(o((c || (c = s(t, e.map(n), io)))(u)));
  };
  p.domain = function(u) {
    return arguments.length ? (e = Array.from(u, Ri), f()) : e.slice();
  };
  p.range = function(u) {
    return arguments.length ? (t = Array.from(u), f()) : t.slice();
  };
  p.rangeRound = function(u) {
    return t = Array.from(u), r = iu, f();
  };
  p.clamp = function(u) {
    return arguments.length ? (a = u ? true : $i, f()) : a !== $i;
  };
  p.interpolate = function(u) {
    return arguments.length ? (r = u, f()) : r;
  };
  p.unknown = function(u) {
    return arguments.length ? (i = u, p) : i;
  };
  return function(u, d) {
    n = u, o = d;
    return f();
  };
}
function Ha() {
  return ZS()($i, $i);
}

// ../../node_modules/d3-format/src/formatDecimal.js
function Og(e) {
  return Math.abs(e = Math.round(e)) >= 1e21 ? e.toLocaleString("en").replace(/,/g, "") : e.toString(10);
}
function Wo(e, t) {
  if (!isFinite(e) || e === 0) return null;
  var r = (e = t ? e.toExponential(t - 1) : e.toExponential()).indexOf("e"), n = e.slice(0, r);
  return [
    n.length > 1 ? n[0] + n.slice(2) : n,
    +e.slice(r + 1)
  ];
}

// ../../node_modules/d3-format/src/exponent.js
function xn(e) {
  return e = Wo(Math.abs(e)), e ? e[1] : NaN;
}

// ../../node_modules/d3-format/src/formatGroup.js
function Fg(e, t) {
  return function(r, n) {
    var o = r.length, i = [], a = 0, s = e[0], l = 0;
    while (o > 0 && s > 0) {
      if (l + s + 1 > n) s = Math.max(1, n - l);
      i.push(r.substring(o -= s, o + s));
      if ((l += s + 1) > n) break;
      s = e[a = (a + 1) % e.length];
    }
    return i.reverse().join(t);
  };
}

// ../../node_modules/d3-format/src/formatNumerals.js
function Pg(e) {
  return function(t) {
    return t.replace(/[0-9]/g, function(r) {
      return e[+r];
    });
  };
}

// ../../node_modules/d3-format/src/formatSpecifier.js
var jS = /^(?:(.)?([<>=^]))?([+\-( ])?([$#])?(0)?(\d+)?(,)?(\.\d+)?(~)?([a-z%])?$/i;
function ao(e) {
  if (!(t = jS.exec(e))) throw new Error("invalid format: " + e);
  var t;
  return new Cl({
    fill: t[1],
    align: t[2],
    sign: t[3],
    symbol: t[4],
    zero: t[5],
    width: t[6],
    comma: t[7],
    precision: t[8] && t[8].slice(1),
    trim: t[9],
    type: t[10]
  });
}
ao.prototype = Cl.prototype;
function Cl(e) {
  this.fill = e.fill === void 0 ? " " : e.fill + "";
  this.align = e.align === void 0 ? ">" : e.align + "";
  this.sign = e.sign === void 0 ? "-" : e.sign + "";
  this.symbol = e.symbol === void 0 ? "" : e.symbol + "";
  this.zero = !!e.zero;
  this.width = e.width === void 0 ? void 0 : +e.width;
  this.comma = !!e.comma;
  this.precision = e.precision === void 0 ? void 0 : +e.precision;
  this.trim = !!e.trim;
  this.type = e.type === void 0 ? "" : e.type + "";
}
Cl.prototype.toString = function() {
  return this.fill + this.align + this.sign + this.symbol + (this.zero ? "0" : "") + (this.width === void 0 ? "" : Math.max(1, this.width | 0)) + (this.comma ? "," : "") + (this.precision === void 0 ? "" : "." + Math.max(0, this.precision | 0)) + (this.trim ? "~" : "") + this.type;
};

// ../../node_modules/d3-format/src/formatTrim.js
function Rg(e) {
  e: for (var t = e.length, r = 1, n = -1, o; r < t; ++r) {
    switch (e[r]) {
      case ".":
        n = o = r;
        break;
      case "0":
        if (n === 0) n = r;
        o = r;
        break;
      default:
        if (!+e[r]) break e;
        if (n > 0) n = 0;
        break;
    }
  }
  return n > 0 ? e.slice(0, n) + e.slice(o + 1) : e;
}

// ../../node_modules/d3-format/src/formatPrefixAuto.js
var Ua;
function $g(e, t) {
  var r = Wo(e, t);
  if (!r) return Ua = void 0, e.toPrecision(t);
  var n = r[0], o = r[1], i = o - (Ua = Math.max(-8, Math.min(8, Math.floor(o / 3))) * 3) + 1, a = n.length;
  return i === a ? n : i > a ? n + new Array(i - a + 1).join("0") : i > 0 ? n.slice(0, i) + "." + n.slice(i) : "0." + new Array(1 - i).join("0") + Wo(e, Math.max(0, t + i - 1))[0];
}

// ../../node_modules/d3-format/src/formatRounded.js
function lu(e, t) {
  var r = Wo(e, t);
  if (!r) return e + "";
  var n = r[0], o = r[1];
  return o < 0 ? "0." + new Array(-o).join("0") + n : n.length > o + 1 ? n.slice(0, o + 1) + "." + n.slice(o + 1) : n + new Array(o - n.length + 2).join("0");
}

// ../../node_modules/d3-format/src/formatTypes.js
var cu = {
  "%": (e, t) => (e * 100).toFixed(t),
  "b": (e) => Math.round(e).toString(2),
  "c": (e) => e + "",
  "d": Og,
  "e": (e, t) => e.toExponential(t),
  "f": (e, t) => e.toFixed(t),
  "g": (e, t) => e.toPrecision(t),
  "o": (e) => Math.round(e).toString(8),
  "p": (e, t) => lu(e * 100, t),
  "r": lu,
  "s": $g,
  "X": (e) => Math.round(e).toString(16).toUpperCase(),
  "x": (e) => Math.round(e).toString(16)
};

// ../../node_modules/d3-format/src/identity.js
function fu(e) {
  return e;
}

// ../../node_modules/d3-format/src/locale.js
var Bg = Array.prototype.map;
var Lg = ["y", "z", "a", "f", "p", "n", "\xB5", "m", "", "k", "M", "G", "T", "P", "E", "Z", "Y"];
function Vg(e) {
  var t = e.grouping === void 0 || e.thousands === void 0 ? fu : Fg(Bg.call(e.grouping, Number), e.thousands + ""), r = e.currency === void 0 ? "" : e.currency[0] + "", n = e.currency === void 0 ? "" : e.currency[1] + "", o = e.decimal === void 0 ? "." : e.decimal + "", i = e.numerals === void 0 ? fu : Pg(Bg.call(e.numerals, String)), a = e.percent === void 0 ? "%" : e.percent + "", s = e.minus === void 0 ? "\u2212" : e.minus + "", l = e.nan === void 0 ? "NaN" : e.nan + "";
  function c(p, u) {
    p = ao(p);
    var d = p.fill, h = p.align, _ = p.sign, m = p.symbol, x = p.zero, A = p.width, D = p.comma, N = p.precision, F = p.trim, T = p.type;
    if (T === "n") D = true, T = "g";
    else if (!cu[T]) N === void 0 && (N = 12), F = true, T = "g";
    if (x || d === "0" && h === "=") x = true, d = "0", h = "=";
    var v = (u && u.prefix !== void 0 ? u.prefix : "") + (m === "$" ? r : m === "#" && /[boxX]/.test(T) ? "0" + T.toLowerCase() : ""), S = (m === "$" ? n : /[%p]/.test(T) ? a : "") + (u && u.suffix !== void 0 ? u.suffix : "");
    var Y = cu[T], E = /[defgprs%]/.test(T);
    N = N === void 0 ? 6 : /[gprs]/.test(T) ? Math.max(1, Math.min(21, N)) : Math.max(0, Math.min(20, N));
    function O(H) {
      var R = v, L = S, G, z, J;
      if (T === "c") {
        L = Y(H) + L;
        H = "";
      } else {
        H = +H;
        var Z = H < 0 || 1 / H < 0;
        H = isNaN(H) ? l : Y(Math.abs(H), N);
        if (F) H = Rg(H);
        if (Z && +H === 0 && _ !== "+") Z = false;
        R = (Z ? _ === "(" ? _ : s : _ === "-" || _ === "(" ? "" : _) + R;
        L = (T === "s" && !isNaN(H) && Ua !== void 0 ? Lg[8 + Ua / 3] : "") + L + (Z && _ === "(" ? ")" : "");
        if (E) {
          G = -1, z = H.length;
          while (++G < z) {
            if (J = H.charCodeAt(G), 48 > J || J > 57) {
              L = (J === 46 ? o + H.slice(G + 1) : H.slice(G)) + L;
              H = H.slice(0, G);
              break;
            }
          }
        }
      }
      if (D && !x) H = t(H, Infinity);
      var te = R.length + H.length + L.length, X = te < A ? new Array(A - te + 1).join(d) : "";
      if (D && x) H = t(X + H, X.length ? A - L.length : Infinity), X = "";
      switch (h) {
        case "<":
          H = R + H + L + X;
          break;
        case "=":
          H = R + X + H + L;
          break;
        case "^":
          H = X.slice(0, te = X.length >> 1) + R + H + L + X.slice(te);
          break;
        default:
          H = X + R + H + L;
          break;
      }
      return i(H);
    }
    O.toString = function() {
      return p + "";
    };
    return O;
  }
  function f(p, u) {
    var d = Math.max(-8, Math.min(8, Math.floor(xn(u) / 3))) * 3, h = Math.pow(10, -d), _ = c((p = ao(p), p.type = "f", p), { suffix: Lg[8 + d / 3] });
    return function(m) {
      return _(h * m);
    };
  }
  return {
    format: c,
    formatPrefix: f
  };
}

// ../../node_modules/d3-format/src/defaultLocale.js
var Il;
var Ol;
var Fl;
uu({
  thousands: ",",
  grouping: [3],
  currency: ["$", ""]
});
function uu(e) {
  Il = Vg(e);
  Ol = Il.format;
  Fl = Il.formatPrefix;
  return Il;
}

// ../../node_modules/d3-format/src/precisionFixed.js
function pu(e) {
  return Math.max(0, -xn(Math.abs(e)));
}

// ../../node_modules/d3-format/src/precisionPrefix.js
function du(e, t) {
  return Math.max(0, Math.max(-8, Math.min(8, Math.floor(xn(t) / 3))) * 3 - xn(Math.abs(e)));
}

// ../../node_modules/d3-format/src/precisionRound.js
function mu(e, t) {
  e = Math.abs(e), t = Math.abs(t) - e;
  return Math.max(0, xn(t) - xn(e)) + 1;
}

// ../../node_modules/d3-scale/src/tickFormat.js
function hu(e, t, r, n) {
  var o = Ii(e, t, r), i;
  n = ao(n == null ? ",f" : n);
  switch (n.type) {
    case "s": {
      var a = Math.max(Math.abs(e), Math.abs(t));
      if (n.precision == null && !isNaN(i = du(o, a))) n.precision = i;
      return Fl(n, a);
    }
    case "":
    case "e":
    case "g":
    case "p":
    case "r": {
      if (n.precision == null && !isNaN(i = mu(o, Math.max(Math.abs(e), Math.abs(t))))) n.precision = i - (n.type === "e");
      break;
    }
    case "f":
    case "%": {
      if (n.precision == null && !isNaN(i = pu(o))) n.precision = i - (n.type === "%") * 2;
      break;
    }
  }
  return Ol(n);
}

// ../../node_modules/d3-scale/src/linear.js
function Ga(e) {
  var t = e.domain;
  e.ticks = function(r) {
    var n = t();
    return yl(n[0], n[n.length - 1], r == null ? 10 : r);
  };
  e.tickFormat = function(r, n) {
    var o = t();
    return hu(o[0], o[o.length - 1], r == null ? 10 : r, n);
  };
  e.nice = function(r) {
    if (r == null) r = 10;
    var n = t();
    var o = 0;
    var i = n.length - 1;
    var a = n[o];
    var s = n[i];
    var l;
    var c;
    var f = 10;
    if (s < a) {
      c = a, a = s, s = c;
      c = o, o = i, i = c;
    }
    while (f-- > 0) {
      c = Fa(a, s, r);
      if (c === l) {
        n[o] = a;
        n[i] = s;
        return t(n);
      } else if (c > 0) {
        a = Math.floor(a / c) * c;
        s = Math.ceil(s / c) * c;
      } else if (c < 0) {
        a = Math.ceil(a * c) / c;
        s = Math.floor(s * c) / c;
      } else {
        break;
      }
      l = c;
    }
    return e;
  };
  return e;
}
function ht() {
  var e = Ha();
  e.copy = function() {
    return kl(e, ht());
  };
  Mr.apply(e, arguments);
  return Ga(e);
}

// ../../node_modules/d3-scale/src/identity.js
function qa(e) {
  var t;
  function r(n) {
    return n == null || isNaN(n = +n) ? t : n;
  }
  r.invert = r;
  r.domain = r.range = function(n) {
    return arguments.length ? (e = Array.from(n, Ri), r) : e.slice();
  };
  r.unknown = function(n) {
    return arguments.length ? (t = n, r) : t;
  };
  r.copy = function() {
    return qa(e).unknown(t);
  };
  e = arguments.length ? Array.from(e, Ri) : [0, 1];
  return Ga(r);
}

// ../../node_modules/d3-scale/src/nice.js
function gu(e, t) {
  e = e.slice();
  var r = 0, n = e.length - 1, o = e[r], i = e[n], a;
  if (i < o) {
    a = r, r = n, n = a;
    a = o, o = i, i = a;
  }
  e[r] = t.floor(o);
  e[n] = t.ceil(i);
  return e;
}

// ../../node_modules/d3-scale/src/quantile.js
function _u() {
  var e = [], t = [], r = [], n;
  function o() {
    var a = 0, s = Math.max(1, t.length);
    r = new Array(s - 1);
    while (++a < s) r[a - 1] = Zf(e, a / s);
    return i;
  }
  function i(a) {
    return a == null || isNaN(a = +a) ? n : t[Vo(r, a)];
  }
  i.invertExtent = function(a) {
    var s = t.indexOf(a);
    return s < 0 ? [NaN, NaN] : [
      s > 0 ? r[s - 1] : e[0],
      s < r.length ? r[s] : e[e.length - 1]
    ];
  };
  i.domain = function(a) {
    if (!arguments.length) return e.slice();
    e = [];
    for (let s of a) if (s != null && !isNaN(s = +s)) e.push(s);
    e.sort(gn);
    return o();
  };
  i.range = function(a) {
    return arguments.length ? (t = Array.from(a), o()) : t.slice();
  };
  i.unknown = function(a) {
    return arguments.length ? (n = a, i) : n;
  };
  i.quantiles = function() {
    return r.slice();
  };
  i.copy = function() {
    return _u().domain(e).range(t).unknown(n);
  };
  return Mr.apply(i, arguments);
}

// ../../node_modules/d3-scale/src/quantize.js
function yu() {
  var e = 0, t = 1, r = 1, n = [0.5], o = [0, 1], i;
  function a(l) {
    return l != null && l <= l ? o[Vo(n, l, 0, r)] : i;
  }
  function s() {
    var l = -1;
    n = new Array(r);
    while (++l < r) n[l] = ((l + 1) * t - (l - r) * e) / (r + 1);
    return a;
  }
  a.domain = function(l) {
    return arguments.length ? ([e, t] = l, e = +e, t = +t, s()) : [e, t];
  };
  a.range = function(l) {
    return arguments.length ? (r = (o = Array.from(l)).length - 1, s()) : o.slice();
  };
  a.invertExtent = function(l) {
    var c = o.indexOf(l);
    return c < 0 ? [NaN, NaN] : c < 1 ? [e, n[0]] : c >= r ? [n[r - 1], t] : [n[c - 1], n[c]];
  };
  a.unknown = function(l) {
    return arguments.length ? (i = l, a) : a;
  };
  a.thresholds = function() {
    return n.slice();
  };
  a.copy = function() {
    return yu().domain([e, t]).range(o).unknown(i);
  };
  return Mr.apply(Ga(a), arguments);
}

// ../../node_modules/d3-time-format/src/locale.js
function xu(e) {
  if (0 <= e.y && e.y < 100) {
    var t = new Date(-1, e.m, e.d, e.H, e.M, e.S, e.L);
    t.setFullYear(e.y);
    return t;
  }
  return new Date(e.y, e.m, e.d, e.H, e.M, e.S, e.L);
}
function bu(e) {
  if (0 <= e.y && e.y < 100) {
    var t = new Date(Date.UTC(-1, e.m, e.d, e.H, e.M, e.S, e.L));
    t.setUTCFullYear(e.y);
    return t;
  }
  return new Date(Date.UTC(e.y, e.m, e.d, e.H, e.M, e.S, e.L));
}
function za(e, t, r) {
  return { y: e, m: t, d: r, H: 0, M: 0, S: 0, L: 0 };
}
function vu(e) {
  var t = e.dateTime, r = e.date, n = e.time, o = e.periods, i = e.days, a = e.shortDays, s = e.months, l = e.shortMonths;
  var c = Wa(o), f = Za(o), p = Wa(i), u = Za(i), d = Wa(a), h = Za(a), _ = Wa(s), m = Za(s), x = Wa(l), A = Za(l);
  var D = {
    "a": J,
    "A": Z,
    "b": te,
    "B": X,
    "c": null,
    "d": Wg,
    "e": Wg,
    "f": yM,
    "g": AM,
    "G": YM,
    "H": hM,
    "I": gM,
    "j": _M,
    "L": Kg,
    "m": xM,
    "M": bM,
    "p": re,
    "q": le,
    "Q": Xg,
    "s": Jg,
    "S": vM,
    "u": TM,
    "U": SM,
    "V": MM,
    "w": DM,
    "W": wM,
    "x": null,
    "X": null,
    "y": EM,
    "Y": NM,
    "Z": kM,
    "%": jg
  };
  var N = {
    "a": me,
    "A": q,
    "b": ye,
    "B": qe,
    "c": null,
    "d": Zg,
    "e": Zg,
    "f": FM,
    "g": qM,
    "G": WM,
    "H": CM,
    "I": IM,
    "j": OM,
    "L": e0,
    "m": PM,
    "M": RM,
    "p": ze,
    "q": we,
    "Q": Xg,
    "s": Jg,
    "S": $M,
    "u": BM,
    "U": LM,
    "V": VM,
    "w": HM,
    "W": UM,
    "x": null,
    "X": null,
    "y": GM,
    "Y": zM,
    "Z": ZM,
    "%": jg
  };
  var F = {
    "a": E,
    "A": O,
    "b": H,
    "B": R,
    "c": L,
    "d": qg,
    "e": qg,
    "f": uM,
    "g": Gg,
    "G": Ug,
    "H": zg,
    "I": zg,
    "j": sM,
    "L": fM,
    "m": aM,
    "M": lM,
    "p": Y,
    "q": iM,
    "Q": dM,
    "s": mM,
    "S": cM,
    "u": eM,
    "U": tM,
    "V": rM,
    "w": QS,
    "W": nM,
    "x": G,
    "X": z,
    "y": Gg,
    "Y": Ug,
    "Z": oM,
    "%": pM
  };
  D.x = T(r, D);
  D.X = T(n, D);
  D.c = T(t, D);
  N.x = T(r, N);
  N.X = T(n, N);
  N.c = T(t, N);
  function T(K, g) {
    return function(b) {
      var y = [], I = -1, w = 0, k = K.length, P, M, C;
      if (!(b instanceof Date)) b = /* @__PURE__ */ new Date(+b);
      while (++I < k) {
        if (K.charCodeAt(I) === 37) {
          y.push(K.slice(w, I));
          if ((M = Hg[P = K.charAt(++I)]) != null) P = K.charAt(++I);
          else M = P === "e" ? " " : "0";
          if (C = g[P]) P = C(b, M);
          y.push(P);
          w = I + 1;
        }
      }
      y.push(K.slice(w, I));
      return y.join("");
    };
  }
  function v(K, g) {
    return function(b) {
      var y = za(1900, void 0, 1), I = S(y, K, b += "", 0), w, k;
      if (I != b.length) return null;
      if ("Q" in y) return new Date(y.Q);
      if ("s" in y) return new Date(y.s * 1e3 + ("L" in y ? y.L : 0));
      if (g && !("Z" in y)) y.Z = 0;
      if ("p" in y) y.H = y.H % 12 + y.p * 12;
      if (y.m === void 0) y.m = "q" in y ? y.q : 0;
      if ("V" in y) {
        if (y.V < 1 || y.V > 53) return null;
        if (!("w" in y)) y.w = 1;
        if ("Z" in y) {
          w = bu(za(y.y, 0, 1)), k = w.getUTCDay();
          w = k > 4 || k === 0 ? ki.ceil(w) : ki(w);
          w = Co.offset(w, (y.V - 1) * 7);
          y.y = w.getUTCFullYear();
          y.m = w.getUTCMonth();
          y.d = w.getUTCDate() + (y.w + 6) % 7;
        } else {
          w = xu(za(y.y, 0, 1)), k = w.getDay();
          w = k > 4 || k === 0 ? cr.ceil(w) : cr(w);
          w = it.offset(w, (y.V - 1) * 7);
          y.y = w.getFullYear();
          y.m = w.getMonth();
          y.d = w.getDate() + (y.w + 6) % 7;
        }
      } else if ("W" in y || "U" in y) {
        if (!("w" in y)) y.w = "u" in y ? y.u % 7 : "W" in y ? 1 : 0;
        k = "Z" in y ? bu(za(y.y, 0, 1)).getUTCDay() : xu(za(y.y, 0, 1)).getDay();
        y.m = 0;
        y.d = "W" in y ? (y.w + 6) % 7 + y.W * 7 - (k + 5) % 7 : y.w + y.U * 7 - (k + 6) % 7;
      }
      if ("Z" in y) {
        y.H += y.Z / 100 | 0;
        y.M += y.Z % 100;
        return bu(y);
      }
      return xu(y);
    };
  }
  function S(K, g, b, y) {
    var I = 0, w = g.length, k = b.length, P, M;
    while (I < w) {
      if (y >= k) return -1;
      P = g.charCodeAt(I++);
      if (P === 37) {
        P = g.charAt(I++);
        M = F[P in Hg ? g.charAt(I++) : P];
        if (!M || (y = M(K, b, y)) < 0) return -1;
      } else if (P != b.charCodeAt(y++)) {
        return -1;
      }
    }
    return y;
  }
  function Y(K, g, b) {
    var y = c.exec(g.slice(b));
    return y ? (K.p = f.get(y[0].toLowerCase()), b + y[0].length) : -1;
  }
  function E(K, g, b) {
    var y = d.exec(g.slice(b));
    return y ? (K.w = h.get(y[0].toLowerCase()), b + y[0].length) : -1;
  }
  function O(K, g, b) {
    var y = p.exec(g.slice(b));
    return y ? (K.w = u.get(y[0].toLowerCase()), b + y[0].length) : -1;
  }
  function H(K, g, b) {
    var y = x.exec(g.slice(b));
    return y ? (K.m = A.get(y[0].toLowerCase()), b + y[0].length) : -1;
  }
  function R(K, g, b) {
    var y = _.exec(g.slice(b));
    return y ? (K.m = m.get(y[0].toLowerCase()), b + y[0].length) : -1;
  }
  function L(K, g, b) {
    return S(K, t, g, b);
  }
  function G(K, g, b) {
    return S(K, r, g, b);
  }
  function z(K, g, b) {
    return S(K, n, g, b);
  }
  function J(K) {
    return a[K.getDay()];
  }
  function Z(K) {
    return i[K.getDay()];
  }
  function te(K) {
    return l[K.getMonth()];
  }
  function X(K) {
    return s[K.getMonth()];
  }
  function re(K) {
    return o[+(K.getHours() >= 12)];
  }
  function le(K) {
    return 1 + ~~(K.getMonth() / 3);
  }
  function me(K) {
    return a[K.getUTCDay()];
  }
  function q(K) {
    return i[K.getUTCDay()];
  }
  function ye(K) {
    return l[K.getUTCMonth()];
  }
  function qe(K) {
    return s[K.getUTCMonth()];
  }
  function ze(K) {
    return o[+(K.getUTCHours() >= 12)];
  }
  function we(K) {
    return 1 + ~~(K.getUTCMonth() / 3);
  }
  return {
    format: function(K) {
      var g = T(K += "", D);
      g.toString = function() {
        return K;
      };
      return g;
    },
    parse: function(K) {
      var g = v(K += "", false);
      g.toString = function() {
        return K;
      };
      return g;
    },
    utcFormat: function(K) {
      var g = T(K += "", N);
      g.toString = function() {
        return K;
      };
      return g;
    },
    utcParse: function(K) {
      var g = v(K += "", true);
      g.toString = function() {
        return K;
      };
      return g;
    }
  };
}
var Hg = { "-": "", "_": " ", "0": "0" };
var yt = /^\s*\d+/;
var XS = /^%/;
var JS = /[\\^$*+?|[\]().{}]/g;
function ve(e, t, r) {
  var n = e < 0 ? "-" : "", o = (n ? -e : e) + "", i = o.length;
  return n + (i < r ? new Array(r - i + 1).join(t) + o : o);
}
function KS(e) {
  return e.replace(JS, "\\$&");
}
function Wa(e) {
  return new RegExp("^(?:" + e.map(KS).join("|") + ")", "i");
}
function Za(e) {
  return new Map(e.map((t, r) => [t.toLowerCase(), r]));
}
function QS(e, t, r) {
  var n = yt.exec(t.slice(r, r + 1));
  return n ? (e.w = +n[0], r + n[0].length) : -1;
}
function eM(e, t, r) {
  var n = yt.exec(t.slice(r, r + 1));
  return n ? (e.u = +n[0], r + n[0].length) : -1;
}
function tM(e, t, r) {
  var n = yt.exec(t.slice(r, r + 2));
  return n ? (e.U = +n[0], r + n[0].length) : -1;
}
function rM(e, t, r) {
  var n = yt.exec(t.slice(r, r + 2));
  return n ? (e.V = +n[0], r + n[0].length) : -1;
}
function nM(e, t, r) {
  var n = yt.exec(t.slice(r, r + 2));
  return n ? (e.W = +n[0], r + n[0].length) : -1;
}
function Ug(e, t, r) {
  var n = yt.exec(t.slice(r, r + 4));
  return n ? (e.y = +n[0], r + n[0].length) : -1;
}
function Gg(e, t, r) {
  var n = yt.exec(t.slice(r, r + 2));
  return n ? (e.y = +n[0] + (+n[0] > 68 ? 1900 : 2e3), r + n[0].length) : -1;
}
function oM(e, t, r) {
  var n = /^(Z)|([+-]\d\d)(?::?(\d\d))?/.exec(t.slice(r, r + 6));
  return n ? (e.Z = n[1] ? 0 : -(n[2] + (n[3] || "00")), r + n[0].length) : -1;
}
function iM(e, t, r) {
  var n = yt.exec(t.slice(r, r + 1));
  return n ? (e.q = n[0] * 3 - 3, r + n[0].length) : -1;
}
function aM(e, t, r) {
  var n = yt.exec(t.slice(r, r + 2));
  return n ? (e.m = n[0] - 1, r + n[0].length) : -1;
}
function qg(e, t, r) {
  var n = yt.exec(t.slice(r, r + 2));
  return n ? (e.d = +n[0], r + n[0].length) : -1;
}
function sM(e, t, r) {
  var n = yt.exec(t.slice(r, r + 3));
  return n ? (e.m = 0, e.d = +n[0], r + n[0].length) : -1;
}
function zg(e, t, r) {
  var n = yt.exec(t.slice(r, r + 2));
  return n ? (e.H = +n[0], r + n[0].length) : -1;
}
function lM(e, t, r) {
  var n = yt.exec(t.slice(r, r + 2));
  return n ? (e.M = +n[0], r + n[0].length) : -1;
}
function cM(e, t, r) {
  var n = yt.exec(t.slice(r, r + 2));
  return n ? (e.S = +n[0], r + n[0].length) : -1;
}
function fM(e, t, r) {
  var n = yt.exec(t.slice(r, r + 3));
  return n ? (e.L = +n[0], r + n[0].length) : -1;
}
function uM(e, t, r) {
  var n = yt.exec(t.slice(r, r + 6));
  return n ? (e.L = Math.floor(n[0] / 1e3), r + n[0].length) : -1;
}
function pM(e, t, r) {
  var n = XS.exec(t.slice(r, r + 1));
  return n ? r + n[0].length : -1;
}
function dM(e, t, r) {
  var n = yt.exec(t.slice(r));
  return n ? (e.Q = +n[0], r + n[0].length) : -1;
}
function mM(e, t, r) {
  var n = yt.exec(t.slice(r));
  return n ? (e.s = +n[0], r + n[0].length) : -1;
}
function Wg(e, t) {
  return ve(e.getDate(), t, 2);
}
function hM(e, t) {
  return ve(e.getHours(), t, 2);
}
function gM(e, t) {
  return ve(e.getHours() % 12 || 12, t, 2);
}
function _M(e, t) {
  return ve(1 + it.count(je(e), e), t, 3);
}
function Kg(e, t) {
  return ve(e.getMilliseconds(), t, 3);
}
function yM(e, t) {
  return Kg(e, t) + "000";
}
function xM(e, t) {
  return ve(e.getMonth() + 1, t, 2);
}
function bM(e, t) {
  return ve(e.getMinutes(), t, 2);
}
function vM(e, t) {
  return ve(e.getSeconds(), t, 2);
}
function TM(e) {
  var t = e.getDay();
  return t === 0 ? 7 : t;
}
function SM(e, t) {
  return ve(Kt.count(je(e) - 1, e), t, 2);
}
function Qg(e) {
  var t = e.getDay();
  return t >= 4 || t === 0 ? fr(e) : fr.ceil(e);
}
function MM(e, t) {
  e = Qg(e);
  return ve(fr.count(je(e), e) + (je(e).getDay() === 4), t, 2);
}
function DM(e) {
  return e.getDay();
}
function wM(e, t) {
  return ve(cr.count(je(e) - 1, e), t, 2);
}
function EM(e, t) {
  return ve(e.getFullYear() % 100, t, 2);
}
function AM(e, t) {
  e = Qg(e);
  return ve(e.getFullYear() % 100, t, 2);
}
function NM(e, t) {
  return ve(e.getFullYear() % 1e4, t, 4);
}
function YM(e, t) {
  var r = e.getDay();
  e = r >= 4 || r === 0 ? fr(e) : fr.ceil(e);
  return ve(e.getFullYear() % 1e4, t, 4);
}
function kM(e) {
  var t = e.getTimezoneOffset();
  return (t > 0 ? "-" : (t *= -1, "+")) + ve(t / 60 | 0, "0", 2) + ve(t % 60, "0", 2);
}
function Zg(e, t) {
  return ve(e.getUTCDate(), t, 2);
}
function CM(e, t) {
  return ve(e.getUTCHours(), t, 2);
}
function IM(e, t) {
  return ve(e.getUTCHours() % 12 || 12, t, 2);
}
function OM(e, t) {
  return ve(1 + Co.count(zr(e), e), t, 3);
}
function e0(e, t) {
  return ve(e.getUTCMilliseconds(), t, 3);
}
function FM(e, t) {
  return e0(e, t) + "000";
}
function PM(e, t) {
  return ve(e.getUTCMonth() + 1, t, 2);
}
function RM(e, t) {
  return ve(e.getUTCMinutes(), t, 2);
}
function $M(e, t) {
  return ve(e.getUTCSeconds(), t, 2);
}
function BM(e) {
  var t = e.getUTCDay();
  return t === 0 ? 7 : t;
}
function LM(e, t) {
  return ve(Bo.count(zr(e) - 1, e), t, 2);
}
function t0(e) {
  var t = e.getUTCDay();
  return t >= 4 || t === 0 ? no(e) : no.ceil(e);
}
function VM(e, t) {
  e = t0(e);
  return ve(no.count(zr(e), e) + (zr(e).getUTCDay() === 4), t, 2);
}
function HM(e) {
  return e.getUTCDay();
}
function UM(e, t) {
  return ve(ki.count(zr(e) - 1, e), t, 2);
}
function GM(e, t) {
  return ve(e.getUTCFullYear() % 100, t, 2);
}
function qM(e, t) {
  e = t0(e);
  return ve(e.getUTCFullYear() % 100, t, 2);
}
function zM(e, t) {
  return ve(e.getUTCFullYear() % 1e4, t, 4);
}
function WM(e, t) {
  var r = e.getUTCDay();
  e = r >= 4 || r === 0 ? no(e) : no.ceil(e);
  return ve(e.getUTCFullYear() % 1e4, t, 4);
}
function ZM() {
  return "+0000";
}
function jg() {
  return "%";
}
function Xg(e) {
  return +e;
}
function Jg(e) {
  return Math.floor(+e / 1e3);
}

// ../../node_modules/d3-time-format/src/defaultLocale.js
var Bi;
var Pl;
var r0;
var n0;
var o0;
Tu({
  dateTime: "%x, %X",
  date: "%-m/%-d/%Y",
  time: "%-I:%M:%S %p",
  periods: ["AM", "PM"],
  days: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
  shortDays: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
  months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
  shortMonths: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
});
function Tu(e) {
  Bi = vu(e);
  Pl = Bi.format;
  r0 = Bi.parse;
  n0 = Bi.utcFormat;
  o0 = Bi.utcParse;
  return Bi;
}

// ../../node_modules/d3-scale/src/time.js
function jM(e) {
  return new Date(e);
}
function XM(e) {
  return e instanceof Date ? +e : +/* @__PURE__ */ new Date(+e);
}
function i0(e, t, r, n, o, i, a, s, l, c) {
  var f = Ha(), p = f.invert, u = f.domain;
  var d = c(".%L"), h = c(":%S"), _ = c("%I:%M"), m = c("%I %p"), x = c("%a %d"), A = c("%b %d"), D = c("%B"), N = c("%Y");
  function F(T) {
    return (l(T) < T ? d : s(T) < T ? h : a(T) < T ? _ : i(T) < T ? m : n(T) < T ? o(T) < T ? x : A : r(T) < T ? D : N)(T);
  }
  f.invert = function(T) {
    return new Date(p(T));
  };
  f.domain = function(T) {
    return arguments.length ? u(Array.from(T, XM)) : u().map(jM);
  };
  f.ticks = function(T) {
    var v = u();
    return e(v[0], v[v.length - 1], T == null ? 10 : T);
  };
  f.tickFormat = function(T, v) {
    return v == null ? F : c(v);
  };
  f.nice = function(T) {
    var v = u();
    if (!T || typeof T.range !== "function") T = t(v[0], v[v.length - 1], T == null ? 10 : T);
    return T ? u(gu(v, T)) : f;
  };
  f.copy = function() {
    return kl(f, i0(e, t, r, n, o, i, a, s, l, c));
  };
  return f;
}
function so() {
  return Mr.apply(i0(jf, Xf, je, zt, Kt, it, Sr, Tr, hn, Pl).domain([new Date(2e3, 0, 1), new Date(2e3, 0, 2)]), arguments);
}

// ../perm/dist/config.js
var Et = {
  BECO: "beco",
  BNEWS: "bnews",
  BNEWSAUTO: "bnewsauto",
  BI: "bi",
  BLP: "blp",
  BNEF: "bnef",
  BTV: "btv",
  COMMUNITY: "community",
  COMMS: "comms",
  OPINION: "opinion",
  FFM: "ffm",
  INDG: "bna",
  RISK: "risk",
  TEST: "test"
};
var W3 = Object.values(Et);
var Su = {
  NEWS: "News",
  BNEF: "BNEF",
  BI: "BI",
  BECO: "BECO",
  BTV: "BTV",
  FFM: "FFM",
  INDG_TAX: "INDG Tax",
  INDG_LAW: "INDG Law",
  INDG_GOVERNMENT: "INDG Government",
  BLOOMBERG_ENVIRONMENT: "Bloomberg Environment",
  QUICKTAKE: "QuickTake",
  OPINION: "Opinion",
  NEWS_AUTOMATION: "News Automation",
  BLP_COMMUNITY: "BLP Community",
  COMMS_MKTG: "Comms/Mktg",
  RISK: "Risk",
  TEST: "Test"
};
var Wt = {
  BI: "bi",
  BNEF: "bnef",
  BECO: "beco",
  OPINION: "opinion",
  BUSINESS: "business",
  INDG_TAX: "indgtax",
  INDG_LAW: "indglaw",
  INDG_GOVERNMENT: "indggov"
};
var At = {
  ADMIN: "PVF_TOASTER_1",
  // beta testers
  BETA_TESTER: "PVF_TOASTER_2",
  ORG_NEWS: "PVF_TOASTER_10",
  ORG_BLP: "PVF_TOASTER_11",
  ORG_BI: "PVF_TOASTER_12",
  ORG_OPINION: "PVF_TOASTER_14",
  ACCESS_GFX: "PVF_TOASTER_17",
  ORG_INDG: "PVF_TOASTER_18",
  // map access
  ACCESS_MAPS: "PVF_TOASTER_19",
  // dual axis access
  ACCESS_DUAL_AXIS: "PVF_TOASTER_15",
  // approve level
  ACCESS_APPROVE: "PVF_TOASTER_20",
  ORG_BNEF: "PVF_TOASTER_21",
  ORG_BECO: "PVF_TOASTER_22",
  ORG_NEWS_AUTO: "PVF_TOASTER_23",
  ORG_BTV: "PVF_TOASTER_24",
  ORG_COMMUNITY: "PVF_TOASTER_25",
  ORG_COMMS_MKTG: "PVF_TOASTER_26",
  ORG_RISK: "PVF_TOASTER_27",
  ORG_FFM: "PVF_TOASTER_28",
  ORG_TEST: "PVF_TOASTER_29"
};
var er = {
  maps: true,
  locatorMap: true,
  graphicEmbed: false,
  datagram: false
};
var a0 = {
  [Et.BECO]: {
    name: "Bloomberg Economics (BECO)",
    short: "BECO",
    restrictions: {
      ...er
    },
    media: {
      submitAppId: 404,
      damPermissionId: 1907,
      systemFolderName: "Toaster BECO"
    },
    pvf: At.ORG_BECO,
    theme: Wt.BUSINESS,
    matomoName: "BECO"
  },
  [Et.BNEWSAUTO]: {
    name: "Bloomberg News Automation",
    short: "News Auto",
    restrictions: {
      ...er,
      maps: false
    },
    media: {
      submitAppId: 404,
      damPermissionId: 1857,
      systemFolderName: "Toaster NEWS AUTO"
    },
    pvf: At.ORG_NEWS_AUTO,
    theme: Wt.BUSINESS,
    matomoName: "News Automation"
  },
  [Et.BI]: {
    name: "Bloomberg Intelligence",
    short: "BI",
    restrictions: {
      ...er
    },
    media: {
      submitAppId: 403,
      damPermissionId: 357,
      systemFolderName: "Toaster BI"
    },
    pvf: At.ORG_BI,
    theme: Wt.BI,
    matomoName: "BI"
  },
  [Et.INDG]: {
    name: "Bloomberg Industries (BNA/INDG)",
    short: "INDG",
    restrictions: {
      ...er
    },
    media: {
      submitAppId: 404,
      damPermissionId: 405,
      systemFolderName: "Toaster INDG"
    },
    pvf: At.ORG_INDG,
    theme: Wt.BUSINESS,
    matomoName: "INDG"
  },
  [Et.BNEF]: {
    name: "Bloomberg NEF (BNEF)",
    short: "BNEF",
    restrictions: {
      ...er
    },
    media: {
      submitAppId: 404,
      damPermissionId: 406,
      systemFolderName: "Toaster BNEF"
    },
    theme: Wt.BNEF,
    matomoName: "BNEF",
    pvf: At.ORG_BNEF
  },
  [Et.BNEWS]: {
    name: "Bloomberg News",
    short: "News",
    restrictions: {
      ...er,
      datagram: true,
      graphicEmbed: true
    },
    media: {
      submitAppId: 404,
      damPermissionId: 23,
      systemFolderName: "Toaster NEWS"
    },
    pvf: At.ORG_NEWS,
    matomoName: "News",
    theme: Wt.BUSINESS
  },
  [Et.OPINION]: {
    name: "Bloomberg Opinion",
    short: "Opinion",
    restrictions: {
      ...er
    },
    media: {
      submitAppId: 404,
      damPermissionId: 1860,
      systemFolderName: "Toaster Opinion"
    },
    theme: Wt.OPINION,
    pvf: At.ORG_OPINION,
    matomoName: "Opinion"
  },
  [Et.BLP]: {
    name: "Bloomberg Internal (BLP)",
    short: "BLP",
    restrictions: {
      ...er
    },
    media: {
      submitAppId: 404,
      damPermissionId: 404,
      systemFolderName: "Toaster BLP"
    },
    pvf: At.ORG_BLP,
    theme: Wt.BUSINESS,
    matomoName: "BLP"
  },
  [Et.BTV]: {
    name: "Bloomberg TV",
    short: "BTV",
    restrictions: {
      ...er
    },
    media: {
      submitAppId: 404,
      damPermissionId: 1957,
      systemFolderName: "Toaster BTV"
    },
    pvf: At.ORG_BTV,
    theme: Wt.BUSINESS,
    matomoName: "BTV"
  },
  [Et.COMMUNITY]: {
    name: "Bloomberg Community",
    short: "Community",
    restrictions: {
      ...er
    },
    media: {
      submitAppId: 404,
      damPermissionId: 1858,
      systemFolderName: "Toaster BLP Community"
    },
    pvf: At.ORG_COMMUNITY,
    theme: Wt.BUSINESS,
    matomoName: "Community"
  },
  [Et.COMMS]: {
    name: "Bloomberg Communications/Marketing",
    short: "Comms",
    restrictions: {
      ...er
    },
    media: {
      submitAppId: 404,
      damPermissionId: 1958,
      systemFolderName: "Toaster BLP Comms/Mktg"
    },
    pvf: At.ORG_COMMS_MKTG,
    theme: Wt.BUSINESS,
    matomoName: "Comms/Mktg"
  },
  [Et.RISK]: {
    name: "Bloomberg Risk",
    short: "Risk",
    restrictions: {
      ...er
    },
    media: {
      submitAppId: 404,
      damPermissionId: 1908,
      systemFolderName: "Toaster BLP Risk"
    },
    pvf: At.ORG_RISK,
    theme: Wt.BUSINESS,
    matomoName: "Risk"
  },
  [Et.FFM]: {
    name: "Bloomberg FFM",
    short: "FFM",
    restrictions: {
      ...er
    },
    media: {
      submitAppId: 404,
      damPermissionId: 1859,
      systemFolderName: "Toaster FFM"
    },
    pvf: At.ORG_FFM,
    theme: Wt.BUSINESS,
    matomoName: "FFM"
  },
  [Et.TEST]: {
    name: "Test",
    short: "Test",
    restrictions: {
      ...er
    },
    media: {
      submitAppId: 404,
      damPermissionId: 1959,
      systemFolderName: "Toaster Test"
    },
    pvf: At.ORG_TEST,
    theme: Wt.BUSINESS,
    matomoName: "Test"
  }
};

// src/charts/candlestick/candlestick.utils.ts
var l0 = /* @__PURE__ */ new Map([
  ["Open", 0],
  ["High", 1],
  ["Low", 2],
  ["Close", 3]
]);
var JM = "#00C88A";
var KM = "#FF415F";
var QM = "#666666";
var lo = (e, t) => {
  return e.fields.findIndex((r) => r.name === t);
};
var ML = (e) => {
  const t = e?.candlestick?.columnMappings?.open ?? "Open";
  const r = e?.candlestick?.columnMappings?.high ?? "High";
  const n = e?.candlestick?.columnMappings?.low ?? "Low";
  const o = e?.candlestick?.columnMappings?.close ?? "Close";
  const i = lo(e, t);
  const a = lo(e, r);
  const s = lo(e, n);
  const l = lo(e, o);
  if ([i, a, s, l].some((c) => c === -1)) {
    return null;
  }
  return {
    open: i,
    high: a,
    low: s,
    close: l
  };
};
var f0 = (e) => {
  const t = e?.candlestick?.columnMappings?.open ?? "Open";
  const r = e?.candlestick?.columnMappings?.high ?? "High";
  const n = e?.candlestick?.columnMappings?.low ?? "Low";
  const o = e?.candlestick?.columnMappings?.close ?? "Close";
  const i = lo(e, t);
  const a = lo(e, r);
  const s = lo(e, n);
  const l = lo(e, o);
  if ([i, a, s, l].some((f) => f === -1)) {
    return null;
  }
  const c = /* @__PURE__ */ new Map();
  c.set(t, "Open");
  c.set(r, "High");
  c.set(n, "Low");
  c.set(o, "Close");
  return c;
};
var c0 = (e, t, r) => {
  if (!t) return null;
  const n = r.fields.find((o) => o.id === e);
  if (!n) return null;
  return t.get(n.name) ?? null;
};
var DL = (e, t, r) => {
  e = e.sort((n, o) => {
    const i = c0(n, t, r);
    const a = c0(o, t, r);
    const s = i !== null;
    const l = a !== null;
    if (s && l) {
      return l0.get(i) - l0.get(a);
    } else if (s) {
      return -1;
    } else if (l) {
      return 1;
    } else {
      return 0;
    }
  });
  return e;
};
var eD = (e, t, r) => Math.min(Math.max(e, t), r);
var wL = (e, t, r, n) => {
  const o = n / 2;
  if (Math.abs(t - r) <= n) {
    return e;
  }
  return eD(e, t + o, r - o);
};
function EL(e, t, r, n, o, i) {
  const a = e[t.open];
  const s = e[t.close];
  const l = e[t.high];
  const c = e[t.low];
  const f = n ? n(e[0]) : void 0;
  if (a === void 0 || s === void 0 || l === void 0 || c === void 0 || f === void 0) {
    return { px: null };
  }
  let p;
  if (a < s) {
    p = JM;
  } else if (a > s) {
    p = KM;
  } else {
    p = QM;
  }
  const u = o(Math.max(a, s));
  const d = o(Math.min(a, s));
  const h = o(l);
  const _ = o(c);
  if (u === void 0 || d === void 0 || h === void 0 || _ === void 0) {
    return { px: null };
  }
  const m = u;
  const x = d - u;
  let A = false;
  if (i) {
    const N = r.primaryScale.scale.stringifyValue(
      i.value
    );
    const F = r.primaryScale.scale.stringifyValue(
      e[0]
    );
    A = N === F;
  }
  let D = a <= s;
  return { px: f, color: p, bodyY: m, bodyH: x, wickY1: h, wickY2: _, isCandleSelected: A, isUpDay: D };
}
function AL(e, t, r, n = 0.2, o = 1.5) {
  const i = Math.exp(-e / o);
  const a = n + i;
  const s = e * a;
  return Math.max(t, Math.min(s, r));
}

// src/charts/utils/scales/scale-types/color/ColorScale.ts
var Dr = class {
  scale;
  type = "color";
  constructor({ scale: t }) {
    if (!t) {
      const r = (n) => "#DDDDDD";
      r.domain = (n) => [];
      r.range = (n) => ["#DDDDDD"];
      this.scale = r;
    } else {
      this.scale = t;
    }
  }
  formatValue(t) {
    return `${t}`;
  }
  stringifyValue(t) {
    return `${t}`;
  }
};

// src/charts/utils/scales/scale-types/color/getColorScale.ts
var In = (e) => {
  const t = e.type === "comparison" || e.type === "pie";
  if (!t) {
    return e.fields.filter((n) => !n.taxonomy?.isPrimary).map((n) => n.id ?? "");
  }
  let r = e.data.map((n, o) => o.toString());
  if (e.type === "pie") {
    return r = r.sort((n, o) => {
      const i = parseInt(n);
      const a = parseInt(o);
      const s = e.data[i]?.[1] ?? 0;
      const l = e.data[a]?.[1] ?? 0;
      return l - s;
    });
  }
  return r;
};
function Rl(e, t, r, n, o) {
  const i = r === "light" ? fn : un;
  let a = t.concat(
    Array(Math.max(e.length - t.length, 0)).fill(i)
  );
  const s = _n().domain(e).range(a).unknown("#DDDDDD");
  const l = (c) => {
    if (o && o[r]?.[c]) {
      return o[r][c];
    }
    if (n && n.length > 0) {
      const f = n.find((p) => p.seriesId === c);
      if (f) {
        return t[f.paletteIndex];
      }
    }
    return s(c);
  };
  l.domain = () => e;
  l.range = () => a;
  return l;
}
function tD(e) {
  const { chartData: t, palette: r } = e;
  let n = e.overrides ?? [];
  let o = r;
  const i = Array.from(
    f0(t)?.keys() || []
  );
  const a = t.fields.filter(
    (l) => !l.taxonomy?.isPrimary && !i.includes(l.name)
  ).map((l) => l.id);
  if (t.candlestick?.skippedPaletteIndices) {
    o = o.filter((l, c) => {
      const f = t.candlestick?.skippedPaletteIndices?.includes(c) ?? false;
      return !f || !!n?.find((p) => p.paletteIndex === c);
    });
  }
  const s = new Map(
    n?.map((l) => [l.seriesId, r[l.paletteIndex]])
  );
  n = (n ?? []).map((l) => {
    const c = s.get(l.seriesId);
    const f = o.findIndex((p) => p === c);
    return f >= 0 ? { seriesId: l.seriesId, paletteIndex: f } : null;
  }).filter((l) => l !== null);
  return {
    nonPrimaryFieldIds: a,
    actualPalette: o,
    overrides: n
  };
}
function rD({
  palette: e,
  variant: t,
  nonPrimaryFieldIds: r,
  isMultiSeries: n,
  emphasizedSeries: o,
  numEmphasizedSeries: i,
  deemphasizedSeries: a,
  highlightValues: s,
  highlightColorIndex: l,
  reverseHighlightColors: c,
  overrides: f,
  jsonColorOverrides: p,
  deemphasisMode: u,
  deemphasizedGrayScale: d,
  barLineInfo: h
}) {
  const _ = e;
  const m = e.slice().reverse();
  const x = r.filter(
    (v) => !h.barIds?.includes(v)
  );
  const A = h.barIds || [];
  const D = Rl(
    x,
    _,
    t,
    f,
    p
  );
  const N = Rl(
    A,
    m,
    t,
    f?.map((v) => ({
      ...v,
      paletteIndex: e.length - 1 - v.paletteIndex
    })),
    p
  );
  const F = (v, S) => {
    return S ? N(v) : D(v);
  };
  const T = (v, S) => {
    const Y = h.barIds?.includes(v) ?? false;
    if (n) {
      if (i === 0 || o.includes(v)) {
        return F(v, Y);
      }
      const E = a.length;
      if (E <= 1) {
        return t === "light" ? fn : un;
      } else if (E === 2) {
        return d(v);
      } else {
        if (u === "opacity") {
          const O = F(v, Y);
          return ff(O, t);
        } else {
          return t === "light" ? fn : un;
        }
      }
    } else {
      if (s.length === 0) {
        return F(v, Y);
      }
      const E = s.includes(S ?? -1);
      if (c && E || !c && !E) {
        return F(v, Y);
      }
      return e[l];
    }
  };
  T.domain = () => r;
  T.range = () => e;
  return new Dr({
    scale: T
  });
}
var u0 = (e, t, r) => {
  const { palette: n } = jn(e, t, r);
  const o = In(e);
  const i = e.annotations?.highlightDataRows?.rows ?? [];
  const a = e.design?.seriesOptions?.emphasize ?? [];
  const s = a.length;
  const l = e.design?.seriesOptions?.colorOverrides;
  const c = Mu(e);
  const f = Rl(
    o,
    n,
    r,
    l,
    c
  );
  const p = (u) => {
    if (s > 0) {
      if (a.includes(u)) {
        return f(u);
      } else {
        return r === "light" ? fn : un;
      }
    }
    if (i.length > 0) {
      if (i.includes(+u)) {
        return f(u);
      } else {
        return r === "light" ? fn : un;
      }
    }
    return f(u);
  };
  p.domain = () => o;
  p.range = () => n;
  return new Dr({ scale: p });
};
var Li = (e, t, r) => {
  const { palette: n, customOrder: o } = jn(
    e,
    t,
    r
  );
  let i = In(e);
  const a = i.length > 1;
  const s = e.design?.seriesOptions?.emphasize ?? [];
  const l = e.candlestick?.candlestickSeriesInfo?.emphasize ?? false;
  const c = s.length + (l ? 1 : 0);
  const f = i.filter(
    (F) => !s.includes(F)
  );
  const p = e.annotations?.highlightDataRows?.rows ?? [];
  const u = e.annotations?.highlightDataRows?.colorPaletteIndex ?? 1;
  const d = e.annotations?.highlightDataRows?.reverse ?? false;
  let h = e.design?.seriesOptions?.colorOverrides ?? [];
  const _ = Mu(e);
  const m = e.design?.seriesOptions?.deemphasisMode ?? "opacity";
  const x = _n().domain(f).range(
    r === "light" ? [fn, Am] : [un, Nm]
  );
  let A = n;
  if (e.type === "candlestick") {
    const F = tD({
      chartData: e,
      palette: n,
      nonPrimaryFieldIds: i,
      overrides: h
    });
    i = F.nonPrimaryFieldIds;
    A = F.actualPalette;
    h = F.overrides;
  }
  if (e.type === "barline" && e.design?.contentDestination === Su.NEWS) {
    const F = et(e);
    if (F?.hasBar && F?.hasLine && n.length >= 2) {
      return rD({
        palette: n,
        variant: r,
        nonPrimaryFieldIds: i,
        isMultiSeries: a,
        emphasizedSeries: s,
        numEmphasizedSeries: c,
        deemphasizedSeries: f,
        highlightValues: p,
        highlightColorIndex: u,
        reverseHighlightColors: d,
        overrides: h,
        jsonColorOverrides: _,
        customOrder: o,
        deemphasisMode: m,
        deemphasizedGrayScale: x,
        barLineInfo: F
      });
    }
  }
  const D = Rl(
    i,
    A,
    r,
    h,
    _
  );
  const N = (F, T) => {
    if (a) {
      if (c === 0 || s.includes(F))
        return D(F);
      const v = f.length;
      if (v <= 1) {
        return r === "light" ? fn : un;
      } else if (v === 2) {
        return x(F);
      } else {
        if (m === "opacity") {
          return ff(
            D(F),
            r
          );
        } else {
          return r === "light" ? fn : un;
        }
      }
    } else {
      if (p.length === 0) return D(F);
      const v = p.includes(T ?? -1);
      if (d && v || !d && !v)
        return D(F);
      return n[u];
    }
  };
  N.domain = () => i;
  N.range = () => n;
  return new Dr({
    scale: N
  });
};
var BL = ({
  minValue: e,
  maxValue: t,
  colorPalette: r,
  reverseColors: n
}) => {
  let o = [e, t];
  if (n) o = o.reverse();
  const i = Zn.scale(r).domain(o).nodata("transparent");
  const a = (s) => i(s).hex();
  a.domain = () => [e, t];
  a.range = () => r;
  return new Dr({ scale: a });
};
var LL = ({
  minValue: e,
  maxValue: t,
  middleValue: r,
  colorPalette: n,
  reverseColors: o
}) => {
  let i = sm(
    e,
    t,
    r,
    n.length
  );
  let a = o ? [...n].reverse() : n;
  const s = Zn.scale(a).domain(i).nodata("transparent");
  const l = (c) => s(c).hex();
  l.domain = () => [e, t];
  l.range = () => a;
  return new Dr({ scale: l });
};
var VL = ({
  minValue: e,
  maxValue: t,
  stops: r,
  colorPalette: n,
  reverseColors: o
}) => {
  const i = [e, ...r, t];
  let a = [e, t];
  let s = o ? [...n].reverse() : n;
  const l = Zn.scale(s).domain(a).classes(i).nodata("transparent");
  const c = (f) => l(f).hex();
  c.domain = () => i;
  c.range = () => s;
  return new Dr({ scale: c });
};

// src/charts/utils/scales/scale-types/stroke/StrokeScale.ts
var ja = class {
  scale;
  // stroke color scale
  type = "stroke";
  constructor({ scale: t }) {
    if (!t) {
      const r = (n) => "none";
      r.domain = (n) => [];
      r.range = (n) => ["none"];
      this.scale = r;
    } else {
      this.scale = t;
    }
  }
  formatValue(t) {
    return `${t}`;
  }
  stringifyValue(t) {
    return `${t}`;
  }
};

// src/charts/utils/scales/scale-types/stroke/getStrokeScale.ts
function p0(e, t, r) {
  const n = "none";
  let o = t.concat(
    Array(Math.max(e.length - t.length, 0)).fill(n)
  );
  const i = _n().domain(e).range(o).unknown("none");
  const a = (s) => {
    if (r && r?.[s]) {
      return r[s];
    }
    return i(s);
  };
  a.domain = () => e;
  a.range = () => o;
  return a;
}
var d0 = (e, t, r) => {
  const { palette: n } = jn(e, t, r);
  const o = In(e);
  const i = n.map((c) => {
    return "none";
  });
  const a = Du(e);
  const s = p0(
    o,
    i,
    a
  );
  const l = (c) => {
    return s(c);
  };
  l.domain = () => o;
  l.range = () => n;
  return new ja({
    scale: l
  });
};
var $l = (e, t, r) => {
  const { palette: n } = jn(e, t, r);
  const o = In(e);
  const i = Du(e);
  const a = n.map((c) => {
    return "none";
  });
  const s = p0(
    o,
    a,
    i
  );
  const l = (c) => {
    return s(c);
  };
  l.domain = () => o;
  l.range = () => n;
  return new ja({
    scale: l
  });
};

// src/charts/utils/scales/scale-types/utils.ts
var nD = [
  "bar",
  "hbar",
  "stackedVbar",
  "stackedHbar"
];
var m0 = (e) => {
  if (nD.includes(e.type)) return true;
  if (e.type === "barline") {
    if (et(e).hasBar) return true;
  }
  return false;
};
var Xa = (e, t, r) => {
  const n = e ?? [];
  let o = "day";
  if (t === "minutes") {
    o = "minute";
  } else if (t === "hours") {
    o = "hour";
  }
  const i = r ? 0 : 1;
  return n.map((a) => {
    const s = ne(tt(a[0])).add(i, o).toDate();
    return [s, tt(a[1])];
  }).filter((a) => a[0] !== null || a[1] !== null);
};
var Vi = (e, t, r) => {
  let n = [
    tt(
      `${e?.stats?.min}`,
      vr[e.type] ?? void 0,
      On(e, `${e.stats?.min}`, t)
    ),
    tt(
      `${e?.stats?.max}`,
      vr[e.type] ?? void 0,
      On(e, `${e.stats?.max}`, t)
    )
  ];
  const o = tt(
    `${r?.min}`,
    vr[e.type],
    On(e, `${r?.min}`, t)
  );
  const i = tt(
    `${r?.max}`,
    vr[e.type],
    On(e, `${r?.max}`, t)
  );
  const a = r?.min && ne(o).isValid() ? o : void 0;
  const s = r?.max && ne(i).isValid() ? i : void 0;
  if (a) {
    n[0] = a;
  }
  if (s) {
    n[1] = s;
  }
  if (!n || !n[0] || !n[1]) {
    n = [/* @__PURE__ */ new Date(), /* @__PURE__ */ new Date()];
  }
  return n;
};

// src/charts/utils/scales/scale-info-calculators/XYAxisSeriesScaleInfoCalculator.ts
var h0 = ({
  chartData: e,
  width: t,
  height: r,
  options: n,
  seriesDataLookup: o,
  customColorScale: i
}) => {
  let a = [];
  let s = 0;
  let l = null;
  let c = 0;
  let f = [];
  let p = null;
  let u = 0;
  let d = 0;
  let h = 0;
  let _ = 0;
  let m = 0;
  let x = 0;
  let A;
  let D;
  const N = qs(t);
  const F = i ?? Li(
    e,
    n.isTerminalClient ?? false,
    n.variant ?? "light"
  );
  const T = $l(
    e,
    n.isTerminalClient ?? false,
    n.variant ?? "light"
  );
  const v = pn(e) ?? null;
  const S = Bl(e);
  if (!v) return null;
  let Y = null;
  if (v) {
    if (e.type === "dumbbell" && v.type === "string") {
      Y = Ll(
        v,
        [0, r],
        S.length,
        false,
        // horizontal orientation
        e
      );
    } else {
      Y = g0({
        chartData: e,
        isPrimary: true,
        field: v,
        rangeLimit: t
      });
    }
  }
  const E = _0(e);
  const O = E({
    fields: S,
    range: [r, 0],
    axisProperties: e.axis?.secondary,
    chartData: e,
    enforceZero: m0(e)
  });
  for (let J = 0; J < 3; J++) {
    if (Y) {
      let { padding: X, ticks: re } = Hi({
        scale: Y,
        chartData: e,
        orientation: "horizontal",
        isPrimary: true,
        options: n,
        isMobile: N
      });
      l = X;
      a = re;
      s = X.tickLength;
      c = X.textShift;
    }
    let { padding: Z, ticks: te } = Hi({
      scale: O,
      chartData: e,
      orientation: "vertical",
      isPrimary: false,
      options: n,
      isMobile: N
    });
    p = Z;
    f = te;
    u = Z.tickLength;
    d = Z.textShift;
    x = Math.max(
      l?.main ?? 0,
      p.start
    );
    m = Math.max(p.end);
    _ = Math.max(
      p.main + Ta,
      // a little breathing room from the numbers
      l?.end ?? 0,
      Ta
      // min padding
    );
    h = Math.max(l?.start ?? Ta, Ta);
    O.scale.range([r - x - m, 0]);
    Y?.scale.range([0, t - _ - h]);
  }
  const H = fg(
    e,
    o,
    Y,
    O,
    n,
    t
  );
  const R = ug(H);
  const L = pg({
    bbox: R,
    width: Y?.scale.range()[1],
    height: O.scale.range()[0]
  });
  x = Math.max(x, L.bottom, 0);
  m = Math.max(m, L.top, 0);
  _ = Math.max(_, L.right, 0);
  h = Math.max(h, L.left, 0);
  O.scale.range([r - x - m, 0]);
  Y?.scale.range([0, t - _ - h]);
  const G = et(e);
  if (Y) {
    A = Sl({
      chartData: e,
      field: v,
      scale: Y,
      leftPadding: h
    });
    if (e.type === "line" || e.type === "area" || G.hasLine) {
      D = ig({
        xField: v,
        yFields: S,
        xScale: Y,
        yScale: O,
        leftPadding: h,
        topPadding: m,
        chartData: e
      });
    }
  }
  let z = null;
  if (Y && O) {
    z = {
      primaryScale: {
        scale: Y,
        orientation: "horizontal",
        ticks: a,
        tickLength: s,
        textShift: c
      },
      secondaryScale: {
        scale: O,
        orientation: "vertical",
        ticks: f,
        tickLength: u,
        textShift: d
      },
      colorScale: F,
      strokeScale: T,
      tooltipIndexScale: A,
      padding: {
        top: m,
        right: _,
        bottom: x,
        left: h
      },
      annotationScale: D
    };
  }
  return z;
};

// src/charts/utils/scales/scale-info-calculators/horizontalBandScaleInfoCalculator.ts
var y0 = ({
  chartData: e,
  width: t,
  height: r,
  options: n
}) => {
  let o;
  const i = qs(t);
  const a = !mm.includes(e.type) || Boolean(e?.axis?.secondary?.showOptionalAxis);
  const s = a ? r - Ti : r;
  const l = Li(
    e,
    n.isTerminalClient ?? false,
    n.variant ?? "light"
  );
  const c = $l(
    e,
    n.isTerminalClient ?? false,
    n.variant ?? "light"
  );
  const f = pn(e) ?? null;
  const p = Bl(e);
  let u = null;
  if (f) {
    switch (e.type) {
      case "horizontalDumbbell":
        u = Ll(
          f,
          [0, s],
          p.length,
          true,
          // vertical orientation
          e
        );
        break;
      default:
        u = Ja(
          f,
          [0, s],
          _m(e.type) ? p.length : 1,
          // subbands
          true
          // vertical orientation
        );
        break;
    }
  }
  const d = vi.includes(e.type) ? Ka : Ui;
  const h = d({
    fields: p,
    range: [0, t],
    axisProperties: e.axis?.secondary,
    chartData: e,
    nice: e.type === "horizontalDumbbell",
    enforceZero: e.type !== "horizontalDumbbell"
  });
  if (!u) return null;
  const { padding: _, ticks: m } = Hi({
    scale: u,
    chartData: e,
    orientation: "vertical",
    isPrimary: true,
    options: n,
    isMobile: i,
    maxPadding: t / 2
  });
  const { padding: x, ticks: A } = Hi({
    scale: h,
    chartData: e,
    orientation: "horizontal",
    isPrimary: false,
    options: n,
    isMobile: i,
    nice: e.type === "horizontalDumbbell"
    // note: another special-case for horizontal dumbbells
  });
  const D = {
    top: 0,
    right: x.end,
    bottom: a ? x.main : 0,
    left: _.main + x.start
  };
  u.scale.range([0, r - D.top - D.bottom]);
  h.scale.range([0, t - D.left - D.right]);
  if (u && f) {
    o = Sl({
      chartData: e,
      field: f,
      scale: u,
      leftPadding: D.top,
      // TODO: change this to 'start' padding to be more accurate in name
      scaleIsVertical: true
    });
  }
  let N = null;
  if (u && h) {
    N = {
      primaryScale: {
        scale: u,
        orientation: "vertical",
        ticks: m,
        tickLength: 0,
        textShift: 0
      },
      secondaryScale: {
        scale: h,
        orientation: "horizontal",
        ticks: A,
        tickLength: 0,
        textShift: x.start
        // this is the additional padding for direct labels on the left (negative side)
      },
      tooltipIndexScale: o,
      padding: D,
      colorScale: l,
      strokeScale: c
    };
  } else {
    return null;
  }
  return N;
};

// src/charts/utils/scales/scale-info-calculators/singleAxisSeriesInfoCalculator.ts
var oD = ({
  chartData: e,
  width: t,
  height: r
}) => {
  const n = 2;
  let o = 0;
  const i = Math.min(t / 2, r);
  const a = Oe(e);
  const s = a?.[0];
  if (s) {
    const c = s.data?.slice(0, n) ?? [];
    const f = c.map((p) => {
      const u = +p;
      return isNaN(u) || u === null || u === void 0 ? 0 : u;
    }).map((p) => Math.sqrt(p));
    o = Math.max(...f);
  }
  const l = (c) => {
    return ht([0, o], [0, i])(Math.sqrt(c));
  };
  l.domain = (c) => {
    if (!c) {
      return [0, o];
    }
    return void 0;
  };
  l.range = (c) => {
    if (!c) {
      return [0, i];
    }
    return void 0;
  };
  return new Gi({ scale: l });
};
var iD = ({
  chartData: e,
  width: t,
  height: r
}) => {
  const n = Math.min(t, r);
  const o = Oe(e);
  const i = o?.[0];
  const a = Number(i?.stats?.max) ?? 0;
  const s = (l) => {
    return ht([0, a], [0, n])(l);
  };
  s.domain = () => {
    return [0, a];
  };
  s.range = () => {
    return [0, n];
  };
  return new Gi({ scale: s });
};
var x0 = ({
  chartData: e,
  width: t,
  height: r,
  options: n
}) => {
  let o = null;
  const i = u0(
    e,
    n.isTerminalClient ?? false,
    n.variant ?? "light"
  );
  const a = d0(
    e,
    n.isTerminalClient ?? false,
    n.variant ?? "light"
  );
  switch (e.type) {
    case "comparison":
      o = oD({
        chartData: e,
        width: t,
        height: r
      });
      break;
    case "pie":
      o = iD({
        chartData: e,
        width: t,
        height: r
      });
      break;
    default:
      o = new Gi({ scale: ht() });
      break;
  }
  return {
    primaryScale: {
      scale: o,
      orientation: "horizontal",
      ticks: [],
      tickLength: 0,
      textShift: 0
    },
    // @ts-ignore
    colorScale: i,
    strokeScale: a,
    secondaryScale: void 0,
    tooltipIndexScale: void 0,
    padding: {
      left: 0,
      right: 0,
      top: 0,
      bottom: 0
    }
  };
};

// src/charts/utils/scales/scale.utils.ts
var Vl = 0.25;
var v0 = 0.3;
var T0 = 0.1;
var Hl = 0;
var pn = (e) => e.fields.find((t) => t.taxonomy?.isPrimary);
var Bl = (e) => e.fields.filter(
  (t) => !t.taxonomy?.isPrimary && t.type === "numeric"
);
var g0 = ({
  chartData: e,
  isPrimary: t,
  field: r,
  rangeLimit: n
}) => {
  const o = e.type;
  const i = t ? e.axis?.primary ?? {} : e.axis?.secondary ?? {};
  const { dateAxisGrouping: a } = i;
  const s = et(e);
  const l = o === "stackedPanel" && e?.stackedPanels?.options && e.stackedPanels?.options?.findIndex(
    (f) => f.chartType === "bar" || f.chartType === "stackedVbar"
  ) > -1;
  const c = o === "dualAxis" && (e?.dualAxis?.left?.chartType === "bar" || e?.dualAxis?.left?.chartType === "stackedVbar" || e?.dualAxis?.right?.chartType === "bar" || e?.dualAxis?.right?.chartType === "stackedVbar");
  switch (r.type) {
    case "date":
    case "year":
    case "quarter":
    case "month":
    case "month/day":
    case "year/month": {
      if (o === "bar" || o === "stackedVbar" || o === "candlestick" || o === "stackedPanel" && l || o === "dumbbell" || o === "horizontalDumbbell" || // this shouldn't ever be true, as horizontal is always band scale
      o === "barline" && s?.hasBar || a !== void 0 && a !== "auto" || o === "dualAxis" && c || r.stats?.dateGranularity?.granularityMode === "quarters") {
        const f = E0({
          field: r,
          axisProperties: i
        });
        const p = b0(
          e,
          o,
          s
        );
        if (f <= Em) {
          return A0({
            field: r,
            range: [0, n],
            axisProperties: i,
            numSubBands: p,
            forceGranularity: a
          });
        } else {
          return Ja(r, [0, n], p);
        }
      } else {
        return w0({
          field: r,
          range: [0, n],
          axisProperties: i
        });
      }
    }
    case "numeric":
      return S0({
        field: r,
        range: [0, n],
        axisProperties: i,
        chartData: e
      });
    case "string": {
      const f = b0(
        e,
        o,
        s
      );
      return Ja(r, [0, n], f);
    }
    default:
      return null;
  }
};
var Hi = ({
  scale: e,
  chartData: t,
  orientation: r,
  isPrimary: n,
  options: o,
  isMobile: i,
  maxPadding: a,
  nice: s = true,
  isOppositeSide: l
}) => {
  const c = o.isTerminalClient ?? false;
  const f = n ? t.axis?.primary ?? {} : t.axis?.secondary ?? {};
  const p = t.type;
  const u = Wh({
    scale: e,
    isPrimary: n,
    chartData: t,
    options: o,
    nice: s,
    isMobile: i
  });
  let d = {
    ticks: [],
    padding: {
      main: 0,
      start: 0,
      end: 0,
      tickLength: Jt,
      textShift: 0
    }
  };
  if (Lp(u)) return d;
  const h = ["hbar", "horizontalDumbbell"];
  const _ = r === "horizontal";
  const m = r === "vertical";
  const x = h.includes(p);
  if (e.type === "linear") {
    if (_ && !x) {
      d = Jh({
        ticks: u,
        scale: e,
        isTerminalClient: c,
        isMobile: i
      });
    } else if (_ && x) {
      d = Zh({
        chartData: t,
        ticks: u,
        scale: e,
        isTerminalClient: c,
        isMobile: i
      });
    } else if (m && p !== "dualAxis") {
      d = Kh({
        ticks: u,
        scale: e,
        isTerminalClient: c,
        axisProperties: f,
        isMobile: i,
        isOppositeSide: l
      });
    } else {
      d = ng({
        ticks: u,
        isTerminalClient: c,
        axisProperties: f,
        isMobile: i
      });
    }
  } else if (e.type === "band") {
    if (_) {
      d = jh({
        ticks: u,
        scale: e,
        isTerminalClient: c,
        isMobile: i
      });
    } else {
      return Xh({
        ticks: u,
        scale: e,
        isTerminalClient: c,
        isMobile: i,
        maxPadding: a
      });
    }
  } else if (e.type === "time" || e.type === "timeBand") {
    if (_) {
      d = tg({
        ticks: u,
        scale: e,
        isTerminalClient: c,
        isMobile: i,
        isSubChart: t.isSubChart
      });
    } else {
      d = rg({
        ticks: u,
        scale: e,
        isTerminalClient: c,
        isMobile: i
      });
    }
  }
  return d;
};
var I4 = ({
  chartData: e,
  width: t,
  height: r,
  options: n,
  seriesDataLookup: o,
  scaffoldHeight: i,
  legendHeight: a,
  layerId: s
}) => {
  let l = null;
  switch (e.type) {
    case "area":
    case "line":
    case "bar":
    case "candlestick":
    case "stackedVbar":
    case "barline":
    case "dumbbell":
      return h0({
        chartData: e,
        width: n.isTerminalClient ? t - 2 : t,
        // this is for terminal. It wants to cut a pixel or two off the right end
        height: r,
        options: n,
        seriesDataLookup: o ?? {}
      });
    case "pie":
    case "comparison":
      l = x0({
        chartData: e,
        width: t,
        height: r,
        options: n
      });
      break;
    case "hbar":
    case "stackedHbar":
    case "horizontalDumbbell":
      l = y0({
        chartData: e,
        width: t - 7,
        height: r,
        options: n,
        seriesDataLookup: o ?? {}
      });
      break;
    default:
      return null;
  }
  if (typeof window !== "undefined" && l && s) {
    window.parent.postMessage(
      {
        type: "chartLayoutUpdate",
        scaffoldHeight: i ?? 0,
        svgs: {
          legends: a ? a + hm : 0,
          content: [
            {
              legends: 0,
              subtitle: 0,
              width: l.primaryScale.scale.scale.range()[1] ?? 0,
              height: r,
              padding: {
                left: l.padding.left ?? 0,
                right: l.padding.right ?? 0,
                top: l.padding.top ?? 0,
                bottom: l.padding.bottom ?? 0
              }
            }
          ]
        },
        layerId: s
      },
      "*"
    );
  }
  return l;
};
var Mu = (e) => {
  let t = {
    dark: {},
    light: {}
  };
  if (!e.design?.parsedOverrideOptions) {
    return t;
  }
  const r = e.type === "comparison" || e.type === "pie";
  const n = e.fields.filter(
    (p) => !p.taxonomy?.isPrimary
  );
  const o = Object.keys(e.design?.parsedOverrideOptions);
  const i = /color(\d+)/;
  const a = /colorDark(\d+)/;
  const s = /colorLight(\d+)/;
  const l = o.filter((p) => p.match(i));
  const c = o.filter((p) => p.match(s));
  const f = o.filter((p) => p.match(a));
  l.forEach((p) => {
    const u = p.replace("color", "").replace(/\D/g, "");
    const d = (e.design?.parsedOverrideOptions)[p];
    if (r && u) {
      t.light[Number(u)] = d;
      t.dark[Number(u)] = d;
    }
    const h = n[Number(u)];
    if (!r && h) {
      t.light[h.id] = d;
      t.dark[h.id] = d;
    }
  });
  c.forEach((p) => {
    const u = p.replace("colorLight", "").replace(/\D/g, "");
    const d = (e.design?.parsedOverrideOptions)[p];
    const h = n[Number(u)];
    if (h) {
      t.light[h.id] = d;
    }
  });
  f.forEach((p) => {
    const u = p.replace("colorDark", "").replace(/\D/g, "");
    const d = e.design.parsedOverrideOptions[p];
    const h = n[Number(u)];
    if (h) {
      t.dark[h.id] = d;
    }
  });
  return t;
};
var Du = (e) => {
  let t = {};
  if (!e.design?.parsedOverrideOptions) {
    return t;
  }
  const r = e.type === "comparison" || e.type === "pie";
  const n = e.fields.filter(
    (s) => !s.taxonomy?.isPrimary
  );
  const o = Object.keys(e.design?.parsedOverrideOptions);
  const i = /^stroke(\d+)$/;
  const a = o.filter((s) => s.match(i));
  a.forEach((s) => {
    const l = s.match(i);
    if (l) {
      const c = parseInt(l[1], 10);
      const f = (e.design?.parsedOverrideOptions)[s];
      if (r) {
        t[c] = f;
      } else {
        const p = n[c];
        if (p) {
          t[p.id] = f;
        }
      }
    }
  });
  return t;
};
var _0 = (e) => {
  switch (e.type) {
    case "stackedVbar":
    case "stackedHbar":
      return Ka;
    case "barline": {
      const t = e.barline?.barlineStyle ?? "lineStackedBar";
      if (t === "lineGroupedBar") {
        return Ui;
      } else {
        return D0;
      }
    }
    case "area": {
      const t = e.area?.style ?? "stacked";
      if (t === "proportional") {
        return M0;
      }
      return Ka;
    }
    default:
      return Ui;
  }
};
var aD = ["line", "stackedVbar"];
var b0 = (e, t, r) => {
  if (aD.includes(t) || r?.isStacked) {
    return 1;
  }
  if (r?.hasBar && !r.isStacked) {
    return r.barIds?.length ?? 1;
  }
  return Oe(e).length;
};
var Ni = [
  "date",
  "month/day",
  "year/month",
  "month",
  "year",
  "quarter"
];

// src/charts/utils/scales/scale-types/band/BandScale.ts
var Ao = class {
  scale;
  type = "band";
  fieldType = "string";
  isBand = true;
  isTime = false;
  isStacked = false;
  constructor({
    scale: t
  }) {
    if (!t) {
      const r = (n, o) => {
        if (o !== void 0) {
          return o * 10;
        }
        return 0;
      };
      r.domain = (n) => [];
      r.range = (n) => [0, 100];
      r.bandwidth = () => 10;
      r.subBandWidth = () => 5;
      r.step = () => 5;
      r.invert = (n) => {
        return Math.floor(n / 5);
      };
      this.scale = r;
    } else {
      this.scale = t;
    }
  }
  formatValue(t) {
    if (typeof t === "string") {
      return t;
    }
    if (typeof t === "number") {
      return t;
    }
    if (t instanceof Date) {
      return ne(t).plainFormat();
    }
    return void 0;
  }
  stringifyValue(t) {
    return this.formatValue(t)?.toString() ?? "";
  }
};

// src/charts/utils/scales/scale-types/band/getBandScale.ts
var N0 = (e, t, r, n) => {
  const o = Rn(e, t).paddingInner(
    n ? r > 1 ? T0 : v0 : Vl
  ).paddingOuter(Hl);
  let i = o.bandwidth();
  let a = i / r;
  let s = o.range();
  const l = () => {
    const f = o.range();
    if (f[0] !== s[0] || f[1] !== s[1]) {
      s = f;
      i = o.bandwidth();
      a = i / r;
    }
    return i;
  };
  const c = (f, p, u) => {
    const d = l();
    let h = d / 2;
    if (n && p !== void 0 && typeof p === "number" && p <= r && p >= 0) {
      h = Math.floor(p) * a;
    }
    if (p !== void 0 && u && !n) {
      const _ = d / u;
      h = h - d / 2 + _ * p + _ / 2;
    }
    return o(f) !== void 0 ? o(f) + h : void 0;
  };
  c.domain = o.domain;
  c.range = o.range;
  c.bandwidth = o.bandwidth;
  c.step = o.step;
  c.subBandWidth = () => {
    l();
    return a;
  };
  c.invert = (f) => {
    const p = o.domain();
    const u = o.step();
    const d = o.range();
    const h = l();
    const _ = d[0];
    const m = ht().domain([
      _ + h / 2,
      _ + u * (p.length - 1) + h / 2
    ]).range([0, p.length - 1]).clamp(true);
    return m(f);
  };
  return new Ao({ scale: c });
};
var Ja = (e, t, r, n = false) => {
  const o = e.type === "year" ? e.data ?? [] : e.stats?.uniqueValues ?? e.data ?? [];
  return N0(o, t, r, n);
};
var Ll = (e, t, r, n = false, o) => {
  let i = e.stats?.uniqueValues ?? e.data;
  i = [...i];
  const a = o.data;
  const s = o.fields;
  if (o.dumbbell?.sort) {
    const l = s.findIndex(
      (c) => c.id === o.dumbbell?.sortBy
    );
    i.sort(
      (c, f) => a.find((p) => p[0] === c)[l] - a.find((p) => p[0] === f)[l]
    );
    if (o.dumbbell?.reverseSort) {
      i.reverse();
    }
  }
  return N0(i, t, r, n);
};

// src/charts/utils/scales/scale-types/linear/LinearScale.ts
var dn = class {
  scale;
  type = "linear";
  fieldType = "numeric";
  originalDomain;
  isStacked = false;
  isBand = false;
  isTime = false;
  constructor({
    scale: t,
    originalDomain: r,
    isStacked: n = false
  }) {
    if (!t) {
      this.scale = ht();
    } else {
      this.scale = t;
    }
    this.originalDomain = r;
    this.isStacked = n;
  }
  formatValue(t) {
    if (typeof t === "number") {
      return t;
    }
    if (typeof t === "string" && !isNaN(Number(t))) {
      return Number(t);
    }
    return void 0;
  }
  stringifyValue(t) {
    if (typeof t === "number") {
      return t.toString();
    }
    if (typeof t === "string" && !isNaN(Number(t))) {
      return Number(t).toString();
    }
    return "";
  }
};

// src/charts/utils/scales/scale-types/linear/getLinearScale.ts
var Ul = ({
  originalDomain: e,
  axisProperties: t,
  chartData: r,
  overrideOptions: n
}) => {
  const { annotations: o } = r;
  let i = 0;
  let a = 0;
  if (e[0]) {
    i = +e[0];
  }
  if (e[1]) {
    a = +e[1];
  }
  const s = o?.thresholdIndicators?.map(
    (f) => f.value
  );
  const [l, c] = s ? [Math.min(...s), Math.max(...s)] : [void 0, void 0];
  if (l !== void 0 && isFinite(l)) {
    i = Math.min(i, l);
  }
  if (c !== void 0 && isFinite(c)) {
    a = Math.max(a, c);
  }
  if (t?.min) {
    i = +t.min;
  } else if (t?.forceVisibleZero || n?.hasBar) {
    if (i > 0) {
      i = 0;
    }
  }
  if (t?.max) {
    a = +t.max;
  } else if (t?.forceVisibleZero || n?.hasBar) {
    if (a < 0) {
      a = 0;
    }
  }
  return [i, a];
};
var W4 = (e) => {
  if (!e?.thresholdIndicators) {
    return void 0;
  }
  let t = 0;
  let r = 1;
  if (e?.thresholdIndicators) {
    for (const n of e.thresholdIndicators) {
      if (n.value && +n.value < t) {
        t = +n.value;
      }
      if (n.value && +n.value > r) {
        r = +n.value;
      }
    }
  }
  return { minDomain: t, maxDomain: r };
};
var S0 = ({
  field: e,
  range: t,
  axisProperties: r,
  chartData: n,
  enforceZero: o
}) => {
  const i = [e.stats?.min, e.stats?.max];
  const [a, s] = Ul({
    originalDomain: i,
    axisProperties: r,
    chartData: n,
    overrideOptions: { hasBar: o }
  });
  let l = ht([a, s], t).unknown(void 0);
  if (!r?.min && !r?.max) {
    l = l.nice();
  }
  return new dn({
    scale: l,
    originalDomain: i,
    isStacked: false
  });
};
var Ui = ({
  fields: e,
  range: t,
  axisProperties: r,
  chartData: n,
  nice: o = true,
  enforceZero: i = false
}) => {
  let a = -Infinity;
  let s = Infinity;
  for (const u of e) {
    if (rt(u.stats?.min) && Number(u.stats.min) < s) {
      s = Number(u.stats.min);
    }
    if (rt(u.stats?.max) && Number(u.stats.max) > a) {
      a = Number(u.stats.max);
    }
  }
  const l = [s, a];
  const [c, f] = Ul({
    originalDomain: l,
    axisProperties: r,
    chartData: n,
    overrideOptions: { hasBar: i }
  });
  let p = ht([c, f], t).unknown(void 0);
  if (o && !r?.min && !r?.max) {
    p = p.nice();
  }
  return new dn({
    scale: p,
    originalDomain: l,
    isStacked: false
  });
};
var Ka = ({
  fields: e,
  range: t,
  axisProperties: r,
  chartData: n,
  nice: o = true
}) => {
  let i = -Infinity;
  let a = Infinity;
  const s = e?.[0]?.data?.length ?? 0;
  for (let u = 0; u < s; u++) {
    let d = 0;
    let h = 0;
    for (const _ of e) {
      const m = +_.data?.[u];
      if (m) {
        if (m >= 0) {
          d += m;
        } else {
          h += m;
        }
      }
    }
    if (d > i) {
      i = d;
    }
    if (h < a) {
      a = h;
    }
  }
  const l = [a, i];
  const [c, f] = Ul({
    originalDomain: l,
    axisProperties: r,
    chartData: n
  });
  let p = ht([c, f], t).unknown(void 0);
  if (o) {
    p = p.nice();
  }
  return new dn({
    scale: p,
    originalDomain: l,
    isStacked: true
  });
};
var M0 = ({
  range: e
}) => {
  const t = ht([0, 100], e).unknown(void 0);
  return new dn({
    scale: t,
    originalDomain: [0, 100],
    isStacked: true
  });
};
var D0 = ({
  fields: e,
  range: t,
  axisProperties: r,
  chartData: n,
  nice: o = true
}) => {
  const i = et(n);
  if (!i.isStacked) {
    return Ui({
      fields: e,
      range: t,
      axisProperties: r,
      chartData: n,
      nice: o,
      enforceZero: i.hasBar
    });
  }
  let a = -Infinity;
  let s = Infinity;
  let l = -Infinity;
  let c = Infinity;
  const f = e?.[0]?.data?.length ?? 0;
  for (let _ = 0; _ < f; _++) {
    let m = 0;
    let x = 0;
    for (const A of e) {
      if (i.barIds && !i.barIds.includes(A.id)) {
        continue;
      } else {
        const D = +A.data?.[_];
        if (D) {
          if (D >= 0) {
            m += D;
          } else {
            x += D;
          }
        }
      }
    }
    if (m > a) {
      a = m;
    }
    if (x < s) {
      s = x;
    }
  }
  for (const _ of e) {
    if (i.barIds && i.barIds.includes(_.id)) {
      continue;
    }
    if (rt(_.stats?.min) && Number(_.stats.min) < c) {
      c = Number(_.stats.min);
    }
    if (rt(_.stats?.max) && Number(_.stats.max) > l) {
      l = Number(_.stats.max);
    }
  }
  const p = [
    Math.min(s, c),
    Math.max(a, l)
  ];
  const [u, d] = Ul({
    originalDomain: p,
    axisProperties: r,
    chartData: n,
    overrideOptions: { hasBar: true }
  });
  let h = ht([u, d], t).unknown(void 0);
  if (o) {
    h = h.nice();
  }
  return new dn({
    scale: h,
    originalDomain: p,
    isStacked: true
  });
};

// src/charts/utils/scales/scale-types/numeric/NumericScale.ts
var Gi = class {
  scale;
  type = "numeric";
  fieldType = "numeric";
  isBand = false;
  isTime = false;
  isStacked = false;
  constructor({ scale: t }) {
    if (!t) {
      this.scale = ht();
    } else {
      this.scale = t;
    }
  }
  formatValue(t) {
    if (typeof t === "number") {
      return t;
    }
    if (typeof t === "string" && !isNaN(Number(t))) {
      return Number(t);
    }
    return void 0;
  }
  stringifyValue(t) {
    if (typeof t === "number") {
      return t.toString();
    }
    if (typeof t === "string" && !isNaN(Number(t))) {
      return Number(t).toString();
    }
    return "";
  }
};

// ../../node_modules/@d3fc/d3fc-rebind/src/createReboundMethod.js
var wu = (e, t, r) => {
  const n = t[r];
  if (typeof n !== "function") {
    throw new Error(`Attempt to rebind ${r} which isn't a function on the source object`);
  }
  return (...o) => {
    var i = n.apply(t, o);
    return i === t ? e : i;
  };
};

// ../../node_modules/@d3fc/d3fc-rebind/src/rebindAll.js
var sD = (e) => (t) => e.reduce(
  (r, n) => r && n(r),
  t
);
var Eu = (e, t, ...r) => {
  const n = sD(r);
  for (const o of Object.keys(t)) {
    const i = n(o);
    if (i) {
      e[i] = wu(e, t, o);
    }
  }
  return e;
};

// ../../node_modules/@d3fc/d3fc-rebind/src/transform/regexify.js
var Au = (e) => e.map(
  (t) => typeof t === "string" ? new RegExp(`^${t}$`) : t
);

// ../../node_modules/@d3fc/d3fc-rebind/src/transform/include.js
var Nu = (...e) => {
  e = Au(e);
  return (t) => e.some((r) => r.test(t)) && t;
};

// ../../node_modules/@d3fc/d3fc-discontinuous-scale/src/discontinuity/identity.js
function Yu() {
  var e = {};
  e.distance = function(t, r) {
    return r - t;
  };
  e.offset = function(t, r) {
    return t instanceof Date ? new Date(t.getTime() + r) : t + r;
  };
  e.clampUp = (t) => t;
  e.clampDown = (t) => t;
  e.copy = () => e;
  return e;
}

// ../../node_modules/@d3fc/d3fc-discontinuous-scale/src/tickFilter.js
function ku(e, t) {
  const r = e.map(t.clampUp);
  if (r.length !== new Set(r.map((n) => n?.valueOf())).size) {
    console.warn(
      "There are multiple ticks that fall within a discontinuity, which has led to them being rendered on top of each other. Consider using scale.ticks to explicitly specify the ticks for the scale."
    );
  }
  return r;
}

// ../../node_modules/@d3fc/d3fc-discontinuous-scale/src/discontinuous.js
function Y0(e) {
  if (!arguments.length) {
    e = qa();
  }
  var t = Yu();
  const r = (n) => {
    var o = e.domain();
    var i = e.range();
    var a = t.distance(o[0], o[1]);
    var s = t.distance(o[0], n);
    var l = s / a;
    var c = l * (i[1] - i[0]) + i[0];
    return c;
  };
  r.invert = (n) => {
    var o = e.domain();
    var i = e.range();
    var a = (n - i[0]) / (i[1] - i[0]);
    var s = t.distance(o[0], o[1]);
    var l = a * s;
    return t.offset(o[0], l);
  };
  r.domain = (...n) => {
    if (!n.length) {
      return e.domain();
    }
    const o = n[0];
    var i = t.clampUp(o[0]);
    var a = t.clampDown(o[1]);
    e.domain([i, a]);
    return r;
  };
  r.nice = () => {
    e.nice();
    var n = e.domain();
    var o = t.clampUp(n[0]);
    var i = t.clampDown(n[1]);
    e.domain([o, i]);
    return r;
  };
  r.ticks = (...n) => {
    var o = e.ticks.apply(this, n);
    return ku(o, t);
  };
  r.copy = () => Y0(e.copy()).discontinuityProvider(t.copy());
  r.discontinuityProvider = (...n) => {
    if (!n.length) {
      return t;
    }
    t = n[0];
    return r;
  };
  Eu(r, e, Nu("range", "rangeRound", "interpolate", "clamp", "tickFormat"));
  return r;
}
var $n = Y0;

// ../../node_modules/@d3fc/d3fc-discontinuous-scale/src/discontinuity/range.js
var lD = (...e) => {
  const t = (i, a) => i > a[0] && i < a[1];
  const r = (i, a) => i[0] >= a[0] && i[1] <= a[1];
  var n = {};
  n.distance = (i, a) => {
    i = n.clampUp(i);
    a = n.clampDown(a);
    const s = e.filter((c) => r(c, [i, a]));
    const l = s.map((c) => c[1] - c[0]);
    return a - i - l.reduce((c, f) => c + f, 0);
  };
  const o = (i, a) => i instanceof Date ? new Date(i.getTime() + a) : i + a;
  n.offset = (i, a) => {
    if (a > 0) {
      let s = n.clampUp(i);
      let l = a;
      while (l > 0) {
        const c = e.filter((f) => f[0] > s).sort((f, p) => f[0] - p[0]);
        if (c.length) {
          const f = c[0];
          const p = f[0] - s;
          if (p > l) {
            s = o(s, l);
            l = 0;
          } else {
            s = f[1];
            l -= p;
          }
        } else {
          s = o(s, l);
          l = 0;
        }
      }
      return s;
    } else {
      let s = n.clampDown(i);
      let l = a;
      while (l < 0) {
        const c = e.filter((f) => f[1] < s).sort((f, p) => p[0] - f[0]);
        if (c.length) {
          const f = c[0];
          const p = f[1] - s;
          if (p < l) {
            s = o(s, l);
            l = 0;
          } else {
            s = f[0];
            l -= p;
          }
        } else {
          s = o(s, l);
          l = 0;
        }
      }
      return s;
    }
  };
  n.clampUp = (i) => e.reduce((a, s) => t(a, s) ? s[1] : a, i);
  n.clampDown = (i) => e.reduce((a, s) => t(a, s) ? s[0] : a, i);
  n.copy = () => n;
  return n;
};
var qi = lD;

// ../../node_modules/@d3fc/d3fc-discontinuous-scale/src/discontinuity/skipWeeklyPattern/constants.js
var Cu = 24 * 3600 * 1e3;

// ../../node_modules/@d3fc/d3fc-discontinuous-scale/src/discontinuity/skipWeeklyPattern/dateTimeUtility.js
var Gl = (e, t, r, n, o) => {
  const i = {};
  i.getTimeComponentArrayFromString = (a) => [a.slice(0, 2), a.slice(3, 5), a.slice(6, 8), a.slice(9, 12)];
  i.getTimeString = (a) => {
    const [s, l, c, f] = r(a).map((p) => p.toString(10).padStart(2, "0"));
    return `${s}:${l}:${c}.${f.padStart(3, "0")}`;
  };
  i.setTime = (a, s, l = 0) => {
    const [c, f, p, u] = i.getTimeComponentArrayFromString(s);
    return o.offset(e(a, c, f, p, u), l);
  };
  i.getStartOfNextDay = (a) => n.offset(n.floor(a), 1);
  i.getEndOfPreviousDay = (a) => o.offset(n.floor(a), -1);
  i.dayInterval = n;
  i.msInterval = o;
  i.getDay = t;
  return i;
};

// ../../node_modules/@d3fc/d3fc-discontinuous-scale/src/discontinuity/skipWeeklyPattern.js
var W6 = Gl(
  (e, t, r, n, o) => new Date(e.getFullYear(), e.getMonth(), e.getDate(), t, r, n, o),
  (e) => e.getDay(),
  (e) => [e.getHours(), e.getMinutes(), e.getSeconds(), e.getMilliseconds()],
  it,
  Ur
);

// ../../node_modules/@d3fc/d3fc-discontinuous-scale/src/discontinuity/skipUtcWeeklyPattern.js
var Q6 = Gl(
  (e, t, r, n, o) => new Date(Date.UTC(e.getUTCFullYear(), e.getUTCMonth(), e.getUTCDate(), t, r, n, o)),
  (e) => e.getUTCDay(),
  (e) => [e.getUTCHours(), e.getUTCMinutes(), e.getUTCSeconds(), e.getUTCMilliseconds()],
  Co,
  Ur
);

// src/charts/utils/scales/scale-types/time/TimeScale.ts
var wi = class {
  scale;
  type = "time";
  fieldType;
  isBand = false;
  isTime = true;
  isStacked = false;
  gaps = [];
  granularity;
  field;
  preserveOrder = false;
  constructor({
    scale: t,
    field: r,
    gaps: n = [],
    granularity: o,
    preserveOrder: i = false
  }) {
    if (!t) {
      this.scale = $n(so());
    } else {
      this.scale = t;
    }
    if (Ni.includes(r.type)) {
      this.fieldType = r.type;
    } else {
      this.fieldType = "date";
    }
    this.gaps = n;
    this.granularity = o;
    this.field = r;
    this.preserveOrder = i;
  }
  formatValue(t) {
    if (t instanceof Date) {
      return t;
    }
    return tt(
      t,
      vr[this.fieldType],
      On(this.field, t, this.preserveOrder)
    );
  }
  stringifyValue(t) {
    return ne(this.formatValue(t)).plainFormat();
  }
};

// src/charts/utils/scales/scale-types/time/getTimeScale.ts
var w0 = ({
  field: e,
  range: t,
  axisProperties: r
}) => {
  const n = e.stats?.dateGranularity?.minimumSpan ?? "days";
  const o = r?.preserveOrder;
  const i = Vi(e, o ?? false, r);
  const a = Xa(e.stats?.dateGaps, n, false);
  const s = $n(so()).discontinuityProvider(qi(...a)).range(t).domain(i);
  const l = new wi({
    scale: s,
    field: e,
    gaps: a,
    granularity: n,
    preserveOrder: o
  });
  return l;
};

// src/charts/utils/scales/scale-types/time-band/TimeBandScale.ts
var ql = class {
  scale;
  type = "timeBand";
  fieldType;
  field;
  isBand = true;
  isTime = true;
  isStacked = false;
  gaps;
  weekday = void 0;
  preserveOrder = false;
  granularity;
  constructor({
    scale: t,
    field: r,
    gaps: n = [],
    weekday: o,
    preserveOrder: i = false,
    granularity: a
  }) {
    if (!t) {
      this.scale = $n(Rn());
    } else {
      this.scale = t;
    }
    if (Ni.includes(r.type)) {
      this.fieldType = r.type;
    } else {
      this.fieldType = "date";
    }
    this.gaps = n;
    this.weekday = o;
    this.field = r;
    this.preserveOrder = i;
    this.granularity = a;
  }
  formatValue(t) {
    if (t instanceof Date) {
      return t;
    }
    return tt(
      t,
      vr[this.fieldType],
      On(this.field, t, this.preserveOrder)
    );
  }
  stringifyValue(t) {
    if (t instanceof Date) {
      return ne(t).plainFormat();
    }
    return ne(this.formatValue(t)).plainFormat();
  }
};

// src/charts/utils/scales/scale-types/time-band/getTimeBandScale.ts
var cD = [
  Kt,
  cr,
  Oo,
  Fo,
  fr,
  Po,
  Ro
];
var Iu = (e, t, r) => {
  if (r) return Fn;
  switch (e) {
    case "minutes":
      return Tr;
    case "hours":
      return Sr;
    case "days":
      return it;
    case "weeks":
      return cD[t[0].getDay()];
    case "quarters":
      return Fn;
    case "months":
      return zt;
    case "years":
    default:
      return je;
  }
};
var Ou = ({
  timeDomain: e,
  granularity: t,
  isQuarter: r
}) => {
  const n = Iu(
    t,
    e,
    r
  );
  return n.range(
    n.floor(e[0]),
    // round to floor of interval (i.e. march 2001 -> january 2001)
    ne(e[1]).add(1, "s").toDate()
    // add 1 second to include the end date
  );
};
var E0 = ({
  field: e,
  axisProperties: t
}) => {
  const r = e.stats?.dateGranularity?.granularityMode ?? "days";
  const n = t?.preserveOrder ?? false;
  const o = e.type === "quarter";
  const i = Vi(e, n, t);
  const a = Ou({
    timeDomain: i,
    granularity: r,
    isQuarter: o
  });
  return a.length;
};
var A0 = ({
  field: e,
  range: t,
  axisProperties: r,
  forceGranularity: n
}) => {
  const o = r?.preserveOrder ?? false;
  const i = e.type === "quarter" || n === "quarters";
  const a = n && n !== "auto" ? n : e.stats?.dateGranularity?.granularityMode ?? "days";
  let s = Vi(e, o, r);
  const l = Ou({
    timeDomain: s,
    granularity: a,
    isQuarter: i
  });
  const c = /* @__PURE__ */ new Map();
  l.forEach((v) => {
    const S = Iu(
      a,
      s,
      i
    ).floor(v);
    if (S && !isNaN(S.getTime())) {
      c.set(S.getTime(), ne(S).plainFormat());
    }
  });
  const f = (v) => {
    const S = Iu(
      a,
      s,
      i
    ).floor(v);
    if (S !== void 0 && !isNaN(S.getTime())) {
      return c.get(S.getTime()) ?? "";
    } else {
      return "";
    }
  };
  const p = Xa(e.stats?.dateGaps, a, true).reduce(
    (v, S) => {
      const Y = tt(f(S[0]));
      const E = tt(f(S[1]));
      if (Y && E) v.push([Y, E]);
      return v;
    },
    []
  );
  const u = qi(...p);
  let d = l.map((v) => f(v));
  d = d.filter((v) => {
    for (const S of p) {
      const Y = tt(v);
      if (!Y) {
        return false;
      }
      if (S[0] && S[1] && Y > S[0] && Y < S[1]) {
        return false;
      }
    }
    return true;
  });
  const h = Rn(d, t).paddingInner(Vl).paddingOuter(Hl);
  let _ = h.bandwidth();
  let m = h.step();
  let x = h.range();
  const A = () => {
    const v = h.range();
    if (v[0] !== x[0] || v[1] !== x[1]) {
      x = v;
      _ = h.bandwidth();
      m = h.step();
    }
    return _;
  };
  const D = (v, S, Y) => {
    const E = A();
    let O = E / 2;
    if (S !== void 0 && Y) {
      const R = E / Y;
      O = O - E / 2 + R * S + R / 2;
    }
    const H = h(f(v));
    if (H === void 0) {
      const R = h(f(u.clampUp(v)));
      if (R !== void 0) {
        return R;
      } else {
        return void 0;
      }
    } else {
      return H + O;
    }
  };
  D.domain = function(v) {
    if (!arguments.length) return s;
    s = v;
    const S = Ou({
      timeDomain: s,
      granularity: a,
      isQuarter: i
    });
    const Y = S.map((E) => f(E));
    h.domain(Y);
    return D;
  };
  D.range = function(v) {
    if (!arguments.length) return t;
    t = v;
    h.range(t);
    return D;
  };
  D.bandwidth = () => {
    return A();
  };
  D.subBandWidth = (v) => A() / (v ?? 1);
  D.bands = () => {
    return d;
  };
  D.step = () => {
    A();
    return m;
  };
  const N = Xa(
    e.stats?.dateGaps,
    a,
    false
  );
  const F = Vi(
    e,
    o ?? false,
    r
  );
  const T = $n(so()).discontinuityProvider(qi(...N)).range(t).clamp(false).domain(F);
  D.timeScale = (v) => {
    return T(v);
  };
  D.invert = (v) => {
    return T.invert(v);
  };
  D.discontinuityProvider = () => u;
  return new ql({
    scale: D,
    field: e,
    gaps: p,
    weekday: a === "weeks" ? s[0].getDay() : void 0,
    preserveOrder: o,
    granularity: a
  });
};

// src/charts/utils/scales/scale-types/tooltip-index/TooltipScale.ts
var Ml = class {
  scale;
  type = "tooltipIndex";
  constructor({
    scale: t
  }) {
    this.scale = t;
  }
  formatValue(t) {
    return t;
  }
  stringifyValue(t) {
    return `${t}`;
  }
};

// ../../node_modules/svelte/src/constants.js
var C0 = 1;
var I0 = 1 << 1;
var Fu = 1 << 2;
var O0 = 1 << 3;
var F0 = 1 << 4;
var P0 = 1;
var R0 = 1 << 1;
var Pu = 1 << 2;
var $0 = 1 << 3;
var B0 = 1 << 4;
var fD = 1 << 1;
var uD = 1 << 2;
var Ru = 1;
var L0 = 1 << 1;
var pD = 1 << 2;
var dD = 1 << 3;
var co = "[";
var jr = "[!";
var $u = "[?";
var Zo = "]";
var Bn = {};
var R9 = 1 << 1;
var $9 = 1 << 2;
var Fe = Symbol();
var ur = Symbol("filename");
var V0 = Symbol("hmr");
var zl = "http://www.w3.org/1999/xhtml";
var Qa = "http://www.w3.org/2000/svg";
var Bu = "@attach";

// ../../node_modules/esm-env/dev-fallback.js
var H0 = globalThis.process?.env?.NODE_ENV;
var U = H0 && !H0.toLowerCase().startsWith("prod");

// ../../node_modules/svelte/src/internal/shared/utils.js
var Xr = Array.isArray;
var U0 = Array.prototype.indexOf;
var Jr = Array.prototype.includes;
var zi = Array.from;
var Lu = Object.keys;
var xt = Object.defineProperty;
var It = Object.getOwnPropertyDescriptor;
var Wl = Object.getOwnPropertyDescriptors;
var Vu = Object.prototype;
var G0 = Array.prototype;
var jo = Object.getPrototypeOf;
var Hu = Object.isExtensible;
function Xo(e) {
  return typeof e === "function";
}
var Ot = () => {
};
function q0(e) {
  return e();
}
function Wi(e) {
  for (var t = 0; t < e.length; t++) {
    e[t]();
  }
}
function Zl() {
  var e;
  var t;
  var r = new Promise((n, o) => {
    e = n;
    t = o;
  });
  return { promise: r, resolve: e, reject: t };
}
function Uu(e, t) {
  if (Array.isArray(e)) {
    return e;
  }
  if (t === void 0 || !(Symbol.iterator in e)) {
    return Array.from(e);
  }
  const r = [];
  for (const n of e) {
    r.push(n);
    if (r.length === t) break;
  }
  return r;
}

// ../../node_modules/svelte/src/internal/client/constants.js
var Be = 1 << 1;
var fo = 1 << 2;
var uo = 1 << 3;
var Jo = 1 << 24;
var tr = 1 << 4;
var bt = 1 << 5;
var wr = 1 << 6;
var Zi = 1 << 7;
var Ft = 1 << 9;
var Pe = 1 << 10;
var ke = 1 << 11;
var at = 1 << 12;
var Pt = 1 << 13;
var Zt = 1 << 14;
var Nt = 1 << 15;
var Rt = 1 << 16;
var Ko = 1 << 17;
var es = 1 << 18;
var Kr = 1 << 19;
var Gu = 1 << 20;
var bn = 1 << 25;
var Er = 1 << 16;
var jl = 1 << 21;
var Ln = 1 << 22;
var Ar = 1 << 23;
var st = Symbol("$state");
var ji = Symbol("legacy props");
var z0 = Symbol("");
var Xl = Symbol("proxy path");
var Qr = new class j9 extends Error {
  name = "StaleReactionError";
  message = "The reaction that called `getAbortSignal()` was re-run or destroyed";
}();
var Xi = (
  // We gotta write it like this because after downleveling the pure comment may end up in the wrong location
  !!globalThis.document?.contentType && /* @__PURE__ */ globalThis.document.contentType.includes("xml")
);
var Jl = 1;
var Qo = 3;
var Nr = 8;

// ../../node_modules/svelte/src/internal/shared/errors.js
function Ji(e) {
  if (U) {
    const t = new Error(`lifecycle_outside_component
\`${e}(...)\` can only be used during component initialisation
https://svelte.dev/e/lifecycle_outside_component`);
    t.name = "Svelte error";
    throw t;
  } else {
    throw new Error(`https://svelte.dev/e/lifecycle_outside_component`);
  }
}

// ../../node_modules/svelte/src/internal/client/errors.js
function W0() {
  if (U) {
    const e = new Error(`async_derived_orphan
Cannot create a \`$derived(...)\` with an \`await\` expression outside of an effect tree
https://svelte.dev/e/async_derived_orphan`);
    e.name = "Svelte error";
    throw e;
  } else {
    throw new Error(`https://svelte.dev/e/async_derived_orphan`);
  }
}
function Z0() {
  if (U) {
    const e = new Error(`derived_references_self
A derived value cannot reference itself recursively
https://svelte.dev/e/derived_references_self`);
    e.name = "Svelte error";
    throw e;
  } else {
    throw new Error(`https://svelte.dev/e/derived_references_self`);
  }
}
function qu(e, t, r) {
  if (U) {
    const n = new Error(`each_key_duplicate
${r ? `Keyed each block has duplicate key \`${r}\` at indexes ${e} and ${t}` : `Keyed each block has duplicate key at indexes ${e} and ${t}`}
https://svelte.dev/e/each_key_duplicate`);
    n.name = "Svelte error";
    throw n;
  } else {
    throw new Error(`https://svelte.dev/e/each_key_duplicate`);
  }
}
function j0(e, t, r) {
  if (U) {
    const n = new Error(`each_key_volatile
Keyed each block has key that is not idempotent \u2014 the key for item at index ${e} was \`${t}\` but is now \`${r}\`. Keys must be the same each time for a given item
https://svelte.dev/e/each_key_volatile`);
    n.name = "Svelte error";
    throw n;
  } else {
    throw new Error(`https://svelte.dev/e/each_key_volatile`);
  }
}
function X0(e) {
  if (U) {
    const t = new Error(`effect_in_teardown
\`${e}\` cannot be used inside an effect cleanup function
https://svelte.dev/e/effect_in_teardown`);
    t.name = "Svelte error";
    throw t;
  } else {
    throw new Error(`https://svelte.dev/e/effect_in_teardown`);
  }
}
function J0() {
  if (U) {
    const e = new Error(`effect_in_unowned_derived
Effect cannot be created inside a \`$derived\` value that was not itself created inside an effect
https://svelte.dev/e/effect_in_unowned_derived`);
    e.name = "Svelte error";
    throw e;
  } else {
    throw new Error(`https://svelte.dev/e/effect_in_unowned_derived`);
  }
}
function K0(e) {
  if (U) {
    const t = new Error(`effect_orphan
\`${e}\` can only be used inside an effect (e.g. during component initialisation)
https://svelte.dev/e/effect_orphan`);
    t.name = "Svelte error";
    throw t;
  } else {
    throw new Error(`https://svelte.dev/e/effect_orphan`);
  }
}
function Q0() {
  if (U) {
    const e = new Error(`effect_update_depth_exceeded
Maximum update depth exceeded. This typically indicates that an effect reads and writes the same piece of state
https://svelte.dev/e/effect_update_depth_exceeded`);
    e.name = "Svelte error";
    throw e;
  } else {
    throw new Error(`https://svelte.dev/e/effect_update_depth_exceeded`);
  }
}
function e_() {
  if (U) {
    const e = new Error(`hydration_failed
Failed to hydrate the application
https://svelte.dev/e/hydration_failed`);
    e.name = "Svelte error";
    throw e;
  } else {
    throw new Error(`https://svelte.dev/e/hydration_failed`);
  }
}
function t_() {
  if (U) {
    const e = new Error(`invalid_snippet
Could not \`{@render}\` snippet due to the expression being \`null\` or \`undefined\`. Consider using optional chaining \`{@render snippet?.()}\`
https://svelte.dev/e/invalid_snippet`);
    e.name = "Svelte error";
    throw e;
  } else {
    throw new Error(`https://svelte.dev/e/invalid_snippet`);
  }
}
function r_(e) {
  if (U) {
    const t = new Error(`props_invalid_value
Cannot do \`bind:${e}={undefined}\` when \`${e}\` has a fallback value
https://svelte.dev/e/props_invalid_value`);
    t.name = "Svelte error";
    throw t;
  } else {
    throw new Error(`https://svelte.dev/e/props_invalid_value`);
  }
}
function n_(e) {
  if (U) {
    const t = new Error(`rune_outside_svelte
The \`${e}\` rune is only available inside \`.svelte\` and \`.svelte.js/ts\` files
https://svelte.dev/e/rune_outside_svelte`);
    t.name = "Svelte error";
    throw t;
  } else {
    throw new Error(`https://svelte.dev/e/rune_outside_svelte`);
  }
}
function o_() {
  if (U) {
    const e = new Error(`set_context_after_init
\`setContext\` must be called when a component first initializes, not in a subsequent effect or after an \`await\` expression
https://svelte.dev/e/set_context_after_init`);
    e.name = "Svelte error";
    throw e;
  } else {
    throw new Error(`https://svelte.dev/e/set_context_after_init`);
  }
}
function i_() {
  if (U) {
    const e = new Error(`state_descriptors_fixed
Property descriptors defined on \`$state\` objects must contain \`value\` and always be \`enumerable\`, \`configurable\` and \`writable\`.
https://svelte.dev/e/state_descriptors_fixed`);
    e.name = "Svelte error";
    throw e;
  } else {
    throw new Error(`https://svelte.dev/e/state_descriptors_fixed`);
  }
}
function a_() {
  if (U) {
    const e = new Error(`state_prototype_fixed
Cannot set prototype of \`$state\` object
https://svelte.dev/e/state_prototype_fixed`);
    e.name = "Svelte error";
    throw e;
  } else {
    throw new Error(`https://svelte.dev/e/state_prototype_fixed`);
  }
}
function s_() {
  if (U) {
    const e = new Error(`state_unsafe_mutation
Updating state inside \`$derived(...)\`, \`$inspect(...)\` or a template expression is forbidden. If the value should not be reactive, declare it without \`$state\`
https://svelte.dev/e/state_unsafe_mutation`);
    e.name = "Svelte error";
    throw e;
  } else {
    throw new Error(`https://svelte.dev/e/state_unsafe_mutation`);
  }
}
function l_() {
  if (U) {
    const e = new Error(`svelte_boundary_reset_onerror
A \`<svelte:boundary>\` \`reset\` function cannot be called while an error is still being handled
https://svelte.dev/e/svelte_boundary_reset_onerror`);
    e.name = "Svelte error";
    throw e;
  } else {
    throw new Error(`https://svelte.dev/e/svelte_boundary_reset_onerror`);
  }
}

// ../../node_modules/svelte/src/internal/client/warnings.js
var po = "font-weight: bold";
var mo = "font-weight: normal";
function c_(e, t) {
  if (U) {
    console.warn(`%c[svelte] await_waterfall
%cAn async derived, \`${e}\` (${t}) was not read immediately after it resolved. This often indicates an unnecessary waterfall, which can slow down your app
https://svelte.dev/e/await_waterfall`, po, mo);
  } else {
    console.warn(`https://svelte.dev/e/await_waterfall`);
  }
}
function f_(e, t, r) {
  if (U) {
    console.warn(`%c[svelte] hydration_attribute_changed
%cThe \`${e}\` attribute on \`${t}\` changed its value between server and client renders. The client value, \`${r}\`, will be ignored in favour of the server value
https://svelte.dev/e/hydration_attribute_changed`, po, mo);
  } else {
    console.warn(`https://svelte.dev/e/hydration_attribute_changed`);
  }
}
function ei(e) {
  if (U) {
    console.warn(
      `%c[svelte] hydration_mismatch
%c${e ? `Hydration failed because the initial UI does not match what was rendered on the server. The error occurred near ${e}` : "Hydration failed because the initial UI does not match what was rendered on the server"}
https://svelte.dev/e/hydration_mismatch`,
      po,
      mo
    );
  } else {
    console.warn(`https://svelte.dev/e/hydration_mismatch`);
  }
}
function u_() {
  if (U) {
    console.warn(`%c[svelte] lifecycle_double_unmount
%cTried to unmount a component that was not mounted
https://svelte.dev/e/lifecycle_double_unmount`, po, mo);
  } else {
    console.warn(`https://svelte.dev/e/lifecycle_double_unmount`);
  }
}
function p_() {
  if (U) {
    console.warn(`%c[svelte] select_multiple_invalid_value
%cThe \`value\` property of a \`<select multiple>\` element should be an array, but it received a non-array value. The selection will be kept as is.
https://svelte.dev/e/select_multiple_invalid_value`, po, mo);
  } else {
    console.warn(`https://svelte.dev/e/select_multiple_invalid_value`);
  }
}
function Kl(e) {
  if (U) {
    console.warn(`%c[svelte] state_proxy_equality_mismatch
%cReactive \`$state(...)\` proxies and the values they proxy have different identities. Because of this, comparisons with \`${e}\` will produce unexpected results
https://svelte.dev/e/state_proxy_equality_mismatch`, po, mo);
  } else {
    console.warn(`https://svelte.dev/e/state_proxy_equality_mismatch`);
  }
}
function d_() {
  if (U) {
    console.warn(`%c[svelte] state_proxy_unmount
%cTried to unmount a state proxy, rather than a component
https://svelte.dev/e/state_proxy_unmount`, po, mo);
  } else {
    console.warn(`https://svelte.dev/e/state_proxy_unmount`);
  }
}
function m_() {
  if (U) {
    console.warn(`%c[svelte] svelte_boundary_reset_noop
%cA \`<svelte:boundary>\` \`reset\` function only resets the boundary the first time it is called
https://svelte.dev/e/svelte_boundary_reset_noop`, po, mo);
  } else {
    console.warn(`https://svelte.dev/e/svelte_boundary_reset_noop`);
  }
}

// ../../node_modules/svelte/src/internal/client/dom/hydration.js
var ee = false;
function Ue(e) {
  ee = e;
}
var de;
function Te(e) {
  if (e === null) {
    ei();
    throw Bn;
  }
  return de = e;
}
function lt() {
  return Te(vt(de));
}
function en(e) {
  if (!ee) return;
  if (vt(de) !== null) {
    ei();
    throw Bn;
  }
  de = e;
}
function zu(e = 1) {
  if (ee) {
    var t = e;
    var r = de;
    while (t--) {
      r = /** @type {TemplateNode} */
      vt(r);
    }
    de = r;
  }
}
function vn(e = true) {
  var t = 0;
  var r = de;
  while (true) {
    if (r.nodeType === Nr) {
      var n = (
        /** @type {Comment} */
        r.data
      );
      if (n === Zo) {
        if (t === 0) return r;
        t -= 1;
      } else if (n === co || n === jr || // "[1", "[2", etc. for if blocks
      n[0] === "[" && !isNaN(Number(n.slice(1)))) {
        t += 1;
      }
    }
    var o = (
      /** @type {TemplateNode} */
      vt(r)
    );
    if (e) r.remove();
    r = o;
  }
}
function ts(e) {
  if (!e || e.nodeType !== Nr) {
    ei();
    throw Bn;
  }
  return (
    /** @type {Comment} */
    e.data
  );
}

// ../../node_modules/svelte/src/internal/client/reactivity/equality.js
function Ql(e) {
  return e === this.v;
}
function ec(e, t) {
  return e != e ? t == t : e !== t || e !== null && typeof e === "object" || typeof e === "function";
}
function tc(e) {
  return !ec(e, this.v);
}

// ../../node_modules/svelte/src/internal/flags/index.js
var jt = false;
var Tn = false;
var tn = false;
function a8() {
  Tn = true;
}

// ../../node_modules/svelte/src/internal/client/dev/tracing.js
var rs = null;
function Ge(e, t) {
  e.label = t;
  rc(e.v, t);
  return e;
}
function rc(e, t) {
  e?.[Xl]?.(t);
  return e;
}
function Zu(e) {
  if (typeof e === "symbol") return `Symbol(${e.description})`;
  if (typeof e === "function") return "<function>";
  if (typeof e === "object" && e) return "<object>";
  return String(e);
}

// ../../node_modules/svelte/src/internal/shared/dev.js
function Sn(e) {
  const t = new Error();
  const r = gD();
  if (r.length === 0) {
    return null;
  }
  r.unshift("\n");
  xt(t, "stack", {
    value: r.join("\n")
  });
  xt(t, "name", {
    value: e
  });
  return (
    /** @type {Error & { stack: string }} */
    t
  );
}
function gD() {
  const e = Error.stackTraceLimit;
  Error.stackTraceLimit = Infinity;
  const t = new Error().stack;
  Error.stackTraceLimit = e;
  if (!t) return [];
  const r = t.split("\n");
  const n = [];
  for (let o = 0; o < r.length; o++) {
    const i = r[o];
    const a = i.replaceAll("\\", "/");
    if (i.trim() === "Error") {
      continue;
    }
    if (i.includes("validate_each_keys")) {
      return [];
    }
    if (a.includes("svelte/src/internal") || a.includes("node_modules/.vite")) {
      continue;
    }
    n.push(i);
  }
  return n;
}

// ../../node_modules/svelte/src/internal/client/context.js
var ge = null;
function Vn(e) {
  ge = e;
}
var Yr = null;
function Ki(e) {
  Yr = e;
}
var rn = null;
function nc(e) {
  rn = e;
}
function _D(e) {
  const t = g_("getContext");
  const r = (
    /** @type {T} */
    t.get(e)
  );
  return r;
}
function yD(e, t) {
  const r = g_("setContext");
  if (jt) {
    var n = (
      /** @type {Effect} */
      ie.f
    );
    var o = !pe && (n & bt) !== 0 && // pop() runs synchronously, so this indicates we're setting context after an await
    !/** @type {ComponentContext} */
    ge.i;
    if (!o) {
      o_();
    }
  }
  r.set(e, t);
  return t;
}
function ns(e, t = false, r) {
  ge = {
    p: ge,
    i: false,
    c: null,
    e: null,
    s: e,
    x: null,
    l: Tn && !t ? { s: null, u: null, $: [] } : null
  };
  if (U) {
    ge.function = r;
    rn = r;
  }
}
function os(e) {
  var t = (
    /** @type {ComponentContext} */
    ge
  );
  var r = t.e;
  if (r !== null) {
    t.e = null;
    for (var n of r) {
      ju(n);
    }
  }
  if (e !== void 0) {
    t.x = e;
  }
  t.i = true;
  ge = t.p;
  if (U) {
    rn = ge?.function ?? null;
  }
  return e ?? /** @type {T} */
  {};
}
function kr() {
  return !Tn || ge !== null && ge.l === null;
}
function g_(e) {
  if (ge === null) {
    Ji(e);
  }
  return ge.c ??= new Map(xD(ge) || void 0);
}
function xD(e) {
  let t = e.p;
  while (t !== null) {
    const r = t.c;
    if (r !== null) {
      return r;
    }
    t = t.p;
  }
  return null;
}

// ../../node_modules/svelte/src/internal/client/dom/task.js
var ti = [];
function __() {
  var e = ti;
  ti = [];
  Wi(e);
}
function Xe(e) {
  if (ti.length === 0 && !ri) {
    var t = ti;
    queueMicrotask(() => {
      if (t === ti) __();
    });
  }
  ti.push(e);
}
function y_() {
  while (ti.length > 0) {
    __();
  }
}

// ../../node_modules/svelte/src/internal/client/error-handling.js
var Xu = /* @__PURE__ */ new WeakMap();
function oc(e) {
  var t = ie;
  if (t === null) {
    pe.f |= Ar;
    return e;
  }
  if (U && e instanceof Error && !Xu.has(e)) {
    Xu.set(e, bD(e, t));
  }
  if ((t.f & Nt) === 0 && (t.f & fo) === 0) {
    if (U && !t.parent && e instanceof Error) {
      x_(e);
    }
    throw e;
  }
  Cr(e, t);
}
function Cr(e, t) {
  while (t !== null) {
    if ((t.f & Zi) !== 0) {
      if ((t.f & Nt) === 0) {
        throw e;
      }
      try {
        t.b.error(e);
        return;
      } catch (r) {
        e = r;
      }
    }
    t = t.parent;
  }
  if (U && e instanceof Error) {
    x_(e);
  }
  throw e;
}
function bD(e, t) {
  const r = It(e, "message");
  if (r && !r.configurable) return;
  var n = is ? "  " : "	";
  var o = `
${n}in ${t.fn?.name || "<unknown>"}`;
  var i = t.ctx;
  while (i !== null) {
    o += `
${n}in ${i.function?.[ur].split("/").pop()}`;
    i = i.p;
  }
  return {
    message: e.message + `
${o}
`,
    stack: e.stack?.split("\n").filter((a) => !a.includes("svelte/src/internal")).join("\n")
  };
}
function x_(e) {
  const t = Xu.get(e);
  if (t) {
    xt(e, "message", {
      value: t.message
    });
    xt(e, "stack", {
      value: t.stack
    });
  }
}

// ../../node_modules/svelte/src/internal/client/reactivity/status.js
var vD = ~(ke | at | Pe);
function De(e, t) {
  e.f = e.f & vD | t;
}
function Qi(e) {
  if ((e.f & Ft) !== 0 || e.deps === null) {
    De(e, Pe);
  } else {
    De(e, at);
  }
}

// ../../node_modules/svelte/src/internal/client/reactivity/utils.js
function b_(e) {
  if (e === null) return;
  for (const t of e) {
    if ((t.f & Be) === 0 || (t.f & Er) === 0) {
      continue;
    }
    t.f ^= Er;
    b_(
      /** @type {Derived} */
      t.deps
    );
  }
}
function ic(e, t, r) {
  if ((e.f & ke) !== 0) {
    t.add(e);
  } else if ((e.f & at) !== 0) {
    r.add(e);
  }
  b_(e.deps);
  De(e, Pe);
}

// ../../node_modules/svelte/src/internal/client/reactivity/batch.js
var ea = /* @__PURE__ */ new Set();
var be = null;
var ac = null;
var kt = null;
var rr = [];
var sc = null;
var Ju = false;
var ri = false;
var Ct = class e {
  /**
   * The current values of any sources that are updated in this batch
   * They keys of this map are identical to `this.#previous`
   * @type {Map<Source, any>}
   */
  current = /* @__PURE__ */ new Map();
  /**
   * The values of any sources that are updated in this batch _before_ those updates took place.
   * They keys of this map are identical to `this.#current`
   * @type {Map<Source, any>}
   */
  previous = /* @__PURE__ */ new Map();
  /**
   * When the batch is committed (and the DOM is updated), we need to remove old branches
   * and append new ones by calling the functions added inside (if/each/key/etc) blocks
   * @type {Set<() => void>}
   */
  #e = /* @__PURE__ */ new Set();
  /**
   * If a fork is discarded, we need to destroy any effects that are no longer needed
   * @type {Set<(batch: Batch) => void>}
   */
  #t = /* @__PURE__ */ new Set();
  /**
   * The number of async effects that are currently in flight
   */
  #r = 0;
  /**
   * The number of async effects that are currently in flight, _not_ inside a pending boundary
   */
  #n = 0;
  /**
   * A deferred that resolves when the batch is committed, used with `settled()`
   * TODO replace with Promise.withResolvers once supported widely enough
   * @type {{ promise: Promise<void>, resolve: (value?: any) => void, reject: (reason: unknown) => void } | null}
   */
  #o = null;
  /**
   * Deferred effects (which run after async work has completed) that are DIRTY
   * @type {Set<Effect>}
   */
  #a = /* @__PURE__ */ new Set();
  /**
   * Deferred effects that are MAYBE_DIRTY
   * @type {Set<Effect>}
   */
  #i = /* @__PURE__ */ new Set();
  /**
   * A map of branches that still exist, but will be destroyed when this batch
   * is committed — we skip over these during `process`.
   * The value contains child effects that were dirty/maybe_dirty before being reset,
   * so they can be rescheduled if the branch survives.
   * @type {Map<Effect, { d: Effect[], m: Effect[] }>}
   */
  #s = /* @__PURE__ */ new Map();
  is_fork = false;
  #l = false;
  #f() {
    return this.is_fork || this.#n > 0;
  }
  /**
   * Add an effect to the #skipped_branches map and reset its children
   * @param {Effect} effect
   */
  skip_effect(t) {
    if (!this.#s.has(t)) {
      this.#s.set(t, { d: [], m: [] });
    }
  }
  /**
   * Remove an effect from the #skipped_branches map and reschedule
   * any tracked dirty/maybe_dirty child effects
   * @param {Effect} effect
   */
  unskip_effect(t) {
    var r = this.#s.get(t);
    if (r) {
      this.#s.delete(t);
      for (var n of r.d) {
        De(n, ke);
        Xt(n);
      }
      for (n of r.m) {
        De(n, at);
        Xt(n);
      }
    }
  }
  /**
   *
   * @param {Effect[]} root_effects
   */
  process(t) {
    rr = [];
    this.apply();
    var r = [];
    var n = [];
    for (const o of t) {
      this.#c(o, r, n);
    }
    if (this.#f()) {
      this.#p(n);
      this.#p(r);
      for (const [o, i] of this.#s) {
        M_(o, i);
      }
    } else {
      for (const o of this.#e) o();
      this.#e.clear();
      if (this.#r === 0) {
        this.#d();
      }
      ac = this;
      be = null;
      v_(n);
      v_(r);
      ac = null;
      this.#o?.resolve();
    }
    kt = null;
  }
  /**
   * Traverse the effect tree, executing effects or stashing
   * them for later execution as appropriate
   * @param {Effect} root
   * @param {Effect[]} effects
   * @param {Effect[]} render_effects
   */
  #c(t, r, n) {
    t.f ^= Pe;
    var o = t.first;
    while (o !== null) {
      var i = o.f;
      var a = (i & (bt | wr)) !== 0;
      var s = a && (i & Pe) !== 0;
      var l = s || (i & Pt) !== 0 || this.#s.has(o);
      if (!l && o.fn !== null) {
        if (a) {
          o.f ^= Pe;
        } else if ((i & fo) !== 0) {
          r.push(o);
        } else if (jt && (i & (uo | Jo)) !== 0) {
          n.push(o);
        } else if (go(o)) {
          if ((i & tr) !== 0) this.#i.add(o);
          Mn(o);
        }
        var c = o.first;
        if (c !== null) {
          o = c;
          continue;
        }
      }
      while (o !== null) {
        var f = o.next;
        if (f !== null) {
          o = f;
          break;
        }
        o = o.parent;
      }
    }
  }
  /**
   * @param {Effect[]} effects
   */
  #p(t) {
    for (var r = 0; r < t.length; r += 1) {
      ic(t[r], this.#a, this.#i);
    }
  }
  /**
   * Associate a change to a given source with the current
   * batch, noting its previous and current values
   * @param {Source} source
   * @param {any} value
   */
  capture(t, r) {
    if (r !== Fe && !this.previous.has(t)) {
      this.previous.set(t, r);
    }
    if ((t.f & Ar) === 0) {
      this.current.set(t, t.v);
      kt?.set(t, t.v);
    }
  }
  activate() {
    be = this;
    this.apply();
  }
  deactivate() {
    if (be !== this) return;
    be = null;
    kt = null;
  }
  flush() {
    this.activate();
    if (rr.length > 0) {
      Ku();
      if (be !== null && be !== this) {
        return;
      }
    } else if (this.#r === 0) {
      this.process([]);
    }
    this.deactivate();
  }
  discard() {
    for (const t of this.#t) t(this);
    this.#t.clear();
  }
  #d() {
    if (ea.size > 1) {
      this.previous.clear();
      var t = kt;
      var r = true;
      for (const o of ea) {
        if (o === this) {
          r = false;
          continue;
        }
        const i = [];
        for (const [s, l] of this.current) {
          if (o.current.has(s)) {
            if (r && l !== o.current.get(s)) {
              o.current.set(s, l);
            } else {
              continue;
            }
          }
          i.push(s);
        }
        if (i.length === 0) {
          continue;
        }
        const a = [...o.current.keys()].filter((s) => !this.current.has(s));
        if (a.length > 0) {
          var n = rr;
          rr = [];
          const s = /* @__PURE__ */ new Set();
          const l = /* @__PURE__ */ new Map();
          for (const c of i) {
            T_(c, a, s, l);
          }
          if (rr.length > 0) {
            be = o;
            o.apply();
            for (const c of rr) {
              o.#c(c, [], []);
            }
            o.deactivate();
          }
          rr = n;
        }
      }
      be = null;
      kt = t;
    }
    ea.delete(this);
  }
  /**
   *
   * @param {boolean} blocking
   */
  increment(t) {
    this.#r += 1;
    if (t) this.#n += 1;
  }
  /**
   *
   * @param {boolean} blocking
   */
  decrement(t) {
    this.#r -= 1;
    if (t) this.#n -= 1;
    if (this.#l) return;
    this.#l = true;
    Xe(() => {
      this.#l = false;
      if (!this.#f()) {
        this.revive();
      } else if (rr.length > 0) {
        this.flush();
      }
    });
  }
  revive() {
    for (const t of this.#a) {
      this.#i.delete(t);
      De(t, ke);
      Xt(t);
    }
    for (const t of this.#i) {
      De(t, at);
      Xt(t);
    }
    this.flush();
  }
  /** @param {() => void} fn */
  oncommit(t) {
    this.#e.add(t);
  }
  /** @param {(batch: Batch) => void} fn */
  ondiscard(t) {
    this.#t.add(t);
  }
  settled() {
    return (this.#o ??= Zl()).promise;
  }
  static ensure() {
    if (be === null) {
      const t = be = new e();
      ea.add(be);
      if (!ri) {
        Xe(() => {
          if (be !== t) {
            return;
          }
          t.flush();
        });
      }
    }
    return be;
  }
  apply() {
    if (!jt || !this.is_fork && ea.size === 1) return;
    kt = new Map(this.current);
    for (const t of ea) {
      if (t === this) continue;
      for (const [r, n] of t.previous) {
        if (!kt.has(r)) {
          kt.set(r, n);
        }
      }
    }
  }
};
function ta(e) {
  var t = ri;
  ri = true;
  try {
    var r;
    if (e) {
      if (be !== null) {
        Ku();
      }
      r = e();
    }
    while (true) {
      y_();
      if (rr.length === 0) {
        be?.flush();
        if (rr.length === 0) {
          sc = null;
          return (
            /** @type {T} */
            r
          );
        }
      }
      Ku();
    }
  } finally {
    ri = t;
  }
}
function Ku() {
  Ju = true;
  var e = U ? /* @__PURE__ */ new Set() : null;
  try {
    var t = 0;
    while (rr.length > 0) {
      var r = Ct.ensure();
      if (t++ > 1e3) {
        if (U) {
          var n = /* @__PURE__ */ new Map();
          for (const i of r.current.keys()) {
            for (const [a, s] of i.updated ?? []) {
              var o = n.get(a);
              if (!o) {
                o = { error: s.error, count: 0 };
                n.set(a, o);
              }
              o.count += s.count;
            }
          }
          for (const i of n.values()) {
            if (i.error) {
              console.error(i.error);
            }
          }
        }
        SD();
      }
      r.process(rr);
      Dn.clear();
      if (U) {
        for (const i of r.current.keys()) {
          e.add(i);
        }
      }
    }
  } finally {
    rr = [];
    Ju = false;
    sc = null;
    if (U) {
      for (
        const i of
        /** @type {Set<Source>} */
        e
      ) {
        i.updated = null;
      }
    }
  }
}
function SD() {
  try {
    Q0();
  } catch (e) {
    if (U) {
      xt(e, "stack", { value: "" });
    }
    Cr(e, sc);
  }
}
var Ir = null;
function v_(e) {
  var t = e.length;
  if (t === 0) return;
  var r = 0;
  while (r < t) {
    var n = e[r++];
    if ((n.f & (Zt | Pt)) === 0 && go(n)) {
      Ir = /* @__PURE__ */ new Set();
      Mn(n);
      if (n.deps === null && n.first === null && n.nodes === null && n.teardown === null && n.ac === null) {
        Qu(n);
      }
      if (Ir?.size > 0) {
        Dn.clear();
        for (const o of Ir) {
          if ((o.f & (Zt | Pt)) !== 0) continue;
          const i = [o];
          let a = o.parent;
          while (a !== null) {
            if (Ir.has(a)) {
              Ir.delete(a);
              i.push(a);
            }
            a = a.parent;
          }
          for (let s = i.length - 1; s >= 0; s--) {
            const l = i[s];
            if ((l.f & (Zt | Pt)) !== 0) continue;
            Mn(l);
          }
        }
        Ir.clear();
      }
    }
  }
  Ir = null;
}
function T_(e, t, r, n) {
  if (r.has(e)) return;
  r.add(e);
  if (e.reactions !== null) {
    for (const o of e.reactions) {
      const i = o.f;
      if ((i & Be) !== 0) {
        T_(
          /** @type {Derived} */
          o,
          t,
          r,
          n
        );
      } else if ((i & (Ln | tr)) !== 0 && (i & ke) === 0 && S_(o, t, n)) {
        De(o, ke);
        Xt(
          /** @type {Effect} */
          o
        );
      }
    }
  }
}
function S_(e, t, r) {
  const n = r.get(e);
  if (n !== void 0) return n;
  if (e.deps !== null) {
    for (const o of e.deps) {
      if (Jr.call(t, o)) {
        return true;
      }
      if ((o.f & Be) !== 0 && S_(
        /** @type {Derived} */
        o,
        t,
        r
      )) {
        r.set(
          /** @type {Derived} */
          o,
          true
        );
        return true;
      }
    }
  }
  r.set(e, false);
  return false;
}
function Xt(e) {
  var t = sc = e;
  var r = t.b;
  if (r?.is_pending && (e.f & (fo | uo | Jo)) !== 0 && (e.f & Nt) === 0) {
    r.defer_effect(e);
    return;
  }
  while (t.parent !== null) {
    t = t.parent;
    var n = t.f;
    if (Ju && t === ie && (n & tr) !== 0 && (n & es) === 0 && (n & Nt) !== 0) {
      return;
    }
    if ((n & (wr | bt)) !== 0) {
      if ((n & Pe) === 0) {
        return;
      }
      t.f ^= Pe;
    }
  }
  rr.push(t);
}
function M_(e, t) {
  if ((e.f & bt) !== 0 && (e.f & Pe) !== 0) {
    return;
  }
  if ((e.f & ke) !== 0) {
    t.d.push(e);
  } else if ((e.f & at) !== 0) {
    t.m.push(e);
  }
  De(e, Pe);
  var r = e.first;
  while (r !== null) {
    M_(r, t);
    r = r.next;
  }
}

// ../../node_modules/svelte/src/reactivity/create-subscriber.js
function fc(e) {
  let t = 0;
  let r = ct(0);
  let n;
  if (U) {
    Ge(r, "createSubscriber version");
  }
  return () => {
    if (ho()) {
      W(r);
      Bt(() => {
        if (t === 0) {
          n = Ce(() => e(() => Tt(r)));
        }
        t += 1;
        return () => {
          Xe(() => {
            t -= 1;
            if (t === 0) {
              n?.();
              n = void 0;
              Tt(r);
            }
          });
        };
      });
    }
  };
}

// ../../node_modules/svelte/src/internal/client/dom/blocks/boundary.js
var DD = Rt | Kr;
function tp(e, t, r, n) {
  new ss(e, t, r, n);
}
var ss = class {
  /** @type {Boundary | null} */
  parent;
  is_pending = false;
  /**
   * API-level transformError transform function. Transforms errors before they reach the `failed` snippet.
   * Inherited from parent boundary, or defaults to identity.
   * @type {(error: unknown) => unknown}
   */
  transform_error;
  /** @type {TemplateNode} */
  #e;
  /** @type {TemplateNode | null} */
  #t = ee ? de : null;
  /** @type {BoundaryProps} */
  #r;
  /** @type {((anchor: Node) => void)} */
  #n;
  /** @type {Effect} */
  #o;
  /** @type {Effect | null} */
  #a = null;
  /** @type {Effect | null} */
  #i = null;
  /** @type {Effect | null} */
  #s = null;
  /** @type {DocumentFragment | null} */
  #l = null;
  #f = 0;
  #c = 0;
  #p = false;
  /** @type {Set<Effect>} */
  #d = /* @__PURE__ */ new Set();
  /** @type {Set<Effect>} */
  #m = /* @__PURE__ */ new Set();
  /**
   * A source containing the number of pending async deriveds/expressions.
   * Only created if `$effect.pending()` is used inside the boundary,
   * otherwise updating the source results in needless `Batch.ensure()`
   * calls followed by no-op flushes
   * @type {Source<number> | null}
   */
  #u = null;
  #x = fc(() => {
    this.#u = ct(this.#f);
    if (U) {
      Ge(this.#u, "$effect.pending()");
    }
    return () => {
      this.#u = null;
    };
  });
  /**
   * @param {TemplateNode} node
   * @param {BoundaryProps} props
   * @param {((anchor: Node) => void)} children
   * @param {((error: unknown) => unknown) | undefined} [transform_error]
   */
  constructor(t, r, n, o) {
    this.#e = t;
    this.#r = r;
    this.#n = (i) => {
      var a = (
        /** @type {Effect} */
        ie
      );
      a.b = this;
      a.f |= Zi;
      n(i);
    };
    this.parent = /** @type {Effect} */
    ie.b;
    this.transform_error = o ?? this.parent?.transform_error ?? ((i) => i);
    this.#o = Lt(() => {
      if (ee) {
        const i = (
          /** @type {Comment} */
          this.#t
        );
        lt();
        const a = i.data === jr;
        const s = i.data.startsWith($u);
        if (s) {
          const l = JSON.parse(i.data.slice($u.length));
          this.#v(l);
        } else if (a) {
          this.#T();
        } else {
          this.#b();
        }
      } else {
        this.#_();
      }
    }, DD);
    if (ee) {
      this.#e = de;
    }
  }
  #b() {
    try {
      this.#a = ft(() => this.#n(this.#e));
    } catch (t) {
      this.error(t);
    }
  }
  /**
   * @param {unknown} error The deserialized error from the server's hydration comment
   */
  #v(t) {
    const r = this.#r.failed;
    if (!r) return;
    this.#s = ft(() => {
      r(
        this.#e,
        () => t,
        () => () => {
        }
      );
    });
  }
  #T() {
    const t = this.#r.pending;
    if (!t) return;
    this.is_pending = true;
    this.#i = ft(() => t(this.#e));
    Xe(() => {
      var r = this.#l = document.createDocumentFragment();
      var n = Je();
      r.append(n);
      this.#a = this.#g(() => {
        Ct.ensure();
        return ft(() => this.#n(n));
      });
      if (this.#c === 0) {
        this.#e.before(r);
        this.#l = null;
        wn(
          /** @type {Effect} */
          this.#i,
          () => {
            this.#i = null;
          }
        );
        this.#h();
      }
    });
  }
  #_() {
    try {
      this.is_pending = this.has_pending_snippet();
      this.#c = 0;
      this.#f = 0;
      this.#a = ft(() => {
        this.#n(this.#e);
      });
      if (this.#c > 0) {
        var t = this.#l = document.createDocumentFragment();
        uc(this.#a, t);
        const r = (
          /** @type {(anchor: Node) => void} */
          this.#r.pending
        );
        this.#i = ft(() => r(this.#e));
      } else {
        this.#h();
      }
    } catch (r) {
      this.error(r);
    }
  }
  #h() {
    this.is_pending = false;
    for (const t of this.#d) {
      De(t, ke);
      Xt(t);
    }
    for (const t of this.#m) {
      De(t, at);
      Xt(t);
    }
    this.#d.clear();
    this.#m.clear();
  }
  /**
   * Defer an effect inside a pending boundary until the boundary resolves
   * @param {Effect} effect
   */
  defer_effect(t) {
    ic(t, this.#d, this.#m);
  }
  /**
   * Returns `false` if the effect exists inside a boundary whose pending snippet is shown
   * @returns {boolean}
   */
  is_rendered() {
    return !this.is_pending && (!this.parent || this.parent.is_rendered());
  }
  has_pending_snippet() {
    return !!this.#r.pending;
  }
  /**
   * @template T
   * @param {() => T} fn
   */
  #g(t) {
    var r = ie;
    var n = pe;
    var o = ge;
    pt(this.#o);
    ut(this.#o);
    Vn(this.#o.ctx);
    try {
      return t();
    } catch (i) {
      oc(i);
      return null;
    } finally {
      pt(r);
      ut(n);
      Vn(o);
    }
  }
  /**
   * Updates the pending count associated with the currently visible pending snippet,
   * if any, such that we can replace the snippet with content once work is done
   * @param {1 | -1} d
   */
  #y(t) {
    if (!this.has_pending_snippet()) {
      if (this.parent) {
        this.parent.#y(t);
      }
      return;
    }
    this.#c += t;
    if (this.#c === 0) {
      this.#h();
      if (this.#i) {
        wn(this.#i, () => {
          this.#i = null;
        });
      }
      if (this.#l) {
        this.#e.before(this.#l);
        this.#l = null;
      }
    }
  }
  /**
   * Update the source that powers `$effect.pending()` inside this boundary,
   * and controls when the current `pending` snippet (if any) is removed.
   * Do not call from inside the class
   * @param {1 | -1} d
   */
  update_pending_count(t) {
    this.#y(t);
    this.#f += t;
    if (!this.#u || this.#p) return;
    this.#p = true;
    Xe(() => {
      this.#p = false;
      if (this.#u) {
        nn(this.#u, this.#f);
      }
    });
  }
  get_effect_pending() {
    this.#x();
    return W(
      /** @type {Source<number>} */
      this.#u
    );
  }
  /** @param {unknown} error */
  error(t) {
    var r = this.#r.onerror;
    let n = this.#r.failed;
    if (!r && !n) {
      throw t;
    }
    if (this.#a) {
      Le(this.#a);
      this.#a = null;
    }
    if (this.#i) {
      Le(this.#i);
      this.#i = null;
    }
    if (this.#s) {
      Le(this.#s);
      this.#s = null;
    }
    if (ee) {
      Te(
        /** @type {TemplateNode} */
        this.#t
      );
      zu();
      Te(vn());
    }
    var o = false;
    var i = false;
    const a = () => {
      if (o) {
        m_();
        return;
      }
      o = true;
      if (i) {
        l_();
      }
      if (this.#s !== null) {
        wn(this.#s, () => {
          this.#s = null;
        });
      }
      this.#g(() => {
        Ct.ensure();
        this.#_();
      });
    };
    const s = (l) => {
      try {
        i = true;
        r?.(l, a);
        i = false;
      } catch (c) {
        Cr(c, this.#o && this.#o.parent);
      }
      if (n) {
        this.#s = this.#g(() => {
          Ct.ensure();
          try {
            return ft(() => {
              var c = (
                /** @type {Effect} */
                ie
              );
              c.b = this;
              c.f |= Zi;
              n(
                this.#e,
                () => l,
                () => a
              );
            });
          } catch (c) {
            Cr(
              c,
              /** @type {Effect} */
              this.#o.parent
            );
            return null;
          }
        });
      }
    };
    Xe(() => {
      var l;
      try {
        l = this.transform_error(t);
      } catch (c) {
        Cr(c, this.#o && this.#o.parent);
        return;
      }
      if (l !== null && typeof l === "object" && typeof /** @type {any} */
      l.then === "function") {
        l.then(
          s,
          /** @param {unknown} e */
          (c) => Cr(c, this.#o && this.#o.parent)
        );
      } else {
        s(l);
      }
    });
  }
};

// ../../node_modules/svelte/src/internal/client/reactivity/async.js
function ls(e, t, r, n) {
  const o = kr() ? _o : ni;
  var i = e.filter((u) => !u.settled);
  if (r.length === 0 && i.length === 0) {
    n(t.map(o));
    return;
  }
  var a = be;
  var s = (
    /** @type {Effect} */
    ie
  );
  var l = D_();
  var c = i.length === 1 ? i[0].promise : i.length > 1 ? Promise.all(i.map((u) => u.promise)) : null;
  function f(u) {
    l();
    try {
      n(u);
    } catch (d) {
      if ((s.f & Zt) === 0) {
        Cr(d, s);
      }
    }
    cs();
  }
  if (r.length === 0) {
    c.then(() => f(t.map(o)));
    return;
  }
  function p() {
    l();
    Promise.all(r.map((u) => np(u))).then((u) => f([...t.map(o), ...u])).catch((u) => Cr(u, s));
  }
  if (c) {
    c.then(p);
  } else {
    p();
  }
}
function D_() {
  var e = ie;
  var t = pe;
  var r = ge;
  var n = be;
  if (U) {
    var o = Yr;
  }
  return function i(a = true) {
    pt(e);
    ut(t);
    Vn(r);
    if (a) n?.activate();
    if (U) {
      rp(null);
      Ki(o);
    }
  };
}
function cs(e = true) {
  pt(null);
  ut(null);
  Vn(null);
  if (e) be?.deactivate();
  if (U) {
    rp(null);
    Ki(null);
  }
}
function pc() {
  var e = (
    /** @type {Boundary} */
    /** @type {Effect} */
    ie.b
  );
  var t = (
    /** @type {Batch} */
    be
  );
  var r = e.is_rendered();
  e.update_pending_count(1);
  t.increment(r);
  return () => {
    e.update_pending_count(-1);
    t.decrement(r);
  };
}

// ../../node_modules/svelte/src/internal/client/reactivity/deriveds.js
var fs = null;
function rp(e) {
  fs = e;
}
var us = /* @__PURE__ */ new Set();
// @__NO_SIDE_EFFECTS__
function _o(e) {
  var t = Be | ke;
  var r = pe !== null && (pe.f & Be) !== 0 ? (
    /** @type {Derived} */
    pe
  ) : null;
  if (ie !== null) {
    ie.f |= Kr;
  }
  const n = {
    ctx: ge,
    deps: null,
    effects: null,
    equals: Ql,
    f: t,
    fn: e,
    reactions: null,
    rv: 0,
    v: (
      /** @type {V} */
      Fe
    ),
    wv: 0,
    parent: r ?? ie,
    ac: null
  };
  if (U && tn) {
    n.created = Sn("created at");
  }
  return n;
}
// @__NO_SIDE_EFFECTS__
function np(e, t, r) {
  let n = (
    /** @type {Effect | null} */
    ie
  );
  if (n === null) {
    W0();
  }
  var o = (
    /** @type {Promise<V>} */
    /** @type {unknown} */
    void 0
  );
  var i = ct(
    /** @type {V} */
    Fe
  );
  if (U) i.label = t;
  var a = !pe;
  var s = /* @__PURE__ */ new Map();
  E_(() => {
    if (U) fs = ie;
    var l = Zl();
    o = l.promise;
    try {
      Promise.resolve(e()).then(l.resolve, l.reject).finally(cs);
    } catch (u) {
      l.reject(u);
      cs();
    }
    if (U) fs = null;
    var c = (
      /** @type {Batch} */
      be
    );
    if (a) {
      var f = pc();
      s.get(c)?.reject(Qr);
      s.delete(c);
      s.set(c, l);
    }
    const p = (u, d = void 0) => {
      fs = null;
      c.activate();
      if (d) {
        if (d !== Qr) {
          i.f |= Ar;
          nn(i, d);
        }
      } else {
        if ((i.f & Ar) !== 0) {
          i.f ^= Ar;
        }
        nn(i, u);
        for (const [h, _] of s) {
          s.delete(h);
          if (h === c) break;
          _.reject(Qr);
        }
        if (U && r !== void 0) {
          us.add(i);
          setTimeout(() => {
            if (us.has(i)) {
              c_(
                /** @type {string} */
                i.label,
                r
              );
              us.delete(i);
            }
          });
        }
      }
      if (f) {
        f();
      }
    };
    l.promise.then(p, (u) => p(null, u || "unknown"));
  });
  gt(() => {
    for (const l of s.values()) {
      l.reject(Qr);
    }
  });
  if (U) {
    i.f |= Ln;
  }
  return new Promise((l) => {
    function c(f) {
      function p() {
        if (f === o) {
          l(i);
        } else {
          c(o);
        }
      }
      f.then(p, p);
    }
    c(o);
  });
}
// @__NO_SIDE_EFFECTS__
function Me(e) {
  const t = /* @__PURE__ */ _o(e);
  if (!jt) mc(t);
  return t;
}
// @__NO_SIDE_EFFECTS__
function ni(e) {
  const t = /* @__PURE__ */ _o(e);
  t.equals = tc;
  return t;
}
function ip(e) {
  var t = e.effects;
  if (t !== null) {
    e.effects = null;
    for (var r = 0; r < t.length; r += 1) {
      Le(
        /** @type {Effect} */
        t[r]
      );
    }
  }
}
var op = [];
function ED(e) {
  var t = e.parent;
  while (t !== null) {
    if ((t.f & Be) === 0) {
      return (t.f & Zt) === 0 ? (
        /** @type {Effect} */
        t
      ) : null;
    }
    t = t.parent;
  }
  return null;
}
function ps(e) {
  var t;
  var r = ie;
  pt(ED(e));
  if (U) {
    let n = oi;
    lc(/* @__PURE__ */ new Set());
    try {
      if (Jr.call(op, e)) {
        Z0();
      }
      op.push(e);
      e.f &= ~Er;
      ip(e);
      t = dc(e);
    } finally {
      pt(r);
      lc(n);
      op.pop();
    }
  } else {
    try {
      e.f &= ~Er;
      ip(e);
      t = dc(e);
    } finally {
      pt(r);
    }
  }
  return t;
}
function ap(e) {
  var t = ps(e);
  if (!e.equals(t)) {
    e.wv = ra();
    if (!be?.is_fork || e.deps === null) {
      e.v = t;
      if (e.deps === null) {
        De(e, Pe);
        return;
      }
    }
  }
  if (Or) {
    return;
  }
  if (kt !== null) {
    if (ho() || be?.is_fork) {
      kt.set(e, t);
    }
  } else {
    Qi(e);
  }
}
function w_(e) {
  if (e.effects === null) return;
  for (const t of e.effects) {
    if (t.teardown || t.ac) {
      t.teardown?.();
      t.ac?.abort(Qr);
      t.teardown = Ot;
      t.ac = null;
      ii(t, 0);
      ds(t);
    }
  }
}
function sp(e) {
  if (e.effects === null) return;
  for (const t of e.effects) {
    if (t.teardown) {
      Mn(t);
    }
  }
}

// ../../node_modules/svelte/src/internal/client/reactivity/sources.js
var oi = /* @__PURE__ */ new Set();
var Dn = /* @__PURE__ */ new Map();
function lc(e) {
  oi = e;
}
var lp = false;
function A_() {
  lp = true;
}
function ct(e, t) {
  var r = {
    f: 0,
    // TODO ideally we could skip this altogether, but it causes type errors
    v: e,
    reactions: null,
    equals: Ql,
    rv: 0,
    wv: 0
  };
  if (U && tn) {
    r.created = t ?? Sn("created at");
    r.updated = null;
    r.set_during_effect = false;
    r.trace = null;
  }
  return r;
}
// @__NO_SIDE_EFFECTS__
function dt(e, t) {
  const r = ct(e, t);
  mc(r);
  return r;
}
// @__NO_SIDE_EFFECTS__
function yo(e, t = false, r = true) {
  const n = ct(e);
  if (!t) {
    n.equals = tc;
  }
  if (Tn && r && ge !== null && ge.l !== null) {
    (ge.l.s ??= []).push(n);
  }
  return n;
}
function Ie(e, t, r = false) {
  if (pe !== null && // since we are untracking the function inside `$inspect.with` we need to add this check
  // to ensure we error if state is set inside an inspect effect
  (!nr || (pe.f & Ko) !== 0) && kr() && (pe.f & (Be | tr | Ln | Ko)) !== 0 && (pr === null || !Jr.call(pr, e))) {
    s_();
  }
  let n = r ? on(t) : t;
  if (U) {
    rc(
      n,
      /** @type {string} */
      e.label
    );
  }
  return nn(e, n);
}
function nn(e, t) {
  if (!e.equals(t)) {
    var r = e.v;
    if (Or) {
      Dn.set(e, t);
    } else {
      Dn.set(e, r);
    }
    e.v = t;
    var n = Ct.ensure();
    n.capture(e, r);
    if (U) {
      if (tn || ie !== null) {
        e.updated ??= /* @__PURE__ */ new Map();
        const o = (e.updated.get("")?.count ?? 0) + 1;
        e.updated.set("", { error: (
          /** @type {any} */
          null
        ), count: o });
        if (tn || o > 5) {
          const i = Sn("updated at");
          if (i !== null) {
            let a = e.updated.get(i.stack);
            if (!a) {
              a = { error: i, count: 0 };
              e.updated.set(i.stack, a);
            }
            a.count++;
          }
        }
      }
      if (ie !== null) {
        e.set_during_effect = true;
      }
    }
    if ((e.f & Be) !== 0) {
      const o = (
        /** @type {Derived} */
        e
      );
      if ((e.f & ke) !== 0) {
        ps(o);
      }
      Qi(o);
    }
    e.wv = ra();
    N_(e, ke);
    if (kr() && ie !== null && (ie.f & Pe) !== 0 && (ie.f & (bt | wr)) === 0) {
      if (dr === null) {
        Y_([e]);
      } else {
        dr.push(e);
      }
    }
    if (!n.is_fork && oi.size > 0 && !lp) {
      cc();
    }
  }
  return t;
}
function cc() {
  lp = false;
  for (const e of oi) {
    if ((e.f & Pe) !== 0) {
      De(e, at);
    }
    if (go(e)) {
      Mn(e);
    }
  }
  oi.clear();
}
function as(e, t = 1) {
  var r = W(e);
  var n = t === 1 ? r++ : r--;
  Ie(e, r);
  return n;
}
function Tt(e) {
  Ie(e, e.v + 1);
}
function N_(e, t) {
  var r = e.reactions;
  if (r === null) return;
  var n = kr();
  var o = r.length;
  for (var i = 0; i < o; i++) {
    var a = r[i];
    var s = a.f;
    if (!n && a === ie) continue;
    if (U && (s & Ko) !== 0) {
      oi.add(a);
      continue;
    }
    var l = (s & ke) === 0;
    if (l) {
      De(a, t);
    }
    if ((s & Be) !== 0) {
      var c = (
        /** @type {Derived} */
        a
      );
      kt?.delete(c);
      if ((s & Er) === 0) {
        if (s & Ft) {
          a.f |= Er;
        }
        N_(c, at);
      }
    } else if (l) {
      if ((s & tr) !== 0 && Ir !== null) {
        Ir.add(
          /** @type {Effect} */
          a
        );
      }
      Xt(
        /** @type {Effect} */
        a
      );
    }
  }
}

// ../../node_modules/svelte/src/internal/client/proxy.js
var AD = /^[a-zA-Z_$][a-zA-Z_$0-9]*$/;
function on(e) {
  if (typeof e !== "object" || e === null || st in e) {
    return e;
  }
  const t = jo(e);
  if (t !== Vu && t !== G0) {
    return e;
  }
  var r = /* @__PURE__ */ new Map();
  var n = Xr(e);
  var o = dt(0);
  var i = U && tn ? Sn("created at") : null;
  var a = Fr;
  var s = (p) => {
    if (Fr === a) {
      return p();
    }
    var u = pe;
    var d = Fr;
    ut(null);
    cp(a);
    var h = p();
    ut(u);
    cp(d);
    return h;
  };
  if (n) {
    r.set("length", dt(
      /** @type {any[]} */
      e.length,
      i
    ));
    if (U) {
      e = /** @type {any} */
      YD(
        /** @type {any[]} */
        e
      );
    }
  }
  var l = "";
  let c = false;
  function f(p) {
    if (c) return;
    c = true;
    l = p;
    Ge(o, `${l} version`);
    for (const [u, d] of r) {
      Ge(d, ai(l, u));
    }
    c = false;
  }
  return new Proxy(
    /** @type {any} */
    e,
    {
      defineProperty(p, u, d) {
        if (!("value" in d) || d.configurable === false || d.enumerable === false || d.writable === false) {
          i_();
        }
        var h = r.get(u);
        if (h === void 0) {
          s(() => {
            var _ = dt(d.value, i);
            r.set(u, _);
            if (U && typeof u === "string") {
              Ge(_, ai(l, u));
            }
            return _;
          });
        } else {
          Ie(h, d.value, true);
        }
        return true;
      },
      deleteProperty(p, u) {
        var d = r.get(u);
        if (d === void 0) {
          if (u in p) {
            const h = s(() => dt(Fe, i));
            r.set(u, h);
            Tt(o);
            if (U) {
              Ge(h, ai(l, u));
            }
          }
        } else {
          Ie(d, Fe);
          Tt(o);
        }
        return true;
      },
      get(p, u, d) {
        if (u === st) {
          return e;
        }
        if (U && u === Xl) {
          return f;
        }
        var h = r.get(u);
        var _ = u in p;
        if (h === void 0 && (!_ || It(p, u)?.writable)) {
          h = s(() => {
            var x = on(_ ? p[u] : Fe);
            var A = dt(x, i);
            if (U) {
              Ge(A, ai(l, u));
            }
            return A;
          });
          r.set(u, h);
        }
        if (h !== void 0) {
          var m = W(h);
          return m === Fe ? void 0 : m;
        }
        return Reflect.get(p, u, d);
      },
      getOwnPropertyDescriptor(p, u) {
        var d = Reflect.getOwnPropertyDescriptor(p, u);
        if (d && "value" in d) {
          var h = r.get(u);
          if (h) d.value = W(h);
        } else if (d === void 0) {
          var _ = r.get(u);
          var m = _?.v;
          if (_ !== void 0 && m !== Fe) {
            return {
              enumerable: true,
              configurable: true,
              value: m,
              writable: true
            };
          }
        }
        return d;
      },
      has(p, u) {
        if (u === st) {
          return true;
        }
        var d = r.get(u);
        var h = d !== void 0 && d.v !== Fe || Reflect.has(p, u);
        if (d !== void 0 || ie !== null && (!h || It(p, u)?.writable)) {
          if (d === void 0) {
            d = s(() => {
              var m = h ? on(p[u]) : Fe;
              var x = dt(m, i);
              if (U) {
                Ge(x, ai(l, u));
              }
              return x;
            });
            r.set(u, d);
          }
          var _ = W(d);
          if (_ === Fe) {
            return false;
          }
        }
        return h;
      },
      set(p, u, d, h) {
        var _ = r.get(u);
        var m = u in p;
        if (n && u === "length") {
          for (var x = d; x < /** @type {Source<number>} */
          _.v; x += 1) {
            var A = r.get(x + "");
            if (A !== void 0) {
              Ie(A, Fe);
            } else if (x in p) {
              A = s(() => dt(Fe, i));
              r.set(x + "", A);
              if (U) {
                Ge(A, ai(l, x));
              }
            }
          }
        }
        if (_ === void 0) {
          if (!m || It(p, u)?.writable) {
            _ = s(() => dt(void 0, i));
            if (U) {
              Ge(_, ai(l, u));
            }
            Ie(_, on(d));
            r.set(u, _);
          }
        } else {
          m = _.v !== Fe;
          var D = s(() => on(d));
          Ie(_, D);
        }
        var N = Reflect.getOwnPropertyDescriptor(p, u);
        if (N?.set) {
          N.set.call(h, d);
        }
        if (!m) {
          if (n && typeof u === "string") {
            var F = (
              /** @type {Source<number>} */
              r.get("length")
            );
            var T = Number(u);
            if (Number.isInteger(T) && T >= F.v) {
              Ie(F, T + 1);
            }
          }
          Tt(o);
        }
        return true;
      },
      ownKeys(p) {
        W(o);
        var u = Reflect.ownKeys(p).filter((_) => {
          var m = r.get(_);
          return m === void 0 || m.v !== Fe;
        });
        for (var [d, h] of r) {
          if (h.v !== Fe && !(d in p)) {
            u.push(d);
          }
        }
        return u;
      },
      setPrototypeOf() {
        a_();
      }
    }
  );
}
function ai(e, t) {
  if (typeof t === "symbol") return `${e}[Symbol(${t.description ?? ""})]`;
  if (AD.test(t)) return `${e}.${t}`;
  return /^\d+$/.test(t) ? `${e}[${t}]` : `${e}['${t}']`;
}
function na(e) {
  try {
    if (e !== null && typeof e === "object" && st in e) {
      return e[st];
    }
  } catch {
  }
  return e;
}
function fp(e, t) {
  return Object.is(na(e), na(t));
}
var ND = /* @__PURE__ */ new Set([
  "copyWithin",
  "fill",
  "pop",
  "push",
  "reverse",
  "shift",
  "sort",
  "splice",
  "unshift"
]);
function YD(e) {
  return new Proxy(e, {
    get(t, r, n) {
      var o = Reflect.get(t, r, n);
      if (!ND.has(
        /** @type {string} */
        r
      )) {
        return o;
      }
      return function(...i) {
        A_();
        var a = o.apply(this, i);
        cc();
        return a;
      };
    }
  });
}

// ../../node_modules/svelte/src/internal/client/dev/equality.js
function k_() {
  const e = Array.prototype;
  const t = Array.__svelte_cleanup;
  if (t) {
    t();
  }
  const { indexOf: r, lastIndexOf: n, includes: o } = e;
  e.indexOf = function(i, a) {
    const s = r.call(this, i, a);
    if (s === -1) {
      for (let l = a ?? 0; l < this.length; l += 1) {
        if (na(this[l]) === i) {
          Kl("array.indexOf(...)");
          break;
        }
      }
    }
    return s;
  };
  e.lastIndexOf = function(i, a) {
    const s = n.call(this, i, a ?? this.length - 1);
    if (s === -1) {
      for (let l = 0; l <= (a ?? this.length - 1); l += 1) {
        if (na(this[l]) === i) {
          Kl("array.lastIndexOf(...)");
          break;
        }
      }
    }
    return s;
  };
  e.includes = function(i, a) {
    const s = o.call(this, i, a);
    if (!s) {
      for (let l = 0; l < this.length; l += 1) {
        if (na(this[l]) === i) {
          Kl("array.includes(...)");
          break;
        }
      }
    }
    return s;
  };
  Array.__svelte_cleanup = () => {
    e.indexOf = r;
    e.lastIndexOf = n;
    e.includes = o;
  };
}

// ../../node_modules/svelte/src/internal/client/dom/operations.js
var up;
var C_;
var is;
var I_;
var O_;
function hc() {
  if (up !== void 0) {
    return;
  }
  up = window;
  C_ = document;
  is = /Firefox/.test(navigator.userAgent);
  var e = Element.prototype;
  var t = Node.prototype;
  var r = Text.prototype;
  I_ = It(t, "firstChild").get;
  O_ = It(t, "nextSibling").get;
  if (Hu(e)) {
    e.__click = void 0;
    e.__className = void 0;
    e.__attributes = null;
    e.__style = void 0;
    e.__e = void 0;
  }
  if (Hu(r)) {
    r.__t = void 0;
  }
  if (U) {
    e.__svelte_meta = null;
    k_();
  }
}
function Je(e = "") {
  return document.createTextNode(e);
}
// @__NO_SIDE_EFFECTS__
function Ke(e) {
  return (
    /** @type {TemplateNode | null} */
    I_.call(e)
  );
}
// @__NO_SIDE_EFFECTS__
function vt(e) {
  return (
    /** @type {TemplateNode | null} */
    O_.call(e)
  );
}
function Hn(e, t) {
  if (!ee) {
    return /* @__PURE__ */ Ke(e);
  }
  var r = /* @__PURE__ */ Ke(de);
  if (r === null) {
    r = de.appendChild(Je());
  } else if (t && r.nodeType !== Qo) {
    var n = Je();
    r?.before(n);
    Te(n);
    return n;
  }
  if (t) {
    hs(
      /** @type {Text} */
      r
    );
  }
  Te(r);
  return r;
}
function gc(e, t = false) {
  if (!ee) {
    var r = /* @__PURE__ */ Ke(e);
    if (r instanceof Comment && r.data === "") return /* @__PURE__ */ vt(r);
    return r;
  }
  if (t) {
    if (de?.nodeType !== Qo) {
      var n = Je();
      de?.before(n);
      Te(n);
      return n;
    }
    hs(
      /** @type {Text} */
      de
    );
  }
  return de;
}
function si(e, t = 1, r = false) {
  let n = ee ? de : e;
  var o;
  while (t--) {
    o = n;
    n = /** @type {TemplateNode} */
    /* @__PURE__ */ vt(n);
  }
  if (!ee) {
    return n;
  }
  if (r) {
    if (n?.nodeType !== Qo) {
      var i = Je();
      if (n === null) {
        o?.after(i);
      } else {
        n.before(i);
      }
      Te(i);
      return i;
    }
    hs(
      /** @type {Text} */
      n
    );
  }
  Te(n);
  return n;
}
function ms(e) {
  e.textContent = "";
}
function _c() {
  if (!jt) return false;
  if (Ir !== null) return false;
  var e = (
    /** @type {Effect} */
    ie.f
  );
  return (e & Nt) !== 0;
}
function an(e, t, r) {
  let n = r ? { is: r } : void 0;
  return (
    /** @type {T extends keyof HTMLElementTagNameMap ? HTMLElementTagNameMap[T] : Element} */
    document.createElementNS(t ?? zl, e, n)
  );
}
function hs(e) {
  if (
    /** @type {string} */
    e.nodeValue.length < 65536
  ) {
    return;
  }
  let t = e.nextSibling;
  while (t !== null && t.nodeType === Qo) {
    t.remove();
    e.nodeValue += /** @type {string} */
    t.nodeValue;
    t = e.nextSibling;
  }
}

// ../../node_modules/svelte/src/internal/client/dom/elements/misc.js
function pp(e, t) {
  if (t) {
    const r = document.body;
    e.autofocus = true;
    Xe(() => {
      if (document.activeElement === r) {
        e.focus();
      }
    });
  }
}
var F_ = false;
function dp() {
  if (!F_) {
    F_ = true;
    document.addEventListener(
      "reset",
      (e) => {
        Promise.resolve().then(() => {
          if (!e.defaultPrevented) {
            for (
              const t of
              /**@type {HTMLFormElement} */
              e.target.elements
            ) {
              t.__on_r?.();
            }
          }
        });
      },
      // In the capture phase to guarantee we get noticed of it (no possibility of stopPropagation)
      { capture: true }
    );
  }
}

// ../../node_modules/svelte/src/internal/client/dom/elements/bindings/shared.js
function xo(e) {
  var t = pe;
  var r = ie;
  ut(null);
  pt(null);
  try {
    return e();
  } finally {
    ut(t);
    pt(r);
  }
}

// ../../node_modules/svelte/src/internal/client/reactivity/effects.js
function hp(e) {
  if (ie === null) {
    if (pe === null) {
      K0(e);
    }
    J0();
  }
  if (Or) {
    X0(e);
  }
}
function kD(e, t) {
  var r = t.last;
  if (r === null) {
    t.last = t.first = e;
  } else {
    r.next = e;
    e.prev = r;
    t.last = e;
  }
}
function Pr(e, t, r) {
  var n = ie;
  if (U) {
    while (n !== null && (n.f & Ko) !== 0) {
      n = n.parent;
    }
  }
  if (n !== null && (n.f & Pt) !== 0) {
    e |= Pt;
  }
  var o = {
    ctx: ge,
    deps: null,
    nodes: null,
    f: e | ke | Ft,
    first: null,
    fn: t,
    last: null,
    next: null,
    parent: n,
    b: n && n.b,
    prev: null,
    teardown: null,
    wv: 0,
    ac: null
  };
  if (U) {
    o.component_function = rn;
  }
  if (r) {
    try {
      Mn(o);
    } catch (s) {
      Le(o);
      throw s;
    }
  } else if (t !== null) {
    Xt(o);
  }
  var i = o;
  if (r && i.deps === null && i.teardown === null && i.nodes === null && i.first === i.last && // either `null`, or a singular child
  (i.f & Kr) === 0) {
    i = i.first;
    if ((e & tr) !== 0 && (e & Rt) !== 0 && i !== null) {
      i.f |= Rt;
    }
  }
  if (i !== null) {
    i.parent = n;
    if (n !== null) {
      kD(i, n);
    }
    if (pe !== null && (pe.f & Be) !== 0 && (e & wr) === 0) {
      var a = (
        /** @type {Derived} */
        pe
      );
      (a.effects ??= []).push(i);
    }
  }
  return o;
}
function ho() {
  return pe !== null && !nr;
}
function gt(e) {
  const t = Pr(uo, null, false);
  De(t, Pe);
  t.teardown = e;
  return t;
}
function oa(e) {
  hp("$effect");
  if (U) {
    xt(e, "name", {
      value: "$effect"
    });
  }
  var t = (
    /** @type {Effect} */
    ie.f
  );
  var r = !pe && (t & bt) !== 0 && (t & Nt) === 0;
  if (r) {
    var n = (
      /** @type {ComponentContext} */
      ge
    );
    (n.e ??= []).push(e);
  } else {
    return ju(e);
  }
}
function ju(e) {
  return Pr(fo | Gu, e, false);
}
function gs(e) {
  hp("$effect.pre");
  if (U) {
    xt(e, "name", {
      value: "$effect.pre"
    });
  }
  return Pr(uo | Gu, e, true);
}
function gp(e) {
  Ct.ensure();
  const t = Pr(wr | Kr, e, true);
  return () => {
    Le(t);
  };
}
function P_(e) {
  Ct.ensure();
  const t = Pr(wr | Kr, e, true);
  return (r = {}) => {
    return new Promise((n) => {
      if (r.outro) {
        wn(t, () => {
          Le(t);
          n(void 0);
        });
      } else {
        Le(t);
        n(void 0);
      }
    });
  };
}
function Vt(e) {
  return Pr(fo, e, false);
}
function E_(e) {
  return Pr(Ln | Kr, e, true);
}
function Bt(e, t = 0) {
  return Pr(uo | t, e, true);
}
function En(e, t = [], r = [], n = []) {
  ls(n, t, r, (o) => {
    Pr(uo, () => e(...o.map(W)), true);
  });
}
function Lt(e, t = 0) {
  var r = Pr(tr | t, e, true);
  if (U) {
    r.dev_stack = Yr;
  }
  return r;
}
function yc(e, t = 0) {
  var r = Pr(Jo | t, e, true);
  if (U) {
    r.dev_stack = Yr;
  }
  return r;
}
function ft(e) {
  return Pr(bt | Kr, e, true);
}
function _p(e) {
  var t = e.teardown;
  if (t !== null) {
    const r = Or;
    const n = pe;
    mp(true);
    ut(null);
    try {
      t.call(null);
    } finally {
      mp(r);
      ut(n);
    }
  }
}
function ds(e, t = false) {
  var r = e.first;
  e.first = e.last = null;
  while (r !== null) {
    const o = r.ac;
    if (o !== null) {
      xo(() => {
        o.abort(Qr);
      });
    }
    var n = r.next;
    if ((r.f & wr) !== 0) {
      r.parent = null;
    } else {
      Le(r, t);
    }
    r = n;
  }
}
function R_(e) {
  var t = e.first;
  while (t !== null) {
    var r = t.next;
    if ((t.f & bt) === 0) {
      Le(t);
    }
    t = r;
  }
}
function Le(e, t = true) {
  var r = false;
  if ((t || (e.f & es) !== 0) && e.nodes !== null && e.nodes.end !== null) {
    $_(
      e.nodes.start,
      /** @type {TemplateNode} */
      e.nodes.end
    );
    r = true;
  }
  ds(e, t && !r);
  ii(e, 0);
  De(e, Zt);
  var n = e.nodes && e.nodes.t;
  if (n !== null) {
    for (const i of n) {
      i.stop();
    }
  }
  _p(e);
  var o = e.parent;
  if (o !== null && o.first !== null) {
    Qu(e);
  }
  if (U) {
    e.component_function = null;
  }
  e.next = e.prev = e.teardown = e.ctx = e.deps = e.fn = e.nodes = e.ac = null;
}
function $_(e, t) {
  while (e !== null) {
    var r = e === t ? null : vt(e);
    e.remove();
    e = r;
  }
}
function Qu(e) {
  var t = e.parent;
  var r = e.prev;
  var n = e.next;
  if (r !== null) r.next = n;
  if (n !== null) n.prev = r;
  if (t !== null) {
    if (t.first === e) t.first = n;
    if (t.last === e) t.last = r;
  }
}
function wn(e, t, r = true) {
  var n = [];
  B_(e, n, true);
  var o = () => {
    if (r) Le(e);
    if (t) t();
  };
  var i = n.length;
  if (i > 0) {
    var a = () => --i || o();
    for (var s of n) {
      s.out(a);
    }
  } else {
    o();
  }
}
function B_(e, t, r) {
  if ((e.f & Pt) !== 0) return;
  e.f ^= Pt;
  var n = e.nodes && e.nodes.t;
  if (n !== null) {
    for (const s of n) {
      if (s.is_global || r) {
        t.push(s);
      }
    }
  }
  var o = e.first;
  while (o !== null) {
    var i = o.next;
    var a = (o.f & Rt) !== 0 || // If this is a branch effect without a block effect parent,
    // it means the parent block effect was pruned. In that case,
    // transparency information was transferred to the branch effect.
    (o.f & bt) !== 0 && (e.f & tr) !== 0;
    B_(o, t, a ? r : false);
    o = i;
  }
}
function _s(e) {
  L_(e, true);
}
function L_(e, t) {
  if ((e.f & Pt) === 0) return;
  e.f ^= Pt;
  if ((e.f & Pe) === 0) {
    De(e, ke);
    Xt(e);
  }
  var r = e.first;
  while (r !== null) {
    var n = r.next;
    var o = (r.f & Rt) !== 0 || (r.f & bt) !== 0;
    L_(r, o ? t : false);
    r = n;
  }
  var i = e.nodes && e.nodes.t;
  if (i !== null) {
    for (const a of i) {
      if (a.is_global || t) {
        a.in();
      }
    }
  }
}
function uc(e, t) {
  if (!e.nodes) return;
  var r = e.nodes.start;
  var n = e.nodes.end;
  while (r !== null) {
    var o = r === n ? null : vt(r);
    t.append(r);
    r = o;
  }
}

// ../../node_modules/svelte/src/internal/client/legacy.js
var V_ = null;

// ../../node_modules/svelte/src/internal/client/runtime.js
var xc = false;
var Or = false;
function mp(e) {
  Or = e;
}
var pe = null;
var nr = false;
function ut(e) {
  pe = e;
}
var ie = null;
function pt(e) {
  ie = e;
}
var pr = null;
function mc(e) {
  if (pe !== null && (!jt || (pe.f & Be) !== 0)) {
    if (pr === null) {
      pr = [e];
    } else {
      pr.push(e);
    }
  }
}
var or = null;
var mr = 0;
var dr = null;
function Y_(e) {
  dr = e;
}
var H_ = 1;
var li = 0;
var Fr = li;
function cp(e) {
  Fr = e;
}
function ra() {
  return ++H_;
}
function go(e) {
  var t = e.f;
  if ((t & ke) !== 0) {
    return true;
  }
  if (t & Be) {
    e.f &= ~Er;
  }
  if ((t & at) !== 0) {
    var r = (
      /** @type {Value[]} */
      e.deps
    );
    var n = r.length;
    for (var o = 0; o < n; o++) {
      var i = r[o];
      if (go(
        /** @type {Derived} */
        i
      )) {
        ap(
          /** @type {Derived} */
          i
        );
      }
      if (i.wv > e.wv) {
        return true;
      }
    }
    if ((t & Ft) !== 0 && // During time traveling we don't want to reset the status so that
    // traversal of the graph in the other batches still happens
    kt === null) {
      De(e, Pe);
    }
  }
  return false;
}
function U_(e, t, r = true) {
  var n = e.reactions;
  if (n === null) return;
  if (!jt && pr !== null && Jr.call(pr, e)) {
    return;
  }
  for (var o = 0; o < n.length; o++) {
    var i = n[o];
    if ((i.f & Be) !== 0) {
      U_(
        /** @type {Derived} */
        i,
        t,
        false
      );
    } else if (t === i) {
      if (r) {
        De(i, ke);
      } else if ((i.f & Pe) !== 0) {
        De(i, at);
      }
      Xt(
        /** @type {Effect} */
        i
      );
    }
  }
}
function dc(e) {
  var t = or;
  var r = mr;
  var n = dr;
  var o = pe;
  var i = pr;
  var a = ge;
  var s = nr;
  var l = Fr;
  var c = e.f;
  or = /** @type {null | Value[]} */
  null;
  mr = 0;
  dr = null;
  pe = (c & (bt | wr)) === 0 ? e : null;
  pr = null;
  Vn(e.ctx);
  nr = false;
  Fr = ++li;
  if (e.ac !== null) {
    xo(() => {
      e.ac.abort(Qr);
    });
    e.ac = null;
  }
  try {
    e.f |= jl;
    var f = (
      /** @type {Function} */
      e.fn
    );
    var p = f();
    e.f |= Nt;
    var u = e.deps;
    var d = be?.is_fork;
    if (or !== null) {
      var h;
      if (!d) {
        ii(e, mr);
      }
      if (u !== null && mr > 0) {
        u.length = mr + or.length;
        for (h = 0; h < or.length; h++) {
          u[mr + h] = or[h];
        }
      } else {
        e.deps = u = or;
      }
      if (ho() && (e.f & Ft) !== 0) {
        for (h = mr; h < u.length; h++) {
          (u[h].reactions ??= []).push(e);
        }
      }
    } else if (!d && u !== null && mr < u.length) {
      ii(e, mr);
      u.length = mr;
    }
    if (kr() && dr !== null && !nr && u !== null && (e.f & (Be | at | ke)) === 0) {
      for (h = 0; h < /** @type {Source[]} */
      dr.length; h++) {
        U_(
          dr[h],
          /** @type {Effect} */
          e
        );
      }
    }
    if (o !== null && o !== e) {
      li++;
      if (o.deps !== null) {
        for (let _ = 0; _ < r; _ += 1) {
          o.deps[_].rv = li;
        }
      }
      if (t !== null) {
        for (const _ of t) {
          _.rv = li;
        }
      }
      if (dr !== null) {
        if (n === null) {
          n = dr;
        } else {
          n.push(.../** @type {Source[]} */
          dr);
        }
      }
    }
    if ((e.f & Ar) !== 0) {
      e.f ^= Ar;
    }
    return p;
  } catch (_) {
    return oc(_);
  } finally {
    e.f ^= jl;
    or = t;
    mr = r;
    dr = n;
    pe = o;
    pr = i;
    Vn(a);
    nr = s;
    Fr = l;
  }
}
function CD(e, t) {
  let r = t.reactions;
  if (r !== null) {
    var n = U0.call(r, e);
    if (n !== -1) {
      var o = r.length - 1;
      if (o === 0) {
        r = t.reactions = null;
      } else {
        r[n] = r[o];
        r.pop();
      }
    }
  }
  if (r === null && (t.f & Be) !== 0 && // Destroying a child effect while updating a parent effect can cause a dependency to appear
  // to be unused, when in fact it is used by the currently-updating parent. Checking `new_deps`
  // allows us to skip the expensive work of disconnecting and immediately reconnecting it
  (or === null || !Jr.call(or, t))) {
    var i = (
      /** @type {Derived} */
      t
    );
    if ((i.f & Ft) !== 0) {
      i.f ^= Ft;
      i.f &= ~Er;
    }
    Qi(i);
    w_(i);
    ii(i, 0);
  }
}
function ii(e, t) {
  var r = e.deps;
  if (r === null) return;
  for (var n = t; n < r.length; n++) {
    CD(e, r[n]);
  }
}
function Mn(e) {
  var t = e.f;
  if ((t & Zt) !== 0) {
    return;
  }
  De(e, Pe);
  var r = ie;
  var n = xc;
  ie = e;
  xc = true;
  if (U) {
    var o = rn;
    nc(e.component_function);
    var i = (
      /** @type {any} */
      Yr
    );
    Ki(e.dev_stack ?? Yr);
  }
  try {
    if ((t & (tr | Jo)) !== 0) {
      R_(e);
    } else {
      ds(e);
    }
    _p(e);
    var a = dc(e);
    e.teardown = typeof a === "function" ? a : null;
    e.wv = H_;
    if (U && tn && (e.f & ke) !== 0 && e.deps !== null) {
      for (var s of e.deps) {
        if (s.set_during_effect) {
          s.wv = ra();
          s.set_during_effect = false;
        }
      }
    }
  } finally {
    xc = n;
    ie = r;
    if (U) {
      nc(o);
      Ki(i);
    }
  }
}
function W(e) {
  var t = e.f;
  var r = (t & Be) !== 0;
  V_?.add(e);
  if (pe !== null && !nr) {
    var n = ie !== null && (ie.f & Zt) !== 0;
    if (!n && (pr === null || !Jr.call(pr, e))) {
      var o = pe.deps;
      if ((pe.f & jl) !== 0) {
        if (e.rv < li) {
          e.rv = li;
          if (or === null && o !== null && o[mr] === e) {
            mr++;
          } else if (or === null) {
            or = [e];
          } else {
            or.push(e);
          }
        }
      } else {
        (pe.deps ??= []).push(e);
        var i = e.reactions;
        if (i === null) {
          e.reactions = [pe];
        } else if (!Jr.call(i, pe)) {
          i.push(pe);
        }
      }
    }
  }
  if (U) {
    us.delete(e);
    if (tn && !nr && rs !== null && pe !== null && rs.reaction === pe) {
      if (e.trace) {
        e.trace();
      } else {
        var a = Sn("traced at");
        if (a) {
          var s = rs.entries.get(e);
          if (s === void 0) {
            s = { traces: [] };
            rs.entries.set(e, s);
          }
          var l = s.traces[s.traces.length - 1];
          if (a.stack !== l?.stack) {
            s.traces.push(a);
          }
        }
      }
    }
  }
  if (Or && Dn.has(e)) {
    return Dn.get(e);
  }
  if (r) {
    var c = (
      /** @type {Derived} */
      e
    );
    if (Or) {
      var f = c.v;
      if ((c.f & Pe) === 0 && c.reactions !== null || q_(c)) {
        f = ps(c);
      }
      Dn.set(c, f);
      return f;
    }
    var p = (c.f & Ft) === 0 && !nr && pe !== null && (xc || (pe.f & Ft) !== 0);
    var u = (c.f & Nt) === 0;
    if (go(c)) {
      if (p) {
        c.f |= Ft;
      }
      ap(c);
    }
    if (p && !u) {
      sp(c);
      G_(c);
    }
  }
  if (kt?.has(e)) {
    return kt.get(e);
  }
  if ((e.f & Ar) !== 0) {
    throw e.v;
  }
  return e.v;
}
function G_(e) {
  e.f |= Ft;
  if (e.deps === null) return;
  for (const t of e.deps) {
    (t.reactions ??= []).push(e);
    if ((t.f & Be) !== 0 && (t.f & Ft) === 0) {
      sp(
        /** @type {Derived} */
        t
      );
      G_(
        /** @type {Derived} */
        t
      );
    }
  }
}
function q_(e) {
  if (e.v === Fe) return true;
  if (e.deps === null) return false;
  for (const t of e.deps) {
    if (Dn.has(t)) {
      return true;
    }
    if ((t.f & Be) !== 0 && q_(
      /** @type {Derived} */
      t
    )) {
      return true;
    }
  }
  return false;
}
function Ce(e) {
  var t = nr;
  try {
    nr = true;
    return e();
  } finally {
    nr = t;
  }
}
function vc(e) {
  if (typeof e !== "object" || !e || e instanceof EventTarget) {
    return;
  }
  if (st in e) {
    bc(e);
  } else if (!Array.isArray(e)) {
    for (let t in e) {
      const r = e[t];
      if (typeof r === "object" && r && st in r) {
        bc(r);
      }
    }
  }
}
function bc(e, t = /* @__PURE__ */ new Set()) {
  if (typeof e === "object" && e !== null && // We don't want to traverse DOM elements
  !(e instanceof EventTarget) && !t.has(e)) {
    t.add(e);
    if (e instanceof Date) {
      e.getTime();
    }
    for (let n in e) {
      try {
        bc(e[n], t);
      } catch (o) {
      }
    }
    const r = jo(e);
    if (r !== Object.prototype && r !== Array.prototype && r !== Map.prototype && r !== Set.prototype && r !== Date.prototype) {
      const n = Wl(r);
      for (let o in n) {
        const i = n[o].get;
        if (i) {
          try {
            i.call(e);
          } catch (a) {
          }
        }
      }
    }
  }
}

// ../../node_modules/svelte/src/internal/client/dom/elements/events.js
var ia = Symbol("events");
var yp = /* @__PURE__ */ new Set();
var Tc = /* @__PURE__ */ new Set();
function xp(e, t, r, n = {}) {
  function o(i) {
    if (!n.capture) {
      Sc.call(t, i);
    }
    if (!i.cancelBubble) {
      return xo(() => {
        return r?.call(this, i);
      });
    }
  }
  if (e.startsWith("pointer") || e.startsWith("touch") || e === "wheel") {
    Xe(() => {
      t.addEventListener(e, o, n);
    });
  } else {
    t.addEventListener(e, o, n);
  }
  return o;
}
function W_(e, t, r, n, o) {
  var i = { capture: n, passive: o };
  var a = xp(e, t, r, i);
  if (t === document.body || // @ts-ignore
  t === window || // @ts-ignore
  t === document || // Firefox has quirky behavior, it can happen that we still get "canplay" events when the element is already removed
  t instanceof HTMLMediaElement) {
    gt(() => {
      t.removeEventListener(e, a, i);
    });
  }
}
function bp(e, t, r) {
  (t[ia] ??= {})[e] = r;
}
function vp(e) {
  for (var t = 0; t < e.length; t++) {
    yp.add(e[t]);
  }
  for (var r of Tc) {
    r(e);
  }
}
var z_ = null;
function Sc(e) {
  var t = this;
  var r = (
    /** @type {Node} */
    t.ownerDocument
  );
  var n = e.type;
  var o = e.composedPath?.() || [];
  var i = (
    /** @type {null | Element} */
    o[0] || e.target
  );
  z_ = e;
  var a = 0;
  var s = z_ === e && e[ia];
  if (s) {
    var l = o.indexOf(s);
    if (l !== -1 && (t === document || t === /** @type {any} */
    window)) {
      e[ia] = t;
      return;
    }
    var c = o.indexOf(t);
    if (c === -1) {
      return;
    }
    if (l <= c) {
      a = l;
    }
  }
  i = /** @type {Element} */
  o[a] || e.target;
  if (i === t) return;
  xt(e, "currentTarget", {
    configurable: true,
    get() {
      return i || r;
    }
  });
  var f = pe;
  var p = ie;
  ut(null);
  pt(null);
  try {
    var u;
    var d = [];
    while (i !== null) {
      var h = i.assignedSlot || i.parentNode || /** @type {any} */
      i.host || null;
      try {
        var _ = i[ia]?.[n];
        if (_ != null && (!/** @type {any} */
        i.disabled || // DOM could've been updated already by the time this is reached, so we check this as well
        // -> the target could not have been disabled because it emits the event in the first place
        e.target === i)) {
          _.call(i, e);
        }
      } catch (m) {
        if (u) {
          d.push(m);
        } else {
          u = m;
        }
      }
      if (e.cancelBubble || h === t || h === null) {
        break;
      }
      i = h;
    }
    if (u) {
      for (let m of d) {
        queueMicrotask(() => {
          throw m;
        });
      }
      throw u;
    }
  } finally {
    e[ia] = t;
    delete e.currentTarget;
    ut(f);
    pt(p);
  }
}

// ../../node_modules/svelte/src/internal/client/dom/reconciler.js
var ID = (
  // We gotta write it like this because after downleveling the pure comment may end up in the wrong location
  globalThis?.window?.trustedTypes && /* @__PURE__ */ globalThis.window.trustedTypes.createPolicy("svelte-trusted-html", {
    /** @param {string} html */
    createHTML: (e) => {
      return e;
    }
  })
);
function Z_(e) {
  return (
    /** @type {string} */
    ID?.createHTML(e) ?? e
  );
}
function Mc(e) {
  var t = an("template");
  t.innerHTML = Z_(e.replaceAll("<!>", "<!---->"));
  return t.content;
}

// ../../node_modules/svelte/src/internal/client/dom/template.js
function Ht(e, t) {
  var r = (
    /** @type {Effect} */
    ie
  );
  if (r.nodes === null) {
    r.nodes = { start: e, end: t, a: null, t: null };
  }
}
// @__NO_SIDE_EFFECTS__
function Un(e, t) {
  var r = (t & Ru) !== 0;
  var n = (t & L0) !== 0;
  var o;
  var i = !e.startsWith("<!>");
  return () => {
    if (ee) {
      Ht(de, null);
      return de;
    }
    if (o === void 0) {
      o = Mc(i ? e : "<!>" + e);
      if (!r) o = /** @type {TemplateNode} */
      Ke(o);
    }
    var a = (
      /** @type {TemplateNode} */
      n || is ? document.importNode(o, true) : o.cloneNode(true)
    );
    if (r) {
      var s = (
        /** @type {TemplateNode} */
        Ke(a)
      );
      var l = (
        /** @type {TemplateNode} */
        a.lastChild
      );
      Ht(s, l);
    } else {
      Ht(a, a);
    }
    return a;
  };
}
// @__NO_SIDE_EFFECTS__
function RD(e, t, r = "svg") {
  var n = !e.startsWith("<!>");
  var o = (t & Ru) !== 0;
  var i = `<${r}>${n ? e : "<!>" + e}</${r}>`;
  var a;
  return () => {
    if (ee) {
      Ht(de, null);
      return de;
    }
    if (!a) {
      var s = (
        /** @type {DocumentFragment} */
        Mc(i)
      );
      var l = (
        /** @type {Element} */
        Ke(s)
      );
      if (o) {
        a = document.createDocumentFragment();
        while (Ke(l)) {
          a.appendChild(
            /** @type {TemplateNode} */
            Ke(l)
          );
        }
      } else {
        a = /** @type {Element} */
        Ke(l);
      }
    }
    var c = (
      /** @type {TemplateNode} */
      a.cloneNode(true)
    );
    if (o) {
      var f = (
        /** @type {TemplateNode} */
        Ke(c)
      );
      var p = (
        /** @type {TemplateNode} */
        c.lastChild
      );
      Ht(f, p);
    } else {
      Ht(c, c);
    }
    return c;
  };
}
// @__NO_SIDE_EFFECTS__
function $D(e, t) {
  return /* @__PURE__ */ RD(e, t, "svg");
}
function BD(e = "") {
  if (!ee) {
    var t = Je(e + "");
    Ht(t, t);
    return t;
  }
  var r = de;
  if (r.nodeType !== Qo) {
    r.before(r = Je());
    Te(r);
  } else {
    hs(
      /** @type {Text} */
      r
    );
  }
  Ht(r, r);
  return r;
}
function Tp() {
  if (ee) {
    Ht(de, null);
    return de;
  }
  var e = document.createDocumentFragment();
  var t = document.createComment("");
  var r = Je();
  e.append(t, r);
  Ht(t, r);
  return e;
}
function Rr(e, t) {
  if (ee) {
    var r = (
      /** @type {Effect & { nodes: EffectNodes }} */
      ie
    );
    if ((r.f & Nt) === 0 || r.nodes.end === null) {
      r.nodes.end = de;
    }
    lt();
    return;
  }
  if (e === null) {
    return;
  }
  e.before(
    /** @type {Node} */
    t
  );
}

// ../../node_modules/svelte/src/utils.js
function j_(e) {
  return e.endsWith("capture") && e !== "gotpointercapture" && e !== "lostpointercapture";
}
var LD = [
  "beforeinput",
  "click",
  "change",
  "dblclick",
  "contextmenu",
  "focusin",
  "focusout",
  "input",
  "keydown",
  "keyup",
  "mousedown",
  "mousemove",
  "mouseout",
  "mouseover",
  "mouseup",
  "pointerdown",
  "pointermove",
  "pointerout",
  "pointerover",
  "pointerup",
  "touchend",
  "touchmove",
  "touchstart"
];
function X_(e) {
  return LD.includes(e);
}
var VD = [
  "allowfullscreen",
  "async",
  "autofocus",
  "autoplay",
  "checked",
  "controls",
  "default",
  "disabled",
  "formnovalidate",
  "indeterminate",
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
  "seamless",
  "selected",
  "webkitdirectory",
  "defer",
  "disablepictureinpicture",
  "disableremoteplayback"
];
var HD = {
  // no `class: 'className'` because we handle that separately
  formnovalidate: "formNoValidate",
  ismap: "isMap",
  nomodule: "noModule",
  playsinline: "playsInline",
  readonly: "readOnly",
  defaultvalue: "defaultValue",
  defaultchecked: "defaultChecked",
  srcobject: "srcObject",
  novalidate: "noValidate",
  allowfullscreen: "allowFullscreen",
  disablepictureinpicture: "disablePictureInPicture",
  disableremoteplayback: "disableRemotePlayback"
};
function J_(e) {
  e = e.toLowerCase();
  return HD[e] ?? e;
}
var jH = [
  ...VD,
  "formNoValidate",
  "isMap",
  "noModule",
  "playsInline",
  "readOnly",
  "value",
  "volume",
  "defaultValue",
  "defaultChecked",
  "srcObject",
  "noValidate",
  "allowFullscreen",
  "disablePictureInPicture",
  "disableRemotePlayback"
];
var UD = ["touchstart", "touchmove"];
function K_(e) {
  return UD.includes(e);
}
var GD = (
  /** @type {const} */
  [
    "$state",
    "$state.raw",
    "$derived",
    "$derived.by"
  ]
);
var XH = (
  /** @type {const} */
  [
    ...GD,
    "$state.eager",
    "$state.snapshot",
    "$props",
    "$props.id",
    "$bindable",
    "$effect",
    "$effect.pre",
    "$effect.tracking",
    "$effect.root",
    "$effect.pending",
    "$inspect",
    "$inspect().with",
    "$inspect.trace",
    "$host"
  ]
);
var qD = (
  /** @type {const} */
  ["textarea", "script", "style", "title"]
);
function Q_(e) {
  return qD.includes(
    /** @type {typeof RAW_TEXT_ELEMENTS[number]} */
    e
  );
}

// ../../node_modules/svelte/src/internal/client/render.js
var wc = true;
function aa(e) {
  wc = e;
}
function sa(e, t) {
  var r = t == null ? "" : typeof t === "object" ? `${t}` : t;
  if (r !== (e.__t ??= e.nodeValue)) {
    e.__t = r;
    e.nodeValue = `${r}`;
  }
}
function la(e, t) {
  return ey(e, t);
}
function Mp(e, t) {
  hc();
  t.intro = t.intro ?? false;
  const r = t.target;
  const n = ee;
  const o = de;
  try {
    var i = Ke(r);
    while (i && (i.nodeType !== Nr || /** @type {Comment} */
    i.data !== co)) {
      i = vt(i);
    }
    if (!i) {
      throw Bn;
    }
    Ue(true);
    Te(
      /** @type {Comment} */
      i
    );
    const a = ey(e, { ...t, anchor: i });
    Ue(false);
    return (
      /**  @type {Exports} */
      a
    );
  } catch (a) {
    if (a instanceof Error && a.message.split("\n").some((s) => s.startsWith("https://svelte.dev/e/"))) {
      throw a;
    }
    if (a !== Bn) {
      console.warn("Failed to hydrate: ", a);
    }
    if (t.recover === false) {
      e_();
    }
    hc();
    ms(r);
    Ue(false);
    return la(e, t);
  } finally {
    Ue(n);
    Te(o);
  }
}
var Dc = /* @__PURE__ */ new Map();
function ey(e, { target: t, anchor: r, props: n = {}, events: o, context: i, intro: a = true, transformError: s }) {
  hc();
  var l = void 0;
  var c = P_(() => {
    var f = r ?? t.appendChild(Je());
    tp(
      /** @type {TemplateNode} */
      f,
      {
        pending: () => {
        }
      },
      (d) => {
        ns({});
        var h = (
          /** @type {ComponentContext} */
          ge
        );
        if (i) h.c = i;
        if (o) {
          n.$$events = o;
        }
        if (ee) {
          Ht(
            /** @type {TemplateNode} */
            d,
            null
          );
        }
        wc = a;
        l = e(d, n) || {};
        wc = true;
        if (ee) {
          ie.nodes.end = de;
          if (de === null || de.nodeType !== Nr || /** @type {Comment} */
          de.data !== Zo) {
            ei();
            throw Bn;
          }
        }
        os();
      },
      s
    );
    var p = /* @__PURE__ */ new Set();
    var u = (d) => {
      for (var h = 0; h < d.length; h++) {
        var _ = d[h];
        if (p.has(_)) continue;
        p.add(_);
        var m = K_(_);
        for (const D of [t, document]) {
          var x = Dc.get(D);
          if (x === void 0) {
            x = /* @__PURE__ */ new Map();
            Dc.set(D, x);
          }
          var A = x.get(_);
          if (A === void 0) {
            D.addEventListener(_, Sc, { passive: m });
            x.set(_, 1);
          } else {
            x.set(_, A + 1);
          }
        }
      }
    };
    u(zi(yp));
    Tc.add(u);
    return () => {
      for (var d of p) {
        for (const m of [t, document]) {
          var h = (
            /** @type {Map<string, number>} */
            Dc.get(m)
          );
          var _ = (
            /** @type {number} */
            h.get(d)
          );
          if (--_ == 0) {
            m.removeEventListener(d, Sc);
            h.delete(d);
            if (h.size === 0) {
              Dc.delete(m);
            }
          } else {
            h.set(d, _);
          }
        }
      }
      Tc.delete(u);
      if (f !== r) {
        f.parentNode?.removeChild(f);
      }
    };
  });
  Sp.set(l, c);
  return l;
}
var Sp = /* @__PURE__ */ new WeakMap();
function ys(e, t) {
  const r = Sp.get(e);
  if (r) {
    Sp.delete(e);
    return r(t);
  }
  if (U) {
    if (st in e) {
      d_();
    } else {
      u_();
    }
  }
  return Promise.resolve();
}

// ../../node_modules/svelte/src/internal/client/dom/blocks/branches.js
var $r = class {
  /** @type {TemplateNode} */
  anchor;
  /** @type {Map<Batch, Key>} */
  #e = /* @__PURE__ */ new Map();
  /**
   * Map of keys to effects that are currently rendered in the DOM.
   * These effects are visible and actively part of the document tree.
   * Example:
   * ```
   * {#if condition}
   * 	foo
   * {:else}
   * 	bar
   * {/if}
   * ```
   * Can result in the entries `true->Effect` and `false->Effect`
   * @type {Map<Key, Effect>}
   */
  #t = /* @__PURE__ */ new Map();
  /**
   * Similar to #onscreen with respect to the keys, but contains branches that are not yet
   * in the DOM, because their insertion is deferred.
   * @type {Map<Key, Branch>}
   */
  #r = /* @__PURE__ */ new Map();
  /**
   * Keys of effects that are currently outroing
   * @type {Set<Key>}
   */
  #n = /* @__PURE__ */ new Set();
  /**
   * Whether to pause (i.e. outro) on change, or destroy immediately.
   * This is necessary for `<svelte:element>`
   */
  #o = true;
  /**
   * @param {TemplateNode} anchor
   * @param {boolean} transition
   */
  constructor(t, r = true) {
    this.anchor = t;
    this.#o = r;
  }
  #a = () => {
    var t = (
      /** @type {Batch} */
      be
    );
    if (!this.#e.has(t)) return;
    var r = (
      /** @type {Key} */
      this.#e.get(t)
    );
    var n = this.#t.get(r);
    if (n) {
      _s(n);
      this.#n.delete(r);
    } else {
      var o = this.#r.get(r);
      if (o) {
        this.#t.set(r, o.effect);
        this.#r.delete(r);
        o.fragment.lastChild.remove();
        this.anchor.before(o.fragment);
        n = o.effect;
      }
    }
    for (const [i, a] of this.#e) {
      this.#e.delete(i);
      if (i === t) {
        break;
      }
      const s = this.#r.get(a);
      if (s) {
        Le(s.effect);
        this.#r.delete(a);
      }
    }
    for (const [i, a] of this.#t) {
      if (i === r || this.#n.has(i)) continue;
      const s = () => {
        const l = Array.from(this.#e.values());
        if (l.includes(i)) {
          var c = document.createDocumentFragment();
          uc(a, c);
          c.append(Je());
          this.#r.set(i, { effect: a, fragment: c });
        } else {
          Le(a);
        }
        this.#n.delete(i);
        this.#t.delete(i);
      };
      if (this.#o || !n) {
        this.#n.add(i);
        wn(a, s, false);
      } else {
        s();
      }
    }
  };
  /**
   * @param {Batch} batch
   */
  #i = (t) => {
    this.#e.delete(t);
    const r = Array.from(this.#e.values());
    for (const [n, o] of this.#r) {
      if (!r.includes(n)) {
        Le(o.effect);
        this.#r.delete(n);
      }
    }
  };
  /**
   *
   * @param {any} key
   * @param {null | ((target: TemplateNode) => void)} fn
   */
  ensure(t, r) {
    var n = (
      /** @type {Batch} */
      be
    );
    var o = _c();
    if (r && !this.#t.has(t) && !this.#r.has(t)) {
      if (o) {
        var i = document.createDocumentFragment();
        var a = Je();
        i.append(a);
        this.#r.set(t, {
          effect: ft(() => r(a)),
          fragment: i
        });
      } else {
        this.#t.set(
          t,
          ft(() => r(this.anchor))
        );
      }
    }
    this.#e.set(n, t);
    if (o) {
      for (const [s, l] of this.#t) {
        if (s === t) {
          n.unskip_effect(l);
        } else {
          n.skip_effect(l);
        }
      }
      for (const [s, l] of this.#r) {
        if (s === t) {
          n.unskip_effect(l.effect);
        } else {
          n.skip_effect(l.effect);
        }
      }
      n.oncommit(this.#a);
      n.ondiscard(this.#i);
    } else {
      if (ee) {
        this.anchor = de;
      }
      this.#a();
    }
  }
};

// ../../node_modules/svelte/src/internal/client/dom/blocks/snippet.js
function ZD(e, t, ...r) {
  var n = new $r(e);
  Lt(() => {
    const o = t() ?? null;
    if (U && o == null) {
      t_();
    }
    n.ensure(o, o && ((i) => o(i, ...r)));
  }, Rt);
}

// ../../node_modules/svelte/src/index-client.js
if (U) {
  let e = function(t) {
    if (!(t in globalThis)) {
      let r;
      Object.defineProperty(globalThis, t, {
        configurable: true,
        // eslint-disable-next-line getter-return
        get: () => {
          if (r !== void 0) {
            return r;
          }
          n_(t);
        },
        set: (n) => {
          r = n;
        }
      });
    }
  };
  e("$state");
  e("$effect");
  e("$derived");
  e("$inspect");
  e("$props");
  e("$bindable");
}
function KU(e) {
  if (ge === null) {
    Ji("onMount");
  }
  if (Tn && ge.l !== null) {
    XD(ge).m.push(e);
  } else {
    oa(() => {
      const t = Ce(e);
      if (typeof t === "function") return (
        /** @type {() => void} */
        t
      );
    });
  }
}
function jD(e, t, { bubbles: r = false, cancelable: n = false } = {}) {
  return new CustomEvent(e, { detail: t, bubbles: r, cancelable: n });
}
function QU() {
  const e = ge;
  if (e === null) {
    Ji("createEventDispatcher");
  }
  return (t, r, n) => {
    const o = (
      /** @type {Record<string, Function | Function[]>} */
      e.s.$$events?.[
        /** @type {string} */
        t
      ]
    );
    if (o) {
      const i = Xr(o) ? o.slice() : [o];
      const a = jD(
        /** @type {string} */
        t,
        r,
        n
      );
      for (const s of i) {
        s.call(e.x, a);
      }
      return !a.defaultPrevented;
    }
    return true;
  };
}
function XD(e) {
  var t = (
    /** @type {ComponentContextLegacy} */
    e.l
  );
  return t.u ??= { a: [], b: [], m: [] };
}

// ../../node_modules/svelte/src/internal/client/dev/css.js
var ry = /* @__PURE__ */ new Map();
function ny(e, t) {
  var r = ry.get(e);
  if (!r) {
    r = /* @__PURE__ */ new Set();
    ry.set(e, r);
  }
  r.add(t);
}

// ../../node_modules/svelte/src/internal/client/dom/blocks/if.js
function ca(e, t, r = false) {
  if (ee) {
    lt();
  }
  var n = new $r(e);
  var o = r ? Rt : 0;
  function i(a, s) {
    if (ee) {
      const f = ts(e);
      var l;
      if (f === co) {
        l = 0;
      } else if (f === jr) {
        l = false;
      } else {
        l = parseInt(f.substring(1));
      }
      if (a !== l) {
        var c = vn();
        Te(c);
        n.anchor = c;
        Ue(false);
        n.ensure(a, s);
        Ue(true);
        return;
      }
    }
    n.ensure(a, s);
  }
  Lt(() => {
    var a = false;
    t((s, l = 0) => {
      a = true;
      i(l, s);
    });
    if (!a) {
      i(false, null);
    }
  }, o);
}

// ../../node_modules/svelte/src/internal/client/dom/blocks/key.js
var JD = Symbol("NaN");
function KD(e, t, r) {
  if (ee) {
    lt();
  }
  var n = new $r(e);
  var o = !kr();
  Lt(() => {
    var i = t();
    if (i !== i) {
      i = /** @type {any} */
      JD;
    }
    if (o && i !== null && typeof i === "object") {
      i = /** @type {V} */
      {};
    }
    n.ensure(i, r);
  });
}

// ../../node_modules/svelte/src/internal/client/dom/blocks/each.js
function Ec(e, t) {
  return t;
}
function QD(e, t, r) {
  var n = [];
  var o = t.length;
  var i;
  var a = t.length;
  for (var s = 0; s < o; s++) {
    let p = t[s];
    wn(
      p,
      () => {
        if (i) {
          i.pending.delete(p);
          i.done.add(p);
          if (i.pending.size === 0) {
            var u = (
              /** @type {Set<EachOutroGroup>} */
              e.outrogroups
            );
            Dp(zi(i.done));
            u.delete(i);
            if (u.size === 0) {
              e.outrogroups = null;
            }
          }
        } else {
          a -= 1;
        }
      },
      false
    );
  }
  if (a === 0) {
    var l = n.length === 0 && r !== null;
    if (l) {
      var c = (
        /** @type {Element} */
        r
      );
      var f = (
        /** @type {Element} */
        c.parentNode
      );
      ms(f);
      f.append(c);
      e.items.clear();
    }
    Dp(t, !l);
  } else {
    i = {
      pending: new Set(t),
      done: /* @__PURE__ */ new Set()
    };
    (e.outrogroups ??= /* @__PURE__ */ new Set()).add(i);
  }
}
function Dp(e, t = true) {
  for (var r = 0; r < e.length; r++) {
    Le(e[r], t);
  }
}
var oy;
function Ac(e, t, r, n, o, i = null) {
  var a = e;
  var s = /* @__PURE__ */ new Map();
  var l = (t & Fu) !== 0;
  if (l) {
    var c = (
      /** @type {Element} */
      e
    );
    a = ee ? Te(Ke(c)) : c.appendChild(Je());
  }
  if (ee) {
    lt();
  }
  var f = null;
  var p = ni(() => {
    var x = r();
    return Xr(x) ? x : x == null ? [] : zi(x);
  });
  var u;
  var d = true;
  function h() {
    m.fallback = f;
    ew(m, u, a, t, n);
    if (f !== null) {
      if (u.length === 0) {
        if ((f.f & bn) === 0) {
          _s(f);
        } else {
          f.f ^= bn;
          bs(f, null, a);
        }
      } else {
        wn(f, () => {
          f = null;
        });
      }
    }
  }
  var _ = Lt(() => {
    u = /** @type {V[]} */
    W(p);
    var x = u.length;
    let A = false;
    if (ee) {
      var D = ts(a) === jr;
      if (D !== (x === 0)) {
        a = vn();
        Te(a);
        Ue(false);
        A = true;
      }
    }
    var N = /* @__PURE__ */ new Set();
    var F = (
      /** @type {Batch} */
      be
    );
    var T = _c();
    for (var v = 0; v < x; v += 1) {
      if (ee && de.nodeType === Nr && /** @type {Comment} */
      de.data === Zo) {
        a = /** @type {Comment} */
        de;
        A = true;
        Ue(false);
      }
      var S = u[v];
      var Y = n(S, v);
      if (U) {
        var E = n(S, v);
        if (Y !== E) {
          j0(String(v), String(Y), String(E));
        }
      }
      var O = d ? null : s.get(Y);
      if (O) {
        if (O.v) nn(O.v, S);
        if (O.i) nn(O.i, v);
        if (T) {
          F.unskip_effect(O.e);
        }
      } else {
        O = tw(
          s,
          d ? a : oy ??= Je(),
          S,
          Y,
          v,
          o,
          t,
          r
        );
        if (!d) {
          O.e.f |= bn;
        }
        s.set(Y, O);
      }
      N.add(Y);
    }
    if (x === 0 && i && !f) {
      if (d) {
        f = ft(() => i(a));
      } else {
        f = ft(() => i(oy ??= Je()));
        f.f |= bn;
      }
    }
    if (x > N.size) {
      if (U) {
        rw(u, n);
      } else {
        qu("", "", "");
      }
    }
    if (ee && x > 0) {
      Te(vn());
    }
    if (!d) {
      if (T) {
        for (const [H, R] of s) {
          if (!N.has(H)) {
            F.skip_effect(R.e);
          }
        }
        F.oncommit(h);
        F.ondiscard(() => {
        });
      } else {
        h();
      }
    }
    if (A) {
      Ue(true);
    }
    W(p);
  });
  var m = { effect: _, flags: t, items: s, outrogroups: null, fallback: f };
  d = false;
  if (ee) {
    a = de;
  }
}
function xs(e) {
  while (e !== null && (e.f & bt) === 0) {
    e = e.next;
  }
  return e;
}
function ew(e, t, r, n, o) {
  var i = (n & O0) !== 0;
  var a = t.length;
  var s = e.items;
  var l = xs(e.effect.first);
  var c;
  var f = null;
  var p;
  var u = [];
  var d = [];
  var h;
  var _;
  var m;
  var x;
  if (i) {
    for (x = 0; x < a; x += 1) {
      h = t[x];
      _ = o(h, x);
      m = /** @type {EachItem} */
      s.get(_).e;
      if ((m.f & bn) === 0) {
        m.nodes?.a?.measure();
        (p ??= /* @__PURE__ */ new Set()).add(m);
      }
    }
  }
  for (x = 0; x < a; x += 1) {
    h = t[x];
    _ = o(h, x);
    m = /** @type {EachItem} */
    s.get(_).e;
    if (e.outrogroups !== null) {
      for (const E of e.outrogroups) {
        E.pending.delete(m);
        E.done.delete(m);
      }
    }
    if ((m.f & bn) !== 0) {
      m.f ^= bn;
      if (m === l) {
        bs(m, null, r);
      } else {
        var A = f ? f.next : l;
        if (m === e.effect.last) {
          e.effect.last = m.prev;
        }
        if (m.prev) m.prev.next = m.next;
        if (m.next) m.next.prev = m.prev;
        bo(e, f, m);
        bo(e, m, A);
        bs(m, A, r);
        f = m;
        u = [];
        d = [];
        l = xs(f.next);
        continue;
      }
    }
    if ((m.f & Pt) !== 0) {
      _s(m);
      if (i) {
        m.nodes?.a?.unfix();
        (p ??= /* @__PURE__ */ new Set()).delete(m);
      }
    }
    if (m !== l) {
      if (c !== void 0 && c.has(m)) {
        if (u.length < d.length) {
          var D = d[0];
          var N;
          f = D.prev;
          var F = u[0];
          var T = u[u.length - 1];
          for (N = 0; N < u.length; N += 1) {
            bs(u[N], D, r);
          }
          for (N = 0; N < d.length; N += 1) {
            c.delete(d[N]);
          }
          bo(e, F.prev, T.next);
          bo(e, f, F);
          bo(e, T, D);
          l = D;
          f = T;
          x -= 1;
          u = [];
          d = [];
        } else {
          c.delete(m);
          bs(m, l, r);
          bo(e, m.prev, m.next);
          bo(e, m, f === null ? e.effect.first : f.next);
          bo(e, f, m);
          f = m;
        }
        continue;
      }
      u = [];
      d = [];
      while (l !== null && l !== m) {
        (c ??= /* @__PURE__ */ new Set()).add(l);
        d.push(l);
        l = xs(l.next);
      }
      if (l === null) {
        continue;
      }
    }
    if ((m.f & bn) === 0) {
      u.push(m);
    }
    f = m;
    l = xs(m.next);
  }
  if (e.outrogroups !== null) {
    for (const E of e.outrogroups) {
      if (E.pending.size === 0) {
        Dp(zi(E.done));
        e.outrogroups?.delete(E);
      }
    }
    if (e.outrogroups.size === 0) {
      e.outrogroups = null;
    }
  }
  if (l !== null || c !== void 0) {
    var v = [];
    if (c !== void 0) {
      for (m of c) {
        if ((m.f & Pt) === 0) {
          v.push(m);
        }
      }
    }
    while (l !== null) {
      if ((l.f & Pt) === 0 && l !== e.fallback) {
        v.push(l);
      }
      l = xs(l.next);
    }
    var S = v.length;
    if (S > 0) {
      var Y = (n & Fu) !== 0 && a === 0 ? r : null;
      if (i) {
        for (x = 0; x < S; x += 1) {
          v[x].nodes?.a?.measure();
        }
        for (x = 0; x < S; x += 1) {
          v[x].nodes?.a?.fix();
        }
      }
      QD(e, v, Y);
    }
  }
  if (i) {
    Xe(() => {
      if (p === void 0) return;
      for (m of p) {
        m.nodes?.a?.apply();
      }
    });
  }
}
function tw(e, t, r, n, o, i, a, s) {
  var l = (a & C0) !== 0 ? (a & F0) === 0 ? yo(r, false, false) : ct(r) : null;
  var c = (a & I0) !== 0 ? ct(o) : null;
  if (U && l) {
    l.trace = () => {
      s()[c?.v ?? o];
    };
  }
  return {
    v: l,
    i: c,
    e: ft(() => {
      i(t, l ?? r, c ?? o, s);
      return () => {
        e.delete(n);
      };
    })
  };
}
function bs(e, t, r) {
  if (!e.nodes) return;
  var n = e.nodes.start;
  var o = e.nodes.end;
  var i = t && (t.f & bn) === 0 ? (
    /** @type {EffectNodes} */
    t.nodes.start
  ) : r;
  while (n !== null) {
    var a = (
      /** @type {TemplateNode} */
      vt(n)
    );
    i.before(n);
    if (n === o) {
      return;
    }
    n = a;
  }
}
function bo(e, t, r) {
  if (t === null) {
    e.effect.first = r;
  } else {
    t.next = r;
  }
  if (r === null) {
    e.effect.last = t;
  } else {
    r.prev = t;
  }
}
function rw(e, t) {
  const r = /* @__PURE__ */ new Map();
  const n = e.length;
  for (let o = 0; o < n; o++) {
    const i = t(e[o], o);
    if (r.has(i)) {
      const a = String(r.get(i));
      const s = String(o);
      let l = String(i);
      if (l.startsWith("[object ")) l = null;
      qu(a, s, l);
    }
    r.set(i, o);
  }
}

// ../../node_modules/svelte/src/internal/client/dom/blocks/slot.js
function nw(e, t, r, n, o) {
  if (ee) {
    lt();
  }
  var i = t.$$slots?.[r];
  var a = false;
  if (i === true) {
    i = t[r === "default" ? "children" : r];
    a = true;
  }
  if (i === void 0) {
    if (o !== null) {
      o(e);
    }
  } else {
    i(e, a ? () => n : n);
  }
}

// ../../node_modules/svelte/src/internal/client/dom/elements/transitions.js
var iw = null;
function wp(e) {
  iw = e;
}

// ../../node_modules/svelte/src/internal/client/dom/blocks/svelte-element.js
function aw(e, t, r, n, o, i) {
  let a = ee;
  if (ee) {
    lt();
  }
  var s = U && i && ge?.function[ur];
  var l = null;
  if (ee && de.nodeType === Jl) {
    l = /** @type {Element} */
    de;
    lt();
  }
  var c = (
    /** @type {TemplateNode} */
    ee ? de : e
  );
  var f = (
    /** @type {Effect} */
    ie
  );
  var p = new $r(c, false);
  Lt(() => {
    const u = t() || null;
    var d = o ? o() : r || u === "svg" ? Qa : void 0;
    if (u === null) {
      p.ensure(null, null);
      aa(true);
      return;
    }
    p.ensure(u, (h) => {
      if (u) {
        l = ee ? (
          /** @type {Element} */
          l
        ) : an(u, d);
        if (U && i) {
          l.__svelte_meta = {
            parent: Yr,
            loc: {
              file: s,
              line: i[0],
              column: i[1]
            }
          };
        }
        Ht(l, l);
        if (n) {
          if (ee && Q_(u)) {
            l.append(document.createComment(""));
          }
          var _ = ee ? Ke(l) : l.appendChild(Je());
          if (ee) {
            if (_ === null) {
              Ue(false);
            } else {
              Te(_);
            }
          }
          wp(f);
          n(l, _);
          wp(null);
        }
        ie.nodes.end = l;
        h.before(l);
      }
      if (ee) {
        Te(h);
      }
    });
    aa(true);
    return () => {
      if (u) {
        aa(false);
      }
    };
  }, Rt);
  gt(() => {
    aa(true);
  });
  if (a) {
    Ue(true);
    Te(c);
  }
}

// ../../node_modules/svelte/src/internal/client/dom/css.js
function Ep(e, t) {
  Vt(() => {
    var r = e.getRootNode();
    var n = (
      /** @type {ShadowRoot} */
      r.host ? (
        /** @type {ShadowRoot} */
        r
      ) : (
        /** @type {Document} */
        r.head ?? /** @type {Document} */
        r.ownerDocument.head
      )
    );
    if (!n.querySelector("#" + t.hash)) {
      const o = an("style");
      o.id = t.hash;
      o.textContent = t.code;
      n.appendChild(o);
      if (U) {
        ny(t.hash, o);
      }
    }
  });
}

// ../../node_modules/svelte/src/internal/client/dom/elements/attachments.js
function Nc(e, t) {
  var r = void 0;
  var n;
  yc(() => {
    if (r !== (r = t())) {
      if (n) {
        Le(n);
        n = null;
      }
      if (r) {
        n = ft(() => {
          Vt(() => (
            /** @type {(node: Element) => void} */
            r(e)
          ));
        });
      }
    }
  });
}

// ../../node_modules/clsx/dist/clsx.mjs
function iy(e) {
  var t, r, n = "";
  if ("string" == typeof e || "number" == typeof e) n += e;
  else if ("object" == typeof e) if (Array.isArray(e)) {
    var o = e.length;
    for (t = 0; t < o; t++) e[t] && (r = iy(e[t])) && (n && (n += " "), n += r);
  } else for (r in e) e[r] && (n && (n += " "), n += r);
  return n;
}
function ay() {
  for (var e, t, r = 0, n = "", o = arguments.length; r < o; r++) (e = arguments[r]) && (t = iy(e)) && (n && (n += " "), n += t);
  return n;
}

// ../../node_modules/svelte/src/internal/shared/attributes.js
function Np(e) {
  if (typeof e === "object") {
    return ay(e);
  } else {
    return e ?? "";
  }
}
var sy = [..." 	\n\r\f\xA0\v\uFEFF"];
function cy(e, t, r) {
  var n = e == null ? "" : "" + e;
  if (t) {
    n = n ? n + " " + t : t;
  }
  if (r) {
    for (var o of Object.keys(r)) {
      if (r[o]) {
        n = n ? n + " " + o : o;
      } else if (n.length) {
        var i = o.length;
        var a = 0;
        while ((a = n.indexOf(o, a)) >= 0) {
          var s = a + i;
          if ((a === 0 || sy.includes(n[a - 1])) && (s === n.length || sy.includes(n[s]))) {
            n = (a === 0 ? "" : n.substring(0, a)) + n.substring(s + 1);
          } else {
            a = s;
          }
        }
      }
    }
  }
  return n === "" ? null : n;
}
function ly(e, t = false) {
  var r = t ? " !important;" : ";";
  var n = "";
  for (var o of Object.keys(e)) {
    var i = e[o];
    if (i != null && i !== "") {
      n += " " + o + ": " + i + r;
    }
  }
  return n;
}
function Ap(e) {
  if (e[0] !== "-" || e[1] !== "-") {
    return e.toLowerCase();
  }
  return e;
}
function fy(e, t) {
  if (t) {
    var r = "";
    var n;
    var o;
    if (Array.isArray(t)) {
      n = t[0];
      o = t[1];
    } else {
      n = t;
    }
    if (e) {
      e = String(e).replaceAll(/\s*\/\*.*?\*\/\s*/g, "").trim();
      var i = false;
      var a = 0;
      var s = false;
      var l = [];
      if (n) {
        l.push(...Object.keys(n).map(Ap));
      }
      if (o) {
        l.push(...Object.keys(o).map(Ap));
      }
      var c = 0;
      var f = -1;
      const _ = e.length;
      for (var p = 0; p < _; p++) {
        var u = e[p];
        if (s) {
          if (u === "/" && e[p - 1] === "*") {
            s = false;
          }
        } else if (i) {
          if (i === u) {
            i = false;
          }
        } else if (u === "/" && e[p + 1] === "*") {
          s = true;
        } else if (u === '"' || u === "'") {
          i = u;
        } else if (u === "(") {
          a++;
        } else if (u === ")") {
          a--;
        }
        if (!s && i === false && a === 0) {
          if (u === ":" && f === -1) {
            f = p;
          } else if (u === ";" || p === _ - 1) {
            if (f !== -1) {
              var d = Ap(e.substring(c, f).trim());
              if (!l.includes(d)) {
                if (u !== ";") {
                  p++;
                }
                var h = e.substring(c, p).trim();
                r += " " + h + ";";
              }
            }
            c = p + 1;
            f = -1;
          }
        }
      }
    }
    if (n) {
      r += ly(n);
    }
    if (o) {
      r += ly(o, true);
    }
    r = r.trim();
    return r === "" ? null : r;
  }
  return e == null ? null : String(e);
}

// ../../node_modules/svelte/src/internal/client/dom/elements/class.js
function fa(e, t, r, n, o, i) {
  var a = e.__className;
  if (ee || a !== r || a === void 0) {
    var s = cy(r, n, i);
    if (!ee || s !== e.getAttribute("class")) {
      if (s == null) {
        e.removeAttribute("class");
      } else if (t) {
        e.className = s;
      } else {
        e.setAttribute("class", s);
      }
    }
    e.__className = r;
  } else if (i && o !== i) {
    for (var l in i) {
      var c = !!i[l];
      if (o == null || c !== !!o[l]) {
        e.classList.toggle(l, c);
      }
    }
  }
  return i;
}

// ../../node_modules/svelte/src/internal/client/dom/elements/style.js
function Yp(e, t = {}, r, n) {
  for (var o in r) {
    var i = r[o];
    if (t[o] !== i) {
      if (r[o] == null) {
        e.style.removeProperty(o);
      } else {
        e.style.setProperty(o, i, n);
      }
    }
  }
}
function ci(e, t, r, n) {
  var o = e.__style;
  if (ee || o !== t) {
    var i = fy(t, n);
    if (!ee || i !== e.getAttribute("style")) {
      if (i == null) {
        e.removeAttribute("style");
      } else {
        e.style.cssText = i;
      }
    }
    e.__style = t;
  } else if (n) {
    if (Array.isArray(n)) {
      Yp(e, r?.[0], n[0]);
      Yp(e, r?.[1], n[1], "important");
    } else {
      Yp(e, r, n);
    }
  }
  return n;
}

// ../../node_modules/svelte/src/internal/client/dom/elements/bindings/select.js
function vs(e, t, r = false) {
  if (e.multiple) {
    if (t == void 0) {
      return;
    }
    if (!Xr(t)) {
      return p_();
    }
    for (var n of e.options) {
      n.selected = t.includes(uy(n));
    }
    return;
  }
  for (n of e.options) {
    var o = uy(n);
    if (fp(o, t)) {
      n.selected = true;
      return;
    }
  }
  if (!r || t !== void 0) {
    e.selectedIndex = -1;
  }
}
function kp(e) {
  var t = new MutationObserver(() => {
    vs(e, e.__value);
  });
  t.observe(e, {
    // Listen to option element changes
    childList: true,
    subtree: true,
    // because of <optgroup>
    // Listen to option element value attribute changes
    // (doesn't get notified of select value changes,
    // because that property is not reflected as an attribute)
    attributes: true,
    attributeFilter: ["value"]
  });
  gt(() => {
    t.disconnect();
  });
}
function uy(e) {
  if ("__value" in e) {
    return e.__value;
  } else {
    return e.value;
  }
}

// ../../node_modules/svelte/src/internal/client/dom/elements/attributes.js
var ua = Symbol("class");
var pa = Symbol("style");
var my = Symbol("is custom element");
var hy = Symbol("is html");
var lw = Xi ? "link" : "LINK";
var cw = Xi ? "input" : "INPUT";
var fw = Xi ? "option" : "OPTION";
var uw = Xi ? "select" : "SELECT";
function gy(e) {
  if (!ee) return;
  var t = false;
  var r = () => {
    if (t) return;
    t = true;
    if (e.hasAttribute("value")) {
      var n = e.value;
      Ts(e, "value", null);
      e.value = n;
    }
    if (e.hasAttribute("checked")) {
      var o = e.checked;
      Ts(e, "checked", null);
      e.checked = o;
    }
  };
  e.__on_r = r;
  Xe(r);
  dp();
}
function _y(e, t) {
  if (t) {
    if (!e.hasAttribute("selected")) {
      e.setAttribute("selected", "");
    }
  } else {
    e.removeAttribute("selected");
  }
}
function Ts(e, t, r, n) {
  var o = yy(e);
  if (ee) {
    o[t] = e.getAttribute(t);
    if (t === "src" || t === "srcset" || t === "href" && e.nodeName === lw) {
      if (!n) {
        mw(e, t, r ?? "");
      }
      return;
    }
  }
  if (o[t] === (o[t] = r)) return;
  if (t === "loading") {
    e[z0] = r;
  }
  if (r == null) {
    e.removeAttribute(t);
  } else if (typeof r !== "string" && xy(e).includes(t)) {
    e[t] = r;
  } else {
    e.setAttribute(t, r);
  }
}
function pw(e, t, r, n, o = false, i = false) {
  if (ee && o && e.nodeName === cw) {
    var a = (
      /** @type {HTMLInputElement} */
      e
    );
    var s = a.type === "checkbox" ? "defaultChecked" : "defaultValue";
    if (!(s in r)) {
      gy(a);
    }
  }
  var l = yy(e);
  var c = l[my];
  var f = !l[hy];
  let p = ee && c;
  if (p) {
    Ue(false);
  }
  var u = t || {};
  var d = e.nodeName === fw;
  for (var h in t) {
    if (!(h in r)) {
      r[h] = null;
    }
  }
  if (r.class) {
    r.class = Np(r.class);
  } else if (n || r[ua]) {
    r.class = null;
  }
  if (r[pa]) {
    r.style ??= null;
  }
  var _ = xy(e);
  for (const T in r) {
    let v = r[T];
    if (d && T === "value" && v == null) {
      e.value = e.__value = "";
      u[T] = v;
      continue;
    }
    if (T === "class") {
      var m = e.namespaceURI === "http://www.w3.org/1999/xhtml";
      fa(e, m, v, n, t?.[ua], r[ua]);
      u[T] = v;
      u[ua] = r[ua];
      continue;
    }
    if (T === "style") {
      ci(e, v, t?.[pa], r[pa]);
      u[T] = v;
      u[pa] = r[pa];
      continue;
    }
    var x = u[T];
    if (v === x && !(v === void 0 && e.hasAttribute(T))) {
      continue;
    }
    u[T] = v;
    var A = T[0] + T[1];
    if (A === "$$") continue;
    if (A === "on") {
      const S = {};
      const Y = "$$" + T;
      let E = T.slice(2);
      var D = X_(E);
      if (j_(E)) {
        E = E.slice(0, -7);
        S.capture = true;
      }
      if (!D && x) {
        if (v != null) continue;
        e.removeEventListener(E, u[Y], S);
        u[Y] = null;
      }
      if (D) {
        bp(E, e, v);
        vp([E]);
      } else if (v != null) {
        let O = function(H) {
          u[T].call(this, H);
        };
        u[Y] = xp(E, e, O, S);
      }
    } else if (T === "style") {
      Ts(e, T, v);
    } else if (T === "autofocus") {
      pp(
        /** @type {HTMLElement} */
        e,
        Boolean(v)
      );
    } else if (!c && (T === "__value" || T === "value" && v != null)) {
      e.value = e.__value = v;
    } else if (T === "selected" && d) {
      _y(
        /** @type {HTMLOptionElement} */
        e,
        v
      );
    } else {
      var N = T;
      if (!f) {
        N = J_(N);
      }
      var F = N === "defaultValue" || N === "defaultChecked";
      if (v == null && !c && !F) {
        l[T] = null;
        if (N === "value" || N === "checked") {
          let S = (
            /** @type {HTMLInputElement} */
            e
          );
          const Y = t === void 0;
          if (N === "value") {
            let E = S.defaultValue;
            S.removeAttribute(N);
            S.defaultValue = E;
            S.value = S.__value = Y ? E : null;
          } else {
            let E = S.defaultChecked;
            S.removeAttribute(N);
            S.defaultChecked = E;
            S.checked = Y ? E : false;
          }
        } else {
          e.removeAttribute(T);
        }
      } else if (F || _.includes(N) && (c || typeof v !== "string")) {
        e[N] = v;
        if (N in l) l[N] = Fe;
      } else if (typeof v !== "function") {
        Ts(e, N, v, i);
      }
    }
  }
  if (p) {
    Ue(true);
  }
  return u;
}
function dw(e, t, r = [], n = [], o = [], i, a = false, s = false) {
  ls(o, r, n, (l) => {
    var c = void 0;
    var f = {};
    var p = e.nodeName === uw;
    var u = false;
    yc(() => {
      var h = t(...l.map(W));
      var _ = pw(
        e,
        c,
        h,
        i,
        a,
        s
      );
      if (u && p && "value" in h) {
        vs(
          /** @type {HTMLSelectElement} */
          e,
          h.value
        );
      }
      for (let x of Object.getOwnPropertySymbols(f)) {
        if (!h[x]) Le(f[x]);
      }
      for (let x of Object.getOwnPropertySymbols(h)) {
        var m = h[x];
        if (x.description === Bu && (!c || m !== c[x])) {
          if (f[x]) Le(f[x]);
          f[x] = ft(() => Nc(e, () => m));
        }
        _[x] = m;
      }
      c = _;
    });
    if (p) {
      var d = (
        /** @type {HTMLSelectElement} */
        e
      );
      Vt(() => {
        vs(
          d,
          /** @type {Record<string | symbol, any>} */
          c.value,
          true
        );
        kp(d);
      });
    }
    u = true;
  });
}
function yy(e) {
  return (
    /** @type {Record<string | symbol, unknown>} **/
    // @ts-expect-error
    e.__attributes ??= {
      [my]: e.nodeName.includes("-"),
      [hy]: e.namespaceURI === zl
    }
  );
}
var py = /* @__PURE__ */ new Map();
function xy(e) {
  var t = e.getAttribute("is") || e.nodeName;
  var r = py.get(t);
  if (r) return r;
  py.set(t, r = []);
  var n;
  var o = e;
  var i = Element.prototype;
  while (i !== o) {
    n = Wl(o);
    for (var a in n) {
      if (n[a].set) {
        r.push(a);
      }
    }
    o = jo(o);
  }
  return r;
}
function mw(e, t, r) {
  if (!U) return;
  if (t === "srcset" && hw(e, r)) return;
  if (Cp(e.getAttribute(t) ?? "", r)) return;
  f_(
    t,
    e.outerHTML.replace(e.innerHTML, e.innerHTML && "..."),
    String(r)
  );
}
function Cp(e, t) {
  if (e === t) return true;
  return new URL(e, document.baseURI).href === new URL(t, document.baseURI).href;
}
function dy(e) {
  return e.split(",").map((t) => t.trim().split(" ").filter(Boolean));
}
function hw(e, t) {
  var r = dy(e.srcset);
  var n = dy(t);
  return n.length === r.length && n.every(
    ([o, i], a) => i === r[a][1] && // We need to test both ways because Vite will create an a full URL with
    // `new URL(asset, import.meta.url).href` for the client when `base: './'`, and the
    // relative URLs inside srcset are not automatically resolved to absolute URLs by
    // browsers (in contrast to img.src). This means both SSR and DOM code could
    // contain relative or absolute URLs.
    (Cp(r[a][0], o) || Cp(o, r[a][0]))
  );
}

// ../../node_modules/svelte/src/internal/client/dom/elements/bindings/size.js
var Ip = class e {
  /** */
  #e = /* @__PURE__ */ new WeakMap();
  /** @type {ResizeObserver | undefined} */
  #t;
  /** @type {ResizeObserverOptions} */
  #r;
  /** @static */
  static entries = /* @__PURE__ */ new WeakMap();
  /** @param {ResizeObserverOptions} options */
  constructor(t) {
    this.#r = t;
  }
  /**
   * @param {Element} element
   * @param {(entry: ResizeObserverEntry) => any} listener
   */
  observe(t, r) {
    var n = this.#e.get(t) || /* @__PURE__ */ new Set();
    n.add(r);
    this.#e.set(t, n);
    this.#n().observe(t, this.#r);
    return () => {
      var o = this.#e.get(t);
      o.delete(r);
      if (o.size === 0) {
        this.#e.delete(t);
        this.#t.unobserve(t);
      }
    };
  }
  #n() {
    return this.#t ?? (this.#t = new ResizeObserver(
      /** @param {any} entries */
      (t) => {
        for (var r of t) {
          e.entries.set(r.target, r);
          for (var n of this.#e.get(r.target) || []) {
            n(r);
          }
        }
      }
    ));
  }
};
var gw = /* @__PURE__ */ new Ip({
  box: "border-box"
});
function _w(e, t, r) {
  var n = gw.observe(e, () => r(e[t]));
  Vt(() => {
    Ce(() => r(e[t]));
    return n;
  });
}

// ../../node_modules/svelte/src/internal/client/dom/elements/bindings/this.js
function by(e, t) {
  return e === t || e?.[st] === t;
}
function yw(e = {}, t, r, n) {
  Vt(() => {
    var o;
    var i;
    Bt(() => {
      o = i;
      i = n?.() || [];
      Ce(() => {
        if (e !== r(...i)) {
          t(e, ...i);
          if (o && by(r(...o), e)) {
            t(null, ...o);
          }
        }
      });
    });
    return () => {
      Xe(() => {
        if (i && by(r(...i), e)) {
          t(null, ...i);
        }
      });
    };
  });
  return e;
}

// ../../node_modules/svelte/src/internal/client/dom/legacy/lifecycle.js
function xw(e = false) {
  const t = (
    /** @type {ComponentContextLegacy} */
    ge
  );
  const r = t.l.u;
  if (!r) return;
  let n = () => vc(t.s);
  if (e) {
    let o = 0;
    let i = (
      /** @type {Record<string, any>} */
      {}
    );
    const a = _o(() => {
      let s = false;
      const l = t.s;
      for (const c in l) {
        if (l[c] !== i[c]) {
          i[c] = l[c];
          s = true;
        }
      }
      if (s) o++;
      return o;
    });
    n = () => W(a);
  }
  if (r.b.length) {
    gs(() => {
      Ty(t, n);
      Wi(r.b);
    });
  }
  oa(() => {
    const o = Ce(() => r.m.map(q0));
    return () => {
      for (const i of o) {
        if (typeof i === "function") {
          i();
        }
      }
    };
  });
  if (r.a.length) {
    oa(() => {
      Ty(t, n);
      Wi(r.a);
    });
  }
}
function Ty(e, t) {
  if (e.l.s) {
    for (const r of e.l.s) W(r);
  }
  t();
}

// ../../node_modules/svelte/src/store/utils.js
function kc(e, t, r) {
  if (e == null) {
    t(void 0);
    if (r) r(void 0);
    return Ot;
  }
  const n = Ce(
    () => e.subscribe(
      t,
      // @ts-expect-error
      r
    )
  );
  return n.unsubscribe ? () => n.unsubscribe() : n;
}

// ../../node_modules/svelte/src/store/shared/index.js
var da = [];
function zZ(e, t = Ot) {
  let r = null;
  const n = /* @__PURE__ */ new Set();
  function o(s) {
    if (ec(e, s)) {
      e = s;
      if (r) {
        const l = !da.length;
        for (const c of n) {
          c[1]();
          da.push(c, e);
        }
        if (l) {
          for (let c = 0; c < da.length; c += 2) {
            da[c][0](da[c + 1]);
          }
          da.length = 0;
        }
      }
    }
  }
  function i(s) {
    o(s(
      /** @type {T} */
      e
    ));
  }
  function a(s, l = Ot) {
    const c = [s, l];
    n.add(c);
    if (n.size === 1) {
      r = t(o, i) || Ot;
    }
    s(
      /** @type {T} */
      e
    );
    return () => {
      n.delete(c);
      if (n.size === 0 && r) {
        r();
        r = null;
      }
    };
  }
  return { set: o, update: i, subscribe: a };
}
function Sy(e) {
  let t;
  kc(e, (r) => t = r)();
  return t;
}

// ../../node_modules/svelte/src/internal/client/reactivity/store.js
var Cc = false;
var Op = Symbol();
function bw(e, t, r) {
  const n = r[t] ??= {
    store: null,
    source: yo(void 0),
    unsubscribe: Ot
  };
  if (U) {
    n.source.label = t;
  }
  if (n.store !== e && !(Op in r)) {
    n.unsubscribe();
    n.store = e ?? null;
    if (e == null) {
      n.source.v = void 0;
      n.unsubscribe = Ot;
    } else {
      var o = true;
      n.unsubscribe = kc(e, (i) => {
        if (o) {
          n.source.v = i;
        } else {
          Ie(n.source, i);
        }
      });
      o = false;
    }
  }
  if (e && Op in r) {
    return Sy(e);
  }
  return W(n.source);
}
function vw(e, t) {
  e.set(t);
  return t;
}
function Tw() {
  const e = {};
  function t() {
    gt(() => {
      for (var r in e) {
        const n = e[r];
        n.unsubscribe();
      }
      xt(e, Op, {
        enumerable: false,
        value: true
      });
    });
  }
  return [e, t];
}
function Fp(e) {
  var t = Cc;
  try {
    Cc = false;
    return [e(), Cc];
  } finally {
    Cc = t;
  }
}

// ../../node_modules/svelte/src/internal/client/reactivity/props.js
var Sw = {
  get(e, t) {
    if (e.exclude.includes(t)) return;
    W(e.version);
    return t in e.special ? e.special[t]() : e.props[t];
  },
  set(e, t, r) {
    if (!(t in e.special)) {
      var n = ie;
      try {
        pt(e.parent_effect);
        e.special[t] = An(
          {
            get [t]() {
              return e.props[t];
            }
          },
          /** @type {string} */
          t,
          Pu
        );
      } finally {
        pt(n);
      }
    }
    e.special[t](r);
    as(e.version);
    return true;
  },
  getOwnPropertyDescriptor(e, t) {
    if (e.exclude.includes(t)) return;
    if (t in e.props) {
      return {
        enumerable: true,
        configurable: true,
        value: e.props[t]
      };
    }
  },
  deleteProperty(e, t) {
    if (e.exclude.includes(t)) return true;
    e.exclude.push(t);
    as(e.version);
    return true;
  },
  has(e, t) {
    if (e.exclude.includes(t)) return false;
    return t in e.props;
  },
  ownKeys(e) {
    return Reflect.ownKeys(e.props).filter((t) => !e.exclude.includes(t));
  }
};
function Mw(e, t) {
  return new Proxy(
    {
      props: e,
      exclude: t,
      special: {},
      version: ct(0),
      // TODO this is only necessary because we need to track component
      // destruction inside `prop`, because of `bind:this`, but it
      // seems likely that we can simplify `bind:this` instead
      parent_effect: (
        /** @type {Effect} */
        ie
      )
    },
    Sw
  );
}
var Dw = {
  get(e, t) {
    let r = e.props.length;
    while (r--) {
      let n = e.props[r];
      if (Xo(n)) n = n();
      if (typeof n === "object" && n !== null && t in n) return n[t];
    }
  },
  set(e, t, r) {
    let n = e.props.length;
    while (n--) {
      let o = e.props[n];
      if (Xo(o)) o = o();
      const i = It(o, t);
      if (i && i.set) {
        i.set(r);
        return true;
      }
    }
    return false;
  },
  getOwnPropertyDescriptor(e, t) {
    let r = e.props.length;
    while (r--) {
      let n = e.props[r];
      if (Xo(n)) n = n();
      if (typeof n === "object" && n !== null && t in n) {
        const o = It(n, t);
        if (o && !o.configurable) {
          o.configurable = true;
        }
        return o;
      }
    }
  },
  has(e, t) {
    if (t === st || t === ji) return false;
    for (let r of e.props) {
      if (Xo(r)) r = r();
      if (r != null && t in r) return true;
    }
    return false;
  },
  ownKeys(e) {
    const t = [];
    for (let r of e.props) {
      if (Xo(r)) r = r();
      if (!r) continue;
      for (const n in r) {
        if (!t.includes(n)) t.push(n);
      }
      for (const n of Object.getOwnPropertySymbols(r)) {
        if (!t.includes(n)) t.push(n);
      }
    }
    return t;
  }
};
function ww(...e) {
  return new Proxy({ props: e }, Dw);
}
function An(e, t, r, n) {
  var o = !Tn || (r & R0) !== 0;
  var i = (r & $0) !== 0;
  var a = (r & B0) !== 0;
  var s = (
    /** @type {V} */
    n
  );
  var l = true;
  var c = () => {
    if (l) {
      l = false;
      s = a ? Ce(
        /** @type {() => V} */
        n
      ) : (
        /** @type {V} */
        n
      );
    }
    return s;
  };
  var f;
  if (i) {
    var p = st in e || ji in e;
    f = It(e, t)?.set ?? (p && t in e ? (D) => e[t] = D : void 0);
  }
  var u;
  var d = false;
  if (i) {
    [u, d] = Fp(() => (
      /** @type {V} */
      e[t]
    ));
  } else {
    u = /** @type {V} */
    e[t];
  }
  if (u === void 0 && n !== void 0) {
    u = c();
    if (f) {
      if (o) r_(t);
      f(u);
    }
  }
  var h;
  if (o) {
    h = () => {
      var D = (
        /** @type {V} */
        e[t]
      );
      if (D === void 0) return c();
      l = true;
      return D;
    };
  } else {
    h = () => {
      var D = (
        /** @type {V} */
        e[t]
      );
      if (D !== void 0) {
        s = /** @type {V} */
        void 0;
      }
      return D === void 0 ? s : D;
    };
  }
  if (o && (r & Pu) === 0) {
    return h;
  }
  if (f) {
    var _ = e.$$legacy;
    return (
      /** @type {() => V} */
      function(D, N) {
        if (arguments.length > 0) {
          if (!o || !N || _ || d) {
            f(N ? h() : D);
          }
          return D;
        }
        return h();
      }
    );
  }
  var m = false;
  var x = ((r & P0) !== 0 ? _o : ni)(() => {
    m = false;
    return h();
  });
  if (U) {
    x.label = t;
  }
  if (i) W(x);
  var A = (
    /** @type {Effect} */
    ie
  );
  return (
    /** @type {() => V} */
    function(D, N) {
      if (arguments.length > 0) {
        const F = N ? W(x) : o && i ? on(D) : D;
        Ie(x, F);
        m = true;
        if (s !== void 0) {
          s = F;
        }
        return D;
      }
      if (Or && m || (A.f & Zt) !== 0) {
        return x.v;
      }
      return W(x);
    }
  );
}

// ../../node_modules/svelte/src/legacy/legacy-client.js
function My(e) {
  return new Pp(e);
}
var Pp = class {
  /** @type {any} */
  #e;
  /** @type {Record<string, any>} */
  #t;
  /**
   * @param {ComponentConstructorOptions & {
   *  component: any;
   * }} options
   */
  constructor(t) {
    var r = /* @__PURE__ */ new Map();
    var n = (i, a) => {
      var s = yo(a, false, false);
      r.set(i, s);
      return s;
    };
    const o = new Proxy(
      { ...t.props || {}, $$events: {} },
      {
        get(i, a) {
          return W(r.get(a) ?? n(a, Reflect.get(i, a)));
        },
        has(i, a) {
          if (a === ji) return true;
          W(r.get(a) ?? n(a, Reflect.get(i, a)));
          return Reflect.has(i, a);
        },
        set(i, a, s) {
          Ie(r.get(a) ?? n(a, s), s);
          return Reflect.set(i, a, s);
        }
      }
    );
    this.#t = (t.hydrate ? Mp : la)(t.component, {
      target: t.target,
      anchor: t.anchor,
      props: o,
      context: t.context,
      intro: t.intro ?? false,
      recover: t.recover,
      transformError: t.transformError
    });
    if (!jt && (!t?.props?.$$host || t.sync === false)) {
      ta();
    }
    this.#e = o.$$events;
    for (const i of Object.keys(this.#t)) {
      if (i === "$set" || i === "$destroy" || i === "$on") continue;
      xt(this, i, {
        get() {
          return this.#t[i];
        },
        /** @param {any} value */
        set(a) {
          this.#t[i] = a;
        },
        enumerable: true
      });
    }
    this.#t.$set = /** @param {Record<string, any>} next */
    (i) => {
      Object.assign(o, i);
    };
    this.#t.$destroy = () => {
      ys(this.#t);
    };
  }
  /** @param {Record<string, any>} props */
  $set(t) {
    this.#t.$set(t);
  }
  /**
   * @param {string} event
   * @param {(...args: any[]) => any} callback
   * @returns {any}
   */
  $on(t, r) {
    this.#e[t] = this.#e[t] || [];
    const n = (...o) => r.call(this, ...o);
    this.#e[t].push(n);
    return () => {
      this.#e[t] = this.#e[t].filter(
        /** @param {any} fn */
        (o) => o !== n
      );
    };
  }
  $destroy() {
    this.#t.$destroy();
  }
};

// ../../node_modules/svelte/src/internal/client/dom/elements/custom-element.js
var Ow;
if (typeof HTMLElement === "function") {
  Ow = class extends HTMLElement {
    /** The Svelte component constructor */
    $$ctor;
    /** Slots */
    $$s;
    /** @type {any} The Svelte component instance */
    $$c;
    /** Whether or not the custom element is connected */
    $$cn = false;
    /** @type {Record<string, any>} Component props data */
    $$d = {};
    /** `true` if currently in the process of reflecting component props back to attributes */
    $$r = false;
    /** @type {Record<string, CustomElementPropDefinition>} Props definition (name, reflected, type etc) */
    $$p_d = {};
    /** @type {Record<string, EventListenerOrEventListenerObject[]>} Event listeners */
    $$l = {};
    /** @type {Map<EventListenerOrEventListenerObject, Function>} Event listener unsubscribe functions */
    $$l_u = /* @__PURE__ */ new Map();
    /** @type {any} The managed render effect for reflecting attributes */
    $$me;
    /** @type {ShadowRoot | null} The ShadowRoot of the custom element */
    $$shadowRoot = null;
    /**
     * @param {*} $$componentCtor
     * @param {*} $$slots
     * @param {ShadowRootInit | undefined} shadow_root_init
     */
    constructor(e, t, r) {
      super();
      this.$$ctor = e;
      this.$$s = t;
      if (r) {
        this.$$shadowRoot = this.attachShadow(r);
      }
    }
    /**
     * @param {string} type
     * @param {EventListenerOrEventListenerObject} listener
     * @param {boolean | AddEventListenerOptions} [options]
     */
    addEventListener(e, t, r) {
      this.$$l[e] = this.$$l[e] || [];
      this.$$l[e].push(t);
      if (this.$$c) {
        const n = this.$$c.$on(e, t);
        this.$$l_u.set(t, n);
      }
      super.addEventListener(e, t, r);
    }
    /**
     * @param {string} type
     * @param {EventListenerOrEventListenerObject} listener
     * @param {boolean | AddEventListenerOptions} [options]
     */
    removeEventListener(e, t, r) {
      super.removeEventListener(e, t, r);
      if (this.$$c) {
        const n = this.$$l_u.get(t);
        if (n) {
          n();
          this.$$l_u.delete(t);
        }
      }
    }
    async connectedCallback() {
      this.$$cn = true;
      if (!this.$$c) {
        let e = function(n) {
          return (o) => {
            const i = an("slot");
            if (n !== "default") i.name = n;
            Rr(o, i);
          };
        };
        await Promise.resolve();
        if (!this.$$cn || this.$$c) {
          return;
        }
        const t = {};
        const r = Fw(this);
        for (const n of this.$$s) {
          if (n in r) {
            if (n === "default" && !this.$$d.children) {
              this.$$d.children = e(n);
              t.default = true;
            } else {
              t[n] = e(n);
            }
          }
        }
        for (const n of this.attributes) {
          const o = this.$$g_p(n.name);
          if (!(o in this.$$d)) {
            this.$$d[o] = Rp(o, n.value, this.$$p_d, "toProp");
          }
        }
        for (const n in this.$$p_d) {
          if (!(n in this.$$d) && this[n] !== void 0) {
            this.$$d[n] = this[n];
            delete this[n];
          }
        }
        this.$$c = My({
          component: this.$$ctor,
          target: this.$$shadowRoot || this,
          props: {
            ...this.$$d,
            $$slots: t,
            $$host: this
          }
        });
        this.$$me = gp(() => {
          Bt(() => {
            this.$$r = true;
            for (const n of Lu(this.$$c)) {
              if (!this.$$p_d[n]?.reflect) continue;
              this.$$d[n] = this.$$c[n];
              const o = Rp(
                n,
                this.$$d[n],
                this.$$p_d,
                "toAttribute"
              );
              if (o == null) {
                this.removeAttribute(this.$$p_d[n].attribute || n);
              } else {
                this.setAttribute(this.$$p_d[n].attribute || n, o);
              }
            }
            this.$$r = false;
          });
        });
        for (const n in this.$$l) {
          for (const o of this.$$l[n]) {
            const i = this.$$c.$on(n, o);
            this.$$l_u.set(o, i);
          }
        }
        this.$$l = {};
      }
    }
    // We don't need this when working within Svelte code, but for compatibility of people using this outside of Svelte
    // and setting attributes through setAttribute etc, this is helpful
    /**
     * @param {string} attr
     * @param {string} _oldValue
     * @param {string} newValue
     */
    attributeChangedCallback(e, t, r) {
      if (this.$$r) return;
      e = this.$$g_p(e);
      this.$$d[e] = Rp(e, r, this.$$p_d, "toProp");
      this.$$c?.$set({ [e]: this.$$d[e] });
    }
    disconnectedCallback() {
      this.$$cn = false;
      Promise.resolve().then(() => {
        if (!this.$$cn && this.$$c) {
          this.$$c.$destroy();
          this.$$me();
          this.$$c = void 0;
        }
      });
    }
    /**
     * @param {string} attribute_name
     */
    $$g_p(e) {
      return Lu(this.$$p_d).find(
        (t) => this.$$p_d[t].attribute === e || !this.$$p_d[t].attribute && t.toLowerCase() === e
      ) || e;
    }
  };
}
function Rp(e, t, r, n) {
  const o = r[e]?.type;
  t = o === "Boolean" && typeof t !== "boolean" ? t != null : t;
  if (!n || !r[e]) {
    return t;
  } else if (n === "toAttribute") {
    switch (o) {
      case "Object":
      case "Array":
        return t == null ? null : JSON.stringify(t);
      case "Boolean":
        return t ? "" : null;
      case "Number":
        return t == null ? null : t;
      default:
        return t;
    }
  } else {
    switch (o) {
      case "Object":
      case "Array":
        return t && JSON.parse(t);
      case "Boolean":
        return t;
      case "Number":
        return t != null ? +t : t;
      default:
        return t;
    }
  }
}
function Fw(e) {
  const t = {};
  e.childNodes.forEach((r) => {
    t[
      /** @type {Element} node */
      r.slot || "default"
    ] = true;
  });
  return t;
}

// ../../node_modules/svelte/src/version.js
var wy = "5";

// ../../node_modules/svelte/src/internal/disclose-version.js
if (typeof window !== "undefined") {
  ((window.__svelte ??= {}).v ??= /* @__PURE__ */ new Set()).add(wy);
}

// src/charts/_common/Legends/legend.utils.ts
var Pw = ["bar", "hbar", "stackedVbar", "stackedHbar", "area"];
var Rw = ["dumbbell", "horizontalDumbbell"];
function Ic(e, t) {
  if (Pw.includes(e.type)) {
    return "box";
  }
  if (Rw.includes(e.type)) {
    return "circle";
  }
  if (e.type === "barline") {
    const r = et(e);
    if (r?.barIds?.includes(t)) {
      return "box";
    }
  }
  if (e.type === "stackedPanel") {
    for (const r of e?.stackedPanels?.options ?? []) {
      if (r.fieldIds?.includes(t)) {
        return r.chartType === "line" ? "line" : "box";
      }
    }
    return "box";
  }
  return "line";
}

// src/charts/multiples/utils.ts
var gQ = {
  small: 160,
  medium: 200,
  large: 320
};
var _Q = 20;
var yQ = 24;
var Ey = ({
  chartData: e,
  isTerminalClient: t,
  variant: r
}) => {
  if (!e) {
    return new Dr({});
  }
  const { palette: n } = jn(e, t, r);
  const o = e.multiples?.numSeriesPerMultiple ?? 1;
  const i = In(e);
  const a = e.multiples?.multiplesSeriesInfos;
  let s = {};
  i.forEach((c, f) => {
    s[c] = f % o;
  });
  const l = (c) => {
    if (a && typeof s[c] !== "undefined" && a[s[c]] && typeof a[s[c]].colorIndex === "number") {
      return n[a[s[c]].colorIndex];
    }
    return n[s[c]];
  };
  l.domain = () => i;
  l.range = () => n;
  return new Dr({ scale: l });
};
var $w = (e) => {
  if (e === 1) {
    return 1;
  } else if (e === 2) {
    return 2;
  } else if (e === 3) {
    return 3;
  } else if (e === 4) {
    return 2;
  } else {
    return 3;
  }
};
var xQ = (e, t) => ({
  chartType: "line",
  fieldIds: [e.fields.filter((r) => !r.taxonomy?.isPrimary)[t].id],
  axisProperties: {},
  panelHeight: "medium"
});
var bQ = (e, t) => {
  const r = $w(
    e.multiples?.options?.length ?? e.fields.filter((n) => !n.taxonomy?.isPrimary).length ?? 1
  );
  return t >= 400 ? r : 2;
};

// src/charts/utils/date.utils.ts
function Ay(e, t, r, n = "auto") {
  const o = t?.type;
  let i = "MMM D, YYYY";
  if (o === "date") {
    if (n === "auto") {
      const a = r === "timeBand" ? t?.stats?.dateGranularity?.granularityMode : t?.stats?.dateGranularity?.minimumSpan;
      if (a === "hours" || a === "minutes") {
        i = "ttt D, YYYY HH:mm";
      } else if (a === "days" || a === "weeks") {
        i = "ttt D, YYYY";
      } else if (a === "months") {
        i = "MMMM YYYY";
      } else if (a === "years") {
        i = "YYYY";
      } else {
        i = "ttt D, YYYY";
      }
    } else {
      i = n;
    }
    return ne(e).format(i);
  } else if (o === "month/day") {
    return ne(
      tt(e, vr[o], " 2000")
    ).format("ttt D");
  } else if (o === "year/month") {
    return ne(
      tt(e, vr[o], " 01")
    ).format("MMMM YYYY");
  } else {
    return e;
  }
}

// ../../node_modules/svelte/src/reactivity/set.js
var Bw = ["forEach", "isDisjointFrom", "isSubsetOf", "isSupersetOf"];
var Lw = ["difference", "intersection", "symmetricDifference", "union"];
var Ny = false;
var Ss = class e extends Set {
  /** @type {Map<T, Source<boolean>>} */
  #e = /* @__PURE__ */ new Map();
  #t = dt(0);
  #r = dt(0);
  #n = Fr || -1;
  /**
   * @param {Iterable<T> | null | undefined} [value]
   */
  constructor(t) {
    super();
    if (U) {
      t = new Set(t);
      Ge(this.#t, "SvelteSet version");
      Ge(this.#r, "SvelteSet.size");
    }
    if (t) {
      for (var r of t) {
        super.add(r);
      }
      this.#r.v = super.size;
    }
    if (!Ny) this.#a();
  }
  /**
   * If the source is being created inside the same reaction as the SvelteSet instance,
   * we use `state` so that it will not be a dependency of the reaction. Otherwise we
   * use `source` so it will be.
   *
   * @template T
   * @param {T} value
   * @returns {Source<T>}
   */
  #o(t) {
    return Fr === this.#n ? dt(t) : ct(t);
  }
  // We init as part of the first instance so that we can treeshake this class
  #a() {
    Ny = true;
    var t = e.prototype;
    var r = Set.prototype;
    for (const n of Bw) {
      t[n] = function(...o) {
        W(this.#t);
        return r[n].apply(this, o);
      };
    }
    for (const n of Lw) {
      t[n] = function(...o) {
        W(this.#t);
        var i = (
          /** @type {Set<T>} */
          r[n].apply(this, o)
        );
        return new e(i);
      };
    }
  }
  /** @param {T} value */
  has(t) {
    var r = super.has(t);
    var n = this.#e;
    var o = n.get(t);
    if (o === void 0) {
      if (!r) {
        W(this.#t);
        return false;
      }
      o = this.#o(true);
      if (U) {
        Ge(o, `SvelteSet has(${Zu(t)})`);
      }
      n.set(t, o);
    }
    W(o);
    return r;
  }
  /** @param {T} value */
  add(t) {
    if (!super.has(t)) {
      super.add(t);
      Ie(this.#r, super.size);
      Tt(this.#t);
    }
    return this;
  }
  /** @param {T} value */
  delete(t) {
    var r = super.delete(t);
    var n = this.#e;
    var o = n.get(t);
    if (o !== void 0) {
      n.delete(t);
      Ie(o, false);
    }
    if (r) {
      Ie(this.#r, super.size);
      Tt(this.#t);
    }
    return r;
  }
  clear() {
    if (super.size === 0) {
      return;
    }
    super.clear();
    var t = this.#e;
    for (var r of t.values()) {
      Ie(r, false);
    }
    t.clear();
    Ie(this.#r, 0);
    Tt(this.#t);
  }
  keys() {
    return this.values();
  }
  values() {
    W(this.#t);
    return super.values();
  }
  entries() {
    W(this.#t);
    return super.entries();
  }
  [Symbol.iterator]() {
    return this.keys();
  }
  get size() {
    return W(this.#r);
  }
};

// ../../node_modules/svelte/src/reactivity/url-search-params.js
var Yy = Symbol();
var Oc = class extends URLSearchParams {
  #e = U ? Ge(dt(0), "SvelteURLSearchParams version") : dt(0);
  #t = ky();
  #r = false;
  #n() {
    if (!this.#t || this.#r) return;
    this.#r = true;
    const t = this.toString();
    this.#t.search = t && `?${t}`;
    this.#r = false;
  }
  /**
   * @param {URLSearchParams} params
   * @internal
   */
  [Yy](t) {
    if (this.#r) return;
    this.#r = true;
    for (const r of [...super.keys()]) {
      super.delete(r);
    }
    for (const [r, n] of t) {
      super.append(r, n);
    }
    Tt(this.#e);
    this.#r = false;
  }
  /**
   * @param {string} name
   * @param {string} value
   * @returns {void}
   */
  append(t, r) {
    super.append(t, r);
    this.#n();
    Tt(this.#e);
  }
  /**
   * @param {string} name
   * @param {string=} value
   * @returns {void}
   */
  delete(t, r) {
    var n = super.has(t, r);
    super.delete(t, r);
    if (n) {
      this.#n();
      Tt(this.#e);
    }
  }
  /**
   * @param {string} name
   * @returns {string|null}
   */
  get(t) {
    W(this.#e);
    return super.get(t);
  }
  /**
   * @param {string} name
   * @returns {string[]}
   */
  getAll(t) {
    W(this.#e);
    return super.getAll(t);
  }
  /**
   * @param {string} name
   * @param {string=} value
   * @returns {boolean}
   */
  has(t, r) {
    W(this.#e);
    return super.has(t, r);
  }
  keys() {
    W(this.#e);
    return super.keys();
  }
  /**
   * @param {string} name
   * @param {string} value
   * @returns {void}
   */
  set(t, r) {
    var n = super.getAll(t).join("");
    super.set(t, r);
    if (n !== super.getAll(t).join("")) {
      this.#n();
      Tt(this.#e);
    }
  }
  sort() {
    super.sort();
    this.#n();
    Tt(this.#e);
  }
  toString() {
    W(this.#e);
    return super.toString();
  }
  values() {
    W(this.#e);
    return super.values();
  }
  entries() {
    W(this.#e);
    return super.entries();
  }
  [Symbol.iterator]() {
    return this.entries();
  }
  get size() {
    W(this.#e);
    return super.size;
  }
};

// ../../node_modules/svelte/src/reactivity/url.js
var Vw = null;
function ky() {
  return Vw;
}

// src/charts/_common/Tooltip/SeriesTooltipContent.svelte
var Hw = Un(`<div></div>`);
var Uw = Un(`<div></div>`);
var Gw = Un(`<div class="toaster--tooltip-series-value-row svelte-dgkyyl"><!> <div class="toaster--tooltip-series-value svelte-dgkyyl"> </div></div>`);
var qw = Un(`<div class="toaster--stacked-content-sum svelte-dgkyyl"><div class="toaster--stacked-content-sum-divider svelte-dgkyyl"></div> <div class="toaster--stacked-content-sum-content svelte-dgkyyl"> </div></div>`);
var zw = Un(`<div class="toaster--tooltip-primary-key svelte-dgkyyl"> </div> <div class="toaster--tooltip-series-values-container svelte-dgkyyl"></div> <!>`, 1);
var Ww = Un(`<div> </div>`);
var Zw = Un(`<div><!> <!></div>`);
var jw = {
  hash: "svelte-dgkyyl",
  code: ".toaster--tooltip-content.svelte-dgkyyl {padding:var(--toas-tooltip-padding);font-size:var(--toas-tooltip-font-size-mobile);width:max-content;}.toaster--tooltip-content-light.svelte-dgkyyl {background-color:white;border:1px solid black;color:black;}.toaster--tooltip-content-dark.svelte-dgkyyl {background-color:black;border:1px solid white;color:white;}.toaster--tooltip-primary-key.svelte-dgkyyl {margin-bottom:var(--toas-tooltip-primary-key-padding-bottom);max-width:150px;width:max-content;white-space:normal;word-wrap:break-word;}.toaster--grouped-tooltip-header.svelte-dgkyyl {font-size:0.9em;opacity:0.8;margin-bottom:4px;font-style:italic;}.toaster--tooltip-series-values-container.svelte-dgkyyl {display:flex;flex-flow:column;}.toaster--tooltip-series-value-row.svelte-dgkyyl {display:flex;flex-flow:row;justify-content:space-between;align-items:center;gap:1rem;}.toaster--tooltip-series-value.svelte-dgkyyl {text-anchor:end;white-space:nowrap;}.toaster--tooltip-units.svelte-dgkyyl {margin-top:var(--toas-tooltip-units-margin-top);display:flex;justify-content:end;text-align:right;line-height:var(--toas-tooltip-units-line-height);}.toaster--tooltip-units-dark.svelte-dgkyyl {color:#bbbbbb;}.toaster--tooltip-units-light.svelte-dgkyyl {color:#555555;}.toaster--stacked-content-sum.svelte-dgkyyl {display:flex;flex-flow:column;position:relative;}.toaster--stacked-content-sum-divider.svelte-dgkyyl {height:1px;border-top:1px solid;width:100%;margin:4px 0;}.toaster--stacked-content-sum-content.svelte-dgkyyl {display:flex;flex-flow:row;justify-content:end;text-align:end;white-space:pre;}"
};
function $p(e, t) {
  ns(t, true);
  Ep(e, jw);
  let r = An(t, "groupedData", 3, null), n = An(t, "colorScale", 3, void 0), o = An(t, "strokeScale", 3, void 0), i = An(t, "primaryScale", 3, null), a = An(t, "options", 19, () => ({})), s = An(t, "standAlone", 3, false), l = An(t, "isMobile", 3, false);
  const c = 100;
  const f = Me(() => {
    if (s()) {
      if (t.chartData.type === "multiples") {
        return Ey({
          chartData: t.chartData,
          isTerminalClient: false,
          variant: "light"
        });
      } else {
        return Li(t.chartData, false, "light");
      }
    } else {
      return n();
    }
  });
  const p = Me(() => t.chartData.axis?.secondary?.unit ?? "");
  const u = Me(() => $e(a()?.isTerminalClient ?? false));
  const d = Me(() => t.chartData.design.tooltips?.displayUnit ?? true);
  const h = Me(() => t.chartData.design.tooltips?.hideNonExistingDataPoints ?? false);
  const _ = Me(() => t.chartData?.design.seriesOptions?.deemphasisMode === "gray");
  const m = Me(() => t.chartData.design.tooltips?.dateFormat ?? "auto");
  const x = Me(() => l() ? nf : pm);
  const A = Me(() => pn(t.chartData));
  const D = Me(() => et(t.chartData));
  const N = Me(() => t.chartData.design.seriesOptions?.emphasize ?? []);
  const F = Me(() => Oe(t.chartData));
  const T = Me(() => W(F).map((X) => X.id).filter((X) => !W(N).includes(X)));
  const v = Me(() => t.chartData.design.seriesOptions?.deemphasisMode ?? "opacity");
  const S = Me(() => vi.includes(t.chartData.type) || W(D)?.isStacked && !W(D)?.hasLine);
  const Y = Me(() => !W(S) ? void 0 : Object.values(t.seriesData || {}).reduce((X, re) => re !== void 0 && isFinite(re) ? X + re : X, 0));
  const E = Me(() => r() ? r() : { [t.primaryKey]: t.seriesData });
  const O = Me(() => {
    const X = new Ss(Object.keys(t.seriesData || {}));
    if (r()) {
      Object.values(r()).forEach((le) => {
        Object.keys(le).forEach((me) => {
          X.add(me);
        });
      });
    }
    let re = Array.from(X);
    if (W(D).hasBar && W(D).hasLine) {
      re.sort((le, me) => {
        const q = Ic(t.chartData, le);
        const ye = Ic(t.chartData, me);
        if (q === "line" && ye === "box") return -1;
        if (q === "box" && ye === "line") return 1;
        return 0;
      });
    }
    re.sort((le, me) => {
      if (W(N).includes(le) && !W(N).includes(me)) return -1;
      if (!W(N).includes(le) && W(N).includes(me)) return 1;
      return 0;
    });
    if (W(N).length > 0 && W(T).length > 2 && W(v) === "gray") {
      re = re.filter((le) => !W(T).includes(le));
    }
    return re;
  });
  const H = Me(() => W(O).filter((X) => Cf(t.seriesData, X, t.chartData, W(h))).length);
  const R = Me(() => W(H) === 1);
  const L = Me(() => W(S) && W(Y) && (!W(R) || W(_)));
  const G = Me(() => (X, re) => {
    const le = l() ? 12 : 14;
    const me = W(f)?.scale(X);
    const q = o()?.scale(X);
    if (re === "line") {
      return `
      height: ${le}px;
      width: 2.5px;
      transform: rotate(45deg) translate(4px, -4px);
      margin-right: 10px;
      background-color: ${me};
    `;
    }
    return `
    width: ${le}px;
    height: ${le}px;
    border-radius: 2px;
    margin-right: 10px;
    background-color: ${me};
    border: ${q !== "none" ? 1 : 0}px solid ${q};
  `;
  });
  var z = Zw();
  var J = Hn(z);
  Ac(J, 17, () => Object.entries(W(E)), Ec, (X, re, le, me) => {
    var q = Me(() => Uu(W(re), 2));
    let ye = () => W(q)[0];
    let qe = () => W(q)[1];
    const ze = Me(() => cl(qe()));
    const we = Me(() => Ay(ye(), W(A), i()?.type ?? "", W(m)));
    const K = Me(() => !W(S) ? void 0 : Object.values(t.seriesData || {}).reduce((P, M) => M !== void 0 && isFinite(M) ? P + M : P, 0));
    var g = zw();
    var b = gc(g);
    var y = Hn(b, true);
    en(b);
    var I = si(b, 2);
    Ac(I, 21, () => W(O), Ec, (P, M) => {
      var C = Tp();
      var B = gc(C);
      {
        var $ = (se) => {
          const ce = Me(() => Ic(t.chartData, W(M)));
          var _e = Gw();
          var Re = Hn(_e);
          {
            var Qe = (ir) => {
              var Nn = Hw();
              En((vo) => ci(Nn, vo), [() => W(G)(W(M), "line")]);
              Rr(ir, Nn);
            };
            var xe = (ir) => {
              var Nn = Uw();
              En((vo) => ci(Nn, vo), [() => W(G)(W(M), "box")]);
              Rr(ir, Nn);
            };
            ca(Re, (ir) => {
              if (W(ce) === "line") ir(Qe);
              else ir(xe, false);
            });
          }
          var Se = si(Re, 2);
          var _t = Hn(Se, true);
          en(Se);
          en(_e);
          En((ir) => sa(_t, ir), [
            () => Ca({
              v: qe() ? qe()[W(M)] : null,
              chartData: t.chartData,
              isPrimary: false,
              percentage: W(ze) ? W(ze)[W(M)] : null,
              seriesId: W(M)
            })
          ]);
          Rr(se, _e);
        };
        var j = Me(() => W(f) && Cf(qe(), W(M), t.chartData, W(h)));
        ca(B, (se) => {
          if (W(j)) se($);
        });
      }
      Rr(P, C);
    });
    en(I);
    var w = si(I, 2);
    {
      var k = (P) => {
        var M = qw();
        var C = si(Hn(M), 2);
        var B = Hn(C, true);
        en(C);
        en(M);
        En(($) => sa(B, $), [
          () => `Total ${Ca({
            v: W(K),
            chartData: t.chartData,
            isPrimary: false,
            percentage: c
          })}`
        ]);
        Rr(P, M);
      };
      ca(w, (P) => {
        if (W(L)) P(k);
      });
    }
    En(() => sa(y, W(we)));
    Rr(X, g);
  });
  var Z = si(J, 2);
  {
    var te = (X) => {
      var re = Ww();
      var le = Hn(re, true);
      en(re);
      En(() => {
        fa(
          re,
          1,
          `toaster--tooltip-units ${a().variant === "light" ? "toaster--tooltip-units-light" : "toaster--tooltip-units-dark"}`,
          "svelte-dgkyyl"
        );
        sa(le, W(p));
      });
      Rr(X, re);
    };
    ca(Z, (X) => {
      if (W(d)) X(te);
    });
  }
  en(z);
  En(() => {
    fa(
      z,
      1,
      `toaster--tooltip-content ${a().variant === "dark" ? "toaster--tooltip-content-dark" : "toaster--tooltip-content-light"}`,
      "svelte-dgkyyl"
    );
    ci(z, `font-family: ${W(u)}; font-size: ${W(x)}px`);
  });
  Rr(e, z);
  os();
}

// src/charts/utils/tooltip/preview.svelte.ts
function kee({ target: e, props: t }) {
  const r = on(t);
  const n = la($p, { target: e, props: r });
  return {
    destroy: () => ys(n),
    update: (o) => {
      try {
        for (const [i, a] of Object.entries(o)) {
          r[i] = a;
        }
      } catch (i) {
        console.log(i);
      }
    }
  };
}

export {
  hI as a,
  Bb as b,
  ue as c,
  gI as d,
  Ne as e,
  um as f,
  Gs as g,
  Ub as h,
  EI as i,
  pm as j,
  nf as k,
  $e as l,
  Ve as m,
  qs as n,
  qb as o,
  Zn as p,
  vi as q,
  mm as r,
  of as s,
  zb as t,
  kI as u,
  CI as v,
  II as w,
  OI as x,
  Wb as y,
  Zb as z,
  hm as A,
  FI as B,
  gm as C,
  _m as D,
  ym as E,
  Ta as F,
  Ws as G,
  Jt as H,
  Zs as I,
  Ti as J,
  js as K,
  af as L,
  xm as M,
  PI as N,
  RI as O,
  $I as P,
  sf as Q,
  BI as R,
  Xs as S,
  bm as T,
  vm as U,
  Tm as V,
  Sm as W,
  Mm as X,
  Dm as Y,
  lf as Z,
  cf as _,
  wm as $,
  LI as aa,
  VI as ba,
  HI as ca,
  Em as da,
  fn as ea,
  Am as fa,
  un as ga,
  Nm as ha,
  jb as ia,
  Xb as ja,
  WI as ka,
  jn as la,
  ff as ma,
  iv as na,
  Ma as oa,
  hf as pa,
  av as qa,
  sv as ra,
  lv as sa,
  cv as ta,
  dv as ua,
  Oe as va,
  Lm as wa,
  xF as xa,
  vf as ya,
  bF as za,
  vF as Aa,
  TF as Ba,
  SF as Ca,
  b1 as Da,
  Aa as Ea,
  Na as Fa,
  Ya as Ga,
  Ai as Ha,
  AF as Ia,
  ll as Ja,
  PF as Ka,
  S1 as La,
  et as Ma,
  qF as Na,
  Ca as Oa,
  Cf as Pa,
  WF as Qa,
  ZF as Ra,
  jF as Sa,
  XF as Ta,
  rh as Ua,
  nh as Va,
  oh as Wa,
  JF as Xa,
  sh as Ya,
  lh as Za,
  to as _a,
  ne as $a,
  eP as ab,
  lT as bb,
  tP as cb,
  cT as db,
  rP as eb,
  nP as fb,
  oP as gb,
  WT as hb,
  ZT as ib,
  jT as jb,
  ER as kb,
  XT as lb,
  AR as mb,
  Pa as nb,
  JT as ob,
  KT as pb,
  tS as qb,
  rS as rb,
  $h as sb,
  nS as tb,
  bl as ub,
  oS as vb,
  iS as wb,
  aS as xb,
  Bh as yb,
  Lh as zb,
  sS as Ab,
  lS as Bb,
  Vh as Cb,
  uS as Db,
  pS as Eb,
  Uh as Fb,
  dS as Gb,
  Gh as Hb,
  qh as Ib,
  Jf as Jb,
  zh as Kb,
  UR as Lb,
  hS as Mb,
  Wr as Nb,
  Wh as Ob,
  Ho as Pb,
  Oi as Qb,
  gS as Rb,
  vl as Sb,
  _S as Tb,
  GR as Ub,
  qR as Vb,
  yS as Wb,
  xS as Xb,
  x$ as Yb,
  b$ as Zb,
  v$ as _b,
  bS as $b,
  vS as ac,
  T$ as bc,
  Ra as cc,
  TS as dc,
  U$ as ec,
  Sl as fc,
  G$ as gc,
  ig as hc,
  X$ as ic,
  ag as jc,
  DS as kc,
  wS as lc,
  Uo as mc,
  aB as nc,
  sB as oc,
  lB as pc,
  cB as qc,
  fB as rc,
  ES as sc,
  AS as tc,
  uB as uc,
  cg as vc,
  pB as wc,
  fg as xc,
  ug as yc,
  pg as zc,
  dB as Ac,
  mB as Bc,
  hB as Cc,
  gB as Dc,
  _B as Ec,
  ht as Fc,
  _u as Gc,
  yu as Hc,
  Su as Ic,
  JM as Jc,
  KM as Kc,
  QM as Lc,
  ML as Mc,
  f0 as Nc,
  c0 as Oc,
  DL as Pc,
  wL as Qc,
  EL as Rc,
  AL as Sc,
  Dr as Tc,
  In as Uc,
  Rl as Vc,
  u0 as Wc,
  Li as Xc,
  BL as Yc,
  LL as Zc,
  VL as _c,
  m0 as $c,
  h0 as ad,
  Vl as bd,
  v0 as cd,
  T0 as dd,
  Hl as ed,
  pn as fd,
  Bl as gd,
  g0 as hd,
  Hi as id,
  I4 as jd,
  Mu as kd,
  Du as ld,
  _0 as md,
  b0 as nd,
  Ni as od,
  Ao as pd,
  Ja as qd,
  Ll as rd,
  dn as sd,
  Ul as td,
  W4 as ud,
  S0 as vd,
  Ui as wd,
  Ka as xd,
  M0 as yd,
  D0 as zd,
  Gi as Ad,
  wi as Bd,
  w0 as Cd,
  ql as Dd,
  Iu as Ed,
  Ou as Fd,
  E0 as Gd,
  A0 as Hd,
  Ml as Id,
  Ot as Jd,
  Uu as Kd,
  en as Ld,
  zu as Md,
  a8 as Nd,
  _D as Od,
  yD as Pd,
  ns as Qd,
  os as Rd,
  Me as Sd,
  dt as Td,
  Ie as Ud,
  as as Vd,
  on as Wd,
  Hn as Xd,
  gc as Yd,
  si as Zd,
  oa as _d,
  En as $d,
  W as ae,
  Ce as be,
  vc as ce,
  W_ as de,
  bp as ee,
  vp as fe,
  Un as ge,
  $D as he,
  BD as ie,
  Tp as je,
  Rr as ke,
  sa as le,
  la as me,
  ys as ne,
  ZD as oe,
  KU as pe,
  QU as qe,
  ca as re,
  KD as se,
  Ec as te,
  Ac as ue,
  nw as ve,
  aw as we,
  Ep as xe,
  Np as ye,
  fa as ze,
  ci as Ae,
  Ts as Be,
  dw as Ce,
  _w as De,
  yw as Ee,
  xw as Fe,
  zZ as Ge,
  bw as He,
  vw as Ie,
  Tw as Je,
  Mw as Ke,
  ww as Le,
  An as Me,
  Ic as Ne,
  gQ as Oe,
  _Q as Pe,
  yQ as Qe,
  Ey as Re,
  xQ as Se,
  bQ as Te,
  Ay as Ue,
  $p as Ve,
  kee as We,
  tl as Xe,
  rl as Ye,
  eo as Ze,
  Rm as _e,
  uF as $e,
  pF as af,
  $m as bf,
  Tf as cf
};
/*! Bundled license information:

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
*/
//# sourceMappingURL=chunk-K3YJBOOZ.js.map
