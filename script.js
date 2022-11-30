const gridContainer = document.querySelector('#grid-container');




for (let i = 0; i < 256; i++) {
  gridContainer.style.cssText = (`grid-template-columns: repeat(16, auto);`);
  const gridItem = document.createElement('div');
  gridItem.classList.add('grid-item');
  gridContainer.appendChild(gridItem);
};