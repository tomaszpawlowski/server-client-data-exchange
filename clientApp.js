var url = "http://127.0.0.1:8888/";

//twardo żeby srpawdzić czy server rozumie
var params = "pick=5000";

var xhttp = new XMLHttpRequest();
xhttp.open("POST", url, true);
xhttp.onreadystatechange = function () {
    if (xhttp.readyState === XMLHttpRequest.DONE) {
        if (xhttp.status === 200) {
            console.log(xhttp.responseText);
        } else {
            console.log(xhttp.responseText);
        }
    }
};
xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
xhttp.send(params);

//po spełnionym wykonaniu posta który "strzela pick" w 1/2 szerokości zakresu

