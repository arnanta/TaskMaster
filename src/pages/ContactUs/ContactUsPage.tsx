import React from 'react';
import style from './ContactUs.module.css';
const ContactUsPage: React.FC = () => {
  const onSubmit = () => {
    //! Form submit logic
  };
  //! A prop for onSubmit won't be needed. We will send out the form data from this component itself
  return (
    <div className={style.container}>
      <div className={style.formContainer}>
        <form className={style.form} onSubmit={onSubmit}>
          <div className={style.formGroup}>
            <label htmlFor="name">Please Enter Your Name</label>
            <input id="name" type="text" name="name" placeholder="Enter Your Name" />
          </div>
          <div className={style.formGroup}>
            <label htmlFor="name">Please Enter Your Email</label>
            <input id="email" type="email" name="email" placeholder="Enter Your Email" />
          </div>
          <div className={style.formGroup}>
            <label htmlFor="content">Enter your Query</label>
            <textarea id="query" name="query" rows={2} placeholder="Enter your query here" />
          </div>
          <p>
            Please enter your name, email and query and we will surely get back to you within a day.
          </p>
          <button type="submit" className={style.submitButton}>
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactUsPage;
