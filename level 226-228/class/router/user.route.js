import { Router } from "express"
import { getUser, postUser, putUser, deleteUser } from "../controller/user.controller.js"

const router = Router()

router.get("/", getUser)
router.post("/", postUser)
router.put("/:id", putUser)
router.delete("/:id", deleteUser)

export default router