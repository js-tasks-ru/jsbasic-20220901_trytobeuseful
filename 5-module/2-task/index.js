function toggleText() {
  button = document.querySelector('.toggle-text-button');

  text = document.getElementById('text');

  function checkHidden(){
    text.hidden ? text.hidden = false : text.hidden = true
  }

  button.addEventListener('click', checkHidden)
}
