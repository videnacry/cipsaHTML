import 'dotenv/config.js'
import { join } from 'path'
import express from 'express'

const app = express()

app.use(express.static('style'))

app.get('/', (req, res) => {
    res.sendFile(join(process.cwd(), 'index.html'))
})

app.listen(process.env.PORT)