console.log('Hello World');
const countryName = 'Bangladesh';
console.log(countryName);
const array = [1, 2, 3, 4, 5];
array.forEach(element => {
    console.log(element);
});
const logFunc = () => {
    console.log('Hello World');
}
logFunc();
let myName = 'Abdullah';
myName = 'Abdullah Al Noman';
console.log(myName);
// Function
function add(a : number, b : number){
    return a+b;
}
console.log(add(2, 3))
// Array
let fruits = ['apple', 'japple', 'kapple']
fruits.push('mapple');
console.log(fruits);
// If you want to take multiple type of element in array
// Then either you have to declare an empty array or array like below
let mixed = [];
let MixedArray = ['apple', false, NaN, 34]
MixedArray.push(true)// Now you can push element that are previously defined


