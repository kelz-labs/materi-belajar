function isContains(array, searchValue) {
  for (const element of array) {
    console.log(element);// Ini untuk pembuktian proses pencarian nilai pada arraynya
    if (element === searchValue) {
      return true;
    }
  }

  return false;
}

const array = [1, 32, 4234, 3, 43, 53, 42, 555];
const search = 10;
const temukan = isContains(array, search);
console.log(temukan);

// Mengapa hasil untuk search nya false? Karena di arraynya tidak ada yang bernilai 10.
// Jika dia ada nilai di arraynya, maka akan true
