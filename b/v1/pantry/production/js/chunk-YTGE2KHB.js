// src/package.ts
var g = `https://mississippi.river.to/right/b/v1`;
var i = "https://mississippi.river.to";
var n = (c = "prod") => {
  const a = (r) => `${u}/${r}/${c}/js/client.module.js`;
  return {
    ai2html: {
      path: { default: a("ai2html") },
      legacy: true,
      package: "ai2html"
    },
    area: {
      path: { default: a("series-charts") },
      legacy: true,
      package: "series-charts"
    },
    bar: {
      path: { default: a("series-charts") },
      legacy: true,
      package: "series-charts"
    },
    barline: {
      path: { default: a("series-charts") },
      legacy: true,
      package: "series-charts"
    },
    breakdown: {
      path: { default: a("series-charts") },
      legacy: true,
      package: "series-charts"
    },
    bubblemap: {
      path: { default: a("bubblemap") },
      legacy: true,
      package: "bubblemap"
    },
    choropleth: {
      path: { default: a("choropleth") },
      legacy: true,
      package: "choropleth"
    },
    comparison: {
      path: {
        default: a("series-charts"),
        v1: "/charts/comparison/index.js"
      },
      legacy: true,
      package: "series-charts"
    },
    dumbbell: {
      path: { default: a("series-charts") },
      legacy: true,
      package: "series-charts"
    },
    embed: {
      path: { default: a("ai2html") },
      legacy: true,
      package: "ai2html"
    },
    hbar: {
      path: { default: a("series-charts") },
      legacy: true,
      package: "series-charts"
    },
    heatmap: {
      path: { default: a("table") },
      legacy: true,
      package: "table"
    },
    horizontalDumbbell: {
      path: { default: a("series-charts") },
      legacy: true,
      package: "series-charts"
    },
    line: {
      path: {
        default: a("series-charts"),
        v1: "/charts/line/index.js"
      },
      legacy: true,
      package: "series-charts"
    },
    locatormap: {
      path: { default: a("locatormap") },
      legacy: true,
      package: "locatormap"
    },
    multiples: {
      path: { default: a("series-charts") },
      legacy: true,
      package: "series-charts"
    },
    performanceChart: {
      path: { default: a("series-charts") },
      legacy: true,
      package: "series-charts"
    },
    pie: {
      path: {
        default: a("series-charts"),
        v1: "/charts/pie/index.js"
      },
      legacy: true,
      package: "series-charts"
    },
    scatterPlot: {
      path: { default: a("series-charts") },
      legacy: true,
      package: "series-charts"
    },
    stackedHbar: {
      path: { default: a("series-charts") },
      legacy: true,
      package: "series-charts"
    },
    stackedVbar: {
      path: { default: a("series-charts") },
      legacy: true,
      package: "series-charts"
    },
    table: {
      path: { default: a("table") },
      legacy: true,
      package: "table"
    }
  };
};
function o(c, a = {}) {
  const { env: r = "prod", terminal: l = false, version: p } = a;
  const t = n(r)[c];
  if (!t) return null;
  let e = t.path.default;
  let h = Boolean(t.legacy);
  let s = t.package;
  if (p === 0 && t.path.v0) {
    e = t.path.v0;
  }
  if (p === 1 && t.path.v1) {
    e = t.path.v1;
    h = false;
    s = "pantry";
  }
  if (l && s !== "pantry") {
    e = `${g}${e}`;
  }
  const i = `/toaster-packages/v1/pantry/${r}/js`;
  if (s === "pantry") {
    if (l) e = `${g}${i}${e}`;
    if (a?.assetPath) e = `${a.assetPath}${e}`;
    if (!l && !a?.assetPath) e = `${i}${e}`;
  }
  return { path: e, legacy: h, name: s };
}

export {
  u as a,
  g as b,
  n as c,
  o as d
};
