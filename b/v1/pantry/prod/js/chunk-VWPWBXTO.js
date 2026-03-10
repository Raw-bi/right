import {
  a as yt,
  b as _t
} from "./chunk-CHAHEBOK.js";
import {
  $d as m,
  Ae as R,
  Be as k,
  Ee as at,
  Ge as D,
  Jd as Mt,
  Ld as c,
  Me as A,
  Od as V,
  Pd as q,
  Qd as tt,
  Rd as et,
  Sd as p,
  Td as Y,
  Ud as K,
  Wd as At,
  Xd as f,
  Yd as Pt,
  Zd as y,
  _d as st,
  ae as t,
  ca as Bt,
  ge as s,
  he as ot,
  je as Tt,
  ke as a,
  le as z,
  o as wt,
  oe as Zt,
  pe as It,
  re as b,
  s as kt,
  xe as W,
  ye as Nt,
  ze as it
} from "./chunk-K3YJBOOZ.js";

// src/utils/context.ts
var Ne = () => {
  let d = D(null);
  q("tooltipPosition", d);
};
var Ce = () => V("tooltipPosition");
var ze = () => {
  let d = D(null);
  q("annotationPosition", d);
};
var Le = () => V("annotationPosition");
var De = () => {
  const { subscribe: d, set: r, update: v } = D("DISABLED");
  const g = {
    subscribe: d,
    set: (h, x = true) => {
      r(h);
      if (x) {
        window.postMessage({ type: "annotationMode", mode: h }, "*");
      }
    },
    update: (h) => {
      v((x) => {
        const n = h(x);
        window.postMessage({ type: "annotationMode", mode: n }, "*");
        return n;
      });
    }
  };
  q("annotationMode", g);
};
var Ct = () => V("annotationMode");
var Ge = () => {
  let d = D({});
  q("seriesDataLookup", d);
};
var Fe = () => V("seriesDataLookup");

