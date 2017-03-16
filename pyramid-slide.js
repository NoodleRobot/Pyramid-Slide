function drawPyramid(height) {

 
    document.getElementById("pyramid").innerHTML = "";

    //loop through rows
    for (var row = 0; row < height; row++) {

        
        var numBricks = row + 2;
        var numSpaces = height - row - 1;

        var rowStr = "";
        for (var i = 0; i < numSpaces; i++) {
            var spaceChar = "&nbsp";
            rowStr += spaceChar;
        }
        for (var i = 0; i < numBricks; i++) {
            var brick = document.getElementById("brickType").value;
            rowStr += brick;
        }

        
        rowElem = document.createElement("p");
        rowElem.innerHTML = rowStr;
        document.getElementById("pyramid").appendChild(rowElem);
    }
};






