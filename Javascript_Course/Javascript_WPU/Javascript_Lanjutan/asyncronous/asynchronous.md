# Materi asynchronous

Javascript itu bahasa single thread, yang artinya Javascript hanya bisa beroperasi pada satu waktu.

Konsep asynchronous ini

Ibarat misal ada 3 angka. Dimana **angka 1** dieksekusi selama 3 detik, **angka 2** dieksekusi selama 4 detik, dan **angka 3** dieksekusi selama 1 detik. Maka, dia akan mengeksekusi yang paling cepat dulu, yakni angka 3, 1, baru 2. Jadi, hasil eksekusi dari asynchronous ini tidak selalu sesuai urutan. Tetapi berdasarkan waktu prosesnya

## Synchronous dan asynchronous

- Synchoronous prinsipnya sama saja dengan blocking

- Asynchronous single threaded prinsipnya sama dengan nonblocking. Asynchronous + single threaded = concurrency
- Asynchronous multi threaded dapat melakukan beberapa tugas langsung secara bersamaan, sesuai dengan jumlah thread nya. Asynchronous + multi threaded = parallelism


## Prinsip blocking dan nonblocking(IO related)

- Blocking: Misal dalam mengerjakan tugas, ada 3 tugas. Jika tugas 1 belum selesai, maka dia akan menunggu dan tidak akan pindah ke tugas berikutnya.

- Nonblocking: Misal dalam mengerjakan tugas ada 3 tugas. Jika tugas 1 belum selesai, maka dia bisa pindah ke tugas berikutnya.



Ada 3 teknik untuk menangani asynchronous pada Javascript, yakni: **callback, promise, dan async await**.


- callback
- promise
- async await
