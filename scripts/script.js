'use strict';
// Initialise Variables
const currency = [2000, 500, 200, 100, 50, 20, 10, 5, 2, 1];
const count = [];
const submit = document.getElementById('submit');
const bill_Amt = document.getElementById('bill');
const cash = document.getElementById('cash');
const balance = document.getElementById('balance');
const num = document.querySelectorAll('#count');
const currency_html = document.querySelectorAll('#currency');
let change;

// functions
//calculate currency
const calculate = () => {
  if (bill_Amt.value <= cash.value) {
    change = cash.value - bill_Amt.value;
    balance.innerText = change;
  } else {
    change = bill_Amt.value - cash.value;
    if (change >= 0) {
      balance.innerText = `${change} Cash is less then Bill Amount`;
    } else {
      balance.innerText = `Try Again`;
    }
  }
  checking();
};

// checking countable currency
const checking = () => {
  for (let i = 0; i < 10; i++) {
    count.push(0);
    console.log(count);
    while (change >= currency[i]) {
      change = change - currency[i];
      count[i]++;
    }
    console.log(count[i]);
    num[i].innerText = count[i];
    if (count[i] > 0) {
      num[i].classList.add('hightlight1');
      currency_html[i].classList.add('hightlight');
    }
  }
};

// event listener
submit.addEventListener('click', calculate);
