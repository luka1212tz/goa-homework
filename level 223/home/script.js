const express = require("express")

const app = express()

app.get("/sport", (req, res) => {
    res.send("სპორტული ფილმები")
})

app.get("/documentary", (req, res) => {
    res.send("დოკუმენტური ფილმები")
})

app.get("/science", (req, res) => {
    res.send("სამეცნიერო ფილმები")
})

app.get("/animation", (req, res) => {
    res.send("ანიმაციური ფილმები")
})

app.get("/comedy", (req, res) => {
    res.send("კომედიური ფილმები")
})

app.listen(3000, () => {
    console.log("Server is running on port 3000")
})