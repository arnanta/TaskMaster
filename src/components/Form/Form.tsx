// Form.tsx
import React from 'react';
import styles from './Form.module.css';

type FormProps = {
  onSubmit: (event) => void;
};

const Form: React.FC<FormProps> = ({ onSubmit }) => {
  return (
    <form className={styles.form} onSubmit={onSubmit}>
      <div className={styles.formGroup}>
        <label htmlFor="name">Task Name</label>
        <input id="name" type="text" name="name" placeholder="Enter the Task Name" />
      </div>

      <div className={styles.formGroup}>
        <label htmlFor="email">Task Content</label>
        <textarea id="content" name="content" rows={4} placeholder="Enter your Task Details here" />
      </div>

      <div className={styles.formGroup}>
        <label htmlFor="message">Comments</label>
        <input id="comments" name="comments" placeholder="Comments..." />
      </div>

      <button type="submit" className={styles.submitButton}>
        Submit
      </button>
    </form>
  );
};

export default Form;
