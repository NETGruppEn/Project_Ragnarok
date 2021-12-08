import React from "react";
import { cleanup, render, screen } from "@testing-library/react";
import CardTitle from "./CardTitle";

afterEach(cleanup);
it("renders correctly with right title", () => {
  render(<CardTitle id="1" name="bulbasaur" isFavorite="true" />);
  expect(screen.getByTestId("id").textContent).toBe("#001");
  expect(screen.getByTestId("name").textContent).toBe("Bulbasaur");
});

it("renders correctly with right title", () => {
  const div = document.createElement("div");
  render(<CardTitle id="4" name="charmander" isFavorite="true" />, div);
  expect(screen.getByTestId("id").textContent).toBe("#004");
  expect(screen.getByTestId("name").textContent).toBe("Charmander");
});
