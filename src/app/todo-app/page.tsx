import Link from "next/link";
import { prisma } from "../../db";
import { ItemTodo } from "./item-todo";
import styles from "./todo-app.module.css";

function getTodos() {
  return prisma.todo.findMany();
}

async function toggleTodo(id: string, complete: boolean) {
  "use server";

  await prisma.todo.update({ where: { id }, data: { complete } });
}

export default async function TodoApp() {
  const todos = await getTodos();

  return (
    <div className={styles.AppTodo}>
      {/* FIGURE OUT HOW TO MAKE THE LINK GO BACK */}
      <Link href=".." className={styles.btnClose} />

      <h3 className={styles.header}>Todo List App</h3>

      <Link href="/todo-app/new-todo" className={styles.btnNewTodo}>
        New Todo
      </Link>

      <ul className={styles.listTodos}>
        <h3 className={styles.header}>Todos</h3>
        {todos.map((todo) => (
          <ItemTodo key={todo.id} {...todo} toggleTodo={toggleTodo} />
        ))}
      </ul>
    </div>
  );
}
