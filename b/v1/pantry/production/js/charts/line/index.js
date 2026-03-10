import {
  a as Mt
} from "../../chunk-HOI2BH6K.js";
import {
  b as ct,
  c as ft,
  e as ut,
  f as dt
} from "../../chunk-JJRGE7TO.js";
import {
  A as J,
  B as ee,
  C as Pt,
  D as Ot,
  E as fe,
  F as Lt,
  G as Y,
  H as ke,
  I as ye,
  J as Be,
  L as Ne,
  M as Ft,
  N as Ht,
  O as ve,
  P as Re,
  U as We,
  b as ne,
  c as re,
  d as se,
  e as bt,
  f as kt,
  g as yt,
  h as vt,
  p as Pe,
  q as Ee,
  r as St,
  s as Ce,
  t as be,
  u as wt,
  v as Dt,
  w as Tt,
  x as At,
  y as It,
  z as oe
} from "../../chunk-WMBATYKY.js";
import {
  a as _t
} from "../../chunk-BHLJLMQU.js";
import {
  A as nt,
  C as rt,
  D as Me,
  E as ze,
  G as st,
  H as De,
  I as V,
  J as U,
  K as S,
  L as I,
  M as F,
  N as Te,
  O as Ae,
  P as C,
  Q as B,
  R as N,
  S as z,
  T as E,
  Y as _e,
  a as R,
  b as Se,
  c as Fe,
  d as H,
  f as x,
  g as ot,
  h as lt,
  ha as gt,
  i as at,
  ia as Ie,
  j as it,
  ja as me,
  ka as pe,
  l as we,
  la as ht,
  m as L,
  ma as mt,
  n as te,
  o as k,
  oa as pt,
  p as y,
  q as W,
  r as j,
  s as A,
  t as Z,
  u as ce,
  v as M,
  w as He,
  x as f,
  y as $
} from "../../chunk-W2WHPTFK.js";
import "../../chunk-PPAZIDP5.js";
import {
  p as tt
} from "../../chunk-O5BZS6RU.js";
import "../../chunk-ESW3TC4Q.js";
import "../../chunk-ADMZL3B2.js";
import "../../chunk-KSIIUMTG.js";
import "../../chunk-YTGE2KHB.js";
import "../../chunk-TOLQYWR2.js";

// src/charts/_common/Axes/DateAxis.svelte
function zt(t, e, o) {
  const l = t.slice();
  l[13] = e[o];
  return l;
}
function Et(t, e, o) {
  const l = t.slice();
  l[16] = e[o];
  return l;
}
function Ct(t, e, o) {
  const l = t.slice();
  l[19] = e[o];
  return l;
}
function Bt(t) {
  let e;
  let o = F(
    /*gapLocationsX*/
    t[8]
  );
  let l = [];
  for (let a = 0; a < o.length; a += 1) {
    l[a] = Nt(Ct(t, o, a));
  }
  return {
    c() {
      for (let a = 0; a < l.length; a += 1) {
        l[a].c();
      }
      e = M();
    },
    m(a, n) {
      for (let i = 0; i < l.length; i += 1) {
        if (l[i]) {
          l[i].m(a, n);
        }
      }
      k(a, e, n);
    },
    p(a, n) {
      if (n & /*gapLocationsX, perpendicularHeight, options*/
      292) {
        o = F(
          /*gapLocationsX*/
          a[8]
        );
        let i;
        for (i = 0; i < o.length; i += 1) {
          const r = Ct(a, o, i);
          if (l[i]) {
            l[i].p(r, n);
          } else {
            l[i] = Nt(r);
            l[i].c();
            l[i].m(e.parentNode, e);
          }
        }
        for (; i < l.length; i += 1) {
          l[i].d(1);
        }
        l.length = o.length;
      }
    },
    d(a) {
      if (a) {
        y(e);
      }
      W(l, a);
    }
  };
}
function Nt(t) {
  let e;
  let o;
  let l;
  let a;
  let n;
  let i;
  let r;
  return {
    c() {
      e = A("line");
      f(e, "x1", o = /*gapLocationX*/
      t[19]);
      f(e, "x2", l = /*gapLocationX*/
      t[19]);
      f(e, "y1", a = 0);
      f(e, "y2", n = -/*perpendicularHeight*/
      t[2]);
      f(e, "stroke", i = Y({
        tickValue: "",
        variant: (
          /*options*/
          t[5].variant
        )
      }));
      f(e, "stroke-dasharray", r = "4,4");
    },
    m(s, c) {
      k(s, e, c);
    },
    p(s, c) {
      if (c & /*gapLocationsX*/
      256 && o !== (o = /*gapLocationX*/
      s[19])) {
        f(e, "x1", o);
      }
      if (c & /*gapLocationsX*/
      256 && l !== (l = /*gapLocationX*/
      s[19])) {
        f(e, "x2", l);
      }
      if (c & /*perpendicularHeight*/
      4 && n !== (n = -/*perpendicularHeight*/
      s[2])) {
        f(e, "y2", n);
      }
      if (c & /*options*/
      32 && i !== (i = Y({
        tickValue: "",
        variant: (
          /*options*/
          s[5].variant
        )
      }))) {
        f(e, "stroke", i);
      }
    },
    d(s) {
      if (s) {
        y(e);
      }
    }
  };
}
function Rt(t) {
  let e;
  let o;
  let l;
  let a;
  let n;
  let i;
  return {
    c() {
      e = A("line");
      f(e, "x1", o = 0);
      f(e, "x2", l = 0);
      f(e, "y1", a = 0);
      f(e, "y2", n = -/*perpendicularHeight*/
      t[2]);
      f(e, "stroke", i = Y({
        tickValue: (
          /*tick*/
          t[16].value
        ),
        variant: (
          /*options*/
          t[5].variant
        )
      }));
    },
    m(r, s) {
      k(r, e, s);
    },
    p(r, s) {
      if (s & /*perpendicularHeight*/
      4 && n !== (n = -/*perpendicularHeight*/
      r[2])) {
        f(e, "y2", n);
      }
      if (s & /*ticks, options*/
      48 && i !== (i = Y({
        tickValue: (
          /*tick*/
          r[16].value
        ),
        variant: (
          /*options*/
          r[5].variant
        )
      }))) {
        f(e, "stroke", i);
      }
    },
    d(r) {
      if (r) {
        y(e);
      }
    }
  };
}
function Wt(t) {
  let e;
  let o;
  let l;
  let a;
  let n;
  let i;
  let r;
  return {
    c() {
      e = A("line");
      r = Z("\n        />");
      f(e, "x1", o = 0);
      f(e, "x2", l = 0);
      f(e, "y1", a = 0);
      f(e, "y2", n = /*getTickLength*/
      t[10](
        /*tick*/
        t[16]
      ));
      f(e, "stroke", i = /*getTickColor*/
      t[6](
        /*tick*/
        t[16].rank,
        /*options*/
        t[5].variant
      ));
      f(e, "data-testid", "major-tick");
    },
    m(s, c) {
      k(s, e, c);
      k(s, r, c);
    },
    p(s, c) {
      if (c & /*ticks*/
      16 && n !== (n = /*getTickLength*/
      s[10](
        /*tick*/
        s[16]
      ))) {
        f(e, "y2", n);
      }
      if (c & /*ticks, options*/
      48 && i !== (i = /*getTickColor*/
      s[6](
        /*tick*/
        s[16].rank,
        /*options*/
        s[5].variant
      ))) {
        f(e, "stroke", i);
      }
    },
    d(s) {
      if (s) {
        y(e);
        y(r);
      }
    }
  };
}
function Gt(t) {
  let e;
  let o;
  let l;
  let a;
  let n;
  let i;
  let r;
  let s;
  let c;
  let d;
  let u;
  return {
    c() {
      e = A("line");
      i = A("line");
      f(e, "x1", o = 0);
      f(e, "x2", l = 0);
      f(e, "y1", a = 0);
      f(e, "y2", Ce);
      f(e, "stroke", n = /*getTickColor*/
      t[6](
        "super",
        /*options*/
        t[5].variant
      ));
      f(e, "data-testid", "super-tick");
      f(i, "x1", r = 0);
      f(i, "x2", s = 0);
      f(i, "stroke", c = ke(
        /*options*/
        t[5].variant
      ));
      f(i, "y1", d = Be(
        /*fontSize*/
        t[9]
      ) + be);
      f(i, "y2", u = ye(
        /*fontSize*/
        t[9]
      ));
      f(i, "data-testid", "super-tick");
    },
    m(h, g) {
      k(h, e, g);
      k(h, i, g);
    },
    p(h, g) {
      if (g & /*options*/
      32 && n !== (n = /*getTickColor*/
      h[6](
        "super",
        /*options*/
        h[5].variant
      ))) {
        f(e, "stroke", n);
      }
      if (g & /*options*/
      32 && c !== (c = ke(
        /*options*/
        h[5].variant
      ))) {
        f(i, "stroke", c);
      }
      if (g & /*fontSize*/
      512 && d !== (d = Be(
        /*fontSize*/
        h[9]
      ) + be)) {
        f(i, "y1", d);
      }
      if (g & /*fontSize*/
      512 && u !== (u = ye(
        /*fontSize*/
        h[9]
      ))) {
        f(i, "y2", u);
      }
    },
    d(h) {
      if (h) {
        y(e);
        y(i);
      }
    }
  };
}
function Vt(t) {
  let e;
  let o = `${/*tick*/
  t[16].label.pre}${/*tick*/
  t[16].label.value}${/*tick*/
  t[16].label.post}`;
  let l;
  let a;
  return {
    c() {
      e = A("text");
      l = Z(o);
      f(
        e,
        "font-size",
        /*fontSize*/
        t[9]
      );
      f(e, "stroke", "none");
      f(e, "text-anchor", "middle");
      f(e, "dominant-baseline", "middle");
      f(e, "data-testid", "major-tick-label");
      f(e, "dy", a = /*getTickLength*/
      t[10](
        /*tick*/
        t[16]
      ) + be + /*fontSize*/
      t[9] / 2);
    },
    m(n, i) {
      k(n, e, i);
      L(e, l);
    },
    p(n, i) {
      if (i & /*ticks*/
      16 && o !== (o = `${/*tick*/
      n[16].label.pre}${/*tick*/
      n[16].label.value}${/*tick*/
      n[16].label.post}`)) $(l, o);
      if (i & /*fontSize*/
      512) {
        f(
          e,
          "font-size",
          /*fontSize*/
          n[9]
        );
      }
      if (i & /*ticks, fontSize*/
      528 && a !== (a = /*getTickLength*/
      n[10](
        /*tick*/
        n[16]
      ) + be + /*fontSize*/
      n[9] / 2)) {
        f(e, "dy", a);
      }
    },
    d(n) {
      if (n) {
        y(e);
      }
    }
  };
}
function Ut(t) {
  let e;
  let o;
  let l;
  let a;
  let n;
  let i = (
    /*axisProperties*/
    t[1].gridLines && /*tick*/
    (t[16].rank === "major" || /*tick*/
    t[16].rank === "custom") && Rt(t)
  );
  let r = (
    /*tick*/
    t[16].rank !== "super" && Wt(t)
  );
  let s = (
    /*tick*/
    t[16].rank === "super" && /*tick*/
    t[16].hideTick !== true && Gt(t)
  );
  let c = (
    /*tick*/
    (t[16].rank === "major" || /*tick*/
    t[16].rank === "custom") && Vt(t)
  );
  return {
    c() {
      e = A("g");
      if (i) i.c();
      o = M();
      if (r) r.c();
      l = M();
      if (s) s.c();
      a = M();
      if (c) c.c();
      f(e, "transform", n = `translate(${/*scale*/
      t[3].scale(
        /*tick*/
        t[16].value
      )} 0)`);
    },
    m(d, u) {
      k(d, e, u);
      if (i) i.m(e, null);
      L(e, o);
      if (r) r.m(e, null);
      L(e, l);
      if (s) s.m(e, null);
      L(e, a);
      if (c) c.m(e, null);
    },
    p(d, u) {
      if (
        /*axisProperties*/
        d[1].gridLines && /*tick*/
        (d[16].rank === "major" || /*tick*/
        d[16].rank === "custom")
      ) {
        if (i) {
          i.p(d, u);
        } else {
          i = Rt(d);
          i.c();
          i.m(e, o);
        }
      } else if (i) {
        i.d(1);
        i = null;
      }
      if (
        /*tick*/
        d[16].rank !== "super"
      ) {
        if (r) {
          r.p(d, u);
        } else {
          r = Wt(d);
          r.c();
          r.m(e, l);
        }
      } else if (r) {
        r.d(1);
        r = null;
      }
      if (
        /*tick*/
        d[16].rank === "super" && /*tick*/
        d[16].hideTick !== true
      ) {
        if (s) {
          s.p(d, u);
        } else {
          s = Gt(d);
          s.c();
          s.m(e, a);
        }
      } else if (s) {
        s.d(1);
        s = null;
      }
      if (
        /*tick*/
        d[16].rank === "major" || /*tick*/
        d[16].rank === "custom"
      ) {
        if (c) {
          c.p(d, u);
        } else {
          c = Vt(d);
          c.c();
          c.m(e, null);
        }
      } else if (c) {
        c.d(1);
        c = null;
      }
      if (u & /*scale, ticks*/
      24 && n !== (n = `translate(${/*scale*/
      d[3].scale(
        /*tick*/
        d[16].value
      )} 0)`)) {
        f(e, "transform", n);
      }
    },
    d(d) {
      if (d) {
        y(e);
      }
      if (i) i.d();
      if (r) r.d();
      if (s) s.d();
      if (c) c.d();
    }
  };
}
function Xt(t) {
  let e;
  let o;
  let l = (
    /*superTickSection*/
    t[13].label + ""
  );
  let a;
  let n;
  let i;
  let r;
  let s;
  return {
    c() {
      e = A("g");
      o = A("text");
      a = Z(l);
      f(
        o,
        "font-size",
        /*fontSize*/
        t[9]
      );
      f(o, "stroke", "none");
      f(o, "text-anchor", "middle");
      f(o, "dominant-baseline", "middle");
      f(o, "fill", n = ke(
        /*options*/
        t[5].variant
      ));
      f(o, "letter-spacing", i = "1px");
      f(o, "data-testid", "super-tick-label");
      f(o, "dy", r = ye(
        /*fontSize*/
        t[9]
      ) - /*fontSize*/
      t[9] / 2);
      f(e, "transform", s = `translate(${/*superTickSection*/
      t[13].position}, 0)`);
    },
    m(c, d) {
      k(c, e, d);
      L(e, o);
      L(o, a);
    },
    p(c, d) {
      if (d & /*superTickSections*/
      128 && l !== (l = /*superTickSection*/
      c[13].label + "")) $(a, l);
      if (d & /*fontSize*/
      512) {
        f(
          o,
          "font-size",
          /*fontSize*/
          c[9]
        );
      }
      if (d & /*options*/
      32 && n !== (n = ke(
        /*options*/
        c[5].variant
      ))) {
        f(o, "fill", n);
      }
      if (d & /*fontSize*/
      512 && r !== (r = ye(
        /*fontSize*/
        c[9]
      ) - /*fontSize*/
      c[9] / 2)) {
        f(o, "dy", r);
      }
      if (d & /*superTickSections*/
      128 && s !== (s = `translate(${/*superTickSection*/
      c[13].position}, 0)`)) {
        f(e, "transform", s);
      }
    },
    d(c) {
      if (c) {
        y(e);
      }
    }
  };
}
function Ko(t) {
  let e;
  let o;
  let l;
  let a = (
    /*gapLocationsX*/
    t[8].length <= 5 && Bt(t)
  );
  let n = F(
    /*ticks*/
    t[4]
  );
  let i = [];
  for (let c = 0; c < n.length; c += 1) {
    i[c] = Ut(Et(t, n, c));
  }
  let r = F(
    /*superTickSections*/
    t[7]
  );
  let s = [];
  for (let c = 0; c < r.length; c += 1) {
    s[c] = Xt(zt(t, r, c));
  }
  return {
    c() {
      e = A("g");
      if (a) a.c();
      o = M();
      for (let c = 0; c < i.length; c += 1) {
        i[c].c();
      }
      l = M();
      for (let c = 0; c < s.length; c += 1) {
        s[c].c();
      }
      f(
        e,
        "transform",
        /*translateString*/
        t[0]
      );
    },
    m(c, d) {
      k(c, e, d);
      if (a) a.m(e, null);
      L(e, o);
      for (let u = 0; u < i.length; u += 1) {
        if (i[u]) {
          i[u].m(e, null);
        }
      }
      L(e, l);
      for (let u = 0; u < s.length; u += 1) {
        if (s[u]) {
          s[u].m(e, null);
        }
      }
    },
    p(c, [d]) {
      if (
        /*gapLocationsX*/
        c[8].length <= 5
      ) {
        if (a) {
          a.p(c, d);
        } else {
          a = Bt(c);
          a.c();
          a.m(e, o);
        }
      } else if (a) {
        a.d(1);
        a = null;
      }
      if (d & /*scale, ticks, fontSize, getTickLength, options, getTickColor, perpendicularHeight, axisProperties*/
      1662) {
        n = F(
          /*ticks*/
          c[4]
        );
        let u;
        for (u = 0; u < n.length; u += 1) {
          const h = Et(c, n, u);
          if (i[u]) {
            i[u].p(h, d);
          } else {
            i[u] = Ut(h);
            i[u].c();
            i[u].m(e, l);
          }
        }
        for (; u < i.length; u += 1) {
          i[u].d(1);
        }
        i.length = n.length;
      }
      if (d & /*superTickSections, fontSize, options*/
      672) {
        r = F(
          /*superTickSections*/
          c[7]
        );
        let u;
        for (u = 0; u < r.length; u += 1) {
          const h = zt(c, r, u);
          if (s[u]) {
            s[u].p(h, d);
          } else {
            s[u] = Xt(h);
            s[u].c();
            s[u].m(e, null);
          }
        }
        for (; u < s.length; u += 1) {
          s[u].d(1);
        }
        s.length = r.length;
      }
      if (d & /*translateString*/
      1) {
        f(
          e,
          "transform",
          /*translateString*/
          c[0]
        );
      }
    },
    i: R,
    o: R,
    d(c) {
      if (c) {
        y(e);
      }
      if (a) a.d();
      W(i, c);
      W(s, c);
    }
  };
}
function Yo(t, e, o) {
  let l;
  let { translateString: a = "0 0 " } = e;
  let { axisProperties: n } = e;
  let { perpendicularHeight: i } = e;
  let { scale: r } = e;
  let { ticks: s } = e;
  let { options: c } = e;
  let { isMobile: d } = e;
  let { bottomTickValue: u = 0 } = e;
  let h = [];
  let g = [];
  const m = (b) => {
    switch (b.rank) {
      case "super":
        return It;
      case "major":
      case "custom":
        return Ce;
      default:
        return St;
    }
  };
  const _ = (b, w) => {
    switch (b) {
      case "super":
        return w === "light" ? wt : Dt;
      case "major":
      case "custom":
        return w === "light" ? "#000" : "#FFF";
      case "minor":
      default:
        return Y({ tickValue: u, variant: w });
    }
  };
  t.$$set = (b) => {
    if ("translateString" in b) o(0, a = b.translateString);
    if ("axisProperties" in b) o(1, n = b.axisProperties);
    if ("perpendicularHeight" in b) o(2, i = b.perpendicularHeight);
    if ("scale" in b) o(3, r = b.scale);
    if ("ticks" in b) o(4, s = b.ticks);
    if ("options" in b) o(5, c = b.options);
    if ("isMobile" in b) o(11, d = b.isMobile);
    if ("bottomTickValue" in b) o(12, u = b.bottomTickValue);
  };
  t.$$.update = () => {
    if (t.$$.dirty & /*isMobile*/
    2048) {
      e: o(9, l = ee(d));
    }
    if (t.$$.dirty & /*ticks, scale*/
    24) {
      e: {
        const b = s.filter((w) => w.rank === "super");
        o(7, h = Lt(r, b));
      }
    }
    if (t.$$.dirty & /*scale*/
    8) {
      e: {
        o(8, g = r.gaps.map((b) => r.scale(b[1])));
      }
    }
  };
  return [
    a,
    n,
    i,
    r,
    s,
    c,
    _,
    h,
    g,
    l,
    m,
    d,
    u
  ];
}
var Ge = class extends E {
  constructor(e) {
    super();
    z(this, e, Yo, Ko, H, {
      translateString: 0,
      axisProperties: 1,
      perpendicularHeight: 2,
      scale: 3,
      ticks: 4,
      options: 5,
      isMobile: 11,
      bottomTickValue: 12,
      getTickColor: 6
    });
  }
  get getTickColor() {
    return this.$$.ctx[6];
  }
};
var qt = Ge;

