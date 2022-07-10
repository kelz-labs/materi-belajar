---
author: Haikel
date: 1-2-2022
title: Membuat dark mode button dengan HTML, CSS, dan JS
---



```javascript
const button = document.getElementById('tombol');

button.onclick = function() {
  document.body.classList.toggle('dark');

  // buat if else
  if (button.innerHTML === 'Night Mode <i class="far fa-moon"></i>') {
    button.innerHTML = 'Light Mode <i class="far fa-sun"></i>';
  } else {
    button.innerHTML = 'Night Mode <i class="far fa-moon"></i>';
  }
}
```

Penjelasan:
- Pertama-tama, kita menangkap si tombolnya dengan method `getElementById`. Jika tombol nya berupa class, maka kita bisa menangkapnya dengan `getElementByClassName`. Atau jika struktur HTML nya sudah kompleks dan ingin lebih spesifik, bisa menggunakan `querySelector`.

```javascript
const button = document.getElementById('tombol');
```

- Selanjutnya, kita buat button `onclick` yang dimaksudkan apabila si user mengklik tombol, maka akan terjadi sesuatu. Karena kita ingin saat button nya diklik, body nya jadi berwarna gelap, maka kita tangkap class CSS yang sudah dibuat dengan `body.classList.toggle`.

```javascript
button.onclick = function() {
  document.body.classList.toggle('dark');
```

- Nah sebenarnya sampai disini udah selesai, tapi karena kita juga ingin merubah teksnya. Maka kita buat **if else**.
- "Jika button nya bertuliskan **Night Mode**, maka ketika diklik, tulisannya akan berubah jadi **Light Mode**. Jika tidak, maka akan kembali lagi ke tulisan **Night Mode**." Disini saya juga menambahkan icon sun dan moon dari Font Awesome agar lebih bagus aja.

```javascript
 // buat if else
  if (button.innerHTML === 'Night Mode <i class="far fa-moon"></i>') {
    button.innerHTML = 'Light Mode <i class="far fa-sun"></i>';
  } else {
    button.innerHTML = 'Night Mode <i class="far fa-moon"></i>';
  }
}
```

- Secara lengkap, isi Javascript nya akan terlihat seperti ini:

```javascript
const button = document.getElementById('tombol');

button.onclick = function() {
  document.body.classList.toggle('dark');

  // buat if else
  if (button.innerHTML === 'Night Mode <i class="far fa-moon"></i>') {
    button.innerHTML = 'Light Mode <i class="far fa-sun"></i>';
  } else {
    button.innerHTML = 'Night Mode <i class="far fa-moon"></i>';
  }
}
```

