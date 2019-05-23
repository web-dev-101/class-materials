// First Class Functions
// Definition: Functions treated like any old object/type 

// High Order Functions
// Definition: Functions that accept functions as arguments and/or returns a function

// Callback Functions
// Definition: Functions that are passed in as an argument and invoked inside that function

function sayName(name, howToSayIt) {
  howToSayIt(name);
}

sayName('Justin Wong', (name) => console.log(`${name.toUpperCase()}`))
sayName('Heisenberg', (name) => console.log("You're goddamn right"));
sayName('Britta', function(name) {
  if (name === 'Britta') {
    console.log(`Ugh, ${name} is in this...`);
  } else if (name === 'Brutalitops') {
    console.log(`I am ${name}! The magician! Magic user baby.`);
  } else if (name === 'Leonard') {
    console.log(`Shut up, ${name}! Those teenage girls you play ping-pong with are doing it ironically!`);
  } else {
    console.log(`Hello coworker, ${name}!`);
  }
});

