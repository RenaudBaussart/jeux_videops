export var clamp = (value, min, max) => Math.min(Math.max(value, min), max);

export function lerp(x, y, a) {
  return x + (y - x) * a;
}

export function mapLinear(x, a1, a2, b1, b2) {
  return b1 + ((x - a1) * (b2 - b1)) / (a2 - a1);
}
export var randFloat = (low, high) => low + Math.random() * (high - low);


export function randFloatSpread(range) {
  return range * (0.5 - Math.random());
}