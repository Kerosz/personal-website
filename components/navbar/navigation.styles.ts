import styled from 'styled-components';
import { Flex, List as UiL, ListItem as UiLI } from '@lib/ui';

export const MobileNavWrapper = styled(Flex)`
  position: fixed;
  top: 0;
  right: 0;
  background: transparent;
  width: 100%;
  height: 13vh;
  align-items: center;
  z-index: 99;

  & svg {
    max-width: 14.5vmin;

    ${(props) => props.theme.breakpoints.xs} {
      max-width: 12.5vmin;
    }

    ${(props) => props.theme.breakpoints.sm} {
      max-width: 11.5vmin;
      margin-right: 1rem;
    }

    ${(props) => props.theme.breakpoints.md} {
      max-width: 11vmin;
    }
  }

  ${(props) => props.theme.breakpoints.sm} {
    & .menu {
      display: none;
    }
  }

  @media (min-height: 1025px) and (max-width: 1400px) {
    height: 12vh;
  }
`;

export const Burger = styled.div`
  display: block;
  position: relative;
  cursor: pointer;

  ${(props) => props.theme.breakpoints.sm} {
    display: none;
  }

  & > span {
    display: block;
    background: ${(props) => props.theme.palette.text.main};
    width: 3.6rem;
    height: 0.5rem;
    border-radius: 0.2rem;
  }

  & > span:first-of-type {
    margin-bottom: 0.8rem;
  }
`;

export const Menu = styled.div`
  display: block;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  width: 105vw;
  background: ${(props) => props.theme.palette.text.main};
  padding: 4vh 0;

  ${(props) => props.theme.breakpoints.sm} {
    display: none;
  }
`;

export const MenuList = styled(UiL)`
  height: 100%;
  display: flex;
  flex-flow: column;
  justify-content: space-evenly;
  align-items: center;
  margin: 0;
  padding: 0;
`;

export const MenuItem = styled(UiLI)`
  color: ${(props) => props.theme.palette.background};
  font-size: calc(3.75rem + (60 - 38) * ((100vw - 320px) / (1600 - 320)));
  line-height: calc(3.9rem + (60 - 38) * ((100vw - 320px) / (1600 - 320)));
  font-weight: 800;

  -webkit-text-fill-color: ${(props) => props.theme.palette.text.main};
  -webkit-text-stroke-width: 2px;
  -webkit-text-stroke-color: ${(props) => props.theme.palette.background};

  :hover {
    -webkit-text-fill-color: ${(props) => props.theme.palette.background};
    -webkit-text-stroke-width: 2px;
    -webkit-text-stroke-color: transparent;
  }

  ${(props) => props.theme.breakpoints.xs} {
    font-size: calc(4.3rem + (60 - 38) * ((100vw - 320px) / (1600 - 320)));
  }
`;

export const DesktopNavWrapper = styled(Flex)`
  display: none;
  position: fixed;
  background: ${(props) => props.theme.colors.gray[300]};
  right: 1.6vw;
  bottom: 1.6vw;
  border-radius: 5px;
  padding: 1vw;
  z-index: 99;

  ${(props) => props.theme.breakpoints.sm} {
    display: flex;
  }

  ${(props) => props.theme.breakpoints.md} {
    padding: 0.8vw;
  }

  ${(props) => props.theme.breakpoints.lg} {
    padding: 0.68vw;
  }
`;

export const List = styled(UiL)`
  display: flex;
  align-items: center;
  margin: 0;
  padding: 0;
`;

export const ListItem = styled(UiLI)`
  font-weight: 400;
  color: ${(props) => props.theme.colors.gray[900]};
  padding: 0.785vw 1.35vw;
  margin: 0;
  border-radius: 5px;
  cursor: pointer;

  &.selected {
    color: ${(props) => props.theme.colors.gray[200]};
    background: ${(props) => props.theme.colors.gray[900]};
  }

  &:last-of-type {
    margin-right: 0;
  }

  ${(props) => props.theme.breakpoints.sm} {
    display: flex;
    font-size: calc(0.9rem + 0.9vw);
  }

  ${(props) => props.theme.breakpoints.md} {
    font-size: calc(0.8rem + 0.9vw);
  }

  ${(props) => props.theme.breakpoints.lg} {
    font-size: calc(0.63rem + 0.9vw);
  }

  ${(props) => props.theme.breakpoints.xl} {
    font-size: calc(0.3rem + 1vw);
  }
`;

export const Line = styled.div`
  width: 2.7vw;
  height: 0.1rem;
  background: ${(props) => props.theme.colors.gray[900]};
  margin-right: 1.05vw;
`;
