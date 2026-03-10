import {
  a as de
} from "./chunk-LQT34KSW.js";
import {
  h as Me
} from "./chunk-VWPWBXTO.js";
import {
  $b as le,
  $d as m,
  Be as r,
  Dc as we,
  He as Ce,
  Je as Ne,
  Ld as p,
  Me as Q,
  P as me,
  Q as ie,
  Qd as V,
  R as be,
  Rd as j,
  S as se,
  Sd as c,
  T as ve,
  U as he,
  Xd as w,
  Yb as ye,
  Yd as Y,
  Zb as re,
  Zd as S,
  _b as oe,
  aa as pe,
  ac as Ae,
  ae as e,
  ba as xe,
  g as ge,
  he as $,
  j as fe,
  jc as J,
  je as q,
  k as $e,
  kc as Se,
  ke as f,
  l as ee,
  lc as Te,
  le as U,
  m as te,
  mc as ce,
  n as _e,
  nc as Ie,
  pc as Oe,
  qc as Pe,
  rc as ke,
  re as D,
  sc as De,
  tc as Le,
  te as F,
  uc as Ee,
  ue as X,
  vc as ae
} from "./chunk-K3YJBOOZ.js";

// src/charts/_common/Annotations/annotation.utils.ts
var Re = ["line", "area"];
var ft = ["line", "area"];
var ze = ["stackedPanel", "multiples"];
var $t = (a, t, u) => {
  return !ze.includes(a) || t === void 0 || t === u;
};
var _t = (a, t, u, g) => {
  if (!u) return null;
  if (g === void 0) {
    return u;
  }
  switch (t) {
    case "multiples":
      if (Array.isArray(a)) {
        const d = a[g]?.scales.secondaryScale;
        return d?.scale.type === "linear" ? d.scale : null;
      }
      break;
    case "stackedPanel":
    case "dualAxis":
      if ("secondaryScales" in a && a.secondaryScales) {
        const d = a.secondaryScales[g]?.scale;
        return d?.type === "linear" ? d : null;
      }
      break;
  }
  return null;
};
var mt = (a, t, u, g) => {
  window.parent.postMessage(
    {
      type: "coordinatesConverted",
      annotationId: a,
      convertedAnchorX: t,
      convertedAnchorY: u,
      layerId: g
    },
    "*"
  );
};
var bt = (a, t) => {
  if (a.scaledX === null || a.scaledY === null) return;
  window.parent.postMessage(
    {
      type: "anchorPointCalculated",
      ...a,
      layerId: t
    },
    "*"
  );
};
var vt = (a, t, u, g, d) => {
  window.parent.postMessage(
    {
      type: "dualAxisConversion",
      annotationId: a,
      toPanelIndex: t,
      convertedAnchorX: u,
      convertedAnchorY: g,
      layerId: d
    },
    "*"
  );
};
var ht = (a) => {
  if (!a.seriesDataLookup) return null;
  return ae({
    primaryAxisPosition: `${a.primaryAxisPosition}`,
    seriesId: a.seriesId,
    seriesDataLookup: a.seriesDataLookup,
    primaryScale: a.primaryScale,
    secondaryScale: a.secondaryScale,
    chartData: a.chartData
  });
};
var pt = (a, t, u) => {
  return a[t]?.fieldIds.includes(u) ?? false;
};
var ne = (a, t, u) => {
  return a ? t ?? u : u;
};
var xt = (a, t) => {
  return Array.isArray(a) ? a[t] : a;
};
var yt = (a, t, u) => {
  if (!a.width) return J;
  const g = ne(
    t,
    a.widthMobile,
    a.width
  );
  return g / Oe * u;
};
var At = (a, t, u, g) => {
  const d = ge(
    `${a}`,
    t,
    u,
    g,
    true
  ).length;
  return d * Ie;
};
var St = (a, t, u) => {
  const g = a.primaryAnchorPosition !== null && a.secondaryAnchorPosition !== null;
  const d = a.seriesId && a.primaryAxisPosition !== null;
  if (!g && !d) return false;
  if (a.pointer) {
    const x = u?.fieldIds?.includes(a.seriesId ?? "");
    return x || a.panelIndex === t;
  }
  return a.panelIndex === t;
};
var Tt = (a, t, u, g, d, x, b) => {
  const T = ne(
    x,
    a.alignmentMobile,
    a.alignment
  );
  const y = ne(x, a.xOffsetMobile, a.xOffset);
  const I = ne(x, a.yOffsetMobile, a.yOffset);
  const v = we({
    alignment: T,
    xOffset: y ?? 0,
    yOffset: I ?? 0,
    width: g + ce,
    height: d + ce
  });
  return {
    id: a.id,
    text: a.text,
    xPosition: t,
    yPosition: u,
    seriesId: a.seriesId,
    hideOnDesktop: a.hideOnDesktop,
    hideOnMobile: a.hideOnMobile,
    primaryAxisPosition: a.primaryAxisPosition,
    pointer: a.pointer ?? false,
    panelIndex: a.panelIndex,
    width: g,
    textOffsetX: a.pointer ? y ?? 0 : 0,
    textOffsetY: a.pointer ? I ?? 0 : 0,
    pointColor: b(a.seriesId ?? ""),
    growDirection: "down",
    verticalTextAnchor: "hanging",
    textAnchor: "start",
    alignment: T,
    horizontalLine: v?.horizontalLine,
    verticalLine: v?.verticalLine,
    lineHeights: d,
    type: a.type ?? "calloutLine"
  };
};

