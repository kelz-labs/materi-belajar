/* arrow function sebagai parameter
Karena arrow function sama seperti anonymous function,
maka kita juga bisa menggunakan arrow function sebagai parameter di function lain
*/

function giveMeName(callback) {
  callback('Sakura');
}

giveMeName((name) => console.log(`Halo, ${name}`));
