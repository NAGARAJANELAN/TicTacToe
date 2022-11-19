player = "X";
var gameOver = false;
var movesPlayed = 0;

const blank="&nbsp;&nbsp;&nbsp;&nbsp;";

const A = document.getElementById("A");
const B = document.getElementById("B");
const C = document.getElementById("C");
const D = document.getElementById("D");
const E = document.getElementById("E");
const F = document.getElementById("F");
const G = document.getElementById("G");
const H = document.getElementById("H");
const I = document.getElementById("I");

const buttons = document.getElementsByTagName("tr");

const buttonPressed = (e) => {
  click(e.target.id);
};
for (let button of buttons) {
  button.addEventListener("click", buttonPressed);
}

function click(id) {
  if (gameOver == true) {
    return;
  }

  const tile = document.getElementById(id);
  if (tile.innerHTML != "&nbsp;&nbsp;&nbsp;&nbsp;") {
    return;
  }

  movesPlayed++;
  if (player === "X") {
    tile.style.color = "red";
    tile.innerHTML = "&nbsp;X&nbsp;";
    player = "O";
  } else {
    tile.style.color = "blue";
    tile.innerHTML = "&nbsp;O&nbsp;";
    player = "X";
  }
  if(movesPlayed==9){
    win = document.getElementById("winner");
    win.style.color='gold';
    win.innerHTML=" Tie !"
  }
}

const Board = document.getElementById("Board");
const refresh = document.getElementById("refresh");

Board.addEventListener("click", check);
refresh.addEventListener("click", cleanBoard);

function check() {
  if (gameOver == true) {
    return;
  }


  if (A.innerHTML == B.innerHTML && B.innerHTML == C.innerHTML) {
    if (A.innerHTML != blank) {
    gameOver = true;
    colorTiles(A, B, C);
    showWinner(A);
    return;
    }
  }if (D.innerHTML == E.innerHTML && E.innerHTML == F.innerHTML) {
    if (D.innerHTML != blank) {
    gameOver = true;
    colorTiles(D, E, F);
    showWinner(D);
    return;
    }
  }if (G.innerHTML == H.innerHTML && H.innerHTML == I.innerHTML) {
    if (G.innerHTML != blank) {
    
    gameOver = true;
    colorTiles(G, H, I);
    showWinner(G);
    return;
  }
  }if (A.innerHTML == D.innerHTML && D.innerHTML == G.innerHTML) {
    if (A.innerHTML != blank) {
      
    gameOver = true;
    colorTiles(A, D, G);
    showWinner(A);
    return;
  }
  }if (B.innerHTML == E.innerHTML && E.innerHTML == H.innerHTML) {
    if (B.innerHTML != blank) {
      
      
    gameOver = true;
    colorTiles(E, B, H);
    showWinner(B);
    return;}
  }if (C.innerHTML == F.innerHTML && F.innerHTML == I.innerHTML) {
    if (C.innerHTML != blank) {
      
      
    gameOver = true;
    colorTiles(C, F, I);
    showWinner(C);
    return;
    }
  } if (A.innerHTML == E.innerHTML && E.innerHTML == I.innerHTML) {
    if (A.innerHTML !=blank) {
      
    gameOver = true;
    colorTiles(A, E, I);
    showWinner(A);
    return;
    }
  }if (C.innerHTML == E.innerHTML && E.innerHTML == G.innerHTML) {
    if (C.innerHTML != blank) {
    
    gameOver = true;
    colorTiles(E, G, C);
    showWinner(C);
    return;
    }
  }
}

function colorTiles(a, b, c) {
  a.style.backgroundColor = "#C66CD6";
  b.style.backgroundColor = "#C66CD6";
  c.style.backgroundColor = "#C66CD6";
}

function showWinner(A) {
  const win = document.getElementById("winner");
  if (A.innerHTML == "&nbsp;X&nbsp;") {
    win.style.color = "red";
  } else {
    win.style.color = "blue";
  }

  win.innerHTML = A.innerHTML + " has Won !";
}

function cleanBoard() {
  A.innerHTML = blank;
  B.innerHTML = blank;
  C.innerHTML = blank;
  D.innerHTML = blank;
  E.innerHTML = blank;
  F.innerHTML = blank;
  G.innerHTML = blank;
  H.innerHTML = blank;
  I.innerHTML = blank;

  A.style.backgroundColor = "lightblue";
  B.style.backgroundColor = "lightblue";
  C.style.backgroundColor = "lightblue";
  D.style.backgroundColor = "lightblue";
  E.style.backgroundColor = "lightblue";
  F.style.backgroundColor = "lightblue";
  G.style.backgroundColor = "lightblue";
  H.style.backgroundColor = "lightblue";
  I.style.backgroundColor = "lightblue";

  movesPlayed = 0;
  gameOver = false;

  const win = document.getElementById("winner");
  win.innerHTML = blank;
}
