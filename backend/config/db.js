const mongoose = require('mongoose');
const colors = require('colors');

const connectDB = async () => {
    if (!process.env.MONGO_URL) {
        throw new Error('MONGO_URL is not set. Add a valid MongoDB connection string to backend/.env.');
    }

    try {
        await mongoose.connect(process.env.MONGO_URL, { serverSelectionTimeoutMS: 5000 });
        console.log('MongoDB Connected Succesfully'.bgMagenta.white)
    } catch (error) {
        console.log('MongoDB Connection Failed'.bgRed.white)
        console.log(error.message)
        throw error;
    }
};

module.exports = connectDB;




