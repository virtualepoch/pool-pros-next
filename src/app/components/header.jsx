"use client";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

const images = [
  { src: "/t/1.png" },
  { src: "/t/2.webp" },
  { src: "/t/3.png" },
  { src: "/t/4.webp" },
  { src: "/t/5.png" },
  { src: "/t/6.webp" },
  { src: "/t/7.png" },
  { src: "/t/8.png" },
  { src: "/t/9.png" },
  { src: "/t/10.png" },
  { src: "/t/11.png" },
  { src: "/t/12.png" },
  { src: "/t/13.png" },
];

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
              alt="Boise Pool Pros Logo"
              width={800}
              height={432}
            />
          </Link>

          <hr />
          {images.map((images, index) => (
            <>
              <div className="logo-testing-number">#{index + 1}</div>
              <Image
                priority
                className="logo-testing"
                src={images.src}
                alt="Boise Pool Pros Logo"
                width={400}
                height={400}
              />

              <hr />
            </>
          ))}

          <h2 className="header-phone-number">(208)475-4344</h2>
        </header>
      )}
    </>
  );
};
