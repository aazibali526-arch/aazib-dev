import type { ComponentPropsWithRef } from "react";
import {
  Field,
  fieldControlClasses,
  fieldStatusClasses,
  type FieldStatus,
} from "@/components/ui/Field";
import { cn } from "@/lib/utils";

interface InputProps extends Omit<ComponentPropsWithRef<"input">, "id"> {
  id: string;
  label: string;
  message?: string;
  status?: FieldStatus;
  wrapperClassName?: string;
}

export function Input({
  id,
  label,
  message,
  status = "default",
  className,
  wrapperClassName,
  ...props
}: InputProps) {
  return (
    <Field
      id={id}
      label={label}
      message={message}
      status={status}
      className={wrapperClassName}
    >
      <input
        {...props}
        id={id}
        aria-invalid={status === "error" ? true : undefined}
        aria-describedby={message ? `${id}-message` : undefined}
        className={cn(fieldControlClasses, fieldStatusClasses[status], className)}
      />
    </Field>
  );
}