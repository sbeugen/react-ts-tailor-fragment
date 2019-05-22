import http from "http";
import url from "url";
import fs from "fs";

const server = http.createServer((req: any, res: any) => {
  const pathname = url.parse(req.url).pathname;
  const jsHeader = { "Content-Type": "application/javascript" };
  if (pathname === "/public/bundle.js") {
    res.writeHead(200, jsHeader);
    return fs.createReadStream("./build/bundle.js").pipe(res);
  } else {
    res.statusCode = 404;
    return res.end("Not Found");
  }
});

server.listen(5000, () => {
  console.log("SPA Fragment Server started at 5000");
});
