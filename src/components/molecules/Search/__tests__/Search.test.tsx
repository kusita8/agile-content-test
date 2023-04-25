import { Search } from "src/components/molecules/Search/Search";
import { renderWithProviders } from "src/tests/renderWithProviders";

describe("Search", () => {  
  test("it should match the snapshot", () => {
    const { asFragment } = renderWithProviders(<Search />);
    expect(asFragment()).toMatchSnapshot();
  });
});
