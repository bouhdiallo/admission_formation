
let ageMin= 16;
function validateFormation(age, ville){
if(age>ageMin && (ville>=69001 && ville <= 69009)){
    console.log("vous etes admis a la cession de formation");
}else if (age<ageMin && (ville>=69001 || ville <= 69009)){
    console.log("vous n'avez pas l'age requis");

}else if (age<ageMin){
    console.log("vous n'habitez pas a lyon");
} else{
    console.log("vous n'avez pas l'age requis");
}
}

validateFormation(17,69009);