import { forwardRef } from 'react';
import { HTMLUiProps, SpaceTypes } from '../ui.types';
import {
  AccordionWrapper,
  AccordionHeaderWrapper,
  AccordionBodyWrapper,
  OpenIcon,
  CloseIcon,
} from './accordion.styles';
import AccordionContextProvider, { useAccordion } from './use-accordion';

export interface AccordionProps extends HTMLUiProps<'div'>, SpaceTypes {}

export const Accordion = forwardRef<HTMLElement, AccordionProps>(
  (props, ref) => {
    return (
      <AccordionContextProvider>
        <AccordionWrapper ref={ref} {...props} />
      </AccordionContextProvider>
    );
  }
);

export const AccordionHeader = forwardRef<HTMLElement, AccordionProps>(
  (props, ref) => {
    const { children, ...restProps } = props;
    const { currentAccordionState, setCurrentAccordionState } = useAccordion();

    return (
      <AccordionHeaderWrapper
        as='header'
        onClick={() => setCurrentAccordionState((prevState) => !prevState)}
        ref={ref}
        {...restProps}>
        {children}
        {!currentAccordionState ? <OpenIcon /> : <CloseIcon />}
      </AccordionHeaderWrapper>
    );
  }
);

export const AccordionBody = forwardRef<HTMLElement, AccordionProps>(
  (props, ref) => {
    const { currentAccordionState } = useAccordion();

    return currentAccordionState ? (
      <AccordionBodyWrapper ref={ref} {...props} />
    ) : null;
  }
);
