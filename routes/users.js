import express from "express"
import { v4 as uuidv4 } from "uuid"
uuidv4() // ⇨ '9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d'

const router = express.Router()

// const users = [
//   {
//     firstName: "John",
//     lastName: "Doe",
//     age: 49,
//   },
//   {
//     firstName: "Jane",
//     lastName: "Doe",
//     age: 29,
//   },
//   {
//     firstName: "Josh",
//     lastName: "Doe",
//     age: 49,
//   },
// ]

let users = []

router.get("/", (req, res) => {
  console.log(users)
  res.send("Hello from get")
})

router.post("/", (req, res) => {
  const user = req.body

  users.push({ ...user, id: uuidv4() })
  console.log(req.body)
  console.log("Post Route Reached")
  res.send(`user with the name ${user.firstName} created!`)
})

//single
router.get("/:id", (req, res) => {
  // console.log(users)

  const params = req.params
  const { id } = params

  const foundUser = users.find((user) => user.id === id)

  res.send(foundUser)
})

// delete.
router.delete("/:id", (req, res) => {
  // console.log(users)

  const params = req.params
  const { id } = params

  users = users.filter((user) => user.id !== id)

  res.send(newUsers)
})

export default router
