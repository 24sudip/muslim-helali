//
// const btn = document.querySelector("button");
// btn.addEventListener("click", function () {
//   document.body.style.backgroundColor = "olivedrab";
//   console.log('Hello World');
// });

// let city = new String('london');
// console.log(city);
// let movie = 'memento';
// console.log(movie);
// console.log(movie.toUpperCase());
// let movieTwo = 'MemEnTo';
// console.log(movieTwo);
// console.log(movieTwo.toLowerCase());
// let firstName = 'Tony';
// let lastName = 'Rogers';
// console.log(firstName + lastName);
// console.log(firstName + " " + lastName);
// console.log(firstName.length);
// console.log(`${firstName} ${lastName}`);
// console.log(lastName.length);

// let pet = "Birdy the bird";
// console.log(pet);
// console.log(pet[2]);
// console.log(pet[4]);
// console.log(pet[pet.length - 1]);
// console.log(pet[pet.length - 3]);
// let song = "    shallow    ";
// console.log(song);
// console.log(song.trim());
// console.log(pet.indexOf("y"));
// console.log(pet.charAt("4"));
// console.log(pet.slice(4));
// console.log(pet.slice(4, 10));
// console.log(pet.split(" "));
// console.log(pet.includes("@"));
// console.log(pet.replace("the", "a"));

// console.log(1 == '1');
// console.log(0 == '');
// let score = 10;
// score === 10 ? console.log('Grade A') : console.log('Grade B');
// let age = 28;
// if (age >= 1 && age <= 12) {
//     console.log('minor');
// } else if (age >= 13 && age <= 19) {
//     console.log('teenager');
// } else {
//     console.log('Adult');
// }

// let numbers = [1, 2, 3, 4, 5];
// numbers[4] = 25;
// console.log(numbers);
// let mixed = ['yellow', 45, null, undefined, NaN, true];
// console.log(mixed);
// mixed[mixed.length] = 'Gaming';
// console.log(mixed);

// let movies = ['The Lake House', 'Memento'];
// console.log(movies);

// shift removes from the start
// movies.shift();
// console.log(movies);

// unshift adds to the start
// movies.unshift('The Great Gatsby');
// console.log(movies);

// pop removes from the end
// movies.pop();
// console.log(movies);

// push adds to the end
// movies.push('Departed');
// console.log(movies);

// let numbersTwo = [1, 2, 3, 4, 54, 115, 789, 324];
// console.log(numbersTwo);

// slice(starting index, ending index)
// let num1 = numbersTwo.slice(1, 4);
// console.log(num1);
// let num2 = numbersTwo.slice(-4);
// console.log(num2);

// splice(starting index, number of items to be removed)

// removing
// let num3 = numbersTwo.splice(1, 4);
// console.log(num3);
// console.log(numbersTwo);

// removing and replacing
// let num4 = numbersTwo.splice(0, 2, 111, 222);
// console.log(num4);
// console.log(numbersTwo);

// adding
// let num5 = numbersTwo.splice(2, 0, 111, 222);
// console.log(num5);
// console.log(numbersTwo);

// const moods = ['happy', 'sad', 'satisfied'];
// console.log(moods.includes("happy"));
// console.log(moods.includes("frustrated"));

// const moodsTwo = ["frustrated", 'uncertain', 'relaxed'];
// console.log(moods.concat(moodsTwo));
// console.log(moodsTwo.concat(moods));

// console.log(moods.reverse());

// console.log(moodsTwo.join());
// console.log(moodsTwo.join(''));
// console.log(moodsTwo.join(' '));
// console.log(moodsTwo.join('-'));

// Nesting array of arrays
// const favorites = [
//     ['Endgame', 'Infinity War', 'Civil War', 'Iron-man', 'Thor'],
//     ['Batman', 'Superman', 'Wonder Woman'],
//     ['Spiderman', 'Antman', 'Hulk', 'Hawkeye'],
//     ['Nolan', 'Snyder', 'Reeves'],
//     ['DeCaprio', 'Hardy', 'Toby', 'Andrew']
// ];
// console.log(favorites);
// console.log(favorites[1]);
// console.log(favorites[4][0]);
// console.log(`${favorites[3][2]} is directing the new ${favorites[1][0]} movie`);

// const address = {
//     country: 'Turkey',
//     city: 'Istanbul'
// };
// console.log(address);
// console.log(address.city, 'is very beautiful');
// console.log(`${address.country} has an astounding scenery`);

// const person = {
//     name: 'Sam',
//     age: 31,
//     'Full Address': 'Athens, Greece',
//     job: 'Captain America',
//     1985: 'DoB'
// };
// console.log(person);
// console.log(person["age"]);
// console.log(person["1985"]);
// console.log(person["Full Address"]);

// const movieRatings = {
//     Deadpool: 9.1,
//     'X-men Days of Future Past': 7.9,
//     'Thor Ragnarok': 9.4,
//     'Wonder Woman': 9,
//     Superman:9
// };
// movieRatings["Deadpool"] = 9.3;
// movieRatings["Superman"] = 8.5;
// console.log(movieRatings);
// movieRatings['The Winter Soldier'] = 9.8;
// movieRatings['Justice League Apocalypse'] = 9.2;
// console.log(movieRatings);