// src/charts/_common/DynamicText/WrappingText.svelte
function jt(t, e, o) {
  const l = t.slice();
  l[15] = e[o];
  l[17] = o;
  return l;
}
function Kt(t) {
  let e;
  let o = (
    /*line*/
    t[15] + ""
  );
  let l;
  let a;
  let n;
  let i;
  let r;
  return {
    c() {
      e = A("text");
      l = Z(o);
      f(e, "dy", a = /*getLineY*/
      t[9](
        /*i*/
        t[17],
        /*lines*/
        t[7].length - 1
      ));
      f(
        e,
        "text-anchor",
        /*textAnchor*/
        t[0]
      );
      f(e, "dominant-baseline", n = /*growDirection*/
      t[5] === "middle" ? "hanging" : (
        /*verticalAnchor*/
        t[1]
      ));
      f(e, "data-testid", i = `wrapping-text`);
      f(e, "stroke-width", r = 0);
      f(
        e,
        "font-size",
        /*fontSize*/
        t[3]
      );
      f(
        e,
        "font-family",
        /*fontFamily*/
        t[2]
      );
      f(
        e,
        "fill",
        /*stroke*/
        t[6]
      );
    },
    m(s, c) {
      k(s, e, c);
      L(e, l);
    },
    p(s, c) {
      if (c & /*lines*/
      128 && o !== (o = /*line*/
      s[15] + "")) $(l, o);
      if (c & /*lines*/
      128 && a !== (a = /*getLineY*/
      s[9](
        /*i*/
        s[17],
        /*lines*/
        s[7].length - 1
      ))) {
        f(e, "dy", a);
      }
      if (c & /*textAnchor*/
      1) {
        f(
          e,
          "text-anchor",
          /*textAnchor*/
          s[0]
        );
      }
      if (c & /*growDirection, verticalAnchor*/
      34 && n !== (n = /*growDirection*/
      s[5] === "middle" ? "hanging" : (
        /*verticalAnchor*/
        s[1]
      ))) {
        f(e, "dominant-baseline", n);
      }
      if (c & /*fontSize*/
      8) {
        f(
          e,
          "font-size",
          /*fontSize*/
          s[3]
        );
      }
      if (c & /*fontFamily*/
      4) {
        f(
          e,
          "font-family",
          /*fontFamily*/
          s[2]
        );
      }
      if (c & /*stroke*/
      64) {
        f(
          e,
          "fill",
          /*stroke*/
          s[6]
        );
      }
    },
    d(s) {
      if (s) {
        y(e);
      }
    }
  };
}
function Zo(t) {
  let e;
  let o;
  let l = F(
    /*lines*/
    t[7]
  );
  let a = [];
  for (let n = 0; n < l.length; n += 1) {
    a[n] = Kt(jt(t, l, n));
  }
  return {
    c() {
      e = A("g");
      for (let n = 0; n < a.length; n += 1) {
        a[n].c();
      }
      f(e, "transform", o = `translate(${/*dx*/
      t[4]} ${/*mdy*/
      t[8]})`);
    },
    m(n, i) {
      k(n, e, i);
      for (let r = 0; r < a.length; r += 1) {
        if (a[r]) {
          a[r].m(e, null);
        }
      }
    },
    p(n, [i]) {
      if (i & /*getLineY, lines, textAnchor, growDirection, verticalAnchor, fontSize, fontFamily, stroke*/
      751) {
        l = F(
          /*lines*/
          n[7]
        );
        let r;
        for (r = 0; r < l.length; r += 1) {
          const s = jt(n, l, r);
          if (a[r]) {
            a[r].p(s, i);
          } else {
            a[r] = Kt(s);
            a[r].c();
            a[r].m(e, null);
          }
        }
        for (; r < a.length; r += 1) {
          a[r].d(1);
        }
        a.length = l.length;
      }
      if (i & /*dx, mdy*/
      272 && o !== (o = `translate(${/*dx*/
      n[4]} ${/*mdy*/
      n[8]})`)) {
        f(e, "transform", o);
      }
    },
    i: R,
    o: R,
    d(n) {
      if (n) {
        y(e);
      }
      W(a, n);
    }
  };
}
function Jo(t, e, o) {
  let l;
  let a;
  let n;
  let { text: i } = e;
  let { width: r = Infinity } = e;
  let { textAnchor: s = "start" } = e;
  let { verticalAnchor: c = "auto" } = e;
  let { fontFamily: d = Tt } = e;
  let { fontSize: u = At } = e;
  let { dx: h = 0 } = e;
  let { dy: g = 0 } = e;
  let { lineHeight: m = 14 } = e;
  let { growDirection: _ = "down" } = e;
  let { stroke: b = void 0 } = e;
  const w = (p, T) => {
    if (_ === "up") {
      return -(T - p) * m;
    } else {
      return p * m;
    }
  };
  t.$$set = (p) => {
    if ("text" in p) o(10, i = p.text);
    if ("width" in p) o(11, r = p.width);
    if ("textAnchor" in p) o(0, s = p.textAnchor);
    if ("verticalAnchor" in p) o(1, c = p.verticalAnchor);
    if ("fontFamily" in p) o(2, d = p.fontFamily);
    if ("fontSize" in p) o(3, u = p.fontSize);
    if ("dx" in p) o(4, h = p.dx);
    if ("dy" in p) o(12, g = p.dy);
    if ("lineHeight" in p) o(13, m = p.lineHeight);
    if ("growDirection" in p) o(5, _ = p.growDirection);
    if ("stroke" in p) o(6, b = p.stroke);
  };
  t.$$.update = () => {
    if (t.$$.dirty & /*text, width, fontFamily, fontSize*/
    3084) {
      e: o(7, l = Pt(i, r, d, u));
    }
    if (t.$$.dirty & /*lines, lineHeight*/
    8320) {
      e: o(14, a = l.length * m);
    }
    if (t.$$.dirty & /*growDirection, dy, textBlockHeight*/
    20512) {
      e: o(8, n = _ === "middle" ? g - a / 2 : g);
    }
  };
  return [
    s,
    c,
    d,
    u,
    h,
    _,
    b,
    l,
    n,
    w,
    i,
    r,
    g,
    m,
    a
  ];
}
var Ve = class extends E {
  constructor(e) {
    super();
    z(this, e, Jo, Zo, H, {
      text: 10,
      width: 11,
      textAnchor: 0,
      verticalAnchor: 1,
      fontFamily: 2,
      fontSize: 3,
      dx: 4,
      dy: 12,
      lineHeight: 13,
      growDirection: 5,
      stroke: 6
    });
  }
};
var le = Ve;

// src/charts/_common/Axes/VerticalAxis.svelte
function Yt(t, e, o) {
  const l = t.slice();
  l[20] = e[o];
  l[22] = o;
  return l;
}
function Zt(t) {
  let e;
  let o;
  e = new le({
    props: {
      dx: (
        /*xTextOffset*/
        t[13](
          /*tick*/
          t[20]
        )
      ),
      dy: (
        /*yTextOffset*/
        t[12](
          /*tick*/
          t[20]
        ) - /*fontSize*/
        t[15] - Ee
      ),
      width: (
        /*textMaxWidth*/
        t[14]
      ),
      text: (
        /*unit*/
        t[11]
      ),
      textAnchor: (
        /*textAnchor*/
        t[8]
      ),
      verticalAnchor: (
        /*dominantBaseline*/
        t[9]
      ),
      fontSize: `${/*fontSize*/
      t[15]}px`,
      fontFamily: (
        /*fontFamily*/
        t[16]
      )
    }
  });
  return {
    c() {
      C(e.$$.fragment);
    },
    m(l, a) {
      B(e, l, a);
      o = true;
    },
    p(l, a) {
      const n = {};
      if (a & /*xTextOffset, ticks*/
      8196) n.dx = /*xTextOffset*/
      l[13](
        /*tick*/
        l[20]
      );
      if (a & /*yTextOffset, ticks, fontSize*/
      36868) n.dy = /*yTextOffset*/
      l[12](
        /*tick*/
        l[20]
      ) - /*fontSize*/
      l[15] - Ee;
      if (a & /*textMaxWidth*/
      16384) n.width = /*textMaxWidth*/
      l[14];
      if (a & /*unit*/
      2048) n.text = /*unit*/
      l[11];
      if (a & /*textAnchor*/
      256) n.textAnchor = /*textAnchor*/
      l[8];
      if (a & /*dominantBaseline*/
      512) n.verticalAnchor = /*dominantBaseline*/
      l[9];
      if (a & /*fontSize*/
      32768) n.fontSize = `${/*fontSize*/
      l[15]}px`;
      if (a & /*fontFamily*/
      65536) n.fontFamily = /*fontFamily*/
      l[16];
      e.$set(n);
    },
    i(l) {
      if (o) return;
      S(e.$$.fragment, l);
      o = true;
    },
    o(l) {
      I(e.$$.fragment, l);
      o = false;
    },
    d(l) {
      N(e, l);
    }
  };
}
function Qo(t) {
  let e;
  let o;
  let l;
  let a;
  let n;
  let i;
  return {
    c() {
      e = A("line");
      f(e, "x1", o = -/*textShift*/
      t[3]);
      f(e, "x2", l = -/*textShift*/
      t[3] - /*tickLength*/
      t[1]);
      f(e, "y1", a = 0);
      f(e, "y2", n = 0);
      f(e, "stroke-width", i = 1);
      f(e, "data-testid", "vertical-tick");
    },
    m(r, s) {
      k(r, e, s);
    },
    p(r, s) {
      if (s & /*textShift*/
      8 && o !== (o = -/*textShift*/
      r[3])) {
        f(e, "x1", o);
      }
      if (s & /*textShift, tickLength*/
      10 && l !== (l = -/*textShift*/
      r[3] - /*tickLength*/
      r[1])) {
        f(e, "x2", l);
      }
    },
    d(r) {
      if (r) {
        y(e);
      }
    }
  };
}
function xo(t) {
  let e;
  let o;
  let l;
  let a;
  let n;
  let i;
  let r;
  return {
    c() {
      e = A("line");
      f(e, "x1", o = -/*textShift*/
      t[3]);
      f(e, "x2", l = -/*perpendicularHeight*/
      t[5]);
      f(e, "y1", a = 0);
      f(e, "y2", n = 0);
      f(e, "stroke", i = Y({
        tickValue: (
          /*tick*/
          t[20].value
        ),
        variant: (
          /*options*/
          t[4].variant
        )
      }));
      f(e, "stroke-width", r = 1);
      f(e, "data-testid", "vertical-tick-grid");
    },
    m(s, c) {
      k(s, e, c);
    },
    p(s, c) {
      if (c & /*textShift*/
      8 && o !== (o = -/*textShift*/
      s[3])) {
        f(e, "x1", o);
      }
      if (c & /*perpendicularHeight*/
      32 && l !== (l = -/*perpendicularHeight*/
      s[5])) {
        f(e, "x2", l);
      }
      if (c & /*ticks, options*/
      20 && i !== (i = Y({
        tickValue: (
          /*tick*/
          s[20].value
        ),
        variant: (
          /*options*/
          s[4].variant
        )
      }))) {
        f(e, "stroke", i);
      }
    },
    d(s) {
      if (s) {
        y(e);
      }
    }
  };
}
function Jt(t) {
  let e;
  let o;
  let l = (
    /*isLastTick*/
    t[10](
      /*i*/
      t[22]
    ) && /*unit*/
    t[11]
  );
  let a;
  let n;
  let i;
  o = new le({
    props: {
      dx: (
        /*xTextOffset*/
        t[13](
          /*tick*/
          t[20]
        )
      ),
      dy: (
        /*yTextOffset*/
        t[12](
          /*tick*/
          t[20]
        )
      ),
      width: (
        /*textMaxWidth*/
        t[14]
      ),
      text: fe(
        /*tick*/
        t[20].label
      ),
      textAnchor: (
        /*textAnchor*/
        t[8]
      ),
      verticalAnchor: (
        /*dominantBaseline*/
        t[9]
      ),
      fontSize: `${/*fontSize*/
      t[15]}px`,
      fontFamily: (
        /*fontFamily*/
        t[16]
      )
    }
  });
  let r = l && Zt(t);
  function s(u, h) {
    if (
      /*axisProperties*/
      u[6].gridLines
    ) return xo;
    return Qo;
  }
  let c = s(t, -1);
  let d = c(t);
  return {
    c() {
      e = A("g");
      C(o.$$.fragment);
      if (r) r.c();
      a = M();
      d.c();
      f(e, "transform", n = `translate(${0} ${/*yPlacement*/
      t[7](
        /*tick*/
        t[20].value
      )})`);
    },
    m(u, h) {
      k(u, e, h);
      B(o, e, null);
      if (r) r.m(e, null);
      L(e, a);
      d.m(e, null);
      i = true;
    },
    p(u, h) {
      const g = {};
      if (h & /*xTextOffset, ticks*/
      8196) g.dx = /*xTextOffset*/
      u[13](
        /*tick*/
        u[20]
      );
      if (h & /*yTextOffset, ticks*/
      4100) g.dy = /*yTextOffset*/
      u[12](
        /*tick*/
        u[20]
      );
      if (h & /*textMaxWidth*/
      16384) g.width = /*textMaxWidth*/
      u[14];
      if (h & /*ticks*/
      4) g.text = fe(
        /*tick*/
        u[20].label
      );
      if (h & /*textAnchor*/
      256) g.textAnchor = /*textAnchor*/
      u[8];
      if (h & /*dominantBaseline*/
      512) g.verticalAnchor = /*dominantBaseline*/
      u[9];
      if (h & /*fontSize*/
      32768) g.fontSize = `${/*fontSize*/
      u[15]}px`;
      if (h & /*fontFamily*/
      65536) g.fontFamily = /*fontFamily*/
      u[16];
      o.$set(g);
      if (h & /*isLastTick, unit*/
      3072) l = /*isLastTick*/
      u[10](
        /*i*/
        u[22]
      ) && /*unit*/
      u[11];
      if (l) {
        if (r) {
          r.p(u, h);
          if (h & /*isLastTick, unit*/
          3072) {
            S(r, 1);
          }
        } else {
          r = Zt(u);
          r.c();
          S(r, 1);
          r.m(e, a);
        }
      } else if (r) {
        V();
        I(r, 1, 1, () => {
          r = null;
        });
        U();
      }
      if (c === (c = s(u, h)) && d) {
        d.p(u, h);
      } else {
        d.d(1);
        d = c(u);
        if (d) {
          d.c();
          d.m(e, null);
        }
      }
      if (!i || h & /*yPlacement, ticks*/
      132 && n !== (n = `translate(${0} ${/*yPlacement*/
      u[7](
        /*tick*/
        u[20].value
      )})`)) {
        f(e, "transform", n);
      }
    },
    i(u) {
      if (i) return;
      S(o.$$.fragment, u);
      S(r);
      i = true;
    },
    o(u) {
      I(o.$$.fragment, u);
      I(r);
      i = false;
    },
    d(u) {
      if (u) {
        y(e);
      }
      N(o);
      if (r) r.d();
      d.d();
    }
  };
}
function $o(t) {
  let e;
  let o;
  let l = F(
    /*ticks*/
    t[2]
  );
  let a = [];
  for (let i = 0; i < l.length; i += 1) {
    a[i] = Jt(Yt(t, l, i));
  }
  const n = (i) => I(a[i], 1, 1, () => {
    a[i] = null;
  });
  return {
    c() {
      e = A("g");
      for (let i = 0; i < a.length; i += 1) {
        a[i].c();
      }
      f(
        e,
        "transform",
        /*translateString*/
        t[0]
      );
    },
    m(i, r) {
      k(i, e, r);
      for (let s = 0; s < a.length; s += 1) {
        if (a[s]) {
          a[s].m(e, null);
        }
      }
      o = true;
    },
    p(i, [r]) {
      if (r & /*yPlacement, ticks, textShift, perpendicularHeight, options, axisProperties, tickLength, xTextOffset, yTextOffset, fontSize, textMaxWidth, unit, textAnchor, dominantBaseline, fontFamily, isLastTick*/
      131070) {
        l = F(
          /*ticks*/
          i[2]
        );
        let s;
        for (s = 0; s < l.length; s += 1) {
          const c = Yt(i, l, s);
          if (a[s]) {
            a[s].p(c, r);
            S(a[s], 1);
          } else {
            a[s] = Jt(c);
            a[s].c();
            S(a[s], 1);
            a[s].m(e, null);
          }
        }
        V();
        for (s = l.length; s < a.length; s += 1) {
          n(s);
        }
        U();
      }
      if (!o || r & /*translateString*/
      1) {
        f(
          e,
          "transform",
          /*translateString*/
          i[0]
        );
      }
    },
    i(i) {
      if (o) return;
      for (let r = 0; r < l.length; r += 1) {
        S(a[r]);
      }
      o = true;
    },
    o(i) {
      a = a.filter(Boolean);
      for (let r = 0; r < a.length; r += 1) {
        I(a[r]);
      }
      o = false;
    },
    d(i) {
      if (i) {
        y(e);
      }
      W(a, i);
    }
  };
}
function el(t, e, o) {
  let l;
  let a;
  let n;
  let i;
  let r;
  let s;
  let c;
  let { translateString: d = "0 0 " } = e;
  let { scale: u } = e;
  let { tickLength: h = 10 } = e;
  let { ticks: g } = e;
  let { textShift: m = 0 } = e;
  let { options: _ = {} } = e;
  let { perpendicularHeight: b } = e;
  let { axisProperties: w } = e;
  let { isMobile: p = false } = e;
  let T;
  let P;
  let q = "start";
  let X = "hanging";
  t.$$set = (O) => {
    if ("translateString" in O) o(0, d = O.translateString);
    if ("scale" in O) o(17, u = O.scale);
    if ("tickLength" in O) o(1, h = O.tickLength);
    if ("ticks" in O) o(2, g = O.ticks);
    if ("textShift" in O) o(3, m = O.textShift);
    if ("options" in O) o(4, _ = O.options);
    if ("perpendicularHeight" in O) o(5, b = O.perpendicularHeight);
    if ("axisProperties" in O) o(6, w = O.axisProperties);
    if ("isMobile" in O) o(18, p = O.isMobile);
  };
  t.$$.update = () => {
    if (t.$$.dirty & /*options*/
    16) {
      e: o(16, l = J(_?.isTerminalClient ?? false));
    }
    if (t.$$.dirty & /*isMobile*/
    262144) {
      e: o(15, a = ee(p));
    }
    if (t.$$.dirty & /*scale*/
    131072) {
      e: o(14, n = u.type === "band" ? u.scale.bandwidth() : Infinity);
    }
    if (t.$$.dirty & /*scale*/
    131072) {
      e: o(7, P = (O) => u.scale(O));
    }
    if (t.$$.dirty & /*textShift*/
    8) {
      e: o(13, i = (O) => O.label.post === "" ? -m : 0);
    }
    if (t.$$.dirty & /*axisProperties*/
    64) {
      e: o(11, s = w.unit && w.unit !== "" ? w.unit : null);
    }
    if (t.$$.dirty & /*ticks*/
    4) {
      e: o(10, c = (O) => {
        return O === g.length - 1;
      });
    }
  };
  e: o(12, r = (O) => -Pe);
  e: o(8, q = "end");
  e: o(9, X = "auto");
  return [
    d,
    h,
    g,
    m,
    _,
    b,
    w,
    P,
    q,
    X,
    c,
    s,
    r,
    i,
    n,
    a,
    l,
    u,
    p
  ];
}
var Ue = class extends E {
  constructor(e) {
    super();
    z(this, e, el, $o, H, {
      translateString: 0,
      scale: 17,
      tickLength: 1,
      ticks: 2,
      textShift: 3,
      options: 4,
      perpendicularHeight: 5,
      axisProperties: 6,
      isMobile: 18
    });
  }
};
var Qt = Ue;

