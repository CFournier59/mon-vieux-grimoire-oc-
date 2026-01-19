// script d'import des données dans la base MongoDB, à utiliser la première fois seulement si le cluster ne contient pas les données.
// à lancer avec la commande : node backend/seed.js

const mongoose = require('mongoose');
const Book = require('./models/Book');
const data = require('../frontend/public/data/data.json');
const credentials = require('./credentials');
const clusterUserName = credentials.clusterUserName
const clusterPassWord = credentials.clusterPassWord

mongoose.connect(`mongodb+srv://${clusterUserName}:${clusterPassWord}@cluster0.okbdkgb.mongodb.net/?appName=cluster0`)
  .then(async () => {
    console.log('Connecté à MongoDB');
    await Book.deleteMany(); // optionnel : vide la collection
    await Book.insertMany(data);
    console.log('Import terminé');
    process.exit();
  })
  .catch(err => console.error(err));