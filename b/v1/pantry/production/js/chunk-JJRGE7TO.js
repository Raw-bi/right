// ../../node_modules/d3-shape/src/constant.js
function _(t) {
  return function e() {
    return t;
  };
}

// ../../node_modules/d3-shape/src/math.js
var at = Math.abs;
var b = Math.atan2;
var L = Math.cos;
var dt = Math.max;
var J = Math.min;
var S = Math.sin;
var X = Math.sqrt;
var T = 1e-12;
var j = Math.PI;
var F = j / 2;
var z = 2 * j;
function xt(t) {
  return t > 1 ? 0 : t < -1 ? j : Math.acos(t);
}
function ut(t) {
  return t >= 1 ? F : t <= -1 ? -F : Math.asin(t);
}

// ../../node_modules/d3-path/src/path.js
var lt = Math.PI;
var ft = 2 * lt;
var D = 1e-6;
var bt = ft - D;
function gt(t) {
  this._ += t[0];
  for (let e = 1, i = t.length; e < i; ++e) {
    this._ += arguments[e] + t[e];
  }
}
function Tt(t) {
  let e = Math.floor(t);
  if (!(e >= 0)) throw new Error(`invalid digits: ${t}`);
  if (e > 15) return gt;
  const i = 10 ** e;
  return function(o) {
    this._ += o[0];
    for (let l = 1, f = o.length; l < f; ++l) {
      this._ += Math.round(arguments[l] * i) / i + o[l];
    }
  };
}
var Y = class {
  constructor(e) {
    this._x0 = this._y0 = // start of current subpath
    this._x1 = this._y1 = null;
    this._ = "";
    this._append = e == null ? gt : Tt(e);
  }
  moveTo(e, i) {
    this._append`M${this._x0 = this._x1 = +e},${this._y0 = this._y1 = +i}`;
  }
  closePath() {
    if (this._x1 !== null) {
      this._x1 = this._x0, this._y1 = this._y0;
      this._append`Z`;
    }
  }
  lineTo(e, i) {
    this._append`L${this._x1 = +e},${this._y1 = +i}`;
  }
  quadraticCurveTo(e, i, o, l) {
    this._append`Q${+e},${+i},${this._x1 = +o},${this._y1 = +l}`;
  }
  bezierCurveTo(e, i, o, l, f, c) {
    this._append`C${+e},${+i},${+o},${+l},${this._x1 = +f},${this._y1 = +c}`;
  }
  arcTo(e, i, o, l, f) {
    e = +e, i = +i, o = +o, l = +l, f = +f;
    if (f < 0) throw new Error(`negative radius: ${f}`);
    let c = this._x1, n = this._y1, s = o - e, u = l - i, r = c - e, m = n - i, a = r * r + m * m;
    if (this._x1 === null) {
      this._append`M${this._x1 = e},${this._y1 = i}`;
    } else if (!(a > D)) ;
    else if (!(Math.abs(m * s - u * r) > D) || !f) {
      this._append`L${this._x1 = e},${this._y1 = i}`;
    } else {
      let h = o - c, g = l - n, y = s * s + u * u, k = h * h + g * g, x = Math.sqrt(y), A = Math.sqrt(a), $ = f * Math.tan((lt - Math.acos((y + a - k) / (2 * x * A))) / 2), v = $ / A, M = $ / x;
      if (Math.abs(v - 1) > D) {
        this._append`L${e + v * r},${i + v * m}`;
      }
      this._append`A${f},${f},0,0,${+(m * h > r * g)},${this._x1 = e + M * s},${this._y1 = i + M * u}`;
    }
  }
  arc(e, i, o, l, f, c) {
    e = +e, i = +i, o = +o, c = !!c;
    if (o < 0) throw new Error(`negative radius: ${o}`);
    let n = o * Math.cos(l), s = o * Math.sin(l), u = e + n, r = i + s, m = 1 ^ c, a = c ? l - f : f - l;
    if (this._x1 === null) {
      this._append`M${u},${r}`;
    } else if (Math.abs(this._x1 - u) > D || Math.abs(this._y1 - r) > D) {
      this._append`L${u},${r}`;
    }
    if (!o) return;
    if (a < 0) a = a % ft + ft;
    if (a > bt) {
      this._append`A${o},${o},0,1,${m},${e - n},${i - s}A${o},${o},0,1,${m},${this._x1 = u},${this._y1 = r}`;
    } else if (a > D) {
      this._append`A${o},${o},0,${+(a >= lt)},${m},${this._x1 = e + o * Math.cos(f)},${this._y1 = i + o * Math.sin(f)}`;
    }
  }
  rect(e, i, o, l) {
    this._append`M${this._x0 = this._x1 = +e},${this._y0 = this._y1 = +i}h${o = +o}v${+l}h${-o}Z`;
  }
  toString() {
    return this._;
  }
};
function _t() {
  return new Y();
}
_t.prototype = Y.prototype;

