import {
  a as Mt
} from "./chunk-JGAF2UPG.js";
import {
  a as wt,
  b as It,
  c as Ht
} from "./chunk-TU74YKFK.js";
import {
  b as Pt,
  d as Dt,
  f as Tt
} from "./chunk-VWPWBXTO.js";
import {
  $d as C,
  Be as d,
  Ca as pt,
  He as N,
  Je as kt,
  Ld as _t,
  Me as z,
  O as ft,
  Qd as yt,
  Rd as St,
  Sd as n,
  Td as Bt,
  Ud as xt,
  Xd as bt,
  Yd as y,
  Zd as D,
  ae as t,
  gc as Z,
  he as T,
  je as A,
  ke as v,
  re as w,
  te as V,
  ua as mt,
  ue as Y,
  va as ht,
  za as vt
} from "./chunk-K3YJBOOZ.js";

// src/charts/stacked-v-bar/stackedVBar.utils.ts
function re(i, e) {
  if (!i) return "none";
  return e === "dark" ? "white" : "black";
}
function oe(i, e, o) {
  let a = void 0;
  for (let r = 0; r < i.length; r++) {
    const m = i[r]?.[e]?.[0];
    const c = i[r]?.[e]?.[1];
    for (const s of [m, c]) {
      if (s === void 0 || s === null || s === 0 || s < 0) {
        continue;
      }
      const $ = o(s);
      if ($ !== void 0) {
        a = a === void 0 ? $ : Math.min(a, $);
      }
    }
  }
  return a;
}
function ie(i, e, o) {
  let a = void 0;
  for (let r = 0; r < i.length; r++) {
    const m = i[r]?.[e]?.[0];
    const c = i[r]?.[e]?.[1];
    for (const s of [m, c]) {
      if (s === void 0 || s === null) continue;
      const $ = o(s);
      if ($ !== void 0) {
        a = a === void 0 ? $ : Math.max(a, $);
      }
    }
  }
  return a;
}
function se(i, e) {
  let o = Infinity;
  let a = -Infinity;
  i.forEach((r) => {
    const m = Math.max(r[e][0], r[e][1]);
    const c = Math.min(r[e][0], r[e][1]);
    a = Math.max(m, a);
    o = Math.min(c, o);
  });
  return a + o;
}
function At({
  formattedDataWithKey: i,
  stackedData: e,
  nonPrimaryFields: o,
  xScale: a,
  yScale: r
}) {
  if (!a || !r || !i.length || !e.length)
    return [];
  const m = a.bandwidth() ?? 0;
  return i.map((c, s) => {
    const $ = c.formattedData;
    const I = c.key;
    const X = se(e, s);
    const R = oe(e, s, r);
    const F = ie(e, s, r);
    let E = 0;
    if (F !== void 0 && R !== void 0) {
      E = F - R;
    }
    const H = (a($[0]) ?? 0) - a.bandwidth() / 2;
    if (H === void 0) {
      return null;
    }
    return {
      field: o[0],
      dataIndex: s,
      primaryKey: I,
      primaryValue: $[0],
      topY: R || 0,
      bottomY: F || 0,
      totalHeight: E,
      xPos: H,
      isHighlighted: false,
      stroke: "none",
      showRuler: false,
      needsTopBorder: false,
      isTallestBar: true,
      hasDuplicateX: false,
      width: m,
      sum: X
    };
  }).filter((c) => c !== null);
}
function Vt(i) {
  return [...i].sort((e, o) => {
    if (e.xPos !== o.xPos) return e.xPos - o.xPos;
    return o.totalHeight - e.totalHeight;
  });
}
function Yt({
  sortedBarData: i,
  tooltipIndex: e,
  scales: o,
  tooltipOverride: a,
  disableTooltip: r,
  variant: m
}) {
  return i.map((c) => {
    const s = Boolean(a) && Z({
      tooltipIndex: e,
      primaryValue: c.primaryValue,
      primaryScale: o.primaryScale.scale,
      xPosition: c.xPos,
      sortedBarData: i,
      numSeriesPerMultiple: null
    }) && !r;
    const $ = !a && Z({
      tooltipIndex: e,
      primaryValue: c.primaryValue,
      primaryScale: o.primaryScale.scale,
      xPosition: c.xPos,
      sortedBarData: i,
      numSeriesPerMultiple: null
    }) && !r;
    return {
      ...c,
      isHighlighted: s,
      stroke: re(s, m),
      showRuler: $
    };
  });
}
function Rt(i) {
  const e = /* @__PURE__ */ new Map();
  i.forEach((o) => {
    const a = `${Math.round(o.xPos * 1e3) / 1e3}`;
    if (!e.has(a)) {
      e.set(a, []);
    }
    e.get(a)?.push(o);
  });
  return i.map((o) => {
    const a = `${Math.round(o.xPos * 1e3) / 1e3}`;
    const r = e.get(a);
    if (!r || r.length <= 1) {
      return {
        ...o,
        needsTopBorder: false,
        isTallestBar: true,
        hasDuplicateX: false
      };
    }
    const m = r.reduce(
      ($, I) => I.totalHeight > $.totalHeight ? I : $,
      r[0]
    );
    const c = o.totalHeight < m.totalHeight;
    const s = o.totalHeight === m.totalHeight;
    return {
      ...o,
      needsTopBorder: c,
      isTallestBar: s,
      hasDuplicateX: true
    };
  });
}

