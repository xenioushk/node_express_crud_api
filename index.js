import express from "express"
import bodyParser from "body-parser"
import userRoutes from "./routes/users.js"

const app = express()
const PORT = 5000

app.use(bodyParser.json())

//Route.

app.get("/", (req, res) => res.send("Hello From home"))

//Get

app.use("/users", userRoutes)

app.listen(PORT, () => {
  console.log(`Server is running on port http://localhost:${PORT}`)
})
