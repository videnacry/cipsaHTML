import 'dotenv/config.js'
import { join } from 'path'
import express from 'express'
import { projectRoute } from './proyecto_beron/src/routes/html.js'
import { pageRoute } from './proyecto_beron/src/routes/page.js'

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
app.get('/exercise/10', (req, res) => {
    res.sendFile(join(process.cwd(), 'portfolio', 'index.html'))
})
app.get('/exercise/:num', (req, res) => {
    res.render('index', {exercisePath: './exercise' + req.params.num})
})

app.use('/images', express.static('proyecto_beron/images'))
app.use('/mp3', express.static('proyecto_beron/mp3'))

app.get('/', (req, res) => {
    res.sendFile(join(process.cwd(), 'proyecto_beron', 'index.html'))
})
app.get('/index.html', (req, res) => {
    res.sendFile(join(process.cwd(), 'proyecto_beron', 'index.html'))
})

app.use('/project', projectRoute)
app.use('/', pageRoute)


app.listen(process.env.PORT)