import express from 'express'
import { db } from './configs/dbconfig.js'
import { routes } from './routes/index.js'

db.on('error', console.log.bind(console, 'Error to connect on database.'))
db.once('open', () => console.log('Database connected successfully.'))

export const app = express()
app.use(express.json())

app.use((req, res, next) => {
    res.set("Access-Control-Allow-Origin" , "*"),
    res.set("Access-Control-Allow-Credentials", "true")
    res.set("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept")
    res.set("Access-Control-Allow-Methods", "*")
    next()
})

routes(app)