// src/charts/_common/BBGLogo/BILogo.svelte
var Rt = ot(`<svg id="Layer_1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 138.84 38.59" class="mt-2"><defs><filter id="invertFilter"><feColorMatrix type="matrix" values="-1 0 0 0 1
                                          0 -1 0 0 1
                                          0 0 -1 0 1
                                          0 0 0 1 0"></feColorMatrix></filter></defs><g><circle fill="currentColor" stroke="none" cx="121.6" cy="17.24" r="17.24"></circle><g filter="url(#invertFilter)"><path d="M121.24,20.46c0,1.3-.41,2.28-1.22,2.93s-1.94.98-3.39.98h-3.67v-13.6h3.3c1.48,0,2.58.25,3.32.73.74.49,1.11,1.28,1.11,2.36,0,.73-.25,1.38-.76,1.95-.51.57-1.07.98-1.69,1.21.83.19,1.54.59,2.12,1.19s.87,1.34.87,2.24ZM118.92,14.03c0-.7-.22-1.19-.66-1.45-.44-.27-1.13-.4-2.08-.4h-1.49v4.37h1.2c.97,0,1.72-.2,2.24-.59.52-.39.78-1.03.78-1.93ZM119.48,20.52c0-.86-.27-1.51-.81-1.95s-1.4-.66-2.6-.66h-1.37v5.07h1.43c1.11,0,1.94-.19,2.51-.56.56-.37.84-1.01.84-1.9Z" fill="currentColor" stroke="none"></path><path d="M123.93,24.38v-1.36h2.27v-10.87h-2.27v-1.36h6.24v1.36h-2.25v10.87h2.25v1.36h-6.24Z" fill="currentColor" stroke="none"></path></g></g><g><g><path fill="currentColor" stroke="none" d="M0,20.69h2.38v13.36H0v-13.36Z"></path><path fill="currentColor" stroke="none" d="M4.34,24.99h2.15v1.45h.04c.42-.91,1.27-1.68,2.77-1.68,2.44,0,3.3,1.72,3.3,3.57v5.72h-2.27v-4.59c0-1-.08-2.66-1.66-2.66-1.49,0-2.08,1.09-2.08,2.3v4.95h-2.27v-9.06Z"></path><path fill="currentColor" stroke="none" d="M13.74,26.92v-1.93h1.87v-2.62h2.27v2.62h2.49v1.93h-2.49v3.96c0,.91.26,1.47,1.27,1.47.4,0,.94-.08,1.23-.28v1.91c-.47.23-1.26.3-1.79.3-2.4,0-2.96-1.08-2.96-3.21v-4.15h-1.87Z"></path><path fill="currentColor" stroke="none" d="M23.63,30.32c.15,1.34,1.17,2.15,2.43,2.15,1.13,0,1.87-.53,2.44-1.23l1.62,1.23c-1.06,1.3-2.4,1.81-3.83,1.81-2.74,0-4.93-1.91-4.93-4.76s2.19-4.76,4.93-4.76c2.53,0,4.25,1.77,4.25,4.93v.62h-6.91ZM28.27,28.62c-.02-1.32-.89-2.15-2.3-2.15-1.34,0-2.17.85-2.34,2.15h4.64Z"></path><path fill="currentColor" stroke="none" d="M31.93,19.78h2.27v14.27h-2.27v-14.27Z"></path><path fill="currentColor" stroke="none" d="M36.09,19.78h2.27v14.27h-2.27v-14.27Z"></path><path fill="currentColor" stroke="none" d="M41.73,20.56c.83,0,1.47.59,1.47,1.36s-.64,1.36-1.47,1.36-1.43-.64-1.43-1.36.6-1.36,1.43-1.36ZM40.62,24.99h2.27v9.06h-2.27v-9.06Z"></path><path fill="currentColor" stroke="none" d="M54.43,24.99v8.25c0,3.27-1.59,5.34-5.12,5.34-1.68,0-3.21-.36-4.49-1.49l1.36-1.85c.91.83,1.85,1.3,3.11,1.3,2.19,0,2.87-1.25,2.87-3.04v-.66h-.04c-.66.89-1.83,1.32-2.96,1.32-2.72,0-4.51-2.08-4.51-4.64s1.68-4.76,4.47-4.76c1.26,0,2.45.49,3.11,1.59h.04v-1.36h2.15ZM46.92,29.51c0,1.43,1.13,2.62,2.66,2.62,1.68,0,2.7-1.15,2.7-2.66s-1.04-2.66-2.68-2.66-2.68,1.09-2.68,2.7Z"></path><path fill="currentColor" stroke="none" d="M58.06,30.32c.15,1.34,1.17,2.15,2.44,2.15,1.13,0,1.87-.53,2.44-1.23l1.62,1.23c-1.06,1.3-2.4,1.81-3.83,1.81-2.74,0-4.93-1.91-4.93-4.76s2.19-4.76,4.93-4.76c2.53,0,4.25,1.77,4.25,4.93v.62h-6.91ZM62.7,28.62c-.02-1.32-.89-2.15-2.3-2.15-1.34,0-2.17.85-2.34,2.15h4.64Z"></path><path fill="currentColor" stroke="none" d="M66.33,24.99h2.15v1.45h.04c.42-.91,1.26-1.68,2.77-1.68,2.44,0,3.3,1.72,3.3,3.57v5.72h-2.27v-4.59c0-1-.08-2.66-1.66-2.66-1.49,0-2.08,1.09-2.08,2.3v4.95h-2.27v-9.06Z"></path><path fill="currentColor" stroke="none" d="M82.6,27.71c-.53-.55-1.11-.91-1.72-.91-1.66,0-2.66,1.3-2.66,2.72s1,2.72,2.66,2.72c.7,0,1.34-.3,1.76-.85l1.51,1.62c-.92.92-2.47,1.26-3.27,1.26-2.74,0-4.93-1.91-4.93-4.76s2.19-4.76,4.93-4.76c1.15,0,2.42.42,3.28,1.38l-1.57,1.57Z"></path><path fill="currentColor" stroke="none" d="M86.94,30.32c.15,1.34,1.17,2.15,2.44,2.15,1.13,0,1.87-.53,2.44-1.23l1.62,1.23c-1.06,1.3-2.4,1.81-3.83,1.81-2.74,0-4.93-1.91-4.93-4.76s2.19-4.76,4.93-4.76c2.53,0,4.25,1.77,4.25,4.93v.62h-6.91ZM91.59,28.62c-.02-1.32-.89-2.15-2.3-2.15-1.34,0-2.17.85-2.34,2.15h4.64Z"></path></g><g><path fill="currentColor" stroke="none" d="M85.38,14.07c1.13,0,2.31-.43,2.97-1.32h.04v.66c0,1.8-.68,3.04-2.87,3.04-1.27,0-2.21-.47-3.12-1.3l-1.36,1.85c1.29,1.13,2.82,1.49,4.5,1.49,3.53,0,5.12-2.08,5.12-5.35V4.88h-2.16v1.36h-.04c-.66-1.1-1.85-1.59-3.12-1.59-2.8,0-4.48,2.08-4.48,4.76s1.8,4.65,4.52,4.65ZM85.82,6.7c1.64,0,2.68,1.1,2.68,2.67s-1.02,2.67-2.7,2.67c-1.53,0-2.67-1.19-2.67-2.63,0-1.61,1.1-2.7,2.68-2.7Z"></path><path fill="currentColor" stroke="none" d="M20.16,14.18c2.74,0,4.93-1.91,4.93-4.76s-2.19-4.76-4.93-4.76-4.93,1.91-4.93,4.76,2.19,4.76,4.93,4.76ZM20.16,6.7c1.66,0,2.67,1.3,2.67,2.72s-1,2.72-2.67,2.72-2.67-1.3-2.67-2.72,1-2.72,2.67-2.72Z"></path><path fill="currentColor" stroke="none" d="M7,6.91v-.04c1.38-.42,2.32-1.42,2.32-2.93,0-2.44-2.08-3.36-4.1-3.36H0v13.38h4.82c2.53,0,5.07-.91,5.07-3.82,0-1.72-1.21-3.04-2.89-3.23ZM2.38,2.61h1.97c1.8,0,2.59.57,2.59,1.72,0,1-.79,1.68-2.38,1.68h-2.17v-3.4ZM4.58,11.91h-2.19v-3.86h2.29c1.93,0,2.83.49,2.83,1.89,0,1.76-1.7,1.97-2.93,1.97Z"></path><rect fill="currentColor" stroke="none" x="11.42" y=".26" width="2.29" height="13.7"></rect><path fill="currentColor" stroke="none" d="M39.64,9c0-1.21.59-2.31,2.08-2.31,1.1,0,1.55.74,1.55,1.85v5.41h2.27v-4.92c0-1.17.53-2.34,1.95-2.34,1.34,0,1.68.98,1.68,2.12v5.14h2.27v-5.41c0-2.17-.85-3.89-3.27-3.89-1.36,0-2.32.53-2.99,1.68-.47-1.13-1.44-1.68-2.84-1.68-1.51,0-2.38.79-2.78,1.64h-.04v-1.42h-2.15v9.07h2.27v-4.95Z"></path><path fill="currentColor" stroke="none" d="M69.02,4.66c-2.74,0-4.93,1.91-4.93,4.76s2.19,4.76,4.93,4.76c1.44,0,2.78-.51,3.84-1.82l-1.63-1.23c-.57.7-1.3,1.23-2.44,1.23-1.27,0-2.29-.81-2.44-2.15h6.92v-.62c0-3.16-1.72-4.93-4.25-4.93ZM66.36,8.51c.17-1.3,1-2.16,2.34-2.16,1.42,0,2.29.83,2.31,2.16h-4.65Z"></path><path fill="currentColor" stroke="none" d="M58.68,4.66c-1.7,0-2.61.79-3.08,1.38h-.06V.26h-2.27v13.7h2.15v-1.36h.04c.66,1.1,1.85,1.59,3.12,1.59,2.8,0,4.48-2.08,4.48-4.76s-1.8-4.76-4.38-4.76ZM58.13,12.14c-1.66,0-2.67-1.3-2.67-2.72s1-2.72,2.67-2.72,2.67,1.3,2.67,2.72-1,2.72-2.67,2.72Z"></path><path fill="currentColor" stroke="none" d="M31.05,14.18c2.74,0,4.93-1.91,4.93-4.76s-2.19-4.76-4.93-4.76-4.93,1.91-4.93,4.76,2.19,4.76,4.93,4.76ZM31.05,6.7c1.66,0,2.67,1.3,2.67,2.72s-1,2.72-2.67,2.72-2.67-1.3-2.67-2.72,1-2.72,2.67-2.72Z"></path><path fill="currentColor" stroke="none" d="M77.02,9.1c0-.49.3-2.29,2.44-2.29.36,0,.72.08,1.1.17v-2.19c-.26-.07-.53-.13-.81-.13-1.19,0-2.19.62-2.68,1.66h-.04v-1.44h-2.27v9.07h2.27v-4.86Z"></path></g></g></svg>`);
