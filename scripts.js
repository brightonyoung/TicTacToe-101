let board = [
  ["", "", ""],["", "", ""],["", "", ""]
];
let currentMarker = 'X';


const handleClick = (element) => {

  row = parseInt(element.id.charAt(0));
  column = parseInt(element.id.charAt(2));

  console.log(`The element you clicked on has an id:  ${element.id}`)
  board[row][column] = currentMarker;

  if(!document.getElementById(element.id).innerHTML){
    addMarker(element.id)
  }
}


// this function places the "currentMarker" inside the HTML element that was clicked and calls the
// "changeMarker" function.


const addMarker = (id) => {

  console.log(`*** The current marker is:  ${currentMarker}. ***`)
  console.log(`Therefore, a  "${currentMarker}"  should be placed in the square with the id:  ${id}`, row, column)
  
  document.getElementById(id).innerHTML = currentMarker; 

  
  checkForWin();

}







// This "changeMarker" function changes "X" to "O" in the "currentMarker" variable or "O" to "X"
const changeMarker = () => {
  if(currentMarker === "X"){
    currentMarker = "O"
  } else {
    currentMarker = "X"
  }
}






// This "resetBoard" function is called when the user clicks on the "Restart" button.
const resetBoard = () => {

  const squares = document.getElementsByTagName("TD")
  
  // loops over the HTML Collection of TDs and clears out the Xs and Os
  for (i=0; i < squares.length; i++) {

    // will log out the id of each square as it loops over them.
    console.log(squares[i].id)

    // sets the innerHTML to null to replace the "X" or "O"
    squares[i].innerHTML = null

    location.reload();
    return false;
  }  
}


// Check for win!

const checkForWin = () => {
  if(horizontalWin() || verticalWin() || diagonalWin()) {
    window.alert(`Player ${currentMarker} won!`)
  } else {
    changeMarker()
  }
}

const horizontalWin = () => {
  if((board[0][0] == "X" && board[0][1] == "X" && board[0][2] == "X") || (board[0][0] == "O" && board[0][1] == "O" && board[0][2] == "O")){
    return('you win')
  } else if((board[1][0] == "X" && board[1][1] == "X" && board[1][2] == "X") || (board[1][0] == "O" && board[1][1] == "O" && board[1][2] == "O")){
    return('you win')
  } else if((board[2][0] == "X" && board[2][1] == "X" && board[2][2] == "X") || (board[2][0] == "O" && board[2][1] == "O" && board[2][2] == "O")){
    return('you win')
  }
}

const verticalWin = () => {
  if ((board[0][0] == "X" && board[1][0] == "X" && board[2][0] == "X") || (board[0][0] == "O" && board[1][0] == "O" && board[2][0] == "O")){
    return("you win")
  } else if((board[0][1] == "X" && board[1][1] == "X" && board[2][1] == "X") || (board[0][1] == "O" && board[1][1] == "O" && board[2][1] == "O")){
    return("you win")
  } else if((board[0][2] == "X" && board[1][2] == "X" && board[2][2] == "X") || (board[0][2] == "O" && board[1][2] == "O" && board[2][2] == "O")){
    return("you win")
  }
}

const diagonalWin = () => {
  if((board[0][0] == "X" && board[1][1] == "X" && board[2][2] == "X") || (board[0][0] == "O" && board[1][1] == "O" && board[2][2] == "O")) {
    return('you win')
  } else if((board[0][2] == "O" && board[1][1] == "O" && board[2][0] == "O") || (board[0][2] == "X" && board[1][1] == "X" && board[2][0] == "X")){
    return('you win')
  }
}