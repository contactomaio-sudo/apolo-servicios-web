import React from 'react';

/**
 * A custom-designed SVG logo icon for APOLO.
 * The design is an abstract and modern letter 'A'.
 * - The sharp peak represents a building/rooftop, alluding to property administration.
 * - The solid, grounded form suggests stability and security.
 * - The overall shape is an upward-pointing arrow, symbolizing growth, quality, and integral solutions.
 */
export const Logo: React.FC<{ className?: string }> = ({ className }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
    aria-label="APOLO Logo Icon"
  >
    <path d="M12 2.5L1 20h4.5l6.5-12.5L18.5 20H23L12 2.5zM12 11.5l-3.5 6.5h7L12 11.5z" />
  </svg>
);