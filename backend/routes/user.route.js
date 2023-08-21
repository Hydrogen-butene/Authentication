import express from "express"
import { test, updateUser } from "../controllers/user.controller.js";
import {verigyToken} from "../utils/verifyUsers.js"

const router = express.Router()

router.get('/', test)
router.post('/update/:id', verigyToken,updateUser)

export default router;