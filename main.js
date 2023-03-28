// function capitalize (world) {
//     if (world.length > 0) {
//         let i = world[0].toUpperCase();
//         let a = world.slice(1);
//         let all = i + a
//         return all
//     }
//     else{
//         return "string ichi bosh"
//     }

// }
// console.log(capitalize("world"));

// function check(health) {
//     if (health > 0) {
//         return "new arr"
//     }
//     else{
//         return "you arr death"
//     }
// }
// console.log(check(-1));

// function isDivideBy (number, a ,b ){
//     if(number % a == 0 && number % b == 0){
//         return "true"
//     }
//     else{
//         return "false"
//     }
// }
// console.log(isDivideBy(12 ,5 ,6));

// function generateRange (min ,max ,step){
//     range = []
//     for (let i = min; i < max; i += step){
//         range.push(i)
//     }
//     return range

// }
// console.log(generateRange(10,20,2));

// function summation (number){
//     let result= 0;
//     for (let i = 0; i <= number; i++) {
//         result += i
//     }
//     return result
// }
// console.log(summation(8));

// function arrayPlusArray (arr1   , arr2 ) {
//     let result = 0
//     arr1.forEach()

// function squareSum(number) {
//   let sum = 0;
//   number.forEach((el) => {
//     sum += el * el;
//   });
//   return sum;
// }
// console.log(squareSum([1,4]));

// function switchItUp (number) {
//     if (number == 1){
//         console.log("one")
//     }
//     else if(number == 2){
//         console.log("two")
//     }
//     else if(number == 3){
//         console.log("three")
//     }
//     else if(number == 4){
//         console.log("four")
//     }
//     else if(number == 5){
//         console.log("five")
//     }
//     else if(number == 6){
//         console.log("six")
//     }
//     else if(number == 7){
//         console.log("seven")
//     }
//     else if(number == 8){
//         console.log("eight")
//     }
//     else if(number == 9){
//         console.log("nine")
//     }
//     else if(number == 10){
//         console.log("ten")
//     }
// }
// switchItUp(5)

// function reverseSeq(number) {
//   let result = [];
//   for(let i = number; i > 0; i--){
//     result.push(i);
//   }
//   return result;
// }
// console.log(reverseSeq(8));

// const p = document.querySelector("p");
// p.forEach((el) => {
//   el.innerHTML += "salom";
// });
// p.style.color = "red";

// const parag = document.querySelectorAll("p");
// parag.forEach((el) => {
//   if (el.innerHTML.includes("succes")) {
//     el.classList.add("success");
//   }
//   else if (el.innerHTML.includes("warning")) {
//     el.classList.add("warning");
//   }
//   else if (el.innerHTML.includes("error")){
//     el.classList.add("error")
//   }
// });

const box = document.querySelector('div')
const img = document.querySelector("img");
const content = document.querySelector(".content")
const wrapper = document.querySelector(".wrapper")
const block = document.querySelector(".block")
const wrap = document.querySelector(".wrap")
const h2 = document.querySelector("h2")
const h1 = document.querySelector("h1")
const p = document.querySelector("p")
const hr = document.querySelector(".hr")
const container = document.querySelector(".container")
const photo = document.querySelector(".photo")
const text = document.querySelector(".text")
const aside = document.querySelector(".aside")
const list = document.querySelector(".list")
container.style.boxShadow = "1px 1px 20px 0.8px black"
container.style.borderRadius = "10px"
container.style.color = "grey"
hr.style.marginTop = "20px"
box.style.margin = "50px auto"
box.style.width = "400px"
box.style.background ="white"
h2.style.fontSize = "16px"
h2.style.fontWeight = "900"
h2.style.marginBottom = "10px"
p.style.margin = "10px 0"
p.style.fontWeight = "600"
wrap.style.padding = "20px"
content.style.display= "flex"
content.style.alignItems = "center"
content.style.marginTop = "20px"
content.style.gap = "50px"
wrapper.style.display= "flex"
wrapper.style.gap = "10px"
wrapper.style.alignItems = "center"
block.style.display= "flex"
block.style.gap = "10px"
block.style.alignItems = "center"
img.style.borderTopRightRadius = "5px"
img.style.borderTopLeftRadius = "5px"
text.style.marginTop = "10px"
text.style.fontWeight = "900"
text.style.fontSize = "12px"
photo.style.borderRadius = "50%"
aside.style.marginTop = "20px"
aside.style.display = "flex"
aside.style.gap = "20px"
aside.style.alignItems = "center"
list.style.fontWeight = "900"
list.style.fontSize = "20px"



