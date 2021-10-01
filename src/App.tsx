import React, { useState } from "react";
import "./App.css";
import Input from "./components/Input";
import Todos from "./components/Todos";
import TodoNumber from "./components/TodoNumber";
import { Todo } from "./Interface";
function App() {
  const [todos, setTodos] = useState<Todo[]>([]);

  return (
    <div className="container">
      <Input todos={todos} setTodos={setTodos} />
      <Todos todos={todos} setTodos={setTodos} />
      <TodoNumber todos={todos} />
    </div>
  );
}

export default App;
