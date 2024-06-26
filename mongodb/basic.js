const { MongoClient } = require("mongodb");

const murl = "mongodb://localhost:27017/Customers";

const client = new MongoClient(murl);
makeConnection();

async function makeConnection() {
    try {
        client.connect();
        console.log("Client ready");
        await getBooks();
    } catch {
        console.log("Failed to connect");
    } finally {
        console.log("Database closed")
        await client.close();
    }
}

async function getBooks() {
    try {
        const db = client.db("Customers");
        const bookscol = db.collection("books");
        const books = await bookscol.find().toArray();
        console.log("Books:"+JSON.stringify(books))
    } catch {
        console.log("Error fetching data");
    } finally {
        console.log("Returned data");
    }
}