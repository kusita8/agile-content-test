/* eslint-disable no-restricted-imports */
import { Result } from "src/components/pages/Search/components/Result/Result";
import { getAnimal } from "src/service/__mocks__/Animals";
import { renderWithProviders } from "src/tests/renderWithProviders";

describe("Result", () => {
  test("it should match the snapshot", () => {
    const { asFragment } = renderWithProviders(<Result {...getAnimal()} />);
    expect(asFragment()).toMatchSnapshot();
  });
});
