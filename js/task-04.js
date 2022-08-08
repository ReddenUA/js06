const counterValue = document.querySelector('#value');
const incBtn = document.querySelector('button[data-action="increment"]');
const decBtn = document.querySelector('button[data-action="decrement"]');

const counter = {
  value : 0,
  increment() {
    this.value +=1; 
  },
  decrement() {
    this.value -=1; 
  }

};
incBtn.addEventListener('click', () => {
  counter.increment();
  counterValue.textContent = counter.value 
});
decBtn.addEventListener('click', () => {
  counter.decrement();
  counterValue.textContent = counter.value 
});