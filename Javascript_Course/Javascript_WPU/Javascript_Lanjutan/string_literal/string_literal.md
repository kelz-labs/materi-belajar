# Materi template literal / template string

Template literal adalah string literal yang memungkinkan adanya expression di dalamnya.

Template literal hanya bisa dibuat dengan menggunakan tanda backtick (``).
## String literal

Contoh:

```javascript
// 1
let nama = 'Yuu'; // petik satu

// 2
let nomor = "123124"; // petik dua

// 3
let email = `yuu@pempeklenjer.id`; // backtick
```

## Keuntungan menggunakan backtick

- Melakukan multiline string
- Embeded expression
- HTML Fragments
- Expression Interpolation
- Tagged Template

```javascript
`string text`

 `string text 1
  string text 2
  string text 3` // multiline string

 `string text ${ekspresi} string text` // string text

 tag `string text ${ekspresi} string text` // tagged template
```

## Perbandingan dengan menggunakan backtick

```javascript
console.log('Login\ncoi'); // dengan petik satu/dua biasa
console.log(`Login
coi`); // dengan backtick
```


# Materi Tagged template literals

Tagged template literals adalah bentuk yang lebih kompleks dari template literals, yang memungkinkan kita untuk membaca template literals melalui sebuah function

Fungsinya:

- Escaping/Sanitize HTML Tags
- Translation & Internationalization
- Styled Components
