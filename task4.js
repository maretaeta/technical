/** @format */

function generateAcronym(name) {
  const parts = name.trim().split(" ");

  let firstName = parts[0];
  if (firstName.includes("-")) {
    firstName = firstName
      .split("-")
      .map((word) => word[0].toUpperCase())
      .join("");
  } else {
    firstName = firstName[0].toUpperCase();
  }

  let lastName = parts.slice(1).join(" ");
  let lastAcronym = "";

  if (lastName.includes("von")) {
    lastAcronym += "v";
    lastName = lastName.replace("von ", "");
  }

  if (lastName.includes("-")) {
    lastAcronym += lastName
      .split("-")
      .map((word) => word[0].toUpperCase())
      .join("");
  } else {
    lastAcronym += lastName[0].toUpperCase();
  }

  return firstName + lastAcronym;
}

// Test cases
console.log(generateAcronym("martin schmidt"));
console.log(generateAcronym("Taylor Swift"));
console.log(generateAcronym("Paul von Lahnstein"));
