"use client";

import { useState } from "react";

const borderStyle = "1px solid var(--grid-grey)";

interface ProfileImageProps {
  src: string;
  alt: string;
}

export function ProfileImage({ src, alt }: ProfileImageProps) {
  const [error, setError] = useState(false);

  return (
    <div
      style={{
        borderRadius: 24,
        border: borderStyle,
        overflow: "hidden",
        background: "#e5e5e5",
        lineHeight: 0,
      }}
    >
      {!error && (
        <img
          src={src}
          alt={alt}
          style={{ width: "100%", height: "auto", display: "block" }}
          onError={() => setError(true)}
        />
      )}
    </div>
  );
}
