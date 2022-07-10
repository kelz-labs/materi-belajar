// Materi recursive function
// Recursive function adalah kemampuan function itu memanggil dirinya sendiri.
// Kadang memang ada banyak problem, yang lebih mudah diselesaikan dengan menggunakan recursive function, seperti contoh kasus factorial

// Contoh factorial loop biasa

function factorial() {
  let result = 1;
  for (let i = 1; i <= 10; i++) {
    result *= i;
    console.log(result);
  }
  return result;
}

factorial();
// ibarat 1 * 2 * 3 * 4 * 5 * 6 * 7 * 8 * 9 * 10

// Contoh dengan factorial recursive
function factorialRecursive(value) {
  if (value === 1) { // jika valuenya 1, maka program akan berhenti
    return 1;
  } else {
    return value * factorialRecursive(value - 1); // disini recursive functionnya jika valuenya > 1, maka value tersebut akan difaktorialkan
  }
  // contoh faktorial: value = 5, berarti faktorialnya = 5 * (5-1)
}

console.log(factorialRecursive(5));
// 5
// 5 * factorialRecursive(4)
// 5 * 4 * factorialRecursive(3)
// 5 * 4 * 3 * factorialRecursive(2)
// 5 * 4 * 3 * 2 * factorialRecursive(1)
