import Link from "next/link";
import Image from "next/image";

export const NavHeader = ({ setNav }) => {
  return (
    <header className="nav-header">
      <Link
        href="/"
        className="site-logo-link"
        onClick={() => {
          setNav(false);
        }}
      >
        <Image
          className="site-logo"
          src="/logos/192.png"
          alt="Boise Pool Pros logo and link to home page."
          width={192}
          height={192}
          priority
        />
      </Link>
    </header>
  );
};
