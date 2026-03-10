import {
  a as re
} from "./chunk-OBQZZTQT.js";
import {
  n as U,
  o as Z,
  p as ee,
  q as te
} from "./chunk-VGBZSIGE.js";
import {
  a as Q,
  b as ae
} from "./chunk-LQT34KSW.js";
import {
  $d as _,
  Be as i,
  Jd as J,
  Ld as c,
  Le as M,
  Me as A,
  Qd as x,
  Rd as D,
  Sd as a,
  Xd as f,
  Yd as C,
  Zd as l,
  ae as t,
  he as y,
  je as I,
  ke as o,
  l as q,
  m as E,
  n as G,
  oe as K,
  re as S,
  te as N,
  ue as O
} from "./chunk-K3YJBOOZ.js";

// src/charts/_common/Axes/MiniDateAxis.svelte
var ue = y(`<g><line data-testid="horizontal-tick"></line><!></g>`);
var fe = y(`<g></g>`);
function L(T, e) {
  x(e, true);
  let k = A(e, "translateString", 3, "0 0 "), p = A(e, "options", 19, () => ({})), w = A(e, "isMobile", 3, true);
  const H = a(() => q(p()?.isTerminalClient ?? false));
  const z = a(() => E(w()));
  var s = fe();
  O(s, 21, () => e.ticks, N, (g, b) => {
    var d = ue();
    var n = f(d);
    i(n, "x1", 0);
    i(n, "x2", 0);
    i(n, "y1", 0);
    i(n, "y2", 7);
    i(n, "stroke-width", 1);
    var F = l(n);
    {
      let v = a(() => `${t(z)}px`);
      Q(F, {
        dx: 0,
        dy: 14,
        width: Infinity,
        get text() {
          return t(b).label.value;
        },
        textAnchor: "middle",
        verticalAnchor: "hanging",
        get fontSize() {
          return t(v);
        },
        get fontFamily() {
          return t(H);
        }
      });
    }
    c(d);
    _((v) => i(d, "transform", v), [
      () => `translate(${e.scale.scale(t(b).value)} ${0})`
    ]);
    o(g, d);
  });
  c(s);
  _(() => i(s, "transform", k()));
  o(T, s);
  D();
}

// src/charts/_common/Axes/XYLayout.svelte
var ve = y(`<g><g><!></g><g><!><!><!><!><!></g></g>`);
function he(T, e) {
  x(e, true);
  const k = a(() => !e.scales?.primaryScale || !e.scales?.secondaryScale);
  const p = a(() => e.scales?.padding.top ?? 0);
  const w = a(() => e.scales?.padding.left ?? 0);
  const H = a(() => e.scales?.padding.right ?? 0);
  const z = a(() => e.scales?.primaryScale?.scale.scale.range()[1] ?? 0);
  const s = a(() => e.scales?.secondaryScale?.scale.scale.range()[0] ?? 0);
  const g = a(() => G(e.width));
  const b = a(() => e.scales.secondaryScale?.scale.type === "linear" && e.scales.secondaryScale?.ticks?.[0]?.value ? +e.scales.secondaryScale.ticks[0]?.value : 0);
  const d = a(() => e.chartData.isSubChart);
  var n = I();
  var F = C(n);
  {
    var v = (P) => {
      var $ = ve();
      var V = f($);
      var ie = f(V);
      {
        var ne = (r) => {
          var m = I();
          var h = C(m);
          {
            var ce = (u) => {
              {
                let B = a(() => `translate (0, ${t(s)})`);
                L(u, {
                  get translateString() {
                    return t(B);
                  },
                  get scale() {
                    return e.scales.primaryScale.scale;
                  },
                  get ticks() {
                    return e.scales.primaryScale.ticks;
                  },
                  get options() {
                    return e.options;
                  },
                  get isMobile() {
                    return t(g);
                  }
                });
              }
            };
            var oe = (u) => {
              {
                let B = a(() => `translate (0, ${t(s)})`);
                let de = a(() => e.chartData.axis?.primary ?? {});
                te(u, M(
                  {
                    get translateString() {
                      return t(B);
                    },
                    get axisProperties() {
                      return t(de);
                    },
                    get perpendicularHeight() {
                      return e.height;
                    },
                    get bottomTickValue() {
                      return t(b);
                    }
                  },
                  () => e.scales.primaryScale,
                  {
                    get options() {
                      return e.options;
                    },
                    get isMobile() {
                      return t(g);
                    }
                  }
                ));
              }
            };
            S(h, (u) => {
              if (t(d)) u(ce);
              else u(oe, false);
            });
          }
          o(r, m);
        };
        var se = (r) => {
          {
            let m = a(() => `translate (0, ${t(s)})`);
            let h = a(() => e.chartData.axis?.primary ?? {});
            ae(r, M(
              {
                get translateString() {
                  return t(m);
                },
                get perpendicularHeight() {
                  return e.height;
                },
                get axisProperties() {
                  return t(h);
                }
              },
              () => e.scales.primaryScale,
              {
                get options() {
                  return e.options;
                },
                get isMobile() {
                  return t(g);
                }
              }
            ));
          }
        };
        S(ie, (r) => {
          if (e.scales.primaryScale.scale.type === "time" || e.scales.primaryScale.scale.type === "timeBand") r(ne);
          else r(se, false);
        });
      }
      c(V);
      var W = l(V);
      var R = f(W);
      {
        var le = (r) => {
          {
            let m = a(() => `translate (${t(z) + t(H)} ${0})`);
            let h = a(() => e.chartData.axis?.secondary ?? {});
            re(r, M(
              {
                get translateString() {
                  return t(m);
                },
                get perpendicularHeight() {
                  return e.width;
                },
                get axisProperties() {
                  return t(h);
                }
              },
              () => e.scales.secondaryScale,
              {
                get options() {
                  return e.options;
                },
                get isMobile() {
                  return t(g);
                }
              }
            ));
          }
        };
        S(R, (r) => {
          if (e.scales.secondaryScale) r(le);
        });
      }
      var X = l(R);
      Z(X, {
        get chartData() {
          return e.chartData;
        },
        get scales() {
          return e.scales;
        },
        get options() {
          return e.options;
        }
      });
      var Y = l(X);
      K(Y, () => e.children ?? J);
      var j = l(Y);
      ee(j, {
        get chartData() {
          return e.chartData;
        },
        get scales() {
          return e.scales;
        },
        get options() {
          return e.options;
        },
        get isMobile() {
          return t(g);
        }
      });
      var ge = l(j);
      U(ge, {
        get scales() {
          return e.scales;
        },
        get chartData() {
          return e.chartData;
        },
        get options() {
          return e.options;
        },
        get width() {
          return e.width;
        }
      });
      c(W);
      c($);
      _(() => i($, "transform", `translate(${t(w)} ${t(p)})`));
      o(P, $);
    };
    S(F, (P) => {
      if (!t(k)) P(v);
    });
  }
  o(T, n);
  D();
}

export {
  he as a
};
//# sourceMappingURL=chunk-PUCUUKFQ.js.map
