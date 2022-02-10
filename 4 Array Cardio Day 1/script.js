// Get your shorts on - this is an array workout!
// ## Array Cardio Day 1

// Some data we can work with

const inventors = [
  { first: 'Albert', last: 'Einstein', year: 1879, passed: 1955 },
  { first: 'Isaac', last: 'Newton', year: 1643, passed: 1727 },
  { first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642 },
  { first: 'Marie', last: 'Curie', year: 1867, passed: 1934 },
  { first: 'Johannes', last: 'Kepler', year: 1571, passed: 1630 },
  { first: 'Nicolaus', last: 'Copernicus', year: 1473, passed: 1543 },
  { first: 'Max', last: 'Planck', year: 1858, passed: 1947 },
  { first: 'Katherine', last: 'Blodgett', year: 1898, passed: 1979 },
  { first: 'Ada', last: 'Lovelace', year: 1815, passed: 1852 },
  { first: 'Sarah E.', last: 'Goode', year: 1855, passed: 1905 },
  { first: 'Lise', last: 'Meitner', year: 1878, passed: 1968 },
  { first: 'Hanna', last: 'Hammarström', year: 1829, passed: 1909 }
];

const people = [
  'Bernhard, Sandra', 'Bethea, Erin', 'Becker, Carl', 'Bentsen, Lloyd', 'Beckett, Samuel', 'Blake, William', 'Berger, Ric', 'Beddoes, Mick', 'Beethoven, Ludwig',
  'Belloc, Hilaire', 'Begin, Menachem', 'Bellow, Saul', 'Benchley, Robert', 'Blair, Robert', 'Benenson, Peter', 'Benjamin, Walter', 'Berlin, Irving',
  'Benn, Tony', 'Benson, Leana', 'Bent, Silas', 'Berle, Milton', 'Berry, Halle', 'Biko, Steve', 'Beck, Glenn', 'Bergman, Ingmar', 'Black, Elk', 'Berio, Luciano',
  'Berne, Eric', 'Berra, Yogi', 'Berry, Wendell', 'Bevan, Aneurin', 'Ben-Gurion, David', 'Bevel, Ken', 'Biden, Joseph', 'Bennington, Chester', 'Bierce, Ambrose',
  'Billings, Josh', 'Birrell, Augustine', 'Blair, Tony', 'Beecher, Henry', 'Biondo, Frank'
];

// Array.prototype.filter()
// 1. Filter the list of inventors for those who were born in the 1500's
let born1500 = inventors.filter(person => person.year >= 1500 && person.year < 1600);

console.log('1. Filter the list of inventors for those who were born in the 1500\'s');
console.table(born1500);

// Array.prototype.map()
// 2. Give us an array of the inventor first and last names
let fullNameArray = inventors.map(person => `${person.first} ${person.last}`);

console.log('2. Give us an array of the inventor first and last names');
console.table(fullNameArray);

// Array.prototype.sort()
// 3. Sort the inventors by birthdate, oldest to youngest
let sortedByBirthday = inventors.sort((x,y) => x.year - y.year);

console.log('3. Sort the inventors by birthdate, oldest to youngest');
console.table(sortedByBirthday);

// Array.prototype.reduce()
// 4. How many years did all the inventors live?
let totalLifeYears = inventors.reduce((sum, person) => sum += person.passed - person.year, 0);
console.log('4. How many years did all the inventors live?', totalLifeYears);

// 5. Sort the inventors by years lived
let sortPersonYearsLife = inventors.sort((x, y) => (x.passed - x.year) - (y.passed - y.year));

console.log('5. Sort the inventors by years lived');
console.table(sortPersonYearsLife);

// 6. create a list of Boulevards in Paris that contain 'de' anywhere in the name
// https://en.wikipedia.org/wiki/Category:Boulevards_in_Paris

// const streetList = document.querySelectorAll('.mw-category-group a');
// let boulevardsNames = [...streetList].map(street => street.innerText);
// let deBoulevards = boulevardsNames.filter(string => string.includes(' de '));

// 7. sort Exercise
// Sort the people alphabetically by last name
let sortedPeopleSurname = people.sort((x, y) => {
  function findSurnameInString(string) {
    let startSlice = string.indexOf(',');
    return string.slice(0, startSlice);
  }

  let xSurname = findSurnameInString(x);
  let ySurname = findSurnameInString(y);

  return xSurname > ySurname;
});

console.log('7. sort Exercise');
console.table(sortedPeopleSurname);

// 8. Reduce Exercise
// Sum up the instances of each of these
const data = ['car', 'car', 'truck', 'truck', 'bike', 'walk', 'car', 'van', 'bike', 'walk', 'car', 'van', 'car', 'truck', 'pogostick'];
// let sortData = data.slice().sort();
let countDoubleString = data.reduce((obj, str) => {
  if (!obj[str]) {
    obj[str] = 0;
  }
  obj[str]++;
  return obj;
}, {});

console.log('8. Reduce Exercise');
console.log(countDoubleString);
