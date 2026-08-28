"use client";

import { motion, useInView, useMotionValue, useSpring, useTransform, useScroll } from "framer-motion";
import { useEffect, useRef, useState, type ReactNode, type HTMLAttributes } from "react";
import { animate } from "framer-motion";

const EASE_OUT_QUART = [0.22, 1, 0.36, 1] as [number, number, number, number];
const EASE_IN_OUT_QUINT = [0.77, 0, 0.175, 1] as [number, number, number, number];

/** Word-by-word reveal for headings. */
export function RevealText({
  text,
  as: Tag = "h1",
  className = "",
  stagger = 0.06,
  delay = 0,
}: {
  text: string;
  as?: keyof React.JSX.IntrinsicElements;
  className?: string;
  stagger?: number;
  delay?: number;
}) {
  const words = text.split(" ");
  const MotionTag = motion(Tag as any);
  return (
    <MotionTag
      className={className}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-10%" }}
      transition={{ staggerChildren: stagger, delayChildren: delay }}
    >
      {words.map((w, i) => (
        <span key={i} className="inline-block overflow-hidden pb-3 align-bottom">
          <motion.span
            className="inline-block"
            variants={{
              hidden: { y: "110%", opacity: 0 },
              show: { y: 0, opacity: 1, transition: { duration: 0.7, ease: EASE_OUT_QUART } },
            }}
          >
            {w}
            {i < words.length - 1 ? "\u00A0" : ""}
          </motion.span>
        </span>
      ))}
    </MotionTag>
  );
}

/** Fade + slide-in wrapper for any block. */
export function Reveal({
  children,
  delay = 0,
  y = 24,
  className = "",
}: {
  children: ReactNode;
  delay?: number;
  y?: number;
  className?: string;
}) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10%" }}
      transition={{ duration: 0.7, ease: EASE_OUT_QUART, delay }}
    >
      {children}
    </motion.div>
  );
}

/** Staggered container. Children should be <motion.div> with variants={staggerItem}. */
export function Stagger({
  children,
  className = "",
  stagger = 0.08,
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  stagger?: number;
  delay?: number;
}) {
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-10%" }}
      variants={{
        hidden: {},
        show: { transition: { staggerChildren: stagger, delayChildren: delay } },
      }}
    >
      {children}
    </motion.div>
  );
}

export const staggerItem = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: EASE_OUT_QUART } },
};

/** Count-up number for stats. */
export function Counter({
  to,
  suffix = "",
  prefix = "",
  duration = 2,
  className = "",
}: {
  to: number;
  suffix?: string;
  prefix?: string;
  duration?: number;
  className?: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const controls = animate(0, to, {
      duration,
      ease: [0.22, 1, 0.36, 1],
      onUpdate: (v) => setDisplay(Math.round(v)),
    });
    return () => controls.stop();
  }, [inView, to, duration]);

  return (
    <span ref={ref} className={className}>
      {prefix}{display.toLocaleString()}{suffix}
    </span>
  );
}

/** 3D tilt card. */
export function TiltCard({
  children,
  className = "",
  ...rest
}: { children: ReactNode; className?: string } & HTMLAttributes<HTMLDivElement>) {
  const ref = useRef<HTMLDivElement>(null);
  const rx = useMotionValue(0);
  const ry = useMotionValue(0);
  const srx = useSpring(rx, { stiffness: 200, damping: 20 });
  const sry = useSpring(ry, { stiffness: 200, damping: 20 });
  const onMove = (e: React.MouseEvent) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const px = (e.clientX - r.left) / r.width - 0.5;
    const py = (e.clientY - r.top) / r.height - 0.5;
    ry.set(px * 10);
    rx.set(-py * 10);
  };
  const onLeave = () => { rx.set(0); ry.set(0); };
  return (
    <motion.div
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      style={{ rotateX: srx, rotateY: sry, transformPerspective: 800 }}
      className={className}
      {...(rest as any)}
    >
      {children}
    </motion.div>
  );
}

/** Parallax layer that shifts on scroll. */
export function Parallax({
  children,
  speed = 0.3,
  className = "",
}: { children: ReactNode; speed?: number; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [80 * speed, -80 * speed]);
  return (
    <div ref={ref} className={className}>
      <motion.div style={{ y }}>{children}</motion.div>
    </div>
  );
}

/** Image mask-wipe reveal. */
export function MaskReveal({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <motion.div
      className={`relative overflow-hidden ${className}`}
      initial={{ clipPath: "inset(0 100% 0 0)" }}
      whileInView={{ clipPath: "inset(0 0% 0 0)" }}
      viewport={{ once: true, margin: "-15%" }}
      transition={{ duration: 1.1, ease: EASE_IN_OUT_QUINT }}
    >
      {children}
    </motion.div>
  );
}