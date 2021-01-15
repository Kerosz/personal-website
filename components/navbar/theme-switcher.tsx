import { FC, useEffect } from 'react';
import { useGlobalContext } from 'context/rootContext';
import { applyTheme } from '@actions/ui.action';

import Branding from './branding';

const ThemeSwitcher: FC = () => {
  const { themeOption, uiDispatch } = useGlobalContext();

  const handleThemeMode = () => {
    if (themeOption === 'light') {
      uiDispatch(applyTheme('dark'));
    } else {
      uiDispatch(applyTheme('light'));
    }
  };

  // Needed to load the initial theme option state from the local storage if it exists
  useEffect(() => {
    const themeModeFromStorage = localStorage.getItem('theme-mode') as
      | 'dark'
      | 'light'
      | null;

    if (themeModeFromStorage) {
      uiDispatch(applyTheme(themeModeFromStorage));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('theme-mode', themeOption);
  }, [themeOption]);

  return <Branding onClick={handleThemeMode} />;
};

export default ThemeSwitcher;
