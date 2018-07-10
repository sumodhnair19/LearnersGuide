Array.prototype.mymap = function(callback) {


  var myarray = [];
  this.forEach(function(val, key) {

      myarray.push(callback(val));
  });
  return myarray;

}

Array.prototype.myfilter = function(callback) {


  var filteredData = [];
  console.log("callback", callback);
  this.forEach(function(val, key) {
    if (callback(val))
      filteredData.push(val);

  });
  return filteredData;

}


Array.prototype.myReducer = function(callback, start) {

  var result = typeof start != 'undefined' ? start : 0;

  this.forEach(function(val, key) {

    result = callback(result, val);

  });
  return result;


}

Array.prototype.unique = function() {
  var uniqueArr = [];

  this.forEach(function(val, key) {
    if (!uniqueArr.includes(val)) {
      uniqueArr.push(val);
    }
  });
  return uniqueArr;

}

const promiseAll = function(array){
 return new Promise(function(resolve, reject){
   var count = array.length;
   var result = [];
   var isDone = function() {
     if(--count == 0) {
       resolve(result);
     }
   }
   array.forEach(function(val,key){
     val.then(function(data){
       result.push(data);
     },reject).then(isDone);
   })
 });
}


const reverseString = (input, index) => input.split('').reverse().join('');

const returnRandomCombination = function(n) {

  if (n === 1) {

    return 0;

  } else if (n === 2) {

    return 1;

  } else {

    return 1 * returnRandomCombination(n - 1) + 2 * returnRandomCombination(n - 2) + 3;

  }

}

const fibonacciSeries = function(input) {

  let fibonacciSeries = "";
  let arr = [];
  arr[0] = 0;
  arr[1] = 1;

  if (input == 0) {
    fibonacciSeries += input;
  } else if (input == 1) {
    fibonacciSeries += input;

  } else if (input >= 2) {
    fibonacciSeries += arr[0] + "," + arr[1] + ",";
    for (var i = 2; i <= input; i++) {
      arr[i] = arr[i - 1] + arr[i - 2];
      fibonacciSeries += arr[i] + ","

    }
    fibonacciSeries = fibonacciSeries.split(',');
    fibonacciSeries.pop();
    fibonacciSeries = fibonacciSeries.join(',');
  }
  return fibonacciSeries;
}