function lt(d, r) {
  const v = A(r, "height", 3, 30);
  var g = Rt();
  m(() => k(g, "height", v()));
  a(d, g);
}

// src/charts/_common/BBGLogo/BBGLogo.svelte
var St = s(`<span>BloombergNEF</span>`);
var Ut = s(`<span>Bloomberg <span class="opinion svelte-x3d2up">Opinion</span></span>`);
var Et = s(`<span>Bloomberg Tax</span>`);
var Ot = s(`<span>Bloomberg Government</span>`);
var jt = s(`<span>Bloomberg Law</span>`);
var Vt = s(`<span>Bloomberg Economics</span>`);
var qt = s(`<span>Bloomberg</span>`);
var Yt = s(`<div class="logo svelte-x3d2up" data-testid="logo"><!></div>`);
var Kt = {
  hash: "svelte-x3d2up",
  code: ".logo.svelte-x3d2up {text-align:right;font-size:14px;font-weight:600;font-family:'AvenirNextMForBBG', sans-serif;user-select:none;white-space:pre;flex-shrink:0;}.opinion.svelte-x3d2up {color:#0068ff;}"
};
function ct(d, r) {
  W(d, Kt);
  const v = A(r, "contentDestination", 3, "business"), g = A(r, "isTerminal", 3, false);
  var h = Yt();
  let x;
  var n = f(h);
  {
    var $ = (e) => {
      var i = St();
      a(e, i);
    };
    var _ = (e) => {
      var i = Ut();
      a(e, i);
    };
    var I = (e) => {
      lt(e, {});
    };
    var L = (e) => {
      var i = Et();
      a(e, i);
    };
    var N = (e) => {
      var i = Ot();
      a(e, i);
    };
    var S = (e) => {
      var i = jt();
      a(e, i);
    };
    var T = (e) => {
      var i = Vt();
      a(e, i);
    };
    var Z = (e) => {
      var i = qt();
      a(e, i);
    };
    b(n, (e) => {
      if (v() === "BNEF") e($);
      else if (v() === "Opinion") e(_, 1);
      else if (v() === "BI") e(I, 2);
      else if (v() === "INDG Tax") e(L, 3);
      else if (v() === "INDG Government") e(N, 4);
      else if (v() === "INDG Law") e(S, 5);
      else if (v() === "BECO") e(T, 6);
      else e(Z, false);
    });
  }
  c(h);
  m(() => x = R(h, "", x, { "margin-right": g() ? 2 : 0 }));
  a(d, h);
}

