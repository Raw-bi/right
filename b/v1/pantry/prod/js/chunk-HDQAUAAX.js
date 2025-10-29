// ../utils/dist/toaster-day-Bwccy0F1.js
var Qe = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function Je(p) {
  return p && p.__esModule && Object.prototype.hasOwnProperty.call(p, "default") ? p.default : p;
}
var qn = { exports: {} };
(function(p, R) {
  (function(T, l) {
    p.exports = l();
  })(Qe, function() {
    var T = 1e3, l = 6e4, N = 36e5, V = "millisecond", b = "second", y = "minute", D = "hour", P = "day", H = "week", q = "month", he = "quarter", oe = "year", S = "date", C = "Invalid Date", k = /^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/, I = /\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g, z = { name: "en", weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"), months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"), ordinal: function(w) {
      var h = ["th", "st", "nd", "rd"], g = w % 100;
      return "[" + w + (h[(g - 20) % 10] || h[g] || h[0]) + "]";
    } }, U = function(w, h, g) {
      var Y = String(w);
      return !Y || Y.length >= h ? w : "" + Array(h + 1 - Y.length).join(g) + w;
    }, _e = { s: U, z: function(w) {
      var h = -w.utcOffset(), g = Math.abs(h), Y = Math.floor(g / 60), m = g % 60;
      return (h <= 0 ? "+" : "-") + U(Y, 2, "0") + ":" + U(m, 2, "0");
    }, m: function w(h, g) {
      if (h.date() < g.date()) return -w(g, h);
      var Y = 12 * (g.year() - h.year()) + (g.month() - h.month()), m = h.clone().add(Y, q), v = g - m < 0, u = h.clone().add(Y + (v ? -1 : 1), q);
      return +(-(Y + (g - m) / (v ? m - u : u - m)) || 0);
    }, a: function(w) {
      return w < 0 ? Math.ceil(w) || 0 : Math.floor(w);
    }, p: function(w) {
      return { M: q, y: oe, w: H, d: P, D: S, h: D, m: y, s: b, ms: V, Q: he }[w] || String(w || "").toLowerCase().replace(/s$/, "");
    }, u: function(w) {
      return w === void 0;
    } }, ie = "en", ee = {};
    ee[ie] = z;
    var Me = "$isDayjsObject", te = function(w) {
      return w instanceof me || !(!w || !w[Me]);
    }, fe = function w(h, g, Y) {
      var m;
      if (!h) return ie;
      if (typeof h == "string") {
        var v = h.toLowerCase();
        ee[v] && (m = v), g && (ee[v] = g, m = v);
        var u = h.split("-");
        if (!m && u.length > 1) return w(u[0]);
      } else {
        var j = h.name;
        ee[j] = h, m = j;
      }
      return !Y && m && (ie = m), m || !Y && ie;
    }, J = function(w, h) {
      if (te(w)) return w.clone();
      var g = typeof h == "object" ? h : {};
      return g.date = w, g.args = arguments, new me(g);
    }, E = _e;
    E.l = fe, E.i = te, E.w = function(w, h) {
      return J(w, { locale: h.$L, utc: h.$u, x: h.$x, $offset: h.$offset });
    };
    var me = function() {
      function w(g) {
        this.$L = fe(g.locale, null, true), this.parse(g), this.$x = this.$x || g.x || {}, this[Me] = true;
      }
      var h = w.prototype;
      return h.parse = function(g) {
        this.$d = function(Y) {
          var m = Y.date, v = Y.utc;
          if (m === null) return /* @__PURE__ */ new Date(NaN);
          if (E.u(m)) return /* @__PURE__ */ new Date();
          if (m instanceof Date) return new Date(m);
          if (typeof m == "string" && !/Z$/i.test(m)) {
            var u = m.match(k);
            if (u) {
              var j = u[2] - 1 || 0, ne = (u[7] || "0").substring(0, 3);
              return v ? new Date(Date.UTC(u[1], j, u[3] || 1, u[4] || 0, u[5] || 0, u[6] || 0, ne)) : new Date(u[1], j, u[3] || 1, u[4] || 0, u[5] || 0, u[6] || 0, ne);
            }
          }
          return new Date(m);
        }(g), this.init();
      }, h.init = function() {
        var g = this.$d;
        this.$y = g.getFullYear(), this.$M = g.getMonth(), this.$D = g.getDate(), this.$W = g.getDay(), this.$H = g.getHours(), this.$m = g.getMinutes(), this.$s = g.getSeconds(), this.$ms = g.getMilliseconds();
      }, h.$utils = function() {
        return E;
      }, h.isValid = function() {
        return this.$d.toString() !== C;
      }, h.isSame = function(g, Y) {
        var m = J(g);
        return this.startOf(Y) <= m && m <= this.endOf(Y);
      }, h.isAfter = function(g, Y) {
        return J(g) < this.startOf(Y);
      }, h.isBefore = function(g, Y) {
        return this.endOf(Y) < J(g);
      }, h.$g = function(g, Y, m) {
        return E.u(g) ? this[Y] : this.set(m, g);
      }, h.unix = function() {
        return Math.floor(this.valueOf() / 1e3);
      }, h.valueOf = function() {
        return this.$d.getTime();
      }, h.startOf = function(g, Y) {
        var m = this, v = !!E.u(Y) || Y, u = E.p(g), j = function(ve, Q) {
          var x = E.w(m.$u ? Date.UTC(m.$y, Q, ve) : new Date(m.$y, Q, ve), m);
          return v ? x : x.endOf(P);
        }, ne = function(ve, Q) {
          return E.w(m.toDate()[ve].apply(m.toDate("s"), (v ? [0, 0, 0, 0] : [23, 59, 59, 999]).slice(Q)), m);
        }, X = this.$W, G = this.$M, re = this.$D, xe = "set" + (this.$u ? "UTC" : "");
        switch (u) {
          case oe:
            return v ? j(1, 0) : j(31, 11);
          case q:
            return v ? j(1, G) : j(0, G + 1);
          case H:
            var Ne = this.$locale().weekStart || 0, le = (X < Ne ? X + 7 : X) - Ne;
            return j(v ? re - le : re + (6 - le), G);
          case P:
          case S:
            return ne(xe + "Hours", 0);
          case D:
            return ne(xe + "Minutes", 1);
          case y:
            return ne(xe + "Seconds", 2);
          case b:
            return ne(xe + "Milliseconds", 3);
          default:
            return this.clone();
        }
      }, h.endOf = function(g) {
        return this.startOf(g, false);
      }, h.$set = function(g, Y) {
        var m, v = E.p(g), u = "set" + (this.$u ? "UTC" : ""), j = (m = {}, m[P] = u + "Date", m[S] = u + "Date", m[q] = u + "Month", m[oe] = u + "FullYear", m[D] = u + "Hours", m[y] = u + "Minutes", m[b] = u + "Seconds", m[V] = u + "Milliseconds", m)[v], ne = v === P ? this.$D + (Y - this.$W) : Y;
        if (v === q || v === oe) {
          var X = this.clone().set(S, 1);
          X.$d[j](ne), X.init(), this.$d = X.set(S, Math.min(this.$D, X.daysInMonth())).$d;
        } else j && this.$d[j](ne);
        return this.init(), this;
      }, h.set = function(g, Y) {
        return this.clone().$set(g, Y);
      }, h.get = function(g) {
        return this[E.p(g)]();
      }, h.add = function(g, Y) {
        var m, v = this;
        g = Number(g);
        var u = E.p(Y), j = function(G) {
          var re = J(v);
          return E.w(re.date(re.date() + Math.round(G * g)), v);
        };
        if (u === q) return this.set(q, this.$M + g);
        if (u === oe) return this.set(oe, this.$y + g);
        if (u === P) return j(1);
        if (u === H) return j(7);
        var ne = (m = {}, m[y] = l, m[D] = N, m[b] = T, m)[u] || 1, X = this.$d.getTime() + g * ne;
        return E.w(X, this);
      }, h.subtract = function(g, Y) {
        return this.add(-1 * g, Y);
      }, h.format = function(g) {
        var Y = this, m = this.$locale();
        if (!this.isValid()) return m.invalidDate || C;
        var v = g || "YYYY-MM-DDTHH:mm:ssZ", u = E.z(this), j = this.$H, ne = this.$m, X = this.$M, G = m.weekdays, re = m.months, xe = m.meridiem, Ne = function(Q, x, De, Se) {
          return Q && (Q[x] || Q(Y, v)) || De[x].slice(0, Se);
        }, le = function(Q) {
          return E.s(j % 12 || 12, Q, "0");
        }, ve = xe || function(Q, x, De) {
          var Se = Q < 12 ? "AM" : "PM";
          return De ? Se.toLowerCase() : Se;
        };
        return v.replace(I, function(Q, x) {
          return x || function(De) {
            switch (De) {
              case "YY":
                return String(Y.$y).slice(-2);
              case "YYYY":
                return E.s(Y.$y, 4, "0");
              case "M":
                return X + 1;
              case "MM":
                return E.s(X + 1, 2, "0");
              case "MMM":
                return Ne(m.monthsShort, X, re, 3);
              case "MMMM":
                return Ne(re, X);
              case "D":
                return Y.$D;
              case "DD":
                return E.s(Y.$D, 2, "0");
              case "d":
                return String(Y.$W);
              case "dd":
                return Ne(m.weekdaysMin, Y.$W, G, 2);
              case "ddd":
                return Ne(m.weekdaysShort, Y.$W, G, 3);
              case "dddd":
                return G[Y.$W];
              case "H":
                return String(j);
              case "HH":
                return E.s(j, 2, "0");
              case "h":
                return le(1);
              case "hh":
                return le(2);
              case "a":
                return ve(j, ne, true);
              case "A":
                return ve(j, ne, false);
              case "m":
                return String(ne);
              case "mm":
                return E.s(ne, 2, "0");
              case "s":
                return String(Y.$s);
              case "ss":
                return E.s(Y.$s, 2, "0");
              case "SSS":
                return E.s(Y.$ms, 3, "0");
              case "Z":
                return u;
            }
            return null;
          }(Q) || u.replace(":", "");
        });
      }, h.utcOffset = function() {
        return 15 * -Math.round(this.$d.getTimezoneOffset() / 15);
      }, h.diff = function(g, Y, m) {
        var v, u = this, j = E.p(Y), ne = J(g), X = (ne.utcOffset() - this.utcOffset()) * l, G = this - ne, re = function() {
          return E.m(u, ne);
        };
        switch (j) {
          case oe:
            v = re() / 12;
            break;
          case q:
            v = re();
            break;
          case he:
            v = re() / 3;
            break;
          case H:
            v = (G - X) / 6048e5;
            break;
          case P:
            v = (G - X) / 864e5;
            break;
          case D:
            v = G / N;
            break;
          case y:
            v = G / l;
            break;
          case b:
            v = G / T;
            break;
          default:
            v = G;
        }
        return m ? v : E.a(v);
      }, h.daysInMonth = function() {
        return this.endOf(q).$D;
      }, h.$locale = function() {
        return ee[this.$L];
      }, h.locale = function(g, Y) {
        if (!g) return this.$L;
        var m = this.clone(), v = fe(g, Y, true);
        return v && (m.$L = v), m;
      }, h.clone = function() {
        return E.w(this.$d, this);
      }, h.toDate = function() {
        return new Date(this.valueOf());
      }, h.toJSON = function() {
        return this.isValid() ? this.toISOString() : null;
      }, h.toISOString = function() {
        return this.$d.toISOString();
      }, h.toString = function() {
        return this.$d.toUTCString();
      }, w;
    }(), pe = me.prototype;
    return J.prototype = pe, [["$ms", V], ["$s", b], ["$m", y], ["$H", D], ["$W", P], ["$M", q], ["$y", oe], ["$D", S]].forEach(function(w) {
      pe[w[1]] = function(h) {
        return this.$g(h, w[0], w[1]);
      };
    }), J.extend = function(w, h) {
      return w.$i || (w(h, me, J), w.$i = true), J;
    }, J.locale = fe, J.isDayjs = te, J.unix = function(w) {
      return J(1e3 * w);
    }, J.en = ee[ie], J.Ls = ee, J.p = {}, J;
  });
})(qn);
var $a = qn.exports;
var Xe = /* @__PURE__ */ Je($a);
var Qn = { exports: {} };
(function(p, R) {
  (function(T, l) {
    p.exports = l();
  })(Qe, function() {
    return function(T, l) {
      var N = l.prototype, V = N.format;
      N.format = function(b) {
        var y = this, D = this.$locale();
        if (!this.isValid()) return V.bind(this)(b);
        var P = this.$utils(), H = (b || "YYYY-MM-DDTHH:mm:ssZ").replace(/\[([^\]]+)]|Q|wo|ww|w|WW|W|zzz|z|gggg|GGGG|Do|X|x|k{1,2}|S/g, function(q) {
          switch (q) {
            case "Q":
              return Math.ceil((y.$M + 1) / 3);
            case "Do":
              return D.ordinal(y.$D);
            case "gggg":
              return y.weekYear();
            case "GGGG":
              return y.isoWeekYear();
            case "wo":
              return D.ordinal(y.week(), "W");
            case "w":
            case "ww":
              return P.s(y.week(), q === "w" ? 1 : 2, "0");
            case "W":
            case "WW":
              return P.s(y.isoWeek(), q === "W" ? 1 : 2, "0");
            case "k":
            case "kk":
              return P.s(String(y.$H === 0 ? 24 : y.$H), q === "k" ? 1 : 2, "0");
            case "X":
              return Math.floor(y.$d.getTime() / 1e3);
            case "x":
              return y.$d.getTime();
            case "z":
              return "[" + y.offsetName() + "]";
            case "zzz":
              return "[" + y.offsetName("long") + "]";
            default:
              return q;
          }
        });
        return V.bind(this)(H);
      };
    };
  });
})(Qn);
var Fa = Qn.exports;
var Ra = /* @__PURE__ */ Je(Fa);
var Jn = { exports: {} };
(function(p, R) {
  (function(T, l) {
    p.exports = l();
  })(Qe, function() {
    var T = { LTS: "h:mm:ss A", LT: "h:mm A", L: "MM/DD/YYYY", LL: "MMMM D, YYYY", LLL: "MMMM D, YYYY h:mm A", LLLL: "dddd, MMMM D, YYYY h:mm A" }, l = /(\[[^[]*\])|([-_:/.,()\s]+)|(A|a|Q|YYYY|YY?|ww?|MM?M?M?|Do|DD?|hh?|HH?|mm?|ss?|S{1,3}|z|ZZ?)/g, N = /\d/, V = /\d\d/, b = /\d\d?/, y = /\d*[^-_:/,()\s\d]+/, D = {}, P = function(k) {
      return (k = +k) + (k > 68 ? 1900 : 2e3);
    }, H = function(k) {
      return function(I) {
        this[k] = +I;
      };
    }, q = [/[+-]\d\d:?(\d\d)?|Z/, function(k) {
      (this.zone || (this.zone = {})).offset = function(I) {
        if (!I || I === "Z") return 0;
        var z = I.match(/([+-]|\d\d)/g), U = 60 * z[1] + (+z[2] || 0);
        return U === 0 ? 0 : z[0] === "+" ? -U : U;
      }(k);
    }], he = function(k) {
      var I = D[k];
      return I && (I.indexOf ? I : I.s.concat(I.f));
    }, oe = function(k, I) {
      var z, U = D.meridiem;
      if (U) {
        for (var _e = 1; _e <= 24; _e += 1) if (k.indexOf(U(_e, 0, I)) > -1) {
          z = _e > 12;
          break;
        }
      } else z = k === (I ? "pm" : "PM");
      return z;
    }, S = { A: [y, function(k) {
      this.afternoon = oe(k, false);
    }], a: [y, function(k) {
      this.afternoon = oe(k, true);
    }], Q: [N, function(k) {
      this.month = 3 * (k - 1) + 1;
    }], S: [N, function(k) {
      this.milliseconds = 100 * +k;
    }], SS: [V, function(k) {
      this.milliseconds = 10 * +k;
    }], SSS: [/\d{3}/, function(k) {
      this.milliseconds = +k;
    }], s: [b, H("seconds")], ss: [b, H("seconds")], m: [b, H("minutes")], mm: [b, H("minutes")], H: [b, H("hours")], h: [b, H("hours")], HH: [b, H("hours")], hh: [b, H("hours")], D: [b, H("day")], DD: [V, H("day")], Do: [y, function(k) {
      var I = D.ordinal, z = k.match(/\d+/);
      if (this.day = z[0], I) for (var U = 1; U <= 31; U += 1) I(U).replace(/\[|\]/g, "") === k && (this.day = U);
    }], w: [b, H("week")], ww: [V, H("week")], M: [b, H("month")], MM: [V, H("month")], MMM: [y, function(k) {
      var I = he("months"), z = (he("monthsShort") || I.map(function(U) {
        return U.slice(0, 3);
      })).indexOf(k) + 1;
      if (z < 1) throw new Error();
      this.month = z % 12 || z;
    }], MMMM: [y, function(k) {
      var I = he("months").indexOf(k) + 1;
      if (I < 1) throw new Error();
      this.month = I % 12 || I;
    }], Y: [/[+-]?\d+/, H("year")], YY: [V, function(k) {
      this.year = P(k);
    }], YYYY: [/\d{4}/, H("year")], Z: q, ZZ: q };
    function C(k) {
      var I, z;
      I = k, z = D && D.formats;
      for (var U = (k = I.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g, function(J, E, me) {
        var pe = me && me.toUpperCase();
        return E || z[me] || T[me] || z[pe].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g, function(w, h, g) {
          return h || g.slice(1);
        });
      })).match(l), _e = U.length, ie = 0; ie < _e; ie += 1) {
        var ee = U[ie], Me = S[ee], te = Me && Me[0], fe = Me && Me[1];
        U[ie] = fe ? { regex: te, parser: fe } : ee.replace(/^\[|\]$/g, "");
      }
      return function(J) {
        for (var E = {}, me = 0, pe = 0; me < _e; me += 1) {
          var w = U[me];
          if (typeof w == "string") pe += w.length;
          else {
            var h = w.regex, g = w.parser, Y = J.slice(pe), m = h.exec(Y)[0];
            g.call(E, m), J = J.replace(m, "");
          }
        }
        return function(v) {
          var u = v.afternoon;
          if (u !== void 0) {
            var j = v.hours;
            u ? j < 12 && (v.hours += 12) : j === 12 && (v.hours = 0), delete v.afternoon;
          }
        }(E), E;
      };
    }
    return function(k, I, z) {
      z.p.customParseFormat = true, k && k.parseTwoDigitYear && (P = k.parseTwoDigitYear);
      var U = I.prototype, _e = U.parse;
      U.parse = function(ie) {
        var ee = ie.date, Me = ie.utc, te = ie.args;
        this.$u = Me;
        var fe = te[1];
        if (typeof fe == "string") {
          var J = te[2] === true, E = te[3] === true, me = J || E, pe = te[2];
          E && (pe = te[2]), D = this.$locale(), !J && pe && (D = z.Ls[pe]), this.$d = function(Y, m, v, u) {
            try {
              if (["x", "X"].indexOf(m) > -1) return new Date((m === "X" ? 1e3 : 1) * Y);
              var j = C(m)(Y), ne = j.year, X = j.month, G = j.day, re = j.hours, xe = j.minutes, Ne = j.seconds, le = j.milliseconds, ve = j.zone, Q = j.week, x = /* @__PURE__ */ new Date(), De = G || (ne || X ? 1 : x.getDate()), Se = ne || x.getFullYear(), ct = 0;
              ne && !X || (ct = X > 0 ? X - 1 : x.getMonth());
              var f, tt = re || 0, K = xe || 0, je = Ne || 0, Le = le || 0;
              return ve ? new Date(Date.UTC(Se, ct, De, tt, K, je, Le + 60 * ve.offset * 1e3)) : v ? new Date(Date.UTC(Se, ct, De, tt, K, je, Le)) : (f = new Date(Se, ct, De, tt, K, je, Le), Q && (f = u(f).week(Q).toDate()), f);
            } catch {
              return /* @__PURE__ */ new Date("");
            }
          }(ee, fe, Me, z), this.init(), pe && pe !== true && (this.$L = this.locale(pe).$L), me && ee != this.format(fe) && (this.$d = /* @__PURE__ */ new Date("")), D = {};
        } else if (fe instanceof Array) for (var w = fe.length, h = 1; h <= w; h += 1) {
          te[1] = fe[h - 1];
          var g = z.apply(this, te);
          if (g.isValid()) {
            this.$d = g.$d, this.$L = g.$L, this.init();
            break;
          }
          h === w && (this.$d = /* @__PURE__ */ new Date(""));
        }
        else _e.call(this, ie);
      };
    };
  });
})(Jn);
var Pa = Jn.exports;
var ja = /* @__PURE__ */ Je(Pa);
var Xn = { exports: {} };
(function(p, R) {
  (function(T, l) {
    p.exports = l();
  })(Qe, function() {
    return function(T, l, N) {
      l.prototype.isBetween = function(V, b, y, D) {
        var P = N(V), H = N(b), q = (D = D || "()")[0] === "(", he = D[1] === ")";
        return (q ? this.isAfter(P, y) : !this.isBefore(P, y)) && (he ? this.isBefore(H, y) : !this.isAfter(H, y)) || (q ? this.isBefore(P, y) : !this.isAfter(P, y)) && (he ? this.isAfter(H, y) : !this.isBefore(H, y));
      };
    };
  });
})(Xn);
var La = Xn.exports;
var Ha = /* @__PURE__ */ Je(La);
var Kn = { exports: {} };
(function(p, R) {
  (function(T, l) {
    p.exports = l();
  })(Qe, function() {
    return function(T, l, N) {
      var V = function(b, y) {
        if (!y || !y.length || y.length === 1 && !y[0] || y.length === 1 && Array.isArray(y[0]) && !y[0].length) return null;
        var D;
        y.length === 1 && y[0].length > 0 && (y = y[0]), D = (y = y.filter(function(H) {
          return H;
        }))[0];
        for (var P = 1; P < y.length; P += 1) y[P].isValid() && !y[P][b](D) || (D = y[P]);
        return D;
      };
      N.max = function() {
        var b = [].slice.call(arguments, 0);
        return V("isAfter", b);
      }, N.min = function() {
        var b = [].slice.call(arguments, 0);
        return V("isBefore", b);
      };
    };
  });
})(Kn);
var Wa = Kn.exports;
var Ua = /* @__PURE__ */ Je(Wa);
var ea = { exports: {} };
(function(p, R) {
  (function(T, l) {
    p.exports = l();
  })(Qe, function() {
    return function(T, l, N) {
      N.updateLocale = function(V, b) {
        var y = N.Ls[V];
        if (y) return (b ? Object.keys(b) : []).forEach(function(D) {
          y[D] = b[D];
        }), y;
      };
    };
  });
})(ea);
var Ia = ea.exports;
var Ga = /* @__PURE__ */ Je(Ia);
var ta = { exports: {} };
(function(p, R) {
  (function(T, l) {
    p.exports = l();
  })(Qe, function() {
    var T = "minute", l = /[+-]\d\d(?::?\d\d)?/g, N = /([+-]|\d\d)/g;
    return function(V, b, y) {
      var D = b.prototype;
      y.utc = function(C) {
        var k = { date: C, utc: true, args: arguments };
        return new b(k);
      }, D.utc = function(C) {
        var k = y(this.toDate(), { locale: this.$L, utc: true });
        return C ? k.add(this.utcOffset(), T) : k;
      }, D.local = function() {
        return y(this.toDate(), { locale: this.$L, utc: false });
      };
      var P = D.parse;
      D.parse = function(C) {
        C.utc && (this.$u = true), this.$utils().u(C.$offset) || (this.$offset = C.$offset), P.call(this, C);
      };
      var H = D.init;
      D.init = function() {
        if (this.$u) {
          var C = this.$d;
          this.$y = C.getUTCFullYear(), this.$M = C.getUTCMonth(), this.$D = C.getUTCDate(), this.$W = C.getUTCDay(), this.$H = C.getUTCHours(), this.$m = C.getUTCMinutes(), this.$s = C.getUTCSeconds(), this.$ms = C.getUTCMilliseconds();
        } else H.call(this);
      };
      var q = D.utcOffset;
      D.utcOffset = function(C, k) {
        var I = this.$utils().u;
        if (I(C)) return this.$u ? 0 : I(this.$offset) ? q.call(this) : this.$offset;
        if (typeof C == "string" && (C = function(ie) {
          ie === void 0 && (ie = "");
          var ee = ie.match(l);
          if (!ee) return null;
          var Me = ("" + ee[0]).match(N) || ["-", 0, 0], te = Me[0], fe = 60 * +Me[1] + +Me[2];
          return fe === 0 ? 0 : te === "+" ? fe : -fe;
        }(C), C === null)) return this;
        var z = Math.abs(C) <= 16 ? 60 * C : C, U = this;
        if (k) return U.$offset = z, U.$u = C === 0, U;
        if (C !== 0) {
          var _e = this.$u ? this.toDate().getTimezoneOffset() : -1 * this.utcOffset();
          (U = this.local().add(z + _e, T)).$offset = z, U.$x.$localOffset = _e;
        } else U = this.utc();
        return U;
      };
      var he = D.format;
      D.format = function(C) {
        var k = C || (this.$u ? "YYYY-MM-DDTHH:mm:ss[Z]" : "");
        return he.call(this, k);
      }, D.valueOf = function() {
        var C = this.$utils().u(this.$offset) ? 0 : this.$offset + (this.$x.$localOffset || this.$d.getTimezoneOffset());
        return this.$d.valueOf() - 6e4 * C;
      }, D.isUTC = function() {
        return !!this.$u;
      }, D.toISOString = function() {
        return this.toDate().toISOString();
      }, D.toString = function() {
        return this.toDate().toUTCString();
      };
      var oe = D.toDate;
      D.toDate = function(C) {
        return C === "s" && this.$offset ? y(this.format("YYYY-MM-DD HH:mm:ss:SSS")).toDate() : oe.call(this);
      };
      var S = D.diff;
      D.diff = function(C, k, I) {
        if (C && this.$u === C.$u) return S.call(this, C, k, I);
        var z = this.local(), U = y(C).local();
        return S.call(z, U, k, I);
      };
    };
  });
})(ta);
var Ba = ta.exports;
var Va = /* @__PURE__ */ Je(Ba);
var za = "YYYY-MM-DDTHH:mm:ssZ";
var Za = (p, R) => {
  const T = R.prototype, l = T.format, N = [
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
  T.format = function(V) {
    const b = V || za;
    return l.bind(this)(b).replace(
      /(\[[^\]]+])|ttt/g,
      () => {
        const y = Number(this.$M);
        return N[y];
      }
    );
  };
};
var Mt = /* @__PURE__ */ new Map();
var qa = 3e3;
var Qa = (p, R) => {
  R.prototype.plainFormat = function() {
    const T = `${this.valueOf()}`;
    if (Mt.has(T))
      return Mt.get(T);
    const l = this.format("YYYY-MM-DD HH:mm:ss");
    if (Mt.size >= qa) {
      const N = Mt.keys().next().value;
      N !== void 0 && Mt.delete(N);
    }
    return Mt.set(T, l), l;
  };
};
Xe.extend(Ha);
Xe.extend(Ua);
Xe.extend(Va);
Xe.extend(ja);
Xe.extend(Ra);
Xe.extend(Ga);
Xe.extend(Za);
Xe.extend(Qa);
var na = Xe;
var ur = [
  "date",
  "quarter",
  "month",
  "year",
  "month/day",
  "year/month"
];
var fr = {
  quarter: "YYYY Q",
  month: "MMMM",
  "month/day": "MMMM DD YYYY",
  "year/month": "MMMM YYYY DD",
  year: "YYYY"
};
var dr = (p) => {
  switch (p) {
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
var Ja = (p) => p.endsWith("Z") ? p.slice(0, -1) : p;
var hr = (p, R, T) => {
  if (!p)
    return null;
  let l = Ja(typeof p == "string" ? p : `${p}`);
  return T && (l += T), na(l, R).toDate();
};

// ../utils/dist/index.es.js
var Nt = (p) => [p];
var Z = (p) => Array.from({ length: p }, (R, T) => T);
var de = (p, R) => ({
  colors: p.slice(0, 25).concat(R),
  neutral: p[0],
  lhs: p,
  rhs: R
});
var Ce = (p) => ["l3", "l2", "l1", "base", "d1", "d2", "d3"].map((R) => p[R]);
var Ke = (p) => ["d3", "d2", "d1", "base", "l1", "l2", "l3"].map((R) => p[R]);
var Xa = (p) => [
  "l6",
  "l5",
  "l4",
  "l3",
  "l2",
  "l1",
  "base",
  "d1",
  "d2",
  "d3",
  "d4",
  "d5",
  "d6"
].map((R) => p[R]);
var Fe = {
  1: Nt(3),
  2: [1, 3],
  3: [1, 2, 3],
  4: [1, 2, 3, 4],
  5: [1, 2, 3, 4, 6],
  6: [1, 2, 3, 4, 5, 6],
  7: [0, 1, 2, 3, 4, 5, 6]
};
var et = {
  1: Nt(4),
  2: [2, 4],
  3: [1, 4, 6],
  4: [1, 3, 4, 6],
  5: [1, 2, 3, 4, 6],
  6: [0, 1, 2, 3, 4, 5],
  7: [0, 1, 2, 3, 4, 5, 6]
};
var Te = {
  1: [6],
  2: [1, 5],
  3: [1, 3, 5],
  4: [1, 2, 4, 5],
  5: [1, 2, 3, 4, 5],
  6: [0, 1, 2, 4, 5, 6],
  7: [0, 1, 2, 3, 4, 5, 6]
};
var bn = {
  1: [0],
  2: [1, 5],
  3: [1, 3, 5],
  4: [1, 2, 4, 5],
  5: [1, 2, 3, 4, 5],
  6: [0, 1, 2, 4, 5, 6],
  7: [0, 1, 2, 3, 4, 5, 6]
};
var ke = {
  1: [1],
  2: [1, 2],
  3: [0, 1, 2],
  4: [3, 4, 5, 6],
  5: [7, 8, 9, 10, 11],
  6: [12, 13, 14, 15, 16, 17],
  7: [18, 19, 20, 21, 22, 23, 24]
};
var Re = {
  1: [2],
  2: [2, 27],
  3: [2, 0, 27],
  4: [2, 1, 26, 27],
  5: [2, 1, 7, 26, 27],
  6: [6, 5, 4, 29, 30, 31],
  7: [6, 5, 4, 7, 29, 30, 31]
};
var We = {
  1: [2],
  2: [2, 27],
  3: [2, 0, 27],
  4: [2, 1, 26, 27],
  5: [2, 1, 7, 26, 27],
  6: [6, 5, 4, 29, 30, 31],
  7: [6, 5, 4, 7, 29, 30, 31]
};
var Pe = {
  1: Z(1),
  2: Z(2),
  3: Z(3),
  4: Z(4),
  5: Z(5),
  6: Z(6),
  7: Z(7)
};
var aa = {
  1: Z(1),
  2: Z(2),
  3: Z(3),
  4: Z(4),
  5: Z(4),
  6: Z(4),
  7: Z(4)
};
var ra = {
  1: Nt(2),
  2: Z(2),
  3: Z(3),
  4: Z(4),
  5: Z(4),
  6: Z(4),
  7: Z(4)
};
var s = {
  cyan: {
    d3: "#00577f",
    d2: "#0079b2",
    d1: "#0094d9",
    base: "#00aeff",
    l1: "#44c4ff",
    l2: "#89d9fe",
    l3: "#cdeffe"
  },
  honey: {
    d3: "#7f6200",
    d2: "#b28900",
    d1: "#d9a700",
    base: "#ffc400",
    l1: "#ffd345",
    l2: "#ffe389",
    l3: "#fff2ce"
  },
  orange: {
    d3: "#7f3101",
    d2: "#b24400",
    d1: "#d95300",
    base: "#ff6200",
    l1: "#ff8d46",
    l2: "#feb98d",
    l3: "#ffe5d3"
  },
  black: {
    d3: "#000000",
    d2: "#333333",
    d1: "#666666",
    base: "#999999",
    l1: "#cccccc",
    l2: "#efefef",
    l3: "#ffffff"
  },
  magenta: {
    base: "#ff008c",
    d2: "#b20062"
  },
  mint: {
    base: "#3ef794",
    d2: "#25a463"
  },
  teal: {
    d3: "#007972",
    d2: "#00aaa0",
    d1: "#00cfc3",
    base: "#00f3e5",
    l1: "#7bf7f0",
    l2: "#9ff9f4",
    l3: "#cffdf9"
  },
  yellow: {
    base: "#fff200"
  },
  white: {
    base: "#ffffff"
  },
  blue: {
    base: "#004bf8"
  },
  neutral: "#cecece"
};
var L = {
  cyan: {
    d3: "#003f5d",
    d2: "#00577f",
    d1: "#0079b2",
    base: "#0094d9",
    l1: "#00aeff",
    l2: "#2fbdff",
    l3: "#5fccff"
  },
  honey: {
    d3: "#544100",
    d2: "#7f6200",
    d1: "#b28900",
    base: "#d9a700",
    l1: "#ffc400",
    l2: "#ffcd2e",
    l3: "#ffd961"
  },
  orange: {
    d3: "#7f3101",
    d2: "#b24400",
    d1: "#d95300",
    base: "#ff6200",
    l1: "#ff8d46",
    l2: "#feb98d",
    l3: "#ffe5d3"
  },
  black: {
    d3: "#000000",
    d2: "#333333",
    d1: "#666666",
    base: "#999999",
    l1: "#cccccc",
    l2: "#efefef",
    l3: "#ffffff"
  },
  neutral: "#525252"
};
var W = {
  blue: {
    d3: "#002a7f",
    d2: "#003eb2",
    d1: "#0052d9",
    base: "#0078ff",
    l1: "#4499ff",
    l2: "#89baff",
    l3: "#cddcff"
  },
  red: {
    d3: "#7f0000",
    d2: "#b20000",
    d1: "#d90000",
    base: "#ff0000",
    l1: "#ff4141",
    l2: "#ff8282",
    l3: "#ffc3c3"
  },
  black: {
    d3: "#000000",
    d2: "#333333",
    d1: "#666666",
    base: "#999999",
    l1: "#cccccc",
    l2: "#efefef",
    l3: "#ffffff"
  },
  green: {
    base: "#008800"
  },
  lilac: {
    base: "#dca0ff"
  },
  yellow: {
    base: "#ffff00"
  },
  white: {
    base: "#ffffff"
  }
};
var Bt = {
  // actually green
  green: {
    d3: "#148714",
    d2: "#14A014",
    d1: "#14D21E",
    base: "#14eb1e",
    l1: "#48fb51",
    l2: "#81ff87",
    l3: "#bfffc2"
  },
  // actually cyan
  cyan: {
    d3: "#00788c",
    d2: "#00889e",
    d1: "#00a2bd",
    base: "#00b4d2",
    l1: "#00c2e2",
    l2: "#10ccea",
    l3: "#62dbef"
  },
  black: {
    d3: "#000000",
    d2: "#333333",
    d1: "#666666",
    base: "#999999",
    l1: "#cccccc",
    l2: "#efefef",
    l3: "#ffffff"
  },
  discrete: [
    "#14eb1e",
    "#00B3D2",
    "#FFBB1C",
    "#9F502A",
    "#505050",
    "#ffbe1e",
    "#ffeb50",
    "#9b5028",
    "#e1a05a"
  ]
};
var ot = {
  blue: {
    d3: "#005174",
    d2: "#046A96",
    d1: "#0984B9",
    base: "#0D9DDB",
    l1: "#41B5E7",
    l2: "#76CDF3",
    l3: "#AAE5FF"
  },
  purple: {
    d3: "#3C294E",
    d2: "#563A70",
    d1: "#704C93",
    base: "#8A5DB5",
    l1: "#A67CCE",
    l2: "#C19BE6",
    l3: "#DDBAFF"
  },
  green: {
    d3: "#037D6B",
    d2: "#029983",
    d1: "#01B69B",
    base: "#00D2B3",
    l1: "#31E1C7",
    l2: "#62F0DB",
    l3: "#93FFEF"
  },
  discrete: [
    "#0D9DDB",
    "#8A5DB5",
    "#00D2B3",
    "#ED4436",
    "#FFCC1D",
    "#EA60A7",
    "#4DAA50",
    "#aaa",
    "#666"
  ]
};
var we = {
  blue: {
    d6: "#031023",
    d5: "#072145",
    d4: "#0D3169",
    d3: "#15438C",
    d2: "#1B53AF",
    d1: "#2264D2",
    base: "#0072ff",
    l1: "#2486ff",
    l2: "#489aff",
    l3: "#6daeff",
    l4: "#91c2ff",
    l5: "#b6d6ff",
    l6: "#daeaff"
  }
};
var F = {
  "bbg-mint": [
    "#efefef",
    "#a2e1b5",
    "#33cc7a",
    "#efefef",
    "#bde7c9",
    "#84daa1",
    "#33cc7a",
    "#efefef",
    "#cbead3",
    "#a2e1b5",
    "#70cd91",
    "#2db96e",
    "#efefef",
    "#d3ecd9",
    "#b3e5c1",
    "#8fd9a6",
    "#65c98a",
    "#2db96e",
    "#efefef",
    "#d1ebd7",
    "#afe3bd",
    "#8bdaa3",
    "#6ec88d",
    "#4fb677",
    "#28a462",
    "#efefef",
    "#d3ecd8",
    "#b2e5be",
    "#90dda5",
    "#71ce8e",
    "#59b97b",
    "#40a468",
    "#239056",
    "#efefef",
    "#d1ebd6",
    "#afe3ba",
    "#8bda9e",
    "#61d183",
    "#50bb74",
    "#3fa566",
    "#2f9057",
    "#1e7b49"
  ],
  "bbg-red": [
    "#efefef",
    "#ff999a",
    "#f91f4e",
    "#efefef",
    "#feb7b6",
    "#ff7a80",
    "#f91f4e",
    "#efefef",
    "#fcc5c4",
    "#ff999a",
    "#ff6973",
    "#f91f4e",
    "#efefef",
    "#f9cccb",
    "#ffaaaa",
    "#ff868a",
    "#ff5d6b",
    "#f91f4e",
    "#efefef",
    "#f6d0cd",
    "#fcb3af",
    "#fd9591",
    "#fc7574",
    "#f85058",
    "#f20d3e",
    "#efefef",
    "#f8dbda",
    "#fec6c4",
    "#ffa6a4",
    "#ff807f",
    "#f75b60",
    "#e93d4c",
    "#da0b38",
    "#efefef",
    "#f9dbda",
    "#fdc5c2",
    "#ffa7a6",
    "#fd7a80",
    "#f7425d",
    "#e71f4a",
    "#d5153e",
    "#c20a32"
  ],
  "bbg-orange": [
    "#efefef",
    "#ffac81",
    "#ff6200",
    "#efefef",
    "#ffc2a5",
    "#ff945d",
    "#ff6200",
    "#efefef",
    "#ffcdb7",
    "#ffac81",
    "#ff884b",
    "#ff6200",
    "#efefef",
    "#fcd4c2",
    "#ffb996",
    "#ff9e6b",
    "#ff813f",
    "#ff6200",
    "#efefef",
    "#fbd9c9",
    "#ffc2a5",
    "#ffac81",
    "#ff945d",
    "#ff7c38",
    "#ff6200",
    "#efefef",
    "#f6ded2",
    "#fdceb8",
    "#ffb58d",
    "#ff9658",
    "#fb7b2d",
    "#f16a1a",
    "#e65800",
    "#efefef",
    "#f6ddd3",
    "#fccdb9",
    "#ffba9a",
    "#ffa170",
    "#ff8944",
    "#f57528",
    "#e56417",
    "#d65200"
  ],
  "bopinion-blue": [
    "#efefef",
    "#97bcf2",
    "#3e87f4",
    "#efefef",
    "#b5cdf1",
    "#7aaaf2",
    "#3e87f4",
    "#efefef",
    "#c3d5f0",
    "#97bcf2",
    "#6ba1f3",
    "#3e87f4",
    "#efefef",
    "#c8d8f0",
    "#9fc0f1",
    "#77a8f1",
    "#4f90f2",
    "#2678f2",
    "#efefef",
    "#d0ddf2",
    "#aec8f2",
    "#8bb4f1",
    "#6aa0f1",
    "#488cf2",
    "#2678f2",
    "#efefef",
    "#d1dff2",
    "#b1cbf2",
    "#90b7f2",
    "#70a4f2",
    "#4f90f1",
    "#2e7df1",
    "#0e69f1",
    "#efefef",
    "#d7e3f5",
    "#bcd3f7",
    "#a0c3fa",
    "#83b3fc",
    "#629cf4",
    "#4386eb",
    "#2671e3",
    "#0b5eda"
  ],
  "bbg-cyan": [
    "#efefef",
    "#a1ccf1",
    "#0daaf2",
    "#efefef",
    "#bdd8f1",
    "#82c1f2",
    "#0daaf2",
    "#efefef",
    "#c9e1f5",
    "#9ed2fa",
    "#69b7f0",
    "#009de6",
    "#efefef",
    "#c5ddf1",
    "#94cbf2",
    "#50b8f4",
    "#19a2e4",
    "#008bcc",
    "#efefef",
    "#cce0f1",
    "#a6d1f2",
    "#76c1f3",
    "#23a8e6",
    "#1699d8",
    "#0081bd",
    "#efefef",
    "#d2e2f1",
    "#b1d5f2",
    "#8cc8f3",
    "#5cbbf4",
    "#21aaeb",
    "#1391cf",
    "#007ab3",
    "#efefef",
    "#dee9f1",
    "#cbe2f3",
    "#afd7f4",
    "#80c4f3",
    "#3fb0f2",
    "#0999db",
    "#0481b9",
    "#006999"
  ],
  "bbg-honey": [
    "#efefef",
    "#fce679",
    "#ffc400",
    "#efefef",
    "#f8e59b",
    "#f9d754",
    "#ffc400",
    "#efefef",
    "#f7e8b0",
    "#f7e06e",
    "#facf44",
    "#ffbb00",
    "#efefef",
    "#f6e9bd",
    "#f8e389",
    "#f8d860",
    "#fbc843",
    "#ffb624",
    "#efefef",
    "#f3e9c6",
    "#f4e39d",
    "#f2dd73",
    "#f5cb52",
    "#f9b830",
    "#ffa200",
    "#efefef",
    "#f3eacc",
    "#f4e4a9",
    "#f3df86",
    "#f3d665",
    "#f6c649",
    "#fab52b",
    "#ffa200",
    "#efefef",
    "#f4ebd1",
    "#f5e6b1",
    "#f5e192",
    "#f4dc71",
    "#f6cf59",
    "#f8c141",
    "#fbb227",
    "#ffa200"
  ],
  "bbg-teal": [
    "#efefef",
    "#9ee1d9",
    "#00cfc3",
    "#efefef",
    "#bbe6e1",
    "#7fdbd2",
    "#00cfc3",
    "#efefef",
    "#c5e8e3",
    "#96dfd6",
    "#66d3c9",
    "#00c7bd",
    "#efefef",
    "#cce9e5",
    "#a6e1da",
    "#7fd6cd",
    "#55c7bd",
    "#00aaa0",
    "#efefef",
    "#d1ebe8",
    "#afe4de",
    "#89dcd4",
    "#69cbc1",
    "#45b9af",
    "#00a89d"
  ],
  "bbg-grey": [
    "#efefef",
    "#c4c4c4",
    "#999999",
    "#efefef",
    "#d3d3d3",
    "#b6b6b6",
    "#999999",
    "#efefef",
    "#cbcbcb",
    "#a8a8a8",
    "#868686",
    "#666666",
    "#efefef",
    "#d3d3d3",
    "#b6b6b6",
    "#9b9b9b",
    "#808080",
    "#666666",
    "#efefef",
    "#d7d7d7",
    "#c0c0c0",
    "#a8a8a8",
    "#919191",
    "#7b7b7b",
    "#666666"
  ],
  "bbg-mint-dark": [
    "#525252",
    "#379663",
    "#3ef794",
    "#525252",
    "#3b7054",
    "#2ec273",
    "#3ef794",
    "#525252",
    "#3b5f4c",
    "#379663",
    "#29d87a",
    "#3ef794",
    "#525252",
    "#3b5547",
    "#3a7e5a",
    "#33b06d",
    "#2ddf80",
    "#3ef794",
    "#525252",
    "#3a4f44",
    "#3b7054",
    "#379663",
    "#2ec273",
    "#2fe483",
    "#3ef794"
  ],
  "bbg-red-dark": [
    "#525252",
    "#993349",
    "#ff335f",
    "#525252",
    "#713945",
    "#c6284a",
    "#ff335f",
    "#525252",
    "#603942",
    "#993349",
    "#df2049",
    "#ff335f",
    "#525252",
    "#56393f",
    "#813747",
    "#b42d4a",
    "#e7234d",
    "#ff335f",
    "#525252",
    "#4f393e",
    "#713945",
    "#993349",
    "#c6284a",
    "#eb2550",
    "#ff335f"
  ],
  "bbg-orange-dark": [
    "#525252",
    "#86592d",
    "#ff8000",
    "#525252",
    "#664d33",
    "#aa6622",
    "#ff8000",
    "#525252",
    "#584635",
    "#86592d",
    "#be6d1b",
    "#ff8000",
    "#525252",
    "#504235",
    "#725231",
    "#9b6127",
    "#ca7116",
    "#ff8000",
    "#525252",
    "#4a4035",
    "#664d33",
    "#86592d",
    "#aa6622",
    "#d27313",
    "#ff8000"
  ],
  "bopinion-blue-dark": [
    "#525252",
    "#3669a3",
    "#4da0ff",
    "#525252",
    "#3c5777",
    "#2b7ad5",
    "#4da0ff",
    "#525252",
    "#3c4e64",
    "#3669a3",
    "#3183e2",
    "#4da0ff",
    "#525252",
    "#3b4959",
    "#3a5e88",
    "#3073c0",
    "#3589e9",
    "#4da0ff",
    "#525252",
    "#3a4552",
    "#3c5777",
    "#3669a3",
    "#2b7ad5",
    "#398ded",
    "#4da0ff"
  ],
  "bbg-cyan-dark": [
    "#525252",
    "#337999",
    "#33beff",
    "#525252",
    "#395f71",
    "#2894c6",
    "#33beff",
    "#525252",
    "#395360",
    "#337999",
    "#20a2df",
    "#33beff",
    "#525252",
    "#394d56",
    "#376981",
    "#2d89b4",
    "#23a8e7",
    "#33beff",
    "#525252",
    "#39484f",
    "#395f71",
    "#337999",
    "#2894c6",
    "#25aceb",
    "#33beff"
  ],
  "bbg-honey-dark": [
    "#525252",
    "#907930",
    "#ffc91a",
    "#525252",
    "#6c5f36",
    "#b89625",
    "#ffc91a",
    "#525252",
    "#5c5337",
    "#907930",
    "#cfa51e",
    "#ffc91a",
    "#525252",
    "#534c37",
    "#7a6934",
    "#a88a2a",
    "#ddae19",
    "#ffc91a",
    "#525252",
    "#4d4837",
    "#6c5f36",
    "#907930",
    "#b89625",
    "#e6b515",
    "#ffc91a"
  ],
  "bbg-teal-dark": [
    "#525252",
    "#2b817c",
    "#00F3E5",
    "#525252",
    "#326360",
    "#21a39c",
    "#00F3E5",
    "#525252",
    "#335654",
    "#2b817c",
    "#1ab6ad",
    "#00F3E5",
    "#525252",
    "#344e4d",
    "#306f6b",
    "#25958f",
    "#15c1b7",
    "#00F3E5",
    "#525252",
    "#344948",
    "#326360",
    "#2b817c",
    "#21a39c",
    "#12c9bf",
    "#00F3E5"
  ],
  "bbg-grey-dark": [
    "#525252",
    "#919191",
    "#cccccc",
    "#525252",
    "#7d7d7d",
    "#a5a5a5",
    "#cccccc",
    "#525252",
    "#747474",
    "#919191",
    "#afafaf",
    "#cccccc",
    "#525252",
    "#868686",
    "#8f8f8f",
    "#9d9d9d",
    "#b4b4b4",
    "#cccccc",
    "#525252",
    "#6b6b6b",
    "#7e7e7e",
    "#969696",
    "#a6a6a6",
    "#b8b8b8",
    "#cccccc"
  ]
};
var lt = {
  bgreen: [
    "#efefef",
    "#a1e491",
    "#17cf20",
    "#efefef",
    "#bde7b1",
    "#80d970",
    "#16ca1f",
    "#efefef",
    "#c4ecba",
    "#90e481",
    "#60ce54",
    "#14b81d",
    "#efefef",
    "#ceedc5",
    "#a6e798",
    "#7edb6f",
    "#55ca4a",
    "#14b81d",
    "#efefef",
    "#d1eec8",
    "#ade89f",
    "#85e274",
    "#66cb57",
    "#45b539",
    "#149f14",
    "#efefef",
    "#d0edc7",
    "#ace69b",
    "#83df6f",
    "#60ce4e",
    "#49b63b",
    "#319e28",
    "#138613",
    "#efefef",
    "#d5edcc",
    "#b5e8a6",
    "#93e280",
    "#6bdb57",
    "#57c547",
    "#43b036",
    "#2e9b25",
    "#138613"
  ],
  "bgreen-dark": [
    "#525252",
    "#347f37",
    "#14eb1e",
    "#525252",
    "#376239",
    "#2d9f32",
    "#14eb1e",
    "#525252",
    "#375539",
    "#347f37",
    "#28b12e",
    "#14eb1e",
    "#525252",
    "#374d38",
    "#366d39",
    "#309234",
    "#25bc2c",
    "#14eb1e",
    "#525252",
    "#374938",
    "#376239",
    "#347f37",
    "#2d9f32",
    "#22c32a",
    "#14eb1e"
  ]
};
var Vt = {
  "bbg-red": [
    "#efefef",
    "#ffa5a7",
    "#ff4d64",
    "#efefef",
    "#febebe",
    "#ff8b90",
    "#ff4d64",
    "#efefef",
    "#fbcbca",
    "#ffa5a7",
    "#ff7d85",
    "#ff4d64",
    "#efefef",
    "#fcd0cd",
    "#ffafab",
    "#ff8d8b",
    "#ff676c",
    "#ff4d64",
    "#efefef",
    "#fad5d3",
    "#ffbab6",
    "#ff9e9b",
    "#ff8180",
    "#ff5f67",
    "#ff334e"
  ],
  "bbg-blue": [
    "#efefef",
    "#aed8f8",
    "#4dc1ff",
    "#efefef",
    "#c5e0f5",
    "#94d0fa",
    "#4dc1ff",
    "#efefef",
    "#d0e4f4",
    "#aed8f8",
    "#85cdfc",
    "#4dc1ff",
    "#efefef",
    "#d5e4f3",
    "#b8d9f6",
    "#97cef9",
    "#71c3fc",
    "#4dc1ff",
    "#efefef",
    "#d9e6f3",
    "#c2ddf5",
    "#a8d3f8",
    "#8bcafa",
    "#69c1fd",
    "#4dc1ff"
  ],
  "bbg-red-dark": [
    "#525252",
    "#96464b",
    "#ff4d64",
    "#525252",
    "#754143",
    "#b84a53",
    "#ff4d64",
    "#525252",
    "#653e3f",
    "#96464b",
    "#ca4b57",
    "#ff4d64",
    "#525252",
    "#5b3c3c",
    "#824346",
    "#ab4950",
    "#d44c5a",
    "#ff4d64",
    "#525252",
    "#543b3b",
    "#754143",
    "#96464b",
    "#b84a53",
    "#db4c5b",
    "#ff4d64"
  ],
  "bbg-blue-dark": [
    "#525252",
    "#4b7692",
    "#4dc1ff",
    "#525252",
    "#455f71",
    "#4f8eb5",
    "#4dc1ff",
    "#525252",
    "#415361",
    "#4b7692",
    "#509bc7",
    "#4dc1ff",
    "#525252",
    "#3f4d57",
    "#48687e",
    "#4e84a7",
    "#50a2d2",
    "#4dc1ff",
    "#525252",
    "#3d4851",
    "#455f71",
    "#4b7692",
    "#4f8eb5",
    "#50a7da",
    "#4dc1ff"
  ]
};
var mr = {
  singlehue: {
    cyan: {
      colors: Ce(s.cyan),
      indices: Object.assign({}, Fe),
      neutral: s.neutral
    },
    honey: {
      colors: Ce(s.honey),
      indices: {
        1: [3],
        2: [1, 3],
        3: [1, 2, 3],
        4: [1, 2, 3, 4],
        5: [0, 1, 2, 3, 4],
        6: [0, 1, 2, 3, 4, 5],
        7: [0, 1, 2, 3, 4, 5, 6]
      },
      neutral: s.neutral
    },
    teal: {
      colors: Ce(s.teal),
      indices: Object.assign({}, Fe),
      neutral: s.neutral
    },
    orange: {
      colors: Ce(s.orange),
      indices: Object.assign({}, Fe),
      neutral: s.neutral
    },
    blueBW: {
      colors: Ce(W.blue),
      indices: Object.assign({}, Fe),
      neutral: s.neutral
    },
    red: {
      colors: Ce(W.red),
      indices: Object.assign({}, Fe),
      neutral: s.neutral
    },
    greyscale: {
      colors: Ce(W.black),
      indices: Object.assign({}, Fe),
      neutral: s.neutral
    },
    greenBGreen: {
      colors: Ce(Bt.green),
      indices: Object.assign({}, Fe),
      neutral: s.neutral
    },
    cyanBGreen: {
      colors: Ce(Bt.cyan),
      indices: Object.assign({}, Fe),
      neutral: s.neutral
    },
    blueBNEF: {
      colors: Ce(ot.blue),
      indices: Object.assign({}, Fe),
      neutral: s.neutral
    },
    purpleBNEF: {
      colors: Ce(ot.purple),
      indices: Object.assign({}, Fe),
      neutral: s.neutral
    },
    greenBNEF: {
      colors: Ce(ot.green),
      indices: Object.assign({}, Fe),
      neutral: s.neutral
    },
    blueOP: {
      colors: Xa(we.blue),
      indices: {
        1: [6],
        2: [2, 6],
        3: [2, 6, 8],
        4: [2, 4, 6, 8],
        5: [2, 4, 6, 8, 9],
        6: [1, 2, 4, 6, 8, 9],
        7: [1, 2, 4, 6, 8, 9, 10, 11]
      },
      neutral: s.neutral
    },
    "bbg-cyan": {
      colors: F["bbg-cyan"],
      indices: Object.assign({}, ke),
      neutral: s.neutral
    },
    "bbg-honey": {
      colors: F["bbg-honey"],
      indices: Object.assign({}, ke),
      neutral: s.neutral
    },
    "bbg-orange": {
      colors: F["bbg-orange"],
      indices: Object.assign({}, ke),
      neutral: s.neutral
    },
    "bbg-mint": {
      colors: F["bbg-mint"],
      indices: Object.assign({}, ke),
      neutral: s.neutral
    },
    "bbg-grey": {
      colors: F["bbg-grey"],
      indices: Object.assign({}, ke),
      neutral: s.neutral
    },
    "bbg-teal": {
      colors: F["bbg-teal"],
      indices: Object.assign({}, ke),
      neutral: s.neutral
    },
    "bopinion-blue": {
      colors: F["bopinion-blue"],
      indices: Object.assign({}, ke),
      neutral: s.neutral
    },
    bgreen: {
      colors: lt.bgreen,
      indices: Object.assign({}, ke),
      neutral: s.neutral
    }
  },
  singlehueDark: {
    cyan: {
      colors: Ke(L.cyan),
      indices: Object.assign({}, et),
      neutral: L.neutral
    },
    honey: {
      colors: Ke(L.honey),
      indices: Object.assign({}, et),
      neutral: L.neutral
    },
    greyscale: {
      colors: Ke(L.black),
      indices: Object.assign({}, et),
      neutral: L.neutral
    },
    orange: {
      colors: Ke(s.orange),
      indices: Object.assign({}, et),
      neutral: L.neutral
    },
    teal: {
      colors: Ke(s.teal),
      indices: Object.assign({}, et),
      neutral: L.neutral
    },
    citylabCyan: {
      colors: Ke(s.cyan),
      indices: Object.assign({}, et),
      neutral: L.neutral
    },
    blueBNEF: {
      colors: Ke(ot.blue),
      indices: Object.assign({}, et),
      neutral: s.neutral
    },
    purpleBNEF: {
      colors: Ke(ot.purple),
      indices: Object.assign({}, et),
      neutral: s.neutral
    },
    greenBNEF: {
      colors: Ke(ot.green),
      indices: Object.assign({}, et),
      neutral: s.neutral
    },
    "bbg-cyan-dark": {
      colors: F["bbg-cyan-dark"],
      indices: Object.assign({}, ke),
      neutral: L.neutral
    },
    "bbg-honey-dark": {
      colors: F["bbg-honey-dark"],
      indices: Object.assign({}, ke),
      neutral: L.neutral
    },
    "bbg-grey-dark": {
      colors: F["bbg-grey-dark"],
      indices: Object.assign({}, ke),
      neutral: L.neutral
    },
    "bbg-orange-dark": {
      colors: F["bbg-orange-dark"],
      indices: Object.assign({}, ke),
      neutral: L.neutral
    },
    "bbg-mint-dark": {
      colors: F["bbg-mint-dark"],
      indices: Object.assign({}, ke),
      neutral: L.neutral
    },
    "bgreen-dark": {
      colors: lt["bgreen-dark"],
      indices: Object.assign({}, ke),
      neutral: L.neutral
    },
    "bopinion-blue-dark": {
      colors: F["bopinion-blue-dark"],
      indices: Object.assign({}, ke),
      neutral: L.neutral
    },
    "bbg-teal-dark": {
      colors: F["bbg-teal-dark"],
      indices: Object.assign({}, ke),
      neutral: L.neutral
    }
  },
  categorical: {
    cyanmint: {
      colors: [s.cyan.base, s.mint.base],
      indices: {
        1: [1],
        2: [0, 1]
      },
      neutral: s.neutral
    },
    honeymagenta: {
      colors: [
        s.honey.base,
        s.magenta.base,
        s.cyan.base,
        s.cyan.d3,
        s.mint.base,
        s.mint.d2,
        s.magenta.d2
      ],
      indices: Object.assign({}, Pe),
      neutral: s.neutral
    },
    bluegrey: {
      colors: [
        W.blue.base,
        W.red.base,
        W.green.base,
        W.lilac.base,
        W.yellow.base,
        W.white.base,
        W.black.l1
      ],
      indices: Object.assign({}, Pe),
      neutral: s.neutral
    },
    bluehoney: {
      colors: [
        we.blue.base,
        s.orange.base,
        s.honey.base,
        we.blue.d2,
        s.mint.base,
        s.mint.d2,
        s.honey.d1
      ],
      indices: Object.assign({}, Pe),
      neutral: s.neutral
    },
    cyangrey: {
      colors: ["#65c9ff", "#fe8090", "#feedb8", "#e5e5e5"],
      indices: Object.assign({}, aa),
      neutral: s.neutral
    },
    blueredyellow: {
      colors: [
        W.blue.base,
        W.red.base,
        W.yellow.base
      ],
      indices: Object.assign({}, ra),
      neutral: s.neutral
    },
    BGreen: {
      colors: Bt.discrete,
      indices: Object.assign({}, Pe),
      neutral: s.neutral
    },
    BNEF: {
      colors: ot.discrete,
      indices: Object.assign({}, Pe),
      neutral: s.neutral
    },
    citylab: {
      colors: [
        s.black.l1,
        s.orange.base,
        s.cyan.base,
        s.orange.l1,
        s.teal.base,
        s.orange.l2,
        s.cyan.l2
      ],
      indices: Object.assign({}, Pe),
      neutral: s.neutral
    }
  },
  categoricalDark: {
    cyanmint: {
      colors: [s.cyan.base, s.mint.base],
      indices: {
        1: [1],
        2: [0, 1]
      },
      neutral: L.neutral
    },
    honeymagenta: {
      colors: [
        s.honey.base,
        s.magenta.base,
        s.cyan.base,
        s.cyan.d3,
        s.mint.base,
        s.mint.d2,
        s.magenta.d2
      ],
      indices: Object.assign({}, Pe),
      neutral: L.neutral
    },
    bluegrey: {
      colors: [
        W.blue.base,
        W.red.base,
        W.green.base,
        W.lilac.base,
        W.yellow.base,
        W.white.base,
        W.black.l1
      ],
      indices: Object.assign({}, Pe),
      neutral: L.neutral
    },
    bluehoney: {
      colors: [
        we.blue.base,
        s.orange.base,
        s.honey.base,
        we.blue.d2,
        s.mint.base,
        s.mint.d2,
        s.honey.d1
      ],
      indices: Object.assign({}, Pe),
      neutral: L.neutral
    },
    cyangrey: {
      colors: ["#65c9ff", "#fe8090", "#feedb8", "#e5e5e5"],
      indices: Object.assign({}, aa),
      neutral: L.neutral
    },
    blueredyellow: {
      colors: [
        W.blue.base,
        W.red.base,
        W.yellow.base
      ],
      indices: Object.assign({}, ra),
      neutral: L.neutral
    },
    BGreen: {
      colors: Bt.discrete,
      indices: Object.assign({}, Pe),
      neutral: L.neutral
    },
    BNEF: {
      colors: ot.discrete,
      indices: Object.assign({}, Pe),
      neutral: L.neutral
    }
  },
  diverging: {
    cyanorange: {
      ...de(
        F["bbg-cyan"],
        F["bbg-orange"]
      ),
      indices: Object.assign({}, Re)
    },
    tealorange: {
      colors: [
        s.teal.base,
        s.teal.l1,
        s.teal.l2,
        s.neutral,
        s.orange.l2,
        s.orange.l1,
        s.orange.base
      ],
      indices: Object.assign({}, Te),
      neutral: s.neutral
    },
    blackorange: {
      colors: [
        s.black.d2,
        s.black.d1,
        s.black.base,
        s.neutral,
        s.orange.l2,
        s.orange.l1,
        s.orange.base
      ],
      indices: Object.assign({}, bn),
      neutral: s.neutral
    },
    blackcyan: {
      colors: [
        s.black.d2,
        s.black.d1,
        s.black.base,
        s.neutral,
        s.cyan.l2,
        s.cyan.l1,
        s.cyan.base
      ],
      indices: Object.assign({}, Te),
      neutral: s.neutral
    },
    blackteal: {
      colors: [
        s.black.d2,
        s.black.d1,
        s.black.base,
        s.neutral,
        s.teal.l2,
        s.teal.l1,
        s.teal.base
      ],
      indices: Object.assign({}, Te),
      neutral: s.neutral
    },
    cyanred: {
      colors: ["#65c9ff", "#ccedff", "#e5e5e5", "#ffe0e4", "#fe8090"],
      indices: {
        1: Nt(4),
        2: Z(2),
        3: Z(3),
        4: Z(4),
        5: Z(5),
        6: Z(6),
        7: Z(7)
      },
      neutral: s.neutral
    },
    bluered: {
      colors: [
        W.blue.base,
        W.blue.l1,
        W.blue.l2,
        s.neutral,
        W.red.l2,
        W.red.l1,
        W.red.base
      ],
      indices: Object.assign({}, Te),
      neutral: s.neutral
    },
    blackred: {
      colors: [
        W.black.d2,
        W.black.d1,
        W.black.base,
        s.neutral,
        W.red.l2,
        W.red.l1,
        W.red.base
      ],
      indices: Object.assign({}, bn),
      neutral: s.neutral
    },
    blackblue: {
      colors: [
        W.black.d2,
        W.black.d1,
        W.black.base,
        s.neutral,
        W.blue.base,
        W.blue.l1,
        W.blue.l2
      ],
      indices: Object.assign({}, Te),
      neutral: s.neutral
    },
    blueorange: {
      ...de(
        F["bopinion-blue"],
        F["bbg-orange"]
      ),
      indices: Object.assign({}, We)
    },
    bluehoney: {
      colors: [
        we.blue.base,
        we.blue.l2,
        we.blue.l4,
        s.neutral,
        s.honey.l2,
        s.honey.l1,
        s.honey.base
      ],
      indices: Object.assign({}, Te),
      neutral: s.neutral
    },
    greenblueBGreen: {
      colors: [
        we.blue.base,
        we.blue.l2,
        we.blue.l4,
        s.neutral,
        s.honey.l2,
        s.honey.l1,
        s.honey.base
      ],
      indices: Object.assign({}, Te),
      neutral: s.neutral
    },
    greengoldBGreen: {
      colors: [
        we.blue.base,
        we.blue.l2,
        we.blue.l4,
        s.neutral,
        s.honey.l2,
        s.honey.l1,
        s.honey.base
      ],
      indices: Object.assign({}, Te),
      neutral: s.neutral
    },
    bluegreenBNEF: {
      colors: [
        "#0D9DDB",
        "#1DB8FB",
        "#62D0FF",
        "#E5E5E5",
        "#93FFEF",
        "#62F0DB",
        "#00D2B3"
      ],
      indices: Object.assign({}, Te),
      neutral: s.neutral
    },
    cyanhoney: {
      ...de(F["bbg-cyan"], F["bbg-honey"]),
      indices: Object.assign({}, Re)
    },
    greyblue: {
      ...de(
        F["bbg-grey"],
        F["bopinion-blue"]
      ),
      indices: Object.assign({}, Re)
    },
    honeyBGreen: {
      ...de(F["bbg-honey"], lt.bgreen),
      indices: Object.assign({}, Re)
    },
    cyanBGreen: {
      ...de(F["bbg-cyan"], lt.bgreen),
      indices: Object.assign({}, Re)
    },
    greyBGreen: {
      ...de(F["bbg-grey"], lt.bgreen),
      indices: Object.assign({}, Re)
    },
    orangeteal: {
      ...de(
        F["bbg-orange"],
        F["bbg-teal"]
      ),
      indices: Object.assign({}, Re)
    },
    cyanorangeCity: {
      ...de(
        F["bbg-cyan"],
        F["bbg-orange"]
      ),
      indices: Object.assign({}, Re)
    },
    redblue: {
      ...de(
        Vt["bbg-red"],
        Vt["bbg-blue"]
      ),
      indices: Object.assign({}, Re)
    }
  },
  divergingDark: {
    cyanorange: {
      ...de(
        F["bbg-cyan-dark"],
        F["bbg-orange-dark"]
      ),
      indices: Object.assign({}, Re)
    },
    // duplicate of "cyanorange" but we need the consistent naming so darkThemedGradient() can find it
    cyanorangeCity: {
      ...de(
        F["bbg-cyan-dark"],
        F["bbg-orange-dark"]
      ),
      indices: Object.assign({}, Re)
    },
    citylabCyanOrange: {
      colors: [
        s.cyan.base,
        s.cyan.d1,
        s.cyan.d2,
        s.neutral,
        s.orange.d2,
        s.orange.d1,
        s.orange.base
      ],
      indices: Object.assign({}, Te),
      neutral: L.neutral
    },
    tealorange: {
      colors: [
        s.teal.base,
        s.teal.d1,
        s.teal.d2,
        s.neutral,
        s.orange.d2,
        s.orange.d1,
        s.orange.base
      ],
      indices: Object.assign({}, Te),
      neutral: L.neutral
    },
    blackorange: {
      colors: [
        L.black.l2,
        L.black.l1,
        L.black.base,
        L.neutral,
        L.orange.d2,
        L.orange.d1,
        L.orange.base
      ],
      indices: Object.assign({}, bn),
      neutral: L.neutral
    },
    blackcyan: {
      colors: [
        L.black.l2,
        L.black.l1,
        L.black.base,
        L.neutral,
        L.cyan.d2,
        L.cyan.d1,
        L.cyan.base
      ],
      indices: Object.assign({}, Te),
      neutral: L.neutral
    },
    cyanred: {
      colors: ["#2eaaec", "#327294", "#4c4c4c", "#bb4c5a", "#ff5167"],
      indices: {
        1: Nt(4),
        2: Z(2),
        3: Z(3),
        4: Z(4),
        5: Z(5),
        6: Z(6),
        7: Z(7)
      },
      neutral: L.neutral
    },
    cyanhoneyDark: {
      ...de(
        F["bbg-cyan-dark"],
        F["bbg-honey-dark"]
      ),
      indices: Object.assign({}, We)
    },
    greyblueDark: {
      ...de(
        F["bbg-grey-dark"],
        F["bopinion-blue-dark"]
      ),
      indices: Object.assign({}, We)
    },
    honeyBGreenDark: {
      ...de(
        F["bbg-honey-dark"],
        lt["bgreen-dark"]
      ),
      indices: Object.assign({}, We)
    },
    cyanBGreenDark: {
      ...de(
        F["bbg-cyan-dark"],
        lt["bgreen-dark"]
      ),
      indices: Object.assign({}, We)
    },
    greyBGreenDark: {
      ...de(
        F["bbg-grey-dark"],
        lt["bgreen-dark"]
      ),
      indices: Object.assign({}, We)
    },
    bluegreenBNEF: {
      colors: [
        "#0D9DDB",
        "#0984B9",
        "#046A96",
        "#3B3B3B",
        "#029983",
        "#01B69B",
        "#00D2B3"
      ],
      indices: Object.assign({}, Te),
      neutral: s.neutral
    },
    orangecyanDark: {
      ...de(
        F["bbg-orange-dark"],
        F["bbg-cyan-dark"]
      ),
      indices: Object.assign({}, We)
    },
    orangetealDark: {
      ...de(
        F["bbg-orange-dark"],
        F["bbg-teal-dark"]
      ),
      indices: Object.assign({}, We)
    },
    redblue: {
      ...de(
        Vt["bbg-red-dark"],
        Vt["bbg-blue-dark"]
      ),
      indices: Object.assign({}, We)
    },
    blueorange: {
      ...de(
        F["bopinion-blue-dark"],
        F["bbg-orange-dark"]
      ),
      indices: Object.assign({}, We)
    }
  }
};
var zt = {
  business: [
    {
      title: "Single Hue",
      palettes: [
        "singlehue.bbg-cyan",
        "singlehue.bbg-honey",
        "singlehue.bbg-orange",
        "singlehue.bbg-mint"
      ]
    },
    {
      title: "Diverging",
      palettes: ["diverging.cyanhoney"]
    },
    {
      title: "Categorical",
      palettes: ["categorical.honeymagenta", "categorical.cyanmint"]
    },
    {
      title: "Politics",
      palettes: ["diverging.redblue"]
    },
    {
      title: "COVID tracker",
      palettes: ["diverging.cyanorange"]
    }
  ],
  "business-dark": [
    {
      title: "Single Hue",
      palettes: [
        "singlehueDark.bbg-cyan-dark",
        "singlehueDark.bbg-honey-dark",
        "singlehueDark.bbg-orange-dark",
        "singlehueDark.bbg-mint-dark",
        "singlehueDark.bbg-grey-dark"
      ]
    },
    {
      title: "Diverging",
      palettes: ["divergingDark.cyanhoneyDark"]
    },
    {
      title: "Categorical",
      palettes: ["categoricalDark.honeymagenta", "categoricalDark.cyanmint"]
    },
    {
      title: "Politics",
      palettes: ["divergingDark.redblue"]
    },
    {
      title: "COVID tracker",
      palettes: ["divergingDark.cyanorange"]
    }
  ],
  terminal: [
    {
      title: "Single Hue",
      palettes: [
        "singlehueDark.bbg-cyan-dark",
        "singlehueDark.bbg-honey-dark",
        "singlehueDark.bbg-grey-dark"
      ]
    },
    {
      title: "Diverging",
      palettes: ["divergingDark.cyanhoneyDark"]
    },
    {
      title: "Categorical",
      palettes: ["categoricalDark.honeymagenta", "categoricalDark.cyanmint"]
    },
    {
      title: "Politics",
      palettes: ["divergingDark.redblue"]
    },
    {
      title: "COVID tracker",
      palettes: ["divergingDark.cyanorange"]
    }
  ],
  coth: [
    {
      title: "Single Hue",
      palettes: [
        "singlehueDark.bbg-cyan-dark",
        "singlehueDark.bbg-honey-dark",
        "singlehueDark.bbg-grey-dark"
      ]
    },
    {
      title: "Diverging",
      palettes: ["divergingDark.cyanhoneyDark"]
    },
    {
      title: "Categorical",
      palettes: ["categoricalDark.honeymagenta", "categoricalDark.cyanmint"]
    }
  ],
  bizweek: [
    {
      title: "Single Hue",
      palettes: ["singlehue.blueBW", "singlehue.red", "singlehue.greyscale"]
    },
    {
      title: "Diverging",
      palettes: ["diverging.bluered"]
    },
    {
      title: "Categorical",
      palettes: ["categorical.bluegrey"]
    }
  ],
  "bizweek-dark": [
    {
      title: "Single Hue",
      palettes: ["singlehue.blueBW", "singlehue.red", "singlehue.greyscale"]
    },
    {
      title: "Diverging",
      palettes: ["diverging.bluered"]
    },
    {
      title: "Categorical",
      palettes: ["categoricalDark.bluegrey"]
    }
  ],
  green: [
    {
      title: "Single Hue",
      palettes: [
        "singlehue.bgreen",
        "singlehue.bbg-cyan",
        "singlehue.bbg-grey"
      ]
    },
    {
      title: "Diverging",
      palettes: ["diverging.honeyBGreen", "diverging.cyanBGreen"]
    },
    {
      title: "Categorical",
      palettes: ["categorical.BGreen"]
    }
  ],
  "green-dark": [
    {
      title: "Single Hue",
      palettes: [
        "singlehueDark.bgreen-dark",
        "singlehueDark.bbg-cyan-dark",
        "singlehueDark.bbg-grey-dark"
      ]
    },
    {
      title: "Diverging",
      palettes: [
        "divergingDark.honeyBGreenDark",
        "divergingDark.cyanBGreenDark",
        "divergingDark.greyBGreenDark"
      ]
    },
    {
      title: "Categorical",
      palettes: ["categoricalDark.BGreen"]
    }
  ],
  bnef: [
    {
      title: "Single Hue",
      palettes: [
        "singlehue.blueBNEF",
        "singlehue.purpleBNEF",
        "singlehue.greenBNEF"
      ]
    },
    {
      title: "Diverging",
      palettes: ["diverging.bluegreenBNEF"]
    },
    {
      title: "Categorical",
      palettes: ["categorical.BNEF"]
    }
  ],
  "bnef-dark": [
    {
      title: "Single Hue",
      palettes: [
        "singlehueDark.blueBNEF",
        "singlehueDark.purpleBNEF",
        "singlehueDark.greenBNEF"
      ]
    },
    {
      title: "Diverging",
      palettes: ["divergingDark.bluegreenBNEF"]
    },
    {
      title: "Categorical",
      palettes: ["categoricalDark.BNEF"]
    }
  ],
  citylab: [
    {
      title: "Single Hue",
      palettes: [
        "singlehue.bbg-orange",
        "singlehue.bbg-teal",
        "singlehue.bbg-grey"
      ]
    },
    {
      title: "Diverging",
      palettes: ["diverging.orangeteal", "diverging.cyanorangeCity"]
    },
    {
      title: "Categorical",
      palettes: ["categorical.citylab"]
    }
  ],
  "citylab-dark": [
    {
      title: "Single Hue",
      palettes: [
        "singlehueDark.bbg-orange-dark",
        "singlehueDark.bbg-teal-dark",
        "singlehueDark.bbg-grey-dark"
      ]
    },
    {
      title: "Diverging",
      palettes: [
        "divergingDark.orangetealDark",
        "divergingDark.orangecyanDark"
      ]
    },
    {
      title: "Categorical",
      palettes: ["categorical.citylab"]
    }
  ],
  opinion: [
    {
      title: "Single Hue",
      palettes: ["singlehue.bopinion-blue"]
    },
    {
      title: "Diverging",
      palettes: ["diverging.blueorange"]
    },
    {
      title: "Categorical",
      palettes: ["categorical.bluehoney"]
    }
  ],
  "opinion-dark": [
    {
      title: "Single Hue",
      palettes: ["singlehueDark.bopinion-blue-dark"]
    },
    {
      title: "Diverging",
      palettes: ["divergingDark.blueorange"]
    },
    {
      title: "Categorical",
      palettes: ["categoricalDark.bluehoney"]
    }
  ]
};
zt.bi = zt.terminal;
zt.daybreak = zt["business-dark"];
var yr = (p) => {
  const R = {
    pie: "categorical",
    comparison: "categorical",
    line: "categorical",
    bar: "categorical"
  };
  return p in R ? R[p] : "categorical";
};
var Ka = () => [
  "Govt",
  "Corp",
  "Mtge",
  "M-Mkt",
  "Muni",
  "Pfd",
  "Equity",
  "Comdty",
  "Index",
  "Curncy",
  "Alpha",
  "Client"
];
var _r = (p) => {
  let R = "";
  const T = [];
  let l = "";
  const N = p.trim().split(/\s+/);
  let V = 0, b = 0, y = N[0].toUpperCase();
  y === "FIFW" || y === "NXTW" ? N.shift() : y = "";
  const D = Ka();
  for (let P = 0; P < N.length; P++) {
    const H = N[P];
    if (D.indexOf(H) >= 0) {
      b = P;
      const q = N.slice(V, b).join(" ").toUpperCase();
      T.push(q + " " + H), V = P + 1;
    }
  }
  return T.length ? (R = N[b + 1] || "", b + 2 < N.length && (l = N.slice(b + 2).join(" "))) : (R = N[0] || "", N.length > 1 && (l = N.slice(1).join(" "))), R ? [
    "ALERT",
    "BADGE",
    "BRIEF",
    "BSHAR",
    "BUNIT",
    "CHART",
    "CHOMP",
    "DAYBR",
    "DRAFT",
    "FIRST",
    "FLAGS",
    "GIPALL",
    "JREAD",
    "LONDON",
    "MEDIA",
    "MTEAM",
    "NOTES",
    "PEOPLE",
    "PHISH",
    "QDASH",
    "QUICK",
    "RTCPU",
    "RVIEW",
    "SEARCH",
    "TFLOW",
    "TRACE",
    "TWEET",
    "TWEETS",
    "TWITTER",
    "USSWAP",
    "WATCH"
  ].includes(R) && (R = R.substr(0, 4)) : T.length > 0 && (R = "Q"), { mnemonic: R, securities: T, tail: l, prefix: y };
};
var er = [
  "MMM D",
  // Jun 1
  "MMM DD",
  // Jun 1
  "MMM YY",
  // Jun 1
  "MMM. D",
  // Jun. 1
  "MMM. DD",
  // Jun. 01
  "MMM. YY",
  // Jun. 01
  "MMM-D",
  // Jun-1
  "MMM-DD",
  // Jun-01
  "MMM-YY",
  // Jun-01
  "MMMM-D",
  // June-1
  "MMMM-DD",
  // June-01
  "MMMM-YY",
  // June-01
  "MMMM D",
  // June 1
  "D MMM",
  // 1 Jun
  "DD MMM",
  // 1 Jun
  "YY MMM",
  // 23 Jun
  "D MMM.",
  // 1 Jun.
  "DD MMM.",
  // 01 Jun.
  "YY MMM.",
  // 01 Jun.
  "D-MMM",
  // 1-Jun
  "DD-MMM",
  // 16-Jun
  "YY-MMM",
  // 16-Jun
  "D-MMMM",
  // 1-June
  "DD-MMMM",
  // 01-June
  "YY-MMMM",
  // 01-June
  "D MMMM",
  // 1 June
  "DD-MMM-YY",
  // 16-Jun-01
  "DD-MMMM-YY"
  // 16-June-01
];
var tr = [
  ...er,
  // the below values are only ambiguous in that they fail
  // browser date parsing
  "MM/DD/YY",
  // 12/31/12 (fails terminal)
  "DD/MM/YY",
  // 31/12/10 (fails terminal)
  "MMM YYYY",
  // Jun 2019 (fails safari)
  "YYYY MMM",
  // 2019 Jun (fails safari)
  "MMMM YYYY",
  // June 2019 (fails safari)
  "YYYY MMMM"
  // 2019 June (fails safari)
];
var pr = [
  "YYYY-MM-DD",
  // 2017-01-91
  "MM-DD-YYYY",
  // 01-01-2017
  "YYYY/MM/DD",
  // '2017/01/01',
  "YYYY/M/D",
  // '2017/1/1',
  "MM/DD/YYYY",
  // 01/01/2017
  "MM.DD.YYYY",
  // 01.01.2017
  "M/D/YYYY",
  // 1/1/2017
  "MM/DD/YY",
  // 01/01/17
  "M/D/YY",
  // 1/1/17
  "MMM 'YY",
  // Jan '13
  "MMM-YY",
  // Jan-13
  "MMMM 'YY",
  // January '13
  "MMM \u2019YY",
  // Jan ’13
  "MMMM \u2019YY",
  // January ’13
  "MMM D, 'YY",
  // Jan 1, '13
  "MMM DD, 'YY",
  // Jan 01, '13
  "MMM D, YYYY",
  // Jan 1, 2013
  "MMM DD, YYYY",
  // Jan 01, 2013
  "MMMM D, 'YY",
  // January 1, '13
  "MMMM DD, 'YY",
  // January 01, '13
  "MMMM D, YYYY",
  // January 1, 2013
  "MMMM DD, YYYY",
  // January 01, 2013
  "MMM YYYY",
  // Jun 2017
  "MMM. YYYY",
  // Jun. 2017
  "MMMM YYYY",
  // June 2017
  "YYYY MMM",
  // 2017 Jun
  "YYYY MMM.",
  // 2017 Jun.
  "YYYY MMMM",
  // 2017 June
  "DD-MMM-YY",
  // 16-Jun-01
  "DD-MMMM-YY",
  // 16-June-01
  ...tr
];
var nr = "%";
var ar = "K";
var rr = "M";
var ir = "B";
var sr = "T";
var Mr = {
  [nr]: 100,
  [ar]: 1e3,
  [rr]: 1e6,
  [ir]: 1e9,
  [sr]: 1e12
};
var Dr = 1e3 * 60 * 60 * 24;
var Yr = 1e3 * 60;
var kr = (p) => {
  if (!(p != null && p.trim())) return null;
  try {
    return JSON.parse(p);
  } catch (R) {
    try {
      const T = [p].map((l) => l.replace(/([{,]\s*)'([^']+)'(\s*:)/g, '$1"$2"$3')).map(
        (l) => l.replace(/([{,]\s*)([a-zA-Z0-9_$]+)(\s*:)/g, '$1"$2"$3')
      ).map((l) => l.replace(/:\s*'(([^'\\]|\\.)*?)'/g, ': "$1"')).map((l) => l.replace(/,\s*]/g, "]").replace(/,\s*}/g, "}")).pop();
      return JSON.parse(T);
    } catch {
      throw new Error(`Invalid JSON: ${R.message}`);
    }
  }
};
function or(p) {
  throw new Error('Could not dynamically require "' + p + '". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.');
}
var ia = { exports: {} };
(function(p, R) {
  (function(T, l) {
    p.exports = l();
  })(Qe, function() {
    var T;
    function l() {
      return T.apply(null, arguments);
    }
    function N(e) {
      return e instanceof Array || Object.prototype.toString.call(e) === "[object Array]";
    }
    function V(e) {
      return e != null && Object.prototype.toString.call(e) === "[object Object]";
    }
    function b(e, t) {
      return Object.prototype.hasOwnProperty.call(e, t);
    }
    function y(e) {
      if (Object.getOwnPropertyNames) return Object.getOwnPropertyNames(e).length === 0;
      for (var t in e) if (b(e, t)) return;
      return 1;
    }
    function D(e) {
      return e === void 0;
    }
    function P(e) {
      return typeof e == "number" || Object.prototype.toString.call(e) === "[object Number]";
    }
    function H(e) {
      return e instanceof Date || Object.prototype.toString.call(e) === "[object Date]";
    }
    function q(e, t) {
      for (var n = [], a = e.length, r = 0; r < a; ++r) n.push(t(e[r], r));
      return n;
    }
    function he(e, t) {
      for (var n in t) b(t, n) && (e[n] = t[n]);
      return b(t, "toString") && (e.toString = t.toString), b(t, "valueOf") && (e.valueOf = t.valueOf), e;
    }
    function oe(e, t, n, a) {
      return Nn(e, t, n, a, true).utc();
    }
    function S(e) {
      return e._pf == null && (e._pf = { empty: false, unusedTokens: [], unusedInput: [], overflow: -2, charsLeftOver: 0, nullInput: false, invalidEra: null, invalidMonth: null, invalidFormat: false, userInvalidated: false, iso: false, parsedDateParts: [], era: null, meridiem: null, rfc2822: false, weekdayMismatch: false }), e._pf;
    }
    function C(e) {
      if (e._isValid == null) {
        var t = S(e), n = I.call(t.parsedDateParts, function(a) {
          return a != null;
        }), n = !isNaN(e._d.getTime()) && t.overflow < 0 && !t.empty && !t.invalidEra && !t.invalidMonth && !t.invalidWeekday && !t.weekdayMismatch && !t.nullInput && !t.invalidFormat && !t.userInvalidated && (!t.meridiem || t.meridiem && n);
        if (e._strict && (n = n && t.charsLeftOver === 0 && t.unusedTokens.length === 0 && t.bigHour === void 0), Object.isFrozen != null && Object.isFrozen(e)) return n;
        e._isValid = n;
      }
      return e._isValid;
    }
    function k(e) {
      var t = oe(NaN);
      return e != null ? he(S(t), e) : S(t).userInvalidated = true, t;
    }
    var I = Array.prototype.some || function(e) {
      for (var t = Object(this), n = t.length >>> 0, a = 0; a < n; a++) if (a in t && e.call(this, t[a], a, t)) return true;
      return false;
    }, z = l.momentProperties = [], U = false;
    function _e(e, t) {
      var n, a, r, i = z.length;
      if (D(t._isAMomentObject) || (e._isAMomentObject = t._isAMomentObject), D(t._i) || (e._i = t._i), D(t._f) || (e._f = t._f), D(t._l) || (e._l = t._l), D(t._strict) || (e._strict = t._strict), D(t._tzm) || (e._tzm = t._tzm), D(t._isUTC) || (e._isUTC = t._isUTC), D(t._offset) || (e._offset = t._offset), D(t._pf) || (e._pf = S(t)), D(t._locale) || (e._locale = t._locale), 0 < i) for (n = 0; n < i; n++) D(r = t[a = z[n]]) || (e[a] = r);
      return e;
    }
    function ie(e) {
      _e(this, e), this._d = new Date(e._d != null ? e._d.getTime() : NaN), this.isValid() || (this._d = /* @__PURE__ */ new Date(NaN)), U === false && (U = true, l.updateOffset(this), U = false);
    }
    function ee(e) {
      return e instanceof ie || e != null && e._isAMomentObject != null;
    }
    function Me(e) {
      l.suppressDeprecationWarnings === false && typeof console < "u" && console.warn && console.warn("Deprecation warning: " + e);
    }
    function te(e, t) {
      var n = true;
      return he(function() {
        if (l.deprecationHandler != null && l.deprecationHandler(null, e), n) {
          for (var a, r, i = [], o = arguments.length, c = 0; c < o; c++) {
            if (a = "", typeof arguments[c] == "object") {
              for (r in a += `
[` + c + "] ", arguments[0]) b(arguments[0], r) && (a += r + ": " + arguments[0][r] + ", ");
              a = a.slice(0, -2);
            } else a = arguments[c];
            i.push(a);
          }
          Me(e + `
Arguments: ` + Array.prototype.slice.call(i).join("") + `
` + new Error().stack), n = false;
        }
        return t.apply(this, arguments);
      }, t);
    }
    var fe = {};
    function J(e, t) {
      l.deprecationHandler != null && l.deprecationHandler(e, t), fe[e] || (Me(t), fe[e] = true);
    }
    function E(e) {
      return typeof Function < "u" && e instanceof Function || Object.prototype.toString.call(e) === "[object Function]";
    }
    function me(e, t) {
      var n, a = he({}, e);
      for (n in t) b(t, n) && (V(e[n]) && V(t[n]) ? (a[n] = {}, he(a[n], e[n]), he(a[n], t[n])) : t[n] != null ? a[n] = t[n] : delete a[n]);
      for (n in e) b(e, n) && !b(t, n) && V(e[n]) && (a[n] = he({}, a[n]));
      return a;
    }
    function pe(e) {
      e != null && this.set(e);
    }
    l.suppressDeprecationWarnings = false, l.deprecationHandler = null;
    var w = Object.keys || function(e) {
      var t, n = [];
      for (t in e) b(e, t) && n.push(t);
      return n;
    };
    function h(e, t, n) {
      var a = "" + Math.abs(e);
      return (0 <= e ? n ? "+" : "" : "-") + Math.pow(10, Math.max(0, t - a.length)).toString().substr(1) + a;
    }
    var g = /(\[[^\[]*\])|(\\)?([Hh]mm(ss)?|Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Qo?|N{1,5}|YYYYYY|YYYYY|YYYY|YY|y{2,4}|yo?|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|kk?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g, Y = /(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g, m = {}, v = {};
    function u(e, t, n, a) {
      var r = typeof a == "string" ? function() {
        return this[a]();
      } : a;
      e && (v[e] = r), t && (v[t[0]] = function() {
        return h(r.apply(this, arguments), t[1], t[2]);
      }), n && (v[n] = function() {
        return this.localeData().ordinal(r.apply(this, arguments), e);
      });
    }
    function j(e, t) {
      return e.isValid() ? (t = ne(t, e.localeData()), m[t] = m[t] || function(n) {
        for (var a, r = n.match(g), i = 0, o = r.length; i < o; i++) v[r[i]] ? r[i] = v[r[i]] : r[i] = (a = r[i]).match(/\[[\s\S]/) ? a.replace(/^\[|\]$/g, "") : a.replace(/\\/g, "");
        return function(c) {
          for (var _ = "", d = 0; d < o; d++) _ += E(r[d]) ? r[d].call(c, n) : r[d];
          return _;
        };
      }(t), m[t](e)) : e.localeData().invalidDate();
    }
    function ne(e, t) {
      var n = 5;
      function a(r) {
        return t.longDateFormat(r) || r;
      }
      for (Y.lastIndex = 0; 0 <= n && Y.test(e); ) e = e.replace(Y, a), Y.lastIndex = 0, --n;
      return e;
    }
    var X = {};
    function G(e, t) {
      var n = e.toLowerCase();
      X[n] = X[n + "s"] = X[t] = e;
    }
    function re(e) {
      return typeof e == "string" ? X[e] || X[e.toLowerCase()] : void 0;
    }
    function xe(e) {
      var t, n, a = {};
      for (n in e) b(e, n) && (t = re(n)) && (a[t] = e[n]);
      return a;
    }
    var Ne = {};
    function le(e, t) {
      Ne[e] = t;
    }
    function ve(e) {
      return e % 4 == 0 && e % 100 != 0 || e % 400 == 0;
    }
    function Q(e) {
      return e < 0 ? Math.ceil(e) || 0 : Math.floor(e);
    }
    function x(t) {
      var t = +t, n = 0;
      return n = t != 0 && isFinite(t) ? Q(t) : n;
    }
    function De(e, t) {
      return function(n) {
        return n != null ? (ct(this, e, n), l.updateOffset(this, t), this) : Se(this, e);
      };
    }
    function Se(e, t) {
      return e.isValid() ? e._d["get" + (e._isUTC ? "UTC" : "") + t]() : NaN;
    }
    function ct(e, t, n) {
      e.isValid() && !isNaN(n) && (t === "FullYear" && ve(e.year()) && e.month() === 1 && e.date() === 29 ? (n = x(n), e._d["set" + (e._isUTC ? "UTC" : "") + t](n, e.month(), At(n, e.month()))) : e._d["set" + (e._isUTC ? "UTC" : "") + t](n));
    }
    var f = /\d/, A = /\d\d/, tt = /\d{3}/, dt = /\d{4}/, it = /[+-]?\d{6}/, K = /\d\d?/, je = /\d\d\d\d?/, Le = /\d\d\d\d\d\d?/, gt = /\d{1,3}/, st = /\d{1,4}/, rt = /[+-]?\d{1,6}/, bt = /\d+/, Ct = /[+-]?\d+/, oa = /Z|[+-]\d\d:?\d\d/gi, Et = /Z|[+-]\d\d(?::?\d\d)?/gi, Ue = /[0-9]{0,256}['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFF07\uFF10-\uFFEF]{1,256}|[\u0600-\u06FF\/]{1,256}(\s*?[\u0600-\u06FF]{1,256}){1,2}/i;
    function M(e, t, n) {
      Zt[e] = E(t) ? t : function(a, r) {
        return a && n ? n : t;
      };
    }
    function la(e, t) {
      return b(Zt, e) ? Zt[e](t._strict, t._locale) : new RegExp(Oe(e.replace("\\", "").replace(/\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g, function(n, a, r, i, o) {
        return a || r || i || o;
      })));
    }
    function Oe(e) {
      return e.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&");
    }
    var Zt = {}, qt = {};
    function ae(e, t) {
      var n, a, r = t;
      for (typeof e == "string" && (e = [e]), P(t) && (r = function(i, o) {
        o[t] = x(i);
      }), a = e.length, n = 0; n < a; n++) qt[e[n]] = r;
    }
    function Dt(e, t) {
      ae(e, function(n, a, r, i) {
        r._w = r._w || {}, t(n, r._w, r, i);
      });
    }
    var ge, Ye = 0, Ie = 1, He = 2, ye = 3, Ee = 4, Ge = 5, ut = 6, ca = 7, ua = 8;
    function At(e, t) {
      if (isNaN(e) || isNaN(t)) return NaN;
      var n = (t % (n = 12) + n) % n;
      return e += (t - n) / 12, n == 1 ? ve(e) ? 29 : 28 : 31 - n % 7 % 2;
    }
    ge = Array.prototype.indexOf || function(e) {
      for (var t = 0; t < this.length; ++t) if (this[t] === e) return t;
      return -1;
    }, u("M", ["MM", 2], "Mo", function() {
      return this.month() + 1;
    }), u("MMM", 0, 0, function(e) {
      return this.localeData().monthsShort(this, e);
    }), u("MMMM", 0, 0, function(e) {
      return this.localeData().months(this, e);
    }), G("month", "M"), le("month", 8), M("M", K), M("MM", K, A), M("MMM", function(e, t) {
      return t.monthsShortRegex(e);
    }), M("MMMM", function(e, t) {
      return t.monthsRegex(e);
    }), ae(["M", "MM"], function(e, t) {
      t[Ie] = x(e) - 1;
    }), ae(["MMM", "MMMM"], function(e, t, n, a) {
      a = n._locale.monthsParse(e, a, n._strict), a != null ? t[Ie] = a : S(n).invalidMonth = e;
    });
    var Yt = "January_February_March_April_May_June_July_August_September_October_November_December".split("_"), mn = "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"), yn = /D[oD]?(\[[^\[\]]*\]|\s)+MMMM?/, fa = Ue, da = Ue;
    function _n(e, t) {
      var n;
      if (e.isValid()) {
        if (typeof t == "string") {
          if (/^\d+$/.test(t)) t = x(t);
          else if (!P(t = e.localeData().monthsParse(t))) return;
        }
        n = Math.min(e.date(), At(e.year(), t)), e._d["set" + (e._isUTC ? "UTC" : "") + "Month"](t, n);
      }
    }
    function pn(e) {
      return e != null ? (_n(this, e), l.updateOffset(this, true), this) : Se(this, "Month");
    }
    function Mn() {
      function e(o, c) {
        return c.length - o.length;
      }
      for (var t, n = [], a = [], r = [], i = 0; i < 12; i++) t = oe([2e3, i]), n.push(this.monthsShort(t, "")), a.push(this.months(t, "")), r.push(this.months(t, "")), r.push(this.monthsShort(t, ""));
      for (n.sort(e), a.sort(e), r.sort(e), i = 0; i < 12; i++) n[i] = Oe(n[i]), a[i] = Oe(a[i]);
      for (i = 0; i < 24; i++) r[i] = Oe(r[i]);
      this._monthsRegex = new RegExp("^(" + r.join("|") + ")", "i"), this._monthsShortRegex = this._monthsRegex, this._monthsStrictRegex = new RegExp("^(" + a.join("|") + ")", "i"), this._monthsShortStrictRegex = new RegExp("^(" + n.join("|") + ")", "i");
    }
    function kt(e) {
      return ve(e) ? 366 : 365;
    }
    u("Y", 0, 0, function() {
      var e = this.year();
      return e <= 9999 ? h(e, 4) : "+" + e;
    }), u(0, ["YY", 2], 0, function() {
      return this.year() % 100;
    }), u(0, ["YYYY", 4], 0, "year"), u(0, ["YYYYY", 5], 0, "year"), u(0, ["YYYYYY", 6, true], 0, "year"), G("year", "y"), le("year", 1), M("Y", Ct), M("YY", K, A), M("YYYY", st, dt), M("YYYYY", rt, it), M("YYYYYY", rt, it), ae(["YYYYY", "YYYYYY"], Ye), ae("YYYY", function(e, t) {
      t[Ye] = e.length === 2 ? l.parseTwoDigitYear(e) : x(e);
    }), ae("YY", function(e, t) {
      t[Ye] = l.parseTwoDigitYear(e);
    }), ae("Y", function(e, t) {
      t[Ye] = parseInt(e, 10);
    }), l.parseTwoDigitYear = function(e) {
      return x(e) + (68 < x(e) ? 1900 : 2e3);
    };
    var It = De("FullYear", true);
    function ha(e, t, n, a, r, i, o) {
      var c;
      return e < 100 && 0 <= e ? (c = new Date(e + 400, t, n, a, r, i, o), isFinite(c.getFullYear()) && c.setFullYear(e)) : c = new Date(e, t, n, a, r, i, o), c;
    }
    function vt(e) {
      var t;
      return e < 100 && 0 <= e ? ((t = Array.prototype.slice.call(arguments))[0] = e + 400, t = new Date(Date.UTC.apply(null, t)), isFinite(t.getUTCFullYear()) && t.setUTCFullYear(e)) : t = new Date(Date.UTC.apply(null, arguments)), t;
    }
    function $t(e, t, n) {
      return n = 7 + t - n, n - (7 + vt(e, 0, n).getUTCDay() - t) % 7 - 1;
    }
    function Dn(e, o, c, a, r) {
      var i, o = 1 + 7 * (o - 1) + (7 + c - a) % 7 + $t(e, a, r), c = o <= 0 ? kt(i = e - 1) + o : o > kt(e) ? (i = e + 1, o - kt(e)) : (i = e, o);
      return { year: i, dayOfYear: c };
    }
    function wt(e, t, n) {
      var a, r, i = $t(e.year(), t, n), i = Math.floor((e.dayOfYear() - i - 1) / 7) + 1;
      return i < 1 ? a = i + Be(r = e.year() - 1, t, n) : i > Be(e.year(), t, n) ? (a = i - Be(e.year(), t, n), r = e.year() + 1) : (r = e.year(), a = i), { week: a, year: r };
    }
    function Be(e, r, n) {
      var a = $t(e, r, n), r = $t(e + 1, r, n);
      return (kt(e) - a + r) / 7;
    }
    u("w", ["ww", 2], "wo", "week"), u("W", ["WW", 2], "Wo", "isoWeek"), G("week", "w"), G("isoWeek", "W"), le("week", 5), le("isoWeek", 5), M("w", K), M("ww", K, A), M("W", K), M("WW", K, A), Dt(["w", "ww", "W", "WW"], function(e, t, n, a) {
      t[a.substr(0, 1)] = x(e);
    });
    function Qt(e, t) {
      return e.slice(t, 7).concat(e.slice(0, t));
    }
    u("d", 0, "do", "day"), u("dd", 0, 0, function(e) {
      return this.localeData().weekdaysMin(this, e);
    }), u("ddd", 0, 0, function(e) {
      return this.localeData().weekdaysShort(this, e);
    }), u("dddd", 0, 0, function(e) {
      return this.localeData().weekdays(this, e);
    }), u("e", 0, 0, "weekday"), u("E", 0, 0, "isoWeekday"), G("day", "d"), G("weekday", "e"), G("isoWeekday", "E"), le("day", 11), le("weekday", 11), le("isoWeekday", 11), M("d", K), M("e", K), M("E", K), M("dd", function(e, t) {
      return t.weekdaysMinRegex(e);
    }), M("ddd", function(e, t) {
      return t.weekdaysShortRegex(e);
    }), M("dddd", function(e, t) {
      return t.weekdaysRegex(e);
    }), Dt(["dd", "ddd", "dddd"], function(e, t, n, a) {
      a = n._locale.weekdaysParse(e, a, n._strict), a != null ? t.d = a : S(n).invalidWeekday = e;
    }), Dt(["d", "e", "E"], function(e, t, n, a) {
      t[a] = x(e);
    });
    var St = "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"), Yn = "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"), Ft = "Su_Mo_Tu_We_Th_Fr_Sa".split("_"), ga = Ue, ba = Ue, ma = Ue;
    function Jt() {
      function e(d, $) {
        return $.length - d.length;
      }
      for (var t, n, a, r = [], i = [], o = [], c = [], _ = 0; _ < 7; _++) a = oe([2e3, 1]).day(_), t = Oe(this.weekdaysMin(a, "")), n = Oe(this.weekdaysShort(a, "")), a = Oe(this.weekdays(a, "")), r.push(t), i.push(n), o.push(a), c.push(t), c.push(n), c.push(a);
      r.sort(e), i.sort(e), o.sort(e), c.sort(e), this._weekdaysRegex = new RegExp("^(" + c.join("|") + ")", "i"), this._weekdaysShortRegex = this._weekdaysRegex, this._weekdaysMinRegex = this._weekdaysRegex, this._weekdaysStrictRegex = new RegExp("^(" + o.join("|") + ")", "i"), this._weekdaysShortStrictRegex = new RegExp("^(" + i.join("|") + ")", "i"), this._weekdaysMinStrictRegex = new RegExp("^(" + r.join("|") + ")", "i");
    }
    function Xt() {
      return this.hours() % 12 || 12;
    }
    function kn(e, t) {
      u(e, 0, 0, function() {
        return this.localeData().meridiem(this.hours(), this.minutes(), t);
      });
    }
    function vn(e, t) {
      return t._meridiemParse;
    }
    u("H", ["HH", 2], 0, "hour"), u("h", ["hh", 2], 0, Xt), u("k", ["kk", 2], 0, function() {
      return this.hours() || 24;
    }), u("hmm", 0, 0, function() {
      return "" + Xt.apply(this) + h(this.minutes(), 2);
    }), u("hmmss", 0, 0, function() {
      return "" + Xt.apply(this) + h(this.minutes(), 2) + h(this.seconds(), 2);
    }), u("Hmm", 0, 0, function() {
      return "" + this.hours() + h(this.minutes(), 2);
    }), u("Hmmss", 0, 0, function() {
      return "" + this.hours() + h(this.minutes(), 2) + h(this.seconds(), 2);
    }), kn("a", true), kn("A", false), G("hour", "h"), le("hour", 13), M("a", vn), M("A", vn), M("H", K), M("h", K), M("k", K), M("HH", K, A), M("hh", K, A), M("kk", K, A), M("hmm", je), M("hmmss", Le), M("Hmm", je), M("Hmmss", Le), ae(["H", "HH"], ye), ae(["k", "kk"], function(e, t, n) {
      e = x(e), t[ye] = e === 24 ? 0 : e;
    }), ae(["a", "A"], function(e, t, n) {
      n._isPm = n._locale.isPM(e), n._meridiem = e;
    }), ae(["h", "hh"], function(e, t, n) {
      t[ye] = x(e), S(n).bigHour = true;
    }), ae("hmm", function(e, t, n) {
      var a = e.length - 2;
      t[ye] = x(e.substr(0, a)), t[Ee] = x(e.substr(a)), S(n).bigHour = true;
    }), ae("hmmss", function(e, t, n) {
      var a = e.length - 4, r = e.length - 2;
      t[ye] = x(e.substr(0, a)), t[Ee] = x(e.substr(a, 2)), t[Ge] = x(e.substr(r)), S(n).bigHour = true;
    }), ae("Hmm", function(e, t, n) {
      var a = e.length - 2;
      t[ye] = x(e.substr(0, a)), t[Ee] = x(e.substr(a));
    }), ae("Hmmss", function(e, t, n) {
      var a = e.length - 4, r = e.length - 2;
      t[ye] = x(e.substr(0, a)), t[Ee] = x(e.substr(a, 2)), t[Ge] = x(e.substr(r));
    }), Ue = De("Hours", true);
    var Ot, wn = { calendar: { sameDay: "[Today at] LT", nextDay: "[Tomorrow at] LT", nextWeek: "dddd [at] LT", lastDay: "[Yesterday at] LT", lastWeek: "[Last] dddd [at] LT", sameElse: "L" }, longDateFormat: { LTS: "h:mm:ss A", LT: "h:mm A", L: "MM/DD/YYYY", LL: "MMMM D, YYYY", LLL: "MMMM D, YYYY h:mm A", LLLL: "dddd, MMMM D, YYYY h:mm A" }, invalidDate: "Invalid date", ordinal: "%d", dayOfMonthOrdinalParse: /\d{1,2}/, relativeTime: { future: "in %s", past: "%s ago", s: "a few seconds", ss: "%d seconds", m: "a minute", mm: "%d minutes", h: "an hour", hh: "%d hours", d: "a day", dd: "%d days", w: "a week", ww: "%d weeks", M: "a month", MM: "%d months", y: "a year", yy: "%d years" }, months: Yt, monthsShort: mn, week: { dow: 0, doy: 6 }, weekdays: St, weekdaysMin: Ft, weekdaysShort: Yn, meridiemParse: /[ap]\.?m?\.?/i }, ce = {}, Tt = {};
    function Sn(e) {
      return e && e.toLowerCase().replace("_", "-");
    }
    function ya(e) {
      for (var t, n, a, r, i = 0; i < e.length; ) {
        for (t = (r = Sn(e[i]).split("-")).length, n = (n = Sn(e[i + 1])) ? n.split("-") : null; 0 < t; ) {
          if (a = Rt(r.slice(0, t).join("-"))) return a;
          if (n && n.length >= t && function(o, c) {
            for (var _ = Math.min(o.length, c.length), d = 0; d < _; d += 1) if (o[d] !== c[d]) return d;
            return _;
          }(r, n) >= t - 1) break;
          t--;
        }
        i++;
      }
      return Ot;
    }
    function Rt(e) {
      var t;
      if (ce[e] === void 0 && p && p.exports && e.match("^[^/\\\\]*$") != null) try {
        t = Ot._abbr, or("./locale/" + e), nt(t);
      } catch {
        ce[e] = null;
      }
      return ce[e];
    }
    function nt(e, t) {
      return e && ((t = D(t) ? Ve(e) : Kt(e, t)) ? Ot = t : typeof console < "u" && console.warn && console.warn("Locale " + e + " not found. Did you forget to load it?")), Ot._abbr;
    }
    function Kt(e, t) {
      if (t === null) return delete ce[e], null;
      var n, a = wn;
      if (t.abbr = e, ce[e] != null) J("defineLocaleOverride", "use moment.updateLocale(localeName, config) to change an existing locale. moment.defineLocale(localeName, config) should only be used for creating a new locale See http://momentjs.com/guides/#/warnings/define-locale/ for more info."), a = ce[e]._config;
      else if (t.parentLocale != null) if (ce[t.parentLocale] != null) a = ce[t.parentLocale]._config;
      else {
        if ((n = Rt(t.parentLocale)) == null) return Tt[t.parentLocale] || (Tt[t.parentLocale] = []), Tt[t.parentLocale].push({ name: e, config: t }), null;
        a = n._config;
      }
      return ce[e] = new pe(me(a, t)), Tt[e] && Tt[e].forEach(function(r) {
        Kt(r.name, r.config);
      }), nt(e), ce[e];
    }
    function Ve(e) {
      var t;
      if (!(e = e && e._locale && e._locale._abbr ? e._locale._abbr : e)) return Ot;
      if (!N(e)) {
        if (t = Rt(e)) return t;
        e = [e];
      }
      return ya(e);
    }
    function en(e) {
      var t = e._a;
      return t && S(e).overflow === -2 && (t = t[Ie] < 0 || 11 < t[Ie] ? Ie : t[He] < 1 || t[He] > At(t[Ye], t[Ie]) ? He : t[ye] < 0 || 24 < t[ye] || t[ye] === 24 && (t[Ee] !== 0 || t[Ge] !== 0 || t[ut] !== 0) ? ye : t[Ee] < 0 || 59 < t[Ee] ? Ee : t[Ge] < 0 || 59 < t[Ge] ? Ge : t[ut] < 0 || 999 < t[ut] ? ut : -1, S(e)._overflowDayOfYear && (t < Ye || He < t) && (t = He), S(e)._overflowWeeks && t === -1 && (t = ca), S(e)._overflowWeekday && t === -1 && (t = ua), S(e).overflow = t), e;
    }
    var _a = /^\s*((?:[+-]\d{6}|\d{4})-(?:\d\d-\d\d|W\d\d-\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?::\d\d(?::\d\d(?:[.,]\d+)?)?)?)([+-]\d\d(?::?\d\d)?|\s*Z)?)?$/, pa = /^\s*((?:[+-]\d{6}|\d{4})(?:\d\d\d\d|W\d\d\d|W\d\d|\d\d\d|\d\d|))(?:(T| )(\d\d(?:\d\d(?:\d\d(?:[.,]\d+)?)?)?)([+-]\d\d(?::?\d\d)?|\s*Z)?)?$/, Ma = /Z|[+-]\d\d(?::?\d\d)?/, Pt = [["YYYYYY-MM-DD", /[+-]\d{6}-\d\d-\d\d/], ["YYYY-MM-DD", /\d{4}-\d\d-\d\d/], ["GGGG-[W]WW-E", /\d{4}-W\d\d-\d/], ["GGGG-[W]WW", /\d{4}-W\d\d/, false], ["YYYY-DDD", /\d{4}-\d{3}/], ["YYYY-MM", /\d{4}-\d\d/, false], ["YYYYYYMMDD", /[+-]\d{10}/], ["YYYYMMDD", /\d{8}/], ["GGGG[W]WWE", /\d{4}W\d{3}/], ["GGGG[W]WW", /\d{4}W\d{2}/, false], ["YYYYDDD", /\d{7}/], ["YYYYMM", /\d{6}/, false], ["YYYY", /\d{4}/, false]], tn = [["HH:mm:ss.SSSS", /\d\d:\d\d:\d\d\.\d+/], ["HH:mm:ss,SSSS", /\d\d:\d\d:\d\d,\d+/], ["HH:mm:ss", /\d\d:\d\d:\d\d/], ["HH:mm", /\d\d:\d\d/], ["HHmmss.SSSS", /\d\d\d\d\d\d\.\d+/], ["HHmmss,SSSS", /\d\d\d\d\d\d,\d+/], ["HHmmss", /\d\d\d\d\d\d/], ["HHmm", /\d\d\d\d/], ["HH", /\d\d/]], Da = /^\/?Date\((-?\d+)/i, Ya = /^(?:(Mon|Tue|Wed|Thu|Fri|Sat|Sun),?\s)?(\d{1,2})\s(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(\d{2,4})\s(\d\d):(\d\d)(?::(\d\d))?\s(?:(UT|GMT|[ECMP][SD]T)|([Zz])|([+-]\d{4}))$/, ka = { UT: 0, GMT: 0, EDT: -240, EST: -300, CDT: -300, CST: -360, MDT: -360, MST: -420, PDT: -420, PST: -480 };
    function On(e) {
      var t, n, a, r, i, o, _ = e._i, c = _a.exec(_) || pa.exec(_), _ = Pt.length, d = tn.length;
      if (c) {
        for (S(e).iso = true, t = 0, n = _; t < n; t++) if (Pt[t][1].exec(c[1])) {
          r = Pt[t][0], a = Pt[t][2] !== false;
          break;
        }
        if (r == null) e._isValid = false;
        else {
          if (c[3]) {
            for (t = 0, n = d; t < n; t++) if (tn[t][1].exec(c[3])) {
              i = (c[2] || " ") + tn[t][0];
              break;
            }
            if (i == null) return void (e._isValid = false);
          }
          if (a || i == null) {
            if (c[4]) {
              if (!Ma.exec(c[4])) return void (e._isValid = false);
              o = "Z";
            }
            e._f = r + (i || "") + (o || ""), an(e);
          } else e._isValid = false;
        }
      } else e._isValid = false;
    }
    function va(e, t, n, a, r, i) {
      return e = [function(o) {
        o = parseInt(o, 10);
        {
          if (o <= 49) return 2e3 + o;
          if (o <= 999) return 1900 + o;
        }
        return o;
      }(e), mn.indexOf(t), parseInt(n, 10), parseInt(a, 10), parseInt(r, 10)], i && e.push(parseInt(i, 10)), e;
    }
    function Tn(e) {
      var t, n, a, r, i = Ya.exec(e._i.replace(/\([^()]*\)|[\n\t]/g, " ").replace(/(\s\s+)/g, " ").replace(/^\s\s*/, "").replace(/\s\s*$/, ""));
      i ? (t = va(i[4], i[3], i[2], i[5], i[6], i[7]), n = i[1], a = t, r = e, n && Yn.indexOf(n) !== new Date(a[0], a[1], a[2]).getDay() ? (S(r).weekdayMismatch = true, r._isValid = false) : (e._a = t, e._tzm = (n = i[8], a = i[9], r = i[10], n ? ka[n] : a ? 0 : 60 * (((n = parseInt(r, 10)) - (a = n % 100)) / 100) + a), e._d = vt.apply(null, e._a), e._d.setUTCMinutes(e._d.getUTCMinutes() - e._tzm), S(e).rfc2822 = true)) : e._isValid = false;
    }
    function mt(e, t, n) {
      return e ?? t ?? n;
    }
    function nn(e) {
      var t, n, a, r, i, o, c, _, d, $, O, ue = [];
      if (!e._d) {
        for (a = e, r = new Date(l.now()), n = a._useUTC ? [r.getUTCFullYear(), r.getUTCMonth(), r.getUTCDate()] : [r.getFullYear(), r.getMonth(), r.getDate()], e._w && e._a[He] == null && e._a[Ie] == null && ((r = (a = e)._w).GG != null || r.W != null || r.E != null ? (_ = 1, d = 4, i = mt(r.GG, a._a[Ye], wt(se(), 1, 4).year), o = mt(r.W, 1), ((c = mt(r.E, 1)) < 1 || 7 < c) && ($ = true)) : (_ = a._locale._week.dow, d = a._locale._week.doy, O = wt(se(), _, d), i = mt(r.gg, a._a[Ye], O.year), o = mt(r.w, O.week), r.d != null ? ((c = r.d) < 0 || 6 < c) && ($ = true) : r.e != null ? (c = r.e + _, (r.e < 0 || 6 < r.e) && ($ = true)) : c = _), o < 1 || o > Be(i, _, d) ? S(a)._overflowWeeks = true : $ != null ? S(a)._overflowWeekday = true : (O = Dn(i, o, c, _, d), a._a[Ye] = O.year, a._dayOfYear = O.dayOfYear)), e._dayOfYear != null && (r = mt(e._a[Ye], n[Ye]), (e._dayOfYear > kt(r) || e._dayOfYear === 0) && (S(e)._overflowDayOfYear = true), $ = vt(r, 0, e._dayOfYear), e._a[Ie] = $.getUTCMonth(), e._a[He] = $.getUTCDate()), t = 0; t < 3 && e._a[t] == null; ++t) e._a[t] = ue[t] = n[t];
        for (; t < 7; t++) e._a[t] = ue[t] = e._a[t] == null ? t === 2 ? 1 : 0 : e._a[t];
        e._a[ye] === 24 && e._a[Ee] === 0 && e._a[Ge] === 0 && e._a[ut] === 0 && (e._nextDay = true, e._a[ye] = 0), e._d = (e._useUTC ? vt : ha).apply(null, ue), i = e._useUTC ? e._d.getUTCDay() : e._d.getDay(), e._tzm != null && e._d.setUTCMinutes(e._d.getUTCMinutes() - e._tzm), e._nextDay && (e._a[ye] = 24), e._w && e._w.d !== void 0 && e._w.d !== i && (S(e).weekdayMismatch = true);
      }
    }
    function an(e) {
      if (e._f === l.ISO_8601) On(e);
      else if (e._f === l.RFC_2822) Tn(e);
      else {
        e._a = [], S(e).empty = true;
        for (var t, n, a, r, i, o = "" + e._i, c = o.length, _ = 0, d = ne(e._f, e._locale).match(g) || [], $ = d.length, O = 0; O < $; O++) n = d[O], (t = (o.match(la(n, e)) || [])[0]) && (0 < (a = o.substr(0, o.indexOf(t))).length && S(e).unusedInput.push(a), o = o.slice(o.indexOf(t) + t.length), _ += t.length), v[n] ? (t ? S(e).empty = false : S(e).unusedTokens.push(n), a = n, i = e, (r = t) != null && b(qt, a) && qt[a](r, i._a, i, a)) : e._strict && !t && S(e).unusedTokens.push(n);
        S(e).charsLeftOver = c - _, 0 < o.length && S(e).unusedInput.push(o), e._a[ye] <= 12 && S(e).bigHour === true && 0 < e._a[ye] && (S(e).bigHour = void 0), S(e).parsedDateParts = e._a.slice(0), S(e).meridiem = e._meridiem, e._a[ye] = function(ue, be, $e) {
          return $e == null ? be : ue.meridiemHour != null ? ue.meridiemHour(be, $e) : ue.isPM != null ? ((ue = ue.isPM($e)) && be < 12 && (be += 12), be = ue || be !== 12 ? be : 0) : be;
        }(e._locale, e._a[ye], e._meridiem), (c = S(e).era) !== null && (e._a[Ye] = e._locale.erasConvertYear(c, e._a[Ye])), nn(e), en(e);
      }
    }
    function xn(e) {
      var t, n, a, r = e._i, i = e._f;
      return e._locale = e._locale || Ve(e._l), r === null || i === void 0 && r === "" ? k({ nullInput: true }) : (typeof r == "string" && (e._i = r = e._locale.preparse(r)), ee(r) ? new ie(en(r)) : (H(r) ? e._d = r : N(i) ? function(o) {
        var c, _, d, $, O, ue, be = false, $e = o._f.length;
        if ($e === 0) return S(o).invalidFormat = true, o._d = /* @__PURE__ */ new Date(NaN);
        for ($ = 0; $ < $e; $++) O = 0, ue = false, c = _e({}, o), o._useUTC != null && (c._useUTC = o._useUTC), c._f = o._f[$], an(c), C(c) && (ue = true), O = (O += S(c).charsLeftOver) + 10 * S(c).unusedTokens.length, S(c).score = O, be ? O < d && (d = O, _ = c) : (d == null || O < d || ue) && (d = O, _ = c, ue && (be = true));
        he(o, _ || c);
      }(e) : i ? an(e) : D(i = (r = e)._i) ? r._d = new Date(l.now()) : H(i) ? r._d = new Date(i.valueOf()) : typeof i == "string" ? (n = r, (t = Da.exec(n._i)) !== null ? n._d = /* @__PURE__ */ new Date(+t[1]) : (On(n), n._isValid === false && (delete n._isValid, Tn(n), n._isValid === false && (delete n._isValid, n._strict ? n._isValid = false : l.createFromInputFallback(n))))) : N(i) ? (r._a = q(i.slice(0), function(o) {
        return parseInt(o, 10);
      }), nn(r)) : V(i) ? (t = r)._d || (a = (n = xe(t._i)).day === void 0 ? n.date : n.day, t._a = q([n.year, n.month, a, n.hour, n.minute, n.second, n.millisecond], function(o) {
        return o && parseInt(o, 10);
      }), nn(t)) : P(i) ? r._d = new Date(i) : l.createFromInputFallback(r), C(e) || (e._d = null), e));
    }
    function Nn(e, t, n, a, r) {
      var i = {};
      return t !== true && t !== false || (a = t, t = void 0), n !== true && n !== false || (a = n, n = void 0), (V(e) && y(e) || N(e) && e.length === 0) && (e = void 0), i._isAMomentObject = true, i._useUTC = i._isUTC = r, i._l = n, i._i = e, i._f = t, i._strict = a, (r = new ie(en(xn(r = i))))._nextDay && (r.add(1, "d"), r._nextDay = void 0), r;
    }
    function se(e, t, n, a) {
      return Nn(e, t, n, a, false);
    }
    l.createFromInputFallback = te("value provided is not in a recognized RFC2822 or ISO format. moment construction falls back to js Date(), which is not reliable across all browsers and versions. Non RFC2822/ISO date formats are discouraged. Please refer to http://momentjs.com/guides/#/warnings/js-date/ for more info.", function(e) {
      e._d = /* @__PURE__ */ new Date(e._i + (e._useUTC ? " UTC" : ""));
    }), l.ISO_8601 = function() {
    }, l.RFC_2822 = function() {
    }, je = te("moment().min is deprecated, use moment.max instead. http://momentjs.com/guides/#/warnings/min-max/", function() {
      var e = se.apply(null, arguments);
      return this.isValid() && e.isValid() ? e < this ? this : e : k();
    }), Le = te("moment().max is deprecated, use moment.min instead. http://momentjs.com/guides/#/warnings/min-max/", function() {
      var e = se.apply(null, arguments);
      return this.isValid() && e.isValid() ? this < e ? this : e : k();
    });
    function Cn(e, t) {
      var n, a;
      if (!(t = t.length === 1 && N(t[0]) ? t[0] : t).length) return se();
      for (n = t[0], a = 1; a < t.length; ++a) t[a].isValid() && !t[a][e](n) || (n = t[a]);
      return n;
    }
    var xt = ["year", "quarter", "month", "week", "day", "hour", "minute", "second", "millisecond"];
    function jt(t) {
      var t = xe(t), n = t.year || 0, a = t.quarter || 0, r = t.month || 0, i = t.week || t.isoWeek || 0, o = t.day || 0, c = t.hour || 0, _ = t.minute || 0, d = t.second || 0, $ = t.millisecond || 0;
      this._isValid = function(O) {
        var ue, be, $e = false, gn = xt.length;
        for (ue in O) if (b(O, ue) && (ge.call(xt, ue) === -1 || O[ue] != null && isNaN(O[ue]))) return false;
        for (be = 0; be < gn; ++be) if (O[xt[be]]) {
          if ($e) return false;
          parseFloat(O[xt[be]]) !== x(O[xt[be]]) && ($e = true);
        }
        return true;
      }(t), this._milliseconds = +$ + 1e3 * d + 6e4 * _ + 1e3 * c * 60 * 60, this._days = +o + 7 * i, this._months = +r + 3 * a + 12 * n, this._data = {}, this._locale = Ve(), this._bubble();
    }
    function Lt(e) {
      return e instanceof jt;
    }
    function rn(e) {
      return e < 0 ? -1 * Math.round(-1 * e) : Math.round(e);
    }
    function En(e, t) {
      u(e, 0, 0, function() {
        var n = this.utcOffset(), a = "+";
        return n < 0 && (n = -n, a = "-"), a + h(~~(n / 60), 2) + t + h(~~n % 60, 2);
      });
    }
    En("Z", ":"), En("ZZ", ""), M("Z", Et), M("ZZ", Et), ae(["Z", "ZZ"], function(e, t, n) {
      n._useUTC = true, n._tzm = sn(Et, e);
    });
    var wa = /([\+\-]|\d\d)/gi;
    function sn(e, n) {
      var n = (n || "").match(e);
      return n === null ? null : (n = 60 * (e = ((n[n.length - 1] || []) + "").match(wa) || ["-", 0, 0])[1] + x(e[2])) === 0 ? 0 : e[0] === "+" ? n : -n;
    }
    function on(e, t) {
      var n;
      return t._isUTC ? (t = t.clone(), n = (ee(e) || H(e) ? e : se(e)).valueOf() - t.valueOf(), t._d.setTime(t._d.valueOf() + n), l.updateOffset(t, false), t) : se(e).local();
    }
    function ln(e) {
      return -Math.round(e._d.getTimezoneOffset());
    }
    function An() {
      return !!this.isValid() && this._isUTC && this._offset === 0;
    }
    l.updateOffset = function() {
    };
    var Sa = /^(-|\+)?(?:(\d*)[. ])?(\d+):(\d+)(?::(\d+)(\.\d*)?)?$/, Oa = /^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/;
    function Ae(e, t) {
      var n, a = e, r = null;
      return Lt(e) ? a = { ms: e._milliseconds, d: e._days, M: e._months } : P(e) || !isNaN(+e) ? (a = {}, t ? a[t] = +e : a.milliseconds = +e) : (r = Sa.exec(e)) ? (n = r[1] === "-" ? -1 : 1, a = { y: 0, d: x(r[He]) * n, h: x(r[ye]) * n, m: x(r[Ee]) * n, s: x(r[Ge]) * n, ms: x(rn(1e3 * r[ut])) * n }) : (r = Oa.exec(e)) ? (n = r[1] === "-" ? -1 : 1, a = { y: ft(r[2], n), M: ft(r[3], n), w: ft(r[4], n), d: ft(r[5], n), h: ft(r[6], n), m: ft(r[7], n), s: ft(r[8], n) }) : a == null ? a = {} : typeof a == "object" && ("from" in a || "to" in a) && (t = function(i, o) {
        var c;
        return !i.isValid() || !o.isValid() ? { milliseconds: 0, months: 0 } : (o = on(o, i), i.isBefore(o) ? c = $n(i, o) : ((c = $n(o, i)).milliseconds = -c.milliseconds, c.months = -c.months), c);
      }(se(a.from), se(a.to)), (a = {}).ms = t.milliseconds, a.M = t.months), r = new jt(a), Lt(e) && b(e, "_locale") && (r._locale = e._locale), Lt(e) && b(e, "_isValid") && (r._isValid = e._isValid), r;
    }
    function ft(e, t) {
      return e = e && parseFloat(e.replace(",", ".")), (isNaN(e) ? 0 : e) * t;
    }
    function $n(e, t) {
      var n = {};
      return n.months = t.month() - e.month() + 12 * (t.year() - e.year()), e.clone().add(n.months, "M").isAfter(t) && --n.months, n.milliseconds = +t - +e.clone().add(n.months, "M"), n;
    }
    function Fn(e, t) {
      return function(n, a) {
        var r;
        return a === null || isNaN(+a) || (J(t, "moment()." + t + "(period, number) is deprecated. Please use moment()." + t + "(number, period). See http://momentjs.com/guides/#/warnings/add-inverted-param/ for more info."), r = n, n = a, a = r), Rn(this, Ae(n, a), e), this;
      };
    }
    function Rn(e, o, n, a) {
      var r = o._milliseconds, i = rn(o._days), o = rn(o._months);
      e.isValid() && (a = a == null || a, o && _n(e, Se(e, "Month") + o * n), i && ct(e, "Date", Se(e, "Date") + i * n), r && e._d.setTime(e._d.valueOf() + r * n), a && l.updateOffset(e, i || o));
    }
    Ae.fn = jt.prototype, Ae.invalid = function() {
      return Ae(NaN);
    }, Yt = Fn(1, "add"), St = Fn(-1, "subtract");
    function Pn(e) {
      return typeof e == "string" || e instanceof String;
    }
    function Ta(e) {
      return ee(e) || H(e) || Pn(e) || P(e) || function(t) {
        var n = N(t), a = false;
        return n && (a = t.filter(function(r) {
          return !P(r) && Pn(t);
        }).length === 0), n && a;
      }(e) || function(t) {
        var n, a, r = V(t) && !y(t), i = false, o = ["years", "year", "y", "months", "month", "M", "days", "day", "d", "dates", "date", "D", "hours", "hour", "h", "minutes", "minute", "m", "seconds", "second", "s", "milliseconds", "millisecond", "ms"], c = o.length;
        for (n = 0; n < c; n += 1) a = o[n], i = i || b(t, a);
        return r && i;
      }(e) || e == null;
    }
    function Ht(e, r) {
      if (e.date() < r.date()) return -Ht(r, e);
      var n = 12 * (r.year() - e.year()) + (r.month() - e.month()), a = e.clone().add(n, "months"), r = r - a < 0 ? (r - a) / (a - e.clone().add(n - 1, "months")) : (r - a) / (e.clone().add(1 + n, "months") - a);
      return -(n + r) || 0;
    }
    function jn(e) {
      return e === void 0 ? this._locale._abbr : ((e = Ve(e)) != null && (this._locale = e), this);
    }
    l.defaultFormat = "YYYY-MM-DDTHH:mm:ssZ", l.defaultFormatUtc = "YYYY-MM-DDTHH:mm:ss[Z]", Ft = te("moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.", function(e) {
      return e === void 0 ? this.localeData() : this.locale(e);
    });
    function Ln() {
      return this._locale;
    }
    var Hn = 126227808e5;
    function yt(e, t) {
      return (e % t + t) % t;
    }
    function Wn(e, t, n) {
      return e < 100 && 0 <= e ? new Date(e + 400, t, n) - Hn : new Date(e, t, n).valueOf();
    }
    function Un(e, t, n) {
      return e < 100 && 0 <= e ? Date.UTC(e + 400, t, n) - Hn : Date.UTC(e, t, n);
    }
    function cn(e, t) {
      return t.erasAbbrRegex(e);
    }
    function un() {
      for (var e = [], t = [], n = [], a = [], r = this.eras(), i = 0, o = r.length; i < o; ++i) t.push(Oe(r[i].name)), e.push(Oe(r[i].abbr)), n.push(Oe(r[i].narrow)), a.push(Oe(r[i].name)), a.push(Oe(r[i].abbr)), a.push(Oe(r[i].narrow));
      this._erasRegex = new RegExp("^(" + a.join("|") + ")", "i"), this._erasNameRegex = new RegExp("^(" + t.join("|") + ")", "i"), this._erasAbbrRegex = new RegExp("^(" + e.join("|") + ")", "i"), this._erasNarrowRegex = new RegExp("^(" + n.join("|") + ")", "i");
    }
    function Wt(e, t) {
      u(0, [e, e.length], 0, t);
    }
    function In(e, t, n, a, r) {
      var i;
      return e == null ? wt(this, a, r).year : (i = Be(e, a, r), function(o, c, _, d, $) {
        return o = Dn(o, c, _, d, $), c = vt(o.year, 0, o.dayOfYear), this.year(c.getUTCFullYear()), this.month(c.getUTCMonth()), this.date(c.getUTCDate()), this;
      }.call(this, e, t = i < t ? i : t, n, a, r));
    }
    u("N", 0, 0, "eraAbbr"), u("NN", 0, 0, "eraAbbr"), u("NNN", 0, 0, "eraAbbr"), u("NNNN", 0, 0, "eraName"), u("NNNNN", 0, 0, "eraNarrow"), u("y", ["y", 1], "yo", "eraYear"), u("y", ["yy", 2], 0, "eraYear"), u("y", ["yyy", 3], 0, "eraYear"), u("y", ["yyyy", 4], 0, "eraYear"), M("N", cn), M("NN", cn), M("NNN", cn), M("NNNN", function(e, t) {
      return t.erasNameRegex(e);
    }), M("NNNNN", function(e, t) {
      return t.erasNarrowRegex(e);
    }), ae(["N", "NN", "NNN", "NNNN", "NNNNN"], function(e, t, n, a) {
      a = n._locale.erasParse(e, a, n._strict), a ? S(n).era = a : S(n).invalidEra = e;
    }), M("y", bt), M("yy", bt), M("yyy", bt), M("yyyy", bt), M("yo", function(e, t) {
      return t._eraYearOrdinalRegex || bt;
    }), ae(["y", "yy", "yyy", "yyyy"], Ye), ae(["yo"], function(e, t, n, a) {
      var r;
      n._locale._eraYearOrdinalRegex && (r = e.match(n._locale._eraYearOrdinalRegex)), n._locale.eraYearOrdinalParse ? t[Ye] = n._locale.eraYearOrdinalParse(e, r) : t[Ye] = parseInt(e, 10);
    }), u(0, ["gg", 2], 0, function() {
      return this.weekYear() % 100;
    }), u(0, ["GG", 2], 0, function() {
      return this.isoWeekYear() % 100;
    }), Wt("gggg", "weekYear"), Wt("ggggg", "weekYear"), Wt("GGGG", "isoWeekYear"), Wt("GGGGG", "isoWeekYear"), G("weekYear", "gg"), G("isoWeekYear", "GG"), le("weekYear", 1), le("isoWeekYear", 1), M("G", Ct), M("g", Ct), M("GG", K, A), M("gg", K, A), M("GGGG", st, dt), M("gggg", st, dt), M("GGGGG", rt, it), M("ggggg", rt, it), Dt(["gggg", "ggggg", "GGGG", "GGGGG"], function(e, t, n, a) {
      t[a.substr(0, 2)] = x(e);
    }), Dt(["gg", "GG"], function(e, t, n, a) {
      t[a] = l.parseTwoDigitYear(e);
    }), u("Q", 0, "Qo", "quarter"), G("quarter", "Q"), le("quarter", 7), M("Q", f), ae("Q", function(e, t) {
      t[Ie] = 3 * (x(e) - 1);
    }), u("D", ["DD", 2], "Do", "date"), G("date", "D"), le("date", 9), M("D", K), M("DD", K, A), M("Do", function(e, t) {
      return e ? t._dayOfMonthOrdinalParse || t._ordinalParse : t._dayOfMonthOrdinalParseLenient;
    }), ae(["D", "DD"], He), ae("Do", function(e, t) {
      t[He] = x(e.match(K)[0]);
    }), st = De("Date", true), u("DDD", ["DDDD", 3], "DDDo", "dayOfYear"), G("dayOfYear", "DDD"), le("dayOfYear", 4), M("DDD", gt), M("DDDD", tt), ae(["DDD", "DDDD"], function(e, t, n) {
      n._dayOfYear = x(e);
    }), u("m", ["mm", 2], 0, "minute"), G("minute", "m"), le("minute", 14), M("m", K), M("mm", K, A), ae(["m", "mm"], Ee);
    var at, dt = De("Minutes", false), rt = (u("s", ["ss", 2], 0, "second"), G("second", "s"), le("second", 15), M("s", K), M("ss", K, A), ae(["s", "ss"], Ge), De("Seconds", false));
    for (u("S", 0, 0, function() {
      return ~~(this.millisecond() / 100);
    }), u(0, ["SS", 2], 0, function() {
      return ~~(this.millisecond() / 10);
    }), u(0, ["SSS", 3], 0, "millisecond"), u(0, ["SSSS", 4], 0, function() {
      return 10 * this.millisecond();
    }), u(0, ["SSSSS", 5], 0, function() {
      return 100 * this.millisecond();
    }), u(0, ["SSSSSS", 6], 0, function() {
      return 1e3 * this.millisecond();
    }), u(0, ["SSSSSSS", 7], 0, function() {
      return 1e4 * this.millisecond();
    }), u(0, ["SSSSSSSS", 8], 0, function() {
      return 1e5 * this.millisecond();
    }), u(0, ["SSSSSSSSS", 9], 0, function() {
      return 1e6 * this.millisecond();
    }), G("millisecond", "ms"), le("millisecond", 16), M("S", gt, f), M("SS", gt, A), M("SSS", gt, tt), at = "SSSS"; at.length <= 9; at += "S") M(at, bt);
    function xa(e, t) {
      t[ut] = x(1e3 * ("0." + e));
    }
    for (at = "S"; at.length <= 9; at += "S") ae(at, xa);
    it = De("Milliseconds", false), u("z", 0, 0, "zoneAbbr"), u("zz", 0, 0, "zoneName"), f = ie.prototype;
    function Gn(e) {
      return e;
    }
    f.add = Yt, f.calendar = function(n, r) {
      arguments.length === 1 && (arguments[0] ? Ta(arguments[0]) ? (n = arguments[0], r = void 0) : function(i) {
        for (var o = V(i) && !y(i), c = false, _ = ["sameDay", "nextDay", "lastDay", "nextWeek", "lastWeek", "sameElse"], d = 0; d < _.length; d += 1) c = c || b(i, _[d]);
        return o && c;
      }(arguments[0]) && (r = arguments[0], n = void 0) : r = n = void 0);
      var n = n || se(), a = on(n, this).startOf("day"), a = l.calendarFormat(this, a) || "sameElse", r = r && (E(r[a]) ? r[a].call(this, n) : r[a]);
      return this.format(r || this.localeData().calendar(a, this, se(n)));
    }, f.clone = function() {
      return new ie(this);
    }, f.diff = function(e, t, n) {
      var a, r, i;
      if (!this.isValid()) return NaN;
      if (!(a = on(e, this)).isValid()) return NaN;
      switch (r = 6e4 * (a.utcOffset() - this.utcOffset()), t = re(t)) {
        case "year":
          i = Ht(this, a) / 12;
          break;
        case "month":
          i = Ht(this, a);
          break;
        case "quarter":
          i = Ht(this, a) / 3;
          break;
        case "second":
          i = (this - a) / 1e3;
          break;
        case "minute":
          i = (this - a) / 6e4;
          break;
        case "hour":
          i = (this - a) / 36e5;
          break;
        case "day":
          i = (this - a - r) / 864e5;
          break;
        case "week":
          i = (this - a - r) / 6048e5;
          break;
        default:
          i = this - a;
      }
      return n ? i : Q(i);
    }, f.endOf = function(e) {
      var t, n;
      if ((e = re(e)) === void 0 || e === "millisecond" || !this.isValid()) return this;
      switch (n = this._isUTC ? Un : Wn, e) {
        case "year":
          t = n(this.year() + 1, 0, 1) - 1;
          break;
        case "quarter":
          t = n(this.year(), this.month() - this.month() % 3 + 3, 1) - 1;
          break;
        case "month":
          t = n(this.year(), this.month() + 1, 1) - 1;
          break;
        case "week":
          t = n(this.year(), this.month(), this.date() - this.weekday() + 7) - 1;
          break;
        case "isoWeek":
          t = n(this.year(), this.month(), this.date() - (this.isoWeekday() - 1) + 7) - 1;
          break;
        case "day":
        case "date":
          t = n(this.year(), this.month(), this.date() + 1) - 1;
          break;
        case "hour":
          t = this._d.valueOf(), t += 36e5 - yt(t + (this._isUTC ? 0 : 6e4 * this.utcOffset()), 36e5) - 1;
          break;
        case "minute":
          t = this._d.valueOf(), t += 6e4 - yt(t, 6e4) - 1;
          break;
        case "second":
          t = this._d.valueOf(), t += 1e3 - yt(t, 1e3) - 1;
          break;
      }
      return this._d.setTime(t), l.updateOffset(this, true), this;
    }, f.format = function(e) {
      return e = e || (this.isUtc() ? l.defaultFormatUtc : l.defaultFormat), e = j(this, e), this.localeData().postformat(e);
    }, f.from = function(e, t) {
      return this.isValid() && (ee(e) && e.isValid() || se(e).isValid()) ? Ae({ to: this, from: e }).locale(this.locale()).humanize(!t) : this.localeData().invalidDate();
    }, f.fromNow = function(e) {
      return this.from(se(), e);
    }, f.to = function(e, t) {
      return this.isValid() && (ee(e) && e.isValid() || se(e).isValid()) ? Ae({ from: this, to: e }).locale(this.locale()).humanize(!t) : this.localeData().invalidDate();
    }, f.toNow = function(e) {
      return this.to(se(), e);
    }, f.get = function(e) {
      return E(this[e = re(e)]) ? this[e]() : this;
    }, f.invalidAt = function() {
      return S(this).overflow;
    }, f.isAfter = function(e, t) {
      return e = ee(e) ? e : se(e), !(!this.isValid() || !e.isValid()) && ((t = re(t) || "millisecond") === "millisecond" ? this.valueOf() > e.valueOf() : e.valueOf() < this.clone().startOf(t).valueOf());
    }, f.isBefore = function(e, t) {
      return e = ee(e) ? e : se(e), !(!this.isValid() || !e.isValid()) && ((t = re(t) || "millisecond") === "millisecond" ? this.valueOf() < e.valueOf() : this.clone().endOf(t).valueOf() < e.valueOf());
    }, f.isBetween = function(e, t, n, a) {
      return e = ee(e) ? e : se(e), t = ee(t) ? t : se(t), !!(this.isValid() && e.isValid() && t.isValid()) && ((a = a || "()")[0] === "(" ? this.isAfter(e, n) : !this.isBefore(e, n)) && (a[1] === ")" ? this.isBefore(t, n) : !this.isAfter(t, n));
    }, f.isSame = function(n, t) {
      var n = ee(n) ? n : se(n);
      return !(!this.isValid() || !n.isValid()) && ((t = re(t) || "millisecond") === "millisecond" ? this.valueOf() === n.valueOf() : (n = n.valueOf(), this.clone().startOf(t).valueOf() <= n && n <= this.clone().endOf(t).valueOf()));
    }, f.isSameOrAfter = function(e, t) {
      return this.isSame(e, t) || this.isAfter(e, t);
    }, f.isSameOrBefore = function(e, t) {
      return this.isSame(e, t) || this.isBefore(e, t);
    }, f.isValid = function() {
      return C(this);
    }, f.lang = Ft, f.locale = jn, f.localeData = Ln, f.max = Le, f.min = je, f.parsingFlags = function() {
      return he({}, S(this));
    }, f.set = function(e, t) {
      if (typeof e == "object") for (var n = function(i) {
        var o, c = [];
        for (o in i) b(i, o) && c.push({ unit: o, priority: Ne[o] });
        return c.sort(function(_, d) {
          return _.priority - d.priority;
        }), c;
      }(e = xe(e)), a = n.length, r = 0; r < a; r++) this[n[r].unit](e[n[r].unit]);
      else if (E(this[e = re(e)])) return this[e](t);
      return this;
    }, f.startOf = function(e) {
      var t, n;
      if ((e = re(e)) === void 0 || e === "millisecond" || !this.isValid()) return this;
      switch (n = this._isUTC ? Un : Wn, e) {
        case "year":
          t = n(this.year(), 0, 1);
          break;
        case "quarter":
          t = n(this.year(), this.month() - this.month() % 3, 1);
          break;
        case "month":
          t = n(this.year(), this.month(), 1);
          break;
        case "week":
          t = n(this.year(), this.month(), this.date() - this.weekday());
          break;
        case "isoWeek":
          t = n(this.year(), this.month(), this.date() - (this.isoWeekday() - 1));
          break;
        case "day":
        case "date":
          t = n(this.year(), this.month(), this.date());
          break;
        case "hour":
          t = this._d.valueOf(), t -= yt(t + (this._isUTC ? 0 : 6e4 * this.utcOffset()), 36e5);
          break;
        case "minute":
          t = this._d.valueOf(), t -= yt(t, 6e4);
          break;
        case "second":
          t = this._d.valueOf(), t -= yt(t, 1e3);
          break;
      }
      return this._d.setTime(t), l.updateOffset(this, true), this;
    }, f.subtract = St, f.toArray = function() {
      var e = this;
      return [e.year(), e.month(), e.date(), e.hour(), e.minute(), e.second(), e.millisecond()];
    }, f.toObject = function() {
      var e = this;
      return { years: e.year(), months: e.month(), date: e.date(), hours: e.hours(), minutes: e.minutes(), seconds: e.seconds(), milliseconds: e.milliseconds() };
    }, f.toDate = function() {
      return new Date(this.valueOf());
    }, f.toISOString = function(e) {
      if (!this.isValid()) return null;
      var t = (e = e !== true) ? this.clone().utc() : this;
      return t.year() < 0 || 9999 < t.year() ? j(t, e ? "YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]" : "YYYYYY-MM-DD[T]HH:mm:ss.SSSZ") : E(Date.prototype.toISOString) ? e ? this.toDate().toISOString() : new Date(this.valueOf() + 60 * this.utcOffset() * 1e3).toISOString().replace("Z", j(t, "Z")) : j(t, e ? "YYYY-MM-DD[T]HH:mm:ss.SSS[Z]" : "YYYY-MM-DD[T]HH:mm:ss.SSSZ");
    }, f.inspect = function() {
      if (!this.isValid()) return "moment.invalid(/* " + this._i + " */)";
      var e, t = "moment", n = "";
      return this.isLocal() || (t = this.utcOffset() === 0 ? "moment.utc" : "moment.parseZone", n = "Z"), t = "[" + t + '("]', e = 0 <= this.year() && this.year() <= 9999 ? "YYYY" : "YYYYYY", this.format(t + e + "-MM-DD[T]HH:mm:ss.SSS" + (n + '[")]'));
    }, typeof Symbol < "u" && Symbol.for != null && (f[Symbol.for("nodejs.util.inspect.custom")] = function() {
      return "Moment<" + this.format() + ">";
    }), f.toJSON = function() {
      return this.isValid() ? this.toISOString() : null;
    }, f.toString = function() {
      return this.clone().locale("en").format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ");
    }, f.unix = function() {
      return Math.floor(this.valueOf() / 1e3);
    }, f.valueOf = function() {
      return this._d.valueOf() - 6e4 * (this._offset || 0);
    }, f.creationData = function() {
      return { input: this._i, format: this._f, locale: this._locale, isUTC: this._isUTC, strict: this._strict };
    }, f.eraName = function() {
      for (var e, t = this.localeData().eras(), n = 0, a = t.length; n < a; ++n)
        if (e = this.clone().startOf("day").valueOf(), t[n].since <= e && e <= t[n].until || t[n].until <= e && e <= t[n].since) return t[n].name;
      return "";
    }, f.eraNarrow = function() {
      for (var e, t = this.localeData().eras(), n = 0, a = t.length; n < a; ++n)
        if (e = this.clone().startOf("day").valueOf(), t[n].since <= e && e <= t[n].until || t[n].until <= e && e <= t[n].since) return t[n].narrow;
      return "";
    }, f.eraAbbr = function() {
      for (var e, t = this.localeData().eras(), n = 0, a = t.length; n < a; ++n)
        if (e = this.clone().startOf("day").valueOf(), t[n].since <= e && e <= t[n].until || t[n].until <= e && e <= t[n].since) return t[n].abbr;
      return "";
    }, f.eraYear = function() {
      for (var e, t, n = this.localeData().eras(), a = 0, r = n.length; a < r; ++a) if (e = n[a].since <= n[a].until ? 1 : -1, t = this.clone().startOf("day").valueOf(), n[a].since <= t && t <= n[a].until || n[a].until <= t && t <= n[a].since) return (this.year() - l(n[a].since).year()) * e + n[a].offset;
      return this.year();
    }, f.year = It, f.isLeapYear = function() {
      return ve(this.year());
    }, f.weekYear = function(e) {
      return In.call(this, e, this.week(), this.weekday(), this.localeData()._week.dow, this.localeData()._week.doy);
    }, f.isoWeekYear = function(e) {
      return In.call(this, e, this.isoWeek(), this.isoWeekday(), 1, 4);
    }, f.quarter = f.quarters = function(e) {
      return e == null ? Math.ceil((this.month() + 1) / 3) : this.month(3 * (e - 1) + this.month() % 3);
    }, f.month = pn, f.daysInMonth = function() {
      return At(this.year(), this.month());
    }, f.week = f.weeks = function(e) {
      var t = this.localeData().week(this);
      return e == null ? t : this.add(7 * (e - t), "d");
    }, f.isoWeek = f.isoWeeks = function(e) {
      var t = wt(this, 1, 4).week;
      return e == null ? t : this.add(7 * (e - t), "d");
    }, f.weeksInYear = function() {
      var e = this.localeData()._week;
      return Be(this.year(), e.dow, e.doy);
    }, f.weeksInWeekYear = function() {
      var e = this.localeData()._week;
      return Be(this.weekYear(), e.dow, e.doy);
    }, f.isoWeeksInYear = function() {
      return Be(this.year(), 1, 4);
    }, f.isoWeeksInISOWeekYear = function() {
      return Be(this.isoWeekYear(), 1, 4);
    }, f.date = st, f.day = f.days = function(e) {
      if (!this.isValid()) return e != null ? this : NaN;
      var t, n, a = this._isUTC ? this._d.getUTCDay() : this._d.getDay();
      return e != null ? (t = e, n = this.localeData(), e = typeof t != "string" ? t : isNaN(t) ? typeof (t = n.weekdaysParse(t)) == "number" ? t : null : parseInt(t, 10), this.add(e - a, "d")) : a;
    }, f.weekday = function(e) {
      if (!this.isValid()) return e != null ? this : NaN;
      var t = (this.day() + 7 - this.localeData()._week.dow) % 7;
      return e == null ? t : this.add(e - t, "d");
    }, f.isoWeekday = function(e) {
      return this.isValid() ? e != null ? (t = e, n = this.localeData(), n = typeof t == "string" ? n.weekdaysParse(t) % 7 || 7 : isNaN(t) ? null : t, this.day(this.day() % 7 ? n : n - 7)) : this.day() || 7 : e != null ? this : NaN;
      var t, n;
    }, f.dayOfYear = function(e) {
      var t = Math.round((this.clone().startOf("day") - this.clone().startOf("year")) / 864e5) + 1;
      return e == null ? t : this.add(e - t, "d");
    }, f.hour = f.hours = Ue, f.minute = f.minutes = dt, f.second = f.seconds = rt, f.millisecond = f.milliseconds = it, f.utcOffset = function(e, t, n) {
      var a, r = this._offset || 0;
      if (!this.isValid()) return e != null ? this : NaN;
      if (e == null) return this._isUTC ? r : ln(this);
      if (typeof e == "string") {
        if ((e = sn(Et, e)) === null) return this;
      } else Math.abs(e) < 16 && !n && (e *= 60);
      return !this._isUTC && t && (a = ln(this)), this._offset = e, this._isUTC = true, a != null && this.add(a, "m"), r !== e && (!t || this._changeInProgress ? Rn(this, Ae(e - r, "m"), 1, false) : this._changeInProgress || (this._changeInProgress = true, l.updateOffset(this, true), this._changeInProgress = null)), this;
    }, f.utc = function(e) {
      return this.utcOffset(0, e);
    }, f.local = function(e) {
      return this._isUTC && (this.utcOffset(0, e), this._isUTC = false, e && this.subtract(ln(this), "m")), this;
    }, f.parseZone = function() {
      var e;
      return this._tzm != null ? this.utcOffset(this._tzm, false, true) : typeof this._i == "string" && ((e = sn(oa, this._i)) != null ? this.utcOffset(e) : this.utcOffset(0, true)), this;
    }, f.hasAlignedHourOffset = function(e) {
      return !!this.isValid() && (e = e ? se(e).utcOffset() : 0, (this.utcOffset() - e) % 60 == 0);
    }, f.isDST = function() {
      return this.utcOffset() > this.clone().month(0).utcOffset() || this.utcOffset() > this.clone().month(5).utcOffset();
    }, f.isLocal = function() {
      return !!this.isValid() && !this._isUTC;
    }, f.isUtcOffset = function() {
      return !!this.isValid() && this._isUTC;
    }, f.isUtc = An, f.isUTC = An, f.zoneAbbr = function() {
      return this._isUTC ? "UTC" : "";
    }, f.zoneName = function() {
      return this._isUTC ? "Coordinated Universal Time" : "";
    }, f.dates = te("dates accessor is deprecated. Use date instead.", st), f.months = te("months accessor is deprecated. Use month instead", pn), f.years = te("years accessor is deprecated. Use year instead", It), f.zone = te("moment().zone is deprecated, use moment().utcOffset instead. http://momentjs.com/guides/#/warnings/zone/", function(e, t) {
      return e != null ? (this.utcOffset(e = typeof e != "string" ? -e : e, t), this) : -this.utcOffset();
    }), f.isDSTShifted = te("isDSTShifted is deprecated. See http://momentjs.com/guides/#/warnings/dst-shifted/ for more information", function() {
      if (!D(this._isDSTShifted)) return this._isDSTShifted;
      var e, t = {};
      return _e(t, this), (t = xn(t))._a ? (e = (t._isUTC ? oe : se)(t._a), this._isDSTShifted = this.isValid() && 0 < function(n, a, r) {
        for (var i = Math.min(n.length, a.length), o = Math.abs(n.length - a.length), c = 0, _ = 0; _ < i; _++) x(n[_]) !== x(a[_]) && c++;
        return c + o;
      }(t._a, e.toArray())) : this._isDSTShifted = false, this._isDSTShifted;
    }), A = pe.prototype;
    function Ut(e, t, n, i) {
      var r = Ve(), i = oe().set(i, t);
      return r[n](i, e);
    }
    function Bn(e, t, n) {
      if (P(e) && (t = e, e = void 0), e = e || "", t != null) return Ut(e, t, n, "month");
      for (var a = [], r = 0; r < 12; r++) a[r] = Ut(e, r, n, "month");
      return a;
    }
    function fn(e, t, n, a) {
      t = (typeof e == "boolean" ? P(t) && (n = t, t = void 0) : (t = e, e = false, P(n = t) && (n = t, t = void 0)), t || "");
      var r, i = Ve(), o = e ? i._week.dow : 0, c = [];
      if (n != null) return Ut(t, (n + o) % 7, a, "day");
      for (r = 0; r < 7; r++) c[r] = Ut(t, (r + o) % 7, a, "day");
      return c;
    }
    A.calendar = function(e, t, n) {
      return E(e = this._calendar[e] || this._calendar.sameElse) ? e.call(t, n) : e;
    }, A.longDateFormat = function(e) {
      var t = this._longDateFormat[e], n = this._longDateFormat[e.toUpperCase()];
      return t || !n ? t : (this._longDateFormat[e] = n.match(g).map(function(a) {
        return a === "MMMM" || a === "MM" || a === "DD" || a === "dddd" ? a.slice(1) : a;
      }).join(""), this._longDateFormat[e]);
    }, A.invalidDate = function() {
      return this._invalidDate;
    }, A.ordinal = function(e) {
      return this._ordinal.replace("%d", e);
    }, A.preparse = Gn, A.postformat = Gn, A.relativeTime = function(e, t, n, a) {
      var r = this._relativeTime[n];
      return E(r) ? r(e, t, n, a) : r.replace(/%d/i, e);
    }, A.pastFuture = function(e, t) {
      return E(e = this._relativeTime[0 < e ? "future" : "past"]) ? e(t) : e.replace(/%s/i, t);
    }, A.set = function(e) {
      var t, n;
      for (n in e) b(e, n) && (E(t = e[n]) ? this[n] = t : this["_" + n] = t);
      this._config = e, this._dayOfMonthOrdinalParseLenient = new RegExp((this._dayOfMonthOrdinalParse.source || this._ordinalParse.source) + "|" + /\d{1,2}/.source);
    }, A.eras = function(e, t) {
      for (var n, a = this._eras || Ve("en")._eras, r = 0, i = a.length; r < i; ++r) {
        switch (typeof a[r].since) {
          case "string":
            n = l(a[r].since).startOf("day"), a[r].since = n.valueOf();
            break;
        }
        switch (typeof a[r].until) {
          case "undefined":
            a[r].until = 1 / 0;
            break;
          case "string":
            n = l(a[r].until).startOf("day").valueOf(), a[r].until = n.valueOf();
            break;
        }
      }
      return a;
    }, A.erasParse = function(e, t, n) {
      var a, r, i, o, c, _ = this.eras();
      for (e = e.toUpperCase(), a = 0, r = _.length; a < r; ++a) if (i = _[a].name.toUpperCase(), o = _[a].abbr.toUpperCase(), c = _[a].narrow.toUpperCase(), n) switch (t) {
        case "N":
        case "NN":
        case "NNN":
          if (o === e) return _[a];
          break;
        case "NNNN":
          if (i === e) return _[a];
          break;
        case "NNNNN":
          if (c === e) return _[a];
          break;
      }
      else if (0 <= [i, o, c].indexOf(e)) return _[a];
    }, A.erasConvertYear = function(e, t) {
      var n = e.since <= e.until ? 1 : -1;
      return t === void 0 ? l(e.since).year() : l(e.since).year() + (t - e.offset) * n;
    }, A.erasAbbrRegex = function(e) {
      return b(this, "_erasAbbrRegex") || un.call(this), e ? this._erasAbbrRegex : this._erasRegex;
    }, A.erasNameRegex = function(e) {
      return b(this, "_erasNameRegex") || un.call(this), e ? this._erasNameRegex : this._erasRegex;
    }, A.erasNarrowRegex = function(e) {
      return b(this, "_erasNarrowRegex") || un.call(this), e ? this._erasNarrowRegex : this._erasRegex;
    }, A.months = function(e, t) {
      return e ? (N(this._months) ? this._months : this._months[(this._months.isFormat || yn).test(t) ? "format" : "standalone"])[e.month()] : N(this._months) ? this._months : this._months.standalone;
    }, A.monthsShort = function(e, t) {
      return e ? (N(this._monthsShort) ? this._monthsShort : this._monthsShort[yn.test(t) ? "format" : "standalone"])[e.month()] : N(this._monthsShort) ? this._monthsShort : this._monthsShort.standalone;
    }, A.monthsParse = function(e, t, n) {
      var a, r;
      if (this._monthsParseExact) return function(O, o, c) {
        var _, d, $, O = O.toLocaleLowerCase();
        if (!this._monthsParse) for (this._monthsParse = [], this._longMonthsParse = [], this._shortMonthsParse = [], _ = 0; _ < 12; ++_) $ = oe([2e3, _]), this._shortMonthsParse[_] = this.monthsShort($, "").toLocaleLowerCase(), this._longMonthsParse[_] = this.months($, "").toLocaleLowerCase();
        return c ? o === "MMM" ? (d = ge.call(this._shortMonthsParse, O)) !== -1 ? d : null : (d = ge.call(this._longMonthsParse, O)) !== -1 ? d : null : o === "MMM" ? (d = ge.call(this._shortMonthsParse, O)) !== -1 || (d = ge.call(this._longMonthsParse, O)) !== -1 ? d : null : (d = ge.call(this._longMonthsParse, O)) !== -1 || (d = ge.call(this._shortMonthsParse, O)) !== -1 ? d : null;
      }.call(this, e, t, n);
      for (this._monthsParse || (this._monthsParse = [], this._longMonthsParse = [], this._shortMonthsParse = []), a = 0; a < 12; a++)
        if (r = oe([2e3, a]), n && !this._longMonthsParse[a] && (this._longMonthsParse[a] = new RegExp("^" + this.months(r, "").replace(".", "") + "$", "i"), this._shortMonthsParse[a] = new RegExp("^" + this.monthsShort(r, "").replace(".", "") + "$", "i")), n || this._monthsParse[a] || (r = "^" + this.months(r, "") + "|^" + this.monthsShort(r, ""), this._monthsParse[a] = new RegExp(r.replace(".", ""), "i")), n && t === "MMMM" && this._longMonthsParse[a].test(e) || n && t === "MMM" && this._shortMonthsParse[a].test(e) || !n && this._monthsParse[a].test(e)) return a;
    }, A.monthsRegex = function(e) {
      return this._monthsParseExact ? (b(this, "_monthsRegex") || Mn.call(this), e ? this._monthsStrictRegex : this._monthsRegex) : (b(this, "_monthsRegex") || (this._monthsRegex = da), this._monthsStrictRegex && e ? this._monthsStrictRegex : this._monthsRegex);
    }, A.monthsShortRegex = function(e) {
      return this._monthsParseExact ? (b(this, "_monthsRegex") || Mn.call(this), e ? this._monthsShortStrictRegex : this._monthsShortRegex) : (b(this, "_monthsShortRegex") || (this._monthsShortRegex = fa), this._monthsShortStrictRegex && e ? this._monthsShortStrictRegex : this._monthsShortRegex);
    }, A.week = function(e) {
      return wt(e, this._week.dow, this._week.doy).week;
    }, A.firstDayOfYear = function() {
      return this._week.doy;
    }, A.firstDayOfWeek = function() {
      return this._week.dow;
    }, A.weekdays = function(e, t) {
      return t = N(this._weekdays) ? this._weekdays : this._weekdays[e && e !== true && this._weekdays.isFormat.test(t) ? "format" : "standalone"], e === true ? Qt(t, this._week.dow) : e ? t[e.day()] : t;
    }, A.weekdaysMin = function(e) {
      return e === true ? Qt(this._weekdaysMin, this._week.dow) : e ? this._weekdaysMin[e.day()] : this._weekdaysMin;
    }, A.weekdaysShort = function(e) {
      return e === true ? Qt(this._weekdaysShort, this._week.dow) : e ? this._weekdaysShort[e.day()] : this._weekdaysShort;
    }, A.weekdaysParse = function(e, t, n) {
      var a, r;
      if (this._weekdaysParseExact) return function(O, o, c) {
        var _, d, $, O = O.toLocaleLowerCase();
        if (!this._weekdaysParse) for (this._weekdaysParse = [], this._shortWeekdaysParse = [], this._minWeekdaysParse = [], _ = 0; _ < 7; ++_) $ = oe([2e3, 1]).day(_), this._minWeekdaysParse[_] = this.weekdaysMin($, "").toLocaleLowerCase(), this._shortWeekdaysParse[_] = this.weekdaysShort($, "").toLocaleLowerCase(), this._weekdaysParse[_] = this.weekdays($, "").toLocaleLowerCase();
        return c ? o === "dddd" ? (d = ge.call(this._weekdaysParse, O)) !== -1 ? d : null : o === "ddd" ? (d = ge.call(this._shortWeekdaysParse, O)) !== -1 ? d : null : (d = ge.call(this._minWeekdaysParse, O)) !== -1 ? d : null : o === "dddd" ? (d = ge.call(this._weekdaysParse, O)) !== -1 || (d = ge.call(this._shortWeekdaysParse, O)) !== -1 || (d = ge.call(this._minWeekdaysParse, O)) !== -1 ? d : null : o === "ddd" ? (d = ge.call(this._shortWeekdaysParse, O)) !== -1 || (d = ge.call(this._weekdaysParse, O)) !== -1 || (d = ge.call(this._minWeekdaysParse, O)) !== -1 ? d : null : (d = ge.call(this._minWeekdaysParse, O)) !== -1 || (d = ge.call(this._weekdaysParse, O)) !== -1 || (d = ge.call(this._shortWeekdaysParse, O)) !== -1 ? d : null;
      }.call(this, e, t, n);
      for (this._weekdaysParse || (this._weekdaysParse = [], this._minWeekdaysParse = [], this._shortWeekdaysParse = [], this._fullWeekdaysParse = []), a = 0; a < 7; a++)
        if (r = oe([2e3, 1]).day(a), n && !this._fullWeekdaysParse[a] && (this._fullWeekdaysParse[a] = new RegExp("^" + this.weekdays(r, "").replace(".", "\\.?") + "$", "i"), this._shortWeekdaysParse[a] = new RegExp("^" + this.weekdaysShort(r, "").replace(".", "\\.?") + "$", "i"), this._minWeekdaysParse[a] = new RegExp("^" + this.weekdaysMin(r, "").replace(".", "\\.?") + "$", "i")), this._weekdaysParse[a] || (r = "^" + this.weekdays(r, "") + "|^" + this.weekdaysShort(r, "") + "|^" + this.weekdaysMin(r, ""), this._weekdaysParse[a] = new RegExp(r.replace(".", ""), "i")), n && t === "dddd" && this._fullWeekdaysParse[a].test(e) || n && t === "ddd" && this._shortWeekdaysParse[a].test(e) || n && t === "dd" && this._minWeekdaysParse[a].test(e) || !n && this._weekdaysParse[a].test(e)) return a;
    }, A.weekdaysRegex = function(e) {
      return this._weekdaysParseExact ? (b(this, "_weekdaysRegex") || Jt.call(this), e ? this._weekdaysStrictRegex : this._weekdaysRegex) : (b(this, "_weekdaysRegex") || (this._weekdaysRegex = ga), this._weekdaysStrictRegex && e ? this._weekdaysStrictRegex : this._weekdaysRegex);
    }, A.weekdaysShortRegex = function(e) {
      return this._weekdaysParseExact ? (b(this, "_weekdaysRegex") || Jt.call(this), e ? this._weekdaysShortStrictRegex : this._weekdaysShortRegex) : (b(this, "_weekdaysShortRegex") || (this._weekdaysShortRegex = ba), this._weekdaysShortStrictRegex && e ? this._weekdaysShortStrictRegex : this._weekdaysShortRegex);
    }, A.weekdaysMinRegex = function(e) {
      return this._weekdaysParseExact ? (b(this, "_weekdaysRegex") || Jt.call(this), e ? this._weekdaysMinStrictRegex : this._weekdaysMinRegex) : (b(this, "_weekdaysMinRegex") || (this._weekdaysMinRegex = ma), this._weekdaysMinStrictRegex && e ? this._weekdaysMinStrictRegex : this._weekdaysMinRegex);
    }, A.isPM = function(e) {
      return (e + "").toLowerCase().charAt(0) === "p";
    }, A.meridiem = function(e, t, n) {
      return 11 < e ? n ? "pm" : "PM" : n ? "am" : "AM";
    }, nt("en", { eras: [{ since: "0001-01-01", until: 1 / 0, offset: 1, name: "Anno Domini", narrow: "AD", abbr: "AD" }, { since: "0000-12-31", until: -1 / 0, offset: 1, name: "Before Christ", narrow: "BC", abbr: "BC" }], dayOfMonthOrdinalParse: /\d{1,2}(th|st|nd|rd)/, ordinal: function(e) {
      var t = e % 10;
      return e + (x(e % 100 / 10) === 1 ? "th" : t == 1 ? "st" : t == 2 ? "nd" : t == 3 ? "rd" : "th");
    } }), l.lang = te("moment.lang is deprecated. Use moment.locale instead.", nt), l.langData = te("moment.langData is deprecated. Use moment.localeData instead.", Ve);
    var ze = Math.abs;
    function Vn(e, t, n, a) {
      return t = Ae(t, n), e._milliseconds += a * t._milliseconds, e._days += a * t._days, e._months += a * t._months, e._bubble();
    }
    function zn(e) {
      return e < 0 ? Math.floor(e) : Math.ceil(e);
    }
    function Zn(e) {
      return 4800 * e / 146097;
    }
    function dn(e) {
      return 146097 * e / 4800;
    }
    function Ze(e) {
      return function() {
        return this.as(e);
      };
    }
    gt = Ze("ms"), tt = Ze("s"), Yt = Ze("m"), Le = Ze("h"), je = Ze("d"), St = Ze("w"), Ue = Ze("M"), dt = Ze("Q"), rt = Ze("y");
    function ht(e) {
      return function() {
        return this.isValid() ? this._data[e] : NaN;
      };
    }
    var it = ht("milliseconds"), st = ht("seconds"), It = ht("minutes"), A = ht("hours"), Na = ht("days"), Ca = ht("months"), Ea = ht("years"), qe = Math.round, _t = { ss: 44, s: 45, m: 45, h: 22, d: 26, w: null, M: 11 };
    function Aa(e, t, n, a) {
      var d = Ae(e).abs(), $ = qe(d.as("s")), r = qe(d.as("m")), i = qe(d.as("h")), o = qe(d.as("d")), c = qe(d.as("M")), _ = qe(d.as("w")), d = qe(d.as("y")), $ = ($ <= n.ss ? ["s", $] : $ < n.s && ["ss", $]) || r <= 1 && ["m"] || r < n.m && ["mm", r] || i <= 1 && ["h"] || i < n.h && ["hh", i] || o <= 1 && ["d"] || o < n.d && ["dd", o];
      return ($ = ($ = n.w != null ? $ || _ <= 1 && ["w"] || _ < n.w && ["ww", _] : $) || c <= 1 && ["M"] || c < n.M && ["MM", c] || d <= 1 && ["y"] || ["yy", d])[2] = t, $[3] = 0 < +e, $[4] = a, function(O, ue, be, $e, gn) {
        return gn.relativeTime(ue || 1, !!be, O, $e);
      }.apply(null, $);
    }
    var hn = Math.abs;
    function pt(e) {
      return (0 < e) - (e < 0) || +e;
    }
    function Gt() {
      if (!this.isValid()) return this.localeData().invalidDate();
      var e, t, n, a, r, i, o, c = hn(this._milliseconds) / 1e3, _ = hn(this._days), d = hn(this._months), $ = this.asSeconds();
      return $ ? (e = Q(c / 60), t = Q(e / 60), c %= 60, e %= 60, n = Q(d / 12), d %= 12, a = c ? c.toFixed(3).replace(/\.?0+$/, "") : "", r = pt(this._months) !== pt($) ? "-" : "", i = pt(this._days) !== pt($) ? "-" : "", o = pt(this._milliseconds) !== pt($) ? "-" : "", ($ < 0 ? "-" : "") + "P" + (n ? r + n + "Y" : "") + (d ? r + d + "M" : "") + (_ ? i + _ + "D" : "") + (t || e || c ? "T" : "") + (t ? o + t + "H" : "") + (e ? o + e + "M" : "") + (c ? o + a + "S" : "")) : "P0D";
    }
    var B = jt.prototype;
    return B.isValid = function() {
      return this._isValid;
    }, B.abs = function() {
      var e = this._data;
      return this._milliseconds = ze(this._milliseconds), this._days = ze(this._days), this._months = ze(this._months), e.milliseconds = ze(e.milliseconds), e.seconds = ze(e.seconds), e.minutes = ze(e.minutes), e.hours = ze(e.hours), e.months = ze(e.months), e.years = ze(e.years), this;
    }, B.add = function(e, t) {
      return Vn(this, e, t, 1);
    }, B.subtract = function(e, t) {
      return Vn(this, e, t, -1);
    }, B.as = function(e) {
      if (!this.isValid()) return NaN;
      var t, n, a = this._milliseconds;
      if ((e = re(e)) === "month" || e === "quarter" || e === "year") switch (t = this._days + a / 864e5, n = this._months + Zn(t), e) {
        case "month":
          return n;
        case "quarter":
          return n / 3;
        case "year":
          return n / 12;
      }
      else switch (t = this._days + Math.round(dn(this._months)), e) {
        case "week":
          return t / 7 + a / 6048e5;
        case "day":
          return t + a / 864e5;
        case "hour":
          return 24 * t + a / 36e5;
        case "minute":
          return 1440 * t + a / 6e4;
        case "second":
          return 86400 * t + a / 1e3;
        case "millisecond":
          return Math.floor(864e5 * t) + a;
        default:
          throw new Error("Unknown unit " + e);
      }
    }, B.asMilliseconds = gt, B.asSeconds = tt, B.asMinutes = Yt, B.asHours = Le, B.asDays = je, B.asWeeks = St, B.asMonths = Ue, B.asQuarters = dt, B.asYears = rt, B.valueOf = function() {
      return this.isValid() ? this._milliseconds + 864e5 * this._days + this._months % 12 * 2592e6 + 31536e6 * x(this._months / 12) : NaN;
    }, B._bubble = function() {
      var e = this._milliseconds, t = this._days, n = this._months, a = this._data;
      return 0 <= e && 0 <= t && 0 <= n || e <= 0 && t <= 0 && n <= 0 || (e += 864e5 * zn(dn(n) + t), n = t = 0), a.milliseconds = e % 1e3, e = Q(e / 1e3), a.seconds = e % 60, e = Q(e / 60), a.minutes = e % 60, e = Q(e / 60), a.hours = e % 24, t += Q(e / 24), n += e = Q(Zn(t)), t -= zn(dn(e)), e = Q(n / 12), n %= 12, a.days = t, a.months = n, a.years = e, this;
    }, B.clone = function() {
      return Ae(this);
    }, B.get = function(e) {
      return e = re(e), this.isValid() ? this[e + "s"]() : NaN;
    }, B.milliseconds = it, B.seconds = st, B.minutes = It, B.hours = A, B.days = Na, B.weeks = function() {
      return Q(this.days() / 7);
    }, B.months = Ca, B.years = Ea, B.humanize = function(e, t) {
      if (!this.isValid()) return this.localeData().invalidDate();
      var n = false, a = _t;
      return typeof e == "object" && (t = e, e = false), typeof e == "boolean" && (n = e), typeof t == "object" && (a = Object.assign({}, _t, t), t.s != null && t.ss == null && (a.ss = t.s - 1)), e = this.localeData(), t = Aa(this, !n, a, e), n && (t = e.pastFuture(+this, t)), e.postformat(t);
    }, B.toISOString = Gt, B.toString = Gt, B.toJSON = Gt, B.locale = jn, B.localeData = Ln, B.toIsoString = te("toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)", Gt), B.lang = Ft, u("X", 0, 0, "unix"), u("x", 0, 0, "valueOf"), M("x", Ct), M("X", /[+-]?\d+(\.\d{1,3})?/), ae("X", function(e, t, n) {
      n._d = new Date(1e3 * parseFloat(e));
    }), ae("x", function(e, t, n) {
      n._d = new Date(x(e));
    }), l.version = "2.29.4", T = se, l.fn = f, l.min = function() {
      return Cn("isBefore", [].slice.call(arguments, 0));
    }, l.max = function() {
      return Cn("isAfter", [].slice.call(arguments, 0));
    }, l.now = function() {
      return Date.now ? Date.now() : +/* @__PURE__ */ new Date();
    }, l.utc = oe, l.unix = function(e) {
      return se(1e3 * e);
    }, l.months = function(e, t) {
      return Bn(e, t, "months");
    }, l.isDate = H, l.locale = nt, l.invalid = k, l.duration = Ae, l.isMoment = ee, l.weekdays = function(e, t, n) {
      return fn(e, t, n, "weekdays");
    }, l.parseZone = function() {
      return se.apply(null, arguments).parseZone();
    }, l.localeData = Ve, l.isDuration = Lt, l.monthsShort = function(e, t) {
      return Bn(e, t, "monthsShort");
    }, l.weekdaysMin = function(e, t, n) {
      return fn(e, t, n, "weekdaysMin");
    }, l.defineLocale = Kt, l.updateLocale = function(e, t) {
      var n, a;
      return t != null ? (a = wn, ce[e] != null && ce[e].parentLocale != null ? ce[e].set(me(ce[e]._config, t)) : (t = me(a = (n = Rt(e)) != null ? n._config : a, t), n == null && (t.abbr = e), (a = new pe(t)).parentLocale = ce[e], ce[e] = a), nt(e)) : ce[e] != null && (ce[e].parentLocale != null ? (ce[e] = ce[e].parentLocale, e === nt() && nt(e)) : ce[e] != null && delete ce[e]), ce[e];
    }, l.locales = function() {
      return w(ce);
    }, l.weekdaysShort = function(e, t, n) {
      return fn(e, t, n, "weekdaysShort");
    }, l.normalizeUnits = re, l.relativeTimeRounding = function(e) {
      return e === void 0 ? qe : typeof e == "function" && (qe = e, true);
    }, l.relativeTimeThreshold = function(e, t) {
      return _t[e] !== void 0 && (t === void 0 ? _t[e] : (_t[e] = t, e === "s" && (_t.ss = t - 1), true));
    }, l.calendarFormat = function(e, t) {
      return (e = e.diff(t, "days", true)) < -6 ? "sameElse" : e < -1 ? "lastWeek" : e < 0 ? "lastDay" : e < 1 ? "sameDay" : e < 2 ? "nextDay" : e < 7 ? "nextWeek" : "sameElse";
    }, l.prototype = f, l.HTML5_FMT = { DATETIME_LOCAL: "YYYY-MM-DDTHH:mm", DATETIME_LOCAL_SECONDS: "YYYY-MM-DDTHH:mm:ss", DATETIME_LOCAL_MS: "YYYY-MM-DDTHH:mm:ss.SSS", DATE: "YYYY-MM-DD", TIME: "HH:mm", TIME_SECONDS: "HH:mm:ss", TIME_MS: "HH:mm:ss.SSS", WEEK: "GGGG-[W]WW", MONTH: "YYYY-MM" }, l;
  });
})(ia);
var lr = ia.exports;
var sa = /* @__PURE__ */ Je(lr);
function vr() {
}
sa.suppressDeprecationWarnings = true;
sa.suppressDeprecationWarnings = true;
var wr = (p) => {
  console.error(`#TOASTER-WARN: ${p}`);
};
var cr = (p) => {
  const R = `${p}`;
  return R.split(".")[1] ? R.split(".")[1].length : 0;
};
var Sr = (p) => p.reduce((R, T) => {
  const l = cr(T);
  return Math.max(R, l);
}, 0);
var Or = (p) => {
  var R;
  if (Array.isArray(p)) return false;
  const T = String(p).trim();
  if (/[^\d.,\-eE+]/.test(T)) return false;
  if (!T.includes(",")) return !isNaN(Number(T));
  if ((T.match(/,/g) || []).length > 1) return !isNaN(Number(T.replace(/,/g, "")));
  const l = ((R = T.split(",")[1]) == null ? void 0 : R.length) === 3 ? "" : ".";
  return !isNaN(Number(T.replace(",", l)));
};
var Tr = (p) => /^[+-]?(?:(?:\d{1,3}(?:[ ,.]?\d{3})*(?:\.\d+)?)|(?:\.\d+))(?:[eE][+-]?\d+)?$/.test(
  p
);

export {
  na as a,
  ur as b,
  fr as c,
  dr as d,
  hr as e,
  yr as f,
  _r as g,
  kr as h,
  vr as i,
  wr as j,
  cr as k,
  Sr as l,
  Or as m,
  Tr as n
};
