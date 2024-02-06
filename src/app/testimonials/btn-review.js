"use client";
import { useEffect, useState } from "react";

export const BtnReview = ({ styles }) => {
  const [btnReview, setBtnReview] = useState();
  useEffect(() => {
    setTimeout(() => {
      setBtnReview(true);
    }, 2000);
  }, []);

  return (
    <>
      {btnReview && (
        <a
          className={styles.linkReviewWidget}
          href="https://g.page/r/CY961LE6yYZ1EBE/review"
          target="_blank"
          rel="noreferrer"
        >
          Leave a Review
        </a>
      )}
    </>
  );
};
