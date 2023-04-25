import { Button } from "src/components/atoms/Button/Button";
import { renderWithProviders } from "src/tests/renderWithProviders";

describe("Button", () => {  
  test("it should match the snapshot", () => {
    const { asFragment } = renderWithProviders(<Button />);
    expect(asFragment()).toMatchSnapshot();
  });
});
