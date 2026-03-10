import {
  b as qt,
  h as Wt
} from "./chunk-VWPWBXTO.js";
import {
  $a as Mt,
  $d as K,
  Ae as X,
  De as Vt,
  Ee as Ut,
  He as ft,
  Jc as Ot,
  Je as jt,
  Kc as Et,
  Lc as Rt,
  Ld as p,
  Ma as Pt,
  Me as b,
  Na as wt,
  Nc as Kt,
  Oa as It,
  Oc as gt,
  Pa as Ft,
  Pc as Nt,
  Qd as at,
  Rd as rt,
  Sd as o,
  Td as vt,
  Uc as zt,
  Ud as ut,
  Ue as Yt,
  Ve as Gt,
  Xd as g,
  Yd as U,
  Zd as Q,
  ae as t,
  dc as Lt,
  ec as At,
  fd as Bt,
  ge as N,
  j as kt,
  je as j,
  k as xt,
  ke as y,
  l as bt,
  le as Y,
  n as Tt,
  re as F,
  te as Ht,
  ue as Xt,
  va as Ct,
  xe as st,
  ze as mt
} from "./chunk-K3YJBOOZ.js";
import {
  m as St,
  o as Dt
} from "./chunk-LMFSDKL5.js";

// src/charts/_common/Tooltip/CandlestickTooltipContent.svelte
var se = N(`<div class="toaster--candlestick-label svelte-s0v0ph"> </div>`);
var le = N(`<div></div>`);
var ne = N(`<div class="toaster--candlestick-value-row svelte-s0v0ph"><!> <div class="toaster--candlestick-value svelte-s0v0ph"> </div></div>`);
var de = N(`<div> </div>`);
var ce = N(`<div><div class="toaster--candlestick-header-row svelte-s0v0ph"><div class="toaster--candlestick-primary-key svelte-s0v0ph"> </div> <div class="toaster--candlestick-direction svelte-s0v0ph"> </div></div> <div class="toaster--candlestick-values-container svelte-s0v0ph"><!> <!></div></div>`);
var pe = {
  hash: "svelte-s0v0ph",
  code: ".toaster--candlestick-tooltip.svelte-s0v0ph {padding:var(--toas-tooltip-padding);font-size:var(--toas-tooltip-font-size-mobile);width:max-content;}.toaster--candlestick-tooltip-light.svelte-s0v0ph {background-color:white;border:1px solid black;color:black;}.toaster--candlestick-tooltip-dark.svelte-s0v0ph {background-color:black;border:1px solid white;color:white;}.toaster--candlestick-header-row.svelte-s0v0ph {display:flex;flex-flow:row;justify-content:space-between;align-items:start;}.toaster--candlestick-primary-key.svelte-s0v0ph {margin-bottom:var(--toas-tooltip-primary-key-padding-bottom);max-width:150px;width:max-content;white-space:normal;word-wrap:break-word;}.toaster--candlestick-direction.svelte-s0v0ph {font-weight:bold;padding-left:1rem;}.toaster--candlestick-values-container.svelte-s0v0ph {display:flex;flex-flow:column;}.toaster--candlestick-value-row.svelte-s0v0ph {display:flex;flex-flow:row;justify-content:space-between;align-items:center;gap:1rem;}.toaster--candlestick-label.svelte-s0v0ph {white-space:nowrap;}.toaster--candlestick-value.svelte-s0v0ph {text-align:end;white-space:nowrap;}.toaster--candlestick-units.svelte-s0v0ph {margin-top:var(--toas-tooltip-units-margin-top);display:flex;justify-content:end;text-align:right;line-height:var(--toas-tooltip-units-line-height);}.toaster--candlestick-units-light.svelte-s0v0ph {color:#555555;}.toaster--candlestick-units-dark.svelte-s0v0ph {color:#bbbbbb;}"
};
function ht(d, e) {
  at(e, true);
  st(d, pe);
  let i = b(e, "colorScale", 3, void 0), _ = b(e, "primaryScale", 3, null), s = b(e, "options", 19, () => ({})), n = b(e, "isMobile", 3, false);
  const r = o(() => s().variant ?? "light");
  const v = o(() => e.chartData.axis?.secondary?.unit ?? "");
  const S = o(() => bt(s()?.isTerminalClient ?? false));
  const x = o(() => e.chartData.design.tooltips?.displayUnit ?? true);
  const u = o(() => e.chartData.design.tooltips?.hideNonExistingDataPoints ?? false);
  const a = o(() => e.chartData.design.tooltips?.dateFormat ?? "auto");
  const T = o(() => n() ? xt : kt);
  const m = o(() => Bt(e.chartData));
  const C = o(() => e.chartData.candlestick?.colorMode === "Market");
  const z = o(() => Ct(e.chartData));
  const c = o(() => {
    const f = Kt(e.chartData);
    let L = "";
    let h = "";
    t(z).forEach((D) => {
      const A = gt(D.id, f, e.chartData);
      if (A === "Open") {
        L = D.id;
      } else if (A === "Close") {
        h = D.id;
      }
    });
    return {
      openFieldId: L,
      closeFieldId: h,
      reverseMap: f
    };
  }), M = o(() => t(c).openFieldId), P = o(() => t(c).closeFieldId), l = o(() => t(c).reverseMap);
  const w = o(() => {
    const f = Object.keys(e.seriesData || {});
    return Nt(f, t(l), e.chartData);
  });
  function G(f, L) {
    const h = n() ? 12 : 14;
    const D = i()?.scale(f);
    if (L === "line") {
      return `
      height: ${h}px;
      width: 2.5px;
      transform: rotate(45deg) translate(4px, -4px);
      margin-right: 10px;
      background-color: ${D};
    `;
    }
    return `
    width: ${h}px;
    height: ${h}px;
    border-radius: 2px;
    margin-right: 10px;
    background-color: ${D};
  `;
  }
  var B = j();
  var tt = U(B);
  {
    var lt = (f) => {
      const L = o(() => Yt(e.primaryKey, t(m), _()?.type ?? "", t(a)));
      const h = o(() => e.seriesData[t(P)]);
      const D = o(() => e.seriesData[t(M)]);
      const A = o(() => t(h) > t(D) ? "Up" : t(h) < t(D) ? "Down" : "Flat");
      const q = o(() => t(C) ? t(A) === "Up" ? Ot : t(A) === "Down" ? Et : Rt : t(r) === "dark" ? "white" : "black");
      var O = ce();
      var W = g(O);
      var Z = g(W);
      var J = g(Z, true);
      p(Z);
      var E = Q(Z, 2);
      var H = g(E, true);
      p(E);
      p(W);
      var et = Q(W, 2);
      var ot = g(et);
      Xt(ot, 17, () => t(w), Ht, (I, k) => {
        var it = j();
        var Qt = U(it);
        {
          var te = (dt) => {
            const $t = o(() => gt(t(k), t(l), e.chartData));
            var ct = ne();
            var yt = g(ct);
            {
              var oe = (R) => {
                var V = se();
                var pt = g(V, true);
                p(V);
                K(() => Y(pt, t($t)));
                y(R, V);
              };
              var ie = (R) => {
                var V = le();
                K((pt) => X(V, pt), [() => G(t(k), "box")]);
                y(R, V);
              };
              F(yt, (R) => {
                if (t($t)) R(oe);
                else R(ie, false);
              });
            }
            var _t = Q(yt, 2);
            var ae = g(_t, true);
            p(_t);
            p(ct);
            K((R) => Y(ae, R), [
              () => It({
                v: e.seriesData[t(k)],
                chartData: e.chartData,
                isPrimary: false
              })
            ]);
            y(dt, ct);
          };
          var ee = o(() => Ft(e.seriesData, t(k), e.chartData, t(u)));
          F(Qt, (dt) => {
            if (t(ee)) dt(te);
          });
        }
        y(I, it);
      });
      var nt = Q(ot, 2);
      {
        var $ = (I) => {
          var k = de();
          var it = g(k, true);
          p(k);
          K(() => {
            mt(
              k,
              1,
              `toaster--candlestick-units ${t(r) === "light" ? "toaster--candlestick-units-light" : "toaster--candlestick-units-dark"}`,
              "svelte-s0v0ph"
            );
            Y(it, t(v));
          });
          y(I, k);
        };
        F(nt, (I) => {
          if (t(x)) I($);
        });
      }
      p(et);
      p(O);
      K(() => {
        mt(
          O,
          1,
          `toaster--candlestick-tooltip ${t(r) === "dark" ? "toaster--candlestick-tooltip-dark" : "toaster--candlestick-tooltip-light"}`,
          "svelte-s0v0ph"
        );
        X(O, `font-family: ${t(S)}; font-size: ${t(T)}px`);
        Y(J, t(L));
        X(E, `color: ${t(q)};`);
        Y(H, t(A));
      });
      y(f, O);
    };
    F(tt, (f) => {
      if (t(P) && t(M)) f(lt);
    });
  }
  y(d, B);
  rt();
}

