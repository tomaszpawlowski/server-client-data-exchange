//generowanie losowej zaokrąglonej
function randomNumberFromRange(min, max) {
    return Math.round(Math.random() * (max - min) + min)
}

var http = require('http');
http.createServer(function (req, res) {
    var sesionNumber = randomNumberFromRange(1, 10000);
    console.log(sesionNumber);
    if (req.method === "GET") {
        console.log("request GET, number:", sesionNumber);
    }
    else if (req.method === "POST") {
        console.log("request POST")
    }
}).listen(8888, '127.0.0.1');
console.log('Server running at http://127.0.0.1:8888/');
