import {
  a as bt,
  b as Zt,
  c as Qt,
  d as jt,
  e as Je,
  f as er,
  g as Bt,
  h as Ze,
  i as $t,
  j as tr,
  k as rr,
  l as ar,
  m as Qe
} from "./chunk-VGBZSIGE.js";
import {
  a as Ke,
  c as or
} from "./chunk-LQT34KSW.js";
import {
  c as Ue,
  f as ht
} from "./chunk-BSPDSCQH.js";
import {
  f as ct,
  h as gt
} from "./chunk-VWPWBXTO.js";
import {
  $d as U,
  Ac as Ne,
  Ae as Et,
  Bc as At,
  Be as l,
  Cc as Dt,
  Ce as Mt,
  Ec as Rt,
  Ee as Nt,
  Fe as Yt,
  He as be,
  Ie as Kt,
  Jd as Ot,
  Je as qe,
  Kd as Ht,
  Ke as Be,
  Ld as y,
  Le as xt,
  Ma as Tt,
  Md as qt,
  Me as O,
  Nd as Ut,
  Ne as Jt,
  Qd as pe,
  Rd as xe,
  Sd as f,
  Td as ne,
  Ud as J,
  Vd as zt,
  Xd as A,
  Yd as D,
  Zd as b,
  _d as ut,
  ae as e,
  be as _t,
  ce as Re,
  de as me,
  ee as fe,
  fe as it,
  ge as nt,
  he as M,
  je as z,
  kc as kt,
  ke as i,
  l as Ft,
  le as Ye,
  m as It,
  oc as Ee,
  oe as Wt,
  pe as mt,
  qe as Xt,
  re as B,
  te as we,
  ue as ye,
  ve as Oe,
  wc as wt,
  we as Vt,
  xe as He,
  ye as Gt,
  ze as pt
} from "./chunk-K3YJBOOZ.js";
import {
  i as Me
} from "./chunk-LMFSDKL5.js";

// src/charts/_common/Annotations/AnnotationPlacementOverlay.svelte
var lr = M(`<rect class="annotation-canvas-target svelte-1o4zvhz" fill="transparent" stroke-width="0" style="cursor: crosshair; outline: none;" role="button" tabindex="0" aria-label="Click to place annotation"></rect><!>`, 1);
var sr = {
  hash: "svelte-1o4zvhz",
  code: ".annotation-canvas-target.svelte-1o4zvhz:focus {outline:none;}"
};
function dr(Y, t) {
  pe(t, true);
  He(Y, sr);
  const L = () => be(p, "$annotationMode", W);
  const [W, F] = qe();
  let H = O(t, "panelIndex", 3, null);
  const p = ct();
  function $() {
    if (t.xScale && t.yScale && t.annotationPosition) {
      const v = t.annotationPosition.x - t.leftTransformAmount;
      const h = t.annotationPosition.y - t.topTransformAmount;
      let S, P;
      if ("invert" in t.xScale) {
        S = t.xScale.invert(v);
      } else {
        S = v;
      }
      if ("invert" in t.yScale) {
        P = t.yScale.invert(h);
      } else {
        P = h;
      }
      window.postMessage(
        {
          type: "annotationPlaced",
          xData: S,
          yData: P,
          panelIndex: H()
        },
        "*"
      );
      Kt(p, "IDLE");
    }
  }
  var c = lr();
  var T = D(c);
  l(T, "x", 0);
  l(T, "y", 0);
  var le = b(T);
  Wt(le, () => t.children ?? Ot);
  U(() => {
    l(T, "width", t.width);
    l(T, "height", t.height);
  });
  fe("click", T, $);
  fe("keydown", T, (v) => {
    if (v.key === "Enter" || v.key === " ") {
      v.preventDefault();
      $();
    }
  });
  i(Y, c);
  xe();
  F();
}
it(["click", "keydown"]);

