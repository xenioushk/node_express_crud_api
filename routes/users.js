import express from "express"
import { getUsers, createUser, getSingleUser, deleteUser, updateUser } from "../controllers/users.js"

const router = express.Router()

// list all the users.
router.get("/", getUsers)

// Post a new user.

router.post("/", createUser)

// Get single user information.
router.get("/:id", getSingleUser)

// Delete a user.
router.delete("/:id", deleteUser)

// Update a user.
router.patch("/:id", updateUser)

export default router
