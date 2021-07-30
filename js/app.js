'use strict'
function calculateCashback(specialCategoryPurchases, otherCategoryPurchases) {
    const specialCategoryPercent=0.03;
    const otherCategoryPercent=0.01;
    const specialCategoryCashback=specialCategoryPurchases*specialCategoryPercent;
    console.log(specialCategoryCashback);
    const otherCategoryCashback=otherCategoryPurchases*otherCategoryPercent;
    console.log(otherCategoryCashback);
    let totalCashback=specialCategoryCashback+otherCategoryCashback;
    const limit =15000;

    return {
        specialCategoryCashback,
        otherCategoryCashback,
        totalCashback: totalCashback > limit ? limit : totalCashback,
    };
}
// const cashback= calculateCashback(250000,700000);
// console.log(cashback);
// function handleClick(evt) {
//     debugger;
// }
function handleSubmit(evt) {
    evt.preventDefault();

    specialAmountErrorEl.textContent='';
    otherAmountErrorEl.textContent='';
    specialCashbackEl.textContent='';
    otherCashbackEl.textContent='';
    totalCashbackEl.textContent='';


    const specialAmount = Number(specialAmountInputEl.value);
    if (Number.isNaN(specialAmount)){
        specialAmountErrorEl.textContent=`Неверное значение. Введите число, например: 10000`;
        return;
    }
    if (!Number.isFinite(specialAmount)){
        specialAmountErrorEl.textContent=`Слишком большое значение. Введите число, например: 10000`
        return;
    }


    const otherAmount = Number(otherAmountInputEl.value)
    if (Number.isNaN(otherAmount)){
        otherAmountErrorEl.textContent = `Неверное значение. Введите число, например: 10000`;
    }
    if (!Number.isFinite(otherAmount)){
        otherAmountErrorEl.textContent = `Слишком большое значение. Введите число, например: 10000`;
        return;
    }

    const result = calculateCashback(specialAmount, otherAmount);

    specialCashbackEl.textContent=`${result.specialCategoryCashback} руб.`;
    otherCashbackEl.textContent=`${result.otherCategoryCashback} руб.`;
    totalCashbackEl.textContent = `${result.totalCashback} руб.`

}
const formEl = document.getElementById('cashback-form');
 formEl.onsubmit = handleSubmit;

const specialAmountInputEl = document.getElementById('special-amount-input');
const otherAmountInputEl = document.getElementById('other-amount-input');

const specialAmountErrorEl = document.getElementById('special-amount-error');
const otherAmountErrorEl = document.getElementById('other-amount-error');
const specialCashbackEl = document.getElementById('special-cashback')
const otherCashbackEl = document.getElementById('other-cashback');
const totalCashbackEl = document.getElementById(('total-cashback'));

// calculateCashback();
// formEl.onclick=handleClick;