function getInputValue(fieldId){
   const inputTag = document.getElementById(fieldId);
   const inputValueInText = inputTag.value;
   const previousValue = parseFloat(inputValueInText);
   inputTag.innerText = previousValue;
   inputTag.value = '';
   return previousValue;
}

function updateTotal(name, amount){
   const fieldName = document.getElementById(name);
   const depositInText = fieldName.innerText;
   const previousValue = parseFloat(depositInText);
   const newBalance = previousValue + amount;
   fieldName.innerText = newBalance;

}
function udpadeBalance(amount, isAdding){
   const balanceTag = document.getElementById('balance');
   const balanceInText = balanceTag.innerText;
   const previousBalance = parseFloat(balanceInText);
   let newBalance;
   if(isAdding==true){
      newBalance = previousBalance + amount;
   }
   else{
      newBalance = previousBalance - amount;
   }
   balanceTag.innerText = newBalance;

}
document.getElementById('deposit-btn').addEventListener('click', function(){
   const inputName = getInputValue('deposit-input');
   updateTotal('deposit-total', inputName);
   udpadeBalance(inputName, true)
   
})
document.getElementById('withdraw-btn').addEventListener('click', function(){
   const inputName = getInputValue('withdraw-input');
   updateTotal('withdraw-amount', inputName);
   udpadeBalance(inputName, false)
   
})






/*  function getInputValue(fieldId){
    const inputField = document.getElementById(fieldId);
    const valueInText = inputField.value;
    const value = parseFloat(valueInText);
    inputField.value = '';
    return value;
 }
 function updateTotal(fieldId, amount){
   // console.log(fieldId, amount);
   const totalTag = document.getElementById(fieldId);
   const previousTotalInText =totalTag.innerText;
   const previousTotal = parseFloat(previousTotalInText);
   const newTotal = previousTotal + amount;
   totalTag.innerText = newTotal;
 }
 //handle balance
 function udpadeBalance(amount, isAdding){
    const balanceTag = document.getElementById('balance');
    const balanceInText = balanceTag.innerText;
    const previousBalance = parseFloat(balanceInText);
    let newBalance;
    if(isAdding==true){
       newBalance = previousBalance + amount;
      }
      else{
       newBalance = previousBalance - amount;
    }
    balanceTag.innerText = newBalance;
 }
//handle deposit
 document.getElementById('deposit-btn').addEventListener('click', function(){
    const amount = getInputValue('deposit-input');
    updateTotal('deposit-total', amount);
    udpadeBalance(amount, true);
    
   //  console.log (amount);
 })

 //handle withdraw
 document.getElementById('withdraw-btn').addEventListener('click', function(){
    const amount = getInputValue('withdraw-input');
    updateTotal('withdraw-amount', amount);
   udpadeBalance(amount, false);
 }) */