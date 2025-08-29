import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import App from "./App";

jest.mock("./components/CountryList", () => {
  const React = require("react");
  return function CountryList({ countries }) {
    return React.createElement(
      "div",
      { "data-testid": "country-list" },
      countries.map((c) => c.name).join(", ")
    );
  };
});

jest.mock("./components/SearchBar", () => {
  const React = require("react");
  return function SearchBar({ setSearchTerm }) {
    return React.createElement("input", {
      "data-testid": "search",
      onChange: (e) => setSearchTerm(e.target.value),
    });
  };
});

const API_URL = "http://localhost:8080/countries";

describe("App", () => {
  const mockCountries = [
    { name: "Alpha", flag: "a.png" },
    { name: "Beta", flag: "b.png" },
  ];

  beforeEach(() => {
    global.fetch = jest.fn().mockResolvedValue({
      ok: true,
      json: async () => mockCountries,
    });
  });

  afterEach(() => {
    jest.resetAllMocks();
    delete global.fetch;
  });

  test("fetches countries and renders CountryList", async () => {
    render(<App />);

    const list = await screen.findByTestId("country-list");
    expect(list).toBeInTheDocument();
    await screen.findByText("Alpha, Beta");
    expect(list).toHaveTextContent("Alpha, Beta");
  });
});