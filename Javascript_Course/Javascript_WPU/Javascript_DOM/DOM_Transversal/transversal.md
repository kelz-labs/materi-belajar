# Materi DOM Transversal

Method dalam DOM Transversal
- parentNode = node
- parentElement = element
- nextSibling = node
- nextElementSibling = element
- previousSibling = node
- previousElementSibling = element

## Materi event bubling

Dimana event bubling ini arahnya mengecek ke atas. Misalnya saja:

```html
<div class="card">
  <img src="yui.png"/>
  <span class="nama">Yui</span>
  <span class="telp">0812345678</span>
  <a href="" class="close">x</a>
</div>
```

```javascript
const cards = document.querySelectorAll('.card');

// Ceritanya dia mau looping setiap card dengan forEach
cards.forEach(function(card) {
  card.addEventListner('click', function(event){
    alert('Haikel');
  })
})
```
