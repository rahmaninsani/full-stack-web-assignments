import { AddTodo } from "../components/helper";

test("Should add todo to the list", () => {
  // Arrange
  const defaultTodo = [
    {
      id: 1,
      name: "Learn JSX",
      isComplete: false,
    },
    {
      id: 2,
      name: "Build awasome react app",
      isComplete: false,
    },
    {
      id: 3,
      name: "Ship it",
      isComplete: false,
    },
  ];

  const newTodo = {
    id: 4,
    name: "Learn React Testing",
    isComplete: false,
  };

  const expectedTodo = [
    newTodo,
    {
      id: 1,
      name: "Learn JSX",
      isComplete: false,
    },
    {
      id: 2,
      name: "Build awasome react app",
      isComplete: false,
    },
    {
      id: 3,
      name: "Ship it",
      isComplete: false,
    },
  ];

  // Act
  const actualTodo = AddTodo(defaultTodo, newTodo);

  // Assert
  expect(actualTodo).toEqual(expectedTodo);
});

test("should not mutate the existing todo array", () => {
  // Arrange
  // Act
  // Assert
});
