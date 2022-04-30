// let textElement = document.querySelector("h1");

// console.log(textElement);
// textElement.innerHTML = "<h3>СУКААААААА</h3>";

// textElement.onclick = function () {
//   textElement.classList.toggle("colorr");
// };

// let elements = document.querySelectorAll("li");
// console.log(elements);

// elements.onclick = function () {
//   console.log("ZALP");
// };

let items = document.querySelector("#items");

let element = document.querySelector("ul");
element.addEventListener("click", (e) => (items.innerHTML = e.target.innerHTML));

function hello() {
  console.log("AUAUA", this);
}

function createCalc(n) {
  return function () {
    console.log(100 * n);
  };
}

const calc = createCalc(22);
calc();

function bind(context, fn) {
  return function (...args) {
    fn.apply(context, args);
  };
}

function logPerson() {
  console.log(`Person:${this.name} ,${this.age} ,${this.job} `);
}

const person1 = { name: "Миша", age: 22, job: "Frontend" };
const person2 = { name: "Лена", age: 30, job: "SMM" };

bind(person1, logPerson)();
bind(person2, logPerson)();

// let rabota = ["SMM", "FRONT"];
// let jiga = rabota.push("END");
// console.log(rabota);
// console.log(jiga);
