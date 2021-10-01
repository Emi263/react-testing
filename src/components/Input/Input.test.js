import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Input from "./Input";

//create a mock function
const mockedSetTodos = jest.fn();
describe("Input component testing", () => {
  test("renders  the input properly", () => {
    render(
      <Input
        todos={[
          {
            id: 1,
            text: "First todo",
          },
        ]}
        setTodos={mockedSetTodos}
      />
    ); //initially render the app we want to test

    //reference to input
    const input = screen.getByPlaceholderText(/insert todo here/i);
    expect(input).toBeInTheDocument();
    fireEvent.change(input, { target: { value: "Hello" } });
    expect(input.value).toBe("Hello");
  });
  test("Clears the input after pressing submit", () => {
    render(
      <Input
        todos={[
          {
            id: 1,
            text: "First todo",
          },
        ]}
        setTodos={mockedSetTodos}
      />
    ); //initially render the app we want to test

    //reference to input
    const button = screen.getByRole("button", {
      name: /submit/i,
    });
    expect(button).toBeInTheDocument();
    fireEvent.click(button);
    const input = screen.getByPlaceholderText(/insert todo here/i);
    expect(input.value).toBe("");
  });
});
