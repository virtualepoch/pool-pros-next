import Link from "next/link";
import Image from "next/image";

export const SiteLogo = ({
  onClick,
  priority,
  style,
  src = "/logos/jpg333.jpg",
}) => {
  return (
    <Link href="/" className="site-logo-link" onClick={onClick}>
      <Image
        priority={priority}
        className="site-logo"
        style={style}
        src={src}
        alt="Boise Pool Pros Logo"
        width={333}
        height={333}
      />
    </Link>
  );
};
