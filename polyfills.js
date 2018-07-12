const promiseAll = (array) =>  new Promise(function(resolve, reject){
   let count = array.length,
       result = [],
       isDone = function() {
                  if(--count == 0) {
                    resolve(result);
                  }
                };

   array.forEach(function(val,key){
     val.then(function(data){
       result.push(data);
     },reject).then(isDone);
   })
 });


Array.prototype.mymap = function(callback) {

  let myarray = [];
  this.forEach(function(val, key) {

      myarray.push(callback(val));
  });
  return myarray;
}

Array.prototype.myfilter = function(callback) {

  let filteredData = [];
  this.forEach(function(val, key) {
    if (callback(val))
      filteredData.push(val);

  });
  return filteredData;
}

Array.prototype.myReducer = function(callback, start) {

  let result = typeof start != 'undefined' ? start : 0;

  this.forEach(function(val, key) {
    result = callback(result, val);
  });
  return result;
}

Array.prototype.unique = function() {
  let uniqueArr = [];

  this.forEach(function(val, key) {
    if (!uniqueArr.includes(val)) {
      uniqueArr.push(val);
    }
  });
  return uniqueArr;

}

const reverseString = (input, index) => input.split('').reverse().join('');

const returnRandomCombination = (n) =>  n === 1 ? 0 : n === 2 ? 1 : 1 * returnRandomCombination(n - 1) + 2 * returnRandomCombination(n - 2) + 3;

const fibonacciSeries = (input) => {

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
