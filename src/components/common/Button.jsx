"use client";

import clsx from "clsx";

export default function Button({
  children,
  variant = "primary",
  size = "md",
  className = "",
  ...props
}) {
  const base =
    "inline-flex flex items-center gap-2 px-6 py-3 w-full items-center justify-center  font-medium transition duration-200 cursor-pointer";

  const variants = {
    primary:
      "bg-brand-primary  shadow-md shadow-[0_10px_25px_#007db840] text-white hover:opacity-90 text-sm rounded-lg",
    outline:
      "border border-brand-primary px-6 py-3 text-sm text-brand-primary hover:bg-brand-primary hover:text-white rounded-md",
    ghost:
      "text-brand-primary hover:bg-gray-100",
    yellow:
      "px-8 text-sm font-bold rounded-full  bg-secon-yellow"
  };

  const sizes = {
    sm: "px-3 py-1.5 text-sm",
    md: "px-5 py-2.5 text-base",
    lg: "px-6 py-3 text-lg",
  };

  return (
    <button
      className={clsx(base, variants[variant], sizes[size], className)}
      {...props}
    >
      {children}
    </button>
  );
}