// src/charts/_common/Annotations/AnnotationMarkers.svelte
var ur = M(`<circle class="annotation-inner-circle" style="pointer-events: none;"></circle><circle class="annotation-outer-circle svelte-128vvin" fill="transparent" stroke="none" role="button" tabindex="0"></circle>`, 1);
var ir = M(`<line stroke-width="1" style="pointer-events: none;"></line>`);
var nr = M(`<rect fill="transparent" role="button" tabindex="0"></rect><!>`, 1);
var mr = M(`<rect fill="transparent" style="cursor: pointer; outline: none; pointer-events: all;" role="button" tabindex="0"></rect>`);
var pr = M(`<!><!><!>`, 1);
var xr = {
  hash: "svelte-128vvin",
  code: ".annotation-outer-circle.svelte-128vvin {cursor:pointer;outline:none;}.annotation-outer-circle.svelte-128vvin:focus {outline:none;}.bar-body.svelte-128vvin,\n  .bar-with-border.svelte-128vvin {transition:stroke-width 0.15s ease-in-out;pointer-events:all;}"
};
function cr(Y, t) {
  pe(t, true);
  He(Y, xr);
  let L = O(t, "circleMarkers", 19, () => []), W = O(t, "barMarkers", 19, () => []), F = O(t, "stackedBarMarkers", 19, () => []);
  const H = Xt();
  let p = ne(null);
  let $ = ne(null);
  let c = ne(null);
  let T = ne(null);
  let le = ne(
    null
    // Track axis index for dual axis
  );
  let v = ne(null);
  const h = f(() => L() && L().length > 0);
  const S = f(() => W() && W().length > 0);
  const P = f(() => F() && F().length > 0);
  function Z(r) {
    return r.field?.id ?? "";
  }
  function X(r, s) {
    return !!(e($) && s === e($) && e(c)?.xDataKey === r.primaryKey);
  }
  function se(r, s) {
    const x = e(T) && e(T) === r.primaryKey;
    const K = s === void 0 || e(le) === null || e(le) === s;
    return !!(x && K);
  }
  function ae(r) {
    if (!r) return "";
    return t.variant === "dark" ? "white" : "black";
  }
  function Q(r) {
    return {
      xData: r.primaryValue,
      yData: r.value,
      xDataKey: r.primaryKey,
      seriesId: r.field.id,
      x: r.x,
      y: r.y
    };
  }
  function j(r) {
    return {
      xData: r.primaryValue,
      ySum: r.sum,
      xDataKey: r.primaryKey,
      seriesId: r.field.id
    };
  }
  function de(r) {
    window.postMessage(
      {
        type: "annotationPlaced",
        xData: r.xData,
        yData: r.yData,
        xDataKey: r.xDataKey,
        seriesId: r.seriesId
      },
      "*"
    );
  }
  function oe(r, s) {
    if (r.key === "Enter" || r.key === " ") {
      r.preventDefault();
      r.stopPropagation();
      de(s);
    }
  }
  function ee(r) {
    ce();
    V();
    if (e(p) !== r) {
      J(p, r, true);
      H("hoverChange", { seriesId: r });
    }
  }
  function Pe() {
    J(p, null);
    H("hoverChange", { seriesId: null });
  }
  function ve(r) {
    if (!t.chartData) return;
    const s = r.field;
    if (!s) return;
    const x = s.id;
    const K = e($) !== x || e(c)?.xDataKey !== r.primaryKey;
    if (K) {
      J($, x, true);
      J(
        c,
        {
          id: x,
          series: s.name || "",
          legendColor: t.colorScale(x),
          legendType: Jt(t.chartData, x),
          xDataKey: r.primaryKey,
          yData: r.value
        },
        true
      );
      H("seriesInfoChange", { currentSeries: e(c) });
    }
  }
  function ce() {
    J($, null);
    J(c, null);
    H("seriesInfoChange", { currentSeries: null });
  }
  function I(r, s) {
    if (!t.chartData || e(T) === r.primaryKey && e(le) === s) return;
    J(T, r.primaryKey, true);
    J(le, s ?? null, true);
    J(
      v,
      {
        xData: r.primaryValue,
        xDataKey: r.primaryKey,
        ySum: r.sum,
        seriesId: r.field.id,
        axisIndex: s
      },
      true
    );
    H("primaryValueChange", { currentHoveredPrimaryValue: e(v) });
  }
  function V() {
    J(T, null);
    J(le, null);
    H("primaryValueChange", { currentHoveredPrimaryValue: null });
  }
  var o = pr();
  var m = D(o);
  {
    var w = (r) => {
      var s = z();
      var x = D(s);
      ye(x, 17, L, we, (K, d) => {
        var R = z();
        var q = D(R);
        {
          var _ = (N) => {
            var g = ur();
            var n = D(g);
            l(n, "r", 4);
            l(n, "stroke-width", 2);
            var u = b(n);
            l(u, "r", 15);
            U(
              (ge) => {
                l(n, "cx", e(d).x);
                l(n, "cy", e(d).y);
                l(n, "fill", t.variant === "light" ? "#FFFFFF" : "#000000");
                l(n, "stroke", ge);
                l(u, "cx", e(d).x);
                l(u, "cy", e(d).y);
              },
              [() => t.colorScale(e(d).seriesId)]
            );
            me("mouseenter", u, () => ee(e(d).seriesId));
            fe("mouseover", u, () => ee(e(d).seriesId));
            fe("mousemove", u, () => ee(e(d).seriesId));
            me("mouseleave", u, Pe);
            fe("click", u, () => de(e(d)));
            me("focus", u, () => ee(e(d).seriesId));
            me("blur", u, Pe);
            fe("keydown", u, (ge) => oe(ge, e(d)));
            i(N, g);
          };
          var a = f(() => !Me(e(d).x) && !Me(e(d).y) && isFinite(e(d).x) && isFinite(e(d).y));
          B(q, (N) => {
            if (e(a)) N(_);
          });
        }
        i(K, R);
      });
      i(r, s);
    };
    B(m, (r) => {
      if (e(h)) r(w);
    });
  }
  var C = b(m);
  {
    var ue = (r) => {
      var s = z();
      var x = D(s);
      ye(x, 17, W, we, (K, d) => {
        const R = f(() => Z(e(d)));
        const q = f(() => X(e(d), e(R)));
        const _ = f(() => Q(e(d)));
        const a = f(() => ae(e(q)));
        const N = f(() => e(a) || e(d).stroke);
        const g = f(() => e(q) ? 2 : 0);
        var n = nr();
        var u = D(n);
        var ge = b(u);
        {
          var ke = (Se) => {
            var Ce = ir();
            U(() => {
              l(Ce, "x1", e(d).x);
              l(Ce, "y1", e(d).y);
              l(Ce, "x2", (e(d).x ?? 0) + e(d).width);
              l(Ce, "y2", e(d).y);
              l(Ce, "stroke", t.variant === "dark" ? "white" : "black");
            });
            i(Se, Ce);
          };
          B(ge, (Se) => {
            if (e(d).needsTopBorder) Se(ke);
          });
        }
        U(() => {
          pt(u, 0, Gt(e(d).needsTopBorder ? "bar-with-border" : "bar-body"), "svelte-128vvin");
          l(u, "x", e(d).x);
          l(u, "y", e(d).y);
          l(u, "width", e(d).width);
          l(u, "height", e(d).height);
          l(u, "stroke", e(N));
          l(u, "stroke-width", e(g));
          Et(u, e(d).needsTopBorder ? "cursor: pointer; outline: none; pointer-events: all;" : "cursor: pointer; outline: none;");
        });
        me("mouseenter", u, () => ve(e(d)));
        fe("mouseover", u, () => ve(e(d)));
        fe("mousemove", u, () => ve(e(d)));
        me("mouseleave", u, ce);
        fe("click", u, () => de(e(_)));
        me("focus", u, () => ve(e(d)));
        me("blur", u, ce);
        fe("keydown", u, (Se) => oe(Se, e(_)));
        i(K, n);
      });
      i(r, s);
    };
    B(C, (r) => {
      if (e(S)) r(ue);
    });
  }
  var G = b(C);
  {
    var E = (r) => {
      var s = z();
      var x = D(s);
      ye(x, 17, F, we, (K, d) => {
        const R = f(() => e(d).axisIndex);
        const q = f(() => se(e(d), e(R)));
        const _ = f(() => j(e(d)));
        const a = f(() => ae(e(q)));
        const N = f(() => e(a) || e(d).stroke);
        const g = f(() => e(q) ? 2 : 0);
        var n = mr();
        U(() => {
          l(n, "x", e(d).xPos);
          l(n, "y", e(d).topY);
          l(n, "width", e(d).width);
          l(n, "height", e(d).totalHeight);
          l(n, "stroke", e(N));
          l(n, "stroke-width", e(g));
        });
        me("mouseenter", n, () => I(e(d), e(R)));
        fe("mouseover", n, () => I(e(d), e(R)));
        fe("mousemove", n, () => I(e(d), e(R)));
        me("mouseleave", n, V);
        fe("click", n, () => de(e(_)));
        me("focus", n, () => I(e(d), e(R)));
        me("blur", n, V);
        fe("keydown", n, (u) => oe(u, e(_)));
        i(K, n);
      });
      i(r, s);
    };
    B(G, (r) => {
      if (e(P)) r(E);
    });
  }
  i(Y, o);
  xe();
}
it(["mouseover", "mousemove", "click", "keydown"]);

// ../../node_modules/svelte/src/internal/flags/legacy.js
Ut();

// ../../node_modules/lucide-svelte/dist/defaultAttributes.js
var gr = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": 2,
  "stroke-linecap": "round",
  "stroke-linejoin": "round"
};
var fr = gr;

