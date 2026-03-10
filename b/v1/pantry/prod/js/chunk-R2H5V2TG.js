// ../../node_modules/nanoid/url-alphabet/index.js
var r = "useandom-26T198340PX75pxJACKVERYMINDBUSHWOLF_GQZbfghjklqvwyzrict";

// ../../node_modules/nanoid/index.browser.js
var p = (t = 21) => {
  let e = "";
  let l = crypto.getRandomValues(new Uint8Array(t |= 0));
  while (t--) {
    e += r[l[t] & 63];
  }
  return e;
};

export {
  p as a
};
//# sourceMappingURL=chunk-R2H5V2TG.js.map
