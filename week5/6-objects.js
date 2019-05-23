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

console.log('Name:             ', stuffAboutStephen.name);
console.log('Favorite Boolean: ', stuffAboutStephen['favoriteBoolean']);
console.log('Stephen dislikes: ', stuffAboutStephen.dislikes);
stuffAboutStephen.readTombstone();

// Null
var placeholder = null;
var undefinedPlaceholder;
console.log(`${placeholder} - ${undefinedPlaceholder}`);
