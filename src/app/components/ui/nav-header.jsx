import Link from "next/link";
import Image from "next/image";

export const NavHeader = ({ setNav }) => {
  return (
    <header className="nav-header">
      <Link
        href="/"
        className="idahomeserv-logo-link"
        onClick={() => {
          setNav(false);
        }}
      >
        <Image
          className="idahomeserv-logo"
          src="/bpp-1.png"
          alt="IdaHomeServ LLC Logo"
          width={800}
          height={432}
        />
      </Link>
    </header>
  );
};
