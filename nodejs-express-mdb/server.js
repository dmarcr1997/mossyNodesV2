const express = require("express");
const cors = require("cors");
const app = express();
const { MongoClient } = require("mongodb");
const { environment } = require("./env");

var corsOptions = {
    origin: "http://localhost:4200"
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
app.get("/projects", async (req, res) => {
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
})
app.get("/", async (req, res) => {
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
// set port, listen for requests
const PORT = process.env['PORT'] || 8080;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});