// script d'initialisation/réinitialisation des données dans la base MongoDB, 
// à lancer avec la commande : node backend/seed.js

const mongoose = require('mongoose');
const Book = require('./models/Book');
const data = require('../frontend/public/data/data.json');
const User = require('./models/User');
const dotenv = require('dotenv').config();

mongoose.connect(`mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@${process.env.MONGO_DB}.okbdkgb.mongodb.net/?appName=cluster0`)
  .then(async () => {
    console.log('Connecté à MongoDB');
    await Book.deleteMany(); // vide la collection
    await User.deleteMany(); // vide la collection
    await Book.insertMany(data);
    console.log('Import terminé');
    process.exit();
  })
  .catch(err => console.error(err));