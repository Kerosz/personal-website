import styled, { css } from 'styled-components';
import theme from 'styled-theming';
import { BadgeProps } from './badge';

const modeStyle = theme('mode', {
  light: css`
    color: #4a5568;
    background: #f7fafc;
    border-color: #171923;
  `,
  dark: css`
    color: #f7fafc;
    background: #171923;
    border-color: #f7fafc;
  `,
});

export const BadgeWrapper = styled.div<BadgeProps>`
  width: fit-content;
  height: fit-content;
  border: 1px solid transparent;
  padding: 0.6rem 1.2rem;
  text-transform: uppercase;
  font-weight: 600;
  margin-right: 1.2rem;
  white-space: nowrap;

  ${modeStyle}

  ${(props) =>
    props.mainColor &&
    css`
      color: ${props.mainColor};
      border-color: ${props.mainColor};
    `};

  ${(props) =>
    props.bgColor &&
    css`
      background: ${props.bgColor};
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
