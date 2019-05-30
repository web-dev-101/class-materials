function hoistVariable () {
  console.log(y);
  var y = 10 + 2;
}

function hoistFunc () {
  var y = someNestedFunc(10);
  console.log(y);
  var y = 10 + 2;

  function someNestedFunc(x) {
    return x * x;
  }
}

function block() {
  var arr = [1, 2, 3, 4];

  for(let i=0; arr.length < i; i++) {
    let item = arr[i];
    console.log(item);
  }
  
  console.log(item);
}