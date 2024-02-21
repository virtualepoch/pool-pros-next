import Link from "next/link";
import Image from "next/image";
import { ParallaxLayer } from "@react-spring/parallax";
import { InViewOpacity } from "../../components/in-view-opacity";

export const Header = ({ styles }) => {
  return (
    <ParallaxLayer
      offset={0}
      factor={0.5}
      speed={1}
      className={styles.parallaxLayer}
    >
      <InViewOpacity rootMargin="-20%" triggerOnce={false} opacitySpeed="400ms">
        <header className={`header ${styles.header}`}>
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

          <h2
            className={`header-phone-number ${styles.headerPhoneNumberServices}`}
          >
            (208)475-4344
          </h2>
        </header>
      </InViewOpacity>
    </ParallaxLayer>
  );
};
