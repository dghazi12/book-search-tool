import React from "react";
import { render, fireEvent } from "@testing-library/react";
import SearchBook from "../Search";
import "@testing-library/jest-dom/extend-expect";

it("renders correctly", () => {
  const { queryByTestId, queryByPlaceholderText } = render(<SearchBook />);

  expect(queryByTestId("search-button")).toBeTruthy;
  expect(queryByPlaceholderText("Search Title")).toBeTruthy;
});

it("search bar value is blank", () => {
  const { queryByPlaceholderText } = render(<SearchBook />);

  const searchInput = queryByPlaceholderText("Search Title");

  expect(searchInput.value).toBe("");
});

describe("Input value", () => {
  it("updates on change", () => {
    const { queryByPlaceholderText } = render(<SearchBook />);

    const searchInput = queryByPlaceholderText("Search Title");

    fireEvent.change(searchInput, { target: { value: "test" } });

    expect(searchInput.value).toBe("test");
  });
});

it("button renders correctly", () => {
  const { queryByTestId } = render(<SearchBook />);

  const button = queryByTestId("search-button");

  expect(button.textContent).toBe("Search");
});

describe("Search button", () => {
  describe("with empty query", () => {
    it("does not trigger requestSearch function", () => {
      const requestSearch = jest.fn();
      const { queryByTestId } = render(
        <SearchBook requestSearch={requestSearch} />
      );
      fireEvent.click(queryByTestId("search-button"));
      expect(requestSearch).not.toHaveBeenCalled();
    });
  });

  it("search button submits on click", () => {
    const onClick = jest.fn();
    const { getByTestId } = render(<SearchBook onClick={onClick} />);
    fireEvent.click(getByTestId("search-button"));
    expect(onClick).toHaveBeenCalled();
  });
});
