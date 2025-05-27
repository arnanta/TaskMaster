import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { login } from '@/Store/Auth/AuthSlice';
import { validateUser } from '@/utils/FakeAuth';
import { useNavigate } from 'react-router-dom';
import style from './Login.module.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const valid = validateUser(email, password);
    if (valid) {
      dispatch(login({ email }));
      navigate('/home');
    } else {
      setError('Invalid credentials');
    }
  };

  return (
    <div className={style.loginContainer}>
      <h1>Hi! Please login here</h1>
      <form onSubmit={handleSubmit} className={style.form}>
        <input
          type="email"
          value={email}
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          value={password}
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">Login</button>
        {error && <p className={style.error}>{error}</p>}
      </form>
    </div>
  );
};

export default Login;
