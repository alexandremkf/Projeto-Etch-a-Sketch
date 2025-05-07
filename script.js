const container = document.getElementById('grid-container');
const resetBtn = document.getElementById('reset-btn');

function createGrid(size) {
  container.innerHTML = '';
  container.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
  container.style.gridTemplateRows = `repeat(${size}, 1fr)`;

  for (let i = 0; i < size * size; i++) {
    const square = document.createElement('div');
    square.classList.add('grid-square');
    square.dataset.opacity = "0";

    square.addEventListener('mouseover', () => {
      let currentOpacity = parseFloat(square.dataset.opacity);
      if (currentOpacity < 1) {
        currentOpacity += 0.1;
        square.dataset.opacity = currentOpacity.toFixed(1);
        square.style.backgroundColor = `rgba(28, 145, 212, ${currentOpacity})`;
      }
    });

    container.appendChild(square);
  }
}

function askGridSize() {
  let input = prompt("How many squares per side would you like your grid to be?");
  const size = parseInt(input);

  if (!size || size < 1 || size > 100) {
    alert("Please enter a valid number between 1 and 100.");
    return askGridSize();
  }

  createGrid(size);
}

resetBtn.addEventListener('click', askGridSize);

askGridSize();