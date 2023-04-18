const http = require("http")

http.createServer((req, res) => {
    res.writeHead(200, {'Contact.Type': 'text/html; charset-utf-8'});
    res.write("<h1>Hello Node!</h1>")
    res.end("<p>이곳은 node 서버입니다.</p>")
}).listen(2000, () => {
    console.log("서버 대기 중... port:2000")
})