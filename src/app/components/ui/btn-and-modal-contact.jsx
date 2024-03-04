"use client";
import { useEffect, useState } from "react";
import { ModalContact } from "./modal-contact";

// NOTE!!!!!!!!!! THIS IS THE FIXED VERSION THAT MOVED ON SCROLL
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
      <div className={`btn-contact-container ${addedClass}`}>
        <div
          className={btnFixed ? "btn-contact-wrap fixed" : "btn-contact-wrap"}
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
            }}
          >
            <p className="contact-link-text">{content}</p>

            <div className="contact-link-icon" />
          </button>
        </div>
      </div>

      <ModalContact modal={modal} setModal={setModal} />
    </>
  );
};
