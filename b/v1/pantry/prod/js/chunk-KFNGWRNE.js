import {
  A as P,
  Pe as I,
  Qe as A,
  Se as M,
  Te as L,
  ad as D,
  fc as C,
  hc as b,
  va as x
} from "./chunk-K3YJBOOZ.js";

// src/charts/utils/scales/scale-info-calculators/smallMultiplesScaleInfoCalculator.ts
var O = (t) => {
  const d = t.multiples;
  const c = t.fields.find((o) => o.taxonomy?.isPrimary);
  if (!c) return [];
  const g = d?.options?.length ?? x(t).length ?? 1;
  const m = [];
  for (let o = 0; o < g; o++) {
    const f = d?.options?.[o] ?? M(t, o) ?? 1;
    const h = d?.smallMultiplesType ?? "line";
    const u = f?.axisProperties ?? {};
    const p = t.fields.filter(
      (e) => e.taxonomy?.isPrimary || f?.fieldIds?.includes(e.id)
    ).map((e, l) => ({ ...e, index: l }));
    const y = {
      ...t,
      isSubChart: true,
      type: h,
      fields: p,
      axis: {
        ...t.axis,
        secondary: { ...t.axis.secondary, ...u }
      },
      annotations: {
        ...t.annotations,
        textAnnotations: t.annotations?.textAnnotations?.filter(
          (e) => e.seriesId && p.map((l) => l.id).includes(e.seriesId)
        ),
        thresholdIndicators: t.annotations?.thresholdIndicators?.filter(
          (e) => e.panel === "all" || e.panel === o
        )
      },
      data: t?.data?.map((e) => {
        return e.filter((l, r) => {
          const i = t.fields[r];
          return i?.taxonomy?.isPrimary || p.map((S) => S.id).includes(i?.id);
        });
      })
    };
    m.push(y);
  }
  return m;
};
var R = ({
  chartData: t,
  width: d,
  svgWidth: c,
  options: g,
  colorScale: m,
  height: o,
  seriesDataLookup: f,
  scaffoldHeight: h,
  legendHeight: u,
  labelHeights: p,
  layerId: y
}) => {
  const e = O(t);
  const l = e.map((a) => {
    const s = D({
      chartData: a,
      width: c,
      height: o,
      options: g,
      seriesDataLookup: f,
      customColorScale: m
    });
    if (!s) return null;
    const n = a.fields.filter((w) => !w.taxonomy?.isPrimary)?.[0]?.name ?? "";
    return {
      chartData: a,
      scales: s,
      chartLabel: n
    };
  }).filter((a) => a !== null);
  let r = 0;
  let i = 0;
  l.forEach((a) => {
    const s = a.scales.padding.left;
    const n = a.scales.padding.right;
    if (s > r) r = s;
    if (n > i) i = n;
  });
  l.forEach((a) => {
    a.scales.padding.left = r;
    a.scales.padding.right = i;
    a.scales.primaryScale.scale.scale.range([
      0,
      c - r - i
    ]);
    const s = a.chartData.fields.find((n) => n.taxonomy?.isPrimary);
    if (s) {
      a.scales.tooltipIndexScale = C({
        chartData: a.chartData,
        field: s,
        scale: a.scales.primaryScale.scale,
        leftPadding: a.scales.padding.left
      });
      const n = a.chartData;
      if ((n.type === "line" || n.type === "area") && a.scales.secondaryScale) {
        a.scales.annotationScale = b({
          xField: s,
          yFields: n.fields,
          xScale: a.scales.primaryScale.scale,
          yScale: a.scales.secondaryScale.scale,
          leftPadding: a.scales.padding.left,
          topPadding: a.scales.padding.top,
          chartData: n
        });
      } else {
        a.scales.annotationScale = null;
      }
    }
  });
  const S = L(t, d);
  if (typeof window !== "undefined" && l && y) {
    window.parent.postMessage(
      {
        type: "chartLayoutUpdate",
        scaffoldHeight: h ?? 0,
        // includes header, exclude legends
        svgs: {
          legends: u ? u + P : 0,
          content: l.map((a, s) => {
            return {
              legends: 0,
              subtitle: p?.[s] ?? 0,
              width: c ?? 0,
              height: o ?? 0,
              padding: {
                left: a.scales.padding.left ?? 0,
                right: a.scales.padding.right ?? 0,
                top: a.scales.padding.top ?? 0,
                bottom: a.scales.padding.bottom ?? 0
              }
            };
          }),
          numberOfColumns: S,
          gap: { row: A, column: I }
        },
        layerId: y
      },
      "*"
    );
  }
  return l;
};

export {
  O as a,
  R as b
};
//# sourceMappingURL=chunk-KFNGWRNE.js.map
