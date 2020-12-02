const express = require("express");
const app = express();
const _httpErrorPages = require("http-error-pages");
const port = process.env.PORT || 3000;

app.set("view-engine", "ejs");
app.use(express.static(__dirname + "/views"));

app.get("/", (req, res) => {
    res.render("index.ejs")
})

_httpErrorPages.express(app, {
  lang: "en_US",
});

app.listen(port, function () {
  console.log(`Corona-Online listen at ${port} port`);
});
