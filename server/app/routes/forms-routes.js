import express from "express"
import { FormsController } from "../controllers/forms-controller.js"

export const FormsRouter = express.Router()

FormsRouter
    .get('/forms', FormsController.viewForms)
    .post('/forms', FormsController.registerForm)
    .delete('/forms/:id', FormsController.deleteUser)