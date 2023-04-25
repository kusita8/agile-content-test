/* eslint-disable no-restricted-imports */
import { ActiveResult } from "src/components/pages/Search/components/ActiveResult/ActiveResult";
import { getAnimal } from "src/service/__mocks__/Animals";
import { renderWithProviders } from "src/tests/renderWithProviders";

describe("ActiveResult", () => {
  test("it should match the snapshot", () => {
    const { asFragment } = renderWithProviders(
      <ActiveResult {...getAnimal()} />
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
