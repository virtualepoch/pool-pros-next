"use client";
import { useEffect, useRef, useState } from "react";
import { CSSTransition } from "react-transition-group";
import emailjs from "@emailjs/browser";
import { FooterLinks } from "../global/footer-links";

const SWIPE_CLOSE_RELEASE_PX = 120;

const isInteractiveTarget = (target) => {
  if (!target || typeof target.closest !== "function") {
    return false;
  }
  if (target.closest(".modal-swipe-hint-btn")) {
    return false;
  }
  return Boolean(
    target.closest(
      "input, textarea, select, button, a, label, [role='button']"
    )
  );
};

const resetDragShellStyles = (shell) => {
  if (!shell) {
    return;
  }
  shell.style.transition = "";
  shell.style.transform = "";
};

const animateDragShellTransform = (shell, yPx, onDone) => {
  if (!shell) {
    return;
  }
  const done = (ev) => {
    if (ev.target !== shell || ev.propertyName !== "transform") {
      return;
    }
    shell.removeEventListener("transitionend", done);
    onDone();
  };
  shell.addEventListener("transitionend", done);
  requestAnimationFrame(() => {
    shell.style.transition =
      "transform 320ms cubic-bezier(0.32, 0.72, 0, 1)";
    shell.style.transform = `translateY(${yPx}px)`;
  });
};

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
  const [touchUi, setTouchUi] = useState(false);

  const nodeRef = useRef(null);
  const dragShellRef = useRef(null);
  const dragMode = useRef(null);
  const dragStartY = useRef(0);
  const dragStartScroll = useRef(0);
  const closingByDrag = useRef(false);
  const viewportLockCleanup = useRef(null);

  const clearViewportLock = () => {
    if (viewportLockCleanup.current) {
      viewportLockCleanup.current();
      viewportLockCleanup.current = null;
    }
  };

  const setShellDraggingClass = (on) => {
    const el = dragShellRef.current;
    if (!el) {
      return;
    }
    if (on) {
      el.classList.add("modal-drag-shell--dragging");
    } else {
      el.classList.remove("modal-drag-shell--dragging");
    }
  };

  const attachViewportLock = () => {
    clearViewportLock();
    const lockMove = (ev) => {
      if (!dragMode.current) {
        return;
      }
      const t = ev.touches[0];
      if (!t) {
        return;
      }
      let dy = t.clientY - dragStartY.current;
      if (dy < 0) {
        dy = 0;
      }
      if (dy > 6) {
        ev.preventDefault();
      }
    };
    document.addEventListener("touchmove", lockMove, { passive: false });
    viewportLockCleanup.current = () => {
      document.removeEventListener("touchmove", lockMove);
    };
  };

  useEffect(() => {
    const mq = window.matchMedia("(hover: none), (pointer: coarse)");
    const apply = () => setTouchUi(mq.matches);
    apply();
    mq.addEventListener("change", apply);
    return () => mq.removeEventListener("change", apply);
  }, []);

  useEffect(() => {
    if (!modal) {
      closingByDrag.current = false;
      dragMode.current = null;
      clearViewportLock();
      resetDragShellStyles(dragShellRef.current);
      dragShellRef.current?.classList.remove("modal-drag-shell--dragging");
    }
  }, [modal]);

  const applyDragOffset = (px) => {
    const shell = dragShellRef.current;
    if (!shell) {
      return;
    }
    shell.style.transition = "none";
    shell.style.transform = `translateY(${px}px)`;
  };

  const handleTouchStart = (e) => {
    if (closingByDrag.current || e.touches.length !== 1) {
      return;
    }
    const shell = dragShellRef.current;
    if (!shell) {
      return;
    }

    const hintHit = e.target.closest(".modal-swipe-hint-btn");
    if (hintHit) {
      dragMode.current = "hint";
      dragStartY.current = e.touches[0].clientY;
      dragStartScroll.current = shell.scrollTop;
      setShellDraggingClass(true);
      attachViewportLock();
      return;
    }

    if (isInteractiveTarget(e.target)) {
      dragMode.current = null;
      return;
    }

    if (shell.scrollTop > 0) {
      dragMode.current = null;
      return;
    }

    dragMode.current = "surface";
    dragStartY.current = e.touches[0].clientY;
    dragStartScroll.current = shell.scrollTop;
    setShellDraggingClass(true);
    attachViewportLock();
  };

  const handleTouchMove = (e) => {
    if (!dragMode.current || closingByDrag.current || e.touches.length !== 1) {
      return;
    }
    const shell = dragShellRef.current;
    if (!shell) {
      return;
    }

    if (dragMode.current === "surface" && shell.scrollTop > 8) {
      dragMode.current = null;
      setShellDraggingClass(false);
      clearViewportLock();
      resetDragShellStyles(shell);
      return;
    }

    const y = e.touches[0].clientY;
    let dy = y - dragStartY.current;
    if (dy < 0) {
      dy = 0;
    }

    applyDragOffset(dy);
  };

  const handleTouchEnd = (e) => {
    clearViewportLock();

    if (!dragMode.current || closingByDrag.current) {
      dragMode.current = null;
      setShellDraggingClass(false);
      return;
    }

    const shell = dragShellRef.current;
    dragMode.current = null;
    setShellDraggingClass(false);

    if (!shell) {
      return;
    }

    const endTouch = e.changedTouches[0];
    if (!endTouch) {
      resetDragShellStyles(shell);
      return;
    }

    const dy = Math.max(0, endTouch.clientY - dragStartY.current);

    const shouldClose = dy >= SWIPE_CLOSE_RELEASE_PX;

    if (shouldClose) {
      closingByDrag.current = true;
      const offY =
        typeof window !== "undefined" ? window.innerHeight + 40 : 900;
      animateDragShellTransform(shell, offY, () => {
        resetDragShellStyles(shell);
        closingByDrag.current = false;
        setModal(false);
      });
      return;
    }

    const hasDragTransform =
      shell.style.transform &&
      shell.style.transform !== "translateY(0px)" &&
      shell.style.transform !== "translateY(0)";
    if (!hasDragTransform) {
      resetDragShellStyles(shell);
      return;
    }

    animateDragShellTransform(shell, 0, () => {
      resetDragShellStyles(shell);
    });
  };

  const touchHandlers = touchUi
    ? {
        onTouchStart: handleTouchStart,
        onTouchMove: handleTouchMove,
        onTouchEnd: handleTouchEnd,
        onTouchCancel: handleTouchEnd,
      }
    : {};

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
      <section
        className={`modal${touchUi ? " modal--touch-dismiss" : ""}`}
        aria-label="Contact Form"
        ref={nodeRef}
        {...touchHandlers}
      >
        <div className="modal-drag-shell" ref={dragShellRef}>
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
            ></button>

            <FooterLinks></FooterLinks>

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
              ></input>

              <input
                className="input-form-quote"
                type="tel"
                placeholder="Phone number"
                name="user_tel"
                required
              ></input>

              <input
                className="input-form-quote"
                type="email"
                placeholder="Email"
                name="user_email"
                required
              ></input>

              <textarea
                placeholder="Hi, Can you help me with..."
                name="message"
                rows="10"
                required
              ></textarea>

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
              ></input>
            </form>
          </div>

          {touchUi ? (
            <button
              type="button"
              className="modal-swipe-hint-btn"
              aria-label="Swipe down to close contact form"
              onClick={() => setModal(false)}
            >
              <svg
                className="modal-swipe-hint-icon"
                viewBox="0 0 24 24"
                width="40"
                height="40"
                aria-hidden="true"
              >
                <path
                  d="M6 9l6 6 6-6"
                  fill="none"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
              </svg>
            </button>
          ) : null}
        </div>
      </section>
    </CSSTransition>
  );
};
