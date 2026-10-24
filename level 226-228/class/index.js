import express from "express"
import router from "./router/route.js"

let app = express()

let port = 3000

app.use(express.json())

app.use("/api/user", router)

app.listen(port, () => {
    console.log(`server is running on ${port}`)
})

app.get("/about", (req, res) => {
    let msg = { message: "hello my name is luka and ur on my website" }

    res.status(200).send(msg)
})