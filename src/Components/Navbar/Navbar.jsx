import { NavLink } from "react-router-dom";
import "./navbar.css"
import logo from "../../Assets/argentBankLogo.png"
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { disconnect } from "../../Store/UserSlice";
import {selectUser} from "../../Store/UserSlice";



const Navbar = () => {
    const user = useSelector(selectUser);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const signOut = (() => {
        dispatch(disconnect())
        navigate('/') 
    })



    return (
        <nav>
            <NavLink to="/"><img src={logo} alt="logo argentbank" className="logo" /></NavLink>
            { user === null || user === undefined ?(
            <div className="signIn">
                <i className='fa fa-user-circle' />
                <NavLink to='/login'><p>Sign In</p></NavLink>
            </div>
            ) : (
                <NavLink to='/' onClick={signOut} className="signOut">
                    <i className='fa fa-user-circle' />
                    {user.payload.body.userName}
                <i className="fa fa-sign-out"></i>
                <p>Sign Out</p>
            </NavLink>
            )
}
        </nav>
    );
}

export default Navbar;