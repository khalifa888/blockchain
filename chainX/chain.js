
 var pric = document.getElementById("price");
 var tpS = document.getElementById("tps")
 var tran = document.getElementById("trn");
 var amount = (Math.random()*999).toFixed(4);
 var tranData1 = Math.floor(Math.random()*999999999)
 var tranData2 = (tranData1*99999999).toString(16)
 var tranData3 = (tranData1*99999998).toString(16)

 window.onload = function(){
 setTimeout(function(){
 var data1 = "from: "+ "MCC"+tranData2 +" to: " +"MCC"+tranData3
 var data2 = " amount: " +(amount).toLocaleString() +" gas fee: "+(Math.random()).toFixed(4)+ " time: "+new Date()
 tran.innerHTML = data1 + data2
 pric.innerHTML = "π" +(Math.random()*2).toFixed(2)
 tpS.innerHTML = (new Date()).getMinutes() - 3
 },1000);
 }
 function walletcheck()
 {
 var inputs = document.getElementById('input');
 if(inputs.value.includes('MCC'))
 {
 alert("This is verified MCC Wallet")
 }
 else{
 alert("This is not MCC Wallet or Something is wrong try again!")
 }
 }