const express = require("express");
const app = express();

const PORT = 8080;

app.set("view engine", "ejs");
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.render("index");
});

app.get("/about", (req, res) => {
  res.render("about");
});

app.get("/contact", (req, res) => {
  res.render("contact");
});

app.get("/projects", (req, res) => {
  res.render("projects");
});

app.get("/blog", (req, res) => {
  res.render("blog");
})

app.get("/blog/article1", (req, res) => {
  res.render("articles/article1");
});


app.listen(PORT, () => console.log(`Listening on ${PORT}`));
