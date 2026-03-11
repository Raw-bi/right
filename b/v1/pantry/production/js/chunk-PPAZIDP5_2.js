// src/utils/buttons.ts
var c = {
  "toaster-function-link": {
    title: "Click to open chart in function.",
    icon: "popout",
    text: (e, i) => {
      const t = e.replace(" Chart", "");
      const n = i.startsWith("G NEWS8") ? "G" : t;
      return `Open Chart in ${n}`;
    }
  }
};
function l({
  buttonType: e,
  avmmId: i,
  origin: t
}) {
  const n = { action: e, origin: t, value: i };
  return p(n);
}
function d({
  element: e,
  avmmId: i,
  origin: t,
  functionLink: n
}) {
  if (t === "Toaster" || !n) return null;
  const o = document.createElement("div");
  o.className = "terminal-buttons";
  o.appendChild(m());
  const r = "toaster-function-link";
  const a = u({
    href: n,
    metadata: l({ buttonType: r, origin: t, avmmId: i }),
    text: c[r].text(t, n),
    title: c[r].title,
    icon: c[r].icon
  });
  o.appendChild(a);
  e.appendChild(o);
  return o;
}
function u({
  href: e,
  text: i,
  title: t,
  metadata: n,
  icon: o
}) {
  const r = document.createElement("a");
  r.className = "terminal-button";
  r.title = t;
  r.href = `bbg://screens/${encodeURI(e)}`;
  r.setAttribute("data-link", n);
  if (o) {
    const s = document.createElement("img");
    s.className = "terminal-button-icon";
    s.src = `styles/icons/images/${o}.svg`;
    r.appendChild(s);
  }
  const a = document.createElement("span");
  a.className = "terminal-button-text";
  a.innerText = i;
  r.appendChild(a);
  return r;
}
function m() {
  const e = document.createElement("style");
  e.textContent = `
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
    .terminal-button .terminal-button-text {
      margin: 0 4px;
    }
    .terminal-button .terminal-button-icon {
      height: 18px;
      margin: 0 4px;
    }
  `;
  return e;
}
function p(e) {
  const i = Object.entries(e).sort(
    (t, n) => t[0] < n[0] ? -1 : t[0] > n[0] ? 1 : 0
  );
  return i.map(([t, n]) => `${t}=${n}`).join("&");
}

export {
  c as a,
  l as b,
  d as c
};
