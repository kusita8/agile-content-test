// component.tsx
export const component = (name) => `
import { FC } from 'react';
import './${name}.scss'

interface ${name}Props {}

export const ${name}: FC<${name}Props> = () => {
  return <div className="${name.toLowerCase()}">Hello 👋, I am ${name} component.</div>;
};
`;

// styles.scss
export const styles = (name) => `
  .${name.toLowerCase()} {}
`;

// component.test.tsx
export const test = (name) => `
import { renderWithProviders } from "src/tests/renderWithProviders";
import { ${name} } from '../${name}';

describe('${name}', () => {  
  test('it should match the snapshot', () => {
    const { asFragment } = renderWithProviders(<${name} />);
    expect(asFragment()).toMatchSnapshot();
  });
});
`;
