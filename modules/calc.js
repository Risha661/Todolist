const inputX = document.getElementById('x');
const inputY = document.getElementById('y');
const btns = document.querySelector('.calc__btn-wrapper');
let result = document.querySelector('.calc__result');

const getValue = () => {
  const x = parseFloat(inputX.value) || 0;
  const y = parseFloat(inputY.value) || 0;
  return { x, y };
}

inputX.addEventListener('input', getValue);
inputY.addEventListener('input', getValue);

const calculateValue = (value, x, y) => {
  console.log(value);
  switch(value) {
    case '+' :
      result.textContent = x + y;
      break;
    case '-' :
      result.textContent = x - y;
      break;
    case 'x' :
      result.textContent = x * y;
      break;
    case '÷' :
      result.textContent = y !== 0 ? (x / y) : "Деление на ноль";
      break;
    default:
      result.textContent = "Вы ввели некорректные значения"
  }
}

btns.addEventListener('click', function(event) {
  event.preventDefault();

  if(!event.target.classList.contains('calc__btn')) return;
  let value = event.target.innerText;
  const { x, y } = getValue();

  calculateValue(value, x, y);
});

