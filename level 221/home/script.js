const { createServer } = require("http");

const server = createServer((req, res) => {
  if (req.url === "/users") {
    if (req.method === "GET") {
      res.writeHead(200, { "Content-Type": "text/plain" });
      res.end("Successfully fetched users");
    }

    else if (req.method === "POST") {
      res.writeHead(201, { "Content-Type": "text/plain" });
      res.end("Successfully created user");
    }

    else if (req.method === "PUT") {
      res.writeHead(200, { "Content-Type": "text/plain" });
      res.end("Successfully updated user");
    }

    else if (req.method === "DELETE") {
      res.writeHead(200, { "Content-Type": "text/plain" });
      res.end("Successfully deleted user");
    }

    else {
      res.writeHead(405, { "Content-Type": "text/plain" });
      res.end("Method Not Allowed");
    }
  } else {
    res.writeHead(404, { "Content-Type": "text/plain" });
    res.end("Not Found");
  }
})

server.listen(3000, () => {
  console.log("Server is running on port 3000");
})