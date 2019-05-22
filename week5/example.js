// Variables and Types
var name = 'Stephen';
var number = 31;
var someOtherNumber = 23.3;
var isTrue = true; // || false
var nothing; 

console.log(name);
console.log(number);
console.log(someOtherNumber);
console.log(isTrue);
console.log(nothing);


// Operations
var sum = 2 + 3;
var sumOther = 2.3 + 3.9;
var multiply = 2 * 3;
var divide = 2 / 3;
var remainder = 3 % 2;

console.log(sum);
console.log(sumOther);
console.log(multiply);
console.log(divide);
console.log(remainder);


// String Concatenation
var catName = "Stephen" + "The" + "Cat";
var dogName = "Stephen " + "The" + "Dog";
console.log(catName);
console.log(dogName);


// String Interpolation
var firstName = 'Stephen';
var lastName = 'Lampa';
var catDog = `This is my name: ${firstName} ${lastName}`;
console.log(catDog);


// Comparison Operators
var lessThan = 2 < 3;
var lessThanOrEqual = 2 <= 3;
var greaterThan = 2 > 3;
var greaterThanOrEqual = 2 >= 3;

console.log(lessThan);
console.log(lessThanOrEqual);
console.log(greaterThan);
console.log(greaterThanOrEqual);


// Equals and Type Coercion
var equal = 2 == 2;
console.log(equal);

equal = 2 != 2;
console.log(equal);

equal = 2 === 2;
console.log(equal);

equal = '2' == 2;
console.log(equal);

equal = '2' === 2;
console.log(equal);

equal = '2' !== 3;
console.log(equal);

var username = "Stephen" + 123;
console.log(username);

var otherUser = 123 + "Stephen";
console.log(otherUser);


// Logic Operators
var thisAndThat = (2 < 3) && (10 / 2 === 5);
var thisOrThat = (2 < 3) || (10 / 2 === 5);
var not = !(2 < 5);

console.log(thisAndThat);
console.log(thisOrThat);
console.log(not);


// Control Flow - Conditionals
var coworkersName = 'Stephen';

if (coworkersName === 'Stephen') {
  console.log('Boo this guy!');
} else if (coworkersName === 'Mike') {
  console.log('Who?');
} else {
  console.log(`Hello coworker, ${coworkersName}!`);
}

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

var isBanana = false;

var statement = isBanana ? 'it is' : 'it is... not';
console.log(statement);


// Collections/Objects
// Initialize Array
var tvShows = ['The Office', '30 Rock', 'Community', 'Parks and Recreation'];
var numberOfShows = tvShows.length;
console.log(numberOfShows);

// Arrays can be anything!
var bigBucket = [42, 'pi', false]
console.log(bigBucket);

// Index Array
console.log(tvShows[1]);

// Add to an array
var moreShows = tvShows.push('Superstore');
console.log(moreShows);

var evenMoreShows = tvShows.unshift('The Good Place');
console.log(evenMoreShows);

// Remove from array
var fewerShows = tvShows.pop();
console.log(fewerShows);

var evenFewerShows = tvShows.shift();
console.log(evenFewerShows);

var positionOfMyFavoriteShow = tvShows.indexOf('Community');
console.log(positionOfMyFavoriteShow);

// Objects
var stuffAboutStephen = {
  name: 'Stephen Lampa',
  age: 27,
  favoriteBoolean: false,
  collects: ['things', 'stuff'],
  stuffAboutJoey: {
    name: 'Joey Lampa',
    age: 'younger'
  },
  readTombstone: function() {
    console.log('Bury Me A JavaScript Developer');
  }
}

console.log(stuffAboutStephen.name);
console.log(stuffAboutStephen['favoriteBoolean']);
stuffAboutStephen.readTombstone();

console.log(stuffAboutStephen.dislikes);

// Null
var placeholder = null;
var undefinedPlaceholder;
console.log(`${placeholder} - ${undefinedPlaceholder}`);

// Control Flow - Loops
for (var i = 0; i < 5; i++) {
  console.log(i);
}

var notHappy = true;
while (notHappy) {
  // Do stuff to make Stephen happy
  console.log("runs in here");
  notHappy = false;
}

do {
  console.log("unhappy for one round");
  notHappy = false;
} while (notHappy);


var programmingLanguages = ['Python', 'C#', 'Ruby', 'JavaScript', 'Go'];
for (var language of programmingLanguages) {
  console.log(`My language ${language}`);
  if (language === 'Python') {
    console.log('hissssssss (this continues for awhile)');
    continue;
  }

  if (language === 'Ruby') {
    console.log('Got a gem time! Time to make a... break(winks at audience) for it')
    break;
  }

  console.log('See octothorpe, see pound, see hashtag');
}

var justARandomObject = {
  isItShiny: true,
  newName: 'Bill',
  purpose: ['entertainment', 'for me to brag about']
}

for (var key in justARandomObject) {
  console.log(`Question: ${key}\nAnswer: ${justARandomObject[key]}`);
}

// Functions
function gotThatMoney(worksAtReflexionHealth, name) {
  if (!worksAtReflexionhealth) {
    return `${name} did not get that money`;
  }

  return `${name} definitely got that money`;
}

var answer = gotThatMoney(true, 'Stephen');
console.log(answer);

// Advanced Functions
// Scopes
// Hoisting
// var/let/const

