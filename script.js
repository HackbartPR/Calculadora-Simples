var number = ''
var disp = document.getElementById('display')

window.onclick = e => {
  let num = e.target.value
  Calculate(num)
}

function Calculate(num) {
  if (num == 'clear') {
    number = ''
    disp.innerHTML = ''
  } else if (num != 'calc') {
    number += num
    disp.innerHTML += num
  } else {
    disp.innerHTML = eval(number)
    number = ''
  }
}
