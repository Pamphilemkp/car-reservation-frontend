import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { logOutUser } from '../../redux/auth/authSlice/authSlice';
import './logout.css';

const Logout = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleClick = (e) => {
    e.preventDefault();
    dispatch(logOutUser());
    navigate('/login');
  };

  return (
    <div>
      <button type="button" className="logou-btn" onClick={handleClick}>Log Out</button>
    </div>
  );
};

export default Logout;
