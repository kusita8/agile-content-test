// component.tsx
exports.component = (name) => `
import { FC } from 'react';
import './${name}.scss'

interface ${name}Props {}

export const ${name}: FC<${name}Props> = () => {
  return <div className="${name.toLowerCase()}">Hello 👋, I am ${name} component.</div>;
};
`;

// styles.scss
exports.styles = (name) => `
  .${name.toLowerCase()} {}
`;

// component.test.tsx
exports.test = (name) => `
import { renderWithProviders } from "src/tests/renderWithProviders";
import { ${name} } from '../${name}';

describe('${name}', () => {  
  test('it should match the snapshot', () => {
    const { asFragment } = renderWithProviders(<${name} />);
    expect(asFragment()).toMatchSnapshot();
  });
});
`;
