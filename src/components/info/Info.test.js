import React from "react";
import { cleanup, render, screen } from "@testing-library/react";
import { MonoInfo, PolyInfo } from "./Info";

const abilities = [
  {
    ability: {
      name: "overgrow",
    },
  },
  {
    ability: {
      name: "chlorophyll",
    },
  },
];

afterEach(cleanup);

it("renders correctly with right title, height", () => {
  render(<MonoInfo title="Height" value="7" unit="m" />);
  expect(screen.getByTestId("title").textContent).toBe("Height");
  expect(screen.getByTestId("value").textContent).toBe("0.7 m");
});

it("renders correctly with right title, weight", () => {
  render(<MonoInfo title="Weight" value="69" unit="kg" />);
  expect(screen.getByTestId("title").textContent).toBe("Weight");
  expect(screen.getByTestId("value").textContent).toBe("6.9 kg");
});

it("renders correctly with right title, abilities", () => {
  render(<PolyInfo title="Abilities" values={abilities} />);
  expect(screen.getByTestId("title").textContent).toBe("Abilities");
  expect(screen.getByTestId("value0").textContent).toBe("Overgrow");
  expect(screen.getByTestId("value1").textContent).toBe("Chlorophyll");
});
