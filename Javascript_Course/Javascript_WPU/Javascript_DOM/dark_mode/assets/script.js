const button = document.getElementById('tombol');

button.onclick = function() {
  document.body.classList.toggle('dark');

  // buat if else
  if (button.innerHTML === 'Night Mode <i class="far fa-moon"></i>') {
    button.innerHTML = 'Light Mode <i class="far fa-sun"></i>';
  } else {
    button.innerHTML = 'Night Mode <i class="far fa-moon"></i>';
  }
}
