let color = "black";

let dimension = 16;
const container = document.querySelector(".container");
const size = document.querySelector(".size");
const dot = document.querySelector(".dot");
const colorButton = document.querySelector(".color");
const eraser = document.querySelector(".eraser");
const randomizer = document.querySelector(".randomizer");


document.addEventListener("DOMContentLoaded", () => {
    createGrids(container);
})

function createGrids(container) {
    for (let i = 0; i < dimension; i++) {
        const row = document.createElement("div");
        row.classList.add("row");
        container.appendChild(row);
        for (let j = 0; j < dimension; j++) {
            createGrid(row);
        }
    }
}

function createGrid(row) {
    const grid = document.createElement("div");
    grid.onmouseover = function() {
        grid.style.background = color;
    }
    grid.classList.add("grid");
    row.appendChild(grid);
}

size.addEventListener("click", function() {
    dimension = prompt("Enter a number (Limit 100)");
    console.log(dimension);
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }
    createGrids(container);
})

colorButton.addEventListener("click", function() {
    color = prompt("Enter a color code");
    dot.style.backgroundColor = color;
}) 

eraser.addEventListener("click", function() {
    color = "white";
})

randomizer.addEventListener("click", function() {
    color = randomHexColorCode();
    dot.style.backgroundColor = color;
})


const randomHexColorCode = () => {
    let n = (Math.random() * 0xfffff * 1000000).toString(16);
    return '#' + n.slice(0, 6);
};



