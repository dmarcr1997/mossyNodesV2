const express = require("express");
const cors = require("cors");
const app = express();
const axios = require("axios");
const router = express.Router();
const { MongoClient } = require("mongodb");
const { environment } = require("./env.js");

const uri = `${environment.URL}`;
//@ts-ignore
const client = new MongoClient(uri);

app.use(cors());
// parse requests of content-type - application/json
app.use(express.json());
// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

router.get("/projects", async (req, res) => {
    const DATABASE = "Portfolio";
    const COLLECTION = "Projects";
    let projects = await retrieveFromDB(DATABASE, COLLECTION);
    
    res.json({ data: projects });
});

router.get("/coursework", async (req, res) => {
    const DATABASE = "Portfolio";
    const COLLECTION = "Coursework";
    let coursework = await retrieveFromDB(DATABASE, COLLECTION);
    
    res.json({ data: coursework });
});

router.get("/", async (req, res) => {
    const DATABASE = "Portfolio";
    const COLLECTION = "Content";
    let content = await retrieveFromDB(DATABASE, COLLECTION);
    
    res.json({ data: content });
});

router.post("/contact", (req, res) => {
    const { email, name, message } = req.body;
    try{
        return axios.post(environment.mailThisTo, {
            email: email,
            subject: `${name} - Contact Request`,
            message: message
        }).then(function () {
            res.status(200).json({ success: true });
        });
    } catch (err) {
        console.error(err.message);
        res.status(500).json({ error: err.message });
    }
});

app.use("/", router);

// set port, listen for requests
const PORT = process.env['PORT'] || 8080;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});

async function retrieveFromDB(DB, COLL) {
    try{
        await client.connect();
        await client.db(DB).command({ ping: 1 });
        console.log("Connected to database server");
        const collection = client.db(DB).collection(COLL);
        // perform actions on the collection object
        return collection.find({}).toArray();
    } catch(error) {
        console.log("Error: " + JSON.stringify(error));
        throw new Error("Issue Collecting Content: ", error.message);
    }
}