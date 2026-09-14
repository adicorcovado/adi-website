import { useEffect, useId, useRef, useState, type ReactNode } from "react";
import { AnimatePresence, motion } from "motion/react";
import { HiInformationCircle } from "react-icons/hi2";

interface FormFieldProps {
  label: string;
  htmlFor: string;
  error?: string;
  helpText?: string;
  className?: string;
  children: ReactNode;
}

export function inputClasses(hasError?: boolean) {
  return [
    "w-full rounded-lg border bg-white px-4 py-2.5 text-accent-900 outline-none transition-colors",
    "focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20",
    hasError ? "border-danger-400" : "border-accent-200",
  ].join(" ");
}

function HelpTooltip({ text }: { text: string }) {
  const [open, setOpen] = useState(false);
  const tooltipId = useId();
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;

    const handlePointerDown = (event: PointerEvent) => {
      if (!containerRef.current?.contains(event.target as Node)) {
        setOpen(false);
      }
    };
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };

    document.addEventListener("pointerdown", handlePointerDown);
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("pointerdown", handlePointerDown);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [open]);

  return (
    <div ref={containerRef} className="relative inline-flex">
      <button
        type="button"
        onClick={() => setOpen((value) => !value)}
        aria-expanded={open}
        aria-describedby={open ? tooltipId : undefined}
        className="flex h-6 w-6 items-center justify-center rounded-full text-accent-100 transition-colors hover:text-primary-500 cursor-pointer"
      >
        <HiInformationCircle className="h-5 w-5" />
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            id={tooltipId}
            role="tooltip"
            initial={{ opacity: 0, y: 4, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 4, scale: 0.98 }}
            transition={{ duration: 0.15, ease: "easeOut" }}
            className="absolute bottom-full left-1/2 z-10 mb-2 w-56 -translate-x-1/2 rounded-lg bg-accent-900 px-3 py-2 text-sm text-white shadow-lg"
          >
            {text}
            <div className="absolute top-full left-1/2 h-2 w-2 -translate-x-1/2 -translate-y-1/2 rotate-45 bg-accent-900" />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function FormField({
  label,
  htmlFor,
  error,
  helpText,
  className = "",
  children,
}: FormFieldProps) {
  return (
    <div className={className}>
      <label
        htmlFor={htmlFor}
        className="mb-1.5 flex items-center gap-1.5 text-md font-semibold text-accent-900"
      >
        {label}
        {helpText && <HelpTooltip text={helpText} />}
      </label>
      {children}
      {error && (
        <p className="mt-1.5 text-sm text-danger-600" role="alert">
          {error}
        </p>
      )}
    </div>
  );
}
