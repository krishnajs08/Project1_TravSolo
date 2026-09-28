const userModel = require('../models/userModel');
// const bcrypt = require('bcrypt');
const bcrypt = require("bcryptjs");
const jwt = require('jsonwebtoken');


require('dotenv').config();

// Register Controller
exports.registerController = async (req, res) => {
    try {
        const { username, email, password } = req.body;
        if (!username || !email || !password) {
            return res.status(400).send({
                success: false,
                message: 'Please enter all fields',
            });
        }
        if (!email.endsWith('@gmail.com')) {
            return res.status(400).send({
                success: false,
                message: 'Email must be correct!!',
            });
        }
        // Check if user exists
        const existingUser = await userModel.findOne({ email });
        if (existingUser) {
            return res.status(401).send({
                success: false,
                message: 'User already exists',
                
            });
        }

        // Hash password and create new user
        const hashedPassword = await bcrypt.hash(password, 10);
        const user = new userModel({ username, email, password: hashedPassword });
        await user.save();

        return res.status(201).send({
            success: true,
            message: 'User registered successfully',
            user,
        });
    } catch (error) {
        console.error("Error in register callback:", error);
        return res.status(500).send({
            success: false,
            message: 'Error in register callback',
            error: error.message,
        });
    }
};

// Get All Users
exports.getAllUsers = async (req, res) => {
    try {
        const users = await userModel.find({});
        return res.status(200).send({
            userCount: users.length,
            success: true,
            message: 'All users data',
            users,
        });
    } catch (error) {
        console.error("Error in Get All Users:", error);
        return res.status(500).send({
            success: false,
            message: 'Error in Get All Users',
            error: error.message,
        });
    }
};

// Login Controller
exports.loginController = async (req, res) => {
    try {
        const { username, password } = req.body;
        if (!username || !password) {
            return res.status(400).send({
                success: false,
                message: 'Please provide username and password',
            });
        }

        const user = await userModel.findOne({ username });
        if (!user) {
            return res.status(404).send({
                success: false,
                message: 'Username is not registered',
            });
        }

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(401).send({
                success: false,
                message: 'Invalid username or password',
            });
        }

        const jwtToken = jwt.sign({ _id: user._id, username: user.username }, process.env.JWT_KEY, {
            expiresIn: "30d",
        });

        return res.status(200).send({
            success: true,
            message: 'Login successful',
            user: {
                _id: user._id, 
                username: user.username,
                jwtToken,
            }
        });

    } catch (error) {
        console.error("Error in Login callback:", error);
        return res.status(500).send({
            success: false,
            message: 'Error in Login callback',
            error: error.message,
        });
    }
};

// Logout Controller
exports.logoutController = async (req, res) => {
    try {
        return res.status(200).send({
            success: true,
            message: "Logout successful",
        });
    } catch (error) {
        console.error("Error logging out:", error);
        return res.status(500).send({
            success: false,
            message: "Error logging out",
            error: error.message,
        });
    }
};

exports.deleteUser = async (req, res) => {
    try {
        const { id } = req.params;
        const user = await userModel.findByIdAndDelete(id);

        if (!user) {
            return res.status(404).send({
                success: false,
                message: "User not found",
            });
        }

        return res.status(200).send({
            success: true,
            message: "User deleted successfully",
        });
    } catch (error) {
        console.error("Error deleting user:", error);
        return res.status(500).send({
            success: false,
            message: "Error deleting user",
            error: error.message,
        });
    }
};