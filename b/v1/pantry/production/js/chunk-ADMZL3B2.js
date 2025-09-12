// src/root.ts
async function o(t) {
  try {
    const r = await import(
      /* webpackIgnore: true */
      `${t}`
    );
    return r;
  } catch (r) {
    console.error(r);
    throw r;
  }
}

export {
  o as a
};
