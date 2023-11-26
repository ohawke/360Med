const express = require('express');
const cors = require('cors');
require('dotenv').config()
const cpt = require("./routes/cpt.js");

const PORT = process.env.PORT || 8080;
const app = express();

app.use(cors());
app.use(express.json());

app.use("/cpt", cpt)

app.listen(PORT, () => {
    console.log('server started on port ' + PORT);
})