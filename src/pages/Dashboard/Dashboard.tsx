// In your Dashboard.jsx
import React from 'react';
import style from './Dashboard.module.css';

const Dashboard = () => {
  return (
    <div className={style.container}>
      <div className={style.statusContainer}>
        <div className={style.circlesContainer}>
          <div className={`${style.circle} ${style.high}`}>High</div>
          <div className={`${style.circle} ${style.medium}`}>Medium</div>
          <div className={`${style.circle} ${style.low}`}>Low</div>
        </div>
      </div>
      <div className={style.priorityContainer}></div>
    </div>
  );
};

export default Dashboard;
