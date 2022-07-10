// ambil dulu element html nya dengan konsep DOM 
let countEl = document.getElementById("count-el");
let count = 0;

// buat function 
function increment() {
  count += 1;

  // innerText buat masukin tulisan ke element html
  countEl.innerText = count;
}

let saveEl = document.getElementById("save-el");

function save() {
  let saving = `${count} - `;
  let emoji = count;
  saveEl.innerText = saving + emoji;

  if (saving >= 10) {
    saveEl.innerText += emoji;
  } 
}

/*let user = "Haikel";
let message = "You have a new notifications";
let login = "You login to this room";

console.log(user + ", " + message);


for (let i = 1; i < 20; i++) {
  console.log(i);
  if (i >= 10) {
    console.log(message);
    break;
  }
}
// console.log(message);

function increment(x) { 
  for (let i = x; i >= 1; i--) {
    console.log(`Anime ke-${i}`);
  }
}

increment(10);

/*console.log("\n");
do{
  increment(10);
  break;
} while(1 < 10);*/
