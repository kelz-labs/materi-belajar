/* Stack
// Last in first out
// Stack bisa kita ibaratkan/analogikan seperti tumpukan piring

function createStack() {
  let array= [];
  return {
    // fungsi push adalah untuk menambagkan item baru
    push: function(item) {
      array.push(item);
    },
    // push butuh parameter.

    // fungsi pop itu menghapus item mulai dari atas ke bawah
    pop: function() {
      array.pop();
    },
    // pop ga butuh parameter , karena yang diambil otomatis yang terakhir 
    

    // peek berfungsi untuk mengambil item yang berada di urutan terakhir 
    peek: function() {
      return array[array.length - 1]; 
    },
    // peek 

    size: function() {
      return array.length;
    }
    // size 
  }
}

const bookStack = createStack();

bookStack.push('Anime'); 
bookStack.push('The effective engineer');
bookStack.push('Nganu');
bookStack.push('Push push');

console.log(bookStack.peek()); // isinya push push, karena anime berada di tumpukan yang paling atas 
console.log(bookStack);

// Menghapus 2 item 
bookStack.pop();
bookStack.pop();
console.log(bookStack.size());

// Sekarang, kita akan menghapus seluruh item dan menghitung size nya 
bookStack.pop();
bookStack.pop();
console.log(bookStack.size());

// Nambahin 1 item lagi 
bookStack.push('Seni bersikap bodo amat');

console.log(bookStack.size());*/ 


// Contoh penerapan stack di dunia nyata
function add(judul, genre) {
  return `Judul: ${judul}    Genre: ${genre}`;
}

function push(jdl, gnr) {
  return add(jdl, gnr);
}

console.log(push('Date a Live', 'Romance'));
