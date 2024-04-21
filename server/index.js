// import './global.css';
const express = require('express');
const cors = require('cors');
require('dotenv').config()
const cpt = require("./routes/cpt.js");
const {MongoClient} = require('mongodb');
const URI = process.env.ATLAS_URI || "";

const PORT = process.env.PORT || 5050;
const app = express();

MongoClient.connect(URI)
.then(client =>{
  const db = client.db('med-data');
  const collection = db.collection('cpt');
  app.locals.collection = collection;
});

app.use(cors());
app.use(express.json());

app.use("/cpt", cpt);

app.listen(PORT, () => {
    console.log('server started on port ' + PORT);
})