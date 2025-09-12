// src/package.ts
var g = `https://vnwb8wxvjr4inj.the.bi/char/berg/v1`;
var i = "https://vnwb8wxvjr4inj.the.bi";
var u = (c = "production") => {
  const a = (s) => `${g}/${s}/${c}/js/client.module.js`;
  return {
    ai2html: {
      path: {
        default: a("ai2html")
      },
      legacy: true,
      package: "ai2html"
    },
    area: {
      path: {
        default: a("series-charts")
      },
      legacy: true,
      package: "series-charts"
    },
    bar: {
      path: {
        default: a("series-charts")
      },
      legacy: true,
      package: "series-charts"
    },
    barline: {
      path: {
        default: a("series-charts")
      },
      legacy: true,
      package: "series-charts"
    },
    breakdown: {
      path: {
        default: a("series-charts")
      },
      legacy: true,
      package: "series-charts"
    },
    bubblemap: {
      path: {
        default: a("bubblemap")
      },
      legacy: true,
      package: "bubblemap"
    },
    choropleth: {
      path: {
        default: a("choropleth")
      },
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
      path: {
        default: a("series-charts")
      },
      legacy: true,
      package: "series-charts"
    },
    embed: {
      path: {
        default: a("ai2html")
      },
      legacy: true,
      package: "ai2html"
    },
    hbar: {
      path: {
        default: a("series-charts")
      },
      legacy: true,
      package: "series-charts"
    },
    heatmap: {
      path: {
        default: a("table")
      },
      legacy: true,
      package: "table"
    },
    horizontalDumbbell: {
      path: {
        default: a("series-charts")
      },
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
      path: {
        default: a("locatormap")
      },
      legacy: true,
      package: "locatormap"
    },
    multiples: {
      path: {
        default: a("series-charts")
      },
      legacy: true,
      package: "series-charts"
    },
    performanceChart: {
      path: {
        default: a("series-charts")
      },
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
      path: {
        default: a("series-charts")
      },
      legacy: true,
      package: "series-charts"
    },
    stackedHbar: {
      path: {
        default: a("series-charts")
      },
      legacy: true,
      package: "series-charts"
    },
    stackedVbar: {
      path: {
        default: a("series-charts")
      },
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
function n(c, a = {}) {
  const { env: s = "production", terminal: l = false, version: p } = a;
  const t = u(s)[c];
  if (!t) return null;
  let e = t.path.default;
  let h = Boolean(t.legacy);
  let r = t.package;
  if (p === 0 && t.path.v0) {
    e = t.path.v0;
  }
  if (p === 1 && t.path.v1) {
    e = t.path.v1;
    h = false;
    r = "pantry";
  }
  if (l && r !== "pantry") {
    e = `${i}${e}`;
  }
  if (l && r === "pantry") {
    e = `${i}/toaster-packages/v1/pantry/${s}/js${e}`;
  }
  if (r === "pantry" && a?.assetPath) {
    e = `${a.assetPath}${e}`;
  }
  return {
    path: e,
    legacy: h,
    name: r
  };
}

export {
  g as a,
  i as b,
  u as c,
  n as d
};
