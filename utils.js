function print(val){
  var body = document.body;
  var div = document.createElement('div');
  div.innerText = val;
  body.append(div);
}

function printArray(arr){
  if (arr && arr.length > 0) {
    print(arr.reduce(function (accumulator, currentValue) {
      return accumulator + ' ' + currentValue;
    }));
  }
}

function printArray2(arr2){
  arr2.forEach(function(arr){
    printArray(arr);
  });
}