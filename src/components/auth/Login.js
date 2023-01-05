import { useRef } from 'react';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { logInUser } from '../../redux/auth/authSlice/authSlice';
import './login.css';

const LoginForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const formRef = useRef();

  const getUser = async (user) => {
    await dispatch(logInUser(user));
    navigate('/', { replace: true });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(formRef.current);
    const data = Object.fromEntries(formData);
    const user = {
      user: {
        email: data.email, password: data.password,
      },
    };
    getUser(user);
  };

  return (
    <div>
      <form ref={formRef} onSubmit={handleSubmit}>
        <div className="email-login"> Email:</div>
        {' '}
        <input type="email" name="email" placeholder="Email" />
        <br />
        Password:
        {' '}
        <input type="password" name="password" placeholder="Password" />
        <br />
        <button type="submit" value="Login">Login</button>
        <div className="login-link">
          <div>
            <p>Do not have an Account?</p>
          </div>
          <div>

            <Link to="/register">Register</Link>
          </div>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
