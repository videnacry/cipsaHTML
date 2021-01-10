import 'dotenv/config.js'
import { join } from 'path'
import express from 'express'

const app = express()

app.use(express.static('style'))
app.set('view engine', 'ejs')

app.get('/', (req, res) => {
    res.render('index')
})

app.listen(process.env.PORT)