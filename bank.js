//submit area
const loginBtn = document.getElementById("login");
loginBtn.addEventListener('click',function(){
    document.getElementById('login-area').style.display="none";
    const trans=document.getElementById('trans-area');
    trans.style.display="block";
});

//deposit 

const depositaBtn=document.getElementById('addDeposit');
depositaBtn.addEventListener('click',function(){
    const deposit=document.getElementById("deposite-amount").value;
    const depositNumber=parseFloat(deposit);

    const currentDeposit=document.getElementById("currentDeposit").innerText;
    const currentDepositeNumber=parseFloat(currentDeposit);
    const totalDeposit=currentDepositeNumber+depositNumber;
    document.getElementById("currentDeposit").innerText=totalDeposit;
    

     const balance=document.getElementById("balanceAmount").innerText;
    const balanceNumber=parseFloat(balance);
    const totalbalance=depositNumber+balanceNumber;
    document.getElementById("balanceAmount").innerText=totalbalance;
});
//withdrow

const withdrawBtn=document.getElementById('addwithdrow');
withdrawBtn.addEventListener('click',function(){
    const withdrawAmount=document.getElementById('withdrowAmount').value;
    const withdrawNumber=parseFloat(withdrawAmount);
    const currentdraw=document.getElementById('withdrawfull').innerText;
    const newnum=parseFloat(currentdraw);
    const fullwithdraw=newnum+withdrawNumber;
    document.getElementById('withdrawfull').innerText=fullwithdraw;

    const balance=document.getElementById("balanceAmount").innerText;
    const balanceNumber=parseFloat(balance);
    const totalbalance=balanceNumber-withdrawNumber;
    document.getElementById("balanceAmount").innerText=totalbalance;
})
