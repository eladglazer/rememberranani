// Deterministic star placement: star i always lands in the same spot,
// so every visitor sees the same sky and a new candle never moves the others.
export const SKY_W = 1000;
export const SKY_H = 620;

function mulberry32(seed: number) {
  return () => {
    seed = (seed + 0x6d2b79f5) | 0;
    let t = Math.imul(seed ^ (seed >>> 15), 1 | seed);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

// Magnitude ramp: most candles are faint, a few are bright, as in a real sky.
const RADII = [1.2, 1.6, 2.1, 2.8, 3.6];
const WEIGHTS = [0.38, 0.28, 0.18, 0.11, 0.05];

export interface Star { x: number; y: number; r: number }

export function star(i: number, seed = 1999): Star {
  const rand = mulberry32(seed * 100003 + i);
  const x = 24 + rand() * (SKY_W - 48);
  const y = 24 + rand() * (SKY_H - 48);
  let p = rand();
  let k = 0;
  while (k < WEIGHTS.length - 1 && p > WEIGHTS[k]) p -= WEIGHTS[k++];
  return { x, y, r: RADII[k] };
}
