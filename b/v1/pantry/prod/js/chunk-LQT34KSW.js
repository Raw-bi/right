import {
  $d as s,
  Ae as k,
  Be as n,
  G as J,
  Ld as v,
  Me as r,
  Qd as T,
  Rd as W,
  Sd as a,
  Xd as m,
  Zb as Q,
  Zd as y,
  ae as i,
  g as j,
  ge as C,
  h as K,
  he as b,
  i as R,
  ke as g,
  l as Y,
  le as M,
  m as Z,
  re as w,
  te as O,
  ue as P,
  xe as X,
  ze as U
} from "./chunk-K3YJBOOZ.js";

// src/charts/_common/DynamicText/WrappingText.svelte
var ie = b(`<text data-testid="wrapping-text"> </text>`);
var ne = b(`<g></g>`);
function V(I, e) {
  T(e, true);
  let E = r(e, "width", 3, Infinity), x = r(e, "textAnchor", 3, "start"), q = r(e, "verticalAnchor", 3, "auto"), f = r(e, "fontFamily", 3, K), u = r(e, "fontSize", 3, R), z = r(e, "dx", 3, 0), S = r(e, "dy", 3, 0), $ = r(e, "lineHeight", 3, 14), p = r(e, "growDirection", 3, "down"), F = r(e, "stroke", 3, void 0), G = r(e, "outline", 3, void 0), H = r(e, "outlineWidth", 3, 0), h = r(e, "fontWeight", 3, "normal"), _ = r(e, "trimSpace", 3, false);
  const c = a(() => j(`${e.text}`, E(), f(), u(), _()));
  const o = a(() => i(c).length * $());
  const l = a(() => p() === "middle" ? S() - i(o) / 2 : S());
  const B = (L, D) => {
    if (p() === "up") {
      return -(D - L) * $();
    } else {
      return L * $();
    }
  };
  var A = ne();
  P(A, 21, () => i(c), O, (L, D, d) => {
    var t = ie();
    var N = m(t, true);
    v(t);
    s(
      (te) => {
        n(t, "dy", te);
        n(t, "text-anchor", x());
        n(t, "dominant-baseline", p() === "middle" ? "hanging" : q());
        n(t, "font-size", u());
        n(t, "font-family", f());
        n(t, "stroke", G());
        n(t, "stroke-width", H());
        n(t, "font-weight", h());
        n(t, "fill", F());
        k(t, _() ? "white-space: wrap" : "");
        M(N, i(D));
      },
      [() => B(d, i(c).length - 1)]
    );
    g(L, t);
  });
  v(A);
  s(() => n(A, "transform", `translate(${z()} ${i(l)})`));
  g(I, A);
  W();
}

// src/charts/_common/Axes/HorizontalAxis.svelte
var re = b(`<line data-testid="horizontal-tick-grid"></line>`);
var oe = b(`<line data-testid="horizontal-tick"></line>`);
var le = b(`<g><!><!></g>`);
var ae = b(`<g></g>`);
function de(I, e) {
  T(e, true);
  let E = r(e, "translateString", 3, "0 0 "), x = r(e, "tickLength", 3, 10), q = r(e, "options", 19, () => ({})), f = r(e, "isMobile", 3, false), u = r(e, "forceGridlines", 3, false);
  const z = "middle";
  const S = "hanging";
  const $ = a(() => Y(q()?.isTerminalClient ?? false));
  const p = a(() => Z(f()));
  const F = a(() => e.axisProperties.gridLines || u());
  const G = a(() => e.scale.type === "band" ? e.scale.scale.bandwidth() : Infinity);
  const H = a(() => (_) => x() + J);
  var h = ae();
  P(h, 21, () => e.ticks, O, (_, c) => {
    const o = a(() => {
      const { label: d } = i(c);
      return { label: d };
    });
    var l = le();
    var B = m(l);
    {
      let d = a(() => i(H)(i(c)));
      let t = a(() => `${i(o).label.pre}${i(o).label.value}${i(o).label.post}`);
      let N = a(() => `${i(p)}px`);
      V(B, {
        dx: 0,
        get dy() {
          return i(d);
        },
        get width() {
          return i(G);
        },
        get text() {
          return i(t);
        },
        textAnchor: z,
        verticalAnchor: S,
        get fontSize() {
          return i(N);
        },
        get fontFamily() {
          return i($);
        }
      });
    }
    var A = y(B);
    {
      var L = (d) => {
        var t = re();
        n(t, "x1", 0);
        n(t, "x2", 0);
        n(t, "y1", 0);
        n(t, "stroke-width", 1);
        s(
          (N) => {
            n(t, "y2", -e.perpendicularHeight);
            n(t, "stroke", N);
          },
          [
            () => Q({ tickValue: i(c).value, variant: q().variant })
          ]
        );
        g(d, t);
      };
      var D = (d) => {
        var t = oe();
        n(t, "x1", 0);
        n(t, "x2", 0);
        n(t, "y1", 0);
        n(t, "stroke-width", 1);
        s(() => n(t, "y2", x()));
        g(d, t);
      };
      w(A, (d) => {
        if (i(F)) d(L);
        else d(D, false);
      });
    }
    v(l);
    s((d) => n(l, "transform", d), [
      () => `translate(${e.scale.scale(i(c).value)} ${0})`
    ]);
    g(_, l);
  });
  v(h);
  s(() => n(h, "transform", E()));
  g(I, h);
  W();
}

