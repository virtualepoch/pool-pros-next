"use client";
import { useState } from "react";
import { ModalContact } from "../ui/modal-contact";

// NOTE!!!!!!!!!! THIS IS THE ("NON-FIXED") VERSION THAT MOVED ON SCROLL
export const BtnAndModalContact = ({ addedClass, content = "Contact Us" }) => {
  const [modal, setModal] = useState();
  const [pressed, setPressed] = useState();

  return (
    <>
      <button
        className="btn-contact"
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
          top: 0,
        }}
      >
        <p className="contact-link-text">{content}</p>

        <div className="contact-link-icon" />
      </button>

      <ModalContact modal={modal} setModal={setModal} />
    </>
  );
};
