const fibonacci = function(n) {
  if (n <= 0) return "OOPS";
  let f1 = 1;
  let f2 = 1;
  for (let i = 3; i <= n; i++) {
    [f1, f2] = [f2, f1 + f2];
  }
  return f2;
};

// Do not edit below this line
module.exports = fibonacci;
