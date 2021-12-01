import React from "react";
import { cleanup, render, screen } from "@testing-library/react";
import Info from "./Info";

afterEach(cleanup);

it("renders correctly with right title", () => {
  render(<Info title="Height" value="7" />);
  expect(screen.getByTestId("title").textContent).toBe("Height");
  expect(screen.getByTestId("value").textContent).toBe("0.7 m");
});

it("renders correctly with right title", () => {
    render(<Info title="Weight" value="69" />);
    expect(screen.getByTestId("title").textContent).toBe("Weight");
    expect(screen.getByTestId("value").textContent).toBe("6.9 kg");
});