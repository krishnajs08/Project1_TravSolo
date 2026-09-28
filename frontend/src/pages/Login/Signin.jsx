import React, { useState } from 'react';
import classes from './login.module.scss';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function Login() {
    const navigate = useNavigate();
    const [inputs, setInputs] = useState({
        username: "",
        password: "",
    });

    const handleRegister = () => {
        navigate("/register");
    };

    const handleChange = (e) => {
        setInputs(prevState => ({
            ...prevState,
            [e.target.name]: e.target.value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            
            const { data } = await axios.post(`${import.meta.env.VITE_API_URL}/api/v1/user/login`, {
                username: inputs.username,
                password: inputs.password,
            });

            if (data.success) {
                alert("User Login Successfully");

                // Store token and userId correctly
                const token = data.user.jwtToken; 
                localStorage.setItem("authToken", token);
                localStorage.setItem("userId", data.user._id);

                // Redirect to home page
                navigate("/");
            } else {
                alert("Login failed! Please check your credentials.");
            }
        } catch (error) {
            console.error("Login Error:", error);
            alert("An error occurred while logging in. Please try again.");
        }
    };

    return (
        <div className={classes.login}>
            <div className={classes.wrapper}>
                <form onSubmit={handleSubmit}>
                    <h2>Login</h2>
                    <div className={classes.box}>
                        <input 
                            className={classes.in} 
                            type="text" 
                            placeholder="Username" 
                            name="username"
                            value={inputs.username}
                            onChange={handleChange}
                            required 
                        />
                        <input 
                            className={classes.in}  
                            type="password" 
                            placeholder="Password" 
                            name="password"
                            value={inputs.password}
                            onChange={handleChange}
                            required 
                        />
                    </div>
                    <button className={classes.but} id="but" type="submit">Login</button>
                    <div className={classes.link}>
                        <p>Don't have an account? <span className='cursor-pointer' onClick={handleRegister}>Register</span></p>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Login;
