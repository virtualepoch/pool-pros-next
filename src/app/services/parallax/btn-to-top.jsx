import { CSSTransition } from "react-transition-group";

export const BtnToTop = ({ btnToTop = true, styles, parallaxRef }) => {
  return (
    <CSSTransition
      in={btnToTop}
      unmountOnExit
      timeout={300}
      classNames="services-btn-top"
    >
      <div className={`services-btn-top ${styles.btnTopContainer}`}>
        <button
          onClick={() => {
            parallaxRef.current.scrollTo(0);
          }}
          className={`btn-to-top ${styles.servicesBtnTop}`}
        >
          Scroll to top
        </button>
      </div>
    </CSSTransition>
  );
};
