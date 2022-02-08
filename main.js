let selectionMenu = document.querySelector(".offers");
let closeIcon = document.querySelector(".close-tag");
let body = document.body;
let backScreen = document.createElement("div");
let  BS= document.createTextNode("");
let packages = selectionMenu.children

// HTML - ADDING ELEMENTS 
backScreen.appendChild(BS)
body.append(backScreen)

closeIcon.addEventListener("click",() =>{
  // HTML
  // CSS
  backScreen.classList.remove("black-screen")
  selectionMenu.style.display = "none";
  selectionMenu.classList.remove("newOffer");
  document.body.style.overflow = "visible";
  
})

function selectOne() {
  // HTML
  // CSS
  selectionMenu.style.display = "block";
  selectionMenu.classList.add("newOffer");
  document.body.style.overflow = "hidden";
  backScreen.classList.add("black-screen")
  
}

