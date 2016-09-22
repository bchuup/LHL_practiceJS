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
