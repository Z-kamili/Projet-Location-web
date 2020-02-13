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
// var date = document.getElementById("datetime").value;
// var duree = document.getElementById("inpt").value;

function getSelectValue(){
     selectedValue = document.getElementById("liste").value;
}
document.getElementById("btnres").addEventListener("click",()=>{
    var date = document.getElementById("datetime").value;
var duree = document.getElementById("inpt").value;
        // console.log(texte);
        console.log(selectedValue);
        console.log(duree);
        console.log(date);
        if( date == "jj/mm/aaaa" || duree == "" ){
            alert("remplir les champs");
        }else{
        document.getElementsByClassName("generale")[0].style.display = "block";
        $('html,body').animate({
            scrollTop: $(".generale").offset().top
        }, 'slow');
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