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
    this.moves = [];
    this.getLegalMoves();
  }

  makeCopy() {
    var newBoard = new Board(this.player1, this.player2);
    for (var i = 0; i < this.moves.length; i++) {
      var currentMove = this.moves[i];
      newBoard.placeMark(currentMove[0], currentMove[1], currentMove[2]);
    }
    return newBoard;
  }

  placeMark(player, x, y) {
    this.board[x][y] = player.mark;
    this.moves.push([player, x, y]);
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
    if (diag1 == player1Win || diag2 == player1Win) {
      return 'Player 1';
    }
    else if (diag1 == player2Win || diag2 == player2Win) {
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

class OneLayerBot extends RandomBot{
  constructor(player) {
    super(player);
  }

  trySpot(arr, board) {
    var newBoard = board.makeCopy();
    newBoard.placeMark(this.player, arr[0], arr[1]);
    return (newBoard.checkForWinner() != 'Tie' ? true : false);
  }

  selectMove(board) {
    var possibleMoves = board.getLegalMoves();
    for (var i = 0; i < possibleMoves.length; i++) {
      if (this.trySpot(possibleMoves[i], board)) {
        return possibleMoves[i];
      }
    }
    return super.selectMove(board);
  }
}

function createGame() {
  var player1 = new Player('x');
  var player2 = new Player('o');
  var board = new Board(player1, player2);


  var bot1 = new RandomBot(player1);
  var bot2 = new OneLayerBot(player2);

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
  return board.checkForWinner();
}

console.log(createGame());

// var player1 = new Player('x');
// var player2 = new Player('o');
// var board = new Board(player1, player2);
//
// var randomBot = new RandomBot(player1);
// var oneLayerBot = new OneLayerBot(player2);
//
// var move1 = randomBot.selectMove(board);
// board.placeMark(player1, move1[0], move1[1]);
// console.log(move1);
// console.log(board.printBoard());
//
//
// var move2 = oneLayerBot.selectMove(board);
// board.placeMark(player2, move2[0], move2[1]);
// console.log(move2);
// console.log(board.printBoard());
//
// var move3 = randomBot.selectMove(board);
// board.placeMark(player1, move3[0], move3[1]);
// console.log(move3);
// console.log(board.printBoard());
//
// var move4 = oneLayerBot.selectMove(board);
// board.placeMark(player2, move4[0], move4[1]);
// console.log(move4);
// console.log(board.printBoard());
//
// var move5 = randomBot.selectMove(board);
// board.placeMark(player1, move5[0], move3[1]);
// console.log(move5);
// console.log(board.printBoard());
//
// var move6 = oneLayerBot.selectMove(board);
// board.placeMark(player2, move6[0], move4[1]);
// console.log(move6);
// console.log(board.printBoard());
