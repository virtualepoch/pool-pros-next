"use client";
import { useState } from "react";
import { ContactModal } from "../ui/modal-contact";
import { InViewOpacityTransform } from "../in-view-opacity-transform";

export const LinkContact = ({ addedClass, content = "Contact Us" }) => {
  const [modal, setModal] = useState();
  const [pressed, setPressed] = useState();

  return (
    <>
      <InViewOpacityTransform>
        <button
          className={`contact-link contact ${addedClass}`}
          onClick={() => {
            setModal(true);
          }}
          onMouseDown={() => setPressed(true)}
          onMouseUp={() => setPressed(false)}
          onTouchStart={() => setPressed(true)}
          onTouchEnd={() => setPressed(false)}
          style={{
            boxShadow: pressed ? "none" : "1px 2px 5px 1px #0003",
            border: pressed ? "2px solid #0ff" : "",
          }}
        >
          <p className="contact-link-text">{content}</p>
          <div className={`contact-link-icon ${addedClass}`} />
        </button>
      </InViewOpacityTransform>

      <ContactModal modal={modal} setModal={setModal} />
    </>
  );
};
