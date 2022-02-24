const addItems = document.querySelector('.add-items');
const itemsList = document.querySelector('.plates');
let items = JSON.parse(localStorage.getItem('items')) || [];
const clearItemsBtn = addItems.querySelector('.clear-items-btn');

function addItem(e) {
    e.preventDefault();
    let text = this.querySelector('input[name=item]').value;
    const item = {
      text,
      done: false
    };

    items.push(item);
    populateList(items, itemsList);
    localStorage.setItem('items', JSON.stringify(items));
    this.reset();
}

function populateList(plates = [], platesList) {
  platesList.innerHTML = plates.map((plate, i) => {
    return `
      <li>
        <input type="checkbox" data-index=${i} ${plate.done ? 'checked' : ''} id=${i}>
        <label for=${i}>${plate.text}</label>
      </li>
    `
  }).join('');

  plates.length > 0 ? clearItemsBtn.removeAttribute('disabled') : clearItemsBtn.setAttribute('disabled', '');
}

function toggleDone(e) {
  const el = e.target;
  if (!el.matches('input')) return;  
  const index = el.dataset.index;
  items[index].done = !items[index].done;
  localStorage.setItem('items', JSON.stringify(items));
  populateList(items, itemsList);
}

function clearPlates(e) {
  items = [];
  populateList([], itemsList);
  localStorage.removeItem('items');
  itemsList.innerHTML = `
    <li>Loading Tapas...</li>
  `;
}

addItems.addEventListener('submit', addItem);
itemsList.addEventListener('click', toggleDone);
populateList(items, itemsList);
clearItemsBtn.addEventListener('click', clearPlates);
