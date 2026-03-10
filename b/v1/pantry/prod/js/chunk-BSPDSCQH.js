import {
  $c as S,
  Uc as g,
  va as c,
  wd as h,
  xd as A
} from "./chunk-K3YJBOOZ.js";

// src/charts/dual-axis/utils.ts
var D = /* @__PURE__ */ ((t) => {
  t[t["right"] = 0] = "right";
  t[t["left"] = 1] = "left";
  return t;
})(D || {});
var F = (e, i) => {
  const t = e.fields.filter((a) => !a.taxonomy?.isPrimary).map((a) => a.id);
  if (i === "right") {
    return {
      chartType: "line",
      fieldIds: t?.[0] ? [t?.[0]] : [],
      axisProperties: {},
      panelHeight: "medium",
      panelDescription: ""
    };
  } else {
    return {
      chartType: "line",
      fieldIds: t ? t.slice(1) : [],
      axisProperties: {},
      panelHeight: "medium",
      panelDescription: ""
    };
  }
};
var M = (e, i, t) => {
  const a = e?.dualAxis?.[t] ?? F(e, t);
  const p = {
    ...a.axisProperties
  };
  const n = e.fields.filter(
    (s) => s.taxonomy?.isPrimary || a.fieldIds.includes(s.id)
  ).map((s, f) => ({ ...s, index: f }));
  const m = n.map((s) => s.id);
  const l = a.chartType ?? "line";
  const r = {
    ...e,
    type: l,
    fields: n,
    annotations: {
      ...e.annotations,
      textAnnotations: e?.annotations?.textAnnotations?.filter(
        (s) => m.includes(s.seriesId ?? "")
      ),
      thresholdIndicators: e?.annotations?.thresholdIndicators?.filter(
        (s) => s.panel === t
      )
    },
    data: e?.data?.map((s) => {
      return s.filter((f, x) => {
        const y = e.fields[x];
        return y?.taxonomy?.isPrimary || n.map((P) => P.id).includes(y?.id);
      });
    })
  };
  let d;
  if (l === "area" || l === "stackedVbar") {
    d = A({
      fields: c(r),
      range: [i, 0],
      axisProperties: p,
      chartData: r
    });
  } else {
    d = h({
      fields: c(r),
      range: [i, 0],
      axisProperties: p,
      chartData: r,
      enforceZero: S({ type: l })
    });
  }
  return {
    scale: d,
    axisProperties: p,
    axisChartData: r
  };
};

// src/charts/stacked-panel/utils.ts
var C = {
  small: 80,
  medium: 120,
  large: 200
};
var V = (e, i) => {
  const t = c(e);
  return {
    chartType: "line",
    fieldIds: i < 2 ? [t[i].id] : t.slice(2).map((a) => a.id),
    axisProperties: {},
    panelHeight: "medium",
    panelDescription: ""
  };
};
var N = (e, i) => {
  let t = [];
  const a = g(e);
  const p = e.stackedPanels?.numPanels ?? a.length;
  for (let n = 0; n < p; n++) {
    const m = e.stackedPanels?.options;
    const l = e.stackedPanels?.options?.[n] ?? V(e, n);
    const r = l.fieldIds;
    const d = l.axisProperties;
    const s = C[l.panelHeight];
    const f = d ?? {};
    const x = e?.stackedPanels?.options?.[n]?.panelDescription;
    const y = {
      ...e,
      type: m?.[n]?.chartType ?? "line",
      fields: e.fields.filter((o) => o.taxonomy?.isPrimary || r.includes(o.id)).map((o, u) => ({ ...o, index: u })),
      //remap the index for filtered fields
      data: e.data.map((o) => {
        return o.filter((u, T) => {
          const I = e.fields[T];
          return I?.taxonomy?.isPrimary || r.includes(I?.id);
        });
      }),
      annotations: {
        ...e.annotations,
        textAnnotations: e.annotations?.textAnnotations?.filter(
          (o) => o.seriesId !== null && r.includes(o.seriesId)
        ) ?? [],
        thresholdIndicators: e.annotations?.thresholdIndicators?.filter(
          (o) => o.panel === n
        ) ?? []
      }
    };
    const P = {
      primaryScale: i.primaryScale,
      secondaryScale: i.secondaryScales[n],
      colorScale: i.colorScale,
      tooltipIndexScale: i.tooltipIndexScale,
      padding: i.paddings[n],
      ...i?.annotationScales?.[n] && {
        annotationScale: i?.annotationScales?.[n]
      }
    };
    const k = {
      chartData: y,
      scale: P,
      axisProperties: f,
      seriesType: m?.[n]?.chartType ?? "line",
      fieldIds: r,
      panelHeight: s,
      panelDescription: x
    };
    t.push(k);
  }
  return t;
};

export {
  D as a,
  F as b,
  M as c,
  C as d,
  V as e,
  N as f
};
//# sourceMappingURL=chunk-BSPDSCQH.js.map
