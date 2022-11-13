class Calculator {
  constructor(odinTextElement, dwaTextElement) {
    this.odinTextElement = odinTextElement
    this.dwaTextElement = dwaTextElement
    this.chistka()
  }

  chistka() {
    this.odin = ''
    this.dwa = ''
    this.ojidanie = undefined
  }

  ydalenie() {
    this.dwa= this.dwa.toString().slice(0, -1)
  }

  dobavlenie(number) {
    if (number === '.' && this.dwa.includes('.')) return
    this.dwa = this.dwa.toString() + number.toString()
  }

  vibor(ojidanie) {
    if (this.dwa === '') return
    if (this.odin !== '') {
      this.reshenie()
    }
    this.ojidanie = ojidanie
    this.odin = this.dwa
    this.dwa = ''
  }

  reshenie() {
    let reshenie
    const a = parseFloat(this.odin)
    const b = parseFloat(this.dwa)
    if (isNaN(a) || isNaN(b)) return
    switch (this.ojidanie) {
      case '+':
        reshenie = a + b
        break
      case '-':
        reshenie = a - b
        break
      case '*':
        reshenie = a * b
        break
      case '÷':
        reshenie = a / b
        break
      default:
        return
    }
    this.dwa = reshenie
    this.ojidanie = undefined
    this.odin = ''
  }

  otobrajenie(number) {
    const cifra = number.toString()
    const celie = parseFloat(cifra.split('.')[0])
    const drobnie = cifra.split('.')[1]
    let celochislennie
    if (isNaN(celie)) {
      celochislennie = ''
    } else {
      celochislennie = celie.toLocaleString('en', { maximumFractionDigits: 0 })
    }
    if (drobnie != null) {
      return `${celochislennie}.${drobnie}`
    } else {
      return celochislennie
    }
  }

  obnovlenie() {
    this.dwaTextElement.innerText =
      this.otobrajenie(this.dwa)
    if (this.ojidanie != null) {
      this.odinTextElement.innerText =
        `${this.otobrajenie(this.odin)} ${this.ojidanie}`
    } else {
      this.odinTextElement.innerText = ''
    }
  }
}


const numberButtons = document.querySelectorAll('[data-number]')
const ojidanieButtons = document.querySelectorAll('[data-operation]')
const ravnoButton = document.querySelector('[data-ravno]')
const deleteButton = document.querySelector('[data-delete]')
const acButton = document.querySelector('[data-ac]')
const odinTextElement = document.querySelector('[data-odin]')
const dwaTextElement = document.querySelector('[data-dwa]')

const calculator = new Calculator(odinTextElement, dwaTextElement)

numberButtons.forEach(button => {
  button.addEventListener('click', () => {
    calculator.dobavlenie(button.innerText)
    calculator.obnovlenie()
  })
})

ojidanieButtons.forEach(button => {
  button.addEventListener('click', () => {
    calculator.vibor(button.innerText)
    calculator.obnovlenie()
  })
})

ravnoButton.addEventListener('click', button => {
  calculator.reshenie()
  calculator.obnovlenie()
})

acButton.addEventListener('click', button => {
  calculator.chistka()
  calculator.obnovlenie()
})

deleteButton.addEventListener('click', button => {
  calculator.ydalenie()
  calculator.obnovlenie()
})

/* 
document.addEventListener('keydown', function (event) {
  let patternForNumbers = /[0-9]/g;
  let patternForOperators = /[+\-*\/]/g
  if (event.key.match(patternForNumbers)) {
    event.preventDefault();
    calculator.dobavlenie(event.key)
    calculator.obnovlenie()
  }
  if (event.key === '.') {
    event.preventDefault();
    calculator.dovablenie(event.key)
    calculator.obnovlenie()
  }
  if (event.key.match(patternForOperators)) {
    event.preventDefault();
    calculator.vibor(event.key)
    calculator.obnovlenie()
  }
  if (event.key === 'Enter' || event.key === '=') {
    event.preventDefault();
    calculator.compute()
    calculator.obnovlenie()
  }
  if (event.key === "Backspace") {
    event.preventDefault();
    calculator.delete()
    calculator.obnovlenie()
  }
  if (event.key == 'Delete') {
    event.preventDefault();
    calculator.clear()
    calculator.obnovlenie()
  }

});
*/


function conwerter() {
  var chislo = document.getElementById("chislo").value;
  var m = +document.getElementById("m").value;
  var n = +document.getElementById("n").value;

  var res = parseInt(chislo, m).toString(n);

  document.getElementById("resultat").innerHTML = "Результат: " + res;
}
document.getElementById("convert").addEventListener("click", conwerter);


proba = document.getElementById("proba")
perevod = document.getElementById("perevod")
sistem = document.getElementById("sistem")
sistem.addEventListener("click", () => {
  if (proba.style.opacity = 1) {
    proba.style.opacity = 0
    perevod.style.opacity = 1
    proba.style.display='none';
    perevod.style.display='block';
  }
  else{
    proba.style.opacity = 1
    perevod.style.opacity = 0
    perevod.style.display='none';
    proba.style.display='block';
  }
  
} 
)
obichnii = document.getElementById("obichnii")
obichnii.addEventListener("click", () => {
  if (proba.style.opacity = 0 ) {
    proba.style.opacity = 1
    perevod.style.opacity = 0
    perevod.style.display='none';
    proba.style.display='block';
  }
  else{
    proba.style.opacity = 1
    perevod.style.opacity = 0
    proba.style.display='block';
    perevod.style.display='none';
  }
} 
)