import React from 'react';
import { Story, Meta } from '@storybook/react';
import Button, { ButtonProps } from './button';

export default {
  title: 'Component/Button',
  component: Button,
  argTypes: {
    bgColor: { control: 'color' },
    onClick: {
      table: {
        category: 'Events',
      },
    },
    size: {
      table: {
        category: 'Sizes',
      },
    },
  },
} as Meta;

const Template: Story<ButtonProps> = (args) => <Button {...args} />;

const defaultArgs: ButtonProps = {
  variant: 'default',
  size: 'medium',
  label: 'Button',
};

export const Default = Template.bind({});
Default.args = {
  ...defaultArgs,
};

export const Primary = Template.bind({});
Primary.args = {
  ...defaultArgs,
  variant: 'filled',
};

export const Secondary = Template.bind({});
Secondary.args = {
  ...defaultArgs,
  variant: 'outlined',
};

export const Large = Template.bind({});
Large.args = {
  ...defaultArgs,
  size: 'large',
};

export const Medium = Template.bind({});
Medium.args = {
  ...defaultArgs,
  size: 'medium',
};

export const Small = Template.bind({});
Small.args = {
  ...defaultArgs,
  size: 'small',
};
