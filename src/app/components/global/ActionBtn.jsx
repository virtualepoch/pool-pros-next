"use client";
import { useState } from "react";

export const ActionBtn = ({ text }) => {
  const [pressed, setPressed] = useState();

  return (
    <div
      className="btn-contact"
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
      <p className="contact-link-text">{text}</p>

      <div className="contact-link-icon" />
    </div>
  );
};