// src/charts/_common/Annotations/SeriesTextAnnotations.svelte
var Ge = $(`<line data-testid="vertical-line"></line>`);
var Ke = $(`<line data-testid="callout-line"></line>`);
var Ve = $(`<circle data-testid="circle" stroke="none"></circle>`);
var je = $(`<!><g><!><!><g><!><!></g></g>`, 1);
var Be = $(`<g></g>`);
function Ue(a, t) {
  V(t, true);
  const u = () => Ce(x, "$seriesDataLookup", g);
  const [g, d] = Ne();
  const x = Me();
  const b = c(() => {
    if (t.scales.primaryScale.scale.type === "linear" || t.scales.primaryScale.scale.type === "band" || t.scales.primaryScale.scale.type === "time" || t.scales.primaryScale.scale.type === "timeBand") {
      return t.scales.primaryScale.scale;
    }
    return void 0;
  });
  const T = c(() => {
    if (t.scales.secondaryScale && t.scales.secondaryScale.scale.type === "linear") {
      return t.scales.secondaryScale.scale;
    }
    return void 0;
  });
  const y = c(() => t.chartData?.annotations);
  const I = c(() => t.chartData?.type);
  const v = c(() => e(y)?.textAnnotations?.map((n) => ({ ...n, xOffset: n?.xOffset ?? 0, yOffset: n?.yOffset ?? 0 })) ?? []);
  const C = c(() => t.scales.colorScale.scale);
  const h = c(() => _e(t.width));
  const N = c(() => te(e(h)));
  const z = c(() => ee(t.options.isTerminalClient ?? false));
  const _ = c(() => (e(v) || []).filter((n) => !n.hideOnMobile ? true : t.width > Te).map((n) => {
    if (n.primaryAxisPosition === null || !n.seriesId || !e(T)) return null;
    const l = ae({
      primaryAxisPosition: n.primaryAxisPosition,
      seriesId: n.seriesId,
      seriesDataLookup: u(),
      primaryScale: e(b),
      secondaryScale: e(T),
      chartData: t.chartData
    });
    if (!l) return null;
    return {
      text: n.text,
      anchorX: l.x,
      anchorY: l.y,
      type: n.type,
      textOffsetX: De(n),
      textOffsetY: Le(n),
      orientation: n.orientation,
      textAnchor: Pe(n.orientation),
      verticalTextAnchor: ke(n.orientation),
      pointColor: e(C)(n.seriesId),
      growDirection: Ee(n.orientation)
    };
  }).filter((n) => n !== null && n.anchorX !== void 0 && n.anchorY !== void 0));
  var o = Be();
  X(o, 21, () => e(_), F, (n, l) => {
    var M = je();
    var O = Y(M);
    {
      var L = (s) => {
        var i = Ge();
        r(i, "y1", 0);
        m(
          (k) => {
            r(i, "x1", e(l).anchorX);
            r(i, "x2", e(l).anchorX);
            r(i, "y2", k);
          },
          [() => e(T)?.scale.range()[0]]
        );
        f(s, i);
      };
      D(O, (s) => {
        if (e(l).type === "verticalLine") s(L);
      });
    }
    var E = S(O);
    var P = w(E);
    {
      var R = (s) => {
        var i = Ke();
        r(i, "x1", 0);
        r(i, "y1", 0);
        r(i, "x2", 0);
        m(() => r(i, "y2", e(l).textOffsetY));
        f(s, i);
      };
      D(P, (s) => {
        if (e(l).type === "calloutLine") s(R);
      });
    }
    var B = S(P);
    {
      var W = (s) => {
        var i = Ve();
        r(i, "cx", 0);
        r(i, "cy", 0);
        m(() => {
          r(i, "r", Se);
          r(i, "fill", e(l).pointColor);
        });
        f(s, i);
      };
      var G = c(() => Re.includes(e(I) ?? "") && (e(l).type === "markerWithText" || e(l).type === "calloutLine"));
      D(B, (s) => {
        if (e(G)) s(W);
      });
    }
    var K = S(B);
    var A = w(K);
    {
      let s = c(() => `${e(N)}px`);
      let i = c(() => t.options.variant === "dark" ? "#000" : "#fff");
      de(A, {
        get text() {
          return e(l).text;
        },
        get textAnchor() {
          return e(l).textAnchor;
        },
        get verticalAnchor() {
          return e(l).verticalTextAnchor;
        },
        get fontSize() {
          return e(s);
        },
        get fontFamily() {
          return e(z);
        },
        get width() {
          return J;
        },
        get growDirection() {
          return e(l).growDirection;
        },
        dx: 1,
        dy: 1,
        get stroke() {
          return e(i);
        }
      });
    }
    var Z = S(A);
    {
      let s = c(() => `${e(N)}px`);
      de(Z, {
        get text() {
          return e(l).text;
        },
        get textAnchor() {
          return e(l).textAnchor;
        },
        get verticalAnchor() {
          return e(l).verticalTextAnchor;
        },
        get fontSize() {
          return e(s);
        },
        get fontFamily() {
          return e(z);
        },
        get width() {
          return J;
        },
        get growDirection() {
          return e(l).growDirection;
        }
      });
    }
    p(K);
    p(E);
    m(() => {
      r(E, "transform", `translate(${e(l).anchorX}, ${e(l).anchorY})`);
      r(K, "transform", `translate(${e(l).textOffsetX}, ${e(l).textOffsetY})`);
    });
    f(n, M);
  });
  p(o);
  f(a, o);
  j();
  d();
}

