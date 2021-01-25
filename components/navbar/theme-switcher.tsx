// libraries
import styled from 'styled-components';
import { FC } from 'react';
// hooks
import useThemeMode from '@hooks/use-theme-mode';

const Switcher = styled.div`
  width: 8vw;
  height: 8vw;
  border-radius: 50%;
  background: ${(props) =>
    props.theme.mode === 'light'
      ? props.theme.colors.gray[500]
      : props.theme.colors.gray[900]};
  margin-left: 0.5rem;
  cursor: pointer;

  ${(props) => props.theme.breakpoints.xs} {
    width: 6.3vw;
    height: 6.3vw;
  }

  ${(props) => props.theme.breakpoints.sm} {
    width: 2.3vw;
    height: 2.3vw;
  }
`;

const ThemeSwitcher: FC = () => {
  const { change } = useThemeMode({});

  return <Switcher onClick={change} />;
};

export default ThemeSwitcher;
