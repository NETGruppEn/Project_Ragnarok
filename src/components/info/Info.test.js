import React from "react";
import { cleanup, render, screen } from "@testing-library/react";
import Info from "./Info";

const height = {
  name: "Height",
  values: ["0.7 m"]
}

const weight = {
  name: "Weight",
  values: ["6.9 kg"]
}

const abilities = {
  name: "Abilities",
  values: ["overgrow", "chlorophyll"]
}

afterEach(cleanup);

it("renders correctly with right title, height", () => {
  render(<Info info={height} />);
  expect(screen.getByTestId("title").textContent).toBe("Height");
  expect(screen.getByTestId("value0").textContent).toBe("0.7 m");
});

it("renders correctly with right title, weight", () => {
  render(<Info info={weight} />);
  expect(screen.getByTestId("title").textContent).toBe("Weight");
  expect(screen.getByTestId("value0").textContent).toBe("6.9 kg");
});

it("renders correctly with right title, abilities", () => {
  render(<Info info={abilities} />);
  expect(screen.getByTestId("title").textContent).toBe("Abilities");
  expect(screen.getByTestId("value0").textContent).toBe("Overgrow");
  expect(screen.getByTestId("value1").textContent).toBe("Chlorophyll");
});
