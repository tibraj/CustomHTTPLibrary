function easyHTTP() {
    this.http = new XMLHttpRequest();
}

//HTTP GET REQUEST
easyHTTP.prototype.get = function(url, callback) {
    this.http.open('GET', url, true);
    let self = this;
    this.http.onload = function() {
        if(self.http.status === 200) {
            callback(self.http.responseText);
        }
    }
    this.http.send();
}
//HTTP POST REQUEST
//HTTP PUT REQUEST
//HTTP DELETE REQUEST