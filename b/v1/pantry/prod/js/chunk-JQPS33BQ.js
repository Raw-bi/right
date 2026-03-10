import {
  c as po
} from "./chunk-LQT34KSW.js";
import {
  a as Ia
} from "./chunk-R2H5V2TG.js";
import {
  $a as te,
  $d as to,
  Ae as lo,
  Ee as uo,
  Gc as qa,
  Hc as hs,
  Ic as Je,
  Jc as ms,
  Kc as ds,
  Ld as za,
  Ma as Ha,
  Me as Xr,
  Nc as ys,
  Ne as co,
  Oc as Va,
  Qa as Wr,
  Qd as Xa,
  Ra as ts,
  Rd as Za,
  Sa as rs,
  Sd as Re,
  Ta as ns,
  Td as Ja,
  Ua as ss,
  Uc as Wa,
  Ud as Qa,
  Va as is,
  Wa as as,
  Xa as zr,
  Ya as os,
  Yd as Ka,
  Za as ls,
  _a as Ga,
  _d as eo,
  a as Aa,
  aa as Fa,
  ae as J,
  b as Ma,
  ba as ja,
  bb as ie,
  cb as Ua,
  d as es,
  db as us,
  ea as Ba,
  eb as cs,
  fb as ps,
  ga as $a,
  gb as fs,
  ge as ro,
  je as no,
  ke as vs,
  n as La,
  re as so,
  te as io,
  u as Ya,
  ue as ao,
  xe as oo
} from "./chunk-K3YJBOOZ.js";
import {
  a as Ur,
  d as wa,
  g as Ra,
  j as Na,
  n as qr,
  p as Vr
} from "./chunk-LMFSDKL5.js";
import {
  a as G,
  b as se,
  c as vf
} from "./chunk-3WTFS26N.js";

// ../../node_modules/semver/internal/constants.js
var dr = G((wv, vl) => {
  "use strict";
  var Xf = "2.0.0";
  var yl = 256;
  var Zf = Number.MAX_SAFE_INTEGER || /* istanbul ignore next */
  9007199254740991;
  var Jf = 16;
  var Qf = yl - 6;
  var Kf = [
    "major",
    "premajor",
    "minor",
    "preminor",
    "patch",
    "prepatch",
    "prerelease"
  ];
  vl.exports = {
    MAX_LENGTH: yl,
    MAX_SAFE_COMPONENT_LENGTH: Jf,
    MAX_SAFE_BUILD_LENGTH: Qf,
    MAX_SAFE_INTEGER: Zf,
    RELEASE_TYPES: Kf,
    SEMVER_SPEC_VERSION: Xf,
    FLAG_INCLUDE_PRERELEASE: 1,
    FLAG_LOOSE: 2
  };
});

// ../../node_modules/semver/internal/debug.js
var yr = G((Rv, gl) => {
  "use strict";
  var eh = typeof process === "object" && process.env && process.env.NODE_DEBUG && /\bsemver\b/i.test(process.env.NODE_DEBUG) ? (...t) => console.error("SEMVER", ...t) : () => {
  };
  gl.exports = eh;
});

// ../../node_modules/semver/internal/re.js
var qt = G((Ke, Sl) => {
  "use strict";
  var {
    MAX_SAFE_COMPONENT_LENGTH: ii,
    MAX_SAFE_BUILD_LENGTH: th,
    MAX_LENGTH: rh
  } = dr();
  var nh = yr();
  Ke = Sl.exports = {};
  var sh = Ke.re = [];
  var ih = Ke.safeRe = [];
  var C = Ke.src = [];
  var ah = Ke.safeSrc = [];
  var I = Ke.t = {};
  var oh = 0;
  var ai = "[a-zA-Z0-9-]";
  var lh = [
    ["\\s", 1],
    ["\\d", rh],
    [ai, th]
  ];
  var uh = (t) => {
    for (const [n, s] of lh) {
      t = t.split(`${n}*`).join(`${n}{0,${s}}`).split(`${n}+`).join(`${n}{1,${s}}`);
    }
    return t;
  };
  var V = (t, n, s) => {
    const i = uh(n);
    const u = oh++;
    nh(t, u, n);
    I[t] = u;
    C[u] = n;
    ah[u] = i;
    sh[u] = new RegExp(n, s ? "g" : void 0);
    ih[u] = new RegExp(i, s ? "g" : void 0);
  };
  V("NUMERICIDENTIFIER", "0|[1-9]\\d*");
  V("NUMERICIDENTIFIERLOOSE", "\\d+");
  V("NONNUMERICIDENTIFIER", `\\d*[a-zA-Z-]${ai}*`);
  V("MAINVERSION", `(${C[I.NUMERICIDENTIFIER]})\\.(${C[I.NUMERICIDENTIFIER]})\\.(${C[I.NUMERICIDENTIFIER]})`);
  V("MAINVERSIONLOOSE", `(${C[I.NUMERICIDENTIFIERLOOSE]})\\.(${C[I.NUMERICIDENTIFIERLOOSE]})\\.(${C[I.NUMERICIDENTIFIERLOOSE]})`);
  V("PRERELEASEIDENTIFIER", `(?:${C[I.NONNUMERICIDENTIFIER]}|${C[I.NUMERICIDENTIFIER]})`);
  V("PRERELEASEIDENTIFIERLOOSE", `(?:${C[I.NONNUMERICIDENTIFIER]}|${C[I.NUMERICIDENTIFIERLOOSE]})`);
  V("PRERELEASE", `(?:-(${C[I.PRERELEASEIDENTIFIER]}(?:\\.${C[I.PRERELEASEIDENTIFIER]})*))`);
  V("PRERELEASELOOSE", `(?:-?(${C[I.PRERELEASEIDENTIFIERLOOSE]}(?:\\.${C[I.PRERELEASEIDENTIFIERLOOSE]})*))`);
  V("BUILDIDENTIFIER", `${ai}+`);
  V("BUILD", `(?:\\+(${C[I.BUILDIDENTIFIER]}(?:\\.${C[I.BUILDIDENTIFIER]})*))`);
  V("FULLPLAIN", `v?${C[I.MAINVERSION]}${C[I.PRERELEASE]}?${C[I.BUILD]}?`);
  V("FULL", `^${C[I.FULLPLAIN]}$`);
  V("LOOSEPLAIN", `[v=\\s]*${C[I.MAINVERSIONLOOSE]}${C[I.PRERELEASELOOSE]}?${C[I.BUILD]}?`);
  V("LOOSE", `^${C[I.LOOSEPLAIN]}$`);
  V("GTLT", "((?:<|>)?=?)");
  V("XRANGEIDENTIFIERLOOSE", `${C[I.NUMERICIDENTIFIERLOOSE]}|x|X|\\*`);
  V("XRANGEIDENTIFIER", `${C[I.NUMERICIDENTIFIER]}|x|X|\\*`);
  V("XRANGEPLAIN", `[v=\\s]*(${C[I.XRANGEIDENTIFIER]})(?:\\.(${C[I.XRANGEIDENTIFIER]})(?:\\.(${C[I.XRANGEIDENTIFIER]})(?:${C[I.PRERELEASE]})?${C[I.BUILD]}?)?)?`);
  V("XRANGEPLAINLOOSE", `[v=\\s]*(${C[I.XRANGEIDENTIFIERLOOSE]})(?:\\.(${C[I.XRANGEIDENTIFIERLOOSE]})(?:\\.(${C[I.XRANGEIDENTIFIERLOOSE]})(?:${C[I.PRERELEASELOOSE]})?${C[I.BUILD]}?)?)?`);
  V("XRANGE", `^${C[I.GTLT]}\\s*${C[I.XRANGEPLAIN]}$`);
  V("XRANGELOOSE", `^${C[I.GTLT]}\\s*${C[I.XRANGEPLAINLOOSE]}$`);
  V("COERCEPLAIN", `${"(^|[^\\d])(\\d{1,"}${ii}})(?:\\.(\\d{1,${ii}}))?(?:\\.(\\d{1,${ii}}))?`);
  V("COERCE", `${C[I.COERCEPLAIN]}(?:$|[^\\d])`);
  V("COERCEFULL", C[I.COERCEPLAIN] + `(?:${C[I.PRERELEASE]})?(?:${C[I.BUILD]})?(?:$|[^\\d])`);
  V("COERCERTL", C[I.COERCE], true);
  V("COERCERTLFULL", C[I.COERCEFULL], true);
  V("LONETILDE", "(?:~>?)");
  V("TILDETRIM", `(\\s*)${C[I.LONETILDE]}\\s+`, true);
  Ke.tildeTrimReplace = "$1~";
  V("TILDE", `^${C[I.LONETILDE]}${C[I.XRANGEPLAIN]}$`);
  V("TILDELOOSE", `^${C[I.LONETILDE]}${C[I.XRANGEPLAINLOOSE]}$`);
  V("LONECARET", "(?:\\^)");
  V("CARETTRIM", `(\\s*)${C[I.LONECARET]}\\s+`, true);
  Ke.caretTrimReplace = "$1^";
  V("CARET", `^${C[I.LONECARET]}${C[I.XRANGEPLAIN]}$`);
  V("CARETLOOSE", `^${C[I.LONECARET]}${C[I.XRANGEPLAINLOOSE]}$`);
  V("COMPARATORLOOSE", `^${C[I.GTLT]}\\s*(${C[I.LOOSEPLAIN]})$|^$`);
  V("COMPARATOR", `^${C[I.GTLT]}\\s*(${C[I.FULLPLAIN]})$|^$`);
  V("COMPARATORTRIM", `(\\s*)${C[I.GTLT]}\\s*(${C[I.LOOSEPLAIN]}|${C[I.XRANGEPLAIN]})`, true);
  Ke.comparatorTrimReplace = "$1$2$3";
  V("HYPHENRANGE", `^\\s*(${C[I.XRANGEPLAIN]})\\s+-\\s+(${C[I.XRANGEPLAIN]})\\s*$`);
  V("HYPHENRANGELOOSE", `^\\s*(${C[I.XRANGEPLAINLOOSE]})\\s+-\\s+(${C[I.XRANGEPLAINLOOSE]})\\s*$`);
  V("STAR", "(<|>)?=?\\s*\\*");
  V("GTE0", "^\\s*>=\\s*0\\.0\\.0\\s*$");
  V("GTE0PRE", "^\\s*>=\\s*0\\.0\\.0-0\\s*$");
});

// ../../node_modules/semver/internal/parse-options.js
var ln = G((Nv, bl) => {
  "use strict";
  var ch = Object.freeze({ loose: true });
  var ph = Object.freeze({});
  var fh = (t) => {
    if (!t) {
      return ph;
    }
    if (typeof t !== "object") {
      return ch;
    }
    return t;
  };
  bl.exports = fh;
});

// ../../node_modules/semver/internal/identifiers.js
var oi = G((Lv, El) => {
  "use strict";
  var xl = /^[0-9]+$/;
  var _l = (t, n) => {
    if (typeof t === "number" && typeof n === "number") {
      return t === n ? 0 : t < n ? -1 : 1;
    }
    const s = xl.test(t);
    const i = xl.test(n);
    if (s && i) {
      t = +t;
      n = +n;
    }
    return t === n ? 0 : s && !i ? -1 : i && !s ? 1 : t < n ? -1 : 1;
  };
  var hh = (t, n) => _l(n, t);
  El.exports = {
    compareIdentifiers: _l,
    rcompareIdentifiers: hh
  };
});

// ../../node_modules/semver/classes/semver.js
var Me = G((Yv, Tl) => {
  "use strict";
  var un = yr();
  var { MAX_LENGTH: Ol, MAX_SAFE_INTEGER: cn } = dr();
  var { safeRe: pn, t: fn } = qt();
  var mh = ln();
  var { compareIdentifiers: li } = oi();
  var ui = class t {
    constructor(n, s) {
      s = mh(s);
      if (n instanceof t) {
        if (n.loose === !!s.loose && n.includePrerelease === !!s.includePrerelease) {
          return n;
        } else {
          n = n.version;
        }
      } else if (typeof n !== "string") {
        throw new TypeError(`Invalid version. Must be a string. Got type "${typeof n}".`);
      }
      if (n.length > Ol) {
        throw new TypeError(
          `version is longer than ${Ol} characters`
        );
      }
      un("SemVer", n, s);
      this.options = s;
      this.loose = !!s.loose;
      this.includePrerelease = !!s.includePrerelease;
      const i = n.trim().match(s.loose ? pn[fn.LOOSE] : pn[fn.FULL]);
      if (!i) {
        throw new TypeError(`Invalid Version: ${n}`);
      }
      this.raw = n;
      this.major = +i[1];
      this.minor = +i[2];
      this.patch = +i[3];
      if (this.major > cn || this.major < 0) {
        throw new TypeError("Invalid major version");
      }
      if (this.minor > cn || this.minor < 0) {
        throw new TypeError("Invalid minor version");
      }
      if (this.patch > cn || this.patch < 0) {
        throw new TypeError("Invalid patch version");
      }
      if (!i[4]) {
        this.prerelease = [];
      } else {
        this.prerelease = i[4].split(".").map((u) => {
          if (/^[0-9]+$/.test(u)) {
            const l = +u;
            if (l >= 0 && l < cn) {
              return l;
            }
          }
          return u;
        });
      }
      this.build = i[5] ? i[5].split(".") : [];
      this.format();
    }
    format() {
      this.version = `${this.major}.${this.minor}.${this.patch}`;
      if (this.prerelease.length) {
        this.version += `-${this.prerelease.join(".")}`;
      }
      return this.version;
    }
    toString() {
      return this.version;
    }
    compare(n) {
      un("SemVer.compare", this.version, this.options, n);
      if (!(n instanceof t)) {
        if (typeof n === "string" && n === this.version) {
          return 0;
        }
        n = new t(n, this.options);
      }
      if (n.version === this.version) {
        return 0;
      }
      return this.compareMain(n) || this.comparePre(n);
    }
    compareMain(n) {
      if (!(n instanceof t)) {
        n = new t(n, this.options);
      }
      if (this.major < n.major) {
        return -1;
      }
      if (this.major > n.major) {
        return 1;
      }
      if (this.minor < n.minor) {
        return -1;
      }
      if (this.minor > n.minor) {
        return 1;
      }
      if (this.patch < n.patch) {
        return -1;
      }
      if (this.patch > n.patch) {
        return 1;
      }
      return 0;
    }
    comparePre(n) {
      if (!(n instanceof t)) {
        n = new t(n, this.options);
      }
      if (this.prerelease.length && !n.prerelease.length) {
        return -1;
      } else if (!this.prerelease.length && n.prerelease.length) {
        return 1;
      } else if (!this.prerelease.length && !n.prerelease.length) {
        return 0;
      }
      let s = 0;
      do {
        const i = this.prerelease[s];
        const u = n.prerelease[s];
        un("prerelease compare", s, i, u);
        if (i === void 0 && u === void 0) {
          return 0;
        } else if (u === void 0) {
          return 1;
        } else if (i === void 0) {
          return -1;
        } else if (i === u) {
          continue;
        } else {
          return li(i, u);
        }
      } while (++s);
    }
    compareBuild(n) {
      if (!(n instanceof t)) {
        n = new t(n, this.options);
      }
      let s = 0;
      do {
        const i = this.build[s];
        const u = n.build[s];
        un("build compare", s, i, u);
        if (i === void 0 && u === void 0) {
          return 0;
        } else if (u === void 0) {
          return 1;
        } else if (i === void 0) {
          return -1;
        } else if (i === u) {
          continue;
        } else {
          return li(i, u);
        }
      } while (++s);
    }
    // preminor will bump the version up to the next minor release, and immediately
    // down to pre-release. premajor and prepatch work the same way.
    inc(n, s, i) {
      if (n.startsWith("pre")) {
        if (!s && i === false) {
          throw new Error("invalid increment argument: identifier is empty");
        }
        if (s) {
          const u = `-${s}`.match(this.options.loose ? pn[fn.PRERELEASELOOSE] : pn[fn.PRERELEASE]);
          if (!u || u[1] !== s) {
            throw new Error(`invalid identifier: ${s}`);
          }
        }
      }
      switch (n) {
        case "premajor":
          this.prerelease.length = 0;
          this.patch = 0;
          this.minor = 0;
          this.major++;
          this.inc("pre", s, i);
          break;
        case "preminor":
          this.prerelease.length = 0;
          this.patch = 0;
          this.minor++;
          this.inc("pre", s, i);
          break;
        case "prepatch":
          this.prerelease.length = 0;
          this.inc("patch", s, i);
          this.inc("pre", s, i);
          break;
        case "prerelease":
          if (this.prerelease.length === 0) {
            this.inc("patch", s, i);
          }
          this.inc("pre", s, i);
          break;
        case "release":
          if (this.prerelease.length === 0) {
            throw new Error(`version ${this.raw} is not a prerelease`);
          }
          this.prerelease.length = 0;
          break;
        case "major":
          if (this.minor !== 0 || this.patch !== 0 || this.prerelease.length === 0) {
            this.major++;
          }
          this.minor = 0;
          this.patch = 0;
          this.prerelease = [];
          break;
        case "minor":
          if (this.patch !== 0 || this.prerelease.length === 0) {
            this.minor++;
          }
          this.patch = 0;
          this.prerelease = [];
          break;
        case "patch":
          if (this.prerelease.length === 0) {
            this.patch++;
          }
          this.prerelease = [];
          break;
        case "pre": {
          const u = Number(i) ? 1 : 0;
          if (this.prerelease.length === 0) {
            this.prerelease = [u];
          } else {
            let l = this.prerelease.length;
            while (--l >= 0) {
              if (typeof this.prerelease[l] === "number") {
                this.prerelease[l]++;
                l = -2;
              }
            }
            if (l === -1) {
              if (s === this.prerelease.join(".") && i === false) {
                throw new Error("invalid increment argument: identifier already exists");
              }
              this.prerelease.push(u);
            }
          }
          if (s) {
            let l = [s, u];
            if (i === false) {
              l = [s];
            }
            if (li(this.prerelease[0], s) === 0) {
              if (isNaN(this.prerelease[1])) {
                this.prerelease = l;
              }
            } else {
              this.prerelease = l;
            }
          }
          break;
        }
        default:
          throw new Error(`invalid increment argument: ${n}`);
      }
      this.raw = this.format();
      if (this.build.length) {
        this.raw += `+${this.build.join(".")}`;
      }
      return this;
    }
  };
  Tl.exports = ui;
});

// ../../node_modules/semver/functions/parse.js
var At = G((Fv, Dl) => {
  "use strict";
  var kl = Me();
  var dh = (t, n, s = false) => {
    if (t instanceof kl) {
      return t;
    }
    try {
      return new kl(t, n);
    } catch (i) {
      if (!s) {
        return null;
      }
      throw i;
    }
  };
  Dl.exports = dh;
});

// ../../node_modules/semver/functions/valid.js
var Cl = G((jv, Pl) => {
  "use strict";
  var yh = At();
  var vh = (t, n) => {
    const s = yh(t, n);
    return s ? s.version : null;
  };
  Pl.exports = vh;
});

// ../../node_modules/semver/functions/clean.js
var Al = G((Bv, Il) => {
  "use strict";
  var gh = At();
  var Sh = (t, n) => {
    const s = gh(t.trim().replace(/^[=v]+/, ""), n);
    return s ? s.version : null;
  };
  Il.exports = Sh;
});

// ../../node_modules/semver/functions/inc.js
var Rl = G(($v, wl) => {
  "use strict";
  var Ml = Me();
  var bh = (t, n, s, i, u) => {
    if (typeof s === "string") {
      u = i;
      i = s;
      s = void 0;
    }
    try {
      return new Ml(
        t instanceof Ml ? t.version : t,
        s
      ).inc(n, i, u).version;
    } catch (l) {
      return null;
    }
  };
  wl.exports = bh;
});

// ../../node_modules/semver/functions/diff.js
var Yl = G((Hv, Ll) => {
  "use strict";
  var Nl = At();
  var xh = (t, n) => {
    const s = Nl(t, null, true);
    const i = Nl(n, null, true);
    const u = s.compare(i);
    if (u === 0) {
      return null;
    }
    const l = u > 0;
    const c = l ? s : i;
    const f = l ? i : s;
    const h = !!c.prerelease.length;
    const d = !!f.prerelease.length;
    if (d && !h) {
      if (!f.patch && !f.minor) {
        return "major";
      }
      if (f.compareMain(c) === 0) {
        if (f.minor && !f.patch) {
          return "minor";
        }
        return "patch";
      }
    }
    const v = h ? "pre" : "";
    if (s.major !== i.major) {
      return v + "major";
    }
    if (s.minor !== i.minor) {
      return v + "minor";
    }
    if (s.patch !== i.patch) {
      return v + "patch";
    }
    return "prerelease";
  };
  Ll.exports = xh;
});

// ../../node_modules/semver/functions/major.js
var jl = G((Gv, Fl) => {
  "use strict";
  var _h = Me();
  var Eh = (t, n) => new _h(t, n).major;
  Fl.exports = Eh;
});

// ../../node_modules/semver/functions/minor.js
var $l = G((Uv, Bl) => {
  "use strict";
  var Oh = Me();
  var Th = (t, n) => new Oh(t, n).minor;
  Bl.exports = Th;
});

// ../../node_modules/semver/functions/patch.js
var Gl = G((qv, Hl) => {
  "use strict";
  var kh = Me();
  var Dh = (t, n) => new kh(t, n).patch;
  Hl.exports = Dh;
});

// ../../node_modules/semver/functions/prerelease.js
var ql = G((Vv, Ul) => {
  "use strict";
  var Ph = At();
  var Ch = (t, n) => {
    const s = Ph(t, n);
    return s && s.prerelease.length ? s.prerelease : null;
  };
  Ul.exports = Ch;
});

// ../../node_modules/semver/functions/compare.js
var Ge = G((Wv, Wl) => {
  "use strict";
  var Vl = Me();
  var Ih = (t, n, s) => new Vl(t, s).compare(new Vl(n, s));
  Wl.exports = Ih;
});

// ../../node_modules/semver/functions/rcompare.js
var Xl = G((zv, zl) => {
  "use strict";
  var Ah = Ge();
  var Mh = (t, n, s) => Ah(n, t, s);
  zl.exports = Mh;
});

// ../../node_modules/semver/functions/compare-loose.js
var Jl = G((Xv, Zl) => {
  "use strict";
  var wh = Ge();
  var Rh = (t, n) => wh(t, n, true);
  Zl.exports = Rh;
});

// ../../node_modules/semver/functions/compare-build.js
var hn = G((Zv, Kl) => {
  "use strict";
  var Ql = Me();
  var Nh = (t, n, s) => {
    const i = new Ql(t, s);
    const u = new Ql(n, s);
    return i.compare(u) || i.compareBuild(u);
  };
  Kl.exports = Nh;
});

// ../../node_modules/semver/functions/sort.js
var tu = G((Jv, eu) => {
  "use strict";
  var Lh = hn();
  var Yh = (t, n) => t.sort((s, i) => Lh(s, i, n));
  eu.exports = Yh;
});

// ../../node_modules/semver/functions/rsort.js
var nu = G((Qv, ru) => {
  "use strict";
  var Fh = hn();
  var jh = (t, n) => t.sort((s, i) => Fh(i, s, n));
  ru.exports = jh;
});

// ../../node_modules/semver/functions/gt.js
var vr = G((Kv, su) => {
  "use strict";
  var Bh = Ge();
  var $h = (t, n, s) => Bh(t, n, s) > 0;
  su.exports = $h;
});

// ../../node_modules/semver/functions/lt.js
var mn = G((eg, iu) => {
  "use strict";
  var Hh = Ge();
  var Gh = (t, n, s) => Hh(t, n, s) < 0;
  iu.exports = Gh;
});

// ../../node_modules/semver/functions/eq.js
var ci = G((tg, au) => {
  "use strict";
  var Uh = Ge();
  var qh = (t, n, s) => Uh(t, n, s) === 0;
  au.exports = qh;
});

// ../../node_modules/semver/functions/neq.js
var pi = G((rg, ou) => {
  "use strict";
  var Vh = Ge();
  var Wh = (t, n, s) => Vh(t, n, s) !== 0;
  ou.exports = Wh;
});

// ../../node_modules/semver/functions/gte.js
var dn = G((ng, lu) => {
  "use strict";
  var zh = Ge();
  var Xh = (t, n, s) => zh(t, n, s) >= 0;
  lu.exports = Xh;
});

// ../../node_modules/semver/functions/lte.js
var yn = G((sg, uu) => {
  "use strict";
  var Zh = Ge();
  var Jh = (t, n, s) => Zh(t, n, s) <= 0;
  uu.exports = Jh;
});

// ../../node_modules/semver/functions/cmp.js
var fi = G((ig, cu) => {
  "use strict";
  var Qh = ci();
  var Kh = pi();
  var em = vr();
  var tm = dn();
  var rm = mn();
  var nm = yn();
  var sm = (t, n, s, i) => {
    switch (n) {
      case "===":
        if (typeof t === "object") {
          t = t.version;
        }
        if (typeof s === "object") {
          s = s.version;
        }
        return t === s;
      case "!==":
        if (typeof t === "object") {
          t = t.version;
        }
        if (typeof s === "object") {
          s = s.version;
        }
        return t !== s;
      case "":
      case "=":
      case "==":
        return Qh(t, s, i);
      case "!=":
        return Kh(t, s, i);
      case ">":
        return em(t, s, i);
      case ">=":
        return tm(t, s, i);
      case "<":
        return rm(t, s, i);
      case "<=":
        return nm(t, s, i);
      default:
        throw new TypeError(`Invalid operator: ${n}`);
    }
  };
  cu.exports = sm;
});

// ../../node_modules/semver/functions/coerce.js
var fu = G((ag, pu) => {
  "use strict";
  var im = Me();
  var am = At();
  var { safeRe: vn, t: gn } = qt();
  var om = (t, n) => {
    if (t instanceof im) {
      return t;
    }
    if (typeof t === "number") {
      t = String(t);
    }
    if (typeof t !== "string") {
      return null;
    }
    n = n || {};
    let s = null;
    if (!n.rtl) {
      s = t.match(n.includePrerelease ? vn[gn.COERCEFULL] : vn[gn.COERCE]);
    } else {
      const h = n.includePrerelease ? vn[gn.COERCERTLFULL] : vn[gn.COERCERTL];
      let d;
      while ((d = h.exec(t)) && (!s || s.index + s[0].length !== t.length)) {
        if (!s || d.index + d[0].length !== s.index + s[0].length) {
          s = d;
        }
        h.lastIndex = d.index + d[1].length + d[2].length;
      }
      h.lastIndex = -1;
    }
    if (s === null) {
      return null;
    }
    const i = s[2];
    const u = s[3] || "0";
    const l = s[4] || "0";
    const c = n.includePrerelease && s[5] ? `-${s[5]}` : "";
    const f = n.includePrerelease && s[6] ? `+${s[6]}` : "";
    return am(`${i}.${u}.${l}${c}${f}`, n);
  };
  pu.exports = om;
});

// ../../node_modules/semver/internal/lrucache.js
var mu = G((og, hu) => {
  "use strict";
  var hi = class {
    constructor() {
      this.max = 1e3;
      this.map = /* @__PURE__ */ new Map();
    }
    get(n) {
      const s = this.map.get(n);
      if (s === void 0) {
        return void 0;
      } else {
        this.map.delete(n);
        this.map.set(n, s);
        return s;
      }
    }
    delete(n) {
      return this.map.delete(n);
    }
    set(n, s) {
      const i = this.delete(n);
      if (!i && s !== void 0) {
        if (this.map.size >= this.max) {
          const u = this.map.keys().next().value;
          this.delete(u);
        }
        this.map.set(n, s);
      }
      return this;
    }
  };
  hu.exports = hi;
});

// ../../node_modules/semver/classes/range.js
var Ue = G((lg, gu) => {
  "use strict";
  var lm = /\s+/g;
  var mi = class t {
    constructor(n, s) {
      s = cm(s);
      if (n instanceof t) {
        if (n.loose === !!s.loose && n.includePrerelease === !!s.includePrerelease) {
          return n;
        } else {
          return new t(n.raw, s);
        }
      }
      if (n instanceof di) {
        this.raw = n.value;
        this.set = [[n]];
        this.formatted = void 0;
        return this;
      }
      this.options = s;
      this.loose = !!s.loose;
      this.includePrerelease = !!s.includePrerelease;
      this.raw = n.trim().replace(lm, " ");
      this.set = this.raw.split("||").map((i) => this.parseRange(i.trim())).filter((i) => i.length);
      if (!this.set.length) {
        throw new TypeError(`Invalid SemVer Range: ${this.raw}`);
      }
      if (this.set.length > 1) {
        const i = this.set[0];
        this.set = this.set.filter((u) => !yu(u[0]));
        if (this.set.length === 0) {
          this.set = [i];
        } else if (this.set.length > 1) {
          for (const u of this.set) {
            if (u.length === 1 && vm(u[0])) {
              this.set = [u];
              break;
            }
          }
        }
      }
      this.formatted = void 0;
    }
    get range() {
      if (this.formatted === void 0) {
        this.formatted = "";
        for (let n = 0; n < this.set.length; n++) {
          if (n > 0) {
            this.formatted += "||";
          }
          const s = this.set[n];
          for (let i = 0; i < s.length; i++) {
            if (i > 0) {
              this.formatted += " ";
            }
            this.formatted += s[i].toString().trim();
          }
        }
      }
      return this.formatted;
    }
    format() {
      return this.range;
    }
    toString() {
      return this.range;
    }
    parseRange(n) {
      const s = (this.options.includePrerelease && dm) | (this.options.loose && ym);
      const i = s + ":" + n;
      const u = du.get(i);
      if (u) {
        return u;
      }
      const l = this.options.loose;
      const c = l ? Le[we.HYPHENRANGELOOSE] : Le[we.HYPHENRANGE];
      n = n.replace(c, Dm(this.options.includePrerelease));
      pe("hyphen replace", n);
      n = n.replace(Le[we.COMPARATORTRIM], fm);
      pe("comparator trim", n);
      n = n.replace(Le[we.TILDETRIM], hm);
      pe("tilde trim", n);
      n = n.replace(Le[we.CARETTRIM], mm);
      pe("caret trim", n);
      let f = n.split(" ").map((x) => gm(x, this.options)).join(" ").split(/\s+/).map((x) => km(x, this.options));
      if (l) {
        f = f.filter((x) => {
          pe("loose invalid filter", x, this.options);
          return !!x.match(Le[we.COMPARATORLOOSE]);
        });
      }
      pe("range list", f);
      const h = /* @__PURE__ */ new Map();
      const d = f.map((x) => new di(x, this.options));
      for (const x of d) {
        if (yu(x)) {
          return [x];
        }
        h.set(x.value, x);
      }
      if (h.size > 1 && h.has("")) {
        h.delete("");
      }
      const v = [...h.values()];
      du.set(i, v);
      return v;
    }
    intersects(n, s) {
      if (!(n instanceof t)) {
        throw new TypeError("a Range is required");
      }
      return this.set.some((i) => {
        return vu(i, s) && n.set.some((u) => {
          return vu(u, s) && i.every((l) => {
            return u.every((c) => {
              return l.intersects(c, s);
            });
          });
        });
      });
    }
    // if ANY of the sets match ALL of its comparators, then pass
    test(n) {
      if (!n) {
        return false;
      }
      if (typeof n === "string") {
        try {
          n = new pm(n, this.options);
        } catch (s) {
          return false;
        }
      }
      for (let s = 0; s < this.set.length; s++) {
        if (Pm(this.set[s], n, this.options)) {
          return true;
        }
      }
      return false;
    }
  };
  gu.exports = mi;
  var um = mu();
  var du = new um();
  var cm = ln();
  var di = gr();
  var pe = yr();
  var pm = Me();
  var {
    safeRe: Le,
    t: we,
    comparatorTrimReplace: fm,
    tildeTrimReplace: hm,
    caretTrimReplace: mm
  } = qt();
  var { FLAG_INCLUDE_PRERELEASE: dm, FLAG_LOOSE: ym } = dr();
  var yu = (t) => t.value === "<0.0.0-0";
  var vm = (t) => t.value === "";
  var vu = (t, n) => {
    let s = true;
    const i = t.slice();
    let u = i.pop();
    while (s && i.length) {
      s = i.every((l) => {
        return u.intersects(l, n);
      });
      u = i.pop();
    }
    return s;
  };
  var gm = (t, n) => {
    t = t.replace(Le[we.BUILD], "");
    pe("comp", t, n);
    t = xm(t, n);
    pe("caret", t);
    t = Sm(t, n);
    pe("tildes", t);
    t = Em(t, n);
    pe("xrange", t);
    t = Tm(t, n);
    pe("stars", t);
    return t;
  };
  var Ye = (t) => !t || t.toLowerCase() === "x" || t === "*";
  var Sm = (t, n) => {
    return t.trim().split(/\s+/).map((s) => bm(s, n)).join(" ");
  };
  var bm = (t, n) => {
    const s = n.loose ? Le[we.TILDELOOSE] : Le[we.TILDE];
    return t.replace(s, (i, u, l, c, f) => {
      pe("tilde", t, i, u, l, c, f);
      let h;
      if (Ye(u)) {
        h = "";
      } else if (Ye(l)) {
        h = `>=${u}.0.0 <${+u + 1}.0.0-0`;
      } else if (Ye(c)) {
        h = `>=${u}.${l}.0 <${u}.${+l + 1}.0-0`;
      } else if (f) {
        pe("replaceTilde pr", f);
        h = `>=${u}.${l}.${c}-${f} <${u}.${+l + 1}.0-0`;
      } else {
        h = `>=${u}.${l}.${c} <${u}.${+l + 1}.0-0`;
      }
      pe("tilde return", h);
      return h;
    });
  };
  var xm = (t, n) => {
    return t.trim().split(/\s+/).map((s) => _m(s, n)).join(" ");
  };
  var _m = (t, n) => {
    pe("caret", t, n);
    const s = n.loose ? Le[we.CARETLOOSE] : Le[we.CARET];
    const i = n.includePrerelease ? "-0" : "";
    return t.replace(s, (u, l, c, f, h) => {
      pe("caret", t, u, l, c, f, h);
      let d;
      if (Ye(l)) {
        d = "";
      } else if (Ye(c)) {
        d = `>=${l}.0.0${i} <${+l + 1}.0.0-0`;
      } else if (Ye(f)) {
        if (l === "0") {
          d = `>=${l}.${c}.0${i} <${l}.${+c + 1}.0-0`;
        } else {
          d = `>=${l}.${c}.0${i} <${+l + 1}.0.0-0`;
        }
      } else if (h) {
        pe("replaceCaret pr", h);
        if (l === "0") {
          if (c === "0") {
            d = `>=${l}.${c}.${f}-${h} <${l}.${c}.${+f + 1}-0`;
          } else {
            d = `>=${l}.${c}.${f}-${h} <${l}.${+c + 1}.0-0`;
          }
        } else {
          d = `>=${l}.${c}.${f}-${h} <${+l + 1}.0.0-0`;
        }
      } else {
        pe("no pr");
        if (l === "0") {
          if (c === "0") {
            d = `>=${l}.${c}.${f}${i} <${l}.${c}.${+f + 1}-0`;
          } else {
            d = `>=${l}.${c}.${f}${i} <${l}.${+c + 1}.0-0`;
          }
        } else {
          d = `>=${l}.${c}.${f} <${+l + 1}.0.0-0`;
        }
      }
      pe("caret return", d);
      return d;
    });
  };
  var Em = (t, n) => {
    pe("replaceXRanges", t, n);
    return t.split(/\s+/).map((s) => Om(s, n)).join(" ");
  };
  var Om = (t, n) => {
    t = t.trim();
    const s = n.loose ? Le[we.XRANGELOOSE] : Le[we.XRANGE];
    return t.replace(s, (i, u, l, c, f, h) => {
      pe("xRange", t, i, u, l, c, f, h);
      const d = Ye(l);
      const v = d || Ye(c);
      const x = v || Ye(f);
      const A = x;
      if (u === "=" && A) {
        u = "";
      }
      h = n.includePrerelease ? "-0" : "";
      if (d) {
        if (u === ">" || u === "<") {
          i = "<0.0.0-0";
        } else {
          i = "*";
        }
      } else if (u && A) {
        if (v) {
          c = 0;
        }
        f = 0;
        if (u === ">") {
          u = ">=";
          if (v) {
            l = +l + 1;
            c = 0;
            f = 0;
          } else {
            c = +c + 1;
            f = 0;
          }
        } else if (u === "<=") {
          u = "<";
          if (v) {
            l = +l + 1;
          } else {
            c = +c + 1;
          }
        }
        if (u === "<") {
          h = "-0";
        }
        i = `${u + l}.${c}.${f}${h}`;
      } else if (v) {
        i = `>=${l}.0.0${h} <${+l + 1}.0.0-0`;
      } else if (x) {
        i = `>=${l}.${c}.0${h} <${l}.${+c + 1}.0-0`;
      }
      pe("xRange return", i);
      return i;
    });
  };
  var Tm = (t, n) => {
    pe("replaceStars", t, n);
    return t.trim().replace(Le[we.STAR], "");
  };
  var km = (t, n) => {
    pe("replaceGTE0", t, n);
    return t.trim().replace(Le[n.includePrerelease ? we.GTE0PRE : we.GTE0], "");
  };
  var Dm = (t) => (n, s, i, u, l, c, f, h, d, v, x, A) => {
    if (Ye(i)) {
      s = "";
    } else if (Ye(u)) {
      s = `>=${i}.0.0${t ? "-0" : ""}`;
    } else if (Ye(l)) {
      s = `>=${i}.${u}.0${t ? "-0" : ""}`;
    } else if (c) {
      s = `>=${s}`;
    } else {
      s = `>=${s}${t ? "-0" : ""}`;
    }
    if (Ye(d)) {
      h = "";
    } else if (Ye(v)) {
      h = `<${+d + 1}.0.0-0`;
    } else if (Ye(x)) {
      h = `<${d}.${+v + 1}.0-0`;
    } else if (A) {
      h = `<=${d}.${v}.${x}-${A}`;
    } else if (t) {
      h = `<${d}.${v}.${+x + 1}-0`;
    } else {
      h = `<=${h}`;
    }
    return `${s} ${h}`.trim();
  };
  var Pm = (t, n, s) => {
    for (let i = 0; i < t.length; i++) {
      if (!t[i].test(n)) {
        return false;
      }
    }
    if (n.prerelease.length && !s.includePrerelease) {
      for (let i = 0; i < t.length; i++) {
        pe(t[i].semver);
        if (t[i].semver === di.ANY) {
          continue;
        }
        if (t[i].semver.prerelease.length > 0) {
          const u = t[i].semver;
          if (u.major === n.major && u.minor === n.minor && u.patch === n.patch) {
            return true;
          }
        }
      }
      return false;
    }
    return true;
  };
});

