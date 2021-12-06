import React from "react";
import { render, screen } from "@testing-library/react";
import Header from "./Header";
import logoImage from "../../shared/images/PokeLogo.png";

it("renders an image", () => {
    const Logo = Header;

    expect(Logo.find("img").prop("src")).toEqual(logoImage);
});