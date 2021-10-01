import { render, screen } from "@testing-library/react";
import TodoNumber from "./TodoNumber";

describe("Test for input number component", () => {
  it("Should display '0 todos' when there are no todos", () => {
    render(<TodoNumber todos={[]} />);
    const numOfTodos = screen.getByText(/0 todos/i);
    expect(numOfTodos).toBeInTheDocument();
  });
  it("Should display '1 todo' when there is one todo", () => {
    render(<TodoNumber todos={[{ id: 1, text: "First", completed: false }]} />);
    const numOfTodos = screen.getByText(/1 todo/i);
    expect(numOfTodos).toBeInTheDocument();
  });
  it("Should display '4 todos' when there are 4 todos", () => {
    const todos = [
      {
        id: 1,
        text: "first",
        completed: false,
      },
      {
        id: 2,
        text: "second",
        completed: false,
      },
      {
        id: 3,
        text: "third",
        completed: false,
      },
      {
        id: 4,
        text: "fourth",
        completed: false,
      },
    ];
    render(<TodoNumber todos={todos} />);
    const numOfTodos = screen.getByText(/4 todos/i);
    expect(numOfTodos).toBeInTheDocument();
  });
});
