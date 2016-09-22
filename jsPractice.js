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