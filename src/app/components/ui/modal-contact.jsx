"use client";
import { useRef, useState } from "react";
import { CSSTransition } from "react-transition-group";
import emailjs from "@emailjs/browser";
import { FooterLinks } from "../global/footer-links";

export const ModalContact = ({ modal, setModal }) => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_9ohq2xf",
        "template_plreudf",
        form.current,
        "oCPX_vCBcjZYErlyF"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );

    alert("Message sent. Thanks! We'll get back ASAP.");
    setModal(false);
  };

  const [pressed, setPressed] = useState();
  const [anim, setAnim] = useState();

  const nodeRef = useRef(null);

  return (
    <CSSTransition
      in={modal}
      onEnter={() => setAnim(true)}
      onExit={() => setAnim(false)}
      timeout={400}
      classNames="modal"
      unmountOnExit
      nodeRef={nodeRef}
    >
      <section className="modal" aria-label="Contact Form" ref={nodeRef}>
        <div
          className="modal-content-wrap"
          style={{
            opacity: anim ? 1 : 0,
            transform: anim ? "translateY(0)" : "translateY(50%)",
            transition: anim
              ? "opacity 1000ms ease, transform 500ms ease"
              : "none",
          }}
        >
          <h3 className="modal-header">Contact Us</h3>

          <button
            className="btn-close-modal"
            aria-label="Close contact form"
            onClick={() => setModal(false)}
          />

          <FooterLinks />

          <p>
            Use the Quick Links above or you can fill out the form below. We
            usually reply within 24 hours.
          </p>

          <form className="form-quote" ref={form} onSubmit={sendEmail}>
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
            />
          </form>
        </div>
      </section>
    </CSSTransition>
  );
};
