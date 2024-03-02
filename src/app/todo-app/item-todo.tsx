"use client";
import styles from "./todo-app.module.css";

type TodoItemProps = {
  id: string;
  title: string;
  complete: boolean;
  toggleTodo: (id: string, complete: boolean) => void;
};

export const ItemTodo = ({
  id,
  title,
  complete,
  toggleTodo,
}: TodoItemProps) => {
  return (
    <li className={styles.itemTodo}>
      <input
        id={id}
        type="checkbox"
        className={styles.checkbox}
        defaultChecked={complete}
        onChange={(e) => toggleTodo(id, e.target.checked)}
      />
      <label htmlFor={id} className={styles.todo}>
        {title}
      </label>
    </li>
  );
};
