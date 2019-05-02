const array = [1, 2, 3, 4, 5, 6];

function getSumOfEvenExpPow2(arr) {
  return arr.map(n => n * n)
            .filter(n => n % 2 === 0)
            .reduce((acc, prev) => acc + prev, 0)
}

console.log(getSumOfEvenExpPow2(array));
