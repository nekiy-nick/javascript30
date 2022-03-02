const bands = ['The Plot in You', 'The Devil Wears Prada', 'Pierce the Veil', 'Norma Jean', 'The Bled', 'Say Anything', 'The Midway State', 'We Came as Romans', 'Counterparts', 'Oh, Sleeper', 'A Skylit Drive', 'Anywhere But Here', 'An Old Dog'];

const bandsList = document.querySelector('#bands');

function checkStringOnArticle(string) {
  return string.replace(/^(a |the |an )/i, '').trim();
}

function sortWithoutArticles() {
  return [...bands].sort((prevString, nextString) => checkStringOnArticle(prevString) > checkStringOnArticle(nextString) ? 1 : -1);
}

const resultArray = sortWithoutArticles();

bandsList.innerHTML = resultArray.map(item => {
  return `
    <li>${item}</li>
  `
}).join('');
