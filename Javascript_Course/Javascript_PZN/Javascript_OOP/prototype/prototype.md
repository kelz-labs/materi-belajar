# Prototype

- Javascript dikenal dengan bahasa pemrograman berbasis prototype
- Prototype erat kaitannya dengan inheritance(pewarisan). Saat kita membuat object dari constructor function, object tersebut disebut **instance**, semua property(baik itu value atau method, akan berada di dalam instance objectnya). 
- Setiap kita membuat sebuah constructor func, maka secara otomatis akan dibuatkan prototypenya, misal ketika kita membuat constructor function Person, maka akan ada Person.prototype
- Saat kita membuat sebuah object instance, secara otomatis object tersebut adalah turunan dari Constructor.prototypenya. 
- Untuk mengakses prototype milik sebuah instance, bisa menggunakan **__proto__**