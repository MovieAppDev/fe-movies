import React from "react";
import clsx from "clsx";

interface BaseButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  text?: string;
  fullWidth?: boolean;
  variant?: "primary" | "danger" | "cancel";
  children?: React.ReactNode;
}

export const Button: React.FC<BaseButtonProps> = ({
  text,
  fullWidth = true,
  variant = "primary",
  children,
  className,
  ...props
}) => {
  const variantClasses = {
    primary: "bg-blue-600 hover:bg-blue-700 text-white",
    danger: "bg-red-600 hover:bg-red-700 text-white",
    cancel: "bg-gray-300 hover:bg-gray-400 text-black",
  };

  const classes = clsx(
    "py-2 px-4 rounded transition text-sm",
    variantClasses[variant],
    { "w-full": fullWidth },
    className
  );

  return (
    <button className={classes} {...props}>
      {text || children}
    </button>
  );
};
