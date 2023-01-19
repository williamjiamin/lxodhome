const express = require('express');
const app = express();
const port = 1234;
const middleware = require('./middleware')
const path = require('path')

const server = app.listen(port, () => console.log("The lexueoude.com's server is running on port :" + port));

app.set("view engine", "pug");
app.set("views", "views");

app.use(express.static(path.join(__dirname, "public")));

// Routes
const loginRoute = require('./routes/loginRoutes');

app.use("/login", loginRoute);

app.get("/", middleware.requireLogin, (req, res, next) => {

    var payload = {
        pageTitle: "LEXUEOUDE Inc."
    }

    res.status(200).render("home", payload);
})