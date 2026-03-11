import {
  $ as Dn,
  U as St,
  V as Mn,
  W as ar,
  X as bn,
  Z as ir,
  _ as Sn,
  aa as vn,
  ba as kn,
  ca as wn,
  da as In,
  ea as On,
  fa as Cn,
  ga as sr,
  ma as st,
  na as _n,
  oa as ut,
  pa as An,
  qa as Pn,
  ra as Nn
} from "./chunk-W2WHPTFK.js";
import {
  a as He,
  b as We
} from "./chunk-TOLQYWR2.js";

// ../../node_modules/dayjs/dayjs.min.js
var Yn = He((ur, cr) => {
  !function(e, t) {
    "object" == typeof ur && "undefined" != typeof cr ? cr.exports = t() : "function" == typeof define && define.amd ? define(t) : (e = "undefined" != typeof globalThis ? globalThis : e || self).dayjs = t();
  }(ur, function() {
    "use strict";
    var e = 1e3, t = 6e4, r = 36e5, n = "millisecond", a = "second", o = "minute", i = "hour", s = "day", c = "week", u = "month", l = "quarter", f = "year", d = "date", p = "Invalid Date", m = /^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/, T = /\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g, b = { name: "en", weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"), months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"), ordinal: function(k) {
      var h = ["th", "st", "nd", "rd"], y = k % 100;
      return "[" + k + (h[(y - 20) % 10] || h[y] || h[0]) + "]";
    } }, D = function(k, h, y) {
      var v = String(k);
      return !v || v.length >= h ? k : "" + Array(h + 1 - v.length).join(y) + k;
    }, w = { s: D, z: function(k) {
      var h = -k.utcOffset(), y = Math.abs(h), v = Math.floor(y / 60), M = y % 60;
      return (h <= 0 ? "+" : "-") + D(v, 2, "0") + ":" + D(M, 2, "0");
    }, m: function k(h, y) {
      if (h.date() < y.date()) return -k(y, h);
      var v = 12 * (y.year() - h.year()) + (y.month() - h.month()), M = h.clone().add(v, u), I = y - M < 0, C = h.clone().add(v + (I ? -1 : 1), u);
      return +(-(v + (y - M) / (I ? M - C : C - M)) || 0);
    }, a: function(k) {
      return k < 0 ? Math.ceil(k) || 0 : Math.floor(k);
    }, p: function(k) {
      return { M: u, y: f, w: c, d: s, D: d, h: i, m: o, s: a, ms: n, Q: l }[k] || String(k || "").toLowerCase().replace(/s$/, "");
    }, u: function(k) {
      return void 0 === k;
    } }, O = "en", P = {};
    P[O] = b;
    var L = "$isDayjsObject", x = function(k) {
      return k instanceof B || !(!k || !k[L]);
    }, Y = function k(h, y, v) {
      var M;
      if (!h) return O;
      if ("string" == typeof h) {
        var I = h.toLowerCase();
        P[I] && (M = I), y && (P[I] = y, M = I);
        var C = h.split("-");
        if (!M && C.length > 1) return k(C[0]);
      } else {
        var A = h.name;
        P[A] = h, M = A;
      }
      return !v && M && (O = M), M || !v && O;
    }, R = function(k, h) {
      if (x(k)) return k.clone();
      var y = "object" == typeof h ? h : {};
      return y.date = k, y.args = arguments, new B(y);
    }, $ = w;
    $.l = Y, $.i = x, $.w = function(k, h) {
      return R(k, { locale: h.$L, utc: h.$u, x: h.$x, $offset: h.$offset });
    };
    var B = function() {
      function k(y) {
        this.$L = Y(y.locale, null, true), this.parse(y), this.$x = this.$x || y.x || {}, this[L] = true;
      }
      var h = k.prototype;
      return h.parse = function(y) {
        this.$d = function(v) {
          var M = v.date, I = v.utc;
          if (null === M) return /* @__PURE__ */ new Date(NaN);
          if ($.u(M)) return /* @__PURE__ */ new Date();
          if (M instanceof Date) return new Date(M);
          if ("string" == typeof M && !/Z$/i.test(M)) {
            var C = M.match(m);
            if (C) {
              var A = C[2] - 1 || 0, H = (C[7] || "0").substring(0, 3);
              return I ? new Date(Date.UTC(C[1], A, C[3] || 1, C[4] || 0, C[5] || 0, C[6] || 0, H)) : new Date(C[1], A, C[3] || 1, C[4] || 0, C[5] || 0, C[6] || 0, H);
            }
          }
          return new Date(M);
        }(y), this.init();
      }, h.init = function() {
        var y = this.$d;
        this.$y = y.getFullYear(), this.$M = y.getMonth(), this.$D = y.getDate(), this.$W = y.getDay(), this.$H = y.getHours(), this.$m = y.getMinutes(), this.$s = y.getSeconds(), this.$ms = y.getMilliseconds();
      }, h.$utils = function() {
        return $;
      }, h.isValid = function() {
        return !(this.$d.toString() === p);
      }, h.isSame = function(y, v) {
        var M = R(y);
        return this.startOf(v) <= M && M <= this.endOf(v);
      }, h.isAfter = function(y, v) {
        return R(y) < this.startOf(v);
      }, h.isBefore = function(y, v) {
        return this.endOf(v) < R(y);
      }, h.$g = function(y, v, M) {
        return $.u(y) ? this[v] : this.set(M, y);
      }, h.unix = function() {
        return Math.floor(this.valueOf() / 1e3);
      }, h.valueOf = function() {
        return this.$d.getTime();
      }, h.startOf = function(y, v) {
        var M = this, I = !!$.u(v) || v, C = $.p(y), A = function(le, G) {
          var S = $.w(M.$u ? Date.UTC(M.$y, G, le) : new Date(M.$y, G, le), M);
          return I ? S : S.endOf(s);
        }, H = function(le, G) {
          return $.w(M.toDate()[le].apply(M.toDate("s"), (I ? [0, 0, 0, 0] : [23, 59, 59, 999]).slice(G)), M);
        }, V = this.$W, Z = this.$M, ne = this.$D, Me = "set" + (this.$u ? "UTC" : "");
        switch (C) {
          case f:
            return I ? A(1, 0) : A(31, 11);
          case u:
            return I ? A(1, Z) : A(0, Z + 1);
          case c:
            var me = this.$locale().weekStart || 0, Ie = (V < me ? V + 7 : V) - me;
            return A(I ? ne - Ie : ne + (6 - Ie), Z);
          case s:
          case d:
            return H(Me + "Hours", 0);
          case i:
            return H(Me + "Minutes", 1);
          case o:
            return H(Me + "Seconds", 2);
          case a:
            return H(Me + "Milliseconds", 3);
          default:
            return this.clone();
        }
      }, h.endOf = function(y) {
        return this.startOf(y, false);
      }, h.$set = function(y, v) {
        var M, I = $.p(y), C = "set" + (this.$u ? "UTC" : ""), A = (M = {}, M[s] = C + "Date", M[d] = C + "Date", M[u] = C + "Month", M[f] = C + "FullYear", M[i] = C + "Hours", M[o] = C + "Minutes", M[a] = C + "Seconds", M[n] = C + "Milliseconds", M)[I], H = I === s ? this.$D + (v - this.$W) : v;
        if (I === u || I === f) {
          var V = this.clone().set(d, 1);
          V.$d[A](H), V.init(), this.$d = V.set(d, Math.min(this.$D, V.daysInMonth())).$d;
        } else A && this.$d[A](H);
        return this.init(), this;
      }, h.set = function(y, v) {
        return this.clone().$set(y, v);
      }, h.get = function(y) {
        return this[$.p(y)]();
      }, h.add = function(y, v) {
        var M, I = this;
        y = Number(y);
        var C = $.p(v), A = function(Z) {
          var ne = R(I);
          return $.w(ne.date(ne.date() + Math.round(Z * y)), I);
        };
        if (C === u) return this.set(u, this.$M + y);
        if (C === f) return this.set(f, this.$y + y);
        if (C === s) return A(1);
        if (C === c) return A(7);
        var H = (M = {}, M[o] = t, M[i] = r, M[a] = e, M)[C] || 1, V = this.$d.getTime() + y * H;
        return $.w(V, this);
      }, h.subtract = function(y, v) {
        return this.add(-1 * y, v);
      }, h.format = function(y) {
        var v = this, M = this.$locale();
        if (!this.isValid()) return M.invalidDate || p;
        var I = y || "YYYY-MM-DDTHH:mm:ssZ", C = $.z(this), A = this.$H, H = this.$m, V = this.$M, Z = M.weekdays, ne = M.months, Me = M.meridiem, me = function(G, S, N, F) {
          return G && (G[S] || G(v, I)) || N[S].slice(0, F);
        }, Ie = function(G) {
          return $.s(A % 12 || 12, G, "0");
        }, le = Me || function(G, S, N) {
          var F = G < 12 ? "AM" : "PM";
          return N ? F.toLowerCase() : F;
        };
        return I.replace(T, function(G, S) {
          return S || function(N) {
            switch (N) {
              case "YY":
                return String(v.$y).slice(-2);
              case "YYYY":
                return $.s(v.$y, 4, "0");
              case "M":
                return V + 1;
              case "MM":
                return $.s(V + 1, 2, "0");
              case "MMM":
                return me(M.monthsShort, V, ne, 3);
              case "MMMM":
                return me(ne, V);
              case "D":
                return v.$D;
              case "DD":
                return $.s(v.$D, 2, "0");
              case "d":
                return String(v.$W);
              case "dd":
                return me(M.weekdaysMin, v.$W, Z, 2);
              case "ddd":
                return me(M.weekdaysShort, v.$W, Z, 3);
              case "dddd":
                return Z[v.$W];
              case "H":
                return String(A);
              case "HH":
                return $.s(A, 2, "0");
              case "h":
                return Ie(1);
              case "hh":
                return Ie(2);
              case "a":
                return le(A, H, true);
              case "A":
                return le(A, H, false);
              case "m":
                return String(H);
              case "mm":
                return $.s(H, 2, "0");
              case "s":
                return String(v.$s);
              case "ss":
                return $.s(v.$s, 2, "0");
              case "SSS":
                return $.s(v.$ms, 3, "0");
              case "Z":
                return C;
            }
            return null;
          }(G) || C.replace(":", "");
        });
      }, h.utcOffset = function() {
        return 15 * -Math.round(this.$d.getTimezoneOffset() / 15);
      }, h.diff = function(y, v, M) {
        var I, C = this, A = $.p(v), H = R(y), V = (H.utcOffset() - this.utcOffset()) * t, Z = this - H, ne = function() {
          return $.m(C, H);
        };
        switch (A) {
          case f:
            I = ne() / 12;
            break;
          case u:
            I = ne();
            break;
          case l:
            I = ne() / 3;
            break;
          case c:
            I = (Z - V) / 6048e5;
            break;
          case s:
            I = (Z - V) / 864e5;
            break;
          case i:
            I = Z / r;
            break;
          case o:
            I = Z / t;
            break;
          case a:
            I = Z / e;
            break;
          default:
            I = Z;
        }
        return M ? I : $.a(I);
      }, h.daysInMonth = function() {
        return this.endOf(u).$D;
      }, h.$locale = function() {
        return P[this.$L];
      }, h.locale = function(y, v) {
        if (!y) return this.$L;
        var M = this.clone(), I = Y(y, v, true);
        return I && (M.$L = I), M;
      }, h.clone = function() {
        return $.w(this.$d, this);
      }, h.toDate = function() {
        return new Date(this.valueOf());
      }, h.toJSON = function() {
        return this.isValid() ? this.toISOString() : null;
      }, h.toISOString = function() {
        return this.$d.toISOString();
      }, h.toString = function() {
        return this.$d.toUTCString();
      }, k;
    }(), _ = B.prototype;
    return R.prototype = _, [["$ms", n], ["$s", a], ["$m", o], ["$H", i], ["$W", s], ["$M", u], ["$y", f], ["$D", d]].forEach(function(k) {
      _[k[1]] = function(h) {
        return this.$g(h, k[0], k[1]);
      };
    }), R.extend = function(k, h) {
      return k.$i || (k(h, B, R), k.$i = true), R;
    }, R.locale = Y, R.isDayjs = x, R.unix = function(k) {
      return R(1e3 * k);
    }, R.en = P[O], R.Ls = P, R.p = {}, R;
  });
});

// ../../node_modules/dayjs/plugin/advancedFormat.js
var $n = He((lr, fr) => {
  !function(e, t) {
    "object" == typeof lr && "undefined" != typeof fr ? fr.exports = t() : "function" == typeof define && define.amd ? define(t) : (e = "undefined" != typeof globalThis ? globalThis : e || self).dayjs_plugin_advancedFormat = t();
  }(lr, function() {
    "use strict";
    return function(e, t) {
      var r = t.prototype, n = r.format;
      r.format = function(a) {
        var o = this, i = this.$locale();
        if (!this.isValid()) return n.bind(this)(a);
        var s = this.$utils(), c = (a || "YYYY-MM-DDTHH:mm:ssZ").replace(/\[([^\]]+)]|Q|wo|ww|w|WW|W|zzz|z|gggg|GGGG|Do|X|x|k{1,2}|S/g, function(u) {
          switch (u) {
            case "Q":
              return Math.ceil((o.$M + 1) / 3);
            case "Do":
              return i.ordinal(o.$D);
            case "gggg":
              return o.weekYear();
            case "GGGG":
              return o.isoWeekYear();
            case "wo":
              return i.ordinal(o.week(), "W");
            case "w":
            case "ww":
              return s.s(o.week(), "w" === u ? 1 : 2, "0");
            case "W":
            case "WW":
              return s.s(o.isoWeek(), "W" === u ? 1 : 2, "0");
            case "k":
            case "kk":
              return s.s(String(0 === o.$H ? 24 : o.$H), "k" === u ? 1 : 2, "0");
            case "X":
              return Math.floor(o.$d.getTime() / 1e3);
            case "x":
              return o.$d.getTime();
            case "z":
              return "[" + o.offsetName() + "]";
            case "zzz":
              return "[" + o.offsetName("long") + "]";
            default:
              return u;
          }
        });
        return n.bind(this)(c);
      };
    };
  });
});

// ../../node_modules/dayjs/plugin/customParseFormat.js
var Fn = He((mr, dr) => {
  !function(e, t) {
    "object" == typeof mr && "undefined" != typeof dr ? dr.exports = t() : "function" == typeof define && define.amd ? define(t) : (e = "undefined" != typeof globalThis ? globalThis : e || self).dayjs_plugin_customParseFormat = t();
  }(mr, function() {
    "use strict";
    var e = { LTS: "h:mm:ss A", LT: "h:mm A", L: "MM/DD/YYYY", LL: "MMMM D, YYYY", LLL: "MMMM D, YYYY h:mm A", LLLL: "dddd, MMMM D, YYYY h:mm A" }, t = /(\[[^[]*\])|([-_:/.,()\s]+)|(A|a|Q|YYYY|YY?|ww?|MM?M?M?|Do|DD?|hh?|HH?|mm?|ss?|S{1,3}|z|ZZ?)/g, r = /\d/, n = /\d\d/, a = /\d\d?/, o = /\d*[^-_:/,()\s\d]+/, i = {}, s = function(m) {
      return (m = +m) + (m > 68 ? 1900 : 2e3);
    };
    var c = function(m) {
      return function(T) {
        this[m] = +T;
      };
    }, u = [/[+-]\d\d:?(\d\d)?|Z/, function(m) {
      (this.zone || (this.zone = {})).offset = function(T) {
        if (!T) return 0;
        if ("Z" === T) return 0;
        var b = T.match(/([+-]|\d\d)/g), D = 60 * b[1] + (+b[2] || 0);
        return 0 === D ? 0 : "+" === b[0] ? -D : D;
      }(m);
    }], l = function(m) {
      var T = i[m];
      return T && (T.indexOf ? T : T.s.concat(T.f));
    }, f = function(m, T) {
      var b, D = i.meridiem;
      if (D) {
        for (var w = 1; w <= 24; w += 1) if (m.indexOf(D(w, 0, T)) > -1) {
          b = w > 12;
          break;
        }
      } else b = m === (T ? "pm" : "PM");
      return b;
    }, d = { A: [o, function(m) {
      this.afternoon = f(m, false);
    }], a: [o, function(m) {
      this.afternoon = f(m, true);
    }], Q: [r, function(m) {
      this.month = 3 * (m - 1) + 1;
    }], S: [r, function(m) {
      this.milliseconds = 100 * +m;
    }], SS: [n, function(m) {
      this.milliseconds = 10 * +m;
    }], SSS: [/\d{3}/, function(m) {
      this.milliseconds = +m;
    }], s: [a, c("seconds")], ss: [a, c("seconds")], m: [a, c("minutes")], mm: [a, c("minutes")], H: [a, c("hours")], h: [a, c("hours")], HH: [a, c("hours")], hh: [a, c("hours")], D: [a, c("day")], DD: [n, c("day")], Do: [o, function(m) {
      var T = i.ordinal, b = m.match(/\d+/);
      if (this.day = b[0], T) for (var D = 1; D <= 31; D += 1) T(D).replace(/\[|\]/g, "") === m && (this.day = D);
    }], w: [a, c("week")], ww: [n, c("week")], M: [a, c("month")], MM: [n, c("month")], MMM: [o, function(m) {
      var T = l("months"), b = (l("monthsShort") || T.map(function(D) {
        return D.slice(0, 3);
      })).indexOf(m) + 1;
      if (b < 1) throw new Error();
      this.month = b % 12 || b;
    }], MMMM: [o, function(m) {
      var T = l("months").indexOf(m) + 1;
      if (T < 1) throw new Error();
      this.month = T % 12 || T;
    }], Y: [/[+-]?\d+/, c("year")], YY: [n, function(m) {
      this.year = s(m);
    }], YYYY: [/\d{4}/, c("year")], Z: u, ZZ: u };
    function p(m) {
      var T, b;
      T = m, b = i && i.formats;
      for (var D = (m = T.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g, function(R, $, B) {
        var _ = B && B.toUpperCase();
        return $ || b[B] || e[B] || b[_].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g, function(k, h, y) {
          return h || y.slice(1);
        });
      })).match(t), w = D.length, O = 0; O < w; O += 1) {
        var P = D[O], L = d[P], x = L && L[0], Y = L && L[1];
        D[O] = Y ? { regex: x, parser: Y } : P.replace(/^\[|\]$/g, "");
      }
      return function(R) {
        for (var $ = {}, B = 0, _ = 0; B < w; B += 1) {
          var k = D[B];
          if ("string" == typeof k) _ += k.length;
          else {
            var h = k.regex, y = k.parser, v = R.slice(_), M = h.exec(v)[0];
            y.call($, M), R = R.replace(M, "");
          }
        }
        return function(I) {
          var C = I.afternoon;
          if (void 0 !== C) {
            var A = I.hours;
            C ? A < 12 && (I.hours += 12) : 12 === A && (I.hours = 0), delete I.afternoon;
          }
        }($), $;
      };
    }
    return function(m, T, b) {
      b.p.customParseFormat = true, m && m.parseTwoDigitYear && (s = m.parseTwoDigitYear);
      var D = T.prototype, w = D.parse;
      D.parse = function(O) {
        var P = O.date, L = O.utc, x = O.args;
        this.$u = L;
        var Y = x[1];
        if ("string" == typeof Y) {
          var R = true === x[2], $ = true === x[3], B = R || $, _ = x[2];
          $ && (_ = x[2]), i = this.$locale(), !R && _ && (i = b.Ls[_]), this.$d = function(v, M, I, C) {
            try {
              if (["x", "X"].indexOf(M) > -1) return new Date(("X" === M ? 1e3 : 1) * v);
              var A = p(M)(v), H = A.year, V = A.month, Z = A.day, ne = A.hours, Me = A.minutes, me = A.seconds, Ie = A.milliseconds, le = A.zone, G = A.week, S = /* @__PURE__ */ new Date(), N = Z || (H || V ? 1 : S.getDate()), F = H || S.getFullYear(), g = 0;
              H && !V || (g = V > 0 ? V - 1 : S.getMonth());
              var X, U = ne || 0, J = Me || 0, ee = me || 0, de = Ie || 0;
              return le ? new Date(Date.UTC(F, g, N, U, J, ee, de + 60 * le.offset * 1e3)) : I ? new Date(Date.UTC(F, g, N, U, J, ee, de)) : (X = new Date(F, g, N, U, J, ee, de), G && (X = C(X).week(G).toDate()), X);
            } catch (or) {
              return /* @__PURE__ */ new Date("");
            }
          }(P, Y, L, b), this.init(), _ && true !== _ && (this.$L = this.locale(_).$L), B && P != this.format(Y) && (this.$d = /* @__PURE__ */ new Date("")), i = {};
        } else if (Y instanceof Array) for (var k = Y.length, h = 1; h <= k; h += 1) {
          x[1] = Y[h - 1];
          var y = b.apply(this, x);
          if (y.isValid()) {
            this.$d = y.$d, this.$L = y.$L, this.init();
            break;
          }
          h === k && (this.$d = /* @__PURE__ */ new Date(""));
        }
        else w.call(this, O);
      };
    };
  });
});

