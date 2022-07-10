# Closure

Closure adalah sebuah function yang ketika memiliki akses ke parent scopenya, meskipun parent scopenya sudah selesai dieksekusi

Kalo secara bahasa sendiri, closure itu sebuah function yang biasanya terletak di dalam suatu function yang mampu mengakses variable dari luar function

## Execution Context
- Creation
- Execution

## Hoisting
## Scope

   ### Lexical Scope

   ```javascript
   function init() {
       let nama = 'Random'; // local Variable
       function tampilNama() { // inner function (closure)
           console.log(nama);
         }

         tampilNama;
     }
     init;
   ```

# Alasan Menggunakan closure
- Untuk membuat private method
- Untuk membuat function factories
