"use client";
import Image from "next/image";
import { useState } from "react";

export const SiteLogoFloatAnim = ({ styles }) => {
  const [pressed, setPressed] = useState();

  return (
    <div className={styles.siteLogoFloatAnim}>
      <div
        className={styles.logoFloatWrap}
        onTouchStart={() => setPressed(true)}
        onTouchEnd={() => setPressed(false)}
        style={{
          boxShadow: pressed ? "0 0 100px 10px #0ff" : "0 0 20px 1px #0ff",
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
