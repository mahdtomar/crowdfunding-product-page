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
let beforeBsp = getComputedStyle(bsp, ":before");
let beforeBes = getComputedStyle(bes, ":before");
let beforeMse= getComputedStyle(mse, ":before");
let beforeNorm = getComputedStyle(norm, ":before");
let myRadiosBefores = [beforeBes, beforeBsp, beforeMse, beforeNorm];
console.log(beforeBsp.backgroundColor);
// HTML
backScreen.appendChild(BS)
backScreen.setAttribute("onclick", "closemenu()");
closeIcon.setAttribute("onclick", "closemenu()");
body.append(backScreen)

function closemenu() {
  // HTML
  // CSS
  backScreen.classList.remove("black-screen")
  // selectionMenu.style.display = "none";
  for(i=0;i<myRadios.length;i++){
    myRadios[i].parentElement.parentElement.parentElement.classList.remove("selected")
    myRadios[i].classList.add("remove")
    myRadios[i].parentElement.parentElement.parentElement.children[2].style.display = "none";
    myRadios[i].parentElement.parentElement.parentElement.setAttribute("checked","false")
    // myRadios[i].getComputedStyle(document.querySelector("#bsp"), ":before").style.backgroundColor = "red";
  }
  // for (i = 0; i < myRadiosBefores.length; i++) {
  //   myRadiosBefores[i].backgroundColor = "transparent";
  // }
  selectionMenu.classList.remove("newOffer");
  document.body.style.overflow = "visible";
}

function selectOne() {
  // HTML
  // CSS
  for(i=0;i<myRadios.length;i++){

  }
  // selectionMenu.style.display = "block";
  selectionMenu.classList.add("newOffer");
  document.body.style.overflow = "hidden";
  backScreen.classList.add("black-screen");
  
}
function highlight(e) {
  for(i=0;i<myRadios.length;i++){
    myRadios[i].classList.remove("remove");
    if (myRadios[i] == e) {
        myRadios[i].setAttribute("checked","true");  
        myRadios[i].parentElement.parentElement.parentElement.classList.add("selected")
        myRadios[i].parentElement.parentElement.parentElement.children[2].style.display = "block";
        myRadios[i].parentElement.parentElement.parentElement.children[2].style.maxHeight = "300px";
      }else{
      myRadios[i].removeAttribute("checked");  
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

let bookMarkText = document.createTextNode("Bookmark")
let bookMark = document.querySelector(".toggle")
// bookMark.appendChild(bookMarkText);
// if(window.innerWidth<="600px"){
//   console.log("small body")
// }else{
//   console.log("big body")
// }
// if (bookMark.offsetWidth === 40){
//   bookMark.removeChild(bookMarkText)
// }
// if (bookMark.offsetWidth !=40){
//   bookMark.appendChild(bookMarkText)
// }
let burger = document.querySelector(".burger");
let dropMenu = document.querySelector(".ul");
let closeDiv = document.createElement("div");
closeDiv.classList.add("hidden");
closeDiv.classList.add("closeDiv");
body.appendChild(closeDiv)
closeDiv.addEventListener("click",()=>{
  dropMenu.classList.remove("dropmenu")
  closeDiv.classList.toggle("hidden")
})
// document.body.onclick = () =>{
//   if (dropMenu.classList.contains("dropmenu")){
//     dropMenu.classList.remove("dropmenu")
//   }else{

//   }
// }

let burgerIcon = `<svg width="16" height="15" xmlns="http://www.w3.org/2000/svg"><g fill="#FFF" fill-rule="evenodd"><path d="M0 0h16v3H0zM0 6h16v3H0zM0 12h16v3H0z"/></g></svg>`
const style = getComputedStyle(burger);
function turnIntoCloseIcon(){
  if (dropMenu.classList.contains("dropmenu")){
    burger.innerHTML = '';
    burger.innerHTML = `<svg width="14" height="15" xmlns="http://www.w3.org/2000/svg"><g fill="#FFF" fill-rule="evenodd"><path d="M2.404.782l11.314 11.314-2.122 2.122L.282 2.904z"/><path d="M.282 12.096L11.596.782l2.122 2.122L2.404 14.218z"/></g></svg>`
  }
}
burger.onclick = () => {
  if(getComputedStyle(burger).opacity == "0"){
  }else{
    dropMenu.classList.toggle("dropmenu")
    closeDiv.classList.toggle("hidden");
    burger.innerHTML == burgerIcon? burger.innerHTML = burgerCloseIcon: burger.innerHTML = burgerIcon
    turnIntoCloseIcon();
  }
}