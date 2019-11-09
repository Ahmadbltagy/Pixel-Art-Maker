function makeGrid(height, width) {
    var pixelCanvas = document.getElementById('pixelCanvas');
    var grid = '';
    for(let i = 0; i < height; i++){
        grid += '<tr class = "row - ' + i + '">';
        for(let j = 0; j < width; j++){
            grid += '<td class = "cell ' + j + '"></td>';

        }
        grid += '</tr>';
    }
    pixelCanvas.innerHTML = grid;

    changeColor();
}

function submission() {
    event.preventDefault(); 
    var height = document.getElementById('inputHeight').value; 
    var width = document.getElementById('inputWidth').value; 
    makeGrid(height, width);
}

function changeColor() {
    var colorPicker = document.getElementById('colorPicker');
    var cell = document.getElementsByClassName('cell');
    
    for(let i = 0; i < cell.length; i++){
        cell[i].addEventListener("click", function (event) {
            let cellPicker = event.target;
            cellPicker.style.backgroundColor = colorPicker.value;
        });
    }
}

document.getElementById('sizePicker').onsubmit = function(){
    submission();
}