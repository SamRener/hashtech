const express = require('express');
const mongoose = require('mongoose');

const app = express();

mongoose.connect('mongodb+srv://admin:21601496@cluster0-kdrqy.mongodb.net/hashtech?retryWrites=true', { useNewUrlParser: true})

app.use(express.json());

app.use(require('./routes'));

app.listen(4945);