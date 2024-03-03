import { useState } from "react";
import styles from "./app.module.css";

export const EditForm = ({ editTodo, task }) => {
  const [value, setValue] = useState(task.task);

  const handleSubmit = (e) => {
    e.preventDefault();

    editTodo(value, task.id);

    setValue("");
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <input
        className={styles.input}
        type="text"
        placeholder="Update codo"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />

      <button className={styles.submit} type="submit">
        Update
      </button>
    </form>
  );
};
