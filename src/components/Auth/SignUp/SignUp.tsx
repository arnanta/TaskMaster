import React, { useState } from 'react';
import style from './Signup.module.css';
import { Link } from 'react-router-dom';
const SignUp = () => {
  const [error, setError] = useState<boolean>(false);
  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    //! Submit possible only when error is false
    //! Add a submit button enable/disable class as well
  };
  const handleNameValidation = (e) => {
    const isValid = /^[A-Za-z]+$/.test(e.target.value);
    if (!isValid) {
      setError(true);
    } else {
      setError(false);
    }
  };

  const handleEmailValidation = (e) => {
    const isValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e.target.value);
    if (!isValidEmail) {
      setError(true);
    } else {
      setError(false);
    }
  };

  const handlePasswordValidation = (e) => {
    const isValidPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/.test(e.tagret.value);
    if (!isValidPassword) {
      setError(true);
    } else {
      setError(false);
    }
  };

  const handleButtonState = (): boolean => {
    if (error) {
      return true;
    } else return false;
  };
  return (
    <div className={style.containerClass}>
      <span style={{ width: '100%', fontSize: '20px' }}>
        Please sign up first! Won't take more than a couple of seconds.
      </span>
      <form className={style.form} onSubmit={handleSubmit}>
        <div className={style.formGroup}>
          <label htmlFor="name">Your Name</label>
          <input
            id="name"
            type="text"
            name="name"
            placeholder="Enter your Name"
            className={error ? style.errorMessage : ''}
            onBlur={(e) => handleNameValidation(e)}
          />
          {error && <span className={style.errorMessage}>Pleas enter name only in alphabets</span>}
        </div>

        <div className={style.formGroup}>
          <label htmlFor="name">Your Email</label>
          <input
            id="email"
            type="email"
            name="email"
            placeholder="Enter your email"
            className={error ? style.errorMessage : ''}
            onBlur={(e) => handleEmailValidation(e)}
          />
          {error && <span className={style.errorMessage}>Pleas enter a valid email</span>}
        </div>

        <div className={style.formGroup}>
          <label htmlFor="name">Enter a Password</label>
          <input
            id="password"
            type="password"
            name="password"
            placeholder="Enter a password"
            className={error ? style.errorMessage : ''}
            onBlur={(e) => handlePasswordValidation(e)}
          />
          {error && <span className={style.errorMessage}>Please enter a valid password</span>}
        </div>
        <div className={style.formGroup}>
          <label htmlFor="name">Confirm Password</label>
          <input
            id="confirm_password"
            type="password"
            name="password"
            placeholder="Confirm your password"
          />
        </div>

        <button
          type="submit"
          className={`${style.submitButton} ${true ? style.disabled : ''}`}
          disabled={true}
        >
          Submit
        </button>
        <span>
          Already signed up? Please{' '}
          <Link to="/login" className={style.loginLink}>
            log in
          </Link>{' '}
          then.
        </span>
      </form>
    </div>
  );
};

export default SignUp;
