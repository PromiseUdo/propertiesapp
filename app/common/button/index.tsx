"use client";

import clsx from "clsx";
import React, {
  forwardRef,
  HTMLAttributes,
  MutableRefObject,
  RefObject,
} from "react";
import CircularProgress from "../spinners/CircularProgress";
import LazySpinner from "../spinners/LazySpinner";

type Variant = "primary" | "secondary" | "cancel" | "outlined";
interface Props extends HTMLAttributes<HTMLButtonElement> {
  label?: React.ReactNode;
  loading?: boolean;
  fullWidth?: boolean;
  disabled?: boolean;
  type?: "button" | "reset" | "submit";
  delay?: number;
  variant?: Variant;
  btnRef?: RefObject<HTMLButtonElement>;
}

const classesMap: Record<Variant, string> = {
  primary:
    "bg-voks-primary hover:bg-voks-teal-80 disabled:bg-voks-shades-gray-3 disabled:text-voks-gray-2 text-voks-shades-white",
  secondary:
    "bg-voks-secondary hover:bg-voks-teal-80 disabled:bg-voks-shades-gray-3 disabled:text-voks-gray-2 text-voks-shades-white",
  cancel: "bg-[#F7F7F7] text-voks-shades-black sm active:scale-95",
  outlined:
    "border border-[#E2E7E9] h-8 py-1 px-6 flex justify-center items-center sm",
};
function Button({
  label,
  className,
  loading,
  fullWidth,
  type = "button",
  delay = 300,
  variant = "primary",
  btnRef,
  ...rest
}: Props) {
  return (
    <button
      type={type}
      ref={btnRef}
      className={clsx(
        "flex sm font-semibold capitalize justify-center items-center  rounded h-12 gap-2  select-none whitespace-nowrap py-1 px-6",
        classesMap[variant],
        className ? className : "",
        fullWidth ? "w-full" : "w-auto",
        loading ? "!bg-voks-shades-white" : ""
      )}
      {...rest}
    >
      {loading ? (
        <LazySpinner show={loading} delay={delay}>
          <CircularProgress size="18px" color="var(--teal-100)" />
        </LazySpinner>
      ) : (
        label
      )}
    </button>
  );
}

export default Button;