// src/charts/_common/Axes/HorizontalAxis.svelte
function xt(t, e, o) {
  const l = t.slice();
  l[17] = e[o];
  l[19] = o;
  return l;
}
function tl(t) {
  let e;
  let o;
  let l;
  let a;
  let n;
  return {
    c() {
      e = A("line");
      f(e, "x1", o = 0);
      f(e, "x2", l = 0);
      f(e, "y1", a = 0);
      f(
        e,
        "y2",
        /*tickLength*/
        t[1]
      );
      f(e, "stroke-width", n = 1);
      f(e, "data-testid", "horizontal-tick");
    },
    m(i, r) {
      k(i, e, r);
    },
    p(i, r) {
      if (r & /*tickLength*/
      2) {
        f(
          e,
          "y2",
          /*tickLength*/
          i[1]
        );
      }
    },
    d(i) {
      if (i) {
        y(e);
      }
    }
  };
}
function ol(t) {
  let e;
  let o;
  let l;
  let a;
  let n;
  let i;
  let r;
  return {
    c() {
      e = A("line");
      f(e, "x1", o = 0);
      f(e, "x2", l = 0);
      f(e, "y1", a = 0);
      f(e, "y2", n = -/*perpendicularHeight*/
      t[4]);
      f(e, "stroke", i = Y({
        tickValue: (
          /*tick*/
          t[17].value
        ),
        variant: (
          /*options*/
          t[3].variant
        )
      }));
      f(e, "stroke-width", r = 1);
      f(e, "data-testid", "horizontal-tick-grid");
    },
    m(s, c) {
      k(s, e, c);
    },
    p(s, c) {
      if (c & /*perpendicularHeight*/
      16 && n !== (n = -/*perpendicularHeight*/
      s[4])) {
        f(e, "y2", n);
      }
      if (c & /*ticks, options*/
      12 && i !== (i = Y({
        tickValue: (
          /*tick*/
          s[17].value
        ),
        variant: (
          /*options*/
          s[3].variant
        )
      }))) {
        f(e, "stroke", i);
      }
    },
    d(s) {
      if (s) {
        y(e);
      }
    }
  };
}
function $t(t) {
  let e;
  let o;
  let l;
  let a;
  o = new le({
    props: {
      dx: (
        /*xTextOffset*/
        t[10](
          /*tick*/
          t[17]
        )
      ),
      dy: (
        /*yTextOffset*/
        t[9](
          /*tick*/
          t[17]
        )
      ),
      width: (
        /*textMaxWidth*/
        t[11]
      ),
      text: fe(
        /*tick*/
        t[17].label
      ),
      textAnchor: (
        /*textAnchor*/
        t[7]
      ),
      verticalAnchor: (
        /*dominantBaseline*/
        t[8]
      ),
      fontSize: `${/*fontSize*/
      t[12]}px`,
      fontFamily: (
        /*fontFamily*/
        t[13]
      )
    }
  });
  function n(s, c) {
    if (
      /*axisProperties*/
      s[5].gridLines
    ) return ol;
    return tl;
  }
  let i = n(t, -1);
  let r = i(t);
  return {
    c() {
      e = A("g");
      C(o.$$.fragment);
      r.c();
      f(e, "transform", l = `translate(${/*xPlacement*/
      t[6](
        /*tick*/
        t[17].value
      )} ${0})`);
    },
    m(s, c) {
      k(s, e, c);
      B(o, e, null);
      r.m(e, null);
      a = true;
    },
    p(s, c) {
      const d = {};
      if (c & /*xTextOffset, ticks*/
      1028) d.dx = /*xTextOffset*/
      s[10](
        /*tick*/
        s[17]
      );
      if (c & /*yTextOffset, ticks*/
      516) d.dy = /*yTextOffset*/
      s[9](
        /*tick*/
        s[17]
      );
      if (c & /*textMaxWidth*/
      2048) d.width = /*textMaxWidth*/
      s[11];
      if (c & /*ticks*/
      4) d.text = fe(
        /*tick*/
        s[17].label
      );
      if (c & /*textAnchor*/
      128) d.textAnchor = /*textAnchor*/
      s[7];
      if (c & /*dominantBaseline*/
      256) d.verticalAnchor = /*dominantBaseline*/
      s[8];
      if (c & /*fontSize*/
      4096) d.fontSize = `${/*fontSize*/
      s[12]}px`;
      if (c & /*fontFamily*/
      8192) d.fontFamily = /*fontFamily*/
      s[13];
      o.$set(d);
      if (i === (i = n(s, c)) && r) {
        r.p(s, c);
      } else {
        r.d(1);
        r = i(s);
        if (r) {
          r.c();
          r.m(e, null);
        }
      }
      if (!a || c & /*xPlacement, ticks*/
      68 && l !== (l = `translate(${/*xPlacement*/
      s[6](
        /*tick*/
        s[17].value
      )} ${0})`)) {
        f(e, "transform", l);
      }
    },
    i(s) {
      if (a) return;
      S(o.$$.fragment, s);
      a = true;
    },
    o(s) {
      I(o.$$.fragment, s);
      a = false;
    },
    d(s) {
      if (s) {
        y(e);
      }
      N(o);
      r.d();
    }
  };
}
function ll(t) {
  let e;
  let o;
  let l = F(
    /*ticks*/
    t[2]
  );
  let a = [];
  for (let i = 0; i < l.length; i += 1) {
    a[i] = $t(xt(t, l, i));
  }
  const n = (i) => I(a[i], 1, 1, () => {
    a[i] = null;
  });
  return {
    c() {
      e = A("g");
      for (let i = 0; i < a.length; i += 1) {
        a[i].c();
      }
      f(
        e,
        "transform",
        /*translateString*/
        t[0]
      );
    },
    m(i, r) {
      k(i, e, r);
      for (let s = 0; s < a.length; s += 1) {
        if (a[s]) {
          a[s].m(e, null);
        }
      }
      o = true;
    },
    p(i, [r]) {
      if (r & /*xPlacement, ticks, perpendicularHeight, options, axisProperties, tickLength, xTextOffset, yTextOffset, textMaxWidth, textAnchor, dominantBaseline, fontSize, fontFamily*/
      16382) {
        l = F(
          /*ticks*/
          i[2]
        );
        let s;
        for (s = 0; s < l.length; s += 1) {
          const c = xt(i, l, s);
          if (a[s]) {
            a[s].p(c, r);
            S(a[s], 1);
          } else {
            a[s] = $t(c);
            a[s].c();
            S(a[s], 1);
            a[s].m(e, null);
          }
        }
        V();
        for (s = l.length; s < a.length; s += 1) {
          n(s);
        }
        U();
      }
      if (!o || r & /*translateString*/
      1) {
        f(
          e,
          "transform",
          /*translateString*/
          i[0]
        );
      }
    },
    i(i) {
      if (o) return;
      for (let r = 0; r < l.length; r += 1) {
        S(a[r]);
      }
      o = true;
    },
    o(i) {
      a = a.filter(Boolean);
      for (let r = 0; r < a.length; r += 1) {
        I(a[r]);
      }
      o = false;
    },
    d(i) {
      if (i) {
        y(e);
      }
      W(a, i);
    }
  };
}
function al(t, e, o) {
  let l;
  let a;
  let n;
  let i;
  let r;
  let { translateString: s = "0 0 " } = e;
  let { scale: c } = e;
  let { tickLength: d = 10 } = e;
  let { ticks: u } = e;
  let { options: h = {} } = e;
  let { perpendicularHeight: g } = e;
  let { axisProperties: m } = e;
  let { isMobile: _ = false } = e;
  let b;
  let w;
  let p = "start";
  let T = "hanging";
  t.$$set = (P) => {
    if ("translateString" in P) o(0, s = P.translateString);
    if ("scale" in P) o(14, c = P.scale);
    if ("tickLength" in P) o(1, d = P.tickLength);
    if ("ticks" in P) o(2, u = P.ticks);
    if ("options" in P) o(3, h = P.options);
    if ("perpendicularHeight" in P) o(4, g = P.perpendicularHeight);
    if ("axisProperties" in P) o(5, m = P.axisProperties);
    if ("isMobile" in P) o(15, _ = P.isMobile);
  };
  t.$$.update = () => {
    if (t.$$.dirty & /*options*/
    8) {
      e: o(13, l = J(h?.isTerminalClient ?? false));
    }
    if (t.$$.dirty & /*isMobile*/
    32768) {
      e: o(12, a = ee(_));
    }
    if (t.$$.dirty & /*scale*/
    16384) {
      e: o(11, n = c.type === "band" ? c.scale.bandwidth() : Infinity);
    }
    if (t.$$.dirty & /*scale*/
    16384) {
      e: o(6, b = c.type === "band" ? (P) => (c.scale(P) ?? 0) + c.scale.bandwidth() / 2 : (
        // if band, shift by half the bandwidth (this will need to happen with data as well - should we bake it into the fn?)
        // null-coalecing to zero because apparently a band scale can return undefined. This shouldn't happen with our data.
        (P) => c.scale(P)
      ));
    }
    if (t.$$.dirty & /*tickLength*/
    2) {
      e: o(9, r = (P) => d + Pe);
    }
  };
  e: o(10, i = (P) => 0);
  e: o(7, p = "middle");
  e: o(8, T = "hanging");
  return [
    s,
    d,
    u,
    h,
    g,
    m,
    b,
    p,
    T,
    r,
    i,
    n,
    a,
    l,
    c,
    _
  ];
}
var Xe = class extends E {
  constructor(e) {
    super();
    z(this, e, al, ll, H, {
      translateString: 0,
      scale: 14,
      tickLength: 1,
      ticks: 2,
      options: 3,
      perpendicularHeight: 4,
      axisProperties: 5,
      isMobile: 15
    });
  }
};
var eo = Xe;

// src/charts/_common/HighlightDataRanges/HighlightDataRanges.svelte
function to(t, e, o) {
  const l = t.slice();
  l[8] = e[o].startPos;
  l[9] = e[o].endPos;
  l[11] = o;
  return l;
}
function oo(t) {
  let e;
  let o;
  let l;
  let a;
  let n;
  let i;
  let r;
  return {
    c() {
      e = A("rect");
      f(e, "x", o = /*startPos*/
      t[8]);
      f(e, "y", l = 0);
      f(e, "width", a = /*endPos*/
      t[9] - /*startPos*/
      t[8]);
      f(
        e,
        "height",
        /*height*/
        t[1]
      );
      f(e, "data-testid", n = "highlight-data-range");
      f(e, "stroke", i = "none");
      f(e, "fill", r = /*options*/
      t[0].variant === "dark" ? pe : me);
    },
    m(s, c) {
      k(s, e, c);
    },
    p(s, c) {
      if (c & /*dateRangeBands*/
      4 && o !== (o = /*startPos*/
      s[8])) {
        f(e, "x", o);
      }
      if (c & /*dateRangeBands*/
      4 && a !== (a = /*endPos*/
      s[9] - /*startPos*/
      s[8])) {
        f(e, "width", a);
      }
      if (c & /*height*/
      2) {
        f(
          e,
          "height",
          /*height*/
          s[1]
        );
      }
      if (c & /*options*/
      1 && r !== (r = /*options*/
      s[0].variant === "dark" ? pe : me)) {
        f(e, "fill", r);
      }
    },
    d(s) {
      if (s) {
        y(e);
      }
    }
  };
}
function il(t) {
  let e;
  let o = F(
    /*dateRangeBands*/
    t[2]
  );
  let l = [];
  for (let a = 0; a < o.length; a += 1) {
    l[a] = oo(to(t, o, a));
  }
  return {
    c() {
      e = A("g");
      for (let a = 0; a < l.length; a += 1) {
        l[a].c();
      }
    },
    m(a, n) {
      k(a, e, n);
      for (let i = 0; i < l.length; i += 1) {
        if (l[i]) {
          l[i].m(e, null);
        }
      }
    },
    p(a, [n]) {
      if (n & /*dateRangeBands, height, options*/
      7) {
        o = F(
          /*dateRangeBands*/
          a[2]
        );
        let i;
        for (i = 0; i < o.length; i += 1) {
          const r = to(a, o, i);
          if (l[i]) {
            l[i].p(r, n);
          } else {
            l[i] = oo(r);
            l[i].c();
            l[i].m(e, null);
          }
        }
        for (; i < l.length; i += 1) {
          l[i].d(1);
        }
        l.length = o.length;
      }
    },
    i: R,
    o: R,
    d(a) {
      if (a) {
        y(e);
      }
      W(l, a);
    }
  };
}
function nl(t, e, o) {
  let l;
  let a;
  let n;
  let i;
  let r;
  let { chartData: s } = e;
  let { scales: c } = e;
  let { options: d } = e;
  t.$$set = (u) => {
    if ("chartData" in u) o(3, s = u.chartData);
    if ("scales" in u) o(4, c = u.scales);
    if ("options" in u) o(0, d = u.options);
  };
  t.$$.update = () => {
    if (t.$$.dirty & /*chartData*/
    8) {
      e: o(7, l = s.annotations?.dataRangeHighlights?.highlights ?? []);
    }
    if (t.$$.dirty & /*chartData*/
    8) {
      e: o(6, a = s?.fields.find((u) => u.taxonomy?.isPrimary === true));
    }
    if (t.$$.dirty & /*chartData*/
    8) {
      e: o(5, n = s?.axis?.primary?.preserveOrder);
    }
    if (t.$$.dirty & /*dateRanges, scales, primaryField, preserveOrder*/
    240) {
      e: o(2, i = l.map((u) => {
        const { start: h, end: g } = u;
        if (h === null || g === null) {
          return null;
        }
        const m = c.primaryScale.scale.type;
        const _ = c.primaryScale.scale.fieldType;
        const b = m === "time" ? re(h, ne[_], se(a, h, n)) : h;
        const w = m === "time" ? re(g, ne[_], se(a, g, n)) : g;
        if (b === null || w === null) {
          return null;
        }
        const p = c.primaryScale.scale.scale(b);
        const T = c.primaryScale.scale.scale(w);
        return { startPos: p, endPos: T };
      }).filter((u) => u !== null));
    }
    if (t.$$.dirty & /*scales*/
    16) {
      e: o(1, r = Math.abs(c.secondaryScale?.scale.scale.range()[0] - c.secondaryScale?.scale.scale.range()[1]));
    }
  };
  return [
    d,
    r,
    i,
    s,
    c,
    n,
    a,
    l
  ];
}
var qe = class extends E {
  constructor(e) {
    super();
    z(this, e, nl, il, H, { chartData: 3, scales: 4, options: 0 });
  }
};
var lo = qe;

// ../../node_modules/svelte/src/runtime/store/index.js
var ue = [];
function je(t, e = R) {
  let o;
  const l = /* @__PURE__ */ new Set();
  function a(r) {
    if (H(t, r)) {
      t = r;
      if (o) {
        const s = !ue.length;
        for (const c of l) {
          c[1]();
          ue.push(c, t);
        }
        if (s) {
          for (let c = 0; c < ue.length; c += 2) {
            ue[c][0](ue[c + 1]);
          }
          ue.length = 0;
        }
      }
    }
  }
  function n(r) {
    a(r(t));
  }
  function i(r, s = R) {
    const c = [r, s];
    l.add(c);
    if (l.size === 1) {
      o = e(a, n) || R;
    }
    r(t);
    return () => {
      l.delete(c);
      if (l.size === 0 && o) {
        o();
        o = null;
      }
    };
  }
  return { set: a, update: n, subscribe: i };
}

// src/utils/context.ts
var ao = () => {
  let t = je(null);
  Me("tooltipPosition", t);
};
var de = () => ze("tooltipPosition");
var io = () => {
  let t = je({});
  Me("seriesDataLookup", t);
};
var ge = () => ze("seriesDataLookup");

