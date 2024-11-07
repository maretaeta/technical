/** @format */

function isValidWalk(walk) {
  if (walk.length !== 10) {
    return false;
  }

  let north = 0,
    south = 0,
    east = 0,
    west = 0;

  for (let direction of walk) {
    switch (direction) {
      case "n":
        north++;
        break;
      case "s":
        south++;
        break;
      case "e":
        east++;
        break;
      case "w":
        west++;
        break;
    }
  }

  return north === south && east === west;


}

// Test cases
console.log(isValidWalk(["n", "s", "n", "s", "n", "s", "n", "s", "n", "s"]));
console.log(isValidWalk(["n", "n", "n", "s", "n", "s", "n", "s", "n", "s"]));