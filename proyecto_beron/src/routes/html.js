import { existsSync, readFileSync } from 'fs'
import express from 'express'

const route = express.Router()

route.get('/nav', (req, res) => {
    sendHtml('./proyecto_beron/src/assets/nav.html', res)
})

function sendHtml(path, res) {
    if (existsSync(path)) {
        const html = readFileSync(path, {encoding: 'utf-8'})
        res.status(200).json({
            html
        })
    } else {
        res.status(500).json({
            err: 'nav.html not found in proyecto_beron'
        })
    }
}

export const projectRoute = route