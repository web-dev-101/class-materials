// Equals and Type Coercion
var equal0 = 2 == 2;
var equal1 = 2 != 2;
var equal2 = 2 === 2;
var equal3 = '2' == 2;
var equal4 = '2' === 2;
var equal5 = '2' !== 2;

console.log('   2 == 2 is ', equal0);
console.log('   2 != 2 is ', equal1);
console.log('  2 === 2 is ', equal2);
console.log(" '2' == 2 is ", equal3);
console.log("'2' === 2 is ", equal4);
console.log("'2' !== 2 is ", equal5);

var stringFirst = '1' + 1;
var numberFirst = 1 + "1";

// console.log('String 1: ', stringFirst);
// console.log('Number 2: ', numberFirst);


// Logic Operators
var thisAndThat = (2 < 3) && (10 / 2 === 5);
var thisOrThat = (2 < 3) || (10 / 2 === 5);
var notThat = !(2 < 5);

// console.log('And: ', thisAndThat);
// console.log('Or:  ', thisOrThat);
// console.log('Not: ', not);