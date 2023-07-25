import express from 'express';
import routes from './routes';
import mongoose from "mongoose";
require('dotenv').config();

const app = express();

mongoose.connect("mongodb+srv://user_admin:<password>@cluster0.cbtqe.mongodb.net/firtapi")
  .then( () => {
    console.log('Connection to the Atlas Cluster is successful!')
  })
  .catch( (err) => console.error(err));
  
app.use(express.json());
app.use(routes);

app.listen(3000, () => {
    console.log('Server is listening');
});