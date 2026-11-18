// Tiny static server for local preview: node nexhiro/serve.js  →  http://localhost:4173
const http = require("http"), fs = require("fs"), path = require("path");
http.createServer((req, res) => {
  fs.readFile(path.join(__dirname, "index.html"), (err, data) => {
    if (err) { res.writeHead(500); return res.end("index.html not found"); }
    res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
    res.end(data);
  });
}).listen(4173, () => console.log("NexHiro preview on http://localhost:4173"));
