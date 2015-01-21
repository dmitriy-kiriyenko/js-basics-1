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
  // Write a program that uses console.log to print all the numbers from 1 to 100,
  // with two exceptions. For numbers divisible by 3, print "Fizz" instead of the number,
  // and for numbers divisible by 5 (and not 3), print "Buzz" instead.
  //
  // When you have that working, modify your program to print "FizzBuzz",
  // for numbers that are divisible by both 3 and 5 (and still print "Fizz"
  // or "Buzz" for numbers divisible by only one of those).
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
