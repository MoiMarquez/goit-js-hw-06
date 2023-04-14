const counter = 0;
const countVal = document.getElementById('value');
countVal.textContent = counter;

const sum = () => {
    countVal.textContent ++;
};

const res = () => {
    countVal.textContent --;
};

const countBtn = document.querySelector('button[data-action="increment"]')
const minusBtn = document.querySelector('button[data-action="decrement"]')
countBtn.addEventListener("click", sum);
minusBtn.addEventListener("click", res);