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
        var requestData = '';
        req.on('data', function (data) {
            requestData += data;
        });
        req.on('end', function () {
            var postData = (qs.parse(requestData)).pick;
            console.log(postData);

            if (postData == sesionNumber) {
                console.log("znaleziono szukana liczbe");
                tip = ("=");
            }
            else if (postData > sesionNumber) {
                console.log("szukana liczba jest miejsza");
                tip = ("<")
            }
            else {
                console.log("szukana liczba jest większa");
                tip = (">")
            }
        });
    }
}).listen(8888, '127.0.0.1');
console.log('Server running at http://127.0.0.1:8888/');
