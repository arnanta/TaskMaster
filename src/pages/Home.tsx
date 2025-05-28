import React from 'react';
import styles from './Home.module.css';
import { useNavigate } from 'react-router-dom';
import { useForm } from '../contexts/FormContext/FormContext';

const Home = () => {
  const navigate = useNavigate();
  const { openForm } = useForm();

  const handleAddButtonClick = () => {
    const isAuthenticated = !!localStorage.getItem('token');
    if (!isAuthenticated) {
      navigate('/sign-up');
    } else {
      console.log('You are authenticated to add a new task');
      openForm();
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi Arnanta! Welcome to TaskMaster.</h1>
        <p className={styles.subtitle}>Your only needed no nonsense Task Management Application</p>
      </div>

      <button className={styles.addButton} onClick={handleAddButtonClick}>
        Add a New Task
      </button>

      <footer className={styles.footer}>
        <p>© 2025 TaskMaster. All rights reserved.</p>
        <p>Designed and Developed by Arnanta Chatterjee.</p>
      </footer>
    </div>
  );
};

export default Home;
