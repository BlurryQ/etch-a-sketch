const grid = document.querySelector("#grid");

let enteredSquaresPerSide,
squaresPerSide = 16,
randomColours = false,
greyScale = false;

etchSketch(squaresPerSide);

function etchSketch(squaresPerSide) {
totalSquares = squaresPerSide * squaresPerSide
for (x = 1; x <= totalSquares; x++)
    {
        let name = "square" + x;
        name = document.createElement('div');
        name.classList.add("square");
        name.classList.add("zero");
        name.textContent = "" + x + "";
        grid.appendChild(name);
        name.style.cssText = `height: ${750 / squaresPerSide}px;
                            width: ${750 / squaresPerSide}px;`
    }

    const squares = document.querySelectorAll('.square');
    squares.forEach(square => {
        square.addEventListener('mouseover', () => {

            if(greyScale) {
                let currentShade = square.className.split(" ");
                switch(currentShade[1]) {
                    case "zero": square.classList.remove("zero")
                    square.classList.add("twentyFive")
                    break;
                    case "twentyFive": square.classList.remove("twentyFive")
                    square.classList.add("fifty")
                    break;
                    case "fifty": square.classList.remove("fifty")
                    square.classList.add("seventyFive")
                    break;
                    case "seventyFive": square.classList.remove("seventyFive")
                    square.classList.add("oneHundred")
                    break; }
                        
                    square.style.cssText = `height: ${750 / squaresPerSide}px;
                                    width: ${750 / squaresPerSide}px;
                                    background-color: ${getGreyScale(currentShade[1])};`;
                } else {
                    square.style.cssText = `height: ${750 / squaresPerSide}px;
                                    width: ${750 / squaresPerSide}px;
                                    background-color: ${getColour()};`;} 
        })
});
}

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

    const monotone = document.querySelector("#greyScale");
    monotone.addEventListener('click', () => 
    greyScale == true ? greyScale = false : greyScale = true);


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

function getGreyScale(percentage) {
    switch(percentage) {
        case "zero": return "rgb(255,255,255)";
        case "twentyFive": calc = parseInt(255 * 0.25);
                            rgb = "rgb(" + calc + "," + calc + "," + calc + ")";
                            return rgb;
        case "fifty": calc = parseInt(255 * 0.5);
                        rgb = "rgb(" + calc + "," + calc + "," + calc + ")";
                        return rgb;
        case "seventyFive": calc = parseInt(255 * 0.75);
                        rgb = "rgb(" + calc + "," + calc + "," + calc + ")";
                        return rgb;
        case "oneHundred": calc = 0;
                        rgb = "rgb(" + calc + "," + calc + "," + calc + ")";
                        return rgb;
    }  
}