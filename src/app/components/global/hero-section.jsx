"use client";
import { useEffect, useState } from "react";
import { HeroHeader } from "./anim-opacity-translate-y";

export const HeroSection = ({ styles }) => {
  const [anim2, setAnim2] = useState();

  useEffect(() => {
    setTimeout(() => setAnim2(true), 500);
  }, [setAnim2]);

  return <div />;
};
