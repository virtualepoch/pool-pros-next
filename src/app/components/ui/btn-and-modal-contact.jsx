"use client";
import { useEffect, useState } from "react";
import { ContactModal } from "./modal-contact";
import { InViewOpacity } from "../in-view-opacity";

export const BtnAndModalContact = ({ addedClass, content = "Contact Us" }) => {
  const [modal, setModal] = useState();
  const [pressed, setPressed] = useState();

  const [btnFixed, setBtnFixed] = useState();

  useEffect(() => {
    function handleScroll() {
      setBtnFixed(window.scrollY > window.innerHeight ? true : false);
    }

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [setBtnFixed]);

  return (
    <>
      <div className="btn-contact-container">
        <div
          className={btnFixed ? "btn-contact-wrap fixed" : "btn-contact-wrap"}
          // style={{
          //   transform: btnFixed ? "translateY(calc(100vh - 50px))" : "none",
          // }}
        >
          <button
            className={btnFixed ? "btn-contact fixed" : "btn-contact"}
            onClick={() => {
              setModal(true);
            }}
            onMouseDown={() => setPressed(true)}
            onMouseUp={() => setPressed(false)}
            onTouchStart={() => setPressed(true)}
            onTouchEnd={() => setPressed(false)}
            style={{
              border: pressed ? "2px solid #0ff" : "",
              boxShadow: pressed ? "none" : "1px 2px 10px 1px #0007",
              // transform: btnFixed
              //   ? `{translateX(${window.innerWidth / 2})}`
              //   : "none",
            }}
          >
            <p className="contact-link-text">{btnFixed ? "" : content}</p>
            <div className={`contact-link-icon ${addedClass}`} />
          </button>
        </div>
      </div>

      <ContactModal modal={modal} setModal={setModal} />
    </>
  );
};
