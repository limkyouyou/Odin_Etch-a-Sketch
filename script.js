const gridContainer = document.querySelector('#grid-container');
const btnContainer = document.querySelector('#btn-container');
const ttlSquareBtn = document.createElement('button');

ttlSquareBtn.setAttribute('id', 'ttl-square-btn');
ttlSquareBtn.textContent = "Number of squares"
btnContainer.appendChild(ttlSquareBtn);






for (let i = 0; i < 256; i++) {
  gridContainer.style.cssText = (`grid-template-columns: repeat(16, auto);`);
  const gridItem = document.createElement('div');
  gridItem.classList.add('grid-item');
  gridContainer.appendChild(gridItem);
}

const items = document.querySelectorAll('.grid-item');

items.forEach(item => item.addEventListener('mouseover', color));

function color(e) {
  e.target.style.cssText = (`background-color: black;`);
}
