const express = require('express')
const wikiRouter = express.Router()

wikiRouter.get('/', (req, res, next)=>{
    res.send('allusers.js')
})

wikiRouter.get('/:id', (req, res, next)=>{
    res.send(' id users.js')
})

wikiRouter.post('/', (req, res, next)=>{
    res.send('posting users.js')
})

wikiRouter.put('/:id', (req, res, next)=>{
    res.send('putting users.js')
})

wikiRouter.delete('/:id', (req, res, next)=>{
    res.send('deleting users.js')
})







module.exports = wikiRouter