// ../../node_modules/dayjs/plugin/isBetween.js
var Ln = He((pr, gr) => {
  !function(e, t) {
    "object" == typeof pr && "undefined" != typeof gr ? gr.exports = t() : "function" == typeof define && define.amd ? define(t) : (e = "undefined" != typeof globalThis ? globalThis : e || self).dayjs_plugin_isBetween = t();
  }(pr, function() {
    "use strict";
    return function(e, t, r) {
      t.prototype.isBetween = function(n, a, o, i) {
        var s = r(n), c = r(a), u = "(" === (i = i || "()")[0], l = ")" === i[1];
        return (u ? this.isAfter(s, o) : !this.isBefore(s, o)) && (l ? this.isBefore(c, o) : !this.isAfter(c, o)) || (u ? this.isBefore(s, o) : !this.isAfter(s, o)) && (l ? this.isAfter(c, o) : !this.isBefore(c, o));
      };
    };
  });
});

// ../../node_modules/dayjs/plugin/minMax.js
var Rn = He((hr, xr) => {
  !function(e, t) {
    "object" == typeof hr && "undefined" != typeof xr ? xr.exports = t() : "function" == typeof define && define.amd ? define(t) : (e = "undefined" != typeof globalThis ? globalThis : e || self).dayjs_plugin_minMax = t();
  }(hr, function() {
    "use strict";
    return function(e, t, r) {
      var n = function(a, o) {
        if (!o || !o.length || 1 === o.length && !o[0] || 1 === o.length && Array.isArray(o[0]) && !o[0].length) return null;
        var i;
        1 === o.length && o[0].length > 0 && (o = o[0]);
        i = (o = o.filter(function(c) {
          return c;
        }))[0];
        for (var s = 1; s < o.length; s += 1) o[s].isValid() && !o[s][a](i) || (i = o[s]);
        return i;
      };
      r.max = function() {
        var a = [].slice.call(arguments, 0);
        return n("isAfter", a);
      }, r.min = function() {
        var a = [].slice.call(arguments, 0);
        return n("isBefore", a);
      };
    };
  });
});

// ../../node_modules/dayjs/plugin/updateLocale.js
var En = He((yr, Tr) => {
  !function(e, t) {
    "object" == typeof yr && "undefined" != typeof Tr ? Tr.exports = t() : "function" == typeof define && define.amd ? define(t) : (e = "undefined" != typeof globalThis ? globalThis : e || self).dayjs_plugin_updateLocale = t();
  }(yr, function() {
    "use strict";
    return function(e, t, r) {
      r.updateLocale = function(n, a) {
        var o = r.Ls[n];
        if (o) return (a ? Object.keys(a) : []).forEach(function(i) {
          o[i] = a[i];
        }), o;
      };
    };
  });
});

// ../../node_modules/dayjs/plugin/utc.js
var Un = He((Mr, br) => {
  !function(e, t) {
    "object" == typeof Mr && "undefined" != typeof br ? br.exports = t() : "function" == typeof define && define.amd ? define(t) : (e = "undefined" != typeof globalThis ? globalThis : e || self).dayjs_plugin_utc = t();
  }(Mr, function() {
    "use strict";
    var e = "minute", t = /[+-]\d\d(?::?\d\d)?/g, r = /([+-]|\d\d)/g;
    return function(n, a, o) {
      var i = a.prototype;
      o.utc = function(p) {
        var m = { date: p, utc: true, args: arguments };
        return new a(m);
      }, i.utc = function(p) {
        var m = o(this.toDate(), { locale: this.$L, utc: true });
        return p ? m.add(this.utcOffset(), e) : m;
      }, i.local = function() {
        return o(this.toDate(), { locale: this.$L, utc: false });
      };
      var s = i.parse;
      i.parse = function(p) {
        p.utc && (this.$u = true), this.$utils().u(p.$offset) || (this.$offset = p.$offset), s.call(this, p);
      };
      var c = i.init;
      i.init = function() {
        if (this.$u) {
          var p = this.$d;
          this.$y = p.getUTCFullYear(), this.$M = p.getUTCMonth(), this.$D = p.getUTCDate(), this.$W = p.getUTCDay(), this.$H = p.getUTCHours(), this.$m = p.getUTCMinutes(), this.$s = p.getUTCSeconds(), this.$ms = p.getUTCMilliseconds();
        } else c.call(this);
      };
      var u = i.utcOffset;
      i.utcOffset = function(p, m) {
        var T = this.$utils().u;
        if (T(p)) return this.$u ? 0 : T(this.$offset) ? u.call(this) : this.$offset;
        if ("string" == typeof p && (p = function(O) {
          void 0 === O && (O = "");
          var P = O.match(t);
          if (!P) return null;
          var L = ("" + P[0]).match(r) || ["-", 0, 0], x = L[0], Y = 60 * +L[1] + +L[2];
          return 0 === Y ? 0 : "+" === x ? Y : -Y;
        }(p), null === p)) return this;
        var b = Math.abs(p) <= 16 ? 60 * p : p, D = this;
        if (m) return D.$offset = b, D.$u = 0 === p, D;
        if (0 !== p) {
          var w = this.$u ? this.toDate().getTimezoneOffset() : -1 * this.utcOffset();
          (D = this.local().add(b + w, e)).$offset = b, D.$x.$localOffset = w;
        } else D = this.utc();
        return D;
      };
      var l = i.format;
      i.format = function(p) {
        var m = p || (this.$u ? "YYYY-MM-DDTHH:mm:ss[Z]" : "");
        return l.call(this, m);
      }, i.valueOf = function() {
        var p = this.$utils().u(this.$offset) ? 0 : this.$offset + (this.$x.$localOffset || this.$d.getTimezoneOffset());
        return this.$d.valueOf() - 6e4 * p;
      }, i.isUTC = function() {
        return !!this.$u;
      }, i.toISOString = function() {
        return this.toDate().toISOString();
      }, i.toString = function() {
        return this.toDate().toUTCString();
      };
      var f = i.toDate;
      i.toDate = function(p) {
        return "s" === p && this.$offset ? o(this.format("YYYY-MM-DD HH:mm:ss:SSS")).toDate() : f.call(this);
      };
      var d = i.diff;
      i.diff = function(p, m, T) {
        if (p && this.$u === p.$u) return d.call(this, p, m, T);
        var b = this.local(), D = o(p).local();
        return d.call(b, D, m, T);
      };
    };
  });
});

// ../utils/src/date/toaster-day.ts
var Oe = We(Yn(), 1);
var Wn = We($n(), 1);
var Bn = We(Fn(), 1);
var Vn = We(Ln(), 1);
var zn = We(Rn(), 1);
var jn = We(En(), 1);
var Zn = We(Un(), 1);

// ../utils/src/date/bloomberg-month-plugin.ts
var Ka = "YYYY-MM-DDTHH:mm:ssZ";
var Qa = (e, t) => {
  const r = t.prototype;
  const n = r.format;
  const a = [
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
  r.format = function(o) {
    const i = o || Ka;
    const s = n.bind(this)(i);
    const c = s.replace(
      /(\[[^\]]+])|ttt/g,
      (u, l) => {
        const f = Number(this.$M);
        return a[f];
      }
    );
    return c;
  };
};
var Hn = Qa;

// ../utils/src/date/toaster-day.ts
Oe.default.extend(Vn.default);
Oe.default.extend(zn.default);
Oe.default.extend(Zn.default);
Oe.default.extend(Bn.default);
Oe.default.extend(Wn.default);
Oe.default.extend(jn.default);
Oe.default.extend(Hn);
var j = Oe.default;
var Dt = [
  "date",
  "quarter",
  "month",
  "year",
  "month/day",
  "year/month"
];
var ae = {
  quarter: "YYYY Q",
  month: "MMMM",
  "month/day": "MMMM DD YYYY",
  "year/month": "MMMM YYYY DD",
  year: "YYYY"
};
var Ja = (e) => e.endsWith("Z") ? e.slice(0, -1) : e;
var oe = (e, t, r) => {
  if (!e) {
    return null;
  }
  let n = Ja(typeof e === "string" ? e : `${e}`);
  if (r) {
    n += r;
  }
  return j(n, t).toDate();
};

// src/charts/utils/getTextWidth.ts
function ei(e, t, r) {
  try {
    let n = document.getElementById(
      "__measurement_id"
    );
    if (!n) {
      const a = document.createElementNS("http://www.w3.org/2000/svg", "svg");
      a.setAttribute("aria-hidden", "true");
      a.style.width = "0";
      a.style.height = "0";
      a.style.position = "absolute";
      a.style.top = "-100%";
      a.style.left = "-100%";
      n = document.createElementNS("http://www.w3.org/2000/svg", "text");
      n.setAttribute("id", "__measurement_id");
      a.appendChild(n);
      document.body.appendChild(a);
    }
    Object.assign(n.style, {
      fontFamily: t,
      fontSize: r
    });
    n.textContent = e;
    return n.getComputedTextLength();
  } catch (n) {
    return 0;
  }
}
var K = St(
  ei,
  (e, t, r) => `${e}_${t}_${r}`
);

// src/charts/utils/number-utils.ts
var ti = {
  none: 1,
  thousand: 1e3,
  million: 1e6,
  billion: 1e9,
  trillion: 1e12
};
var Sr = {
  none: "",
  thousand: "K",
  million: "M",
  billion: "B",
  trillion: "T"
};
var Dr = (e) => {
  if (e < 1e4) {
    return "none";
  } else if (e < 1e6) {
    return "thousand";
  } else if (e < 1e9) {
    return "million";
  } else if (e < 1e12) {
    return "billion";
  } else {
    return "trillion";
  }
};
var vr = (e, t) => {
  return sr(e).divide(ti[t]).value();
};
var kr = (e, t) => {
  const r = {
    optionalMantissa: true,
    thousandSeparated: t.commas ?? false
  };
  if (!Dn(t.decimals) && !Sn(t.decimals) && t.decimals >= 0) {
    r["mantissa"] = t.decimals;
    r["optionalMantissa"] = false;
  } else if (t.maxDecimals) {
    r["mantissa"] = t.maxDecimals;
    r["trimMantissa"] = true;
  } else {
    r["mantissa"] = t.maxMantissa;
    r["optionalMantissa"] = false;
  }
  const n = sr(e).format(r);
  return n;
};
var zu = (e, t) => {
  const r = !t.displayFullNumbers ? Dr(e) : "none";
  const n = vr(e, r);
  const a = kr(n, {
    decimals: t.decimals,
    commas: t.commas ?? true,
    maxMantissa: 6,
    maxDecimals: t.maxDecimals ?? 6
  });
  const o = Sr[r];
  const i = t.forceLowerCaseUnits ? o.toLowerCase() : o;
  return `${a}${i}`;
};

// ../utils/src/numbers/index.ts
var vt = (e) => {
  const t = `${e}`;
  if (!t.split(".")[1]) {
    return 0;
  } else {
    return t.split(".")[1].length;
  }
};
var Gn = (e) => {
  return e.reduce((t, r) => {
    const n = vt(r);
    return Math.max(t, n);
  }, 0);
};

// ../utils/src/date/suffix.ts
var ie = (e, t, r) => {
  const n = e?.stats?.suffix;
  if (!n || !e || !t) {
    return "";
  }
  if (r) {
    const a = e.data?.indexOf(t);
    if (a !== void 0 && a >= 0 && n.unordered) {
      const o = Object.entries(n.unordered).sort(
        (s, c) => s[1] - c[1]
      );
      let i = 0;
      for (const [s, c] of o) {
        if (a >= i && a <= c) {
          return s;
        }
        i = c;
      }
    }
  } else {
    return n.ordered ?? "";
  }
  return "";
};

// src/charts/utils/data-utils.ts
function ri(e) {
  if (!e || e.length === 0) return [];
  return e[0].map((t, r) => e.map((n) => n[r]));
}
var Xn = (e) => e.fields.filter((t) => !t.taxonomy?.isPrimary);
var Qu = (e) => {
  const t = Mn(e);
  const r = ri(e.data);
  const n = e.fields.map((a) => ({
    ...a,
    data: r[a.index]
  }));
  if (e.design.overrideOptions) {
    try {
      const a = JSON.parse(e.design.overrideOptions);
      t.design.parsedOverrideOptions = a;
    } catch (a) {
      console.warn(a);
      t.design["parsedOverrideOptions"] = void 0;
    }
  } else {
    t.design["parsedOverrideOptions"] = void 0;
  }
  return { ...t, fields: n };
};
var Ju = ({
  scales: e,
  chartData: t
}) => {
  const r = t?.axis?.primary?.preserveOrder;
  let n = [];
  n = t.data.map(
    (a) => a.map(
      (o, i) => ni(
        t.fields[i]?.type,
        o,
        ie(t.fields[i], o, r)
      )
    )
  );
  if ((e.primaryScale.scale.type === "time" || e.primaryScale.scale.type === "linear") && !t.axis?.primary?.preserveOrder) {
    n = In(n, (a) => a[0]);
  }
  return n;
};
var ni = (e, t, r) => {
  if (Dt.includes(e)) {
    return oe(
      `${t}`,
      ae[e] ?? void 0,
      r
    );
  }
  return t;
};
var ec = ({
  dottedLineSegmentInfos: e,
  chartData: t
}) => {
  const r = t.fields.find(
    (i) => i.taxonomy?.isPrimary === true
  )?.type;
  const n = t.fields.find(
    (i) => i.taxonomy?.isPrimary === true
  );
  const a = t.fields.find(
    (i) => i.taxonomy?.isPrimary === true
  )?.stats?.suffix;
  const o = t?.axis?.primary?.preserveOrder;
  return e.filter((i) => i.from !== null && i.to !== null).map((i) => {
    return {
      seriesId: i.seriesId,
      from: r && Dt.includes(r) ? oe(
        `${i.from}`,
        ae[r] ?? void 0,
        ie(
          n,
          `${i.from}`,
          o
        )
      ) : r === "numeric" && i.from ? +i.from : i.from,
      to: r && Dt.includes(r) ? oe(
        `${i.to}`,
        ae[r] ?? void 0,
        ie(
          n,
          `${i.to}`,
          o
        )
      ) : r === "numeric" && i.to ? +i.to : i.to
    };
  });
};
var tc = (e) => {
  let t = {};
  const r = e.fields.find(
    (o) => o.taxonomy?.isPrimary === true
  );
  const n = r?.id;
  const a = e?.axis?.primary?.preserveOrder;
  for (let o = 0; o < e.data.length; o++) {
    let i = {};
    for (const s of e.fields) {
      if (s.id !== n) {
        if (s.type === "numeric") {
          i[s.id] = s.data?.[o] ? +s.data?.[o] : null;
        } else if (s.type === "date" || s.type === "month/day" || s.type === "year/month") {
          i[s.id] = s.data?.[o] ? oe(
            s.data[o],
            ae[s.type],
            ie(s, s.data[o], a)
          ) : null;
        } else {
          i[s.id] = s.data?.[o] ?? null;
        }
      }
    }
    if (r?.data?.[o]) {
      t[r.data[o]] = i;
    }
  }
  return t;
};

// src/charts/utils/axis-padding-calculators/bandHorizontalPaddingCalculator.ts
var qn = ({
  ticks: e,
  scale: t,
  isTerminalClient: r,
  isMobile: n
}) => {
  const a = e.map(
    (i) => wt({
      text: Kn(i.label),
      width: t.scale.bandwidth(),
      fontFamily: fe(r),
      fontSize: `${be(n)}px`
    })
  );
  const o = Math.max(...a);
  return {
    ticks: e,
    padding: {
      main: o + Ce + kt,
      // vertical padding
      start: 0,
      // won't have overhang becuase text wraps to fit
      end: 0,
      // see above
      tickLength: Ce,
      textShift: 0
    }
  };
};

// src/charts/utils/axis-padding-calculators/bandVerticalPaddingCalculator.ts
var Qn = ({
  ticks: e,
  scale: t,
  isTerminalClient: r,
  isMobile: n
}) => {
  return {
    ticks: e,
    padding: {
      main: It,
      start: 0,
      end: 0,
      tickLength: 7,
      // TODO: calculate? this may be static for vertical band scales
      textShift: 0
    }
  };
};

// src/charts/utils/axis-padding-calculators/linearHorizontalPaddingCalculator.ts
var eo = ({
  ticks: e,
  scale: t,
  isTerminalClient: r,
  isMobile: n
}) => {
  const a = Pe(
    e[0],
    t,
    "start",
    "horizontal",
    r
  );
  const o = Pe(
    e[e.length - 1],
    t,
    "end",
    "horizontal",
    r
  );
  return {
    ticks: e,
    padding: {
      main: Jn,
      // vertical padding - assumes one line (for now)
      start: a,
      // left
      end: o,
      // right
      tickLength: Ce,
      textShift: 0
    }
  };
};

// ../../node_modules/d3-time/src/interval.js
var wr = /* @__PURE__ */ new Date();
var Ir = /* @__PURE__ */ new Date();
function W(e, t, r, n) {
  function a(o) {
    return e(o = arguments.length === 0 ? /* @__PURE__ */ new Date() : /* @__PURE__ */ new Date(+o)), o;
  }
  a.floor = (o) => {
    return e(o = /* @__PURE__ */ new Date(+o)), o;
  };
  a.ceil = (o) => {
    return e(o = new Date(o - 1)), t(o, 1), e(o), o;
  };
  a.round = (o) => {
    const i = a(o), s = a.ceil(o);
    return o - i < s - o ? i : s;
  };
  a.offset = (o, i) => {
    return t(o = /* @__PURE__ */ new Date(+o), i == null ? 1 : Math.floor(i)), o;
  };
  a.range = (o, i, s) => {
    const c = [];
    o = a.ceil(o);
    s = s == null ? 1 : Math.floor(s);
    if (!(o < i) || !(s > 0)) return c;
    let u;
    do
      c.push(u = /* @__PURE__ */ new Date(+o)), t(o, s), e(o);
    while (u < o && o < i);
    return c;
  };
  a.filter = (o) => {
    return W((i) => {
      if (i >= i) while (e(i), !o(i)) i.setTime(i - 1);
    }, (i, s) => {
      if (i >= i) {
        if (s < 0) while (++s <= 0) {
          while (t(i, -1), !o(i)) {
          }
        }
        else while (--s >= 0) {
          while (t(i, 1), !o(i)) {
          }
        }
      }
    });
  };
  if (r) {
    a.count = (o, i) => {
      wr.setTime(+o), Ir.setTime(+i);
      e(wr), e(Ir);
      return Math.floor(r(wr, Ir));
    };
    a.every = (o) => {
      o = Math.floor(o);
      return !isFinite(o) || !(o > 0) ? null : !(o > 1) ? a : a.filter(n ? (i) => n(i) % o === 0 : (i) => a.count(0, i) % o === 0);
    };
  }
  return a;
}

