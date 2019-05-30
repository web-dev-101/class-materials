function basic() {
  var foo = 12;
  
  return foo;
}

function notDefined() {
  var baz = 100;
  return foo;
}

function parentChild() {
  var foo = 12;
  console.log(foo);
  (function child(){
    console.log(foo * foo);
  })();
}

function block() {
  var arr = [1, 2, 3, 4];

  for(let i=0; arr.length < i; i++) {
    let item = arr[i];
    console.log(item);
  }
  
  console.log(item);
}

function globe() {
  baz = 'World traveler';
  console.log(baz);
}

function trotter() {
  console.log(baz);
}