// src/charts/_common/HighlightDataRanges/HighlightDataRanges.svelte
var We = $(`<rect data-testid="highlight-data-range" stroke="none"></rect>`);
var Ze = $(`<g></g>`);
function Je(a, t) {
  V(t, true);
  const u = c(() => t.chartData.annotations);
  const g = c(() => e(u)?.dataRangeHighlights?.highlights ?? []);
  const d = c(() => {
    if (t.scales.primaryScale && (t.scales.primaryScale.scale.type === "linear" || t.scales.primaryScale.scale.type === "band" || t.scales.primaryScale.scale.type === "time" || t.scales.primaryScale.scale.type === "timeBand")) {
      return t.scales.primaryScale.scale;
    }
    return null;
  });
  const x = c(() => e(g).map((y) => {
    const { start: I, end: v } = y;
    if (I === null || v === null) {
      return null;
    }
    let C = e(d)?.scale(e(d).formatValue(I));
    let h = e(d)?.scale(e(d).formatValue(v));
    if (e(d) !== null && e(d).isBand) {
      C -= e(d).scale.bandwidth() / 2;
      h += e(d).scale.bandwidth() / 2;
    }
    if (C === 0 && h === 0) return null;
    return { startPos: C, endPos: h };
  }).filter((y) => y !== null));
  const b = c(() => {
    if ("secondaryScale" in t.scales) {
      return Math.abs(t.scales.secondaryScale?.scale.scale.range()[0] - t.scales.secondaryScale?.scale.scale.range()[1]);
    } else if ("secondaryScales" in t.scales) {
      return Math.abs(t.scales.secondaryScales?.[0]?.scale.scale.range()[0] - t.scales.secondaryScales?.[0]?.scale.scale.range()[1]);
    }
    return 0;
  });
  var T = Ze();
  X(T, 21, () => e(x), F, (y, I) => {
    let v = () => e(I).startPos;
    let C = () => e(I).endPos;
    var h = We();
    r(h, "y", 0);
    m(() => {
      r(h, "x", v());
      r(h, "width", C() - v());
      r(h, "height", e(b));
      r(h, "fill", t.options.variant === "dark" ? xe : pe);
    });
    f(y, h);
  });
  p(T);
  f(a, T);
  j();
}

