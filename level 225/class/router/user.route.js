import express from "express"
import { getAbout, postAbout } from "../controller/user.contoller"

let router = express.Router()

router.get("/about", getAbout)
router.post("/about", postAbout)

export default router