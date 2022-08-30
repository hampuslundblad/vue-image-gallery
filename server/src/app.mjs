import express from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'
import morgan from 'morgan'
import router from './routes.mjs'
const app = express()

import config from './config/config.js'
app.use(morgan('combined'))
app.use(bodyParser.json())
app.use(cors())
app.use('/', router)
app.listen(config.port);
console.log(`Server started, ${config.port}`)