import React, { useRef } from 'react';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { createUser } from '../../redux/auth/authSlice/authSlice';
import './Register.css';

const SignupForm = () => {
  const dispatch = useDispatch();
  const formRef = useRef();
  const navigate = useNavigate();
  const errorMessageRef = useRef();
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(formRef.current);
    const data = Object.fromEntries(formData);
    // Check if password is at least 6 characters long
    if (data.password.length < 6) {
      // Update the text of the error message element
      errorMessageRef.current.textContent = 'Password must be at least 6 characters long';
      // Remove the error message after 5 seconds
      setTimeout(() => {
        errorMessageRef.current.textContent = '';
      }, 5000);
      return;
    }
    const imageFile = formData.get('image');
    const fileName = imageFile.name;
    const user = {
      user: {
        name: data.name,
        date_of_birth: data.date,
        photo: fileName,
        email: data.email,
        password: data.password,
      },
    };
    // console.log(user);
    dispatch(createUser(user));
    navigate('/login');
  };
  return (
    <div>
      <p ref={errorMessageRef} />
      <form ref={formRef} onSubmit={handleSubmit}>
        <div className="Form-container">

          <h1>Register</h1>

          <div>
            <label htmlFor="name">
              <div className="user-name"> Name:</div>
              <input type="text" name="name" placeholder="Enter your name" required />
            </label>
          </div>
          <div>
            <label htmlFor="date" className="user-date">
              Date of birth
              <input type="date" name="date" placeholder="Enter your date of birth" required />
            </label>
          </div>
          <div>
            <label htmlFor="email" className="user-email">
              Email
              <input type="email" name="email" placeholder="Enter your email" required />
            </label>
          </div>
          <div>
            <label htmlFor="for-images" className="user-image">
              Upload your image
              <input type="file" name="image" placeholder="Upload your image" accept="image/png,image/jpg" required />
            </label>
          </div>
          <div>
            <label htmlFor="password" className="user-password">
              Password
              <input type="password" name="password" placeholder="Enter your password" required />
            </label>
          </div>
          <div>
            <button type="submit" className="register">Register</button>

          </div>
          <p ref={errorMessageRef} />
          <div className="login-link">
            <div>
              <p>Already have an Account?</p>
            </div>
            <div>

              <Link to="/login">Login</Link>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default SignupForm;
