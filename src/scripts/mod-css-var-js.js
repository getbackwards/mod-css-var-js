console.log('I work');

const footer = document.querySelector('footer')
const inputs = [].slice.call(document.querySelectorAll('input'));

inputs.forEach(input => input.addEventListener('change', handleUpdate));
inputs.forEach(input => input.addEventListener('mousemove', handleUpdate));

function handleUpdate(e) {
  if (this.type === 'color') {
    footer.style.setProperty('--footer-color', this.value)
  } else {
    footer.style.setProperty('--palatte-padding-left', this.value + 'px')
  }
}
