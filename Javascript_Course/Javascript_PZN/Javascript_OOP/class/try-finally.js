// try finally

class Counter {
    /*constructor() {
        this.value = 1; 
    }

    next() {
        try {
            return this.value; 
        } finally {
            this.value++; 
        }
    }*/ 


    #counter = 1; 

    next() {
        try {
            return this.#counter; 
        } finally {
            this.#counter++;
        }
    }
}


const counter = new Counter(); 

for (let i = 1; i <= 5; i++) {
    console.info(counter.next()); 
}
