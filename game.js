class Player {
  constructor(mark) {
    this.mark = mark;
    this.moves = [];
    this.movesCount = 0;
  }

}

class RandomBot extends Player {
  constructor(mark) {
    super(mark);
  }

}

class Board {
  constructor(player1, player2) {
    this.board = [['.','.','.'],
                  ['.','.','.'],
                  ['.','.','.']];
    this.player1 = player1;
    this.player2 = player2;
    this.legalMoves = [];
  }

  placeMark(player, x, y) {
    this.board[x][y] = player.mark;
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

  getLegalMoves() {
    for (var row = 0; row < this.board.length; row++) {
      for (var col = 0; col < this.board[row].length; col++) {
        if (this.board[row][col] == '.') {
          this.legalMoves.push([row,col]);
        }
      }
    }
    return this.legalMoves;

  }
  checkForWinner() {
    var player1Win = player1.mark.repeat(3);
    var player2Win = player2.mark.repeat(3);
    var winner = 'None'
    //check rows
    for (var row = 0; row < this.board.length; row++) {
      var arr = this.board[row].join('');
      if (arr == player1Win) {
        winner = 'Player 1';
      }
      else if (arr == player2Win) {
        winner = 'Player 2';
      }
    }
    //check columns
    var result = '';
    for (var col = 0; col < this.board[0].length; col++) {
      for (var row = 0; row < this.board.length; row++) {
        result += this.board[row][col];
      }
      if (result == player1Win) {
        winner = 'Player 1';
      }
      else if (result == player2Win) {
        winner = 'Player 2';
      }
    }
    //check diagonals
    var diag1 = this.board[0][0] + this.board[1][1] + this.board[2][2];
    var diag2 = this.board[2][0] + this.board[1][1] + this.board[0][2];
    if (diag1 == player1Win) {
      winner = 'Player 1';
    }
    else if (diag1 == player2Win) {
      winner = 'Player 2';
    }
    if (diag2 == player1Win) {
      winner = 'Player 1';
    }
    else if (diag2 == player2Win) {
      winner = 'Player 2';
    }
    return winner;
  }
}

var player1 = new Player('x');
var player2 = new Player('o');

var board = new Board(player1, player2);
board.placeMark(player1,0,0);
board.placeMark(player2,1,2);
board.placeMark(player1,2,2);
board.placeMark(player1,1,1);


console.log(board.printBoard());
console.log(board.getLegalMoves());
console.log(board.checkForWinner());
