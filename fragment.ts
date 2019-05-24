import http from "http";
import url from "url";
import fs from "fs";

const server = http.createServer((req: any, res: any) => {
  const pathname = url.parse(req.url).pathname;
  const jsHeader = { "Content-Type": "application/javascript" };

  switch (pathname) {
    case "/public/bundle.js":
      res.writeHead(200, jsHeader);
      return fs.createReadStream("./build/bundle.js").pipe(res);

    case "/public/bundle.js.map":
      res.writeHead(200, jsHeader);
      return fs.createReadStream("./build/bundle.js.map").pipe(res);

    case "/":
    default:
      res.writeHead(200, {
        "Content-Type": "text/html",
        Link: '<http://localhost:5000/public/bundle.js>; rel="fragment-script"'
      });
      return res.end('<div id="root"></div>');
  }
});

const port = process.env.PORT || 5000;

server.listen(port, () => {
  console.log("SPA Fragment Server started at port " + port);
});
