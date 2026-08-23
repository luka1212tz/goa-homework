import express from "express"

let app = express()

let port = 3000

app.use(express.json())

app.listen(port, () =>{
    console.log(`server is running on ${port}`)
})

app.get("/about", (req,res) => {
    let msg = {message: "hello my name is luka and ur on my website"}

res.status(200).send(msg)
})


app.post("/about", (req,res) => {
    res.status(200).send(req.body)
})

app.put("/api/:id", (req, res) => {
    let fake_id = 111

    if (req.params.id == fake_id) {
        res.status(202).send(req.body)
    } else {
        res.status(500).send({ message: "error" })
    }
})

app.delete("/api/:id", (req, res) => {
    let fake_id = 222

    if (req.params.id == fake_id) {
        res.status(204).send()
    } else {
        res.status(500).send({ message: "Error of deleting user" })
    }
})