import React from 'react';
import styles from './Form.module.css';

type FormProps = {
  onSubmit: (event: React.FormEvent) => void;
};

const Form: React.FC<FormProps> = ({ onSubmit }) => {
  return (
    <form className={styles.form} onSubmit={onSubmit}>
      <div className={styles.formGroup}>
        <label htmlFor="status">Task Status</label>
        <select id="status" name="status" className={styles.select}>
          <option value="New">New</option>
          <option value="Active">Active</option>
          <option value="Paused">Paused</option>
          <option value="Completed">Completed</option>
        </select>
      </div>

      <div className={styles.formGroup}>
        <label htmlFor="priority">Priority</label>
        <select id="priority" name="priority" className={styles.select}>
          <option value="Low">Low</option>
          <option value="Medium">Medium</option>
          <option value="High">High</option>
        </select>
      </div>

      <div className={styles.formGroup}>
        <label htmlFor="name">Task Name</label>
        <input id="name" type="text" name="name" placeholder="Enter the Task Name" />
      </div>
      <div className={styles.formGroup}>
        <label htmlFor="dueDate">Due Date</label>
        <input
          id="dueDate"
          type="date"
          name="dueDate"
          className={styles.dateInput} // Optional: Add this class for custom styling
        />
      </div>
      <div className={styles.formGroup}>
        <label htmlFor="content">Task Details</label>
        <textarea id="content" name="content" rows={4} placeholder="Enter your Task Details here" />
      </div>

      <button type="submit" className={styles.submitButton}>
        Submit
      </button>
    </form>
  );
};

export default Form;
