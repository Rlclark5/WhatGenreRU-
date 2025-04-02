console.log("hello");

let answer1 = document.querySelector(".answer1");
console.log(answer1);
let answer2 = document.querySelector(".answer2");
console.log(answer2);
let enter = document.querySelector(".enter");
console.log(enter);
let answer = document.querySelector(".answer");
console.log(answer);


enter.onclick = function(){
    console.log("clicked");
    answer1 = answer1.value;
console.log(answer1);
answer2 = answer2.value;
console.log(answer2);

if(answer1 === "Structured" && answer2 === "Beethoven"){
  answer.innerHTML = "You’re a classicalist. You loved sight reading and stressing 25/8. REFRESH AND TRY AGAIN";
    console.log("one");
} else if(answer1 === "Improvise" && answer2 === "Beethoven"){
    answer.innerHTML = "You prefer jazz music but you have a little structured side. I like that. REFRESH AND TRY AGAIN";
} else if(answer1 === "Structured" && answer2 === "Miles Davis"){
    answer.innerHTML = "You prefer classical music but you have a little funk to ya. I like that. REFRESH AND TRY AGAIN";
} else if(answer1 === "Improvise" && answer2 === "Miles Davis"){
    answer.innerHTML = "You’re into the jazz scenery I see. Let me hear a solo! REFRESH AND TRY AGAIN";
}
};