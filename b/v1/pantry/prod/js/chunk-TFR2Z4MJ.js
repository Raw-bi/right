import {
  v as r
} from "./chunk-K3YJBOOZ.js";

// src/charts/utils/aspect.utils.ts
var m = 400 - 40;
var n = 0.66;
var s = (e, t) => {
  const o = t?.design?.heightRatio ? e * t.design?.heightRatio : r;
  if (e < m) {
    return Math.max(o, e * n);
  } else {
    return o;
  }
};

export {
  s as a
};
//# sourceMappingURL=chunk-TFR2Z4MJ.js.map
