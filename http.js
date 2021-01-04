function easyHTTP() {
    this.http = new XMLHttpRequest();
}

//HTTP GET REQUEST
easyHTTP.prototype.get = function(url) {
    this.http.open('GET', url, true);
    this.http.onload = function() {
        if(this.http.status === 200) {
            console.log(this.http.responseText)
        }
    }
    this.http.send();
}
//HTTP POST REQUEST
//HTTP PUT REQUEST
//HTTP DELETE REQUEST