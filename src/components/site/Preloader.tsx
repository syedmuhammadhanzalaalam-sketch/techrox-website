"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

export function Preloader() {
  const [done, setDone] = useState(false);
  const startedRef = useRef(false);

  useEffect(() => {
    // Guard against React Strict Mode's dev-only double effect invocation.
    if (startedRef.current) return;
    startedRef.current = true;

    setTimeout(() => setDone(true), 2200);
  }, []);

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
        key="preloader"
        initial={{ opacity: 1 }}
        exit={{ opacity: 0, transition: { duration: 0.8, ease: "easeInOut" } }}
        className="pointer-events-none fixed inset-0 z-[1000] flex items-center justify-center bg-background"
      >
          <div className="relative flex flex-col items-center gap-6">
            <motion.div
              initial={{ scale: 0.7, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.9, ease: "easeOut" }}
              className="relative"
            >
              <div className="silver-text font-display text-5xl font-bold tracking-tight md:text-6xl">
                TechRox
              </div>
              <motion.div
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 1.4, ease: "easeInOut", delay: 0.4 }}
                className="mt-3 h-px origin-left"
                style={{ background: "var(--gradient-silver)" }}
              />
            </motion.div>
            <motion.p
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 1.1 }}
              className="text-xs uppercase tracking-[0.4em] text-silver-dim"
            >
              Powering Next-Gen Technology
            </motion.p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}