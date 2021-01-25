import styled, { css } from 'styled-components';
import theme from 'styled-theming';
import { AccordionProps } from './accordion';

const textColor = theme('mode', {
  light: '#171923',
  dark: '#F7FAFC',
});

export const AccordionWrapper = styled.div<AccordionProps>`
  ${(props) =>
    props.margin &&
    css`
      margin: ${props.margin};
    `};

  ${(props) =>
    props.m &&
    css`
      margin: ${props.m};
    `};

  ${(props) =>
    props.mt &&
    css`
      margin-top: ${props.mt};
    `};

  ${(props) =>
    props.mb &&
    css`
      margin-bottom: ${props.mb};
    `};

  ${(props) =>
    props.ml &&
    css`
      margin-left: ${props.ml};
    `};

  ${(props) =>
    props.mr &&
    css`
      margin-right: ${props.mr};
    `};

  ${(props) =>
    props.padding &&
    css`
      padding: ${props.padding};
    `};

  ${(props) =>
    props.p &&
    css`
      padding: ${props.p};
    `};

  ${(props) =>
    props.pt &&
    css`
      margin-top: ${props.pt};
    `};

  ${(props) =>
    props.pb &&
    css`
      margin-bottom: ${props.pb};
    `};

  ${(props) =>
    props.pl &&
    css`
      margin-left: ${props.pl};
    `};

  ${(props) =>
    props.pr &&
    css`
      margin-right: ${props.pr};
    `};
`;

export const AccordionHeaderWrapper = styled(AccordionWrapper)`
  display: flex;
  flex-flow: row;
  align-items: center;
  justify-content: space-between;
  color: ${textColor};
  width: 100%;
  padding: 2.25rem 0;
  border-top: 2px solid ${textColor};
  font-size: 2.5rem;
  user-select: none;
`;

export const AccordionBodyWrapper = styled(AccordionWrapper)`
  color: ${textColor};
  width: 100%;
  padding-bottom: 2rem;
`;

export const OpenIcon = styled.span`
  position: relative;
  width: 2.25rem;
  height: 0.2rem;
  background: ${textColor};

  ::after {
    position: absolute;
    content: '';
    width: 2.25rem;
    height: 0.2rem;
    background: ${textColor};
    transform: rotate(90deg);
  }
`;

export const CloseIcon = styled.span`
  width: 2.25rem;
  height: 0.2rem;
  background: ${textColor};
`;
