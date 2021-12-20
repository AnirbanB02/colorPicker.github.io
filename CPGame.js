var numSquares = 6;
var colors = generateRandomColors(numSquares);
var pickedColor = pickColor();
var colorClicked;
var squares = document.querySelectorAll(".square");
var displayColor = document.querySelector("#rgb");
var displaymessage = document.querySelector("#message");
var h1 = document.querySelector("h1");
var rButton = document.querySelector("#reset");
var easy = document.querySelector("#easyBtn");
var hard = document.querySelector("#hardBtn");

hard.addEventListener("click", function(){
    h1.style.backgroundColor = "steelblue"
    easy.classList.remove("selected");
    hard.classList.add("selected");

    numSquares = 6;
    colors = generateRandomColors(numSquares);
    pickedColor = pickColor();
    displayColor.textContent = pickedColor;

    for(var i = 0; i < squares.length; i++){
        squares[i].style.backgroundColor = colors[i];
        squares[i].style.display = "block";
    }
});
easy.addEventListener("click", function(){
    h1.style.backgroundColor = "steelblue"
    easy.classList.add("selected");
    hard.classList.remove("selected");

    numSquares = 3;
    colors = generateRandomColors(numSquares);
    pickedColor = pickColor();
    displayColor.textContent = pickedColor;

    for(var i = 0; i < squares.length; i++){
        if(colors[i]){
            squares[i].style.backgroundColor = colors[i];
        }
        else{
            squares[i].style.display = "none";
        }
    }
});

rButton.addEventListener("click", function(){
    //get new colors
    colors = generateRandomColors(numSquares);
    //pick color
    pickedColor = pickColor();
    //set diaplay message
    displayColor.textContent = pickedColor;
    //set colors to the squares
    for(var i=0; i < squares.length; i++){
        squares[i].style.backgroundColor = colors[i];
    }
    h1.style.backgroundColor = "steelblue";
    displaymessage.textContent = "";
    rButton.textContent = "New Colors"
});

displayColor.textContent = pickedColor;
for (var i = 0; i< squares.length; i++)
{
    squares[i].style.backgroundColor = colors[i];
    
    squares[i].addEventListener("click", function(){
        //grab color
        colorClicked = this.style.backgroundColor;
        //compare color
        if(colorClicked === pickedColor){
            changeColors(colorClicked);
            displaymessage.textContent = "CORRECT!!!!!";
            h1.style.backgroundColor = pickedColor;
            rButton.textContent = "Play Again??"
        }
        else{
            displaymessage.textContent = "TRY AGAIN!!";
            this.style.backgroundColor = "#232323";
        }
    });

}
function changeColors(color) {
    for (var j = 0; j < squares.length; j++) {
        squares[j].style.backgroundColor = color;
    }
}
function pickColor(){
    random = Math.floor(Math.random()*colors.length);
    return (colors[random]);
}
function generateRandomColors(num){
    var arr = [];
    for(var k = 0; k < num; k++){
        arr.push(randomColor()); 
    }
    return arr;
}
function randomColor(){
    var r = Math.floor(Math.random()*256);
    var g = Math.floor(Math.random()*256);
    var b = Math.floor(Math.random()*256);
    var c = `rgb(${r}, ${g}, ${b})`;
    return c; 
}