// document.getElementById("count").innerText=5
// Writing into an HTML element, using innerHTML.
// Writing into the HTML output using document.write().
// Writing into an alert box, using window.alert().
// Writing into the browser console, using console.log().

// // How to create variables:
// var x;
// let y;

// // How to use variables:
// x = 5;
// y = 6;
// let z = x + y;

// let count = 5
// console.log(count)

// // 1. Create a variable, myAge, and set its value to your age
// let myAge = 20

// 2. Log the myAge variable to the console
// console.log(myAge)

// let myAge = 10
// let myDogAge = 10
// let humanRatio = myAge * myDogAge
// document.write(humanRatio)

// 1. Grab the save-el paragrah and store it in a variable called saveEl
 // 2. Create a variable that contains both the count and the dash separator, i.e. "12 - "
    // 3. Render the variable in the saveEl using innerText
let saveEl = document.getElementById("save-el")
let countEl = document.getElementById("count-el")
let count = 0

function increment() {
    count += 1
    countEl.innerText = count
}


function save() {
    let countStr = count + " - "
    saveEl.innerText += countStr
    countEl.textContent = 0
    count = 0
}



