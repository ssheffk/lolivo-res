"use client";
import React from "react";
import Link from "next/link";
import classnames from "classnames";

interface ButtonLinkProps {
  to?: string;
  theme?: "fill" | "outline" | "accent";
  hideArrow?: boolean;
  size?: "sm" | "regular" | "lg";
  children: React.ReactNode;
  className?: string;

  onClick?: () => void;
}

const ButtonLink: React.FC<ButtonLinkProps> = ({
  to,
  theme = "outline",
  hideArrow,
  size = "regular",
  children,
  className,
  onClick,
}) => {
  const linkClasses = classnames(
    "group relative flex items-center text-sm leading-none rounded-[32px] border transition-all duration-300 focus:outline-none lg:text-base lg:leading-none",
    {
      "bg-[#D1D0C7] text-white border-transparent": theme === "fill",
      "bg-appAccent text-white border-transparent": theme === "accent",
      "border-appText": theme !== "fill" && theme !== "accent",
      "px-4 py-[17px] lg:p-6": size === "lg",
      "px-4 py-[13px] md:px-6 md:py-4": size === "regular",
    }
  );

  return (
    <div className={className}>
      {to ? (
        <Link href={to} passHref legacyBehavior>
          <a className={linkClasses} target={to !== "/contact" ? "_blank" : ""}>
            {children}
          </a>
        </Link>
      ) : (
        <button
          className={classnames(linkClasses, "flex justify-center w-full")}
          onClick={onClick}
        >
          {children}
        </button>
      )}
    </div>
  );
};

export default ButtonLink;
