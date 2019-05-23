// Foreach
// Note: Loops through every item in the given array
// The accepted function either takes just the current value or current value/index or current value/index/array
var otherShows = ['Barry', 'Crashing', 'Animals', 'Veep', 'Silicon Valley', 'High Maintenance'];

otherShows.forEach(function(show, i) {
  console.log(`${i+1}. ${show.toUpperCase()}`);
});

// Map, Filter, Reduce
console.log(otherShows);
var lowerCaseShows = otherShows.map((show) => { return show.toLowerCase() });
console.log(otherShows);
console.log(lowerCaseShows);

var filteredShows = otherShows.filter((show) => { return !show.includes(' ') || show.length <= 5 });
console.log(filteredShows);

var numbers = [4, 8, 15, 16, 23, 42];
var sum = numbers.reduce((accumulator, value) => accumulator + value);
console.log(sum);

var total = numbers.map(x => x + 1).filter(x => x % 2 != 0).reduce((total, x) => total + x - 1);
console.log(total);

