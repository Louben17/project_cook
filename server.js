const express = require("express");
const app = express();
const PORT = process.env.PORT || 5000;
const connectToDatabase = require("./databaze/connect");

const URL = "mongodb+srv://cookbook:Louben17@cluster0.thesr63.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

connectToDatabase(URL);

app.get("/", (request, response) => {
    response.send("hovno");
});

app.listen(PORT, (err) => {
    console.log(`server běží na ${PORT}! `);
});
