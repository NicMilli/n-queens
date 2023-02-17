/*           _
   ___  ___ | |_   _____ _ __ ___
  / __|/ _ \| \ \ / / _ \ '__/ __|
  \__ \ (_) | |\ V /  __/ |  \__ \
  |___/\___/|_| \_/ \___|_|  |___/

*/

// hint: you'll need to do a full-search of all possible arrangements of pieces!
// (There are also optimizations that will allow you to skip a lot of the dead search space)
// take a look at solversSpec.js to see what the tests are expecting


// return a matrix (an array of arrays) representing a single nxn chessboard, with n rooks placed such that none of them can attack each other



window.findNRooksSolution = function(n) {
  //   * takes n returns single matrix
  //   create the board => board = new Board({n:n})
  //   create a solution variable as empty array
  var matrix = new Board({n: n});
  //console.log('matrix: ', matrix, ')
  var solution = [];
  var col = 0;
  var row = 0;
  while (col < n && row < n) {
    matrix.togglePiece(row, col);
    solution.push(matrix.get(row));
    row++;
    col++;
  }
  console.log('Single solution for ' + n + ' rooks:', JSON.stringify(solution));
  return solution;
  // ===> while loop - while col < n & row < n
  //       add a rook
  //       row++
  //       col++
  //
  // check for mistake then push board to solution
  //return solution;
};

// return the number of nxn chessboards that exist, with n rooks placed such that none of them can attack each other
window.countNRooksSolutions = function(n) {
  if (n === 0) {
    return 0;
  }
  var solutionCount = 1; //fixme
  for (let i = 0; i < n; i++) {
    solutionCount *= (n - i);
  }

  console.log('Number of solutions for ' + n + ' rooks:', solutionCount);
  return solutionCount;
};

// return a matrix (an array of arrays) representing a single nxn chessboard, with n queens placed such that none of them can attack each other
window.findNQueensSolution = function(n) {
  var solution = [];
  var matrix = new Board({n: n});
  var found = false;

  var innerFunction = function(rowNum = 0) {
    for (var col = 0; col < n; col++) {
      if (found) {
        return;
      }
      matrix.togglePiece(rowNum, col);
      //solution[rowNum] = matrix.get(rowNum);
      if (!matrix.hasAnyQueensConflicts()) {

        if (rowNum === n - 1) {
          found = true;
          solution = JSON.parse(JSON.stringify(matrix.rows()));
          return;
        }
        innerFunction(rowNum + 1);
      }
      matrix.togglePiece(rowNum, col);
    }
  };

  // for (var i = 0; i <= Math.ceil(n / 2); i++) {
  //   matrix.togglePiece(0, i);
  //   innerFunction();
  //   matrix.togglePiece(0, i);
  // }
  innerFunction(0);
  if (solution.length === 0) {
    return matrix.rows();
  }
  //   *takes number input n
  // Create a board!
  // create an empty return var

  // innerFunction for recursion { => takes in row number
  //  -> run a loop 1-n for columns
  //  -> places queen, checks for collisions, if none recursively calls
  //     else continue to next position
  //  -> if row = n and can place add to solns push to return var
  //  -> likely use togglePiece fn to add/remove piece but must. check
  // }
  //innerFunction(0)

  // return returnVar

  console.log('Single solution for ' + n + ' queens:', JSON.stringify(solution));
  return solution;
};

// return the number of nxn chessboards that exist, with n queens placed such that none of them can attack each other
window.countNQueensSolutions = function(n) {
  if (n === 0) {
    return 1;
  }

  var solutionCount = 0;
  var matrix = new Board({n: n});

  var innerFunction = function(rowNum = 0) {
    for (var col = 0; col < n; col++) {
      matrix.togglePiece(rowNum, col);
      //solution[rowNum] = matrix.get(rowNum);
      if (!matrix.hasAnyQueensConflicts()) {

        if (rowNum === n - 1) {
          solutionCount++;
          matrix.togglePiece(rowNum, col);
          return;
        }
        innerFunction(rowNum + 1);
      }
      matrix.togglePiece(rowNum, col);
    }
  };

  innerFunction(0);

  console.log('Number of solutions for ' + n + ' queens:', solutionCount);
  return solutionCount;
};
