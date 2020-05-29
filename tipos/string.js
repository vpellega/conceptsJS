const nameLength = "Victor".length;
console.log(`My name has ${nameLength} letters.\n`);

const splittedName = "Victor Pellegrino".split(" ");
console.log(`My name separated in array: ${splittedName}\n`);

const replacedName = "Victor Pellegrino".replace("Pellegrino", "Silva");
console.log("My name with the last name instead middle name:", replacedName);

const firstLetter = "Victor".slice(0, 1);
console.log(`First letter is ${firstLetter}\n`);

const allWithoutTheLastLetter = "Victor".slice(0, -1);
console.log(`My name without the R: ${allWithoutTheLastLetter}\n`);

const twoInitialLetter = "Victor".substr(0, 2);
console.log(twoInitialLetter);
