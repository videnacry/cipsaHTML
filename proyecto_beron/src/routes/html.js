import { existsSync, readFileSync } from 'fs'
import express from 'express'

const route = express.Router()

route.get('/nav', (req, res) => {
    if (existsSync('./proyecto_beron/src/assets/nav.html')) {
        const html = readFileSync('./proyecto_beron/src/assets/nav.html', {encoding: 'utf-8'})
        res.status(200).json({
            html
        })
    } else {
        res.status(500).json({
            err: 'nav.html not found in proyecto_beron'
        })
    }
})

export const projectRoute = route