import React from 'react';
import { Story, Meta } from '@storybook/react';

import Container from '../container';
import Divider, { DividerProps } from './divider';

export default {
  title: 'Component/Divider',
  component: Divider,
  decorators: [
    (StoryComponent: Function) => (
      <Container p='10px' height='400px'>
        <StoryComponent />
      </Container>
    ),
  ],
} as Meta;

const Template: Story<DividerProps> = (args) => <Divider {...args} />;

const defaultArgs: DividerProps = {
  orientation: 'horizontal',
  variant: 'solid',
};

export const Basic = Template.bind({});
Basic.args = { ...defaultArgs };

export const Vertical = Template.bind({});
Vertical.args = { ...defaultArgs, orientation: 'vertical' };

export const Colored = Template.bind({});
Colored.args = { ...defaultArgs, color: 'red' };

export const Dashed = Template.bind({});
Dashed.args = { ...defaultArgs, variant: 'dashed' };