// src/charts/_common/Annotations/SeriesTextAnnotations.svelte
function no(t, e, o) {
  const l = t.slice();
  l[22] = e[o];
  return l;
}
function ro(t) {
  let e;
  let o;
  let l;
  let a;
  let n;
  return {
    c() {
      e = A("line");
      f(e, "data-testid", "vertical-line");
      f(e, "x1", o = /*annotation*/
      t[22].anchorX);
      f(e, "y1", l = 0);
      f(e, "x2", a = /*annotation*/
      t[22].anchorX);
      f(e, "y2", n = /*yScale*/
      t[1]?.range()[0]);
    },
    m(i, r) {
      k(i, e, r);
    },
    p(i, r) {
      if (r & /*textAnnotationRenderInfos*/
      4 && o !== (o = /*annotation*/
      i[22].anchorX)) {
        f(e, "x1", o);
      }
      if (r & /*textAnnotationRenderInfos*/
      4 && a !== (a = /*annotation*/
      i[22].anchorX)) {
        f(e, "x2", a);
      }
      if (r & /*yScale*/
      2 && n !== (n = /*yScale*/
      i[1]?.range()[0])) {
        f(e, "y2", n);
      }
    },
    d(i) {
      if (i) {
        y(e);
      }
    }
  };
}
function so(t) {
  let e;
  let o;
  let l;
  let a;
  let n;
  return {
    c() {
      e = A("line");
      f(e, "data-testid", "callout-line");
      f(e, "x1", o = 0);
      f(e, "y1", l = 0);
      f(e, "x2", a = 0);
      f(e, "y2", n = /*annotation*/
      t[22].textOffsetY);
    },
    m(i, r) {
      k(i, e, r);
    },
    p(i, r) {
      if (r & /*textAnnotationRenderInfos*/
      4 && n !== (n = /*annotation*/
      i[22].textOffsetY)) {
        f(e, "y2", n);
      }
    },
    d(i) {
      if (i) {
        y(e);
      }
    }
  };
}
function co(t) {
  let e;
  let o;
  let l;
  let a;
  let n;
  return {
    c() {
      e = A("circle");
      f(e, "data-testid", "circle");
      f(e, "cx", o = 0);
      f(e, "cy", l = 0);
      f(e, "r", Ft);
      f(e, "fill", a = /*annotation*/
      t[22].pointColor);
      f(e, "stroke", n = "none");
    },
    m(i, r) {
      k(i, e, r);
    },
    p(i, r) {
      if (r & /*textAnnotationRenderInfos*/
      4 && a !== (a = /*annotation*/
      i[22].pointColor)) {
        f(e, "fill", a);
      }
    },
    d(i) {
      if (i) {
        y(e);
      }
    }
  };
}
function fo(t) {
  let e;
  let o;
  let l;
  let a;
  let n;
  let i;
  let r;
  let s;
  let c = (
    /*annotation*/
    t[22].type === "verticalLine" && ro(t)
  );
  let d = (
    /*annotation*/
    t[22].type === "calloutLine" && so(t)
  );
  let u = (
    /*annotation*/
    (t[22].type === "markerWithText" || /*annotation*/
    t[22].type === "calloutLine") && co(t)
  );
  a = new le({
    props: {
      text: (
        /*annotation*/
        t[22].text
      ),
      textAnchor: (
        /*annotation*/
        t[22].textAnchor
      ),
      verticalAnchor: (
        /*annotation*/
        t[22].verticalTextAnchor
      ),
      fontSize: `${/*fontSize*/
      t[3]}px`,
      fontFamily: J(
        /*options*/
        t[0].isTerminalClient ?? false
      ),
      width: Ne,
      growDirection: (
        /*annotation*/
        t[22].growDirection
      ),
      dx: 1,
      dy: 1,
      stroke: (
        /*options*/
        t[0].variant === "dark" ? "#000" : "#fff"
      )
    }
  });
  n = new le({
    props: {
      text: (
        /*annotation*/
        t[22].text
      ),
      textAnchor: (
        /*annotation*/
        t[22].textAnchor
      ),
      verticalAnchor: (
        /*annotation*/
        t[22].verticalTextAnchor
      ),
      fontSize: `${/*fontSize*/
      t[3]}px`,
      fontFamily: J(
        /*options*/
        t[0].isTerminalClient ?? false
      ),
      width: Ne,
      growDirection: (
        /*annotation*/
        t[22].growDirection
      )
    }
  });
  return {
    c() {
      if (c) c.c();
      e = A("g");
      if (d) d.c();
      o = M();
      if (u) u.c();
      l = A("g");
      C(a.$$.fragment);
      C(n.$$.fragment);
      f(l, "transform", i = `translate(${/*annotation*/
      t[22].textOffsetX}, ${/*annotation*/
      t[22].textOffsetY})`);
      f(e, "transform", r = `translate(${/*annotation*/
      t[22].anchorX}, ${/*annotation*/
      t[22].anchorY})`);
    },
    m(h, g) {
      if (c) c.m(h, g);
      k(h, e, g);
      if (d) d.m(e, null);
      L(e, o);
      if (u) u.m(e, null);
      L(e, l);
      B(a, l, null);
      B(n, l, null);
      s = true;
    },
    p(h, g) {
      if (
        /*annotation*/
        h[22].type === "verticalLine"
      ) {
        if (c) {
          c.p(h, g);
        } else {
          c = ro(h);
          c.c();
          c.m(e.parentNode, e);
        }
      } else if (c) {
        c.d(1);
        c = null;
      }
      if (
        /*annotation*/
        h[22].type === "calloutLine"
      ) {
        if (d) {
          d.p(h, g);
        } else {
          d = so(h);
          d.c();
          d.m(e, o);
        }
      } else if (d) {
        d.d(1);
        d = null;
      }
      if (
        /*annotation*/
        h[22].type === "markerWithText" || /*annotation*/
        h[22].type === "calloutLine"
      ) {
        if (u) {
          u.p(h, g);
        } else {
          u = co(h);
          u.c();
          u.m(e, l);
        }
      } else if (u) {
        u.d(1);
        u = null;
      }
      const m = {};
      if (g & /*textAnnotationRenderInfos*/
      4) m.text = /*annotation*/
      h[22].text;
      if (g & /*textAnnotationRenderInfos*/
      4) m.textAnchor = /*annotation*/
      h[22].textAnchor;
      if (g & /*textAnnotationRenderInfos*/
      4) m.verticalAnchor = /*annotation*/
      h[22].verticalTextAnchor;
      if (g & /*fontSize*/
      8) m.fontSize = `${/*fontSize*/
      h[3]}px`;
      if (g & /*options*/
      1) m.fontFamily = J(
        /*options*/
        h[0].isTerminalClient ?? false
      );
      if (g & /*textAnnotationRenderInfos*/
      4) m.growDirection = /*annotation*/
      h[22].growDirection;
      if (g & /*options*/
      1) m.stroke = /*options*/
      h[0].variant === "dark" ? "#000" : "#fff";
      a.$set(m);
      const _ = {};
      if (g & /*textAnnotationRenderInfos*/
      4) _.text = /*annotation*/
      h[22].text;
      if (g & /*textAnnotationRenderInfos*/
      4) _.textAnchor = /*annotation*/
      h[22].textAnchor;
      if (g & /*textAnnotationRenderInfos*/
      4) _.verticalAnchor = /*annotation*/
      h[22].verticalTextAnchor;
      if (g & /*fontSize*/
      8) _.fontSize = `${/*fontSize*/
      h[3]}px`;
      if (g & /*options*/
      1) _.fontFamily = J(
        /*options*/
        h[0].isTerminalClient ?? false
      );
      if (g & /*textAnnotationRenderInfos*/
      4) _.growDirection = /*annotation*/
      h[22].growDirection;
      n.$set(_);
      if (!s || g & /*textAnnotationRenderInfos*/
      4 && i !== (i = `translate(${/*annotation*/
      h[22].textOffsetX}, ${/*annotation*/
      h[22].textOffsetY})`)) {
        f(l, "transform", i);
      }
      if (!s || g & /*textAnnotationRenderInfos*/
      4 && r !== (r = `translate(${/*annotation*/
      h[22].anchorX}, ${/*annotation*/
      h[22].anchorY})`)) {
        f(e, "transform", r);
      }
    },
    i(h) {
      if (s) return;
      S(a.$$.fragment, h);
      S(n.$$.fragment, h);
      s = true;
    },
    o(h) {
      I(a.$$.fragment, h);
      I(n.$$.fragment, h);
      s = false;
    },
    d(h) {
      if (h) {
        y(e);
      }
      if (c) c.d(h);
      if (d) d.d();
      if (u) u.d();
      N(a);
      N(n);
    }
  };
}
function rl(t) {
  let e;
  let o;
  let l = F(
    /*textAnnotationRenderInfos*/
    t[2]
  );
  let a = [];
  for (let i = 0; i < l.length; i += 1) {
    a[i] = fo(no(t, l, i));
  }
  const n = (i) => I(a[i], 1, 1, () => {
    a[i] = null;
  });
  return {
    c() {
      e = A("g");
      for (let i = 0; i < a.length; i += 1) {
        a[i].c();
      }
    },
    m(i, r) {
      k(i, e, r);
      for (let s = 0; s < a.length; s += 1) {
        if (a[s]) {
          a[s].m(e, null);
        }
      }
      o = true;
    },
    p(i, [r]) {
      if (r & /*textAnnotationRenderInfos, fontSize, options, yScale*/
      15) {
        l = F(
          /*textAnnotationRenderInfos*/
          i[2]
        );
        let s;
        for (s = 0; s < l.length; s += 1) {
          const c = no(i, l, s);
          if (a[s]) {
            a[s].p(c, r);
            S(a[s], 1);
          } else {
            a[s] = fo(c);
            a[s].c();
            S(a[s], 1);
            a[s].m(e, null);
          }
        }
        V();
        for (s = l.length; s < a.length; s += 1) {
          n(s);
        }
        U();
      }
    },
    i(i) {
      if (o) return;
      for (let r = 0; r < l.length; r += 1) {
        S(a[r]);
      }
      o = true;
    },
    o(i) {
      a = a.filter(Boolean);
      for (let r = 0; r < a.length; r += 1) {
        I(a[r]);
      }
      o = false;
    },
    d(i) {
      if (i) {
        y(e);
      }
      W(a, i);
    }
  };
}
function sl(t, e, o) {
  let l;
  let a;
  let n;
  let i;
  let r;
  let s;
  let c;
  let d;
  let u;
  let h;
  let { chartData: g } = e;
  let { scales: m } = e;
  let { options: _ } = e;
  let { width: b } = e;
  let w = [];
  const p = ge();
  x(t, p, (v) => o(13, h = v));
  const T = (v) => {
    if (m.primaryScale?.scale.type === "time") {
      return re(v, ne[m.primaryScale.scale.fieldType], se(d, v, u));
    }
    return v;
  };
  const P = (v) => {
    switch (v.orientation) {
      case "top":
      case "bottom":
        return "middle";
      case "left":
      case "leftTop":
      case "leftBottom":
        return "end";
      case "right":
      case "rightTop":
      case "rightBottom":
        return "start";
      default:
        return "middle";
    }
  };
  const q = (v) => {
    switch (v.orientation) {
      case "top":
      case "leftTop":
      case "rightTop":
        return "auto";
      case "bottom":
      case "leftBottom":
      case "rightBottom":
        return "hanging";
      default:
        return "middle";
    }
  };
  const X = (v) => {
    switch (v.orientation) {
      case "top":
      case "bottom":
        return v.xOffset + 0;
      case "left":
      case "leftTop":
      case "leftBottom":
        return v.xOffset - ve;
      case "right":
      case "rightTop":
      case "rightBottom":
        return v.xOffset + ve;
      default:
        return 0;
    }
  };
  const O = (v) => {
    switch (v.orientation) {
      case "top":
      case "leftTop":
      case "rightTop":
        return v.yOffset - ve;
      case "bottom":
      case "leftBottom":
      case "rightBottom":
        return v.yOffset + ve;
      default:
        return v.yOffset;
    }
  };
  const ae = (v) => {
    switch (v.orientation) {
      case "top":
      case "leftTop":
      case "rightTop":
        return "up";
      case "left":
      case "right":
        return "middle";
      default:
        return "down";
    }
  };
  t.$$set = (v) => {
    if ("chartData" in v) o(5, g = v.chartData);
    if ("scales" in v) o(6, m = v.scales);
    if ("options" in v) o(0, _ = v.options);
    if ("width" in v) o(7, b = v.width);
  };
  t.$$.update = () => {
    if (t.$$.dirty & /*chartData*/
    32) {
      e: o(11, l = g?.annotations?.textAnnotations?.map((v) => ({
        ...v,
        xOffset: v.xOffset ?? 0,
        yOffset: v.yOffset ?? 0
      })) ?? []);
    }
    if (t.$$.dirty & /*scales*/
    64) {
      e: o(9, a = m.primaryScale.scale.scale);
    }
    if (t.$$.dirty & /*scales*/
    64) {
      e: o(10, n = m.primaryScale.scale.type === "band");
    }
    if (t.$$.dirty & /*scales*/
    64) {
      e: o(1, i = m.secondaryScale?.scale.scale);
    }
    if (t.$$.dirty & /*scales*/
    64) {
      e: o(8, r = m.colorScale.scale);
    }
    if (t.$$.dirty & /*width*/
    128) {
      e: o(12, s = oe(b));
    }
    if (t.$$.dirty & /*isMobile*/
    4096) {
      e: o(3, c = ee(s));
    }
    if (t.$$.dirty & /*chartData*/
    32) {
      e: d = g?.fields.find((v) => v.taxonomy?.isPrimary === true);
    }
    if (t.$$.dirty & /*chartData*/
    32) {
      e: u = g?.axis?.primary?.preserveOrder;
    }
    if (t.$$.dirty & /*textAnnotations, width, yScale, $seriesDataLookup, isBandScale, xScale, colorScale*/
    12162) {
      e: {
        o(2, w = (l || []).filter((v) => !v.hideOnMobile ? true : b > Ht).map((v) => {
          if (!v.primaryAxisPosition || !v.seriesId || !i) return null;
          const D = h?.[v.primaryAxisPosition]?.[v.seriesId];
          if (D === void 0) return null;
          return {
            text: v.text,
            anchorX: !n ? a(T(v.primaryAxisPosition)) : a(T(v.primaryAxisPosition)) + a.bandwidth() / 2,
            anchorY: i(D),
            type: v.type,
            textOffsetX: X(v),
            textOffsetY: O(v),
            orientation: v.orientation,
            textAnchor: P(v),
            verticalTextAnchor: q(v),
            pointColor: r(v.seriesId),
            growDirection: ae(v)
          };
        }).filter((v) => v !== null && v.anchorX !== void 0 && v.anchorY !== void 0));
      }
    }
  };
  return [
    _,
    i,
    w,
    c,
    p,
    g,
    m,
    b,
    r,
    a,
    n,
    l,
    s,
    h
  ];
}
var Ke = class extends E {
  constructor(e) {
    super();
    z(this, e, sl, rl, H, {
      chartData: 5,
      scales: 6,
      options: 0,
      width: 7
    });
  }
};
var uo = Ke;

// src/charts/_common/ThresholdLines/ThresholdLines.svelte
function go(t, e, o) {
  const l = t.slice();
  l[13] = e[o].yPos;
  l[14] = e[o].label;
  l[15] = e[o].labelOrientation;
  l[17] = o;
  return l;
}
function ho(t) {
  let e;
  let o = (
    /*label*/
    t[14] + ""
  );
  let l;
  let a;
  let n;
  let i;
  let r;
  let s = (
    /*label*/
    t[14] + ""
  );
  let c;
  let d;
  let u;
  let h;
  let g;
  return {
    c() {
      e = A("text");
      l = Z(o);
      r = A("text");
      c = Z(s);
      f(e, "x", a = /*labelOrientation*/
      t[15] === "aboveEnd" || /*labelOrientation*/
      t[15] === "belowEnd" ? (
        /*lineLength*/
        t[4]
      ) : 0);
      f(e, "y", n = /*labelOrientation*/
      t[15] === "aboveEnd" || /*labelOrientation*/
      t[15] === "aboveStart" ? -5 : 15);
      f(e, "text-anchor", i = /*labelOrientation*/
      t[15] === "aboveEnd" || /*labelOrientation*/
      t[15] === "belowEnd" ? "end" : "start");
      f(e, "data-testid", "threshold-line-text-shadow");
      f(
        e,
        "font-size",
        /*fontSize*/
        t[3]
      );
      f(
        e,
        "font-family",
        /*fontFamily*/
        t[2]
      );
      f(
        e,
        "stroke",
        /*shadowColor*/
        t[5]
      );
      f(
        e,
        "fill",
        /*shadowColor*/
        t[5]
      );
      f(r, "x", d = /*labelOrientation*/
      t[15] === "aboveEnd" || /*labelOrientation*/
      t[15] === "belowEnd" ? (
        /*lineLength*/
        t[4]
      ) : 0);
      f(r, "y", u = /*labelOrientation*/
      t[15] === "aboveEnd" || /*labelOrientation*/
      t[15] === "aboveStart" ? -5 : 15);
      f(r, "data-testid", "threshold-line-text");
      f(r, "text-anchor", h = /*labelOrientation*/
      t[15] === "aboveEnd" || /*labelOrientation*/
      t[15] === "belowEnd" ? "end" : "start");
      f(
        r,
        "font-size",
        /*fontSize*/
        t[3]
      );
      f(
        r,
        "font-family",
        /*fontFamily*/
        t[2]
      );
      f(
        r,
        "fill",
        /*renderColor*/
        t[1]
      );
      f(r, "stroke", g = "none");
    },
    m(m, _) {
      k(m, e, _);
      L(e, l);
      k(m, r, _);
      L(r, c);
    },
    p(m, _) {
      if (_ & /*thresholdLinesInfo*/
      1 && o !== (o = /*label*/
      m[14] + "")) $(l, o);
      if (_ & /*thresholdLinesInfo, lineLength*/
      17 && a !== (a = /*labelOrientation*/
      m[15] === "aboveEnd" || /*labelOrientation*/
      m[15] === "belowEnd" ? (
        /*lineLength*/
        m[4]
      ) : 0)) {
        f(e, "x", a);
      }
      if (_ & /*thresholdLinesInfo*/
      1 && n !== (n = /*labelOrientation*/
      m[15] === "aboveEnd" || /*labelOrientation*/
      m[15] === "aboveStart" ? -5 : 15)) {
        f(e, "y", n);
      }
      if (_ & /*thresholdLinesInfo*/
      1 && i !== (i = /*labelOrientation*/
      m[15] === "aboveEnd" || /*labelOrientation*/
      m[15] === "belowEnd" ? "end" : "start")) {
        f(e, "text-anchor", i);
      }
      if (_ & /*fontSize*/
      8) {
        f(
          e,
          "font-size",
          /*fontSize*/
          m[3]
        );
      }
      if (_ & /*fontFamily*/
      4) {
        f(
          e,
          "font-family",
          /*fontFamily*/
          m[2]
        );
      }
      if (_ & /*thresholdLinesInfo*/
      1 && s !== (s = /*label*/
      m[14] + "")) $(c, s);
      if (_ & /*thresholdLinesInfo, lineLength*/
      17 && d !== (d = /*labelOrientation*/
      m[15] === "aboveEnd" || /*labelOrientation*/
      m[15] === "belowEnd" ? (
        /*lineLength*/
        m[4]
      ) : 0)) {
        f(r, "x", d);
      }
      if (_ & /*thresholdLinesInfo*/
      1 && u !== (u = /*labelOrientation*/
      m[15] === "aboveEnd" || /*labelOrientation*/
      m[15] === "aboveStart" ? -5 : 15)) {
        f(r, "y", u);
      }
      if (_ & /*thresholdLinesInfo*/
      1 && h !== (h = /*labelOrientation*/
      m[15] === "aboveEnd" || /*labelOrientation*/
      m[15] === "belowEnd" ? "end" : "start")) {
        f(r, "text-anchor", h);
      }
      if (_ & /*fontSize*/
      8) {
        f(
          r,
          "font-size",
          /*fontSize*/
          m[3]
        );
      }
      if (_ & /*fontFamily*/
      4) {
        f(
          r,
          "font-family",
          /*fontFamily*/
          m[2]
        );
      }
      if (_ & /*renderColor*/
      2) {
        f(
          r,
          "fill",
          /*renderColor*/
          m[1]
        );
      }
    },
    d(m) {
      if (m) {
        y(e);
        y(r);
      }
    }
  };
}
function _o(t) {
  let e;
  let o;
  let l;
  let a;
  let n;
  let i;
  let r;
  let s;
  let c = (
    /*label*/
    t[14] && ho(t)
  );
  return {
    c() {
      e = A("g");
      o = A("line");
      if (c) c.c();
      f(o, "x1", l = 0);
      f(
        o,
        "x2",
        /*lineLength*/
        t[4]
      );
      f(o, "y1", a = 0);
      f(o, "y2", n = 0);
      f(o, "stroke-width", i = 2);
      f(o, "stroke-linecap", r = "round");
      f(o, "stroke-dasharray", "5,5");
      f(
        o,
        "stroke",
        /*renderColor*/
        t[1]
      );
      f(o, "data-testid", "threshold-line");
      f(e, "transform", s = `translate(0, ${/*yPos*/
      t[13]})`);
    },
    m(d, u) {
      k(d, e, u);
      L(e, o);
      if (c) c.m(e, null);
    },
    p(d, u) {
      if (u & /*lineLength*/
      16) {
        f(
          o,
          "x2",
          /*lineLength*/
          d[4]
        );
      }
      if (u & /*renderColor*/
      2) {
        f(
          o,
          "stroke",
          /*renderColor*/
          d[1]
        );
      }
      if (
        /*label*/
        d[14]
      ) {
        if (c) {
          c.p(d, u);
        } else {
          c = ho(d);
          c.c();
          c.m(e, null);
        }
      } else if (c) {
        c.d(1);
        c = null;
      }
      if (u & /*thresholdLinesInfo*/
      1 && s !== (s = `translate(0, ${/*yPos*/
      d[13]})`)) {
        f(e, "transform", s);
      }
    },
    d(d) {
      if (d) {
        y(e);
      }
      if (c) c.d();
    }
  };
}
function cl(t) {
  let e;
  let o = F(
    /*thresholdLinesInfo*/
    t[0]
  );
  let l = [];
  for (let a = 0; a < o.length; a += 1) {
    l[a] = _o(go(t, o, a));
  }
  return {
    c() {
      e = A("g");
      for (let a = 0; a < l.length; a += 1) {
        l[a].c();
      }
    },
    m(a, n) {
      k(a, e, n);
      for (let i = 0; i < l.length; i += 1) {
        if (l[i]) {
          l[i].m(e, null);
        }
      }
    },
    p(a, [n]) {
      if (n & /*thresholdLinesInfo, lineLength, fontSize, fontFamily, renderColor, shadowColor*/
      63) {
        o = F(
          /*thresholdLinesInfo*/
          a[0]
        );
        let i;
        for (i = 0; i < o.length; i += 1) {
          const r = go(a, o, i);
          if (l[i]) {
            l[i].p(r, n);
          } else {
            l[i] = _o(r);
            l[i].c();
            l[i].m(e, null);
          }
        }
        for (; i < l.length; i += 1) {
          l[i].d(1);
        }
        l.length = o.length;
      }
    },
    i: R,
    o: R,
    d(a) {
      if (a) {
        y(e);
      }
      W(l, a);
    }
  };
}
function fl(t, e, o) {
  let l;
  let a;
  let n;
  let i;
  let r;
  let s;
  let { chartData: c } = e;
  let { scales: d } = e;
  let { options: u } = e;
  let { isMobile: h = false } = e;
  let g = [];
  let m = u.variant === "dark" ? "#FFF" : "#000";
  let _ = u.variant === "dark" ? "#000" : "#FFF";
  t.$$set = (b) => {
    if ("chartData" in b) o(6, c = b.chartData);
    if ("scales" in b) o(7, d = b.scales);
    if ("options" in b) o(8, u = b.options);
    if ("isMobile" in b) o(9, h = b.isMobile);
  };
  t.$$.update = () => {
    if (t.$$.dirty & /*scales*/
    128) {
      e: o(12, l = d.primaryScale.scale.scale);
    }
    if (t.$$.dirty & /*scales*/
    128) {
      e: o(10, a = d.secondaryScale?.scale.scale);
    }
    if (t.$$.dirty & /*xScale*/
    4096) {
      e: o(4, n = l.range()[1]);
    }
    if (t.$$.dirty & /*isMobile*/
    512) {
      e: o(3, i = h ? 12 : 14);
    }
    if (t.$$.dirty & /*options*/
    256) {
      e: o(2, r = J(u.isTerminalClient ?? false));
    }
    if (t.$$.dirty & /*chartData*/
    64) {
      e: o(11, s = c?.annotations?.thresholdIndicators);
    }
    if (t.$$.dirty & /*chartData*/
    64) {
      e: {
        if (c?.design?.parsedOverrideOptions && "thresholdColor" in c.design?.parsedOverrideOptions) {
          o(1, m = c.design?.parsedOverrideOptions.thresholdColor);
        }
      }
    }
    if (t.$$.dirty & /*chartData, thresholdLines, yScale*/
    3136) {
      e: {
        if (c && s && a) {
          o(0, g = s.map((b) => {
            return {
              yPos: a(b.value),
              label: b.label,
              labelOrientation: b.labelOrientation
            };
          }));
        }
      }
    }
  };
  return [
    g,
    m,
    r,
    i,
    n,
    _,
    c,
    d,
    u,
    h,
    a,
    s,
    l
  ];
}
var Ye = class extends E {
  constructor(e) {
    super();
    z(this, e, fl, cl, H, {
      chartData: 6,
      scales: 7,
      options: 8,
      isMobile: 9
    });
  }
};
var mo = Ye;

