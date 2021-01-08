import styled from 'styled-components';
import { Flex, Text as UiText } from '@lib/ui';

export const AppBar = styled(Flex)`
  height: 12rem;
  align-items: center;

  & svg {
    margin-right: 1.8rem;
    max-height: 6.7rem;
  }
`;

export const Text = styled(UiText)`
  font-size: 3.8rem;
  font-weight: 500;
  text-transform: uppercase;

  @media screen and (max-width: 40em) {
    font-size: 3.2rem;
  }

  @media screen and (max-width: 28em) {
    font-size: 2.6rem;
  }

  & > span {
    font-size: inherit;
    color: ${(props) => props.theme.palette.text.accent};
    font-family: ${(props) => props.theme.font.family.secondary};
  }
`;

export const BurgerMenu = styled.div`
  position: relative;
  cursor: pointer;

  & > span {
    display: block;
    background: ${(props) => props.theme.palette.text.main};
    width: 3.8rem;
    height: 0.7rem;
    border-radius: 0.2rem;
  }

  & > span:first-of-type {
    margin-bottom: 0.8rem;
  }
`;
