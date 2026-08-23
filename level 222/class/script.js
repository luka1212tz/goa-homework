import express from "express"

let app = express()

let port = 3000

app.listen(port, () =>{
    console.log(`server is running on ${port}`)
})

app.get("/about", (req,res) => {
    let msg = {message: "hello my name is luka and ur on my website"}

res.status(200).send(msg)
})

