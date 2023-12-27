import React, { useCallback } from "react";

type Props = {
  className?: string;
  title?: string;
  children?: React.ReactNode;
  disabled?: boolean;
  variant?: "primary" | "secondary";
  onClick?: () => void;
};

const Button = ({
  title,
  variant,
  disabled,
  children,
  className = "",
  onClick,
}: Props) => {
  const buttonRef = useCallback(
    (node: HTMLButtonElement) => {
      if (variant === "secondary" && node) {
        node.classList.replace("btn-primary", "btn-secondary");
      }
    },
    [variant]
  );

  return (
    <button
      ref={buttonRef}
      className={`btn btn-primary ${className}`}
      disabled={disabled}
      onClick={onClick}
    >
      {title || children}
    </button>
  );
};

export default Button;
