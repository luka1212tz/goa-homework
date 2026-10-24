import { Router } from "express"
import userRouter from "./user.route.js"

let router = Router()

router.use(userRouter)

export default router