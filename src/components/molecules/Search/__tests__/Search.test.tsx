import { Search } from "src/components/molecules/Search/Search";
import { renderWithProviders } from "src/tests/renderWithProviders";

describe("Search", () => {
  test("it should match the snapshot", () => {
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    const { asFragment } = renderWithProviders(<Search onSubmit={() => {}} />);
    expect(asFragment()).toMatchSnapshot();
  });
});
