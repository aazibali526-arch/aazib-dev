import type { ComponentPropsWithRef } from "react";
import {
  Field,
  fieldControlClasses,
  fieldStatusClasses,
  type FieldStatus,
} from "@/components/ui/Field";
import { cn } from "@/lib/utils";

interface TextareaProps extends Omit<ComponentPropsWithRef<"textarea">, "id"> {
  id: string;
  label: string;
  message?: string;
  status?: FieldStatus;
  wrapperClassName?: string;
}

export function Textarea({
  id,
  label,
  message,
  status = "default",
  className,
  wrapperClassName,
  ...props
}: TextareaProps) {
  return (
    <Field
      id={id}
      label={label}
      message={message}
      status={status}
      className={wrapperClassName}
    >
      <textarea
        rows={5}
        {...props}
        id={id}
        aria-invalid={status === "error" ? true : undefined}
        aria-describedby={message ? `${id}-message` : undefined}
        className={cn(
          fieldControlClasses,
          fieldStatusClasses[status],
          "min-h-35 resize-y",
          className,
        )}
      />
    </Field>
  );
}