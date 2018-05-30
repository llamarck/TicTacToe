var flag = 0;
var board = [];
var PlayerOne, PlayerTwo;

function setNames(PlayerOne, PlayerTwo){
  PlayerOne = document.getElementById("PlayerOne").innerText;
  PlayerTwo = document.getElementById("PlayerTwo").innerText;
}

function checkBoard(){
  if(board[0] == 0 && board[1] == 0 && board[2] == 0 ||
     board[3] == 0 && board[4] == 0 && board[5] == 0 ||
     board[6] == 0 && board[7] == 0 && board[8] == 0 ||//última horizontal
     board[0] == 0 && board[3] == 0 && board[6] == 0 ||
     board[1] == 0 && board[4] == 0 && board[7] == 0 ||
     board[2] == 0 && board[5] == 0 && board[8] == 0 ||//última vertical
     board[0] == 0 && board[4] == 0 && board[8] == 0 ||
     board[2] == 0 && board[4] == 0 && board[6] == 0){
    alert("0 ganhou!");
    fillBoard();
  }else if(board[0] == 1 && board[1] == 1 && board[2] == 1 ||
     board[3] == 1 && board[4] == 1 && board[5] == 1 ||
     board[6] == 1 && board[7] == 1 && board[8] == 1 ||//última horizontal
     board[0] == 1 && board[3] == 1 && board[6] == 1 ||
     board[1] == 1 && board[4] == 1 && board[7] == 1 ||
     board[2] == 1 && board[5] == 1 && board[8] == 1 ||//última vertical
     board[0] == 1 && board[4] == 1 && board[8] == 1 ||
     board[2] == 1 && board[4] == 1 && board[6] == 1){
    alert("X ganhou!");
    fillBoard();
  }
}

function play(index, fig){
  board[index] = fig;
  checkBoard();
}

function fillBoard(){
  var id;
  for(var i = 1; i < 10; i++){
    id = 'block' + i;
    document.getElementById(id).innerHTML = "<img src='images/empty.jpg'>";
    console.log(id);
  }
}

fillBoard();

function reply_click(clicked_id){
  var index, fig;

  if (flag == 0){
    document.getElementById(clicked_id).innerHTML = "<img src='images/o.jpg'>";
    document.getElementById(clicked_id).removeAttribute("onclick");
    index = clicked_id.slice(-1);
    fig = 0;
    play(index, fig);
    flag = 1;
  }else if(flag == 1){
    document.getElementById(clicked_id).innerHTML = "<img src='images/x.jpg'>";
    document.getElementById(clicked_id).removeAttribute("onclick");
    index = clicked_id.slice(-1);
    fig = 1;
    play(index, fig);
    flag = 0;
  }
}
