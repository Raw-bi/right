import {
  a as I
} from "./chunk-LQT34KSW.js";
import {
  $d as o,
  Be as n,
  G as x,
  Ib as D,
  K as z,
  Ld as h,
  Me as l,
  N as b,
  Qd as R,
  Rd as V,
  Sd as r,
  Xd as W,
  Zb as E,
  Zd as p,
  ae as t,
  bc as M,
  he as $,
  ke as s,
  l as G,
  m as N,
  re as y,
  te as H,
  ue as B
} from "./chunk-K3YJBOOZ.js";

// src/charts/_common/Axes/VerticalAxis.svelte
var et = $(`<line data-testid="vertical-tick-grid"></line>`);
var it = $(`<line data-testid="vertical-tick"></line>`);
var rt = $(`<g><!><!><!></g>`);
var at = $(`<g></g>`);
function nt(K, i) {
  R(i, true);
  let O = l(i, "translateString", 3, "0 0 "), U = l(i, "tickLength", 3, 10), f = l(i, "textShift", 3, 0), S = l(i, "options", 19, () => ({})), j = l(i, "isMobile", 3, false);
  const T = "end";
  const k = "auto";
  const q = r(() => i.axisProperties.gridLines ?? true);
  const A = r(() => G(S()?.isTerminalClient ?? false));
  const c = r(() => N(j()));
  const L = r(() => i.scale.type === "band" ? i.scale.scale.bandwidth() : Infinity);
  const P = r(() => (_) => _.label.post === "" ? -f() : 0);
  const C = r(() => i.axisProperties.unit && i.axisProperties.unit !== "" ? i.axisProperties.unit : null);
  var u = at();
  B(u, 21, () => i.ticks, H, (_, g, J) => {
    var v = rt();
    var F = W(v);
    {
      let a = r(() => t(P)(t(g)));
      let e = r(() => -x);
      let d = r(() => D(t(g).label));
      let m = r(() => `${t(c)}px`);
      I(F, {
        get dx() {
          return t(a);
        },
        get dy() {
          return t(e);
        },
        get width() {
          return t(L);
        },
        get text() {
          return t(d);
        },
        textAnchor: T,
        verticalAnchor: k,
        get fontSize() {
          return t(m);
        },
        get fontFamily() {
          return t(A);
        }
      });
    }
    var w = p(F);
    {
      var Q = (a) => {
        {
          let e = r(() => t(P)(t(g)));
          let d = r(() => -x - t(c) - z);
          let m = r(() => `${t(c)}px`);
          I(a, {
            get dx() {
              return t(e);
            },
            get dy() {
              return t(d);
            },
            get width() {
              return t(L);
            },
            get text() {
              return t(C);
            },
            textAnchor: T,
            verticalAnchor: k,
            get fontSize() {
              return t(m);
            },
            get fontFamily() {
              return t(A);
            }
          });
        }
      };
      var X = r(() => M(J, i.ticks.length) && t(C));
      y(w, (a) => {
        if (t(X)) a(Q);
      });
    }
    var Y = p(w);
    {
      var Z = (a) => {
        var e = et();
        n(e, "y1", 0);
        n(e, "y2", 0);
        o(
          (d) => {
            n(e, "x1", -f());
            n(e, "x2", -i.perpendicularHeight);
            n(e, "stroke", d);
            n(e, "stroke-width", b);
          },
          [
            () => E({ tickValue: t(g).value, variant: S().variant })
          ]
        );
        s(a, e);
      };
      var tt = (a) => {
        var e = it();
        n(e, "y1", 0);
        n(e, "y2", 0);
        o(() => {
          n(e, "x1", -f());
          n(e, "x2", -f() - U());
          n(e, "stroke-width", b);
        });
        s(a, e);
      };
      y(Y, (a) => {
        if (t(q)) a(Z);
        else a(tt, false);
      });
    }
    h(v);
    o((a) => n(v, "transform", a), [
      () => `translate(${0} ${i.scale.scale(t(g).value)})`
    ]);
    s(_, v);
  });
  h(u);
  o(() => n(u, "transform", O()));
  s(K, u);
  V();
}

export {
  nt as a
};
//# sourceMappingURL=chunk-OBQZZTQT.js.map
