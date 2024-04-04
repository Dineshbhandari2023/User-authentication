const express = require("express");
const path = require("path");
const app = express();

app.set("view-engine", "ejs")
// app.set('views', __dirname + '/views');
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.render("index.ejs");
});

app.get('/login', (req, res) => {
    res.render('login.ejs');
});

app.get('/register', (req, res) => {
    res.render('register.ejs');
})

app.listen(3000, () => {
    console.log("connected!");
})