# Materi DOM

## tipe-tipe node

- **element**
- attribute(akan masuk ke dalam element)
- **text**
- cdata section
- entity reference
- entity
- processing instruction
- comment
- **document**
- document type
- document fragment
- notation
-

## nodelist vs htmlCollection

satu = node
lebih dari satu = nodelist
kumpulan node, tapi khusus yang tipenya element html = htmlCollection

Secara perbedaan:

- keduanya sama-sama kumpulan dari node
- struktur datanya mirip array [1,2,3,4,...]
- nodeList dapat berisi node apapun, sedangkan htmlCollection harus dari elemen html
- htmlCollection bersifat live, sedangkan nodeList tidak

## Struktur Hierarki DOM Tree

- Root Node
  * node yang menjadi sumber dari semua node lain di dalam DOM
  * contoh: document

- Parent Node
  * node yang berada 1 tingkat di atas node yang lain
  * contoh: body adalah parent dari h1, p, div, dan a

- Child Node
  * node yang berada 1 tingkat di bawah node yang lain
  * contoh: h1 adalah child dan body

## DOM Selection

Ada beberapa method yang bisa kita lakukan dalam DOM selection, yakni:

- getElementById() = memilih elemen DOM berdasarkan id nya (#)
- getElementsByTagName() = memilih elemen-elemen yang memiliki nama tag tertentu(bisa lebih dari satu)
- getElementsByClassName() = memilih elemen-elemen yang memiliki class tertentu(bisa lebih dari satu)
- querySelector() = memilih elemen berdasarkan selectornya
- querySelectorAll() = memilih elemen berdasarkan selectornya

|          Method            |   Hasil         |
|---------------             | --------------- |
| getElementById()           | HTMLCollection  |
| getElementsByTagName()     | HTMLCollection  |
| getElementsByClassName()   | HTMLCollection  |
| querySelector()            | element         |
| querySelectorAll()         | nodeList        |

