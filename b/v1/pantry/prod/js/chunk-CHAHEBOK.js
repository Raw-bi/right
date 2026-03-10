// ../utils/src/data/commands.ts
var f = () => {
  return [
    "Govt",
    "Corp",
    "Mtge",
    "M-Mkt",
    "Muni",
    "Pfd",
    "Equity",
    "Comdty",
    "Index",
    "Curncy",
    "Alpha",
    "Client"
  ];
};
var p = (r) => {
  let e = "";
  const i = [];
  let n = "";
  const t = r.trim().split(/\s+/);
  let o = 0;
  let s = 0;
  let a = t[0].toUpperCase();
  if (a === "FIFW" || a === "NXTW") {
    t.shift();
  } else {
    a = "";
  }
  const m = f();
  for (let l = 0; l < t.length; l++) {
    const u = t[l];
    if (m.indexOf(u) >= 0) {
      s = l;
      const g = t.slice(o, s).join(" ").toUpperCase();
      i.push(g + " " + u);
      o = l + 1;
    }
  }
  if (i.length) {
    e = t[s + 1] || "";
    if (s + 2 < t.length) {
      n = t.slice(s + 2).join(" ");
    }
  } else {
    e = t[0] || "";
    if (t.length > 1) {
      n = t.slice(1).join(" ");
    }
  }
  const d = [
    "ALERT",
    "BADGE",
    "BRIEF",
    "BSHAR",
    "BUNIT",
    "CHART",
    "CHOMP",
    "DAYBR",
    "DRAFT",
    "FIRST",
    "FLAGS",
    "GIPALL",
    "JREAD",
    "LONDON",
    "MEDIA",
    "MTEAM",
    "NOTES",
    "PEOPLE",
    "PHISH",
    "QDASH",
    "QUICK",
    "RTCPU",
    "RVIEW",
    "SEARCH",
    "TFLOW",
    "TRACE",
    "TWEET",
    "TWEETS",
    "TWITTER",
    "USSWAP",
    "WATCH"
  ];
  if (!e) {
    if (i.length > 0) {
      e = "Q";
    }
  } else if (d.includes(e)) {
    e = e.substring(0, 4);
  }
  return { mnemonic: e, securities: i, tail: n, prefix: a };
};

// src/utils/buttons.ts
var c = {
  "toaster-function-link": {
    title: "Click to open chart in function.",
    icon: "popout",
    text: (r) => {
      const { mnemonic: e } = p(r ?? "");
      return `Open Chart in ${e}`;
    }
  }
};
function T({
  buttonType: r,
  avmmId: e,
  origin: i
}) {
  const n = { action: r, origin: i, value: e };
  return x(n);
}
function y({
  element: r,
  avmmId: e,
  origin: i,
  functionLink: n
}) {
  if (!n) return null;
  const t = document.createElement("div");
  t.className = "terminal-buttons";
  t.appendChild(b());
  const o = "toaster-function-link";
  const s = E({
    href: n,
    metadata: T({ buttonType: o, origin: i, avmmId: e }),
    text: c[o].text(n),
    title: c[o].title,
    icon: c[o].icon
  });
  t.appendChild(s);
  r.appendChild(t);
  return t;
}
function E({
  href: r,
  text: e,
  title: i,
  metadata: n,
  icon: t
}) {
  const o = document.createElement("a");
  o.className = "terminal-button";
  o.title = i;
  o.href = `bbg://screens/${encodeURI(r)}`;
  o.setAttribute("data-link", n);
  if (t) {
    const a = document.createElement("img");
    a.className = "terminal-button-icon";
    a.src = `styles/icons/images/${t}.svg`;
    o.appendChild(a);
  }
  const s = document.createElement("span");
  s.className = "terminal-button-text";
  s.innerText = e;
  o.appendChild(s);
  return o;
}
function b() {
  const r = document.createElement("style");
  r.textContent = `
    .terminal-buttons {
      display: flex !important;
      justify-content: flex-start;
      margin-top: 12px;
    }
    .terminal-button {
      width: fit-content;
      padding: 5px;
      display: flex;
      justify-content: center;
      align-items: center;
      column-gap: 4px;
      cursor: pointer;
      color: #f0f0f0;
      font-size: 14px;
      line-height: 18px;
      text-align: center;
      background-color: #222222;
      transition: background-color 0.2s ease;
    }
    .terminal-button:hover {
      background-color: #333333;
      border-radius: 4px;
    }
    .terminal-button .terminal-button-icon {
      height: 18px;
    }
  `;
  return r;
}
function x(r) {
  const e = Object.entries(r).sort(
    (i, n) => i[0] < n[0] ? -1 : i[0] > n[0] ? 1 : 0
  );
  return e.map(([i, n]) => `${i}=${n}`).join("&");
}

export {
  c as a,
  T as b,
  y as c
};
//# sourceMappingURL=chunk-CHAHEBOK.js.map
