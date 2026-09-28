import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import classes from "./register.module.scss"; // Ensure this file exists

const Register = () => {
    const navigate = useNavigate();
    const [inputs, setInputs] = useState({
        username: "",
        email: "",
        password: "",
    });

    const [error, setError] = useState(""); // State to store error messages

    const handleLogin = () => {
        navigate("/login");
    };

    const handleChange = (e) => {
        setInputs((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError(""); // Clear previous error message

        try {
            const { data } = await axios.post(
                
                `${import.meta.env.VITE_API_URL}/api/v1/user/register`,
                inputs
            );

            if (data.success) {
                alert("User Registered Successfully");
                navigate("/login");
            }
        } catch (error) {
            if (error.response && error.response.data.message) {
                alert(error.response.data.message); // Show error message
            } else {
                console.error("Registration Error:", error);
            }
        }
    };

    return (
        <div className={classes.register}>
            <div className={classes.wrapper}>
                <form onSubmit={handleSubmit}>
                    <h2>Register</h2>

                    {error && <p className={classes.error}>{error}</p>} {/* Display error message */}

                    <div className={classes.box}>
                        <input
                            type="email"
                            className={classes.in}
                            placeholder="Email"
                            name="email"
                            value={inputs.email}
                            onChange={handleChange}
                            required
                        />
                        <input
                            type="text" // Changed from "username" to "text"
                            className={classes.in}
                            placeholder="Username"
                            name="username"
                            value={inputs.username}
                            onChange={handleChange}
                            required
                        />
                        <input
                            type="password"
                            className={classes.in}
                            placeholder="Password"
                            name="password"
                            value={inputs.password}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <button type="submit" className={classes.but}>Register</button>

                    <div className={classes.link}>
                        <p>
                            Already have an account?{" "}
                            <a onClick={handleLogin} className="cursor-pointer">
                                Login here
                            </a>
                        </p>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Register;