// ../../node_modules/d3-shape/src/path.js
function K(t) {
  let e = 3;
  t.digits = function(i) {
    if (!arguments.length) return e;
    if (i == null) {
      e = null;
    } else {
      const o = Math.floor(i);
      if (!(o >= 0)) throw new RangeError(`invalid digits: ${i}`);
      e = o;
    }
    return t;
  };
  return () => new Y(e);
}

// ../../node_modules/d3-shape/src/arc.js
function Rt(t) {
  return t.innerRadius;
}
function kt(t) {
  return t.outerRadius;
}
function wt(t) {
  return t.startAngle;
}
function Ot(t) {
  return t.endAngle;
}
function St(t) {
  return t && t.padAngle;
}
function Ct(t, e, i, o, l, f, c, n) {
  var s = i - t, u = o - e, r = c - l, m = n - f, a = m * s - r * u;
  if (a * a < T) return;
  a = (r * (e - f) - m * (t - l)) / a;
  return [t + a * s, e + a * u];
}
function U(t, e, i, o, l, f, c) {
  var n = t - i, s = e - o, u = (c ? f : -f) / X(n * n + s * s), r = u * s, m = -u * n, a = t + r, h = e + m, g = i + r, y = o + m, k = (a + g) / 2, x = (h + y) / 2, A = g - a, $ = y - h, v = A * A + $ * $, M = l - f, R = a * y - g * h, E = ($ < 0 ? -1 : 1) * X(dt(0, M * M * v - R * R)), N = (R * $ - A * E) / v, B = (-R * A - $ * E) / v, C = (R * $ + A * E) / v, w = (-R * A + $ * E) / v, O = N - k, p = B - x, d = C - k, q = w - x;
  if (O * O + p * p > d * d + q * q) N = C, B = w;
  return {
    cx: N,
    cy: B,
    x01: -r,
    y01: -m,
    x11: N * (l / M - 1),
    y11: B * (l / M - 1)
  };
}
function Pt() {
  var t = Rt, e = kt, i = _(0), o = null, l = wt, f = Ot, c = St, n = null, s = K(u);
  function u() {
    var r, m, a = +t.apply(this, arguments), h = +e.apply(this, arguments), g = l.apply(this, arguments) - F, y = f.apply(this, arguments) - F, k = at(y - g), x = y > g;
    if (!n) n = r = s();
    if (h < a) m = h, h = a, a = m;
    if (!(h > T)) n.moveTo(0, 0);
    else if (k > z - T) {
      n.moveTo(h * L(g), h * S(g));
      n.arc(0, 0, h, g, y, !x);
      if (a > T) {
        n.moveTo(a * L(y), a * S(y));
        n.arc(0, 0, a, y, g, x);
      }
    } else {
      var A = g, $ = y, v = g, M = y, R = k, E = k, N = c.apply(this, arguments) / 2, B = N > T && (o ? +o.apply(this, arguments) : X(a * a + h * h)), C = J(at(h - a) / 2, +i.apply(this, arguments)), w = C, O = C, p, d;
      if (B > T) {
        var q = ut(B / a * S(N)), W = ut(B / h * S(N));
        if ((R -= q * 2) > T) q *= x ? 1 : -1, v += q, M -= q;
        else R = 0, v = M = (g + y) / 2;
        if ((E -= W * 2) > T) W *= x ? 1 : -1, A += W, $ -= W;
        else E = 0, A = $ = (g + y) / 2;
      }
      var I = h * L(A), V = h * S(A), Z = a * L(M), H = a * S(M);
      if (C > T) {
        var Q = h * L($), G = h * S($), et = a * L(v), nt = a * S(v), P;
        if (k < j) {
          if (P = Ct(I, V, et, nt, Q, G, Z, H)) {
            var rt = I - P[0], ot = V - P[1], it = Q - P[0], st = G - P[1], ct = 1 / S(xt((rt * it + ot * st) / (X(rt * rt + ot * ot) * X(it * it + st * st))) / 2), mt = X(P[0] * P[0] + P[1] * P[1]);
            w = J(C, (a - mt) / (ct - 1));
            O = J(C, (h - mt) / (ct + 1));
          } else {
            w = O = 0;
          }
        }
      }
      if (!(E > T)) n.moveTo(I, V);
      else if (O > T) {
        p = U(et, nt, I, V, h, O, x);
        d = U(Q, G, Z, H, h, O, x);
        n.moveTo(p.cx + p.x01, p.cy + p.y01);
        if (O < C) n.arc(p.cx, p.cy, O, b(p.y01, p.x01), b(d.y01, d.x01), !x);
        else {
          n.arc(p.cx, p.cy, O, b(p.y01, p.x01), b(p.y11, p.x11), !x);
          n.arc(0, 0, h, b(p.cy + p.y11, p.cx + p.x11), b(d.cy + d.y11, d.cx + d.x11), !x);
          n.arc(d.cx, d.cy, O, b(d.y11, d.x11), b(d.y01, d.x01), !x);
        }
      } else n.moveTo(I, V), n.arc(0, 0, h, A, $, !x);
      if (!(a > T) || !(R > T)) n.lineTo(Z, H);
      else if (w > T) {
        p = U(Z, H, Q, G, a, -w, x);
        d = U(I, V, et, nt, a, -w, x);
        n.lineTo(p.cx + p.x01, p.cy + p.y01);
        if (w < C) n.arc(p.cx, p.cy, w, b(p.y01, p.x01), b(d.y01, d.x01), !x);
        else {
          n.arc(p.cx, p.cy, w, b(p.y01, p.x01), b(p.y11, p.x11), !x);
          n.arc(0, 0, a, b(p.cy + p.y11, p.cx + p.x11), b(d.cy + d.y11, d.cx + d.x11), x);
          n.arc(d.cx, d.cy, w, b(d.y11, d.x11), b(d.y01, d.x01), !x);
        }
      } else n.arc(0, 0, a, M, v, x);
    }
    n.closePath();
    if (r) return n = null, r + "" || null;
  }
  u.centroid = function() {
    var r = (+t.apply(this, arguments) + +e.apply(this, arguments)) / 2, m = (+l.apply(this, arguments) + +f.apply(this, arguments)) / 2 - j / 2;
    return [L(m) * r, S(m) * r];
  };
  u.innerRadius = function(r) {
    return arguments.length ? (t = typeof r === "function" ? r : _(+r), u) : t;
  };
  u.outerRadius = function(r) {
    return arguments.length ? (e = typeof r === "function" ? r : _(+r), u) : e;
  };
  u.cornerRadius = function(r) {
    return arguments.length ? (i = typeof r === "function" ? r : _(+r), u) : i;
  };
  u.padRadius = function(r) {
    return arguments.length ? (o = r == null ? null : typeof r === "function" ? r : _(+r), u) : o;
  };
  u.startAngle = function(r) {
    return arguments.length ? (l = typeof r === "function" ? r : _(+r), u) : l;
  };
  u.endAngle = function(r) {
    return arguments.length ? (f = typeof r === "function" ? r : _(+r), u) : f;
  };
  u.padAngle = function(r) {
    return arguments.length ? (c = typeof r === "function" ? r : _(+r), u) : c;
  };
  u.context = function(r) {
    return arguments.length ? (n = r == null ? null : r, u) : n;
  };
  return u;
}

