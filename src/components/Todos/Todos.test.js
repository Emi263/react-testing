import { render, screen, fireEvent } from "@testing-library/react";
import Todos from "./Todos";

//create a mock function
describe("Todos component testing", () => {
  test("Shows 'No todos to display' in inital render, where there are no todos ", () => {
    render(<Todos todos={[]} />); //initially render the app we want to test

    //reference to input
    const textShowsNoTodos = screen.getByRole("heading", {
      name: /no todos to display/i,
    });
    expect(textShowsNoTodos).toBeInTheDocument();
  });

  test("Displays todos when the state actually has some todos, gets rid of 'no todos to display' ", () => {
    const todos = [
      {
        id: 5454,
        text: "First todo",
      },
      {
        id: 46544,
        text: "Second Todo",
      },
    ];

    render(<Todos todos={todos} />); //initially render the app we want to test

    //reference to input
    const textShowsNoTodos = screen.queryByRole("heading", {
      name: /no todos to display/i,
    }); //returns null if no match
    expect(textShowsNoTodos).toBeNull();
    const listItems = screen.queryAllByTestId("list"); //returns an array
    expect(listItems.length).toBe(2); //we pass 2 items, so we expect to show 2 items
  });
});
