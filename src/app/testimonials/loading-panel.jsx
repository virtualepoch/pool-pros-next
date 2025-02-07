"use client";
import { useEffect, useRef, useState } from "react";
import { CSSTransition } from "react-transition-group";

export const LoadingPanel = ({ styles }) => {
  const [loadingPanel, setLoadingPanel] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoadingPanel(false);
    }, 2000);
  }, [loadingPanel]);

  const nodeRef = useRef(null);

  return (
    <CSSTransition
      in={loadingPanel}
      unmountOnExit
      timeout={300}
      classNames={styles.loadingSection}
      nodeRef={nodeRef}
    >
      <div className={styles.loadingSection} ref={nodeRef}>
        <div className={styles.loadingIcon} />
      </div>
    </CSSTransition>
  );
};
