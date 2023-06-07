var toggleButton = document.getElementById('toggleButton');
var form = document.getElementById('form');

toggleButton.addEventListener('click', function() {
  if (form.style.display === 'none') {
    form.style.display = 'block';
  } else {
    form.style.display = 'none';
  }
});