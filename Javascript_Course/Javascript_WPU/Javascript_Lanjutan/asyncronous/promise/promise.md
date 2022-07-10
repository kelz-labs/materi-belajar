# Materi promise/janji

Promise adalah sebuah object yang menandakan keberhasilan atau kegagalan dari sebuah event yang asynchronous di masa yang akan datang. Janji bisa berupa dua hasil, yakni terpenuhi, atau ingkar janji

- janji yang terpenuhi yaitu states (fulfilled)
- janji yang tidak terpenuhi yaitu states(rejected)
- janji dalam status menunggu yaitu states(pending)

Dan untuk menjalanlannya, ada beberapa fungsi callback yang mesti diingat:

- callback(resolve), apabila ditepati
- callback(reject), apabila tidak ditepati
- callback(finally), apabila baru selesai proses, belum masuk ke keputusan

Dalam promise, ada aksi yang dilakukan ketika terpenuhi atau tidak terpenuhi

- then(jika terpenuhi)
- catch(jika tidak terpenuhi)
