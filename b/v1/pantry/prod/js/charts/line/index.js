import {
  a as Et
} from "../../chunk-64YC7X32.js";
import "../../chunk-X6YZ7DDU.js";
import {
  a as Ct
} from "../../chunk-TFR2Z4MJ.js";
import "../../chunk-ZKWB7TIG.js";
import "../../chunk-OABP57ZG.js";
import {
  d as Tt
} from "../../chunk-TU74YKFK.js";
import {
  a as St
} from "../../chunk-PUCUUKFQ.js";
import "../../chunk-OBQZZTQT.js";
import "../../chunk-VGBZSIGE.js";
import {
  a as It
} from "../../chunk-EIASGJ4O.js";
import {
  a as xt
} from "../../chunk-JQPS33BQ.js";
import "../../chunk-LQT34KSW.js";
import "../../chunk-R2H5V2TG.js";
import "../../chunk-BSPDSCQH.js";
import {
  a as yt,
  b as Lt,
  c as Ht,
  d as bt,
  e as Pt,
  f as kt,
  g as At,
  h as Mt,
  j as wt
} from "../../chunk-VWPWBXTO.js";
import "../../chunk-CHAHEBOK.js";
import {
  $d as gt,
  A as et,
  Ae as vt,
  B as ot,
  Ba as E,
  De as _t,
  He as _,
  Ie as s,
  Je as Dt,
  Ka as nt,
  Ld as k,
  Me as X,
  Qd as st,
  Rd as at,
  Sd as i,
  Td as f,
  Ud as m,
  Wd as A,
  Xd as M,
  Yd as v,
  Zd as w,
  _d as W,
  ae as t,
  ca as C,
  de as $t,
  ee as dt,
  fe as lt,
  ge as F,
  he as ct,
  jd as it,
  je as N,
  ke as p,
  me as ht,
  n as Z,
  ne as pt,
  pe as ut,
  re as O,
  se as ft,
  u as tt,
  xa as rt,
  xe as mt
} from "../../chunk-K3YJBOOZ.js";
import "../../chunk-LMFSDKL5.js";
import "../../chunk-3WTFS26N.js";

