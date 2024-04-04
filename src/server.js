const express = require("express");
const path = require("path");
const bcrypt = require("bcrypt");
const app = express();
const collection = require("./config")

app.set("view engine", "ejs")
app.use(express.urlencoded({ extended: false }))
// app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static("public"));
app.use(express.json());

app.get('/', (req, res) => {
    res.render("index.ejs");
});

app.get('/login', (req, res) => {
    res.render('login.ejs');
});

app.get('/register', (req, res) => {
    res.render('register.ejs');
})

app.post('/register', async (req, res) =>{
    const data = {
        firstname: req.body.firstName,
        lastname: req.body.lastName,
        username: req.body.username,
        birthday: req.body.birthday,
        gender: req.body.gender,
        email: req.body.email,
        phonenumber: req.body.phonenumber,
        password: req.body.password
    }

    const userdata = await collection.insertMany(data);
    console.log(userdata);

});

app.post('/login', (req, res) =>{
    res.render("login.ejs")
});

const port = process.env.PORT || 8000; //environment variable declaration with process object
app.listen(port, () => {
   console.log(`Listening on port ${port}!!`); 
});