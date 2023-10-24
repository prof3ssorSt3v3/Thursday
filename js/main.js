let name;
name = 'steve';
//let name = 'steve'
const age = 99;

name = name + 'tony'; //stevetony
// age = 88; - fails with error. Not allowed to change contents of const

//DATATYPES
// Primitives - string, number, boolean, null, undefined, BigInt, Symbol, NaN
// Objects - everything that is not a primitive

//when passed to a function you get a copy of a primitive
// with objects we get a reference to the original object

let obj = {
  name: 'luciano',
  age: 30,
  id: 123,
  alive: false,
};
let obj2 = obj;
obj2.alive = true;
console.log(obj);
console.log(obj2);

function bob() {
  //function declaration
  console.log('hi. I am Bob');
}
let fred = function () {
  //function expression
  console.log('hi. I am fred');
};

let arr = [1, 2, 5, 7, 8];

console.log(typeof bob);
console.log(typeof fred);
console.log(typeof obj);
console.log(typeof obj2);
console.log(typeof name);
console.log(typeof age);
console.log(typeof arr);

function f1(y = 1000) {
  //{ } is a block scope
  let x = 789; //local variable
  console.log('f1', x + y);
  return x + y;
  // return obj;
  // return 1;
  // return 'hello';
  // return arr;
}

let result = f1(42); //find the thing inside of the variable f1 and make it run
console.log(result);
f1(8);
f1(undefined); //will use the default value
f1(11);
f1(1111);
f1(4);

// arr(); //does not work because arr is not a function
//IIFE -
(function () {
  console.log('I am an iffe');
})();

const obj3 = {
  name: 'luciano',
  age: 30,
  id: 123,
  alive: false,
  123: 40,
};
// obj3 = {}; not allowed
obj3.age = 44;
obj3['age'] = 35;
let prop = 'age';
obj3[prop] = 41;
obj3[123] = 40; // { "123": 40 }

delete obj3.alive; // delete obj3['alive']
console.log(obj3);

arr.push(77);
arr.push(77);
arr.push(77);
arr.pop();
console.log(arr);

function a(i, index) {
  console.log(index, 'array number', i);
}

// arr.forEach(a);
arr.forEach(function (num, idx) {
  // console.log(idx, 'booya', num);
});

let arr2 = arr.map(function (num, idx) {
  console.log(idx, 'booya', num);
  return num * 2;
});
console.log(arr2);

let arr3 = arr.filter(function (num, idx) {
  if (num < 8) {
    //keep it
    return true;
  } else {
    //throw it away
    return false;
  }
});
console.log(arr3);

let arr4 = [{ id: 123 }, { id: 11111123 }, { id: 789 }, { id: 456 }];

let sorted = arr4.sort(function (a, b) {
  // 1, 0, -1
  // console.log(typeof a);
  // return a - b;

  if (a.id > b.id) {
    return 1;
  } else if (a.id < b.id) {
    return -1;
  } else {
    return 0;
  }
});

console.log(sorted);
