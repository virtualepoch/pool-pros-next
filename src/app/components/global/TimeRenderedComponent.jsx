"use client";
import { useState, useEffect } from "react";

export const TimeRenderedComponent = ({
  month1,
  day1,
  month2,
  day2,
  children,
}) => {
  const [showComponent, setShowComponent] = useState(false);

  useEffect(() => {
    const today = new Date();
    const startDay = new Date(today.getFullYear(), month1 - 1, day1); // months start with 0 for January
    const endDay = new Date(today.getFullYear(), month2 - 1, day2);
    if (today >= startDay && today <= endDay) {
      setShowComponent(true);
    } else {
      setShowComponent(false);
    }
  }, [day1, day2, month1, month2]); // Run this effect only once on mount

  return <>{showComponent && <div>{children}</div>}</>;
};
