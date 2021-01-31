class Player {
  constructor(mark) {
    this.mark = mark;
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
    this.getLegalMoves();
  }

  placeMark(player, x, y) {
    this.board[x][y] = player.mark;
    this.getLegalMoves();
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
    this.legalMoves = [];
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
    var player1Win = this.player1.mark.repeat(3);
    var player2Win = this.player2.mark.repeat(3);

    //check rows
    for (var row = 0; row < this.board.length; row++) {
      var arr = this.board[row].join('');
      if (arr == player1Win) {
        return 'Player 1';
      }
      else if (arr == player2Win) {
        return 'Player 2';
      }
    }

    //check columns
    var result = '';
    for (var col = 0; col < this.board[0].length; col++) {
      for (var row = 0; row < this.board.length; row++) {
        result += this.board[row][col];
      }
      if (result == player1Win) {
        return 'Player 1';
      }
      else if (result == player2Win) {
        return 'Player 2';
      }
      result = '';
    }

    //check diagonals
    var diag1 = this.board[0][0] + this.board[1][1] + this.board[2][2];
    var diag2 = this.board[2][0] + this.board[1][1] + this.board[0][2];
    if (diag1 == player1Win) {
      return 'Player 1';
    }
    else if (diag1 == player2Win) {
      return 'Player 2';
    }
    if (diag2 == player1Win) {
      return 'Player 1';
    }
    else if (diag2 == player2Win) {
      return 'Player 2';
    }
    return 'Tie';
  }
}

class RandomBot {
  constructor(player) {
    this.player = player;
  }
  selectMove(board) {
    var limit = board.legalMoves.length;
    var move = Math.floor(Math.random() * limit);
    return board.legalMoves[move];
  }
}

class oneLayerBot {
  constructor(player, board) {

  }
}

function createGame() {
  var player1 = new Player('x');
  var player2 = new Player('o');
  var board = new Board(player1, player2);


  var bot1 = new RandomBot(player1);
  var bot2 = new RandomBot(player2);

  console.log(board.printBoard());
  var count = 0;
  var bot;
  while (board.legalMoves.length > 0 && board.checkForWinner() == 'Tie') {
    if (count % 2 == 0) {
      bot = bot1;
    }
    else {
      bot = bot2;
    }
    var move = bot.selectMove(board);
    console.log(move);
    board.placeMark(bot.player, move[0], move[1])
    console.log(board.printBoard());
    count++;
  }
  console.log(board.checkForWinner());
}

createGame();

// var player1 = new Player('x');
// var player2 = new Player('o');
// var board = new Board(player1, player2);
//
// board.placeMark(player1, 0,1);
// board.placeMark(player1, 1,1);
// board.placeMark(player1, 2,1);
// console.log(board.checkForWinner());
