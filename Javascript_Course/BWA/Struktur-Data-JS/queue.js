// queue atau antrian 
// First In First Out(FIFO)
// Logic: yang depan menjadi prioritas


function createQueue() {
  // Note: disini kita mendefinisikan beberapa istilah berikut: 
  /*
   queue = menambah data 
   enqueue = menghapus data(dari yang paling awal)
   peek = mengecek data 
   size: melihat ukuran/length datanya
  */
  const queue = [];
  return {
    enqueue: function(value) {
      queue.unshift(value);
    }, 
    dequeue: function() {
      queue.pop();
    }, 
    peek: function() {
      return queue[queue.length - 1];
    }, 
    size: function() {
      return queue.length;
    }
  }
}

const q = createQueue();
q.enqueue('Membuat script untuk struktur data');
q.enqueue('Membuat contoh kode untuk struktur data');
q.enqueue('Rekam');
q.enqueue('Liburan');

q.dequeue();
q.dequeue();
q.dequeue();
q.dequeue();

q.enqueue('Turu');
console.log(q.size());

// Contoh nyata