// src/charts/_common/Axes/DualAxisLayout.svelte
function po(t) {
  let e;
  let o;
  let l;
  let a;
  let n;
  let i;
  let r;
  let s;
  let c;
  let d;
  let u;
  o = new lo({
    props: {
      chartData: (
        /*chartData*/
        t[2]
      ),
      scales: (
        /*scales*/
        t[0]
      ),
      options: (
        /*options*/
        t[1]
      )
    }
  });
  const h = [dl, ul];
  const g = [];
  function m(p, T) {
    if (
      /*scales*/
      p[0].primaryScale.scale.type === "time"
    ) return 0;
    return 1;
  }
  a = m(t, -1);
  n = g[a] = h[a](t);
  let _ = (
    /*scales*/
    t[0].secondaryScale && bo(t)
  );
  const b = (
    /*#slots*/
    t[14].default
  );
  const w = ot(
    b,
    t,
    /*$$scope*/
    t[13],
    null
  );
  s = new mo({
    props: {
      chartData: (
        /*chartData*/
        t[2]
      ),
      scales: (
        /*scales*/
        t[0]
      ),
      options: (
        /*options*/
        t[1]
      ),
      isMobile: (
        /*isMobile*/
        t[6]
      )
    }
  });
  c = new uo({
    props: {
      scales: (
        /*scales*/
        t[0]
      ),
      chartData: (
        /*chartData*/
        t[2]
      ),
      options: (
        /*options*/
        t[1]
      ),
      width: (
        /*width*/
        t[3]
      )
    }
  });
  return {
    c() {
      e = A("g");
      C(o.$$.fragment);
      l = A("g");
      n.c();
      i = A("g");
      if (_) _.c();
      r = M();
      if (w) w.c();
      C(s.$$.fragment);
      C(c.$$.fragment);
      f(e, "transform", d = `translate(${/*leftTransformAmount*/
      t[10]} ${/*topTransformAmount*/
      t[11]})`);
    },
    m(p, T) {
      k(p, e, T);
      B(o, e, null);
      L(e, l);
      g[a].m(l, null);
      L(e, i);
      if (_) _.m(i, null);
      L(i, r);
      if (w) {
        w.m(i, null);
      }
      B(s, i, null);
      B(c, i, null);
      u = true;
    },
    p(p, T) {
      const P = {};
      if (T & /*chartData*/
      4) P.chartData = /*chartData*/
      p[2];
      if (T & /*scales*/
      1) P.scales = /*scales*/
      p[0];
      if (T & /*options*/
      2) P.options = /*options*/
      p[1];
      o.$set(P);
      let q = a;
      a = m(p, T);
      if (a === q) {
        g[a].p(p, T);
      } else {
        V();
        I(g[q], 1, 1, () => {
          g[q] = null;
        });
        U();
        n = g[a];
        if (!n) {
          n = g[a] = h[a](p);
          n.c();
        } else {
          n.p(p, T);
        }
        S(n, 1);
        n.m(l, null);
      }
      if (
        /*scales*/
        p[0].secondaryScale
      ) {
        if (_) {
          _.p(p, T);
          if (T & /*scales*/
          1) {
            S(_, 1);
          }
        } else {
          _ = bo(p);
          _.c();
          S(_, 1);
          _.m(i, r);
        }
      } else if (_) {
        V();
        I(_, 1, 1, () => {
          _ = null;
        });
        U();
      }
      if (w) {
        if (w.p && (!u || T & /*$$scope*/
        8192)) {
          at(
            w,
            b,
            p,
            /*$$scope*/
            p[13],
            !u ? it(
              /*$$scope*/
              p[13]
            ) : lt(
              b,
              /*$$scope*/
              p[13],
              T,
              null
            ),
            null
          );
        }
      }
      const X = {};
      if (T & /*chartData*/
      4) X.chartData = /*chartData*/
      p[2];
      if (T & /*scales*/
      1) X.scales = /*scales*/
      p[0];
      if (T & /*options*/
      2) X.options = /*options*/
      p[1];
      if (T & /*isMobile*/
      64) X.isMobile = /*isMobile*/
      p[6];
      s.$set(X);
      const O = {};
      if (T & /*scales*/
      1) O.scales = /*scales*/
      p[0];
      if (T & /*chartData*/
      4) O.chartData = /*chartData*/
      p[2];
      if (T & /*options*/
      2) O.options = /*options*/
      p[1];
      if (T & /*width*/
      8) O.width = /*width*/
      p[3];
      c.$set(O);
      if (!u || T & /*leftTransformAmount, topTransformAmount*/
      3072 && d !== (d = `translate(${/*leftTransformAmount*/
      p[10]} ${/*topTransformAmount*/
      p[11]})`)) {
        f(e, "transform", d);
      }
    },
    i(p) {
      if (u) return;
      S(o.$$.fragment, p);
      S(n);
      S(_);
      S(w, p);
      S(s.$$.fragment, p);
      S(c.$$.fragment, p);
      u = true;
    },
    o(p) {
      I(o.$$.fragment, p);
      I(n);
      I(_);
      I(w, p);
      I(s.$$.fragment, p);
      I(c.$$.fragment, p);
      u = false;
    },
    d(p) {
      if (p) {
        y(e);
      }
      N(o);
      g[a].d();
      if (_) _.d();
      if (w) w.d(p);
      N(s);
      N(c);
    }
  };
}
function ul(t) {
  let e;
  let o;
  const l = [
    {
      translateString: `translate (0, ${/*scaleHeight*/
      t[7]})`
    },
    { perpendicularHeight: (
      /*height*/
      t[4]
    ) },
    {
      axisProperties: (
        /*chartData*/
        t[2].axis?.primary ?? {}
      )
    },
    /*scales*/
    t[0].primaryScale,
    { options: (
      /*options*/
      t[1]
    ) },
    { isMobile: (
      /*isMobile*/
      t[6]
    ) }
  ];
  let a = {};
  for (let n = 0; n < l.length; n += 1) {
    a = Se(a, l[n]);
  }
  e = new eo({ props: a });
  return {
    c() {
      C(e.$$.fragment);
    },
    m(n, i) {
      B(e, n, i);
      o = true;
    },
    p(n, i) {
      const r = i & /*scaleHeight, height, chartData, scales, options, isMobile*/
      215 ? Te(l, [
        i & /*scaleHeight*/
        128 && {
          translateString: `translate (0, ${/*scaleHeight*/
          n[7]})`
        },
        i & /*height*/
        16 && { perpendicularHeight: (
          /*height*/
          n[4]
        ) },
        i & /*chartData*/
        4 && {
          axisProperties: (
            /*chartData*/
            n[2].axis?.primary ?? {}
          )
        },
        i & /*scales*/
        1 && Ae(
          /*scales*/
          n[0].primaryScale
        ),
        i & /*options*/
        2 && { options: (
          /*options*/
          n[1]
        ) },
        i & /*isMobile*/
        64 && { isMobile: (
          /*isMobile*/
          n[6]
        ) }
      ]) : {};
      e.$set(r);
    },
    i(n) {
      if (o) return;
      S(e.$$.fragment, n);
      o = true;
    },
    o(n) {
      I(e.$$.fragment, n);
      o = false;
    },
    d(n) {
      N(e, n);
    }
  };
}
function dl(t) {
  let e;
  let o;
  const l = [
    {
      translateString: `translate (0, ${/*scaleHeight*/
      t[7]})`
    },
    {
      axisProperties: (
        /*chartData*/
        t[2].axis?.primary ?? {}
      )
    },
    { perpendicularHeight: (
      /*height*/
      t[4]
    ) },
    {
      bottomTickValue: (
        /*bottomTickValue*/
        t[5]
      )
    },
    /*scales*/
    t[0].primaryScale,
    { options: (
      /*options*/
      t[1]
    ) },
    { isMobile: (
      /*isMobile*/
      t[6]
    ) }
  ];
  let a = {};
  for (let n = 0; n < l.length; n += 1) {
    a = Se(a, l[n]);
  }
  e = new qt({ props: a });
  return {
    c() {
      C(e.$$.fragment);
    },
    m(n, i) {
      B(e, n, i);
      o = true;
    },
    p(n, i) {
      const r = i & /*scaleHeight, chartData, height, bottomTickValue, scales, options, isMobile*/
      247 ? Te(l, [
        i & /*scaleHeight*/
        128 && {
          translateString: `translate (0, ${/*scaleHeight*/
          n[7]})`
        },
        i & /*chartData*/
        4 && {
          axisProperties: (
            /*chartData*/
            n[2].axis?.primary ?? {}
          )
        },
        i & /*height*/
        16 && { perpendicularHeight: (
          /*height*/
          n[4]
        ) },
        i & /*bottomTickValue*/
        32 && {
          bottomTickValue: (
            /*bottomTickValue*/
            n[5]
          )
        },
        i & /*scales*/
        1 && Ae(
          /*scales*/
          n[0].primaryScale
        ),
        i & /*options*/
        2 && { options: (
          /*options*/
          n[1]
        ) },
        i & /*isMobile*/
        64 && { isMobile: (
          /*isMobile*/
          n[6]
        ) }
      ]) : {};
      e.$set(r);
    },
    i(n) {
      if (o) return;
      S(e.$$.fragment, n);
      o = true;
    },
    o(n) {
      I(e.$$.fragment, n);
      o = false;
    },
    d(n) {
      N(e, n);
    }
  };
}
function bo(t) {
  let e;
  let o;
  const l = [
    {
      translateString: `translate (${/*scaleWidth*/
      t[8] + /*rightTransformAmount*/
      t[9]} ${0})`
    },
    { perpendicularHeight: (
      /*width*/
      t[3]
    ) },
    {
      axisProperties: (
        /*chartData*/
        t[2].axis?.secondary ?? {}
      )
    },
    /*scales*/
    t[0].secondaryScale,
    { options: (
      /*options*/
      t[1]
    ) },
    { isMobile: (
      /*isMobile*/
      t[6]
    ) }
  ];
  let a = {};
  for (let n = 0; n < l.length; n += 1) {
    a = Se(a, l[n]);
  }
  e = new Qt({ props: a });
  return {
    c() {
      C(e.$$.fragment);
    },
    m(n, i) {
      B(e, n, i);
      o = true;
    },
    p(n, i) {
      const r = i & /*scaleWidth, rightTransformAmount, width, chartData, scales, options, isMobile*/
      847 ? Te(l, [
        i & /*scaleWidth, rightTransformAmount*/
        768 && {
          translateString: `translate (${/*scaleWidth*/
          n[8] + /*rightTransformAmount*/
          n[9]} ${0})`
        },
        i & /*width*/
        8 && { perpendicularHeight: (
          /*width*/
          n[3]
        ) },
        i & /*chartData*/
        4 && {
          axisProperties: (
            /*chartData*/
            n[2].axis?.secondary ?? {}
          )
        },
        i & /*scales*/
        1 && Ae(
          /*scales*/
          n[0].secondaryScale
        ),
        i & /*options*/
        2 && { options: (
          /*options*/
          n[1]
        ) },
        i & /*isMobile*/
        64 && { isMobile: (
          /*isMobile*/
          n[6]
        ) }
      ]) : {};
      e.$set(r);
    },
    i(n) {
      if (o) return;
      S(e.$$.fragment, n);
      o = true;
    },
    o(n) {
      I(e.$$.fragment, n);
      o = false;
    },
    d(n) {
      N(e, n);
    }
  };
}
function gl(t) {
  let e;
  let o;
  let l = !/*noScales*/
  t[12] && po(t);
  return {
    c() {
      if (l) l.c();
      e = M();
    },
    m(a, n) {
      if (l) l.m(a, n);
      k(a, e, n);
      o = true;
    },
    p(a, [n]) {
      if (!/*noScales*/
      a[12]) {
        if (l) {
          l.p(a, n);
          if (n & /*noScales*/
          4096) {
            S(l, 1);
          }
        } else {
          l = po(a);
          l.c();
          S(l, 1);
          l.m(e.parentNode, e);
        }
      } else if (l) {
        V();
        I(l, 1, 1, () => {
          l = null;
        });
        U();
      }
    },
    i(a) {
      if (o) return;
      S(l);
      o = true;
    },
    o(a) {
      I(l);
      o = false;
    },
    d(a) {
      if (a) {
        y(e);
      }
      if (l) l.d(a);
    }
  };
}
function hl(t, e, o) {
  let l;
  let a;
  let n;
  let i;
  let r;
  let s;
  let c;
  let d;
  let { $$slots: u = {}, $$scope: h } = e;
  let { scales: g } = e;
  let { options: m } = e;
  let { chartData: _ } = e;
  let { width: b } = e;
  let { height: w } = e;
  t.$$set = (p) => {
    if ("scales" in p) o(0, g = p.scales);
    if ("options" in p) o(1, m = p.options);
    if ("chartData" in p) o(2, _ = p.chartData);
    if ("width" in p) o(3, b = p.width);
    if ("height" in p) o(4, w = p.height);
    if ("$$scope" in p) o(13, h = p.$$scope);
  };
  t.$$.update = () => {
    if (t.$$.dirty & /*scales*/
    1) {
      e: o(12, l = !Boolean(g) || !Boolean(g.primaryScale) || !Boolean(g.secondaryScale));
    }
    if (t.$$.dirty & /*scales*/
    1) {
      e: o(11, a = g?.padding.top ?? 0);
    }
    if (t.$$.dirty & /*scales*/
    1) {
      e: o(10, n = g?.padding.left ?? 0);
    }
    if (t.$$.dirty & /*scales*/
    1) {
      e: o(9, i = g?.padding.right ?? 0);
    }
    if (t.$$.dirty & /*scales*/
    1) {
      e: o(8, r = g?.primaryScale?.scale.scale.range()[1] ?? 0);
    }
    if (t.$$.dirty & /*scales*/
    1) {
      e: o(7, s = g?.secondaryScale?.scale.scale.range()[0] ?? 0);
    }
    if (t.$$.dirty & /*width*/
    8) {
      e: o(6, c = oe(b));
    }
    if (t.$$.dirty & /*scales*/
    1) {
      e: o(5, d = g.secondaryScale?.scale.type === "linear" && g.secondaryScale?.ticks?.[0]?.value ? +g.secondaryScale.ticks[0]?.value : 0);
    }
  };
  return [
    g,
    m,
    _,
    b,
    w,
    d,
    c,
    s,
    r,
    i,
    n,
    a,
    l,
    h,
    u
  ];
}
var Ze = class extends E {
  constructor(e) {
    super();
    z(this, e, hl, gl, H, {
      scales: 0,
      options: 1,
      chartData: 2,
      width: 3,
      height: 4
    });
  }
};
var ko = Ze;

// src/charts/line/line-date-utils.ts
function he({ value: t }) {
  return t instanceof Date ? t.getTime() : t;
}
function Oe({
  array: t,
  value: e
}) {
  const o = he({ value: e });
  return t.some(
    (l) => he({ value: l }) === o
  );
}
var yo = ({
  data: t,
  primaryIndex: e,
  valueIndex: o,
  dottedLineSegments: l,
  primaryMappingFn: a,
  secondaryMappingFn: n
}) => {
  const i = [];
  let r = [];
  let s = "valid";
  let c = null;
  let d = "valid";
  let u = [];
  const h = ({
    segmentData: _,
    isMissingSegment: b,
    isDottedSegment: w
  }) => {
    if (_.length > 1) {
      i.push({ segmentData: _, isMissingSegment: b, isDottedSegment: w });
    }
  };
  const g = ({
    dataPrimary: _,
    plotPoint: b
  }) => {
    u = [
      ...u,
      ...l.filter(
        (w) => he({ value: w.from }) === he({ value: _ })
      )
    ];
    h({
      segmentData: [...r, b],
      isMissingSegment: false,
      isDottedSegment: s === "dotted"
    });
    r = [];
    d = "dotted";
  };
  const m = ({
    dataPrimary: _,
    plotPoint: b
  }) => {
    u = u.filter(
      (w) => he({ value: w.to }) !== he({ value: _ })
    );
    if (u.length === 0) {
      h({
        segmentData: [...r, b],
        isMissingSegment: false,
        isDottedSegment: s === "dotted"
      });
      r = [];
      d = "valid";
    }
  };
  for (let _ = 0; _ < t.length; _++) {
    const b = t[_][e];
    const w = t[_][o];
    const p = [
      a(b),
      n(w)
    ];
    if (_e(p[0]) && _e(p[1])) {
      if (s === "missing" && c) {
        h({
          segmentData: [c, p],
          isMissingSegment: true,
          isDottedSegment: false
        });
        r = [];
      }
      if (Oe({
        array: l.map((T) => T.from),
        value: b
      })) {
        g({ dataPrimary: b, plotPoint: p });
      }
      if (Oe({
        array: l.map((T) => T.to),
        value: b
      })) {
        m({ dataPrimary: b, plotPoint: p });
      }
      if (r.length === 0) {
        s = d;
      }
      r.push(p);
      c = p;
    } else if (_e(p[0]) && !_e(p[1])) {
      if (Oe({
        array: l.map((T) => T.from),
        value: b
      })) {
        g({ dataPrimary: b, plotPoint: p });
      }
      if (Oe({
        array: l.map((T) => T.to),
        value: b
      })) {
        m({ dataPrimary: b, plotPoint: p });
      }
      h({
        segmentData: r,
        isMissingSegment: s === "missing",
        // @ts-ignore - ts is confused and things activeSegment can't be dotted. It can.
        isDottedSegment: s === "dotted"
      });
      r = [];
      s = "missing";
    }
  }
  h({
    segmentData: r,
    isMissingSegment: s === "missing",
    isDottedSegment: false
  });
  return i;
};

