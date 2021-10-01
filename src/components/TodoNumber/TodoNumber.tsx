import { Todo } from "../../Interface";
interface Props {
  todos: Todo[];
}

function TodoNumber({ todos }: Props) {
  const notCompletedTodos = todos.filter((todo) => todo.completed == false);

  return (
    <div className="todoNumber" data-testid="todonum">
      {notCompletedTodos.length}{" "}
      {notCompletedTodos.length == 1 ? "todo" : "todos"}
    </div>
  );
}

export default TodoNumber;
