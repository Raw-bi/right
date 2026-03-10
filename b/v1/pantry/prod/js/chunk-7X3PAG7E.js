import {
  a as ye
} from "./chunk-JGAF2UPG.js";
import {
  a as he,
  b as ve,
  c as pe
} from "./chunk-TU74YKFK.js";
import {
  b as $e,
  d as fe,
  f as me
} from "./chunk-VWPWBXTO.js";
import {
  $d as J,
  Be as i,
  He as G,
  Je as ge,
  Ld as oe,
  Me as ue,
  O as j,
  Qd as ie,
  Rd as se,
  Sd as n,
  Td as le,
  Ud as de,
  Xd as ce,
  Yd as D,
  Zd as b,
  ae as e,
  gc as q,
  he as w,
  je as R,
  ke as y,
  re as k,
  te as O,
  ue as E,
  va as ne,
  za as ae
} from "./chunk-K3YJBOOZ.js";

// src/charts/bar/groupedBar.utils.ts
function Oe(o, t) {
  if (!t) return 0;
  const a = t(o);
  if (a !== void 0) {
    return Math.abs(a - (t(0) ?? a));
  }
  return 0;
}
function Ee(o, t, a) {
  if (t) {
    return a === "dark" ? "white" : "black";
  }
  if (o) {
    return o;
  }
  return "none";
}
function _e({
  scales: o,
  nonPrimaryFields: t,
  formattedDataWithKey: a
}) {
  const l = o.primaryScale.scale.isBand ? o.primaryScale.scale.scale : null;
  const d = o.secondaryScale?.scale.type === "linear" ? o.secondaryScale.scale.scale : null;
  const f = o.colorScale.scale;
  const h = o.strokeScale?.scale ?? ((s) => "none");
  const c = t.length;
  if (!l || !d) return [];
  const v = t.some(
    (s) => h(s.id) !== "none"
  );
  return t.flatMap(
    (s, N) => a.map((P, A) => {
      const W = P.formattedData[0];
      const _ = P.formattedData[s.index];
      const X = P.key;
      const V = _ > 0;
      const C = l.subBandWidth(c);
      const M = l ? l(W, N, c) : void 0;
      if (M === void 0) {
        return null;
      }
      const I = M - C / 2;
      const F = d ? V ? d(_) ?? 0 : d(0) ?? 0 : 0;
      const L = C;
      return {
        field: s,
        fieldIndex: s.index,
        seriesIndex: A,
        primaryKey: X,
        primaryValue: W,
        value: _,
        isPositive: V,
        x: I,
        y: F,
        width: L,
        height: Oe(_, d),
        fill: f(s.id, A),
        stroke: h(s.id) === "none" ? f(s.id, A) : h(s.id),
        strokeWidth: v ? j : 0,
        showRuler: false,
        xPos: I,
        isTallestBar: true
      };
    })
  ).filter((s) => s !== null);
}
function xe(o) {
  return [...o].sort((t, a) => {
    if (t.xPos !== a.xPos) return t.xPos - a.xPos;
    return a.value - t.value;
  }).filter((t) => t.value !== void 0);
}
function Be({
  sortedBarData: o,
  tooltipIndex: t,
  scales: a,
  tooltipOverride: l,
  disableTooltip: d,
  variant: f,
  numSeriesPerMultiple: h
}) {
  return o.map((c) => {
    const v = Boolean(l) && q({
      tooltipIndex: t,
      primaryValue: c.primaryValue,
      primaryScale: a.primaryScale.scale,
      xPosition: c.x,
      sortedBarData: o,
      numSeriesPerMultiple: h
    }) && !d;
    const s = c.value !== void 0 && !l && q({
      tooltipIndex: t,
      primaryValue: c.primaryValue,
      primaryScale: a.primaryScale.scale,
      xPosition: c.x,
      fieldIndex: c.fieldIndex,
      sortedBarData: o,
      numSeriesPerMultiple: h
    }) && !d;
    return {
      ...c,
      isHighlighted: v,
      stroke: Ee(c.stroke, v, f),
      strokeWidth: v ? j : c.strokeWidth,
      showRuler: s
    };
  });
}
function Se(o) {
  const t = /* @__PURE__ */ new Map();
  o.forEach((a) => {
    const l = `${a.xPos}`;
    if (!t.has(l)) {
      t.set(l, []);
    }
    t.get(l)?.push(a);
  });
  return o.map((a) => {
    const l = `${a.xPos}`;
    const d = t.get(l);
    if (!d || d.length <= 1) {
      return { ...a, needsTopBorder: false, isTallestBar: true };
    }
    const f = d.reduce(
      (v, s) => (s.y ?? 0) < (v.y ?? 0) ? s : v,
      d[0]
    );
    const h = a.y !== f.y;
    const c = a.y === f.y;
    return { ...a, needsTopBorder: h, isTallestBar: c };
  });
}

