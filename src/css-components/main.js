// Getting Nodes
function $(el) {
  return document.getElementById(el);
}


let toggleBtn = $("toggle");
let navSideOpenBtn = $("navSide-open")
let navSideCloseBtn = $("navSide-close")
let cookieContainer = $("cookie-container")
let cookieAccept = $("accept")
let cookieDecline = $("decline")


let container = document.querySelectorAll(".container");

const containerApply=(e)=>{
  container.forEach(d=>{
    if(!d.getAttribute("data-shade")){
      d.setAttribute("data-shade", "dark")
    }
    else if(d.getAttribute("data-shade")==="light"){
      d.setAttribute("data-shade", "dark")
    }
    else{
      d.removeAttribute("data-shade")
    }
  })
  
}




const openNavSide = (e)=>{
  navSide.style.left = "0%"
}
const closeNavSide = (e)=>{
  navSide.style.left = "-100%"
}

navSideOpenBtn.addEventListener("click", openNavSide)
navSideCloseBtn.addEventListener("click", closeNavSide)


cookieAccept.addEventListener("click", closeCookie)
cookieDecline.addEventListener("click", closeCookie)

function closeCookie(){
  cookieContainer.style.bottom = "-100%"
}



toggleBtn.addEventListener("click", containerApply);
