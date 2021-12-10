// import { act } from "react-dom/test-utils";
import React from "react";
import { render, screen } from "@testing-library/react";
import { unmountComponentAtNode } from "react-dom";
import Button from "./Button";
import userEvent from "@testing-library/user-event";
import { toHaveStyle } from "@testing-library/jest-dom";

let container = null;

// setup a DOM element as a render target
beforeEach(() => {
  container = document.createElement("div");
  document.body.appendChild(container);
});

// cleanup on exiting
afterEach(() => {
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

it("button renders with right title", () => {
  render(
    <Button
      children="Click me!"
      onClick={() => console.log("clicked")}
      color="red"
      data-testid="test-btn"
    />
  );
  expect(screen.getByTestId("test-btn").textContent).toBe("Click me!");

  render(
    <Button
      children="Home"
      onClick={() => console.log("clicked")}
      color="red"
      data-testid="test-btn2"
    />
  );
  expect(screen.getByTestId("test-btn2").textContent).toBe("Home");
});

it("button renders with right color", async () => {
  render(
    <Button
      children="Click me!"
      onClick={() => console.log("clicked")}
      styles={{backgroundColor: "red"}}
      data-testid="test-btn"
    />
  );

  userEvent.hover(screen.getByTestId("test-btn"));
  expect(screen.getByTestId("test-btn")).toHaveStyle("background-color: red;");

  render(
    <Button
      children="Click me!"
      onClick={() => console.log("clicked")}
      styles={{backgroundColor: "green"}}
      data-testid="test-btn2"
    />
  );

  userEvent.hover(screen.getByTestId("test-btn"));
  expect(screen.getByTestId("test-btn2")).toHaveStyle(
    "background-color: green;"
  );
});
