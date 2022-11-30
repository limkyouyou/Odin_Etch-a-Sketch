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
  console.log(typeof eachSideSquares)
  console.log(eachSideSquares)
}

function generateGrid(eachSide) {
  for (let i = 0; i < (eachSide * eachSide); i++) {
  gridContainer.style.cssText = (`grid-template-columns: repeat(${eachSide}, auto);`);
  const gridItem = document.createElement('div');
  gridItem.classList.add('grid-item');
  gridContainer.appendChild(gridItem);  
  }
  items = document.querySelectorAll('.grid-item');
  items.forEach(item => item.addEventListener('mouseover', color));
}

function color(e) {
  e.target.style.cssText = (`background-color: black;`);
}