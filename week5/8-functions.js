// Functions
// Normal Function Declaration
function gotThatMoney(worksAtReflexionHealth, name) {
  if (!worksAtReflexionHealth) {
    return `${name} did not get that money`;
  }

  return `${name} definitely got that money`;
}

var answer = gotThatMoney(true, 'Jesse');
console.log(answer);

// Anonymous Function
// Definition: Function without a name
var anon = function () {
  return 'Guy Fawkes';
}
console.log(anon());

// Arrow Function
// Definition: Compact functions, with some caveats (see classes/this)...
var arrow = () => { 
  return 'Oliver Queen'; 
};
console.log(arrow());

var quickSum = (a, b) => a + b;
console.log(quickSum(0, 1));