// ../../node_modules/lucide-svelte/dist/Icon.svelte
var hr = M(`<svg><!><!></svg>`);
function je(Y, t) {
  const L = Be(t, ["children", "$$slots", "$$events", "$$legacy"]);
  const W = Be(L, [
    "name",
    "color",
    "size",
    "strokeWidth",
    "absoluteStrokeWidth",
    "iconNode"
  ]);
  pe(t, false);
  let F = O(t, "name", 8, void 0);
  let H = O(t, "color", 8, "currentColor");
  let p = O(t, "size", 8, 24);
  let $ = O(t, "strokeWidth", 8, 2);
  let c = O(t, "absoluteStrokeWidth", 8, false);
  let T = O(t, "iconNode", 24, () => []);
  const le = (...P) => P.filter((Z, X, se) => {
    return Boolean(Z) && se.indexOf(Z) === X;
  }).join(" ");
  Yt();
  var v = hr();
  Mt(
    v,
    (P, Z) => ({
      ...fr,
      ...W,
      width: p(),
      height: p(),
      stroke: H(),
      "stroke-width": P,
      class: Z
    }),
    [
      () => (Re(c()), Re($()), Re(p()), _t(() => c() ? Number($()) * 24 / Number(p()) : $())),
      () => (Re(F()), Re(L), _t(() => le("lucide-icon", "lucide", F() ? `lucide-${F()}` : "", L.class)))
    ]
  );
  var h = A(v);
  ye(h, 1, T, we, (P, Z) => {
    var X = f(() => Ht(e(Z), 2));
    let se = () => e(X)[0];
    let ae = () => e(X)[1];
    var Q = z();
    var j = D(Q);
    Vt(j, se, true, (de, oe) => {
      Mt(de, () => ({ ...ae() }));
    });
    i(P, Q);
  });
  var S = b(h);
  Oe(S, t, "default", {}, null);
  y(v);
  i(Y, v);
  xe();
}

// ../../node_modules/lucide-svelte/dist/icons/move-horizontal.svelte
function vt(Y, t) {
  const L = Be(t, ["children", "$$slots", "$$events", "$$legacy"]);
  const W = [
    ["path", { "d": "m18 8 4 4-4 4" }],
    ["path", { "d": "M2 12h20" }],
    ["path", { "d": "m6 8-4 4 4 4" }]
  ];
  je(Y, xt({ name: "move-horizontal" }, () => L, {
    get iconNode() {
      return W;
    },
    children: (F, H) => {
      var p = z();
      var $ = D(p);
      Oe($, t, "default", {}, null);
      i(F, p);
    },
    $$slots: { default: true }
  }));
}

// ../../node_modules/lucide-svelte/dist/icons/move-vertical.svelte
function et(Y, t) {
  const L = Be(t, ["children", "$$slots", "$$events", "$$legacy"]);
  const W = [
    ["path", { "d": "M12 2v20" }],
    ["path", { "d": "m8 18 4 4 4-4" }],
    ["path", { "d": "m8 6 4-4 4 4" }]
  ];
  je(Y, xt({ name: "move-vertical" }, () => L, {
    get iconNode() {
      return W;
    },
    children: (F, H) => {
      var p = z();
      var $ = D(p);
      Oe($, t, "default", {}, null);
      i(F, p);
    },
    $$slots: { default: true }
  }));
}

// src/charts/_common/Annotations/AnnotationInfoBox.svelte
var $r = nt(`<div class="flex items-center gap-1"><!> <span> </span></div>`);
var vr = nt(`<div class="flex items-center gap-2"><span class="font-semibold"><!></span> <span> </span></div>`);
var Sr = nt(`<div class="flex items-center gap-2"><span class="flex flex-rowfont-semibold"><!> Total:</span> <span> </span></div>`);
var Cr = M(`<foreignObject style="pointer-events: none; overflow: visible;"><div style="white-space: nowrap; width: fit-content;"><div class="flex flex-col gap-1 p-2"><!> <div class="flex items-center gap-2"><span class="font-semibold"><!></span> <span> </span></div> <!> <!></div></div></foreignObject>`);
var yr = {
  hash: "svelte-1xhz9vx",
  code: ".toaster--interactive-textbox-light.svelte-1xhz9vx {background-color:rgba(0, 98, 221, 0.8);border:2px solid #0073ff;color:black;}.toaster--interactive-textbox-dark.svelte-1xhz9vx {background-color:rgba(0, 98, 221, 0.8);border:2px solid #0073ff;color:white;}"
};
function Pr(Y, t) {
  pe(t, true);
  He(Y, yr);
  const L = 15;
  const W = 0.5;
  let F = ne(void 0);
  let H = ne(0);
  let p = ne(0);
  ut(() => {
    if (t.annotationInfo && e(F)) {
      requestAnimationFrame(() => {
        if (e(F)) {
          const h = e(F).getBoundingClientRect();
          J(H, Math.ceil(h.width), true);
          J(p, Math.ceil(h.height), true);
        }
      });
    } else {
      J(H, 0);
      J(p, 0);
    }
  });
  const $ = f(() => t.annotationPosition && t.annotationInfo ? c(t.annotationPosition, e(H), e(p)) : null);
  function c(h, S, P) {
    const Z = h.x / t.width;
    const X = h.y / t.height;
    const se = Z <= W ? "left" : "right";
    const ae = X <= W ? "top" : "bottom";
    const Q = se === "left" ? L : -(S + L);
    const j = ae === "top" ? L : -(P + L);
    return { x: h.x + Q, y: h.y + j };
  }
  var T = z();
  var le = D(T);
  {
    var v = (h) => {
      var S = Cr();
      var P = A(S);
      var Z = A(P);
      var X = A(Z);
      {
        var se = (I) => {
          var V = $r();
          var o = A(V);
          {
            let C = f(() => ({
              label: "",
              color: t.annotationInfo.legendColor,
              type: t.annotationInfo.legendType,
              id: t.annotationInfo.id
            }));
            or(o, {
              get legendsInfo() {
                return e(C);
              }
            });
          }
          var m = b(o, 2);
          var w = A(m, true);
          y(m);
          y(V);
          U(() => Ye(w, t.annotationInfo?.series));
          i(I, V);
        };
        B(X, (I) => {
          if (t.annotationInfo.legendColor && t.annotationInfo.legendType && t.annotationInfo.id) I(se);
        });
      }
      var ae = b(X, 2);
      var Q = A(ae);
      var j = A(Q);
      vt(j, { size: 16 });
      y(Q);
      var de = b(Q, 2);
      var oe = A(de, true);
      y(de);
      y(ae);
      var ee = b(ae, 2);
      {
        var Pe = (I) => {
          var V = vr();
          var o = A(V);
          var m = A(o);
          et(m, { size: 16 });
          y(o);
          var w = b(o, 2);
          var C = A(w, true);
          y(w);
          y(V);
          U(() => Ye(C, t.annotationInfo?.yData));
          i(I, V);
        };
        B(ee, (I) => {
          if (t.annotationInfo?.yData) I(Pe);
        });
      }
      var ve = b(ee, 2);
      {
        var ce = (I) => {
          var V = Sr();
          var o = A(V);
          var m = A(o);
          et(m, { size: 16 });
          qt();
          y(o);
          var w = b(o, 2);
          var C = A(w, true);
          y(w);
          y(V);
          U(() => Ye(C, t.annotationInfo?.ySum));
          i(I, V);
        };
        B(ve, (I) => {
          if (t.annotationInfo?.ySum) I(ce);
        });
      }
      y(Z);
      y(P);
      Nt(P, (I) => J(F, I), () => e(F));
      y(S);
      U(() => {
        l(S, "x", e($).x);
        l(S, "y", e($).y);
        l(S, "width", e(H) || 200);
        l(S, "height", e(p) || 80);
        pt(
          P,
          1,
          `rounded text-sm ${t.options.variant === "dark" ? "toaster--interactive-textbox-dark" : "toaster--interactive-textbox-light"}`,
          "svelte-1xhz9vx"
        );
        Ye(oe, t.annotationInfo?.xDataKey);
      });
      i(h, S);
    };
    B(le, (h) => {
      if (e($) && t.annotationInfo) h(v);
    });
  }
  i(Y, T);
  xe();
}

