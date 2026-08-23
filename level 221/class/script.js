import { createServer } from "node:http"


let port = 5173
let host = "localhost"

let server = createServer((res,req) => {
     res.statusCode = 200
     res.setHeader("content-type", "text/plain")
     res.end("Hello world")
})

server.listen(port, host, () => {
    console.log(`server is started on port:${port}`)
})