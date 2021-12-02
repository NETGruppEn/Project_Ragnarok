import React from "react";
import { render, screen } from "@testing-library/react";
import { TYPE_COLORS, COLORS } from './../../shared/global/Colors';
import Type from './Type';

it("renders grass correctly", () => {
    const div = document.createElement("div");
    render(<Type name="grass" />, div);
    const element = screen.getByTestId("type");
    const style = getComputedStyle(element);
    expect(element.textContent).toBe("Grass");
    expect(style.color).toBe(COLORS.black);
    expect(style.background).toBe(TYPE_COLORS.grass);
});

it("renders poison correctly", () => {
    const div = document.createElement("div");
    render(<Type name="poison" />, div);
    const element = screen.getByTestId("type");
    const style = getComputedStyle(element);
    expect(element.textContent).toBe("Poison");
    expect(style.color).toBe("white");
    expect(style.background).toBe(TYPE_COLORS.poison);
});