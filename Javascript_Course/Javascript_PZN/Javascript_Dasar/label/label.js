// Materi label pada looping
// Jadi, jika ada loop di dalam loop, kita bisa memberikan label agar kita bisa membedakan mana loop yang di dalam dan loop yang paling luar
// Contoh:

loopi:
  for (let i = 0; i <= 20; i++) {
  loopj:
    for (let j = 0; j < 5; j++) {
      console.log(`${i} - ${j}`);
  }
}


loop1:
  for (let ia = 0; ia < 10; ia++) {
  loop2:
  for (let jb = 0; jb < 100; jb++ ) {
    if (jb > 100) {
      continue loop1;
    }
    console.log(`${ia} - ${jb}`);
  }
}

loopk:
for (let k= 0; k < 100; k++) {
  loopl:
  for (let l = 0; l < 100; l++) {
    console.log(`${k} - ${l}`)
  }
}
