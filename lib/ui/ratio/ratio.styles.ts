import styled from 'styled-components';
import { RatioProps } from './ratio';

export const RatioWrapper = styled.div<RatioProps>`
  position: relative;

  ::before {
    content: '';
    display: block;
    height: 0;
    padding-bottom: ${(props) => props.responsiveRatio}%;
  }

  > * {
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
  }

  > img,
  > video {
    object-fit: cover;
  }
`;
