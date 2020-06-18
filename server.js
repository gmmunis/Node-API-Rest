const express = require('express');
const mongoose = require("mongoose");
const requireDir = require("require-dir");

//iniciando o app
const app = express();

//iniciando o db
//mongoose.connect("mongodb://localhost:27017/nodeapi", { useNewUrlParser: true });
mongoose.connect("mongodb://localhost:27017/nodepai", {useNewUrlParser: true, useUnifiedTopology: true});

requireDir('./src/models');

const Product = mongoose.model('Product');

//primeira rota
app.get('/', (req, res) => {
  Product.create({
    title: 'ReactNative',
    description: 'Build native apps with React',
    url: 'http://github.com/facebook/react-native'
  });
  
  return res.send('Hello!!');
});

app.listen(3001);