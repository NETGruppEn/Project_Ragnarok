import React from "react";
import { render, screen } from "@testing-library/react";
import Star from "./Star";

it("renders correctly and is favorite", () => {
    const div = document.createElement("div");
    render(<Star isFavorite={true}/>, div);
    const element = screen.getByTestId("star");
    const styles = getComputedStyle(element);
    expect(styles.color).toBe("orange");
});

it("renders correctly and is not favorite", () => {
    const div = document.createElement("div");
    render(<Star isFavorite={false}/>, div);
    const element = screen.getByTestId("star");
    const styles = getComputedStyle(element);
    expect(styles.color).toBe("lightgray");
});

