import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Dropdown from "../Dropdown";
import "@testing-library/jest-dom/extend-expect";

it("renders correctly", () => {
  render(<Dropdown />);
});

it("can change the value of the dropdown", () => {
  const { getByTestId } = render(<Dropdown />);

  const dropdown = getByTestId("dropdown");

  const display = dropdown.children[0];
  expect(display.textContent).toBe("Sort by:");

  fireEvent.mouseDown(dropdown);
  const dropdownOption1 = getByTestId("option1");
  expect(dropdownOption1.textContent).toBe("Title");

  fireEvent.mouseDown(dropdown);
  const dropdownOption2 = getByTestId("option2");
  expect(dropdownOption2.textContent).toBe("Publication");
});
