import './css/LoginForm.css';
import { FaRegUser, FaLock } from "react-icons/fa";

const LoginForm = () => {
    return (
        <div className="wrapper">
            <form>
                <h1>Biophilia</h1>
                <div className="InputBox">
                    <input 
                        type="text" 
                        placeholder="Username" 
                    />
                    <FaRegUser className="icon"/>
                </div>
                <div className="InputBox">
                    <input 
                        type="password" 
                        placeholder="Password" 
                    />
                    <FaLock className="icon"/>
                </div>
                <div className="Remember-Forgot">
                    <label><input type="checkbox" />Remember Me</label>
                    <a href="#">Forgot Password?</a>
                </div> 
                <button type="submit">Login</button>

                <div className="Register-Link">
                    <p>Don't have an account? <a href="register">Create one here!!</a></p>
                </div> 
            </form>
        </div>
    );
}

export default LoginForm;
