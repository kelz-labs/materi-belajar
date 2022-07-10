// Object literal di typescript

// type inference(modelnya seperti JS biasa), kurang rekomendasi karena ujung2 nya seperti JS biasa, dan kita tidak mendapatkan benefitnya
let product = {
  id: 123,
  name: 'Lenovo Thinkpad X1', 
  os: 'Arch Linux',
  harga: 6500000
};

// inline inference 

let product1: {
  id: number;
  name: string; 
  os: string;
  harga: number; 
};

product1 = {
  id: 123, 
  name: 'Lenovo Thinkpad X1',
  os: 'Arch Linux',
  harga: 6500000 
};

// dengan keyword interface, lebih dinamis ketimbang inline inference 

interface Product {
  id: 123; 
  name: 'Lenovo Thinkpad X1';
  os: 'Arch Linux';
  harga: 6500000 
}

let product2: Product;



/* nested object
interface Item {
  id: number;
  name: string;
  detail: ItemDetail;
  os: string;
  harga: number;
};

interface ItemDetail {
  year: number;
  storage: number;
}

let product4: Item;

product4 = {
  id: 123,
  name: 'Lenovo Thinkpad X1',
  detail: {
    year: 2018, 
    storage: 512,
  },
  os: 'Arch Linux',
  harga: 6500000
}
*/ 



// Excercise
// nested array of object 
let product5: { 
  id: number,
  name: string,
  address: [
    {
      street: string,
      city: string,
    },

    {
      street: string,
      city: string,
    }
  ]
}; 

product5 = {
  id: 123,
  name: 'Yuuka',
  address: [
    {
      street: 'Jalan Jenderal Sudirman', 
      city: 'Jakarta'
    },

    {
      street: 'Jalan Pulau Bangka',
      city: 'Air Itam, Bangka Tengah, Bangka Belitung'
    }
  ]
};

console.log(product5);



// Nested object of object 
interface Item {
  idCart: string;
  dateOrdered: string;
  items: Detail;
}

interface Detail {
  p1: {
    id: string, 
    name: string,
    qty: number 
  },

  p2: {
    id: string, 
    name: string, 
    qty: number 
  }
}

let product6: Item; 
product6 = {
  idCart: 'C1', 
  dateOrdered: '2020-01-20',
  items: {
    p1: {
      id: 'p-1',
      name: 'Mechanical Keyboard',
      qty: 20 
    },

    p2: {
      id: 'p-2',
      name: 'Laptop',
      qty: 200 
    }
  }
}



// Destructuring 
let fullName = {
  firstName: 'John',
  lastName: 'Doe'
};

// Dengan type inference
let { firstName, lastName } = fullName;

// Inline inference 
let { firstName, lastName } : { firstName: string, lastName: string }; 


