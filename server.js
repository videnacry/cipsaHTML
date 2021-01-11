import 'dotenv/config.js'
import { join } from 'path'
import express from 'express'

const app = express()

app.use(express.static('style'))
app.use('/portfolio', express.static('portfolio'))
app.use('/images', express.static('imagenes'))
app.use('/favicon', express.static('favicon.jpg'))
app.set('view engine', 'ejs')

app.get('/exercise/6', (req, res) => {
    res.sendFile(join(process.cwd(), 'index.html'))
})
app.get('/exercise/7', (req, res) => {
    res.sendFile(join(process.cwd(), 'index.html'))
})
app.get('/exercise/:num', (req, res) => {
    res.render('index', {exercisePath: './exercise' + req.params.num})
})

app.listen(process.env.PORT)