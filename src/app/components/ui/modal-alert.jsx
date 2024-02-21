import Image from "next/image";
import { useEffect, useState } from "react";
import { CSSTransition } from "react-transition-group";

export const AlertModal = () => {
  const [alertModal, setAlertModal] = useState(true),
    [anim, setAnim] = useState(true),
    [pressed, setPressed] = useState();

  useEffect(() => {
    setAnim(alertModal);
  }, [setAnim, alertModal]);

  return (
    <CSSTransition
      in={alertModal}
      unmountOnExit
      timeout={400}
      classNames="modal"
    >
      <div className="modal alert">
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
          <div className="modal-header">
            <h3 className="flex-center">
              PSA: IdaHomeServ Pool & Spa is rebranding!
            </h3>

            <button
              className="btn-close-modal"
              aria-label="Close alert modal"
              onClick={() => setAlertModal(false)}
            />
          </div>
          <div className="modal-row">
            <h3>Our company name is changing from:</h3>

            <div className="flex-wrap">
              <p>IdaHomeServ Pool & Spa</p>

              <div>to:</div>

              <p>Boise Pool Pros</p>
            </div>
          </div>

          <div className="modal-row">
            <h3>Our logo is changing from:</h3>

            <div className="flex-wrap">
              <Image
                className="alert-img"
                src="/logos/icon-192.png"
                alt="IdaHomeServ logo"
                width={200}
                height={200}
              />

              <div>to:</div>

              <div className="alert-img-icon" />
            </div>
          </div>

          <div>AND</div>

          <div className="modal-row">
            <h3>Our website address is changing from:</h3>

            <div className="flex-wrap">
              <p>IdaHomeServ.com</p>

              <div>to:</div>

              <p>BoisePoolPros.com</p>
            </div>
          </div>

          <button
            className={
              pressed
                ? "btn-close-alert-modal pressed"
                : "btn-close-alert-modal"
            }
            aria-label="Close alert modal"
            onMouseDown={() => setPressed(true)}
            onMouseUp={() => setPressed(false)}
            onTouchStart={() => setPressed(true)}
            onTouchEnd={() => setPressed(false)}
            onClick={() => setAlertModal(false)}
          >
            Got it!
          </button>
        </div>
      </div>
    </CSSTransition>
  );
};
