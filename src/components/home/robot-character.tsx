"use client";

import { motion, useMotionValue, useSpring } from "motion/react";
import { useEffect, useRef, type PointerEvent } from "react";
import { useClampedTransform } from "@/lib/use-clamped-transform";

export function RobotCharacter() {
  const wrapRef = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateY = useSpring(useClampedTransform(mouseX, [-0.5, 0.5], [-16, 16]), {
    stiffness: 140,
    damping: 18,
    mass: 0.6,
  });
  const rotateX = useSpring(useClampedTransform(mouseY, [-0.5, 0.5], [14, -14]), {
    stiffness: 140,
    damping: 18,
    mass: 0.6,
  });

  function onPointerMove(e: PointerEvent<HTMLDivElement>) {
    const rect = e.currentTarget.getBoundingClientRect();
    mouseX.set((e.clientX - rect.left) / rect.width - 0.5);
    mouseY.set((e.clientY - rect.top) / rect.height - 0.5);
  }

  function onPointerLeave() {
    mouseX.set(0);
    mouseY.set(0);
  }

  useEffect(() => {
    const node = wrapRef.current;
    if (!node) return;
    function onLeaveWindow() {
      mouseX.set(0);
      mouseY.set(0);
    }
    node.addEventListener("pointercancel", onLeaveWindow);
    return () => node.removeEventListener("pointercancel", onLeaveWindow);
  }, [mouseX, mouseY]);

  return (
    <div
      ref={wrapRef}
      onPointerMove={onPointerMove}
      onPointerLeave={onPointerLeave}
      style={{ perspective: 1200 }}
      className="relative flex items-center justify-center"
    >
      {/* ambient floating particles */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        {[
          { x: "-38%", y: "-18%", size: 10, delay: 0, duration: 6 },
          { x: "42%", y: "-30%", size: 6, delay: 0.6, duration: 7.5 },
          { x: "-46%", y: "34%", size: 7, delay: 1.1, duration: 6.8 },
          { x: "40%", y: "38%", size: 9, delay: 0.3, duration: 8 },
        ].map((p, i) => (
          <motion.span
            key={i}
            className="absolute rounded-full bg-accent/40 blur-[2px]"
            style={{
              left: `calc(50% + ${p.x})`,
              top: `calc(50% + ${p.y})`,
              width: p.size,
              height: p.size,
            }}
            animate={{ y: [0, -14, 0], opacity: [0.3, 0.8, 0.3] }}
            transition={{ duration: p.duration, delay: p.delay, repeat: Infinity, ease: "easeInOut" }}
          />
        ))}
      </div>

      {/* idle float layer */}
      <motion.div
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      >
        {/* mouse-tilt 3D layer */}
        <motion.div
          style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
          initial={{ opacity: 0, scale: 0.75, y: 24 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="relative"
        >
          {/* antenna */}
          <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-[92%]" style={{ transform: "translateZ(30px)" }}>
            <div className="mx-auto h-8 w-[2px] bg-gradient-to-b from-transparent to-accent/60" />
            <motion.div
              className="mx-auto -mt-1 h-2.5 w-2.5 rounded-full bg-accent shadow-[0_0_16px_4px_var(--color-accent)]"
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            />
          </div>

          {/* head */}
          <div
            className="relative h-40 w-40 rounded-[2.25rem] sm:h-48 sm:w-48"
            style={{
              transform: "translateZ(20px)",
              background:
                "linear-gradient(155deg, color-mix(in srgb, var(--color-foreground) 12%, var(--color-card)) 0%, var(--color-card) 45%, color-mix(in srgb, var(--color-foreground) 6%, var(--color-background)) 100%)",
              boxShadow:
                "inset 0 1px 1px color-mix(in srgb, white 40%, transparent), inset 0 -12px 20px color-mix(in srgb, black 15%, transparent), 0 30px 50px -20px color-mix(in srgb, black 45%, transparent)",
              border: "1px solid var(--color-border)",
            }}
          >
            {/* visor */}
            <div
              className="absolute inset-x-5 top-1/2 flex h-14 -translate-y-1/2 items-center justify-center gap-4 rounded-2xl sm:h-16 sm:gap-5"
              style={{
                background: "color-mix(in srgb, var(--color-foreground) 92%, var(--color-background))",
                boxShadow: "inset 0 2px 6px color-mix(in srgb, black 60%, transparent)",
              }}
            >
              <motion.span
                className="h-3.5 w-3.5 rounded-full bg-accent shadow-[0_0_10px_2px_var(--color-accent)] sm:h-4 sm:w-4"
                animate={{ scaleY: [1, 1, 0.15, 1, 1] }}
                transition={{ duration: 3.4, repeat: Infinity, times: [0, 0.85, 0.9, 0.95, 1], ease: "easeInOut" }}
              />
              <motion.span
                className="h-3.5 w-3.5 rounded-full bg-accent shadow-[0_0_10px_2px_var(--color-accent)] sm:h-4 sm:w-4"
                animate={{ scaleY: [1, 1, 0.15, 1, 1] }}
                transition={{ duration: 3.4, repeat: Infinity, times: [0, 0.85, 0.9, 0.95, 1], ease: "easeInOut", delay: 0.05 }}
              />
            </div>
          </div>

          {/* shoulders / base hint */}
          <div
            className="mx-auto -mt-4 h-8 w-32 rounded-b-[1.75rem] rounded-t-md sm:w-36"
            style={{
              transform: "translateZ(6px)",
              background:
                "linear-gradient(180deg, color-mix(in srgb, var(--color-foreground) 8%, var(--color-card)) 0%, color-mix(in srgb, var(--color-foreground) 3%, var(--color-background)) 100%)",
              border: "1px solid var(--color-border)",
              borderTop: "none",
            }}
          />
        </motion.div>

        {/* grounding shadow */}
        <div
          aria-hidden
          className="mx-auto mt-6 h-4 w-32 rounded-full bg-foreground/15 blur-xl sm:w-36"
        />
      </motion.div>
    </div>
  );
}
