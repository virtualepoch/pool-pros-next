import Link from "next/link";
import { prisma } from "../db";
import { redirect } from "next/navigation";

import styles from "../todo-app.module.css";

async function createTodo(data: FormData) {
  "use server";

  const title = data.get("title")?.valueOf();

  if (typeof title !== "string" || title.length === 0) {
    throw new Error("Invalid title");
  }

  await prisma.todo.create({ data: { title, complete: false } });

  redirect("/todo-app");
}

export default async function NewTodo() {
  return (
    <div className={styles.pageNewTodo}>
      <h3 className={styles.header}>New Todo</h3>

      <form action={createTodo} className={styles.formNewTodo}>
        <input type="text" name="title" className={styles.inputNewTodo} />

        <div className={styles.wrapFormBtns}>
          <Link href="/todo-app" className={styles.btnCancel}>
            Cancel
          </Link>

          <button type="submit" className={styles.btnCreate}>
            Create
          </button>
        </div>
      </form>
    </div>
  );
}