// ../../node_modules/d3-shape/src/array.js
var Qt = Array.prototype.slice;
function tt(t) {
  return typeof t === "object" && "length" in t ? t : Array.from(t);
}

// ../../node_modules/d3-shape/src/descending.js
function yt(t, e) {
  return e < t ? -1 : e > t ? 1 : e >= t ? 0 : NaN;
}

// ../../node_modules/d3-shape/src/identity.js
function vt(t) {
  return t;
}

// ../../node_modules/d3-shape/src/pie.js
function Et() {
  var t = vt, e = yt, i = null, o = _(0), l = _(z), f = _(0);
  function c(n) {
    var s, u = (n = tt(n)).length, r, m, a = 0, h = new Array(u), g = new Array(u), y = +o.apply(this, arguments), k = Math.min(z, Math.max(-z, l.apply(this, arguments) - y)), x, A = Math.min(Math.abs(k) / u, f.apply(this, arguments)), $ = A * (k < 0 ? -1 : 1), v;
    for (s = 0; s < u; ++s) {
      if ((v = g[h[s] = s] = +t(n[s], s, n)) > 0) {
        a += v;
      }
    }
    if (e != null) h.sort(function(M, R) {
      return e(g[M], g[R]);
    });
    else if (i != null) h.sort(function(M, R) {
      return i(n[M], n[R]);
    });
    for (s = 0, m = a ? (k - u * $) / a : 0; s < u; ++s, y = x) {
      r = h[s], v = g[r], x = y + (v > 0 ? v * m : 0) + $, g[r] = {
        data: n[r],
        index: s,
        value: v,
        startAngle: y,
        endAngle: x,
        padAngle: A
      };
    }
    return g;
  }
  c.value = function(n) {
    return arguments.length ? (t = typeof n === "function" ? n : _(+n), c) : t;
  };
  c.sortValues = function(n) {
    return arguments.length ? (e = n, i = null, c) : e;
  };
  c.sort = function(n) {
    return arguments.length ? (i = n, e = null, c) : i;
  };
  c.startAngle = function(n) {
    return arguments.length ? (o = typeof n === "function" ? n : _(+n), c) : o;
  };
  c.endAngle = function(n) {
    return arguments.length ? (l = typeof n === "function" ? n : _(+n), c) : l;
  };
  c.padAngle = function(n) {
    return arguments.length ? (f = typeof n === "function" ? n : _(+n), c) : f;
  };
  return c;
}

