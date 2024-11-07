/** @format */

function remainder(n, m) {
  if (m === 0) {
    return "NaN";
  }

  const larger = Math.max(n, m);
  const smaller = Math.min(n, m);
  return larger % smaller;
}

// Test cases
console.log(remainder(17, 5));
console.log(remainder(13, 72));
console.log(remainder(0, -1));
console.log(remainder(0, 1));
