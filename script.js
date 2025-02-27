const gridContainer = document.getElementById('grid');
const resetButton = document.getElementById('resetButton');
let gridSize = 16; 

function getRandomColor() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`;
}

function createGrid(size) {
    gridContainer.innerHTML = '';

    const squareSize = 960 / size;

    for (let i = 0; i < size * size; i++) {
        const div = document.createElement('div');
        div.style.width = `${squareSize}px`;
        div.style.height = `${squareSize}px`;

        div.addEventListener('mouseover', () => {
            div.style.backgroundColor = getRandomColor();
        });

        gridContainer.appendChild(div);
    }
}

resetButton.addEventListener('click', () => {
    let userInput = prompt('Enter the size of grid (max 100):');
    let newSize = parseInt(userInput);

    if (isNaN(newSize) || newSize < 1 || newSize > 100) {
        alert('Invalid input. Please enter a number between 1 and 100.');
    } else {
        gridSize = newSize;
        createGrid(gridSize);  
    }
});

createGrid(gridSize);
