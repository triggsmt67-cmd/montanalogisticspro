"use client";

import React from "react";
import Image from "next/image";

interface DeconstructedLogoOverlayProps {
  imgSrc: string;
  altText: string;
  className?: string;
  aspectRatioClassName?: string;
  children?: React.ReactNode;
}

export function DeconstructedLogoOverlay({
  imgSrc,
  altText,
  className = "",
  aspectRatioClassName = "aspect-square md:aspect-[4/3] lg:aspect-square",
  children
}: DeconstructedLogoOverlayProps) {
  // Generate unique IDs for the clipPaths so we don't have collisions if multiple overlays are on the same page
  const shieldId = React.useId().replace(/:/g, "-");
  const letterEId = React.useId().replace(/:/g, "-");

  return (
    <div className={`relative w-full overflow-hidden group rounded-[2.5rem] border border-zinc-200/80 shadow-2xl bg-zinc-100 ${className} ${aspectRatioClassName}`}>
      {/* 1. Base image layer */}
      <Image
        src={imgSrc}
        alt={altText}
        fill
        sizes="(max-width: 1024px) 100vw, 50vw"
        className="object-cover transition-transform duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105"
      />

      {/* Subtle global gradient vignette to protect readable overlay text if any */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-black/10 to-transparent pointer-events-none z-10" />

      {/* SVG Clip Path Definitions */}
      <svg className="absolute w-0 h-0" aria-hidden="true">
        <defs>
          {/* Logo organic shield shape in relative coordinates (0 to 1) */}
          <clipPath id={`clip-shield-${shieldId}`} clipPathUnits="objectBoundingBox">
            <path d="M 0.5,0.06 C 0.82,0.06 0.94,0.22 0.9,0.52 C 0.86,0.8 0.65,0.92 0.5,0.94 C 0.35,0.92 0.14,0.8 0.1,0.52 C 0.06,0.22 0.18,0.06 0.5,0.06 Z" />
          </clipPath>
          {/* Logo letter 'e' shape in relative coordinates (0 to 1) */}
          <clipPath id={`clip-letter-${letterEId}`} clipPathUnits="objectBoundingBox">
            <path 
              fillRule="evenodd" 
              d="M 0.37,0.54 L 0.73,0.54 C 0.73,0.43 0.65,0.34 0.55,0.34 C 0.44,0.34 0.37,0.43 0.37,0.54 Z M 0.37,0.58 C 0.37,0.69 0.44,0.78 0.55,0.78 C 0.65,0.78 0.72,0.71 0.73,0.63 L 0.81,0.63 C 0.80,0.75 0.69,0.85 0.55,0.85 C 0.38,0.85 0.29,0.72 0.29,0.56 C 0.29,0.39 0.38,0.27 0.55,0.27 C 0.71,0.27 0.81,0.39 0.81,0.56 L 0.81,0.58 Z" 
            />
          </clipPath>
        </defs>
      </svg>

      {/* 2. First visual segment: The shield window.
          Renders the same image, but color-graded/brightened and shifted slightly on hover. */}
      <div
        className="absolute inset-0 w-full h-full pointer-events-none transition-transform duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.03] group-hover:translate-x-1 group-hover:translate-y-1"
        style={{ clipPath: `url(#clip-shield-${shieldId})` }}
      >
        <Image
          src={imgSrc}
          alt=""
          fill
          sizes="(max-width: 1024px) 100vw, 50vw"
          className="object-cover filter brightness-[1.06] contrast-[1.03]"
        />
        {/* Subtle branding tint inside the shield */}
        <div className="absolute inset-0 bg-emerald-500/10 mix-blend-overlay" />
      </div>

      {/* 3. Second visual segment: The letter 'e' lens.
          Renders the image with a subtle glass refraction/blur and a light overlay, shifted slightly differently. */}
      <div
        className="absolute inset-0 w-full h-full pointer-events-none transition-transform duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.07] group-hover:-translate-x-1 group-hover:-translate-y-1"
        style={{ clipPath: `url(#clip-letter-${letterEId})` }}
      >
        <Image
          src={imgSrc}
          alt=""
          fill
          sizes="(max-width: 1024px) 100vw, 50vw"
          className="object-cover filter brightness-[0.92] contrast-[1.08] saturate-[1.05]"
        />
        <div className="absolute inset-0 bg-white/10 backdrop-blur-[1px]" />
      </div>

      {/* 4. Fine wireframe line borders that highlight the geometry and glow on hover */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none z-20 transition-transform duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.02]"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
      >
        {/* Organic shield vector line */}
        <path
          d="M 50,6 C 82,6 94,22 90,52 C 86,80 65,92 50,94 C 35,92 14,80 10,52 C 6,22 18,6 50,6 Z"
          fill="none"
          stroke="currentColor"
          className="text-white/20 group-hover:text-emerald-400/40 transition-colors duration-500"
          strokeWidth="0.75"
          strokeDasharray="200"
          strokeDashoffset="0"
        />

        {/* Lowercase 'e' vector line */}
        <path
          d="M 37,54 L 73,54 C 73,43 65,34 55,34 C 44,34 37,43 37,54 Z M 37,58 C 37,69 44,78 55,78 C 65,78 72,71 73,63 L 81,63 C 80,75 69,85 55,85 C 38,85 29,72 29,56 C 29,39 38,27 55,27 C 71,27 81,39 81,56 L 81,58 Z"
          fill="none"
          stroke="currentColor"
          className="text-white/10 group-hover:text-emerald-400/20 transition-colors duration-500"
          strokeWidth="0.5"
        />
      </svg>

      {/* 5. Custom absolute children layer */}
      {children && (
        <div className="absolute inset-x-0 bottom-0 z-30 pointer-events-auto">
          {children}
        </div>
      )}
    </div>
  );
}