// src/charts/_common/Tooltip/tooltip-data-calculator.ts
function ge(d, e, i, _, s, n) {
  const r = Object.entries(s).filter(([a, T]) => {
    if (a === e) return false;
    const m = Mt(a).toDate();
    const C = i.formatValue(d);
    if (i.type === "timeBand" && n.axis.primary?.dateAxisGrouping) {
      return a === C;
    }
    const z = i.scale(m);
    const c = i.scale(C);
    return Math.abs((z ?? 0) - (c ?? 0)) < 1e-3;
  }).map(([a, T]) => ({
    primaryKey: a,
    data: T
  }));
  if (r.length === 0) {
    return null;
  }
  const v = {};
  r.forEach((a) => {
    v[a.primaryKey] = a.data;
  });
  const S = [e, ...Object.keys(v)];
  const x = {
    [e]: _,
    ...v
  };
  const u = {};
  Dt(S).forEach((a) => {
    u[a] = x[a];
  });
  return u;
}
var Zt = ({
  tooltipIndex: d,
  primaryScale: e,
  chartData: i,
  seriesDataLookup: _
}) => {
  let s = null;
  let n = null;
  if (e && d) {
    const r = d.value;
    const v = e.stringifyValue(r);
    const S = zt(i);
    s = _?.[v] || {};
    s = St(s, S);
    const x = Pt(i);
    const u = Boolean(x?.hasBar && x?.isTime);
    if (r && (Lt.includes(i.type) || u)) {
      n = ge(
        r,
        v,
        e,
        s,
        _ ?? {},
        i
      );
    } else {
      n = null;
    }
  } else {
    s = null;
    n = null;
  }
  return {
    seriesDatas: s,
    groupedSeriesData: n
  };
};

