// handle deposite buttton  event
document.getElementById('deposite-btn').addEventListener('click', function () {
    // get the amount deposited
    const depositeInput = document.getElementById('deposite-input');
    const newdepositeAmountText = depositeInput.value;
    const newdepositeAmount = parseFloat(newdepositeAmountText);
    console.log(newdepositeAmount);
// update deposite total
    const depositeTotal = document.getElementById('deposite-total');
    const previousdepositeAmountText = depositeTotal.innerText;
    const previousdepositeAmount = parseFloat(previousdepositeAmountText);
    const newdepositeTotal = previousdepositeAmount + newdepositeAmount;
    depositeTotal.innerText = newdepositeTotal;

    // update account balance
    const balanceTotal = document.getElementById('balance-total');
    const previousbalanceText = balanceTotal.innerText;
    const previousbalanceTotal = parseFloat(previousbalanceText);
    const newbalanceTotal = previousbalanceTotal + newdepositeAmount;
    balanceTotal.innerText = newbalanceTotal;



    //   clear the deposite input field
      depositeInput.value = '';
});
//  handl withdraw event handler
document.getElementById('withdraw-btn').addEventListener('click', function () {
    const withdrawInput = document.getElementById('withdraw-input');
    const withdrawAmountText = withdrawInput.value;
    const newWithDrawAmount = parseFloat(withdrawAmountText);
    console.log(newWithDrawAmount);

    // set withdraw total
    const withdrawTotal = document.getElementById('withdraw-total');
    const previouswithdrawText = withdrawTotal.innerText;
    const previouswithdrawTotal = parseFloat(previouswithdrawText);
    const newwithdrawTotal = previouswithdrawTotal + newWithDrawAmount;
    withdrawTotal.innerText = newwithdrawTotal;

    // update balance
    const balanceTotal = document.getElementById('balance-total');
    const previousbalanceText = balanceTotal.innerText;
    const previousbalanceTotal = parseFloat(previousbalanceText);
    const newbalanceTotal = previousbalanceTotal - newWithDrawAmount;
    balanceTotal.innerText = newbalanceTotal;

 // clear withdraw input
 withdrawInput.value = '';
})