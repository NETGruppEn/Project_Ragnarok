import React from "react";
import { render, cleanup } from "@testing-library/react";
import StatisticContainer from "./StatisticContainer";

afterEach(cleanup);

const stats = [
  { base_stat: 45, stat: { name: "HP" } },
  { base_stat: 49, stat: { name: "Attack" } },
  { base_stat: 49, stat: { name: "Defense" } },
  { base_stat: 65, stat: { name: "Special Attack" } },
  { base_stat: 65, stat: { name: "Special Defense" } },
  { base_stat: 45, stat: { name: "Speed" } },
];

it("should render stats container title", () => {
  render(<StatisticContainer stats={stats} />);

  let title = document.querySelector(".stats-container--title").textContent;
  expect(title).toBe("Stats");
});

it("should render HP gauge", () => {
  render(<StatisticContainer stats={stats} />);

  let title = document.querySelector(".gauge-title").textContent;
  expect(title).toBe("HP");
});

it("should render 6 gauges", () => {
  render(<StatisticContainer stats={stats} />);

  let result = document.querySelectorAll(".gauge-title");
  expect(result.length).toBe(6);
});