// const user = {
//     thunderBolt37: {
//         name: 'Ross',
//         job: 'Classified'
//     },
//     payGrade: 'A',
//     hobbies: ['golf', 'walk', 'give out orders']
// };
// console.log(user);
// console.log(user["thunderBolt37"]);
// console.log(user["thunderBolt37"].name);
// console.log(user["thunderBolt37"]["job"]);
// console.log(user["hobbies"]);
// console.log(user["hobbies"][0]);

// const userTwo = [
//     {
//         name: 'Tony',
//         job: 'complicated'
//     },
//     'compassionate',
//     ['making suits', 'destroying suits']
// ];
// console.log(userTwo);
// console.log(userTwo[0]);
// console.log(userTwo[0]["job"]);
// console.log(`${userTwo[0]["job"]} is Tony's job`);

// const numbers = [25, 65, 95, 45, 135];
// for (let e = 0; e < numbers.length; e++) {
//     console.log(e, numbers[e]);
// }

// const favoriteBooks = [
//   {
//     bookName: "The Kite Runner",
//     author: "Khaled Hosseini",
//   },
//   {
//     bookName: "The Theory of Everything",
//     author: "Steven Hawking",
//   },
//   {
//     bookName: "Moby Dick",
//     author: "Herman Melville",
//   },
// ];
// for (let i = 0; i < favoriteBooks.length; i++) {
//     console.log(i, favoriteBooks[i]);
// }

// const colors = ['red', 'green', 'blue'];
// let i = 0;
// while (i < colors.length) {
//     console.log(i, colors[i]);
//     i++;
// }

// function myFunction() {
//     console.log('I am a function');
// }
// myFunction();
// function message() {
//     let red = '#ff0000';
//     console.log(`The hex value of the red color is ${red}`);
// }
// message();
// function color(hex) {
//     console.log(hex);
// }
// color('#ff1100');
// function calcNums(x) {
//     console.log(((x + 1) * x) / (x + 10));
// }
// calcNums(4);

// function addNums(x, y) {
//     console.log(x + y);
// }
// addNums(5, 2);
// function moviePerf(movieName, boxOffice) {
//     console.log(`The ${movieName} has grossed $${boxOffice} billion`);
// }
// moviePerf('Jurassic Park', 1.8);
// function sum(a, b) {
//     return a + b;
// }
// // console.log(sum(10, 12));
// let sumNums = sum(10, 12);
// console.log(sumNums);
// function checkScore(currentScore, passingScore) {
//     if (currentScore >= passingScore) {
//         return 'Passed';
//     } else {
//         return 'Failed';
//     }
// }
// console.log(checkScore(85, 55));
// function checkScore(currentScore, passingScore) {
//   if (currentScore >= passingScore) {
//     return "Passed";
//   }
//   return "Failed";
// }
// console.log(checkScore(45, 55));
// console.log(checkScore(65, 55));

// function myFunction() {
//     let myName = 'Muslim';
//     console.log(myName);
// }
// myFunction();
// console.log(myName);

// function myFunction() {
//   const myName = "Muslim";
//   console.log(myName);
// }
// myFunction();
// console.log(myName);

// function myFunction() {
//   var myName = "Muslim";
//   console.log(myName);
// }
// myFunction();
// console.log(myName);

// if (2 > 1 && 1 < 3) {
//     let resultOne = true;
//     const resultTwo = false;
//     console.log(resultOne, resultTwo);
// }
// // console.log(resultOne);
// console.log(resultTwo);

// var resultThree = 15;
// if (2 > 1 && 1 < 3) {
//     var resultThree = true;
// }
// console.log(resultThree);

// let resultThree = 15;
// if (2 > 1 && 1 < 3) {
//   let resultThree = true;
//   console.log(resultThree);
// }
// console.log(resultThree);

// let calcNums = function (z, w) {
//     return (z + w) / (z - w);
// };
// console.log(calcNums(15, 25));

// function avgMikeScore(score, mikeScore) {
//     return (mikeScore + 5) / score;
// }
// let avgJoeyScore = function (score, joeyScore) {
//     return joeyScore / score;
// };
// const scores = [avgMikeScore, avgJoeyScore];
// for (let i = 0; i < scores.length; i++) {
//     let result = scores[i](100, 20);
//     console.log(result);
// }
// for (let avgScore of scores) {
//     let result = avgScore(100, 20);
//     console.log(result);
// }

// function avgMikeScore(score, mikeScore) {
//     return (mikeScore + 5) / score;
// }
// let avgJoeyScore = function (score, joeyScore) {
//     return joeyScore / score;
// };
// const scores = {
//   mikeScore: avgMikeScore,
//   joeyScore: avgJoeyScore,
// };
// console.log(scores.mikeScore(100, 50));
// console.log(scores.joeyScore(100, 50));

// function repeat(x) {
//     x();
//     x();
// }
// function num() {
//     console.log(2 + 5);
// }
// repeat(num);