// src/charts/_common/Legends/LegendItem.svelte
var se = C(`<div class="line-icon svelte-39qult" data-testid="line-icon"></div>`);
var ge = C(`<div data-testid="box-icon"></div>`);
var ce = C(`<div class="box-icon box-icon--diagonal-split box-icon--outlined svelte-39qult" data-testid="box-icon"></div>`);
var ve = C(`<div class="circle-icon svelte-39qult" data-testid="circle-icon"></div>`);
var fe = C(`<div data-testid="legend-item"><div class="legend-icon svelte-39qult"><!> <!> <!> <!></div> <div class="legend-label svelte-39qult" data-testid="legend-label"> </div></div>`);
var ue = {
  hash: "svelte-39qult",
  code: ".legend-item.svelte-39qult {display:flex;align-items:flex-start;gap:var(--toas-legends-icon-text-spacing);}.legend-item--right-icon.svelte-39qult .legend-icon:where(.svelte-39qult) {order:2;}.legend-item--right-icon.svelte-39qult .legend-label:where(.svelte-39qult) {order:1;text-align:right;}.legend-icon.svelte-39qult {height:var(--toas-legends-item-height);min-width:12px;flex-shrink:0;display:flex;justify-content:center;align-items:center;}.line-icon.svelte-39qult {height:var(--toas-legends-line-icon-length);width:var(--toas-legends-line-icon-width);transform:rotate(45deg);}.box-icon.svelte-39qult {height:var(--toas-legends-box-icon-size);width:var(--toas-legends-box-icon-size);border-radius:2px;}.box-icon--filled.svelte-39qult {border-color:var(--box-stroke);border-width:var(--box-stroke-width);}.box-icon--hollow.svelte-39qult {background:transparent;border-color:var(--outline);border-width:var(--box-stroke-width);}.box-icon--diagonal-split.svelte-39qult {background:linear-gradient(135deg, var(--up) 50%, var(--down) 50%);}.box-icon--outlined.svelte-39qult {border:1px solid var(--box-stroke);}.circle-icon.svelte-39qult {height:var(--toas-legends-box-icon-size);width:var(--toas-legends-box-icon-size);border-radius:50%;}.legend-label.svelte-39qult {line-height:var(--toas-legends-item-height);}"
};
function $e(I, e) {
  T(e, true);
  X(I, ue);
  const E = r(e, "rightSideIcon", 3, false);
  const x = a(() => !!e.legendsInfo.color?.trim());
  const q = a(() => e.legendsInfo.outline ?? "black");
  var f = fe();
  var u = m(f);
  var z = m(u);
  {
    var S = (o) => {
      var l = se();
      s(() => k(l, `background-color: ${e.legendsInfo.color};`));
      g(o, l);
    };
    w(z, (o) => {
      if (e.legendsInfo.type === "line") o(S);
    });
  }
  var $ = y(z, 2);
  {
    var p = (o) => {
      var l = ge();
      s(() => {
        U(l, 1, `box-icon ${i(x) ? "box-icon--filled" : "box-icon--hollow"}`, "svelte-39qult");
        k(l, `background-color: ${e.legendsInfo.color || "transparent"}; --box-stroke: ${e.legendsInfo.stroke}; --outline: ${i(q)}; --box-stroke-width: ${!i(x) || e.legendsInfo.stroke && e.legendsInfo.stroke !== "none" ? "1px" : "0px"};`);
      });
      g(o, l);
    };
    w($, (o) => {
      if (e.legendsInfo.type === "box") o(p);
    });
  }
  var F = y($, 2);
  {
    var G = (o) => {
      var l = ce();
      s(() => k(l, `${e.legendsInfo.style}`));
      g(o, l);
    };
    w(F, (o) => {
      if (e.legendsInfo.type === "candlestick-series") o(G);
    });
  }
  var H = y(F, 2);
  {
    var h = (o) => {
      var l = ve();
      s(() => k(l, `background-color: ${e.legendsInfo.color};`));
      g(o, l);
    };
    w(H, (o) => {
      if (e.legendsInfo.type === "circle") o(h);
    });
  }
  v(u);
  var _ = y(u, 2);
  var c = m(_, true);
  v(_);
  v(f);
  s(() => {
    U(f, 1, `legend-item ${E() ? "legend-item--right-icon" : ""}`, "svelte-39qult");
    M(c, e.legendsInfo.label);
  });
  g(I, f);
  W();
}

export {
  V as a,
  de as b,
  $e as c
};
//# sourceMappingURL=chunk-LQT34KSW.js.map
