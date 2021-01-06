module.exports = {
  stories: [
    '../lib/ui/**/*.stories.@(js|jsx|ts|tsx)',
    '../lib/ui/**/*.stories.mdx',
  ],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    'themeprovider-storybook/register',
  ],
};
