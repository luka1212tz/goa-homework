let os = require("os");

let server = {
  type: os.type(),
  architecture: os.arch(),
  uptime: os.uptime(),
}

console.log(server)