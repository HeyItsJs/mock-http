const config = require("./config")
const express = require('express')
const app = express()
app.use(express.json())

const port = config.port

config.routes.forEach(({ path, method, statusCode, response }) => {
  switch (method) {
    case "GET":
      app.get(path, (req, res) => res.status(statusCode).json(response))
      break;
    case "POST":
      app.post(path, (req, res) => res.status(statusCode).json(response))
      break;
    case "PUT":
      app.put(path, (req, res) => res.status(statusCode).json(response))
      break;
    case "DELETE":
      app.delete(path, (req, res) => res.status(statusCode).json(response))
      break;
  }
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))