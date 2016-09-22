"use strict"

// HIGHER ORDER FUNCTIONS I

const length = (word) =>{
  return word.length
}

const map = (array, cb) => {
  newArr = [];
  array.forEach(word => {
    newArr.push(cb(word))
  })
  return newArr
}

map(['adfsdfs', 'dlafdsaf'], length)



// ASYNC AND CLOSURES
for (var i = 0; i < 3; i++) {
  setConsole = function(item){
    return setTimeout(function() { console.log(item); }, 1000 + i);
  }
  setConsole(i)
}


// Higher-order function II
// multiply
//(multiply(4))(6)    === 24

function multiply(number){
  return function(secondNumber){
    return number * secondNumber
  }
}


// STOCK
//strategy- push to array of numbers
//the array will contain differences
// each "differences" will be the difference between (first, second, third) number and the largest number in rest of starting array


//function to return array of profits
function arrOfDifferences(array){
  var diff = []
  array.forEach(function(item){
    var profit = item - array[0];
    diff.push(profit)
  })
  return diff
}
// function to get highest profit of array outputted by arr of differences
function max(arr) {
  var max = arr[0];
  for (var value of arr){
    if (value >= max){
      max = value;
    } else {
      max = max;
    }
  }
  return max;
}
// max(arrOfDifferences([[45, 24, 35, 31, 40, 38, 11]]))

function profits(array){
  return max(arrOfDifferences(array))
}

function maxProfit(arr){
  var pushProfits = [];
  for (var i = 0; i < arr.length; i++){
    var profits = profits(arr.slice(i);
    profitArray = pushProfits.push(profits)
  }
  max(profitArray)
}

































