import { useEffect } from 'react';
import { useUpdateEffect } from '@lib/utils/react-helpers';
import { ThemeOption } from '@actions/ui.action';
import { useGlobalContext } from 'context/root-context';
import useJsonMemo from './use-json-memo';

export interface Options {
  /** Triggers the `change` function based on a `dynamic` property*/
  triggerChange?: string | boolean;
  /** If set to `false`, theme mode will not be saved to `localStorage`. It defaults to `true` */
  save?: boolean;
}

export interface ThemeModeReturn {
  mode: ThemeOption;
  change: () => void;
}

/**
 * A hook that can be used to get the `current` theme mode or to `toggle` between the modes
 *
 * It returns a `mode` - `string` and a function `change` to toggle the theme mode.
 */
const useThemeMode = (args: Options): ThemeModeReturn => {
  const { save = true, triggerChange } = args;
  const { themeOption, setThemeMode } = useGlobalContext();

  const memoTrigger = useJsonMemo(triggerChange);

  const handleThemeChange = () => {
    if (themeOption === 'light') {
      setThemeMode('dark');
    } else {
      setThemeMode('light');
    }
  };

  useUpdateEffect(() => {
    handleThemeChange();
  }, [memoTrigger]);

  // Needed to load the initial theme option state from the local storage if it exists
  useEffect(() => {
    const themeModeFromStorage = localStorage.getItem(
      'theme-mode'
    ) as ThemeOption | null;

    if (themeModeFromStorage) {
      setThemeMode(themeModeFromStorage);
    } else {
      localStorage.setItem('theme-mode', themeOption);
    }
  }, []);

  useUpdateEffect(() => {
    save && localStorage.setItem('theme-mode', themeOption);
  }, [themeOption, save]);

  return { mode: themeOption as ThemeOption, change: handleThemeChange };
};

export default useThemeMode;
