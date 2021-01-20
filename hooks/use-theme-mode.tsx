import { useEffect, useLayoutEffect } from 'react';
import { applyTheme } from '@actions/ui.action';
import { useGlobalContext } from 'context/rootContext';

import useJsonMemo from './use-json-memo';
import useUpdateEffect from './use-update-effect';

export interface Options {
  /** Triggers the `change` function based on a `dynamic` prop */
  triggerChange?: string | boolean;
}

export interface ThemeModeReturn {
  mode: 'dark' | 'light';
  change: () => void;
}

/**
 * A hook that can be used to get the `current` theme mode or to `toggle` between the modes
 *
 * It returns a `mode` - `string` and a function `change` to toggle the theme mode.
 */
const useThemeMode = (args?: Options): ThemeModeReturn => {
  const { themeOption, uiDispatch } = useGlobalContext();

  const memoTrigger = args ? useJsonMemo(args.triggerChange) : null;

  const handleThemeChange = () => {
    if (themeOption === 'light') {
      uiDispatch(applyTheme('dark'));
    } else {
      uiDispatch(applyTheme('light'));
    }
  };

  useUpdateEffect(() => {
    handleThemeChange();
  }, [memoTrigger]);

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

  useUpdateEffect(() => {
    localStorage.setItem('theme-mode', themeOption);
  }, [themeOption]);

  return { mode: themeOption as 'light' | 'dark', change: handleThemeChange };
};

export default useThemeMode;
