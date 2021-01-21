import { FC } from 'react';

import useThemeMode from '@hooks/use-theme-mode';
import Branding from './branding';

const ThemeSwitcher: FC = () => {
  const { change } = useThemeMode({});

  return <Branding onClick={change} />;
};

export default ThemeSwitcher;
