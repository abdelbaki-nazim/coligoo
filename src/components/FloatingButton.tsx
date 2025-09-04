"use client";

import React from "react";
import styles from "./FloatingButton.module.css";

const TrackingIcon = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M12 2L13.09 8.26L22 9L13.09 9.74L12 16L10.91 9.74L2 9L10.91 8.26L12 2Z"
      fill="currentColor"
    />
    <path
      d="M3 3H5L5.4 5M7 13H17L21 5H5.4M7 13L5.4 5M7 13L4.7 15.3C4.3 15.7 4.6 16.3 5.1 16.3H17M17 13V17C17 18.1 16.1 19 15 19C13.9 19 13 18.1 13 17C13 15.9 13.9 15 15 15C16.1 15 17 15.9 17 17ZM9 19C10.1 19 11 18.1 11 17C11 15.9 10.1 15 9 15C7.9 15 7 15.9 7 17C7 18.1 7.9 19 9 19Z"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

interface FloatingButtonProps {
  href?: string;
  onClick?: () => void;
  children?: React.ReactNode;
  icon?: React.ReactNode;
  label?: string;
}

export default function FloatingButton({
  href = "/tracking-results",
  onClick,
  children,
  icon = <TrackingIcon />,
  label = "Voir statut commande",
}: FloatingButtonProps) {
  const buttonContent = (
    <>
      <div className={styles.iconContainer}>{icon}</div>
      {label && <span className={styles.label}>{label}</span>}
      {children}
    </>
  );

  const handleClick = (e: React.MouseEvent) => {
    if (onClick) {
      e.preventDefault();
      onClick();
    }
  };

  if (href) {
    return (
      <a
        href={href}
        className={styles.floatingButton}
        onClick={handleClick}
        aria-label={label}
      >
        {buttonContent}
      </a>
    );
  }

  return (
    <button
      className={styles.floatingButton}
      onClick={handleClick}
      aria-label={label}
    >
      {buttonContent}
    </button>
  );
}
