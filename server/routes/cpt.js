const express = require('express');
//const db = require('../db/conn.js');
const axios = require('axios');
require('dotenv').config()
const {ObjectId} = require('mongodb')
const {MongoClient} = require('mongodb');
const URI = process.env.ATLAS_URI || "";
let client;

const router = express.Router();

// Get a list of 10 codes
router.get("/", async (req, res) => {
  const cursor = req.app.locals.collection;
  let results = await cursor.find({})
    .limit(10)
    .toArray();
  res.send(results).status(200);
});

// search cpt codes
router.get("/search", async (req, res) => {
    const cursor = req.app.locals.collection;
    let query = {};    
    for(var key in req.body){ 
      if (key == 'search') {
        continue;
      } else {
        req.body[key] !== "" ? query[key] = req.body[key] : null;
      }
    }
    let codeList = await (convertToCPT(req.query.search));
    let outputJson = codeList['data']['result']['results']
    const result = [];
    for (var code in outputJson) {
        if (result.length > 10) {
            break;
        }
        let finalQuery = Object.assign({"CPT/HCPCS Code": outputJson[code]['ui']}, query);
        let hit = await cursor.find(finalQuery).toArray();
        for (item in hit) {
          result.push(Object.assign(hit[item], {'name': outputJson[code]['name']}));
        }
    }
    if (!result) res.send("Not found").status(404);
    else res.send(result).status(200);
  });


router.get("/suggest", async (req, res) => {
  let query = {};    
    for(var key in req.body){ 
      if (key == 'search') {
        continue;
      } else {
        req.body[key] !== "" ? query[key] = req.body[key] : null;
      }
    }
  let codeList = await (convertToCPT(req.query.search));
  let result = codeList['data']['result']['results'];
  if (!result) res.send("Not found").status(404);
  else res.send(result).status(200);
});

async function convertToCPT(search) {
    const response = axios({
        method: "get",
        url: 'https://uts-ws.nlm.nih.gov/rest/search/current',
        params: {
            'string': String(search),
            'apiKey': process.env.THES_KEY,
            'sabs': 'CPT',
            'returnIdType':'code'
        },
      });
    return response;
}

module.exports = router;
