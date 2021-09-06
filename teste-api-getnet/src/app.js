
import 'dotenv/config'

import express from 'express'
import routes from './routes'
import cors from 'cors'

const app = express()

app.use(cors())

app.use(express.json())

const server = require('http').Server(app)


app.use(routes)

export default server