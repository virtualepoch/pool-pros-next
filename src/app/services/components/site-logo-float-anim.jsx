"use client";
import Image from "next/image";
import { useState } from "react";

export const SiteLogoFloatAnim = ({ styles }) => {
  const [pressed, setPressed] = useState();

  return (
    <div className={styles.siteLogoFloatAnim}>
      <div
        className={styles.logoFloatWrap}
        onMouseDown={() => setPressed(true)}
        onMouseUp={() => setPressed(false)}
        onTouchStart={() => setPressed(true)}
        onTouchEnd={() => setPressed(false)}
        style={{
          animation: pressed && "none",
        }}
      >
        <Image
          className={styles.logoFloat}
          src="/t/1.png"
          alt="Floating site logo... hover to animate!"
          width={639}
          height={609}
        />
      </div>
    </div>
  );
};
