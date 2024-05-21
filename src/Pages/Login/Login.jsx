import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from "react-router-dom";
import { setLogs, setUser } from "../../Store/UserSlice"
import "./login.css"


const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleLoginEvent = async(e) => {
        e.preventDefault();

        const userCredentials = {
            email, password
        }

        const request = await fetch('http://localhost:3001/api/v1/user/login', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(userCredentials)
        });
        const result = await request.json();
      
        if(result.status === 200) {

            dispatch(setLogs(result.body.token));

            const profileRequest = await fetch('http://localhost:3001/api/v1/user/profile', {
                method: 'POST',
                headers: {'Authorization' : `Bearer ${result.body.token}` },
            });
            const profileResult = await profileRequest.json();     
            dispatch(setUser(profileResult));
            navigate("/Profile");

        } 
        else {alert("Invalid Credentials")};
    }

    return ( 
        <section className="formContainer">
            <form onSubmit={handleLoginEvent} >
                <div className="formItems">
                    <i className='fa fa-user-circle' />
                    <h1>Sign In</h1>
                </div>
                <div className="formInput">
                    <label htmlFor="email">Username:</label>
                    <input 
                    id="email" 
                    type='text' 
                    autoComplete="off"
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                    required
                    />
                    <label htmlFor="password">Password:</label>
                    <input 
                    id="password" 
                    type="password"
                    onChange={(e) => setPassword(e.target.value)}
                    value={password}
                    required
                     />
                    <div className="remenber">
                    <input id="remenber" type="checkbox" />
                    <label>Remenber me</label>
                    </div>
                    <button className="signinButton">Sign In</button>
            
                </div>
            </form>
        </section>
        
    
       
       
     );
}
 
export default Login;