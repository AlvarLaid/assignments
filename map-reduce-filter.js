let array = [1, 2, 3, 4, 5, 6];
let total = 0;
let filteredOddArray = [];

for (let i = 0; i < array.length; i++) {
  array[i] = array[i] * array[i];
}

for (let i = 0; i < array.length; i++) {
  if (array[i] % 2 === 0) {
    filteredOddArray.push(array[i]);
    total += array[i];
  }
}

console.log(filteredOddArray, total);
