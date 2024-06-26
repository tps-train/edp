const { MongoClient } = require("mongodb");
const express = require('express');

let logger = function(req,res, next) {
    console.log("Received request %s",req.url);
    next();
}

const app = express();
app.use(express.json());
app.use(logger);

const murl = "mongodb://localhost:27017/Customers";

const client = new MongoClient(murl);

async function makeConnection() {
    try {
        client.connect();
        console.log("Client ready");
        const bookData = await getBooks();
        console.log(bookData);
        return (bookData);
    } catch {
        console.log("Failed to connect");
    } finally {
        await client.close();
        console.log("Database closed")
    }
}

async function getBooks() {
    try {
        const db = client.db("Customers");
        const bookscol = db.collection("books");
        const books = await bookscol.find().toArray();
        console.log("Books:"+JSON.stringify(books));
        return (JSON.stringify(books));
    } catch {
        console.log("Error fetching data");
    } finally {
        console.log("Returned data");
    }
}

app.use("/getBooks", async (req,res) => {
    const bookData= await makeConnection();
    console.log("Data : "+bookData);
    res.setHeader('Content-Type', 'application/json');
    res.send(bookData);
});

app.listen(3000);