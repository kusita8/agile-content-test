import { Search } from "src/components/pages/Search/Search";
import { renderWithProviders } from "src/tests/renderWithProviders";

describe("Search", () => {  
  test("it should match the snapshot", () => {
    const { asFragment } = renderWithProviders(<Search />);
    expect(asFragment()).toMatchSnapshot();
  });
});