// src/charts/_common/Annotations/InteractiveSeriesTextAnnotations.svelte
var kr = M(`<line data-testid="callout-line-horizontal"></line>`);
var wr = M(`<line data-testid="callout-line-vertical"></line>`);
var Ar = M(`<circle data-testid="annotation-circle" stroke="none"></circle>`);
var Dr = M(`<!><!><!>`, 1);
var _r = M(`<g><!><g><g><g><!><!></g></g></g></g>`);
var Mr = M(`<g></g>`);
var br = M(`<line data-testid="callout-line-horizontal"></line>`);
var Br = M(`<line data-testid="callout-line-vertical"></line>`);
var Lr = M(`<circle data-testid="annotation-circle" stroke="none"></circle>`);
var Fr = M(`<!><!><!>`, 1);
var Ir = M(`<g><!><g><g><g><!><!></g></g></g></g>`);
var Tr = M(`<g></g>`);
function Lt(Y, t) {
  pe(t, true);
  const L = () => be(T, "$seriesDataLookup", F);
  const W = () => be(le, "$annotationMode", F);
  const [F, H] = qe();
  const p = O(t, "panelIndex", 3, 0), $ = O(t, "type", 3, "line"), c = O(t, "isMobile", 3, false);
  const T = gt();
  const le = ct();
  let v = ne(0);
  const h = f(() => $() === "stackedPanel");
  const S = f(() => $() === "multiples");
  const P = f(() => $() === "dualAxis");
  const Z = ["right", "left"];
  const X = (r) => Z[r] ?? "right";
  const se = f(() => {
    if (e(S) && Array.isArray(t.scales)) {
      return t.scales[p()]?.scales?.primaryScale.scale;
    }
    if (!Array.isArray(t.scales)) {
      const r = t.scales.primaryScale.scale.type;
      const s = ["linear", "band", "time", "timeBand"];
      return s.includes(r) ? t.scales.primaryScale.scale : null;
    }
    return null;
  });
  const ae = f(() => {
    if (e(S) && Array.isArray(t.scales)) {
      const r = t.scales[p()]?.scales?.secondaryScale;
      return r?.scale.type === "linear" ? r.scale : null;
    }
    if ((e(h) || e(P)) && "secondaryScales" in t.scales) {
      const r = t.scales.secondaryScales[p()];
      return r?.scale.type === "linear" ? r.scale : null;
    }
    if ("secondaryScale" in t.scales && t.scales.secondaryScale?.scale.type === "linear") {
      return t.scales.secondaryScale.scale;
    }
    return null;
  });
  const Q = f(() => {
    if (e(S) && Array.isArray(t.scales)) {
      const r = t.scales[p()]?.scales?.colorScale;
      return r ? r.scale : (s) => "#000000";
    }
    if (!Array.isArray(t.scales)) {
      return t.scales.colorScale.scale;
    }
    return (r) => "#000000";
  });
  const j = f(() => t.chartData?.annotations);
  const de = f(() => e(j)?.interactiveTextAnnotations?.map((r) => ({ ...r, xOffset: r?.xOffset ?? 0, yOffset: r?.yOffset ?? 0 })) ?? []);
  const oe = f(() => It(c()));
  const ee = f(() => Ft(t.options.isTerminalClient ?? false));
  const Pe = f(() => Tt(t.chartData));
  const ve = f(() => {
    if (e(h)) {
      return t.chartData?.stackedPanels?.options?.[p()]?.fieldIds ?? [];
    }
    if (e(S)) {
      return t.chartData?.multiples?.options?.[p()]?.fieldIds ?? [];
    }
    if (e(P)) {
      const r = X(p());
      return t.chartData?.dualAxis?.[r]?.fieldIds ?? [];
    }
    return [];
  });
  const ce = f(() => e(h) && "secondaryScales" in t.scales ? t.chartData?.stackedPanels?.options ?? [] : []);
  const I = f(() => e(S) && Array.isArray(t.scales) ? t.chartData?.multiples?.options ?? [] : []);
  const V = f(() => t.chartData && e(h) && "secondaryScales" in t.scales ? ht(t.chartData, t.scales) : []);
  const o = f(() => {
    if (!t.chartData || !e(P)) {
      return null;
    }
    return {
      right: Ue(t.chartData, 0, "right"),
      left: Ue(t.chartData, 0, "left")
    };
  });
  const m = (r) => {
    if (e(h)) {
      return e(ce)[r]?.chartType;
    }
    if (e(S)) {
      return t.chartData?.multiples?.smallMultiplesType ?? "line";
    }
    if (e(P)) {
      const s = X(r);
      return t.chartData?.dualAxis?.[s]?.chartType ?? t.chartData?.type;
    }
    return t.chartData?.type;
  };
  const w = ({
    annotation: r,
    numPanels: s,
    getPanelScales: x,
    getPanelData: K,
    getPanelConfig: d
  }) => {
    const R = [];
    const q = [];
    for (let _ = 0; _ < s; _++) {
      const a = x(_);
      const N = d(_);
      if (!a || !ar(r, _, N)) {
        R.push(null);
        q.push(null);
        continue;
      }
      const g = wt({
        el: r,
        xScale: a.xScale,
        yScale: a.yScale,
        chartData: K(_) ?? t.chartData,
        seriesDataLookup: L(),
        isMobile: c()
      });
      R.push(g?.scaledX ?? null);
      q.push(g?.scaledY ?? null);
    }
    return { xPositions: R, yPositions: q };
  };
  const C = f(() => {
    e(v);
    const r = e(de).map((s) => {
      const x = tr(s, c(), t.width);
      const K = rr(s.text, x, e(ee), `${e(oe)}px`);
      if (e(S) && Array.isArray(t.scales)) {
        const { xPositions: a, yPositions: N } = w({
          annotation: s,
          numPanels: t.scales.length,
          getPanelScales: (g) => {
            const n = t.scales[g]?.scales?.primaryScale.scale;
            const u = t.scales[g]?.scales?.secondaryScale;
            if (!n || !u || u.scale.type !== "linear") return null;
            return { xScale: n, yScale: u.scale };
          },
          getPanelData: (g) => t.scales[g]?.chartData,
          getPanelConfig: (g) => e(I)[g]
        });
        return Qe(s, a, N, x, K, c(), e(Q));
      }
      if (e(h) && "secondaryScales" in t.scales) {
        const { xPositions: a, yPositions: N } = w({
          annotation: s,
          numPanels: t.scales.secondaryScales.length,
          getPanelScales: (g) => {
            const n = t.scales.primaryScale.scale;
            const u = t.scales.secondaryScales[g]?.scale;
            if (!n || !u || u.type !== "linear") return null;
            return { xScale: n, yScale: u };
          },
          getPanelData: (g) => e(V)[g]?.chartData,
          getPanelConfig: (g) => e(ce)[g]
        });
        return Qe(s, a, N, x, K, c(), e(Q));
      }
      if (e(P) && "secondaryScales" in t.scales) {
        const { xPositions: a, yPositions: N } = w({
          annotation: s,
          numPanels: t.scales.secondaryScales.length,
          getPanelScales: (g) => {
            const n = t.scales.primaryScale.scale;
            const u = t.scales.secondaryScales[g]?.scale;
            if (!n || !u || u.type !== "linear") return null;
            return { xScale: n, yScale: u };
          },
          getPanelData: (g) => {
            const n = X(g);
            return e(o)?.[n]?.axisChartData;
          },
          getPanelConfig: (g) => {
            const n = X(g);
            return t.chartData?.dualAxis?.[n] ?? null;
          }
        });
        return Qe(s, a, N, x, K, c(), e(Q));
      }
      const d = e(se) && e(ae);
      const R = s.primaryAnchorPosition !== null && s.secondaryAnchorPosition !== null;
      const q = s.seriesId && !Me(s.primaryAxisPosition);
      if (!d || !R && !q) {
        return null;
      }
      const _ = wt({
        el: s,
        xScale: e(se),
        yScale: e(ae),
        chartData: t.chartData,
        seriesDataLookup: L(),
        isMobile: c()
      });
      if (_?.scaledX === void 0 || _?.scaledY === void 0) {
        return null;
      }
      return Qe(s, _.scaledX, _.scaledY, x, K, c(), e(Q));
    }).filter((s) => !!s);
    return r;
  });
  ut(() => {
    const r = (t.options.isTerminalClient ? "terminal" : "web") + (c() ? "Mobile" : "Desktop");
    window.parent.postMessage(
      {
        type: "annotationPositions",
        annotations: e(C),
        layerId: r
      },
      "*"
    );
  });
  mt(() => {
    if (typeof window !== "undefined") {
      const r = (s) => {
        if (s.data?.type === "loadAnnotationPositions") {
          zt(v);
        }
      };
      window.addEventListener("message", r);
      return () => window.removeEventListener("message", r);
    }
  });
  var ue = z();
  var G = D(ue);
  {
    var E = (r) => {
      var s = z();
      var x = D(s);
      {
        var K = (R) => {
          var q = Mr();
          ye(q, 21, () => e(C), (_) => _.id, (_, a) => {
            const N = f(() => e(a).hideOnMobile && c() || e(a).hideOnDesktop && !c());
            var g = z();
            var n = D(g);
            {
              var u = (ge) => {
                const ke = f(() => p() === e(a).panelIndex);
                const Se = f(() => e(ve).includes(e(a).seriesId ?? ""));
                const Ce = f(() => e(a).pointer ? e(Se) || e(ke) : e(ke));
                const St = f(() => e(h) || e(S) ? e(Ce) : true);
                const tt = f(() => $t(e(a).xPosition, p()));
                const rt = f(() => $t(e(a).yPosition, p()));
                var ze = z();
                var at = D(ze);
                {
                  var Ct = (We) => {
                    const Xe = f(() => e(a).pointer && e(a).seriesId && !Me(e(a).primaryAxisPosition));
                    var Fe = _r();
                    var Ae = A(Fe);
                    {
                      var ot = (he) => {
                        const te = f(() => Object.keys(e(Pe)).length > 0);
                        const $e = f(() => e(te) && !e(Pe)?.barIds?.includes(e(a).seriesId ?? ""));
                        const Te = f(() => bt.includes(m(p()) ?? "") || e($e));
                        var Ge = Dr();
                        var lt = D(Ge);
                        {
                          var st = (k) => {
                            var re = kr();
                            U(() => {
                              l(re, "x1", e(a).horizontalLine.x1);
                              l(re, "y1", e(a).horizontalLine.y1);
                              l(re, "x2", e(a).horizontalLine.x2);
                              l(re, "y2", e(a).horizontalLine.y2);
                            });
                            i(k, re);
                          };
                          B(lt, (k) => {
                            if (e(a).horizontalLine) k(st);
                          });
                        }
                        var dt = b(lt);
                        {
                          var yt = (k) => {
                            var re = wr();
                            U(() => {
                              l(re, "x1", e(a).verticalLine.x1);
                              l(re, "y1", e(a).verticalLine.y1);
                              l(re, "x2", e(a).verticalLine.x2);
                              l(re, "y2", e(a).verticalLine.y2);
                            });
                            i(k, re);
                          };
                          B(dt, (k) => {
                            if (e(a).verticalLine) k(yt);
                          });
                        }
                        var Pt = b(dt);
                        {
                          var ie = (k) => {
                            var re = Ar();
                            l(re, "cx", 0);
                            l(re, "cy", 0);
                            U(() => {
                              l(re, "r", kt);
                              l(re, "fill", e(a).pointColor);
                            });
                            i(k, re);
                          };
                          B(Pt, (k) => {
                            if (e(Te)) k(ie);
                          });
                        }
                        i(he, Ge);
                      };
                      B(Ae, (he) => {
                        if (e(Xe)) he(ot);
                      });
                    }
                    var Ve = b(Ae);
                    var De = A(Ve);
                    var _e = A(De);
                    var Ie = A(_e);
                    {
                      let he = f(() => Ne(e(a).alignment));
                      let te = f(() => `${e(oe)}px`);
                      let $e = f(() => t.options.variant === "dark" ? "#000" : "#fff");
                      Ke(Ie, {
                        get text() {
                          return e(a).text;
                        },
                        get textAnchor() {
                          return e(he);
                        },
                        get verticalAnchor() {
                          return e(a).verticalTextAnchor;
                        },
                        get fontSize() {
                          return e(te);
                        },
                        get fontFamily() {
                          return e(ee);
                        },
                        get width() {
                          return e(a).width;
                        },
                        get growDirection() {
                          return e(a).growDirection;
                        },
                        trimSpace: true,
                        get dx() {
                          return Ee;
                        },
                        get dy() {
                          return Ee;
                        },
                        get stroke() {
                          return e($e);
                        }
                      });
                    }
                    var ft = b(Ie);
                    {
                      let he = f(() => Ne(e(a).alignment));
                      let te = f(() => `${e(oe)}px`);
                      Ke(ft, {
                        get text() {
                          return e(a).text;
                        },
                        get textAnchor() {
                          return e(he);
                        },
                        get verticalAnchor() {
                          return e(a).verticalTextAnchor;
                        },
                        get fontSize() {
                          return e(te);
                        },
                        get fontFamily() {
                          return e(ee);
                        },
                        get width() {
                          return e(a).width;
                        },
                        get growDirection() {
                          return e(a).growDirection;
                        },
                        trimSpace: true
                      });
                    }
                    y(_e);
                    y(De);
                    y(Ve);
                    y(Fe);
                    U(
                      (he, te) => {
                        l(Fe, "transform", `translate(${e(tt)}, ${e(rt)})`);
                        l(Ve, "transform", he);
                        l(De, "transform", `translate(${e(a).textOffsetX}, ${e(a).textOffsetY})`);
                        l(_e, "transform", te);
                      },
                      [
                        () => `translate(${Dt(e(a).width, e(a).alignment)}, -${e(a).lineHeights / 2})`,
                        () => `translate(${At(e(a).alignment, e(a).width)}, 0)`
                      ]
                    );
                    i(We, Fe);
                  };
                  B(at, (We) => {
                    if (e(St)) We(Ct);
                  });
                }
                i(ge, ze);
              };
              B(n, (ge) => {
                if (!e(N)) ge(u);
              });
            }
            i(_, g);
          });
          y(q);
          i(R, q);
        };
        var d = (R) => {
          var q = Tr();
          ye(q, 21, () => e(C), (_) => _.id, (_, a) => {
            const N = f(() => e(a).hideOnMobile && c() || e(a).hideOnDesktop && !c());
            var g = z();
            var n = D(g);
            {
              var u = (ke) => {
                var Se = z();
                var Ce = D(Se);
                ye(Ce, 17, () => e(a).xPosition, we, (St, tt, rt) => {
                  const ze = f(() => $t(e(a).yPosition, rt));
                  var at = z();
                  var Ct = D(at);
                  {
                    var We = (Xe) => {
                      const Fe = f(() => e(a).pointer && e(a).seriesId && !Me(e(a).primaryAxisPosition));
                      var Ae = Ir();
                      var ot = A(Ae);
                      {
                        var Ve = (te) => {
                          const $e = f(() => bt.includes(m(rt) ?? ""));
                          var Te = Fr();
                          var Ge = D(Te);
                          {
                            var lt = (ie) => {
                              var k = br();
                              U(() => {
                                l(k, "x1", e(a).horizontalLine.x1);
                                l(k, "y1", e(a).horizontalLine.y1);
                                l(k, "x2", e(a).horizontalLine.x2);
                                l(k, "y2", e(a).horizontalLine.y2);
                              });
                              i(ie, k);
                            };
                            B(Ge, (ie) => {
                              if (e(a).horizontalLine) ie(lt);
                            });
                          }
                          var st = b(Ge);
                          {
                            var dt = (ie) => {
                              var k = Br();
                              U(() => {
                                l(k, "x1", e(a).verticalLine.x1);
                                l(k, "y1", e(a).verticalLine.y1);
                                l(k, "x2", e(a).verticalLine.x2);
                                l(k, "y2", e(a).verticalLine.y2);
                              });
                              i(ie, k);
                            };
                            B(st, (ie) => {
                              if (e(a).verticalLine) ie(dt);
                            });
                          }
                          var yt = b(st);
                          {
                            var Pt = (ie) => {
                              var k = Lr();
                              l(k, "cx", 0);
                              l(k, "cy", 0);
                              U(() => {
                                l(k, "r", kt);
                                l(k, "fill", e(a).pointColor);
                              });
                              i(ie, k);
                            };
                            B(yt, (ie) => {
                              if (e($e)) ie(Pt);
                            });
                          }
                          i(te, Te);
                        };
                        B(ot, (te) => {
                          if (e(Fe)) te(Ve);
                        });
                      }
                      var De = b(ot);
                      var _e = A(De);
                      var Ie = A(_e);
                      var ft = A(Ie);
                      {
                        let te = f(() => Ne(e(a).alignment));
                        let $e = f(() => `${e(oe)}px`);
                        let Te = f(() => t.options.variant === "dark" ? "#000" : "#fff");
                        Ke(ft, {
                          get text() {
                            return e(a).text;
                          },
                          get textAnchor() {
                            return e(te);
                          },
                          get verticalAnchor() {
                            return e(a).verticalTextAnchor;
                          },
                          get fontSize() {
                            return e($e);
                          },
                          get fontFamily() {
                            return e(ee);
                          },
                          get width() {
                            return e(a).width;
                          },
                          get growDirection() {
                            return e(a).growDirection;
                          },
                          trimSpace: true,
                          get dx() {
                            return Ee;
                          },
                          get dy() {
                            return Ee;
                          },
                          get stroke() {
                            return e(Te);
                          }
                        });
                      }
                      var he = b(ft);
                      {
                        let te = f(() => Ne(e(a).alignment));
                        let $e = f(() => `${e(oe)}px`);
                        Ke(he, {
                          get text() {
                            return e(a).text;
                          },
                          get textAnchor() {
                            return e(te);
                          },
                          get verticalAnchor() {
                            return e(a).verticalTextAnchor;
                          },
                          get fontSize() {
                            return e($e);
                          },
                          get fontFamily() {
                            return e(ee);
                          },
                          get width() {
                            return e(a).width;
                          },
                          get growDirection() {
                            return e(a).growDirection;
                          },
                          trimSpace: true
                        });
                      }
                      y(Ie);
                      y(_e);
                      y(De);
                      y(Ae);
                      U(
                        (te, $e) => {
                          l(Ae, "transform", `translate(${e(tt)}, ${e(ze)})`);
                          l(De, "transform", te);
                          l(_e, "transform", `translate(${e(a).textOffsetX}, ${e(a).textOffsetY})`);
                          l(Ie, "transform", $e);
                        },
                        [
                          () => `translate(${Dt(e(a).width, e(a).alignment)}, -${e(a).lineHeights / 2})`,
                          () => `translate(${At(e(a).alignment, e(a).width)}, 0)`
                        ]
                      );
                      i(Xe, Ae);
                    };
                    B(Ct, (Xe) => {
                      if (e(tt) !== null && e(ze) !== null) Xe(We);
                    });
                  }
                  i(St, at);
                });
                i(ke, Se);
              };
              var ge = f(() => !e(N) && Array.isArray(e(a).xPosition));
              B(n, (ke) => {
                if (e(ge)) ke(u);
              });
            }
            i(_, g);
          });
          y(q);
          i(R, q);
        };
        B(x, (R) => {
          if (!e(P)) R(K);
          else R(d, false);
        });
      }
      i(r, s);
    };
    B(G, (r) => {
      if (W() === "DISABLED" || W() === "PLACING") r(E);
    });
  }
  i(Y, ue);
  xe();
  H();
}

