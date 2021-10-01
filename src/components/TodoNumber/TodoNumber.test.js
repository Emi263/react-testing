import { render, screen } from "@testing-library/react";
import TodoNumber from "./TodoNumber";

describe("Test for input number component", () => {
  it("Should display '0 todos' when there are no todos", () => {
    render(<TodoNumber todos={[]} />);
    const numOfTodos = screen.getByText(/0 todos/i);
    expect(numOfTodos).toBeInTheDocument();
  });
  it("Should display '1 todo' when there is one todo", () => {
    render(<TodoNumber todos={[{ id: 1, text: "First" }]} />);
    const numOfTodos = screen.getByText(/1 todo/i);
    expect(numOfTodos).toBeInTheDocument();
  });
  it("Should display '4 todos' when there are 4 todos", () => {
    const todos = [
      {
        id: 1,
        text: "first",
      },
      {
        id: 2,
        text: "second",
      },
      {
        id: 3,
        text: "third",
      },
      {
        id: 4,
        text: "fourth",
      },
    ];
    render(<TodoNumber todos={todos} />);
    const numOfTodos = screen.getByText(/4 todos/i);
    expect(numOfTodos).toBeInTheDocument();
  });
});
