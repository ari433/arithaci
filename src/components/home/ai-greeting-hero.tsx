"use client";

import { useEffect, useState } from "react";
import { motion } from "motion/react";
import { RobotCharacter } from "@/components/home/robot-character";

const GREETING = "Mirë se erdhe në Ari World.";
const TYPE_START_DELAY = 700;
const TYPE_SPEED = 45;

export function AiGreetingHero() {
  const [typed, setTyped] = useState("");
  const [done, setDone] = useState(false);

  useEffect(() => {
    let i = 0;
    let interval: ReturnType<typeof setInterval>;
    const start = setTimeout(() => {
      interval = setInterval(() => {
        i++;
        setTyped(GREETING.slice(0, i));
        if (i >= GREETING.length) {
          clearInterval(interval);
          setDone(true);
        }
      }, TYPE_SPEED);
    }, TYPE_START_DELAY);

    return () => {
      clearTimeout(start);
      clearInterval(interval);
    };
  }, []);

  return (
    <section className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-background px-6">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(60% 50% at 50% 38%, color-mix(in srgb, var(--color-accent) 14%, transparent), transparent)",
        }}
      />

      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mb-8 flex items-center gap-2 rounded-full border border-border px-3.5 py-1.5 text-xs uppercase tracking-[0.2em] text-muted-foreground"
      >
        <motion.span
          className="h-1.5 w-1.5 rounded-full bg-accent"
          animate={{ opacity: [0.4, 1, 0.4] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
        />
        Ari&rsquo;s AI · Online
      </motion.div>

      <RobotCharacter />

      <div className="mt-10 max-w-2xl text-center">
        <h1 className="font-display min-h-[1.3em] text-3xl italic text-foreground sm:text-4xl md:text-5xl">
          {typed}
          <span
            aria-hidden
            className={`ml-1 inline-block h-[0.9em] w-[2px] translate-y-[0.1em] bg-accent align-middle ${
              done ? "animate-pulse" : ""
            }`}
          />
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={done ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="mt-5 text-base text-muted-foreground sm:text-lg"
        >
          Welcome to Ari World — everything I build, learn, and live starts here.
        </motion.p>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={done ? { opacity: 1 } : {}}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="absolute bottom-10 flex flex-col items-center gap-2 text-[11px] uppercase tracking-[0.2em] text-muted-foreground"
      >
        <span>Scroll</span>
        <span className="h-8 w-px animate-pulse bg-muted-foreground/50" />
      </motion.div>
    </section>
  );
}
