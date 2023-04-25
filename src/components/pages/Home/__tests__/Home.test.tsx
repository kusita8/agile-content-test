import { Home } from "src/components/pages/Home/Home";
import { renderWithProviders } from "src/tests/renderWithProviders";

describe("Home", () => {  
  test("it should match the snapshot", () => {
    const { asFragment } = renderWithProviders(<Home />);
    expect(asFragment()).toMatchSnapshot();
  });
});
