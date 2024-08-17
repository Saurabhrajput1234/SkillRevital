const express = require("express");
const app = express();
require('dotenv').config();
require("./db/conn");
const router = require('./routes/router');
const cors = require("cors");
const admin = require('firebase-admin');
const User = require('./models/user'); 
const serviceAccount = require('./serviceAccountKey.json');
const cookiparser = require("cookie-parser");
const port= 5006;

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});


app.use(express.json());
app.use(cors());
app.use(cookiparser());
app.use(router);



app.post('/api/auth/login', async (req, res) => {
  const { token } = req.body;

  try {
    const decodedToken = await admin.auth().verifyIdToken(token);
    const { uid } = decodedToken;

    // Check if user exists in the database
    const user = await User.findOne({ uid });

    if (user) {
      res.status(200).send({ message: 'User authenticated successfully' });
    } else {
      res.status(404).send({ message: 'User not found' });
    }
  } catch (error) {
    console.error('Error verifying token:', error);
    res.status(401).send({ message: 'Unauthorized' });
  }
});


app.post('/api/auth/google', async (req, res) => {
  const { token, collegeName } = req.body;

  try {
    const decodedToken = await admin.auth().verifyIdToken(token);
    const { uid, email, name, picture } = decodedToken;

    // Check if the user already exists
    let user = await User.findOne({ uid });

    if (!user) {
      // Create a new user
      user = new User({
        uid,
        email,
        name,
        photoURL: picture,
        collegeName,  // Store college name
      });
      await user.save();
    }

    res.status(200).send({ message: 'User authenticated and saved successfully' });
  } catch (error) {
    console.error('Error verifying token or saving user:', error);
    res.status(401).send({ message: 'Unauthorized' });
  }
});


// Signup route
app.post('/api/auth/signup', async (req, res) => {
  const { token, name, collegeName } = req.body;

  try {
    const decodedToken = await admin.auth().verifyIdToken(token);
    const { uid, email } = decodedToken;

    // Check if user already exists
    let user = await User.findOne({ uid });

    if (!user) {
      // If user doesn't exist, create a new one
      user = new User({
        uid,
        email,
        name,
        collegeName, // Save college name
      });
      await user.save();
    }

    res.status(200).send({ message: 'User registered successfully' });
  } catch (error) {
    console.error('Error saving user:', error);
    res.status(500).send({ message: 'Error saving user' });
  }
});


app.listen(process.env.PORT,()=>{
  console.log(`server start at port no :${process.env.PORT}`)
})