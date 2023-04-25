import { describe, expect, it, vi } from "vitest";
import { fireEvent, render, screen, waitFor } from "@testing-library/react";

import { App } from "src/App";
import * as service from "src/service/Animals";

describe("App", () => {
  it("true to be true", () => {
    render(<App />);
    expect(true).toBe(true);
  });

  it("Searches for query", async () => {
    const mockService = vi.fn();

    vi.spyOn(service, "getAnimals").mockImplementation(mockService);

    render(<App />);

    fireEvent.change(screen.getByTestId("search-input"), {
      target: {
        value: "fish",
      },
    });

    await waitFor(() => {
      expect(screen.getByTestId("button")).not.toHaveAttribute("disabled");
    });

    fireEvent.click(screen.getByTestId("button"));

    await waitFor(() => {
      expect(mockService).toHaveBeenCalledWith({ query: "fish" });
    });
  });
});