// ../../node_modules/semver/classes/comparator.js
var gr = G((ug, Ou) => {
  "use strict";
  var Sr = Symbol("SemVer ANY");
  var gi = class t {
    static get ANY() {
      return Sr;
    }
    constructor(n, s) {
      s = Su(s);
      if (n instanceof t) {
        if (n.loose === !!s.loose) {
          return n;
        } else {
          n = n.value;
        }
      }
      n = n.trim().split(/\s+/).join(" ");
      vi("comparator", n, s);
      this.options = s;
      this.loose = !!s.loose;
      this.parse(n);
      if (this.semver === Sr) {
        this.value = "";
      } else {
        this.value = this.operator + this.semver.version;
      }
      vi("comp", this);
    }
    parse(n) {
      const s = this.options.loose ? bu[xu.COMPARATORLOOSE] : bu[xu.COMPARATOR];
      const i = n.match(s);
      if (!i) {
        throw new TypeError(`Invalid comparator: ${n}`);
      }
      this.operator = i[1] !== void 0 ? i[1] : "";
      if (this.operator === "=") {
        this.operator = "";
      }
      if (!i[2]) {
        this.semver = Sr;
      } else {
        this.semver = new _u(i[2], this.options.loose);
      }
    }
    toString() {
      return this.value;
    }
    test(n) {
      vi("Comparator.test", n, this.options.loose);
      if (this.semver === Sr || n === Sr) {
        return true;
      }
      if (typeof n === "string") {
        try {
          n = new _u(n, this.options);
        } catch (s) {
          return false;
        }
      }
      return yi(n, this.operator, this.semver, this.options);
    }
    intersects(n, s) {
      if (!(n instanceof t)) {
        throw new TypeError("a Comparator is required");
      }
      if (this.operator === "") {
        if (this.value === "") {
          return true;
        }
        return new Eu(n.value, s).test(this.value);
      } else if (n.operator === "") {
        if (n.value === "") {
          return true;
        }
        return new Eu(this.value, s).test(n.semver);
      }
      s = Su(s);
      if (s.includePrerelease && (this.value === "<0.0.0-0" || n.value === "<0.0.0-0")) {
        return false;
      }
      if (!s.includePrerelease && (this.value.startsWith("<0.0.0") || n.value.startsWith("<0.0.0"))) {
        return false;
      }
      if (this.operator.startsWith(">") && n.operator.startsWith(">")) {
        return true;
      }
      if (this.operator.startsWith("<") && n.operator.startsWith("<")) {
        return true;
      }
      if (this.semver.version === n.semver.version && this.operator.includes("=") && n.operator.includes("=")) {
        return true;
      }
      if (yi(this.semver, "<", n.semver, s) && this.operator.startsWith(">") && n.operator.startsWith("<")) {
        return true;
      }
      if (yi(this.semver, ">", n.semver, s) && this.operator.startsWith("<") && n.operator.startsWith(">")) {
        return true;
      }
      return false;
    }
  };
  Ou.exports = gi;
  var Su = ln();
  var { safeRe: bu, t: xu } = qt();
  var yi = fi();
  var vi = yr();
  var _u = Me();
  var Eu = Ue();
});

// ../../node_modules/semver/functions/satisfies.js
var br = G((cg, Tu) => {
  "use strict";
  var Cm = Ue();
  var Im = (t, n, s) => {
    try {
      n = new Cm(n, s);
    } catch (i) {
      return false;
    }
    return n.test(t);
  };
  Tu.exports = Im;
});

// ../../node_modules/semver/ranges/to-comparators.js
var Du = G((pg, ku) => {
  "use strict";
  var Am = Ue();
  var Mm = (t, n) => new Am(t, n).set.map((s) => s.map((i) => i.value).join(" ").trim().split(" "));
  ku.exports = Mm;
});

// ../../node_modules/semver/ranges/max-satisfying.js
var Cu = G((fg, Pu) => {
  "use strict";
  var wm = Me();
  var Rm = Ue();
  var Nm = (t, n, s) => {
    let i = null;
    let u = null;
    let l = null;
    try {
      l = new Rm(n, s);
    } catch (c) {
      return null;
    }
    t.forEach((c) => {
      if (l.test(c)) {
        if (!i || u.compare(c) === -1) {
          i = c;
          u = new wm(i, s);
        }
      }
    });
    return i;
  };
  Pu.exports = Nm;
});

// ../../node_modules/semver/ranges/min-satisfying.js
var Au = G((hg, Iu) => {
  "use strict";
  var Lm = Me();
  var Ym = Ue();
  var Fm = (t, n, s) => {
    let i = null;
    let u = null;
    let l = null;
    try {
      l = new Ym(n, s);
    } catch (c) {
      return null;
    }
    t.forEach((c) => {
      if (l.test(c)) {
        if (!i || u.compare(c) === 1) {
          i = c;
          u = new Lm(i, s);
        }
      }
    });
    return i;
  };
  Iu.exports = Fm;
});

// ../../node_modules/semver/ranges/min-version.js
var Ru = G((mg, wu) => {
  "use strict";
  var Si = Me();
  var jm = Ue();
  var Mu = vr();
  var Bm = (t, n) => {
    t = new jm(t, n);
    let s = new Si("0.0.0");
    if (t.test(s)) {
      return s;
    }
    s = new Si("0.0.0-0");
    if (t.test(s)) {
      return s;
    }
    s = null;
    for (let i = 0; i < t.set.length; ++i) {
      const u = t.set[i];
      let l = null;
      u.forEach((c) => {
        const f = new Si(c.semver.version);
        switch (c.operator) {
          case ">":
            if (f.prerelease.length === 0) {
              f.patch++;
            } else {
              f.prerelease.push(0);
            }
            f.raw = f.format();
          case "":
          case ">=":
            if (!l || Mu(f, l)) {
              l = f;
            }
            break;
          case "<":
          case "<=":
            break;
          default:
            throw new Error(`Unexpected operation: ${c.operator}`);
        }
      });
      if (l && (!s || Mu(s, l))) {
        s = l;
      }
    }
    if (s && t.test(s)) {
      return s;
    }
    return null;
  };
  wu.exports = Bm;
});

// ../../node_modules/semver/ranges/valid.js
var Lu = G((dg, Nu) => {
  "use strict";
  var $m = Ue();
  var Hm = (t, n) => {
    try {
      return new $m(t, n).range || "*";
    } catch (s) {
      return null;
    }
  };
  Nu.exports = Hm;
});

// ../../node_modules/semver/ranges/outside.js
var Sn = G((yg, Bu) => {
  "use strict";
  var Gm = Me();
  var ju = gr();
  var { ANY: Um } = ju;
  var qm = Ue();
  var Vm = br();
  var Yu = vr();
  var Fu = mn();
  var Wm = yn();
  var zm = dn();
  var Xm = (t, n, s, i) => {
    t = new Gm(t, i);
    n = new qm(n, i);
    let u, l, c, f, h;
    switch (s) {
      case ">":
        u = Yu;
        l = Wm;
        c = Fu;
        f = ">";
        h = ">=";
        break;
      case "<":
        u = Fu;
        l = zm;
        c = Yu;
        f = "<";
        h = "<=";
        break;
      default:
        throw new TypeError('Must provide a hilo val of "<" or ">"');
    }
    if (Vm(t, n, i)) {
      return false;
    }
    for (let d = 0; d < n.set.length; ++d) {
      const v = n.set[d];
      let x = null;
      let A = null;
      v.forEach((T) => {
        if (T.semver === Um) {
          T = new ju(">=0.0.0");
        }
        x = x || T;
        A = A || T;
        if (u(T.semver, x.semver, i)) {
          x = T;
        } else if (c(T.semver, A.semver, i)) {
          A = T;
        }
      });
      if (x.operator === f || x.operator === h) {
        return false;
      }
      if ((!A.operator || A.operator === f) && l(t, A.semver)) {
        return false;
      } else if (A.operator === h && c(t, A.semver)) {
        return false;
      }
    }
    return true;
  };
  Bu.exports = Xm;
});

// ../../node_modules/semver/ranges/gtr.js
var Hu = G((vg, $u) => {
  "use strict";
  var Zm = Sn();
  var Jm = (t, n, s) => Zm(t, n, ">", s);
  $u.exports = Jm;
});

// ../../node_modules/semver/ranges/ltr.js
var Uu = G((gg, Gu) => {
  "use strict";
  var Qm = Sn();
  var Km = (t, n, s) => Qm(t, n, "<", s);
  Gu.exports = Km;
});

// ../../node_modules/semver/ranges/intersects.js
var Wu = G((Sg, Vu) => {
  "use strict";
  var qu = Ue();
  var ed = (t, n, s) => {
    t = new qu(t, s);
    n = new qu(n, s);
    return t.intersects(n, s);
  };
  Vu.exports = ed;
});

// ../../node_modules/semver/ranges/simplify.js
var Xu = G((bg, zu) => {
  "use strict";
  var td = br();
  var rd = Ge();
  zu.exports = (t, n, s) => {
    const i = [];
    let u = null;
    let l = null;
    const c = t.sort((v, x) => rd(v, x, s));
    for (const v of c) {
      const x = td(v, n, s);
      if (x) {
        l = v;
        if (!u) {
          u = v;
        }
      } else {
        if (l) {
          i.push([u, l]);
        }
        l = null;
        u = null;
      }
    }
    if (u) {
      i.push([u, null]);
    }
    const f = [];
    for (const [v, x] of i) {
      if (v === x) {
        f.push(v);
      } else if (!x && v === c[0]) {
        f.push("*");
      } else if (!x) {
        f.push(`>=${v}`);
      } else if (v === c[0]) {
        f.push(`<=${x}`);
      } else {
        f.push(`${v} - ${x}`);
      }
    }
    const h = f.join(" || ");
    const d = typeof n.raw === "string" ? n.raw : String(n);
    return h.length < d.length ? h : n;
  };
});

// ../../node_modules/semver/ranges/subset.js
var tc = G((xg, ec) => {
  "use strict";
  var Zu = Ue();
  var xi = gr();
  var { ANY: bi } = xi;
  var xr = br();
  var _i = Ge();
  var nd = (t, n, s = {}) => {
    if (t === n) {
      return true;
    }
    t = new Zu(t, s);
    n = new Zu(n, s);
    let i = false;
    e: for (const u of t.set) {
      for (const l of n.set) {
        const c = id(u, l, s);
        i = i || c !== null;
        if (c) {
          continue e;
        }
      }
      if (i) {
        return false;
      }
    }
    return true;
  };
  var sd = [new xi(">=0.0.0-0")];
  var Ju = [new xi(">=0.0.0")];
  var id = (t, n, s) => {
    if (t === n) {
      return true;
    }
    if (t.length === 1 && t[0].semver === bi) {
      if (n.length === 1 && n[0].semver === bi) {
        return true;
      } else if (s.includePrerelease) {
        t = sd;
      } else {
        t = Ju;
      }
    }
    if (n.length === 1 && n[0].semver === bi) {
      if (s.includePrerelease) {
        return true;
      } else {
        n = Ju;
      }
    }
    const i = /* @__PURE__ */ new Set();
    let u, l;
    for (const T of t) {
      if (T.operator === ">" || T.operator === ">=") {
        u = Qu(u, T, s);
      } else if (T.operator === "<" || T.operator === "<=") {
        l = Ku(l, T, s);
      } else {
        i.add(T.semver);
      }
    }
    if (i.size > 1) {
      return null;
    }
    let c;
    if (u && l) {
      c = _i(u.semver, l.semver, s);
      if (c > 0) {
        return null;
      } else if (c === 0 && (u.operator !== ">=" || l.operator !== "<=")) {
        return null;
      }
    }
    for (const T of i) {
      if (u && !xr(T, String(u), s)) {
        return null;
      }
      if (l && !xr(T, String(l), s)) {
        return null;
      }
      for (const P of n) {
        if (!xr(T, String(P), s)) {
          return false;
        }
      }
      return true;
    }
    let f, h;
    let d, v;
    let x = l && !s.includePrerelease && l.semver.prerelease.length ? l.semver : false;
    let A = u && !s.includePrerelease && u.semver.prerelease.length ? u.semver : false;
    if (x && x.prerelease.length === 1 && l.operator === "<" && x.prerelease[0] === 0) {
      x = false;
    }
    for (const T of n) {
      v = v || T.operator === ">" || T.operator === ">=";
      d = d || T.operator === "<" || T.operator === "<=";
      if (u) {
        if (A) {
          if (T.semver.prerelease && T.semver.prerelease.length && T.semver.major === A.major && T.semver.minor === A.minor && T.semver.patch === A.patch) {
            A = false;
          }
        }
        if (T.operator === ">" || T.operator === ">=") {
          f = Qu(u, T, s);
          if (f === T && f !== u) {
            return false;
          }
        } else if (u.operator === ">=" && !xr(u.semver, String(T), s)) {
          return false;
        }
      }
      if (l) {
        if (x) {
          if (T.semver.prerelease && T.semver.prerelease.length && T.semver.major === x.major && T.semver.minor === x.minor && T.semver.patch === x.patch) {
            x = false;
          }
        }
        if (T.operator === "<" || T.operator === "<=") {
          h = Ku(l, T, s);
          if (h === T && h !== l) {
            return false;
          }
        } else if (l.operator === "<=" && !xr(l.semver, String(T), s)) {
          return false;
        }
      }
      if (!T.operator && (l || u) && c !== 0) {
        return false;
      }
    }
    if (u && d && !l && c !== 0) {
      return false;
    }
    if (l && v && !u && c !== 0) {
      return false;
    }
    if (A || x) {
      return false;
    }
    return true;
  };
  var Qu = (t, n, s) => {
    if (!t) {
      return n;
    }
    const i = _i(t.semver, n.semver, s);
    return i > 0 ? t : i < 0 ? n : n.operator === ">" && t.operator === ">=" ? n : t;
  };
  var Ku = (t, n, s) => {
    if (!t) {
      return n;
    }
    const i = _i(t.semver, n.semver, s);
    return i < 0 ? t : i > 0 ? n : n.operator === "<" && t.operator === "<=" ? n : t;
  };
  ec.exports = nd;
});

// ../../node_modules/semver/index.js
var ic = G((_g, sc) => {
  "use strict";
  var Ei = qt();
  var rc = dr();
  var ad = Me();
  var nc = oi();
  var od = At();
  var ld = Cl();
  var ud = Al();
  var cd = Rl();
  var pd = Yl();
  var fd = jl();
  var hd = $l();
  var md = Gl();
  var dd = ql();
  var yd = Ge();
  var vd = Xl();
  var gd = Jl();
  var Sd = hn();
  var bd = tu();
  var xd = nu();
  var _d = vr();
  var Ed = mn();
  var Od = ci();
  var Td = pi();
  var kd = dn();
  var Dd = yn();
  var Pd = fi();
  var Cd = fu();
  var Id = gr();
  var Ad = Ue();
  var Md = br();
  var wd = Du();
  var Rd = Cu();
  var Nd = Au();
  var Ld = Ru();
  var Yd = Lu();
  var Fd = Sn();
  var jd = Hu();
  var Bd = Uu();
  var $d = Wu();
  var Hd = Xu();
  var Gd = tc();
  sc.exports = {
    parse: od,
    valid: ld,
    clean: ud,
    inc: cd,
    diff: pd,
    major: fd,
    minor: hd,
    patch: md,
    prerelease: dd,
    compare: yd,
    rcompare: vd,
    compareLoose: gd,
    compareBuild: Sd,
    sort: bd,
    rsort: xd,
    gt: _d,
    lt: Ed,
    eq: Od,
    neq: Td,
    gte: kd,
    lte: Dd,
    cmp: Pd,
    coerce: Cd,
    Comparator: Id,
    Range: Ad,
    satisfies: Md,
    toComparators: wd,
    maxSatisfying: Rd,
    minSatisfying: Nd,
    minVersion: Ld,
    validRange: Yd,
    outside: Fd,
    gtr: jd,
    ltr: Bd,
    intersects: $d,
    simplifyRange: Hd,
    subset: Gd,
    SemVer: ad,
    re: Ei.re,
    src: Ei.src,
    tokens: Ei.t,
    SEMVER_SPEC_VERSION: rc.SEMVER_SPEC_VERSION,
    RELEASE_TYPES: rc.RELEASE_TYPES,
    compareIdentifiers: nc.compareIdentifiers,
    rcompareIdentifiers: nc.rcompareIdentifiers
  };
});

// ../schema/src/__fixtures__/base.ts
var Zr = {
  type: "line",
  origin: "Toaster",
  version: "1.0.0",
  data: [
    ["January", 100],
    ["February", 200],
    ["March", 300],
    ["April", 300],
    ["May", 350],
    ["June", 300],
    ["July", 200]
  ],
  axis: { secondary: { label: { postfix: "K" } } },
  fields: [{ name: void 0 }, { name: "num charts" }],
  title: "Charts Made Throughout the Year",
  source: "Source: Bloomberg"
};
var fo = {
  type: "barline",
  origin: "Toaster",
  version: "1.0.0",
  data: [
    ["January", 100, 100],
    ["February", 200, 200],
    ["March", 300, 400],
    ["April", 300, 300],
    ["May", 350, 300],
    ["June", 300, 400],
    ["July", 200, 300]
  ],
  axis: { secondary: { label: { postfix: "K" } } },
  fields: [{ name: null }, { name: "actual" }, { name: "expected" }],
  title: "Charts Made Throughout the Year",
  source: "Source: Bloomberg",
  barline: { seriesInfo: [{ type: "line" }, { type: "bar" }] }
};
var gs = {
  type: "dumbbell",
  origin: "Toaster",
  version: "1.0.0",
  data: [
    ["January", 80, 120],
    ["February", 150, 190],
    ["March", 200, 260],
    ["April", 210, 250],
    ["May", 230, 300],
    ["June", 220, 280],
    ["July", 180, 240]
  ],
  fields: [{ name: null }, { name: "start" }, { name: "end" }],
  title: "Start vs End Range Throughout the Year",
  dumbbell: { sort: true, sortByIndex: 2 }
};

// ../schema/src/__fixtures__/prepared.ts
var Ot = {
  ...Zr,
  axis: {
    secondary: { ...Zr.axis.secondary, gridLines: true }
  },
  metadata: {},
  theme: "business",
  design: { originalTheme: "business", contentDestination: void 0 },
  data: Zr.data,
  fields: [
    {
      id: "0",
      name: "",
      type: "month",
      index: 0,
      data: ["January", "February", "March", "April", "May", "June", "July"],
      taxonomy: { isPrimary: true },
      stats: {
        min: "January",
        max: "July",
        duration: "months",
        dateGranularity: {
          minimumSpan: "months",
          percentileSpan: "months",
          granularityMode: "months"
        }
      }
    },
    {
      id: "1",
      name: "num charts",
      type: "numeric",
      index: 1,
      data: [100, 200, 300, 300, 350, 300, 200],
      taxonomy: { isPrimary: false },
      stats: { min: 100, max: 350, maxMantissa: 0 }
    }
  ],
  sourcePrefix: "Source: ",
  sourceContent: "Bloomberg",
  footnotePrefix: "Note: ",
  footnoteContent: "",
  colorPalette: {
    colors: {
      dark: {
        palette: [
          "#FFA028",
          "#FFFFFF",
          "#787878",
          "#27BBFA",
          "#F73BA9",
          "#19E9F7",
          "#00CC44",
          "#A62BFF",
          "#FFD00D"
        ]
      },
      light: {
        palette: [
          "#FFA028",
          "#000000",
          "#CCCCCC",
          "#27BBFA",
          "#F73BA9",
          "#19E9F7",
          "#00CC44",
          "#A62BFF",
          "#FFD00D"
        ]
      }
    },
    id: "business-default-categorical",
    name: "Business Default Categorical",
    type: "categorical"
  }
};
var Ky = {
  ...fo,
  ...Ot,
  fields: [
    ...Ot.fields,
    {
      id: "2",
      name: "expected",
      type: "numeric",
      index: 1,
      data: [100, 200, 400, 300, 300, 400, 300],
      taxonomy: { isPrimary: false },
      stats: { min: 100, max: 400, maxMantissa: 0 }
    }
  ],
  barline: {
    barlineStyle: "lineStackedBar",
    seriesInfo: [
      { type: "line", seriesId: "1" },
      { type: "bar", seriesId: "2" }
    ]
  }
};
var ev = {
  ...gs,
  ...Ot,
  type: "dumbbell",
  data: gs.data,
  fields: [
    Ot.fields[0],
    {
      id: "1",
      name: "start",
      type: "numeric",
      index: 1,
      data: [80, 150, 200, 210, 230, 220, 180],
      taxonomy: { isPrimary: false },
      stats: { min: 80, max: 230, maxMantissa: 0 }
    },
    {
      id: "2",
      name: "end",
      type: "numeric",
      index: 2,
      data: [120, 190, 260, 250, 300, 280, 240],
      taxonomy: { isPrimary: false },
      stats: { min: 120, max: 300, maxMantissa: 0 }
    }
  ],
  dumbbell: {
    useArrow: false,
    hideLine: false,
    sort: true,
    sortBy: "2",
    reverseSort: false
  }
};

// ../schema/src/__fixtures__/saved.ts
var yo = {
  ...Ot,
  id: "abcdefghijklmnopqrstuvwxyz",
  fields: Ot.fields.map((t) => ({ ...t, data: [] })),
  createdAt: "2025-08-01T12:00:00.000Z",
  updatedAt: "2025-08-01T12:00:00.000Z",
  organization: "News",
  author: "Fergus Tarnation",
  authorId: 32096514,
  lastUpdatedBy: "Fergus Tarnation",
  lastUpdatedByUuid: 32096514,
  editorsInfo: { "32096514": "Fergus Tarnation" }
};

// ../schema/src/__fixtures__/published.ts
var tv = {
  ...yo,
  avmmId: "12345678",
  published: true,
  publishedAt: "2025-08-01T16:00:00.000Z",
  images: {
    dark: {
      url: "https://assets.bwbx.io/images/default.png",
      width: 1240,
      height: 790
    },
    light: {
      url: "https://assets.bwbx.io/images/light.png",
      width: 1240,
      height: 790
    },
    default: {
      url: "https://assets.bwbx.io/images/default.png",
      width: 1240,
      height: 790
    }
  }
};

// ../schema/src/base/index.ts
var gt = {};
se(gt, {
  Annotations: () => Rs,
  Area: () => or,
  Barline: () => Ut,
  Candlestick: () => lr,
  Comparison: () => ur,
  Dumbbell: () => cr,
  Elements: () => Ct,
  Fields: () => fr,
  MultiPanel: () => Ks,
  Multiples: () => ei,
  Schemas: () => ve,
  Table: () => si
});

// ../schema/src/base/annotations.ts
var Rs = {};
se(Rs, {
  AnnotationPropertiesSchema: () => ws,
  DataRangeHighlightSchema: () => ko,
  TextAnnotationSchema: () => To,
  ThresholdIndicatorSchema: () => Do
});

