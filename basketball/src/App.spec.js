import React from "react";
import {
  render,
  fireEvent,
  getAllByDisplayValue,
  getAllByTestId,
  cleanup
} from "react-testing-library";
import "jest-dom/extend-expect";

import App from "./App";

describe("<App />", () => {
  afterEach(cleanup);
  it("renders without crashing", () => {
    render(<App />);
  });

  it("button hit resets", () => {
    const { getByText, getAllByTestId } = render(<App />);

    const hitButton = getByText(/strike/i);

    fireEvent.click(hitButton);
    const text = getAllByTestId("number").map(n => n.textContent);
    expect(text).toHaveLength(2);
  });

  it("add an number and go to zero", () => {
    const {} = render(<App />);
  });
});
