import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import App from "./App";

const addTodo = (tasks) => {
  const input = screen.getByPlaceholderText(/insert todo here/i);
  const button = screen.getByRole("button", {
    name: /submit/i,
  });
  tasks.forEach((task) => {
    fireEvent.change(input, { target: { value: task.text } });
    fireEvent.click(button);
  });
};

describe("Integrated Test", () => {
  render(<App />); //initially render the app we want to test

  it("should get 3 todos, and display them ", () => {
    addTodo([
      { id: 1, text: "first task" },
      { id: 2, text: "secondTask" },
      { id: 3, text: "Thirds task" },
    ]);

    const listItems = screen.queryAllByTestId("list");
    expect(listItems.length).toBe(3);
    const numOfTodos = screen.getByText(/3 todos/i);
    expect(numOfTodos).toBeInTheDocument();
  });
});