// ../../node_modules/valibot/dist/index.mjs
var Ss;
// @__NO_SIDE_EFFECTS__
function So(t) {
  return {
    lang: t?.lang ?? Ss?.lang,
    message: t?.message,
    abortEarly: t?.abortEarly ?? Ss?.abortEarly,
    abortPipeEarly: t?.abortPipeEarly ?? Ss?.abortPipeEarly
  };
}
var bf;
// @__NO_SIDE_EFFECTS__
function xf(t) {
  return bf?.get(t);
}
var _f;
// @__NO_SIDE_EFFECTS__
function Ef(t) {
  return _f?.get(t);
}
var Of;
// @__NO_SIDE_EFFECTS__
function Tf(t, n) {
  return Of?.get(t)?.get(n);
}
// @__NO_SIDE_EFFECTS__
function Tt(t) {
  const n = typeof t;
  if (n === "string") return `"${t}"`;
  if (n === "number" || n === "bigint" || n === "boolean") return `${t}`;
  if (n === "object" || n === "function") return (t && Object.getPrototypeOf(t)?.constructor?.name) ?? "null";
  return n;
}
function re(t, n, s, i, u) {
  const l = u && "input" in u ? u.input : s.value;
  const c = u?.expected ?? t.expects ?? null;
  const f = u?.received ?? /* @__PURE__ */ Tt(l);
  const h = {
    kind: t.kind,
    type: t.type,
    input: l,
    expected: c,
    received: f,
    message: `Invalid ${n}: ${c ? `Expected ${c} but r` : "R"}eceived ${f}`,
    requirement: t.requirement,
    path: u?.path,
    issues: u?.issues,
    lang: i.lang,
    abortEarly: i.abortEarly,
    abortPipeEarly: i.abortPipeEarly
  };
  const d = t.kind === "schema";
  const v = u?.message ?? t.message ?? /* @__PURE__ */ Tf(t.reference, h.lang) ?? (d ? /* @__PURE__ */ Ef(h.lang) : null) ?? i.message ?? /* @__PURE__ */ xf(h.lang);
  if (v !== void 0) h.message = typeof v === "function" ? v(h) : v;
  if (d) s.typed = false;
  if (s.issues) s.issues.push(h);
  else s.issues = [h];
}
// @__NO_SIDE_EFFECTS__
function he(t) {
  return {
    version: 1,
    vendor: "valibot",
    validate(n) {
      return t["~run"]({ value: n }, /* @__PURE__ */ So());
    }
  };
}
// @__NO_SIDE_EFFECTS__
function bo(t, n) {
  return Object.hasOwn(t, n) && n !== "__proto__" && n !== "prototype" && n !== "constructor";
}
// @__NO_SIDE_EFFECTS__
function Jr(t, n) {
  const s = [...new Set(t)];
  if (s.length > 1) return `(${s.join(` ${n} `)})`;
  return s[0] ?? "never";
}
// @__NO_SIDE_EFFECTS__
function Ne(t, n) {
  return n.type === t;
}
var kf = class extends Error {
  /**
  * Creates a Valibot error with useful information.
  *
  * @param issues The error issues.
  */
  constructor(t) {
    super(t[0].message);
    this.name = "ValiError";
    this.issues = t;
  }
};
var Df = /^\d{4}-(?:0[1-9]|1[0-2])-(?:[12]\d|0[1-9]|3[01])[T ](?:0\d|1\d|2[0-3])(?::[0-5]\d){2}(?:\.\d{1,9})?(?:Z|[+-](?:0\d|1\d|2[0-3])(?::?[0-5]\d)?)$/u;
// @__NO_SIDE_EFFECTS__
function ge(t, n) {
  return {
    kind: "validation",
    type: "check",
    reference: ge,
    async: false,
    expects: null,
    requirement: t,
    message: n,
    "~run"(s, i) {
      if (s.typed && !this.requirement(s.value)) re(this, "input", s, i);
      return s;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function ne(t) {
  return {
    kind: "metadata",
    type: "description",
    reference: ne,
    description: t
  };
}
// @__NO_SIDE_EFFECTS__
function xs(t) {
  return {
    kind: "validation",
    type: "iso_timestamp",
    reference: xs,
    async: false,
    expects: null,
    requirement: Df,
    message: t,
    "~run"(n, s) {
      if (n.typed && !this.requirement.test(n.value)) re(this, "timestamp", n, s);
      return n;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function _s(t, n) {
  return {
    kind: "validation",
    type: "length",
    reference: _s,
    async: false,
    expects: `${t}`,
    requirement: t,
    message: n,
    "~run"(s, i) {
      if (s.typed && s.value.length !== this.requirement) re(this, "length", s, i, { received: `${s.value.length}` });
      return s;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function Es(t, n) {
  return {
    kind: "validation",
    type: "max_length",
    reference: Es,
    async: false,
    expects: `<=${t}`,
    requirement: t,
    message: n,
    "~run"(s, i) {
      if (s.typed && s.value.length > this.requirement) re(this, "length", s, i, { received: `${s.value.length}` });
      return s;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function Os(t, n) {
  return {
    kind: "validation",
    type: "max_value",
    reference: Os,
    async: false,
    expects: `<=${t instanceof Date ? t.toJSON() : /* @__PURE__ */ Tt(t)}`,
    requirement: t,
    message: n,
    "~run"(s, i) {
      if (s.typed && !(s.value <= this.requirement)) re(this, "value", s, i, { received: s.value instanceof Date ? s.value.toJSON() : /* @__PURE__ */ Tt(s.value) });
      return s;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function Ts(t, n) {
  return {
    kind: "validation",
    type: "min_length",
    reference: Ts,
    async: false,
    expects: `>=${t}`,
    requirement: t,
    message: n,
    "~run"(s, i) {
      if (s.typed && s.value.length < this.requirement) re(this, "length", s, i, { received: `${s.value.length}` });
      return s;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function Qe(t, n) {
  return {
    kind: "validation",
    type: "min_value",
    reference: Qe,
    async: false,
    expects: `>=${t instanceof Date ? t.toJSON() : /* @__PURE__ */ Tt(t)}`,
    requirement: t,
    message: n,
    "~run"(s, i) {
      if (s.typed && !(s.value >= this.requirement)) re(this, "value", s, i, { received: s.value instanceof Date ? s.value.toJSON() : /* @__PURE__ */ Tt(s.value) });
      return s;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function Pf(t, n) {
  if (t.issues) for (const s of n) for (const i of t.issues) {
    let u = false;
    const l = Math.min(s.length, i.path?.length ?? 0);
    for (let c = 0; c < l; c++) if (s[c] !== i.path[c].key && (s[c] !== "$" || i.path[c].type !== "array")) {
      u = true;
      break;
    }
    if (!u) return false;
  }
  return true;
}
// @__NO_SIDE_EFFECTS__
function ks(t, n, s) {
  return {
    kind: "validation",
    type: "partial_check",
    reference: ks,
    async: false,
    expects: null,
    paths: t,
    requirement: n,
    message: s,
    "~run"(i, u) {
      if ((i.typed || /* @__PURE__ */ Pf(i, t)) && !this.requirement(i.value)) re(this, "input", i, u);
      return i;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function $(t) {
  return {
    kind: "transformation",
    type: "transform",
    reference: $,
    async: false,
    operation: t,
    "~run"(n) {
      n.value = this.operation(n.value);
      return n;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function Ds(t) {
  return {
    kind: "validation",
    type: "url",
    reference: Ds,
    async: false,
    expects: null,
    requirement(n) {
      try {
        new URL(n);
        return true;
      } catch {
        return false;
      }
    },
    message: t,
    "~run"(n, s) {
      if (n.typed && !this.requirement(n.value)) re(this, "URL", n, s);
      return n;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function Ps(t, n, s) {
  return typeof t.fallback === "function" ? t.fallback(n, s) : t.fallback;
}
// @__NO_SIDE_EFFECTS__
function xo(t, n) {
  return {
    ...t,
    fallback: n,
    get "~standard"() {
      return /* @__PURE__ */ he(this);
    },
    "~run"(s, i) {
      const u = t["~run"](s, i);
      return u.issues ? {
        typed: true,
        value: /* @__PURE__ */ Ps(this, u, i)
      } : u;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function Te(t, n) {
  return {
    ...t,
    "~run"(s, i) {
      const u = s.issues && [...s.issues];
      s = t["~run"](s, i);
      if (s.issues) {
        for (const l of s.issues) if (!u?.includes(l)) {
          let c = s.value;
          for (const f of n) {
            const h = c[f];
            const d = {
              type: "unknown",
              origin: "value",
              input: c,
              key: f,
              value: h
            };
            if (l.path) l.path.push(d);
            else l.path = [d];
            if (!h) break;
            c = h;
          }
        }
      }
      return s;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function ir(t, n, s) {
  return typeof t.default === "function" ? t.default(n, s) : t.default;
}
// @__NO_SIDE_EFFECTS__
function De(t, n) {
  return !t["~run"]({ value: n }, { abortEarly: true }).issues;
}
// @__NO_SIDE_EFFECTS__
function F(t, n) {
  return {
    kind: "schema",
    type: "array",
    reference: F,
    expects: "Array",
    async: false,
    item: t,
    message: n,
    get "~standard"() {
      return /* @__PURE__ */ he(this);
    },
    "~run"(s, i) {
      const u = s.value;
      if (Array.isArray(u)) {
        s.typed = true;
        s.value = [];
        for (let l = 0; l < u.length; l++) {
          const c = u[l];
          const f = this.item["~run"]({ value: c }, i);
          if (f.issues) {
            const h = {
              type: "array",
              origin: "value",
              input: u,
              key: l,
              value: c
            };
            for (const d of f.issues) {
              if (d.path) d.path.unshift(h);
              else d.path = [h];
              s.issues?.push(d);
            }
            if (!s.issues) s.issues = f.issues;
            if (i.abortEarly) {
              s.typed = false;
              break;
            }
          }
          if (!f.typed) s.typed = false;
          s.value.push(f.value);
        }
      } else re(this, "type", s, i);
      return s;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function N(t) {
  return {
    kind: "schema",
    type: "boolean",
    reference: N,
    expects: "boolean",
    async: false,
    message: t,
    get "~standard"() {
      return /* @__PURE__ */ he(this);
    },
    "~run"(n, s) {
      if (typeof n.value === "boolean") n.typed = true;
      else re(this, "type", n, s);
      return n;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function Gt(t) {
  return {
    kind: "schema",
    type: "date",
    reference: Gt,
    expects: "Date",
    async: false,
    message: t,
    get "~standard"() {
      return /* @__PURE__ */ he(this);
    },
    "~run"(n, s) {
      if (n.value instanceof Date) if (!isNaN(n.value)) n.typed = true;
      else re(this, "type", n, s, { received: '"Invalid Date"' });
      else re(this, "type", n, s);
      return n;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function bs(t, n) {
  if (typeof t === typeof n) {
    if (t === n || t instanceof Date && n instanceof Date && +t === +n) return { value: t };
    if (t && n && t.constructor === Object && n.constructor === Object) {
      for (const s in n) if (s in t) {
        const i = /* @__PURE__ */ bs(t[s], n[s]);
        if (i.issue) return i;
        t[s] = i.value;
      } else t[s] = n[s];
      return { value: t };
    }
    if (Array.isArray(t) && Array.isArray(n)) {
      if (t.length === n.length) {
        for (let s = 0; s < t.length; s++) {
          const i = /* @__PURE__ */ bs(t[s], n[s]);
          if (i.issue) return i;
          t[s] = i.value;
        }
        return { value: t };
      }
    }
  }
  return { issue: true };
}
// @__NO_SIDE_EFFECTS__
function kt(t, n) {
  return {
    kind: "schema",
    type: "intersect",
    reference: kt,
    expects: /* @__PURE__ */ Jr(t.map((s) => s.expects), "&"),
    async: false,
    options: t,
    message: n,
    get "~standard"() {
      return /* @__PURE__ */ he(this);
    },
    "~run"(s, i) {
      if (this.options.length) {
        const u = s.value;
        let l;
        s.typed = true;
        for (const c of this.options) {
          const f = c["~run"]({ value: u }, i);
          if (f.issues) {
            if (s.issues) s.issues.push(...f.issues);
            else s.issues = f.issues;
            if (i.abortEarly) {
              s.typed = false;
              break;
            }
          }
          if (!f.typed) s.typed = false;
          if (s.typed) if (l) l.push(f.value);
          else l = [f.value];
        }
        if (s.typed) {
          s.value = l[0];
          for (let c = 1; c < l.length; c++) {
            const f = /* @__PURE__ */ bs(s.value, l[c]);
            if (f.issue) {
              re(this, "type", s, i, { received: "unknown" });
              break;
            }
            s.value = f.value;
          }
        }
      } else re(this, "type", s, i);
      return s;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function ae(t, n) {
  return {
    kind: "schema",
    type: "literal",
    reference: ae,
    expects: /* @__PURE__ */ Tt(t),
    async: false,
    literal: t,
    message: n,
    get "~standard"() {
      return /* @__PURE__ */ he(this);
    },
    "~run"(s, i) {
      if (s.value === this.literal) s.typed = true;
      else re(this, "type", s, i);
      return s;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function K(t, n) {
  return {
    kind: "schema",
    type: "loose_object",
    reference: K,
    expects: "Object",
    async: false,
    entries: t,
    message: n,
    get "~standard"() {
      return /* @__PURE__ */ he(this);
    },
    "~run"(s, i) {
      const u = s.value;
      if (u && typeof u === "object") {
        s.typed = true;
        s.value = {};
        for (const l in this.entries) {
          const c = this.entries[l];
          if (l in u || (c.type === "exact_optional" || c.type === "optional" || c.type === "nullish") && c.default !== void 0) {
            const f = l in u ? u[l] : /* @__PURE__ */ ir(c);
            const h = c["~run"]({ value: f }, i);
            if (h.issues) {
              const d = {
                type: "object",
                origin: "value",
                input: u,
                key: l,
                value: f
              };
              for (const v of h.issues) {
                if (v.path) v.path.unshift(d);
                else v.path = [d];
                s.issues?.push(v);
              }
              if (!s.issues) s.issues = h.issues;
              if (i.abortEarly) {
                s.typed = false;
                break;
              }
            }
            if (!h.typed) s.typed = false;
            s.value[l] = h.value;
          } else if (c.fallback !== void 0) s.value[l] = /* @__PURE__ */ Ps(c);
          else if (c.type !== "exact_optional" && c.type !== "optional" && c.type !== "nullish") {
            re(this, "key", s, i, {
              input: void 0,
              expected: `"${l}"`,
              path: [{
                type: "object",
                origin: "key",
                input: u,
                key: l,
                value: u[l]
              }]
            });
            if (i.abortEarly) break;
          }
        }
        if (!s.issues || !i.abortEarly) {
          for (const l in u) if (/* @__PURE__ */ bo(u, l) && !(l in this.entries)) s.value[l] = u[l];
        }
      } else re(this, "type", s, i);
      return s;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function Cs(t) {
  return {
    kind: "schema",
    type: "null",
    reference: Cs,
    expects: "null",
    async: false,
    message: t,
    get "~standard"() {
      return /* @__PURE__ */ he(this);
    },
    "~run"(n, s) {
      if (n.value === null) n.typed = true;
      else re(this, "type", n, s);
      return n;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function ze(t, n) {
  return {
    kind: "schema",
    type: "nullable",
    reference: ze,
    expects: `(${t.expects} | null)`,
    async: false,
    wrapped: t,
    default: n,
    get "~standard"() {
      return /* @__PURE__ */ he(this);
    },
    "~run"(s, i) {
      if (s.value === null) {
        if (this.default !== void 0) s.value = /* @__PURE__ */ ir(this, s, i);
        if (s.value === null) {
          s.typed = true;
          return s;
        }
      }
      return this.wrapped["~run"](s, i);
    }
  };
}
// @__NO_SIDE_EFFECTS__
function Is(t, n) {
  return {
    kind: "schema",
    type: "nullish",
    reference: Is,
    expects: `(${t.expects} | null | undefined)`,
    async: false,
    wrapped: t,
    default: n,
    get "~standard"() {
      return /* @__PURE__ */ he(this);
    },
    "~run"(s, i) {
      if (s.value === null || s.value === void 0) {
        if (this.default !== void 0) s.value = /* @__PURE__ */ ir(this, s, i);
        if (s.value === null || s.value === void 0) {
          s.typed = true;
          return s;
        }
      }
      return this.wrapped["~run"](s, i);
    }
  };
}
// @__NO_SIDE_EFFECTS__
function w(t) {
  return {
    kind: "schema",
    type: "number",
    reference: w,
    expects: "number",
    async: false,
    message: t,
    get "~standard"() {
      return /* @__PURE__ */ he(this);
    },
    "~run"(n, s) {
      if (typeof n.value === "number" && !isNaN(n.value)) n.typed = true;
      else re(this, "type", n, s);
      return n;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function b(t, n) {
  return {
    kind: "schema",
    type: "object",
    reference: b,
    expects: "Object",
    async: false,
    entries: t,
    message: n,
    get "~standard"() {
      return /* @__PURE__ */ he(this);
    },
    "~run"(s, i) {
      const u = s.value;
      if (u && typeof u === "object") {
        s.typed = true;
        s.value = {};
        for (const l in this.entries) {
          const c = this.entries[l];
          if (l in u || (c.type === "exact_optional" || c.type === "optional" || c.type === "nullish") && c.default !== void 0) {
            const f = l in u ? u[l] : /* @__PURE__ */ ir(c);
            const h = c["~run"]({ value: f }, i);
            if (h.issues) {
              const d = {
                type: "object",
                origin: "value",
                input: u,
                key: l,
                value: f
              };
              for (const v of h.issues) {
                if (v.path) v.path.unshift(d);
                else v.path = [d];
                s.issues?.push(v);
              }
              if (!s.issues) s.issues = h.issues;
              if (i.abortEarly) {
                s.typed = false;
                break;
              }
            }
            if (!h.typed) s.typed = false;
            s.value[l] = h.value;
          } else if (c.fallback !== void 0) s.value[l] = /* @__PURE__ */ Ps(c);
          else if (c.type !== "exact_optional" && c.type !== "optional" && c.type !== "nullish") {
            re(this, "key", s, i, {
              input: void 0,
              expected: `"${l}"`,
              path: [{
                type: "object",
                origin: "key",
                input: u,
                key: l,
                value: u[l]
              }]
            });
            if (i.abortEarly) break;
          }
        }
      } else re(this, "type", s, i);
      return s;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function D(t, n) {
  return {
    kind: "schema",
    type: "optional",
    reference: D,
    expects: `(${t.expects} | undefined)`,
    async: false,
    wrapped: t,
    default: n,
    get "~standard"() {
      return /* @__PURE__ */ he(this);
    },
    "~run"(s, i) {
      if (s.value === void 0) {
        if (this.default !== void 0) s.value = /* @__PURE__ */ ir(this, s, i);
        if (s.value === void 0) {
          s.typed = true;
          return s;
        }
      }
      return this.wrapped["~run"](s, i);
    }
  };
}
// @__NO_SIDE_EFFECTS__
function L(t, n) {
  return {
    kind: "schema",
    type: "picklist",
    reference: L,
    expects: /* @__PURE__ */ Jr(t.map(Tt), "|"),
    async: false,
    options: t,
    message: n,
    get "~standard"() {
      return /* @__PURE__ */ he(this);
    },
    "~run"(s, i) {
      if (this.options.includes(s.value)) s.typed = true;
      else re(this, "type", s, i);
      return s;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function vt(t, n, s) {
  return {
    kind: "schema",
    type: "record",
    reference: vt,
    expects: "Object",
    async: false,
    key: t,
    value: n,
    message: s,
    get "~standard"() {
      return /* @__PURE__ */ he(this);
    },
    "~run"(i, u) {
      const l = i.value;
      if (l && typeof l === "object") {
        i.typed = true;
        i.value = {};
        for (const c in l) if (/* @__PURE__ */ bo(l, c)) {
          const f = l[c];
          const h = this.key["~run"]({ value: c }, u);
          if (h.issues) {
            const v = {
              type: "object",
              origin: "key",
              input: l,
              key: c,
              value: f
            };
            for (const x of h.issues) {
              x.path = [v];
              i.issues?.push(x);
            }
            if (!i.issues) i.issues = h.issues;
            if (u.abortEarly) {
              i.typed = false;
              break;
            }
          }
          const d = this.value["~run"]({ value: f }, u);
          if (d.issues) {
            const v = {
              type: "object",
              origin: "value",
              input: l,
              key: c,
              value: f
            };
            for (const x of d.issues) {
              if (x.path) x.path.unshift(v);
              else x.path = [v];
              i.issues?.push(x);
            }
            if (!i.issues) i.issues = d.issues;
            if (u.abortEarly) {
              i.typed = false;
              break;
            }
          }
          if (!h.typed || !d.typed) i.typed = false;
          if (h.typed) i.value[h.value] = d.value;
        }
      } else re(this, "type", i, u);
      return i;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function ar(t, n) {
  return {
    kind: "schema",
    type: "strict_tuple",
    reference: ar,
    expects: "Array",
    async: false,
    items: t,
    message: n,
    get "~standard"() {
      return /* @__PURE__ */ he(this);
    },
    "~run"(s, i) {
      const u = s.value;
      if (Array.isArray(u)) {
        s.typed = true;
        s.value = [];
        for (let l = 0; l < this.items.length; l++) {
          const c = u[l];
          const f = this.items[l]["~run"]({ value: c }, i);
          if (f.issues) {
            const h = {
              type: "array",
              origin: "value",
              input: u,
              key: l,
              value: c
            };
            for (const d of f.issues) {
              if (d.path) d.path.unshift(h);
              else d.path = [h];
              s.issues?.push(d);
            }
            if (!s.issues) s.issues = f.issues;
            if (i.abortEarly) {
              s.typed = false;
              break;
            }
          }
          if (!f.typed) s.typed = false;
          s.value.push(f.value);
        }
        if (!(s.issues && i.abortEarly) && this.items.length < u.length) re(this, "type", s, i, {
          input: u[this.items.length],
          expected: "never",
          path: [{
            type: "array",
            origin: "value",
            input: u,
            key: this.items.length,
            value: u[this.items.length]
          }]
        });
      } else re(this, "type", s, i);
      return s;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function S(t) {
  return {
    kind: "schema",
    type: "string",
    reference: S,
    expects: "string",
    async: false,
    message: t,
    get "~standard"() {
      return /* @__PURE__ */ he(this);
    },
    "~run"(n, s) {
      if (typeof n.value === "string") n.typed = true;
      else re(this, "type", n, s);
      return n;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function As(t, n) {
  return {
    kind: "schema",
    type: "tuple",
    reference: As,
    expects: "Array",
    async: false,
    items: t,
    message: n,
    get "~standard"() {
      return /* @__PURE__ */ he(this);
    },
    "~run"(s, i) {
      const u = s.value;
      if (Array.isArray(u)) {
        s.typed = true;
        s.value = [];
        for (let l = 0; l < this.items.length; l++) {
          const c = u[l];
          const f = this.items[l]["~run"]({ value: c }, i);
          if (f.issues) {
            const h = {
              type: "array",
              origin: "value",
              input: u,
              key: l,
              value: c
            };
            for (const d of f.issues) {
              if (d.path) d.path.unshift(h);
              else d.path = [h];
              s.issues?.push(d);
            }
            if (!s.issues) s.issues = f.issues;
            if (i.abortEarly) {
              s.typed = false;
              break;
            }
          }
          if (!f.typed) s.typed = false;
          s.value.push(f.value);
        }
      } else re(this, "type", s, i);
      return s;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function go(t) {
  let n;
  if (t) for (const s of t) if (n) n.push(...s.issues);
  else n = s.issues;
  return n;
}
// @__NO_SIDE_EFFECTS__
function Pe(t, n) {
  return {
    kind: "schema",
    type: "union",
    reference: Pe,
    expects: /* @__PURE__ */ Jr(t.map((s) => s.expects), "|"),
    async: false,
    options: t,
    message: n,
    get "~standard"() {
      return /* @__PURE__ */ he(this);
    },
    "~run"(s, i) {
      let u;
      let l;
      let c;
      for (const f of this.options) {
        const h = f["~run"]({ value: s.value }, i);
        if (h.typed) if (h.issues) if (l) l.push(h);
        else l = [h];
        else {
          u = h;
          break;
        }
        else if (c) c.push(h);
        else c = [h];
      }
      if (u) return u;
      if (l) {
        if (l.length === 1) return l[0];
        re(this, "type", s, i, { issues: /* @__PURE__ */ go(l) });
        s.typed = true;
      } else if (c?.length === 1) return c[0];
      else re(this, "type", s, i, { issues: /* @__PURE__ */ go(c) });
      return s;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function Ms() {
  return {
    kind: "schema",
    type: "unknown",
    reference: Ms,
    expects: "unknown",
    async: false,
    get "~standard"() {
      return /* @__PURE__ */ he(this);
    },
    "~run"(t) {
      t.typed = true;
      return t;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function Dt(t, n, s) {
  return {
    kind: "schema",
    type: "variant",
    reference: Dt,
    expects: "Object",
    async: false,
    key: t,
    options: n,
    message: s,
    get "~standard"() {
      return /* @__PURE__ */ he(this);
    },
    "~run"(i, u) {
      const l = i.value;
      if (l && typeof l === "object") {
        let c;
        let f = 0;
        let h = this.key;
        let d = [];
        const v = (x, A) => {
          for (const T of x.options) {
            if (T.type === "variant") v(T, new Set(A).add(T.key));
            else {
              let P = true;
              let me = 0;
              for (const X of A) {
                const de = T.entries[X];
                if (X in l ? de["~run"]({
                  typed: false,
                  value: l[X]
                }, { abortEarly: true }).issues : de.type !== "exact_optional" && de.type !== "optional" && de.type !== "nullish") {
                  P = false;
                  if (h !== X && (f < me || f === me && X in l && !(h in l))) {
                    f = me;
                    h = X;
                    d = [];
                  }
                  if (h === X) d.push(T.entries[X].expects);
                  break;
                }
                me++;
              }
              if (P) {
                const X = T["~run"]({ value: l }, u);
                if (!c || !c.typed && X.typed) c = X;
              }
            }
            if (c && !c.issues) break;
          }
        };
        v(this, /* @__PURE__ */ new Set([this.key]));
        if (c) return c;
        re(this, "type", i, u, {
          input: l[h],
          expected: /* @__PURE__ */ Jr(d, "|"),
          path: [{
            type: "object",
            origin: "value",
            input: l,
            key: h,
            value: l[h]
          }]
        });
      } else re(this, "type", i, u);
      return i;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function Qr(t, n) {
  const s = { ...t.entries };
  for (const i of n) delete s[i];
  return {
    ...t,
    entries: s,
    get "~standard"() {
      return /* @__PURE__ */ he(this);
    }
  };
}
function H(t, n, s) {
  const i = t["~run"]({ value: n }, /* @__PURE__ */ So(s));
  if (i.issues) throw new kf(i.issues);
  return i.value;
}
// @__NO_SIDE_EFFECTS__
function U(t, n) {
  const s = {};
  for (const i in t.entries) s[i] = !n || n.includes(i) ? /* @__PURE__ */ D(t.entries[i]) : t.entries[i];
  return {
    ...t,
    entries: s,
    get "~standard"() {
      return /* @__PURE__ */ he(this);
    }
  };
}
// @__NO_SIDE_EFFECTS__
function E(...t) {
  return {
    ...t[0],
    pipe: t,
    get "~standard"() {
      return /* @__PURE__ */ he(this);
    },
    "~run"(n, s) {
      for (const i of t) if (i.kind !== "metadata") {
        if (n.issues && (i.kind === "schema" || i.kind === "transformation")) {
          n.typed = false;
          break;
        }
        if (!n.issues || !s.abortEarly && !s.abortPipeEarly) n = i["~run"](n, s);
      }
      return n;
    }
  };
}

// ../schema/src/constants/annotations.ts
var Cf = {
  "Callout Line": "calloutLine",
  "Vertical Line": "verticalLine",
  "Marker with Text": "markerWithText",
  "Text Only": "textOnly"
};
var _o = Object.values(Cf);
var Eo = [
  "left",
  "leftTop",
  "top",
  "rightTop",
  "right",
  "rightBottom",
  "bottom",
  "leftBottom"
];
var Oo = [
  "aboveStart",
  "belowStart",
  "aboveEnd",
  "belowEnd",
  "rightStart",
  "leftStart",
  "rightEnd",
  "leftEnd"
];

// ../schema/src/base/annotations.ts
var To = b({
  text: S(),
  seriesId: ze(S()),
  primaryAxisPosition: ze(S()),
  type: L(_o),
  orientation: L(Eo),
  xOffset: w(),
  yOffset: w(),
  hideOnMobile: N()
});
var ko = b({
  start: ze(S()),
  end: ze(S())
});
var Do = b({
  label: S(),
  labelOrientation: L(Oo),
  value: w()
});
var ws = U(
  b({
    textAnnotations: F(To),
    dataRangeHighlights: b({
      label: S(),
      highlights: F(ko)
    }),
    thresholdIndicators: F(Do),
    highlightDataRows: b({
      label: S(),
      colorPaletteIndex: w(),
      rows: F(w()),
      reverse: N()
    })
  })
);

// ../schema/src/base/area.ts
var or = {};
se(or, {
  AreaOptionsSchema: () => Ns
});

// ../schema/src/constants/area.ts
var If = {
  "Stacked Area": "stacked",
  "Proportional Area": "proportional"
};
var Po = Object.values(If);
var Af = {
  None: "none",
  Ascending: "ascending",
  Descending: "descending"
};
var Co = Object.values(Af);

// ../schema/src/base/area.ts
var Ns = D(
  U(
    b({
      style: L(Po),
      order: L(Co),
      displayActualValues: N()
    })
  )
);

// ../schema/src/base/barline.ts
var Ut = {};
se(Ut, {
  BarLineOptionsSchema: () => Ls,
  BarLineSeriesInfoSchema: () => Mo
});

// ../schema/src/constants/barline.ts
var Kr = {
  Line: "line",
  Bar: "bar"
};
var Io = Object.values(Kr);
var Mf = {
  Stacked: "lineStackedBar",
  Grouped: "lineGroupedBar"
};
var Ao = Object.values(Mf);

// ../schema/src/base/barline.ts
var Mo = K({
  type: L(Io)
});
var Ls = D(
  U(
    b({
      barlineStyle: L(Ao),
      seriesInfo: F(Mo)
    })
  )
);

// ../schema/src/base/candlestick.ts
var lr = {};
se(lr, {
  CandlestickOptionsSchema: () => js,
  CandlestickSeriesInfoSchema: () => Lo,
  ColumnMappingsSchema: () => No
});

// ../schema/src/constants/candlesticks.ts
var en = ["open", "high", "low", "close"];
var Ys = {
  Candle: "Candle",
  OHLC: "OHLC"
};
var wo = Object.values(Ys);
var Fs = {
  Market: "Market",
  Monochrome: "Monochrome"
};
var Ro = Object.values(
  Fs
);

// ../schema/src/base/candlestick.ts
var No = E(
  b({
    open: E(
      S(),
      ne(
        "Field name used for the opening value (custom, must exist in fields)."
      )
    ),
    high: E(
      S(),
      ne(
        "Field name used for the high value (custom, must exist in fields)."
      )
    ),
    low: E(
      S(),
      ne(
        "Field name used for the low value (custom, must exist in fields)."
      )
    ),
    close: E(
      S(),
      ne(
        "Field name used for the closing value (custom, must exist in fields)."
      )
    )
  }),
  Te(
    ge((t) => {
      const n = [t.open, t.high, t.low, t.close];
      return new Set(n).size === n.length;
    }, "Each OHLC mapping must be unique."),
    ["open"]
  )
);
var Lo = U(
  b({
    seriesName: S(),
    emphasize: N()
  })
);
var js = D(
  U(
    b({
      candlestickType: L(wo),
      colorMode: L(Ro),
      columnMappings: No,
      candlestickSeriesInfo: Lo
    })
  )
);

// ../schema/src/base/comparison.ts
var ur = {};
se(ur, {
  ComparisonOptionsSchema: () => Bs
});
var Bs = D(
  U(
    b({
      showPercentageChange: N()
    })
  )
);

// ../schema/src/base/dumbbell.ts
var cr = {};
se(cr, {
  DumbbellOptionsSchema: () => tn
});
var tn = U(
  K({
    useArrow: N(),
    hideLine: N(),
    sort: N(),
    // sortByIndex refers to the data column index (not zero based)
    sortByIndex: E(
      w(),
      Qe(
        1,
        "Value must be above 0 as first data column is assumed to be x axis"
      ),
      ne(
        "The data column to sort by. Do not use index 0, as that is the x axis. Must be >= 1 and <= number of columns."
      )
    ),
    reverseSort: N()
  })
);

// ../schema/src/base/elements.ts
var Ct = {};
se(Ct, {
  AdditionalSeriesOptionsSchema: () => Ws,
  AssociatedTagSchema: () => Xs,
  AxisPropertiesSchema: () => Xe,
  ColorOverrideInfoSchema: () => qs,
  DesignPropertiesSchema: () => zs,
  DottedLineSegmentInfoSchema: () => Us,
  LabelPropertiesSchema: () => pr,
  MetadataSchema: () => Zs,
  SeriesPropertiesSchema: () => Vs,
  TerminalPropertiesSchema: () => rn,
  TooltipOptionsSchema: () => Gs
});

// ../schema/src/constants/date.ts
var Yo = [
  "automatic",
  "YYYY/M/D",
  "MMMM D, YYYY",
  "YYYY MMMM",
  "YYYY MMM",
  "YYYY",
  `YYYY, 'YY`,
  `'YY`,
  `MMM 'YY`,
  "MMM",
  "MMMM",
  "MMM D",
  "HH, MM/D",
  "HH, MMM D",
  "YYYY QN, QN+1",
  `'YY QN`,
  "days of week"
];
var Pt = [
  "minutes",
  "hours",
  "days",
  "daysofweek",
  "weeks",
  "multiweek",
  "months",
  "quarters",
  "yearlyQuarters",
  "years",
  "decade",
  "multidecade",
  "century",
  ""
];
var Fo = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday"
];
var wf = {
  auto: "auto",
  YYYY: "YYYY",
  "MMM YYYY": "ttt YYYY",
  "MMM D YYYY": "ttt D YYYY",
  "MMM D": "ttt D",
  D: "D"
};
var jo = Object.values(
  wf
);
var Bo = {
  "0": 0,
  "1": 1,
  "2": 2,
  "3": 3,
  "4": 4,
  "5": 5,
  "6": 6
};
var pv = Object.values(Bo);
var Rf = {
  auto: "auto",
  "MM/DD/YYYY": "MM/DD/YYYY",
  "MM/DD/YYYY HH:mm": "MM/DD/YYYY HH:mm",
  "MMM YYYY": "ttt YYYY",
  YYYY: "YYYY",
  "MMMM Do": "MMMM Do",
  "[Q]Q YYYY": "[Q]Q YYYY",
  MMMM: "MMMM",
  "MMM D YYYY": "ttt D YYYY",
  "MMM Do YYYY": "ttt Do YYYY",
  "[FY] YYYY": "[FY] YYYY",
  "M/D": "M/D",
  "hh:mm:ss": "hh:mm:ss",
  "YYYY/MM/DD": "YYYY/MM/DD",
  "YYYY/M/D": "YYYY/M/D",
  "M/D hh:mm": "M/D hh:mm"
};
var $o = Object.values(Rf);
var Nf = {
  ...Bo,
  auto: "auto"
};
var Ho = Object.values(Nf);

// ../schema/src/constants/design.ts
var Lf = {
  Gray: "gray",
  Opacity: "opacity"
};
var Go = Object.values(Lf);
var Uo = "Others";
var Yf = {
  Linear: "linear",
  "Step Before": "stepBefore",
  "Step After": "stepAfter"
};
var qo = Object.values(Yf);
var Ff = {
  Dotted: "dotted",
  Solid: "solid",
  Hidden: "hidden"
};
var Vo = Object.values(Ff);
var Wo = ["dark", "light"];
var jf = {
  Small: 20,
  Medium: 26,
  Large: 45,
  "X-Large": 60
};
var zo = Object.values(jf);
var Xo = 5;
var Zo = 0.1;
var Bf = {
  "4:1": 0.25,
  "3:1": 0.3333,
  "5:2": 0.4,
  "2:1": 0.5,
  "3:2": 0.6666,
  "4:3": 0.75,
  "5:4": 0.8,
  "1:1": 1
};
var Jo = Object.values(Bf);

// ../schema/src/constants/metadata.ts
var $f = "Source: ";
var Hf = "Note: ";
var $s = [$f, "Sources: "];
var Hs = [Hf];
var Qo = "Local Language";
var Ko = [
  "English",
  "German",
  "Japanese",
  "Korean",
  "Portuguese",
  "Russian",
  "Simplified Chinese",
  "Spanish",
  "Traditional Chinese",
  "Turkish"
];

// ../schema/src/base/elements.ts
var pr = U(
  b({
    name: S(),
    prefix: S(),
    postfix: S(),
    enableDensity: N(),
    density: w(),
    decimals: w(),
    tooltipDecimals: w(),
    displayFormat: L(Yo)
  })
);
var Xe = U(
  b({
    forceFirstLast: N(),
    isIntraday: N(),
    preserveOrder: N(),
    label: E(
      pr,
      ne(
        "Use this to set axis labels. For the y-axis, use `prefix` or `postfix` to set units (such as `$`). For the x-axis, you can use `name` to set an axis-wide label."
      )
    ),
    min: Pe([S(), w()]),
    max: Pe([S(), w()]),
    startWeekday: L(Fo),
    gridLines: N(),
    interval: w(),
    decimals: w(),
    displayFullNumbers: N(),
    tickDensity: w(),
    hideZeroLine: w(),
    disableSorting: N(),
    forceVisibleZero: N(),
    forceLowerCaseUnits: N(),
    unit: S(),
    customTickDateFormat: L(jo),
    preventNumericalFormatting: N(),
    dateAxisGrouping: L([...Pt, "auto"]),
    showOptionalAxis: N()
  })
);
var Gs = U(
  b({
    disableTooltips: N(),
    dateFormat: L($o),
    tooltipDecimals: L(Ho),
    displayUnit: N(),
    hideNonExistingDataPoints: N(),
    displayFullNumbers: N()
  })
);
var Us = b({
  seriesId: S(),
  from: ze(Pe([S(), w(), Gt()])),
  to: ze(Pe([S(), w(), Gt()]))
});
var qs = b({
  seriesId: S(),
  paletteIndex: w()
});
var Vs = U(
  b({
    emphasize: F(S()),
    dottedLineSegments: F(Us),
    colorOverrides: F(qs),
    deemphasisMode: L(Go),
    deemphasizedGroupName: S()
  })
);
var Ws = U(
  b({
    stepType: L(qo),
    missingDataStyle: L(Vo)
  })
);
var zs = U(
  b({
    plotHeight: w(),
    originalTheme: S(),
    contentDestination: E(
      L(Object.values(Je)),
      ne(
        "If contentDestination is not specified, Toaster will infer it from your PVFs."
      )
    ),
    tooltips: Gs,
    seriesOptions: Vs,
    overrideOptions: S(),
    heightMode: ae("ratio"),
    heightRatio: E(
      Pe([
        E(
          L(Jo),
          ne(
            "These values are the options seen in the Toaster editor."
          )
        ),
        E(
          w(),
          Qe(Zo),
          Os(Xo),
          ne(
            "You may also specify a custom value within this range."
          )
        )
      ]),
      ne(
        "The ratio is given as height divided by width (ex. 0.5 is twice as wide as it is tall)."
      )
    ),
    barHeight: L(zo),
    variant: L(Wo),
    additionalSeriesOptions: Ws
  })
);
var Xs = b({
  display: S(),
  label: S(),
  type: S(),
  value: S(),
  resource_id: S()
});
var Zs = U(
  b({
    associatedTickers: E(
      Pe([F(S()), F(Xs)]),
      ne(
        "Use this field to specify any tickers (in parse key format) used for the chart's data."
      )
    ),
    language: L(Ko),
    niCodes: D(F(S())),
    peopleCodes: D(F(S()))
  })
);
var rn = U(
  b({
    disableInteractivity: N(),
    links: U(
      b({
        function: E(
          S(),
          ne(
            "If specified, this link will render as a button on the interactive embedded chart. Be sure that the link is well-formed and client-accessible."
          )
        ),
        data: S()
      })
    )
  })
);

// ../schema/src/base/fields.ts
var fr = {};
se(fr, {
  FieldPropertiesSchema: () => Js,
  TransformationPropertiesSchema: () => il
});

// ../schema/src/constants/fields.ts
var el = [
  "numeric",
  "string",
  "date",
  "year",
  "quarter",
  "month",
  "month/day",
  "year/month",
  "null"
];
var Gf = ["$", "\u20AC"];
var Uf = ["%"];
var tl = [...Gf, ...Uf];
var rl = 0.1;
var nl = [
  "Add",
  "Subtract",
  "Multiply",
  "Divide"
];
var sl = ["simple", "factor", "percentage"];

// ../schema/src/base/primitive.ts
var nn = Pe([
  E(
    Gt(),
    $((t) => t.toISOString())
  ),
  E(S(), xs())
]);

// ../schema/src/base/fields.ts
var il = U(
  b({
    binaryArithmetic: U(
      b({
        operation: L(nl),
        lhs: U(
          b({
            value: w(),
            query: S()
          })
        ),
        rhs: U(
          b({
            value: w(),
            query: S()
          })
        )
      })
    ),
    normalization: U(
      b({
        type: L(sl),
        factor: w(),
        baseDate: nn
      })
    )
  })
);
var Js = U(
  K({
    name: E(
      Is(S()),
      ne(
        "For fields corresponding to y-axis entries, this will be used for the series label in the chart legend."
      )
    ),
    label: pr,
    dateFormat: S(),
    transformation: il,
    query: S()
  })
);

// ../schema/src/base/multipanel.ts
var Ks = {};
se(Ks, {
  DualAxisOptionsSchema: () => Qs,
  PanelOptionsSchema: () => It
});

// ../schema/src/constants/series.ts
var al = {
  Line: "line",
  Bar: "bar",
  "Stacked Bar": "stackedVbar",
  Area: "area"
};

// ../schema/src/constants/multiples.ts
var sn = Object.values(
  al
);
var qf = {
  "Small (80px)": "small",
  "Medium (120px)": "medium",
  "Large (200px)": "large"
};
var an = Object.values(qf);

// ../schema/src/base/multipanel.ts
var It = U(
  K({
    chartType: L(sn),
    seriesIndexes: F(
      E(
        w(),
        Qe(
          1,
          "Value must be above 0 as first data column is assumed to be x axis"
        ),
        ne(
          "The data columns to include in this panel. Do not include index 0, as that is the x axis. Values must be 1 or above"
        )
      )
    ),
    axisProperties: Xe,
    panelHeight: L(an),
    panelDescription: E(
      S(),
      ne(
        "Panel descriptions appear above the chart as additional context to the panel"
      )
    )
  })
);
var Qs = b({
  right: It,
  left: It
});

// ../schema/src/base/multiples.ts
var ei = {};
se(ei, {
  MultiplesOptionsSchema: () => hr,
  MultiplesSeriesInfoSchema: () => on
});
var on = b({
  colorIndex: D(
    E(
      w(),
      Qe(0, "colorIndex cannot be less than 0"),
      ne("Index of color palette color for this series in panel")
    )
  ),
  seriesLabel: D(
    E(S(), ne("Legend text for this series"))
  )
});
var hr = U(
  K({
    numSeriesPerMultiple: E(
      w(),
      Qe(1),
      ne(
        "Number of series to include in each panel. Ex. 2 means series 1 and 2 in the first panel, series 3 and 4 in the second, and so on."
      )
    ),
    smallMultiplesType: L(sn),
    multiplesSeriesInfos: E(
      F(on),
      ne(
        "Controls palette color index and legend label for nth series in each multiple"
      )
    ),
    chartHeight: L(an),
    axisProperties: F(Xe)
  })
);

// ../schema/src/base/table.ts
var si = {};
se(si, {
  ColorRampSettingsSchema: () => dl,
  HeatmapOptionsSchema: () => mr,
  SharedTableSchema: () => ri,
  TableCellOptionsSchema: () => ml,
  TableColumnOptionsSchema: () => hl,
  TableOptionsSchema: () => ni,
  TableRowOptionsSchema: () => fl
});

// ../schema/src/constants/table.ts
var Vf = {
  Text: "text",
  Bar: "bar",
  "+/-": "plusMinus",
  Arrow: "arrow"
};
var ol = Object.values(Vf);
var Wf = {
  Regular: "none",
  Subheader: "subheader",
  Highlight: "highlight",
  Summary: "summary"
};
var ll = Object.values(Wf);
var zf = {
  "Whole Table": "table",
  "Every Row": "row",
  "Every Column": "column"
};
var ul = Object.values(zf);
var ti = {
  "Jenks (Natural Breakpoints)": "jenks",
  "Continuous (Smooth Gradient)": "minMax",
  "Buckets (Equal-size Groups)": "buckets",
  "Distribution (Data Quantiles)": "distribution",
  Custom: "custom"
};
var cl = Object.values(
  ti
);
var pl = ["auto", "right", "center", "left"];

// ../schema/src/base/table.ts
var fl = b({
  rowIndex: w(),
  rowStyleType: L(ll)
});
var hl = b({
  columnIndex: w(),
  numericColumnType: D(L(ol)),
  displayFullNumbers: D(N()),
  forceLowerCaseUnits: D(N()),
  preventNumericFormatting: D(N()),
  decimals: D(w()),
  prefix: D(S()),
  postfix: D(S()),
  contentAlignment: D(L(pl)),
  widthPercent: D(S()),
  dateFormat: D(S()),
  hideOnMobile: D(N()),
  hideOnDesktop: D(N()),
  highlightColumn: D(N()),
  excludeFromHeatmap: D(N())
});
var ml = U(
  b({
    hideEmptyValueSymbol: N(),
    highlight: N()
  })
);
var dl = U(
  b({
    nStops: w(),
    strategy: L(cl),
    divergingMiddleValue: w()
  })
);
var ri = b({
  rowOptions: F(fl),
  columnOptions: F(hl),
  cellOptions: vt(S(), ml),
  // note: I'd love to be more specific here about what the key needs to be (column,number), but valibot doesn't like a v.pipe as a key to a record
  disableSort: N()
});
var ni = D(
  U(
    b({
      ...ri.entries,
      barsShareScale: N(),
      barColorOverrideMap: vt(S(), w()),
      highlightAlternating: N()
    })
  )
);
var mr = E(
  U(
    b({
      ...ri.entries,
      showLegend: N(),
      heatmapLegendLabelText: ar([S(), S()]),
      heatmapLegendPrefix: S(),
      heatmapLegendPostfix: S(),
      hideValues: N(),
      heatmapTarget: L(ul),
      treatFirstColumnAsValue: N(),
      reverseScale: N(),
      colorRampSettings: dl
    })
  ),
  Te(
    ks(
      [["showLegend"], ["heatmapLegendLabelText"]],
      (t) => {
        if (t.heatmapLegendLabelText) {
          return t.showLegend === true;
        }
        return true;
      },
      "heatmapLegendLabelText requires showLegend to be true"
    ),
    ["heatmapLegendLabelText"]
  )
);

// ../schema/src/base/schemas.ts
var ve = {};
se(ve, {
  AreaChartSchema: () => mc,
  BarChartSchema: () => cc,
  BarLineChartSchema: () => dc,
  CandlestickChartSchema: () => vc,
  ChartSchema: () => sy,
  CommonSchema: () => lc,
  ComparisonChartSchema: () => _c,
  DualAxisChartSchema: () => xc,
  DumbbellChartSchema: () => Sc,
  HbarChartSchema: () => pc,
  HeatmapSchema: () => Tc,
  HorizontalDumbbellChartSchema: () => bc,
  LineChartSchema: () => uc,
  MultiplesChartSchema: () => gc,
  PieChartSchema: () => Ec,
  StackedHbarChartSchema: () => hc,
  StackedPanelChartSchema: () => yc,
  StackedVbarChartSchema: () => fc,
  TableSchema: () => Oc
});
var oc = vf(ic(), 1);

// ../schema/src/checks/barline.ts
var bn = {};
se(bn, {
  seriesInfoCheck: () => Ud
});
var Ud = Te(
  ge(
    (t) => !Ne("barline", t) || t.barline === void 0 || t.barline.seriesInfo === void 0 || t.barline.seriesInfo.length === t.data[0].length - 1,
    (t) => {
      if (!Ne("barline", t.input)) return "";
      const n = t.input.data[0].length - 1;
      const s = t.input.barline?.seriesInfo?.length ?? 0;
      return `Must match number of series (expected ${n}, found ${s}).`;
    }
  ),
  ["barline.seriesInfo"]
);

// ../schema/src/checks/candlestick.ts
var Vt = {};
se(Vt, {
  columnMappingsCheck: () => Wd,
  fieldNamesCheck: () => Vd,
  fieldsLengthCheck: () => qd
});
var qd = Te(
  ge((t) => {
    if (!Ne("candlestick", t)) return true;
    if (!t.fields) return false;
    return t.fields.length > 4;
  }, "Candlestick charts require at least four numeric fields (Open, High, Low, Close)"),
  ["fields"]
);
var Vd = Te(
  ge((t) => {
    if (!Ne("candlestick", t)) return true;
    if (!t.fields) return false;
    return t.fields.every((n) => n.name && n.name.trim().length > 0);
  }, "Candlestick charts require every field to have a non-empty name"),
  ["fields"]
);
var Wd = Te(
  ge((t) => {
    if (!Ne("candlestick", t)) return true;
    if (!t.fields || !t.candlestick?.columnMappings) return true;
    const n = new Set(t.fields.map((c) => c.name).filter(Boolean));
    const { open: s, high: i, low: u, close: l } = t.candlestick.columnMappings;
    return [s, i, u, l].every((c) => n.has(c));
  }, "Each OHLC mapping must correspond to an existing field name."),
  ["candlestick.columnMappings"]
);

// ../schema/src/checks/dumbbell.ts
var En = {};
se(En, {
  checkSortByIndex: () => xn,
  formatSortByIndexCheckMessage: () => _n,
  sortByIndexCheck: () => zd
});
function xn(t) {
  const n = t.dumbbell?.sortByIndex;
  if (!n) return true;
  const s = t.data[0].length - 1;
  return n <= s;
}
function _n(t) {
  const n = t.dumbbell.sortByIndex;
  const s = t.data[0].length - 1;
  return `sortByIndex must be between 1 and ${s}, inclusive (received ${n}).`;
}
var zd = Te(
  ge(
    (t) => !Ne("dumbbell", t) || xn(t),
    (t) => {
      if (!Ne("dumbbell", t.input)) return "";
      return _n(t.input);
    }
  ),
  ["dumbbell.sortByIndex"]
);

// ../schema/src/checks/horizontalDumbbell.ts
var On = {};
se(On, {
  sortByIndexCheck: () => Xd
});
var Xd = Te(
  ge(
    (t) => !Ne("horizontalDumbbell", t) || xn(t),
    (t) => {
      if (!Ne("horizontalDumbbell", t.input)) return "";
      return _n(t.input);
    }
  ),
  ["dumbbell.sortByIndex"]
);

// ../schema/src/checks/multiples.ts
var Tn = {};
se(Tn, {
  numSeriesPerMultipleCheck: () => Zd
});
var Zd = Te(
  ge(
    (t) => !Ne("multiples", t) || !t.multiples || t.data[0].length - 1 >= (t.multiples.numSeriesPerMultiple ?? 0),
    "Number of series in each multiple must not exceed the number of series total"
  ),
  ["multiples.numSeriesPerMultiple"]
);

// ../schema/src/checks/universal.ts
var kn = {};
se(kn, {
  fieldsDataCheck: () => Jd
});
var Jd = Te(
  ge(
    (t) => {
      if (!t.fields) return true;
      const n = t.fields.length;
      const s = t.data[0].length;
      return n === s;
    },
    (t) => `Must be the same length as data entries (expected ${t.input.data[0].length}, found ${t.input.fields.length}).`
  ),
  ["fields"]
);

// ../schema/src/constants/type.ts
var Kd = [
  "line",
  "bar",
  "stackedHbar",
  "stackedVbar",
  "hbar",
  "candlestick",
  "barline",
  "area",
  "stackedPanel",
  "multiples",
  "dumbbell",
  "horizontalDumbbell",
  "dualAxis"
];
var ey = ["comparison", "pie"];
var ty = ["table", "heatmap"];
var ac = [
  ...Kd,
  ...ey,
  ...ty
];

// ../schema/src/constants/values.ts
var Oi = "Each data entry must contain exactly one label (string) and one value (number).";

// ../schema/src/base/values.ts
var Ti = ar(
  [S(Oi), w(Oi)],
  "Each data entry must be a two-entry array of type (string, number)."
);

// ../schema/src/base/schemas.ts
var lc = K({
  type: L(ac),
  origin: E(
    S(),
    ne(
      "The app that created the chart. If you're unsure what this value should be, reach out to the Toaster team."
    )
  ),
  version: E(
    S(),
    ge((t) => oc.default.major(t) === 1),
    ne("In almost all cases, this should be 1.0.0.")
  ),
  data: E(
    F(F(Ms(), "Each data entry must be an array.")),
    Ts(1),
    ne(
      "Each entry is of the form `[<x-axis value>, ...<y-axis value(s)>]`, where multiple series correspond to multiple y-axis values. If there is data for only some of the series, the missing data can be filled in with a null value. If there is no data for any of the series (ex. a weekend or holiday for trading data), the entry should be omitted entirely from data."
    )
  ),
  fields: E(
    D(F(Js)),
    ne(
      "If specified, the fields array should be the same length as each entry in data, and should correspond (i.e. the first entry should be for the x-axis and the others for y-axis values)."
    )
  ),
  axis: D(
    U(
      K({
        primary: Xe,
        secondary: Xe
      })
    )
  ),
  title: D(S()),
  subtitle: D(S()),
  footnote: D(S()),
  source: D(S()),
  hideFromCHRT: D(N()),
  preventReuse: D(N()),
  theme: E(
    D(S()),
    ne(
      "If theme is not specified, Toaster will attempt to infer it from your PVFs. For example, for a user with access to Toaster through the BNEF organization, Toaster will default to using the BNEF theme."
    )
  ),
  metadata: D(Zs),
  design: D(zs),
  annotations: D(ws),
  terminal: D(rn)
});
var uc = K({ type: ae("line") });
var cc = K({ type: ae("bar") });
var pc = K({ type: ae("hbar") });
var fc = K({
  type: ae("stackedVbar")
});
var hc = K({
  type: ae("stackedHbar")
});
var mc = K({
  type: ae("area"),
  area: Ns
});
var dc = K({
  type: ae("barline"),
  barline: Ls
});
var yc = K({
  type: ae("stackedPanel"),
  stackedPanels: E(
    D(F(It)),
    ge(
      (t) => !t || t.length <= 3,
      "Maximum of 3 stacked panels allowed."
    )
  )
});
var vc = K({
  type: ae("candlestick"),
  candlestick: js
});
var gc = K({
  type: ae("multiples"),
  multiples: E(
    D(hr),
    ge(
      (t) => !t || !t.numSeriesPerMultiple || !t.multiplesSeriesInfos || t.multiplesSeriesInfos.length <= t.numSeriesPerMultiple,
      "Number of multiplesSeriesInfos must not be more than numSeriesPerMultiple"
    )
  )
});
var Sc = K({
  type: ae("dumbbell"),
  dumbbell: D(tn)
});
var bc = K({
  type: ae("horizontalDumbbell"),
  dumbbell: D(tn)
});
var xc = K({
  type: ae("dualAxis"),
  dualAxis: D(Qs)
});
var _c = K({
  type: ae("comparison"),
  comparison: Bs,
  data: E(
    F(Ti),
    _s(2, "Data should have exactly two entries.")
  )
});
var Ec = K({
  type: ae("pie"),
  data: E(
    F(Ti),
    Es(6, "Pie charts support at most 6 entries.")
  )
});
var Oc = K({
  type: ae("table"),
  table: D(ni)
});
var Tc = K({
  type: ae("heatmap"),
  table: D(mr)
});
var ry = Dt("type", [
  uc,
  cc,
  dc,
  pc,
  fc,
  hc,
  mc,
  yc,
  vc,
  gc,
  Sc,
  bc,
  xc,
  _c,
  Ec,
  Oc,
  Tc
]);
var ny = kt([lc, ry]);
var sy = E(
  ny,
  // add checks that apply to all chart types here
  kn.fieldsDataCheck,
  // add any chart type-specific checks below
  bn.seriesInfoCheck,
  Vt.fieldsLengthCheck,
  Vt.fieldNamesCheck,
  Vt.columnMappingsCheck,
  Tn.numSeriesPerMultipleCheck,
  En.sortByIndexCheck,
  On.sortByIndexCheck
);

// ../schema/src/prepared/index.ts
var Q = {};
se(Q, {
  Barline: () => ki,
  Candlestick: () => Di,
  Colors: () => Ci,
  Dumbbell: () => Ii,
  Elements: () => Bi,
  Fields: () => $i,
  MultiPanel: () => Ui,
  Multiples: () => qi,
  Schemas: () => Er,
  Table: () => Vi
});

// ../schema/src/prepared/barline.ts
var ki = {};
se(ki, {
  BarLineOptionsSchema: () => ay,
  BarLineSeriesInfoSchema: () => iy
});
var iy = b({
  ...Ut.BarLineSeriesInfoSchema.entries,
  seriesId: S()
});
var ay = E(
  Ut.BarLineOptionsSchema,
  $((t) => ({
    barlineStyle: t?.barlineStyle ?? "lineStackedBar",
    seriesInfo: t?.seriesInfo ?? []
  }))
);

// ../schema/src/prepared/candlestick.ts
var Di = {};
se(Di, {
  CandlestickOptionsSchema: () => oy
});
var oy = E(
  D(lr.CandlestickOptionsSchema),
  $((t) => {
    const n = t ?? {};
    return {
      candlestickType: n.candlestickType ?? Ys.Candle,
      colorMode: n.colorMode ?? Fs.Market,
      columnMappings: {
        open: n.columnMappings?.open ?? "",
        high: n.columnMappings?.high ?? "",
        low: n.columnMappings?.low ?? "",
        close: n.columnMappings?.close ?? ""
      },
      candlestickSeriesInfo: {
        seriesName: n.candlestickSeriesInfo?.seriesName ?? "",
        emphasize: n.candlestickSeriesInfo?.emphasize ?? false
      }
    };
  })
);

// ../schema/src/prepared/colors.ts
var Ci = {};
se(Ci, {
  ColorThemePaletteSchema: () => kc,
  ColorThemePaletteVariantSchema: () => Pi,
  OrganizationColorThemeSchema: () => ly
});
var Pi = b({
  palette: F(S())
});
var kc = b({
  type: L(Aa),
  name: S(),
  id: S(),
  colors: b({
    dark: Pi,
    light: Pi
  })
});
var ly = b({
  palettes: F(kc)
});

// ../schema/src/prepared/dumbbell.ts
var Ii = {};
se(Ii, {
  DumbbellOptionsSchema: () => uy
});
var uy = E(
  D(cr.DumbbellOptionsSchema),
  $((t) => ({
    useArrow: t?.useArrow ?? false,
    hideLine: t?.hideLine ?? false,
    sort: t?.sort ?? false,
    sortBy: t?.sortBy ?? "",
    reverseSort: t?.reverseSort ?? false
  }))
);

// ../schema/src/prepared/elements.ts
var Bi = {};
se(Bi, {
  AdditionalSeriesOptionsSchema: () => Ws,
  AssociatedTagSchema: () => Xs,
  AxisPropertiesSchema: () => Xe,
  ColorOverrideInfoSchema: () => qs,
  DesignPropertiesSchema: () => Yi,
  DottedLineSegmentInfoSchema: () => Us,
  LabelPropertiesSchema: () => pr,
  MetadataSchema: () => Fi,
  SecondaryAxisSchema: () => ji,
  SeriesPropertiesSchema: () => Vs,
  TerminalPropertiesSchema: () => rn,
  TooltipOptionsSchema: () => Gs
});

// ../schema/src/utils/barline.ts
function cy(t) {
  if (t.length <= 1) return [];
  const n = Kr.Line;
  const s = Kr.Bar;
  return t.slice(1).map((i, u) => ({ type: u === 0 ? n : s }));
}
function py(t, n) {
  const s = t?.length ? t : cy(n);
  return s.map((i, u) => {
    if (De(Q.Barline.BarLineSeriesInfoSchema, i)) return i;
    return H(Q.Barline.BarLineSeriesInfoSchema, {
      ...i,
      // add one to skip x-axis
      seriesId: n[u + 1].id
    });
  });
}
function Dc(t, n) {
  return H(Q.Barline.BarLineOptionsSchema, {
    ...t,
    seriesInfo: py(t?.seriesInfo, n)
  });
}

// ../schema/src/utils/candlestick.ts
function Pc(t, n) {
  const s = H(
    Q.Candlestick.CandlestickOptionsSchema,
    t
  );
  const i = n.filter(
    (f) => !f.taxonomy.isPrimary && f.name && f.name.trim().length > 0
  );
  const u = new Map(
    i.map((f) => [f.name.toLowerCase(), f.name])
  );
  en.forEach((f) => {
    if (!s.columnMappings[f]) {
      const h = u.get(f);
      if (h) s.columnMappings[f] = h;
    }
  });
  const l = new Set(
    en.map((f) => s.columnMappings[f]).filter(
      (f) => f && f.length
    )
  );
  const c = i.map((f) => f.name).filter((f) => !l.has(f));
  en.forEach((f) => {
    if (!s.columnMappings[f] && c.length) {
      s.columnMappings[f] = c.shift();
    }
  });
  return s;
}

// ../schema/src/utils/colors.ts
function fy(t) {
  switch (t) {
    case Je.BI:
      return "bi";
    case Je.BNEF:
      return "bnef";
    case Je.OPINION:
      return "opinion";
    case Je.INDG_TAX:
      return "indgtax";
    case Je.INDG_LAW:
      return "indglaw";
    case Je.INDG_GOVERNMENT:
      return "indggov";
    case Je.BECO:
      return "beco";
    default:
      return "bnews";
  }
}
function hy(t, n) {
  const s = fy(t ?? "News");
  const i = Ma(n);
  const u = es.filter((h) => {
    const d = h.destinations.includes("*") || h.destinations.includes(s);
    const v = h.chartTypes.includes(n);
    const x = i.includes(h.type);
    return d && v && x;
  });
  const l = new Set(u.map((h) => h.type));
  const c = es.filter((h) => {
    const d = h.destinations.includes("*") || h.destinations.includes(s);
    const v = h.chartTypes.includes("*");
    const x = i.includes(h.type);
    const A = l.has(h.type);
    return d && v && x && !A;
  });
  const f = [...u, ...c].sort(
    (h, d) => (h.priority ?? 100) - (d.priority ?? 100)
  );
  return f.map(
    ({
      destinations: h,
      chartTypes: d,
      priority: v,
      ...x
    }) => x
  );
}
function Cc(t, n) {
  const s = hy(t, n);
  return s[0];
}

// ../schema/src/utils/dumbbell.ts
function Ai(t, n) {
  const s = n.filter((c) => !c.taxonomy.isPrimary && c.id).map((c) => c.id);
  const i = t?.sortBy;
  const u = De(gt.Dumbbell.DumbbellOptionsSchema, t);
  const l = u ? n[t.sortByIndex ?? 0]?.id : s[0];
  return H(Q.Dumbbell.DumbbellOptionsSchema, {
    ...t,
    sortBy: i ? t.sortBy : l
  });
}

// ../utils/dist/index.es.js
function Mc(t, n) {
  function s(l, c) {
    const f = [], h = [];
    let d, v, x = 0;
    for (d = 0; d < l.length + 1; d++) {
      const A = [], T = [];
      for (v = 0; v < c + 1; v++)
        A.push(0), T.push(0);
      f.push(A), h.push(T);
    }
    for (d = 1; d < c + 1; d++)
      for (f[1][d] = 1, h[1][d] = 0, v = 2; v < l.length + 1; v++)
        h[v][d] = 1 / 0;
    for (let A = 2; A < l.length + 1; A++) {
      let T = 0, P = 0, me = 0, X = 0;
      for (let de = 1; de < A + 1; de++) {
        const le = A - de + 1, xe = l[le - 1];
        if (me++, T += xe, P += xe * xe, x = P - T * T / me, X = le - 1, X !== 0)
          for (v = 2; v < c + 1; v++)
            h[A][v] >= x + h[X][v - 1] && (f[A][v] = le, h[A][v] = x + h[X][v - 1]);
      }
      f[A][1] = 1, h[A][1] = x;
    }
    return {
      lowerClassLimits: f,
      varianceCombinations: h
    };
  }
  function i(l, c, f) {
    let h = l.length - 1;
    const d = [];
    let v = f;
    for (d[f] = l[l.length - 1], d[0] = l[0]; v > 1; )
      d[v - 1] = l[c[h][v] - 2], h = c[h][v] - 1, v--;
    return d;
  }
  if (n > t.length) return null;
  t = t.slice().sort(function(l, c) {
    return l - c;
  });
  const u = s(t, n).lowerClassLimits;
  return i(t, u, n);
}
var my = [
  "bar",
  "hbar",
  "area",
  "stackedVbar",
  "stackedHbar"
];
var dy = [
  "line",
  "candlestick",
  "dumbbell",
  "horizontalDumbbell",
  "barline"
];
var yy = [
  "dualAxis",
  "multiples",
  "stackedPanel"
];
var CS = [
  ...my,
  ...dy,
  ...yy
];
var vy = {
  defaultMerge: Symbol("deepmerge-ts: default merge"),
  skip: Symbol("deepmerge-ts: skip")
};
vy.defaultMerge;
var Ic;
(function(t) {
  t[t.NOT = 0] = "NOT", t[t.RECORD = 1] = "RECORD", t[t.ARRAY = 2] = "ARRAY", t[t.SET = 3] = "SET", t[t.MAP = 4] = "MAP", t[t.OTHER = 5] = "OTHER";
})(Ic || (Ic = {}));
function gy(t) {
  throw new Error('Could not dynamically require "' + t + '". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.');
}
var Mi = { exports: {} };
var Sy = Mi.exports;
var Ac;
function by() {
  return Ac || (Ac = 1, function(t, n) {
    (function(s, i) {
      t.exports = i();
    })(Sy, function() {
      var s;
      function i() {
        return s.apply(null, arguments);
      }
      function u(e) {
        return e instanceof Array || Object.prototype.toString.call(e) === "[object Array]";
      }
      function l(e) {
        return e != null && Object.prototype.toString.call(e) === "[object Object]";
      }
      function c(e, r) {
        return Object.prototype.hasOwnProperty.call(e, r);
      }
      function f(e) {
        if (Object.getOwnPropertyNames) return Object.getOwnPropertyNames(e).length === 0;
        for (var r in e) if (c(e, r)) return;
        return 1;
      }
      function h(e) {
        return e === void 0;
      }
      function d(e) {
        return typeof e == "number" || Object.prototype.toString.call(e) === "[object Number]";
      }
      function v(e) {
        return e instanceof Date || Object.prototype.toString.call(e) === "[object Date]";
      }
      function x(e, r) {
        for (var a = [], o = e.length, p = 0; p < o; ++p) a.push(r(e[p], p));
        return a;
      }
      function A(e, r) {
        for (var a in r) c(r, a) && (e[a] = r[a]);
        return c(r, "toString") && (e.toString = r.toString), c(r, "valueOf") && (e.valueOf = r.valueOf), e;
      }
      function T(e, r, a, o) {
        return pa(e, r, a, o, true).utc();
      }
      function P(e) {
        return e._pf == null && (e._pf = { empty: false, unusedTokens: [], unusedInput: [], overflow: -2, charsLeftOver: 0, nullInput: false, invalidEra: null, invalidMonth: null, invalidFormat: false, userInvalidated: false, iso: false, parsedDateParts: [], era: null, meridiem: null, rfc2822: false, weekdayMismatch: false }), e._pf;
      }
      function me(e) {
        if (e._isValid == null) {
          var r = P(e), a = de.call(r.parsedDateParts, function(o) {
            return o != null;
          }), a = !isNaN(e._d.getTime()) && r.overflow < 0 && !r.empty && !r.invalidEra && !r.invalidMonth && !r.invalidWeekday && !r.weekdayMismatch && !r.nullInput && !r.invalidFormat && !r.userInvalidated && (!r.meridiem || r.meridiem && a);
          if (e._strict && (a = a && r.charsLeftOver === 0 && r.unusedTokens.length === 0 && r.bigHour === void 0), Object.isFrozen != null && Object.isFrozen(e)) return a;
          e._isValid = a;
        }
        return e._isValid;
      }
      function X(e) {
        var r = T(NaN);
        return e != null ? A(P(r), e) : P(r).userInvalidated = true, r;
      }
      var de = Array.prototype.some || function(e) {
        for (var r = Object(this), a = r.length >>> 0, o = 0; o < a; o++) if (o in r && e.call(this, r[o], o, r)) return true;
        return false;
      }, le = i.momentProperties = [], xe = false;
      function ct(e, r) {
        var a, o, p, m = le.length;
        if (h(r._isAMomentObject) || (e._isAMomentObject = r._isAMomentObject), h(r._i) || (e._i = r._i), h(r._f) || (e._f = r._f), h(r._l) || (e._l = r._l), h(r._strict) || (e._strict = r._strict), h(r._tzm) || (e._tzm = r._tzm), h(r._isUTC) || (e._isUTC = r._isUTC), h(r._offset) || (e._offset = r._offset), h(r._pf) || (e._pf = P(r)), h(r._locale) || (e._locale = r._locale), 0 < m) for (a = 0; a < m; a++) h(p = r[o = le[a]]) || (e[o] = p);
        return e;
      }
      function pt(e) {
        ct(this, e), this._d = new Date(e._d != null ? e._d.getTime() : NaN), this.isValid() || (this._d = /* @__PURE__ */ new Date(NaN)), xe === false && (xe = true, i.updateOffset(this), xe = false);
      }
      function Fe(e) {
        return e instanceof pt || e != null && e._isAMomentObject != null;
      }
      function Or(e) {
        i.suppressDeprecationWarnings === false && typeof console < "u" && console.warn && console.warn("Deprecation warning: " + e);
      }
      function W(e, r) {
        var a = true;
        return A(function() {
          if (i.deprecationHandler != null && i.deprecationHandler(null, e), a) {
            for (var o, p, m = [], y = arguments.length, g = 0; g < y; g++) {
              if (o = "", typeof arguments[g] == "object") {
                for (p in o += `
[` + g + "] ", arguments[0]) c(arguments[0], p) && (o += p + ": " + arguments[0][p] + ", ");
                o = o.slice(0, -2);
              } else o = arguments[g];
              m.push(o);
            }
            Or(e + `
Arguments: ` + Array.prototype.slice.call(m).join("") + `
` + new Error().stack), a = false;
          }
          return r.apply(this, arguments);
        }, r);
      }
      var ee = {};
      function Oe(e, r) {
        i.deprecationHandler != null && i.deprecationHandler(e, r), ee[e] || (Or(r), ee[e] = true);
      }
      function _e(e) {
        return typeof Function < "u" && e instanceof Function || Object.prototype.toString.call(e) === "[object Function]";
      }
      function St(e, r) {
        var a, o = A({}, e);
        for (a in r) c(r, a) && (l(e[a]) && l(r[a]) ? (o[a] = {}, A(o[a], e[a]), A(o[a], r[a])) : r[a] != null ? o[a] = r[a] : delete o[a]);
        for (a in e) c(e, a) && !c(r, a) && l(e[a]) && (o[a] = A({}, o[a]));
        return o;
      }
      function et(e) {
        e != null && this.set(e);
      }
      i.suppressDeprecationWarnings = false, i.deprecationHandler = null;
      var zt = Object.keys || function(e) {
        var r, a = [];
        for (r in e) c(e, r) && a.push(r);
        return a;
      };
      function Be(e, r, a) {
        var o = "" + Math.abs(e);
        return (0 <= e ? a ? "+" : "" : "-") + Math.pow(10, Math.max(0, r - o.length)).toString().substr(1) + o;
      }
      var An = /(\[[^\[]*\])|(\\)?([Hh]mm(ss)?|Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Qo?|N{1,5}|YYYYYY|YYYYY|YYYY|YY|y{2,4}|yo?|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|kk?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g, Tr = /(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g, Mn = {}, wt = {};
      function R(e, r, a, o) {
        var p = typeof o == "string" ? function() {
          return this[o]();
        } : o;
        e && (wt[e] = p), r && (wt[r[0]] = function() {
          return Be(p.apply(this, arguments), r[1], r[2]);
        }), a && (wt[a] = function() {
          return this.localeData().ordinal(p.apply(this, arguments), e);
        });
      }
      function kr(e, r) {
        return e.isValid() ? (r = zi(r, e.localeData()), Mn[r] = Mn[r] || function(a) {
          for (var o, p = a.match(An), m = 0, y = p.length; m < y; m++) wt[p[m]] ? p[m] = wt[p[m]] : p[m] = (o = p[m]).match(/\[[\s\S]/) ? o.replace(/^\[|\]$/g, "") : o.replace(/\\/g, "");
          return function(g) {
            for (var k = "", O = 0; O < y; O++) k += _e(p[O]) ? p[O].call(g, a) : p[O];
            return k;
          };
        }(r), Mn[r](e)) : e.localeData().invalidDate();
      }
      function zi(e, r) {
        var a = 5;
        function o(p) {
          return r.longDateFormat(p) || p;
        }
        for (Tr.lastIndex = 0; 0 <= a && Tr.test(e); ) e = e.replace(Tr, o), Tr.lastIndex = 0, --a;
        return e;
      }
      var Xt = {};
      function Ce(e, r) {
        var a = e.toLowerCase();
        Xt[a] = Xt[a + "s"] = Xt[r] = e;
      }
      function $e(e) {
        return typeof e == "string" ? Xt[e] || Xt[e.toLowerCase()] : void 0;
      }
      function wn(e) {
        var r, a, o = {};
        for (a in e) c(e, a) && (r = $e(a)) && (o[r] = e[a]);
        return o;
      }
      var Xi = {};
      function Ie(e, r) {
        Xi[e] = r;
      }
      function Dr(e) {
        return e % 4 == 0 && e % 100 != 0 || e % 400 == 0;
      }
      function He(e) {
        return e < 0 ? Math.ceil(e) || 0 : Math.floor(e);
      }
      function z(r) {
        var r = +r, a = 0;
        return a = r != 0 && isFinite(r) ? He(r) : a;
      }
      function Rt(e, r) {
        return function(a) {
          return a != null ? (Zi(this, e, a), i.updateOffset(this, r), this) : Pr(this, e);
        };
      }
      function Pr(e, r) {
        return e.isValid() ? e._d["get" + (e._isUTC ? "UTC" : "") + r]() : NaN;
      }
      function Zi(e, r, a) {
        e.isValid() && !isNaN(a) && (r === "FullYear" && Dr(e.year()) && e.month() === 1 && e.date() === 29 ? (a = z(a), e._d["set" + (e._isUTC ? "UTC" : "") + r](a, e.month(), Mr(a, e.month()))) : e._d["set" + (e._isUTC ? "UTC" : "") + r](a));
      }
      var _ = /\d/, j = /\d\d/, Cr = /\d{3}/, _t = /\d{4}/, dt = /[+-]?\d{6}/, ue = /\d\d?/, Nt = /\d\d\d\d?/, Lt = /\d\d\d\d\d\d?/, Yt = /\d{1,3}/, yt = /\d{1,4}/, mt = /[+-]?\d{1,6}/, Ft = /\d+/, Ir = /[+-]?\d+/, Gp = /Z|[+-]\d\d:?\d\d/gi, Ar = /Z|[+-]\d\d(?::?\d\d)?/gi, tt = /[0-9]{0,256}['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFF07\uFF10-\uFFEF]{1,256}|[\u0600-\u06FF\/]{1,256}(\s*?[\u0600-\u06FF]{1,256}){1,2}/i;
      function M(e, r, a) {
        Rn[e] = _e(r) ? r : function(o, p) {
          return o && a ? a : r;
        };
      }
      function Up(e, r) {
        return c(Rn, e) ? Rn[e](r._strict, r._locale) : new RegExp(je(e.replace("\\", "").replace(/\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g, function(a, o, p, m, y) {
          return o || p || m || y;
        })));
      }
      function je(e) {
        return e.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&");
      }
      var Rn = {}, Nn = {};
      function oe(e, r) {
        var a, o, p = r;
        for (typeof e == "string" && (e = [e]), d(r) && (p = function(m, y) {
          y[r] = z(m);
        }), o = e.length, a = 0; a < o; a++) Nn[e[a]] = p;
      }
      function Zt(e, r) {
        oe(e, function(a, o, p, m) {
          p._w = p._w || {}, r(a, p._w, p, m);
        });
      }
      var Se, Ae = 0, rt = 1, Ze = 2, Ee = 3, qe = 4, nt = 5, bt = 6, qp = 7, Vp = 8;
      function Mr(e, r) {
        if (isNaN(e) || isNaN(r)) return NaN;
        var a = (r % (a = 12) + a) % a;
        return e += (r - a) / 12, a == 1 ? Dr(e) ? 29 : 28 : 31 - a % 7 % 2;
      }
      Se = Array.prototype.indexOf || function(e) {
        for (var r = 0; r < this.length; ++r) if (this[r] === e) return r;
        return -1;
      }, R("M", ["MM", 2], "Mo", function() {
        return this.month() + 1;
      }), R("MMM", 0, 0, function(e) {
        return this.localeData().monthsShort(this, e);
      }), R("MMMM", 0, 0, function(e) {
        return this.localeData().months(this, e);
      }), Ce("month", "M"), Ie("month", 8), M("M", ue), M("MM", ue, j), M("MMM", function(e, r) {
        return r.monthsShortRegex(e);
      }), M("MMMM", function(e, r) {
        return r.monthsRegex(e);
      }), oe(["M", "MM"], function(e, r) {
        r[rt] = z(e) - 1;
      }), oe(["MMM", "MMMM"], function(e, r, a, o) {
        o = a._locale.monthsParse(e, o, a._strict), o != null ? r[rt] = o : P(a).invalidMonth = e;
      });
      var Jt = "January_February_March_April_May_June_July_August_September_October_November_December".split("_"), Ji = "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"), Qi = /D[oD]?(\[[^\[\]]*\]|\s)+MMMM?/, Wp = tt, zp = tt;
      function Ki(e, r) {
        var a;
        if (e.isValid()) {
          if (typeof r == "string") {
            if (/^\d+$/.test(r)) r = z(r);
            else if (!d(r = e.localeData().monthsParse(r))) return;
          }
          a = Math.min(e.date(), Mr(e.year(), r)), e._d["set" + (e._isUTC ? "UTC" : "") + "Month"](r, a);
        }
      }
      function ea(e) {
        return e != null ? (Ki(this, e), i.updateOffset(this, true), this) : Pr(this, "Month");
      }
      function ta() {
        function e(y, g) {
          return g.length - y.length;
        }
        for (var r, a = [], o = [], p = [], m = 0; m < 12; m++) r = T([2e3, m]), a.push(this.monthsShort(r, "")), o.push(this.months(r, "")), p.push(this.months(r, "")), p.push(this.monthsShort(r, ""));
        for (a.sort(e), o.sort(e), p.sort(e), m = 0; m < 12; m++) a[m] = je(a[m]), o[m] = je(o[m]);
        for (m = 0; m < 24; m++) p[m] = je(p[m]);
        this._monthsRegex = new RegExp("^(" + p.join("|") + ")", "i"), this._monthsShortRegex = this._monthsRegex, this._monthsStrictRegex = new RegExp("^(" + o.join("|") + ")", "i"), this._monthsShortStrictRegex = new RegExp("^(" + a.join("|") + ")", "i");
      }
      function Qt(e) {
        return Dr(e) ? 366 : 365;
      }
      R("Y", 0, 0, function() {
        var e = this.year();
        return e <= 9999 ? Be(e, 4) : "+" + e;
      }), R(0, ["YY", 2], 0, function() {
        return this.year() % 100;
      }), R(0, ["YYYY", 4], 0, "year"), R(0, ["YYYYY", 5], 0, "year"), R(0, ["YYYYYY", 6, true], 0, "year"), Ce("year", "y"), Ie("year", 1), M("Y", Ir), M("YY", ue, j), M("YYYY", yt, _t), M("YYYYY", mt, dt), M("YYYYYY", mt, dt), oe(["YYYYY", "YYYYYY"], Ae), oe("YYYY", function(e, r) {
        r[Ae] = e.length === 2 ? i.parseTwoDigitYear(e) : z(e);
      }), oe("YY", function(e, r) {
        r[Ae] = i.parseTwoDigitYear(e);
      }), oe("Y", function(e, r) {
        r[Ae] = parseInt(e, 10);
      }), i.parseTwoDigitYear = function(e) {
        return z(e) + (68 < z(e) ? 1900 : 2e3);
      };
      var Hr = Rt("FullYear", true);
      function Xp(e, r, a, o, p, m, y) {
        var g;
        return e < 100 && 0 <= e ? (g = new Date(e + 400, r, a, o, p, m, y), isFinite(g.getFullYear()) && g.setFullYear(e)) : g = new Date(e, r, a, o, p, m, y), g;
      }
      function Kt(e) {
        var r;
        return e < 100 && 0 <= e ? ((r = Array.prototype.slice.call(arguments))[0] = e + 400, r = new Date(Date.UTC.apply(null, r)), isFinite(r.getUTCFullYear()) && r.setUTCFullYear(e)) : r = new Date(Date.UTC.apply(null, arguments)), r;
      }
      function wr(e, r, a) {
        return a = 7 + r - a, a - (7 + Kt(e, 0, a).getUTCDay() - r) % 7 - 1;
      }
      function ra(e, y, g, o, p) {
        var m, y = 1 + 7 * (y - 1) + (7 + g - o) % 7 + wr(e, o, p), g = y <= 0 ? Qt(m = e - 1) + y : y > Qt(e) ? (m = e + 1, y - Qt(e)) : (m = e, y);
        return { year: m, dayOfYear: g };
      }
      function er(e, r, a) {
        var o, p, m = wr(e.year(), r, a), m = Math.floor((e.dayOfYear() - m - 1) / 7) + 1;
        return m < 1 ? o = m + st(p = e.year() - 1, r, a) : m > st(e.year(), r, a) ? (o = m - st(e.year(), r, a), p = e.year() + 1) : (p = e.year(), o = m), { week: o, year: p };
      }
      function st(e, p, a) {
        var o = wr(e, p, a), p = wr(e + 1, p, a);
        return (Qt(e) - o + p) / 7;
      }
      R("w", ["ww", 2], "wo", "week"), R("W", ["WW", 2], "Wo", "isoWeek"), Ce("week", "w"), Ce("isoWeek", "W"), Ie("week", 5), Ie("isoWeek", 5), M("w", ue), M("ww", ue, j), M("W", ue), M("WW", ue, j), Zt(["w", "ww", "W", "WW"], function(e, r, a, o) {
        r[o.substr(0, 1)] = z(e);
      });
      function Ln(e, r) {
        return e.slice(r, 7).concat(e.slice(0, r));
      }
      R("d", 0, "do", "day"), R("dd", 0, 0, function(e) {
        return this.localeData().weekdaysMin(this, e);
      }), R("ddd", 0, 0, function(e) {
        return this.localeData().weekdaysShort(this, e);
      }), R("dddd", 0, 0, function(e) {
        return this.localeData().weekdays(this, e);
      }), R("e", 0, 0, "weekday"), R("E", 0, 0, "isoWeekday"), Ce("day", "d"), Ce("weekday", "e"), Ce("isoWeekday", "E"), Ie("day", 11), Ie("weekday", 11), Ie("isoWeekday", 11), M("d", ue), M("e", ue), M("E", ue), M("dd", function(e, r) {
        return r.weekdaysMinRegex(e);
      }), M("ddd", function(e, r) {
        return r.weekdaysShortRegex(e);
      }), M("dddd", function(e, r) {
        return r.weekdaysRegex(e);
      }), Zt(["dd", "ddd", "dddd"], function(e, r, a, o) {
        o = a._locale.weekdaysParse(e, o, a._strict), o != null ? r.d = o : P(a).invalidWeekday = e;
      }), Zt(["d", "e", "E"], function(e, r, a, o) {
        r[o] = z(e);
      });
      var tr = "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"), na = "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"), Rr = "Su_Mo_Tu_We_Th_Fr_Sa".split("_"), Zp = tt, Jp = tt, Qp = tt;
      function Yn() {
        function e(O, B) {
          return B.length - O.length;
        }
        for (var r, a, o, p = [], m = [], y = [], g = [], k = 0; k < 7; k++) o = T([2e3, 1]).day(k), r = je(this.weekdaysMin(o, "")), a = je(this.weekdaysShort(o, "")), o = je(this.weekdays(o, "")), p.push(r), m.push(a), y.push(o), g.push(r), g.push(a), g.push(o);
        p.sort(e), m.sort(e), y.sort(e), g.sort(e), this._weekdaysRegex = new RegExp("^(" + g.join("|") + ")", "i"), this._weekdaysShortRegex = this._weekdaysRegex, this._weekdaysMinRegex = this._weekdaysRegex, this._weekdaysStrictRegex = new RegExp("^(" + y.join("|") + ")", "i"), this._weekdaysShortStrictRegex = new RegExp("^(" + m.join("|") + ")", "i"), this._weekdaysMinStrictRegex = new RegExp("^(" + p.join("|") + ")", "i");
      }
      function Fn() {
        return this.hours() % 12 || 12;
      }
      function sa(e, r) {
        R(e, 0, 0, function() {
          return this.localeData().meridiem(this.hours(), this.minutes(), r);
        });
      }
      function ia(e, r) {
        return r._meridiemParse;
      }
      R("H", ["HH", 2], 0, "hour"), R("h", ["hh", 2], 0, Fn), R("k", ["kk", 2], 0, function() {
        return this.hours() || 24;
      }), R("hmm", 0, 0, function() {
        return "" + Fn.apply(this) + Be(this.minutes(), 2);
      }), R("hmmss", 0, 0, function() {
        return "" + Fn.apply(this) + Be(this.minutes(), 2) + Be(this.seconds(), 2);
      }), R("Hmm", 0, 0, function() {
        return "" + this.hours() + Be(this.minutes(), 2);
      }), R("Hmmss", 0, 0, function() {
        return "" + this.hours() + Be(this.minutes(), 2) + Be(this.seconds(), 2);
      }), sa("a", true), sa("A", false), Ce("hour", "h"), Ie("hour", 13), M("a", ia), M("A", ia), M("H", ue), M("h", ue), M("k", ue), M("HH", ue, j), M("hh", ue, j), M("kk", ue, j), M("hmm", Nt), M("hmmss", Lt), M("Hmm", Nt), M("Hmmss", Lt), oe(["H", "HH"], Ee), oe(["k", "kk"], function(e, r, a) {
        e = z(e), r[Ee] = e === 24 ? 0 : e;
      }), oe(["a", "A"], function(e, r, a) {
        a._isPm = a._locale.isPM(e), a._meridiem = e;
      }), oe(["h", "hh"], function(e, r, a) {
        r[Ee] = z(e), P(a).bigHour = true;
      }), oe("hmm", function(e, r, a) {
        var o = e.length - 2;
        r[Ee] = z(e.substr(0, o)), r[qe] = z(e.substr(o)), P(a).bigHour = true;
      }), oe("hmmss", function(e, r, a) {
        var o = e.length - 4, p = e.length - 2;
        r[Ee] = z(e.substr(0, o)), r[qe] = z(e.substr(o, 2)), r[nt] = z(e.substr(p)), P(a).bigHour = true;
      }), oe("Hmm", function(e, r, a) {
        var o = e.length - 2;
        r[Ee] = z(e.substr(0, o)), r[qe] = z(e.substr(o));
      }), oe("Hmmss", function(e, r, a) {
        var o = e.length - 4, p = e.length - 2;
        r[Ee] = z(e.substr(0, o)), r[qe] = z(e.substr(o, 2)), r[nt] = z(e.substr(p));
      }), tt = Rt("Hours", true);
      var rr, aa = { calendar: { sameDay: "[Today at] LT", nextDay: "[Tomorrow at] LT", nextWeek: "dddd [at] LT", lastDay: "[Yesterday at] LT", lastWeek: "[Last] dddd [at] LT", sameElse: "L" }, longDateFormat: { LTS: "h:mm:ss A", LT: "h:mm A", L: "MM/DD/YYYY", LL: "MMMM D, YYYY", LLL: "MMMM D, YYYY h:mm A", LLLL: "dddd, MMMM D, YYYY h:mm A" }, invalidDate: "Invalid date", ordinal: "%d", dayOfMonthOrdinalParse: /\d{1,2}/, relativeTime: { future: "in %s", past: "%s ago", s: "a few seconds", ss: "%d seconds", m: "a minute", mm: "%d minutes", h: "an hour", hh: "%d hours", d: "a day", dd: "%d days", w: "a week", ww: "%d weeks", M: "a month", MM: "%d months", y: "a year", yy: "%d years" }, months: Jt, monthsShort: Ji, week: { dow: 0, doy: 6 }, weekdays: tr, weekdaysMin: Rr, weekdaysShort: na, meridiemParse: /[ap]\.?m?\.?/i }, fe = {}, nr = {};
      function oa(e) {
        return e && e.toLowerCase().replace("_", "-");
      }
      function Kp(e) {
        for (var r, a, o, p, m = 0; m < e.length; ) {
          for (r = (p = oa(e[m]).split("-")).length, a = (a = oa(e[m + 1])) ? a.split("-") : null; 0 < r; ) {
            if (o = Nr(p.slice(0, r).join("-"))) return o;
            if (a && a.length >= r && function(y, g) {
              for (var k = Math.min(y.length, g.length), O = 0; O < k; O += 1) if (y[O] !== g[O]) return O;
              return k;
            }(p, a) >= r - 1) break;
            r--;
          }
          m++;
        }
        return rr;
      }
      function Nr(e) {
        var r;
        if (fe[e] === void 0 && t && t.exports && e.match("^[^/\\\\]*$") != null) try {
          r = rr._abbr, gy("./locale/" + e), ft(r);
        } catch {
          fe[e] = null;
        }
        return fe[e];
      }
      function ft(e, r) {
        return e && ((r = h(r) ? it(e) : jn(e, r)) ? rr = r : typeof console < "u" && console.warn && console.warn("Locale " + e + " not found. Did you forget to load it?")), rr._abbr;
      }
      function jn(e, r) {
        if (r === null) return delete fe[e], null;
        var a, o = aa;
        if (r.abbr = e, fe[e] != null) Oe("defineLocaleOverride", "use moment.updateLocale(localeName, config) to change an existing locale. moment.defineLocale(localeName, config) should only be used for creating a new locale See http://momentjs.com/guides/#/warnings/define-locale/ for more info."), o = fe[e]._config;
        else if (r.parentLocale != null) if (fe[r.parentLocale] != null) o = fe[r.parentLocale]._config;
        else {
          if ((a = Nr(r.parentLocale)) == null) return nr[r.parentLocale] || (nr[r.parentLocale] = []), nr[r.parentLocale].push({ name: e, config: r }), null;
          o = a._config;
        }
        return fe[e] = new et(St(o, r)), nr[e] && nr[e].forEach(function(p) {
          jn(p.name, p.config);
        }), ft(e), fe[e];
      }
      function it(e) {
        var r;
        if (!(e = e && e._locale && e._locale._abbr ? e._locale._abbr : e)) return rr;
        if (!u(e)) {
          if (r = Nr(e)) return r;
          e = [e];
        }
        return Kp(e);
      }
      function Bn(e) {
        var r = e._a;
        return r && P(e).overflow === -2 && (r = r[rt] < 0 || 11 < r[rt] ? rt : r[Ze] < 1 || r[Ze] > Mr(r[Ae], r[rt]) ? Ze : r[Ee] < 0 || 24 < r[Ee] || r[Ee] === 24 && (r[qe] !== 0 || r[nt] !== 0 || r[bt] !== 0) ? Ee : r[qe] < 0 || 59 < r[qe] ? qe : r[nt] < 0 || 59 < r[nt] ? nt : r[bt] < 0 || 999 < r[bt] ? bt : -1, P(e)._overflowDayOfYear && (r < Ae || Ze < r) && (r = Ze), P(e)._overflowWeeks && r === -1 && (r = qp), P(e)._overflowWeekday && r === -1 && (r = Vp), P(e).overflow = r), e;
      }
      var ef = /^\s*((?:[+-]\d{6}|\d{4})-(?:\d\d-\d\d|W\d\d-\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?::\d\d(?::\d\d(?:[.,]\d+)?)?)?)([+-]\d\d(?::?\d\d)?|\s*Z)?)?$/, tf = /^\s*((?:[+-]\d{6}|\d{4})(?:\d\d\d\d|W\d\d\d|W\d\d|\d\d\d|\d\d|))(?:(T| )(\d\d(?:\d\d(?:\d\d(?:[.,]\d+)?)?)?)([+-]\d\d(?::?\d\d)?|\s*Z)?)?$/, rf = /Z|[+-]\d\d(?::?\d\d)?/, Lr = [["YYYYYY-MM-DD", /[+-]\d{6}-\d\d-\d\d/], ["YYYY-MM-DD", /\d{4}-\d\d-\d\d/], ["GGGG-[W]WW-E", /\d{4}-W\d\d-\d/], ["GGGG-[W]WW", /\d{4}-W\d\d/, false], ["YYYY-DDD", /\d{4}-\d{3}/], ["YYYY-MM", /\d{4}-\d\d/, false], ["YYYYYYMMDD", /[+-]\d{10}/], ["YYYYMMDD", /\d{8}/], ["GGGG[W]WWE", /\d{4}W\d{3}/], ["GGGG[W]WW", /\d{4}W\d{2}/, false], ["YYYYDDD", /\d{7}/], ["YYYYMM", /\d{6}/, false], ["YYYY", /\d{4}/, false]], $n = [["HH:mm:ss.SSSS", /\d\d:\d\d:\d\d\.\d+/], ["HH:mm:ss,SSSS", /\d\d:\d\d:\d\d,\d+/], ["HH:mm:ss", /\d\d:\d\d:\d\d/], ["HH:mm", /\d\d:\d\d/], ["HHmmss.SSSS", /\d\d\d\d\d\d\.\d+/], ["HHmmss,SSSS", /\d\d\d\d\d\d,\d+/], ["HHmmss", /\d\d\d\d\d\d/], ["HHmm", /\d\d\d\d/], ["HH", /\d\d/]], nf = /^\/?Date\((-?\d+)/i, sf = /^(?:(Mon|Tue|Wed|Thu|Fri|Sat|Sun),?\s)?(\d{1,2})\s(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(\d{2,4})\s(\d\d):(\d\d)(?::(\d\d))?\s(?:(UT|GMT|[ECMP][SD]T)|([Zz])|([+-]\d{4}))$/, af = { UT: 0, GMT: 0, EDT: -240, EST: -300, CDT: -300, CST: -360, MDT: -360, MST: -420, PDT: -420, PST: -480 };
      function la(e) {
        var r, a, o, p, m, y, k = e._i, g = ef.exec(k) || tf.exec(k), k = Lr.length, O = $n.length;
        if (g) {
          for (P(e).iso = true, r = 0, a = k; r < a; r++) if (Lr[r][1].exec(g[1])) {
            p = Lr[r][0], o = Lr[r][2] !== false;
            break;
          }
          if (p == null) e._isValid = false;
          else {
            if (g[3]) {
              for (r = 0, a = O; r < a; r++) if ($n[r][1].exec(g[3])) {
                m = (g[2] || " ") + $n[r][0];
                break;
              }
              if (m == null) return void (e._isValid = false);
            }
            if (o || m == null) {
              if (g[4]) {
                if (!rf.exec(g[4])) return void (e._isValid = false);
                y = "Z";
              }
              e._f = p + (m || "") + (y || ""), Gn(e);
            } else e._isValid = false;
          }
        } else e._isValid = false;
      }
      function of(e, r, a, o, p, m) {
        return e = [function(y) {
          y = parseInt(y, 10);
          {
            if (y <= 49) return 2e3 + y;
            if (y <= 999) return 1900 + y;
          }
          return y;
        }(e), Ji.indexOf(r), parseInt(a, 10), parseInt(o, 10), parseInt(p, 10)], m && e.push(parseInt(m, 10)), e;
      }
      function ua(e) {
        var r, a, o, p, m = sf.exec(e._i.replace(/\([^()]*\)|[\n\t]/g, " ").replace(/(\s\s+)/g, " ").replace(/^\s\s*/, "").replace(/\s\s*$/, ""));
        m ? (r = of(m[4], m[3], m[2], m[5], m[6], m[7]), a = m[1], o = r, p = e, a && na.indexOf(a) !== new Date(o[0], o[1], o[2]).getDay() ? (P(p).weekdayMismatch = true, p._isValid = false) : (e._a = r, e._tzm = (a = m[8], o = m[9], p = m[10], a ? af[a] : o ? 0 : 60 * (((a = parseInt(p, 10)) - (o = a % 100)) / 100) + o), e._d = Kt.apply(null, e._a), e._d.setUTCMinutes(e._d.getUTCMinutes() - e._tzm), P(e).rfc2822 = true)) : e._isValid = false;
      }
      function jt(e, r, a) {
        return e ?? r ?? a;
      }
      function Hn(e) {
        var r, a, o, p, m, y, g, k, O, B, Y, ye = [];
        if (!e._d) {
          for (o = e, p = new Date(i.now()), a = o._useUTC ? [p.getUTCFullYear(), p.getUTCMonth(), p.getUTCDate()] : [p.getFullYear(), p.getMonth(), p.getDate()], e._w && e._a[Ze] == null && e._a[rt] == null && ((p = (o = e)._w).GG != null || p.W != null || p.E != null ? (k = 1, O = 4, m = jt(p.GG, o._a[Ae], er(ce(), 1, 4).year), y = jt(p.W, 1), ((g = jt(p.E, 1)) < 1 || 7 < g) && (B = true)) : (k = o._locale._week.dow, O = o._locale._week.doy, Y = er(ce(), k, O), m = jt(p.gg, o._a[Ae], Y.year), y = jt(p.w, Y.week), p.d != null ? ((g = p.d) < 0 || 6 < g) && (B = true) : p.e != null ? (g = p.e + k, (p.e < 0 || 6 < p.e) && (B = true)) : g = k), y < 1 || y > st(m, k, O) ? P(o)._overflowWeeks = true : B != null ? P(o)._overflowWeekday = true : (Y = ra(m, y, g, k, O), o._a[Ae] = Y.year, o._dayOfYear = Y.dayOfYear)), e._dayOfYear != null && (p = jt(e._a[Ae], a[Ae]), (e._dayOfYear > Qt(p) || e._dayOfYear === 0) && (P(e)._overflowDayOfYear = true), B = Kt(p, 0, e._dayOfYear), e._a[rt] = B.getUTCMonth(), e._a[Ze] = B.getUTCDate()), r = 0; r < 3 && e._a[r] == null; ++r) e._a[r] = ye[r] = a[r];
          for (; r < 7; r++) e._a[r] = ye[r] = e._a[r] == null ? r === 2 ? 1 : 0 : e._a[r];
          e._a[Ee] === 24 && e._a[qe] === 0 && e._a[nt] === 0 && e._a[bt] === 0 && (e._nextDay = true, e._a[Ee] = 0), e._d = (e._useUTC ? Kt : Xp).apply(null, ye), m = e._useUTC ? e._d.getUTCDay() : e._d.getDay(), e._tzm != null && e._d.setUTCMinutes(e._d.getUTCMinutes() - e._tzm), e._nextDay && (e._a[Ee] = 24), e._w && e._w.d !== void 0 && e._w.d !== m && (P(e).weekdayMismatch = true);
        }
      }
      function Gn(e) {
        if (e._f === i.ISO_8601) la(e);
        else if (e._f === i.RFC_2822) ua(e);
        else {
          e._a = [], P(e).empty = true;
          for (var r, a, o, p, m, y = "" + e._i, g = y.length, k = 0, O = zi(e._f, e._locale).match(An) || [], B = O.length, Y = 0; Y < B; Y++) a = O[Y], (r = (y.match(Up(a, e)) || [])[0]) && (0 < (o = y.substr(0, y.indexOf(r))).length && P(e).unusedInput.push(o), y = y.slice(y.indexOf(r) + r.length), k += r.length), wt[a] ? (r ? P(e).empty = false : P(e).unusedTokens.push(a), o = a, m = e, (p = r) != null && c(Nn, o) && Nn[o](p, m._a, m, o)) : e._strict && !r && P(e).unusedTokens.push(a);
          P(e).charsLeftOver = g - k, 0 < y.length && P(e).unusedInput.push(y), e._a[Ee] <= 12 && P(e).bigHour === true && 0 < e._a[Ee] && (P(e).bigHour = void 0), P(e).parsedDateParts = e._a.slice(0), P(e).meridiem = e._meridiem, e._a[Ee] = function(ye, be, We) {
            return We == null ? be : ye.meridiemHour != null ? ye.meridiemHour(be, We) : ye.isPM != null ? ((ye = ye.isPM(We)) && be < 12 && (be += 12), be = ye || be !== 12 ? be : 0) : be;
          }(e._locale, e._a[Ee], e._meridiem), (g = P(e).era) !== null && (e._a[Ae] = e._locale.erasConvertYear(g, e._a[Ae])), Hn(e), Bn(e);
        }
      }
      function ca(e) {
        var r, a, o, p = e._i, m = e._f;
        return e._locale = e._locale || it(e._l), p === null || m === void 0 && p === "" ? X({ nullInput: true }) : (typeof p == "string" && (e._i = p = e._locale.preparse(p)), Fe(p) ? new pt(Bn(p)) : (v(p) ? e._d = p : u(m) ? function(y) {
          var g, k, O, B, Y, ye, be = false, We = y._f.length;
          if (We === 0) return P(y).invalidFormat = true, y._d = /* @__PURE__ */ new Date(NaN);
          for (B = 0; B < We; B++) Y = 0, ye = false, g = ct({}, y), y._useUTC != null && (g._useUTC = y._useUTC), g._f = y._f[B], Gn(g), me(g) && (ye = true), Y = (Y += P(g).charsLeftOver) + 10 * P(g).unusedTokens.length, P(g).score = Y, be ? Y < O && (O = Y, k = g) : (O == null || Y < O || ye) && (O = Y, k = g, ye && (be = true));
          A(y, k || g);
        }(e) : m ? Gn(e) : h(m = (p = e)._i) ? p._d = new Date(i.now()) : v(m) ? p._d = new Date(m.valueOf()) : typeof m == "string" ? (a = p, (r = nf.exec(a._i)) !== null ? a._d = /* @__PURE__ */ new Date(+r[1]) : (la(a), a._isValid === false && (delete a._isValid, ua(a), a._isValid === false && (delete a._isValid, a._strict ? a._isValid = false : i.createFromInputFallback(a))))) : u(m) ? (p._a = x(m.slice(0), function(y) {
          return parseInt(y, 10);
        }), Hn(p)) : l(m) ? (r = p)._d || (o = (a = wn(r._i)).day === void 0 ? a.date : a.day, r._a = x([a.year, a.month, o, a.hour, a.minute, a.second, a.millisecond], function(y) {
          return y && parseInt(y, 10);
        }), Hn(r)) : d(m) ? p._d = new Date(m) : i.createFromInputFallback(p), me(e) || (e._d = null), e));
      }
      function pa(e, r, a, o, p) {
        var m = {};
        return r !== true && r !== false || (o = r, r = void 0), a !== true && a !== false || (o = a, a = void 0), (l(e) && f(e) || u(e) && e.length === 0) && (e = void 0), m._isAMomentObject = true, m._useUTC = m._isUTC = p, m._l = a, m._i = e, m._f = r, m._strict = o, (p = new pt(Bn(ca(p = m))))._nextDay && (p.add(1, "d"), p._nextDay = void 0), p;
      }
      function ce(e, r, a, o) {
        return pa(e, r, a, o, false);
      }
      i.createFromInputFallback = W("value provided is not in a recognized RFC2822 or ISO format. moment construction falls back to js Date(), which is not reliable across all browsers and versions. Non RFC2822/ISO date formats are discouraged. Please refer to http://momentjs.com/guides/#/warnings/js-date/ for more info.", function(e) {
        e._d = /* @__PURE__ */ new Date(e._i + (e._useUTC ? " UTC" : ""));
      }), i.ISO_8601 = function() {
      }, i.RFC_2822 = function() {
      }, Nt = W("moment().min is deprecated, use moment.max instead. http://momentjs.com/guides/#/warnings/min-max/", function() {
        var e = ce.apply(null, arguments);
        return this.isValid() && e.isValid() ? e < this ? this : e : X();
      }), Lt = W("moment().max is deprecated, use moment.min instead. http://momentjs.com/guides/#/warnings/min-max/", function() {
        var e = ce.apply(null, arguments);
        return this.isValid() && e.isValid() ? this < e ? this : e : X();
      });
      function fa(e, r) {
        var a, o;
        if (!(r = r.length === 1 && u(r[0]) ? r[0] : r).length) return ce();
        for (a = r[0], o = 1; o < r.length; ++o) r[o].isValid() && !r[o][e](a) || (a = r[o]);
        return a;
      }
      var sr = ["year", "quarter", "month", "week", "day", "hour", "minute", "second", "millisecond"];
      function Yr(r) {
        var r = wn(r), a = r.year || 0, o = r.quarter || 0, p = r.month || 0, m = r.week || r.isoWeek || 0, y = r.day || 0, g = r.hour || 0, k = r.minute || 0, O = r.second || 0, B = r.millisecond || 0;
        this._isValid = function(Y) {
          var ye, be, We = false, Kn = sr.length;
          for (ye in Y) if (c(Y, ye) && (Se.call(sr, ye) === -1 || Y[ye] != null && isNaN(Y[ye]))) return false;
          for (be = 0; be < Kn; ++be) if (Y[sr[be]]) {
            if (We) return false;
            parseFloat(Y[sr[be]]) !== z(Y[sr[be]]) && (We = true);
          }
          return true;
        }(r), this._milliseconds = +B + 1e3 * O + 6e4 * k + 1e3 * g * 60 * 60, this._days = +y + 7 * m, this._months = +p + 3 * o + 12 * a, this._data = {}, this._locale = it(), this._bubble();
      }
      function Fr(e) {
        return e instanceof Yr;
      }
      function Un(e) {
        return e < 0 ? -1 * Math.round(-1 * e) : Math.round(e);
      }
      function ha(e, r) {
        R(e, 0, 0, function() {
          var a = this.utcOffset(), o = "+";
          return a < 0 && (a = -a, o = "-"), o + Be(~~(a / 60), 2) + r + Be(~~a % 60, 2);
        });
      }
      ha("Z", ":"), ha("ZZ", ""), M("Z", Ar), M("ZZ", Ar), oe(["Z", "ZZ"], function(e, r, a) {
        a._useUTC = true, a._tzm = qn(Ar, e);
      });
      var lf = /([\+\-]|\d\d)/gi;
      function qn(e, a) {
        var a = (a || "").match(e);
        return a === null ? null : (a = 60 * (e = ((a[a.length - 1] || []) + "").match(lf) || ["-", 0, 0])[1] + z(e[2])) === 0 ? 0 : e[0] === "+" ? a : -a;
      }
      function Vn(e, r) {
        var a;
        return r._isUTC ? (r = r.clone(), a = (Fe(e) || v(e) ? e : ce(e)).valueOf() - r.valueOf(), r._d.setTime(r._d.valueOf() + a), i.updateOffset(r, false), r) : ce(e).local();
      }
      function Wn(e) {
        return -Math.round(e._d.getTimezoneOffset());
      }
      function ma() {
        return !!this.isValid() && this._isUTC && this._offset === 0;
      }
      i.updateOffset = function() {
      };
      var uf = /^(-|\+)?(?:(\d*)[. ])?(\d+):(\d+)(?::(\d+)(\.\d*)?)?$/, cf = /^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/;
      function Ve(e, r) {
        var a, o = e, p = null;
        return Fr(e) ? o = { ms: e._milliseconds, d: e._days, M: e._months } : d(e) || !isNaN(+e) ? (o = {}, r ? o[r] = +e : o.milliseconds = +e) : (p = uf.exec(e)) ? (a = p[1] === "-" ? -1 : 1, o = { y: 0, d: z(p[Ze]) * a, h: z(p[Ee]) * a, m: z(p[qe]) * a, s: z(p[nt]) * a, ms: z(Un(1e3 * p[bt])) * a }) : (p = cf.exec(e)) ? (a = p[1] === "-" ? -1 : 1, o = { y: xt(p[2], a), M: xt(p[3], a), w: xt(p[4], a), d: xt(p[5], a), h: xt(p[6], a), m: xt(p[7], a), s: xt(p[8], a) }) : o == null ? o = {} : typeof o == "object" && ("from" in o || "to" in o) && (r = function(m, y) {
          var g;
          return !m.isValid() || !y.isValid() ? { milliseconds: 0, months: 0 } : (y = Vn(y, m), m.isBefore(y) ? g = da(m, y) : ((g = da(y, m)).milliseconds = -g.milliseconds, g.months = -g.months), g);
        }(ce(o.from), ce(o.to)), (o = {}).ms = r.milliseconds, o.M = r.months), p = new Yr(o), Fr(e) && c(e, "_locale") && (p._locale = e._locale), Fr(e) && c(e, "_isValid") && (p._isValid = e._isValid), p;
      }
      function xt(e, r) {
        return e = e && parseFloat(e.replace(",", ".")), (isNaN(e) ? 0 : e) * r;
      }
      function da(e, r) {
        var a = {};
        return a.months = r.month() - e.month() + 12 * (r.year() - e.year()), e.clone().add(a.months, "M").isAfter(r) && --a.months, a.milliseconds = +r - +e.clone().add(a.months, "M"), a;
      }
      function ya(e, r) {
        return function(a, o) {
          var p;
          return o === null || isNaN(+o) || (Oe(r, "moment()." + r + "(period, number) is deprecated. Please use moment()." + r + "(number, period). See http://momentjs.com/guides/#/warnings/add-inverted-param/ for more info."), p = a, a = o, o = p), va(this, Ve(a, o), e), this;
        };
      }
      function va(e, y, a, o) {
        var p = y._milliseconds, m = Un(y._days), y = Un(y._months);
        e.isValid() && (o = o == null || o, y && Ki(e, Pr(e, "Month") + y * a), m && Zi(e, "Date", Pr(e, "Date") + m * a), p && e._d.setTime(e._d.valueOf() + p * a), o && i.updateOffset(e, m || y));
      }
      Ve.fn = Yr.prototype, Ve.invalid = function() {
        return Ve(NaN);
      }, Jt = ya(1, "add"), tr = ya(-1, "subtract");
      function ga(e) {
        return typeof e == "string" || e instanceof String;
      }
      function pf(e) {
        return Fe(e) || v(e) || ga(e) || d(e) || function(r) {
          var a = u(r), o = false;
          return a && (o = r.filter(function(p) {
            return !d(p) && ga(r);
          }).length === 0), a && o;
        }(e) || function(r) {
          var a, o, p = l(r) && !f(r), m = false, y = ["years", "year", "y", "months", "month", "M", "days", "day", "d", "dates", "date", "D", "hours", "hour", "h", "minutes", "minute", "m", "seconds", "second", "s", "milliseconds", "millisecond", "ms"], g = y.length;
          for (a = 0; a < g; a += 1) o = y[a], m = m || c(r, o);
          return p && m;
        }(e) || e == null;
      }
      function jr(e, p) {
        if (e.date() < p.date()) return -jr(p, e);
        var a = 12 * (p.year() - e.year()) + (p.month() - e.month()), o = e.clone().add(a, "months"), p = p - o < 0 ? (p - o) / (o - e.clone().add(a - 1, "months")) : (p - o) / (e.clone().add(1 + a, "months") - o);
        return -(a + p) || 0;
      }
      function Sa(e) {
        return e === void 0 ? this._locale._abbr : ((e = it(e)) != null && (this._locale = e), this);
      }
      i.defaultFormat = "YYYY-MM-DDTHH:mm:ssZ", i.defaultFormatUtc = "YYYY-MM-DDTHH:mm:ss[Z]", Rr = W("moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.", function(e) {
        return e === void 0 ? this.localeData() : this.locale(e);
      });
      function ba() {
        return this._locale;
      }
      var xa = 126227808e5;
      function Bt(e, r) {
        return (e % r + r) % r;
      }
      function _a(e, r, a) {
        return e < 100 && 0 <= e ? new Date(e + 400, r, a) - xa : new Date(e, r, a).valueOf();
      }
      function Ea(e, r, a) {
        return e < 100 && 0 <= e ? Date.UTC(e + 400, r, a) - xa : Date.UTC(e, r, a);
      }
      function zn(e, r) {
        return r.erasAbbrRegex(e);
      }
      function Xn() {
        for (var e = [], r = [], a = [], o = [], p = this.eras(), m = 0, y = p.length; m < y; ++m) r.push(je(p[m].name)), e.push(je(p[m].abbr)), a.push(je(p[m].narrow)), o.push(je(p[m].name)), o.push(je(p[m].abbr)), o.push(je(p[m].narrow));
        this._erasRegex = new RegExp("^(" + o.join("|") + ")", "i"), this._erasNameRegex = new RegExp("^(" + r.join("|") + ")", "i"), this._erasAbbrRegex = new RegExp("^(" + e.join("|") + ")", "i"), this._erasNarrowRegex = new RegExp("^(" + a.join("|") + ")", "i");
      }
      function Br(e, r) {
        R(0, [e, e.length], 0, r);
      }
      function Oa(e, r, a, o, p) {
        var m;
        return e == null ? er(this, o, p).year : (m = st(e, o, p), function(y, g, k, O, B) {
          return y = ra(y, g, k, O, B), g = Kt(y.year, 0, y.dayOfYear), this.year(g.getUTCFullYear()), this.month(g.getUTCMonth()), this.date(g.getUTCDate()), this;
        }.call(this, e, r = m < r ? m : r, a, o, p));
      }
      R("N", 0, 0, "eraAbbr"), R("NN", 0, 0, "eraAbbr"), R("NNN", 0, 0, "eraAbbr"), R("NNNN", 0, 0, "eraName"), R("NNNNN", 0, 0, "eraNarrow"), R("y", ["y", 1], "yo", "eraYear"), R("y", ["yy", 2], 0, "eraYear"), R("y", ["yyy", 3], 0, "eraYear"), R("y", ["yyyy", 4], 0, "eraYear"), M("N", zn), M("NN", zn), M("NNN", zn), M("NNNN", function(e, r) {
        return r.erasNameRegex(e);
      }), M("NNNNN", function(e, r) {
        return r.erasNarrowRegex(e);
      }), oe(["N", "NN", "NNN", "NNNN", "NNNNN"], function(e, r, a, o) {
        o = a._locale.erasParse(e, o, a._strict), o ? P(a).era = o : P(a).invalidEra = e;
      }), M("y", Ft), M("yy", Ft), M("yyy", Ft), M("yyyy", Ft), M("yo", function(e, r) {
        return r._eraYearOrdinalRegex || Ft;
      }), oe(["y", "yy", "yyy", "yyyy"], Ae), oe(["yo"], function(e, r, a, o) {
        var p;
        a._locale._eraYearOrdinalRegex && (p = e.match(a._locale._eraYearOrdinalRegex)), a._locale.eraYearOrdinalParse ? r[Ae] = a._locale.eraYearOrdinalParse(e, p) : r[Ae] = parseInt(e, 10);
      }), R(0, ["gg", 2], 0, function() {
        return this.weekYear() % 100;
      }), R(0, ["GG", 2], 0, function() {
        return this.isoWeekYear() % 100;
      }), Br("gggg", "weekYear"), Br("ggggg", "weekYear"), Br("GGGG", "isoWeekYear"), Br("GGGGG", "isoWeekYear"), Ce("weekYear", "gg"), Ce("isoWeekYear", "GG"), Ie("weekYear", 1), Ie("isoWeekYear", 1), M("G", Ir), M("g", Ir), M("GG", ue, j), M("gg", ue, j), M("GGGG", yt, _t), M("gggg", yt, _t), M("GGGGG", mt, dt), M("ggggg", mt, dt), Zt(["gggg", "ggggg", "GGGG", "GGGGG"], function(e, r, a, o) {
        r[o.substr(0, 2)] = z(e);
      }), Zt(["gg", "GG"], function(e, r, a, o) {
        r[o] = i.parseTwoDigitYear(e);
      }), R("Q", 0, "Qo", "quarter"), Ce("quarter", "Q"), Ie("quarter", 7), M("Q", _), oe("Q", function(e, r) {
        r[rt] = 3 * (z(e) - 1);
      }), R("D", ["DD", 2], "Do", "date"), Ce("date", "D"), Ie("date", 9), M("D", ue), M("DD", ue, j), M("Do", function(e, r) {
        return e ? r._dayOfMonthOrdinalParse || r._ordinalParse : r._dayOfMonthOrdinalParseLenient;
      }), oe(["D", "DD"], Ze), oe("Do", function(e, r) {
        r[Ze] = z(e.match(ue)[0]);
      }), yt = Rt("Date", true), R("DDD", ["DDDD", 3], "DDDo", "dayOfYear"), Ce("dayOfYear", "DDD"), Ie("dayOfYear", 4), M("DDD", Yt), M("DDDD", Cr), oe(["DDD", "DDDD"], function(e, r, a) {
        a._dayOfYear = z(e);
      }), R("m", ["mm", 2], 0, "minute"), Ce("minute", "m"), Ie("minute", 14), M("m", ue), M("mm", ue, j), oe(["m", "mm"], qe);
      var ht, _t = Rt("Minutes", false), mt = (R("s", ["ss", 2], 0, "second"), Ce("second", "s"), Ie("second", 15), M("s", ue), M("ss", ue, j), oe(["s", "ss"], nt), Rt("Seconds", false));
      for (R("S", 0, 0, function() {
        return ~~(this.millisecond() / 100);
      }), R(0, ["SS", 2], 0, function() {
        return ~~(this.millisecond() / 10);
      }), R(0, ["SSS", 3], 0, "millisecond"), R(0, ["SSSS", 4], 0, function() {
        return 10 * this.millisecond();
      }), R(0, ["SSSSS", 5], 0, function() {
        return 100 * this.millisecond();
      }), R(0, ["SSSSSS", 6], 0, function() {
        return 1e3 * this.millisecond();
      }), R(0, ["SSSSSSS", 7], 0, function() {
        return 1e4 * this.millisecond();
      }), R(0, ["SSSSSSSS", 8], 0, function() {
        return 1e5 * this.millisecond();
      }), R(0, ["SSSSSSSSS", 9], 0, function() {
        return 1e6 * this.millisecond();
      }), Ce("millisecond", "ms"), Ie("millisecond", 16), M("S", Yt, _), M("SS", Yt, j), M("SSS", Yt, Cr), ht = "SSSS"; ht.length <= 9; ht += "S") M(ht, Ft);
      function ff(e, r) {
        r[bt] = z(1e3 * ("0." + e));
      }
      for (ht = "S"; ht.length <= 9; ht += "S") oe(ht, ff);
      dt = Rt("Milliseconds", false), R("z", 0, 0, "zoneAbbr"), R("zz", 0, 0, "zoneName"), _ = pt.prototype;
      function Ta(e) {
        return e;
      }
      _.add = Jt, _.calendar = function(a, p) {
        arguments.length === 1 && (arguments[0] ? pf(arguments[0]) ? (a = arguments[0], p = void 0) : function(m) {
          for (var y = l(m) && !f(m), g = false, k = ["sameDay", "nextDay", "lastDay", "nextWeek", "lastWeek", "sameElse"], O = 0; O < k.length; O += 1) g = g || c(m, k[O]);
          return y && g;
        }(arguments[0]) && (p = arguments[0], a = void 0) : p = a = void 0);
        var a = a || ce(), o = Vn(a, this).startOf("day"), o = i.calendarFormat(this, o) || "sameElse", p = p && (_e(p[o]) ? p[o].call(this, a) : p[o]);
        return this.format(p || this.localeData().calendar(o, this, ce(a)));
      }, _.clone = function() {
        return new pt(this);
      }, _.diff = function(e, r, a) {
        var o, p, m;
        if (!this.isValid()) return NaN;
        if (!(o = Vn(e, this)).isValid()) return NaN;
        switch (p = 6e4 * (o.utcOffset() - this.utcOffset()), r = $e(r)) {
          case "year":
            m = jr(this, o) / 12;
            break;
          case "month":
            m = jr(this, o);
            break;
          case "quarter":
            m = jr(this, o) / 3;
            break;
          case "second":
            m = (this - o) / 1e3;
            break;
          case "minute":
            m = (this - o) / 6e4;
            break;
          case "hour":
            m = (this - o) / 36e5;
            break;
          case "day":
            m = (this - o - p) / 864e5;
            break;
          case "week":
            m = (this - o - p) / 6048e5;
            break;
          default:
            m = this - o;
        }
        return a ? m : He(m);
      }, _.endOf = function(e) {
        var r, a;
        if ((e = $e(e)) === void 0 || e === "millisecond" || !this.isValid()) return this;
        switch (a = this._isUTC ? Ea : _a, e) {
          case "year":
            r = a(this.year() + 1, 0, 1) - 1;
            break;
          case "quarter":
            r = a(this.year(), this.month() - this.month() % 3 + 3, 1) - 1;
            break;
          case "month":
            r = a(this.year(), this.month() + 1, 1) - 1;
            break;
          case "week":
            r = a(this.year(), this.month(), this.date() - this.weekday() + 7) - 1;
            break;
          case "isoWeek":
            r = a(this.year(), this.month(), this.date() - (this.isoWeekday() - 1) + 7) - 1;
            break;
          case "day":
          case "date":
            r = a(this.year(), this.month(), this.date() + 1) - 1;
            break;
          case "hour":
            r = this._d.valueOf(), r += 36e5 - Bt(r + (this._isUTC ? 0 : 6e4 * this.utcOffset()), 36e5) - 1;
            break;
          case "minute":
            r = this._d.valueOf(), r += 6e4 - Bt(r, 6e4) - 1;
            break;
          case "second":
            r = this._d.valueOf(), r += 1e3 - Bt(r, 1e3) - 1;
            break;
        }
        return this._d.setTime(r), i.updateOffset(this, true), this;
      }, _.format = function(e) {
        return e = e || (this.isUtc() ? i.defaultFormatUtc : i.defaultFormat), e = kr(this, e), this.localeData().postformat(e);
      }, _.from = function(e, r) {
        return this.isValid() && (Fe(e) && e.isValid() || ce(e).isValid()) ? Ve({ to: this, from: e }).locale(this.locale()).humanize(!r) : this.localeData().invalidDate();
      }, _.fromNow = function(e) {
        return this.from(ce(), e);
      }, _.to = function(e, r) {
        return this.isValid() && (Fe(e) && e.isValid() || ce(e).isValid()) ? Ve({ from: this, to: e }).locale(this.locale()).humanize(!r) : this.localeData().invalidDate();
      }, _.toNow = function(e) {
        return this.to(ce(), e);
      }, _.get = function(e) {
        return _e(this[e = $e(e)]) ? this[e]() : this;
      }, _.invalidAt = function() {
        return P(this).overflow;
      }, _.isAfter = function(e, r) {
        return e = Fe(e) ? e : ce(e), !(!this.isValid() || !e.isValid()) && ((r = $e(r) || "millisecond") === "millisecond" ? this.valueOf() > e.valueOf() : e.valueOf() < this.clone().startOf(r).valueOf());
      }, _.isBefore = function(e, r) {
        return e = Fe(e) ? e : ce(e), !(!this.isValid() || !e.isValid()) && ((r = $e(r) || "millisecond") === "millisecond" ? this.valueOf() < e.valueOf() : this.clone().endOf(r).valueOf() < e.valueOf());
      }, _.isBetween = function(e, r, a, o) {
        return e = Fe(e) ? e : ce(e), r = Fe(r) ? r : ce(r), !!(this.isValid() && e.isValid() && r.isValid()) && ((o = o || "()")[0] === "(" ? this.isAfter(e, a) : !this.isBefore(e, a)) && (o[1] === ")" ? this.isBefore(r, a) : !this.isAfter(r, a));
      }, _.isSame = function(a, r) {
        var a = Fe(a) ? a : ce(a);
        return !(!this.isValid() || !a.isValid()) && ((r = $e(r) || "millisecond") === "millisecond" ? this.valueOf() === a.valueOf() : (a = a.valueOf(), this.clone().startOf(r).valueOf() <= a && a <= this.clone().endOf(r).valueOf()));
      }, _.isSameOrAfter = function(e, r) {
        return this.isSame(e, r) || this.isAfter(e, r);
      }, _.isSameOrBefore = function(e, r) {
        return this.isSame(e, r) || this.isBefore(e, r);
      }, _.isValid = function() {
        return me(this);
      }, _.lang = Rr, _.locale = Sa, _.localeData = ba, _.max = Lt, _.min = Nt, _.parsingFlags = function() {
        return A({}, P(this));
      }, _.set = function(e, r) {
        if (typeof e == "object") for (var a = function(m) {
          var y, g = [];
          for (y in m) c(m, y) && g.push({ unit: y, priority: Xi[y] });
          return g.sort(function(k, O) {
            return k.priority - O.priority;
          }), g;
        }(e = wn(e)), o = a.length, p = 0; p < o; p++) this[a[p].unit](e[a[p].unit]);
        else if (_e(this[e = $e(e)])) return this[e](r);
        return this;
      }, _.startOf = function(e) {
        var r, a;
        if ((e = $e(e)) === void 0 || e === "millisecond" || !this.isValid()) return this;
        switch (a = this._isUTC ? Ea : _a, e) {
          case "year":
            r = a(this.year(), 0, 1);
            break;
          case "quarter":
            r = a(this.year(), this.month() - this.month() % 3, 1);
            break;
          case "month":
            r = a(this.year(), this.month(), 1);
            break;
          case "week":
            r = a(this.year(), this.month(), this.date() - this.weekday());
            break;
          case "isoWeek":
            r = a(this.year(), this.month(), this.date() - (this.isoWeekday() - 1));
            break;
          case "day":
          case "date":
            r = a(this.year(), this.month(), this.date());
            break;
          case "hour":
            r = this._d.valueOf(), r -= Bt(r + (this._isUTC ? 0 : 6e4 * this.utcOffset()), 36e5);
            break;
          case "minute":
            r = this._d.valueOf(), r -= Bt(r, 6e4);
            break;
          case "second":
            r = this._d.valueOf(), r -= Bt(r, 1e3);
            break;
        }
        return this._d.setTime(r), i.updateOffset(this, true), this;
      }, _.subtract = tr, _.toArray = function() {
        var e = this;
        return [e.year(), e.month(), e.date(), e.hour(), e.minute(), e.second(), e.millisecond()];
      }, _.toObject = function() {
        var e = this;
        return { years: e.year(), months: e.month(), date: e.date(), hours: e.hours(), minutes: e.minutes(), seconds: e.seconds(), milliseconds: e.milliseconds() };
      }, _.toDate = function() {
        return new Date(this.valueOf());
      }, _.toISOString = function(e) {
        if (!this.isValid()) return null;
        var r = (e = e !== true) ? this.clone().utc() : this;
        return r.year() < 0 || 9999 < r.year() ? kr(r, e ? "YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]" : "YYYYYY-MM-DD[T]HH:mm:ss.SSSZ") : _e(Date.prototype.toISOString) ? e ? this.toDate().toISOString() : new Date(this.valueOf() + 60 * this.utcOffset() * 1e3).toISOString().replace("Z", kr(r, "Z")) : kr(r, e ? "YYYY-MM-DD[T]HH:mm:ss.SSS[Z]" : "YYYY-MM-DD[T]HH:mm:ss.SSSZ");
      }, _.inspect = function() {
        if (!this.isValid()) return "moment.invalid(/* " + this._i + " */)";
        var e, r = "moment", a = "";
        return this.isLocal() || (r = this.utcOffset() === 0 ? "moment.utc" : "moment.parseZone", a = "Z"), r = "[" + r + '("]', e = 0 <= this.year() && this.year() <= 9999 ? "YYYY" : "YYYYYY", this.format(r + e + "-MM-DD[T]HH:mm:ss.SSS" + (a + '[")]'));
      }, typeof Symbol < "u" && Symbol.for != null && (_[Symbol.for("nodejs.util.inspect.custom")] = function() {
        return "Moment<" + this.format() + ">";
      }), _.toJSON = function() {
        return this.isValid() ? this.toISOString() : null;
      }, _.toString = function() {
        return this.clone().locale("en").format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ");
      }, _.unix = function() {
        return Math.floor(this.valueOf() / 1e3);
      }, _.valueOf = function() {
        return this._d.valueOf() - 6e4 * (this._offset || 0);
      }, _.creationData = function() {
        return { input: this._i, format: this._f, locale: this._locale, isUTC: this._isUTC, strict: this._strict };
      }, _.eraName = function() {
        for (var e, r = this.localeData().eras(), a = 0, o = r.length; a < o; ++a)
          if (e = this.clone().startOf("day").valueOf(), r[a].since <= e && e <= r[a].until || r[a].until <= e && e <= r[a].since) return r[a].name;
        return "";
      }, _.eraNarrow = function() {
        for (var e, r = this.localeData().eras(), a = 0, o = r.length; a < o; ++a)
          if (e = this.clone().startOf("day").valueOf(), r[a].since <= e && e <= r[a].until || r[a].until <= e && e <= r[a].since) return r[a].narrow;
        return "";
      }, _.eraAbbr = function() {
        for (var e, r = this.localeData().eras(), a = 0, o = r.length; a < o; ++a)
          if (e = this.clone().startOf("day").valueOf(), r[a].since <= e && e <= r[a].until || r[a].until <= e && e <= r[a].since) return r[a].abbr;
        return "";
      }, _.eraYear = function() {
        for (var e, r, a = this.localeData().eras(), o = 0, p = a.length; o < p; ++o) if (e = a[o].since <= a[o].until ? 1 : -1, r = this.clone().startOf("day").valueOf(), a[o].since <= r && r <= a[o].until || a[o].until <= r && r <= a[o].since) return (this.year() - i(a[o].since).year()) * e + a[o].offset;
        return this.year();
      }, _.year = Hr, _.isLeapYear = function() {
        return Dr(this.year());
      }, _.weekYear = function(e) {
        return Oa.call(this, e, this.week(), this.weekday(), this.localeData()._week.dow, this.localeData()._week.doy);
      }, _.isoWeekYear = function(e) {
        return Oa.call(this, e, this.isoWeek(), this.isoWeekday(), 1, 4);
      }, _.quarter = _.quarters = function(e) {
        return e == null ? Math.ceil((this.month() + 1) / 3) : this.month(3 * (e - 1) + this.month() % 3);
      }, _.month = ea, _.daysInMonth = function() {
        return Mr(this.year(), this.month());
      }, _.week = _.weeks = function(e) {
        var r = this.localeData().week(this);
        return e == null ? r : this.add(7 * (e - r), "d");
      }, _.isoWeek = _.isoWeeks = function(e) {
        var r = er(this, 1, 4).week;
        return e == null ? r : this.add(7 * (e - r), "d");
      }, _.weeksInYear = function() {
        var e = this.localeData()._week;
        return st(this.year(), e.dow, e.doy);
      }, _.weeksInWeekYear = function() {
        var e = this.localeData()._week;
        return st(this.weekYear(), e.dow, e.doy);
      }, _.isoWeeksInYear = function() {
        return st(this.year(), 1, 4);
      }, _.isoWeeksInISOWeekYear = function() {
        return st(this.isoWeekYear(), 1, 4);
      }, _.date = yt, _.day = _.days = function(e) {
        if (!this.isValid()) return e != null ? this : NaN;
        var r, a, o = this._isUTC ? this._d.getUTCDay() : this._d.getDay();
        return e != null ? (r = e, a = this.localeData(), e = typeof r != "string" ? r : isNaN(r) ? typeof (r = a.weekdaysParse(r)) == "number" ? r : null : parseInt(r, 10), this.add(e - o, "d")) : o;
      }, _.weekday = function(e) {
        if (!this.isValid()) return e != null ? this : NaN;
        var r = (this.day() + 7 - this.localeData()._week.dow) % 7;
        return e == null ? r : this.add(e - r, "d");
      }, _.isoWeekday = function(e) {
        return this.isValid() ? e != null ? (r = e, a = this.localeData(), a = typeof r == "string" ? a.weekdaysParse(r) % 7 || 7 : isNaN(r) ? null : r, this.day(this.day() % 7 ? a : a - 7)) : this.day() || 7 : e != null ? this : NaN;
        var r, a;
      }, _.dayOfYear = function(e) {
        var r = Math.round((this.clone().startOf("day") - this.clone().startOf("year")) / 864e5) + 1;
        return e == null ? r : this.add(e - r, "d");
      }, _.hour = _.hours = tt, _.minute = _.minutes = _t, _.second = _.seconds = mt, _.millisecond = _.milliseconds = dt, _.utcOffset = function(e, r, a) {
        var o, p = this._offset || 0;
        if (!this.isValid()) return e != null ? this : NaN;
        if (e == null) return this._isUTC ? p : Wn(this);
        if (typeof e == "string") {
          if ((e = qn(Ar, e)) === null) return this;
        } else Math.abs(e) < 16 && !a && (e *= 60);
        return !this._isUTC && r && (o = Wn(this)), this._offset = e, this._isUTC = true, o != null && this.add(o, "m"), p !== e && (!r || this._changeInProgress ? va(this, Ve(e - p, "m"), 1, false) : this._changeInProgress || (this._changeInProgress = true, i.updateOffset(this, true), this._changeInProgress = null)), this;
      }, _.utc = function(e) {
        return this.utcOffset(0, e);
      }, _.local = function(e) {
        return this._isUTC && (this.utcOffset(0, e), this._isUTC = false, e && this.subtract(Wn(this), "m")), this;
      }, _.parseZone = function() {
        var e;
        return this._tzm != null ? this.utcOffset(this._tzm, false, true) : typeof this._i == "string" && ((e = qn(Gp, this._i)) != null ? this.utcOffset(e) : this.utcOffset(0, true)), this;
      }, _.hasAlignedHourOffset = function(e) {
        return !!this.isValid() && (e = e ? ce(e).utcOffset() : 0, (this.utcOffset() - e) % 60 == 0);
      }, _.isDST = function() {
        return this.utcOffset() > this.clone().month(0).utcOffset() || this.utcOffset() > this.clone().month(5).utcOffset();
      }, _.isLocal = function() {
        return !!this.isValid() && !this._isUTC;
      }, _.isUtcOffset = function() {
        return !!this.isValid() && this._isUTC;
      }, _.isUtc = ma, _.isUTC = ma, _.zoneAbbr = function() {
        return this._isUTC ? "UTC" : "";
      }, _.zoneName = function() {
        return this._isUTC ? "Coordinated Universal Time" : "";
      }, _.dates = W("dates accessor is deprecated. Use date instead.", yt), _.months = W("months accessor is deprecated. Use month instead", ea), _.years = W("years accessor is deprecated. Use year instead", Hr), _.zone = W("moment().zone is deprecated, use moment().utcOffset instead. http://momentjs.com/guides/#/warnings/zone/", function(e, r) {
        return e != null ? (this.utcOffset(e = typeof e != "string" ? -e : e, r), this) : -this.utcOffset();
      }), _.isDSTShifted = W("isDSTShifted is deprecated. See http://momentjs.com/guides/#/warnings/dst-shifted/ for more information", function() {
        if (!h(this._isDSTShifted)) return this._isDSTShifted;
        var e, r = {};
        return ct(r, this), (r = ca(r))._a ? (e = (r._isUTC ? T : ce)(r._a), this._isDSTShifted = this.isValid() && 0 < function(a, o, p) {
          for (var m = Math.min(a.length, o.length), y = Math.abs(a.length - o.length), g = 0, k = 0; k < m; k++) z(a[k]) !== z(o[k]) && g++;
          return g + y;
        }(r._a, e.toArray())) : this._isDSTShifted = false, this._isDSTShifted;
      }), j = et.prototype;
      function $r(e, r, a, m) {
        var p = it(), m = T().set(m, r);
        return p[a](m, e);
      }
      function ka(e, r, a) {
        if (d(e) && (r = e, e = void 0), e = e || "", r != null) return $r(e, r, a, "month");
        for (var o = [], p = 0; p < 12; p++) o[p] = $r(e, p, a, "month");
        return o;
      }
      function Zn(e, r, a, o) {
        r = (typeof e == "boolean" ? d(r) && (a = r, r = void 0) : (r = e, e = false, d(a = r) && (a = r, r = void 0)), r || "");
        var p, m = it(), y = e ? m._week.dow : 0, g = [];
        if (a != null) return $r(r, (a + y) % 7, o, "day");
        for (p = 0; p < 7; p++) g[p] = $r(r, (p + y) % 7, o, "day");
        return g;
      }
      j.calendar = function(e, r, a) {
        return _e(e = this._calendar[e] || this._calendar.sameElse) ? e.call(r, a) : e;
      }, j.longDateFormat = function(e) {
        var r = this._longDateFormat[e], a = this._longDateFormat[e.toUpperCase()];
        return r || !a ? r : (this._longDateFormat[e] = a.match(An).map(function(o) {
          return o === "MMMM" || o === "MM" || o === "DD" || o === "dddd" ? o.slice(1) : o;
        }).join(""), this._longDateFormat[e]);
      }, j.invalidDate = function() {
        return this._invalidDate;
      }, j.ordinal = function(e) {
        return this._ordinal.replace("%d", e);
      }, j.preparse = Ta, j.postformat = Ta, j.relativeTime = function(e, r, a, o) {
        var p = this._relativeTime[a];
        return _e(p) ? p(e, r, a, o) : p.replace(/%d/i, e);
      }, j.pastFuture = function(e, r) {
        return _e(e = this._relativeTime[0 < e ? "future" : "past"]) ? e(r) : e.replace(/%s/i, r);
      }, j.set = function(e) {
        var r, a;
        for (a in e) c(e, a) && (_e(r = e[a]) ? this[a] = r : this["_" + a] = r);
        this._config = e, this._dayOfMonthOrdinalParseLenient = new RegExp((this._dayOfMonthOrdinalParse.source || this._ordinalParse.source) + "|" + /\d{1,2}/.source);
      }, j.eras = function(e, r) {
        for (var a, o = this._eras || it("en")._eras, p = 0, m = o.length; p < m; ++p) {
          switch (typeof o[p].since) {
            case "string":
              a = i(o[p].since).startOf("day"), o[p].since = a.valueOf();
              break;
          }
          switch (typeof o[p].until) {
            case "undefined":
              o[p].until = 1 / 0;
              break;
            case "string":
              a = i(o[p].until).startOf("day").valueOf(), o[p].until = a.valueOf();
              break;
          }
        }
        return o;
      }, j.erasParse = function(e, r, a) {
        var o, p, m, y, g, k = this.eras();
        for (e = e.toUpperCase(), o = 0, p = k.length; o < p; ++o) if (m = k[o].name.toUpperCase(), y = k[o].abbr.toUpperCase(), g = k[o].narrow.toUpperCase(), a) switch (r) {
          case "N":
          case "NN":
          case "NNN":
            if (y === e) return k[o];
            break;
          case "NNNN":
            if (m === e) return k[o];
            break;
          case "NNNNN":
            if (g === e) return k[o];
            break;
        }
        else if (0 <= [m, y, g].indexOf(e)) return k[o];
      }, j.erasConvertYear = function(e, r) {
        var a = e.since <= e.until ? 1 : -1;
        return r === void 0 ? i(e.since).year() : i(e.since).year() + (r - e.offset) * a;
      }, j.erasAbbrRegex = function(e) {
        return c(this, "_erasAbbrRegex") || Xn.call(this), e ? this._erasAbbrRegex : this._erasRegex;
      }, j.erasNameRegex = function(e) {
        return c(this, "_erasNameRegex") || Xn.call(this), e ? this._erasNameRegex : this._erasRegex;
      }, j.erasNarrowRegex = function(e) {
        return c(this, "_erasNarrowRegex") || Xn.call(this), e ? this._erasNarrowRegex : this._erasRegex;
      }, j.months = function(e, r) {
        return e ? (u(this._months) ? this._months : this._months[(this._months.isFormat || Qi).test(r) ? "format" : "standalone"])[e.month()] : u(this._months) ? this._months : this._months.standalone;
      }, j.monthsShort = function(e, r) {
        return e ? (u(this._monthsShort) ? this._monthsShort : this._monthsShort[Qi.test(r) ? "format" : "standalone"])[e.month()] : u(this._monthsShort) ? this._monthsShort : this._monthsShort.standalone;
      }, j.monthsParse = function(e, r, a) {
        var o, p;
        if (this._monthsParseExact) return function(Y, y, g) {
          var k, O, B, Y = Y.toLocaleLowerCase();
          if (!this._monthsParse) for (this._monthsParse = [], this._longMonthsParse = [], this._shortMonthsParse = [], k = 0; k < 12; ++k) B = T([2e3, k]), this._shortMonthsParse[k] = this.monthsShort(B, "").toLocaleLowerCase(), this._longMonthsParse[k] = this.months(B, "").toLocaleLowerCase();
          return g ? y === "MMM" ? (O = Se.call(this._shortMonthsParse, Y)) !== -1 ? O : null : (O = Se.call(this._longMonthsParse, Y)) !== -1 ? O : null : y === "MMM" ? (O = Se.call(this._shortMonthsParse, Y)) !== -1 || (O = Se.call(this._longMonthsParse, Y)) !== -1 ? O : null : (O = Se.call(this._longMonthsParse, Y)) !== -1 || (O = Se.call(this._shortMonthsParse, Y)) !== -1 ? O : null;
        }.call(this, e, r, a);
        for (this._monthsParse || (this._monthsParse = [], this._longMonthsParse = [], this._shortMonthsParse = []), o = 0; o < 12; o++)
          if (p = T([2e3, o]), a && !this._longMonthsParse[o] && (this._longMonthsParse[o] = new RegExp("^" + this.months(p, "").replace(".", "") + "$", "i"), this._shortMonthsParse[o] = new RegExp("^" + this.monthsShort(p, "").replace(".", "") + "$", "i")), a || this._monthsParse[o] || (p = "^" + this.months(p, "") + "|^" + this.monthsShort(p, ""), this._monthsParse[o] = new RegExp(p.replace(".", ""), "i")), a && r === "MMMM" && this._longMonthsParse[o].test(e) || a && r === "MMM" && this._shortMonthsParse[o].test(e) || !a && this._monthsParse[o].test(e)) return o;
      }, j.monthsRegex = function(e) {
        return this._monthsParseExact ? (c(this, "_monthsRegex") || ta.call(this), e ? this._monthsStrictRegex : this._monthsRegex) : (c(this, "_monthsRegex") || (this._monthsRegex = zp), this._monthsStrictRegex && e ? this._monthsStrictRegex : this._monthsRegex);
      }, j.monthsShortRegex = function(e) {
        return this._monthsParseExact ? (c(this, "_monthsRegex") || ta.call(this), e ? this._monthsShortStrictRegex : this._monthsShortRegex) : (c(this, "_monthsShortRegex") || (this._monthsShortRegex = Wp), this._monthsShortStrictRegex && e ? this._monthsShortStrictRegex : this._monthsShortRegex);
      }, j.week = function(e) {
        return er(e, this._week.dow, this._week.doy).week;
      }, j.firstDayOfYear = function() {
        return this._week.doy;
      }, j.firstDayOfWeek = function() {
        return this._week.dow;
      }, j.weekdays = function(e, r) {
        return r = u(this._weekdays) ? this._weekdays : this._weekdays[e && e !== true && this._weekdays.isFormat.test(r) ? "format" : "standalone"], e === true ? Ln(r, this._week.dow) : e ? r[e.day()] : r;
      }, j.weekdaysMin = function(e) {
        return e === true ? Ln(this._weekdaysMin, this._week.dow) : e ? this._weekdaysMin[e.day()] : this._weekdaysMin;
      }, j.weekdaysShort = function(e) {
        return e === true ? Ln(this._weekdaysShort, this._week.dow) : e ? this._weekdaysShort[e.day()] : this._weekdaysShort;
      }, j.weekdaysParse = function(e, r, a) {
        var o, p;
        if (this._weekdaysParseExact) return function(Y, y, g) {
          var k, O, B, Y = Y.toLocaleLowerCase();
          if (!this._weekdaysParse) for (this._weekdaysParse = [], this._shortWeekdaysParse = [], this._minWeekdaysParse = [], k = 0; k < 7; ++k) B = T([2e3, 1]).day(k), this._minWeekdaysParse[k] = this.weekdaysMin(B, "").toLocaleLowerCase(), this._shortWeekdaysParse[k] = this.weekdaysShort(B, "").toLocaleLowerCase(), this._weekdaysParse[k] = this.weekdays(B, "").toLocaleLowerCase();
          return g ? y === "dddd" ? (O = Se.call(this._weekdaysParse, Y)) !== -1 ? O : null : y === "ddd" ? (O = Se.call(this._shortWeekdaysParse, Y)) !== -1 ? O : null : (O = Se.call(this._minWeekdaysParse, Y)) !== -1 ? O : null : y === "dddd" ? (O = Se.call(this._weekdaysParse, Y)) !== -1 || (O = Se.call(this._shortWeekdaysParse, Y)) !== -1 || (O = Se.call(this._minWeekdaysParse, Y)) !== -1 ? O : null : y === "ddd" ? (O = Se.call(this._shortWeekdaysParse, Y)) !== -1 || (O = Se.call(this._weekdaysParse, Y)) !== -1 || (O = Se.call(this._minWeekdaysParse, Y)) !== -1 ? O : null : (O = Se.call(this._minWeekdaysParse, Y)) !== -1 || (O = Se.call(this._weekdaysParse, Y)) !== -1 || (O = Se.call(this._shortWeekdaysParse, Y)) !== -1 ? O : null;
        }.call(this, e, r, a);
        for (this._weekdaysParse || (this._weekdaysParse = [], this._minWeekdaysParse = [], this._shortWeekdaysParse = [], this._fullWeekdaysParse = []), o = 0; o < 7; o++)
          if (p = T([2e3, 1]).day(o), a && !this._fullWeekdaysParse[o] && (this._fullWeekdaysParse[o] = new RegExp("^" + this.weekdays(p, "").replace(".", "\\.?") + "$", "i"), this._shortWeekdaysParse[o] = new RegExp("^" + this.weekdaysShort(p, "").replace(".", "\\.?") + "$", "i"), this._minWeekdaysParse[o] = new RegExp("^" + this.weekdaysMin(p, "").replace(".", "\\.?") + "$", "i")), this._weekdaysParse[o] || (p = "^" + this.weekdays(p, "") + "|^" + this.weekdaysShort(p, "") + "|^" + this.weekdaysMin(p, ""), this._weekdaysParse[o] = new RegExp(p.replace(".", ""), "i")), a && r === "dddd" && this._fullWeekdaysParse[o].test(e) || a && r === "ddd" && this._shortWeekdaysParse[o].test(e) || a && r === "dd" && this._minWeekdaysParse[o].test(e) || !a && this._weekdaysParse[o].test(e)) return o;
      }, j.weekdaysRegex = function(e) {
        return this._weekdaysParseExact ? (c(this, "_weekdaysRegex") || Yn.call(this), e ? this._weekdaysStrictRegex : this._weekdaysRegex) : (c(this, "_weekdaysRegex") || (this._weekdaysRegex = Zp), this._weekdaysStrictRegex && e ? this._weekdaysStrictRegex : this._weekdaysRegex);
      }, j.weekdaysShortRegex = function(e) {
        return this._weekdaysParseExact ? (c(this, "_weekdaysRegex") || Yn.call(this), e ? this._weekdaysShortStrictRegex : this._weekdaysShortRegex) : (c(this, "_weekdaysShortRegex") || (this._weekdaysShortRegex = Jp), this._weekdaysShortStrictRegex && e ? this._weekdaysShortStrictRegex : this._weekdaysShortRegex);
      }, j.weekdaysMinRegex = function(e) {
        return this._weekdaysParseExact ? (c(this, "_weekdaysRegex") || Yn.call(this), e ? this._weekdaysMinStrictRegex : this._weekdaysMinRegex) : (c(this, "_weekdaysMinRegex") || (this._weekdaysMinRegex = Qp), this._weekdaysMinStrictRegex && e ? this._weekdaysMinStrictRegex : this._weekdaysMinRegex);
      }, j.isPM = function(e) {
        return (e + "").toLowerCase().charAt(0) === "p";
      }, j.meridiem = function(e, r, a) {
        return 11 < e ? a ? "pm" : "PM" : a ? "am" : "AM";
      }, ft("en", { eras: [{ since: "0001-01-01", until: 1 / 0, offset: 1, name: "Anno Domini", narrow: "AD", abbr: "AD" }, { since: "0000-12-31", until: -1 / 0, offset: 1, name: "Before Christ", narrow: "BC", abbr: "BC" }], dayOfMonthOrdinalParse: /\d{1,2}(th|st|nd|rd)/, ordinal: function(e) {
        var r = e % 10;
        return e + (z(e % 100 / 10) === 1 ? "th" : r == 1 ? "st" : r == 2 ? "nd" : r == 3 ? "rd" : "th");
      } }), i.lang = W("moment.lang is deprecated. Use moment.locale instead.", ft), i.langData = W("moment.langData is deprecated. Use moment.localeData instead.", it);
      var at = Math.abs;
      function Da(e, r, a, o) {
        return r = Ve(r, a), e._milliseconds += o * r._milliseconds, e._days += o * r._days, e._months += o * r._months, e._bubble();
      }
      function Pa(e) {
        return e < 0 ? Math.floor(e) : Math.ceil(e);
      }
      function Ca(e) {
        return 4800 * e / 146097;
      }
      function Jn(e) {
        return 146097 * e / 4800;
      }
      function ot(e) {
        return function() {
          return this.as(e);
        };
      }
      Yt = ot("ms"), Cr = ot("s"), Jt = ot("m"), Lt = ot("h"), Nt = ot("d"), tr = ot("w"), tt = ot("M"), _t = ot("Q"), mt = ot("y");
      function Et(e) {
        return function() {
          return this.isValid() ? this._data[e] : NaN;
        };
      }
      var dt = Et("milliseconds"), yt = Et("seconds"), Hr = Et("minutes"), j = Et("hours"), hf = Et("days"), mf = Et("months"), df = Et("years"), lt = Math.round, $t = { ss: 44, s: 45, m: 45, h: 22, d: 26, w: null, M: 11 };
      function yf(e, r, a, o) {
        var O = Ve(e).abs(), B = lt(O.as("s")), p = lt(O.as("m")), m = lt(O.as("h")), y = lt(O.as("d")), g = lt(O.as("M")), k = lt(O.as("w")), O = lt(O.as("y")), B = (B <= a.ss ? ["s", B] : B < a.s && ["ss", B]) || p <= 1 && ["m"] || p < a.m && ["mm", p] || m <= 1 && ["h"] || m < a.h && ["hh", m] || y <= 1 && ["d"] || y < a.d && ["dd", y];
        return (B = (B = a.w != null ? B || k <= 1 && ["w"] || k < a.w && ["ww", k] : B) || g <= 1 && ["M"] || g < a.M && ["MM", g] || O <= 1 && ["y"] || ["yy", O])[2] = r, B[3] = 0 < +e, B[4] = o, function(Y, ye, be, We, Kn) {
          return Kn.relativeTime(ye || 1, !!be, Y, We);
        }.apply(null, B);
      }
      var Qn = Math.abs;
      function Ht(e) {
        return (0 < e) - (e < 0) || +e;
      }
      function Gr() {
        if (!this.isValid()) return this.localeData().invalidDate();
        var e, r, a, o, p, m, y, g = Qn(this._milliseconds) / 1e3, k = Qn(this._days), O = Qn(this._months), B = this.asSeconds();
        return B ? (e = He(g / 60), r = He(e / 60), g %= 60, e %= 60, a = He(O / 12), O %= 12, o = g ? g.toFixed(3).replace(/\.?0+$/, "") : "", p = Ht(this._months) !== Ht(B) ? "-" : "", m = Ht(this._days) !== Ht(B) ? "-" : "", y = Ht(this._milliseconds) !== Ht(B) ? "-" : "", (B < 0 ? "-" : "") + "P" + (a ? p + a + "Y" : "") + (O ? p + O + "M" : "") + (k ? m + k + "D" : "") + (r || e || g ? "T" : "") + (r ? y + r + "H" : "") + (e ? y + e + "M" : "") + (g ? y + o + "S" : "")) : "P0D";
      }
      var Z = Yr.prototype;
      return Z.isValid = function() {
        return this._isValid;
      }, Z.abs = function() {
        var e = this._data;
        return this._milliseconds = at(this._milliseconds), this._days = at(this._days), this._months = at(this._months), e.milliseconds = at(e.milliseconds), e.seconds = at(e.seconds), e.minutes = at(e.minutes), e.hours = at(e.hours), e.months = at(e.months), e.years = at(e.years), this;
      }, Z.add = function(e, r) {
        return Da(this, e, r, 1);
      }, Z.subtract = function(e, r) {
        return Da(this, e, r, -1);
      }, Z.as = function(e) {
        if (!this.isValid()) return NaN;
        var r, a, o = this._milliseconds;
        if ((e = $e(e)) === "month" || e === "quarter" || e === "year") switch (r = this._days + o / 864e5, a = this._months + Ca(r), e) {
          case "month":
            return a;
          case "quarter":
            return a / 3;
          case "year":
            return a / 12;
        }
        else switch (r = this._days + Math.round(Jn(this._months)), e) {
          case "week":
            return r / 7 + o / 6048e5;
          case "day":
            return r + o / 864e5;
          case "hour":
            return 24 * r + o / 36e5;
          case "minute":
            return 1440 * r + o / 6e4;
          case "second":
            return 86400 * r + o / 1e3;
          case "millisecond":
            return Math.floor(864e5 * r) + o;
          default:
            throw new Error("Unknown unit " + e);
        }
      }, Z.asMilliseconds = Yt, Z.asSeconds = Cr, Z.asMinutes = Jt, Z.asHours = Lt, Z.asDays = Nt, Z.asWeeks = tr, Z.asMonths = tt, Z.asQuarters = _t, Z.asYears = mt, Z.valueOf = function() {
        return this.isValid() ? this._milliseconds + 864e5 * this._days + this._months % 12 * 2592e6 + 31536e6 * z(this._months / 12) : NaN;
      }, Z._bubble = function() {
        var e = this._milliseconds, r = this._days, a = this._months, o = this._data;
        return 0 <= e && 0 <= r && 0 <= a || e <= 0 && r <= 0 && a <= 0 || (e += 864e5 * Pa(Jn(a) + r), a = r = 0), o.milliseconds = e % 1e3, e = He(e / 1e3), o.seconds = e % 60, e = He(e / 60), o.minutes = e % 60, e = He(e / 60), o.hours = e % 24, r += He(e / 24), a += e = He(Ca(r)), r -= Pa(Jn(e)), e = He(a / 12), a %= 12, o.days = r, o.months = a, o.years = e, this;
      }, Z.clone = function() {
        return Ve(this);
      }, Z.get = function(e) {
        return e = $e(e), this.isValid() ? this[e + "s"]() : NaN;
      }, Z.milliseconds = dt, Z.seconds = yt, Z.minutes = Hr, Z.hours = j, Z.days = hf, Z.weeks = function() {
        return He(this.days() / 7);
      }, Z.months = mf, Z.years = df, Z.humanize = function(e, r) {
        if (!this.isValid()) return this.localeData().invalidDate();
        var a = false, o = $t;
        return typeof e == "object" && (r = e, e = false), typeof e == "boolean" && (a = e), typeof r == "object" && (o = Object.assign({}, $t, r), r.s != null && r.ss == null && (o.ss = r.s - 1)), e = this.localeData(), r = yf(this, !a, o, e), a && (r = e.pastFuture(+this, r)), e.postformat(r);
      }, Z.toISOString = Gr, Z.toString = Gr, Z.toJSON = Gr, Z.locale = Sa, Z.localeData = ba, Z.toIsoString = W("toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)", Gr), Z.lang = Rr, R("X", 0, 0, "unix"), R("x", 0, 0, "valueOf"), M("x", Ir), M("X", /[+-]?\d+(\.\d{1,3})?/), oe("X", function(e, r, a) {
        a._d = new Date(1e3 * parseFloat(e));
      }), oe("x", function(e, r, a) {
        a._d = new Date(z(e));
      }), i.version = "2.29.4", s = ce, i.fn = _, i.min = function() {
        return fa("isBefore", [].slice.call(arguments, 0));
      }, i.max = function() {
        return fa("isAfter", [].slice.call(arguments, 0));
      }, i.now = function() {
        return Date.now ? Date.now() : +/* @__PURE__ */ new Date();
      }, i.utc = T, i.unix = function(e) {
        return ce(1e3 * e);
      }, i.months = function(e, r) {
        return ka(e, r, "months");
      }, i.isDate = v, i.locale = ft, i.invalid = X, i.duration = Ve, i.isMoment = Fe, i.weekdays = function(e, r, a) {
        return Zn(e, r, a, "weekdays");
      }, i.parseZone = function() {
        return ce.apply(null, arguments).parseZone();
      }, i.localeData = it, i.isDuration = Fr, i.monthsShort = function(e, r) {
        return ka(e, r, "monthsShort");
      }, i.weekdaysMin = function(e, r, a) {
        return Zn(e, r, a, "weekdaysMin");
      }, i.defineLocale = jn, i.updateLocale = function(e, r) {
        var a, o;
        return r != null ? (o = aa, fe[e] != null && fe[e].parentLocale != null ? fe[e].set(St(fe[e]._config, r)) : (r = St(o = (a = Nr(e)) != null ? a._config : o, r), a == null && (r.abbr = e), (o = new et(r)).parentLocale = fe[e], fe[e] = o), ft(e)) : fe[e] != null && (fe[e].parentLocale != null ? (fe[e] = fe[e].parentLocale, e === ft() && ft(e)) : fe[e] != null && delete fe[e]), fe[e];
      }, i.locales = function() {
        return zt(fe);
      }, i.weekdaysShort = function(e, r, a) {
        return Zn(e, r, a, "weekdaysShort");
      }, i.normalizeUnits = $e, i.relativeTimeRounding = function(e) {
        return e === void 0 ? lt : typeof e == "function" && (lt = e, true);
      }, i.relativeTimeThreshold = function(e, r) {
        return $t[e] !== void 0 && (r === void 0 ? $t[e] : ($t[e] = r, e === "s" && ($t.ss = r - 1), true));
      }, i.calendarFormat = function(e, r) {
        return (e = e.diff(r, "days", true)) < -6 ? "sameElse" : e < -1 ? "lastWeek" : e < 0 ? "lastDay" : e < 1 ? "sameDay" : e < 2 ? "nextDay" : e < 7 ? "nextWeek" : "sameElse";
      }, i.prototype = _, i.HTML5_FMT = { DATETIME_LOCAL: "YYYY-MM-DDTHH:mm", DATETIME_LOCAL_SECONDS: "YYYY-MM-DDTHH:mm:ss", DATETIME_LOCAL_MS: "YYYY-MM-DDTHH:mm:ss.SSS", DATE: "YYYY-MM-DD", TIME: "HH:mm", TIME_SECONDS: "HH:mm:ss", TIME_MS: "HH:mm:ss.SSS", WEEK: "GGGG-[W]WW", MONTH: "YYYY-MM" }, i;
    });
  }(Mi)), Mi.exports;
}
var xy = by();
var _y = /* @__PURE__ */ Ga(xy);
_y.suppressDeprecationWarnings = true;
var Ey = (t) => crypto.getRandomValues(new Uint8Array(t));
var Oy = (t, n, s) => {
  let i = (2 << Math.log2(t.length - 1)) - 1, u = -~(1.6 * i * n / t.length);
  return (l = n) => {
    let c = "";
    for (; ; ) {
      let f = s(u), h = u | 0;
      for (; h--; )
        if (c += t[f[h] & i] || "", c.length >= l) return c;
    }
  };
};
var Ty = (t, n = 21) => Oy(t, n | 0, Ey);
function wc(t = 32) {
  return Ty("1234567890abcdefghijklmnopqrstuvwxyz")(t);
}
var ky = (t) => {
  const n = `${t}`;
  return n.split(".")[1] ? n.split(".")[1].length : 0;
};
var Rc = (t) => t.reduce((n, s) => {
  const i = ky(s);
  return Math.max(n, i);
}, 0);
var _r = (t) => {
  var n;
  if (Array.isArray(t)) return false;
  const s = String(t).trim();
  if (/[^\d.,\-eE+]/.test(s)) return false;
  if (!s.includes(",")) return !isNaN(Number(s));
  if ((s.match(/,/g) || []).length > 1) return !isNaN(Number(s.replace(/,/g, "")));
  const i = ((n = s.split(",")[1]) == null ? void 0 : n.length) === 3 ? "" : ".";
  return !isNaN(Number(s.replace(",", i)));
};
var Nc = (t) => /^[+-]?(?:(?:\d{1,3}(?:[ ,.]?\d{3})*(?:\.\d+)?)|(?:\.\d+))(?:[eE][+-]?\d+)?$/.test(
  String(t).trim()
);

// ../schema/src/utils/fields/helpers.ts
function Dy(...t) {
  return (n) => t.some((s) => s(n)) || n === null;
}
function wi(t, n) {
  let s = 0;
  for (let i = 0; i < t.length; i++) {
    if (!n(t[i])) s += 1;
    if (s / t.length > rl) return false;
  }
  return true;
}
function Py(t, n = true) {
  if (t === "month") return ie.isMonth;
  if (t === "quarter") return ie.isQuarter;
  if (t === "month/day") return ie.isMonthDay;
  if (t === "year/month") return ie.isYearMonth;
  if (t === "year") {
    return (s) => ie.isStrictYear(s) || ie.isFiscalYear(s) || ie.isApostropheTwoDigitYear(s);
  }
  if (t === "numeric") return n ? _r : Nc;
  if (t === "date") {
    return n ? ie.isStrictFormatDate : ie.isDate;
  }
  return () => true;
}
function Lc(t, n = true) {
  return Dy(Py(t, n));
}

// ../schema/src/utils/fields/existing.ts
function Yc(t) {
  if (De(Q.Fields.FieldPropertiesSchema, t)) return t.type;
  if (De(Q.Fields.ColumnTypeSchema, t?.type)) return t.type;
  return void 0;
}
function Fc(t) {
  if (De(Q.Fields.FieldPropertiesSchema, t)) return t;
  if (t && t.stats) return t;
  return void 0;
}

// ../schema/src/utils/fields/stats.ts
function jc(t, n) {
  return {
    calculateDateGaps: n?.calculateDateGaps ?? t?.isIntraday ?? false,
    preserveOrder: n?.preserveOrder ?? t?.preserveOrder ?? false,
    recalculateGranularity: n?.recalculateGranularity ?? true
  };
}
function Bc(t) {
  const n = t.filter((s) => _r(s));
  return {
    min: Math.min(...n),
    max: Math.max(...n),
    maxMantissa: Rc(n)
  };
}
function $c(t, n, s) {
  const i = t.map((v) => te.utc(`${v}`)).filter((v) => v.isValid());
  const u = te.min(...i).toISOString();
  const l = te.max(...i).toISOString();
  const c = n?.stats;
  const f = c?.dateGranularity;
  const h = !f || s.recalculateGranularity;
  const d = h ? ps(i) : f;
  return {
    min: u,
    max: l,
    duration: ie.parseRange(u?.toString(), l?.toString()),
    dateGranularity: d,
    ...s.calculateDateGaps && {
      dateGaps: fs(i, d)
    }
  };
}
function Hc(t, n) {
  const s = Cy(t);
  const i = s > -1 ? Wr : ts;
  const u = s > -1 ? rs : ns;
  const { data: l, suffix: c } = Iy(
    t,
    u,
    s > -1 ? s : t.length
  );
  const { data: f, suffix: h } = Ay(
    t,
    u,
    // if no leap day is found, all elements will be in before
    s > -1 ? s : t.length
  );
  const d = { ...c, ...h };
  const v = n.preserveOrder ? [...l.reverse(), ...f].filter((le) => le[1].isValid()) : t.filter(
    (le) => te.utc(`${le}${i}`, "MMMM DD YYYY").isValid()
  ).map((le) => [le, te.utc(`${le}${i}`, "MMMM DD YYYY")]);
  const x = v.map((le) => le[0]);
  const A = v.map((le) => le[1]);
  if (!x.length) return {};
  const T = te.min(A);
  const P = A.indexOf(T);
  const me = te.max(A);
  const X = A.indexOf(me);
  const de = ps(A);
  return {
    min: x[P],
    max: x[X],
    duration: ie.parseRange(T.toString(), me.toString()),
    dateGranularity: de,
    ...n.calculateDateGaps && {
      dateGaps: fs(A, de)
    },
    suffix: n.preserveOrder ? { unordered: d } : { ordered: i }
  };
}
function Gc(t) {
  const n = t.map((d) => `${d}`).filter((d) => te.utc(`${d} 01`, "MMMM YYYY DD").isValid());
  const s = n.map(
    (d) => te.utc(`${d} 01`, "MMMM YYYY DD")
  );
  if (!n.length) return {};
  const i = te.min(s);
  const u = s.indexOf(i);
  const l = te.max(s);
  const c = s.indexOf(l);
  const f = Math.abs(
    te.utc(i).diff(te.utc(l), "year", true)
  );
  const h = f >= 10 ? "years" : "months";
  return {
    min: n[u],
    max: n[c],
    duration: ie.parseRange(i.toString(), l.toString()),
    dateGranularity: {
      minimumSpan: h,
      percentileSpan: h,
      granularityMode: h
    },
    suffix: { ordered: " 01" }
  };
}
function Uc(t) {
  const n = t.filter((u) => _r(u));
  const s = Math.min(...n);
  const i = Math.max(...n);
  return {
    min: s,
    max: i,
    duration: ie.parseRange(s.toString(), i.toString()),
    uniqueValues: Vr(n.map((u) => `${u}`)),
    dateGranularity: {
      minimumSpan: "years",
      percentileSpan: "years",
      granularityMode: "years"
    }
  };
}
function qc(t) {
  const n = t.filter((A) => A !== null);
  const { min: s, max: i, minVal: u, maxVal: l } = ie.statParserQuarter(n);
  const c = s.quarter;
  const f = i.quarter;
  const h = `${s.year}-${zr[c]}`;
  const d = `${i.year}-${zr[f]}`;
  const v = Math.abs(
    te.utc(h).diff(te.utc(d), "year", true)
  );
  const x = v >= 10 ? "years" : v >= 6 ? "yearlyQuarters" : "quarters";
  return {
    min: u,
    max: l,
    duration: ie.parseRange(h, d),
    uniqueValues: Vr(n),
    dateGranularity: {
      minimumSpan: x,
      percentileSpan: x,
      granularityMode: x
    }
  };
}
function Vc(t) {
  const n = t.map((f) => `${f}`).filter((f) => te.utc(f, "MMMM").isValid());
  const s = n.map((f) => te.utc(f, "MMMM"));
  if (!n.length) return {};
  const i = te.min(s);
  const u = s.indexOf(i);
  const l = te.max(s);
  const c = s.indexOf(l);
  return {
    min: n[u],
    max: n[c],
    duration: ie.parseRange(i.toString(), l.toString()),
    dateGranularity: {
      minimumSpan: "months",
      percentileSpan: "months",
      granularityMode: "months"
    }
  };
}
function Wc(t) {
  const n = t.filter((s) => s !== null);
  return { uniqueValues: Vr(n) };
}
function Cy(t) {
  const n = t.map(
    (s) => te.utc(`${s} ${Wr}`, "MMMM DD YYYY")
  );
  return n.findIndex(
    (s) => s.isValid() && s.month() === 1 && s.date() === 29
  );
}
function Iy(t, n, s) {
  const i = t.slice(0, s).reverse();
  let u = te.utc(
    `${t[s]} ${n}`,
    "MMMM DD YYYY"
  );
  const l = {};
  const c = i.map((f, h) => {
    let d = te.utc(`${f} ${n}`, "MMMM DD YYYY");
    if (d.isAfter(u)) {
      n -= 1;
      d = te.utc(`${f} ${n}`, "MMMM DD YYYY");
      l[` ${n}`] = s - h - 1;
    }
    u = d;
    return [f, d];
  });
  return { data: c, suffix: l };
}
function Ay(t, n, s) {
  const i = t.slice(s);
  let u = te.utc(
    `${t[s]} ${n}`,
    "MMMM DD YYYY"
  );
  const l = {};
  const c = i.map((f, h) => {
    let d = te.utc(`${f} ${n}`, "MMMM DD YYYY");
    if (d.isBefore(u)) {
      l[` ${n}`] = h - 1 + s;
      n += 1;
      d = te.utc(`${f} ${n}`, "MMMM DD YYYY");
    }
    u = d;
    return [f, d];
  });
  l[` ${n}`] = t.length - 1;
  return { data: c, suffix: l };
}

// ../schema/src/utils/fields/index.ts
function zc(t, n, s, i) {
  if (!t.length) return [];
  const u = jc(s, i);
  const l = wy(t);
  return l.map((c, f) => {
    const h = Yc(n?.[f]);
    const d = h ?? Ry(c);
    const v = c.map((A) => Dn(A, d));
    const x = Fc(n?.[f]);
    return H(Q.Fields.FieldPropertiesSchema, {
      ...n && n[f],
      // don't overwrite the id if field already has one
      id: n?.[f]?.id ?? Ia(6),
      type: d,
      index: f,
      data: v,
      taxonomy: { isPrimary: f === 0 },
      stats: Ny({ columnData: v, existingField: x, type: d, options: u })
    });
  });
}
function My(t) {
  const n = tl.map((i) => ({
    symbol: i,
    count: 0,
    data: []
  }));
  for (const i of t) {
    const u = String(i);
    for (const l of n) {
      if (u.includes(l.symbol)) {
        l.count++;
        l.data.push(u.replaceAll(l.symbol, "").trim());
      } else {
        l.data.push(i);
      }
    }
  }
  const s = t.filter((i) => i !== null && i !== "");
  for (const i of n) {
    if (wi(s, (u) => String(u).includes(i.symbol))) {
      return {
        data: i.data,
        shouldUse: true,
        symbolCount: i.count,
        symbol: i.symbol
      };
    }
  }
  return { data: t, shouldUse: false, symbolCount: 0 };
}
function wy(t) {
  if (!t.length) return [];
  return t[0].map((n, s) => t.map((i) => i[s]));
}
function Ry(t) {
  if (!t || t.every((c) => c === null)) return "null";
  const n = t.filter(Boolean).slice(0, 50);
  const s = My(n);
  const i = s.shouldUse ? s.data : n;
  const u = [
    "year",
    "numeric",
    "quarter",
    "date",
    "month",
    "month/day",
    "year/month"
  ];
  const l = u.find((c) => {
    return wi(i, Lc(c, false));
  });
  return l ?? "string";
}
function Ny({
  columnData: t,
  existingField: n,
  type: s,
  options: i
}) {
  switch (s) {
    case "numeric":
      return Bc(t);
    case "date":
      return $c(t, n, i);
    case "month/day":
      return Hc(t, i);
    case "year/month":
      return Gc(t);
    case "year":
      return Uc(t);
    case "quarter":
      return qc(t);
    case "month":
      return Vc(t);
    case "string":
      return Wc(t);
    default:
      return {};
  }
}

// ../schema/src/utils/fields/value.ts
var Ly = /^-?(\d*\.?\d+|\d+\.?\d*)([eE][-+]?\d+)?$/;
function Dn(t, n, s) {
  if (!t && t !== 0) return null;
  let i = t.toString().trim();
  switch (n) {
    case "string": {
      return `${i}`;
    }
    case "numeric": {
      const u = te(i, "MMMM", true);
      if (u.isValid()) {
        return u.month() + 1;
      }
      if (Ly.test(i)) {
        return parseFloat(i);
      }
      if (s === "quarter" || s === "date") {
        return `${i}`;
      }
      if (/[^\d,., -]/.test(i)) {
        return `${i}`;
      }
      const l = (i.match(/,/g) || []).length;
      const c = (i.match(/\./g) || []).length;
      const f = (i.match(/ /g) || []).length;
      if (f > 0) {
        i = i.replace(/ /g, "");
        if (i.includes(",") && !i.includes(".")) {
          i = i.replace(",", ".");
        }
      } else if (l === 1 && c >= 1) {
        if (i.lastIndexOf(",") > i.lastIndexOf(".")) {
          i = i.replace(/\./g, "").replace(",", ".");
        } else {
          i = i.replace(/,/g, "");
        }
      } else if (l >= 1 && c >= 1) {
        i = i.replace(/,/g, "");
      } else if (l >= 1 && c === 0) {
        const d = i.split(/[ ,\.]+/);
        if (d.length >= 2 && Yy(d.slice(0, -1))) {
          i = i.replace(/,/g, "");
        } else {
          i = i.replace(",", ".");
        }
      } else if (c >= 1 && l === 0) {
        if (c > 1) {
          i = i.replace(/\./g, "");
        }
      }
      const h = parseFloat(i);
      return isFinite(h) ? h : `${i}`;
    }
    case "date": {
      if (typeof t !== "string") return `${i}`;
      if (ie.isQuarter(i) || ie.isYear(i) || ie.isMonth(i)) {
        return `${i}`;
      }
      const u = us(i);
      if (u) return cs(u);
      const l = Ua(i);
      const c = us(l);
      if (c) return cs(c);
      return `${i}`;
    }
    case "year": {
      const u = Fy(i);
      if (u) {
        i = u;
      }
      if (ie.isYear(i)) return Number(i);
      return `${i}`;
    }
    case "quarter": {
      if (ie.isQuarter(i)) {
        const u = ie.quarterSplitValueParser([i]);
        const l = u(i);
        return l ? l.year + " Q" + l.quarter : `${i}`;
      }
      return `${i}`;
    }
    case "month": {
      const u = i;
      const l = ie.capitalizeMonth(u);
      const [c, f] = ie.isPossibleMonth(
        l,
        ss
      );
      if (c) {
        return te(l, f, true).format("MMMM");
      }
      return `${i}`;
    }
    case "year/month": {
      const u = ie.capitalizeMonth(i);
      const l = `${u} 01`;
      const [c, f] = ie.isPossibleYearMonthDay(
        l,
        as
      );
      if (c) {
        return te(l, f, true).format("MMMM YYYY");
      }
      return `${i}`;
    }
    case "month/day": {
      const u = ie.capitalizeMonth(i);
      const l = `${u} 2000`;
      const [c, f] = ie.isPossibleYearMonthDay(
        l,
        is
      );
      if (c) {
        return te(l, f, true).format("MMMM DD");
      }
      return `${i}`;
    }
    default: {
      return `${i}`;
    }
  }
}
function Yy(t) {
  return t.every(
    (n, s) => s === 0 ? n.length >= 1 && n.length <= 3 : n.length === 3
  );
}
function Fy(t) {
  if (!t) return null;
  const n = ls.exec(t);
  if (n) {
    if (n[1]) return n[1];
    if (n[2]) {
      const i = parseInt(n[2], 10);
      return String(i < 50 ? 2e3 + i : 1900 + i);
    }
  }
  const s = os.exec(t);
  if (s) {
    const i = parseInt(s[1], 10);
    return String(i < 50 ? 2e3 + i : 1900 + i);
  }
  return null;
}

// ../schema/src/utils/multipanel.ts
function Ri(t, n) {
  return {
    ...t,
    fieldIds: t.seriesIndexes?.map((s) => n[s].id) ?? []
  };
}
function Xc(t, n) {
  const s = n.filter((l) => !l.taxonomy.isPrimary).map((l) => l.id);
  if (De(Q.MultiPanel.StackedPanelSchema, t)) {
    const l = t.options.map((c) => {
      const f = wa(s, c.fieldIds).length > 0;
      if (!f) return null;
      return c;
    }).filter((c) => c);
    return H(Q.MultiPanel.StackedPanelSchema, {
      numPanels: l.length,
      options: l
    });
  }
  if (De(F(gt.MultiPanel.PanelOptionsSchema), t)) {
    const l = t.map(
      (c) => Ri(c, n)
    );
    return H(Q.MultiPanel.StackedPanelSchema, {
      numPanels: l.length,
      options: l
    });
  }
  const i = Math.min(s.length, 3);
  const u = Array.from({ length: i }, (l, c) => ({
    fieldIds: c < 2 ? [s[c]] : s.slice(2)
  }));
  return H(Q.MultiPanel.StackedPanelSchema, {
    numPanels: i,
    options: u
  });
}
function Zc(t, n) {
  const s = n.filter((l) => !l.taxonomy.isPrimary).map((l) => l.id);
  if (De(Q.MultiPanel.DualAxisSchema, t)) {
    const { right: l, left: c } = t;
    return H(Q.MultiPanel.DualAxisSchema, {
      right: {
        ...l,
        fieldIds: l.fieldIds.filter((f) => s.includes(f))
      },
      left: {
        ...c,
        fieldIds: c.fieldIds.filter((f) => s.includes(f))
      }
    });
  }
  if (De(gt.MultiPanel.DualAxisOptionsSchema, t)) {
    const { right: l, left: c } = t;
    return H(Q.MultiPanel.DualAxisSchema, {
      right: Ri(l, n),
      left: Ri(c, n)
    });
  }
  const i = { fieldIds: [s[0]] };
  const u = { fieldIds: s.slice(1) };
  return H(Q.MultiPanel.DualAxisSchema, { right: i, left: u });
}

// ../schema/src/utils/multiples.ts
function Jc(t, n) {
  const s = n.filter((v) => !v.taxonomy.isPrimary).map((v) => v.id);
  const i = De(Q.Multiples.MultiplesOptionsSchema, t);
  const u = t?.numSeriesPerMultiple ?? 1;
  const l = t?.multiplesSeriesInfos;
  const c = i ? t.options?.map((v) => v.axisProperties) : t?.axisProperties ?? [];
  const f = Array.from(
    { length: u },
    (v, x) => l?.[x] ? H(
      Q.Multiples.MultiplesSeriesInfoSchema,
      l[x]
    ) : H(Q.Multiples.MultiplesSeriesInfoSchema, {
      colorIndex: x
      // default color is the index of the series
    })
  );
  const h = Math.ceil(
    s.length / u
  );
  const d = Array.from(
    { length: h },
    (v, x) => {
      const A = s.slice(
        x * u,
        (x + 1) * u
      );
      return {
        axisProperties: c?.[x] ?? {},
        fieldIds: A
      };
    }
  );
  return H(Q.Multiples.MultiplesOptionsSchema, {
    ...t,
    numSeriesPerMultiple: u,
    multiplesSeriesInfos: f,
    options: d
  });
}

// ../schema/src/utils/text.ts
function Pn(t, n) {
  if (!t) return n[0];
  const s = n.find((i) => t.startsWith(i));
  return s ?? Qo;
}
function Ni(t, n) {
  const s = Pn(t, n);
  return t.replace(s, "").trim();
}

// ../schema/src/utils/tickers.ts
function jy(t) {
  if (t.endsWith("Cmdty")) return "Commodity";
  if (t.endsWith("Index")) return "Index";
  if (t.endsWith("Curncy")) return "Currency";
  if (t.endsWith("Corp")) return "Bond";
  if (t.endsWith("Govt")) return "Bond";
  return "Company";
}
function Qc(t) {
  if (!Array.isArray(t)) return [];
  return t.map((n) => {
    if (typeof n === "object") return n;
    return {
      display: n,
      label: n,
      value: n,
      resource_id: n,
      type: jy(n)
    };
  });
}

// ../schema/src/utils/table.ts
var Li = ({
  data: t,
  colorRampSettings: n,
  existingStops: s
}) => {
  const { strategy: i, nStops: u } = n;
  const l = Math.min(...t);
  const c = Math.max(...t);
  if (i === "buckets") {
    return hs().domain([l, c]).range(qr(u ?? 1)).thresholds();
  } else if (i === "distribution") {
    return qa().domain(t).range(qr(u ?? 1)).quantiles();
  } else if (i === "jenks") {
    return Mc(t, u ?? 1) ?? [];
  } else if (i === "custom") {
    if (s) return s;
    return hs().domain([l, c]).range(qr(u ?? 1)).thresholds();
  } else {
    return [l, c];
  }
};
function Kc(t, n, s) {
  const i = t?.treatFirstColumnAsValue ? 0 : 1;
  const u = t?.colorRampSettings;
  const l = De(
    Q.Table.HeatmapOptionsSchema,
    t
  ) ? t?.stats : void 0;
  const c = u?.nStops ?? 4;
  const f = u?.strategy ?? ti["Buckets (Equal-size Groups)"];
  const h = new Set(
    (t?.columnOptions ?? []).filter((P) => P.excludeFromHeatmap).map((P) => P.columnIndex)
  );
  const d = [];
  n.slice(i).forEach((P, me) => {
    const X = i + me;
    if (h.has(X)) {
      d.push(void 0);
      return;
    }
    const de = s.map((xe) => xe[X]).map((xe) => Ur(xe)).filter((xe) => isFinite(xe));
    const le = Li({
      data: de,
      colorRampSettings: {
        nStops: c,
        strategy: f
      },
      existingStops: l?.columns?.[me]?.stops ?? null
    });
    if (de.length === 0) {
      d.push(void 0);
    } else {
      d.push({
        min: Math.min(...de),
        max: Math.max(...de),
        stops: le
      });
    }
  });
  const v = [];
  s.forEach((P, me) => {
    const X = P.slice(i).filter((le, xe) => !h.has(i + xe)).map((le) => Ur(le)).filter((le) => isFinite(le));
    const de = Li({
      data: X,
      colorRampSettings: {
        nStops: c,
        strategy: f
      },
      existingStops: l?.rows?.[me]?.stops ?? null
    });
    if (X.length === 0) {
      v.push(void 0);
    } else {
      v.push({
        min: Math.min(...X),
        max: Math.max(...X),
        stops: de
      });
    }
  });
  const x = s.flatMap(
    (P) => P.slice(i).filter((me, X) => !h.has(i + X))
  ).filter((P) => !Na(P) && Ra(P) && isFinite(P)).map((P) => Ur(P));
  const A = Li({
    data: x,
    colorRampSettings: {
      nStops: c,
      strategy: f
    },
    existingStops: l?.table?.stops ?? null
  });
  const T = x.length ? {
    min: Math.min(...x),
    max: Math.max(...x),
    stops: A
  } : void 0;
  return H(Q.Table.HeatmapOptionsSchema, {
    ...t,
    stats: {
      table: T,
      columns: d,
      rows: v
    }
  });
}

// ../schema/src/prepared/elements.ts
var Yi = E(
  D(Ct.DesignPropertiesSchema, {}),
  $((t) => ({
    ...t,
    // parse override options json to record if present
    ...t.overrideOptions && {
      parsedOverrideOptions: JSON.parse(t.overrideOptions)
    }
  }))
);
var Fi = E(
  D(Ct.MetadataSchema, {}),
  $((t) => ({
    ...t,
    // standardize associated tickers to AssociatedTag type if present
    ...t.associatedTickers && {
      associatedTickers: Qc(t.associatedTickers)
    }
  }))
);
var ji = E(
  D(Ct.AxisPropertiesSchema, {}),
  $((t) => ({
    ...t,
    // default gridLines to true if not specified
    gridLines: t.gridLines ?? true
  }))
);

// ../schema/src/prepared/fields.ts
var $i = {};
se($i, {
  ColumnTypeSchema: () => ep,
  DatapointSchema: () => cp,
  DateStatsSchema: () => np,
  FieldPropertiesSchema: () => By,
  MonthDayStatsSchema: () => sp,
  MonthStatsSchema: () => lp,
  NumericStatsSchema: () => rp,
  QuarterStatsSchema: () => op,
  StringStatsSchema: () => up,
  YearMonthStatsSchema: () => ip,
  YearStatsSchema: () => ap
});
var ep = L(el);
var Mt = b({
  max: Pe([w(), S()]),
  min: Pe([w(), S()])
});
var Wt = b({
  duration: L(Pt),
  dateGranularity: b({
    minimumSpan: L(Pt),
    percentileSpan: L(Pt),
    granularityMode: L(Pt)
  }),
  // dateGaps is always optional
  dateGaps: D(F(As([S(), S()])))
});
var tp = U(
  b({
    unordered: vt(S(), w()),
    ordered: S()
  })
);
var rp = b({
  ...Mt.entries,
  maxMantissa: w()
});
var np = b({
  ...Mt.entries,
  ...Wt.entries
});
var sp = Pe([
  b({
    ...Mt.entries,
    ...Wt.entries,
    suffix: tp
  }),
  b({})
]);
var ip = Pe([
  b({
    ...Mt.entries,
    ...Wt.entries,
    suffix: tp
  }),
  b({})
]);
var ap = b({
  ...Mt.entries,
  ...Wt.entries,
  uniqueValues: F(S())
});
var op = b({
  ...Mt.entries,
  ...Wt.entries,
  uniqueValues: F(S())
});
var lp = Pe([
  b({
    ...Mt.entries,
    ...Wt.entries
  }),
  b({})
]);
var up = b({
  uniqueValues: F(S())
});
var cp = Pe([S(), w(), Cs()]);
var ut = E(
  b({
    ...fr.FieldPropertiesSchema.entries,
    id: S(),
    index: w(),
    data: F(cp),
    taxonomy: b({ isPrimary: N() }),
    type: ep,
    name: xo(S(), "")
  })
);
var By = Dt("type", [
  b({
    ...ut.entries,
    type: ae("numeric"),
    stats: rp
  }),
  b({
    ...ut.entries,
    type: ae("date"),
    stats: np
  }),
  b({
    ...ut.entries,
    type: ae("month/day"),
    stats: sp
  }),
  b({
    ...ut.entries,
    type: ae("year/month"),
    stats: ip
  }),
  b({
    ...ut.entries,
    type: ae("year"),
    stats: ap
  }),
  b({
    ...ut.entries,
    type: ae("quarter"),
    stats: op
  }),
  b({
    ...ut.entries,
    type: ae("month"),
    stats: lp
  }),
  b({
    ...ut.entries,
    type: ae("string"),
    stats: up
  }),
  b({
    ...ut.entries,
    type: ae("null"),
    stats: b({})
  })
]);

// ../schema/src/prepared/multipanel.ts
var Ui = {};
se(Ui, {
  DualAxisPanelOptionSchema: () => Hi,
  DualAxisSchema: () => Hy,
  PanelOptionSchema: () => Gi,
  StackedPanelSchema: () => $y
});
var Gi = E(
  b({
    ...Qr(It, ["seriesIndexes"]).entries,
    fieldIds: F(S())
  }),
  $((t) => ({
    ...t,
    // set defaults
    chartType: t.chartType ?? "line",
    panelHeight: t.panelHeight ?? "medium"
  }))
);
var $y = b({
  numPanels: w(),
  options: F(Gi)
});
var Hi = E(
  Gi,
  $((t) => ({
    ...t,
    // axisProperties.gridLines should be false for dual axis
    axisProperties: {
      ...t.axisProperties,
      gridLines: t.axisProperties?.gridLines ?? false
    }
  }))
);
var Hy = b({
  right: Hi,
  left: Hi
});

// ../schema/src/prepared/multiples.ts
var qi = {};
se(qi, {
  MultiplesOptionsSchema: () => Uy,
  MultiplesSeriesInfoSchema: () => Gy,
  SubchartOptionsSchema: () => pp
});
var Gy = E(
  on,
  $((t) => ({
    ...t,
    seriesLabel: t.seriesLabel ?? ""
  }))
);
var pp = U(
  K({
    axisProperties: Xe,
    fieldIds: F(S())
  })
);
var Uy = E(
  b({
    ...Qr(hr, ["axisProperties"]).entries,
    options: F(pp)
  }),
  $((t) => ({
    ...t,
    chartHeight: t.chartHeight ?? "medium",
    smallMultiplesType: t.smallMultiplesType ?? "line",
    multiplesSeriesInfos: t.multiplesSeriesInfos ?? []
  }))
);

// ../schema/src/prepared/table.ts
var Vi = {};
se(Vi, {
  HeatmapOptionsSchema: () => qy,
  HeatmapPartStatsSchema: () => Cn,
  HeatmapStatsSchema: () => fp
});
var Cn = D(
  b({
    min: w(),
    max: w(),
    stops: F(w())
  })
);
var fp = b({
  table: Cn,
  columns: F(Cn),
  rows: F(Cn)
});
var qy = E(
  D(
    b({
      ...mr.entries,
      stats: fp
    })
  ),
  $((t) => ({
    ...t,
    colorRampSettings: {
      ...t?.colorRampSettings,
      strategy: t?.colorRampSettings?.strategy ?? "jenks",
      nStops: t?.colorRampSettings?.nStops ?? 4
    }
  }))
);

// ../schema/src/prepared/schemas.ts
var Er = {};
se(Er, {
  AreaChartSchema: () => Dp,
  BarChartSchema: () => Ep,
  BarLineChartSchema: () => Pp,
  CandlestickChartSchema: () => Ip,
  ChartSchema: () => Vy,
  CommonSchema: () => ke,
  ComparisonChartSchema: () => Np,
  DualAxisChartSchema: () => Rp,
  DumbbellChartSchema: () => Mp,
  HbarChartSchema: () => Op,
  HeatmapChartSchema: () => Fp,
  HorizontalDumbbellChartSchema: () => wp,
  LineChartSchema: () => _p,
  MultiplesChartSchema: () => Ap,
  PieChartSchema: () => Lp,
  StackedHbarChartSchema: () => kp,
  StackedPanelChartSchema: () => Cp,
  StackedVbarChartSchema: () => Tp,
  TableChartSchema: () => Yp
});

// ../schema/src/utils/prepare.ts
var hp = (t) => {
  const n = zc(t.data, t.fields, t.axis?.primary);
  const s = t.data.map(
    (i) => i.map((u, l) => Dn(u, n[l].type))
  );
  return { fields: n, data: s };
};
var mp = (t) => {
  const n = Cc(
    t.design?.contentDestination,
    t.type
  );
  return { colorPalette: n };
};
var dp = (t) => {
  const n = H(ji, t.axis?.secondary);
  return { axis: { secondary: n } };
};
var yp = (t) => {
  const n = H(Fi, t.metadata);
  return { metadata: n };
};
var vp = (t) => {
  const n = H(Yi, t.design);
  return { design: n };
};
var gp = (t) => {
  const n = Pn(t.source ?? "", $s);
  const s = Ni(t.source ?? "", $s);
  return { sourcePrefix: n, sourceContent: s };
};
var Sp = (t) => {
  const n = Pn(t.footnote ?? "", Hs);
  const s = Ni(t.footnote ?? "", Hs);
  return { footnotePrefix: n, footnoteContent: s };
};

// ../schema/src/prepared/area.ts
var bp = E(
  or.AreaOptionsSchema,
  // apply defaults if user does not specify area options
  $((t) => ({
    style: t?.style ?? "stacked",
    order: t?.order ?? "none",
    displayActualValues: t?.displayActualValues ?? false
  }))
);

// ../schema/src/prepared/comparison.ts
var xp = E(
  ur.ComparisonOptionsSchema,
  $((t) => ({
    showPercentageChange: t?.showPercentageChange ?? false
  }))
);

// ../schema/src/prepared/schemas.ts
var ke = E(
  ve.CommonSchema,
  $((t) => {
    const { fields: n, data: s } = hp(t);
    const { colorPalette: i } = mp(t);
    const { secondary: u } = dp(t).axis;
    const { metadata: l } = yp(t);
    const { design: c } = vp(t);
    const { sourcePrefix: f, sourceContent: h } = gp(t);
    const { footnotePrefix: d, footnoteContent: v } = Sp(t);
    return {
      ...t,
      axis: { ...t.axis, secondary: u },
      data: s,
      fields: n,
      metadata: l,
      design: c,
      // Only include colorPalette if it's defined
      ...i !== void 0 && { colorPalette: i },
      sourcePrefix: f,
      sourceContent: h,
      footnotePrefix: d,
      footnoteContent: v
    };
  })
);
var _p = E(
  ve.LineChartSchema,
  $((t) => H(ke, t))
);
var Ep = E(
  ve.BarChartSchema,
  $((t) => H(ke, t))
);
var Op = E(
  ve.HbarChartSchema,
  $((t) => H(ke, t))
);
var Tp = E(
  ve.StackedVbarChartSchema,
  $((t) => H(ke, t))
);
var kp = E(
  ve.StackedHbarChartSchema,
  $((t) => H(ke, t))
);
var Dp = E(
  ve.AreaChartSchema,
  $((t) => ({
    ...H(ke, t),
    area: H(bp, t.area)
  }))
);
var Pp = E(
  ve.BarLineChartSchema,
  $((t) => {
    const n = H(ke, t);
    return {
      ...n,
      barline: Dc(t.barline, n.fields)
    };
  })
);
var Cp = E(
  ve.StackedPanelChartSchema,
  $((t) => {
    const n = H(ke, t);
    return {
      ...n,
      stackedPanels: Xc(t.stackedPanels, n.fields)
    };
  })
);
var Ip = E(
  ve.CandlestickChartSchema,
  $((t) => {
    const n = H(ke, t);
    return {
      ...n,
      candlestick: Pc(t.candlestick, n.fields)
    };
  })
);
var Ap = E(
  ve.MultiplesChartSchema,
  $((t) => {
    const n = H(ke, t);
    return {
      ...n,
      multiples: Jc(t.multiples, n.fields)
    };
  })
);
var Mp = E(
  ve.DumbbellChartSchema,
  $((t) => {
    const n = H(ke, t);
    return {
      ...n,
      dumbbell: Ai(t.dumbbell, n.fields)
    };
  })
);
var wp = E(
  ve.HorizontalDumbbellChartSchema,
  $((t) => {
    const n = H(ke, t);
    return {
      ...n,
      dumbbell: Ai(t.dumbbell, n.fields)
    };
  })
);
var Rp = E(
  ve.DualAxisChartSchema,
  $((t) => {
    const n = H(ke, t);
    return {
      ...n,
      dualAxis: Zc(t.dualAxis, n.fields)
    };
  })
);
var Np = E(
  ve.ComparisonChartSchema,
  $((t) => ({
    ...H(ke, t),
    comparison: H(xp, t.comparison)
  }))
);
var Lp = E(
  ve.PieChartSchema,
  $((t) => H(ke, t))
);
var Yp = E(
  ve.TableSchema,
  $((t) => H(ke, t))
);
var Fp = E(
  ve.HeatmapSchema,
  $((t) => {
    const n = H(ke, t);
    return {
      ...n,
      table: Kc(t.table, n.fields, n.data)
    };
  })
);
var Vy = Dt("type", [
  _p,
  Ep,
  Pp,
  Op,
  Tp,
  kp,
  Dp,
  Cp,
  Ip,
  Ap,
  Mp,
  wp,
  Rp,
  Np,
  Lp,
  Yp,
  Fp
]);

// ../schema/src/saved/schemas.ts
var In = {};
se(In, {
  ChartSchema: () => Wy,
  SavedInformationSchema: () => jp
});
var jp = E(
  b({
    // these should be passed in only if the chart is already saved
    id: D(S()),
    createdAt: D(nn),
    lastUpdatedBy: D(S()),
    lastUpdatedByUuid: D(w()),
    editorsInfo: D(vt(S(), S())),
    // these must be passed in as they cannot be derived
    organization: ze(S()),
    author: S(),
    authorId: w()
  }),
  $((t) => {
    const n = (/* @__PURE__ */ new Date()).toISOString();
    const { author: s, authorId: i, lastUpdatedBy: u, lastUpdatedByUuid: l } = t;
    const c = t.editorsInfo ?? { [i.toString()]: s };
    if (l && u) {
      c[l.toString()] = u;
    }
    return {
      ...t,
      id: t.id ?? wc(),
      createdAt: t.createdAt ?? n,
      updatedAt: n,
      // if lastUpdated isn't already set, set to author info
      lastUpdatedBy: u ?? s,
      lastUpdatedByUuid: l ?? i,
      editorsInfo: c
    };
  })
);
var Wy = kt([
  Er.ChartSchema,
  jp
]);

// ../schema/src/published/schemas.ts
var Wi = b({
  url: E(S(), Ds()),
  width: w(),
  height: w()
});
var zy = E(
  b({
    avmmId: S(),
    images: b({
      default: Wi,
      dark: Wi,
      light: D(Wi)
    }),
    publishedAt: w()
  }),
  $((t) => ({
    ...t,
    published: true,
    publishedAt: new Date(t.publishedAt).toISOString()
  }))
);
var ax = kt([
  In.ChartSchema,
  zy
]);

// ../../app/src/components/constants/constants.ts
var Hp = [
  "bar",
  "hbar",
  "stackedVbar",
  "stackedHbar",
  "horizontalDumbbell",
  "dumbbell"
];

// src/charts/_common/Legends/Legends.svelte
var Zy = ro(`<div class="legend-container svelte-be0max" data-testid="legends-container"></div>`);
var Jy = {
  hash: "svelte-be0max",
  code: ".legend-container.svelte-be0max {display:flex;flex-wrap:wrap;column-gap:var(--toas-legends-column-gap);row-gap:var(--toas-legends-row-gap);margin-left:auto;margin-right:auto;margin-bottom:7px;position:relative;}"
};
function Qy(t, n) {
  Xa(n, true);
  oo(t, Jy);
  let s = Xr(n, "options", 19, () => ({})), i = Xr(n, "width", 3, Ya), u = Xr(n, "legendHeight", 15);
  const l = Ha(n.chartData);
  const c = Re(() => n.chartData.design?.seriesOptions?.emphasize ?? []);
  const f = Re(() => Wa(n.chartData));
  const h = Re(() => ys(n.chartData));
  const d = Re(() => Hp.includes(n.chartData?.type));
  const v = Re(() => J(f).filter((W) => {
    if (J(c).includes(W)) return false;
    if (n.chartData.type === "candlestick" && Va(W, J(h), n.chartData)) return false;
    return true;
  }).length ?? 0);
  const x = Re(() => n.chartData.design?.seriesOptions?.deemphasisMode ?? "opacity");
  const A = Re(() => n.chartData.annotations?.dataRangeHighlights?.highlights && n.chartData.annotations?.dataRangeHighlights?.highlights?.length > 0 && n.chartData.annotations.dataRangeHighlights?.highlights?.every((W) => W.start !== null && W.end !== null));
  const T = Re(() => J(A) && n.chartData.annotations?.dataRangeHighlights?.label ? n.chartData.annotations?.dataRangeHighlights?.label : "");
  const P = Re(() => n.chartData.annotations?.highlightDataRows && n.chartData.annotations.highlightDataRows.rows.length > 0);
  const me = Re(() => n.chartData.annotations?.highlightDataRows?.label ?? "");
  const X = Re(() => n.scales.colorScale.scale(J(
    f
    // at the moment, data highlights only happen on the first series (0th non-primary field)
  )[0], n.chartData.annotations?.highlightDataRows?.rows?.[0]));
  const de = Re(() => La(i()));
  const le = Re(() => (n.chartData.design?.parsedOverrideOptions && "hideLegends" in n.chartData.design?.parsedOverrideOptions && n.chartData.design.parsedOverrideOptions.hideLegends) ?? false);
  const xe = Re(() => {
    let W = n.chartData.fields.filter((ee) => !ee.taxonomy?.isPrimary && ee.name !== "" && ee.name !== void 0).map((ee) => ({
      label: ee.name !== "" && ee.name !== void 0 ? ee.name : `Series ${ee.index}`,
      color: n.scales.colorScale.scale(ee.id),
      ..."strokeScale" in n.scales && n.scales.strokeScale?.scale ? { stroke: n.scales.strokeScale.scale(ee.id) } : {},
      type: co(n.chartData, ee.id),
      id: ee.id
    }));
    if (l.hasBar && l.hasLine) {
      W = W.sort((ee, Oe) => {
        if (ee.type === "line" && Oe.type === "box") {
          return -1;
        } else if (ee.type === "box" && Oe.type === "line") {
          return 1;
        } else {
          return 0;
        }
      });
    }
    if (J(c).length > 0 || n.chartData.candlestick?.candlestickSeriesInfo?.emphasize) {
      W = W.sort((ee, Oe) => {
        if (J(c).includes(ee.id) && J(c).includes(Oe.id)) {
          return J(c).indexOf(ee.id) - J(c).indexOf(Oe.id);
        } else if (J(c).includes(ee.id)) {
          return -1;
        } else if (J(c).includes(Oe.id)) {
          return 1;
        } else {
          return 0;
        }
      });
      if (J(x) === "gray" && J(v) > 2) {
        const ee = n.chartData?.design.seriesOptions?.deemphasizedGroupName ?? Uo;
        W = W.filter((Oe) => J(c).includes(Oe.id));
        W.push({
          label: ee,
          color: s()?.variant === "dark" ? $a : Ba,
          type: J(d) ? "box" : "line",
          id: "others"
        });
      }
    }
    if (n.chartData.type === "candlestick") {
      const ee = ys(n.chartData);
      const Oe = n.chartData.candlestick?.candlestickSeriesInfo?.seriesName ?? "";
      const _e = n.chartData.candlestick?.colorMode === "Market";
      const St = n.chartData.candlestick?.candlestickType === "OHLC";
      const et = s()?.variant === "dark" ? "white" : "black";
      W = W.filter((zt) => !ee?.has(zt.label));
      if (Oe !== "") {
        const zt = _e ? ms : St ? et : "white";
        const Be = _e ? ds : St ? et : "black";
        W = [
          {
            label: Oe,
            color: "",
            type: "candlestick-series",
            id: "candle-legend-item",
            style: `--up:${zt}; --down:${Be}; --box-stroke:${_e ? "none" : et};`
          },
          ...W
        ];
      } else if (!St || _e) {
        W = [
          {
            label: "Up",
            color: _e ? ms : "",
            type: "box",
            id: "candle-legend-item",
            outline: et
          },
          {
            label: "Down",
            color: _e ? ds : s()?.variant === "dark" ? "white" : "black",
            type: "box",
            id: "candle-legend-item",
            outline: et
          },
          ...W
        ];
      }
    }
    if (n.chartData.type === "dumbbell" || n.chartData.type === "horizontalDumbbell") {
      if (n.chartData.dumbbell?.useArrow) {
        W = [];
      }
    }
    if (J(A) && J(T) !== "") {
      W.push({
        label: J(T),
        color: s()?.variant === "dark" ? ja : Fa,
        type: "box",
        id: "data-highlight"
      });
    }
    if (J(P) && J(me) !== "") {
      W.push({
        label: J(me),
        color: J(X),
        type: "box",
        id: "data-highlight"
      });
    }
    return W;
  });
  let ct = Ja(void 0);
  eo(() => {
    J(xe);
    i();
    J(de);
    if (J(ct)) {
      u(Math.round(J(ct).clientHeight));
    } else {
      u(0);
    }
  });
  var pt = no();
  var Fe = Ka(pt);
  {
    var Or = (W) => {
      var ee = Zy();
      ao(ee, 21, () => J(xe), io, (Oe, _e) => {
        po(Oe, {
          get legendsInfo() {
            return J(_e);
          }
        });
      });
      za(ee);
      uo(ee, (Oe) => Qa(ct, Oe), () => J(ct));
      to(() => lo(ee, `font-size: ${J(de) ? "12px" : "14px"}; max-width: ${i()}px;`));
      vs(W, ee);
    };
    so(Fe, (W) => {
      if (!J(le) && J(xe).length > 0) W(Or);
    });
  }
  vs(t, pt);
  Za();
}

export {
  Qy as a
};
//# sourceMappingURL=chunk-JQPS33BQ.js.map
