function squaresOfMax(a, b, c) {
  return a > b && c > b && a*a+c*c || c > a && b*b+c*c || a*a+b*b;
}

function drawTriangle() {
  var len = 7, char = '#';
  var wall = new Array(len + 1).join(char);
  for (var i = 1; i <= len; ++i) {
    console.log(wall.substr(0, i));
  }
}

function fizzBuzz() {
  for (var i = 1; i <= 100; i++) {
    console.log((i % 3 ? '' : 'Fizz') + (i % 5 ? '' : 'Buzz') || i);
  }
}

function chessBoard(size) {
  var line = Array.apply(null, new Array(~~(size/2) + 1)).map(
    function () { return ' '; }
  ).join('#');

  return Array.apply(null, new Array(size)).map(
    function (_, i) { return line.substr(i%2, size); }
  ).join('\n');
}

module.exports.squaresOfMax = squaresOfMax;
module.exports.drawTriangle = drawTriangle;
module.exports.fizzBuzz = fizzBuzz;
module.exports.chessBoard = chessBoard;
