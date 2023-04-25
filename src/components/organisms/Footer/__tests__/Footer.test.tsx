import { Footer } from "src/components/organisms/Footer/Footer";
import { renderWithProviders } from "src/tests/renderWithProviders";

describe("Footer", () => {  
  test("it should match the snapshot", () => {
    const { asFragment } = renderWithProviders(<Footer />);
    expect(asFragment()).toMatchSnapshot();
  });
});