// src/charts/_common/ThresholdLines/ThresholdLines.svelte
var qe = $(`<text data-testid="threshold-line-text-shadow"> </text><text data-testid="threshold-line-text" stroke="none"> </text>`, 1);
var Qe = $(`<g><line stroke-linecap="round" data-testid="threshold-line-shadow"></line><line stroke-linecap="round" stroke-dasharray="5,5" data-testid="threshold-line"></line><!></g>`);
var et = $(`<g></g>`);
function tt(a, t) {
  V(t, true);
  const u = Q(t, "isMobile", 3, false);
  const g = t.options.variant === "dark" ? "#000" : "#FFF";
  const d = c(() => t.scales.primaryScale.scale.scale);
  const x = c(() => t.scales.secondaryScale?.scale.scale);
  const b = c(() => e(d).range()[1]);
  const T = c(() => u() ? $e : fe);
  const y = c(() => ee(t.options.isTerminalClient ?? false));
  const I = c(() => t.chartData?.annotations?.thresholdIndicators);
  const v = c(() => {
    if (t.chartData?.design?.parsedOverrideOptions && "thresholdColor" in t.chartData.design.parsedOverrideOptions) {
      return t.chartData.design.parsedOverrideOptions.thresholdColor;
    } else {
      return t.options.variant === "dark" ? "#FFF" : "#000";
    }
  });
  const C = c(() => {
    if (t.chartData && e(I) && e(x)) {
      return e(I).map((N) => {
        return {
          yPos: e(x)(N.value),
          label: N.label,
          labelOrientation: N.labelOrientation
        };
      });
    }
    return [];
  });
  var h = et();
  X(h, 21, () => e(C), F, (N, z) => {
    let _ = () => e(z).yPos;
    let o = () => e(z).label;
    let n = () => e(z).labelOrientation;
    var l = q();
    var M = Y(l);
    {
      var O = (L) => {
        var E = Qe();
        var P = w(E);
        r(P, "x1", 0);
        r(P, "y1", 0);
        r(P, "y2", 0);
        r(P, "stroke-width", 2);
        r(P, "opacity", 0.4);
        var R = S(P);
        r(R, "x1", 0);
        r(R, "y1", 0);
        r(R, "y2", 0);
        r(R, "stroke-width", 2);
        var B = S(R);
        {
          var W = (G) => {
            var K = qe();
            var A = Y(K);
            r(A, "stroke-width", 2);
            var Z = w(A, true);
            p(A);
            var s = S(A);
            var i = w(s, true);
            p(s);
            m(() => {
              r(A, "x", n() === "aboveEnd" || n() === "belowEnd" ? e(b) : 0);
              r(A, "y", n() === "aboveEnd" || n() === "aboveStart" ? -5 : 15);
              r(A, "text-anchor", n() === "aboveEnd" || n() === "belowEnd" ? "end" : "start");
              r(A, "font-size", e(T));
              r(A, "font-family", e(y));
              r(A, "stroke", g);
              r(A, "fill", g);
              U(Z, o());
              r(s, "x", n() === "aboveEnd" || n() === "belowEnd" ? e(b) : 0);
              r(s, "y", n() === "aboveEnd" || n() === "aboveStart" ? -5 : 15);
              r(s, "text-anchor", n() === "aboveEnd" || n() === "belowEnd" ? "end" : "start");
              r(s, "font-size", e(T));
              r(s, "font-family", e(y));
              r(s, "fill", e(v));
              U(i, o());
            });
            f(G, K);
          };
          D(B, (G) => {
            if (o()) G(W);
          });
        }
        p(E);
        m(() => {
          r(E, "transform", `translate(0, ${_()})`);
          r(P, "x2", e(b));
          r(P, "stroke", g);
          r(R, "x2", e(b));
          r(R, "stroke", e(v));
        });
        f(L, E);
      };
      D(M, (L) => {
        if (_() !== void 0) L(O);
      });
    }
    f(N, l);
  });
  p(h);
  f(a, h);
  j();
}

