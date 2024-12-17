const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        const conn = await mongoose.connect(
            'mongodb+srv://mongo:Manali23@cluster0.ateti.mongodb.net/mod3db?retryWrites=true&w=majority&appName=Cluster0');
        console.log('MongoDB Connected');
    }   catch (error) {
        console.error(error);
        process.exit(1);
    }
};

module.exports = connectDB;