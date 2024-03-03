"use client";
import { useState } from "react";
import { CSSTransition } from "react-transition-group";
// COMPONENTS
import { Wrapper } from "./wrapper";
// STYLES
import styles from "./app.module.css";
import "./app.css";

export const TodoApp = () => {
  const [state, setState] = useState(false);
  return (
    <>
      <button className={styles.btnOpenApp} onClick={() => setState(!state)} />

      <CSSTransition in={state} unmountOnExit timeout={500} classNames="app">
        <div className={styles.app}>
          <h3 className={styles.header}>Codo App</h3>

          <Wrapper />
        </div>
      </CSSTransition>
    </>
  );
};
