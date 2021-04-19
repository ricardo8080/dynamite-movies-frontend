const mongoose = require('mongoose')
const URI = ('mongodb://localhost/dynamite-test')

mongoose.connect(URI,{
    useNewUrlParser : true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
}).then(db => console.log('Database connected'))
.catch(err => console.log(err))

module.exports = mongoose