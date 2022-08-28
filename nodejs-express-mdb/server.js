const express = require("express");
const cors = require("cors");
const app = express();
const axios = require("axios");
const router = express.Router();
const { MongoClient } = require("mongodb");
const { environment } = require("./env");

var corsOptions = {
    origin: "http://localhost:4200",
    
};

const uri = `${environment.URL}`;
//@ts-ignore
const client = new MongoClient(uri);

app.use(cors(corsOptions));
// parse requests of content-type - application/json
app.use(express.json());
// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));
// simple route
app.use(function(req,res,next){
    res.setHeader( 'Access-Control-Allow-Headers', 'Accept,Accept-Language,Content-Language,Content-Type');
    res.setHeader('Access-Control-Allow-Origin','http://localhost:4200');
    res.setHeader('Access-Control-Allow-Methods','http://localhost:4200','POST', 'GET');
    res.setHeader('Access-Control-Allow-Credentials','http://localhost:4200', true);
    next();
})

router.get("/projects", async (req, res) => {
    const DATABASE = "Portfolio";
    const COLLECTION = "Projects";
    let content = [];
    try{
        await client.connect();
        await client.db(DATABASE).command({ ping: 1 });
        console.log("Connected to database server");
        const collection = client.db(DATABASE).collection(COLLECTION);
        // perform actions on the collection object
        content = await collection.find({}).toArray();
    } catch(error) {
        throw new Error("Issue Collecting Content: ", error.message);
    } finally {
        client.close();
    }
    res.json({ data: content });
});
router.get("/coursework", async (req, res) => {
    const DATABASE = "Portfolio";
    const COLLECTION = "Coursework";
    let content = [];
    try{
        await client.connect();
        await client.db(DATABASE).command({ ping: 1 });
        console.log("Connected to database server");
        const collection = client.db(DATABASE).collection(COLLECTION);
        // perform actions on the collection object
        content = await collection.find({}).toArray();
    } catch(error) {
        throw new Error("Issue Collecting Content: ", error.message);
    } finally {
        client.close();
    }
    res.json({ data: content });
})
router.get("/", async (req, res) => {
    const DATABASE = "Portfolio";
    const COLLECTION = "Content";
    let content = [];
    try{
        await client.connect();
        await client.db(DATABASE).command({ ping: 1 });
        console.log("Connected to database server");
        const collection = client.db(DATABASE).collection(COLLECTION);
        // perform actions on the collection object
        content = await collection.find({}).toArray();
    } catch(error) {
        throw new Error("Issue Collecting Content: ", error.message);
    } finally {
        client.close();
    }
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
})

app.use("/", router);

// set port, listen for requests
const PORT = process.env['PORT'] || 8080;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});