//var flag = 0;
var board = [];
var PlayerOne;

function setName(){
  PlayerOne = document.getElementById("PlayerOne").value;
  alert("O jogo vai começar!\n" + "(O)" + PlayerOne + ' x ' + ' CPU(X)');
}

function zera(){
  var id;
  for (var i = 0; i < 9; i++){
    id = 'block' + i;
    board[i] = undefined;
    document.getElementById(id).innerHTML = "<img src='images/empty.jpg'>";
    document.getElementById(id).removeAttribute("click");
    //fillBoard();
  }
}

function cpuPlay(fig){
  fig = 1;
  for(var i = 0; i < 8; i++){
    var n = Math.floor(Math.random() * 9);
    var id = 'block' + n;
    if(board[n] == undefined || board[n] == null){
      document.getElementById(id).innerHTML = "<img src='images/x.jpg'>";
      document.getElementById(id).removeAttribute("click");
      board[n] = fig;
      break;
    }
  }
  checkBoard();
}

function play(index, fig){
  board[index] = fig;
  checkBoard();
}

function reply_click(clicked_id){
  var index, fig;

//  if (flag == 0){
    document.getElementById(clicked_id).innerHTML = "<img src='images/o.jpg'>";
    document.getElementById(clicked_id).removeAttribute("click");
    index = clicked_id.slice(-1);
    fig = 0;
    play(index, fig);
    //el.getElementById(clicked_id).removeAttribute("click");
    //flag = 1;
    /*}else if(flag == 1){
    document.getElementById(clicked_id).innerHTML = "<img src='images/x.jpg'>";
    document.getElementById(clicked_id).removeAttribute("click");
    index = clicked_id.slice(-1);
    fig = 1;
    cpuPlay(fig);
    flag = 0;
  }*/
  cpuPlay(fig);
}

function fillBoard(){
  board = [];
  var id;
  for(var i = 0; i < 9; i++){
    id = 'block' + i;
    document.getElementById(id).innerHTML = "<img src='images/empty.jpg'>";
    document.getElementById(id).addEventListener("click", function(){
      reply_click(this.id);
    });
  }
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
    alert(PlayerOne + " (O) ganhou!");
    zera();
  }else if(board[0] == 1 && board[1] == 1 && board[2] == 1 ||
     board[3] == 1 && board[4] == 1 && board[5] == 1 ||
     board[6] == 1 && board[7] == 1 && board[8] == 1 ||//última horizontal
     board[0] == 1 && board[3] == 1 && board[6] == 1 ||
     board[1] == 1 && board[4] == 1 && board[7] == 1 ||
     board[2] == 1 && board[5] == 1 && board[8] == 1 ||//última vertical
     board[0] == 1 && board[4] == 1 && board[8] == 1 ||
     board[2] == 1 && board[4] == 1 && board[6] == 1){
    alert("CPU (X) ganhou!");
    zera();
  }
}

fillBoard();
