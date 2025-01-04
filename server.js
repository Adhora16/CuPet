require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const petRouter = require('./Routes/PetRoute');
const AdoptFormRoute = require('./Routes/AdoptFormRoute');
const AdminRoute = require('./Routes/AdminRoute');
const Donation = require('./Model/Donation'); 
const cors = require('cors');
const path = require('path');

const app = express();

app.use(cors());
app.use('/images', express.static(path.join(__dirname, 'images')));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(petRouter)
app.use('/form', AdoptFormRoute);
app.use('/admin', AdminRoute);

app.post('/donate', async (req, res) => {
    const { name, email, amount, paymentMethod } = req.body;
  
    if (!name || !email || !amount || !paymentMethod) {
      return res.status(400).json({ message: 'Please fill in all required fields.' });
    }
  
    try {
      const newDonation = new Donation({ name, email, amount, paymentMethod });
      await newDonation.save();
      res.status(200).json({ message: 'Donation successfully received. Thank you for your contribution!' });
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: 'Something went wrong. Please try again later.' });
    }
  });

mongoose.connect(process.env.mongooseURL)
    .then(() => {
        console.log('Connected to DB');
        const PORT = 4000;
        app.listen(PORT, () => {
            console.log(`Listening on port ${PORT}`)
        })
    })
    .catch((err) => {
        console.error(err);
    })