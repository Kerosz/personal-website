import styled, { css } from 'styled-components';
import { TextProps } from './text';

export const TextWrapper = styled.p<TextProps>`
  ${(props) =>
    props.size &&
    css`
      font-size: ${props.size};
    `}

  ${(props) =>
    props.line &&
    css`
      line-height: ${props.line};
    `}

  ${(props) =>
    props.mb &&
    css`
      margin-bottom: ${props.mb};
    `}

  ${(props) =>
    props.color &&
    css`
      color: ${props.color};
    `}

  ${(props) =>
    props.casing &&
    css`
      text-transform: ${props.casing};
    `}

  ${(props) =>
    props.weight &&
    css`
      font-weight: ${props.weight};
    `}

  ${(props) =>
    props.decoration &&
    css`
      text-decoration: ${props.decoration};
    `}

  ${(props) =>
    props.align &&
    css`
      text-align: ${props.align};
    `}
`;
