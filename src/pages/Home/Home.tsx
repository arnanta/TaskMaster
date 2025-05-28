import { useEffect } from 'react';
import styles from './Home.module.css';
import { useNavigate } from 'react-router-dom';
import { useForm } from '../../contexts/FormContext/FormContext';
import taskImage from '@assets/taskImage.jpg';

const ChevronIcon = () => (
  <svg
    className={styles.chevronIcon}
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M6 15L12 9L18 15"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

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

  const getUserName = (): string => {
    const userEmail = localStorage.getItem('user');
    if (!userEmail) return '';
    const name = userEmail.split('@')[0];
    return name.charAt(0).toUpperCase() + name.slice(1);
  };

  const userName = getUserName();
  const showPlaceholder = !userName;

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
          <h1 className={styles.title}>
            Hi{' '}
            <span className={styles.userWrapper}>
              {userName ? (
                <span className={styles.userText}>{userName}</span>
              ) : (
                <>
                  <span className={styles.userText}>(User)</span>
                  {showPlaceholder && (
                    <span className={styles.chevronWrapper}>
                      <ChevronIcon />
                      <div className={styles.popup}>
                        <p style={{ color: 'black' }}>
                          Okay, do not come at me saying haww the developer forgot to use a dynamic
                          value instead used a string. No Sir! Login/Signup and you will see your
                          name there.
                        </p>
                      </div>
                    </span>
                  )}
                </>
              )}
            </span>
            ! Welcome to TaskMaster.
          </h1>

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
