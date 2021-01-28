import { existsSync, readFileSync } from 'fs'
import express from 'express'

const route = express.Router()

route.get('/header', (req, res) => {
    if (existsSync('./proyecto_beron/src/assets/header.html')) {
        const html = readFileSync('./proyecto_beron/src/assets/header.html', {encoding: 'utf-8'})
        res.status(200).json({
            html
        })
    } else {
        res.status(500).json({
            err: 'header.html not found in proyecto_beron'
        })
    }
})

export const projectRoute = route