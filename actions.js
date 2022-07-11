var player = 1;

window.onload = function (){
    document.getElementById('grid-container').style.display = "none";
    document.getElementById('reset-button').style.display = "none";
    console.log("Hidden");
}

function showBoard(){
    document.getElementById('insturctions').style.display = "none";
    document.getElementById('play-button').style.display = "none";
    document.getElementById('grid-container').style.display = "block";
    document.getElementById('reset-button').style.display = "block";
    console.log("Change");
}

//document.getElementsByClassName('grid').addEventListener('click', 
function changeValue (id) {
    console.log(id);
    if(player == 1 && validClicked(id) ){
        document.getElementById(id).innerHTML = "X";
        player = 2;
    }else if(player == 2 && validClicked(id) ){
        document.getElementById(id).innerHTML = "O";
        player = 1;
    }
}

function validClicked(id){
    var valid = document.getElementById(id).innerHTML;
    console.log(valid)
    if(valid !== " - "){
        return false;
    }else{
        return true;
    }
}