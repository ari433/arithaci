import { useTransform, type MotionValue } from "motion/react";

/**
 * useTransform in the installed `motion` version doesn't clamp output once
 * the driving value travels outside the given input range — it keeps
 * extrapolating past the last keyframe instead of holding the edge value.
 * Since scroll progress routinely sits outside a sub-range (e.g. an opacity
 * fade defined over [0, 0.28] while scrollYProgress keeps climbing to 1),
 * this wraps the transform with an explicit clamp to the output's min/max.
 */
export function useClampedTransform(
  value: MotionValue<number>,
  input: number[],
  output: number[],
): MotionValue<number> {
  const raw = useTransform(value, input, output);
  const min = Math.min(...output);
  const max = Math.max(...output);
  return useTransform(raw, (v) => Math.min(max, Math.max(min, v)));
}
