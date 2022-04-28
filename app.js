const express = require("express");
const morgan = require("morgan");
const { db, Page, User } = require('./models');


const app = express();

app.use(morgan("dev"));

// parses url-encoded bodies
app.use(express.urlencoded({ extended: false }));

// parses json bodies
app.use(express.json());

app.use(express.static(__dirname + "/public"));

app.get("/", (req, res) => {
  res.send(`<html>
    <head>
      <link href="./stylesheets/style.css" rel="stylesheet">
    </head>
      <body>
        <h1>Hope Page</h1>
      </body>
    <html>`);
});

const PORT = 3000;

const init = async () => {
  await db.sync({force: true})
//

app.listen(PORT, () => {
  console.log("Listening to port: ", PORT);
});
};

init();


db.authenticate()
  .then(() => {
    console.log('connected to the database');
  })
