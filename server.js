const express= require('express');
const mongoose=require('mongoose');
const bodyParser=require('body-parser');
const router = express.Router();

mongoose.connect('mongodb://localhost/meeting');
const app= express();

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

const port = 4000;

require('./routes')(app, {});
app.listen(port, () => {
  console.log('We are live on ' + port);
});