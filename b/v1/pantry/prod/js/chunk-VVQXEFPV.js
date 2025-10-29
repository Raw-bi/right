// src/package.ts
var g = `/right/b/v1`;
var n = "https://mississippi.river.to";
var d = (c = "prod") => {
  const a = (s) => `${g}/${s}/${c}/js/client.module.js`;
  return {
    ai2html: {
      path: { default: a("ai2html") },
      legacy: true,
      package: "ai2html"
    },
    area: {
      path: {
        default: a("series-charts"),
        v1: "/charts/area/index.js"
      },
      legacy: true,
      package: "series-charts"
    },
    bar: {
      path: {
        default: a("series-charts"),
        v1: "/charts/bar/index.js"
      },
      legacy: true,
      package: "series-charts"
    },
    barline: {
      path: {
        default: a("series-charts"),
        v1: "/charts/line-bar/index.js"
      },
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
    candlestick: {
      path: {
        default: "",
        v1: "/charts/candlestick/index.js"
      },
      legacy: false,
      package: "series-charts"
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
    embed: {
      path: { default: a("ai2html") },
      legacy: true,
      package: "ai2html"
    },
    hbar: {
      path: {
        default: a("series-charts"),
        v1: "/charts/hbar/index.js"
      },
      legacy: true,
      package: "series-charts"
    },
    horizontalDumbbell: {
      path: {
        default: a("series-charts"),
        v1: "/charts/dumbbell/index.js"
      },
      legacy: true,
      package: "series-charts"
    },
    heatmap: {
      path: { default: a("table") },
      legacy: true,
      package: "table"
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
      path: {
        default: a("series-charts"),
        v1: "/charts/multiples/index.js"
      },
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
      path: {
        default: a("series-charts"),
        v1: "/charts/stacked-h-bar/index.js"
      },
      legacy: true,
      package: "series-charts"
    },
    stackedVbar: {
      path: {
        default: a("series-charts"),
        v1: "/charts/stacked-v-bar/index.js"
      },
      legacy: true,
      package: "series-charts"
    },
    table: {
      path: { default: a("table") },
      legacy: true,
      package: "table"
    },
    stackedPanel: {
      path: {
        default: "/charts/stacked-panel/index.js",
        v1: "/charts/stacked-panel/index.js"
      },
      legacy: false,
      // stackedPanel is not legacy
      package: "na"
    },
    dumbbell: {
      path: {
        default: a("series-charts"),
        v1: "/charts/dumbbell/index.js"
      },
      legacy: true,
      package: "series-charts"
    },
    dualAxis: {
      path: {
        default: "/charts/dual-axis/index.js",
        v1: "/charts/dual-axis/index.js"
      },
      legacy: false,
      //dualaxis is not in legacy
      package: "na"
    }
  };
};
function o(c, a = {}) {
  const { env: s = "prod", terminal: u = false, version: h } = a;
  const l = a.useAbsolutePaths || u;
  const t = d(s)[c];
  if (!t) return null;
  let e = t.path.default;
  let p = Boolean(t.legacy);
  let r = t.package;
  if (h === 0 && t.path.v0) {
    e = t.path.v0;
  }
  if (h === 1 && t.path.v1) {
    e = t.path.v1;
    p = false;
    r = "pantry";
  }
  if (l && r !== "pantry") {
    e = `${n}${e}`;
  }
  const i = `/toaster-packages/v1/pantry/${s}/js`;
  if (r === "pantry") {
    if (l)
      e = `${n}${i}${e}`;
    if (a?.assetPath) e = `${a.assetPath}${e}`;
    if (!l && !a?.assetPath) e = `${i}${e}`;
  }
  return { path: e, legacy: p, name: r };
}

export {
  g as a,
  n as b,
  d as c,
  o as d
};
