console.log("hello");

let age = document.querySelector(".age");
console.log(age);
let dog = document.querySelector(".dog");
console.log(dog);
let quiz = document.querySelector("quiz");
console.log(quiz);
let = age = Number(age.value);
console.log(age);
let = dog = dog.value;
console.log(dog);

quiz.onclick = function(){
    console.log("clicked");
};

if(age === "7" && dog === "pup"){
    console.log("shaggy");
} else if(age === "" && dog === ""){
    console.log("shaggy")
}