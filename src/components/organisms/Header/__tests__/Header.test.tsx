import { Header } from "src/components/organisms/Header/Header";
import { renderWithProviders } from "src/tests/renderWithProviders";

describe("Header", () => {  
  test("it should match the snapshot", () => {
    const { asFragment } = renderWithProviders(<Header />);
    expect(asFragment()).toMatchSnapshot();
  });
});
