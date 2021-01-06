import { withThemesProvider } from 'themeprovider-storybook';

const themeOptions = [
  {
    name: 'Light Theme',
    mode: 'light',
  },
  {
    name: 'Dark Theme',
    mode: 'dark',
  },
];

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
};

export const decorators = [withThemesProvider(themeOptions)];
