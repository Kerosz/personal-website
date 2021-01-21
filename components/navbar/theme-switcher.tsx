import styled from 'styled-components';
import { FC } from 'react';

import useThemeMode from '@hooks/use-theme-mode';

const Switcher = styled.div`
  width: 2.3vw;
  height: 2.3vw;
  border-radius: 50%;
  background: ${(props) =>
    props.theme.mode === 'light'
      ? props.theme.colors.gray[500]
      : props.theme.colors.gray[900]};
  margin-left: 0.5rem;
  cursor: pointer;
`;

const ThemeSwitcher: FC = () => {
  const { change } = useThemeMode({});

  return <Switcher onClick={change} />;
};

export default ThemeSwitcher;