// src/charts/line/Line.svelte
var te = ct(`<!><!>`, 1);
var ee = F(`<!> <div style="position: relative"><svg role="img" aria-label="Line chart"><!></svg> <!></div>`, 1);
var oe = F(`<div class="toaster--chart-container svelte-1ks8iy0"><!></div>`);
var re = {
  hash: "svelte-1ks8iy0",
  code: ".toaster--chart-container.svelte-1ks8iy0 {letter-spacing:auto;}"
};
function Y(D, $) {
  st($, true);
  mt(D, re);
  const y = () => _(Ot, "$annotationMode", d);
  const L = () => _(T, "$seriesDataLookup", d);
  const G = () => _(H, "$tooltipPosition", d);
  const R = () => _(b, "$annotationPosition", d);
  const [d, Wt] = Dt();
  let Ft = X($, "initialWidth", 3, tt), Nt = X($, "options", 19, () => ({ ...C }));
  const a = i(() => ({ ...C, ...Nt() }));
  const e = i(() => rt($.chartData));
  let r = f(A(Ft()));
  let U = f(0);
  let S = f(0);
  let u = f(0);
  yt();
  Ht();
  At();
  Pt();
  const H = Lt();
  const b = bt();
  const T = Mt();
  const Ot = kt();
  const l = i(() => Ct(t(r), t(e)));
  const x = i(() => Z(t(r)));
  const j = i(() => ot(t(S), t(x)));
  const Xt = i(() => y() === "DISABLED");
  const Yt = i(() => (t(a).isTerminalClient ? "terminal" : "web") + (t(x) ? "Mobile" : "Desktop"));
  const o = i(() => {
    return t(e) ? it({
      chartData: t(e),
      width: t(r),
      height: t(l),
      options: t(a),
      seriesDataLookup: L(),
      scaffoldHeight: t(j),
      legendHeight: t(u),
      layerId: t(Yt)
    }) : null;
  });
  const Gt = i(() => ({
    legends: t(u) ? t(u) + et : 0,
    content: [
      {
        legends: 0,
        subtitle: 0,
        width: t(o)?.primaryScale.scale.scale.range()[1] ?? 0,
        height: t(l),
        padding: {
          right: t(o)?.padding?.right ?? 0,
          left: t(o)?.padding?.left ?? 0,
          top: t(o)?.padding?.top ?? 0,
          bottom: t(o)?.padding?.bottom ?? 0
        }
      }
    ]
  }));
  W(() => {
    s(T, E(t(e)));
  });
  W(() => {
    if (y() === "IDLE") {
      s(H, null);
      s(b, null);
    }
  });
  ut(() => {
    document.fonts.ready.then(() => {
      nt();
      s(T, E(t(e)));
    });
  });
  const Rt = (c) => {
    s(H, { x: c.offsetX, y: c.offsetY });
    s(b, { x: c.offsetX, y: c.offsetY });
  };
  const Ut = () => {
    s(H, null);
    s(b, null);
  };
  var z = N();
  var jt = v(z);
  ft(jt, () => t(e), (c) => {
    var B = N();
    var zt = v(B);
    {
      var Bt = (I) => {
        var P = oe();
        var qt = M(P);
        wt(qt, {
          get chartData() {
            return t(e);
          },
          get options() {
            return t(a);
          },
          enable: true,
          get headerHeight() {
            return t(S);
          },
          set headerHeight(g) {
            m(S, g, true);
          },
          get footerHeight() {
            return t(U);
          },
          set footerHeight(g) {
            m(U, g, true);
          },
          children: (g, ne) => {
            var q = ee();
            var J = v(q);
            xt(J, {
              get scales() {
                return t(o);
              },
              get chartData() {
                return t(e);
              },
              get options() {
                return t(a);
              },
              get width() {
                return t(r);
              },
              get legendHeight() {
                return t(u);
              },
              set legendHeight(n) {
                m(u, n, true);
              }
            });
            var K = w(J, 2);
            var h = M(K);
            var Jt = M(h);
            St(Jt, {
              get scales() {
                return t(o);
              },
              get options() {
                return t(a);
              },
              get chartData() {
                return t(e);
              },
              get width() {
                return t(r);
              },
              get height() {
                return t(l);
              },
              children: (n, ie) => {
                var Q = te();
                var V = v(Q);
                Et(V, {
                  get scales() {
                    return t(o);
                  },
                  get chartData() {
                    return t(e);
                  },
                  get options() {
                    return t(a);
                  },
                  get width() {
                    return t(r);
                  },
                  get height() {
                    return t(l);
                  }
                });
                var Vt = w(V);
                Tt(Vt, {
                  get scales() {
                    return t(o);
                  },
                  get chartData() {
                    return t(e);
                  },
                  get width() {
                    return t(r);
                  },
                  get options() {
                    return t(a);
                  },
                  get scaffoldHeight() {
                    return t(j);
                  },
                  get svgLayouts() {
                    return t(Gt);
                  },
                  get type() {
                    return t(e).type;
                  },
                  get isMobile() {
                    return t(x);
                  }
                });
                p(n, Q);
              },
              $$slots: { default: true }
            });
            k(h);
            var Kt = w(h, 2);
            {
              var Qt = (n) => {
                It(n, {
                  get scales() {
                    return t(o);
                  },
                  get chartData() {
                    return t(e);
                  },
                  get width() {
                    return t(r);
                  },
                  get height() {
                    return t(l);
                  },
                  get options() {
                    return t(a);
                  }
                });
              };
              O(Kt, (n) => {
                if (t(Xt)) n(Qt);
              });
            }
            k(K);
            gt(() => vt(h, `
          height: ${t(l)}px;
          width: ${t(r)}px;
        `));
            dt("mousemove", h, (n) => Rt(n));
            $t("mouseleave", h, (n) => Ut());
            p(g, q);
          },
          $$slots: { default: true }
        });
        k(P);
        _t(P, "clientWidth", (g) => m(r, g));
        p(I, P);
      };
      O(zt, (I) => {
        if (t(o)) I(Bt);
      });
    }
    p(c, B);
  });
  p(D, z);
  at();
  Wt();
}
lt(["mousemove"]);

// src/charts/line/index.svelte.ts
async function ye(D) {
  const { element: $, ...y } = D;
  const L = A(y);
  const G = ht(Y, { target: $, props: L });
  return {
    destroy: () => pt(G),
    rerender: (R) => {
      try {
        Object.assign(L, R);
      } catch (d) {
        console.log(d);
      }
    }
  };
}
export {
  ye as render
};
//# sourceMappingURL=index.js.map
