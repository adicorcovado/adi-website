import { useEffect } from "react";
import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "motion/react";
import { HiOutlineExclamationTriangle } from "react-icons/hi2";

interface ConfirmDialogProps {
  open: boolean;
  title: string;
  description: string;
  confirmLabel: string;
  onConfirm: () => void;
  /**
   * Omit cancelLabel/onCancel to render as a single-button error/alert
   * dialog (e.g. blocking validation) instead of a confirm/cancel choice.
   */
  cancelLabel?: string;
  onCancel?: () => void;
}

export default function ConfirmDialog({
  open,
  title,
  description,
  confirmLabel,
  cancelLabel,
  onConfirm,
  onCancel,
}: ConfirmDialogProps) {
  const isErrorOnly = !onCancel;
  const dismiss = onCancel ?? onConfirm;

  useEffect(() => {
    if (!open) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") dismiss();
    };

    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [open, dismiss]);

  if (typeof document === "undefined") return null;

  return createPortal(
    <AnimatePresence>
      {open && (
        <div
          role="alertdialog"
          aria-modal="true"
          aria-labelledby="confirm-dialog-title"
          aria-describedby="confirm-dialog-description"
          className="fixed inset-0 z-50 flex items-center justify-center px-4"
        >
          <motion.div
            key="overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="absolute inset-0 bg-accent-900/40"
            onClick={dismiss}
          />
          <motion.div
            key="panel"
            initial={{ opacity: 0, y: 16, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.98 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="relative w-full max-w-sm rounded-2xl bg-white p-6 shadow-xl sm:p-8"
          >
            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-danger-50 text-danger-600">
              <HiOutlineExclamationTriangle className="h-6 w-6" />
            </div>
            <h3
              id="confirm-dialog-title"
              className="mt-4 text-center font-brevia text-xl font-semibold text-accent-900"
            >
              {title}
            </h3>
            <p
              id="confirm-dialog-description"
              className="mt-2 text-center text-accent-700"
            >
              {description}
            </p>

            <div className="mt-6 flex flex-col-reverse gap-3 sm:flex-row">
              {!isErrorOnly && (
                <button
                  type="button"
                  onClick={onCancel}
                  className="flex-1 rounded-full border border-accent-100 px-6 py-3 font-semibold text-accent-900 transition-colors hover:bg-accent-50"
                >
                  {cancelLabel}
                </button>
              )}
              <button
                type="button"
                onClick={onConfirm}
                className={[
                  "flex-1 rounded-full px-6 py-3 font-semibold text-white transition-colors cursor-pointer",
                  isErrorOnly
                    ? "bg-danger-600 hover:bg-danger-700"
                    : "bg-primary-500 hover:bg-primary-600",
                ].join(" ")}
              >
                {confirmLabel}
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>,
    document.body,
  );
}
