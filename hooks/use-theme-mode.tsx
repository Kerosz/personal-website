import { useEffect } from 'react';
import { applyTheme } from '@actions/ui.action';
import { useGlobalContext } from 'context/rootContext';

import useJsonMemo from './use-json-memo';

interface Options {
  /** Triggers the `change` function based on a `dynamic` prop */
  triggerChange?: string | boolean;
}

/**
 * A hook that can be used to get the `current` theme mode or to `toggle` between the modes
 *
 * It returns a `mode` - `string` and a function `change` to toggle the theme mode.
 */
const useThemeMode = (args?: Options) => {
  const { themeOption, uiDispatch } = useGlobalContext();

  const memoTrigger = args ? useJsonMemo(args.triggerChange) : false;

  const handleThemeChange = () => {
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

  useEffect(() => {
    handleThemeChange();
  }, [memoTrigger]);

  return { mode: themeOption, change: handleThemeChange };
};

export default useThemeMode;
