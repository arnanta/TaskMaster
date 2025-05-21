import React from 'react';
import styles from './Home.module.css';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();
  const handleAddButtonClick = () => {
    const isAuthenticated = !!localStorage.getItem('token');
    if (!isAuthenticated) {
      navigate('/sign-up');
    } else {
      console.log('You are authenticated to add a new task');
      //! Open the form to add a new task then
    }
  };
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi Arnanta! Welcome to TaskMaster.</h1>
        <p className={styles.subtitle}>Your only needed no nonsense TODO application</p>
      </div>
      <button className={styles.addButton} onClick={handleAddButtonClick}>
        Add a New Task
      </button>
    </div>
  );
};

export default Home;
