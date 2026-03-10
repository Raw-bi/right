import {
  a as Ne
} from "./chunk-X6YZ7DDU.js";
import {
  a as He
} from "./chunk-ZKWB7TIG.js";
import {
  a as Fe,
  b as Me,
  c as Oe
} from "./chunk-TU74YKFK.js";
import {
  b as Pe,
  d as ke,
  f as Ee
} from "./chunk-VWPWBXTO.js";
import {
  $d as K,
  Aa as xe,
  Be as s,
  He as N,
  Je as be,
  Ld as Se,
  Me as Te,
  Ne as Le,
  Qd as pe,
  Rd as Ie,
  Sd as t,
  Xd as Ae,
  Yd as k,
  Zd as O,
  ae as e,
  he as S,
  je as U,
  ke as f,
  oa as ve,
  pa as he,
  re as p,
  sa as _e,
  ta as ye,
  te as ee,
  ue as te,
  za as De
} from "./chunk-K3YJBOOZ.js";

// src/charts/line/LineData.svelte
var st = S(`<line></line>`);
var dt = S(`<path fill="none"></path>`);
var gt = S(`<circle class="tooltip-circle"></circle>`);
var ct = S(`<!><!>`, 1);
var lt = S(`<!><!><!><!>`, 1);
var $t = S(`<g><!></g>`);
function ut(we, n) {
  pe(n, true);
  const Ce = () => N(G, "$hoveredSeries", w);
  const ne = () => N(Je, "$annotationMode", w);
  const z = () => N(Ye, "$tooltipPosition", w);
  const I = () => N(je, "$annotationPosition", w);
  const [w, Re] = be();
  let We = Te(n, "tooltipOverride", 3, null);
  const Be = 2.5;
  const Ke = 3.5;
  const Ue = "1, 4";
  const ze = "2, 6";
  const Ge = "round";
  const Ve = "round";
  const re = t(() => (n.options.variant === "auto" ? "light" : n.options.variant) ?? "light");
  const Ye = Pe();
  const je = ke();
  const Je = Ee();
  const G = He(50);
  const _ = t(Ce);
  const A = t(() => n.chartData?.fields);
  const E = t(() => n.chartData?.design);
  const Ze = t(() => e(E)?.tooltips?.disableTooltips);
  const V = t(() => e(E)?.seriesOptions?.emphasize);
  const ae = t(() => e(E)?.seriesOptions?.dottedLineSegments);
  const ie = t(() => e(E)?.additionalSeriesOptions?.stepType ?? "linear");
  const oe = t(() => e(E)?.additionalSeriesOptions?.missingDataStyle ?? "solid");
  const u = t(() => {
    if (n.scales.primaryScale.scale.type === "linear" || n.scales.primaryScale.scale.type === "band" || n.scales.primaryScale.scale.type === "time" || n.scales.primaryScale.scale.type === "timeBand") {
      return n.scales.primaryScale.scale.scale;
    }
    return null;
  });
  const g = t(() => {
    if (n.scales.secondaryScale && n.scales.secondaryScale.scale.type === "linear") {
      return n.scales.secondaryScale.scale.scale;
    }
    return null;
  });
  const Y = t(() => n.scales.colorScale.scale);
  const se = t(() => n.scales.tooltipIndexScale?.scale);
  const de = t(() => n.scales.annotationScale?.scale);
  const C = t(() => n.scales?.padding ?? {});
  const ge = t(() => e(C).top ?? 0);
  const ce = t(() => e(C).left ?? 0);
  const qe = t(() => e(C).right ?? 0);
  const Qe = t(() => e(C).bottom ?? 0);
  const le = t(() => n.width - e(ce) - e(qe));
  const $e = t(() => n.height - e(ge) - e(Qe));
  const Xe = (r) => e(V)?.includes(r) ? Ke : Be;
  const R = t(() => ne() === "PLACING");
  const ue = t(() => ne() === "IDLE");
  const fe = t(() => {
    if (e(se) && z()) {
      return e(se)([z().x, z().y]);
    }
    return null;
  });
  const j = t(() => {
    const r = e(de) && I() && (n.panelIndex === null || I().panelIndex === n.panelIndex);
    if (r) {
      return e(de)([I().x, I().y]);
    }
    return null;
  });
  const b = t(() => {
    if (n.chartData) {
      return De({ chartData: n.chartData, scales: n.scales });
    }
    return [];
  });
  const J = t(() => e(b).map((r) => r.formattedData));
  const et = t(() => {
    if (n.chartData && e(ae)) {
      return xe({
        dottedLineSegmentInfos: e(ae),
        primaryScale: n.scales.primaryScale.scale
      });
    }
    return [];
  });
  const tt = t(() => {
    if (e(ie) === "stepAfter") {
      return ye;
    } else if (e(ie) === "stepBefore") {
      return _e;
    } else {
      return ve;
    }
  });
  const me = t(() => {
    if (e(oe) === "hidden") {
      return "hidden";
    } else if (e(oe) === "solid") {
      return null;
    } else {
      return ze;
    }
  });
  const nt = t(() => {
    const r = [];
    const o = e(A)?.findIndex((i) => i.taxonomy?.isPrimary) ?? -1;
    if (e(A) && o > -1 && e(g) && e(u)) {
      e(A).forEach((i) => {
        if (!i.taxonomy?.isPrimary && e(g) && e(u)) {
          const c = Ne({
            data: e(J),
            primaryIndex: o,
            valueIndex: i.index,
            dottedLineSegments: e(et)?.filter((a) => a.seriesId === i.id) ?? [],
            primaryMappingFn: (a) => e(u) ? e(u)(a) : 0,
            secondaryMappingFn: (a) => e(g) ? e(g)(a) : 0
          });
          c.forEach((a) => {
            const $ = he().x((y) => y[0]).y((y) => y[1]).curve(e(tt));
            const F = $(a.segmentData);
            r.push({
              d: F,
              name: i.name ?? "unknown",
              id: i.id,
              isMissingData: a.isMissingSegment,
              isDotted: a.isDottedSegment
            });
          });
        }
      });
      r.reverse();
      r.sort((i, c) => {
        const a = e(V)?.indexOf(i.id) ?? -1;
        const $ = e(V)?.indexOf(c.id) ?? -1;
        if (a === -1 && $ === -1) return 0;
        if (a === -1) return -1;
        if ($ === -1) return 1;
        return $ - a;
      });
    }
    return r;
  });
  const W = t(() => {
    if (e(fe) && !e(Ze)) {
      const r = [];
      const o = e(fe).index;
      e(A)?.forEach((i) => {
        if (!i.taxonomy?.isPrimary && e(g) && e(u)) {
          const c = e(u)(e(J)[o]?.[0]);
          const a = e(g)(e(J)[o]?.[i.index]);
          if (c !== void 0 && a !== void 0) {
            r.push({ x: c, y: a, seriesId: i.id });
          }
        }
      });
      return r;
    }
    return [];
  });
  const Z = t(() => {
    if (e(j)) {
      const r = [];
      const o = e(j).index;
      const i = e(j)?.value?.seriesId;
      e(A)?.forEach((c) => {
        if (!c.taxonomy?.isPrimary && e(u) && e(g)) {
          const a = e(u)(e(b)[o]?.formattedData?.[0]);
          const $ = e(g)(e(b)[o]?.formattedData?.[c.index]);
          const F = e(b)[o]?.formattedData?.[0];
          const y = e(b)[o]?.formattedData?.[c.index];
          const Q = e(b)[o]?.key;
          if (a !== void 0 && $ !== void 0) {
            if (!e(R) || i && c.id === i) {
              r.push({ x: a, y: $, seriesId: c.id, xData: F, yData: y, xDataKey: Q });
            }
          }
        }
      });
      return r;
    }
    return [];
  });
  const rt = t(() => {
    if (e(_) && e(Z).length > 0 && n.chartData) {
      const r = e(Z).find((o) => o.seriesId === e(_));
      if (r) {
        const o = e(A)?.find((i) => i.id === e(_));
        return {
          id: e(_),
          series: o?.name || "",
          legendColor: n.scales.colorScale.scale(e(_)),
          legendType: Le(n.chartData, e(_)),
          xDataKey: r.xDataKey,
          yData: r.yData
        };
      }
    }
    return null;
  });
  var q = $t();
  var at = Ae(q);
  {
    var it = (r) => {
      var o = lt();
      var i = k(o);
      {
        var c = (l) => {
          var d = st();
          K(
            (T, m) => {
              s(d, "x1", e(W)[0].x);
              s(d, "x2", e(W)[0].x);
              s(d, "y1", T);
              s(d, "y2", m);
            },
            [
              () => e(g)(e(g).domain()[0]),
              () => e(g)(e(g).domain()[1])
            ]
          );
          f(l, d);
        };
        p(i, (l) => {
          if (e(W)?.length > 0 && e(g) && e(u) && !e(R) && !We() && !e(ue)) l(c);
        });
      }
      var a = O(i);
      te(a, 17, () => e(nt), ee, (l, d) => {
        let T = () => e(d).d;
        let m = () => e(d).id;
        let v = () => e(d).isMissingData;
        let L = () => e(d).isDotted;
        var D = U();
        var P = k(D);
        {
          var B = (M) => {
            var h = dt();
            s(h, "stroke-linejoin", Ve);
            s(h, "stroke-linecap", Ge);
            K(
              (X, H) => {
                s(h, "d", T());
                s(h, "stroke-width", X);
                s(h, "stroke", H);
                s(h, "stroke-dasharray", v() ? e(me) : L() ? Ue : null);
              },
              [() => Xe(m()), () => e(Y)(m())]
            );
            f(M, h);
          };
          p(P, (M) => {
            if (!(v() && e(me) === "hidden")) M(B);
          });
        }
        f(l, D);
      });
      var $ = O(a);
      {
        var F = (l) => {
          var d = U();
          var T = k(d);
          te(T, 17, () => e(W), ee, (m, v) => {
            let L = () => e(v).x;
            let D = () => e(v).y;
            let P = () => e(v).seriesId;
            var B = U();
            var M = k(B);
            {
              var h = (H) => {
                var x = gt();
                s(x, "r", 4);
                s(x, "stroke-width", 2);
                K(
                  (ot) => {
                    s(x, "cx", L());
                    s(x, "cy", D());
                    s(x, "fill", e(re) === "light" ? "#FFFFFF" : "#000000");
                    s(x, "stroke", ot);
                  },
                  [() => e(Y)(P())]
                );
                f(H, x);
              };
              var X = t(() => isFinite(L()) && isFinite(D()));
              p(M, (H) => {
                if (e(X)) H(h);
              });
            }
            f(m, B);
          });
          f(l, d);
        };
        p($, (l) => {
          if (!e(R) && !e(ue)) l(F);
        });
      }
      var y = O($);
      {
        var Q = (l) => {
          Fe(l, {
            get width() {
              return e(le);
            },
            get height() {
              return e($e);
            },
            get xScale() {
              return e(u);
            },
            get yScale() {
              return e(g);
            },
            get annotationPosition() {
              return I();
            },
            get leftTransformAmount() {
              return e(ce);
            },
            get topTransformAmount() {
              return e(ge);
            },
            get panelIndex() {
              return n.panelIndex;
            },
            children: (d, T) => {
              var m = ct();
              var v = k(m);
              Me(v, {
                get circleMarkers() {
                  return e(Z);
                },
                get colorScale() {
                  return e(Y);
                },
                get variant() {
                  return e(re);
                },
                get chartData() {
                  return n.chartData;
                },
                $$events: {
                  hoverChange: (D) => {
                    const P = D.detail.seriesId;
                    if (P) {
                      G.setHover(P);
                    } else {
                      G.clearHover(e(_));
                    }
                  }
                }
              });
              var L = O(v);
              Oe(L, {
                get annotationPosition() {
                  return I();
                },
                get annotationInfo() {
                  return e(rt);
                },
                get width() {
                  return e(le);
                },
                get height() {
                  return e($e);
                },
                get options() {
                  return n.options;
                }
              });
              f(d, m);
            },
            $$slots: { default: true }
          });
        };
        p(y, (l) => {
          if (e(R)) l(Q);
        });
      }
      f(r, o);
    };
    p(at, (r) => {
      if (n.chartData && n.scales) r(it);
    });
  }
  Se(q);
  f(we, q);
  Ie();
  Re();
}

export {
  ut as a
};
//# sourceMappingURL=chunk-64YC7X32.js.map