// src/charts/_common/Icons/Popout.svelte
var Jt = ot(`<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.2" baseProfile="tiny" id="Layer_1" x="0px" y="0px" viewBox="0 0 12 17" xml:space="preserve" alt="popout"><g id="icons"><polyline fill="none" stroke-width="2" stroke-miterlimit="10" points="5,3 1,3 1,13 11,13 11,9"></polyline><polygon points="12,7 12,2 7,2"></polygon><line fill="none" stroke-width="2" stroke-miterlimit="10" x1="9.9" y1="4.1" x2="5" y2="9"></line></g></svg>`);
function ft(d, r) {
  const v = p(() => r.height);
  var g = Jt();
  var h = f(g);
  var x = f(h);
  var n = y(x);
  var $ = y(n);
  c(h);
  c(g);
  m(() => {
    k(g, "width", t(v));
    k(g, "height", r.height);
    k(x, "stroke", r.color);
    k(n, "fill", r.color);
    k($, "stroke", r.color);
  });
  a(d, g);
}

// src/charts/_common/TerminalButtons/FunctionLink.svelte
var Qt = s(`<span class="terminal-button-icon"><!></span>`);
var Xt = s(`<a class="terminal-button svelte-1ft0sq4"><!> <span class="terminal-button-text"> </span></a>`);
var te = {
  hash: "svelte-1ft0sq4",
  code: ".terminal-button.svelte-1ft0sq4 {width:fit-content;padding:5px;display:flex;justify-content:center;align-items:center;column-gap:4px;cursor:pointer;color:var(--function-link-color);font-size:14px;line-height:var(--function-link-height);text-align:center;background-color:#222222;transition:background-color 0.2s ease;&:hover {background-color:#333333;border-radius:4px;}}"
};
function dt(d, r) {
  tt(r, true);
  W(d, te);
  const v = 18;
  const g = "#f0f0f0";
  const h = "toaster-function-link";
  const { text: x, title: n, icon: $ } = yt[h];
  var _ = Xt();
  R(_, "--function-link-color:#f0f0f0;--function-link-height:18px");
  var I = f(_);
  {
    var L = (T) => {
      var Z = Tt();
      var e = Pt(Z);
      {
        var i = (U) => {
          var E = Qt();
          var C = f(E);
          ft(C, { height: v, color: g });
          c(E);
          a(U, E);
        };
        b(e, (U) => {
          if ($ === "popout") U(i);
        });
      }
      a(T, Z);
    };
    b(I, (T) => {
      if ($) T(L);
    });
  }
  var N = y(I, 2);
  var S = f(N, true);
  c(N);
  c(_);
  m(
    (T, Z, e) => {
      k(_, "title", n);
      k(_, "href", T);
      k(_, "data-link", Z);
      z(S, e);
    },
    [
      () => `bbg://screens/${encodeURI(r.functionLink)}`,
      () => _t({ buttonType: h, avmmId: r.avmmId, origin: r.origin }),
      () => x(r.functionLink)
    ]
  );
  a(d, _);
  et();
}

// src/charts/table/stores.svelte.ts
var zt = At({ value: [] });

