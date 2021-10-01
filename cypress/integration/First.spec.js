describe("First test", () => {
  const todoArray = [
    {
      id: 1,
      text: "First todo",
      completed: "false",
    },
    { id: 2, text: "Second todo", completed: "false" },
    { id: 3, text: "Third todo", completed: "false" },
    { id: 4, text: "Fourth todo", completed: "false" },
  ];

  const addTodo = (todos) => {
    todos.forEach((todo) => {
      cy.findByRole("textbox") //create a reference to textbox
        .type(todo.text); //type smth
      cy.findByRole("button", { name: /submit/i }).click(); //reference to submit button
    });
  };

  it("Should load", () => {
    cy.visit("/"); //visit localhost:3000, cypress.json-configured
    addTodo(todoArray);
    const numOfTodos = cy.findByTestId("todonum");
    numOfTodos.contains("4 todos"); //at the end it should contain this text
    cy.findAllByTestId("list").should("have.class", "not-completed");

    cy.get(".todoList > :nth-child(1)")
      .click() //clicking in the first element
      .should("have.class", "completed"); //it should be completed
    cy.findByTestId("todonum").contains("3 todos"); //at the end it should contain this tex
  });
});
