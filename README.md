# Agile Content Test

Project created with Vite, TypeScript and React

## Available Scripts

In the project directory, you can run:

### `yarn start`

### `yarn test`

### `yarn build`

### `yarn lint`

Runs eslint checks.

### `yarn lint:fix`

Fixes any eslint errors.

### `yarn lint-staged`

Runs eslint checks on staged changes.

### `yarn gc`

Generates a React component from a template.

## Tools & Libraries Used

### `React & Sass`

Chose to do it with React since this is a complex application to do without any frameworks.

Chose Sass for the styles because I didn't require a lot of complex styling. But you could also use
styled-components or emotion.

### `React Query`

Decided to use react-query for handling the get requests.

This tools helps with caching, the different requests cycles (loading, error, etc), plus other
helpfull tools.

### `Husky, Eslint & Prettier`

While working on a project, specially if working with other developers, is important to keep the
code consistent across the board, this tools help you do that.

Husky allows to run commands before commiting anything to git. Eslint checks for the rules that you
set, and prettier formats the code when you save a file.

## Improvements

- Add more tests for each component.
- Handle error states.
- Download the fonts instead of importing them.
- Change css global variables to sass global variables, so you can use them on media queries.
- Create a more reusable component for the modal on mobile.
- Make the hole app responsive.
- Improve HTML semantic elemets usage.
- Improve HTML accessibility.
- Create mocks for the getAnimals endpoint when connecting to the real api to return fake data.
- Add more types.
- Add E2E testing.
