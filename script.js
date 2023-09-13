const grid = document.querySelector("#grid");

let enteredSquaresPerSide,
squaresPerSide = 16,
randomColours = false;

etchSketch(squaresPerSide);

function etchSketch(squaresPerSide) {
totalSquares = squaresPerSide * squaresPerSide
for (x = 1; x <= totalSquares; x++)
    {
        let name = "square" + x;
        name = document.createElement('div');
        name.classList.add("square");
        name.textContent = "" + x + "";
        grid.appendChild(name);
        name.style.cssText = `height: ${750 / squaresPerSide}px;
                            width: ${750 / squaresPerSide}px;`
    }

    const squares = document.querySelectorAll('.square');
    squares.forEach(square => {
        square.addEventListener('mouseover', () => {
            square.style.cssText = `height: ${750 / squaresPerSide}px;
                                    width: ${750 / squaresPerSide}px;
                                    background-color: ${getColour()};` })
        })
};

const gridCapacity = document.querySelector('#gridCapacity');
gridCapacity.addEventListener('click', () => setSquarePerSide())

function setSquarePerSide() {
    grid.replaceChildren(); 
    let enteredSquaresPerSide = getSquaresPerSide();
    squaresPerSide = enteredSquaresPerSide;
    etchSketch(squaresPerSide);
        }

function getSquaresPerSide() {
    enteredValue = prompt("Enter number of squares per side. Returning to default (16).");
    if (enteredValue > 100) {
        alert("Maximum 100 per side!!")
        return 16;
    } else {
        let enteredSquaresPerSide = parseInt(enteredValue);
        return enteredSquaresPerSide; }
}

const clear = document.querySelector("#clear");
clear.addEventListener('click', () => clearGrid(squaresPerSide))

function clearGrid() {
    grid.replaceChildren(); 
    etchSketch(squaresPerSide);
}

const colours = document.querySelector("#colours");
colours.addEventListener('click', () => 
    randomColours == true ? randomColours = false : randomColours = true);


function getRandomNumber(n) {
    randomNumber = Math.floor(Math.random() * n);
    return randomNumber;
}

function getColour() {
    r = getRandomNumber(255);
    g = getRandomNumber(255);
    b = getRandomNumber(255);
    rgb = "rgb(" + r + "," + g + "," + b + ")";
    if(randomColours == true) { return rgb; } else { return "rgb(255,255,255)";}
}