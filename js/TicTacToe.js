function createBoard(){
  var board = [];
}

<img src="path" onclick>

function (){
  var id;
  for(var i = 1; i < 10; i++){
    id = 'block' + i;
    document.getElementById(id).addEventListener("click", changePic());
  }
}

function fillBoard(){
  var id;
  for(var i = 1; i < 10; i++){
    id = 'block' + i;
    document.getElementById(id).innerHTML = "<img src='empty.jpg'>";
    console.log(id);
  }
  //document.getElementById();
}

fillBoard();
