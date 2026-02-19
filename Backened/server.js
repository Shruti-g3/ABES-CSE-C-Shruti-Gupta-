const express = require("express");
const cors = require("cors");
const os = require("os");

const app = express();
app.use(cors());

app.get("/platform", (req, res) => {
    res.send(os.platform());
});

app.get("/cpu", (req, res) => {
    res.send(os.arch());
});

app.get("/freememory", (req, res) => {
    res.send((os.freemem() / (1024 * 1024)).toFixed(2) + " MB");
});

app.get("/totalmemory", (req, res) => {
    res.send((os.totalmem() / (1024 * 1024)).toFixed(2) + " MB");
});

app.listen(5000, () => {
    console.log("Server running on port 5000");
});