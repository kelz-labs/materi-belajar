/* Materi destructuring function parameter
- Destructuring tidak hanya bisa dilakukan di variable, tapi juga bisa dilakukan di function parameter
- Hal ini membuat kita mudah ketika ingin mengambil nested data dalam array atau object dalam function
*/

function displayPerson({firstName, middleName, lastName}) {
  console.log(firstName);
  console.log(middleName);
  console.log(lastName);
}

const person = {
  firstName: 'Yuuki',
  middleName: 'Sakura',
  lastName: 'Megumi'
};

displayPerson(person);


// Sekarang destructuring dengan array
function sum([pertama, kedua]) {
  return pertama + kedua;
}

console.log(sum([10, 10]));
console.log(sum([20, 10]));
console.log(sum([10, 10]));


