import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "motion/react";
import { HiXMark } from "react-icons/hi2";

interface NavItem {
  label: string;
  href: string;
}

interface LangOption {
  code: string;
  label: string;
  href: string;
  current: boolean;
}

interface MobileMenuProps {
  navItems: NavItem[];
  cta: NavItem;
  languages: LangOption[];
}

export default function MobileMenu({
  navItems,
  cta,
  languages,
}: MobileMenuProps) {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setIsOpen(false);
    };

    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <div className="lg:hidden">
      <button
        type="button"
        onClick={() => setIsOpen((prev) => !prev)}
        aria-expanded={isOpen}
        aria-label="Menu"
        className="relative z-50 flex h-10 w-10 items-center justify-center rounded-full text-accent-900"
      >
        <motion.span
          className="absolute h-0.5 w-6 rounded-full bg-current"
          animate={{ rotate: isOpen ? 45 : 0, y: isOpen ? 0 : -6 }}
          transition={{ duration: 0.2 }}
        />
        <motion.span
          className="absolute h-0.5 w-6 rounded-full bg-current"
          animate={{ opacity: isOpen ? 0 : 1 }}
          transition={{ duration: 0.2 }}
        />
        <motion.span
          className="absolute h-0.5 w-6 rounded-full bg-current"
          animate={{ rotate: isOpen ? -45 : 0, y: isOpen ? 0 : 6 }}
          transition={{ duration: 0.2 }}
        />
      </button>

      {typeof document !== "undefined" &&
        createPortal(
          <AnimatePresence>
            {isOpen && (
              <>
                <motion.div
                  key="overlay"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  className="fixed inset-0 z-40 bg-accent-900/40"
                  onClick={() => setIsOpen(false)}
                />
                <motion.div
                  key="panel"
                  initial={{ x: "100%" }}
                  animate={{ x: 0 }}
                  exit={{ x: "100%" }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="fixed inset-y-0 right-0 z-50 flex w-full max-w-xs flex-col gap-8 overflow-y-auto bg-white px-8 py-24 shadow-xl"
                >
                  <button
                    type="button"
                    onClick={() => setIsOpen(false)}
                    aria-label="Close menu"
                    className="absolute top-6 right-6 flex h-10 w-10 items-center justify-center rounded-full text-accent-900 hover:bg-primary-50"
                  >
                    <HiXMark className="h-6 w-6" />
                  </button>

                  <nav className="flex flex-col gap-6">
                    {navItems.map((item) => (
                      <a
                        key={item.href}
                        href={item.href}
                        onClick={() => setIsOpen(false)}
                        className="font-brevia text-2xl font-semibold text-accent-900"
                      >
                        {item.label}
                      </a>
                    ))}
                  </nav>

                  <a
                    href={cta.href}
                    onClick={() => setIsOpen(false)}
                    className="inline-flex items-center justify-center rounded-full bg-primary-500 px-6 py-3 text-center font-semibold text-white"
                  >
                    {cta.label}
                  </a>

                  <div className="mt-auto flex gap-4">
                    {languages.map((option, index) => (
                      <>
                        {index > 0 && (
                          <span className="text-accent-200">/</span>
                        )}
                        <a
                          key={option.code}
                          href={option.href}
                          className={`text-md font-semibold ${
                            option.current
                              ? "text-primary-600"
                              : "text-accent-400"
                          }`}
                        >
                          {option.label}
                        </a>
                      </>
                    ))}
                  </div>
                </motion.div>
              </>
            )}
          </AnimatePresence>,
          document.body,
        )}
    </div>
  );
}
