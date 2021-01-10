import styled, { css } from 'styled-components';
import theme from 'styled-theming';
import { TextProps } from './text.types';

const textColor = theme('mode', {
  light: '#171923',
  dark: '#F7FAFC',
});

export const TextWrapper = styled.p<TextProps>`
  color: ${textColor};

  ${(props) =>
    props.fit &&
    css`
      width: fit-content;
    `};

  ${(props) =>
    props.size &&
    css`
      font-size: ${props.size};
    `};

  ${(props) =>
    props.line &&
    css`
      line-height: ${props.line};
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
    props.color &&
    css`
      color: ${props.color};
    `};

  ${(props) =>
    props.casing &&
    css`
      text-transform: ${props.casing};
    `};

  ${(props) =>
    props.weight &&
    css`
      font-weight: ${props.weight};
    `};

  ${(props) =>
    props.decoration &&
    css`
      text-decoration: ${props.decoration};
    `};

  ${(props) =>
    props.align &&
    css`
      text-align: ${props.align};
    `};
`;
