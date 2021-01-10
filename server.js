import 'dotenv/config.js'
import { join } from 'path'
import express from 'express'

const app = express()

app.use(express.static('style'))
app.set('view engine', 'ejs')

app.get('/exercise/:num', (req, res) => {
    res.render('index', {exercisePath: './exercise' + req.params.num})
})

app.listen(process.env.PORT)