function squaresOfMax(a, b, c) {
  var res = a > b && (c > b && [a, c] || [a, b]) || c > a && [b, c] || [a, b];
  return res[0]*res[0] + res[1]*res[1];
}

function drawTriangle() {
  var len = 7, char = '#';
  var wall = new Array(len + 1).join(char);
  for (var i = 1; i <= len; ++i) {
    console.log(wall.substr(0, i));
  }
}

function fizzBuzz() {
  for (i = 1; i <= 100; i++) {
    console.log((i % 3 ? '' : 'Fizz') + (i % 5 ? '' : 'Buzz') || i);
  }
}

function chessBoard(size) {
  // Write a program that creates a string that represents an 8×8 grid,
  // using newline characters to separate lines. At each position of the
  // grid there is either a space or a “#” character. The characters
  // should form a chess board.
  //
  // Passing this string to console.log should show something like this:
  //
  //  # # # #
  // # # # #
  //  # # # #
  // # # # #
  //  # # # #
  // # # # #
  //  # # # #
  // # # # #
  //
  // When you have a program that generates this pattern,
  // define a variable size = 8 and change the program so that
  // it works for any size, outputting a grid of the given width and height.
}

module.exports.squaresOfMax = squaresOfMax;
module.exports.drawTriangle = drawTriangle;
module.exports.fizzBuzz = fizzBuzz;
module.exports.chessBoard = chessBoard;
