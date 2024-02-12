"use client";
import { useState } from "react";
import { usePathname } from "next/navigation";
// COMPONENTS
import { BtnNav } from "./ui/btn-nav";
import { Nav } from "./ui/nav";
import { BtnToTop } from "./ui/btn-to-top";

export const UI = () => {
  const [nav, setNav] = useState();
  const pathname = usePathname();

  return (
    <div className="ui">
      <BtnNav nav={nav} setNav={setNav} />

      <Nav nav={nav} setNav={setNav} />

      {!pathname === "/services" && <BtnToTop />}
    </div>
  );
};
