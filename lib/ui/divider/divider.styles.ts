import styled, { css } from 'styled-components';
import { DividerProps } from './divider';

export const DividerWrapper = styled.hr<DividerProps>`
  color: #cbd5e0;

  ${(props) =>
    props.orientation === 'horizontal' &&
    css`
      width: 100%;
      height: 0;
    `};

  ${(props) =>
    props.orientation === 'vertical' &&
    css`
      width: 0;
      height: 100%;
    `};

  ${(props) =>
    props.variant === 'solid' &&
    css`
      border-style: solid;
    `};

  ${(props) =>
    props.variant === 'dashed' &&
    css`
      border-style: dashed;
    `};

  ${(props) =>
    props.color &&
    css`
      color: ${props.color};
    `}

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
