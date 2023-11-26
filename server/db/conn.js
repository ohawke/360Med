const {MongoClient} = require('mongodb');
require('dotenv').config()
const connectionString = process.env.ATLAS_URI || "";
const client = new MongoClient(connectionString, {useNewUrlParser: true, useUnifiedTopology: true});
let conn;
try {
  conn = await client.connect();
} catch(e) {
  console.error(e);
}

let db = conn.db("med-data");

module.exports = db;