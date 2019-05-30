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