// ../../node_modules/d3-time/src/millisecond.js
var pe = W(() => {
}, (e, t) => {
  e.setTime(+e + t);
}, (e, t) => {
  return t - e;
});
pe.every = (e) => {
  e = Math.floor(e);
  if (!isFinite(e) || !(e > 0)) return null;
  if (!(e > 1)) return pe;
  return W((t) => {
    t.setTime(Math.floor(t / e) * e);
  }, (t, r) => {
    t.setTime(+t + r * e);
  }, (t, r) => {
    return (r - t) / e;
  });
};
var to = pe.range;

// ../../node_modules/d3-time/src/duration.js
var ue = 1e3;
var te = ue * 60;
var ge = te * 60;
var he = ge * 24;
var ct = he * 7;
var Or = he * 30;
var Ot = he * 365;

// ../../node_modules/d3-time/src/second.js
var Se = W((e) => {
  e.setTime(e - e.getMilliseconds());
}, (e, t) => {
  e.setTime(+e + t * ue);
}, (e, t) => {
  return (t - e) / ue;
}, (e) => {
  return e.getUTCSeconds();
});
var ro = Se.range;

// ../../node_modules/d3-time/src/minute.js
var _e = W((e) => {
  e.setTime(e - e.getMilliseconds() - e.getSeconds() * ue);
}, (e, t) => {
  e.setTime(+e + t * te);
}, (e, t) => {
  return (t - e) / te;
}, (e) => {
  return e.getMinutes();
});
var oi = _e.range;
var Ct = W((e) => {
  e.setUTCSeconds(0, 0);
}, (e, t) => {
  e.setTime(+e + t * te);
}, (e, t) => {
  return (t - e) / te;
}, (e) => {
  return e.getUTCMinutes();
});
var ai = Ct.range;

// ../../node_modules/d3-time/src/hour.js
var Ae = W((e) => {
  e.setTime(e - e.getMilliseconds() - e.getSeconds() * ue - e.getMinutes() * te);
}, (e, t) => {
  e.setTime(+e + t * ge);
}, (e, t) => {
  return (t - e) / ge;
}, (e) => {
  return e.getHours();
});
var ii = Ae.range;
var _t = W((e) => {
  e.setUTCMinutes(0, 0, 0);
}, (e, t) => {
  e.setTime(+e + t * ge);
}, (e, t) => {
  return (t - e) / ge;
}, (e) => {
  return e.getUTCHours();
});
var si = _t.range;

// ../../node_modules/d3-time/src/day.js
var re = W(
  (e) => e.setHours(0, 0, 0, 0),
  (e, t) => e.setDate(e.getDate() + t),
  (e, t) => (t - e - (t.getTimezoneOffset() - e.getTimezoneOffset()) * te) / he,
  (e) => e.getDate() - 1
);
var ui = re.range;
var Be = W((e) => {
  e.setUTCHours(0, 0, 0, 0);
}, (e, t) => {
  e.setUTCDate(e.getUTCDate() + t);
}, (e, t) => {
  return (t - e) / he;
}, (e) => {
  return e.getUTCDate() - 1;
});
var ci = Be.range;
var At = W((e) => {
  e.setUTCHours(0, 0, 0, 0);
}, (e, t) => {
  e.setUTCDate(e.getUTCDate() + t);
}, (e, t) => {
  return (t - e) / he;
}, (e) => {
  return Math.floor(e / he);
});
var li = At.range;

// ../../node_modules/d3-time/src/week.js
function Ve(e) {
  return W((t) => {
    t.setDate(t.getDate() - (t.getDay() + 7 - e) % 7);
    t.setHours(0, 0, 0, 0);
  }, (t, r) => {
    t.setDate(t.getDate() + r * 7);
  }, (t, r) => {
    return (r - t - (r.getTimezoneOffset() - t.getTimezoneOffset()) * te) / ct;
  });
}
var xe = Ve(0);
var De = Ve(1);
var Pt = Ve(2);
var Nt = Ve(3);
var ve = Ve(4);
var Yt = Ve(5);
var $t = Ve(6);
var no = xe.range;
var fi = De.range;
var mi = Pt.range;
var di = Nt.range;
var pi = ve.range;
var gi = Yt.range;
var hi = $t.range;
function ze(e) {
  return W((t) => {
    t.setUTCDate(t.getUTCDate() - (t.getUTCDay() + 7 - e) % 7);
    t.setUTCHours(0, 0, 0, 0);
  }, (t, r) => {
    t.setUTCDate(t.getUTCDate() + r * 7);
  }, (t, r) => {
    return (r - t) / ct;
  });
}
var je = ze(0);
var Je = ze(1);
var oo = ze(2);
var ao = ze(3);
var Ne = ze(4);
var io = ze(5);
var so = ze(6);
var uo = je.range;
var xi = Je.range;
var yi = oo.range;
var Ti = ao.range;
var Mi = Ne.range;
var bi = io.range;
var Si = so.range;

// ../../node_modules/d3-time/src/month.js
var ce = W((e) => {
  e.setDate(1);
  e.setHours(0, 0, 0, 0);
}, (e, t) => {
  e.setMonth(e.getMonth() + t);
}, (e, t) => {
  return t.getMonth() - e.getMonth() + (t.getFullYear() - e.getFullYear()) * 12;
}, (e) => {
  return e.getMonth();
});
var Di = ce.range;
var Ft = W((e) => {
  e.setUTCDate(1);
  e.setUTCHours(0, 0, 0, 0);
}, (e, t) => {
  e.setUTCMonth(e.getUTCMonth() + t);
}, (e, t) => {
  return t.getUTCMonth() - e.getUTCMonth() + (t.getUTCFullYear() - e.getUTCFullYear()) * 12;
}, (e) => {
  return e.getUTCMonth();
});
var vi = Ft.range;

// ../../node_modules/d3-time/src/year.js
var q = W((e) => {
  e.setMonth(0, 1);
  e.setHours(0, 0, 0, 0);
}, (e, t) => {
  e.setFullYear(e.getFullYear() + t);
}, (e, t) => {
  return t.getFullYear() - e.getFullYear();
}, (e) => {
  return e.getFullYear();
});
q.every = (e) => {
  return !isFinite(e = Math.floor(e)) || !(e > 0) ? null : W((t) => {
    t.setFullYear(Math.floor(t.getFullYear() / e) * e);
    t.setMonth(0, 1);
    t.setHours(0, 0, 0, 0);
  }, (t, r) => {
    t.setFullYear(t.getFullYear() + r * e);
  });
};
var ki = q.range;
var ye = W((e) => {
  e.setUTCMonth(0, 1);
  e.setUTCHours(0, 0, 0, 0);
}, (e, t) => {
  e.setUTCFullYear(e.getUTCFullYear() + t);
}, (e, t) => {
  return t.getUTCFullYear() - e.getUTCFullYear();
}, (e) => {
  return e.getUTCFullYear();
});
ye.every = (e) => {
  return !isFinite(e = Math.floor(e)) || !(e > 0) ? null : W((t) => {
    t.setUTCFullYear(Math.floor(t.getUTCFullYear() / e) * e);
    t.setUTCMonth(0, 1);
    t.setUTCHours(0, 0, 0, 0);
  }, (t, r) => {
    t.setUTCFullYear(t.getUTCFullYear() + r * e);
  });
};
var wi = ye.range;

// ../../node_modules/d3-array/src/ascending.js
function Ze(e, t) {
  return e == null || t == null ? NaN : e < t ? -1 : e > t ? 1 : e >= t ? 0 : NaN;
}

// ../../node_modules/d3-array/src/descending.js
function Cr(e, t) {
  return e == null || t == null ? NaN : t < e ? -1 : t > e ? 1 : t >= e ? 0 : NaN;
}

// ../../node_modules/d3-array/src/bisector.js
function Ge(e) {
  let t, r, n;
  if (e.length !== 2) {
    t = Ze;
    r = (s, c) => Ze(e(s), c);
    n = (s, c) => e(s) - c;
  } else {
    t = e === Ze || e === Cr ? e : Ii;
    r = e;
    n = e;
  }
  function a(s, c, u = 0, l = s.length) {
    if (u < l) {
      if (t(c, c) !== 0) return l;
      do {
        const f = u + l >>> 1;
        if (r(s[f], c) < 0) u = f + 1;
        else l = f;
      } while (u < l);
    }
    return u;
  }
  function o(s, c, u = 0, l = s.length) {
    if (u < l) {
      if (t(c, c) !== 0) return l;
      do {
        const f = u + l >>> 1;
        if (r(s[f], c) <= 0) u = f + 1;
        else l = f;
      } while (u < l);
    }
    return u;
  }
  function i(s, c, u = 0, l = s.length) {
    const f = a(s, c, u, l - 1);
    return f > u && n(s[f - 1], c) > -n(s[f], c) ? f - 1 : f;
  }
  return { left: a, center: i, right: o };
}
function Ii() {
  return 0;
}

// ../../node_modules/d3-array/src/number.js
function _r(e) {
  return e === null ? NaN : +e;
}

// ../../node_modules/d3-array/src/bisect.js
var co = Ge(Ze);
var lo = co.right;
var Oi = co.left;
var Ci = Ge(_r).center;
var Ar = lo;

// ../../node_modules/internmap/src/index.js
var et = class extends Map {
  constructor(t, r = Pi) {
    super();
    Object.defineProperties(this, { _intern: { value: /* @__PURE__ */ new Map() }, _key: { value: r } });
    if (t != null) for (const [n, a] of t) this.set(n, a);
  }
  get(t) {
    return super.get(fo(this, t));
  }
  has(t) {
    return super.has(fo(this, t));
  }
  set(t, r) {
    return super.set(_i(this, t), r);
  }
  delete(t) {
    return super.delete(Ai(this, t));
  }
};
function fo({ _intern: e, _key: t }, r) {
  const n = t(r);
  return e.has(n) ? e.get(n) : r;
}
function _i({ _intern: e, _key: t }, r) {
  const n = t(r);
  if (e.has(n)) return e.get(n);
  e.set(n, r);
  return r;
}
function Ai({ _intern: e, _key: t }, r) {
  const n = t(r);
  if (e.has(n)) {
    r = e.get(n);
    e.delete(n);
  }
  return r;
}
function Pi(e) {
  return e !== null && typeof e === "object" ? e.valueOf() : e;
}

// ../../node_modules/d3-array/src/ticks.js
var Ni = Math.sqrt(50);
var Yi = Math.sqrt(10);
var $i = Math.sqrt(2);
function Lt(e, t, r) {
  const n = (t - e) / Math.max(0, r), a = Math.floor(Math.log10(n)), o = n / Math.pow(10, a), i = o >= Ni ? 10 : o >= Yi ? 5 : o >= $i ? 2 : 1;
  let s, c, u;
  if (a < 0) {
    u = Math.pow(10, -a) / i;
    s = Math.round(e * u);
    c = Math.round(t * u);
    if (s / u < e) ++s;
    if (c / u > t) --c;
    u = -u;
  } else {
    u = Math.pow(10, a) * i;
    s = Math.round(e / u);
    c = Math.round(t / u);
    if (s * u < e) ++s;
    if (c * u > t) --c;
  }
  if (c < s && 0.5 <= r && r < 2) return Lt(e, t, r * 2);
  return [s, c, u];
}
function Rt(e, t, r) {
  t = +t, e = +e, r = +r;
  if (!(r > 0)) return [];
  if (e === t) return [e];
  const n = t < e, [a, o, i] = n ? Lt(t, e, r) : Lt(e, t, r);
  if (!(o >= a)) return [];
  const s = o - a + 1, c = new Array(s);
  if (n) {
    if (i < 0) for (let u = 0; u < s; ++u) c[u] = (o - u) / -i;
    else for (let u = 0; u < s; ++u) c[u] = (o - u) * i;
  } else {
    if (i < 0) for (let u = 0; u < s; ++u) c[u] = (a + u) / -i;
    else for (let u = 0; u < s; ++u) c[u] = (a + u) * i;
  }
  return c;
}
function lt(e, t, r) {
  t = +t, e = +e, r = +r;
  return Lt(e, t, r)[2];
}
function tt(e, t, r) {
  t = +t, e = +e, r = +r;
  const n = t < e, a = n ? lt(t, e, r) : lt(e, t, r);
  return (n ? -1 : 1) * (a < 0 ? 1 / -a : a);
}

// ../../node_modules/d3-array/src/range.js
function Et(e, t, r) {
  e = +e, t = +t, r = (a = arguments.length) < 2 ? (t = e, e = 0, 1) : a < 3 ? 1 : +r;
  var n = -1, a = Math.max(0, Math.ceil((t - e) / r)) | 0, o = new Array(a);
  while (++n < a) {
    o[n] = e + n * r;
  }
  return o;
}

// ../../node_modules/d3-time/src/ticks.js
function mo(e, t, r, n, a, o) {
  const i = [
    [Se, 1, ue],
    [Se, 5, 5 * ue],
    [Se, 15, 15 * ue],
    [Se, 30, 30 * ue],
    [o, 1, te],
    [o, 5, 5 * te],
    [o, 15, 15 * te],
    [o, 30, 30 * te],
    [a, 1, ge],
    [a, 3, 3 * ge],
    [a, 6, 6 * ge],
    [a, 12, 12 * ge],
    [n, 1, he],
    [n, 2, 2 * he],
    [r, 1, ct],
    [t, 1, Or],
    [t, 3, 3 * Or],
    [e, 1, Ot]
  ];
  function s(u, l, f) {
    const d = l < u;
    if (d) [u, l] = [l, u];
    const p = f && typeof f.range === "function" ? f : c(u, l, f);
    const m = p ? p.range(u, +l + 1) : [];
    return d ? m.reverse() : m;
  }
  function c(u, l, f) {
    const d = Math.abs(l - u) / f;
    const p = Ge(([, , b]) => b).right(i, d);
    if (p === i.length) return e.every(tt(u / Ot, l / Ot, f));
    if (p === 0) return pe.every(Math.max(tt(u, l, f), 1));
    const [m, T] = i[d / i[p - 1][2] < i[p][2] / d ? p - 1 : p];
    return m.every(T);
  }
  return [s, c];
}
var [Fi, Li] = mo(ye, Ft, je, At, _t, Ct);
var [Pr, Nr] = mo(q, ce, xe, re, Ae, _e);