// ../../node_modules/d3-shape/src/curve/linear.js
function $t(t) {
  this._context = t;
}
$t.prototype = {
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
  point: function(t, e) {
    t = +t, e = +e;
    switch (this._point) {
      case 0:
        this._point = 1;
        this._line ? this._context.lineTo(t, e) : this._context.moveTo(t, e);
        break;
      case 1:
        this._point = 2;
      default:
        this._context.lineTo(t, e);
        break;
    }
  }
};
function pt(t) {
  return new $t(t);
}

// ../../node_modules/d3-shape/src/point.js
function At(t) {
  return t[0];
}
function Mt(t) {
  return t[1];
}

// ../../node_modules/d3-shape/src/line.js
function Nt(t, e) {
  var i = _(true), o = null, l = pt, f = null, c = K(n);
  t = typeof t === "function" ? t : t === void 0 ? At : _(t);
  e = typeof e === "function" ? e : e === void 0 ? Mt : _(e);
  function n(s) {
    var u, r = (s = tt(s)).length, m, a = false, h;
    if (o == null) f = l(h = c());
    for (u = 0; u <= r; ++u) {
      if (!(u < r && i(m = s[u], u, s)) === a) {
        if (a = !a) f.lineStart();
        else f.lineEnd();
      }
      if (a) f.point(+t(m, u, s), +e(m, u, s));
    }
    if (h) return f = null, h + "" || null;
  }
  n.x = function(s) {
    return arguments.length ? (t = typeof s === "function" ? s : _(+s), n) : t;
  };
  n.y = function(s) {
    return arguments.length ? (e = typeof s === "function" ? s : _(+s), n) : e;
  };
  n.defined = function(s) {
    return arguments.length ? (i = typeof s === "function" ? s : _(!!s), n) : i;
  };
  n.curve = function(s) {
    return arguments.length ? (l = s, o != null && (f = l(o)), n) : l;
  };
  n.context = function(s) {
    return arguments.length ? (s == null ? o = f = null : f = l(o = s), n) : o;
  };
  return n;
}

// ../../node_modules/d3-shape/src/curve/step.js
function ht(t, e) {
  this._context = t;
  this._t = e;
}
ht.prototype = {
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
  point: function(t, e) {
    t = +t, e = +e;
    switch (this._point) {
      case 0:
        this._point = 1;
        this._line ? this._context.lineTo(t, e) : this._context.moveTo(t, e);
        break;
      case 1:
        this._point = 2;
      default: {
        if (this._t <= 0) {
          this._context.lineTo(this._x, e);
          this._context.lineTo(t, e);
        } else {
          var i = this._x * (1 - this._t) + t * this._t;
          this._context.lineTo(i, this._y);
          this._context.lineTo(i, e);
        }
        break;
      }
    }
    this._x = t, this._y = e;
  }
};
function Bt(t) {
  return new ht(t, 0);
}
function Lt(t) {
  return new ht(t, 1);
}

export {
  Pt as a,
  pt as b,
  Nt as c,
  Et as d,
  Bt as e,
  Lt as f
};
