import React from 'react';
import { Story, Meta } from '@storybook/react';
import { TextProps } from './text.types';
import Text from './text';

export default {
  title: 'Component/Text',
  component: Text,
  argTypes: {},
} as Meta;

const Template: Story<TextProps> = (args) => {
  return (
    <Text {...args}>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet, sapiente.
    </Text>
  );
};

export const Basic = Template.bind({});
Basic.args = {
  color: 'black',
  size: '16px',
  line: '22px',
  weight: 'normal',
  mb: '5px',
  casing: 'uppercase',
  decoration: 'underline',
  align: 'center',
};
