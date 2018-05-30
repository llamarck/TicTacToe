var flag = 0;

function createBoard(){
  var board = [];
}

function play(index, fig){
  var board = createBoard();
  board[index] = fig;
}

function checkBoard(){
  if(board[0] && board[1] && board[2] == 0 || board[0] && board[3] && board[7] || board[0] && board[4] && board[8] || board[0] && board[1] && board[2]){
    alert("O ganhou!");
  }else if(){

  }
}

function fillBoard(){
  var id;
  for(var i = 1; i < 10; i++){
    id = 'block' + i;
    document.getElementById(id).innerHTML = "<img src='images/empty.jpg'>";
    console.log(id);
  }
  //document.getElementById();
}
createBoard();
fillBoard();

function reply_click(clicked_id){
  var index, fig;

  if (flag == 0){
    document.getElementById(clicked_id).innerHTML = "<img src='images/o.jpg'>";
    document.getElementById(clicked_id).removeAttribute("onclick");
    index = clicked_id.length - 1;
    fig = 0;
    play(index, fig);
    flag = 1;
  }else if(flag == 1){
    document.getElementById(clicked_id).innerHTML = "<img src='images/x.jpg'>";
    document.getElementById(clicked_id).removeAttribute("onclick");
    index = clicked_id.length - 1;
    fig = 1;
    play(index, fig);
    flag = 0;
  }
}