// src/charts/line/LineData.svelte
function vo(t, e, o) {
  const l = t.slice();
  l[23] = e[o].x;
  l[24] = e[o].y;
  l[25] = e[o].seriesId;
  return l;
}
function So(t, e, o) {
  const l = t.slice();
  l[28] = e[o].d;
  l[29] = e[o].id;
  l[30] = e[o].isMissingData;
  l[31] = e[o].isDotted;
  return l;
}
function wo(t) {
  let e;
  let o;
  let l;
  let a = (
    /*tooltipMakers*/
    t[3] && /*tooltipMakers*/
    t[3].length > 0 && /*yScale*/
    t[4] && Do(t)
  );
  let n = F(
    /*paths*/
    t[2]
  );
  let i = [];
  for (let c = 0; c < n.length; c += 1) {
    i[c] = Ao(So(t, n, c));
  }
  let r = F(
    /*tooltipMakers*/
    t[3]
  );
  let s = [];
  for (let c = 0; c < r.length; c += 1) {
    s[c] = Po(vo(t, r, c));
  }
  return {
    c() {
      if (a) a.c();
      e = M();
      for (let c = 0; c < i.length; c += 1) {
        i[c].c();
      }
      o = M();
      for (let c = 0; c < s.length; c += 1) {
        s[c].c();
      }
      l = M();
    },
    m(c, d) {
      if (a) a.m(c, d);
      k(c, e, d);
      for (let u = 0; u < i.length; u += 1) {
        if (i[u]) {
          i[u].m(c, d);
        }
      }
      k(c, o, d);
      for (let u = 0; u < s.length; u += 1) {
        if (s[u]) {
          s[u].m(c, d);
        }
      }
      k(c, l, d);
    },
    p(c, d) {
      if (
        /*tooltipMakers*/
        c[3] && /*tooltipMakers*/
        c[3].length > 0 && /*yScale*/
        c[4]
      ) {
        if (a) {
          a.p(c, d);
        } else {
          a = Do(c);
          a.c();
          a.m(e.parentNode, e);
        }
      } else if (a) {
        a.d(1);
        a = null;
      }
      if (d[0] & /*paths, colorScale, missingDataStyleValue*/
      196) {
        n = F(
          /*paths*/
          c[2]
        );
        let u;
        for (u = 0; u < n.length; u += 1) {
          const h = So(c, n, u);
          if (i[u]) {
            i[u].p(h, d);
          } else {
            i[u] = Ao(h);
            i[u].c();
            i[u].m(o.parentNode, o);
          }
        }
        for (; u < i.length; u += 1) {
          i[u].d(1);
        }
        i.length = n.length;
      }
      if (d[0] & /*tooltipMakers, xScaleAdjustment, variant, colorScale*/
      680) {
        r = F(
          /*tooltipMakers*/
          c[3]
        );
        let u;
        for (u = 0; u < r.length; u += 1) {
          const h = vo(c, r, u);
          if (s[u]) {
            s[u].p(h, d);
          } else {
            s[u] = Po(h);
            s[u].c();
            s[u].m(l.parentNode, l);
          }
        }
        for (; u < s.length; u += 1) {
          s[u].d(1);
        }
        s.length = r.length;
      }
    },
    d(c) {
      if (c) {
        y(e);
        y(o);
        y(l);
      }
      if (a) a.d(c);
      W(i, c);
      W(s, c);
    }
  };
}
function Do(t) {
  let e;
  let o;
  let l;
  let a;
  let n;
  return {
    c() {
      e = A("line");
      f(e, "x1", o = /*tooltipMakers*/
      t[3][0].x + /*xScaleAdjustment*/
      t[5]);
      f(e, "x2", l = /*tooltipMakers*/
      t[3][0].x + /*xScaleAdjustment*/
      t[5]);
      f(e, "y1", a = /*yScale*/
      t[4](
        /*yScale*/
        t[4]?.domain()[0]
      ));
      f(e, "y2", n = /*yScale*/
      t[4](
        /*yScale*/
        t[4]?.domain()[1]
      ));
    },
    m(i, r) {
      k(i, e, r);
    },
    p(i, r) {
      if (r[0] & /*tooltipMakers, xScaleAdjustment*/
      40 && o !== (o = /*tooltipMakers*/
      i[3][0].x + /*xScaleAdjustment*/
      i[5])) {
        f(e, "x1", o);
      }
      if (r[0] & /*tooltipMakers, xScaleAdjustment*/
      40 && l !== (l = /*tooltipMakers*/
      i[3][0].x + /*xScaleAdjustment*/
      i[5])) {
        f(e, "x2", l);
      }
      if (r[0] & /*yScale*/
      16 && a !== (a = /*yScale*/
      i[4](
        /*yScale*/
        i[4]?.domain()[0]
      ))) {
        f(e, "y1", a);
      }
      if (r[0] & /*yScale*/
      16 && n !== (n = /*yScale*/
      i[4](
        /*yScale*/
        i[4]?.domain()[1]
      ))) {
        f(e, "y2", n);
      }
    },
    d(i) {
      if (i) {
        y(e);
      }
    }
  };
}
function To(t) {
  let e;
  let o;
  let l;
  let a;
  let n;
  return {
    c() {
      e = A("path");
      f(e, "d", o = /*d*/
      t[28]);
      f(e, "fill", l = "none");
      f(e, "stroke-width", Oo);
      f(e, "stroke", a = /*colorScale*/
      t[7](
        /*id*/
        t[29]
      ));
      f(e, "stroke-linecap", pl);
      f(e, "stroke-dasharray", n = /*isMissingData*/
      t[30] ? (
        /*missingDataStyleValue*/
        t[6]
      ) : (
        /*isDotted*/
        t[31] ? "1, 4" : null
      ));
    },
    m(i, r) {
      k(i, e, r);
    },
    p(i, r) {
      if (r[0] & /*paths*/
      4 && o !== (o = /*d*/
      i[28])) {
        f(e, "d", o);
      }
      if (r[0] & /*colorScale, paths*/
      132 && a !== (a = /*colorScale*/
      i[7](
        /*id*/
        i[29]
      ))) {
        f(e, "stroke", a);
      }
      if (r[0] & /*paths, missingDataStyleValue*/
      68 && n !== (n = /*isMissingData*/
      i[30] ? (
        /*missingDataStyleValue*/
        i[6]
      ) : (
        /*isDotted*/
        i[31] ? "1, 4" : null
      ))) {
        f(e, "stroke-dasharray", n);
      }
    },
    d(i) {
      if (i) {
        y(e);
      }
    }
  };
}
function Ao(t) {
  let e;
  let o = !/*isMissingData*/
  (t[30] && /*missingDataStyleValue*/
  t[6] === "hidden") && To(t);
  return {
    c() {
      if (o) o.c();
      e = M();
    },
    m(l, a) {
      if (o) o.m(l, a);
      k(l, e, a);
    },
    p(l, a) {
      if (!/*isMissingData*/
      (l[30] && /*missingDataStyleValue*/
      l[6] === "hidden")) {
        if (o) {
          o.p(l, a);
        } else {
          o = To(l);
          o.c();
          o.m(e.parentNode, e);
        }
      } else if (o) {
        o.d(1);
        o = null;
      }
    },
    d(l) {
      if (l) {
        y(e);
      }
      if (o) o.d(l);
    }
  };
}
function Io(t) {
  let e;
  let o;
  let l;
  let a;
  let n;
  let i;
  let r;
  return {
    c() {
      e = A("circle");
      f(e, "cx", o = /*x*/
      t[23] + /*xScaleAdjustment*/
      t[5]);
      f(e, "cy", l = /*y*/
      t[24]);
      f(e, "r", a = 4);
      f(e, "fill", n = /*variant*/
      t[9] === "light" ? "#FFFFFF" : "#000000");
      f(e, "stroke", i = /*colorScale*/
      t[7](
        /*seriesId*/
        t[25]
      ));
      f(e, "stroke-width", r = 2);
    },
    m(s, c) {
      k(s, e, c);
    },
    p(s, c) {
      if (c[0] & /*tooltipMakers, xScaleAdjustment*/
      40 && o !== (o = /*x*/
      s[23] + /*xScaleAdjustment*/
      s[5])) {
        f(e, "cx", o);
      }
      if (c[0] & /*tooltipMakers*/
      8 && l !== (l = /*y*/
      s[24])) {
        f(e, "cy", l);
      }
      if (c[0] & /*colorScale, tooltipMakers*/
      136 && i !== (i = /*colorScale*/
      s[7](
        /*seriesId*/
        s[25]
      ))) {
        f(e, "stroke", i);
      }
    },
    d(s) {
      if (s) {
        y(e);
      }
    }
  };
}
function Po(t) {
  let e = isFinite(
    /*x*/
    t[23]
  ) && isFinite(
    /*y*/
    t[24]
  );
  let o;
  let l = e && Io(t);
  return {
    c() {
      if (l) l.c();
      o = M();
    },
    m(a, n) {
      if (l) l.m(a, n);
      k(a, o, n);
    },
    p(a, n) {
      if (n[0] & /*tooltipMakers*/
      8) e = isFinite(
        /*x*/
        a[23]
      ) && isFinite(
        /*y*/
        a[24]
      );
      if (e) {
        if (l) {
          l.p(a, n);
        } else {
          l = Io(a);
          l.c();
          l.m(o.parentNode, o);
        }
      } else if (l) {
        l.d(1);
        l = null;
      }
    },
    d(a) {
      if (a) {
        y(o);
      }
      if (l) l.d(a);
    }
  };
}
function _l(t) {
  let e;
  let o = (
    /*chartData*/
    t[0] && /*scales*/
    t[1] && wo(t)
  );
  return {
    c() {
      e = A("g");
      if (o) o.c();
    },
    m(l, a) {
      k(l, e, a);
      if (o) o.m(e, null);
    },
    p(l, a) {
      if (
        /*chartData*/
        l[0] && /*scales*/
        l[1]
      ) {
        if (o) {
          o.p(l, a);
        } else {
          o = wo(l);
          o.c();
          o.m(e, null);
        }
      } else if (o) {
        o.d(1);
        o = null;
      }
    },
    i: R,
    o: R,
    d(l) {
      if (l) {
        y(e);
      }
      if (o) o.d();
    }
  };
}
var Oo = 2.5;
var ml = 3.5;
var pl = "round";
function bl(t, e, o) {
  let l;
  let a;
  let n;
  let i;
  let r;
  let s;
  let c;
  let d;
  let u;
  let h;
  let { chartData: g } = e;
  let { scales: m } = e;
  let { options: _ } = e;
  let b = [];
  let w = [];
  let p = [];
  let T = [];
  let P = null;
  let q = de();
  x(t, q, (D) => o(21, h = D));
  let X = ct;
  const O = _.variant ?? "light";
  let ae = "2,6";
  const v = (D) => c?.includes(D) ? ml : Oo;
  t.$$set = (D) => {
    if ("chartData" in D) o(0, g = D.chartData);
    if ("scales" in D) o(1, m = D.scales);
    if ("options" in D) o(10, _ = D.options);
  };
  t.$$.update = () => {
    if (t.$$.dirty[0] & /*scales*/
    2) {
      e: o(15, l = m.primaryScale.scale.scale);
    }
    if (t.$$.dirty[0] & /*scales*/
    2) {
      e: o(4, a = m.secondaryScale?.scale.scale);
    }
    if (t.$$.dirty[0] & /*scales*/
    2) {
      e: o(18, n = m.secondaryScale?.scale.fieldType);
    }
    if (t.$$.dirty[0] & /*scales*/
    2) {
      e: o(7, i = m.colorScale.scale);
    }
    if (t.$$.dirty[0] & /*scales*/
    2) {
      e: o(20, r = m.tooltipIndexScale?.scale);
    }
    if (t.$$.dirty[0] & /*chartData*/
    1) {
      e: o(16, s = g?.design.tooltips?.disableTooltips);
    }
    if (t.$$.dirty[0] & /*chartData*/
    1) {
      e: o(17, c = g?.design.seriesOptions?.emphasize);
    }
    if (t.$$.dirty[0] & /*chartData*/
    1) {
      e: o(19, d = g?.design.seriesOptions?.dottedLineSegments);
    }
    if (t.$$.dirty[0] & /*tooltipScale, $tooltipPosition*/
    3145728) {
      e: {
        if (r) {
          if (h) {
            o(13, P = r([h.x, h.y]));
          } else {
            o(13, P = null);
          }
        }
      }
    }
    if (t.$$.dirty[0] & /*scales*/
    2) {
      e: o(5, u = m.primaryScale.scale.type === "band" ? m.primaryScale.scale.scale.bandwidth() / 2 : 0);
    }
    if (t.$$.dirty[0] & /*chartData, scales*/
    3) {
      e: {
        if (g) {
          o(11, b = kt({ chartData: g, scales: m }));
        }
      }
    }
    if (t.$$.dirty[0] & /*chartData, dottedLineSegments*/
    524289) {
      e: {
        if (g && d) {
          o(12, w = yt({
            dottedLineSegmentInfos: d,
            chartData: g
          }));
        }
      }
    }
    if (t.$$.dirty[0] & /*chartData*/
    1) {
      e: {
        const D = g?.design.additionalSeriesOptions?.stepType ?? "linear";
        if (D === "stepAfter") {
          o(14, X = dt);
        } else if (D === "stepBefore") {
          o(14, X = ut);
        }
      }
    }
    if (t.$$.dirty[0] & /*chartData*/
    1) {
      e: {
        const D = g?.design.additionalSeriesOptions?.missingDataStyle ?? "dotted";
        if (D === "hidden") {
          o(6, ae = "hidden");
        } else if (D === "solid") {
          o(6, ae = null);
        }
      }
    }
    if (t.$$.dirty[0] & /*chartData, yScale, yScaleFieldType, formattedData, formattedDottedLineSegmentInfo, xScale, xScaleAdjustment, curveType, paths, emphasizedLines*/
    448565) {
      e: {
        o(2, p = []);
        const D = g?.fields.findIndex((G) => G.taxonomy?.isPrimary) ?? -1;
        if (g?.fields && D > -1 && a) {
          g.fields.forEach((G, Q) => {
            if (!G.taxonomy?.isPrimary && n === G.type) {
              const ie = yo({
                data: b,
                primaryIndex: D,
                valueIndex: Q,
                dottedLineSegments: w?.filter((K) => K.seriesId === G.id) ?? [],
                primaryMappingFn: (K) => l(K) + u,
                secondaryMappingFn: (K) => a(K)
              });
              ie.forEach((K) => {
                const qo = ft().x((Le) => Le[0]).y((Le) => Le[1]).curve(X);
                const jo = qo(K.segmentData);
                p.push({
                  d: jo,
                  name: G.name ?? "unknown",
                  id: G.id,
                  isMissingData: K.isMissingSegment,
                  isDotted: K.isDottedSegment
                });
              });
            }
          });
        }
        p.reverse();
        p.sort((G, Q) => {
          const ie = c?.indexOf(G.id) ?? -1;
          const K = c?.indexOf(Q.id) ?? -1;
          if (ie === -1 && K === -1) {
            return 0;
          }
          if (ie === -1) {
            return -1;
          }
          if (K === -1) {
            return 1;
          }
          return K - ie;
        });
      }
    }
    if (t.$$.dirty[0] & /*tooltipIndex, disableTooltip, chartData, yScale, xScale, formattedData, tooltipMakers*/
    108569) {
      e: {
        if (P && !s) {
          o(3, T = []);
          const D = P.index;
          g?.fields.forEach((G, Q) => {
            if (!G.taxonomy?.isPrimary && a) {
              const ie = {
                x: l(b[D][0]),
                y: a(b[D][Q]),
                seriesId: G.id
              };
              T.push(ie);
            }
          });
        } else {
          o(3, T = []);
        }
      }
    }
  };
  return [
    g,
    m,
    p,
    T,
    a,
    u,
    ae,
    i,
    q,
    O,
    _,
    b,
    w,
    P,
    X,
    l,
    s,
    c,
    n,
    d,
    r,
    h
  ];
}
var Je = class extends E {
  constructor(e) {
    super();
    z(this, e, bl, _l, H, { chartData: 0, scales: 1, options: 10 }, null, [-1, -1]);
  }
};
var Lo = Je;

// src/charts/_common/Legends/LegendItem.svelte
function kl(t) {
  te(t, "svelte-1rekbcb", ".legend-item.svelte-1rekbcb{display:flex;align-items:center}.legend-icon.svelte-1rekbcb{height:var(--toas-legends-item-height);overflow:visible;display:flex;justify-content:center;align-items:center;margin-right:7px;width:13px}.line-icon.svelte-1rekbcb{height:14px;width:2.5px;transform:translate(0px, 0px) rotate(45deg)}.box-icon.svelte-1rekbcb{height:10px;width:10px}.legend-label.svelte-1rekbcb{line-height:var(--toas-legends-item-height)}");
}
function Fo(t) {
  let e;
  let o;
  return {
    c() {
      e = j("div");
      f(e, "class", "line-icon svelte-1rekbcb");
      f(e, "style", o = `background-color: ${/*legendsInfo*/
      t[0].color};`);
    },
    m(l, a) {
      k(l, e, a);
    },
    p(l, a) {
      if (a & /*legendsInfo*/
      1 && o !== (o = `background-color: ${/*legendsInfo*/
      l[0].color};`)) {
        f(e, "style", o);
      }
    },
    d(l) {
      if (l) {
        y(e);
      }
    }
  };
}
function Ho(t) {
  let e;
  let o;
  return {
    c() {
      e = j("div");
      f(e, "class", "box-icon svelte-1rekbcb");
      f(e, "style", o = `background-color: ${/*legendsInfo*/
      t[0].color};`);
    },
    m(l, a) {
      k(l, e, a);
    },
    p(l, a) {
      if (a & /*legendsInfo*/
      1 && o !== (o = `background-color: ${/*legendsInfo*/
      l[0].color};`)) {
        f(e, "style", o);
      }
    },
    d(l) {
      if (l) {
        y(e);
      }
    }
  };
}
function yl(t) {
  let e;
  let o;
  let l;
  let a;
  let n;
  let i = (
    /*legendsInfo*/
    t[0].label + ""
  );
  let r;
  let s = (
    /*legendsInfo*/
    t[0].type === "line" && Fo(t)
  );
  let c = (
    /*legendsInfo*/
    t[0].type === "box" && Ho(t)
  );
  return {
    c() {
      e = j("div");
      o = j("div");
      if (s) s.c();
      l = ce();
      if (c) c.c();
      a = ce();
      n = j("div");
      r = Z(i);
      f(o, "class", "legend-icon svelte-1rekbcb");
      f(n, "class", "legend-label svelte-1rekbcb");
      f(n, "data-testid", "legend-label");
      f(e, "class", "legend-item svelte-1rekbcb");
      f(e, "data-testid", "legend-item");
    },
    m(d, u) {
      k(d, e, u);
      L(e, o);
      if (s) s.m(o, null);
      L(o, l);
      if (c) c.m(o, null);
      L(e, a);
      L(e, n);
      L(n, r);
    },
    p(d, [u]) {
      if (
        /*legendsInfo*/
        d[0].type === "line"
      ) {
        if (s) {
          s.p(d, u);
        } else {
          s = Fo(d);
          s.c();
          s.m(o, l);
        }
      } else if (s) {
        s.d(1);
        s = null;
      }
      if (
        /*legendsInfo*/
        d[0].type === "box"
      ) {
        if (c) {
          c.p(d, u);
        } else {
          c = Ho(d);
          c.c();
          c.m(o, null);
        }
      } else if (c) {
        c.d(1);
        c = null;
      }
      if (u & /*legendsInfo*/
      1 && i !== (i = /*legendsInfo*/
      d[0].label + "")) $(r, i);
    },
    i: R,
    o: R,
    d(d) {
      if (d) {
        y(e);
      }
      if (s) s.d();
      if (c) c.d();
    }
  };
}
function vl(t, e, o) {
  let { legendsInfo: l } = e;
  t.$$set = (a) => {
    if ("legendsInfo" in a) o(0, l = a.legendsInfo);
  };
  return [l];
}
var Qe = class extends E {
  constructor(e) {
    super();
    z(this, e, vl, yl, H, { legendsInfo: 0 }, kl);
  }
};
var Mo = Qe;

