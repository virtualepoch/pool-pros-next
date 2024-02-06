"use client";
import { useEffect, useState } from "react";
import { CSSTransition } from "react-transition-group";

export const LoadingPanel = ({ styles }) => {
  const [loadingPanel, setLoadingPanel] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoadingPanel(false);
    }, 2000);
  }, [loadingPanel]);

  return (
    <CSSTransition
      in={loadingPanel}
      unmountOnExit
      timeout={300}
      classNames={styles.loadingSection}
    >
      <div className={styles.loadingSection}>
        <div className={styles.loadingIcon} />
      </div>
    </CSSTransition>
  );
};
