const http = new easyHTTP;

const posts = http.get('https://jsonplaceholder.typicode.com/posts', function(error, response){
    console.log(response);
    if(error) {
        console.log(error);
    } else {
        console.log(response);
    }
});
console.log(posts);