// src/charts/_common/Legends/Legends.svelte
function Sl(t) {
  te(t, "svelte-9w7bzk", '.toaster-chart.toaster-variant-light.toaster-is-terminal{--toas-color-primary:#fff;--toas-color-accent:#bebebe;--toas-color-background:#000;--toas-color-axis:#d8d8d8;--toas-color-zeroAxis:#d8d8d8;--toas-color-grid:#555;--toas-color-label:#d8d8d8;--toas-color-categorical-highlight-included:#db8922;--toas-color-categorical-highlight-notIncluded:#bebebe;--toas-color-palette-categorical-0:#db8922;--toas-color-palette-categorical-1:#bebebe;--toas-color-palette-categorical-2:#0051ba;--toas-color-palette-categorical-3:#b3401d;--toas-color-palette-categorical-4:#8f52b6;--toas-color-palette-categorical-5:#d7be00;--toas-color-palette-categorical-6:#009eb0;--toas-color-palette-categorical-7:#1bbc3c;--toas-color-palette-categorical-8:#ae1d86;--toas-color-continuous-highlight-included:#db8922;--toas-color-continuous-highlight-notIncluded:#bebebe;--toas-color-palette-continuous-0:#bebebe;--toas-color-palette-continuous-1:#c8b5a5;--toas-color-palette-continuous-2:#cfac8d;--toas-color-palette-continuous-3:#d4a374;--toas-color-palette-continuous-4:#d89b5b;--toas-color-palette-continuous-5:#da9241;--toas-color-palette-continuous-6:#db8922}.toaster-chart.toaster-variant-dark.toaster-is-terminal{--toas-color-primary:#fff;--toas-color-accent:#bebebe;--toas-color-background:#000;--toas-color-axis:#d8d8d8;--toas-color-zeroAxis:#d8d8d8;--toas-color-grid:#555;--toas-color-label:#d8d8d8;--toas-color-categorical-highlight-included:#db8922;--toas-color-categorical-highlight-notIncluded:#bebebe;--toas-color-palette-categorical-0:#db8922;--toas-color-palette-categorical-1:#bebebe;--toas-color-palette-categorical-2:#0051ba;--toas-color-palette-categorical-3:#b3401d;--toas-color-palette-categorical-4:#8f52b6;--toas-color-palette-categorical-5:#d7be00;--toas-color-palette-categorical-6:#009eb0;--toas-color-palette-categorical-7:#1bbc3c;--toas-color-palette-categorical-8:#ae1d86;--toas-color-continuous-highlight-included:#db8922;--toas-color-continuous-highlight-notIncluded:#bebebe;--toas-color-palette-continuous-0:#bebebe;--toas-color-palette-continuous-1:#c8b5a5;--toas-color-palette-continuous-2:#cfac8d;--toas-color-palette-continuous-3:#d4a374;--toas-color-palette-continuous-4:#d89b5b;--toas-color-palette-continuous-5:#da9241;--toas-color-palette-continuous-6:#db8922}.toaster-chart.toaster-variant-light{--toas-color-primary:#000;--toas-color-accent:#00aeff;--toas-color-background:#ffffff;--toas-color-axis:#000001;--toas-color-zeroAxis:#262626;--toas-color-grid:#dcdcdc;--toas-color-label:#000;--toas-color-categorical-highlight-included:#ff008c;--toas-color-categorical-highlight-notIncluded:#dddddd;--toas-color-palette-categorical-0:#000;--toas-color-palette-categorical-1:#ff008c;--toas-color-palette-categorical-2:#999999;--toas-color-palette-categorical-3:#00aeff;--toas-color-palette-categorical-4:#ffc400;--toas-color-palette-categorical-5:#3ef794;--toas-color-palette-categorical-6:#0037ff;--toas-color-palette-categorical-7:#00ff2a;--toas-color-palette-categorical-8:#b5cec8;--toas-color-palette-categorical-9:#c5c2d2;--toas-color-continuous-highlight-included:#ff008c;--toas-color-continuous-highlight-notIncluded:#ffd5e4;--toas-color-palette-continuous-0:#ffd5e4;--toas-color-palette-continuous-1:#ffb8d3;--toas-color-palette-continuous-2:#ff9ac2;--toas-color-palette-continuous-3:#ff79b0;--toas-color-palette-continuous-4:#ff529e;--toas-color-palette-continuous-5:#ff008c}.toaster-chart.toaster-variant-dark{--toas-color-primary:#fff;--toas-color-accent:#ffc400;--toas-color-label:#fff;--toas-color-background:#000000;--toas-color-zeroAxis:#262626;--toas-color-axis:#ffffff;--toas-color-grid:#555;--toas-color-categorical-highlight-included:#ffc400;--toas-color-categorical-highlight-notIncluded:#dddddd;--toas-color-palette-categorical-0:#999999;--toas-color-palette-categorical-1:#ffc400;--toas-color-palette-categorical-2:#ffffff;--toas-color-palette-categorical-3:#00aeff;--toas-color-palette-categorical-4:#3ef794;--toas-color-palette-categorical-5:#0037ff;--toas-color-palette-categorical-6:#00ff2a;--toas-color-palette-categorical-7:#b5cec8;--toas-color-palette-categorical-8:#c5c2d2;--toas-color-continuous-highlight-included:#ff008c;--toas-color-continuous-highlight-notIncluded:#ffd5e4;--toas-color-palette-continuous-0:#ffd5e4;--toas-color-palette-continuous-1:#ffb8d3;--toas-color-palette-continuous-2:#ff9ac2;--toas-color-palette-continuous-3:#ff79b0;--toas-color-palette-continuous-4:#ff529e;--toas-color-palette-continuous-5:#ff008c}.toaster-chart{--toas-legends-item-height:16px;--toas-legends-font-size:14px;color:black;background-color:white;stroke:black;fill:black;--toas-font-family:"BWHaasDingbat", "BWHaasText-55Roman", sans-serif}.toaster-is-terminal{--toas-font-family:"Bloomberg-PropU_N", sans-serif}.toaster-variant-dark{color:white;fill:white;stroke:white}.toaster-variant-dark:not(.toaster-transparent-bg){background-color:black}.toaster-transparent-bg{background-color:transparent !important}@font-face{font-family:"BWHaasGrotesk";font-display:swap;font-weight:400;font-style:normal;src:url("../../BWHaasGrotesk-55Fixed-586fb0c1d2.woff") format("woff2"),\n    url("../../BWHaasGrotesk-55Fixed-4164ec508c.woff2") format("woff")}@font-face{font-family:"BWHaasText-55Roman";font-display:swap;src:url("https://assets.bwbx.io/s3/fontservice/fonts/BWHaasText-55Roman-2558d87ee8.woff2")\n      format("woff2"),\n    url("https://assets.bwbx.io/s3/fontservice/fonts/BWHaasText-55Roman-887c01ff69.woff")\n      format("woff")}@font-face{font-family:"Bloomberg-PropU_N";font-display:swap;font-weight:400;font-style:normal;src:url("../../Bloomberg-PropU_N.woff2") format("woff2")\n    url("../../Bloomberg-PropU_N.woff") format("woff")}.legend-container.svelte-9w7bzk{display:flex;flex-wrap:wrap;column-gap:14px;row-gap:2px}');
}
function zo(t, e, o) {
  const l = t.slice();
  l[12] = e[o];
  return l;
}
function Eo(t) {
  let e;
  let o;
  let l;
  let a = F(
    /*legendsInfos*/
    t[0]
  );
  let n = [];
  for (let r = 0; r < a.length; r += 1) {
    n[r] = Co(zo(t, a, r));
  }
  const i = (r) => I(n[r], 1, 1, () => {
    n[r] = null;
  });
  return {
    c() {
      e = j("div");
      for (let r = 0; r < n.length; r += 1) {
        n[r].c();
      }
      f(e, "class", "legend-container svelte-9w7bzk");
      f(e, "data-testid", "legends-container");
      f(e, "style", o = `font-size: ${/*isMobile*/
      t[2] ? "12px" : "14px"}`);
    },
    m(r, s) {
      k(r, e, s);
      for (let c = 0; c < n.length; c += 1) {
        if (n[c]) {
          n[c].m(e, null);
        }
      }
      l = true;
    },
    p(r, s) {
      if (s & /*legendsInfos*/
      1) {
        a = F(
          /*legendsInfos*/
          r[0]
        );
        let c;
        for (c = 0; c < a.length; c += 1) {
          const d = zo(r, a, c);
          if (n[c]) {
            n[c].p(d, s);
            S(n[c], 1);
          } else {
            n[c] = Co(d);
            n[c].c();
            S(n[c], 1);
            n[c].m(e, null);
          }
        }
        V();
        for (c = a.length; c < n.length; c += 1) {
          i(c);
        }
        U();
      }
      if (!l || s & /*isMobile*/
      4 && o !== (o = `font-size: ${/*isMobile*/
      r[2] ? "12px" : "14px"}`)) {
        f(e, "style", o);
      }
    },
    i(r) {
      if (l) return;
      for (let s = 0; s < a.length; s += 1) {
        S(n[s]);
      }
      l = true;
    },
    o(r) {
      n = n.filter(Boolean);
      for (let s = 0; s < n.length; s += 1) {
        I(n[s]);
      }
      l = false;
    },
    d(r) {
      if (r) {
        y(e);
      }
      W(n, r);
    }
  };
}
function Co(t) {
  let e;
  let o;
  e = new Mo({
    props: { legendsInfo: (
      /*legendsInfo*/
      t[12]
    ) }
  });
  return {
    c() {
      C(e.$$.fragment);
    },
    m(l, a) {
      B(e, l, a);
      o = true;
    },
    p(l, a) {
      const n = {};
      if (a & /*legendsInfos*/
      1) n.legendsInfo = /*legendsInfo*/
      l[12];
      e.$set(n);
    },
    i(l) {
      if (o) return;
      S(e.$$.fragment, l);
      o = true;
    },
    o(l) {
      I(e.$$.fragment, l);
      o = false;
    },
    d(l) {
      N(e, l);
    }
  };
}
function wl(t) {
  let e;
  let o;
  let l = !/*hideLegends*/
  t[1] && Eo(t);
  return {
    c() {
      if (l) l.c();
      e = M();
    },
    m(a, n) {
      if (l) l.m(a, n);
      k(a, e, n);
      o = true;
    },
    p(a, [n]) {
      if (!/*hideLegends*/
      a[1]) {
        if (l) {
          l.p(a, n);
          if (n & /*hideLegends*/
          2) {
            S(l, 1);
          }
        } else {
          l = Eo(a);
          l.c();
          S(l, 1);
          l.m(e.parentNode, e);
        }
      } else if (l) {
        V();
        I(l, 1, 1, () => {
          l = null;
        });
        U();
      }
    },
    i(a) {
      if (o) return;
      S(l);
      o = true;
    },
    o(a) {
      I(l);
      o = false;
    },
    d(a) {
      if (a) {
        y(e);
      }
      if (l) l.d(a);
    }
  };
}
function Dl(t, e, o) {
  let l;
  let a;
  let n;
  let i;
  let r;
  let s;
  let c;
  let { scales: d } = e;
  let { chartData: u } = e;
  let { options: h } = e;
  let { width: g } = e;
  let m;
  t.$$set = (_) => {
    if ("scales" in _) o(3, d = _.scales);
    if ("chartData" in _) o(4, u = _.chartData);
    if ("options" in _) o(5, h = _.options);
    if ("width" in _) o(6, g = _.width);
  };
  t.$$.update = () => {
    if (t.$$.dirty & /*chartData*/
    16) {
      e: o(9, l = u.design?.seriesOptions?.emphasize ?? []);
    }
    if (t.$$.dirty & /*chartData, emphasizedSeriesIds*/
    528) {
      e: a = u.fields.filter((_) => !l.includes(_.id) && !_.taxonomy?.isPrimary).map((_) => _.id);
    }
    if (t.$$.dirty & /*chartData*/
    16) {
      e: o(10, n = u.design?.seriesOptions?.deemphasisMode ?? "opacity");
    }
    if (t.$$.dirty & /*chartData*/
    16) {
      e: o(8, i = u.annotations?.dataRangeHighlights?.highlights && u.annotations?.dataRangeHighlights?.highlights?.length > 0 && u.annotations.dataRangeHighlights?.highlights?.every((_) => _.start !== null && _.end !== null));
    }
    if (t.$$.dirty & /*hasDataHighlights, chartData*/
    272) {
      e: o(7, r = i && u.annotations?.dataRangeHighlights?.label ? u.annotations?.dataRangeHighlights?.label : "");
    }
    if (t.$$.dirty & /*width*/
    64) {
      e: o(2, s = oe(g));
    }
    if (t.$$.dirty & /*chartData*/
    16) {
      e: o(1, c = (u.design?.parsedOverrideOptions && "hideLegends" in u.design?.parsedOverrideOptions && u.design.parsedOverrideOptions.hideLegends) ?? false);
    }
    if (t.$$.dirty & /*chartData, scales, emphasizedSeriesIds, legendsInfos, deemphasisMode, options, hasDataHighlights, dataHighlightLabel*/
    1977) {
      e: {
        o(0, m = u.fields.filter((_) => !_.taxonomy?.isPrimary && _.name !== "" && _.name !== void 0).map((_) => ({
          label: _.name !== "" && _.name !== void 0 ? _.name : `Series ${_.index}`,
          color: d.colorScale.scale(_.id),
          type: "line",
          id: _.id
        })));
        if (l.length > 0) {
          o(0, m = m.sort((_, b) => {
            if (l.includes(_.id) && l.includes(b.id)) {
              return l.indexOf(_.id) - l.indexOf(b.id);
            } else if (l.includes(_.id)) {
              return -1;
            } else if (l.includes(b.id)) {
              return 1;
            } else {
              return 0;
            }
          }));
          if (n === "gray") {
            o(0, m = m.filter((_) => l.includes(_.id)));
            m.push({
              label: "Others",
              color: h?.variant === "dark" ? pt : mt,
              type: "line",
              id: "others"
            });
          }
        }
        if (i && r !== "") {
          m.push({
            label: r,
            color: h?.variant === "dark" ? pe : me,
            type: "box",
            id: "data-highlight"
          });
        }
      }
    }
  };
  return [
    m,
    c,
    s,
    d,
    u,
    h,
    g,
    r,
    i,
    l,
    n
  ];
}
var xe = class extends E {
  constructor(e) {
    super();
    z(
      this,
      e,
      Dl,
      wl,
      H,
      {
        scales: 3,
        chartData: 4,
        options: 5,
        width: 6
      },
      Sl
    );
  }
};
var Bo = xe;

// src/charts/_common/Tooltip/tooltip-utils.ts
function No(t, e) {
  const o = Object.keys(t).reduce(
    (l, a) => {
      if (e.includes(a) && isFinite(t[a]) && typeof t[a] === "number") {
        return [...l, t[a]];
      } else {
        return l;
      }
    },
    []
  );
  return Math.max(...o);
}

// src/charts/_common/Tooltip/SeriesTooltip.svelte
function Tl(t) {
  te(t, "svelte-kbpzhh", '.toaster-chart.toaster-variant-light.toaster-is-terminal{--toas-color-primary:#fff;--toas-color-accent:#bebebe;--toas-color-background:#000;--toas-color-axis:#d8d8d8;--toas-color-zeroAxis:#d8d8d8;--toas-color-grid:#555;--toas-color-label:#d8d8d8;--toas-color-categorical-highlight-included:#db8922;--toas-color-categorical-highlight-notIncluded:#bebebe;--toas-color-palette-categorical-0:#db8922;--toas-color-palette-categorical-1:#bebebe;--toas-color-palette-categorical-2:#0051ba;--toas-color-palette-categorical-3:#b3401d;--toas-color-palette-categorical-4:#8f52b6;--toas-color-palette-categorical-5:#d7be00;--toas-color-palette-categorical-6:#009eb0;--toas-color-palette-categorical-7:#1bbc3c;--toas-color-palette-categorical-8:#ae1d86;--toas-color-continuous-highlight-included:#db8922;--toas-color-continuous-highlight-notIncluded:#bebebe;--toas-color-palette-continuous-0:#bebebe;--toas-color-palette-continuous-1:#c8b5a5;--toas-color-palette-continuous-2:#cfac8d;--toas-color-palette-continuous-3:#d4a374;--toas-color-palette-continuous-4:#d89b5b;--toas-color-palette-continuous-5:#da9241;--toas-color-palette-continuous-6:#db8922}.toaster-chart.toaster-variant-dark.toaster-is-terminal{--toas-color-primary:#fff;--toas-color-accent:#bebebe;--toas-color-background:#000;--toas-color-axis:#d8d8d8;--toas-color-zeroAxis:#d8d8d8;--toas-color-grid:#555;--toas-color-label:#d8d8d8;--toas-color-categorical-highlight-included:#db8922;--toas-color-categorical-highlight-notIncluded:#bebebe;--toas-color-palette-categorical-0:#db8922;--toas-color-palette-categorical-1:#bebebe;--toas-color-palette-categorical-2:#0051ba;--toas-color-palette-categorical-3:#b3401d;--toas-color-palette-categorical-4:#8f52b6;--toas-color-palette-categorical-5:#d7be00;--toas-color-palette-categorical-6:#009eb0;--toas-color-palette-categorical-7:#1bbc3c;--toas-color-palette-categorical-8:#ae1d86;--toas-color-continuous-highlight-included:#db8922;--toas-color-continuous-highlight-notIncluded:#bebebe;--toas-color-palette-continuous-0:#bebebe;--toas-color-palette-continuous-1:#c8b5a5;--toas-color-palette-continuous-2:#cfac8d;--toas-color-palette-continuous-3:#d4a374;--toas-color-palette-continuous-4:#d89b5b;--toas-color-palette-continuous-5:#da9241;--toas-color-palette-continuous-6:#db8922}.toaster-chart.toaster-variant-light{--toas-color-primary:#000;--toas-color-accent:#00aeff;--toas-color-background:#ffffff;--toas-color-axis:#000001;--toas-color-zeroAxis:#262626;--toas-color-grid:#dcdcdc;--toas-color-label:#000;--toas-color-categorical-highlight-included:#ff008c;--toas-color-categorical-highlight-notIncluded:#dddddd;--toas-color-palette-categorical-0:#000;--toas-color-palette-categorical-1:#ff008c;--toas-color-palette-categorical-2:#999999;--toas-color-palette-categorical-3:#00aeff;--toas-color-palette-categorical-4:#ffc400;--toas-color-palette-categorical-5:#3ef794;--toas-color-palette-categorical-6:#0037ff;--toas-color-palette-categorical-7:#00ff2a;--toas-color-palette-categorical-8:#b5cec8;--toas-color-palette-categorical-9:#c5c2d2;--toas-color-continuous-highlight-included:#ff008c;--toas-color-continuous-highlight-notIncluded:#ffd5e4;--toas-color-palette-continuous-0:#ffd5e4;--toas-color-palette-continuous-1:#ffb8d3;--toas-color-palette-continuous-2:#ff9ac2;--toas-color-palette-continuous-3:#ff79b0;--toas-color-palette-continuous-4:#ff529e;--toas-color-palette-continuous-5:#ff008c}.toaster-chart.toaster-variant-dark{--toas-color-primary:#fff;--toas-color-accent:#ffc400;--toas-color-label:#fff;--toas-color-background:#000000;--toas-color-zeroAxis:#262626;--toas-color-axis:#ffffff;--toas-color-grid:#555;--toas-color-categorical-highlight-included:#ffc400;--toas-color-categorical-highlight-notIncluded:#dddddd;--toas-color-palette-categorical-0:#999999;--toas-color-palette-categorical-1:#ffc400;--toas-color-palette-categorical-2:#ffffff;--toas-color-palette-categorical-3:#00aeff;--toas-color-palette-categorical-4:#3ef794;--toas-color-palette-categorical-5:#0037ff;--toas-color-palette-categorical-6:#00ff2a;--toas-color-palette-categorical-7:#b5cec8;--toas-color-palette-categorical-8:#c5c2d2;--toas-color-continuous-highlight-included:#ff008c;--toas-color-continuous-highlight-notIncluded:#ffd5e4;--toas-color-palette-continuous-0:#ffd5e4;--toas-color-palette-continuous-1:#ffb8d3;--toas-color-palette-continuous-2:#ff9ac2;--toas-color-palette-continuous-3:#ff79b0;--toas-color-palette-continuous-4:#ff529e;--toas-color-palette-continuous-5:#ff008c}.toaster-chart{--toas-legends-item-height:16px;--toas-legends-font-size:14px;color:black;background-color:white;stroke:black;fill:black;--toas-font-family:"BWHaasDingbat", "BWHaasText-55Roman", sans-serif}.toaster-is-terminal{--toas-font-family:"Bloomberg-PropU_N", sans-serif}.toaster-variant-dark{color:white;fill:white;stroke:white}.toaster-variant-dark:not(.toaster-transparent-bg){background-color:black}.toaster-transparent-bg{background-color:transparent !important}@font-face{font-family:"BWHaasGrotesk";font-display:swap;font-weight:400;font-style:normal;src:url("../../BWHaasGrotesk-55Fixed-586fb0c1d2.woff") format("woff2"),\n    url("../../BWHaasGrotesk-55Fixed-4164ec508c.woff2") format("woff")}@font-face{font-family:"BWHaasText-55Roman";font-display:swap;src:url("https://assets.bwbx.io/s3/fontservice/fonts/BWHaasText-55Roman-2558d87ee8.woff2")\n      format("woff2"),\n    url("https://assets.bwbx.io/s3/fontservice/fonts/BWHaasText-55Roman-887c01ff69.woff")\n      format("woff")}@font-face{font-family:"Bloomberg-PropU_N";font-display:swap;font-weight:400;font-style:normal;src:url("../../Bloomberg-PropU_N.woff2") format("woff2")\n    url("../../Bloomberg-PropU_N.woff") format("woff")}.toaster--tooltip-container.svelte-kbpzhh{position:absolute;pointer-events:none}.toaster--tooltip-content-container.svelte-kbpzhh{position:absolute}');
}
function Ro(t) {
  let e;
  let o;
  let l;
  let a;
  let n;
  let i;
  l = new Mt({
    props: {
      primaryKey: (
        /*tooltipIndex*/
        t[5]?.value
      ),
      seriesData: (
        /*seriesDatas*/
        t[6]
      ),
      colorScale: (
        /*scales*/
        t[0].colorScale
      ),
      chartData: (
        /*chartData*/
        t[1]
      ),
      options: (
        /*options*/
        t[4]
      ),
      isMobile: (
        /*isMobile*/
        t[8]
      )
    }
  });
  return {
    c() {
      e = j("div");
      o = j("div");
      C(l.$$.fragment);
      f(o, "class", "toaster--tooltip-content-container svelte-kbpzhh");
      f(o, "style", a = `
        ${Re({
        width: (
          /*width*/
          t[2]
        ),
        height: (
          /*height*/
          t[3]
        ),
        tooltipPositionPx: (
          /*tooltipPositionPx*/
          t[7]
        )
      })}
      `);
      f(e, "class", "toaster--tooltip-container svelte-kbpzhh");
      f(e, "data-testid", "tooltip-container");
      f(e, "style", n = `
    top: ${/*tooltipPositionPx*/
      t[7].y}px;
    left: ${/*tooltipPositionPx*/
      t[7].x}px;
    transition: left 0.2s ease, top 0.2s ease;

  `);
    },
    m(r, s) {
      k(r, e, s);
      L(e, o);
      B(l, o, null);
      i = true;
    },
    p(r, s) {
      const c = {};
      if (s & /*tooltipIndex*/
      32) c.primaryKey = /*tooltipIndex*/
      r[5]?.value;
      if (s & /*seriesDatas*/
      64) c.seriesData = /*seriesDatas*/
      r[6];
      if (s & /*scales*/
      1) c.colorScale = /*scales*/
      r[0].colorScale;
      if (s & /*chartData*/
      2) c.chartData = /*chartData*/
      r[1];
      if (s & /*options*/
      16) c.options = /*options*/
      r[4];
      if (s & /*isMobile*/
      256) c.isMobile = /*isMobile*/
      r[8];
      l.$set(c);
      if (!i || s & /*width, height, tooltipPositionPx*/
      140 && a !== (a = `
        ${Re({
        width: (
          /*width*/
          r[2]
        ),
        height: (
          /*height*/
          r[3]
        ),
        tooltipPositionPx: (
          /*tooltipPositionPx*/
          r[7]
        )
      })}
      `)) {
        f(o, "style", a);
      }
      if (!i || s & /*tooltipPositionPx*/
      128 && n !== (n = `
    top: ${/*tooltipPositionPx*/
      r[7].y}px;
    left: ${/*tooltipPositionPx*/
      r[7].x}px;
    transition: left 0.2s ease, top 0.2s ease;

  `)) {
        f(e, "style", n);
      }
    },
    i(r) {
      if (i) return;
      S(l.$$.fragment, r);
      i = true;
    },
    o(r) {
      I(l.$$.fragment, r);
      i = false;
    },
    d(r) {
      if (r) {
        y(e);
      }
      N(l);
    }
  };
}
function Al(t) {
  let e;
  let o;
  let l = (
    /*tooltipPositionPx*/
    t[7] && !/*disableTooltip*/
    t[9] && Ro(t)
  );
  return {
    c() {
      if (l) l.c();
      e = M();
    },
    m(a, n) {
      if (l) l.m(a, n);
      k(a, e, n);
      o = true;
    },
    p(a, [n]) {
      if (
        /*tooltipPositionPx*/
        a[7] && !/*disableTooltip*/
        a[9]
      ) {
        if (l) {
          l.p(a, n);
          if (n & /*tooltipPositionPx, disableTooltip*/
          640) {
            S(l, 1);
          }
        } else {
          l = Ro(a);
          l.c();
          S(l, 1);
          l.m(e.parentNode, e);
        }
      } else if (l) {
        V();
        I(l, 1, 1, () => {
          l = null;
        });
        U();
      }
    },
    i(a) {
      if (o) return;
      S(l);
      o = true;
    },
    o(a) {
      I(l);
      o = false;
    },
    d(a) {
      if (a) {
        y(e);
      }
      if (l) l.d(a);
    }
  };
}
function Il(t, e, o) {
  let l;
  let a;
  let n;
  let i;
  let r;
  let s;
  let c;
  let d;
  let u;
  let h;
  let g;
  let { scales: m } = e;
  let { chartData: _ } = e;
  let { width: b } = e;
  let { height: w } = e;
  let { options: p } = e;
  let T = null;
  let P = null;
  let q = de();
  x(t, q, (D) => o(15, g = D));
  let X = ge();
  x(t, X, (D) => o(14, h = D));
  function O(D, G) {
    return m.primaryScale.scale.type === "time" ? m.primaryScale.scale.scale(re(`${D}`, ne[G], se(s, `${D}`, c))) : m.primaryScale.scale.scale(D);
  }
  function ae(D) {
    return m.secondaryScale?.scale.scale(D);
  }
  function v(D, G) {
    const Q = m.primaryScale.scale.type === "band" ? m.primaryScale.scale.scale.bandwidth() / 2 : 0;
    return {
      x: D + n + Q,
      y: G + a
    };
  }
  t.$$set = (D) => {
    if ("scales" in D) o(0, m = D.scales);
    if ("chartData" in D) o(1, _ = D.chartData);
    if ("width" in D) o(2, b = D.width);
    if ("height" in D) o(3, w = D.height);
    if ("options" in D) o(4, p = D.options);
  };
  t.$$.update = () => {
    if (t.$$.dirty & /*scales*/
    1) {
      e: o(13, l = m.tooltipIndexScale?.scale);
    }
    if (t.$$.dirty & /*scales*/
    1) {
      e: a = m?.padding.top ?? 0;
    }
    if (t.$$.dirty & /*scales*/
    1) {
      e: n = m?.padding.left ?? 0;
    }
    if (t.$$.dirty & /*chartData*/
    2) {
      e: o(9, i = _.design.tooltips?.disableTooltips);
    }
    if (t.$$.dirty & /*width*/
    4) {
      e: o(8, r = oe(b));
    }
    if (t.$$.dirty & /*chartData*/
    2) {
      e: s = _?.fields.find((D) => D.taxonomy?.isPrimary === true);
    }
    if (t.$$.dirty & /*chartData*/
    2) {
      e: c = _?.axis?.primary?.preserveOrder;
    }
    if (t.$$.dirty & /*tooltipScale, $tooltipPosition*/
    40960) {
      e: {
        if (l) {
          if (g) {
            o(5, T = l([g.x, g.y]));
          } else {
            o(5, T = null);
          }
        }
      }
    }
    if (t.$$.dirty & /*tooltipIndex, $seriesDataLookup*/
    16416) {
      e: o(6, d = T !== null ? h[T.value] : null);
    }
    if (t.$$.dirty & /*chartData*/
    2) {
      e: o(12, u = _?.fields.filter((D) => D.type === "numeric" && !D.taxonomy?.isPrimary).map((D) => D.id));
    }
    if (t.$$.dirty & /*tooltipIndex, seriesDatas, numericFieldIds, scales*/
    4193) {
      e: {
        if (T) {
          if (d) {
            const D = No(d, u);
            if (typeof D === "number") {
              const G = O(T.value, m.primaryScale.scale.fieldType);
              const Q = ae(D);
              if (isFinite(G) && isFinite(Q)) {
                o(7, P = v(G, Q));
              } else {
                o(7, P = null);
              }
            } else {
              o(7, P = null);
            }
          } else {
            o(7, P = null);
          }
        } else {
          o(7, P = null);
        }
      }
    }
  };
  return [
    m,
    _,
    b,
    w,
    p,
    T,
    d,
    P,
    r,
    i,
    q,
    X,
    u,
    l,
    h,
    g
  ];
}
var $e = class extends E {
  constructor(e) {
    super();
    z(
      this,
      e,
      Il,
      Al,
      H,
      {
        scales: 0,
        chartData: 1,
        width: 2,
        height: 3,
        options: 4
      },
      Tl
    );
  }
};
var Wo = $e;