// src/charts/_common/Tooltip/tooltip-position-calculator.ts
function Jt({
  tooltipIndex: d,
  seriesDatas: e,
  scales: i,
  chartData: _,
  width: s,
  height: n,
  chartHeight: r = null,
  footerHeight: v = 0,
  settings: S = {
    mode: "quadrant",
    vertical: { offset: 0, transformAmount: 0 },
    horizontal: { offset: 0, transformAmount: 0 }
  },
  tooltipContentHeight: x = 0
}) {
  let u = 0;
  let a = 0;
  if ("paddings" in i) {
    const l = i;
    u = l.paddings?.[0]?.top ?? 0;
    const w = (l.paddings ?? []).map((G) => G.left ?? 0);
    a = w.length ? Math.max(...w) : 0;
  } else {
    const l = i;
    u = l.padding?.top ?? 0;
    a = l.padding?.left ?? 0;
  }
  const T = _?.fields?.filter((l) => l.type === "numeric" && !l.taxonomy?.isPrimary)?.map((l) => l.id) ?? [];
  if (!d || !e) {
    return {
      tooltipX: null,
      tooltipY: null,
      tooltipTopPosition: null,
      tooltipPositionCSS: ""
    };
  }
  const m = wt({
    tooltipIndex: d,
    seriesDatas: e,
    scales: i,
    chartData: _,
    numericFieldIds: T,
    topTransformAmount: u,
    rightTransformAmount: a
  });
  if (!m) {
    return {
      tooltipX: null,
      tooltipY: null,
      tooltipTopPosition: null,
      tooltipPositionCSS: ""
    };
  }
  const C = m.x;
  const z = m.y;
  let c;
  if (S.mode === "center-vertical") {
    c = r ? r / 2 : n / 2;
  } else if (S.mode === "horizontal-only") {
    c = r ? -(r / 2 - v - 12 - n + x / 2) : m.y;
  } else {
    c = m.y;
  }
  const M = r || n;
  const P = At({
    width: s,
    height: M,
    tooltipPositionPx: m,
    settings: S
  });
  return { tooltipX: C, tooltipY: z, tooltipTopPosition: c, tooltipPositionCSS: P };
}

