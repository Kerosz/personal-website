import styled, { css } from 'styled-components';
import { FlexProps } from './flex';

export const FlexWrapper = styled.div<FlexProps>`
  position: relative;
  display: flex;
  height: inherit;
  max-width: 100%;

  ${(props) =>
    props.width &&
    css`
      width: ${props.width};
    `};

  ${(props) =>
    props.p &&
    css`
      padding: ${props.p};
    `};

  ${(props) =>
    props.m &&
    css`
      margin: ${props.m};
    `};

  ${(props) =>
    props.align &&
    css`
      align-items: ${props.align};
    `};

  ${(props) =>
    props.justify &&
    css`
      justify-content: ${props.justify};
    `};

  ${(props) =>
    props.wrap &&
    css`
      flex-wrap: ${props.wrap};
    `};

  ${(props) =>
    props.direction &&
    css`
      flex-direction: ${props.direction};
    `};

  ${(props) =>
    props.basis &&
    css`
      flex-basis: ${props.basis};
    `};

  ${(props) =>
    props.grow &&
    css`
      flex-grow: ${props.grow};
    `};

  ${(props) =>
    props.shrink &&
    css`
      flex-shrink: ${props.shrink};
    `};

  ${(props) =>
    props.noHeight &&
    css`
      height: 0;
    `};
`;
