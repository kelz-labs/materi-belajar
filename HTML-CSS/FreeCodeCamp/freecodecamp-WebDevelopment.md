## Materi

**Kode utama:**

```html 
<h2>CatPhotoApp</h2>
<main>
  <p>Click here to view more <a href="#">cat photos</a>.</p>

  <a href="#"><img src="https://cdn.freecodecamp.org/curriculum/cat-photo-app/relaxing-cat.jpg" alt="A cute orange cat lying on its back."></a>

  <p>Things cats love:</p>
  <ul>
    <li>cat nip</li>
    <li>laser pointers</li>
    <li>lasagna</li>
  </ul>
  <p>Top 3 things cats hate:</p>
  <ol>
    <li>flea treatment</li>
    <li>thunder</li>
    <li>other cats</li>
  </ol>
  <form action="https://www.freecatphotoapp.com/submit-cat-photo">
    <input type="text" placeholder="cat photo URL">
    <button type="submit">Submit</button>
  </form>
</main>
```


- Tag li dan ul 
- Tag ol 
- Tag input, placeholder dan text 
   
   Tag input bersifat self-closing, jadi tidak perlu ditambah penutup(</>). Contoh: 

   ```html 
   <input type="text" placeholder="cat photos">
   ```

   Tambahan: 
   - Pemberian "required" di dalam input, contoh:

   ```html
   <input type="text" placeholdeer="cat photos" required>
   ```

- Pemberian input type "radio" yang berfungsi untuk memunculkan opsi, dengan tag input dibungkus oleh tag <label>. Misal: 

 ```html
 <label>   
 <input type="radio" placeholder="cat photos">
 </label>
 ```

- Tag form 

  Fungsinya untuk membuat daftar. Contoh: 

  ```html 
  <form action="https://freecodecamp.org">
  <input >
  </form>
  ```

- Tag button 

   Fungsinya untuk membuat tombol(clickable button). Contoh: 

   ```html 
   <button type="submit">Tombol ini berfungsi untuk mengarahkanmu ke brower.</button>
   ```

   Tambahan: 

   - Pemberian required dalam tag input yang berfungsi untuk. Contoh: 

Pemberian !important pada CSS 

   Berfungsi untuk mengutamakan/memprioritaskan suatu nilai. Contoh: `color: red !important; `

- Penggunaan hexcode untuk warna pada CSS

   Contoh: `color: #2e3440;`, dengan catatan hexcode harus terdiri dari 6 angka. 0 adalah nilai terendah dalam Hexcode, sedangkan F adalah nilai terbesar dalam Hexcode.

- Pengunaan `rgb values` pada CSS 

  Fungsinya sama saja dengan hexcode, yakni memberi warna. 

- Dalam hal styling text, `u` yang berarti **underline** digunakan untuk memberi garis bawah. `b` atau `strong` untuk menebalkan huruf(bold). `em` untuk gaya miring(italic). `s` untuk memberi coretan pada teks. Contoh: <s>ingfo</s>

- Tag `hr` untuk memberi garis horizontal(horizontal line). Bersifat self-closing.

- Pemberian tag `box-shadow` untuk memberi shadow pada suatu objek.

- Pemberian nilai `uppercase`(huruf besar semua), `lowercase`(huruf kecil semua), `capitalize`(huruf besar di depan kalimat), `initial`(huruf besar di awal saja, selanjutnya kecil semua), `inherit`(), `none`(memakai default).

- Pemberian `font-weight` untuk mengatur ketebalan huruf. Serupa dengan bold tetapi dengan `font-weight`, kita bisa mengatur sesuai selera.

- Pemberian `line-height` untuk memberi tinggi antar kalimat(height). 

-Pemberian `:hover` untuk memberi apa yang terjadi jika suatu class itu diklik.

- Pemberian tag `top`(memindahkan suatu objek ke bawah), `bottom`(memindahkan suatu objek ke atas), `right`(memindahkan suatu objek ke kiri), dan `left`(untuk memindahkan suatu objek ke kanan). Intinya, nama tag berkebalikan dengan hasilnya. 

- Pemberian tag `z-index` untuk mengatur pemberian position. Misal ada 2 objek yang berada di dalam satu tempat. Diberi `z-index=: 2;`, maka objek pertama akan berada di atas objek kedua. Sebaliknya, jika `z-index: 1;`, maka obje kedua akan berada di atas objek pertama. 

- Untuk membuat objek menjadi berada di tengah, kita bisa juga memberi tag `margin: auto;`. 

- Penggunaan `hsl` yang fungsinya sama saja dengan rgb ataupun hex code, tetapi hsl lebih banyak opsi/fitur. Dimana, ia bisa menjangkau/mencampur lebih banyak warna dalam satu kalimat.

  Singkatan HSL adalah Hue, Saturation, Lightning(transparency).

- Bisa juga menggunakan `linear-gradient` untuk menggabungkan beberapa elemen warna. Contoh: 

  ```bash 
  background: linear-gradient(35deg, #ffcccc, #ccccff, rgb(255, 255, 0)); 
  ```

  Untuk mengulang `linear-gradient`, kita bisa menambahkan `repeating`. 

- Menggunakan `image url` di css. Konsepnya sama saja dengan src, hanya saja ini lebih spesifik.

- Tag `transform` untuk mengubah ukuran suatu objek dari aslinya menjadi lebih besar, kecil, dan lainnya. Contoh penggunaan: 

  ```bash
  .bola {
      width: 100px; 
      height: 100px; 
      transform: scale(1.5); 
  }
  ```

  Misal jika ingin memperbesar saat `hover`, maka seperti ini: 

  ```bash 
  .bola:hover {
      transform: 2.0; 
      color: red; 
  }
  ```

- Menambahkan `skew` untuk mengubah kemiringan suatu objek. Patokannya X dan Y Axis. Misal: `skewX(90deg);`

- Fungsi `rotate()` pada transform, untuk memutar objek. Notasi: derajat(deg).

- Menggunakan `animation` dan `keyframes` untuk membuat animasi pada objek. Shorthandnya: 

  ```bash 
  animation: haikel 5s linear infinite
  ```

  Keterangan: 
  * haikel itu nama animasinya. Opsional, terserah mau dinamain apa. 
  * 5s itu durasi animasinya. Nama tag:  
  * linear itu untuk gradient nya. Nama tag: `animation-timing-function`. 
  * infinite itu digunakan dengan maksud animasinya tidak memiliki batas waktu. Jadi misal sudah 5 detik, dia bakal ngulang lagi. Begitu seterusnya. Nama tag: `animation-iteration-count` 

-
