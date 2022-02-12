// ## Array Cardio Day 2

const people = [
  { name: 'Wes', year: 1988 },
  { name: 'Kait', year: 1986 },
  { name: 'Irv', year: 1970 },
  { name: 'Lux', year: 2015 }
];

const comments = [
  { text: 'Love this!', id: 523423 },
  { text: 'Super good', id: 823423 },
  { text: 'You are the best', id: 2039842 },
  { text: 'Ramen is my fav food ever', id: 123523 },
  { text: 'Nice Nice Nice!', id: 542328 }
];

// Some and Every Checks
// Array.prototype.some() // is at least one person 19 or older?
// Array.prototype.every() // is everyone 19 or older?
let nineteenSome = () => people.some(person => new Date().getFullYear() - person.year >= 19);
console.log('is at least one person 19 or older?:', nineteenSome());

let isEveryNineteen = () => people.every(person => new Date().getFullYear() - person.year >= 19);
console.log('is everyone 19 or older?', isEveryNineteen());

// Array.prototype.find()
// Find is like filter, but instead returns just the one you are looking for
// find the comment with the ID of 823423
let findCommentById = id => comments.find(comment => comment.id === id);
console.log('find the comment with the ID of 823423', findCommentById(823423));
console.log('find the comment with the ID of 111', findCommentById(111));
console.log('find the comment with the ID of 542328', findCommentById(542328));

// Array.prototype.findIndex()
// Find the comment with this ID
// delete the comment with the ID of 823423
let removeCommentById = id => {
  let commentIndex = comments.findIndex(comment => comment.id === id);
  return [].concat(...comments.slice(0, commentIndex), ...comments.slice(commentIndex + 1));
};

console.log('delete the comment with the ID of 823423');
console.table(removeCommentById(823423));
console.log('delete the comment with the ID of 523423');
console.table(removeCommentById(523423));