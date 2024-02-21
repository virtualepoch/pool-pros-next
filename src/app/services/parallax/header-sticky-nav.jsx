import { CSSTransition } from "react-transition-group";

export const HeaderStickyNav = ({ styles, stickyNav = true }) => {
  return (
    <div className={styles.stickyWrap}>
      <CSSTransition
        in={true}
        unmountOnExit
        timeout={400}
      >
        <button className={styles.btnStickyNav} />
      </CSSTransition>

      <h1 className={`route-header ${styles.stickyHeader}`}>Services</h1>
    </div>
  );
};
