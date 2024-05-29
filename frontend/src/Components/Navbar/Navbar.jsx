import { NavLink } from "react-router-dom";
import "./navbar.css"
import logo from "../../Assets/argentBankLogo.png"
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { userSignOut } from "../../Store/UserSlice";

const Navbar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userStatus = useSelector((store) => store.USER.userStatus);
  const userData = useSelector((store) => store.USER.userData);

  const handleSignOut = () => {
    // sessionStorage.getItem("token")
  sessionStorage.removeItem("token")
    // : localStorage.removeItem("token");
    dispatch(userSignOut());
    navigate("/");
  };

    return (
        <nav>
            <NavLink to="/"><img src={logo} alt="logo argentbank" className="logo" /></NavLink>
        {!userStatus.connected && (
          <div className="signIn">
          <i className='fa fa-user-circle' />
          <NavLink to='/login'><p>Sign In</p></NavLink>
      </div>
        )}
        {userStatus.connected && (
          <NavLink to='/' onClick={handleSignOut} className="signOut">
          <i className='fa fa-user-circle' />
          {userData.userName}
          <i className="fa fa-sign-out"></i>
          <p>Sign Out</p>
          </NavLink>
        )}
    </nav>
    );
}
export default Navbar;



