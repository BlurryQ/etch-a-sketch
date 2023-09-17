/* constants & listeners */
const grid = document.querySelector("#grid");

const gridCapacityButton = document.querySelector('#gridCapacity');
gridCapacityButton.addEventListener('click', () => setSquarePerSide())

const clearButton = document.querySelector("#clear");
clearButton.addEventListener('click', () => clearGrid(squaresPerSide))

const coloursButton = document.querySelector("#colours");
coloursButton.addEventListener('click', () => 
toggleActiveFill("randomColours"));
  
const greyScaleButton = document.querySelector("#greyScale");
greyScaleButton.addEventListener('click', () => 
toggleActiveFill("greyScale"));

/* variables */
let enteredSquaresPerSide,
squaresPerSide = 16,
fillStyle = "none",
toggleDrawing = false;

/* actual running code */
etchSketch(squaresPerSide);

/* functions */ 
function etchSketch(squaresPerSide) {
totalSquares = squaresPerSide * squaresPerSide
for (x = 1; x <= totalSquares; x++) {
    let name = "square" + x;
    name = document.createElement('div');
    name.classList.add("square", "zero");
    grid.appendChild(name);
    name.style.cssText = `height: ${750 / squaresPerSide}px;
                        width: ${750 / squaresPerSide}px;`
}

const squares = document.querySelectorAll('.square');
squares.forEach(square => {
    square.addEventListener('click', () => {
toggleDrawing ? toggleDrawing = false : toggleDrawing = true;
    })
});

squares.forEach(square => {
    square.addEventListener('mouseover', () => {
        if (toggleDrawing) {
            let shadePercentage = square.className.split(" ");
            switch(fillStyle) {
                case "greyScale":
                    switch(shadePercentage[1]) {
                        case "zero": 
                            square.classList.remove("zero")
                            square.classList.add("twenty")
                            break;
                        case "twenty": 
                            square.classList.remove("twenty")
                            square.classList.add("fourty")
                            break;
                        case "fourty": 
                            square.classList.remove("fourty")
                            square.classList.add("sixty")
                            break;
                        case "sixty": 
                            square.classList.remove("sixty")
                            square.classList.add("eighty")
                            break;
                        case "eighty": 
                            square.classList.remove("eighty")
                            square.classList.add("oneHundred")
                            break; 
                    }
                    square.style.cssText = `height: ${750 / squaresPerSide}px;
                                    width: ${750 / squaresPerSide}px;
                                    background-color: ${getGreyScale(shadePercentage[1])};`;
                    break;
                case "randomColours": 
                    square.style.cssText = `height: ${750 / squaresPerSide}px;
                    width: ${750 / squaresPerSide}px;
                    background-color: ${getColour()};`;
                    break;
                case "none": 
                    square.style.cssText = `height: ${750 / squaresPerSide}px;
                    width: ${750 / squaresPerSide}px;
                    background-color: rgb(255,255,255);`;
                }
            }
        })
    });
}

function getSquaresPerSide() {
    enteredValue = prompt("Enter number of squares per side. Returning to default (16).");
    if (enteredValue > 100) {
        alert("Maximum 100 per side!!")
        return 16;
    } else {
        let enteredSquaresPerSide = parseInt(enteredValue);
        return enteredSquaresPerSide; 
    }
}

function setSquarePerSide() {
    grid.replaceChildren(); 
    let enteredSquaresPerSide = getSquaresPerSide();
    squaresPerSide = enteredSquaresPerSide;
    etchSketch(squaresPerSide);
}

function clearGrid() {
    grid.replaceChildren(); 
    etchSketch(squaresPerSide);
}

function toggleActiveFill(fillStlye) {
    switch(fillStlye){
        case "greyScale":
            fillStyle == "greyScale"
            coloursButton.style.cssText = `background-color: none;`;
            greyScaleButton.style.cssText = `background-color: green;`;
            fillStyle == "greyScale" ? fillStyle = "none" : fillStyle = "greyScale";
            break;
        case "randomColours": 
        fillStyle == "randomColours"
            coloursButton.style.cssText = `background-color: green;`;
            greyScaleButton.style.cssText = `background-color: none;`;
            fillStyle == "randomColours" ? fillStyle = "none" : fillStyle = "randomColours";
            break;
        case "none":
            fillStyle == "none"
            coloursButton.style.cssText = `background-color: none;`;
            greyScaleButton.style.cssText = `background-color: none;`;
            break;
    }
}

function getRandomNumber(n) {
    randomNumber = Math.floor(Math.random() * n);
    return randomNumber;
}

function getColour() {
    r = getRandomNumber(255);
    g = getRandomNumber(255);
    b = getRandomNumber(255);
    rgb = "rgb(" + r + "," + g + "," + b + ")";
    return rgb;
}

function getGreyScale(shadePercentage) {
    switch(shadePercentage) {
        case "zero": 
            calc = parseInt(255 * 0.2);
            rgb = "rgb(" + calc + "," + calc + "," + calc + ")";
            return rgb;
        case "twenty": 
            calc = parseInt(255 * 0.4);
            rgb = "rgb(" + calc + "," + calc + "," + calc + ")";
            return rgb;
        case "fourty": 
            calc = parseInt(255 * 0.6);
            rgb = "rgb(" + calc + "," + calc + "," + calc + ")";
            return rgb;
        case "sixty": 
            calc = parseInt(255 * 0.8);
            rgb = "rgb(" + calc + "," + calc + "," + calc + ")";
            return rgb;
        case "eighty": 
            calc = parseInt(255 * 1);
            rgb = "rgb(" + calc + "," + calc + "," + calc + ")";
            return rgb;
        case "oneHundred": 
            calc = parseInt(255 * 1);
            rgb = "rgb(" + calc + "," + calc + "," + calc + ")";
            return rgb;
    }  
}