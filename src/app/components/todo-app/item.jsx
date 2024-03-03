import styles from "./app.module.css";

export const Item = ({ task, toggleComplete, editCodo, deleteCodo }) => {
  return (
    <div className={styles.item}>
      <p
        className={
          task.completed ? `${styles.task} ${styles.completed}` : styles.task
        }
        onClick={() => toggleComplete(task.id)}
      >
        {task.task}
      </p>

      <div className={styles.iconsWrap}>
        <div className={styles.penIcon} onClick={() => editCodo(task.id)} />

        <div className={styles.trashIcon} onClick={() => deleteCodo(task.id)} />
      </div>
    </div>
  );
};
