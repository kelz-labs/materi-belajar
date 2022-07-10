# Materi higher order function

Higher order function adalah function yang beroperasi pada function yang lain.
Baik itu digunakan dalam argument, maupun sebagai return value.

```javascript
function kerjakanTugas(mataKuliah, selesai) {
    console.log(`Mulai mengerjakan tugas ${mataKuliah}....`);
    selesai();
  }

function selesai() {
    alert(`Selesai mengerjakan tugas!`);
}
```

Dalam hal ini, `function kerjakanTugas` adalah higher order function

## Alasan memakai higher order function

- Abstraksi, membuat kode yang dibuat lebih sederhana.


## Contohnya:

- array.prototype.mau
- array.prototype.filter
- array.prototype.reduce
