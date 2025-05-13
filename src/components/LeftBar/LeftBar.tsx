import React, { useRef, useEffect, useState } from 'react';
import style from './Leftbar.module.css';
import { useDispatch } from 'react-redux';
import { addCard } from '@/Store/Card/CardSlice';
import Form from '../Form/Form';
import { AvatarIcon } from '@/assets/icons';
import { logout } from '@/Store/Auth/AuthSlice';

type LeftBarProps = {
  showMenu: boolean;
  setShowMenu: React.Dispatch<React.SetStateAction<boolean>>;
};

const LeftBar: React.FC<LeftBarProps> = ({ showMenu, setShowMenu }) => {
  const [showForm, setShowForm] = useState<boolean>(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const dispatch = useDispatch();

  const openTaskAddForm = () => {
    setShowMenu(false);
    setShowForm(true);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const newCardData = {
      id: crypto.randomUUID(),
      name: formData.get('name') as string,
      content: formData.get('content') as string,
      comments: formData.get('comments') as string,
      taskType: formData.get('taskType') as 'Work' | 'Personal',
    };
    dispatch(addCard(newCardData));
    setShowForm(false);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setShowMenu(false);
      }
    };

    if (showMenu) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [showMenu, setShowMenu]);

  return (
    <div className={style.leftBarContainer}>
      {showMenu && (
        <div ref={menuRef} className={style.menu}>
          <ul>
            <li>My Tasks</li>
            <li>Due Assignments</li>
            <li onClick={openTaskAddForm}>Add a task</li>
          </ul>
          <div className={style.avatar}>
            <AvatarIcon />
            <span onClick={() => dispatch(logout())}>Log Out</span>
          </div>
        </div>
      )}

      {showForm && (
        <div className={style.formContainer}>
          <Form onSubmit={(event) => handleSubmit(event)} />
        </div>
      )}
    </div>
  );
};

export default LeftBar;
