const express = require("express");
const cors = require('cors')

const Food =require('./models/foodModel')

const db = require("./db")

const app = express();

app.use(express.json());

app.use(cors());

const foodRoutes = require('./routes/foodRoutes')

app.use('/api/items/getallitems', foodRoutes)

app.get('/',(req, res)=>{
    res.send("Server working" + port);
});

app.get("/getItems", async (req, res) => {
    try {
        const docs = await Food.find({});
        res.json(docs);
    } catch (err) {
        console.error(err);
        res.status(500).send("Internal Server Error");
    }
});

const port = process.env.PORT || 8000;

app.listen(port, ()=> 'Server running on port');