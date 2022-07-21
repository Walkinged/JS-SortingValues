//Sorting strings
const names = ['Tom', 'Dick', 'Harry', 'Bader', 'Jock'];

// names.sort();
names.reverse();
console.log(names);

//Sorting numbers
const scores = [10, 50, 20, 5, 35, 70, 45];

// scores.sort();
scores.reverse();
console.log(scores);

//Sorting objects
const players = [
  {name: 'Tom', score: 20},
  {name: 'Dick', score: 10},
  {name: 'Harry', score: 50},
  {name: 'Bader', score: 30},
  {name: 'Jock', score: 70}
];

//This is the long version. Sort by order desc (biggest score first)
// players.sort((a,b) => {
//   if(a.score > b.score){
//     return -1;
//   } else if (b.score > a.score){
//     return 1;
//   } else {
//     return 0;
//   }
// });

//This is a simplified version of the above.
players.sort((a,b) => b.score - a.score);

console.log(players);