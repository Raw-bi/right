var g = Object.create;
var e = Object.defineProperty;
var h = Object.getOwnPropertyDescriptor;
var i = Object.getOwnPropertyNames;
var j = Object.getPrototypeOf;
var k = Object.prototype.hasOwnProperty;
var m = (b, a) => () => (a || b((a = { exports: {} }).exports, a), a.exports);
var n = (b, a) => {
  for (var c in a)
    e(b, c, { get: a[c], enumerable: true });
};
var l = (b, a, c, f) => {
  if (a && typeof a === "object" || typeof a === "function") {
    for (let d of i(a))
      if (!k.call(b, d) && d !== c)
        e(b, d, { get: () => a[d], enumerable: !(f = h(a, d)) || f.enumerable });
  }
  return b;
};
var o = (b, a, c) => (c = b != null ? g(j(b)) : {}, l(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  a || !b || !b.__esModule ? e(c, "default", { value: b, enumerable: true }) : c,
  b
));

export {
  m as a,
  n as b,
  o as c
};
