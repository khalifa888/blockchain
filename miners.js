 $(document).ready(function(){
  $("#btn").click(function(){
  $(".info").slideToggle("slow");
  });
  var wid = document.querySelector(".w")
  var ip = document.querySelector(".ipa")
  
 $(".connect").click( function()
  {
  var inputs = document.getElementById('input');
  if(!(wid.value.includes('MCC') && ip.value.includes(".")))
  {
  alert("Wallet ID or IP Address is incorrect!!!")
  }
  else{
  alert("No miner required now!!!")
  }
  });
  
  $("#light").click(function(){
  $("html, body").css("background","#f2f2f2");
  $(".project, .info, #btn").css("boxShadow","none")
  });
  });