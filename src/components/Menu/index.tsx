import {
  HistoryIcon,
  HouseIcon,
  MoonIcon,
  SettingsIcon,
  SunIcon,
} from 'lucide-react';
import styles from './styles.module.css';
import { useEffect, useState } from 'react';

type AvailableThemes = 'dark' | 'light';

export function Menu() {
  const [theme, setTheme] = useState<AvailableThemes>(
    () => (localStorage.getItem('theme') as AvailableThemes) ?? 'dark',
  );

  const themeIcon = {
    dark: <SunIcon size={24} />,
    light: <MoonIcon size={24} />,
  };

  const handleThemeChange = (
    event: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
  ) => {
    event.preventDefault();

    setTheme(prevTheme => (prevTheme === 'dark' ? 'light' : 'dark'));
  };

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  return (
    <nav className={styles.menu}>
      <a
        className={styles.menuLink}
        href='#'
        aria-label='Ir para a Home'
        title='Ir para a Home'
      >
        <HouseIcon size={24} />
      </a>
      <a
        className={styles.menuLink}
        href='#'
        aria-label='Ver histórico'
        title='Ver histórico'
      >
        <HistoryIcon size={24} />
      </a>
      <a
        className={styles.menuLink}
        href='#'
        aria-label='Configurações'
        title='Configurações'
      >
        <SettingsIcon size={24} />
      </a>
      <a
        className={styles.menuLink}
        href='#'
        aria-label='Alterar o tema'
        title='Alterar o tema'
        onClick={handleThemeChange}
      >
        {themeIcon[theme]}
      </a>
    </nav>
  );
}
