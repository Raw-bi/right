import {
  a as s
} from "./chunk-OABP57ZG.js";
import {
  Ge as t
} from "./chunk-K3YJBOOZ.js";
import {
  c as d
} from "./chunk-3WTFS26N.js";

// src/utils/useDebouncedHoverStore.ts
var c = d(s(), 1);
function i(o = 50) {
  const { subscribe: a, set: u } = t(null);
  let n = null;
  let e = null;
  const r = (0, c.debounce)((l) => {
    if (e === l) {
      n = null;
      e = null;
      u(null);
    }
  }, o);
  return {
    subscribe: a,
    /**
     * Set the hovered ID immediately (no delay)
     * Cancels any pending clear operations
     */
    setHover: (l) => {
      r.cancel();
      e = null;
      n = l;
      u(l);
    },
    /**
     * Clear the hovered ID with debounce
     * Only clears if the ID matches the current one
     */
    clearHover: (l = null) => {
      e = l;
      r(l);
    },
    /**
     * Clear immediately without debounce
     */
    clearImmediate: () => {
      r.cancel();
      e = null;
      n = null;
      u(null);
    },
    /**
     * Get the current value without subscribing
     */
    get current() {
      return n;
    },
    /**
     * Clean up the debounced function
     */
    destroy: () => {
      r.cancel();
    }
  };
}

export {
  i as a
};
//# sourceMappingURL=chunk-ZKWB7TIG.js.map
