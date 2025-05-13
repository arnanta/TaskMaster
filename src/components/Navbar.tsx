import React, { useState } from 'react';
import style from './Navbar.module.css';
import { MenuIcon, AvatarIcon, DarkMode } from '@/assets/icons';
import { useTheme } from '@/contexts/ThemeContext/ThemeContext';
import LeftBar from './LeftBar/LeftBar';

const Navbar = () => {
  const [showMenu, setShowMenu] = useState<boolean>(false);
  const { toggleTheme } = useTheme();

  const toggleMenu = () => {
    setShowMenu((prev) => !prev);
  };

  return (
    <>
      <nav className={style.container_div}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <div className={style.logo} onClick={toggleMenu}>
            <MenuIcon />
          </div>
        </div>
        <div className={style.avatar}>
          <AvatarIcon />
          <span onClick={toggleTheme}>
            <DarkMode />
          </span>
        </div>
      </nav>
      <LeftBar showMenu={showMenu} setShowMenu={setShowMenu} />
    </>
  );
};

export default Navbar;
