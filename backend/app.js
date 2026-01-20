const express = require('express');
const mongoose = require('mongoose');
const bookRoutes = require('./routes/book');

const app = express();

const credentials = require('./credentials');
const clusterUserName = credentials.clusterUserName
const clusterPassWord = credentials.clusterPassWord

mongoose.connect(`mongodb+srv://${clusterUserName}:${clusterPassWord}@cluster0.okbdkgb.mongodb.net/?appName=cluster0`)
  .then(() => console.log('Connexion à MongoDB réussie !'))
  .catch(() => console.log('Connexion à MongoDB échouée !'));

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
  next();
});

app.use('/api/books', bookRoutes);

module.exports = app;