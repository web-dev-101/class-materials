// Control Flow - Conditionals
// If else if else
var coworkersName = 'Britta';
if (coworkersName === 'Britta') {
  console.log(`Ugh, ${coworkersName} is in this...`);
} else if (coworkersName === 'Brutalitops') {
  console.log(`I am ${coworkersName}! The magician! Magic user baby.`);
} else if (coworkersName === 'Leonard') {
  console.log(`Shut up, ${coworkersName}! Those teenage girls you play ping-pong with are doing it ironically!`);
} else {
  console.log(`Hello coworker, ${coworkersName}!`);
}

// Switch Case
var fruit = 'banana';
switch(fruit) {
  case 'apple':
    console.log('I like green apples!');
    break;
  case 'strawberry':
  case 'schnozberry':
    console.log('Berries!');
    break;
  default:
    console.log("I don't know what to say...");
}

// Ternary 
var isBanana = false;
var statement = isBanana ? 'it is' : 'it is... not';
console.log(statement);