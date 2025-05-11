import React, { useEffect, useRef, useState } from 'react';
import style from './Navbar.module.css';
import { MenuIcon, AvatarIcon, DarkMode } from '@/assets/icons';
import { useTheme } from '@/contexts/ThemeContext/ThemeContext';
import Card from './Card/Card';
import Form from './Form/Form';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '@/Store';
import { addCard } from '@/Store/Card/CardSlice';
const Navbar = () => {
  const [showMenu, setShowMenu] = useState<boolean>(false);
  const [showCards, setShowCards] = useState<boolean>(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const [showForm, setShowForm] = useState<boolean>(false);

  const { toggleTheme } = useTheme();
  const cardData = useSelector((state: RootState) => state.card);
  const dispatch = useDispatch();

  const toggleMenu = () => {
    setShowMenu((prev) => !prev);
  };
  const handleCards = () => {
    setShowCards(true);
    setShowMenu(false);
  };

  const openTaskAddForm = () => {
    setShowForm(true);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const taskType = formData.get('taskType') as string;
    const newCardData = {
      id: crypto.randomUUID(),
      name: formData.get('name') as string,
      content: formData.get('content') as string,
      comments: formData.get('comments') as string,
    };
    dispatch(addCard(newCardData));
    setShowForm(false);
    setShowCards(true);
  };
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setShowMenu(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);
  return (
    <>
      <nav className={style.container_div}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <div className={style.logo} onClick={toggleMenu}>
            <MenuIcon />
          </div>
          {showMenu && (
            <div ref={menuRef} className={style.menu}>
              <ul>
                <li onClick={handleCards}>My Tasks</li>
                <li>Due Assignments</li>
                <li onClick={openTaskAddForm}>Add a task</li>
              </ul>
            </div>
          )}
        </div>
        <div className={style.avatar}>
          <AvatarIcon />

          <span onClick={toggleTheme}>
            <DarkMode />
          </span>
        </div>
      </nav>
      <div>
        {showCards &&
          cardData?.length > 0 &&
          cardData.map((card) => <Card key={card.id} card={card} />)}
      </div>
      {showForm && <Form onSubmit={(event: React.FormEvent) => handleSubmit(event)} />}
    </>
  );
};

export default Navbar;
