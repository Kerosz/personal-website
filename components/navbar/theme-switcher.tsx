// libraries
import styled from 'styled-components';
import { Flex } from '@lib/ui';
import { FC, JSXElementConstructor } from 'react';
// hooks
import useThemeMode from '@hooks/use-theme-mode';

const Switcher = styled(Flex)`
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

const ThemeSwitcher: FC<{
  component?: string | JSXElementConstructor<any>;
}> = ({ component = 'div' }) => {
  const { change } = useThemeMode({});

  return <Switcher component={component} onClick={change} />;
};

export default ThemeSwitcher;
