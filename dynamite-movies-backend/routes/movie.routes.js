const express = require('express')
const router = express.Router()
const MovieCtrl = require('../controllers/movie.controller')

router.get('/Main-Page/Last-Seen', MovieCtrl.getLastSeenMovies)
router.get('/Main-Page/Trends', MovieCtrl.getMovieTrends)
router.get('/Search-Results/Simple-Search', MovieCtrl.getSearchMovieList)
router.get('/Search-Results/Filter', MovieCtrl.getSearchFliteredMovieList)
module.exports = router