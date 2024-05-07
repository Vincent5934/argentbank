import { NavLink } from "react-router-dom";
import "./navbar.css"
import logo from "../../Assets/argentBankLogo.png"


const Navbar = () => {
    return (
        <nav>
            <NavLink to="/"><img src={logo} alt="logo argentbank" className="logo" /></NavLink>
            <div className="logIn">
                <i className='fa fa-user-circle' />
                <NavLink to='/signin'><p>Sign In</p></NavLink>
            </div>
        </nav>
    );
}

export default Navbar;