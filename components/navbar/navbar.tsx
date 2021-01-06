import { FC, useEffect } from 'react';
import { useGlobalContext } from 'context/rootContext';
import { applyTheme } from '@actions/theme.action';

import { Button } from '@lib/ui';

const Navbar: FC = () => {
  const { themeOption, themeDispatch } = useGlobalContext();

  const handleThemeMode = () => {
    if (themeOption === 'light') {
      themeDispatch(applyTheme('dark'));
    } else {
      themeDispatch(applyTheme('light'));
    }
  };

  useEffect(() => {
    localStorage.setItem('theme-mode', themeOption);
  }, [themeOption]);

  return (
    <>
      <h1>Navbar</h1>
      <Button variant='outlined' label='Switch' onClick={handleThemeMode} />
    </>
  );
};

export default Navbar;
