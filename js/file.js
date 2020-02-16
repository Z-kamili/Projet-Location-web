
  var slideIndex = 1;
  var btnseconnecter = document.getElementById("btncss");
  var btninscription = document.getElementById("btninscription");
  var input = document.getElementsByClassName("entrer");
  var msg = ["email","password"];
  var test = true;
  var champs = ["firstname","email","password"];
  var i = 0;
  var input2 = document.getElementsByClassName("enter2");
  var error = document.getElementsByClassName("erreur");
  var error2 = document.getElementsByClassName("erreur2");
  var myjson;
  var data = {};
  var x = document.getElementsByClassName("mySlides");
  var titre = document.getElementById("titre");
  var prix = document.getElementById("prix");
  var money = document.getElementById("money");
  var desc = document.getElementById("desc");
  var image = document.getElementById("image");
  var voiture = [

    {
        nom : "DACIA",
        prix : "200",
        money: "DH*",
        desc : "Kilométrage illimité + Service Inclus",
        path : "img/Galerie/img3.png"
    },
    {
        nom : "REANUALT",
        prix : "100",
        money : "DH*",
        desc : "Kilométrage illimité + Service Inclus",
        path : "img/Galerie/img1.png"
    },
    {
        nom : "HYUNDAI",
        prix : "168",
        money : "DH*",
        desc : "Kilométrage illimité + Service Inclus",
        path : "img/Galerie/img2.png"
    }
];

  /*slider*/
Afficher2(slideIndex);
function Incrementer(n) {
  slideIndex = slideIndex + n;
    Afficher2(slideIndex);
    
  }
  function Afficher2(n){

  if (n > voiture.length) {slideIndex = 1}
  else if (n < 1) {slideIndex = voiture.length}
  titre.innerText = voiture[slideIndex -1].nom;
  prix.innerText = voiture[slideIndex - 1].prix;
  money.innerText = voiture[slideIndex - 1].money;
  desc.innerText = voiture[slideIndex - 1].desc;
  image.src = voiture[slideIndex - 1].path;
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
              document.location.reload();
            });
            
  }
   /*validation */
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
var data2 = localStorage.getItem("data1");
data = JSON.parse(data2);
for(var i =0 ;i<input.length;i++){
if(input[i].value == ""){
//  error[i].innerHTML = "enter your " + msg[i];
//  error[i].style.color = "red";
input[i].style.borderColor = "red";
input[i].placeholder = "erreur";
 console.log(data.email);
}else{
error[i].innerHTML = "";
if(!validEmail(input[i].value) && i == 0){

  input[i].style.borderColor = "red";
  input[i].placeholder = "erreur";
}else{
   if(data.email == input[0].value && data.password == input[1].value){
    document.location.href = "reservation.html";
   }else{
     if(data.email != input[0].value){
      input[i].style.borderColor = "red";
input[i].placeholder = "erreur";
     }   
     else if(data.password !== input[1].value){
      input[i].style.borderColor = "red";
      input[i].placeholder = "erreur";
     }
   } 
}
}
}
});
btninscription.addEventListener("click",()=>{


  for( i =0 ;i<input2.length;i++){
    if(input2[i].value == ""){
      input2[i].style.borderColor = "red";
      input2[i].placeholder = "erreur";
     console.log();
     test = false;
    }else{
    error2[i].innerHTML = "";
    if( i == 1 && !validEmail(input2[i].value) ){
    
      input2[i].style.borderColor = "red";
      input2[i].placeholder = "erreur";
      test = false;
    }else{
      if( i == 0 && !validname(input2[i].value) ){
        input2[i].style.borderColor = "red";
      input2[i].placeholder = "erreur";
        test = false;
      }else{
        if(  i == 3  && input2[i-1].value != input2[i].value ){

          input2[i].style.borderColor = "red";
          input2[i].placeholder = "erreur";
          test= false;
        }else{
          test = true;
          data[input2[i].getAttribute("name")] = input2[i].value;
        }  
      } 
    }
    }  
    }
    if(test){
localStorage.setItem("data1",JSON.stringify(data));
// myjson = JSON.stringify(data);
     document.location.reload();
    }
});
/*validation*/
document.getElementById("env").addEventListener("click",()=>{
  var nom = document.getElementById("name").value,
  email = document.getElementById("email").value,textarea = document.getElementById("text").value;
   
  if(nom == "" || email == "" || textarea == ""){
      alert("vous devez remplir tous les champs");
  }else{
      if(!validname(nom)){
          alert("le nom n'est pas valide");
      }else{
          if(!validEmail(email)){
              alert("l'email n'est pas valide");
          }else{
          
              alert("la forme bien valide");
              document.location.reload();
              
          }
      }
  }
  
});




  