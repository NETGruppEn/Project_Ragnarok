import React from "react";
import { render, cleanup } from "@testing-library/react";
import Gauge from "./Gauge";

afterEach(cleanup);

it("should render 3 blue bars", () => {
  render(<Gauge title="HP" value="45" />);

  let gaugeStyles = window.getComputedStyle(document.getElementById("1-bar"));
  expect(gaugeStyles.getPropertyValue("background-color")).toBe(
    "rgb(48, 167, 215)"
  );

  gaugeStyles = window.getComputedStyle(document.getElementById("4-bar"));
  expect(gaugeStyles.getPropertyValue("background-color")).toBe("");
});

it("should render 6 blue bars", () => {
  render(<Gauge title="HP" value="100" />);

  let gaugeStyles = window.getComputedStyle(document.getElementById("6-bar"));
  expect(gaugeStyles.getPropertyValue("background-color")).toBe(
    "rgb(48, 167, 215)"
  );

  gaugeStyles = window.getComputedStyle(document.getElementById("7-bar"));
  expect(gaugeStyles.getPropertyValue("background-color")).toBe("");
});

it("should render 15 blue bars", () => {
  render(<Gauge title="HP" value="250" />);

  let gaugeStyles = window.getComputedStyle(document.getElementById("15-bar"));
  expect(gaugeStyles.getPropertyValue("background-color")).toBe(
    "rgb(48, 167, 215)"
  );

  gaugeStyles = window.getComputedStyle(document.getElementById("1-bar"));
  expect(gaugeStyles.getPropertyValue("background-color")).toBe(
    "rgb(48, 167, 215)"
  );
});
