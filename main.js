let selectionMenu = document.querySelector(".offers");
let closeIcon = document.querySelector(".close-tag");
let body = document.body;
let backScreen = document.createElement("div");
let  BS= document.createTextNode("");
let packages = selectionMenu.children
let bsp = document.getElementById("bsp")
let bes = document.getElementById("bes");
let mse = document.getElementById("mse");
let norm = document.getElementById("norm");
let myRadios = [bsp, bes, mse, norm];
let tyMsg = document.querySelector(".success-modal")

// HTML
backScreen.appendChild(BS)
backScreen.setAttribute("onclick", "closemenu()");
closeIcon.setAttribute("onclick", "closemenu()");
body.append(backScreen)

function closemenu() {
  // HTML
  // CSS
  backScreen.classList.remove("black-screen")
  selectionMenu.style.display = "none";
  selectionMenu.classList.remove("newOffer");
  document.body.style.overflow = "visible";
}

function selectOne() {
  // HTML
  // CSS
  selectionMenu.style.display = "block";
  selectionMenu.classList.add("newOffer");
  document.body.style.overflow = "hidden";
  backScreen.classList.add("black-screen");
}
function highlight(e) {
  for(i=0;i<myRadios.length;i++){
    if (myRadios[i] == e) {
        myRadios[i].parentElement.parentElement.parentElement.classList.add("selected")
        myRadios[i].parentElement.parentElement.parentElement.children[2].style.display = "block";
        myRadios[i].parentElement.parentElement.parentElement.children[2].style.maxHeight = "300px";
    }else{
      myRadios[i].parentElement.parentElement.parentElement.classList.remove("selected");
      myRadios[i].parentElement.parentElement.parentElement.children[2].style.display = "none";
      myRadios[i].parentElement.parentElement.parentElement.children[2].style.maxHeight = "0";
    }
  }
}

// for(i=0; i<myRadios.length;i++){
//   myRadios[i]==bsp?console.log("bsp is found"):""
// }
function thanks() {
  closemenu();
  backScreen.classList.add("black-screen")
  tyMsg.style.display = "block"
}

function Close_thanks(){
  closemenu();
  backScreen.classList.remove("black-screen")
  tyMsg.style.display = "none"

}
backScreen.addEventListener('click', Close_thanks)
backScreen.addEventListener('click', closemenu)