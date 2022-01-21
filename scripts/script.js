/** @format */

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

// functions
//calculate currency
const calculate = (event) => {
  event.preventDefault();
  let change = 0;
  if (parseInt(bill_Amt.value) <= parseInt(cash.value)) {
    change = cash.value - bill_Amt.value;
    balance.innerText = change;
    // console.log(change);
  } else {
    change = bill_Amt.value - cash.value;
    // console.log(change);
    balance.innerText = `-${change} Cash is less then Bill Amount`;
  }
  checking(change);
};

// checking countable currency
const checking = (value) => {
  for (let i = 0; i < 10; i++) {
    count.push(0);
    // console.log(count);
    while (value >= currency[i]) {
      value = value - currency[i];
      count[i]++;
    }
    // console.log(count[i]);
    num[i].innerText = count[i];
    if (count[i] > 0) {
      num[i].classList.add('hightlight1');
      currency_html[i].classList.add('hightlight');
    }
  }
};

// event listener
submit.addEventListener('click', calculate);
