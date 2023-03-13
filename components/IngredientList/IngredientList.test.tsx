import { render, screen } from "@testing-library/react";
import IngredientList from "./IngredientList";
import "@testing-library/jest-dom";

describe("IngredientList.tsx", () => {
  it("Renders correctly", async () => {
    render(<IngredientList />);
  });
});
