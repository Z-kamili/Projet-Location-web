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
        prix : "100 DH",
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
img.setAttribute("id","taille");
var liste, texte;
var selectedValue = "";
var dateEntered = "";
var dateEntered2 = "";
var date1;
var nom2 = document.getElementById("Nom");
var prenom2 = document.getElementById("Prenom");
var Date_debut2 = document.getElementById("Date");
var EMAIL = document.getElementById("EMAIL");
var duree;
// var date = document.getElementById("datetime").value;
// var duree = document.getElementById("inpt").value;
var g;
var titre = document.getElementById("titre");
var image = document.querySelector(".taille");

function getSelectValue(){
     selectedValue = document.getElementById("liste").value;
}

function getdate2(){
    var input = document.getElementById("datetime").value;
  dateEntered = new Date(input);
 
//   console.log(dateEntered.getFullYear());
}
function getdate1(){
    var input = document.getElementById("datepermis").value;
  dateEntered2 = new Date(input);
 
//   console.log(dateEntered.getFullYear());
}
function dateDiff(date1, date2){
    // var diff = {}                           // Initialisation du retour
    var tmp = date1 - date2;
 
    diff = parseInt(Math.ceil(tmp/(1000 * 60 * 60 * 24 * 30 * 12)));
     
    return diff;
}
document.getElementById("btnres").addEventListener("click",()=>{
 duree = document.getElementById("inpt").value;
 console.log(dateEntered);
        if( dateEntered == "" || duree == "" || selectedValue == "" ){
            alert("remplir les champs");
        }else{
        document.getElementsByClassName("generale")[0].style.display = "block";
        $('html').animate({
            scrollTop: $(".generale").offset().top
        },'slow');
            for(var i = 0;i<voiture.length;i++){
                if(selectedValue == voiture[i].nom){
                    title.innerText = voiture[i].nom;
                    prix.innerText = voiture[i].prix;
                    desc.innerText = voiture[i].desc;
                    img.src=voiture[i].path;
                    g = i;
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
            // function addDays(date, days) {
            //     const copy = new Date(Number(date))
            //     copy.setDate(date.getDate() + days)
            //     return copy
            //   }
//validation
 document.getElementById("reserv").addEventListener("click",()=>{
    var input = document.getElementsByClassName("inpttext");
    var nom = document.getElementById("nom").value,prenom = document.getElementById("prenom").value,
    tele = document.getElementById("tele"),email = document.getElementById("mail").value,
    adr = document.getElementById("adress");
     
    if(nom == "" || prenom == "" || tele == "" || email == "" || adr == "" || dateEntered == ""){
        alert("vous devez remplir tous les champs");
    }else{
        if(!validname(nom)){
            alert("le nom n'est pas valide");
        }else{
            if(!validEmail(email)){
                alert("l'email n'est pas valide");
            }else{
                // var datetime = new Date();
                // var d1 = datetime.getFullYear();
                // var d2 = dateEntered2.getFullYear();
                var datetime = new Date();
            var d2 =     dateDiff(datetime,dateEntered2);
            console.log(d2);
                if(d2<=2){
                    alert("la date du permis doit etre supurieur que 2 ans");
                }else{
                   
                    nom2.innerText = nom;
                    prenom2.innerText = prenom;
                    Date_debut2.innerText = dateEntered;
                    titre.innerText = voiture[g].nom;
                    image.src = voiture[g].path;
                    console.log(voiture[g].path);
                    EMAIL.innerText = email;
                    // document.querySelector('body').style.overflowY = "hidden";
                    document.getElementsByClassName("bg-modal-2")[0].style.display = "flex";
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


});
document.querySelector(".add").addEventListener("click",()=>{

    document.location.href = "index.html";

});


