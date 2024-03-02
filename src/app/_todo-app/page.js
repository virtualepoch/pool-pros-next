import styles from "./todo-app.module.css"

export default function Page() {
  return (
    <>
      <form>
        <input type="text" name="title" className={styles.formInput}></input>
      </form>
    </>
  );
}
