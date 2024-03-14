require('dotenv').config();

const express = require('express');
const cors = require('cors');
const PORT = process.env.PORT || 8000;

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.status(200).json({ message: 'Welcome to Chat with GPT!' });
});

app.listen(PORT, (error) => {
  if (!error) {
    console.log(`Server Running On Port: ${PORT}`);
  } else {
    console.log(`Server Failed To Start. \nError: ${error} `);
  }
});
