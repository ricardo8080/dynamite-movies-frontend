const mongoose = require('mongoose')
const URI = ('mongodb+srv://dbDynamiteAdmin:BHN43T2PKZwpNf2p@cluster0.fjbpb.mongodb.net/dynamitemovies?retryWrites=true&w=majority')

mongoose.connect(URI,{
    useNewUrlParser : true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
}).then(db => console.log('Database connected'))
.catch(err => console.log(err))

module.exports = mongoose