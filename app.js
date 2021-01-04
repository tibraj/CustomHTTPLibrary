const http = new easyHTTP;

const posts = http.get('https://jsonplaceholder.typicode.com/posts', function(response){
    console.log(response);
});
console.log(posts);