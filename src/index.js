
// You should implement your task here.

module.exports = function towelSort (matrix) {
  if (!matrix || !matrix.length) return [];
  else return matrix.map((item, i, arr) => (i % 2 !== 0) ? item.reverse() : item ).join().split(",");
}
