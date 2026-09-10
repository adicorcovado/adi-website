import type { ReactNode } from "react";

interface FormFieldProps {
  label: string;
  htmlFor: string;
  error?: string;
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

export default function FormField({
  label,
  htmlFor,
  error,
  className = "",
  children,
}: FormFieldProps) {
  return (
    <div className={className}>
      <label
        htmlFor={htmlFor}
        className="mb-1.5 block text-md font-semibold text-accent-900"
      >
        {label}
      </label>
      {children}
      {error && (
        <p className="mt-1.5 text-md text-danger-600" role="alert">
          {error}
        </p>
      )}
    </div>
  );
}
