const gridContainer = document.querySelector('#grid-container');
let gridItem;

for (let i = 0; i < 256; i++) {
  gridContainer.style.cssText = (`grid-template-columns: repeat(16, auto);`);
  gridItem = document.createElement('div');
  gridItem.classList.add('grid-item');
  gridContainer.appendChild(gridItem);
}

const items = document.querySelectorAll('.grid-item');

items.forEach(item => item.addEventListener('mouseover', color));

function color(e) {
  e.target.style.cssText = (`background-color: black;`);
}
