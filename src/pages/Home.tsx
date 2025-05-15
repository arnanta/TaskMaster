import React from 'react';
import styles from './Home.module.css';

const Home = () => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi Arnanta! Welcome to TaskMaster.</h1>
        <p className={styles.subtitle}>
          Your One Stop Solution to Add, Manage all your daily tasks and TODOs.
        </p>
      </div>
      <button className={styles.addButton}>Add New Task</button>
    </div>
  );
};

export default Home;
