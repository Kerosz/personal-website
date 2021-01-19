import styled, { css } from 'styled-components';
import theme from 'styled-theming';
import { TextProps } from './text';

const textColor = theme('mode', {
  light: '#171923',
  dark: '#F7FAFC',
});

export const TextWrapper = styled.p<TextProps>`
  color: ${textColor};

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
    props.spacing &&
    css`
      letter-spacing: ${props.spacing};
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

  ${(props) =>
    props.whiteSpace &&
    css`
      white-space: ${props.whiteSpace};
    `};

  ${(props) =>
    props.wordBreak &&
    css`
      word-break: ${props.wordBreak};
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

  ${(props) =>
    props.color &&
    css`
      color: ${props.color};
    `};

  ${(props) =>
    props.fit &&
    css`
      width: fit-content;
    `};
`;
