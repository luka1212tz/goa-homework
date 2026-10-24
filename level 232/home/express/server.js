let express = require("express");

let app = express();

app.use(express.json());

app.get("/", (req, res) => {
    res.send("hello world");
});

app.post("/", (req, res) => {
    res.send("post");
});

app.put("/", (req, res) => {
    res.send("put");
});

app.delete("/", (req, res) => {
    res.send("DELETE !");
});

app.listen(3000, () => {
    console.log("Express server running on port 3000");
});