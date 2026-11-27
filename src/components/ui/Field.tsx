import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export type FieldStatus = "default" | "error" | "success";

export const fieldControlClasses =
  "w-full rounded-btn border bg-white px-4 py-3 font-body text-base font-normal leading-normal text-ink-900 placeholder:text-slate-600/60 transition-[border-color,box-shadow] duration-300 ease-smooth disabled:cursor-not-allowed disabled:opacity-60";

export const fieldStatusClasses: Record<FieldStatus, string> = {
  default:
    "border-border-strong focus:border-blue-600 focus:shadow-ring-field-focus",
  error: "border-error focus:border-error",
  success: "border-success focus:border-success",
};

const messageClasses: Record<FieldStatus, string> = {
  default: "text-slate-600",
  error: "text-error",
  success: "text-success",
};

interface FieldProps {
  id: string;
  label: string;
  message?: string;
  status?: FieldStatus;
  className?: string;
  children: ReactNode;
}

export function Field({
  id,
  label,
  message,
  status = "default",
  className,
  children,
}: FieldProps) {
  return (
    <div className={cn("flex flex-col", className)}>
      <label
        htmlFor={id}
        className="mb-1.5 font-mono text-sm font-medium leading-[1.4] text-ink-900"
      >
        {label}
      </label>
      {children}
      {message ? (
        <p
          id={`${id}-message`}
          role={
            status === "error"
              ? "alert"
              : status === "success"
                ? "status"
                : undefined
          }
          className={cn(
            "mt-1.5 font-body text-[13px] leading-normal",
            messageClasses[status],
          )}
        >
          {message}
        </p>
      ) : null}
    </div>
  );
}