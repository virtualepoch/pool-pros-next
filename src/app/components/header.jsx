import Link from "next/link";
import Image from "next/image";
// ASSETS

export const Header = () => {
  return (
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
  );
};
