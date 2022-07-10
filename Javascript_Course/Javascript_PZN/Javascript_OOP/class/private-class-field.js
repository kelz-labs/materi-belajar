// Private class
// dengan menambahkan # agar menjadi private 

class Counter {
    // mendefinisikan private class 
    #counter = 0;
    
    increment() {
        this.#counter++; 
    }

    decrement() {
        this.#counter--; 
    }

    get() {
        return this.#counter; 
    }
}

const counter = new Counter(); 

for (let i = 0; i < 5; i++) {
    counter.increment();
}

counter.counter = 100;  

console.info(counter.get()); 
console.info(counter); 

