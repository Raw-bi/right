import {
  A as ue,
  K as me,
  a as L,
  b as oe,
  c as se,
  k as re,
  l as ae,
  m as ne,
  n as fe
} from "./chunk-WMBATYKY.js";
import {
  M as I,
  S as ie,
  T as le,
  Z as K,
  _ as O,
  a as q,
  d as $,
  k as F,
  m as _,
  n as ee,
  o as D,
  p as M,
  q as te,
  r as k,
  t as S,
  u as A,
  v as G,
  x as h,
  y as z
} from "./chunk-W2WHPTFK.js";

// src/charts/_common/Tooltip/SeriesTooltipContent.svelte
function ke(t) {
  ee(t, "svelte-1jujm51", ".toaster--tooltip-content.svelte-1jujm51{padding:8px;font-size:12px;min-width:85px}.toaster--tooltip-content-light.svelte-1jujm51{background-color:white;border:1px solid black;color:black}.toaster--tooltip-content-dark.svelte-1jujm51{background-color:black;border:1px solid white;color:white}.toaster--tooltip-primary-key.svelte-1jujm51{margin-bottom:2px;white-space:nowrap}.toaster--tooltip-series-values-container.svelte-1jujm51{display:flex;flex-flow:column}.toaster--tooltip-series-value-row.svelte-1jujm51{display:flex;flex-flow:row;justify-content:space-between;align-items:center}.toaster--tooltip-series-value.svelte-1jujm51{text-anchor:end;white-space:nowrap}.toaster--tooltip-units.svelte-1jujm51{margin-top:2px;display:flex;justify-content:end;text-align:right;line-height:14px;color:#bbbbbb}.toaster--tooltip-units-dark.svelte-1jujm51{color:#bbbbbb}.toaster--tooltip-units-light.svelte-1jujm51{color:#555555}");
}
function de(t, i, e) {
  const l = t.slice();
  l[28] = i[e];
  return l;
}
function ce(t) {
  let i = (
    /*seriesData*/
    t[1][
      /*seriesId*/
      t[28]
    ] !== null && !O(
      /*seriesData*/
      t[1][
        /*seriesId*/
        t[28]
      ]
    ) && K(
      /*seriesData*/
      t[1][
        /*seriesId*/
        t[28]
      ]
    ) || !/*hideNonExistingDataPoints*/
    t[11]
  );
  let e;
  let l = i && pe(t);
  return {
    c() {
      if (l) l.c();
      e = G();
    },
    m(s, r) {
      if (l) l.m(s, r);
      D(s, e, r);
    },
    p(s, r) {
      if (r & /*seriesData, seriesInTooltip, hideNonExistingDataPoints*/
      2082) i = /*seriesData*/
      s[1][
        /*seriesId*/
        s[28]
      ] !== null && !O(
        /*seriesData*/
        s[1][
          /*seriesId*/
          s[28]
        ]
      ) && K(
        /*seriesData*/
        s[1][
          /*seriesId*/
          s[28]
        ]
      ) || !/*hideNonExistingDataPoints*/
      s[11];
      if (i) {
        if (l) {
          l.p(s, r);
        } else {
          l = pe(s);
          l.c();
          l.m(e.parentNode, e);
        }
      } else if (l) {
        l.d(1);
        l = null;
      }
    },
    d(s) {
      if (s) {
        M(e);
      }
      if (l) l.d(s);
    }
  };
}
function pe(t) {
  let i;
  let e;
  let l;
  let s;
  let r;
  let g = (
    /*getLabel*/
    t[4]({
      v: (
        /*seriesData*/
        t[1][
          /*seriesId*/
          t[28]
        ]
      ),
      displayFullNumber: (
        /*displayFullNumbers*/
        t[12]
      ),
      decimalPlaces: (
        /*decimalPlaces*/
        t[10]
      ),
      prefix: (
        /*secondaryAxisPrefix*/
        t[8]
      ),
      postfix: (
        /*secondaryAxisPostfix*/
        t[7]
      )
    }) + ""
  );
  let b;
  return {
    c() {
      i = k("div");
      e = k("div");
      s = A();
      r = k("div");
      b = S(g);
      h(e, "style", l = `
            width: ${/*isMobile*/
      t[3] ? 12 : 14}px;
            height: ${/*isMobile*/
      t[3] ? 12 : 14}px;
            border-radius: 2px;
            margin-right: 10px;
            background-color: ${/*colorScale*/
      t[0].scale(
        /*seriesId*/
        t[28]
      )};
          `);
      h(r, "class", "toaster--tooltip-series-value svelte-1jujm51");
      h(i, "class", "toaster--tooltip-series-value-row svelte-1jujm51");
    },
    m(n, p) {
      D(n, i, p);
      _(i, e);
      _(i, s);
      _(i, r);
      _(r, b);
    },
    p(n, p) {
      if (p & /*isMobile, colorScale, seriesInTooltip*/
      41 && l !== (l = `
            width: ${/*isMobile*/
      n[3] ? 12 : 14}px;
            height: ${/*isMobile*/
      n[3] ? 12 : 14}px;
            border-radius: 2px;
            margin-right: 10px;
            background-color: ${/*colorScale*/
      n[0].scale(
        /*seriesId*/
        n[28]
      )};
          `)) {
        h(e, "style", l);
      }
      if (p & /*seriesData, seriesInTooltip, displayFullNumbers, decimalPlaces, secondaryAxisPrefix, secondaryAxisPostfix*/
      5538 && g !== (g = /*getLabel*/
      n[4]({
        v: (
          /*seriesData*/
          n[1][
            /*seriesId*/
            n[28]
          ]
        ),
        displayFullNumber: (
          /*displayFullNumbers*/
          n[12]
        ),
        decimalPlaces: (
          /*decimalPlaces*/
          n[10]
        ),
        prefix: (
          /*secondaryAxisPrefix*/
          n[8]
        ),
        postfix: (
          /*secondaryAxisPostfix*/
          n[7]
        )
      }) + "")) z(b, g);
    },
    d(n) {
      if (n) {
        M(i);
      }
    }
  };
}
function ye(t) {
  let i;
  let e = (
    /*colorScale*/
    t[0] && ce(t)
  );
  return {
    c() {
      if (e) e.c();
      i = G();
    },
    m(l, s) {
      if (e) e.m(l, s);
      D(l, i, s);
    },
    p(l, s) {
      if (
        /*colorScale*/
        l[0]
      ) {
        if (e) {
          e.p(l, s);
        } else {
          e = ce(l);
          e.c();
          e.m(i.parentNode, i);
        }
      } else if (e) {
        e.d(1);
        e = null;
      }
    },
    d(l) {
      if (l) {
        M(i);
      }
      if (e) e.d(l);
    }
  };
}
function he(t) {
  let i;
  let e;
  let l;
  return {
    c() {
      i = k("div");
      e = S(
        /*units*/
        t[15]
      );
      h(i, "class", l = F(`toaster--tooltip-units ${/*options*/
      t[2].variant === "light" ? "toaster--tooltip-units-light" : "toaster--tooltip-units-dark"}`) + " svelte-1jujm51");
    },
    m(s, r) {
      D(s, i, r);
      _(i, e);
    },
    p(s, r) {
      if (r & /*units*/
      32768) z(
        e,
        /*units*/
        s[15]
      );
      if (r & /*options*/
      4 && l !== (l = F(`toaster--tooltip-units ${/*options*/
      s[2].variant === "light" ? "toaster--tooltip-units-light" : "toaster--tooltip-units-dark"}`) + " svelte-1jujm51")) {
        h(i, "class", l);
      }
    },
    d(s) {
      if (s) {
        M(i);
      }
    }
  };
}
function Ye(t) {
  let i;
  let e;
  let l;
  let s;
  let r;
  let g;
  let b;
  let n;
  let p = I(
    /*seriesInTooltip*/
    t[5]
  );
  let u = [];
  for (let a = 0; a < p.length; a += 1) {
    u[a] = ye(de(t, p, a));
  }
  let m = (
    /*displayUnit*/
    t[13] && he(t)
  );
  return {
    c() {
      i = k("div");
      e = k("div");
      l = S(
        /*formattedPrimaryKey*/
        t[6]
      );
      s = A();
      r = k("div");
      for (let a = 0; a < u.length; a += 1) {
        u[a].c();
      }
      g = A();
      if (m) m.c();
      h(e, "class", "toaster--tooltip-primary-key svelte-1jujm51");
      h(r, "class", "toaster--tooltip-series-values-container svelte-1jujm51");
      h(i, "class", b = F(`toaster--tooltip-content ${/*options*/
      t[2].variant === "dark" ? "toaster--tooltip-content-dark" : "toaster--tooltip-content-light"}`) + " svelte-1jujm51");
      h(i, "style", n = `font-family: ${/*fontFamily*/
      t[14]}; font-size: ${/*fontSize*/
      t[9]}px`);
    },
    m(a, c) {
      D(a, i, c);
      _(i, e);
      _(e, l);
      _(i, s);
      _(i, r);
      for (let f = 0; f < u.length; f += 1) {
        if (u[f]) {
          u[f].m(r, null);
        }
      }
      _(r, g);
      if (m) m.m(r, null);
    },
    p(a, [c]) {
      if (c & /*formattedPrimaryKey*/
      64) z(
        l,
        /*formattedPrimaryKey*/
        a[6]
      );
      if (c & /*getLabel, seriesData, seriesInTooltip, displayFullNumbers, decimalPlaces, secondaryAxisPrefix, secondaryAxisPostfix, isMobile, colorScale, hideNonExistingDataPoints*/
      7611) {
        p = I(
          /*seriesInTooltip*/
          a[5]
        );
        let f;
        for (f = 0; f < p.length; f += 1) {
          const Y = de(a, p, f);
          if (u[f]) {
            u[f].p(Y, c);
          } else {
            u[f] = ye(Y);
            u[f].c();
            u[f].m(r, g);
          }
        }
        for (; f < u.length; f += 1) {
          u[f].d(1);
        }
        u.length = p.length;
      }
      if (
        /*displayUnit*/
        a[13]
      ) {
        if (m) {
          m.p(a, c);
        } else {
          m = he(a);
          m.c();
          m.m(r, null);
        }
      } else if (m) {
        m.d(1);
        m = null;
      }
      if (c & /*options*/
      4 && b !== (b = F(`toaster--tooltip-content ${/*options*/
      a[2].variant === "dark" ? "toaster--tooltip-content-dark" : "toaster--tooltip-content-light"}`) + " svelte-1jujm51")) {
        h(i, "class", b);
      }
      if (c & /*fontFamily, fontSize*/
      16896 && n !== (n = `font-family: ${/*fontFamily*/
      a[14]}; font-size: ${/*fontSize*/
      a[9]}px`)) {
        h(i, "style", n);
      }
    },
    i: q,
    o: q,
    d(a) {
      if (a) {
        M(i);
      }
      te(u, a);
      if (m) m.d();
    }
  };
}
function ve(t, i, e) {
  let l;
  let s;
  let r;
  let g;
  let b;
  let n;
  let p;
  let u;
  let m;
  let a;
  let c;
  let f;
  let Y;
  let U;
  let B;
  let J;
  let Q;
  let W;
  let { primaryKey: v } = i;
  let { seriesData: x } = i;
  let { chartData: d } = i;
  let { colorScale: T = void 0 } = i;
  let { options: V = {} } = i;
  let { standAlone: E = false } = i;
  let { isMobile: C = false } = i;
  let w;
  let N;
  const ge = ({ v: o, decimalPlaces: y, displayFullNumber: j, prefix: X, postfix: Z }) => {
    if (o !== null && !O(o) && K(o)) {
      const H = !j ? ae(o) : "none";
      const be = X.length <= 4 ? X : "";
      const _e = Z.length <= 4 ? Z : "";
      let P;
      if (y === "auto") {
        if (m !== void 0 && m !== null) {
          P = m;
        } else {
          P = H !== "none" ? 2 : Math.min(B, 2);
        }
      } else {
        P = +y;
      }
      const je = `${fe(ne(o, H), {
        decimals: P,
        maxDecimals: 6,
        maxMantissa: 6,
        commas: !J
      })}${re[H]}`;
      return `${be}${je}${_e}`;
    } else {
      return "\u2014";
    }
  };
  t.$$set = (o) => {
    if ("primaryKey" in o) e(16, v = o.primaryKey);
    if ("seriesData" in o) e(1, x = o.seriesData);
    if ("chartData" in o) e(17, d = o.chartData);
    if ("colorScale" in o) e(0, T = o.colorScale);
    if ("options" in o) e(2, V = o.options);
    if ("standAlone" in o) e(18, E = o.standAlone);
    if ("isMobile" in o) e(3, C = o.isMobile);
  };
  t.$$.update = () => {
    if (t.$$.dirty & /*chartData*/
    131072) {
      e: e(15, l = d.axis?.secondary?.unit ?? "");
    }
    if (t.$$.dirty & /*options*/
    4) {
      e: e(14, s = ue(V?.isTerminalClient ?? false));
    }
    if (t.$$.dirty & /*chartData*/
    131072) {
      e: e(13, r = d.design.tooltips?.displayUnit ?? true);
    }
    if (t.$$.dirty & /*chartData*/
    131072) {
      e: e(12, g = d.design.tooltips?.displayFullNumbers ?? false);
    }
    if (t.$$.dirty & /*chartData*/
    131072) {
      e: e(11, b = d.design.tooltips?.hideNonExistingDataPoints ?? false);
    }
    if (t.$$.dirty & /*chartData*/
    131072) {
      e: e(19, n = d.design.tooltips?.dateFormat ?? "auto");
    }
    if (t.$$.dirty & /*chartData*/
    131072) {
      e: e(10, p = d.design.tooltips?.tooltipDecimals ?? "auto");
    }
    if (t.$$.dirty & /*chartData*/
    131072) {
      e: e(20, u = d.fields.find((o) => o.taxonomy?.isPrimary === true)?.stats);
    }
    if (t.$$.dirty & /*chartData*/
    131072) {
      e: m = d.axis?.secondary?.decimals ?? null;
    }
    if (t.$$.dirty & /*isMobile*/
    8) {
      e: e(9, a = C ? 12 : 14);
    }
    if (t.$$.dirty & /*chartData*/
    131072) {
      e: e(23, c = d.design.seriesOptions?.emphasize ?? []);
    }
    if (t.$$.dirty & /*chartData*/
    131072) {
      e: e(24, f = d.fields.filter((o) => o.taxonomy?.isPrimary !== true));
    }
    if (t.$$.dirty & /*nonPrimaryFields, emphasizedSeries*/
    25165824) {
      e: e(21, Y = f.map((o) => o.id).filter((o) => !c.includes(o)));
    }
    if (t.$$.dirty & /*chartData*/
    131072) {
      e: e(22, U = d.design.seriesOptions?.deemphasisMode ?? "opacity");
    }
    if (t.$$.dirty & /*nonPrimaryFields*/
    16777216) {
      e: B = Math.max(...f.map((o) => o.stats?.maxMantissa ?? 0));
    }
    if (t.$$.dirty & /*chartData*/
    131072) {
      e: J = d.axis?.secondary?.preventNumericalFormatting ?? false;
    }
    if (t.$$.dirty & /*seriesData, emphasizedSeries, deemphasizedSeries, deemphasisMode, seriesInTooltip*/
    14680098) {
      e: {
        e(5, N = Object.keys(x).sort((o, y) => {
          if (c.includes(o) && !c.includes(y)) {
            return -1;
          } else if (!c.includes(o) && c.includes(y)) {
            return 1;
          } else {
            return 0;
          }
        }));
        if (Y.length > 2 && U === "gray") {
          e(5, N = N.filter((o) => !Y.includes(o)));
        }
      }
    }
    if (t.$$.dirty & /*chartData*/
    131072) {
      e: e(8, Q = d.axis?.secondary?.label?.prefix ?? "");
    }
    if (t.$$.dirty & /*chartData*/
    131072) {
      e: e(7, W = d.axis?.secondary?.label?.postfix ?? "");
    }
    if (t.$$.dirty & /*standAlone, chartData*/
    393216) {
      e: {
        if (E) {
          e(0, T = me(d, false, "light"));
        }
      }
    }
    if (t.$$.dirty & /*chartData, dateFormatString, primaryFieldStats, primaryKey*/
    1769472) {
      e: {
        const o = d.fields.find((j) => j.taxonomy?.isPrimary === true)?.type;
        let y = "MMM D, YYYY";
        if (o === "date") {
          if (n === "auto") {
            const j = u?.dateGranularity;
            if (j === "hours" || j === "minutes") {
              y = "ttt D, YYYY HH:mm";
            } else if (j === "days" || j === "weeks") {
              y = "ttt D, YYYY";
            } else if (j === "months") {
              y = "MMMM YYYY";
            } else if (j === "years") {
              y = "YYYY";
            } else {
              y = "ttt D, YYYY";
            }
          } else {
            y = n;
          }
          e(6, w = L(v).format(y));
        } else if (o === "month/day") {
          e(
            6,
            w = L(se(v, oe[o], " 2000")).format("ttt D")
          );
        } else if (o === "year/month") {
          e(6, w = L(v).format("MMMM YYYY"));
        } else {
          e(6, w = v);
        }
      }
    }
  };
  return [
    T,
    x,
    V,
    C,
    ge,
    N,
    w,
    W,
    Q,
    a,
    p,
    b,
    g,
    r,
    s,
    l,
    v,
    d,
    E,
    n,
    u,
    Y,
    U,
    c,
    f
  ];
}
var R = class extends le {
  constructor(i) {
    super();
    ie(
      this,
      i,
      ve,
      Ye,
      $,
      {
        primaryKey: 16,
        seriesData: 1,
        chartData: 17,
        colorScale: 0,
        options: 2,
        standAlone: 18,
        isMobile: 3,
        getLabel: 4
      },
      ke
    );
  }
  get getLabel() {
    return this.$$.ctx[4];
  }
};
var Se = R;

export {
  Se as a
};
