const numberInString = "50%";

console.log(parseFloat(numberInString)); // Convert string in float without the decimal places

console.log(parseFloat(numberInString).toFixed(2)); // Convert string in float with the two decimal places

console.log(typeof parseInt(numberInString)); // Convert string to integer
