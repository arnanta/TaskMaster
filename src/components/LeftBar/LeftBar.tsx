import React, { useRef, useEffect, useState } from 'react';
import style from './Leftbar.module.css';
import { useDispatch } from 'react-redux';
import { addCard } from '@/Store/Card/CardSlice';
import Form from '../Form/Form';
import { AvatarIcon, ChevronDownIcon } from '@/assets/icons';
import { logout } from '@/Store/Auth/AuthSlice';
import { useNavigate } from 'react-router-dom';

type LeftBarProps = {
  showMenu: boolean;
  setShowMenu: React.Dispatch<React.SetStateAction<boolean>>;
};

const LeftBar: React.FC<LeftBarProps> = ({ showMenu, setShowMenu }) => {
  const [showForm, setShowForm] = useState<boolean>(false);
  const [showTaskFilter, setShowTaskFilter] = useState<boolean>(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();

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
      status: formData.get('status') as string,
      priority: formData.get('priority') as string,
    };
    dispatch(addCard(newCardData));
    window.alert('Yayy! New Task added');
    setShowForm(false);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setShowMenu(false);
        setShowTaskFilter(false);
      }
    };

    if (showMenu || showTaskFilter) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [showMenu, showTaskFilter]);

  const navigateToMyTasks = () => {
    navigate('/my-tasks');
  };

  const toggleTaskFilter = (e: React.MouseEvent) => {
    e.stopPropagation();
    setShowTaskFilter(!showTaskFilter);
  };

  const navigateToFilteredTasks = (filter: 'all' | 'active' | 'completed') => {
    setShowMenu(false);
    setShowTaskFilter(false);
    const route = filter === 'all' ? '/my-tasks' : `/my-tasks/${filter}`;
    navigate(route);
  };

  const navigateToDashboard = () => {
    navigate('/dashboard');
  };
  return (
    <>
      {' '}
      <div className={style.leftBarContainer}>
        {showMenu && (
          <div ref={menuRef} className={style.menu}>
            <div className={style.taskFilterContainer}>
              <div className={style.taskFilter} onClick={toggleTaskFilter}>
                <span>My Tasks</span>
                <ChevronDownIcon
                  className={`${style.chevronIcon} ${showTaskFilter ? style.rotate : ''}`}
                />
              </div>
              {showTaskFilter && (
                <ul className={style.taskFilterDropdown}>
                  <li onClick={navigateToMyTasks}>All Tasks</li>
                  <li onClick={() => navigateToFilteredTasks('active')}>Active Tasks</li>
                  <li onClick={() => navigateToFilteredTasks('completed')}>Completed Tasks</li>
                </ul>
              )}
            </div>

            <ul>
              <li onClick={navigateToDashboard}>Dashboard</li>
              <li onClick={openTaskAddForm}>Add a task</li>
              <li>Calendar</li>
              <li>Settings</li>
              <li>Contact Us</li>
            </ul>

            <div className={style.menuFooter}>
              <div className={style.avatar} onClick={() => dispatch(logout())}>
                <AvatarIcon />
                <span>Log Out</span>
              </div>
            </div>
          </div>
        )}
      </div>
      {showForm && (
        <div className={style.overlay} onClick={() => setShowForm(false)}>
          <div className={style.formWrapper} onClick={(e) => e.stopPropagation()}>
            <Form onSubmit={(event) => handleSubmit(event)} />
          </div>
        </div>
      )}
    </>
  );
};

export default LeftBar;
