
  var slideIndex = 1;
  var btnseconnecter = document.getElementById("btncss");
  var btninscription = document.getElementById("btninscription");
  var input = document.getElementsByClassName("entrer");
  var msg = ["email","password"];
  var champs = ["firstname","email","password"];
  var object = [{
    firstname:"",
    email:"",
    password:"",
  }];
  var input2 = document.getElementsByClassName("enter2");
  var error = document.getElementsByClassName("erreur");
  var error2 = document.getElementsByClassName("erreur2");
  showDivs(slideIndex);
function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("mySlides");
  if (n > x.length) {slideIndex = 1}
  if (n < 1) {slideIndex = x.length}
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  x[slideIndex-1].style.display = "flex";  
}
function plusDivs(n) {
    showDivs(slideIndex += n);
  }
  for(var i = 0;i<=1;i++){
    document.getElementsByClassName("button-2")[i].addEventListener('click',()=>{
      document.querySelector('body').style.overflowY = "hidden";
          document.querySelector('.bg-modal-2').style.display = "flex";
         
            });
    document.getElementsByClassName("button")[i].addEventListener('click',()=>{
      document.querySelector('body').style.overflowY = "hidden";
      document.querySelector('.bg-modal').style.display = "flex";
        });
        
            document.getElementsByClassName('close')[i].addEventListener("click",()=>{
              document.querySelector('.bg-modal').style.display = "none";
              document.querySelector('.bg-modal-2').style.display = "none";
              document.querySelector('body').style.overflowY = "visible";
              error[i].innerHTML = "";
            });
            
  }
   
  function validEmail(email){
                   
    var exp =  new RegExp(/^[A-Za-z-0-9-_.]+@[A-Za-z]{4,7}.[A-Za-z]{2,3}$/);
    var valid = exp.test(email);
      
      if(valid){
        
          return true;
          
        }
     else{
     
        return false;
     }
      
    }
 
    function validname(nom){
      var letters =/^[A-Za-z]+$/;
      

      if(letters.test(nom)==true){
             return true;
         }
     else{
          return false;  
         }
      } 
  
  btnseconnecter.addEventListener("click",()=>{
for(var i =0 ;i<input.length;i++){
if(input[i].value == ""){
 error[i].innerHTML = "enter your " + msg[i];
 error[i].style.color = "red";
}else{
error[i].innerHTML = "";
if(!validEmail(input[i].value) && i == 0){

  error[i].innerHTML = "le email et incorect";
  error[i].style.color = "red";
}else{
  error[i].innerHTML = "";
  if(i == input.length - 1){
    alert("la forme bien valide");
  } 
}
}
}
});
btninscription.addEventListener("click",()=>{


  for(var i =0 ;i<input2.length;i++){
    if(input2[i].value == ""){
     error2[i].innerHTML = "enter your " + msg[i];
     error2[i].style.color = "red";
    }else{
    error2[i].innerHTML = "";
    if(!validEmail(input2[i].value) && i == 1){
    
      error2[i].innerHTML = "l'email et incorect";
      error2[i].style.color = "red";
    }else{
      if(!validname(input2[i].value) && i == 0){
        error2[i].innerHTML = "le name et incorect";
        error2[i].style.color = "red";
      }else{
        if(i == 3 && input2[i-1].value != input2[i].value){

          error2[i].innerHTML = "vous devez le bien confirmer le password";
          error2[i].style.color = "red";
        }
      } 
    }
    }
    }
});


  