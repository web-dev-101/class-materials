// Control Flow - Loops
// For
// Note: Generally used for when you want to go through something a set amount of times
var programmingLanguages = ['Python', 'C#', 'Ruby', 'JavaScript', 'Go'];
for (var i = 0; i < programmingLanguages.length - 1; i++) {
  var language = programmingLanguages[i];
  console.log(`My language ${language}`);
//   if (language === 'Python') {
//     console.log('hissssssss (this continues for awhile)');
//     continue;
//   }

//   if (language === 'Ruby') {
//     console.log('Got a gem time! Time to make a... break(winks at audience) for it')
//     break;
//   }

//   console.log('See octothorpe, see pound, see hashtag');
}

// While
// Note: Generally used when you don't know when it's going to end 
var goToWork = true;
var hours = 0; 
while (goToWork) {
  // console.log('Been here for ' + hours + ' hours');

  if (hours >= 8) {
    // console.log('Catch you on the flippity flip!');
    goToWork = false;
  }

  hours += 1
}

// Do While
// Note: Generally used when you don't know when it's going to end, but you need to run at least once
var beer30 = true;
var beersDrank = 0; // Drunk?
do {
  beersDrank += 1; 
  // console.log('Woooo!!! \\o/');

  if (beersDrank >= 5) {
    // console.log('Time to go home...');
    beer30 = false;
  }
} while (beer30);