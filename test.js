//practice

// variables and arithmetic
var x, y, z;    // Statement 1
x = 5;          // Statement 2
y = 6;          // Statement 3
z = x + y;      // Statement 4
x--;

var a = "1";
var b = 1;
var c = 4+16+"string";



function addEmUp(x, y) {
  return x+y;
}
//arrays
var cars = ["volvo", "honda", "toyota"];
console.log(cars)


//objects
var board = {
  hash:0,
  array:[0,0,0,0,0,0,0,0,0]
};
function boardToString(board){
  var str = "";
  str += "hash:" + board.hash + "\n";
  for (var i = 0; i < board.array.length; i++) {
    str += board.array[i];
  }
  return str;
}
console.log(boardToString(board));

//strings
var word = 'elephant'
console.log(word.length);

var long = 'super long string that i want on \
  multiple lines so i use a backslash'
console.log(long)
