import { useState } from "react";
import { Form } from "./form";
import { Item } from "./item";
import styles from "./app.module.css";
import { v4 as uuidv4 } from "uuid";
import { EditForm } from "./edit-form";
uuidv4();

export const Wrapper = () => {
  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    setTodos([
      ...todos,
      { id: uuidv4(), task: todo, completed: false, isEditing: false },
    ]);
  };

  const toggleComplete = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const editCodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, isEditing: !todo.isEditing } : todo
      )
    );
  };

  const editTask = (task, id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, task, isEditing: !todo.isEditing } : todo
      )
    );
  };

  const deleteCodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <div className={styles.wrapper}>
      <Form addTodo={addTodo} />

      <h3>Codos</h3>

      {todos.map((todo, index) =>
        todo.isEditing ? (
          <EditForm task={todo} key={index} editTodo={editTask} />
        ) : (
          <Item
            task={todo}
            key={index}
            toggleComplete={toggleComplete}
            editCodo={editCodo}
            deleteCodo={deleteCodo}
          />
        )
      )}
    </div>
  );
};
