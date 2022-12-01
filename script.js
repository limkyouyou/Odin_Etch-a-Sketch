const gridContainer = document.querySelector('#grid-container');
const btnContainer = document.querySelector('#btn-container');
const ttlSquareBtn = document.createElement('button');
let items;
let eachSideSquares = 16;

ttlSquareBtn.setAttribute('id', 'ttl-square-btn');
ttlSquareBtn.textContent = "Number of squares"
btnContainer.appendChild(ttlSquareBtn);
ttlSquareBtn.addEventListener('click', promptHowMany);

generateGrid(eachSideSquares);

function promptHowMany() {
  eachSideSquares = prompt("From 1 to 100, type-in how many squares you'd like per side");
  if (eachSideSquares >= 1 && eachSideSquares <= 100) {
    items.forEach(item => gridContainer.removeChild(item));
    generateGrid(eachSideSquares);
  } else if (eachSideSquares === null) {
    return;
  } else if (eachSideSquares > 100) {
    alert("That's too many squares!");
  } else if (eachSideSquares === 0) {
    alert("There's not enough squares!");
  } else {
    alert("That's not a number!")
  }
}

function generateGrid(eachSide) {
  for (let i = 0; i < (eachSide * eachSide); i++) {
  gridContainer.style.cssText = (`grid-template-columns: repeat(${eachSide}, auto);`);
  const gridItem = document.createElement('div');
  gridItem.classList.add('grid-item');
  gridItem.setAttribute('data-passed', 0);
  gridContainer.appendChild(gridItem);  
  }
  items = document.querySelectorAll('.grid-item');
  items.forEach(item => item.addEventListener('mouseover', color));
}

function color(e) {
  let hover = +(e.target.dataset.passed);

  if (hover === 0) {
    let color = randomRGB();
    e.target.setAttribute('data-color', color);
    e.target.style.backgroundColor = `rgb(${color})`;
    hover += 1;
  } else if (hover > 0 && hover <= 10) {
    e.target.style.backgroundColor = `rgb(${darker(e.target.dataset.color, hover)})`;
    hover += 1;
  } 
  e.target.dataset.passed = hover;
}

function randomRGB() {
  let f = Math.floor;
  let r = Math.random;
  let m = 256;
  return `${f(r()*m)}, ${f(r()*m)}, ${f(r()*m)}`
}

function darker(rgb, passed) {
  let newRGB = rgb.split(', ');
  for (let i = 0; i < newRGB.length; i++) {
    newRGB[i] -= Math.floor(((newRGB[i] / 10) * passed));
  }
  return newRGB.join(', ');
}