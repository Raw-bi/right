import {
  $d as _,
  Be as e,
  Ld as d,
  Qd as o,
  Rd as s,
  Xd as g,
  Yd as h,
  Zd as m,
  he as n,
  ke as l,
  re as u
} from "./chunk-K3YJBOOZ.js";

// src/charts/_common/Annotations/AnnotationRuler.svelte
var A = n(`<line></line>`);
var R = n(`<line></line>`);
var j = n(`<!><circle></circle>`, 1);
var q = n(`<g><!></g>`);
function B(x, t) {
  o(t, true);
  var c = q();
  var y = g(c);
  {
    var k = (f) => {
      var v = j();
      var b = h(v);
      {
        var w = (r) => {
          var i = A();
          _(() => {
            e(i, "x1", t.start);
            e(i, "x2", t.end);
            e(i, "y1", t.cy);
            e(i, "y2", t.cy);
            e(i, "stroke", t.options.variant === "light" ? "black" : "white");
          });
          l(r, i);
        };
        var z = (r) => {
          var i = R();
          _(() => {
            e(i, "x1", t.cx);
            e(i, "x2", t.cx);
            e(i, "y1", t.start);
            e(i, "y2", t.end);
            e(i, "stroke", t.options.variant === "light" ? "black" : "white");
          });
          l(r, i);
        };
        u(b, (r) => {
          if (t.orientation === "horizontal") r(w);
          else r(z, false);
        });
      }
      var a = m(b);
      e(a, "r", 4);
      e(a, "stroke-width", 1);
      _(() => {
        e(a, "cx", t.cx);
        e(a, "cy", t.cy);
        e(a, "stroke", t.options.variant === "light" ? "black" : "white");
        e(a, "fill", t.options.variant === "light" ? "white" : "black");
      });
      l(f, v);
    };
    u(y, (f) => {
      if (t.cx !== void 0 && t.cy !== void 0 && t.start !== void 0 && t.end !== void 0) f(k);
    });
  }
  d(c);
  l(x, c);
  s();
}

export {
  B as a
};
//# sourceMappingURL=chunk-JGAF2UPG.js.map
