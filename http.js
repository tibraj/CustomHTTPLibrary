// function easyHTTP() {
//     this.http = new XMLHttpRequest();
// }

// //HTTP GET REQUEST
// easyHTTP.prototype.get = function(url, callback) {
//     this.http.open('GET', url, true);
//     let self = this;
//     this.http.onload = function() {
//         if(self.http.status === 200) {
//             callback(null, self.http.responseText);
//         } else {
//             callback('Error: ' + self.http.status);
//         }
//     }
//     this.http.send();
// }
// //HTTP POST REQUEST
// easyHTTP.prototype.post = function(url, data, callback) {
//     this.http.open('POST', url, true);
//     this.http.setRequestHeader('Content-type', 'application/json');
//     let self = this;
//     this.http.onload = function() {
//         callback(null, self.http.responseText);
//     }
//     this.http.send(JSON.stringify(data));
// }
// //HTTP PUT REQUEST
// easyHTTP.prototype.put = function(url, data, callback) {
//     this.http.open('PUT', url, true);
//     this.http.setRequestHeader('Content-type', 'application/json');
//     let self = this;
//     this.http.onload = function() {
//         callback(null, self.http.responseText);
//     }
//     this.http.send(JSON.stringify(data));
// }
// //HTTP DELETE REQUEST
// easyHTTP.prototype.delete = function(url, callback) {
//     this.http.open('DELETE', url, true);
//     let self = this;
//     this.http.onload = function() {
//         if(self.http.status === 200) {
//             callback(null, 'Post Deleted');
//         } else {
//             callback('Error: ' + self.http.status);
//         }
//     }
//     this.http.send();
// }

class EasyHTTP {
    async get(url) {
        const response = await fetch(url);
        const resData = await response.json();
        return resData
    }

    post(url, data) {
        return new Promise((resolve, reject) => {
            fetch(url, {
                method: 'POST',
                headers: {
                    'Content-type': 'application/json'
                },
                body: JSON.stringify(data)
            })
            .then(res => res.json())
            .then(data => resolve(data))
            .catch(err => reject(err));
        });
    }

    put(url, data) {
        return new Promise((resolve, reject) => {
            fetch(url, {
                method: 'PUT',
                headers: {
                    'Content-type': 'application/json'
                },
                body: JSON.stringify(data)
            })
            .then(res => res.json())
            .then(data => resolve(data))
            .catch(err => reject(err));
        });
    }

    delete(url) {
        return new Promise((resolve, reject) => {
            fetch(url, {
                method: 'DELETE',
                headers: {
                    'Content-type': 'application/json'
                }
            })
            .then(res => res.json())
            .then(() => resolve('Resource Deleted'))
            .catch(err => reject(err));
        });
    }

    
}