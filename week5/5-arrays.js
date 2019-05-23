// Arrays
// Initialize Array
var tvShows = ['The Office', '30 Rock', 'Community', 'Parks and Recreation'];
var numberOfShows = tvShows.length;
console.log('Number:     ', numberOfShows);

// Arrays can be anything!
var bigBucket = [42, 'pi', false]
console.log('Bucket:     ', bigBucket);

// Index Array
console.log('First Show: ', tvShows[1]);

// Add to an array
var moreShows = tvShows.push('Superstore');
console.log('Added Superstore at the end:         ', moreShows);

var evenMoreShows = tvShows.unshift('The Good Place');
console.log('Added The Good Place at the front:   ', evenMoreShows);

// Remove from array
var fewerShows = tvShows.pop();
console.log('Removed Superstore from the end:     ', fewerShows);

var evenFewerShows = tvShows.shift();
console.log('Removed The Good Place at the front: ', evenFewerShows);

var positionOfMyFavoriteShow = tvShows.indexOf('Community');
console.log('Index of my favorite show:           ', positionOfMyFavoriteShow);
