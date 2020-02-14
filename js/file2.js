/*button*/
var voiture = [

    {
        nom : "DACIA",
        prix : "200 DH",
        desc : "Kilométrage illimité + Service Inclus",
        path : "img/Galerie/img3.png"
    },
    {
        nom : "REANUALT",
        prix : "168 DH",
        desc : "Kilométrage illimité + Service Inclus",
        path : "img/Galerie/img1.png"
    },
    {
        nom : "HYUNDAI",
        prix : "168 DH",
        desc : "Kilométrage illimité + Service Inclus",
        path : "img/Galerie/img2.png"
    }
];
var information = document.getElementsByClassName("information");
var title = document.createElement("H1");
var  prix = document.createElement("p");
var desc = document.createElement("p");
var img = document.createElement("img");
var liste, texte;
var selectedValue = "";
var dateEntered = "";
var date1 = new Date();
// var date = document.getElementById("datetime").value;
// var duree = document.getElementById("inpt").value;

function getSelectValue(){
     selectedValue = document.getElementById("liste").value;
}
function getdate(){
    var input = document.getElementById("age").value;
  dateEntered  = new Date(input);
//   console.log(dateEntered.getFullYear());
}
document.getElementById("btnres").addEventListener("click",()=>{
    var date = document.getElementById("datetime").value;
var duree = document.getElementById("inpt").value;
        // console.log(texte);
        // console.log(selectedValue);
        // console.log(duree);
        // console.log(date);
        if( dateEntered == "" || duree == "" || selectedValue == "" ){
            alert("remplir les champs");
        }else{
    //    date1 = dateEntered;
    //    date1 = date1.getDay() + duree;
        document.getElementsByClassName("generale")[0].style.display = "block";
        $('html,body').animate({
            scrollTop: $(".generale").offset().top
        },'slow');
            for(var i = 0;i<voiture.length;i++){
                if(selectedValue == voiture[i].nom){
                    title.innerText = voiture[i].nom;
                    prix.innerText = voiture[i].prix;
                    desc.innerText = voiture[i].desc;
                    img.src=voiture[i].path;
                    information[0].appendChild(title);
                    information[0].appendChild(prix);
                    information[0].appendChild(desc);
                    information[0].appendChild(img);
                    break;
                }
            }
        }
      
    // console.log("hello");
   
    });
    function validname(nom){
        var letters =/^[A-Za-z]+$/;
        
  
        if(letters.test(nom)==true){
               return true;
           }
       else{
            return false;  
           }
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
//validation
 document.getElementById("reserv").addEventListener("click",()=>{
    var input = document.getElementsByClassName("inpttext");
    var test = false;
    var nom = document.getElementById("nom").value,prenom = document.getElementById("prenom").value,
    tele = document.getElementById("tele").value,email = document.getElementById("mail").value,
    adr = document.getElementById("adress").value;

    if(nom == "" || prenom == "" || tele == "" || email == "" || adr == "" || dateEntered == ""){
        alert("vous devez remplir tous les champs");
    }else{
        if(!validname(nom)){
            alert("le nom n'est pas valide");
        }else{
            if(!validEmail(email)){
                alert("l'email n'est pas valide");
            }else{
                var datetime = new Date();
                var d1 = datetime.getFullYear();
                var d2 = dateEntered.getFullYear();
            
                if((d1-d2)<=2){
                    alert("la date du permis doit etre supurieur que 2 ans");
                }else{
                    
                    document.getElementsByClassName("bg-modal-2")[0].style.display = "flex";
                    document.querySelector('body').style.overflowY = "hidden";
                    console.log("hello");
                }
            }
        }
    }
    
});
document.getElementsByClassName("close")[0].addEventListener("click",()=>{
    document.querySelector('.bg-modal-2').style.display = "none";
    document.querySelector('body').style.overflowY = "visible";
    document.location.reload();


})

