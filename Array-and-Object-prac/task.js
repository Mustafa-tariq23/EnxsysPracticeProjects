let arr = [1, 2, 3, 9, 1, 4];
let arr2 = [4, 5, 6];

// sum

let add = arr.reduce((curr, next) => curr + next); // sum
console.log(`The Length of the Array is: ${add}`); //sum

// count

console.log(`The Length of the Array is: ${arr2.length}`); //count

// average

let mean = arr.reduce((curr, next) => curr + next) / arr.length;

console.log(`The Average of the First array is: ${mean}`); //avg

// sort

let sortedArr = arr.sort();

console.log(`The Sorted Array is: ${sortedArr}`);

// sort in descending order

console.log(`The Sorted Array is: ${sortedArr.reverse()}`);

// X element exists in the array

console.log(arr.includes(3));

// index of an element in the array

console.log(`The index of "3" is: ${arr.indexOf(3)}`);

// join Multiple Arrays

console.log(`Multiple Arrays Joined Together: ${arr.concat(arr2)}`);
console.log(`Multiple Arrays Joined Together: ${arr + "," + arr2}`);

// reverse the array

console.log(`Reverse Array: ${arr.reverse()}`);

// Remove X elements from the array

console.log(`Element Deleted from array: ${arr.splice(3, 1)}`);
console.log(`The new array: ${arr}`);

// split an array based on some X thing
// Let suppose the X thing is 3

let index = arr.indexOf(4);

console.log(arr.slice(index));

// Objects

const obj = {
  name: "something",
  age: 20,
  height: 170,
  weight: 70,
};

// object keys
console.log(`The Keys of the object are: ${Object.keys(obj)}`);

// object values

console.log(`The Values of the object are: ${Object.values(obj)}`);

//

// console.log(Object.);

const objArr = {
  name: ["ali", "saad", "ali", "ali"],
  age: [20, 30],
  height: [170, 180],
};

// Length

console.log(`The length of the Array object is: ${Object.keys(objArr).length}`);

// loop through the object

console.log(`${Object.entries(objArr)}`);

// or

for (const [keys, values] of Object.entries(objArr)) {
  console.log(`${keys}: ${values}`);
}

// Total Unique IDS

console.log(`The total Keys of the object are: ${Object.keys(objArr)}`);

// name Start with X alphabet //help from internet

function checkName(objArr) {
  for (const name of objArr.name) {
    return name.startsWith("a") ? true : false;
  }
}

console.log(checkName(objArr));

// Object.Date > 'X' date AND Object.DATE < 'X' date.

function checkCount(objArr) {
  let count = 0;
  for (const age of objArr.age) {
    if (age > 1 && age < 10) {
      count++;
    }
  }
  console.log(count);
}

checkCount(objArr);

// Sort based on:
//      id: ASC / DESC
//      date: ASC / DESC
//      name: ASC / DESC.

console.log(objArr.name.sort());
console.log(objArr.age.sort());
console.log(objArr.height.sort());

// Return the index of X element inside Array BASED ON KEY.

console.log(objArr.age.indexOf(30));

// Check if X element exists in array or not. BASED ON KEY.

let result = objArr.name.find((x) => x == `ali`) ? true : false;
console.log(result);


// same Name if any count.

const objArr2 = {
  name: ["ali", "saad", "ali", "ali"],
  age: [20, 30],
  height: [170, 180],
};

function sameNameCount (objArr) {
  let count = 0;

  // for ( let i = 0; i < objArr.name.length; i++){
  //   if(objArr.name.includes((x) => x === "ali")){
  //     count++;

      
  //   }
  // }

  Object.entries(objArr.name).forEach((name) => {
    console.log(name)
    if (name[1] == 'ali') {
      count++;
    }
  });

  return count;
}

console.log((Object.entries(objArr2.name)));

console.log(
  `the number of times name "ali" has accoured is: ${sameNameCount(objArr2)}`
);