// src/charts/utils/aspect-utils.ts
var Pl = 400 - 40;
var Ol = 0.66;
var Go = (t, e) => {
  const o = e?.design?.heightRatio ? t * e.design?.heightRatio : Ie;
  if (t < Pl) {
    return Math.max(o, t * Ol);
  } else {
    return o;
  }
};

// src/charts/line/Line.svelte
function Ll(t) {
  te(t, "svelte-hzi09h", '.toaster-chart.toaster-variant-light.toaster-is-terminal{--toas-color-primary:#fff;--toas-color-accent:#bebebe;--toas-color-background:#000;--toas-color-axis:#d8d8d8;--toas-color-zeroAxis:#d8d8d8;--toas-color-grid:#555;--toas-color-label:#d8d8d8;--toas-color-categorical-highlight-included:#db8922;--toas-color-categorical-highlight-notIncluded:#bebebe;--toas-color-palette-categorical-0:#db8922;--toas-color-palette-categorical-1:#bebebe;--toas-color-palette-categorical-2:#0051ba;--toas-color-palette-categorical-3:#b3401d;--toas-color-palette-categorical-4:#8f52b6;--toas-color-palette-categorical-5:#d7be00;--toas-color-palette-categorical-6:#009eb0;--toas-color-palette-categorical-7:#1bbc3c;--toas-color-palette-categorical-8:#ae1d86;--toas-color-continuous-highlight-included:#db8922;--toas-color-continuous-highlight-notIncluded:#bebebe;--toas-color-palette-continuous-0:#bebebe;--toas-color-palette-continuous-1:#c8b5a5;--toas-color-palette-continuous-2:#cfac8d;--toas-color-palette-continuous-3:#d4a374;--toas-color-palette-continuous-4:#d89b5b;--toas-color-palette-continuous-5:#da9241;--toas-color-palette-continuous-6:#db8922}.toaster-chart.toaster-variant-dark.toaster-is-terminal{--toas-color-primary:#fff;--toas-color-accent:#bebebe;--toas-color-background:#000;--toas-color-axis:#d8d8d8;--toas-color-zeroAxis:#d8d8d8;--toas-color-grid:#555;--toas-color-label:#d8d8d8;--toas-color-categorical-highlight-included:#db8922;--toas-color-categorical-highlight-notIncluded:#bebebe;--toas-color-palette-categorical-0:#db8922;--toas-color-palette-categorical-1:#bebebe;--toas-color-palette-categorical-2:#0051ba;--toas-color-palette-categorical-3:#b3401d;--toas-color-palette-categorical-4:#8f52b6;--toas-color-palette-categorical-5:#d7be00;--toas-color-palette-categorical-6:#009eb0;--toas-color-palette-categorical-7:#1bbc3c;--toas-color-palette-categorical-8:#ae1d86;--toas-color-continuous-highlight-included:#db8922;--toas-color-continuous-highlight-notIncluded:#bebebe;--toas-color-palette-continuous-0:#bebebe;--toas-color-palette-continuous-1:#c8b5a5;--toas-color-palette-continuous-2:#cfac8d;--toas-color-palette-continuous-3:#d4a374;--toas-color-palette-continuous-4:#d89b5b;--toas-color-palette-continuous-5:#da9241;--toas-color-palette-continuous-6:#db8922}.toaster-chart.toaster-variant-light{--toas-color-primary:#000;--toas-color-accent:#00aeff;--toas-color-background:#ffffff;--toas-color-axis:#000001;--toas-color-zeroAxis:#262626;--toas-color-grid:#dcdcdc;--toas-color-label:#000;--toas-color-categorical-highlight-included:#ff008c;--toas-color-categorical-highlight-notIncluded:#dddddd;--toas-color-palette-categorical-0:#000;--toas-color-palette-categorical-1:#ff008c;--toas-color-palette-categorical-2:#999999;--toas-color-palette-categorical-3:#00aeff;--toas-color-palette-categorical-4:#ffc400;--toas-color-palette-categorical-5:#3ef794;--toas-color-palette-categorical-6:#0037ff;--toas-color-palette-categorical-7:#00ff2a;--toas-color-palette-categorical-8:#b5cec8;--toas-color-palette-categorical-9:#c5c2d2;--toas-color-continuous-highlight-included:#ff008c;--toas-color-continuous-highlight-notIncluded:#ffd5e4;--toas-color-palette-continuous-0:#ffd5e4;--toas-color-palette-continuous-1:#ffb8d3;--toas-color-palette-continuous-2:#ff9ac2;--toas-color-palette-continuous-3:#ff79b0;--toas-color-palette-continuous-4:#ff529e;--toas-color-palette-continuous-5:#ff008c}.toaster-chart.toaster-variant-dark{--toas-color-primary:#fff;--toas-color-accent:#ffc400;--toas-color-label:#fff;--toas-color-background:#000000;--toas-color-zeroAxis:#262626;--toas-color-axis:#ffffff;--toas-color-grid:#555;--toas-color-categorical-highlight-included:#ffc400;--toas-color-categorical-highlight-notIncluded:#dddddd;--toas-color-palette-categorical-0:#999999;--toas-color-palette-categorical-1:#ffc400;--toas-color-palette-categorical-2:#ffffff;--toas-color-palette-categorical-3:#00aeff;--toas-color-palette-categorical-4:#3ef794;--toas-color-palette-categorical-5:#0037ff;--toas-color-palette-categorical-6:#00ff2a;--toas-color-palette-categorical-7:#b5cec8;--toas-color-palette-categorical-8:#c5c2d2;--toas-color-continuous-highlight-included:#ff008c;--toas-color-continuous-highlight-notIncluded:#ffd5e4;--toas-color-palette-continuous-0:#ffd5e4;--toas-color-palette-continuous-1:#ffb8d3;--toas-color-palette-continuous-2:#ff9ac2;--toas-color-palette-continuous-3:#ff79b0;--toas-color-palette-continuous-4:#ff529e;--toas-color-palette-continuous-5:#ff008c}.toaster-chart{--toas-legends-item-height:16px;--toas-legends-font-size:14px;color:black;background-color:white;stroke:black;fill:black;--toas-font-family:"BWHaasDingbat", "BWHaasText-55Roman", sans-serif}.toaster-is-terminal{--toas-font-family:"Bloomberg-PropU_N", sans-serif}.toaster-variant-dark{color:white;fill:white;stroke:white}.toaster-variant-dark:not(.toaster-transparent-bg){background-color:black}.toaster-transparent-bg{background-color:transparent !important}@font-face{font-family:"BWHaasGrotesk";font-display:swap;font-weight:400;font-style:normal;src:url("../../BWHaasGrotesk-55Fixed-586fb0c1d2.woff") format("woff2"),\n    url("../../BWHaasGrotesk-55Fixed-4164ec508c.woff2") format("woff")}@font-face{font-family:"BWHaasText-55Roman";font-display:swap;src:url("https://assets.bwbx.io/s3/fontservice/fonts/BWHaasText-55Roman-2558d87ee8.woff2")\n      format("woff2"),\n    url("https://assets.bwbx.io/s3/fontservice/fonts/BWHaasText-55Roman-887c01ff69.woff")\n      format("woff")}@font-face{font-family:"Bloomberg-PropU_N";font-display:swap;font-weight:400;font-style:normal;src:url("../../Bloomberg-PropU_N.woff2") format("woff2")\n    url("../../Bloomberg-PropU_N.woff") format("woff")}.toaster--chart-container.svelte-hzi09h{letter-spacing:auto}');
}
function Vo(t) {
  let e;
  let o;
  let l;
  let a;
  o = new _t({
    props: {
      chartData: (
        /*chartData*/
        t[0]
      ),
      options: (
        /*options*/
        t[1]
      ),
      $$slots: { default: [Hl] },
      $$scope: { ctx: t }
    }
  });
  return {
    c() {
      e = j("div");
      C(o.$$.fragment);
      f(e, "class", "toaster--chart-container svelte-hzi09h");
      st(() => (
        /*div_elementresize_handler*/
        t[13].call(e)
      ));
    },
    m(n, i) {
      k(n, e, i);
      B(o, e, null);
      l = nt(
        e,
        /*div_elementresize_handler*/
        t[13].bind(e)
      );
      a = true;
    },
    p(n, i) {
      const r = {};
      if (i & /*chartData*/
      1) r.chartData = /*chartData*/
      n[0];
      if (i & /*options*/
      2) r.options = /*options*/
      n[1];
      if (i & /*$$scope, scales, chartData, width, height, options*/
      32799) {
        r.$$scope = { dirty: i, ctx: n };
      }
      o.$set(r);
    },
    i(n) {
      if (a) return;
      S(o.$$.fragment, n);
      a = true;
    },
    o(n) {
      I(o.$$.fragment, n);
      a = false;
    },
    d(n) {
      if (n) {
        y(e);
      }
      N(o);
      l();
    }
  };
}
function Fl(t) {
  let e;
  let o;
  e = new Lo({
    props: {
      scales: (
        /*scales*/
        t[4]
      ),
      chartData: (
        /*chartData*/
        t[0]
      ),
      options: (
        /*options*/
        t[1]
      )
    }
  });
  return {
    c() {
      C(e.$$.fragment);
    },
    m(l, a) {
      B(e, l, a);
      o = true;
    },
    p(l, a) {
      const n = {};
      if (a & /*scales*/
      16) n.scales = /*scales*/
      l[4];
      if (a & /*chartData*/
      1) n.chartData = /*chartData*/
      l[0];
      if (a & /*options*/
      2) n.options = /*options*/
      l[1];
      e.$set(n);
    },
    i(l) {
      if (o) return;
      S(e.$$.fragment, l);
      o = true;
    },
    o(l) {
      I(e.$$.fragment, l);
      o = false;
    },
    d(l) {
      N(e, l);
    }
  };
}
function Hl(t) {
  let e;
  let o;
  let l;
  let a;
  let n;
  let i;
  let r;
  let s;
  let c;
  let d;
  let u;
  let h;
  e = new Bo({
    props: {
      scales: (
        /*scales*/
        t[4]
      ),
      chartData: (
        /*chartData*/
        t[0]
      ),
      options: (
        /*options*/
        t[1]
      ),
      width: (
        /*width*/
        t[3]
      )
    }
  });
  n = new ko({
    props: {
      scales: (
        /*scales*/
        t[4]
      ),
      options: (
        /*options*/
        t[1]
      ),
      chartData: (
        /*chartData*/
        t[0]
      ),
      width: (
        /*width*/
        t[3]
      ),
      height: (
        /*height*/
        t[2]
      ),
      $$slots: { default: [Fl] },
      $$scope: { ctx: t }
    }
  });
  s = new Wo({
    props: {
      scales: (
        /*scales*/
        t[4]
      ),
      chartData: (
        /*chartData*/
        t[0]
      ),
      width: (
        /*width*/
        t[3]
      ),
      height: (
        /*height*/
        t[2]
      ),
      options: (
        /*options*/
        t[1]
      )
    }
  });
  return {
    c() {
      C(e.$$.fragment);
      o = ce();
      l = j("div");
      a = A("svg");
      C(n.$$.fragment);
      r = ce();
      C(s.$$.fragment);
      f(a, "style", i = `
          height: ${/*height*/
      t[2]}px;
          width: ${/*width*/
      t[3]}px;
        `);
      f(l, "style", c = "position: relative");
    },
    m(g, m) {
      B(e, g, m);
      k(g, o, m);
      k(g, l, m);
      L(l, a);
      B(n, a, null);
      L(l, r);
      B(s, l, null);
      d = true;
      if (!u) {
        h = [
          He(
            a,
            "mousemove",
            /*mousemove_handler*/
            t[11]
          ),
          He(
            a,
            "mouseleave",
            /*mouseleave_handler*/
            t[12]
          )
        ];
        u = true;
      }
    },
    p(g, m) {
      const _ = {};
      if (m & /*scales*/
      16) _.scales = /*scales*/
      g[4];
      if (m & /*chartData*/
      1) _.chartData = /*chartData*/
      g[0];
      if (m & /*options*/
      2) _.options = /*options*/
      g[1];
      if (m & /*width*/
      8) _.width = /*width*/
      g[3];
      e.$set(_);
      const b = {};
      if (m & /*scales*/
      16) b.scales = /*scales*/
      g[4];
      if (m & /*options*/
      2) b.options = /*options*/
      g[1];
      if (m & /*chartData*/
      1) b.chartData = /*chartData*/
      g[0];
      if (m & /*width*/
      8) b.width = /*width*/
      g[3];
      if (m & /*height*/
      4) b.height = /*height*/
      g[2];
      if (m & /*$$scope, scales, chartData, options*/
      32787) {
        b.$$scope = { dirty: m, ctx: g };
      }
      n.$set(b);
      if (!d || m & /*height, width*/
      12 && i !== (i = `
          height: ${/*height*/
      g[2]}px;
          width: ${/*width*/
      g[3]}px;
        `)) {
        f(a, "style", i);
      }
      const w = {};
      if (m & /*scales*/
      16) w.scales = /*scales*/
      g[4];
      if (m & /*chartData*/
      1) w.chartData = /*chartData*/
      g[0];
      if (m & /*width*/
      8) w.width = /*width*/
      g[3];
      if (m & /*height*/
      4) w.height = /*height*/
      g[2];
      if (m & /*options*/
      2) w.options = /*options*/
      g[1];
      s.$set(w);
    },
    i(g) {
      if (d) return;
      S(e.$$.fragment, g);
      S(n.$$.fragment, g);
      S(s.$$.fragment, g);
      d = true;
    },
    o(g) {
      I(e.$$.fragment, g);
      I(n.$$.fragment, g);
      I(s.$$.fragment, g);
      d = false;
    },
    d(g) {
      if (g) {
        y(o);
        y(l);
      }
      N(e, g);
      N(n);
      N(s);
      u = false;
      Fe(h);
    }
  };
}
function Uo(t) {
  let e;
  let o;
  let l = (
    /*scales*/
    t[4] && Vo(t)
  );
  return {
    c() {
      if (l) l.c();
      e = M();
    },
    m(a, n) {
      if (l) l.m(a, n);
      k(a, e, n);
      o = true;
    },
    p(a, n) {
      if (
        /*scales*/
        a[4]
      ) {
        if (l) {
          l.p(a, n);
          if (n & /*scales*/
          16) {
            S(l, 1);
          }
        } else {
          l = Vo(a);
          l.c();
          S(l, 1);
          l.m(e.parentNode, e);
        }
      } else if (l) {
        V();
        I(l, 1, 1, () => {
          l = null;
        });
        U();
      }
    },
    i(a) {
      if (o) return;
      S(l);
      o = true;
    },
    o(a) {
      I(l);
      o = false;
    },
    d(a) {
      if (a) {
        y(e);
      }
      if (l) l.d(a);
    }
  };
}
function Ml(t) {
  let e = (
    /*chartData*/
    t[0]
  );
  let o;
  let l;
  let a = Uo(t);
  return {
    c() {
      a.c();
      o = M();
    },
    m(n, i) {
      a.m(n, i);
      k(n, o, i);
      l = true;
    },
    p(n, [i]) {
      if (i & /*chartData*/
      1 && H(e, e = /*chartData*/
      n[0])) {
        V();
        I(a, 1, 1, R);
        U();
        a = Uo(n);
        a.c();
        S(a, 1);
        a.m(o.parentNode, o);
      } else {
        a.p(n, i);
      }
    },
    i(n) {
      if (l) return;
      S(a);
      l = true;
    },
    o(n) {
      I(a);
      l = false;
    },
    d(n) {
      if (n) {
        y(o);
      }
      a.d(n);
    }
  };
}
function zl(t, e, o) {
  let l;
  let a;
  let n;
  let i;
  let { chartData: r } = e;
  let { initialWidth: s = gt } = e;
  let { options: c = { ...ht } } = e;
  let d;
  ao();
  io();
  const u = de();
  x(t, u, (p) => o(14, i = p));
  const h = ge();
  x(t, h, (p) => o(10, n = p));
  const g = (p) => {
    we(u, i = { x: p.offsetX, y: p.offsetY }, i);
  };
  const m = (p) => {
    we(u, i = null, i);
  };
  rt(() => {
    document.fonts.ready.then(() => {
      Ot();
      o(4, d = r ? We(r, l, a, c, n) : null);
    });
  });
  const _ = (p) => g(p);
  const b = (p) => m(p);
  function w() {
    l = this.clientWidth;
    o(3, l), o(9, s);
  }
  t.$$set = (p) => {
    if ("chartData" in p) o(0, r = p.chartData);
    if ("initialWidth" in p) o(9, s = p.initialWidth);
    if ("options" in p) o(1, c = p.options);
  };
  t.$$.update = () => {
    if (t.$$.dirty & /*chartData*/
    1) {
      e: {
        o(0, r = bt(r));
      }
    }
    if (t.$$.dirty & /*initialWidth*/
    512) {
      e: o(3, l = s);
    }
    if (t.$$.dirty & /*width, chartData*/
    9) {
      e: {
        o(2, a = Go(l, r));
      }
    }
    if (t.$$.dirty & /*chartData*/
    1) {
      e: {
        we(h, n = vt(r), n);
      }
    }
    if (t.$$.dirty & /*chartData, width, height, options, $seriesDataLookup*/
    1039) {
      e: o(4, d = r ? We(r, l, a, c, n) : null);
    }
  };
  e: o(2, a = Ie);
  return [
    r,
    c,
    a,
    l,
    d,
    u,
    h,
    g,
    m,
    s,
    n,
    _,
    b,
    w
  ];
}
var et = class extends E {
  constructor(e) {
    super();
    z(
      this,
      e,
      zl,
      Ml,
      H,
      {
        chartData: 0,
        initialWidth: 9,
        options: 1
      },
      Ll
    );
  }
  get chartData() {
    return this.$$.ctx[0];
  }
  set chartData(e) {
    this.$$set({ chartData: e });
    De();
  }
  get initialWidth() {
    return this.$$.ctx[9];
  }
  set initialWidth(e) {
    this.$$set({ initialWidth: e });
    De();
  }
  get options() {
    return this.$$.ctx[1];
  }
  set options(e) {
    this.$$set({ options: e });
    De();
  }
};
var Xo = et;

// src/charts/line/index.ts
async function zi(t) {
  const { element: e, ...o } = t;
  const l = new Xo({
    target: e,
    props: o
  });
  return {
    destroy: () => l.$destroy(),
    rerender: async (a) => {
      await tt(50);
      try {
        l.$set({
          ...a
        });
      } catch (n) {
        console.log(n);
      }
    }
  };
}
export {
  zi as render
};
