import express from "express";
import { dirname } from "path";
import { fileURLToPath } from "url";
import expressHbs from "express-handlebars";
import "dotenv/config";

const port = process.env.PORT || 3000;
const host = process.env.HOST || "💻 localhost"

const app = express();

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Set up template engine
app.engine(
  "hbs",
  expressHbs.engine({
    layoutsDir: "views/layouts",
    partialsDir: "views/partials",
    extname: "hbs",
    defaultLayout: "main-layout",
    runtimeOptions: {
      allowProtoPropertiesByDefault: true,
      // allowProtoMethodsByDefault: true
    },
  })
);
app.set("view engine", "hbs");

app.get("/", (req, res) => {
  res.render("index", {});
});

app.get("/test", (req, res) => {
  res.json({
    status: "✅ Online",
    from: host,
    message: "Hello World. GDSC is a club for developers",
    "time-stamp": new Date().toISOString(),
    message: "Hello World. GDSC is a club for developers",
  });
});

app.get("/about", (req, res) => {
  res.send(`
    <h1>About page</h1>
    <p>This is a simple about page</p>
    <br>
    <h3>Made purely for learning purposes</h3>
    <p>For collaboration and more</p>
  `);
});

app.get("/meo", (req, res) => {
  res.send(`
    <h1>Meo page</h1>
    
    <p>This is a simple meo page</p>
    <img src='https://avatars.githubusercontent.com/u/84757707?v=4'/>
  `);
});

// code goes here

app.get("/ntploc21", (req, res) => {
    res.send(`
    <h1>ntploc21</h1>
    
    <p>This is a simple ntploc21 page</p>
    <img src='https://avatars.githubusercontent.com/u/84757707?v=4'/>
  `);
});

app.get("/khang", (req, res) => {
  res.send(`
    <h1>Khang page</h1>
    
    <p>This is NOT a simple meo page</p>
    <img src='https://avatars.githubusercontent.com/u/84757707?v=4'/>
  `);
});

app.get("/some", (req, res) => {
  res.send(`
    <h1>Some page</h1>
    
    <p>This is a simple some page</p>
    <img src='https://avatars.githubusercontent.com/u/84757707?v=4'/>
  `);
});

app.get("/thing", (req, res) => {
  res.send(`
    <h1>Thing page</h1>
    
    <p>A simple page change</p>
    <img src='https://avatars.githubusercontent.com/u/84757707?v=4'/>
  `);
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
