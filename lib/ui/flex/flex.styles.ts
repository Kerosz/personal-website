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
    props.flow &&
    css`
      flex-flow: ${props.flow};
    `};

  ${(props) =>
    props.noHeight &&
    css`
      height: 0;
    `};

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