// src/charts/_common/Axes/DateAxis.svelte
var rt = $(`<line stroke-dasharray="4,4"></line>`);
var at = $(`<line></line>`);
var nt = $(`<line data-testid="major-tick"></line>`);
var it = $(`<line data-testid="super-tick"></line><line data-testid="super-tick"></line>`, 1);
var st = $(`<text stroke="none" text-anchor="middle" dominant-baseline="middle" data-testid="major-tick-label"> </text>`);
var ot = $(`<g><!><!><!><!></g>`);
var lt = $(`<g><text stroke="none" text-anchor="middle" dominant-baseline="middle" letter-spacing="1px" data-testid="super-tick-label"> </text></g>`);
var ct = $(`<g><!><!><!></g>`);
function dt(a, t) {
  V(t, true);
  let u = Q(t, "translateString", 3, "0 0 "), g = Q(t, "bottomTickValue", 3, 0);
  const d = (_) => {
    switch (_.rank) {
      case "super":
        return be;
      case "major":
      case "custom":
        return ie;
      default:
        return me;
    }
  };
  const x = (_, o) => {
    switch (_) {
      case "super":
        return o === "light" ? ve : he;
      case "major":
      case "custom":
        return o === "light" ? "#000" : "#FFF";
      case "minor":
      default:
        return re({ tickValue: g(), variant: o });
    }
  };
  const b = c(() => te(t.isMobile));
  const T = c(() => {
    const _ = t.ticks.filter((o) => o.rank === "super");
    return ye(t.scale, _, t.options, t.isMobile);
  });
  const y = c(() => t.scale.gaps.map((_) => {
    const o = "bandwidth" in t.scale.scale ? t.scale.scale.bandwidth() / 2 + t.scale.scale.bandwidth() * 0.1 : 0;
    return t.scale.scale(_[1]) - o;
  }));
  var I = { getTickColor: x };
  var v = ct();
  var C = w(v);
  {
    var h = (_) => {
      var o = q();
      var n = Y(o);
      X(n, 17, () => e(y), F, (l, M) => {
        var O = rt();
        r(O, "y1", 0);
        m(
          (L) => {
            r(O, "x1", e(M));
            r(O, "x2", e(M));
            r(O, "y2", -t.perpendicularHeight);
            r(O, "stroke", L);
          },
          [
            () => re({ tickValue: "", variant: t.options.variant })
          ]
        );
        f(l, O);
      });
      f(_, o);
    };
    D(C, (_) => {
      if (e(y).length <= 5) _(h);
    });
  }
  var N = S(C);
  X(N, 17, () => t.ticks, F, (_, o) => {
    var n = q();
    var l = Y(n);
    {
      var M = (L) => {
        var E = ot();
        var P = w(E);
        {
          var R = (s) => {
            var i = at();
            r(i, "x1", 0);
            r(i, "x2", 0);
            r(i, "y1", 0);
            m(
              (k) => {
                r(i, "y2", -t.perpendicularHeight);
                r(i, "stroke", k);
              },
              [
                () => re({
                  tickValue: e(o).value,
                  variant: t.options.variant
                })
              ]
            );
            f(s, i);
          };
          D(P, (s) => {
            if (t.axisProperties.gridLines && (e(o).rank === "major" || e(o).rank === "custom")) s(R);
          });
        }
        var B = S(P);
        {
          var W = (s) => {
            var i = nt();
            r(i, "x1", 0);
            r(i, "x2", 0);
            r(i, "y1", 0);
            m(
              (k, H) => {
                r(i, "y2", k);
                r(i, "stroke", H);
              },
              [
                () => d(e(o)),
                () => x(e(o).rank, t.options.variant)
              ]
            );
            f(s, i);
          };
          D(B, (s) => {
            if (e(o).rank !== "super") s(W);
          });
        }
        var G = S(B);
        {
          var K = (s) => {
            var i = it();
            var k = Y(i);
            r(k, "x1", 0);
            r(k, "x2", 0);
            r(k, "y1", 0);
            var H = S(k);
            r(H, "x1", 0);
            r(H, "x2", 0);
            m(
              (Fe, Xe, He, Ye) => {
                r(k, "y2", ie);
                r(k, "stroke", Fe);
                r(H, "stroke", Xe);
                r(H, "y1", He);
                r(H, "y2", Ye);
              },
              [
                () => x("super", t.options.variant),
                () => oe(t.options.variant),
                () => Ae(e(b)) + se,
                () => le(e(b))
              ]
            );
            f(s, i);
          };
          D(G, (s) => {
            if (e(o).rank === "super" && e(o).hideTick !== true) s(K);
          });
        }
        var A = S(G);
        {
          var Z = (s) => {
            var i = st();
            var k = w(i, true);
            p(i);
            m(
              (H) => {
                r(i, "font-size", e(b));
                r(i, "dy", H);
                U(k, `${e(o).label.pre}${e(o).label.value}${e(o).label.post}`);
              },
              [
                () => d(e(o)) + se + e(b) / 2
              ]
            );
            f(s, i);
          };
          D(A, (s) => {
            if (e(o).rank === "major" || e(o).rank === "custom") s(Z);
          });
        }
        p(E);
        m((s) => r(E, "transform", s), [
          () => `translate(${t.scale.scale(e(o).value)} 0)`
        ]);
        f(L, E);
      };
      var O = c(() => t.scale.scale(e(o).value) !== void 0);
      D(l, (L) => {
        if (e(O)) L(M);
      });
    }
    f(_, n);
  });
  var z = S(N);
  X(z, 17, () => e(T), F, (_, o) => {
    var n = lt();
    var l = w(n);
    var M = w(l, true);
    p(l);
    p(n);
    m(
      (O, L) => {
        r(n, "transform", `translate(${e(o).position}, 0)`);
        r(l, "font-size", e(b));
        r(l, "fill", O);
        r(l, "dy", L);
        U(M, e(o).label);
      },
      [
        () => oe(t.options.variant),
        () => le(e(b)) - e(b) / 2
      ]
    );
    f(_, n);
  });
  p(v);
  m(() => r(v, "transform", u()));
  f(a, v);
  return j(I);
}

export {
  ft as a,
  $t as b,
  _t as c,
  mt as d,
  bt as e,
  vt as f,
  ht as g,
  pt as h,
  xt as i,
  yt as j,
  At as k,
  St as l,
  Tt as m,
  Ue as n,
  Je as o,
  tt as p,
  dt as q
};
//# sourceMappingURL=chunk-VGBZSIGE.js.map
