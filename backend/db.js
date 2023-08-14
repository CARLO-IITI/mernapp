const mongoose = require('mongoose');
const mongoURI = 'mongodb+srv://sarthakagarwal4043:CHAPEL@cluster0.4k1jfe3.mongodb.net/?retryWrites=true&w=majority';

async function mongoDB() {
    try {
      await mongoose.connect(mongoURI , { useNewUrlParser: true, useUnifiedTopology: true });
      console.log('Connected to MongoDB');
    } catch (error) {
      console.error('Error connecting to MongoDB:', error);
    }
  }
module.exports = mongoDB;
//async is used to make the function asynchronous 
//asynchronous means that the function will not wait for the function to complete
//await is used to wait for the function to complete