const mongoose = require('mongoose')
const {Schema} = mongoose
const movieSchema = new Schema({
    nameMovie:{type: String, require :true},
    director:{type: String, require :true},
    releaseDate:{type: Date, default: Date.now},
    country:{type: String, require :true},
    description:{type: String, require :true},
    reference:{type: String, require :true},
    gender:{type: [String], require :true},
    ageRestriction:{type: Number},
    principalImage:{type: String, require :true},
    listOfPïctures:{type: [String], require :true}
})

module.exports = mongoose.model('dynamite-test-movie', movieSchema)


