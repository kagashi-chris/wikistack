const express = require('express')
const router = express.Router()
const { addPage }= require('../views/')

router.get('/', async(req, res, next)=>{
    res.send('wiki.js')
})

router.post('/', async(req, res, next)=>{
     const json = await res.json(req.body)
      res.send(json)
})

router.get('/add', async(req, res, next)=>{
    
    res.send(addPage())
})

module.exports = router