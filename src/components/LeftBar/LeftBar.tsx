import React, { useRef, useEffect, useState } from 'react';
import style from './Leftbar.module.css';
import { useDispatch } from 'react-redux';
import { AvatarIcon, ChevronDownIcon, ChevronUpIcon } from '@/assets/icons';
import { logout } from '@/Store/Auth/AuthSlice';
import { useNavigate } from 'react-router-dom';
import { useForm } from '../../contexts/FormContext/FormContext';

type LeftBarProps = {
  showMenu: boolean;
  setShowMenu: React.Dispatch<React.SetStateAction<boolean>>;
};

const LeftBar: React.FC<LeftBarProps> = ({ showMenu, setShowMenu }) => {
  const [showTaskFilter, setShowTaskFilter] = useState<boolean>(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { openForm } = useForm();

  const openTaskAddForm = () => {
    setShowMenu(false);
    openForm();
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

  const navigateToContactPage = () => {
    navigate('/contact-us');
  };

  const navigateToSettingsPage = () => {
    navigate('/settings');
  };
  return (
    <div className={style.leftBarContainer}>
      {showMenu && (
        <div ref={menuRef} className={style.menu}>
          <div className={style.taskFilterContainer}>
            <div className={style.taskFilter} onClick={toggleTaskFilter}>
              <span>My Tasks</span>
              {!showTaskFilter ? <ChevronDownIcon /> : <ChevronUpIcon />}
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
            <li onClick={navigateToSettingsPage}>Settings</li>
            <li onClick={navigateToContactPage}>Contact Us</li>
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
  );
};

export default LeftBar;