// src/charts/_common/Scaffold.svelte
var ee = s(`<h1> </h1>`);
var oe = s(`<h2 class="svelte-avy0nc"> </h2>`);
var ae = s(`<header class="toaster--header svelte-avy0nc"><!> <!></header>`);
var re = s(`<div class="toaster--x-axis-label svelte-avy0nc"> </div>`);
var ne = s(`<p class="footnote svelte-avy0nc" data-testid="footnote"> </p>`);
var se = s(`<p class="source svelte-avy0nc" data-testid="source"><span> </span></p>`);
var ie = s(`<div class="logo-container svelte-avy0nc"><!></div>`);
var le = s(`<footer class="toaster--footer svelte-avy0nc"><!> <!> <!></footer>`);
var ce = s(`<div class="terminal-buttons svelte-avy0nc"><!></div>`);
var fe = s(`<figure data-testid="toaster--figure"><!> <!> <!> <!> <!></figure>`);
var de = {
  hash: "svelte-avy0nc",
  code: ".toaster-chart {\n  /* VARIABLES */\n  /* title (header) */--toas-header-font-weight: 700;--toas-header-font-size: 18px;--toas-header-line-height: 22px;--toas-header-bottom-margin: 12px;--toas-header-font-size-mobile: 16px;--toas-header-line-height-mobile: 20px;\n  /* subheader (subtitle) */--toas-subheader-font-weight: 400;--toas-subheader-font-size: 17px;--toas-subheader-line-height: 21px;--toas-subheader-font-size-mobile: 14px;--toas-subheader-line-height-mobile: 18px;\n  /* footer */--toas-footer-margin-top: 12px;--toas-footer-font-size: 13px;\n  /* x-axis-label (below the axis) */--toas-x-axis-label-font-size: 13px;--toas-x-axis-label-line-height: 16px;--toas-x-axis-label-margin-top: 7px;\n  /* legends */--toas-legends-column-gap: 14px;--toas-legends-row-gap: 2px;--toas-legends-item-height: 16px;--toas-legends-font-size: 14px;--toas-legends-icon-text-spacing: 7px;--toas-legends-box-icon-size: 10px;--toas-legends-line-icon-length: 14px;--toas-legends-line-icon-width: 2.5px;\n  /* tooltips */--toas-tooltip-padding: 8px;--toas-tooltip-font-size: 14px;--toas-tooltip-font-size-mobile: 12px;--toas-tooltip-min-width: 85px;--toas-tooltip-units-margin-top: 2px;--toas-tooltip-units-line-height: 14px;--toas-tooltip-primary-key-padding-bottom: 2px;color:black !important;background-color:white;stroke:black;fill:black;\n  /* fonts */--toas-font-family: 'BWHaasDingbat', 'BWHaasText', sans-serif;}.toaster-is-terminal {--toas-font-family: 'Bloomberg-PropU_N', 'BB.Proportional', sans-serif;--toas-header-font-family:\n    'Bloomberg-PropU_N-Bold', 'BB.Proportional', sans-serif;}.toaster-variant-dark {color:white !important;fill:white;stroke:white;}.toaster-variant-dark:not(.toaster-transparent-bg) {background-color:black;}.toaster-transparent-bg {background-color:transparent !important;}svg {overflow:hidden !important;}\n\n/* Fallback color palettes (TODO: figure out a better way to do this) */.toaster-chart.toaster-variant-light.toaster-is-terminal {--toas-color-primary: #fff;--toas-color-accent: #bebebe;--toas-color-background: #000;--toas-color-axis: #d8d8d8;--toas-color-zeroAxis: #d8d8d8;--toas-color-grid: #555;--toas-color-label: #d8d8d8;--toas-color-categorical-highlight-included: #db8922;--toas-color-categorical-highlight-notIncluded: #bebebe;--toas-color-palette-categorical-0: #db8922;--toas-color-palette-categorical-1: #bebebe;--toas-color-palette-categorical-2: #0051ba;--toas-color-palette-categorical-3: #b3401d;--toas-color-palette-categorical-4: #8f52b6;--toas-color-palette-categorical-5: #d7be00;--toas-color-palette-categorical-6: #009eb0;--toas-color-palette-categorical-7: #1bbc3c;--toas-color-palette-categorical-8: #ae1d86;--toas-color-continuous-highlight-included: #db8922;--toas-color-continuous-highlight-notIncluded: #bebebe;--toas-color-palette-continuous-0: #bebebe;--toas-color-palette-continuous-1: #c8b5a5;--toas-color-palette-continuous-2: #cfac8d;--toas-color-palette-continuous-3: #d4a374;--toas-color-palette-continuous-4: #d89b5b;--toas-color-palette-continuous-5: #da9241;--toas-color-palette-continuous-6: #db8922;}.toaster-chart.toaster-variant-dark.toaster-is-terminal {--toas-color-primary: #fff;--toas-color-accent: #bebebe;--toas-color-background: #000;--toas-color-axis: #d8d8d8;--toas-color-zeroAxis: #d8d8d8;--toas-color-grid: #555;--toas-color-label: #d8d8d8;--toas-color-categorical-highlight-included: #db8922;--toas-color-categorical-highlight-notIncluded: #bebebe;--toas-color-palette-categorical-0: #db8922;--toas-color-palette-categorical-1: #bebebe;--toas-color-palette-categorical-2: #0051ba;--toas-color-palette-categorical-3: #b3401d;--toas-color-palette-categorical-4: #8f52b6;--toas-color-palette-categorical-5: #d7be00;--toas-color-palette-categorical-6: #009eb0;--toas-color-palette-categorical-7: #1bbc3c;--toas-color-palette-categorical-8: #ae1d86;--toas-color-continuous-highlight-included: #db8922;--toas-color-continuous-highlight-notIncluded: #bebebe;--toas-color-palette-continuous-0: #bebebe;--toas-color-palette-continuous-1: #c8b5a5;--toas-color-palette-continuous-2: #cfac8d;--toas-color-palette-continuous-3: #d4a374;--toas-color-palette-continuous-4: #d89b5b;--toas-color-palette-continuous-5: #da9241;--toas-color-palette-continuous-6: #db8922;}.toaster-chart.toaster-variant-light {--toas-color-primary: #000;--toas-color-accent: #00aeff;--toas-color-background: #ffffff;--toas-color-axis: #000001;--toas-color-zeroAxis: #262626;--toas-color-grid: #dcdcdc;--toas-color-label: #000;--toas-color-categorical-highlight-included: #ff008c;--toas-color-categorical-highlight-notIncluded: #dddddd;--toas-color-palette-categorical-0: #000;--toas-color-palette-categorical-1: #ff008c;--toas-color-palette-categorical-2: #999999;--toas-color-palette-categorical-3: #00aeff;--toas-color-palette-categorical-4: #ffc400;--toas-color-palette-categorical-5: #3ef794;--toas-color-palette-categorical-6: #0037ff;--toas-color-palette-categorical-7: #00ff2a;--toas-color-palette-categorical-8: #b5cec8;--toas-color-palette-categorical-9: #c5c2d2;--toas-color-continuous-highlight-included: #ff008c;--toas-color-continuous-highlight-notIncluded: #ffd5e4;--toas-color-palette-continuous-0: #ffd5e4;--toas-color-palette-continuous-1: #ffb8d3;--toas-color-palette-continuous-2: #ff9ac2;--toas-color-palette-continuous-3: #ff79b0;--toas-color-palette-continuous-4: #ff529e;--toas-color-palette-continuous-5: #ff008c;}.toaster-chart.toaster-variant-dark {--toas-color-primary: #fff;--toas-color-accent: #ffc400;--toas-color-label: #fff;--toas-color-background: #000000;--toas-color-zeroAxis: #262626;--toas-color-axis: #ffffff;--toas-color-grid: #555;--toas-color-categorical-highlight-included: #ffc400;--toas-color-categorical-highlight-notIncluded: #dddddd;--toas-color-palette-categorical-0: #999999;--toas-color-palette-categorical-1: #ffc400;--toas-color-palette-categorical-2: #ffffff;--toas-color-palette-categorical-3: #00aeff;--toas-color-palette-categorical-4: #3ef794;--toas-color-palette-categorical-5: #0037ff;--toas-color-palette-categorical-6: #00ff2a;--toas-color-palette-categorical-7: #b5cec8;--toas-color-palette-categorical-8: #c5c2d2;--toas-color-continuous-highlight-included: #ff008c;--toas-color-continuous-highlight-notIncluded: #ffd5e4;--toas-color-palette-continuous-0: #ffd5e4;--toas-color-palette-continuous-1: #ffb8d3;--toas-color-palette-continuous-2: #ff9ac2;--toas-color-palette-continuous-3: #ff79b0;--toas-color-palette-continuous-4: #ff529e;--toas-color-palette-continuous-5: #ff008c;}\n\n/* Note: We'd like to use the full bwbx font service, but it's been flakey (Aug 2025), so we use a hardcoded file of the css contents instead */\n\n@font-face {font-family:'BWHaasGroteskWebDingbat';font-display:swap;font-weight:400;font-style:normal;src:url('https://assets.bwbx.io/s3/fontservice/fonts/BWHaasGroteskWebDingbat-Regular-5cf45ad17b.woff2')\n      format('woff2'),\n    url('https://assets.bwbx.io/s3/fontservice/fonts/BWHaasGroteskWebDingbat-Regular-a4eb379f51.woff')\n      format('woff');\n}\n\n@font-face {font-family:'AvenirNextMForBBG';font-display:swap;font-weight:400;font-style:normal;src:url('https://assets.bwbx.io/s3/fontservice/fonts/AvenirNextMForBBG-Regular-f9ba99e316.woff2')\n      format('woff2'),\n    url('https://assets.bwbx.io/s3/fontservice/fonts/AvenirNextMForBBG-Regular-d9f45f30ac.woff')\n      format('woff');\n}\n\n@font-face {font-family:'AvenirNextMForBBG';font-display:swap;font-weight:400;font-style:italic;src:url('https://assets.bwbx.io/s3/fontservice/fonts/AvenirNextMForBBG-Italic-463d5794d4.woff2')\n      format('woff2'),\n    url('https://assets.bwbx.io/s3/fontservice/fonts/AvenirNextMForBBG-Italic-e66030ee91.woff')\n      format('woff');\n}\n\n@font-face {font-family:'AvenirNextMForBBG';font-display:swap;font-weight:600;font-style:normal;src:url('https://assets.bwbx.io/s3/fontservice/fonts/AvenirNextMForBBG-Demi-ad8bfede37.woff2')\n      format('woff2'),\n    url('https://assets.bwbx.io/s3/fontservice/fonts/AvenirNextMForBBG-Demi-712e58988c.woff')\n      format('woff');\n}\n\n@font-face {font-family:'AvenirNextMForBBG';font-display:swap;font-weight:600;font-style:italic;src:url('https://assets.bwbx.io/s3/fontservice/fonts/AvenirNextMForBBG-DemiItalic-123fffdc93.woff2')\n      format('woff2'),\n    url('https://assets.bwbx.io/s3/fontservice/fonts/AvenirNextMForBBG-DemiItalic-2d5ef04d2a.woff')\n      format('woff');\n}\n\n@font-face {font-family:'Bloomberg-PropU_N';font-display:swap;font-weight:400;font-style:normal;src:url('https://assets.bwbx.io/s3/fontservice/fonts/Bloomberg-PropU_N-d2fe5104aa.eot');src:local('?'),\n    url('https://assets.bwbx.io/s3/fontservice/fonts/Bloomberg-PropU_N-4ddf86d323.woff2')\n      format('woff2'),\n    url('https://assets.bwbx.io/s3/fontservice/fonts/Bloomberg-PropU_N-e72e5a63f9.woff')\n      format('woff'),\n    url('https://assets.bwbx.io/s3/fontservice/fonts/Bloomberg-PropU_N-484aa48124.ttf')\n      format('truetype');\n}\n\n@font-face {font-family:'Bloomberg-PropU_N-Bold';font-display:swap;font-weight:700;font-style:normal;src:url('https://assets.bwbx.io/s3/fontservice/fonts/Bloomberg-PropU_N-Bold-61504b1576.eot');src:local('?'),\n    url('https://assets.bwbx.io/s3/fontservice/fonts/Bloomberg-PropU_N-Bold-9693b63275.woff2')\n      format('woff2'),\n    url('https://assets.bwbx.io/s3/fontservice/fonts/Bloomberg-PropU_N-Bold-a1b4c4fc9d.woff')\n      format('woff'),\n    url('https://assets.bwbx.io/s3/fontservice/fonts/Bloomberg-PropU_N-Bold-52554a4680.ttf')\n      format('truetype');\n}\n\n@font-face {font-family:'BWHaasText';font-display:swap;font-weight:400;font-style:normal;ascent-override:90%;descent-override:20%;src:url('https://assets.bwbx.io/s3/fontservice/fonts/BWHaasText-55Roman-2558d87ee8.woff2')\n      format('woff2'),\n    url('https://assets.bwbx.io/s3/fontservice/fonts/BWHaasText-55Roman-887c01ff69.woff')\n      format('woff');\n}\n\n@font-face {font-family:'BWHaasText';font-display:swap;font-weight:700;font-style:normal;ascent-override:90%;descent-override:20%;src:url('https://assets.bwbx.io/s3/fontservice/fonts/BWHaasText-75Bold-f7da887a51.woff2')\n      format('woff2'),\n    url('https://assets.bwbx.io/s3/fontservice/fonts/BWHaasText-75Bold-7a4dd77baf.woff')\n      format('woff');\n}.toaster--figure.svelte-avy0nc {width:100%;margin:0;font-family:var(--toas-font-family, sans-serif);-webkit-font-smoothing:antialiased !important;}.toaster--header.svelte-avy0nc {margin-left:auto;margin-right:auto;position:relative;margin-bottom:var(--toas-header-bottom-margin);}.toaster--header.svelte-avy0nc h1:where(.svelte-avy0nc) {font-family:var(--toas-header-font-family);font-size:var(--toas-header-font-size);font-weight:var(--toas-header-font-weight);line-height:var(--toas-header-line-height);margin:0;}.toaster--header.svelte-avy0nc h2:where(.svelte-avy0nc) {font-weight:var(--toas-subheader-font-weight);font-size:var(--toas-subheader-font-size);line-height:var(--toas-subheader-line-height);\n    /* terminal will try to override margin - mark as important */margin:0 !important;}.toaster--footer.svelte-avy0nc {margin-top:var(--toas-footer-margin-top);display:flex;flex-direction:column;font-size:var(--toas-footer-font-size);}.logo-container.svelte-avy0nc {display:flex;justify-content:flex-end;}.toaster--x-axis-label.svelte-avy0nc {display:flex;justify-content:center;align-items:center;font-size:var(--toas-x-axis-label-font-size);line-height:var(--toas-x-axis-label-line-height);margin-top:var(--toas-x-axis-label-margin-top);}.small-header.svelte-avy0nc .toaster--header:where(.svelte-avy0nc) {margin-bottom:6px;}.small-header.svelte-avy0nc .toaster--header:where(.svelte-avy0nc) h1:where(.svelte-avy0nc) {font-size:var(--toas-header-font-size-mobile);line-height:var(--toas-header-line-height-mobile);}.small-header.svelte-avy0nc .toaster--header:where(.svelte-avy0nc) h2:where(.svelte-avy0nc) {font-size:var(--toas-subheader-font-size-mobile);line-height:var(--toas-subheader-line-height-mobile);}.footnote.svelte-avy0nc {margin:0px 0px 2px 0px !important;}.source.svelte-avy0nc {margin:0 !important;}.terminal-buttons.svelte-avy0nc {display:flex !important;justify-content:flex-start;margin-top:12px;}"
};
function pe(d, r) {
  tt(r, true);
  W(d, de);
  let v = A(r, "footerHeight", 15), g = A(r, "headerHeight", 15), h = A(r, "layerId", 3, void 0), x = A(r, "enable", 3, false), n = A(r, "chartData", 19, () => ({
    title: "",
    subtitle: "",
    sourcePrefix: "Source: ",
    source: "",
    footnotePrefix: "Note: ",
    footnote: "",
    organization: "",
    design: { originalTheme: "", variant: void 0 },
    type: "line",
    customChartStyle: null,
    hideTitle: false
  }));
  const $ = p(() => ({ ...Bt, ...r.options }));
  const _ = p(() => n().title);
  const I = p(() => n().subtitle);
  const L = p(() => n().source);
  const N = p(() => n().footnote);
  const S = p(() => n().terminal);
  const T = p(() => n().origin);
  const Z = p(() => n().avmmId);
  const e = p(() => n().hideTitle);
  const i = p(() => n().axis);
  const U = p(() => n().type);
  const E = p(() => n().design);
  let C = Y(0);
  let G = Y(void 0);
  let Q = Y(void 0);
  let X = Y(void 0);
  const pt = Ct();
  const ht = p(() => t(S)?.links?.function);
  const vt = p(() => {
    if (kt.includes(t(U) ?? "") && t(i) && t(i).secondary?.unit) {
      return t(i).secondary.unit;
    }
    if (t(i) && t(i).primary) {
      return t(i).primary?.label?.name ?? "";
    }
    return "";
  });
  const gt = (l) => {
    const { data: o } = l;
    if (!o || typeof o !== "object") return;
    const w = !o.layerId || o.layerId === h();
    switch (o.type) {
      case "checkScaffoldReady":
        window.postMessage({ type: "scaffoldReady", layerId: h() }, "*");
        break;
      case "annotationMode":
        if (w && pt) {
          pt.set(o.mode, false);
        }
        break;
      case "tableSelectionUpdate":
        zt.value = o.selectedTablePortion;
        break;
    }
  };
  st(() => {
    t(_);
    t(I);
    t(e);
    t(C);
    if (t(Q)) {
      g(Math.round(t(Q).clientHeight));
    } else {
      g(0);
    }
  });
  st(() => {
    t(L);
    t(N);
    t($).logo;
    t(C);
    if (t(X)) {
      v(Math.round(t(X).clientHeight));
    } else {
      v(0);
    }
  });
  It(() => {
    const l = new ResizeObserver((o) => {
      for (const w of o) {
        K(C, w.contentRect.width, true);
      }
    });
    if (t(G)) {
      l.observe(t(G));
    }
    if (x()) {
      window.addEventListener("message", gt);
      window.postMessage({ type: "scaffoldReady", layerId: h() }, "*");
    }
    return () => {
      if (t(G)) {
        l.unobserve(t(G));
        window.removeEventListener("message", gt);
      }
    };
  });
  var O = fe();
  let ut;
  var mt = f(O);
  {
    var Lt = (l) => {
      var o = ae();
      var w = f(o);
      {
        var j = (B) => {
          var P = ee();
          var u = f(P, true);
          c(P);
          m(() => {
            it(P, 1, Nt(t($).isTerminalClient ? "toaster--header--terminal" : ""), "svelte-avy0nc");
            z(u, t(_) ?? "");
          });
          a(B, P);
        };
        b(w, (B) => {
          if (!t(e)) B(j);
        });
      }
      var F = y(w, 2);
      {
        var rt = (B) => {
          var P = oe();
          var u = f(P, true);
          c(P);
          m(() => z(u, t(I)));
          a(B, P);
        };
        b(F, (B) => {
          if (t(I)) B(rt);
        });
      }
      c(o);
      at(o, (B) => K(Q, B), () => t(Q));
      m(() => R(o, `max-width: ${t(C)}px;`));
      a(l, o);
    };
    b(mt, (l) => {
      if (t($).titles && (n().title && !t(e) || n().subtitle)) l(Lt);
    });
  }
  var bt = y(mt, 2);
  Zt(bt, () => r.children ?? Mt);
  var $t = y(bt, 2);
  {
    var Dt = (l) => {
      var o = re();
      var w = f(o, true);
      c(o);
      m(() => z(w, t(vt)));
      a(l, o);
    };
    b($t, (l) => {
      if (t(vt) !== "") l(Dt);
    });
  }
  var xt = y($t, 2);
  {
    var Gt = (l) => {
      var o = le();
      var w = f(o);
      {
        var j = (u) => {
          var M = ne();
          var H = f(M, true);
          c(M);
          m(() => z(H, t(N)));
          a(u, M);
        };
        b(w, (u) => {
          if (t(N)) u(j);
        });
      }
      var F = y(w, 2);
      {
        var rt = (u) => {
          var M = se();
          var H = f(M);
          var nt = f(H, true);
          c(H);
          c(M);
          m(() => z(nt, t(L)));
          a(u, M);
        };
        b(F, (u) => {
          if (t(L)) u(rt);
        });
      }
      var B = y(F, 2);
      {
        var P = (u) => {
          var M = ie();
          var H = f(M);
          {
            let nt = p(() => t(E)?.contentDestination);
            ct(H, {
              get contentDestination() {
                return t(nt);
              },
              get isTerminal() {
                return t($).isTerminalClient;
              }
            });
          }
          c(M);
          a(u, M);
        };
        b(B, (u) => {
          if (t($).logo) u(P);
        });
      }
      c(o);
      at(o, (u) => K(X, u), () => t(X));
      a(l, o);
    };
    b(xt, (l) => {
      if (t($).titles) l(Gt);
    });
  }
  var Ft = y(xt, 2);
  {
    var Ht = (l) => {
      var o = ce();
      var w = f(o);
      {
        let j = p(() => t(Z) ?? "");
        let F = p(() => t(T) ?? "Toaster");
        dt(w, {
          get avmmId() {
            return t(j);
          },
          get origin() {
            return t(F);
          },
          get functionLink() {
            return t(ht);
          }
        });
      }
      c(o);
      a(l, o);
    };
    b(Ft, (l) => {
      if (t($).isTerminalClient && t(ht) && t(Z)) l(Ht);
    });
  }
  c(O);
  at(O, (l) => K(G, l), () => t(G));
  m(() => ut = it(O, 1, "toaster--figure svelte-avy0nc", null, ut, {
    "small-header": t(C) <= wt && t(C) > 0
  }));
  a(d, O);
  et();
}

export {
  Ne as a,
  Ce as b,
  ze as c,
  Le as d,
  De as e,
  Ct as f,
  Ge as g,
  Fe as h,
  zt as i,
  pe as j
};
//# sourceMappingURL=chunk-VWPWBXTO.js.map
