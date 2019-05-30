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

function globe() {
  baz = 'World traveler';
  console.log(baz);
}

function trotter() {
  console.log(baz);
}