// const http = new easyHTTP;

// // const posts = http.get('https://jsonplaceholder.typicode.com/posts', function(error, response){
// //     console.log(response);
// //     if(error) {
// //         console.log(error);
// //     } else {
// //         console.log(response);
// //     }
// // });
// // console.log(posts);

// // const post = http.get('https://jsonplaceholder.typicode.com/posts/1', function(error, response){
// //     console.log(response);
// //     if(error) {
// //         console.log(error);
// //     } else {
// //         console.log(response);
// //     }
// // });

// const data = {
//     title: 'Custom Post', 
//     body: 'This is a custom post'
// };

// // http.post('https://jsonplaceholder.typicode.com/posts', data, function(error, post){
// //     if(error) {
// //         console.log(error);
// //     } else {
// //         console.log(post);
// //     }
// // });

// // http.put('https://jsonplaceholder.typicode.com/posts/1', data, function(error, post) {
// //     if(error) {
// //         console.log(error);
// //     } else {
// //         console.log(post);
// //     }
// // });

// http.delete('https://jsonplaceholder.typicode.com/posts/1', function(error, response){
//     console.log(response);
//     if(error) {
//         console.log(error);
//     } else {
//         console.log(response);
//     }
// });

const http = new EasyHTTP;
// http.get('https://jsonplaceholder.typicode.com/users')
//     .then(data => console.log (data))
//     .catch(err => console.log(err));

const data = {
    name: 'Jane Doe',
    username: 'janedoe',
    email: 'jdoe@gmail.com'
}


// http.post('https://jsonplaceholder.typicode.com/users', data)
//     .then(data => console.log (data))
//     .catch(err => console.log(err));

// http.put('https://jsonplaceholder.typicode.com/users/2', data)
// .then(data => console.log (data))
// .catch(err => console.log(err));

http.delete('https://jsonplaceholder.typicode.com/users/2')
.then(data => console.log (data))
.catch(err => console.log(err));

