const http = require("http");
const url = require("url");
const fs = require("fs");

const server = http.createServer((req: any, res: any) => {
  const pathname = url.parse(req.url).pathname;
  const jsHeader = { "Content-Type": "application/javascript" };
  if (pathname === "/public/bundle.js") {
	  res.writeHead(200, jsHeader);
	  return fs.createReadStream("./build/bundle.js").pipe(res);
  } else {
	  res.writeHead(200, {
		"Content-Type": "text/html",
		Link: '<http://localhost:5000/public/bundle.js>; rel="fragment-script"'
	  });
	  return res.end("");
  }
});

server.listen(5000, () => {
  console.log("SPA Fragment Server started at 5000");
});
