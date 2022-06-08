import express from 'express'
import { FormsRouter } from './forms-routes.js'

export const routes = (app) => {
    app.route('/').get((req, res) => res.status(200).send({api: 'Welcome to the Project-Login API'}))

    app.use(
        express.json(),
        FormsRouter
    )
}