import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import CountryCard from "./CountryCard";

const mockCountry = {
  name: "Testland",
  flag: "test-flag.png",
};

test("renders CountryCard with flag image, alt text and name", () => {
  render(<CountryCard country={mockCountry} />);

  const container = screen.getByRole("img").closest(".country-card");
  expect(container).toBeInTheDocument();
  expect(container).toHaveClass("country-card");

  const img = screen.getByRole("img");
  expect(img).toHaveAttribute("src", mockCountry.flag);
  expect(img).toHaveAttribute("alt", mockCountry.name);
  expect(img).toHaveClass("falg"); 
  expect(screen.getByText(/testland/i)).toBeInTheDocument();
});

test("applies inline style prop to the root element", () => {
  const style = { backgroundColor: "rgb(255, 0, 0)" };
  render(<CountryCard country={mockCountry} style={style} />);

  const container = screen.getByRole("img").closest(".country-card");
  expect(container).toHaveStyle({ backgroundColor: "rgb(255, 0, 0)" });
});