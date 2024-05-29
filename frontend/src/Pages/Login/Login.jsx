import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import "./login.css"

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
 
  const handleLoginEvent = async (e) => {
    e.preventDefault();
  try {
      await fetch("http://localhost:3001/api/v1/user/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: email,
          password: password,
        }),
      })
        .then((res) => res.json())
        .then((userStatus) => {
          if (userStatus.status === 200) {
            sessionStorage.setItem("token", userStatus.body.token)
          navigate("/profile");
          } 
          else {
            alert("invalid Credentials");
          }
        });
    } catch (error) {
      console.log(error)
    }
  };

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
          <button type="submit" className="signinButton">Sign In</button>
        </div>
      </form>
    </section>
  );
}

export default Login;

