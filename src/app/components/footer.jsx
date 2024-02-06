import Image from "next/image";
import { FooterLinks } from "./footer-links";

export const Footer = () => {
  return (
    <footer className="footer">
      <svg width="0" height="0">
        <defs>
          <clipPath id="myCurve" clipPathUnits="objectBoundingBox">
            <path d="M 0,1 L 0,0 L 1,0 L 1,1 C .65 .8, .35 .8, 0 1 Z" />
          </clipPath>
        </defs>
      </svg>

      <div className="path">
        <h3>Follow Us</h3>
        <a
          className="facebook-link-footer"
          href="https://www.facebook.com/IdaHomeServllC/"
          target="_blank"
          rel="noreferrer"
        >
          <p>Facebook</p>
        </a>
      </div>

      <div className="content-wrap">
        <section className="business-hours">
          <h3 className="header-business-hours">Business Hours</h3>
          <ul>
            <li>
              <div className="day-wrap">Mon:</div>8:00 AM – 5:00 PM
            </li>
            <li>
              <div className="day-wrap">Tue:</div>8:00 AM – 5:00 PM
            </li>
            <li>
              <div className="day-wrap">Wed:</div>8:00 AM – 5:00 PM
            </li>
            <li>
              <div className="day-wrap">Thu:</div>8:00 AM – 5:00 PM
            </li>
            <li>
              <div className="day-wrap">Fri:</div>8:00 AM – 5:00 PM
            </li>
            <li>
              <div className="day-wrap">Sat:</div>Closed
            </li>
            <li>
              <div className="day-wrap">Sun:</div>Closed
            </li>
          </ul>
        </section>
      </div>

      <FooterLinks />

      <Image
        className="logo"
        src="/assets/globals/cpo.jpg"
        alt="CPO Logo"
        width={426}
        height={426}
      />

      <Image
        className="logo"
        src="/assets/globals/pentair.jpg"
        alt="Pentair Service Professional Logo"
        width={512}
        height={512}
      />

      <div className="copyright-wrap">
        <h3 className="footer-info">IdaHomeServ@gmail.com</h3>

        <h3 className="footer-info">
          8670 West Pembrook Drive, Boise, ID 83704
        </h3>

        <h3 className="footer-info">(208) 475-4344</h3>

        <h3 className="footer-copyright">
          Copyright &copy; 2024 IdaHomeServ LLC Pool and Spa, all rights
          reserved.
        </h3>
        <h3 className="footer-info virtual-epoch-link">
          Site developed by
          <br />
          <a
            style={{ textDecoration: "underline" }}
            href="https://www.virtualepoch.com"
          >
            VirtualEpoch.com
          </a>
        </h3>
      </div>
    </footer>
  );
};
