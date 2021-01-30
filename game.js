class Player {
  constructor(mark) {
    this.mark = mark;
  }
  placeMark(x, y) {
    board.board[x][y] = this.mark;
  }
}

class Board {
  constructor(player1, player2) {
    this.board = [['.','.','.'],
                  ['.','.','.'],
                  ['.','.','.']];
    this.player1 = player1;
    this.player2 = player2;
  }
  printBoard() {
    var result = '';
    for (var row = 0; row < this.board.length; row++) {
      for (var col = 0; col < this.board[row].length; col++) {
        result += this.board[row][col] + ' ';
      }
      result += '\n';
    }
    return result;
  }
  checkForWinner() {
    var flag = false;
    //check rows
    for (var row = 0; row < this.board.length; row++) {
      var arr = this.board[row].join('');
      if (arr == 'xxx' || arr == 'ooo') {
        flag = true;
      }
    }
    //check columns
    var result = '';
    for (var col = 0; col < this.board[0].length; col++) {
      for (var row = 0; row < this.board.length; row++) {
        result += this.board[row][col];
      }
      if (result == 'xxx' || result == 'ooo') {
        flag = true;
      }
    }
    //check diagonals
    var diag1 = this.board[0][0] + this.board[1][1] + this.board[2][2];
    var diag2 = this.board[2][0] + this.board[1][1] + this.board[0][2];
    if (diag1 == 'xxx' || diag1 == 'ooo') {
      return true;
    }
    if (diag2 == 'xxx' || diag2 == 'ooo') {
      return true;
    }
    return flag;
  }
}

var player1 = new Player('x');
var player2 = new Player('o');

var board = new Board(player1, player2);


player1.placeMark(0, 0);
player1.placeMark(1, 1);
player1.placeMark(2, 2);
console.log(board.printBoard());
console.log(board.checkForWinner());
