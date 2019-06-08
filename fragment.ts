import fs from "fs"
import path from "path";
import express from "express";

const JS_HEADER = { "Content-Type": "application/javascript" };
const port = Number(process.env.PORT) || 5000;

const app = express();

app.get("/", (req, res) => {
  res.writeHead(200, {
    "Content-Type": "text/html",
    Link: '<http://localhost:5000/static/bundle.js>; rel="fragment-script"'
  });
  return res.end('<div id="root"></div>');
});

app.use("/static", express.static(path.join(__dirname, "build")));

app.listen(port, () => {
  console.log("express server running on port:", port);
});