// src/charts/bar/GroupedBarData.svelte
var Ge = w(`<rect class="bar-body"></rect>`);
var Ne = w(`<rect></rect><line></line>`, 1);
var Xe = w(`<!><!>`, 1);
var ze = w(`<!><!><!><!>`, 1);
var Ye = w(`<g><!></g>`);
function je(o, t) {
  ie(t, true);
  const a = () => G(N, "$annotationMode", f);
  const l = () => G(v, "$tooltipPosition", f);
  const d = () => G(s, "$annotationPosition", f);
  const [f, h] = ge();
  let c = ue(t, "tooltipOverride", 3, null);
  const v = $e();
  const s = fe();
  const N = me();
  const P = n(() => (t.options.variant === "auto" ? "light" : t.options.variant) ?? "light");
  const A = t.chartData?.multiples?.numSeriesPerMultiple ?? null;
  let W = le(null);
  const _ = n(() => {
    if (t.scales.primaryScale.scale.isBand) {
      return t.scales.primaryScale.scale.scale;
    }
    return null;
  });
  const X = n(() => {
    if (t.scales.secondaryScale && t.scales.secondaryScale.scale.type === "linear") {
      return t.scales.secondaryScale.scale.scale;
    }
    return null;
  });
  const V = n(() => t.chartData ? ne(t.chartData) : []);
  const C = n(() => t.scales.colorScale.scale);
  const M = n(() => t.scales.tooltipIndexScale?.scale);
  const I = n(() => t.scales?.padding ?? {});
  const F = n(() => e(I).top ?? 0);
  const L = n(() => e(I).left ?? 0);
  const De = n(() => e(I).right ?? 0);
  const Pe = n(() => e(I).bottom ?? 0);
  const Q = n(() => t.width - e(L) - e(De));
  const U = n(() => t.height - e(F) - e(Pe));
  const T = n(() => a() === "PLACING");
  const K = n(() => a() === "IDLE");
  const Ie = n(() => t.chartData?.design.tooltips?.disableTooltips);
  const ke = n(() => t.chartData ? ae({ scales: t.scales, chartData: t.chartData }) : []);
  const Te = n(() => {
    if (e(M) && l()) {
      return e(M)([l().x, l().y]);
    }
    return null;
  });
  const be = n(() => _e({
    scales: t.scales,
    nonPrimaryFields: e(V),
    formattedDataWithKey: e(ke)
  }));
  const we = n(() => xe(e(be)));
  const Ae = n(() => Be({
    sortedBarData: e(we),
    tooltipIndex: e(Te),
    scales: t.scales,
    tooltipOverride: c(),
    disableTooltip: e(Ie),
    variant: e(P),
    numSeriesPerMultiple: A
  }));
  const H = n(() => Se(e(Ae)));
  var z = Ye();
  var We = ce(z);
  {
    var Me = (Y) => {
      var Z = ze();
      var ee = D(Z);
      E(ee, 17, () => e(H), O, (m, r) => {
        var B = R();
        var S = D(B);
        {
          var g = ($) => {
            var u = Ge();
            J(() => {
              i(u, "x", e(r).x);
              i(u, "y", e(r).y);
              i(u, "width", e(r).width);
              i(u, "height", e(r).height);
              i(u, "fill", e(r).fill);
              i(u, "stroke-width", e(T) || e(K) ? 0 : e(r).strokeWidth);
              i(u, "stroke", e(T) || e(K) ? "none" : e(r).stroke);
            });
            y($, u);
          };
          k(S, ($) => {
            if (!e(r).needsTopBorder) $(g);
          });
        }
        y(m, B);
      });
      var te = b(ee);
      E(te, 17, () => e(H), O, (m, r) => {
        var B = R();
        var S = D(B);
        {
          var g = ($) => {
            var u = Ne();
            var p = D(u);
            var x = b(p);
            J(() => {
              i(p, "x", e(r).x);
              i(p, "y", e(r).y);
              i(p, "width", e(r).width);
              i(p, "height", e(r).height);
              i(p, "fill", e(r).fill);
              i(p, "stroke-width", e(T) || e(K) ? 0 : e(r).strokeWidth);
              i(p, "stroke", e(T) || e(K) ? "none" : e(r).stroke);
              i(x, "x1", e(r).x);
              i(x, "y1", e(r).y);
              i(x, "x2", (e(r).x ?? 0) + e(r).width);
              i(x, "y2", e(r).y);
              i(x, "stroke", e(P) === "dark" ? "white" : "black");
            });
            y($, u);
          };
          k(S, ($) => {
            if (e(r).needsTopBorder) $(g);
          });
        }
        y(m, B);
      });
      var re = b(te);
      {
        var Ke = (m) => {
          var r = R();
          var B = D(r);
          E(B, 17, () => e(H), O, (S, g) => {
            var $ = R();
            var u = D($);
            {
              var p = (x) => {
                {
                  let Ve = n(() => (e(g).x ?? 0) + e(g).width / 2);
                  let Ce = n(() => e(g).value > 0 ? e(g).y : e(g).y + e(g).height);
                  let Fe = n(() => e(_).range()[0]);
                  let Le = n(() => e(_).range()[1]);
                  ye(x, {
                    orientation: "horizontal",
                    get cx() {
                      return e(Ve);
                    },
                    get cy() {
                      return e(Ce);
                    },
                    get start() {
                      return e(Fe);
                    },
                    get end() {
                      return e(Le);
                    },
                    get options() {
                      return t.options;
                    }
                  });
                }
              };
              k(u, (x) => {
                if (e(g).showRuler && e(_) && e(g).isTallestBar) x(p);
              });
            }
            y(S, $);
          });
          y(m, r);
        };
        k(re, (m) => {
          if (!e(T) && !e(K)) m(Ke);
        });
      }
      var He = b(re);
      {
        var Re = (m) => {
          he(m, {
            get width() {
              return e(Q);
            },
            get height() {
              return e(U);
            },
            get xScale() {
              return e(_);
            },
            get yScale() {
              return e(X);
            },
            get annotationPosition() {
              return d();
            },
            get leftTransformAmount() {
              return e(L);
            },
            get topTransformAmount() {
              return e(F);
            },
            get panelIndex() {
              return t.panelIndex;
            },
            children: (r, B) => {
              var S = Xe();
              var g = D(S);
              ve(g, {
                get colorScale() {
                  return e(C);
                },
                get variant() {
                  return e(P);
                },
                get chartData() {
                  return t.chartData;
                },
                get barMarkers() {
                  return e(H);
                },
                $$events: {
                  seriesInfoChange: (u) => {
                    de(W, u.detail.currentSeries, true);
                  }
                }
              });
              var $ = b(g);
              pe($, {
                get annotationPosition() {
                  return d();
                },
                get annotationInfo() {
                  return e(W);
                },
                get width() {
                  return e(Q);
                },
                get height() {
                  return e(U);
                },
                get options() {
                  return t.options;
                }
              });
              y(r, S);
            },
            $$slots: { default: true }
          });
        };
        k(He, (m) => {
          if (e(T)) m(Re);
        });
      }
      y(Y, Z);
    };
    k(We, (Y) => {
      if (e(H).length > 0) Y(Me);
    });
  }
  oe(z);
  y(o, z);
  se();
  h();
}

export {
  _e as a,
  xe as b,
  Se as c,
  je as d
};
//# sourceMappingURL=chunk-7X3PAG7E.js.map
