import { motion } from "motion/react";
import type { ReactNode } from "react";

interface RevealProps {
  children: ReactNode;
  delay?: number;
  className?: string;
  /** "view" animates in on scroll (default); "mount" animates in immediately, for above-the-fold content. */
  mode?: "view" | "mount";
}

export default function Reveal({
  children,
  delay = 0,
  className,
  mode = "view",
}: RevealProps) {
  const trigger =
    mode === "mount"
      ? { animate: { opacity: 1, y: 0 } }
      : {
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true, margin: "-80px" },
        };

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 24 }}
      {...trigger}
      transition={{ duration: 0.6, delay, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}