// src/charts/stacked-v-bar/StackedVBarData.svelte
var le = T(`<rect></rect>`);
var de = T(`<rect stroke-width="1.5px" fill="none"></rect>`);
var ce = T(`<rect stroke="none" fill="none"></rect><line stroke-width="1.5px"></line>`, 1);
var ge = T(`<!><!>`, 1);
var ue = T(`<!><!><!><!><!>`, 1);
var $e = T(`<g><!></g>`);
function fe(i, e) {
  yt(e, true);
  const o = () => N(E, "$annotationMode", m);
  const a = () => N(R, "$tooltipPosition", m);
  const r = () => N(F, "$annotationPosition", m);
  const [m, c] = kt();
  let s = z(e, "tooltipOverride", 3, null), $ = z(e, "verticalAnnotationRuler", 3, null), I = z(e, "panelIndex", 3, null);
  let X = Bt(null);
  const R = Pt();
  const F = Dt();
  const E = Tt();
  const H = n(() => (e.options.variant === "auto" ? "light" : e.options.variant) ?? "light");
  const S = n(() => {
    if (e.scales.primaryScale.scale.type === "band" || e.scales.primaryScale.scale.type === "timeBand") {
      return e.scales.primaryScale.scale.scale;
    }
    return null;
  });
  const B = n(() => {
    if (e.scales.secondaryScale?.scale.type === "linear") {
      return e.scales.secondaryScale?.scale.scale;
    }
    return null;
  });
  const G = n(() => e.scales.colorScale.scale);
  const U = n(() => e.scales.strokeScale?.scale ?? ((p) => "none"));
  const tt = n(() => e.chartData ? vt({ scales: e.scales, chartData: e.chartData }) : []);
  const et = n(() => t(tt).map((p) => p.formattedData));
  const K = n(() => e.chartData ? pt({ ...e.chartData, data: t(et) }) : []);
  const j = n(() => e.chartData ? ht(e.chartData) : []);
  const Ft = n(() => t(j).some((p) => t(U)(p.id) !== "none"));
  const Kt = n(() => e.chartData?.design.tooltips?.disableTooltips);
  const q = n(() => o() === "PLACING");
  const nt = n(() => o() === "IDLE");
  const O = n(() => e.scales?.padding ?? {});
  const at = n(() => t(O).top ?? 0);
  const rt = n(() => t(O).left ?? 0);
  const Lt = n(() => t(O).right ?? 0);
  const Xt = n(() => t(O).bottom ?? 0);
  const ot = n(() => e.width - t(rt) - t(Lt));
  const it = n(() => e.height - t(at) - t(Xt));
  const st = n(() => e.scales.tooltipIndexScale?.scale);
  const Et = n(() => t(K).length ? mt(t(K)).map((p) => Math.max(...p.map((W) => W[1] || 0))) : []);
  const Ot = n(() => {
    if (t(st) && a()) {
      return t(st)([a().x, a().y]);
    }
    return null;
  });
  const Wt = n(() => At({
    formattedDataWithKey: t(tt),
    stackedData: t(K),
    nonPrimaryFields: t(j),
    xScale: t(S),
    yScale: t(B)
  }));
  const Ct = n(() => Vt(t(Wt)));
  const Nt = n(() => Yt({
    sortedBarData: t(Ct),
    tooltipIndex: t(Ot),
    scales: e.scales,
    tooltipOverride: s(),
    disableTooltip: t(Kt),
    variant: t(H)
  }));
  const L = n(() => Rt(t(Nt)));
  const zt = n(() => t(S)?.bandwidth() ?? 0);
  var J = $e();
  var Gt = bt(J);
  {
    var Ut = (p) => {
      var W = ue();
      var lt = y(W);
      Y(lt, 17, () => t(j), V, (f, l, _) => {
        var g = A();
        var u = y(g);
        Y(u, 17, () => t(et), V, (x, P, M) => {
          const b = n(() => t(B)(t(K)[_][M][0]));
          const h = n(() => t(B)(t(K)[_][M][1]));
          const ut = n(() => t(b) !== void 0 && t(h) !== void 0 ? Math.abs(t(b) - t(h)) : 0);
          var $t = A();
          var Zt = y($t);
          {
            var te = (Q) => {
              var k = le();
              C(
                (ee, ne, ae) => {
                  d(k, "x", ee);
                  d(k, "y", t(h));
                  d(k, "width", t(zt));
                  d(k, "height", t(ut));
                  d(k, "stroke-width", t(Ft) ? ft : 0);
                  d(k, "stroke", ne);
                  d(k, "fill", ae);
                },
                [
                  () => (t(S)(t(P)[0], 0) ?? 0) - t(S).bandwidth() / 2,
                  () => t(U)(t(l).id) === "none" ? t(G)(t(l).id) : t(U)(t(l).id),
                  () => t(G)(t(l).id)
                ]
              );
              v(Q, k);
            };
            w(Zt, (Q) => {
              if (t(ut)) Q(te);
            });
          }
          v(x, $t);
        });
        v(f, g);
      });
      var dt = D(lt);
      {
        var jt = (f) => {
          var l = A();
          var _ = y(l);
          Y(_, 17, () => t(L).filter((g) => !g.needsTopBorder), V, (g, u) => {
            var x = A();
            var P = y(x);
            {
              var M = (b) => {
                var h = de();
                C(() => {
                  d(h, "x", t(u).xPos);
                  d(h, "y", t(u).topY);
                  d(h, "width", t(u).width);
                  d(h, "height", t(u).totalHeight);
                  d(h, "stroke", t(u).stroke);
                });
                v(b, h);
              };
              w(P, (b) => {
                if (s()) b(M);
              });
            }
            v(g, x);
          });
          v(f, l);
        };
        w(dt, (f) => {
          if (!t(q) && !t(nt)) f(jt);
        });
      }
      var ct = D(dt);
      Y(ct, 17, () => t(L).filter((f) => f.needsTopBorder), V, (f, l) => {
        var _ = ce();
        var g = y(_);
        var u = D(g);
        C(() => {
          d(g, "x", t(l).xPos);
          d(g, "y", t(l).topY);
          d(g, "width", t(l).width);
          d(g, "height", t(l).totalHeight);
          d(u, "x1", t(l).xPos);
          d(u, "y1", t(l).topY);
          d(u, "x2", t(l).xPos + t(l).width);
          d(u, "y2", t(l).topY);
          d(u, "stroke", t(H) === "dark" ? "white" : "black");
        });
        v(f, _);
      });
      var gt = D(ct);
      {
        var qt = (f) => {
          var l = A();
          var _ = y(l);
          Y(_, 17, () => t(L).filter((g) => g.showRuler && g.isTallestBar && !s()), V, (g, u) => {
            const x = n(() => $() ? "vertical" : "horizontal");
            const P = n(() => $() ? t(B).range()[0] : t(S).range()[0] - e.scales.padding.left);
            const M = n(() => $() ? t(B).range()[1] : t(S).range()[1] + e.scales.padding.right);
            {
              let b = n(() => t(u).xPos + t(u).width / 2);
              let h = n(() => t(B)(t(Et)[t(u).dataIndex]));
              Mt(g, {
                get orientation() {
                  return t(x);
                },
                get cx() {
                  return t(b);
                },
                get cy() {
                  return t(h);
                },
                get start() {
                  return t(P);
                },
                get end() {
                  return t(M);
                },
                get options() {
                  return e.options;
                }
              });
            }
          });
          v(f, l);
        };
        w(gt, (f) => {
          if (!t(q) && !t(nt)) f(qt);
        });
      }
      var Jt = D(gt);
      {
        var Qt = (f) => {
          wt(f, {
            get width() {
              return t(ot);
            },
            get height() {
              return t(it);
            },
            get xScale() {
              return t(S);
            },
            get yScale() {
              return t(B);
            },
            get annotationPosition() {
              return r();
            },
            get leftTransformAmount() {
              return t(rt);
            },
            get topTransformAmount() {
              return t(at);
            },
            get panelIndex() {
              return I();
            },
            children: (l, _) => {
              var g = ge();
              var u = y(g);
              It(u, {
                get colorScale() {
                  return t(G);
                },
                get variant() {
                  return t(H);
                },
                get chartData() {
                  return e.chartData;
                },
                get stackedBarMarkers() {
                  return t(L);
                },
                $$events: {
                  primaryValueChange: (P) => {
                    xt(X, P.detail.currentHoveredPrimaryValue, true);
                  }
                }
              });
              var x = D(u);
              Ht(x, {
                get annotationPosition() {
                  return r();
                },
                get annotationInfo() {
                  return t(X);
                },
                get width() {
                  return t(ot);
                },
                get height() {
                  return t(it);
                },
                get options() {
                  return e.options;
                }
              });
              v(l, g);
            },
            $$slots: { default: true }
          });
        };
        w(Jt, (f) => {
          if (t(q)) f(Qt);
        });
      }
      v(p, W);
    };
    w(Gt, (p) => {
      if (t(S) && t(B) && t(L).length > 0) p(Ut);
    });
  }
  _t(J);
  v(i, J);
  St();
  c();
}

export {
  At as a,
  Vt as b,
  Rt as c,
  fe as d
};
//# sourceMappingURL=chunk-PDEOVVWF.js.map
