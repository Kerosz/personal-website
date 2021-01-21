import { FC } from 'react';
import { Flex, Button as UiButton } from '@lib/ui';

import useThemeMode from '@hooks/use-theme-mode';
import styled from 'styled-components';

const Button = styled(UiButton)`
  display: none;
  padding: 2px 4px;

  ${(props) => props.theme.breakpoints.sm} {
    display: initial;
    font-size: calc(0.9rem + (50 - 38) * ((100vw - 320px) / (1600 - 320)));
  }

  ${(props) => props.theme.breakpoints.md} {
    font-size: calc(0.65rem + (50 - 38) * ((100vw - 320px) / (1600 - 320)));
  }

  ${(props) => props.theme.breakpoints.lg} {
    font-size: calc(0.45rem + (50 - 38) * ((100vw - 320px) / (1600 - 320)));
  }
`;

const Wrapper = styled(Flex)`
  position: fixed;
  bottom: 1.3vw;
  right: 2vw;
`;

const ThemeSwitcher: FC = () => {
  const { mode, change } = useThemeMode({});

  return (
    <Wrapper>
      <Button
        size='small'
        label={mode === 'dark' ? 'Light' : 'Dark'}
        variant='filled'
        onClick={change}
      />
    </Wrapper>
  );
};

export default ThemeSwitcher;
