import {
  a as Pt
} from "./chunk-ZKWB7TIG.js";
import {
  a as St,
  b as bt,
  c as Ft
} from "./chunk-TU74YKFK.js";
import {
  b as xt,
  d as _t,
  f as It
} from "./chunk-VWPWBXTO.js";
import {
  $d as K,
  $e as yt,
  Be as l,
  Ca as lt,
  He as N,
  Je as vt,
  Ld as $t,
  Ne as ht,
  Qd as ft,
  Rd as mt,
  Sd as a,
  Xd as ut,
  Xe as Y,
  Yd as T,
  Ye as L,
  Zd as E,
  ae as t,
  af as Dt,
  he as _,
  je as Q,
  ke as v,
  qa as ct,
  re as F,
  te as R,
  ua as gt,
  ue as U
} from "./chunk-K3YJBOOZ.js";

// src/charts/area/AreaData.svelte
var Jt = _(`<path fill-opacity="1" stroke="none"></path>`);
var Qt = _(`<line></line>`);
var Rt = _(`<circle></circle>`);
var Ut = _(`<!><!>`, 1);
var Yt = _(`<!><!><!><!>`, 1);
var jt = _(`<g><!></g>`);
function te(kt, e) {
  ft(e, true);
  const At = () => N(z, "$hoveredSeries", O);
  const j = () => N(Et, "$annotationMode", O);
  const V = () => N(Mt, "$tooltipPosition", O);
  const I = () => N(Tt, "$annotationPosition", O);
  const [O, pt] = vt();
  const Mt = xt();
  const Tt = _t();
  const z = Pt(50);
  const Et = It();
  const y = a(At);
  const B = a(() => (e.options.variant === "auto" ? "light" : e.options.variant) ?? "light");
  const u = a(() => {
    if (e.scales.primaryScale.scale.type === "linear" || e.scales.primaryScale.scale.type === "band" || e.scales.primaryScale.scale.type === "time" || e.scales.primaryScale.scale.type === "timeBand") {
      return e.scales.primaryScale.scale.scale;
    }
    return null;
  });
  const g = a(() => {
    if (e.scales.secondaryScale && e.scales.secondaryScale.scale.type === "linear") {
      return e.scales.secondaryScale.scale.scale;
    }
    return null;
  });
  const w = a(() => e.scales.colorScale.scale);
  const tt = a(() => e.scales.tooltipIndexScale?.scale);
  const et = a(() => e.scales.annotationScale?.scale);
  const C = a(() => e.scales?.padding ?? {});
  const at = a(() => t(C).top ?? 0);
  const nt = a(() => t(C).left ?? 0);
  const Nt = a(() => t(C).right ?? 0);
  const Ot = a(() => t(C).bottom ?? 0);
  const rt = a(() => e.width - t(nt) - t(Nt));
  const it = a(() => e.height - t(at) - t(Ot));
  const wt = a(() => e.chartData?.design.tooltips?.disableTooltips);
  const k = a(() => e.chartData?.design.seriesOptions?.emphasize);
  const Ct = a(() => e.chartData?.design.seriesOptions?.deemphasisMode === "gray" && t(k) && t(k).length > 0);
  const G = a(() => j() === "PLACING");
  const ot = a(() => j() === "IDLE");
  const Gt = a(() => e.chartData ? lt(e.chartData, e.chartData.area?.style === "proportional" ? Y.EXPAND : Y.NONE, e.chartData.area?.order === "ascending" ? L.ASCENDING : e.chartData.area?.order === "descending" ? L.DESCENDING : L.NONE) : []);
  const Ht = a(() => e.chartData ? gt(t(Gt)).map((n) => yt(n)) : []);
  const S = a(() => {
    if (e.chartData) {
      return Dt({
        scales: e.scales,
        chartData: e.chartData,
        stackedData: t(Ht)
      });
    }
    return [];
  });
  const D = a(() => t(S).map((n) => n.formattedData));
  const st = a(() => {
    if (t(tt)) {
      if (V()) {
        return t(tt)([V().x, V().y]);
      }
    }
    return null;
  });
  const W = a(() => {
    const n = t(et) && I() && (e.panelIndex === null || I().panelIndex === e.panelIndex);
    if (n) {
      return t(et)([I().x, I().y]);
    }
    return null;
  });
  const Kt = a(() => {
    const n = [];
    const o = e.chartData?.fields.findIndex((s) => s.taxonomy?.isPrimary) ?? -1;
    if (e.chartData?.fields && o > -1 && t(g) && t(u)) {
      const s = (i) => t(u) ? t(u)(i) : 0;
      const d = (i) => t(g) ? t(g)(i) : 0;
      e.chartData.fields.forEach((i, f) => {
        if (!i.taxonomy?.isPrimary) {
          const b = [];
          for (let r = 0; r < t(D).length; r++) {
            const c = t(D)[r][o];
            if (c === null) {
              continue;
            }
            const h = t(D)[r][f][0];
            const m = t(D)[r][f][1];
            const $ = [
              s(c),
              d(h),
              d(m)
            ];
            b.push($);
          }
          const A = ct().x((r) => r[0]).y0((r) => r[1]).y1((r) => r[2]);
          const p = A(b);
          n.push({ d: p, name: i.name ?? "unknown", id: i.id });
        }
      });
    }
    n.reverse();
    n.sort((s, d) => {
      const i = t(k)?.indexOf(s.id) ?? -1;
      const f = t(k)?.indexOf(d.id) ?? -1;
      if (i === -1 && f === -1) return 0;
      if (i === -1) return -1;
      if (f === -1) return 1;
      return f - i;
    });
    return n;
  });
  const H = a(() => {
    const n = [];
    if (t(st) && !t(wt)) {
      const o = t(st).index;
      e.chartData?.fields.forEach((s, d) => {
        if (s.data && !(s.data[o] === null)) {
          if (!s.taxonomy?.isPrimary && t(g) && t(u)) {
            const i = {
              x: t(u)(t(D)[o]?.[0]),
              y0: t(g)(t(D)[o]?.[d]?.[0]),
              y1: t(g)(t(D)[o]?.[d]?.[1]),
              seriesId: s.id
            };
            if (i.x !== void 0 && i.y0 !== void 0 && i.y1 !== void 0) {
              if (t(Ct)) {
                if (t(k)?.includes(s.id) || d === e.chartData.fields.length - 1) {
                  n.push(i);
                }
              } else {
                n.push(i);
              }
            }
          }
        }
      });
    }
    n.reverse();
    return n;
  });
  const X = a(() => {
    const n = [];
    if (t(W)) {
      const o = t(W).index;
      const s = t(W)?.value?.seriesId;
      e.chartData?.fields.forEach((d) => {
        if (!d.taxonomy?.isPrimary && t(u) && t(g)) {
          const i = t(u)(t(S)[o]?.formattedData?.[0]);
          const f = t(g)(t(S)[o]?.formattedData?.[d.index]?.[1]);
          const b = t(S)[o]?.formattedData?.[0];
          const A = t(S)[o]?.formattedData?.[d.index]?.[1];
          const p = t(S)[o]?.key;
          if (i !== void 0 && f !== void 0) {
            if (!t(G) || s && d.id === s) {
              n.push({ x: i, y: f, seriesId: d.id, xData: b, yData: A, xDataKey: p });
            }
          }
        }
      });
    }
    return n;
  });
  const Lt = a(() => {
    if (t(y) && t(X).length > 0 && e.chartData) {
      const n = t(X).find((o) => o.seriesId === t(y));
      if (n) {
        const o = e.chartData.fields.find((s) => s.id === t(y));
        return {
          id: t(y),
          series: o?.name || "",
          legendColor: t(w)(t(y)),
          legendType: ht(e.chartData, t(y)),
          xDataKey: n.xDataKey,
          yData: n.yData
        };
      }
    }
    return null;
  });
  var Z = jt();
  var Vt = ut(Z);
  {
    var zt = (n) => {
      var o = Yt();
      var s = T(o);
      U(s, 17, () => t(Kt), R, (r, c) => {
        let h = () => t(c).d;
        let m = () => t(c).id;
        var $ = Jt();
        K(
          (P) => {
            l($, "d", h());
            l($, "fill", P);
          },
          [() => t(w)(m())]
        );
        v(r, $);
      });
      var d = E(s);
      {
        var i = (r) => {
          var c = Qt();
          K(
            (h, m) => {
              l(c, "x1", t(H)[0].x);
              l(c, "x2", t(H)[0].x);
              l(c, "y1", h);
              l(c, "y2", m);
              l(c, "fill", t(B) === "light" ? "#FFFFFF" : "#000000");
            },
            [
              () => t(g)(t(g)?.domain()[0]),
              () => t(g)(t(g)?.domain()[1])
            ]
          );
          v(r, c);
        };
        F(d, (r) => {
          if (t(H)?.length > 0 && t(g) && t(u) && !t(G) && !t(ot)) r(i);
        });
      }
      var f = E(d);
      {
        var b = (r) => {
          var c = Q();
          var h = T(c);
          U(h, 17, () => t(H), R, (m, $) => {
            let P = () => t($).x;
            let q = () => t($).y0;
            let M = () => t($).y1;
            let Bt = () => t($).seriesId;
            var dt = Q();
            var Wt = T(dt);
            {
              var Xt = (J) => {
                var x = Rt();
                l(x, "r", 4);
                l(x, "stroke-width", 2);
                K(
                  (qt) => {
                    l(x, "cx", P());
                    l(x, "cy", M());
                    l(x, "fill", t(B) === "light" ? "#FFFFFF" : "#000000");
                    l(x, "stroke", qt);
                  },
                  [() => t(w)(Bt())]
                );
                v(J, x);
              };
              var Zt = a(() => isFinite(P()) && isFinite(q()) && isFinite(M()));
              F(Wt, (J) => {
                if (t(Zt)) J(Xt);
              });
            }
            v(m, dt);
          });
          v(r, c);
        };
        F(f, (r) => {
          if (!t(G) && !t(ot)) r(b);
        });
      }
      var A = E(f);
      {
        var p = (r) => {
          St(r, {
            get width() {
              return t(rt);
            },
            get height() {
              return t(it);
            },
            get xScale() {
              return t(u);
            },
            get yScale() {
              return t(g);
            },
            get annotationPosition() {
              return I();
            },
            get leftTransformAmount() {
              return t(nt);
            },
            get topTransformAmount() {
              return t(at);
            },
            get panelIndex() {
              return e.panelIndex;
            },
            children: (c, h) => {
              var m = Ut();
              var $ = T(m);
              bt($, {
                get circleMarkers() {
                  return t(X);
                },
                get colorScale() {
                  return t(w);
                },
                get variant() {
                  return t(B);
                },
                get chartData() {
                  return e.chartData;
                },
                $$events: {
                  hoverChange: (q) => {
                    const M = q.detail.seriesId;
                    if (M) {
                      z.setHover(M);
                    } else {
                      z.clearHover(t(y));
                    }
                  }
                }
              });
              var P = E($);
              Ft(P, {
                get annotationPosition() {
                  return I();
                },
                get annotationInfo() {
                  return t(Lt);
                },
                get width() {
                  return t(rt);
                },
                get height() {
                  return t(it);
                },
                get options() {
                  return e.options;
                }
              });
              v(c, m);
            },
            $$slots: { default: true }
          });
        };
        F(A, (r) => {
          if (t(G)) r(p);
        });
      }
      v(n, o);
    };
    F(Vt, (n) => {
      if (e.chartData && e.scales) n(zt);
    });
  }
  $t(Z);
  v(kt, Z);
  mt();
  pt();
}

export {
  te as a
};
//# sourceMappingURL=chunk-CNA2ZJ2T.js.map
