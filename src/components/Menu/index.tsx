import { HistoryIcon, HouseIcon, SettingsIcon, SunIcon } from 'lucide-react';
import styles from './styles.module.css';

export function Menu() {
  return (
    <nav className={styles.menu}>
      <a className={styles.menuLink} href='#'>
        <HouseIcon size={24} />
      </a>
      <a className={styles.menuLink} href='#'>
        <HistoryIcon size={24} />
      </a>
      <a className={styles.menuLink} href='#'>
        <SettingsIcon size={24} />
      </a>
      <a className={styles.menuLink} href='#'>
        <SunIcon size={24} />
      </a>
    </nav>
  );
}
