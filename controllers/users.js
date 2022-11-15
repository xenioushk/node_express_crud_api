import { v4 as uuidv4 } from "uuid"

let users = []

export const getUsers = (req, res) => {
  console.log(users)
  res.send("Display all the users.")
}

export const createUser = (req, res) => {
  const user = req.body

  users.push({ ...user, id: uuidv4() })
  console.log(req.body)
  console.log("Create a new user.")
  res.send(`User with the name ${user.firstName} created!`)
}

export const getSingleUser = (req, res) => {
  // console.log(users)
  console.log("Display single user information.")
  const params = req.params
  const { id } = params

  const foundUser = users.find((user) => user.id === id)

  res.send(foundUser)
}

export const deleteUser = (req, res) => {
  // console.log(users)
  console.log("Delete a single user.")
  const params = req.params
  const { id } = params

  users = users.filter((user) => user.id !== id)

  res.send(`User with the id ${id} deleted from the database!`)
}

export const updateUser = (req, res) => {
  // console.log(users)
  console.log("Update single user information.")
  const params = req.params
  const { id } = params
  const { firstName, lastName, age } = req.body

  const user = users.find((user) => user.id === id)

  if (firstName) user.firstName = firstName
  if (lastName) user.lastName = lastName
  if (age) user.age = age

  res.send(`User with the id ${id} updated to the database!`)
}
