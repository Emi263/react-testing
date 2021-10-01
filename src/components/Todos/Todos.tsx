import React, { useState } from "react";
import { Todo } from "../../Interface";
interface Props {
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}
function Todos({ todos, setTodos }: Props) {
  const toggleCompleted = (id: number) => {
    const newTodos: Todo[] = todos.map((todo) => {
      if (todo.id === id) {
        todo.completed = !todo.completed;
      }
      return todo;
    });
    setTodos(newTodos);
  };
  return (
    <ol className="todoList">
      {todos?.map((todo, index) => {
        return (
          <li
            onClick={() => toggleCompleted(todo.id)}
            data-testid="list"
            key={index}
            className={todo.completed ? "completed" : "not-completed"}
          >
            {todo.text}
          </li>
        );
      })}

      {todos.length === 0 && <h3>No todos to display </h3>}
    </ol>
  );
}

export default Todos;