// src/charts/utils/ticks/major-minor-tick-utils.ts
var Ri = 36;
var Ei = 10;
var Ui = 90;
var Il = 365 * 5;
var ft = {
  century: 7,
  multidecade: 6,
  decade: 6,
  years: 5,
  yearlyQuarters: 4,
  quarters: 4,
  months: 4,
  weeks: 3,
  daysofweek: 3,
  days: 2,
  hours: 1,
  minutes: 0,
  [""]: -Infinity
};
var Hi = (e) => {
  return ft[e];
};
var Wi = [
  [100, "years"],
  [20, "years"],
  [10, "years"],
  [5, "years"],
  [2, "years"],
  [1, "years"],
  [3, "months"],
  [2, "months"],
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
var Bi = {
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
  "5years": [
    [1, "years"],
    [6, "months"]
  ],
  "2years": [
    [1, "years"],
    [6, "months"],
    [3, "months"]
  ],
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
var Vi = [
  [100, "years"],
  [20, "years"],
  [10, "years"],
  [5, "years"],
  [2, "years"],
  [1, "years"],
  [6, "months"],
  [3, "months"]
];
var zi = (e, t) => {
  const r = /* @__PURE__ */ new Date();
  const n = /* @__PURE__ */ new Date();
  switch (t.toLowerCase()) {
    case "minutes":
      n.setMinutes(r.getMinutes() + e);
      break;
    case "hours":
      n.setHours(r.getHours() + e);
      break;
    case "days":
      n.setDate(r.getDate() + e);
      break;
    case "weeks":
      n.setDate(r.getDate() + e * 7);
      break;
    case "months":
      n.setMonth(r.getMonth() + e);
      break;
    case "years":
      n.setFullYear(r.getFullYear() + e);
      break;
    default:
      break;
  }
  return {
    start: r,
    end: n
  };
};
var ji = (e, t) => {
  const { start: r, end: n } = zi(t[0], t[1]);
  return Math.abs(e.scale(r) - e.scale(n));
};
var po = (e, t, r, n = false, a = false) => {
  let o = [100, "years"];
  let i = [];
  if (a && !n) {
    const s = `${r?.[0]}${r?.[1]}`;
    i = Bi[s];
  } else {
    i = !n ? Wi : Vi;
  }
  for (const s of i) {
    if (ji(e, s) > t) {
      if (
        // prevents subticks from being more than 1 "level" away from their parent tick level
        // i.e. blocks super ticks being 'years' and major ticks being 'days', even if there is space
        r && ft[r[1]] - ft[s[1]] > 1
      ) {
        break;
      } else if (e.granularity && ft[s[1]] < ft[e.granularity]) {
        break;
      }
      o = s;
    } else {
      break;
    }
  }
  return o;
};
var Zi = (e, t, r) => {
  const n = e.filter((u) => u.rank === "super");
  const a = t.scale.discontinuityProvider();
  const o = Object.values(
    ar(n, (u) => t.scale(u.value))
  ).map((u) => vn(u)).filter((u) => u !== void 0);
  let i = e.filter((u) => !u.hideTick && u.rank !== "super");
  const s = ar(
    i,
    (u) => (
      //clampUp - When given a value, if it falls within a discontinuity (i.e. an excluded domain range) it should be shifted forwards to the discontinuity boundary. Otherwise, it should be returned unchanged.
      // i.e. - this is the shifted value
      a.clampUp(u.value).toString()
    )
  );
  i = Object.values(s).map((u) => {
    const l = kn(
      u,
      (f) => ["minor", "major", "custom"].indexOf(f.rank ?? "minor")
    );
    return l;
  }).filter((u) => u !== void 0);
  const c = i.filter((u) => u.rank === "custom");
  for (const u of c) {
    const l = t.scale(u.value);
    const f = K(
      u.label.value,
      fe(r),
      "13px"
    );
    const d = i.find((T) => T.rank === "major");
    const p = d ? K(
      d.label.value,
      fe(r),
      "13px"
    ) : 0;
    const m = f / 2 + p / 2 + 4;
    i = i.map(
      (T) => T.rank === "major" && Math.abs(t.scale(T.value) - l) < m ? { ...T, rank: "minor" } : T
    );
  }
  return [...i, ...o];
};
var Ut = (e, t, r, n = false) => {
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
          if (r && Hi(r[1]) >= 3) {
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
var Gi = (e) => {
  const [t, r] = e;
  const n = 1e3 * 60 * 60 * 24;
  const a = Math.floor((r.getTime() - t.getTime()) / n);
  if (a <= 7) {
    return [1, "days"];
  } else if (a <= Ui) {
    return [1, "months"];
  } else {
    return [1, "years"];
  }
};
var Xi = (e) => {
  if (e[1] === "days") {
    return [1, "months"];
  } else if (e[1] === "months") {
    return [1, "years"];
  } else {
    return null;
  }
};
var qi = (e, t) => {
  let r = [];
  if (e === "days") {
    const [n, a] = [
      re.floor(t[0]),
      j(re.ceil(t[1])).add(1, "s").toDate()
    ];
    r = re.every(1)?.range(n, a) ?? [];
  } else if (e === "months") {
    const [n, a] = [
      ce.floor(t[0]),
      j(ce.ceil(t[1])).add(1, "s").toDate()
    ];
    r = ce.every(1)?.range(n, a) ?? [];
  } else {
    const [n, a] = [
      q.floor(t[0]),
      j(q.ceil(t[1])).add(1, "s").toDate()
    ];
    r = q.every(1)?.range(n, a) ?? [];
  }
  if (r.length === 2) {
    return { values: [t[0]], hideTicks: true };
  }
  return { values: r, hideTicks: false };
};
var go = (e, t, r) => {
  const { values: n, hideTicks: a } = e[1] !== "" ? qi(e[1], t) : { values: [], hideTicks: true };
  return n?.map((o) => ({
    value: o,
    label: {
      pre: j(
        Ki(o, e)
      ).format(
        Ut(
          e,
          "super",
          void 0,
          r
        )
      ),
      value: j(o).format(
        Ut(
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
  })) ?? [];
};
var ho = ({
  timeSpan: e,
  domain: t,
  axisProperties: r
}) => {
  let n = De;
  switch (r?.startWeekday) {
    case "Monday":
      n = De;
      break;
    case "Tuesday":
      n = Pt;
      break;
    case "Wednesday":
      n = Nt;
      break;
    case "Thursday":
      n = ve;
      break;
    case "Friday":
      n = Yt;
      break;
    case "Saturday":
      n = $t;
      break;
    case "Sunday":
      n = xe;
      break;
    default:
      break;
  }
  switch (e[1]) {
    case "minutes":
      return _e.every(e[0])?.range(t[0], j(t[1]).add(1, "s").toDate());
    case "hours":
      return Ae.every(e[0])?.range(t[0], j(t[1]).add(1, "s").toDate());
    case "days":
      return re.every(e[0])?.range(t[0], j(t[1]).add(1, "s").toDate());
    case "weeks":
      return n.every(e[0])?.range(t[0], j(t[1]).add(1, "s").toDate());
    case "months":
      return ce.every(e[0])?.range(t[0], j(t[1]).add(1, "s").toDate());
    case "quarters":
      return ce.every(e[0] * 3)?.range(t[0], j(t[1]).add(1, "s").toDate());
    case "years":
    default:
      return q.every(e[0])?.range(t[0], j(t[1]).add(1, "s").toDate());
  }
};
var Ki = (e, t) => {
  switch (t[1]) {
    case "minutes":
      return _e.offset(e, -1 * t[0]);
    case "hours":
      return Ae.offset(e, -1 * t[0]);
    case "days":
      return re.offset(e, -1 * t[0]);
    case "weeks":
      return De.offset(e, -1 * t[0]);
    case "months":
      return ce.offset(e, -1 * t[0]);
    case "years":
    default:
      return q.offset(e, -1 * t[0]);
  }
};
var Qi = ({
  tickDateSpan: e,
  tickValues: t,
  scale: r
}) => {
  let n = [];
  const a = r.scale.discontinuityProvider();
  for (const o of t) {
    const i = a.clampUp(o);
    if (o === i) {
      n.push(o);
    } else {
      if (e && e[1] !== "hours") {
        n.push(i);
      }
    }
  }
  return Cn(n, (o) => o.toString());
};
var xo = (e, t, r) => {
  const n = t.isTerminalClient ?? false;
  const a = e.fieldType === "quarter" && e.granularity === "months";
  const o = e.fieldType === "month";
  const i = e.fieldType === "month/day";
  const s = e.scale.domain();
  let c = Gi(s);
  let u = o || i && c[1] === "years" ? [] : go(c, s, i);
  let l = po(
    e,
    Ri,
    c,
    a
  );
  let f = l ? ho({
    timeSpan: l,
    domain: e.scale.domain(),
    axisProperties: r
  }) ?? [] : [];
  f = Qi({
    tickValues: f,
    tickDateSpan: l,
    scale: e
  });
  if (a) {
    l = [1, "quarters"];
  }
  let d = f ? f?.map((x) => ({
    value: x,
    label: {
      pre: a ? "Q" : "",
      value: j(x).format(
        Ut(l, "major")
      ),
      post: ""
    },
    rank: "major"
  })) : [];
  let p = po(
    e,
    Ei,
    l,
    e.fieldType === "quarter",
    true
  );
  const m = p ? ho({
    timeSpan: p,
    domain: e.scale.domain(),
    axisProperties: r
  }) : [];
  const T = m?.map((x) => ({
    value: x,
    label: {
      pre: "",
      value: "",
      post: ""
    },
    rank: "minor"
  })) ?? [];
  const b = c[1] === l?.[1];
  if (b) {
    const x = Xi(c);
    if (x) {
      u = go(x, s, i);
      c = x;
    } else {
      u = [];
    }
  }
  const D = !r?.customTickDateFormat || r.customTickDateFormat === "auto" ? Ut(
    [1, e.granularity ?? "days"],
    "custom",
    c
  ) : r.customTickDateFormat;
  const w = r?.forceFirstLast ? e.scale.domain().map((x) => ({
    value: x,
    label: {
      pre: "",
      value: j(x).format(D),
      post: ""
    },
    rank: "custom"
  })) : [];
  const O = [
    ...u,
    ...w,
    ...d,
    ...T
  ];
  let P = wn(O, ["value"], ["asc"]);
  let L = Zi(
    P,
    e,
    n
  ).filter(
    (x) => j(x?.value).isBetween(
      e.scale.domain()[0],
      e.scale.domain()[1],
      "minutes",
      "[]"
      // i.e. inclusive
    )
  );
  return L;
};

// src/charts/utils/ticks/numeric-tick-utils.ts
var Ji = 20;
var es = ({
  value: e,
  axisProperties: t,
  isLastTick: r,
  unit: n
}) => {
  let a = "";
  let o = "";
  if (r) {
    let i = Sr[n];
    if (t?.forceLowerCaseUnits) {
      i = i.toLowerCase();
    }
    a = t.label?.prefix ?? "";
    o = `${i}${t.label?.postfix ?? ""}`;
  }
  return {
    pre: a,
    value: e,
    post: o
  };
};
var ts = (e) => {
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
      } else if (t < 550) {
        return 8;
      } else {
        return 10;
      }
    case "band":
    default:
      return e.scale.domain().length;
  }
};
var yo = (e, t) => {
  const r = ts(e);
  if (!t?.min && !t?.max) {
    e.scale = e.scale.nice(r);
  }
  let n = e.scale.ticks(r);
  return n;
};
var rs = (e, t) => {
  const r = [];
  const n = e.scale.domain()[0];
  const a = e.scale.domain()[1];
  const o = Math.max(
    vt(t),
    vt(n)
  );
  for (let i = n; i <= a; i += t) {
    r.push(+i.toFixed(o));
  }
  return r;
};
var To = ({
  scale: e,
  isPrimary: t,
  chartData: r
}) => {
  const n = r.axis ? r.axis[t ? "primary" : "secondary"] ?? {} : {};
  const a = n.forceFirstLast ?? false;
  const o = n.interval ?? -1;
  let i = [];
  if (o <= 0) {
    i = yo(e, n);
  }
  if (o > 0) {
    const f = e.scale.domain();
    const d = e.scale.range();
    const p = Math.abs(f[1] - f[0]);
    const m = Math.abs(d[1] - d[0]);
    const T = m / p * o;
    const b = m / 2;
    const D = T > Ji && T <= b;
    if (D) {
      i = rs(e, o);
    } else {
      i = yo(e, n);
    }
  }
  if (a && i.length >= 2) {
    if (e?.originalDomain?.[0]) {
      i[0] = +e.originalDomain[0];
    }
    if (e?.originalDomain?.[1]) {
      i[i.length - 1] = +e.originalDomain[1];
    }
  }
  const s = !n?.displayFullNumbers ? Dr(Math.max(...i)) : "none";
  const c = i.map((f) => vr(f, s));
  const u = Gn(c);
  const l = n?.preventNumericalFormatting ?? false;
  return i.map((f, d) => ({
    value: f,
    label: es({
      value: kr(c[d], {
        decimals: n.decimals,
        maxMantissa: u,
        commas: l ? false : s === "none"
      }),
      axisProperties: n,
      unit: s,
      isLastTick: d === i.length - 1
    })
  }));
};

// src/charts/utils/ticks/tick-utils.ts
var Kn = (e) => `${e.pre}${e.value}${e.post}`;
var $r = (e) => {
  const t = e.pre.length <= Yr ? e.pre : "";
  const r = e.value;
  const n = e.post.length <= Mo ? e.post : "";
  return `${t}${r}${n}`;
};
var So = (e) => {
  const t = e.pre.length <= Yr ? e.pre : "";
  const r = e.value;
  return `${t}${r}`;
};
var ns = (e) => {
  return {
    pre: "",
    value: e,
    post: ""
  };
};
var Pe = (e, t, r, n, a) => {
  if (n === "horizontal") {
    const o = K(
      $r(e.label),
      fe(a),
      bo
    );
    const i = t.scale(e.value);
    const s = t.scale.range()[r === "start" ? 0 : 1];
    if (r === "start") {
      if (i - o / 2 < s) {
        return Math.abs(i - o / 2 + s);
      } else {
        return 0;
      }
    } else {
      if (i + o / 2 > s) {
        return Math.abs(i + o / 2 - s);
      } else {
        return 0;
      }
    }
  } else {
    const o = Ht + kt;
    const i = t.scale(e.value);
    const s = r === "end" ? 0 : t.scale.range()[0];
    if (i - o < s) {
      if (r === "start") {
        return Math.abs(i - o + s);
      } else {
        return Math.abs(i - o - s);
      }
    } else {
      return 0;
    }
  }
};
var Do = ({
  scale: e,
  isPrimary: t,
  chartData: r,
  options: n
}) => {
  const a = r.axis ? t ? r.axis.primary : r.axis.secondary : {};
  if (e.type === "band") {
    return e.scale.domain().map((o) => ({
      value: o,
      label: ns(o)
      // this is where we'd format the label (if needed)
    }));
  } else if (e.type === "time") {
    return xo(e, n, a);
  } else if (e.type === "linear") {
    return To({ scale: e, isPrimary: t, chartData: r });
  } else {
    return [];
  }
};

// src/charts/utils/axis-padding-calculators/linearVerticalPaddingCalculator.ts
var ko = ({
  ticks: e,
  scale: t,
  isTerminalClient: r,
  axisProperties: n,
  isMobile: a
}) => {
  const o = Boolean(n?.unit) && n?.unit !== "";
  const i = fe(r ?? false);
  const s = e.reduce((p, m, T) => {
    if (T === 0 || K(m.label.value, i, `${be(a)}px`) > K(p, i, `${be(a)}px`)) {
      return m.label.value;
    } else {
      return p;
    }
  }, "");
  const c = {
    pre: e[e.length - 1].label.pre,
    value: s,
    post: e[e.length - 1].label.post
  };
  const u = K(
    $r(c),
    i,
    `${be(a)}px`
  );
  const l = K(
    So(c),
    i,
    `${be(a)}px`
  );
  const f = Pe(
    e[e.length - 1],
    // calculate length of tick at the end of the scale
    t,
    "end",
    "vertical",
    r
  );
  const d = o ? be(a) + vo : 0;
  return {
    ticks: e,
    padding: {
      main: u,
      // horizontal padding
      start: 0,
      // bottom
      end: f + d,
      // top
      tickLength: l,
      textShift: Math.abs(u - l)
    }
  };
};

// src/charts/_common/Axes/axis-utils.ts
var Vl = (e, t) => {
  const r = 36;
  if (t.length === 0) return [];
  let n = [];
  const [a, o] = e.scale.domain();
  const i = e.scale(t[0].value) - e.scale(a);
  if (i > r) {
    n = [
      {
        start: 0,
        end: e.scale(t[0].value),
        position: (0 + e.scale(t[0].value)) / 2,
        label: t[0].label.pre
      }
    ];
  }
  const s = t.reduce((c, u, l) => {
    let f = {
      start: 0,
      end: 0,
      position: 0,
      label: ""
    };
    if (l === t.length - 1) {
      f = {
        start: e.scale(u.value),
        end: e.scale.range()[1],
        position: (e.scale(u.value) + e.scale.range()[1]) / 2,
        label: u.label.value
      };
    } else {
      f = {
        start: e.scale(u.value),
        end: e.scale(t[l + 1].value),
        position: (e.scale(u.value) + e.scale(t[l + 1].value)) / 2,
        label: u.label.value
      };
    }
    if (f.end - f.start > r) {
      return [...c, f];
    } else {
      return c;
    }
  }, []);
  return [...n, ...s];
};
var zl = ({
  tickValue: e,
  variant: t
}) => {
  return e === 0 ? t === "dark" ? Ao : _o : t === "dark" ? Co : Oo;
};
var jl = (e) => e === "dark" ? Io : wo;
var os = (e) => {
  return Fr + // tick
  Wt + // gap
  e + // number
  Wt + // gap
  e;
};
var as = (e) => {
  return Fr + Wt + e;
};
var Po = ({
  hasSuperTicks: e,
  isMobile: t
}) => {
  const r = be(t);
  if (e) {
    return os(r);
  } else {
    return as(r);
  }
};

// src/charts/utils/axis-padding-calculators/timeHorizontalPaddingCalculator.ts
var No = ({
  ticks: e,
  scale: t,
  isTerminalClient: r,
  isMobile: n
}) => {
  const a = e.filter(
    (c) => c.label.value !== "" && c.rank !== "super"
  );
  const o = a.length > 0 ? Pe(
    a[0],
    t,
    "start",
    "horizontal",
    r
  ) : 0;
  const i = a.length > 0 ? Pe(
    a[a.length - 1],
    t,
    "end",
    "horizontal",
    r
  ) : 0;
  const s = e.some((c) => c.rank === "super");
  return {
    ticks: e,
    padding: {
      main: Po({ hasSuperTicks: s, isMobile: n }),
      start: o,
      // left
      end: i,
      // right
      tickLength: Ce,
      textShift: 0
    }
  };
};

// src/charts/utils/axis-padding-calculators/timeVerticalPaddingCalculator.ts
var Yo = ({
  ticks: e
}) => {
  return {
    ticks: e,
    padding: {
      main: It,
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

// ../../node_modules/d3-scale/src/init.js
function Ye(e, t) {
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
var Lr = Symbol("implicit");
function $e() {
  var e = new et(), t = [], r = [], n = Lr;
  function a(o) {
    let i = e.get(o);
    if (i === void 0) {
      if (n !== Lr) return n;
      e.set(o, i = t.push(o) - 1);
    }
    return r[i % r.length];
  }
  a.domain = function(o) {
    if (!arguments.length) return t.slice();
    t = [], e = new et();
    for (const i of o) {
      if (e.has(i)) continue;
      e.set(i, t.push(i) - 1);
    }
    return a;
  };
  a.range = function(o) {
    return arguments.length ? (r = Array.from(o), a) : r.slice();
  };
  a.unknown = function(o) {
    return arguments.length ? (n = o, a) : n;
  };
  a.copy = function() {
    return $e(t, r).unknown(n);
  };
  Ye.apply(a, arguments);
  return a;
}

// ../../node_modules/d3-scale/src/band.js
function mt() {
  var e = $e().unknown(void 0), t = e.domain, r = e.range, n = 0, a = 1, o, i, s = false, c = 0, u = 0, l = 0.5;
  delete e.unknown;
  function f() {
    var d = t().length, p = a < n, m = p ? a : n, T = p ? n : a;
    o = (T - m) / Math.max(1, d - c + u * 2);
    if (s) o = Math.floor(o);
    m += (T - m - o * (d - c)) * l;
    i = o * (1 - c);
    if (s) m = Math.round(m), i = Math.round(i);
    var b = Et(d).map(function(D) {
      return m + o * D;
    });
    return r(p ? b.reverse() : b);
  }
  e.domain = function(d) {
    return arguments.length ? (t(d), f()) : t();
  };
  e.range = function(d) {
    return arguments.length ? ([n, a] = d, n = +n, a = +a, f()) : [n, a];
  };
  e.rangeRound = function(d) {
    return [n, a] = d, n = +n, a = +a, s = true, f();
  };
  e.bandwidth = function() {
    return i;
  };
  e.step = function() {
    return o;
  };
  e.round = function(d) {
    return arguments.length ? (s = !!d, f()) : s;
  };
  e.padding = function(d) {
    return arguments.length ? (c = Math.min(1, u = +d), f()) : c;
  };
  e.paddingInner = function(d) {
    return arguments.length ? (c = Math.min(1, d), f()) : c;
  };
  e.paddingOuter = function(d) {
    return arguments.length ? (u = +d, f()) : u;
  };
  e.align = function(d) {
    return arguments.length ? (l = Math.max(0, Math.min(1, d)), f()) : l;
  };
  e.copy = function() {
    return mt(t(), [n, a]).round(s).paddingInner(c).paddingOuter(u).align(l);
  };
  return Ye.apply(f(), arguments);
}

// ../../node_modules/d3-color/src/define.js
function Bt(e, t, r) {
  e.prototype = t.prototype = r;
  r.constructor = e;
}
function Rr(e, t) {
  var r = Object.create(e.prototype);
  for (var n in t) r[n] = t[n];
  return r;
}

// ../../node_modules/d3-color/src/color.js
function gt() {
}
var dt = 0.7;
var jt = 1 / dt;
var rt = "\\s*([+-]?\\d+)\\s*";
var pt = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*";
var ke = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*";
var is = /^#([0-9a-f]{3,8})$/;
var ss = new RegExp(`^rgb\\(${rt},${rt},${rt}\\)$`);
var us = new RegExp(`^rgb\\(${ke},${ke},${ke}\\)$`);
var cs = new RegExp(`^rgba\\(${rt},${rt},${rt},${pt}\\)$`);
var ls = new RegExp(`^rgba\\(${ke},${ke},${ke},${pt}\\)$`);
var fs = new RegExp(`^hsl\\(${pt},${ke},${ke}\\)$`);
var ms = new RegExp(`^hsla\\(${pt},${ke},${ke},${pt}\\)$`);
var $o = {
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
Bt(gt, Fe, {
  copy(e) {
    return Object.assign(new this.constructor(), this, e);
  },
  displayable() {
    return this.rgb().displayable();
  },
  hex: Fo,
  // Deprecated! Use color.formatHex.
  formatHex: Fo,
  formatHex8: ds,
  formatHsl: ps,
  formatRgb: Lo,
  toString: Lo
});
function Fo() {
  return this.rgb().formatHex();
}
function ds() {
  return this.rgb().formatHex8();
}
function ps() {
  return Bo(this).formatHsl();
}
function Lo() {
  return this.rgb().formatRgb();
}
function Fe(e) {
  var t, r;
  e = (e + "").trim().toLowerCase();
  return (t = is.exec(e)) ? (r = t[1].length, t = parseInt(t[1], 16), r === 6 ? Ro(t) : r === 3 ? new se(t >> 8 & 15 | t >> 4 & 240, t >> 4 & 15 | t & 240, (t & 15) << 4 | t & 15, 1) : r === 8 ? Vt(t >> 24 & 255, t >> 16 & 255, t >> 8 & 255, (t & 255) / 255) : r === 4 ? Vt(t >> 12 & 15 | t >> 8 & 240, t >> 8 & 15 | t >> 4 & 240, t >> 4 & 15 | t & 240, ((t & 15) << 4 | t & 15) / 255) : null) : (t = ss.exec(e)) ? new se(t[1], t[2], t[3], 1) : (t = us.exec(e)) ? new se(t[1] * 255 / 100, t[2] * 255 / 100, t[3] * 255 / 100, 1) : (t = cs.exec(e)) ? Vt(t[1], t[2], t[3], t[4]) : (t = ls.exec(e)) ? Vt(t[1] * 255 / 100, t[2] * 255 / 100, t[3] * 255 / 100, t[4]) : (t = fs.exec(e)) ? Ho(t[1], t[2] / 100, t[3] / 100, 1) : (t = ms.exec(e)) ? Ho(t[1], t[2] / 100, t[3] / 100, t[4]) : $o.hasOwnProperty(e) ? Ro($o[e]) : e === "transparent" ? new se(NaN, NaN, NaN, 0) : null;
}
function Ro(e) {
  return new se(e >> 16 & 255, e >> 8 & 255, e & 255, 1);
}
function Vt(e, t, r, n) {
  if (n <= 0) e = t = r = NaN;
  return new se(e, t, r, n);
}
function gs(e) {
  if (!(e instanceof gt)) e = Fe(e);
  if (!e) return new se();
  e = e.rgb();
  return new se(e.r, e.g, e.b, e.opacity);
}
function nt(e, t, r, n) {
  return arguments.length === 1 ? gs(e) : new se(e, t, r, n == null ? 1 : n);
}
function se(e, t, r, n) {
  this.r = +e;
  this.g = +t;
  this.b = +r;
  this.opacity = +n;
}
Bt(se, nt, Rr(gt, {
  brighter(e) {
    e = e == null ? jt : Math.pow(jt, e);
    return new se(this.r * e, this.g * e, this.b * e, this.opacity);
  },
  darker(e) {
    e = e == null ? dt : Math.pow(dt, e);
    return new se(this.r * e, this.g * e, this.b * e, this.opacity);
  },
  rgb() {
    return this;
  },
  clamp() {
    return new se(qe(this.r), qe(this.g), qe(this.b), Zt(this.opacity));
  },
  displayable() {
    return -0.5 <= this.r && this.r < 255.5 && (-0.5 <= this.g && this.g < 255.5) && (-0.5 <= this.b && this.b < 255.5) && (0 <= this.opacity && this.opacity <= 1);
  },
  hex: Eo,
  // Deprecated! Use color.formatHex.
  formatHex: Eo,
  formatHex8: hs,
  formatRgb: Uo,
  toString: Uo
}));
function Eo() {
  return `#${Xe(this.r)}${Xe(this.g)}${Xe(this.b)}`;
}
function hs() {
  return `#${Xe(this.r)}${Xe(this.g)}${Xe(this.b)}${Xe((isNaN(this.opacity) ? 1 : this.opacity) * 255)}`;
}
function Uo() {
  const e = Zt(this.opacity);
  return `${e === 1 ? "rgb(" : "rgba("}${qe(this.r)}, ${qe(this.g)}, ${qe(this.b)}${e === 1 ? ")" : `, ${e})`}`;
}
function Zt(e) {
  return isNaN(e) ? 1 : Math.max(0, Math.min(1, e));
}
function qe(e) {
  return Math.max(0, Math.min(255, Math.round(e) || 0));
}
function Xe(e) {
  e = qe(e);
  return (e < 16 ? "0" : "") + e.toString(16);
}
function Ho(e, t, r, n) {
  if (n <= 0) e = t = r = NaN;
  else if (r <= 0 || r >= 1) e = t = NaN;
  else if (t <= 0) e = NaN;
  return new Te(e, t, r, n);
}
function Bo(e) {
  if (e instanceof Te) return new Te(e.h, e.s, e.l, e.opacity);
  if (!(e instanceof gt)) e = Fe(e);
  if (!e) return new Te();
  if (e instanceof Te) return e;
  e = e.rgb();
  var t = e.r / 255, r = e.g / 255, n = e.b / 255, a = Math.min(t, r, n), o = Math.max(t, r, n), i = NaN, s = o - a, c = (o + a) / 2;
  if (s) {
    if (t === o) i = (r - n) / s + (r < n) * 6;
    else if (r === o) i = (n - t) / s + 2;
    else i = (t - r) / s + 4;
    s /= c < 0.5 ? o + a : 2 - o - a;
    i *= 60;
  } else {
    s = c > 0 && c < 1 ? 0 : i;
  }
  return new Te(i, s, c, e.opacity);
}
function Vo(e, t, r, n) {
  return arguments.length === 1 ? Bo(e) : new Te(e, t, r, n == null ? 1 : n);
}
function Te(e, t, r, n) {
  this.h = +e;
  this.s = +t;
  this.l = +r;
  this.opacity = +n;
}
Bt(Te, Vo, Rr(gt, {
  brighter(e) {
    e = e == null ? jt : Math.pow(jt, e);
    return new Te(this.h, this.s, this.l * e, this.opacity);
  },
  darker(e) {
    e = e == null ? dt : Math.pow(dt, e);
    return new Te(this.h, this.s, this.l * e, this.opacity);
  },
  rgb() {
    var e = this.h % 360 + (this.h < 0) * 360, t = isNaN(e) || isNaN(this.s) ? 0 : this.s, r = this.l, n = r + (r < 0.5 ? r : 1 - r) * t, a = 2 * r - n;
    return new se(
      Er(e >= 240 ? e - 240 : e + 120, a, n),
      Er(e, a, n),
      Er(e < 120 ? e + 240 : e - 120, a, n),
      this.opacity
    );
  },
  clamp() {
    return new Te(Wo(this.h), zt(this.s), zt(this.l), Zt(this.opacity));
  },
  displayable() {
    return (0 <= this.s && this.s <= 1 || isNaN(this.s)) && (0 <= this.l && this.l <= 1) && (0 <= this.opacity && this.opacity <= 1);
  },
  formatHsl() {
    const e = Zt(this.opacity);
    return `${e === 1 ? "hsl(" : "hsla("}${Wo(this.h)}, ${zt(this.s) * 100}%, ${zt(this.l) * 100}%${e === 1 ? ")" : `, ${e})`}`;
  }
}));
function Wo(e) {
  e = (e || 0) % 360;
  return e < 0 ? e + 360 : e;
}
function zt(e) {
  return Math.max(0, Math.min(1, e || 0));
}
function Er(e, t, r) {
  return (e < 60 ? t + (r - t) * e / 60 : e < 180 ? r : e < 240 ? t + (r - t) * (240 - e) / 60 : t) * 255;
}

// ../../node_modules/d3-interpolate/src/basis.js
function Ur(e, t, r, n, a) {
  var o = e * e, i = o * e;
  return ((1 - 3 * e + 3 * o - i) * t + (4 - 6 * o + 3 * i) * r + (1 + 3 * e + 3 * o - 3 * i) * n + i * a) / 6;
}
function zo(e) {
  var t = e.length - 1;
  return function(r) {
    var n = r <= 0 ? r = 0 : r >= 1 ? (r = 1, t - 1) : Math.floor(r * t), a = e[n], o = e[n + 1], i = n > 0 ? e[n - 1] : 2 * a - o, s = n < t - 1 ? e[n + 2] : 2 * o - a;
    return Ur((r - n / t) * t, i, a, o, s);
  };
}

// ../../node_modules/d3-interpolate/src/basisClosed.js
function jo(e) {
  var t = e.length;
  return function(r) {
    var n = Math.floor(((r %= 1) < 0 ? ++r : r) * t), a = e[(n + t - 1) % t], o = e[n % t], i = e[(n + 1) % t], s = e[(n + 2) % t];
    return Ur((r - n / t) * t, a, o, i, s);
  };
}

// ../../node_modules/d3-interpolate/src/constant.js
var ht = (e) => () => e;

// ../../node_modules/d3-interpolate/src/color.js
function xs(e, t) {
  return function(r) {
    return e + r * t;
  };
}
function ys(e, t, r) {
  return e = Math.pow(e, r), t = Math.pow(t, r) - e, r = 1 / r, function(n) {
    return Math.pow(e + n * t, r);
  };
}
function Zo(e) {
  return (e = +e) === 1 ? Gt : function(t, r) {
    return r - t ? ys(t, r, e) : ht(isNaN(t) ? r : t);
  };
}
function Gt(e, t) {
  var r = t - e;
  return r ? xs(e, r) : ht(isNaN(e) ? t : e);
}

// ../../node_modules/d3-interpolate/src/rgb.js
var Hr = function e(t) {
  var r = Zo(t);
  function n(a, o) {
    var i = r((a = nt(a)).r, (o = nt(o)).r), s = r(a.g, o.g), c = r(a.b, o.b), u = Gt(a.opacity, o.opacity);
    return function(l) {
      a.r = i(l);
      a.g = s(l);
      a.b = c(l);
      a.opacity = u(l);
      return a + "";
    };
  }
  n.gamma = e;
  return n;
}(1);
function Go(e) {
  return function(t) {
    var r = t.length, n = new Array(r), a = new Array(r), o = new Array(r), i, s;
    for (i = 0; i < r; ++i) {
      s = nt(t[i]);
      n[i] = s.r || 0;
      a[i] = s.g || 0;
      o[i] = s.b || 0;
    }
    n = e(n);
    a = e(a);
    o = e(o);
    s.opacity = 1;
    return function(c) {
      s.r = n(c);
      s.g = a(c);
      s.b = o(c);
      return s + "";
    };
  };
}
var vf = Go(zo);
var kf = Go(jo);

// ../../node_modules/d3-interpolate/src/numberArray.js
function Xo(e, t) {
  if (!t) t = [];
  var r = e ? Math.min(t.length, e.length) : 0, n = t.slice(), a;
  return function(o) {
    for (a = 0; a < r; ++a) n[a] = e[a] * (1 - o) + t[a] * o;
    return n;
  };
}
function qo(e) {
  return ArrayBuffer.isView(e) && !(e instanceof DataView);
}

// ../../node_modules/d3-interpolate/src/array.js
function Ko(e, t) {
  var r = t ? t.length : 0, n = e ? Math.min(r, e.length) : 0, a = new Array(n), o = new Array(r), i;
  for (i = 0; i < n; ++i) a[i] = Ke(e[i], t[i]);
  for (; i < r; ++i) o[i] = t[i];
  return function(s) {
    for (i = 0; i < n; ++i) o[i] = a[i](s);
    return o;
  };
}

// ../../node_modules/d3-interpolate/src/date.js
function Qo(e, t) {
  var r = /* @__PURE__ */ new Date();
  return e = +e, t = +t, function(n) {
    return r.setTime(e * (1 - n) + t * n), r;
  };
}

// ../../node_modules/d3-interpolate/src/number.js
function Le(e, t) {
  return e = +e, t = +t, function(r) {
    return e * (1 - r) + t * r;
  };
}

// ../../node_modules/d3-interpolate/src/object.js
function Jo(e, t) {
  var r = {}, n = {}, a;
  if (e === null || typeof e !== "object") e = {};
  if (t === null || typeof t !== "object") t = {};
  for (a in t) {
    if (a in e) {
      r[a] = Ke(e[a], t[a]);
    } else {
      n[a] = t[a];
    }
  }
  return function(o) {
    for (a in r) n[a] = r[a](o);
    return n;
  };
}

// ../../node_modules/d3-interpolate/src/string.js
var Br = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g;
var Wr = new RegExp(Br.source, "g");
function Ts(e) {
  return function() {
    return e;
  };
}
function Ms(e) {
  return function(t) {
    return e(t) + "";
  };
}
function ea(e, t) {
  var r = Br.lastIndex = Wr.lastIndex = 0, n, a, o, i = -1, s = [], c = [];
  e = e + "", t = t + "";
  while ((n = Br.exec(e)) && (a = Wr.exec(t))) {
    if ((o = a.index) > r) {
      o = t.slice(r, o);
      if (s[i]) s[i] += o;
      else s[++i] = o;
    }
    if ((n = n[0]) === (a = a[0])) {
      if (s[i]) s[i] += a;
      else s[++i] = a;
    } else {
      s[++i] = null;
      c.push({ i, x: Le(n, a) });
    }
    r = Wr.lastIndex;
  }
  if (r < t.length) {
    o = t.slice(r);
    if (s[i]) s[i] += o;
    else s[++i] = o;
  }
  return s.length < 2 ? c[0] ? Ms(c[0].x) : Ts(t) : (t = c.length, function(u) {
    for (var l = 0, f; l < t; ++l) s[(f = c[l]).i] = f.x(u);
    return s.join("");
  });
}

// ../../node_modules/d3-interpolate/src/value.js
function Ke(e, t) {
  var r = typeof t, n;
  return t == null || r === "boolean" ? ht(t) : (r === "number" ? Le : r === "string" ? (n = Fe(t)) ? (t = n, Hr) : ea : t instanceof Fe ? Hr : t instanceof Date ? Qo : qo(t) ? Xo : Array.isArray(t) ? Ko : typeof t.valueOf !== "function" && typeof t.toString !== "function" || isNaN(t) ? Jo : Le)(e, t);
}

// ../../node_modules/d3-interpolate/src/round.js
function Vr(e, t) {
  return e = +e, t = +t, function(r) {
    return Math.round(e * (1 - r) + t * r);
  };
}

// ../../node_modules/d3-scale/src/constant.js
function zr(e) {
  return function() {
    return e;
  };
}

// ../../node_modules/d3-scale/src/number.js
function ot(e) {
  return +e;
}

// ../../node_modules/d3-scale/src/continuous.js
var ta = [0, 1];
function at(e) {
  return e;
}
function jr(e, t) {
  return (t -= e = +e) ? function(r) {
    return (r - e) / t;
  } : zr(isNaN(t) ? NaN : 0.5);
}
function bs(e, t) {
  var r;
  if (e > t) r = e, e = t, t = r;
  return function(n) {
    return Math.max(e, Math.min(t, n));
  };
}
function Ss(e, t, r) {
  var n = e[0], a = e[1], o = t[0], i = t[1];
  if (a < n) n = jr(a, n), o = r(i, o);
  else n = jr(n, a), o = r(o, i);
  return function(s) {
    return o(n(s));
  };
}
function Ds(e, t, r) {
  var n = Math.min(e.length, t.length) - 1, a = new Array(n), o = new Array(n), i = -1;
  if (e[n] < e[0]) {
    e = e.slice().reverse();
    t = t.slice().reverse();
  }
  while (++i < n) {
    a[i] = jr(e[i], e[i + 1]);
    o[i] = r(t[i], t[i + 1]);
  }
  return function(s) {
    var c = Ar(e, s, 1, n) - 1;
    return o[c](a[c](s));
  };
}
function Xt(e, t) {
  return t.domain(e.domain()).range(e.range()).interpolate(e.interpolate()).clamp(e.clamp()).unknown(e.unknown());
}
function vs() {
  var e = ta, t = ta, r = Ke, n, a, o, i = at, s, c, u;
  function l() {
    var d = Math.min(e.length, t.length);
    if (i !== at) i = bs(e[0], e[d - 1]);
    s = d > 2 ? Ds : Ss;
    c = u = null;
    return f;
  }
  function f(d) {
    return d == null || isNaN(d = +d) ? o : (c || (c = s(e.map(n), t, r)))(n(i(d)));
  }
  f.invert = function(d) {
    return i(a((u || (u = s(t, e.map(n), Le)))(d)));
  };
  f.domain = function(d) {
    return arguments.length ? (e = Array.from(d, ot), l()) : e.slice();
  };
  f.range = function(d) {
    return arguments.length ? (t = Array.from(d), l()) : t.slice();
  };
  f.rangeRound = function(d) {
    return t = Array.from(d), r = Vr, l();
  };
  f.clamp = function(d) {
    return arguments.length ? (i = d ? true : at, l()) : i !== at;
  };
  f.interpolate = function(d) {
    return arguments.length ? (r = d, l()) : r;
  };
  f.unknown = function(d) {
    return arguments.length ? (o = d, f) : o;
  };
  return function(d, p) {
    n = d, a = p;
    return l();
  };
}
function xt() {
  return vs()(at, at);
}

// ../../node_modules/d3-format/src/formatDecimal.js
function ra(e) {
  return Math.abs(e = Math.round(e)) >= 1e21 ? e.toLocaleString("en").replace(/,/g, "") : e.toString(10);
}
function Qe(e, t) {
  if ((r = (e = t ? e.toExponential(t - 1) : e.toExponential()).indexOf("e")) < 0) return null;
  var r, n = e.slice(0, r);
  return [
    n.length > 1 ? n[0] + n.slice(2) : n,
    +e.slice(r + 1)
  ];
}

// ../../node_modules/d3-format/src/exponent.js
function we(e) {
  return e = Qe(Math.abs(e)), e ? e[1] : NaN;
}

// ../../node_modules/d3-format/src/formatGroup.js
function na(e, t) {
  return function(r, n) {
    var a = r.length, o = [], i = 0, s = e[0], c = 0;
    while (a > 0 && s > 0) {
      if (c + s + 1 > n) s = Math.max(1, n - c);
      o.push(r.substring(a -= s, a + s));
      if ((c += s + 1) > n) break;
      s = e[i = (i + 1) % e.length];
    }
    return o.reverse().join(t);
  };
}

// ../../node_modules/d3-format/src/formatNumerals.js
function oa(e) {
  return function(t) {
    return t.replace(/[0-9]/g, function(r) {
      return e[+r];
    });
  };
}

// ../../node_modules/d3-format/src/formatSpecifier.js
var ks = /^(?:(.)?([<>=^]))?([+\-( ])?([$#])?(0)?(\d+)?(,)?(\.\d+)?(~)?([a-z%])?$/i;
function Re(e) {
  if (!(t = ks.exec(e))) throw new Error("invalid format: " + e);
  var t;
  return new qt({
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
Re.prototype = qt.prototype;
function qt(e) {
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
qt.prototype.toString = function() {
  return this.fill + this.align + this.sign + this.symbol + (this.zero ? "0" : "") + (this.width === void 0 ? "" : Math.max(1, this.width | 0)) + (this.comma ? "," : "") + (this.precision === void 0 ? "" : "." + Math.max(0, this.precision | 0)) + (this.trim ? "~" : "") + this.type;
};

// ../../node_modules/d3-format/src/formatTrim.js
function aa(e) {
  e: for (var t = e.length, r = 1, n = -1, a; r < t; ++r) {
    switch (e[r]) {
      case ".":
        n = a = r;
        break;
      case "0":
        if (n === 0) n = r;
        a = r;
        break;
      default:
        if (!+e[r]) break e;
        if (n > 0) n = 0;
        break;
    }
  }
  return n > 0 ? e.slice(0, n) + e.slice(a + 1) : e;
}

// ../../node_modules/d3-format/src/formatPrefixAuto.js
var Zr;
function ia(e, t) {
  var r = Qe(e, t);
  if (!r) return e + "";
  var n = r[0], a = r[1], o = a - (Zr = Math.max(-8, Math.min(8, Math.floor(a / 3))) * 3) + 1, i = n.length;
  return o === i ? n : o > i ? n + new Array(o - i + 1).join("0") : o > 0 ? n.slice(0, o) + "." + n.slice(o) : "0." + new Array(1 - o).join("0") + Qe(e, Math.max(0, t + o - 1))[0];
}

// ../../node_modules/d3-format/src/formatRounded.js
function Gr(e, t) {
  var r = Qe(e, t);
  if (!r) return e + "";
  var n = r[0], a = r[1];
  return a < 0 ? "0." + new Array(-a).join("0") + n : n.length > a + 1 ? n.slice(0, a + 1) + "." + n.slice(a + 1) : n + new Array(a - n.length + 2).join("0");
}

// ../../node_modules/d3-format/src/formatTypes.js
var Xr = {
  "%": (e, t) => (e * 100).toFixed(t),
  "b": (e) => Math.round(e).toString(2),
  "c": (e) => e + "",
  "d": ra,
  "e": (e, t) => e.toExponential(t),
  "f": (e, t) => e.toFixed(t),
  "g": (e, t) => e.toPrecision(t),
  "o": (e) => Math.round(e).toString(8),
  "p": (e, t) => Gr(e * 100, t),
  "r": Gr,
  "s": ia,
  "X": (e) => Math.round(e).toString(16).toUpperCase(),
  "x": (e) => Math.round(e).toString(16)
};

// ../../node_modules/d3-format/src/identity.js
function qr(e) {
  return e;
}

// ../../node_modules/d3-format/src/locale.js
var sa = Array.prototype.map;
var ua = ["y", "z", "a", "f", "p", "n", "\xB5", "m", "", "k", "M", "G", "T", "P", "E", "Z", "Y"];
function ca(e) {
  var t = e.grouping === void 0 || e.thousands === void 0 ? qr : na(sa.call(e.grouping, Number), e.thousands + ""), r = e.currency === void 0 ? "" : e.currency[0] + "", n = e.currency === void 0 ? "" : e.currency[1] + "", a = e.decimal === void 0 ? "." : e.decimal + "", o = e.numerals === void 0 ? qr : oa(sa.call(e.numerals, String)), i = e.percent === void 0 ? "%" : e.percent + "", s = e.minus === void 0 ? "\u2212" : e.minus + "", c = e.nan === void 0 ? "NaN" : e.nan + "";
  function u(f) {
    f = Re(f);
    var d = f.fill, p = f.align, m = f.sign, T = f.symbol, b = f.zero, D = f.width, w = f.comma, O = f.precision, P = f.trim, L = f.type;
    if (L === "n") w = true, L = "g";
    else if (!Xr[L]) O === void 0 && (O = 12), P = true, L = "g";
    if (b || d === "0" && p === "=") b = true, d = "0", p = "=";
    var x = T === "$" ? r : T === "#" && /[boxX]/.test(L) ? "0" + L.toLowerCase() : "", Y = T === "$" ? n : /[%p]/.test(L) ? i : "";
    var R = Xr[L], $ = /[defgprs%]/.test(L);
    O = O === void 0 ? 6 : /[gprs]/.test(L) ? Math.max(1, Math.min(21, O)) : Math.max(0, Math.min(20, O));
    function B(_) {
      var k = x, h = Y, y, v, M;
      if (L === "c") {
        h = R(_) + h;
        _ = "";
      } else {
        _ = +_;
        var I = _ < 0 || 1 / _ < 0;
        _ = isNaN(_) ? c : R(Math.abs(_), O);
        if (P) _ = aa(_);
        if (I && +_ === 0 && m !== "+") I = false;
        k = (I ? m === "(" ? m : s : m === "-" || m === "(" ? "" : m) + k;
        h = (L === "s" ? ua[8 + Zr / 3] : "") + h + (I && m === "(" ? ")" : "");
        if ($) {
          y = -1, v = _.length;
          while (++y < v) {
            if (M = _.charCodeAt(y), 48 > M || M > 57) {
              h = (M === 46 ? a + _.slice(y + 1) : _.slice(y)) + h;
              _ = _.slice(0, y);
              break;
            }
          }
        }
      }
      if (w && !b) _ = t(_, Infinity);
      var C = k.length + _.length + h.length, A = C < D ? new Array(D - C + 1).join(d) : "";
      if (w && b) _ = t(A + _, A.length ? D - h.length : Infinity), A = "";
      switch (p) {
        case "<":
          _ = k + _ + h + A;
          break;
        case "=":
          _ = k + A + _ + h;
          break;
        case "^":
          _ = A.slice(0, C = A.length >> 1) + k + _ + h + A.slice(C);
          break;
        default:
          _ = A + k + _ + h;
          break;
      }
      return o(_);
    }
    B.toString = function() {
      return f + "";
    };
    return B;
  }
  function l(f, d) {
    var p = u((f = Re(f), f.type = "f", f)), m = Math.max(-8, Math.min(8, Math.floor(we(d) / 3))) * 3, T = Math.pow(10, -m), b = ua[8 + m / 3];
    return function(D) {
      return p(T * D) + b;
    };
  }
  return {
    format: u,
    formatPrefix: l
  };
}

// ../../node_modules/d3-format/src/defaultLocale.js
var Kt;
var Qt;
var Jt;
Kr({
  thousands: ",",
  grouping: [3],
  currency: ["$", ""]
});
function Kr(e) {
  Kt = ca(e);
  Qt = Kt.format;
  Jt = Kt.formatPrefix;
  return Kt;
}

// ../../node_modules/d3-format/src/precisionFixed.js
function Qr(e) {
  return Math.max(0, -we(Math.abs(e)));
}

// ../../node_modules/d3-format/src/precisionPrefix.js
function Jr(e, t) {
  return Math.max(0, Math.max(-8, Math.min(8, Math.floor(we(t) / 3))) * 3 - we(Math.abs(e)));
}

// ../../node_modules/d3-format/src/precisionRound.js
function en(e, t) {
  e = Math.abs(e), t = Math.abs(t) - e;
  return Math.max(0, we(t) - we(e)) + 1;
}

// ../../node_modules/d3-scale/src/tickFormat.js
function tn(e, t, r, n) {
  var a = tt(e, t, r), o;
  n = Re(n == null ? ",f" : n);
  switch (n.type) {
    case "s": {
      var i = Math.max(Math.abs(e), Math.abs(t));
      if (n.precision == null && !isNaN(o = Jr(a, i))) n.precision = o;
      return Jt(n, i);
    }
    case "":
    case "e":
    case "g":
    case "p":
    case "r": {
      if (n.precision == null && !isNaN(o = en(a, Math.max(Math.abs(e), Math.abs(t))))) n.precision = o - (n.type === "e");
      break;
    }
    case "f":
    case "%": {
      if (n.precision == null && !isNaN(o = Qr(a))) n.precision = o - (n.type === "%") * 2;
      break;
    }
  }
  return Qt(n);
}

// ../../node_modules/d3-scale/src/linear.js
function rn(e) {
  var t = e.domain;
  e.ticks = function(r) {
    var n = t();
    return Rt(n[0], n[n.length - 1], r == null ? 10 : r);
  };
  e.tickFormat = function(r, n) {
    var a = t();
    return tn(a[0], a[a.length - 1], r == null ? 10 : r, n);
  };
  e.nice = function(r) {
    if (r == null) r = 10;
    var n = t();
    var a = 0;
    var o = n.length - 1;
    var i = n[a];
    var s = n[o];
    var c;
    var u;
    var l = 10;
    if (s < i) {
      u = i, i = s, s = u;
      u = a, a = o, o = u;
    }
    while (l-- > 0) {
      u = lt(i, s, r);
      if (u === c) {
        n[a] = i;
        n[o] = s;
        return t(n);
      } else if (u > 0) {
        i = Math.floor(i / u) * u;
        s = Math.ceil(s / u) * u;
      } else if (u < 0) {
        i = Math.ceil(i * u) / u;
        s = Math.floor(s * u) / u;
      } else {
        break;
      }
      c = u;
    }
    return e;
  };
  return e;
}
function Ee() {
  var e = xt();
  e.copy = function() {
    return Xt(e, Ee());
  };
  Ye.apply(e, arguments);
  return rn(e);
}

// ../../node_modules/d3-scale/src/identity.js
function yt(e) {
  var t;
  function r(n) {
    return n == null || isNaN(n = +n) ? t : n;
  }
  r.invert = r;
  r.domain = r.range = function(n) {
    return arguments.length ? (e = Array.from(n, ot), r) : e.slice();
  };
  r.unknown = function(n) {
    return arguments.length ? (t = n, r) : t;
  };
  r.copy = function() {
    return yt(e).unknown(t);
  };
  e = arguments.length ? Array.from(e, ot) : [0, 1];
  return rn(r);
}

// ../../node_modules/d3-scale/src/nice.js
function nn(e, t) {
  e = e.slice();
  var r = 0, n = e.length - 1, a = e[r], o = e[n], i;
  if (o < a) {
    i = r, r = n, n = i;
    i = a, a = o, o = i;
  }
  e[r] = t.floor(a);
  e[n] = t.ceil(o);
  return e;
}

// ../../node_modules/d3-time-format/src/locale.js
function on(e) {
  if (0 <= e.y && e.y < 100) {
    var t = new Date(-1, e.m, e.d, e.H, e.M, e.S, e.L);
    t.setFullYear(e.y);
    return t;
  }
  return new Date(e.y, e.m, e.d, e.H, e.M, e.S, e.L);
}
function an(e) {
  if (0 <= e.y && e.y < 100) {
    var t = new Date(Date.UTC(-1, e.m, e.d, e.H, e.M, e.S, e.L));
    t.setUTCFullYear(e.y);
    return t;
  }
  return new Date(Date.UTC(e.y, e.m, e.d, e.H, e.M, e.S, e.L));
}
function Tt(e, t, r) {
  return { y: e, m: t, d: r, H: 0, M: 0, S: 0, L: 0 };
}
function sn(e) {
  var t = e.dateTime, r = e.date, n = e.time, a = e.periods, o = e.days, i = e.shortDays, s = e.months, c = e.shortMonths;
  var u = Mt(a), l = bt(a), f = Mt(o), d = bt(o), p = Mt(i), m = bt(i), T = Mt(s), b = bt(s), D = Mt(c), w = bt(c);
  var O = {
    "a": I,
    "A": C,
    "b": A,
    "B": H,
    "c": null,
    "d": ga,
    "e": ga,
    "f": Gs,
    "g": ou,
    "G": iu,
    "H": zs,
    "I": js,
    "j": Zs,
    "L": Ma,
    "m": Xs,
    "M": qs,
    "p": V,
    "q": Z,
    "Q": ya,
    "s": Ta,
    "S": Ks,
    "u": Qs,
    "U": Js,
    "V": eu,
    "w": tu,
    "W": ru,
    "x": null,
    "X": null,
    "y": nu,
    "Y": au,
    "Z": su,
    "%": xa
  };
  var P = {
    "a": ne,
    "A": Me,
    "b": me,
    "B": Ie,
    "c": null,
    "d": ha,
    "e": ha,
    "f": fu,
    "g": bu,
    "G": Du,
    "H": uu,
    "I": cu,
    "j": lu,
    "L": Sa,
    "m": mu,
    "M": du,
    "p": le,
    "q": G,
    "Q": ya,
    "s": Ta,
    "S": pu,
    "u": gu,
    "U": hu,
    "V": xu,
    "w": yu,
    "W": Tu,
    "x": null,
    "X": null,
    "y": Mu,
    "Y": Su,
    "Z": vu,
    "%": xa
  };
  var L = {
    "a": B,
    "A": _,
    "b": k,
    "B": h,
    "c": y,
    "d": da,
    "e": da,
    "f": Hs,
    "g": ma,
    "G": fa,
    "H": pa,
    "I": pa,
    "j": Ls,
    "L": Us,
    "m": Fs,
    "M": Rs,
    "p": $,
    "q": $s,
    "Q": Bs,
    "s": Vs,
    "S": Es,
    "u": _s,
    "U": As,
    "V": Ps,
    "w": Cs,
    "W": Ns,
    "x": v,
    "X": M,
    "y": ma,
    "Y": fa,
    "Z": Ys,
    "%": Ws
  };
  O.x = x(r, O);
  O.X = x(n, O);
  O.c = x(t, O);
  P.x = x(r, P);
  P.X = x(n, P);
  P.c = x(t, P);
  function x(S, N) {
    return function(F) {
      var g = [], X = -1, U = 0, J = S.length, ee, de, or;
      if (!(F instanceof Date)) F = /* @__PURE__ */ new Date(+F);
      while (++X < J) {
        if (S.charCodeAt(X) === 37) {
          g.push(S.slice(U, X));
          if ((de = la[ee = S.charAt(++X)]) != null) ee = S.charAt(++X);
          else de = ee === "e" ? " " : "0";
          if (or = N[ee]) ee = or(F, de);
          g.push(ee);
          U = X + 1;
        }
      }
      g.push(S.slice(U, X));
      return g.join("");
    };
  }
  function Y(S, N) {
    return function(F) {
      var g = Tt(1900, void 0, 1), X = R(g, S, F += "", 0), U, J;
      if (X != F.length) return null;
      if ("Q" in g) return new Date(g.Q);
      if ("s" in g) return new Date(g.s * 1e3 + ("L" in g ? g.L : 0));
      if (N && !("Z" in g)) g.Z = 0;
      if ("p" in g) g.H = g.H % 12 + g.p * 12;
      if (g.m === void 0) g.m = "q" in g ? g.q : 0;
      if ("V" in g) {
        if (g.V < 1 || g.V > 53) return null;
        if (!("w" in g)) g.w = 1;
        if ("Z" in g) {
          U = an(Tt(g.y, 0, 1)), J = U.getUTCDay();
          U = J > 4 || J === 0 ? Je.ceil(U) : Je(U);
          U = Be.offset(U, (g.V - 1) * 7);
          g.y = U.getUTCFullYear();
          g.m = U.getUTCMonth();
          g.d = U.getUTCDate() + (g.w + 6) % 7;
        } else {
          U = on(Tt(g.y, 0, 1)), J = U.getDay();
          U = J > 4 || J === 0 ? De.ceil(U) : De(U);
          U = re.offset(U, (g.V - 1) * 7);
          g.y = U.getFullYear();
          g.m = U.getMonth();
          g.d = U.getDate() + (g.w + 6) % 7;
        }
      } else if ("W" in g || "U" in g) {
        if (!("w" in g)) g.w = "u" in g ? g.u % 7 : "W" in g ? 1 : 0;
        J = "Z" in g ? an(Tt(g.y, 0, 1)).getUTCDay() : on(Tt(g.y, 0, 1)).getDay();
        g.m = 0;
        g.d = "W" in g ? (g.w + 6) % 7 + g.W * 7 - (J + 5) % 7 : g.w + g.U * 7 - (J + 6) % 7;
      }
      if ("Z" in g) {
        g.H += g.Z / 100 | 0;
        g.M += g.Z % 100;
        return an(g);
      }
      return on(g);
    };
  }
  function R(S, N, F, g) {
    var X = 0, U = N.length, J = F.length, ee, de;
    while (X < U) {
      if (g >= J) return -1;
      ee = N.charCodeAt(X++);
      if (ee === 37) {
        ee = N.charAt(X++);
        de = L[ee in la ? N.charAt(X++) : ee];
        if (!de || (g = de(S, F, g)) < 0) return -1;
      } else if (ee != F.charCodeAt(g++)) {
        return -1;
      }
    }
    return g;
  }
  function $(S, N, F) {
    var g = u.exec(N.slice(F));
    return g ? (S.p = l.get(g[0].toLowerCase()), F + g[0].length) : -1;
  }
  function B(S, N, F) {
    var g = p.exec(N.slice(F));
    return g ? (S.w = m.get(g[0].toLowerCase()), F + g[0].length) : -1;
  }
  function _(S, N, F) {
    var g = f.exec(N.slice(F));
    return g ? (S.w = d.get(g[0].toLowerCase()), F + g[0].length) : -1;
  }
  function k(S, N, F) {
    var g = D.exec(N.slice(F));
    return g ? (S.m = w.get(g[0].toLowerCase()), F + g[0].length) : -1;
  }
  function h(S, N, F) {
    var g = T.exec(N.slice(F));
    return g ? (S.m = b.get(g[0].toLowerCase()), F + g[0].length) : -1;
  }
  function y(S, N, F) {
    return R(S, t, N, F);
  }
  function v(S, N, F) {
    return R(S, r, N, F);
  }
  function M(S, N, F) {
    return R(S, n, N, F);
  }
  function I(S) {
    return i[S.getDay()];
  }
  function C(S) {
    return o[S.getDay()];
  }
  function A(S) {
    return c[S.getMonth()];
  }
  function H(S) {
    return s[S.getMonth()];
  }
  function V(S) {
    return a[+(S.getHours() >= 12)];
  }
  function Z(S) {
    return 1 + ~~(S.getMonth() / 3);
  }
  function ne(S) {
    return i[S.getUTCDay()];
  }
  function Me(S) {
    return o[S.getUTCDay()];
  }
  function me(S) {
    return c[S.getUTCMonth()];
  }
  function Ie(S) {
    return s[S.getUTCMonth()];
  }
  function le(S) {
    return a[+(S.getUTCHours() >= 12)];
  }
  function G(S) {
    return 1 + ~~(S.getUTCMonth() / 3);
  }
  return {
    format: function(S) {
      var N = x(S += "", O);
      N.toString = function() {
        return S;
      };
      return N;
    },
    parse: function(S) {
      var N = Y(S += "", false);
      N.toString = function() {
        return S;
      };
      return N;
    },
    utcFormat: function(S) {
      var N = x(S += "", P);
      N.toString = function() {
        return S;
      };
      return N;
    },
    utcParse: function(S) {
      var N = Y(S += "", true);
      N.toString = function() {
        return S;
      };
      return N;
    }
  };
}
var la = { "-": "", "_": " ", "0": "0" };
var Q = /^\s*\d+/;
var ws = /^%/;
var Is = /[\\^$*+?|[\]().{}]/g;
function E(e, t, r) {
  var n = e < 0 ? "-" : "", a = (n ? -e : e) + "", o = a.length;
  return n + (o < r ? new Array(r - o + 1).join(t) + a : a);
}
function Os(e) {
  return e.replace(Is, "\\$&");
}
function Mt(e) {
  return new RegExp("^(?:" + e.map(Os).join("|") + ")", "i");
}
function bt(e) {
  return new Map(e.map((t, r) => [t.toLowerCase(), r]));
}
function Cs(e, t, r) {
  var n = Q.exec(t.slice(r, r + 1));
  return n ? (e.w = +n[0], r + n[0].length) : -1;
}
function _s(e, t, r) {
  var n = Q.exec(t.slice(r, r + 1));
  return n ? (e.u = +n[0], r + n[0].length) : -1;
}
function As(e, t, r) {
  var n = Q.exec(t.slice(r, r + 2));
  return n ? (e.U = +n[0], r + n[0].length) : -1;
}
function Ps(e, t, r) {
  var n = Q.exec(t.slice(r, r + 2));
  return n ? (e.V = +n[0], r + n[0].length) : -1;
}
function Ns(e, t, r) {
  var n = Q.exec(t.slice(r, r + 2));
  return n ? (e.W = +n[0], r + n[0].length) : -1;
}
function fa(e, t, r) {
  var n = Q.exec(t.slice(r, r + 4));
  return n ? (e.y = +n[0], r + n[0].length) : -1;
}
function ma(e, t, r) {
  var n = Q.exec(t.slice(r, r + 2));
  return n ? (e.y = +n[0] + (+n[0] > 68 ? 1900 : 2e3), r + n[0].length) : -1;
}
function Ys(e, t, r) {
  var n = /^(Z)|([+-]\d\d)(?::?(\d\d))?/.exec(t.slice(r, r + 6));
  return n ? (e.Z = n[1] ? 0 : -(n[2] + (n[3] || "00")), r + n[0].length) : -1;
}
function $s(e, t, r) {
  var n = Q.exec(t.slice(r, r + 1));
  return n ? (e.q = n[0] * 3 - 3, r + n[0].length) : -1;
}
function Fs(e, t, r) {
  var n = Q.exec(t.slice(r, r + 2));
  return n ? (e.m = n[0] - 1, r + n[0].length) : -1;
}
function da(e, t, r) {
  var n = Q.exec(t.slice(r, r + 2));
  return n ? (e.d = +n[0], r + n[0].length) : -1;
}
function Ls(e, t, r) {
  var n = Q.exec(t.slice(r, r + 3));
  return n ? (e.m = 0, e.d = +n[0], r + n[0].length) : -1;
}
function pa(e, t, r) {
  var n = Q.exec(t.slice(r, r + 2));
  return n ? (e.H = +n[0], r + n[0].length) : -1;
}
function Rs(e, t, r) {
  var n = Q.exec(t.slice(r, r + 2));
  return n ? (e.M = +n[0], r + n[0].length) : -1;
}
function Es(e, t, r) {
  var n = Q.exec(t.slice(r, r + 2));
  return n ? (e.S = +n[0], r + n[0].length) : -1;
}
function Us(e, t, r) {
  var n = Q.exec(t.slice(r, r + 3));
  return n ? (e.L = +n[0], r + n[0].length) : -1;
}
function Hs(e, t, r) {
  var n = Q.exec(t.slice(r, r + 6));
  return n ? (e.L = Math.floor(n[0] / 1e3), r + n[0].length) : -1;
}
function Ws(e, t, r) {
  var n = ws.exec(t.slice(r, r + 1));
  return n ? r + n[0].length : -1;
}
function Bs(e, t, r) {
  var n = Q.exec(t.slice(r));
  return n ? (e.Q = +n[0], r + n[0].length) : -1;
}
function Vs(e, t, r) {
  var n = Q.exec(t.slice(r));
  return n ? (e.s = +n[0], r + n[0].length) : -1;
}
function ga(e, t) {
  return E(e.getDate(), t, 2);
}
function zs(e, t) {
  return E(e.getHours(), t, 2);
}
function js(e, t) {
  return E(e.getHours() % 12 || 12, t, 2);
}
function Zs(e, t) {
  return E(1 + re.count(q(e), e), t, 3);
}
function Ma(e, t) {
  return E(e.getMilliseconds(), t, 3);
}
function Gs(e, t) {
  return Ma(e, t) + "000";
}
function Xs(e, t) {
  return E(e.getMonth() + 1, t, 2);
}
function qs(e, t) {
  return E(e.getMinutes(), t, 2);
}
function Ks(e, t) {
  return E(e.getSeconds(), t, 2);
}
function Qs(e) {
  var t = e.getDay();
  return t === 0 ? 7 : t;
}
function Js(e, t) {
  return E(xe.count(q(e) - 1, e), t, 2);
}
function ba(e) {
  var t = e.getDay();
  return t >= 4 || t === 0 ? ve(e) : ve.ceil(e);
}
function eu(e, t) {
  e = ba(e);
  return E(ve.count(q(e), e) + (q(e).getDay() === 4), t, 2);
}
function tu(e) {
  return e.getDay();
}
function ru(e, t) {
  return E(De.count(q(e) - 1, e), t, 2);
}
function nu(e, t) {
  return E(e.getFullYear() % 100, t, 2);
}
function ou(e, t) {
  e = ba(e);
  return E(e.getFullYear() % 100, t, 2);
}
function au(e, t) {
  return E(e.getFullYear() % 1e4, t, 4);
}
function iu(e, t) {
  var r = e.getDay();
  e = r >= 4 || r === 0 ? ve(e) : ve.ceil(e);
  return E(e.getFullYear() % 1e4, t, 4);
}
function su(e) {
  var t = e.getTimezoneOffset();
  return (t > 0 ? "-" : (t *= -1, "+")) + E(t / 60 | 0, "0", 2) + E(t % 60, "0", 2);
}
function ha(e, t) {
  return E(e.getUTCDate(), t, 2);
}
function uu(e, t) {
  return E(e.getUTCHours(), t, 2);
}
function cu(e, t) {
  return E(e.getUTCHours() % 12 || 12, t, 2);
}
function lu(e, t) {
  return E(1 + Be.count(ye(e), e), t, 3);
}
function Sa(e, t) {
  return E(e.getUTCMilliseconds(), t, 3);
}
function fu(e, t) {
  return Sa(e, t) + "000";
}
function mu(e, t) {
  return E(e.getUTCMonth() + 1, t, 2);
}
function du(e, t) {
  return E(e.getUTCMinutes(), t, 2);
}
function pu(e, t) {
  return E(e.getUTCSeconds(), t, 2);
}
function gu(e) {
  var t = e.getUTCDay();
  return t === 0 ? 7 : t;
}
function hu(e, t) {
  return E(je.count(ye(e) - 1, e), t, 2);
}
function Da(e) {
  var t = e.getUTCDay();
  return t >= 4 || t === 0 ? Ne(e) : Ne.ceil(e);
}
function xu(e, t) {
  e = Da(e);
  return E(Ne.count(ye(e), e) + (ye(e).getUTCDay() === 4), t, 2);
}
function yu(e) {
  return e.getUTCDay();
}
function Tu(e, t) {
  return E(Je.count(ye(e) - 1, e), t, 2);
}
function Mu(e, t) {
  return E(e.getUTCFullYear() % 100, t, 2);
}
function bu(e, t) {
  e = Da(e);
  return E(e.getUTCFullYear() % 100, t, 2);
}
function Su(e, t) {
  return E(e.getUTCFullYear() % 1e4, t, 4);
}
function Du(e, t) {
  var r = e.getUTCDay();
  e = r >= 4 || r === 0 ? Ne(e) : Ne.ceil(e);
  return E(e.getUTCFullYear() % 1e4, t, 4);
}
function vu() {
  return "+0000";
}
function xa() {
  return "%";
}
function ya(e) {
  return +e;
}
function Ta(e) {
  return Math.floor(+e / 1e3);
}

// ../../node_modules/d3-time-format/src/defaultLocale.js
var it;
var er;
var va;
var ka;
var wa;
un({
  dateTime: "%x, %X",
  date: "%-m/%-d/%Y",
  time: "%-I:%M:%S %p",
  periods: ["AM", "PM"],
  days: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
  shortDays: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
  months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
  shortMonths: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
});
function un(e) {
  it = sn(e);
  er = it.format;
  va = it.parse;
  ka = it.utcFormat;
  wa = it.utcParse;
  return it;
}

// ../../node_modules/d3-scale/src/time.js
function ku(e) {
  return new Date(e);
}
function wu(e) {
  return e instanceof Date ? +e : +/* @__PURE__ */ new Date(+e);
}
function Ia(e, t, r, n, a, o, i, s, c, u) {
  var l = xt(), f = l.invert, d = l.domain;
  var p = u(".%L"), m = u(":%S"), T = u("%I:%M"), b = u("%I %p"), D = u("%a %d"), w = u("%b %d"), O = u("%B"), P = u("%Y");
  function L(x) {
    return (c(x) < x ? p : s(x) < x ? m : i(x) < x ? T : o(x) < x ? b : n(x) < x ? a(x) < x ? D : w : r(x) < x ? O : P)(x);
  }
  l.invert = function(x) {
    return new Date(f(x));
  };
  l.domain = function(x) {
    return arguments.length ? d(Array.from(x, wu)) : d().map(ku);
  };
  l.ticks = function(x) {
    var Y = d();
    return e(Y[0], Y[Y.length - 1], x == null ? 10 : x);
  };
  l.tickFormat = function(x, Y) {
    return Y == null ? L : u(Y);
  };
  l.nice = function(x) {
    var Y = d();
    if (!x || typeof x.range !== "function") x = t(Y[0], Y[Y.length - 1], x == null ? 10 : x);
    return x ? d(nn(Y, x)) : l;
  };
  l.copy = function() {
    return Xt(l, Ia(e, t, r, n, a, o, i, s, c, u));
  };
  return l;
}
function tr() {
  return Ye.apply(Ia(Pr, Nr, q, ce, xe, re, Ae, _e, Se, er).domain([new Date(2e3, 0, 1), new Date(2e3, 0, 2)]), arguments);
}

// src/charts/utils/scales/scale-types/colorScale.ts
function Iu(e, t) {
  const r = new Set(t);
  const n = t.map((o) => e[o]);
  const a = e.filter((o, i) => !r.has(i));
  return [...n, ...a];
}
var rr = (e, t, r) => {
  const n = e.type === "comparison" || e.type === "pie";
  const { palette: a, customOrder: o } = Pn(
    e,
    t,
    r
  );
  const i = e.fields.filter((b) => !b.taxonomy?.isPrimary).map((b) => b.id ?? "");
  const s = e.design?.seriesOptions?.emphasize ?? [];
  const c = i.filter(
    (b) => !s.includes(b)
  );
  const u = e.design?.seriesOptions?.deemphasisMode ?? "opacity";
  const l = e.design?.seriesOptions?.colorOverrides;
  const f = Oa(e);
  const d = $e().domain(c).range(
    r === "light" ? [st, _n] : [ut, An]
  );
  const p = e.data.map((b, D) => D.toString());
  const m = !n ? i : p;
  const T = (b) => {
    const D = r === "light" ? st : ut;
    let w = a.concat(
      Array(Math.max(m.length - a.length, 0)).fill(D)
    );
    if (o) {
      w = Iu(w, o);
    }
    const O = $e().domain(m).range(w);
    const P = f[r][b];
    if (P) {
      return P;
    }
    if (l && l.length > 0) {
      const L = l.find((x) => x.seriesId === b);
      if (L) {
        return a[L.paletteIndex];
      } else {
        return O(b);
      }
    } else {
      return O(b);
    }
  };
  if (s.length > 0) {
    const b = (D) => {
      if (s.includes(D)) {
        return T(D);
      } else {
        if (c.length <= 1) {
          return r === "light" ? st : ut;
        } else if (c.length === 2) {
          return d(D);
        } else {
          if (u === "opacity") {
            return Nn(
              T(D),
              r
            );
          } else {
            return r === "light" ? st : ut;
          }
        }
      }
    };
    b.domain = () => i;
    b.range = () => a;
    T.domain = () => i;
    T.range = () => a;
    return {
      scale: b,
      type: "color"
    };
  } else {
    return {
      scale: T,
      type: "color"
    };
  }
};

// src/charts/utils/scales/scale-info-calculators/comparisonScaleCalculator.ts
var Ou = ({
  chartData: e,
  width: t,
  height: r
}) => {
  const n = 2;
  let a = 0;
  const o = Math.min(t / 2, r);
  const i = Xn(e);
  const s = i?.[0];
  if (s) {
    const u = s.data?.slice(0, n) ?? [];
    const l = u.map((f) => {
      const d = +f;
      return isNaN(d) || d === null || d === void 0 ? 0 : d;
    }).map((f) => Math.sqrt(f));
    a = Math.max(...l);
  }
  const c = (u) => {
    return Ee([0, a], [0, o])(Math.sqrt(u));
  };
  c.domain = () => {
    return [0, a];
  };
  c.range = () => {
    return [0, o];
  };
  return {
    scale: c,
    type: "numeric"
  };
};
var Ca = ({
  chartData: e,
  width: t,
  height: r,
  options: n
}) => {
  const a = Ou({
    chartData: e,
    width: t,
    height: r
  });
  const o = rr(
    e,
    n.isTerminalClient ?? false,
    n.variant ?? "light"
  );
  return {
    primaryScale: {
      scale: a,
      orientation: "horizontal",
      ticks: [],
      tickLength: 0,
      textShift: 0
    },
    // @ts-ignore
    colorScale: o,
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

// src/charts/utils/text-annotation-utils.ts
var _a = 80;
var Aa = 14;
var Cu = 4;
var _u = 376;
var z = Cu + 4;
var Pa = (e, t, r, n, a, o) => {
  const i = e?.annotations?.textAnnotations;
  const s = e?.fields?.find(
    (u) => u.taxonomy?.isPrimary === true
  );
  const c = e?.axis?.primary?.preserveOrder;
  if (!i || !r || !n) return [];
  return i.filter((u) => {
    return !u.hideOnMobile ? true : o > _u;
  }).map((u) => {
    let {
      text: l,
      seriesId: f,
      primaryAxisPosition: d,
      xOffset: p,
      yOffset: m,
      orientation: T
    } = u;
    if (!f || !d) {
      return null;
    }
    if (typeof p !== "number") {
      p = 0;
    }
    if (typeof m !== "number") {
      m = 0;
    }
    const b = t?.[d]?.[f];
    if (!b) {
      return null;
    }
    const D = r.type === "time" ? oe(
      d,
      ae[r.fieldType] ?? void 0,
      ie(
        s,
        d,
        c
      )
    ) : d;
    const w = {
      x: r.type !== "band" ? r.scale(D) : r.scale?.(
        D
      ) ?? 0 + r.scale.bandwidth() / 2,
      y: n.scale(b)
    };
    const O = wt({
      text: l,
      width: _a,
      fontSize: `${Aa}px`,
      fontFamily: fe(a.isTerminalClient ?? false)
    });
    const P = Math.min(
      K(
        l,
        fe(a.isTerminalClient ?? false),
        `${Aa}px`
      ),
      _a
    );
    switch (T) {
      case "top":
        return {
          maxX: w.x + P / 2 + p,
          maxY: w.y + m - z,
          minX: w.x - P / 2 + p,
          minY: w.y + m - O - z
        };
      case "bottom":
        return {
          maxX: w.x + P / 2 + p,
          maxY: w.y + m + O + z,
          minX: w.x - P / 2 + p,
          minY: w.y + m + z
        };
      case "left":
        return {
          maxX: w.x + p - z,
          maxY: w.y + O / 2 + m,
          minX: w.x + p - P - z,
          minY: w.y - O / 2 + m
        };
      case "right":
        return {
          maxX: w.x + p + P + z,
          maxY: w.y + O / 2 + m,
          minX: w.x + p + z,
          minY: w.y - O / 2 + m
        };
      case "rightTop":
        return {
          maxX: w.x + P + p + z,
          maxY: w.y + m - z,
          minX: w.x + p + z,
          minY: w.y + m - O - z
        };
      case "rightBottom":
        return {
          maxX: w.x + P + p + z,
          maxY: w.y + m + O + z,
          minX: w.x + p + z,
          minY: w.y + m - z
        };
      case "leftTop":
        return {
          maxX: w.x + p + z,
          maxY: w.y + m - z,
          minX: w.x + p - P - z,
          minY: w.y + m - O - z
        };
      case "leftBottom":
        return {
          maxX: w.x + p - z,
          maxY: w.y + m + O + z,
          minX: w.x + p - P - z,
          minY: w.y + m + z
        };
      default:
        return null;
    }
  }).filter((u) => u !== null);
};
var Na = (e) => {
  if (e.length === 0) {
    return { minX: 0, maxX: 0, minY: 0, maxY: 0 };
  }
  const t = Math.min(...e.map((o) => o.minX));
  const r = Math.max(...e.map((o) => o.maxX));
  const n = Math.min(...e.map((o) => o.minY));
  const a = Math.max(...e.map((o) => o.maxY));
  return { minX: t, maxX: r, minY: n, maxY: a };
};
var Ya = ({
  bbox: e,
  width: t,
  height: r
}) => {
  if (!e) {
    return { top: 0, right: 0, bottom: 0, left: 0 };
  }
  const n = Math.max(0, -e.minY);
  const a = Math.max(0, e.maxY - r);
  const o = Math.max(0, e.maxX - t);
  const i = Math.max(0, -e.minX);
  return { top: n, right: o, bottom: a, left: i };
};

// src/charts/utils/tooltip/tooltip-utils.ts
var Ue = 10;
var Nd = ({
  width: e,
  height: t,
  tooltipPositionPx: r
}) => {
  const n = r.x <= e / 2 ? "left" : "right";
  const a = r.y <= t / 2 ? "top" : "bottom";
  if (n === "left" && a === "top") {
    return `top: ${Ue}px;
      left: ${Ue}px;`;
  } else if (n === "left" && a === "bottom") {
    return `bottom: ${Ue}px;
      left: ${Ue}px;`;
  } else if (n === "right" && a === "top") {
    return `top: ${Ue}px;
      right: ${Ue}px;`;
  } else {
    return `bottom: ${Ue}px;
      right: ${Ue}px;`;
  }
};
var $a = ({
  chartData: e,
  field: t,
  scale: r,
  leftPadding: n
}) => {
  const a = e.axis?.primary?.preserveOrder;
  const o = r.type === "time" ? t.data?.map((s) => ({
    pos: r.scale(
      oe(
        `${s}`,
        ae[t.type],
        ie(t, `${s}`, a)
      )
    ),
    data: s
  })).sort((s, c) => s.pos - c.pos) ?? [] : t.data?.map((s) => ({ pos: r.scale(s), data: s })).sort((s, c) => s.pos - c.pos) ?? [];
  const i = (s) => {
    const c = o;
    if (c.length < 2)
      return {
        index: 0,
        value: null
      };
    const u = s[0] - n;
    let l = 0;
    let f = c.length - 1;
    let d = Math.round((c.length - 1) / 2);
    while (Math.abs(l - f) > 1) {
      if (c[d].pos >= u) {
        f = d;
      } else {
        l = d;
      }
      d = Math.round((f + l) / 2);
    }
    if (Math.abs(c[l].pos - u) < Math.abs(c[f].pos - u)) {
      return {
        index: l,
        value: o[l].data
      };
    } else {
      return {
        index: f,
        value: o[f].data
      };
    }
  };
  i.domain = () => [];
  i.range = () => [];
  return {
    scale: i,
    type: "tooltipIndex"
  };
};
var Fa = ({
  field: e,
  scale: t
}) => {
  const r = On(e.data);
  const n = r?.length ?? 1;
  const a = t.scale.bandwidth() / 2;
  const o = Math.abs(t.scale.range()[1] - t.scale.range()[0]);
  const i = (s) => {
    const c = Math.min(
      Math.max(
        Math.round((s[0] + a) / o * n) - 1,
        0
      ),
      n - 1
    );
    const u = r[c] ?? null;
    const l = e.data?.indexOf(u) ?? 0;
    return { index: l, value: u };
  };
  i.domain = () => [];
  i.range = () => [];
  return {
    scale: i,
    type: "tooltipIndex"
  };
};

// src/charts/utils/scales/scale-types/linearScale.ts
var La = ({
  originalDomain: e,
  axisProperties: t,
  annotationProperties: r
}) => {
  let n = 0;
  let a = 1;
  if (e[0]) {
    n = +e[0];
  }
  if (e[1]) {
    a = +e[1];
  }
  const o = r?.thresholdIndicators?.map(
    (c) => c.value
  );
  const [i, s] = o ? [Math.min(...o), Math.max(...o)] : [void 0, void 0];
  if (i !== void 0 && isFinite(i)) {
    n = Math.min(n, i);
  }
  if (s !== void 0 && isFinite(s)) {
    a = Math.max(a, s);
  }
  if (t?.min) {
    n = +t.min;
  } else if (t?.forceVisibleZero) {
    if (n > 0) {
      n = 0;
    }
  }
  if (t?.max) {
    a = +t.max;
  } else if (t?.forceVisibleZero) {
    if (a < 0) {
      a = 0;
    }
  }
  return [n, a];
};
var Ra = ({
  field: e,
  range: t,
  axisProperties: r,
  annotationProperties: n
}) => {
  const a = [e.stats?.min, e.stats?.max];
  const [o, i] = La({
    originalDomain: a,
    axisProperties: r,
    annotationProperties: n
  });
  let s = Ee([o, i], t).unknown(void 0);
  if (!r?.min && !r?.max) {
    s = s.nice();
  }
  return { scale: s, type: "linear", fieldType: e.type, originalDomain: a };
};
var Ea = ({
  fields: e,
  range: t,
  axisProperties: r,
  annotationProperties: n
}) => {
  let a = -Infinity;
  let o = Infinity;
  for (const l of e) {
    if (ir(l.stats?.min) && Number(l.stats.min) < o) {
      o = Number(l.stats.min);
    }
    if (ir(l.stats?.max) && Number(l.stats.max) > a) {
      a = Number(l.stats.max);
    }
  }
  const i = [o, a];
  const [s, c] = La({
    originalDomain: i,
    axisProperties: r,
    annotationProperties: n
  });
  let u = Ee([s, c], t).unknown(void 0);
  u = u.nice();
  return {
    scale: u,
    type: "linear",
    fieldType: "numeric",
    originalDomain: i
  };
};

// src/charts/utils/scales/scale-info-calculators/dualAxisSeriesScaleInfoCalculator.ts
var Ha = ({
  chartData: e,
  width: t,
  height: r,
  options: n,
  seriesDataLookup: a
}) => {
  let o = [];
  let i = 0;
  let s = null;
  let c = 0;
  let u = [];
  let l = null;
  let f = 0;
  let d = 0;
  let p = 0;
  let m = 0;
  let T = 0;
  let b = 0;
  let D;
  const w = Ua(t);
  const O = rr(
    e,
    n.isTerminalClient ?? false,
    n.variant ?? "light"
  );
  const P = Wa(e) ?? null;
  const L = Ba(e);
  if (!P) return null;
  const x = Va({
    field: P,
    rangeLimit: t,
    axisProperties: e.axis?.primary,
    annotationProperties: e.annotations
  });
  const Y = Ea({
    fields: L,
    range: [r, 0],
    axisProperties: e.axis?.secondary,
    annotationProperties: e.annotations
  });
  for (let k = 0; k < 2; k++) {
    if (x) {
      let { padding: v, ticks: M } = cn(
        x,
        e,
        "horizontal",
        true,
        n,
        w
      );
      s = v;
      o = M;
      i = v.tickLength;
      c = v.textShift;
    }
    let { padding: h, ticks: y } = cn(
      Y,
      e,
      "vertical",
      false,
      n,
      w
    );
    l = h;
    u = y;
    f = h.tickLength;
    d = h.textShift;
    b = Math.max(
      s?.main ?? 0,
      l.start
    );
    T = Math.max(l.end);
    m = Math.max(
      l.main + 8,
      // a little breathing room from the numbers
      s?.end ?? 0,
      10
      // min padding of 10
    );
    p = Math.max(s?.start ?? 10, 10);
    Y.scale.range([r - b - T, 0]);
    x?.scale.range([0, t - m - p]);
  }
  const R = Pa(
    e,
    a,
    x,
    Y,
    n,
    t
  );
  const $ = Na(R);
  const B = Ya({
    bbox: $,
    width: x?.scale.range()[1],
    height: Y.scale.range()[0]
  });
  b = b + Math.max(B.bottom, 0);
  T = T + Math.max(B.top, 0);
  m = m + Math.max(B.right, 0);
  p = p + Math.max(B.left, 0);
  Y.scale.range([r - b - T, 0]);
  x?.scale.range([0, t - m - p]);
  if (x && (x.type === "linear" || x?.type === "time")) {
    D = $a({
      chartData: e,
      field: P,
      scale: x,
      leftPadding: p
    });
  } else if (x && x.type === "band") {
    D = Fa({
      field: P,
      scale: x
    });
  }
  let _ = null;
  if (x && Y) {
    _ = {
      primaryScale: {
        scale: x,
        orientation: "horizontal",
        ticks: o,
        tickLength: i,
        textShift: c
      },
      secondaryScale: {
        scale: Y,
        orientation: "vertical",
        ticks: u,
        tickLength: f,
        textShift: d
      },
      colorScale: O,
      tooltipIndexScale: D,
      padding: {
        top: T,
        right: m,
        bottom: b,
        left: p
      }
    };
  }
  return _;
};

// src/charts/utils/scales/scale-types/bandScale.ts
var za = (e, t) => {
  const r = e.stats?.uniqueValues ?? e.data;
  return {
    scale: mt(r, t),
    type: "band",
    fieldType: e.type
  };
};

// ../../node_modules/@d3fc/d3fc-rebind/src/createReboundMethod.js
var ln = (e, t, r) => {
  const n = t[r];
  if (typeof n !== "function") {
    throw new Error(`Attempt to rebind ${r} which isn't a function on the source object`);
  }
  return (...a) => {
    var o = n.apply(t, a);
    return o === t ? e : o;
  };
};

// ../../node_modules/@d3fc/d3fc-rebind/src/rebindAll.js
var Au = (e) => (t) => e.reduce(
  (r, n) => r && n(r),
  t
);
var fn = (e, t, ...r) => {
  const n = Au(r);
  for (const a of Object.keys(t)) {
    const o = n(a);
    if (o) {
      e[o] = ln(e, t, a);
    }
  }
  return e;
};

// ../../node_modules/@d3fc/d3fc-rebind/src/transform/regexify.js
var mn = (e) => e.map(
  (t) => typeof t === "string" ? new RegExp(`^${t}$`) : t
);

// ../../node_modules/@d3fc/d3fc-rebind/src/transform/include.js
var dn = (...e) => {
  e = mn(e);
  return (t) => e.some((r) => r.test(t)) && t;
};

// ../../node_modules/@d3fc/d3fc-discontinuous-scale/src/discontinuity/identity.js
function pn() {
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
function gn(e, t) {
  const r = e.map(t.clampUp);
  if (r.length !== new Set(r.map((n) => n?.valueOf())).size) {
    console.warn(
      "There are multiple ticks that fall within a discontinuity, which has led to them being rendered on top of each other. Consider using scale.ticks to explicitly specify the ticks for the scale."
    );
  }
  return r;
}

// ../../node_modules/@d3fc/d3fc-discontinuous-scale/src/discontinuous.js
function ja(e) {
  if (!arguments.length) {
    e = yt();
  }
  var t = pn();
  const r = (n) => {
    var a = e.domain();
    var o = e.range();
    var i = t.distance(a[0], a[1]);
    var s = t.distance(a[0], n);
    var c = s / i;
    var u = c * (o[1] - o[0]) + o[0];
    return u;
  };
  r.invert = (n) => {
    var a = e.domain();
    var o = e.range();
    var i = (n - o[0]) / (o[1] - o[0]);
    var s = t.distance(a[0], a[1]);
    var c = i * s;
    return t.offset(a[0], c);
  };
  r.domain = (...n) => {
    if (!n.length) {
      return e.domain();
    }
    const a = n[0];
    var o = t.clampUp(a[0]);
    var i = t.clampDown(a[1]);
    e.domain([o, i]);
    return r;
  };
  r.nice = () => {
    e.nice();
    var n = e.domain();
    var a = t.clampUp(n[0]);
    var o = t.clampDown(n[1]);
    e.domain([a, o]);
    return r;
  };
  r.ticks = (...n) => {
    var a = e.ticks.apply(this, n);
    return gn(a, t);
  };
  r.copy = () => ja(e.copy()).discontinuityProvider(t.copy());
  r.discontinuityProvider = (...n) => {
    if (!n.length) {
      return t;
    }
    t = n[0];
    return r;
  };
  fn(r, e, dn("range", "rangeRound", "interpolate", "clamp", "tickFormat"));
  return r;
}
var hn = ja;

// ../../node_modules/@d3fc/d3fc-discontinuous-scale/src/discontinuity/range.js
var Pu = (...e) => {
  const t = (o, i) => o > i[0] && o < i[1];
  const r = (o, i) => o[0] >= i[0] && o[1] <= i[1];
  var n = {};
  n.distance = (o, i) => {
    o = n.clampUp(o);
    i = n.clampDown(i);
    const s = e.filter((u) => r(u, [o, i]));
    const c = s.map((u) => u[1] - u[0]);
    return i - o - c.reduce((u, l) => u + l, 0);
  };
  const a = (o, i) => o instanceof Date ? new Date(o.getTime() + i) : o + i;
  n.offset = (o, i) => {
    if (i > 0) {
      let s = n.clampUp(o);
      let c = i;
      while (c > 0) {
        const u = e.filter((l) => l[0] > s).sort((l, f) => l[0] - f[0]);
        if (u.length) {
          const l = u[0];
          const f = l[0] - s;
          if (f > c) {
            s = a(s, c);
            c = 0;
          } else {
            s = l[1];
            c -= f;
          }
        } else {
          s = a(s, c);
          c = 0;
        }
      }
      return s;
    } else {
      let s = n.clampDown(o);
      let c = i;
      while (c < 0) {
        const u = e.filter((l) => l[1] < s).sort((l, f) => f[0] - l[0]);
        if (u.length) {
          const l = u[0];
          const f = l[1] - s;
          if (f < c) {
            s = a(s, c);
            c = 0;
          } else {
            s = l[0];
            c -= f;
          }
        } else {
          s = a(s, c);
          c = 0;
        }
      }
      return s;
    }
  };
  n.clampUp = (o) => e.reduce((i, s) => t(i, s) ? s[1] : i, o);
  n.clampDown = (o) => e.reduce((i, s) => t(i, s) ? s[0] : i, o);
  n.copy = () => n;
  return n;
};
var xn = Pu;

// ../../node_modules/@d3fc/d3fc-discontinuous-scale/src/discontinuity/skipWeeklyPattern/constants.js
var yn = 24 * 3600 * 1e3;

// ../../node_modules/@d3fc/d3fc-discontinuous-scale/src/discontinuity/skipWeeklyPattern/dateTimeUtility.js
var nr = (e, t, r, n, a) => {
  const o = {};
  o.getTimeComponentArrayFromString = (i) => [i.slice(0, 2), i.slice(3, 5), i.slice(6, 8), i.slice(9, 12)];
  o.getTimeString = (i) => {
    const [s, c, u, l] = r(i).map((f) => f.toString(10).padStart(2, "0"));
    return `${s}:${c}:${u}.${l.padStart(3, "0")}`;
  };
  o.setTime = (i, s, c = 0) => {
    const [u, l, f, d] = o.getTimeComponentArrayFromString(s);
    return a.offset(e(i, u, l, f, d), c);
  };
  o.getStartOfNextDay = (i) => n.offset(n.floor(i), 1);
  o.getEndOfPreviousDay = (i) => a.offset(n.floor(i), -1);
  o.dayInterval = n;
  o.msInterval = a;
  o.getDay = t;
  return o;
};

// ../../node_modules/@d3fc/d3fc-discontinuous-scale/src/discontinuity/skipWeeklyPattern.js
var Wp = nr(
  (e, t, r, n, a) => new Date(e.getFullYear(), e.getMonth(), e.getDate(), t, r, n, a),
  (e) => e.getDay(),
  (e) => [e.getHours(), e.getMinutes(), e.getSeconds(), e.getMilliseconds()],
  re,
  pe
);

// ../../node_modules/@d3fc/d3fc-discontinuous-scale/src/discontinuity/skipUtcWeeklyPattern.js
var Gp = nr(
  (e, t, r, n, a) => new Date(Date.UTC(e.getUTCFullYear(), e.getUTCMonth(), e.getUTCDate(), t, r, n, a)),
  (e) => e.getUTCDay(),
  (e) => [e.getUTCHours(), e.getUTCMinutes(), e.getUTCSeconds(), e.getUTCMilliseconds()],
  Be,
  pe
);

// src/charts/utils/scales/scale-types/timeScale.ts
var Ga = ({
  field: e,
  range: t,
  axisProperties: r
}) => {
  const n = e.stats?.dateGranularity ?? "days";
  const a = r?.preserveOrder;
  let o = [
    oe(
      `${e?.stats?.min}`,
      ae[e.type] ?? void 0,
      ie(e, `${e.stats?.min}`, a)
    ),
    oe(
      `${e?.stats?.max}`,
      ae[e.type] ?? void 0,
      ie(e, `${e.stats?.max}`, a)
    )
  ];
  const i = oe(
    `${r?.min}`,
    ae[e.type],
    ie(e, `${r?.min}`, a)
  );
  const s = oe(
    `${r?.max}`,
    ae[e.type],
    ie(e, `${r?.max}`, a)
  );
  const c = r?.min && j(i).isValid() ? i : void 0;
  const u = r?.max && j(s).isValid() ? s : void 0;
  if (c) {
    o[0] = c;
  }
  if (u) {
    o[1] = u;
  }
  if (!o || !o[0] || !o[1]) {
    o = [/* @__PURE__ */ new Date(), /* @__PURE__ */ new Date()];
  }
  const l = e.stats?.dateGaps ?? [];
  let f = "day";
  if (n === "minutes") {
    f = "minute";
  } else if (n === "hours") {
    f = "hour";
  }
  const d = l.map((m) => {
    const T = j(oe(m[0])).add(-1, f).add(1, f).toDate();
    return [T, oe(m[1])];
  }).filter((m) => m[0] !== null || m[1] !== null);
  const p = hn(tr()).discontinuityProvider(xn(...d)).range(t).domain(o);
  return {
    scale: p,
    type: "time",
    granularity: e.stats?.dateGranularity,
    fieldType: e.type,
    gaps: d
  };
};

// src/charts/utils/scales/scale-utils.ts
var Wa = (e) => e.fields.find((t) => t.taxonomy?.isPrimary);
var Ba = (e) => e.fields.filter(
  (t) => !t.taxonomy?.isPrimary && t.type === "numeric"
);
var Va = ({
  field: e,
  rangeLimit: t,
  axisProperties: r,
  annotationProperties: n
}) => {
  switch (e.type) {
    case "date":
    case "year":
    case "quarter":
    case "month":
    case "month/day":
    case "year/month":
      return Ga({
        field: e,
        range: [0, t],
        axisProperties: r
      });
    case "numeric":
      return Ra({
        field: e,
        range: [0, t],
        axisProperties: r,
        annotationProperties: n
      });
    case "string":
      return za(e, [0, t]);
    default:
      return null;
  }
};
var cn = (e, t, r, n, a, o) => {
  const i = a.isTerminalClient ?? false;
  const s = n ? t.axis?.primary ?? {} : t.axis?.secondary ?? {};
  const c = Do({
    scale: e,
    isPrimary: n,
    chartData: t,
    options: a
  });
  let u = {
    ticks: [],
    padding: {
      main: 0,
      start: 0,
      end: 0,
      tickLength: Ce,
      textShift: 0
    }
  };
  if (bn(c)) return u;
  switch (e.type) {
    case "linear":
      if (r === "horizontal") {
        u = eo({
          ticks: c,
          scale: e,
          isTerminalClient: i,
          isMobile: o
        });
      } else {
        u = ko({
          ticks: c,
          scale: e,
          isTerminalClient: i,
          axisProperties: s,
          isMobile: o
        });
      }
      break;
    case "band":
      if (r === "horizontal") {
        u = qn({
          ticks: c,
          scale: e,
          isTerminalClient: i,
          isMobile: o
        });
      } else {
        return Qn({
          ticks: c,
          scale: e,
          isTerminalClient: i,
          isMobile: o
        });
      }
      break;
    case "time":
      if (r === "horizontal") {
        u = No({
          ticks: c,
          scale: e,
          isTerminalClient: i,
          isMobile: o
        });
      } else {
        u = Yo({
          ticks: c,
          scale: e,
          isTerminalClient: i,
          isMobile: o
        });
      }
      break;
    default:
      break;
  }
  return u;
};
var Sg = (e, t, r, n, a) => {
  switch (e.type) {
    case "line":
      return Ha({
        chartData: e,
        width: t - 2,
        // this is for terminal. It wants to cut a pixel or two off the right end
        height: r,
        options: n,
        seriesDataLookup: a ?? {}
      });
    case "pie":
      return null;
    case "comparison":
      return Ca({
        chartData: e,
        width: t,
        height: r,
        options: n
      });
    default:
      return null;
  }
};
var Oa = (e) => {
  let t = {
    dark: {},
    light: {}
  };
  if (!e.design?.parsedOverrideOptions) {
    return t;
  }
  const r = e.fields.filter(
    (l) => !l.taxonomy?.isPrimary
  );
  const n = Object.keys(e.design?.parsedOverrideOptions);
  const a = /color(\d+)/;
  const o = /colorDark(\d+)/;
  const i = /colorLight(\d+)/;
  const s = n.filter((l) => l.match(a));
  const c = n.filter((l) => l.match(i));
  const u = n.filter((l) => l.match(o));
  s.forEach((l) => {
    const f = l.replace("color", "").replace(/\D/g, "");
    const d = (e.design?.parsedOverrideOptions)[l];
    const p = r[Number(f)];
    if (p) {
      t.light[p.id] = d;
      t.dark[p.id] = d;
    }
  });
  c.forEach((l) => {
    const f = l.replace("colorLight", "").replace(/\D/g, "");
    const d = (e.design?.parsedOverrideOptions)[l];
    const p = r[Number(f)];
    if (p) {
      t.light[p.id] = d;
    }
  });
  u.forEach((l) => {
    const f = l.replace("colorDark", "").replace(/\D/g, "");
    const d = e.design.parsedOverrideOptions[l];
    const p = r[Number(f)];
    if (p) {
      t.dark[p.id] = d;
    }
  });
  return t;
};

// src/charts/utils/config.ts
var Nu = 480;
var vg = "BWHaasText-55Roman";
var bo = "13px";
var Xa = 13;
var qa = 12;
var Ua = (e) => e <= Nu;

// src/charts/_common/Axes/config.ts
var kt = 7;
var Ce = 7;
var Ht = 14;
var Jn = 28;
var It = 28;
var vo = 3;
var Yr = 1;
var Mo = 3;
var wg = 4;
var Fr = 7;
var Wt = 3.5;
var wo = "#555555";
var Io = "#BBBBBB";
var Oo = "#CCCCCC";
var Co = "#555555";
var _o = "#000000";
var Ao = "#FFFFFF";

// src/charts/utils/text-utils.ts
var fe = (e) => e ? "Bloomberg-PropU_N" : "BWHaasText-55Roman";
var be = (e) => !e ? Xa : qa;
var Yu = (e, t, r) => {
  const n = e.match(/\S+|\s+/g) || [];
  return {
    wordsWithWidth: n.map((a) => ({
      word: a,
      width: K(a, t, r)
    })),
    spaceWidth: K("\xA0", t, r)
  };
};
var $u = (e, t, r, n) => {
  let a = 0;
  let o = 0;
  let i = [""];
  const s = Yu(e, r, n);
  for (const c of s.wordsWithWidth) {
    if (c.word === "\n") {
      a++;
      i[a] = "";
      o = 0;
      continue;
    }
    const u = c.word.trim();
    if (!u) continue;
    const l = K(u, r, n);
    if (o === 0 && l > t) {
      i[a] = u;
      a++;
      i[a] = "";
      o = 0;
      continue;
    }
    if (t - o - l < 0) {
      a++;
      i[a] = "";
      o = 0;
    }
    i[a] += `${o !== 0 ? " " : ""}${u}`;
    o = o !== 0 ? o + l + s.spaceWidth : l;
  }
  if (!i[i.length - 1]) {
    i.pop();
  }
  return i;
};
var Tn = St(
  $u,
  (e, t, r, n) => `${e}_${t}_${n}_${r}`
);
var wt = ({
  text: e,
  width: t,
  fontFamily: r,
  fontSize: n
}) => {
  return Tn(e, t, r, n).length * Ht;
};
var Ng = () => {
  if (K.cache.clear && Tn.cache.clear) {
    K.cache.clear();
    Tn.cache.clear();
  }
};

export {
  j as a,
  ae as b,
  oe as c,
  ie as d,
  Qu as e,
  Ju as f,
  ec as g,
  tc as h,
  ei as i,
  K as j,
  Sr as k,
  Dr as l,
  vr as m,
  kr as n,
  zu as o,
  kt as p,
  vo as q,
  wg as r,
  Fr as s,
  Wt as t,
  wo as u,
  Io as v,
  vg as w,
  bo as x,
  Xa as y,
  Ua as z,
  fe as A,
  be as B,
  Tn as C,
  Ng as D,
  Kn as E,
  Vl as F,
  zl as G,
  jl as H,
  os as I,
  as as J,
  rr as K,
  _a as L,
  Cu as M,
  _u as N,
  z as O,
  Nd as P,
  Wa as Q,
  Ba as R,
  Va as S,
  cn as T,
  Sg as U,
  Oa as V
};
