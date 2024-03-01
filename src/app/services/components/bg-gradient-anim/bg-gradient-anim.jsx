"use client";
// import { FollowCursor } from "../../../components/ui/follow-cursor";
import styles from "./bg-gradient-anim.module.css";

export const BgGradientAnim = () => {
  return (
    <div className={styles.gradientBg}>
      <svg xmlns="http://www.w3.org/2000/svg">
        <defs>
          <filter id="goo">
            <feGaussianBlur
              in="SourceGraphic"
              stdDeviation="10"
              result="blur"
            />

            <feColorMatrix
              in="blur"
              mode="matrix"
              values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -8"
              result="goo"
            />

            <feBlend in="SourceGraphic" in2="goo" />
          </filter>
        </defs>
      </svg>
      <div className={styles.gradientsContainer}>
        <div className={styles.g1}></div>
        <div className={styles.g2}></div>
        <div className={styles.g3}></div>
        <div className={styles.g4}></div>
        <div className={styles.g5}></div>

        {/* <FollowCursor>
          <div className={styles.interactive}></div>
        </FollowCursor> */}
      </div>
    </div>
  );
};
