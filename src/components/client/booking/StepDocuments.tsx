import { useRef, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Controller, useFormContext } from "react-hook-form";
import {
  HiOutlineDocument,
  HiOutlineDocumentArrowUp,
  HiOutlineXMark,
} from "react-icons/hi2";
import {
  MAX_ENTRANCE_FEE_PROOFS,
  MIN_ENTRANCE_FEE_PROOFS,
  type ContactFormValues,
} from "../../../utils/contactFormSchema";
import type { BookingTranslations } from "../../../utils/translations";

interface StepDocumentsProps {
  t: BookingTranslations["form"]["step4"];
}

export default function StepDocuments({ t }: StepDocumentsProps) {
  const {
    control,
    formState: { errors },
  } = useFormContext<ContactFormValues>();
  const [isDragging, setIsDragging] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const fileError = errors.entranceFeeProofs?.message as string | undefined;

  return (
    <div>
      <h3 className="font-brevia text-xl font-bold text-primary-500">
        {t.title}
      </h3>
      <p className="mt-1.5 text-accent-700 text-lg">{t.description}</p>

      <div className="mt-6">
        <label className="mb-1.5 block text-md font-semibold text-accent-900">
          {t.fields.file.label}
        </label>

        <Controller
          control={control}
          name="entranceFeeProofs"
          render={({ field: { onChange, value } }) => {
            const files = value ?? [];
            const canAddMore = files.length < MAX_ENTRANCE_FEE_PROOFS;

            const addFiles = (incoming: FileList | File[]) => {
              const merged = [...files, ...Array.from(incoming)];
              onChange(merged.slice(0, MAX_ENTRANCE_FEE_PROOFS));
            };

            const removeFile = (index: number) => {
              onChange(files.filter((_, fileIndex) => fileIndex !== index));
            };

            return (
              <>
                <div
                  onDragOver={(event) => {
                    event.preventDefault();
                    if (canAddMore) setIsDragging(true);
                  }}
                  onDragLeave={() => setIsDragging(false)}
                  onDrop={(event) => {
                    event.preventDefault();
                    setIsDragging(false);
                    if (canAddMore && event.dataTransfer.files?.length) {
                      addFiles(event.dataTransfer.files);
                    }
                  }}
                  onClick={() => canAddMore && inputRef.current?.click()}
                  className={[
                    "flex flex-col items-center gap-2 rounded-xl border-2 border-dashed px-6 py-10 text-center transition-colors",
                    canAddMore
                      ? "cursor-pointer"
                      : "cursor-not-allowed opacity-60",
                    isDragging
                      ? "border-primary-500 bg-primary-50"
                      : fileError
                        ? "border-danger-300 bg-danger-50"
                        : "border-accent-200 bg-primary-50/40 hover:border-primary-400",
                  ].join(" ")}
                >
                  <HiOutlineDocumentArrowUp className="h-10 w-10 text-primary-500" />
                  <p className="text-accent-700 text-lg">
                    {t.fields.file.dropText}{" "}
                    <span className="font-semibold text-primary-600 underline">
                      {t.fields.file.browseText}
                    </span>
                  </p>
                  <p className="text-md text-accent-400">
                    {t.fields.file.helpText}
                  </p>
                  <p className="mt-2 text-md font-semibold text-accent-900">
                    {canAddMore
                      ? t.fields.file.progressLabel
                          .replace("{count}", String(files.length))
                          .replace("{min}", String(MIN_ENTRANCE_FEE_PROOFS))
                      : t.fields.file.maxReachedText.replace(
                          "{max}",
                          String(MAX_ENTRANCE_FEE_PROOFS),
                        )}
                  </p>
                  <input
                    ref={inputRef}
                    type="file"
                    multiple
                    accept="application/pdf,image/*"
                    className="hidden"
                    onChange={(event) => {
                      if (event.target.files?.length) {
                        addFiles(event.target.files);
                      }
                      event.target.value = "";
                    }}
                  />
                </div>

                {files.length === 0 ? (
                  <p className="mt-3 text-md text-accent-400">
                    {t.fields.file.noFileText}
                  </p>
                ) : (
                  <ul className="mt-3 space-y-2">
                    <AnimatePresence initial={false}>
                      {files.map((file, index) => (
                        <motion.li
                          key={`${file.name}-${file.lastModified}-${file.size}`}
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.2, ease: "easeOut" }}
                          className="flex items-center justify-between gap-3 overflow-hidden rounded-lg border border-accent-100 bg-white px-4 py-2.5"
                        >
                          <div className="flex min-w-0 items-center gap-2">
                            <HiOutlineDocument className="h-5 w-5 shrink-0 text-primary-500" />
                            <span className="truncate text-md text-accent-900">
                              {file.name}
                            </span>
                          </div>
                          <button
                            type="button"
                            onClick={() => removeFile(index)}
                            aria-label={t.fields.file.removeLabel}
                            className="shrink-0 rounded-full p-1 text-accent-400 transition-colors hover:bg-danger-50 hover:text-danger-600 cursor-pointer"
                          >
                            <HiOutlineXMark className="h-5 w-5" />
                          </button>
                        </motion.li>
                      ))}
                    </AnimatePresence>
                  </ul>
                )}
              </>
            );
          }}
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
