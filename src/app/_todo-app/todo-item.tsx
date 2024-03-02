type TodoItemProps = {
  id: string;
  title: string;
  complete: boolean;
};

export const TodoItem = ({ id, title, complete }: TodoItemProps) => {
  return (
    <li
      style={{
        border: "solid red",
        minWidth: "200px",
        minHeight: "50px",
      }}
    >
      <input id={id} type="checkbox" style={{ border: "solid blue" }} />
      <label
        htmlFor={id}
        style={{
          border: "solid #f0f",
        }}
      >
        {title}
      </label>
    </li>
  );
};