// src/charts/_common/Annotations/AnnotationLayer.svelte
var Rr = M(`<g class="annotation-layer"><!></g>`);
function Or(Y, t) {
  pe(t, true);
  const L = () => be(le, "$seriesDataLookup", W);
  const [W, F] = qe();
  let H = O(t, "scaffoldHeight", 3, 0), p = O(t, "svgLayouts", 19, () => ({ legends: 0, content: [], gap: { row: 0, column: 0 } })), $ = O(t, "panelIndex", 3, 0), c = O(t, "type", 3, "line"), T = O(t, "isMobile", 3, false);
  const le = gt();
  const v = f(() => Rt(t.options.isTerminalClient ?? false, T()));
  const h = f(() => c() === "stackedPanel");
  const S = f(() => c() === "multiples");
  const P = f(() => c() === "dualAxis");
  const Z = f(() => e(h) && "secondaryScales" in t.scales ? t.chartData?.stackedPanels?.options ?? [] : []);
  const X = f(() => e(S) && Array.isArray(t.scales) ? t.chartData?.multiples?.options ?? [] : []);
  const se = f(() => e(h) && "secondaryScales" in t.scales ? ht(t.chartData, t.scales) : []);
  const ae = f(() => e(P) && "secondaryScales" in t.scales ? Object.entries(t.chartData?.dualAxis ?? []).map(([o, m]) => m) ?? [] : []);
  const Q = f(() => [
    Ue(t.chartData, 0, "left"),
    Ue(t.chartData, 0, "right")
  ]);
  const j = f(() => {
    if (e(S) && Array.isArray(t.scales)) {
      return t.scales[$()]?.scales?.primaryScale.scale;
    }
    if (!Array.isArray(t.scales)) {
      const o = t.scales.primaryScale.scale.type;
      const m = ["linear", "band", "time", "timeBand"];
      return m.includes(o) ? t.scales.primaryScale.scale : void 0;
    }
  });
  const de = f(() => {
    if (e(S) && Array.isArray(t.scales)) {
      const o = t.scales[$()]?.scales?.secondaryScale;
      return o?.scale.type === "linear" ? o.scale : void 0;
    }
    if (e(h) && "secondaryScales" in t.scales) {
      const o = t.scales.secondaryScales[$()];
      return o?.scale.type === "linear" ? o.scale : void 0;
    }
    if (e(P) && "secondaryScales" in t.scales) {
      const o = t.scales.secondaryScales[$()];
      return o?.scale.type === "linear" ? o.scale : void 0;
    }
    if ("secondaryScale" in t.scales && t.scales.secondaryScale?.scale.type === "linear") {
      return t.scales.secondaryScale.scale;
    }
    return void 0;
  });
  const oe = ({
    data: o,
    numPanels: m,
    getPanelYScale: w,
    getPanelChartData: C,
    panelOptions: ue
  }) => {
    const G = [];
    const E = [];
    if (!e(j) || !L()) return { scaledXs: G, scaledYs: E };
    for (let r = 0; r < m; r++) {
      const s = w(r);
      if (!s || !Ze(ue, r, o.seriesId)) {
        G.push(null);
        E.push(null);
        continue;
      }
      const x = Bt({
        seriesId: o.seriesId,
        primaryAxisPosition: o.primaryAxisPosition,
        primaryScale: e(j),
        secondaryScale: s,
        chartData: C(r),
        seriesDataLookup: L()
      });
      G.push(x?.x ?? null);
      E.push(x?.y ?? null);
    }
    return { scaledXs: G, scaledYs: E };
  };
  const ee = ({ seriesNotInPanel: o, scaledXs: m, scaledYs: w, data: C }) => {
    if (o) {
      return {
        offsets: { xOffset: 0, yOffset: -20 },
        positions: { xPosition: m, yPosition: w },
        alignment: "center"
      };
    }
    return {
      offsets: { xOffset: C.currentXOffset, yOffset: C.currentYOffset },
      positions: {
        xPosition: C.currentXPosition,
        yPosition: C.currentYPosition
      }
    };
  };
  const Pe = (o) => {
    if (!e(j)?.scale?.invert || !o.anchorX || !o.anchorY || !o.annotationId || e(v) !== o.layerId) {
      return;
    }
    if (o.toPanelIndex !== void 0 && "secondaryScales" in t.scales) {
      const ue = t.scales.secondaryScales?.[o.toPanelIndex]?.scale;
      if (!ue?.scale?.invert) return;
      const G = e(j).scale.invert(o.anchorX);
      const E = ue.scale.invert(o.anchorY);
      er(o.annotationId, o.toPanelIndex, G, E, e(v));
      return;
    }
    if (!Zt(c(), o.panelIndex, $())) return;
    const m = Qt(t.scales, c(), e(de), o.panelIndex);
    if (!m?.scale?.invert) return;
    const w = e(j).scale.invert(o.anchorX);
    const C = m.scale.invert(o.anchorY);
    jt(o.annotationId, w, C, e(v));
  };
  const ve = (o) => {
    if (!e(j) || !L() || !o.annotationId) return;
    if (!o.seriesId || o.primaryAxisPosition === void 0 || e(v) !== o.layerId) return;
    if (e(S) && Array.isArray(t.scales)) {
      const { scaledXs: w, scaledYs: C } = oe({
        data: o,
        numPanels: t.scales.length,
        getPanelYScale: (s) => {
          const x = t.scales[s]?.scales?.secondaryScale;
          return x?.scale.type === "linear" ? x.scale : null;
        },
        getPanelChartData: (s) => t.scales[s].chartData,
        panelOptions: e(X)
      });
      const ue = o.panelIndex === void 0 || !Ze(e(X), o.panelIndex, o.seriesId);
      const { offsets: G, positions: E, alignment: r } = ee({ seriesNotInPanel: ue, scaledXs: w, scaledYs: C, data: o });
      Je(
        {
          annotationId: o.annotationId,
          scaledX: w,
          scaledY: C,
          seriesId: o.seriesId,
          primaryAxisPosition: o.primaryAxisPosition,
          currentXPosition: E.xPosition,
          currentYPosition: E.yPosition,
          currentXOffset: G.xOffset,
          currentYOffset: G.yOffset,
          alignment: r
        },
        e(v)
      );
      return;
    }
    if (e(h) && "secondaryScales" in t.scales) {
      const { scaledXs: w, scaledYs: C } = oe({
        data: o,
        numPanels: t.scales.secondaryScales.length,
        getPanelYScale: (s) => {
          const x = t.scales.secondaryScales[s]?.scale;
          return x?.type === "linear" ? x : null;
        },
        getPanelChartData: (s) => e(se)[s]?.chartData ?? t.chartData,
        panelOptions: e(Z)
      });
      const ue = o.panelIndex === void 0 || !Ze(e(se), o.panelIndex, o.seriesId);
      const { offsets: G, positions: E, alignment: r } = ee({ seriesNotInPanel: ue, scaledXs: w, scaledYs: C, data: o });
      Je(
        {
          annotationId: o.annotationId,
          scaledX: w,
          scaledY: C,
          seriesId: o.seriesId,
          primaryAxisPosition: o.primaryAxisPosition,
          currentXPosition: E.xPosition,
          currentYPosition: E.yPosition,
          currentXOffset: G.xOffset,
          currentYOffset: G.yOffset,
          alignment: r
        },
        e(v)
      );
      return;
    }
    if (e(P) && "secondaryScales" in t.scales) {
      const { scaledXs: w, scaledYs: C } = oe({
        data: o,
        numPanels: t.scales.secondaryScales.length,
        getPanelYScale: (s) => {
          const x = t.scales.secondaryScales[s]?.scale;
          return x?.type === "linear" ? x : null;
        },
        getPanelChartData: (s) => {
          return e(Q)[s].axisChartData;
        },
        panelOptions: e(ae)
      });
      const ue = o.panelIndex === void 0 || !Ze(e(ae), o.panelIndex, o.seriesId);
      const { offsets: G, positions: E, alignment: r } = ee({ seriesNotInPanel: ue, scaledXs: w, scaledYs: C, data: o });
      Je(
        {
          annotationId: o.annotationId,
          scaledX: w,
          scaledY: C,
          seriesId: o.seriesId,
          primaryAxisPosition: o.primaryAxisPosition,
          currentXPosition: E.xPosition,
          currentYPosition: E.yPosition,
          currentXOffset: G.xOffset,
          currentYOffset: G.yOffset,
          alignment: r
        },
        e(v)
      );
      return;
    }
    if (!e(de)) return;
    const m = Bt({
      seriesId: o.seriesId,
      primaryAxisPosition: o.primaryAxisPosition,
      primaryScale: e(j),
      secondaryScale: e(de),
      chartData: t.chartData,
      seriesDataLookup: L()
    });
    if (m?.x !== void 0 && m?.y !== void 0) {
      Je(
        {
          annotationId: o.annotationId,
          scaledX: m.x,
          scaledY: m.y,
          seriesId: o.seriesId,
          primaryAxisPosition: o.primaryAxisPosition,
          currentXPosition: o.currentXPosition,
          currentYPosition: o.currentYPosition,
          currentXOffset: o.currentXOffset,
          currentYOffset: o.currentYOffset
        },
        e(v)
      );
    }
  };
  const ce = (o) => {
    const m = o.data;
    if (!m?.type) return;
    switch (m.type) {
      case "checkAnnotationLayerReady":
        if (typeof window !== "undefined") {
          window.parent.postMessage({ type: "annotationLayerReady", layerId: e(v) }, "*");
        }
        break;
      case // Convert screen coordinates to data space coordinates
      "convertCoordinates":
        if (m.annotationId && m.anchorX && m.anchorY) {
          Pe(m);
        }
        break;
      case // Calculate anchor point for pointer annotations attached to series
      "calculateAnchorPoint":
        if (m.annotationId && m.seriesId && m.primaryAxisPosition !== void 0) {
          ve(m);
        }
        break;
      case // Send current layout information back to app layer
      "loadChartLayout":
        if (t.scales) {
          window.parent.postMessage(
            {
              type: "chartLayoutUpdate",
              scaffoldHeight: H(),
              svgs: p(),
              layerId: e(v)
            },
            "*"
          );
        }
        break;
      default:
        break;
    }
  };
  mt(() => {
    if (typeof window !== "undefined") {
      window.parent.postMessage({ type: "annotationLayerReady", layerId: e(v) }, "*");
      window.addEventListener("message", ce);
    }
    return () => {
      if (typeof window !== "undefined") {
        window.removeEventListener("message", ce);
      }
    };
  });
  var I = Rr();
  var V = A(I);
  Lt(V, {
    get scales() {
      return t.scales;
    },
    get chartData() {
      return t.chartData;
    },
    get options() {
      return t.options;
    },
    get width() {
      return t.width;
    },
    get panelIndex() {
      return $();
    },
    get type() {
      return c();
    },
    get isMobile() {
      return T();
    }
  });
  y(I);
  i(Y, I);
  xe();
  F();
}

