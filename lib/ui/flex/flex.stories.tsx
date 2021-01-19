import React from 'react';
import { Story, Meta } from '@storybook/react';

import Flex, { FlexProps } from './flex';

export default {
  title: 'Component/Flex',
  component: Flex,
  argTypes: {},
} as Meta;

const Template: Story<FlexProps> = (args) => {
  return (
    <Flex {...args}>
      <h1>Lorem Ipsum has been the industry's</h1>
      <p>
        It was popularised in the 1960s with the release of Letraset sheets
        containing Lorem Ipsum passages, and more recently with desktop
        publishing software like Aldus PageMaker including versions of Lorem
        Ipsum.
      </p>
    </Flex>
  );
};

export const Basic = Template.bind({});
Basic.args = {
  noHeight: false,
  align: 'flex-start',
  justify: 'flex-start',
  wrap: 'nowrap',
  direction: 'row',
  basis: 'auto',
  grow: 0,
  shrink: 1,
};
