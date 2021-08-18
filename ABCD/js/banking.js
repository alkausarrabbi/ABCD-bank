document.getElementById("deposit").addEventListener("click",function(){
    const depositInput=document.getElementById("user-deposit");
    const userDeposit=depositInput.value;
    const userDepositNumber=parseFloat(userDeposit);
    const depoText=document.getElementById("depo");
    const perviousDeposit=depoText.innerText;
    const perviousDepositNumber=parseFloat(perviousDeposit);
    const totalDeposit=  perviousDepositNumber + userDepositNumber;
    depoText.innerText=totalDeposit;
    depositInput.value="";
    const balance=document.getElementById("total");
    const previousBalance=balance.innerText;
    const newBalance=parseFloat(previousBalance)+parseFloat(userDeposit);
    balance.innerText=newBalance;
});
document.getElementById("withdraw").addEventListener("click",function(){
    const withdrawInput=document.getElementById("user-withdraw");
    const userWithdraw=withdrawInput.value;
    const withText=document.getElementById("with");
    const previousWithdraw=withText.innerText;
    const totalWithdraw=parseFloat(previousWithdraw)+parseFloat(userWithdraw);
    withText.innerText=totalWithdraw;
    withdrawInput.value="";
    const balance=document.getElementById("total");
    const previousBalance=balance.innerText;
    const newBalance=parseFloat(previousBalance)-parseFloat(userWithdraw);
    balance.innerText=newBalance;

});