export {
  dr as a,
  cr as b,
  Pr as c,
  Or as d
};
/*! Bundled license information:

lucide-svelte/dist/defaultAttributes.js:
  (**
   * @license lucide-svelte v0.546.0 - ISC
   *
   * ISC License
   * 
   * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
   * 
   * Permission to use, copy, modify, and/or distribute this software for any
   * purpose with or without fee is hereby granted, provided that the above
   * copyright notice and this permission notice appear in all copies.
   * 
   * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
   * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
   * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
   * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
   * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
   * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
   * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
   * 
   * ---
   * 
   * The MIT License (MIT) (for portions derived from Feather)
   * 
   * Copyright (c) 2013-2023 Cole Bemis
   * 
   * Permission is hereby granted, free of charge, to any person obtaining a copy
   * of this software and associated documentation files (the "Software"), to deal
   * in the Software without restriction, including without limitation the rights
   * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
   * copies of the Software, and to permit persons to whom the Software is
   * furnished to do so, subject to the following conditions:
   * 
   * The above copyright notice and this permission notice shall be included in all
   * copies or substantial portions of the Software.
   * 
   * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
   * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
   * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
   * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
   * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
   * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
   * SOFTWARE.
   * 
   *)

lucide-svelte/dist/icons/move-horizontal.svelte:
  (**
   * @license lucide-svelte v0.546.0 - ISC
   *
   * ISC License
   *
   * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
   *
   * Permission to use, copy, modify, and/or distribute this software for any
   * purpose with or without fee is hereby granted, provided that the above
   * copyright notice and this permission notice appear in all copies.
   *
   * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
   * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
   * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
   * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
   * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
   * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
   * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
   *
   * ---
   *
   * The MIT License (MIT) (for portions derived from Feather)
   *
   * Copyright (c) 2013-2023 Cole Bemis
   *
   * Permission is hereby granted, free of charge, to any person obtaining a copy
   * of this software and associated documentation files (the "Software"), to deal
   * in the Software without restriction, including without limitation the rights
   * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
   * copies of the Software, and to permit persons to whom the Software is
   * furnished to do so, subject to the following conditions:
   *
   * The above copyright notice and this permission notice shall be included in all
   * copies or substantial portions of the Software.
   *
   * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
   * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
   * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
   * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
   * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
   * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
   * SOFTWARE.
   *
   *)

lucide-svelte/dist/icons/move-vertical.svelte:
  (**
   * @license lucide-svelte v0.546.0 - ISC
   *
   * ISC License
   *
   * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
   *
   * Permission to use, copy, modify, and/or distribute this software for any
   * purpose with or without fee is hereby granted, provided that the above
   * copyright notice and this permission notice appear in all copies.
   *
   * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
   * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
   * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
   * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
   * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
   * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
   * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
   *
   * ---
   *
   * The MIT License (MIT) (for portions derived from Feather)
   *
   * Copyright (c) 2013-2023 Cole Bemis
   *
   * Permission is hereby granted, free of charge, to any person obtaining a copy
   * of this software and associated documentation files (the "Software"), to deal
   * in the Software without restriction, including without limitation the rights
   * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
   * copies of the Software, and to permit persons to whom the Software is
   * furnished to do so, subject to the following conditions:
   *
   * The above copyright notice and this permission notice shall be included in all
   * copies or substantial portions of the Software.
   *
   * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
   * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
   * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
   * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
   * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
   * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
   * SOFTWARE.
   *
   *)

lucide-svelte/dist/icons/index.js:
  (**
   * @license lucide-svelte v0.546.0 - ISC
   *
   * ISC License
   * 
   * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
   * 
   * Permission to use, copy, modify, and/or distribute this software for any
   * purpose with or without fee is hereby granted, provided that the above
   * copyright notice and this permission notice appear in all copies.
   * 
   * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
   * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
   * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
   * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
   * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
   * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
   * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
   * 
   * ---
   * 
   * The MIT License (MIT) (for portions derived from Feather)
   * 
   * Copyright (c) 2013-2023 Cole Bemis
   * 
   * Permission is hereby granted, free of charge, to any person obtaining a copy
   * of this software and associated documentation files (the "Software"), to deal
   * in the Software without restriction, including without limitation the rights
   * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
   * copies of the Software, and to permit persons to whom the Software is
   * furnished to do so, subject to the following conditions:
   * 
   * The above copyright notice and this permission notice shall be included in all
   * copies or substantial portions of the Software.
   * 
   * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
   * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
   * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
   * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
   * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
   * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
   * SOFTWARE.
   * 
   *)
*/
//# sourceMappingURL=chunk-TU74YKFK.js.map
