const showInputButton = document.getElementById("card");
// const closeInputButton = document.getElementById("card");
const overlay = document.getElementById("overlay");

showInputButton.addEventListener("click", function() {
  overlay.style.display = "block";
});

closeInputButton.addEventListener("click", function() {
  overlay.style.display = "none";
});



document.getElementById("closeInputButton").addEventListener("click",proceed);
let card_num=document.getElementById("number").value;

function proceed(){
    if(card_num.length<14){
        alert("Please Enter Correct Card Number");
    }else{
        window.location.href="#";
    }

}