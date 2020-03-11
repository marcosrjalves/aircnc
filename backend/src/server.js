const express = require('express');
const routes = require('./routes');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');

const app = express();

mongoose.connect('mongodb://localhost:27017/aircnc', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

// req.query = Acessar query params (url?id=xx&idade=xxx)
// req.params = Acessar route params (url/xx/yy)
// req.body = Acessar o corpo da requisição (post form)

app.use(cors());
app.use(express.json());
app.use('/files', express.static(path.resolve(__dirname, '..', 'uploads')))
app.use(routes);

app.listen(3333);

