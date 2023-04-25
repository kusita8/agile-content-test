import { SearchHeader } from "src/components/organisms/SearchHeader/SearchHeader";
import { renderWithProviders } from "src/tests/renderWithProviders";

describe("SearchHeader", () => {  
  test("it should match the snapshot", () => {
    const { asFragment } = renderWithProviders(<SearchHeader />);
    expect(asFragment()).toMatchSnapshot();
  });
});
