import React, { FC, useEffect } from 'react';
import { useGlobalContext } from 'context/rootContext';
import { applyTheme } from '@actions/theme.action';

import Branding from './branding';

const ThemeSwitcher: FC = () => {
  const { themeOption, themeDispatch } = useGlobalContext();

  const handleThemeMode = () => {
    if (themeOption === 'light') {
      themeDispatch(applyTheme('dark'));
    } else {
      themeDispatch(applyTheme('light'));
    }
  };

  // Needed to load the initial theme option state from the local storage if it exists
  useEffect(() => {
    const themeModeFromStorage = localStorage.getItem('theme-mode') as
      | 'dark'
      | 'light'
      | null;

    if (themeModeFromStorage) {
      themeDispatch(applyTheme(themeModeFromStorage));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('theme-mode', themeOption);
  }, [themeOption]);

  return <Branding onClick={handleThemeMode} />;
};

export default ThemeSwitcher;
