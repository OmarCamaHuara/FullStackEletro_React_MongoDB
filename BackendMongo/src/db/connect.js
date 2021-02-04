const mongoose = require('mongoose');

function connect(){
    mongoose
    .connect("mongodb://localhost/fseletro", {
        useNewUrlParser: true,
        useUnifiedTopology:true,
    })
    .then(() => {
        console.log("OK")
    })
    .catch((error) => {
        console.log(`Error ${error}`)
    })
}
module.exports = connect();