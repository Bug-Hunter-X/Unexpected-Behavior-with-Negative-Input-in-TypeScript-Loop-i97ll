function printNumbers(n: number): void {
  if (n < 1) {
    console.error("Input must be a positive integer.");
    return;
  }
  for (let i = 1; i <= n; i++) {
    console.log(i);
  }
}

printNumbers(5); // Prints 1 to 5
printNumbers(-5); // Prints error message

//Alternative solution to handle negative input
function printNumbersAlternative(n: number): void {
  if (n < 0) {
    for (let i = n; i <= 0; i++) {
      console.log(i);
    }
  } else {
    for (let i = 1; i <= n; i++) {
      console.log(i);
    }
  }
}

printNumbersAlternative(5); //Prints 1 to 5
printNumbersAlternative(-5); //Prints -5 to 0