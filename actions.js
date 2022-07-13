var player = 1;
var board = [
    ['-','-','-'],
    ['-','-','-'],
    ['-','-','-'],
];

//Hides the board upon the window loading 
window.onload = function (){
    document.getElementById('grid-container').style.display = "none";
    document.getElementById('reset-button').style.display = "none";
    console.log("Hidden");
}

//hides the instructions and shows the board 
function showBoard(){
    document.getElementById('insturctions').style.display = "none";
    document.getElementById('play-button').style.display = "none";
    document.getElementById('grid-container').style.display = "";
    document.getElementById('reset-button').style.display = "block";
}

//Makes the change to the inner text of the grid
function changeValue (id) {
    if(player == 1 && validClick(id) ){
        document.getElementById(id).innerHTML = "X";
        updateBoard(id,'X');
        player = 2; //changes the current player
    }else if(player == 2 && validClick(id) ){
        document.getElementById(id).innerHTML = "O";
        updateBoard(id,'O');
        player = 1; //changes player
    }
    console.log(board.toString());
}

//Checks wheather the move is valid or not
//prevents the symbole from being changed after one click
function validClick(id){
    var valid = document.getElementById(id).innerHTML;
    if(valid != " - "){ //inner text 
        return false;
    }else{
        return true;
    }
}

//updates the array object
function updateBoard (id, gridsymbol) {
    switch (id) {
    case 'b1': 
        board[0][0] = gridsymbol;
        break;
    case 'b2': 
        board[0][1] = gridsymbol;
        break; 
    case 'b3': 
        board[0][2] = gridsymbol;
        break;
    case 'b4':
        board[1][0] = gridsymbol;
        break;
    case 'b5':
        board[1][1] = gridsymbol;
        break;
    case 'b6':
        board[1][2] = gridsymbol;
        break;
    case 'b7':
        board[2][0] = gridsymbol;
        break;
    case 'b8':
        board[2][1] = gridsymbol;
        break;
    case 'b9':
        board[2][2] = gridsymbol;
        break;       
               
}
}
