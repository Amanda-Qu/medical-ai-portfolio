"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

type MediaFallbackProps = {
  type: "image" | "video";
  src: string;
  poster?: string;
  alt: string;
  label: string;
  className?: string;
  fit?: "cover" | "contain";
  priority?: boolean;
};

export function MediaFallback({
  type,
  src,
  poster,
  alt,
  label,
  className = "",
  fit = "cover",
  priority = false
}: MediaFallbackProps) {
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    let isMounted = true;

    fetch(src, { method: "HEAD" })
      .then((response) => {
        if (isMounted && !response.ok) {
          setHasError(true);
        }
      })
      .catch(() => {
        if (isMounted) {
          setHasError(true);
        }
      });

    return () => {
      isMounted = false;
    };
  }, [src]);

  if (hasError) {
    return <GradientFallback label={label} className={className} />;
  }

  if (type === "video") {
    return (
      <video
        className={`h-full w-full ${fit === "contain" ? "object-contain" : "object-cover"} ${className}`}
        src={src}
        poster={poster}
        controls
        muted
        playsInline
        onError={() => setHasError(true)}
      />
    );
  }

  return (
    <Image
      src={src}
      alt={alt}
      fill
      sizes="(min-width: 1024px) 33vw, 100vw"
      className={`${fit === "contain" ? "object-contain" : "object-cover"} ${className}`}
      priority={priority}
      onError={() => setHasError(true)}
    />
  );
}

function GradientFallback({
  label,
  className
}: {
  label: string;
  className: string;
}) {
  return (
    <div
      className={`relative flex h-full w-full items-end bg-[radial-gradient(circle_at_28%_24%,rgba(57,230,208,0.18),transparent_34%),linear-gradient(135deg,rgba(5,7,13,1),rgba(3,14,28,1)_54%,rgba(0,0,0,1))] p-4 ${className}`}
    >
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(57,230,208,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(72,168,255,0.06)_1px,transparent_1px)] bg-[size:36px_36px]" />
      <div className="relative">
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-med-cyan">
          Media Placeholder
        </p>
        <p className="mt-2 text-sm font-medium text-white/82">{label}</p>
      </div>
    </div>
  );
}
