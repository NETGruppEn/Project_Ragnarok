import React from "react";
import { render, screen } from "@testing-library/react";
import Footer from "./Footer";

const date = new Date();

it("renders correctly with right title", () => {
    const div = document.createElement("div");
    render(<Footer />, div);
    expect(screen.getByTestId("footer").textContent).toBe(`© ${date.getFullYear()} Ragnarök inc.`);
});