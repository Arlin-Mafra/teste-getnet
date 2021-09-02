
import 'dotenv/config'

import express from 'express'
import routes from './routes'
import cors from 'cors'

const app = express()

app.use(cors())

const server = require('http').Server(app)

app.use(express.json())

app.use(routes)

export default server