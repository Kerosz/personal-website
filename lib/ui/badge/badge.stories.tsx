import React from 'react';
import { Story, Meta } from '@storybook/react';

import Badge, { BadgeProps } from './badge';

export default {
  title: 'Component/Badge',
  component: Badge,
  argTypes: {},
} as Meta;

export const Default: Story<BadgeProps> = (args) => {
  return <Badge {...args}>Badge</Badge>;
};
