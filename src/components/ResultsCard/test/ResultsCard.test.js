import React from "react";
import ResultsCard from "../Results";
import { render } from "@testing-library/react";

it("renders correctly", () => {
  render(<ResultsCard />);
});

const dataExample = {
  image: 9269962,
  title: "A Game of Thrones",
  author: "George R. R. Martin",
  PubDate: 1996,
};

it("matches snapshot", () => {
  const { asFragment } = render(
    <ResultsCard
      image={dataExample.image}
      title={dataExample.title}
      author={dataExample.author}
      PubDate={dataExample.PubDate}
    />
  );

  expect(asFragment()).toMatchSnapshot();
});
