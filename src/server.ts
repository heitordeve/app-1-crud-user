import express from 'express';
import mongoose from 'mongoose';
const { MongoClient, ServerApiVersion } = require('mongodb');


const app = express();

const uri = "mongodb+srv://user_admin:G82Y3eh6hJzSZWPc@cluster0.cbtqe.mongodb.net/firtapi";
// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});
async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
run().catch(console.dir);
  
app.use(express.json());
app.get('/', (req, res) => {
    res.send("ola");
})

app.listen(3000, () => {
    console.log('Server is listening');
});