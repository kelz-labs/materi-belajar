// Array
let fruits = ['anggur', 'belimbing', 'ceri', 'mangga'];

console.log(fruits[0] + ' Anime');
fruits.push('kiwi', 'anime', '100');

console.log((parseInt(fruits[6]) + 100));
console.log(fruits[6] + ' Anime');

function neo(param) {
  for(let i = param; i <= 20; i++) {
    console.log(i);
  }
}

const arr = [0, 1, 2];

arr.forEach((element, index) => {
  arr[index] = element + 1;
});

console.log(arr);

// Sekarang kebalikannya, mengubah array ke object 

let arr = [1,2,3,4,5];
const arrObj = Object.assign({}, arr);
console.log(arrObj);
