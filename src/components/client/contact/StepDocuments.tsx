import { useRef, useState } from "react";
import { Controller, useFormContext } from "react-hook-form";
import { HiOutlineDocumentArrowUp } from "react-icons/hi2";
import type { ContactFormValues } from "../../../utils/contactFormSchema";
import type { ContactTranslations } from "../../../utils/translations";

interface StepDocumentsProps {
  t: ContactTranslations["form"]["step3"];
}

export default function StepDocuments({ t }: StepDocumentsProps) {
  const {
    control,
    formState: { errors },
  } = useFormContext<ContactFormValues>();
  const [isDragging, setIsDragging] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const fileError = errors.entranceFeeProof?.message as string | undefined;

  return (
    <div>
      <h3 className="font-brevia text-xl font-semibold text-accent-900">
        {t.title}
      </h3>
      <p className="mt-1.5 text-accent-700">{t.description}</p>

      <div className="mt-6">
        <label className="mb-1.5 block text-sm font-semibold text-accent-900">
          {t.fields.file.label}
        </label>

        <Controller
          control={control}
          name="entranceFeeProof"
          render={({ field: { onChange, value, ...field } }) => (
            <div
              onDragOver={(event) => {
                event.preventDefault();
                setIsDragging(true);
              }}
              onDragLeave={() => setIsDragging(false)}
              onDrop={(event) => {
                event.preventDefault();
                setIsDragging(false);
                const file = event.dataTransfer.files?.[0];
                if (file) onChange(file);
              }}
              onClick={() => inputRef.current?.click()}
              className={[
                "flex cursor-pointer flex-col items-center gap-2 rounded-xl border-2 border-dashed px-6 py-10 text-center transition-colors",
                isDragging
                  ? "border-primary-500 bg-primary-50"
                  : fileError
                    ? "border-danger-300 bg-danger-50"
                    : "border-accent-200 bg-primary-50/40 hover:border-primary-400",
              ].join(" ")}
            >
              <HiOutlineDocumentArrowUp className="h-10 w-10 text-primary-500" />
              <p className="text-accent-700">
                {t.fields.file.dropText}{" "}
                <span className="font-semibold text-primary-600 underline">
                  {t.fields.file.browseText}
                </span>
              </p>
              <p className="text-sm text-accent-400">
                {t.fields.file.helpText}
              </p>
              <p className="mt-2 text-sm font-semibold text-accent-900">
                {value instanceof File ? value.name : t.fields.file.noFileText}
              </p>
              <input
                {...field}
                ref={inputRef}
                type="file"
                accept="application/pdf,image/*"
                className="hidden"
                onChange={(event) => onChange(event.target.files?.[0])}
              />
            </div>
          )}
        />
        {fileError && (
          <p className="mt-1.5 text-sm text-danger-600" role="alert">
            {fileError}
          </p>
        )}
      </div>
    </div>
  );
}
