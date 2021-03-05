import { existsSync, readFileSync } from 'fs'
import express from 'express'

const route = express.Router()

route.get('/nav-exercises', (req, res) => {
    sendHtml('./assets/nav.ejs', res)
})

route.get('/nav', (req, res) => {
    sendHtml('./proyecto_beron/src/assets/nav.html', res)
})

route.get('/footer', (req, res) => {
    sendHtml('./proyecto_beron/src/assets/footer.html', res)
})

route.get('/head', (req, res) => {
    sendHtml('./proyecto_beron/src/assets/head.html', res)
})

route.get('/adSection', (req, res) => {
    sendHtml('./proyecto_beron/src/assets/adSection.html', res)
})

/**
 * Send html from a file as string
 * @param {string} path relative path of the file which content is going to be sent
 * @param {express.res} res variable used to sent a response to client
 */
function sendHtml(path, res) {
    if (existsSync(path)) {
        const html = readFileSync(path, {encoding: 'utf-8'})
        res.status(200).json({
            html
        })
    } else {
        res.status(500).json({
            err: path + ' not found in proyecto_beron'
        })
    }
}

export const projectRoute = route