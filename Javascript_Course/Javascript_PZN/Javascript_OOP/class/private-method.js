// Private method di Javascript

class Person {
    say(name) {
        if (name) {
            this.#sayWithName(name);
        } else {
            this.#sayWithoutName();
        }
    }

    // init private method
    #sayWithName(name) {
        console.info(`Halo, ${name}!`);
    }

    #sayWithoutName() {
        console.info(`Halo, ini pernyataan tanpa nama`);
    }
}

const person = new Person();
person.say("Anime"); // dengan parameter 
person.say(); // tanpa parameter 