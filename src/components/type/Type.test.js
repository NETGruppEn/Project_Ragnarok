import React from "react";
import { render, screen } from "@testing-library/react";
import Type from './Type';

it("renders correctly", () => {
    const div = document.createElement("div");
    render(<Type name="grass" />, div);
    expect(screen.getByTestId("type").textContent).toBe("Grass");
});