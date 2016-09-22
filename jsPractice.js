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

function macro(number){
  return function(secondNumber){
    return number * secondNumber
  }
}

function multiply(x){
  return macro(x)
}





