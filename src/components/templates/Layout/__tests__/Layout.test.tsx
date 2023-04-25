import { Layout } from "src/components/templates/Layout/Layout";
import { renderWithProviders } from "src/tests/renderWithProviders";

describe("Layout", () => {  
  test("it should match the snapshot", () => {
    const { asFragment } = renderWithProviders(<Layout />);
    expect(asFragment()).toMatchSnapshot();
  });
});
