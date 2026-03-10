import {
  f as u
} from "./chunk-LMFSDKL5.js";

// src/charts/line/lineData.utils.ts
function l({ value: i }) {
  return i instanceof Date ? i.getTime() : i;
}
function f({
  array: i,
  value: y
}) {
  const D = l({ value: y });
  return i.some(
    (o) => l({ value: o }) === D
  );
}
var V = ({
  data: i,
  primaryIndex: y,
  valueIndex: D,
  dottedLineSegments: o,
  primaryMappingFn: M,
  secondaryMappingFn: h
}) => {
  const S = [];
  let a = [];
  let s = "valid";
  let b = null;
  let p = "valid";
  let d = [];
  const g = ({
    segmentData: t,
    isMissingSegment: e,
    isDottedSegment: m
  }) => {
    if (t.length > 1) {
      S.push({ segmentData: t, isMissingSegment: e, isDottedSegment: m });
    }
  };
  const v = ({
    dataPrimary: t,
    plotPoint: e
  }) => {
    d = [
      ...d,
      ...o.filter(
        (m) => l({ value: m.from }) === l({ value: t })
      )
    ];
    g({
      segmentData: [...a, e],
      isMissingSegment: false,
      isDottedSegment: s === "dotted"
    });
    a = [];
    p = "dotted";
  };
  const c = ({
    dataPrimary: t,
    plotPoint: e
  }) => {
    d = d.filter(
      (m) => l({ value: m.to }) !== l({ value: t })
    );
    if (d.length === 0) {
      g({
        segmentData: [...a, e],
        isMissingSegment: false,
        isDottedSegment: s === "dotted"
      });
      a = [];
      p = "valid";
    }
  };
  for (let t = 0; t < i.length; t++) {
    const e = i[t][y];
    const m = i[t][D];
    const n = [
      M(e),
      h(m)
    ];
    if (u(n[0]) && u(n[1])) {
      if (s === "missing" && b) {
        g({
          segmentData: [b, n],
          isMissingSegment: true,
          isDottedSegment: false
        });
        a = [];
      }
      if (f({
        array: o.map((r) => r.from),
        value: e
      })) {
        v({ dataPrimary: e, plotPoint: n });
      }
      if (f({
        array: o.map((r) => r.to),
        value: e
      })) {
        c({ dataPrimary: e, plotPoint: n });
      }
      if (a.length === 0) {
        s = p;
      }
      a.push(n);
      b = n;
    } else if (u(n[0]) && !u(n[1])) {
      if (f({
        array: o.map((r) => r.from),
        value: e
      })) {
        v({ dataPrimary: e, plotPoint: n });
      }
      if (f({
        array: o.map((r) => r.to),
        value: e
      })) {
        c({ dataPrimary: e, plotPoint: n });
      }
      g({
        segmentData: a,
        isMissingSegment: s === "missing",
        // @ts-ignore - ts is confused and things activeSegment can't be dotted. It can.
        isDottedSegment: s === "dotted"
      });
      a = [];
      s = "missing";
    }
  }
  g({
    segmentData: a,
    isMissingSegment: s === "missing",
    isDottedSegment: false
  });
  return S;
};

export {
  V as a
};
//# sourceMappingURL=chunk-X6YZ7DDU.js.map
