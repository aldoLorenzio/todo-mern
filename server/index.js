require("dotenv").config();
const express = require('express');
const { connectToMongoDB } = require("./database")
const app = express();
const cors = require('cors');

const router = require('./routes')
app.use(cors())
app.use(express.json());

app.use("/api", router);

const port = process.env.PORT || 4000;

async function startServer() {
    await connectToMongoDB();
    app.listen(port, () => {
        console.log(`Server is listening on http://localhost:${port}`)
    })
}

startServer();
