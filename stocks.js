function arrOfDifferences(array){
  var diff = []
  array.forEach(function(item){
    var profit = item - array[0];
    diff.push(profit)
  })
  return diff
}

// max(arrOfDifferences([[45, 24, 35, 31, 40, 38, 11]]))
function profits(array){
  return Math.max.apply(null, arrOfDifferences(array))
}

// console.log(profits([6,5,2,4]))
function maxProfit(arr){
  var pushProfits = [];
  for (var i = 0; i < arr.length; i++){
    var money = profits(arr.slice(i));
    pushProfits.push(money)
  }
  var maxProf = Math.max.apply(null, pushProfits);
  if (maxProf) {
    return maxProf
  }
  return -1
}

console.log(maxProfit([7, 3, 2, 1, 6]))
