"use client";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

export const Header = () => {
  const pathname = usePathname();

  return (
    <>
      {pathname != "/services" && (
        <header className="header">
          <Link href="/" className="idahomeserv-logo-link">
            <Image
              priority
              className="idahomeserv-logo"
              src="/globals/site-logo.png"
              alt="IdaHomeServ LLC Logo"
              width={800}
              height={432}
            />
          </Link>

          <h2 className="header-phone-number">(208)475-4344</h2>
        </header>
      )}
    </>
  );
};
