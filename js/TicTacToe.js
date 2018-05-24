function createBoard(){
  var board = [];
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



/*var board = [];

for(var i = 0; i < 9; i++){
  //board[i] = document.getElementBy
  alert(board[i]);
}*/

//document.getElementByClassName('teste').appendChild(img);

/*function fill(){
  var img = document.createElement("img");
  img.src = 'empty.jpg';
  var x;
  for(var i = 1; i < 10; i++){
    img.
    x = "block" + i;
    console.log(x);
    var td = document.getElementById(x);
  }

  td.appendChild(img);

  /*for(var i = 0; i < 9; i++){
    var img = "<img src='empty.jpg'>";
    document.getElementByClassName("teste").textContent = "<img src='empty.jpg'>";
  }
}*/

//fill();

/*function setBlank(board){
  for (var i = 0; i < 8; i++){
    board.p1
  }
}

var board = {
  p1:document.getElementById("block1").innerHTML,
  p2:document.getElementById("block2").innerHTML,
  p3:document.getElementById("block3").innerHTML,
  p4:document.getElementById("block4").innerHTML,
  p5:document.getElementById("block5").innerHTML,
  p6:document.getElementById("block6").innerHTML,
  p7:document.getElementById("block7").innerHTML,
  p8:document.getElementById("block8").innerHTML,
  p9:document.getElementById("block9").innerHTML
};

/*
function fillBoard(){
  for (var i = 0; i < 9; i++){
    board.p[i] = "";
  }
} */

/*function getName(){
  var playerOne = document.getElementById("PlayerOne").innerHTML;
  var playerTwo = document.getElementById("PlayerTwo").innerHTML;
}

var flag = 0;

var btn = document.querySelector('query');

function checkFlag(flag){
  if(flag){
    flag = 0;
  }else{
    flag = 1;
  }
}
*/
