import { FC, useEffect } from 'react';
import { useGlobalContext } from 'context/rootContext';
import { toggleTheme } from '@actions/theme.action';

const Navbar: FC = () => {
  const { themeMode, themeDispatch } = useGlobalContext();

  const handleThemeMode = () => {
    if (themeMode === 'Light') {
      themeDispatch(toggleTheme('Dark'));
    } else {
      themeDispatch(toggleTheme('Light'));
    }
  };

  useEffect(() => {
    localStorage.setItem('theme-mode', themeMode);
  }, [themeMode]);

  return (
    <>
      <h1>Navbar</h1>
      <button onClick={handleThemeMode}>Switch</button>
    </>
  );
};

export default Navbar;
