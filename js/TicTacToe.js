var flag = 0;

function createBoard(){
  var board = [];
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

fillBoard();

function reply_click(clicked_id){
  if (flag == 0){
    document.getElementById(clicked_id).innerHTML = "<img src='images/o.jpg'>";
    document.getElementById(clicked_id).removeAttribute("onclick");
    flag = 1;
  }else if(flag == 1){
    document.getElementById(clicked_id).innerHTML = "<img src='images/x.jpg'>";
    document.getElementById(clicked_id).removeAttribute("onclick");
    flag = 0;
  }
}
