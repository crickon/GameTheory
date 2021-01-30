const _combinations = 3;
const _length = 9;
const _rowLength = 3;

// creating boards
function getBlankBoard() {
  return createBoard([]);
}
function createBoard(arr) {
  var board = {
    hash:0,
    array:[0,0,0,0,0,0,0,0,0],
    setSpace : function(i, j) {
      if (j >= 0 && j <= 2 && this.array[i] == 0) {
        this.array[i] = j;
        this.hash = hash(this.array);
        return true;
      }else{
        return false;
      }
    }
  };
  if (arr.length == _length) {
    board.hash = hash(arr);
    board.array = arr;
    return board;
  }
  return board;
}

//help functions
function hash(arr){
  var temp = 0;
  for (var i = 0; i < arr.length; i++){
    temp += _combinations**i * arr[i];
  }
  return temp;
}
function boardString(board) {
  var str = "hash:"+board.hash+"\n";
  for (var i=0; i < _rowLength; i++) {
    for (var j= i * _rowLength; j < (i+1) * _rowLength; j++) {
      str += board.array[j] + " ";
    }
    str += "\n";
  }
  return str;
}
function potentialBoards(board, space) {
  var a = board.array;


}
function winningBoard(board) {
  var a = board.array;
  console.log(a[6],a[7],a[8]);
  //check horizontals
  if (a[0] == a[1] && a[0] == a[2]) { return a[0]; }
  else if (a[3] == a[4] && a[3] == a[5]) { return a[3]; }
  else if (a[6] == a[7] && a[6] == a[8]) { return a[6]; }
  console.log(a[6],a[7],a[8]);
  //check verticals
  if (a[0] == a[3] && a[0] == a[6]) { return a[0]; }
  else if (a[1] == a[4] && a[1] == a[7]) { return a[1]; }
  else if (a[2] == a[5] && a[2] == a[6]) { return a[2]; }
  //check diagonals
  if (a[0] == a[4] && a[0] == a[8]) { return a[0]; }
  else if (a[2] == a[4] && a[2] == a[6]) { return a[2]; }
  return 0;
}

// script
var blank = getBlankBoard();
blank.setSpace(6, 2);
blank.setSpace(7, 2);
blank.setSpace(8, 2);
console.log(boardString(blank));
console.log("winner = " + winningBoard(blank));
