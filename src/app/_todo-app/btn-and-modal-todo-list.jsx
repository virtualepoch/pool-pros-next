"use client";
import { useState } from "react";
import { CSSTransition } from "react-transition-group";
import { TodoItem } from "./todo-item";
import styles from "./todo-app.module.css";
import "./css-transition.css";

export const BtnAndModalTodoList = ({ todos }) => {
  const [state, setState] = useState();

  return (
    <>
      <button className={styles.btn} onClick={() => setState(!state)} />

      <CSSTransition
        in={state}
        unmountOnExit
        timeout={500}
        classNames="todo-app"
      >
        <div className={styles.container}>
          <h3 className={styles.header}>Todo List App</h3>

          <div className={styles.wrapper}>
            <ul className={styles.list}>
              {todos.map((todo) => (
                <TodoItem key={todo.id} {...todo} />
              ))}
            </ul>
          </div>
        </div>
      </CSSTransition>
    </>
  );
};
