/*  MatrixRotator(matrix)
 *
 *  @param matrix                        a multidimensional array containing the matrix
 *
 *  @public property matrix              the matrix
 *
 *  @public method rotate(direction)     direction is either
 *                                       Direction.CW or Direction.CWW
 *        @returns the rotated matrix
 */
exports.MatrixRotator = MatrixRotator;
var Direction = require("./Direction").Direction;

function MatrixRotator(matrix) {
  this.matrix = matrix;

};

//                                         |-- Must be Direction.CW
//                                         v        or Direction.CCW

// [8,0,1,9,3],      -------->                            // [9,0,3,4,8],
// [4,5,2,9,7],                                           // [0,6,3,5,0],
// [3,3,6,9,0],                                           // [3,8,6,2,1],
// [0,6,8,8,3],                                           // [8,8,9,9,9],
// [9,0,3,8,7],                                           // [7,3,0,7,3]

MatrixRotator.prototype.rotate = function(direction) {
  // do work here
  // must be a valid Direction, see Direction.js
  var MATRIX_LENGTH = this.matrix.length;
  var newMatrix = [];
  var tempMatrix = [];

  if(direction === 'ClockWise') {
    for(var i = 0; i < MATRIX_LENGTH; i++) {
      newMatrix[i] = [];
      for(var j = 0; j < MATRIX_LENGTH; j++) {
        newMatrix[i].unshift(this.matrix[j][i]);
      }
    }
    this.matrix = newMatrix;
  } else if(direction === 'CounterClockWise'){
    for (var i = MATRIX_LENGTH - 1; i >= 0; i--) {
      tempMatrix[i] = [];
      for (var j = MATRIX_LENGTH -1; j >= 0; j--) {
        tempMatrix[i].push(this.matrix[i][j]);
      }

    }
    for(var i = 0; i < MATRIX_LENGTH; i++) {
      newMatrix[i] = [];
      for(var j = 0; j < MATRIX_LENGTH; j++) {
        newMatrix[i].push(tempMatrix[j][i]);
      }
      this.matrix = newMatrix;
      console.log('this.matrix',this.matrix);
    }
  }
};