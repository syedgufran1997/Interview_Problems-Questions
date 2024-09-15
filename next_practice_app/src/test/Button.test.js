"use client";
import React from "react";
import ButtonComponent from "@/components/todoPractice/Button";
import { fireEvent, render, screen } from "@testing-library/react";

// Test case 1: Rendering the Button component
test("Render the button with Label", () => {
  render(<ButtonComponent label="Add Todo" />); // Render Button component
  const buttonElement = screen.getByText(/Add Todo/i); // Find the element with label 'Add Todo'
  expect(buttonElement).toBeInTheDocument(); // Assert that it is present in the DOM
});

// Test case 2: Button click event
test("triggers onClick when the button is on clicked", () => {
  const handleClick = jest.fn(); // Mock function
  render(<ButtonComponent label="Add Todo" onClick={handleClick} />);

  const buttonElement = screen.getByText(/Add todo/i);
  fireEvent.click(buttonElement); // Simulate a click event

  expect(handleClick).toHaveBeenCalledTimes(1); // Assert that the function was called once
});
