function Debounce(callback, wait) {
  let timeoutId = null;

  return (...args) => {
    window.clearTimeout(timeoutId);
    timeoutId = window.setTimeout(() => {
      callback.apply(null, args);
    }, wait);
  };
}

const lerp = (a, b, n) => (1 - n) * a + n * b;

const distance = (x1, y1, x2, y2) => {
  var a = x1 - x2;
  var b = y1 - y2;

  return Math.hypot(a, b);
};

const elementPosition = (el) => {
  const rect = el.getBoundingClientRect();
  return {
    left: rect.left + window.scrollX,
    top: rect.top + window.scrollY,
    right: rect.right,
    bottom: rect.bottom,
  };
};
export { Debounce, lerp, distance, elementPosition };
