import React from 'react';
import { Story, Meta } from '@storybook/react';

import { List, UnorderedList, OrderedList, ListItem, ListProps } from './list';

export default {
  title: 'Component/List',
  component: List,
  argTypes: {},
} as Meta;

export const Default: Story<ListProps> = (args) => {
  return (
    <List {...args}>
      <ListItem>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit
      </ListItem>
      <ListItem>
        Assumenda, quia temporibus eveniet a libero incidunt suscipit
      </ListItem>
      <ListItem>
        Quidem, ipsam illum quis sed voluptatum quae eum fugit earum
      </ListItem>
    </List>
  );
};

export const Unordered: Story<ListProps> = (args) => {
  return (
    <UnorderedList {...args}>
      <ListItem>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit
      </ListItem>
      <ListItem>
        Assumenda, quia temporibus eveniet a libero incidunt suscipit
      </ListItem>
      <ListItem>
        Quidem, ipsam illum quis sed voluptatum quae eum fugit earum
      </ListItem>
    </UnorderedList>
  );
};

export const Ordered: Story<ListProps> = (args) => {
  return (
    <OrderedList {...args}>
      <ListItem>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit
      </ListItem>
      <ListItem>
        Assumenda, quia temporibus eveniet a libero incidunt suscipit
      </ListItem>
      <ListItem>
        Quidem, ipsam illum quis sed voluptatum quae eum fugit earum
      </ListItem>
    </OrderedList>
  );
};
