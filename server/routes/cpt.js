const express = require('express');
const db = require("../db/conn.mjs");
const {ObjectId} = require('mongodb')

const router = express.Router();

// Get a list of 50 codes
router.get("/", async (req, res) => {
  let collection = await db.collection("cpt");
  let results = await collection.find({})
    .limit(10)
    .toArray();

  res.send(results).status(200);
});

// search cpt codes
router.get("/search", async (req, res) => {
    let collection = await db.collection("cpt");
    let query = {};
    for(var key in req.body){ 
    req.body[key] !== "" ? query[key] = req.body[key] : null;
    }
    let result = await collection.find(query)
        .limit(10)
        .toArray();
  
    if (!result) res.send("Not found").status(404);
    else res.send(result).status(200);
  });

// Get a single code by id
router.get("/:id", async (req, res) => {
  let collection = await db.collection("cpt");
  let query = {_id: ObjectId(req.params.id)};
  let result = await collection.findOne(query);

  if (!result) res.send("Not found").status(404);
  else res.send(result).status(200);
});

export default router;