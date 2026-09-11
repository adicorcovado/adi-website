import { useId, useState, type ReactNode } from "react";
import { AnimatePresence, motion } from "motion/react";
import { HiChevronDown } from "react-icons/hi2";

interface CollapseProps {
  title: ReactNode;
  subtitle?: ReactNode;
  defaultOpen?: boolean;
  className?: string;
  children: ReactNode;
}

export default function Collapse({
  title,
  subtitle,
  defaultOpen = false,
  className = "",
  children,
}: CollapseProps) {
  const [open, setOpen] = useState(defaultOpen);
  const panelId = useId();

  return (
    <div
      className={["rounded-xl border border-accent-100", className].join(" ")}
    >
      <button
        type="button"
        aria-expanded={open}
        aria-controls={panelId}
        onClick={() => setOpen((value) => !value)}
        className="flex w-full cursor-pointer items-center justify-between gap-4 px-5 py-4 text-left"
      >
        <span className="flex flex-col gap-0.5">
          <span className="font-brevia text-lg font-semibold text-accent-900">
            {title}
          </span>
          {subtitle && (
            <span className="text-sm text-accent-700">{subtitle}</span>
          )}
        </span>
        <motion.span
          animate={{ rotate: open ? 180 : 0 }}
          transition={{ duration: 0.2, ease: "easeOut" }}
          className="shrink-0 text-accent-400"
        >
          <HiChevronDown className="h-5 w-5" />
        </motion.span>
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            id={panelId}
            key="content"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="overflow-hidden"
          >
            <div className="px-5 pb-5">{children}</div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
