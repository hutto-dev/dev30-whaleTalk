let input = "changes in attitudes changes in latitudes";

const vowels = ["a", "e", "i", "o", "u"];

const resultArray = [];

for (i = 0; i < input.length; i++) {
  const inputValues = input[i];

  if (input[i] === "e") {
    resultArray.push(input[i]);
  }
  if (input[i] === "u") {
    resultArray.push(input[i]);
  }

  for (j = 0; j < vowels.length; j++) {
    const vowelValues = vowels[j];

    if (inputValues === vowelValues) {
      resultArray.push(vowelValues);
    }
  }
}
console.log(resultArray);

const resultString = toUpperCase(resultArray.join());

console.log(resultString);
