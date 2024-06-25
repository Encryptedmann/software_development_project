// handle deposit button 
document.getElementById("deposit-btn").addEventListener("click", function(){

    // get the user depositInput
    const depositInput = document.getElementById("deposit-input");
    const newDepositAmount = depositInput.value;

    // updating the value of deposit section
    const depositTotal = document.getElementById('deposit-total');
    const previousDepositAmount = depositTotal.innerText;

    const newDepositTotal = parseFloat(previousDepositAmount) + parseFloat(newDepositAmount);
    depositTotal.innerText = newDepositTotal;
    
    // clear the input field 
    depositInput.value = '';

    // updating the balance
    const balanceTotal = document.getElementById('balance-total');
    const previousTotalBalance = balanceTotal.innerText;

    const newBalance = parseFloat(previousTotalBalance) + newDepositTotal;
    balanceTotal.innerText = newBalance;

});


// handle the withdraw button 
document.getElementById("withdraw-btn").addEventListener("click", function(){

    // getting the user withdrawInput
    const withdrawInput = document.getElementById('withdraw-input');
    const newWithdrawAmount = withdrawInput.value;

    const withdrawTotal = document.getElementById('withdraw-total');
    const previousWithdrawTotal = withdrawTotal.innerHTML;

    const newWithdrawTotal = parseFloat(previousWithdrawTotal) + parseFloat(newWithdrawAmount);
    withdrawTotal.innerHTML = newWithdrawTotal;

    // clear withdraw input 
    withdrawInput.value = '';

    // updating the balance 
    const balanceTotal = document.getElementById('balance-total');
    const previousTotalBalance = balanceTotal.innerHTML;

    const newBalance = parseFloat(previousTotalBalance) - newWithdrawTotal;
    balanceTotal.innerText = newBalance;

});