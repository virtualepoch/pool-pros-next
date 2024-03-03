import { useState } from "react";
import styles from "./app.module.css";

export const Form = ({ addTodo }) => {
  const [value, setValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    addTodo(value);
    setValue("");
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <input
        className={styles.input}
        type="text"
        placeholder="New codo"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />

      <button className={styles.submit} type="submit">
        Add
      </button>
    </form>
  );
};