// function sum(x) {
//     return function (y) {
//         return x + y;
//     };
// }
// let num1 = sum(5);
// let num2 = sum(115);
// console.log(num1(4));
// console.log(num2(551));

// setTimeout(function() {
//     console.log(2 + 2);
// }, 2000);

// const btn = document.querySelector("button");
// const para = document.querySelector("p");
// btn.addEventListener('click', function() {
//     para.classList.add("active");
// });

// const heading = document.getElementsByClassName("title");
// console.log(heading);

// const catImg = document.getElementById("cat-image");
// console.log(catImg);

// let dogTraits = document.querySelectorAll(".item");
// console.log(dogTraits);

// let catImg = document.querySelector("#cat-image");
// console.log(catImg);

// const para = document.querySelector('p');
// console.log(para.innerText);
// const paraTwo = document.querySelector("p");
// console.log(paraTwo.textContent);

// const ul = document.querySelector('ul');
// console.log(ul.innerHTML);
// ul.innerHTML += "<li>Item 4</li>";

// const para = document.querySelector("p");
// console.log(para.getAttribute("id"));
// para.setAttribute("class", "paragraph");
// console.log(para.getAttribute("class"));

// const para = document.querySelector("p");
// console.log(para.parentElement);

// const bodyOne = document.body;
// console.log(bodyOne.children);
// console.log(bodyOne.children[0]);
// console.log(bodyOne.children[3]);

// const itemTwo = document.querySelector("ul li:nth-child(2)");
// console.log(itemTwo.previousElementSibling);
// console.log(itemTwo);
// console.log(itemTwo.nextElementSibling);
// const imageOne = document.querySelector('img');
// imageOne.style.width = '640px';
// const para = document.querySelector("p");
// para.style.backgroundColor = 'thistle';
// para.style.padding = '20px';
// para.style.color = 'blue';
// para.style.lineHeight = '1.8';
// para.style.fontSize = '20px';

// const para = document.querySelector("p");
// para.classList.add("for-fun");
// const imageOne = document.querySelector("img");
// const imageProps = getComputedStyle(imageOne);
// console.log(imageProps);
// imageOne.style.height = '960px';
// imageOne.style.width = "640px";
// console.log(imageProps.height);

// let newItem = document.createElement('li');
// // console.dir(newItem);
// newItem.innerText = 'Cute';
// console.log(newItem);
// const list = document.querySelector('ul');
// list.appendChild(newItem);

// let newItem2 = document.createElement("li");
// const firstItem = document.querySelector("ul li:first-child");
// console.log(firstItem);
// newItem2.innerText = 'Protective';
// const list = document.querySelector("ul");
// list.insertBefore(newItem2, firstItem);

// const newH5 = document.createElement('h5');
// const newH6 = document.createElement('h6');
// newH5.innerText = 'Dogs';
// newH6.innerText = 'Birds';
// const mainHeading = document.querySelector('h1');
// mainHeading.append(newH5, newH6);
// // mainHeading.prepend(newH5, newH6);

// const toDoList = document.querySelector('ol');
// const toDoItem = document.querySelector("ol li:nth-child(3)");
// // toDoList.removeChild(toDoItem);
// toDoItem.remove();

// const changeBtn = document.querySelector(".change-bg");
// // console.log(changeBtn);
// changeBtn.addEventListener('click', function() {
//     document.body.style.backgroundColor = '#8fc0a9';
//     console.log("The Change Bg button has been clicked");
// });
// const resetBtn = document.querySelector(".reset-bg");
// resetBtn.addEventListener('click', () => {
//     document.body.style.backgroundColor = "#fff";
//     console.log("The Reset Bg button has been clicked");
// });

const changeBtn = document.querySelector(".change-bg");
const resetBtn = document.querySelector(".reset-bg");

// changeBtn.addEventListener("dblclick", function () {
//   document.body.style.backgroundColor = "#8fc0a9";
//   console.log("The Change Bg button has been double-clicked");
// });
// resetBtn.addEventListener("dblclick", function() {
//   document.body.style.backgroundColor = "#fff";
//   console.log("The Reset Bg button has been double-clicked");
// });

// changeBtn.addEventListener('mouseover', () => {
//    document.body.style.backgroundColor = "#8fc0a9"; 
// });
// resetBtn.addEventListener("mouseout", function() {
//   document.body.style.backgroundColor = "#fff";
// });

// window.addEventListener("scroll", function () {
//     document.body.style.lineHeight = '2.1';
//     document.body.style.backgroundColor = 'blue';
//     document.body.style.color = 'white';
// });

const textInput = document.querySelector('input[type="text"]');
// console.log(textInput);
// textInput.addEventListener('keydown', function() {
//     console.log("keydown");
// });
// textInput.addEventListener("keyup", function () {
//   console.log("keyup");
// });
// textInput.addEventListener("keypress", function () {
//   console.log("keypress");
// });
textInput.addEventListener('click', function(e) {
    console.log(e);
    console.log(e.target);
    console.log(e.clientX);
    console.log(e.clientY);
});
