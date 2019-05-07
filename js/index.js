import { posts } from "./posts.js";
import "./blogPost.js";

// window.addEventListener('load', () => {
//     getPosts();
// })

// function getPosts() {
//     const main = document.querySelector('main');

//     posts.forEach(postContent => {
//         const element = document.createElement('blog-post');
//         element.title = postContent.title;
//         element.description = postContent.description;
//         main.appendChild(element)
//     });
// }

const main = document.querySelector("main");
let test = document.getElementById("blog-post");

main.appendChild(test.content);

posts.forEach(element => {});
