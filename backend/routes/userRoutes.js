const express = require('express');
const { registerController, loginController, getAllUsers , deleteUser } = require('../controllers/userController');

// Router object
const router = express.Router();

// Create user || POST
router.post('/register', registerController);

// Login user || POST
router.post('/login', loginController);

// Get all users || GET
router.get('/all-users', getAllUsers);

// Logout user || DELETE
router.delete('/delete/:id', deleteUser);


// Export the router
module.exports = router;