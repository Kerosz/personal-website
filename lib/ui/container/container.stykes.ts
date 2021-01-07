import styled, { css } from 'styled-components';
import { ContainerProps } from './container';

export const ContainerWrapper = styled.div<ContainerProps>`
  position: relative;
  padding: 0 12px;
  flex-grow: 1;
  margin: 0 auto;
  max-width: ${(props) => props.maxW && props.maxW};
  width: auto;
  height: 100%;

  ${(props) =>
    props.fluid &&
    css`
      margin: 0;
      max-width: 100%;
    `}
`;
