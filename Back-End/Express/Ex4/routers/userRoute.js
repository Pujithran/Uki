import express from "express"
import { create, getAllData } from "../controller/userController.js"

const route = express.Router()
route.post("/create",create)
route.get("/gatAll",getAllData)
export default route;