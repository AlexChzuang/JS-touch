document.addEventListener('DOMContentLoaded', function() {
  document.getElementById('h').addEventListener('click', function() {
    if (this.textContent === 'hello') {
      this.textContent = '被按了'
    } else {
      this.textContent = 'hello'
    }
  })
})



