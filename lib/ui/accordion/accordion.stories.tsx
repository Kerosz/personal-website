import React from 'react';
import { Story, Meta } from '@storybook/react';
import { Container } from '@lib/ui';
import {
  Accordion,
  AccordionBody,
  AccordionHeader,
  AccordionProps,
} from './accordion';

export default {
  title: 'Component/Accordion',
  component: Accordion,
  argTypes: {},
} as Meta;

const mockData = [
  { heading: 'Heading 1 title', body: 'Body 1 content' },
  { heading: 'Heading 2 title', body: 'Body 2 content' },
  { heading: 'Heading 3 title', body: 'Body 3 content' },
  { heading: 'Heading 4 title', body: 'Body 4 content' },
];

export const Default: Story<AccordionProps> = (args) => {
  return (
    <Container maxW='768px'>
      {mockData.map((data, index) => (
        <Accordion {...args} key={index}>
          <AccordionHeader>{data.heading}</AccordionHeader>
          <AccordionBody>{data.body}</AccordionBody>
        </Accordion>
      ))}
    </Container>
  );
};
