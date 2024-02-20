"use client";
import { useState } from "react";
import { CSSTransition } from "react-transition-group";
// import emailjs from "@emailjs/browser";
import { FooterLinks } from "../footer-links";
import { sendEmail } from "./contact-modal-send-func";

export const ContactModal = ({ modal, setModal }) => {
  const sent = () => {
    alert("Message sent. Thanks! We'll get back ASAP.");
    setModal(false);
  };

  const [pressed, setPressed] = useState();
  const [anim, setAnim] = useState();

  return (
    <CSSTransition
      in={modal}
      onEnter={() => setAnim(true)}
      onExit={() => setAnim(false)}
      timeout={300}
      classNames="contact-modal"
      unmountOnExit
    >
      <section className="contact-modal" aria-label="Contact Form">
        <div
          className="contact-modal-content-wrap"
          style={{
            opacity: anim ? 1 : 0,
            transform: anim ? "translateY(0)" : "translateY(50%)",
            transition: anim
              ? "opacity 1000ms ease, transform 500ms ease"
              : "none",
          }}
        >
          <div className="header-form-quote">
            <h3 className="flex-center">Contact Us</h3>

            <button
              className="btn-close-quote"
              aria-label="Close contact form"
              onClick={() => setModal(false)}
            />
          </div>

          <FooterLinks />

          <p>
            Use the Quick Links above or you can fill out the form below. We
            usually reply within 24 hours.
          </p>

          <form
            className="form-quote"
            action={async (formData) => {
              await sendEmail(formData);
            }}
          >
            <input
              className="input-form-quote"
              type="text"
              placeholder="Name"
              name="user_name"
              required
            />

            <input
              className="input-form-quote"
              type="tel"
              placeholder="Phone number"
              name="user_tel"
              required
            />

            <input
              className="input-form-quote"
              type="email"
              placeholder="Email"
              name="user_email"
              required
            />

            <textarea
              placeholder="Hi, Can you help me with..."
              name="message"
              // FIGURE OUT WHY MESSAGE BOX WON'T EXPAND ?????????????
              rows="10"
              required
            />

            <input
              className={
                pressed ? "btn-submit-form pressed" : "btn-submit-form"
              }
              type="submit"
              value="Send"
              onMouseDown={() => setPressed(true)}
              onMouseUp={() => setPressed(false)}
              onTouchStart={() => setPressed(true)}
              onTouchEnd={() => setPressed(false)}
              onClick={sent}
            />
          </form>
        </div>
      </section>
    </CSSTransition>
  );
};
