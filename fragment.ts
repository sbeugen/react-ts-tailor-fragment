import fs from "fs";
import express from "express";

const JS_HEADER = { "Content-Type": "application/javascript" };
const port = Number(process.env.PORT) || 5000;

const app = express();

app.get("/", (req, res) => {
  res.writeHead(200, {
    "Content-Type": "text/html",
    Link: '<http://localhost:5000/public/bundle.js>; rel="fragment-script"'
  });
  return res.end('<div id="root"></div>');
});

app.get("/public/bundle.js", (req, res) => {
  res.writeHead(200, JS_HEADER);
  return fs.createReadStream("./build/bundle.js").pipe(res);
});

app.get("/public/bundle.js.map", (req, res) => {
  res.writeHead(200, JS_HEADER);
  return fs.createReadStream("./build/bundle.js.map").pipe(res);
});

app.listen(port, () => {
  console.log("express server running on port:", port);
});
