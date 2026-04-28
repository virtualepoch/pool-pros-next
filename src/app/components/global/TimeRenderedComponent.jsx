"use client";

export const TimeRenderedComponent = ({
  month1,
  day1,
  month2,
  day2,
  children,
}) => {
  const today = new Date();
  const startDay = new Date(today.getFullYear(), month1 - 1, day1);
  const endDay = new Date(today.getFullYear(), month2 - 1, day2);
  const showComponent = today >= startDay && today <= endDay;

  return <>{showComponent && <div>{children}</div>}</>;
};
