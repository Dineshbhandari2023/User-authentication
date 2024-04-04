const mongoose = require("mongoose");
const connect = mongoose.connect("mongodb://localhost/login-setup");

connect
    .then( () =>{
        console.log("Database connected!");
    })
    .catch( ()=>{
        console.log("Database cannot be connected!");
    })

const schema =  new mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
});

const collection = new mongoose.model("users", schema);


module.exports = collection;