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
  backScreen.classList.add("black-screen")
}

function highlight(e) {
  for(i=0;i<myRadios.length;i++){
    if (myRadios[i] == e) {
      myRadios[i].parentElement.classList.add("selected")
      i<3? myRadios[i].parentElement.children[4].style.display = "block":"";
      i<3? myRadios[i].parentElement.children[4].style.maxHeight = "300px":"";
      // console.log(myRadios[i])
    }else{
      myRadios[i].parentElement.classList.remove("selected");
      i<3?myRadios[i].parentElement.children[4].style.display = "none":""
      i<3?myRadios[i].parentElement.children[4].style.maxHeight = "none":""
    }
  }
}