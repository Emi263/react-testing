import React, { useState } from "react";
import { Todo } from "../../Interface";
interface Props {
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

function Input({ todos, setTodos }: Props) {
  const [inputVal, setInputVal] = useState<string>("");
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setInputVal(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (inputVal.trim().length == 0) {
      return;
    }
    const newTodo: Todo = {
      id: Math.random() * 1000,
      text: inputVal,
      completed: false,
    };

    setTodos([...todos, newTodo]);
    setInputVal("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        placeholder="Insert todo here"
        type="text"
        onChange={handleChange}
        value={inputVal}
      />
      <input type="submit" />
    </form>
  );
}

export default Input;
