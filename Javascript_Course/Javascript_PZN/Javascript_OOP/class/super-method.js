// super method

class Shape {
    paint() {
        console.log('Paint Shape'); 
    }
}

class Circle extends Shape {
    // membuat super method 
    paint() {
        //super.paint(); 
        console.log('Buatkan saya sebuah lingkaran!'); 
    }
}

const shape = new Shape(); 
shape.paint(); 
const circle = new Circle(); 

// Pemanggilan super method 
circle.paint(); 