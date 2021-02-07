import express from 'express'
import { join } from 'path'

const route = express.Router()

route.get('/coexistence', (req, res) => {
    res.sendFile(join(process.cwd(), 'proyecto_beron', 'coexistence.html'))
})
route.get('/contacto', (req, res) => {
    res.sendFile(join(process.cwd(), 'proyecto_beron', 'contacto.html'))
})
route.get('/rest', (req, res) => {
    res.sendFile(join(process.cwd(), 'proyecto_beron', 'rest.html'))
})
route.get('/initiative', (req, res) => {
    res.sendFile(join(process.cwd(), 'proyecto_beron', 'initiative.html'))
})
route.get('/donde_estamos', (req, res) => {
    res.sendFile(join(process.cwd(), 'proyecto_beron', 'dondeEstamos.html'))
})

export const pageRoute = route