// src/charts/_common/Tooltip/SeriesTooltip.svelte
var ve = N(`<div class="toaster--tooltip-container svelte-1ucgffu" data-testid="tooltip-container"><div class="toaster--tooltip-content-container svelte-1ucgffu"><!></div></div>`);
var ue = {
  hash: "svelte-1ucgffu",
  code: ".toaster--tooltip-container.svelte-1ucgffu {position:absolute;pointer-events:none;}.toaster--tooltip-content-container.svelte-1ucgffu {position:absolute;}"
};
function me(d, e) {
  at(e, true);
  st(d, ue);
  const i = () => ft(m, "$tooltipPosition", s);
  const _ = () => ft(u, "$seriesDataLookup", s);
  const [s, n] = jt();
  let r = b(e, "chartHeight", 3, null), v = b(e, "footerHeight", 3, 0), S = b(e, "isMultiplesDesktop", 3, false), x = b(e, "settings", 19, () => ({
    mode: "quadrant",
    vertical: { offset: 0, transformAmount: 0 },
    horizontal: { offset: 0, transformAmount: 0 }
  }));
  const u = Wt();
  let a = vt(0);
  let T = vt(null);
  const m = qt();
  const C = o(() => e.scales.tooltipIndexScale?.scale);
  const z = o(() => e.chartData.design.tooltips?.disableTooltips);
  const c = o(() => S() ? false : Tt(e.width));
  const M = o(() => {
    if (e.scales.primaryScale && (e.scales.primaryScale.scale.type === "band" || e.scales.primaryScale.scale.type === "linear" || e.scales.primaryScale.scale.type === "time" || e.scales.primaryScale.scale.type === "timeBand")) {
      return e.scales.primaryScale.scale;
    }
    return null;
  });
  const P = o(() => {
    if (i() && t(C)) {
      return t(C)([i().x, i().y]) ?? null;
    }
    return null;
  });
  const l = o(() => Zt({
    tooltipIndex: t(P),
    primaryScale: t(M),
    chartData: e.chartData,
    seriesDataLookup: _()
  })), w = o(() => t(l).seriesDatas), G = o(() => t(l).groupedSeriesData);
  const B = o(() => Jt({
    tooltipIndex: t(P),
    seriesDatas: t(w),
    scales: e.scales,
    chartData: e.chartData,
    width: e.width,
    height: e.height,
    chartHeight: r(),
    footerHeight: v(),
    settings: x(),
    tooltipContentHeight: t(a)
  })), tt = o(() => t(B).tooltipX), lt = o(() => t(B).tooltipY), f = o(() => t(B).tooltipTopPosition), L = o(() => t(B).tooltipPositionCSS);
  var h = j();
  var D = U(h);
  {
    var A = (q) => {
      var O = j();
      var W = U(O);
      {
        var Z = (J) => {
          var E = ve();
          var H = g(E);
          var et = g(H);
          {
            var ot = ($) => {
              {
                let I = o(() => t(P)?.value);
                ht($, {
                  get primaryKey() {
                    return t(I);
                  },
                  get seriesData() {
                    return t(w);
                  },
                  get colorScale() {
                    return e.scales.colorScale;
                  },
                  get primaryScale() {
                    return t(M);
                  },
                  get chartData() {
                    return e.chartData;
                  },
                  get options() {
                    return e.options;
                  },
                  get isMobile() {
                    return t(c);
                  }
                });
              }
            };
            var nt = ($) => {
              {
                let I = o(() => t(P)?.value);
                let k = o(() => "strokeScale" in e.scales ? e.scales.strokeScale : void 0);
                Gt($, {
                  get primaryKey() {
                    return t(I);
                  },
                  get seriesData() {
                    return t(w);
                  },
                  get groupedData() {
                    return t(G);
                  },
                  get colorScale() {
                    return e.scales.colorScale;
                  },
                  get strokeScale() {
                    return t(k);
                  },
                  get primaryScale() {
                    return t(M);
                  },
                  get chartData() {
                    return e.chartData;
                  },
                  get options() {
                    return e.options;
                  },
                  get isMobile() {
                    return t(c);
                  }
                });
              }
            };
            F(et, ($) => {
              if (e.chartData.type === "candlestick") $(ot);
              else $(nt, false);
            });
          }
          p(H);
          Ut(H, ($) => ut(T, $), () => t(T));
          p(E);
          K(() => {
            X(E, `
            top: ${t(f)}px;
            left: ${t(tt)}px;
            transition: left 0.2s ease, top 0.2s ease;
            z-index: 1000;
          `);
            X(H, t(L));
          });
          Vt(H, "clientHeight", ($) => ut(a, $));
          y(J, E);
        };
        F(W, (J) => {
          if (t(tt) !== null && t(lt) !== null && t(w) !== null) J(Z);
        });
      }
      y(q, O);
    };
    F(D, (q) => {
      if (!t(z)) q(A);
    });
  }
  y(d, h);
  rt();
  n();
}

export {
  me as a
};
//# sourceMappingURL=chunk-EIASGJ4O.js.map
