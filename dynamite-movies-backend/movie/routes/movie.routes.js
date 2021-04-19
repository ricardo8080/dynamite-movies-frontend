const express = require('express')
const router = express.Router()
const MovieCtrl = require('../../movie/controllers/movie.controller')

router.get('/dynamite-test-movie', PersonCtrl.getList)
module.exports = router