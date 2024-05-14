import { useDispatch, useSelector } from "react-redux"
import "./signin.css"
import {useState} from "react"
import { loginUser } from "../../Store/UserSlice"
import { useNavigate } from "react-router-dom"

const Signin = () => {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState ("")
    const {loading, error} = useSelector((state) => state.user)

    const dispatch = useDispatch()
    const navigate = useNavigate()
   
    const handleLoginEvent = (e) => {
        e.preventDefault()
        let userCredentials = {
            email, password
        }
        dispatch(loginUser(userCredentials)).then((result) => {
                setEmail("")
                setPassword("")
                navigate("/Profile")
        })
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
                    <button className="signinButton">{loading? "loading..." : "Sign In"}</button>
                    {error&&(<div className="alert">{error}</div>)}
                </div>
            </form>
        </section>

    );
}

export default Signin;