const express = require("express")
const app = express();


const {MongoClient} = require("mongodb")
const URL = "mongodb://127.0.0.1:27017";

const client = new MongoClient(URL);

port = 5100;

app.listen(port,StartServer);

function StartServer()
{
    console.log("Marvellous server started successfully...");
}


app.get("/",LiveServer);
function LiveServer(req,res)
{
    res.send("Marvellous Server is live now...");
}

async function getConnection()
{
    let result = await client.connect();
    let db = result.db("Marvellous");
    let collection = db.collection("Batches");
    let res = await collection.find({}).toArray();
    console.log(res);
}


getConnection();