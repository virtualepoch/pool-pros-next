"use client";
import Image from "next/image";
import { FooterLinks } from "./footer-links";
import Link from "next/link";
import { SiteLogo } from "./site-logo";

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

      <Link className="nav-link" href="/services">
        Services
      </Link>

      <Link className="nav-link" href="/testimonials">
        Testimonials
      </Link>

      <Link className="nav-link" href="/gallery">
        Gallery
      </Link>

      <div className="footer-logos-wrap">
        <a href="https://cpo.training/" target="_blank" rel="noreferrer">
          <Image
            className="logo"
            src="/globals/cpo.jpg"
            alt="CPO Logo"
            width={426}
            height={426}
            target="_blank"
            rel="noreferrer"
          />
        </a>

        <a href="https://www.pentair.com" target="_blank" rel="noreferrer">
          <Image
            className="logo"
            src="/globals/pentair.jpg"
            alt="Pentair Service Professional Logo"
            width={512}
            height={512}
            target="_blank"
            rel="noreferrer"
          />
        </a>
      </div>

      <SiteLogo
        priority={false}
        src="/logos/jpg333circle.jpg"
        style={{
          borderRadius: "100%",
          maxWidth: "140px",
          boxShadow: "1px 1px 10px 1px #000a",
        }}
      />

      <div className="copyright-wrap">
        <p className="footer-info">(208) 475-4344</p>

        <p className="footer-info">boisepoolpros@gmail.com</p>

        <p className="footer-info">8670 West Pembrook Drive, Boise, ID 83704</p>

        <p className="footer-copyright">
          &copy; 2024 Boise Pool Pros, all rights reserved.
        </p>

        <p className="footer-info virtual-epoch-link-wrapper">
          built & maintained by:
          <br />
          <a
            className="virtual-epoch-link"
            href="https://www.virtualepoch.com"
            target="_blank"
            rel="noreferrer"
          >
            VirtualEpoch.com
          </a>
        </p>
      </div>
    </footer>
  );
};
