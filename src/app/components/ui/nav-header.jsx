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
          src="/t/1.webp"
          alt="Boise Pool Pros logo and link to home page."
          width={800}
          height={432}
        />
      </Link>
    </header>
  );
};
