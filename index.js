const express = require("express");
const path = require("path");
const app = express();

let port = 2005;

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.static(path.join(__dirname, "public")));

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
})

app.get("/pranavkharote", (req, res) => {
    res.render("portfolio.ejs");
})