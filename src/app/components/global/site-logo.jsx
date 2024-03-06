import Link from "next/link";
import Image from "next/image";

export const SiteLogo = ({ onClick, priority }) => {
  return (
    <Link href="/" className="site-logo-link" onClick={onClick}>
      <Image
        priority={priority}
        className="site-logo"
        src="/logos/jpg333.jpg"
        alt="Boise Pool Pros Logo"
        width={333}
        height={333}
      />
    </Link>
  );
};
