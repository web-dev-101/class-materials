function makeAdder(x) {
  return function add(y) {
    return x + y;
  }
}