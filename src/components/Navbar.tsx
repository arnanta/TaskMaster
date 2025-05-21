import React, { useState } from 'react';
import style from './Navbar.module.css';
import { MenuIcon } from '@/assets/icons';
import { useTheme } from '@/contexts/ThemeContext/ThemeContext';
import LeftBar from './LeftBar/LeftBar';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const [showMenu, setShowMenu] = useState<boolean>(false);
  const { toggleTheme } = useTheme();
  const navigate = useNavigate();

  const toggleMenu = () => {
    setShowMenu((prev) => !prev);
  };

  const navigateToSignUpPage = () => {
    navigate('/sign-up');
  };

  return (
    <>
      <nav className={style.container_div}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <div className={style.logo} onClick={toggleMenu}>
            <MenuIcon />
          </div>
        </div>
        <div className={style.buttonContainer}>
          <button className={style.loginButton} onClick={navigateToSignUpPage}>
            Login/SignUp
          </button>
        </div>
      </nav>
      <LeftBar showMenu={showMenu} setShowMenu={setShowMenu} />
    </>
  );
};

export default Navbar;
