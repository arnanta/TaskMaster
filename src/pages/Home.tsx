// Home.jsx
import React, { useEffect } from 'react';
import styles from './Home.module.css';
import { useNavigate } from 'react-router-dom';
import { useForm } from '../contexts/FormContext/FormContext';
import taskImage from '../../public/assets/taskImage.jpg';

const Home = () => {
  const navigate = useNavigate();
  const { openForm } = useForm();

  const handleAddButtonClick = () => {
    const isAuthenticated = !!localStorage.getItem('token');
    if (!isAuthenticated) {
      navigate('/sign-up');
    } else {
      openForm();
    }
  };

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.contentWrapper}>
        <div className={styles.textContent}>
          <h1 className={styles.title}>Hi Arnanta! Welcome to TaskMaster.</h1>
          <p className={styles.subtitle}>
            Your only needed no nonsense Task Management Application
          </p>
        </div>
        <div className={styles.imageContainer}>
          <img src={taskImage} className={styles.image} alt="Productive workspace with laptop" />
        </div>
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
