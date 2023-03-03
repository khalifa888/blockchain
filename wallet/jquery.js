$(document).ready(function(){
 if(screen.availHeight < 540)
 {
   $("img").css("height","180px")
 }
 var hash = Math.floor(Math.random()*3883838383838)
 var hash2 = Math.floor(Math.random()*8888888888889)
 var hash3 = Math.floor(Math.random()*999999999999999).toString(16)
 var hash4 = Math.floor(Math.random()*999989999999999).toString(16)
 var hash5 = hash3 + hash4
 var hashr = hash3 + hash.toString(16) + hash.toString(16) + hash5
  $("#create").click(function(){
  $("#hashspan").html(hashr);
  $(".hashimport, small").css("display","block");
  $("#hashspan").css("margin","auto");
  $("#create,img").css("display","none");
  });
  
  $("#import").click(function(){
  $("#importdiv").css("display","block");
  $(this).css("display","none");
  $("#create, #hashspan,small, img").css("display","none");
  });
  
  $("#importbtn").click(function(){
    if(privateKey.value == "")
    {
      alert("past private key");
      $("#importdiv").focus()
    }
     else
     {
       $("#blndiv").css("display","block")
       $("#importdiv").css("display","none");
     }
  });
  });