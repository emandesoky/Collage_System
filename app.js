const express = require('express')
const app = express()
const port = 3000
///for auto refresh
const path = require("path");
const livereload = require("livereload");
const liveReloadServer = livereload.createServer();
liveReloadServer.watch(path.join(__dirname, 'public'));
 
const connectLivereload = require("connect-livereload");
app.use(connectLivereload());
 
liveReloadServer.server.once("connection", () => {
  setTimeout(() => {
    liveReloadServer.refresh("/");
  }, 100);
}); 

app.set('view engine', 'ejs')
app.use(express.static('public'))



//viewsبتعامل كان انا واقف داخل فولدر 
app.get("/", (req, res) => {
    res.render("Home")
});

app.get("/login", (req, res) => {
    res.render("Login")
});
app.get("/student_home", (req, res) => {
    res.render("student_home")
});
app.get("/doctor_home", (req, res) => {
  res.render("doctor_home")
});
app.get("/admin_home", (req, res) => {
  res.render("admin_home")
});
app.get("/upload", (req, res) => {
  res.render("upload")
});
///404 error
app.use((req, res) => {
    res.status(404).send("sorry can't find that!")
});
  




app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`)
})