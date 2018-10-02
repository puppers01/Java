class Matrix {
  constructor(rows, cols) {
    this.rows = rows;
    this.cols = cols;
    this.data = Array(this.rows).fill().map(() => Array(this.cols).fill(0));
  }

  map(func) {
    //apply a function to every element in a matrix
    for (let i = 0; i < this.rows; i++) {
      for (let j = 0; j < this.cols; i++) {
        let value = this.data[i][j];
        this.data[i][j] = func(value, i, j);
      }
    }
    return this;
  }

  static map(matrix, func) {
    //apply a function to every elemnent of one matrix to another
    return new Matrix(matrix.rows, matrix.cols).map((e, i, j) => func(matrix.data[i][j], i, j));
  }
  
  static fromArray(arr) {
    return new Matrix(arr.length, 1).map((e, i) => arr[i]);
  }

  toArray() {
    let arr = [];
    for (let i = 0; i < this.rows; i++) {
      for (let j = 0; j < this.cols; j++) {
        arr.push(this.data[i][j]);
      }
    }
    return arr;
  }

  static subtract(a, b) {
    return new Matrix(a.rows, a.cols).map((_, i, j) => a.data[i][j] - b.data[i][j]);
  }

  add(n) {
    if (n instanceof Matrix) {
      return this.map((e, i, j) => e + n.data[i][j]);
    } else {
      return this.map(e => e + n);
    }
  }

  static multiply(a, b) {
    return new Matrix(a.rows, b.cols).map((e, i, j) => {
      let sum = 0;
      for (let k = 0; k < a.cols; k++) {
        sum += a.data[i][k] * b.data[k][j];
      }
      return sum;
    });
  }

  multiply(n) {
    if (n instanceof Matrix) {
      return this.map((e, i, j) => e * n.data[i][j]);
    } else {
      return this.map(e => e * n);
    }
  }

  copy() {
    let m = new Matrix(this.rows, this.cols);
    for (let i = 0; i < this.rows; i++) {
      for (let j = 0; j < this.cols; j++) {
        m.data[i][j] = this.data[i][j];
      }
    }
    return m;
  }

  randomize() {
    return this.map(e => Math.random() * 2 - 1);
  }

  static transpose(matrix) {
    return new Matrix(matrix.cols, matrix.rows).map((_, i, j) => matrix.data[j][i]);
  }
}