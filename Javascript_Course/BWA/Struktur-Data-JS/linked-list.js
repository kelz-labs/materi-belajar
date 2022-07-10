// Linked list 
function createNode(value) {
  return {
    value,
    next: null
  }
}

function createLinkedList() {
  return {
    head: null,
    tail: null,
    length: 0,
    push: function(value) {
      const node = createNode(value);

      // Ada dua kemungkinan yang muncul
      
      // Jika linkedlist kosong 
      if (this.head === null) {
        this.head = node;
        this.tail = node;
        this.length += 1;
        return node;
      } 

      // Jika linkedlist ada isinya 
      else {
        this.tail.next = node;
        this.tail = node;
        this.length += 1;
        return node;
      }
    }, 

    pop: function() {
      // kosong 
      if (this.isEmpty()) {  
        return null;
      }

      const node = this.tail;

      // satu node 
      if (this.head === this.tail) {
        this.head = null;
        this.tail = null;
        this.length = 0;
        return node;
      }

      // lebih dari satu node
      let current = this.head;
      let penult;
      
      while(current) {
        if(current.next === this.tail) {
          penult = current;
          break;
        }
        current = current.next;
      }
      penult.next = null;
      this.tail = penult;
      this.length -= 1;

      return node;
    },

    get: function(index) {
      // list kosong 
      if (index < 0 || index >this.length)  {
        return null;
      }

      if (index === 0) {
        return this.head;
      }

      // list item > 1
      let current = this.head;
      let i = 0;
      
      while(i < index){
        current = current.next;
        i += 1;
      }

      return current;
    }, 

    delete: function(index) {
      // List kosong 
      if (index < 0 || index > this.length) {
        return null;
      }

      // List item 1
      if (index === 0) {
        const deleted = this.head;
        this.head = this.head.next;
        this.length -= 1;

        return deleted;
      }

      // List > 1 
      let current = this.head;
      let prev;
      let i = 0;

      while (i < index) {
        prev = current;

        current = current.next;
        i += 1;
      }
      const deleted = current;
      prev.next = current.next;
      this.length -= 1;

      return deleted;
    }, 

    isEmpty: function() {
      return this.length === 0;
    },


    // isEmpty (buat ngecek apakah ada valuenya atau tidak)
    print: function() {
    const values = [];
    let current = this.head;

    while (current) {
      values.push(current.value);
      current = current.next;
    }

    return values.join(' => ');
  }
  }
}

const list = createLinkedList();
const values = ['a', 'b', 'c', 'd'];
const nodes = values.map((val) => {
  list.push(val);
}); 

console.log(list.isEmpty());
list.pop().value;

console.log(list.tail.value);

console.log(list.delete(1));
console.log(list.print());

// Implementasi Linked list pada dunia nyata: music playlist di spotify, dan lain-lain
