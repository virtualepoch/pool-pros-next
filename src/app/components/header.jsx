"use client";
import Link from "next/link";
import Image from "next/image";

export const Header = () => {
  return (
    <header className="header">
      <Link href="/" className="site-logo-link">
        <Image
          priority
          className="site-logo"
          src="/t/1.png"
          alt="Boise Pool Pros Logo"
          width={512}
          height={512}
        />
      </Link>

      <p className="header-phone-number">(208)475-4344</p>
    </header>
  );
};
