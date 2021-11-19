import { Add, Substract, Multiplication } from "../Math";

test("Return sum of two arguments", () => {
  // Arrange
  const firstNumber = 1;
  const secondNumber = 10;
  const expectedOutput = 11;

  // Act
  const actualOutput = Add(firstNumber, secondNumber);

  // Assert
  expect(actualOutput).toBe(expectedOutput);
});

test("Return substraction of a - b", () => {
  // Arrange
  const firstNumber = 10;
  const secondNumber = 1;
  const expectedOutput = 9;

  // Act
  const actualOutput = Substract(firstNumber, secondNumber);

  // Assert
  expect(actualOutput).toBe(expectedOutput);
});

test("Return multiplication of two arguments", () => {
  // Arrange
  const firstNumber = 5;
  const secondNumber = 2;
  const expectedOutput = 10;

  // Act
  const actualOutput = Multiplication(firstNumber, secondNumber);

  // Assert
  expect(actualOutput).toBe(expectedOutput);
});
