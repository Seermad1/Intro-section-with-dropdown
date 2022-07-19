const menu = document.getElementById('menu')
const closeMenu = document.getElementById('close-menu')
const navBar = document.getElementById('navbar')
const companyDropDown = document.getElementById("company-dropdown")
const featureDropDown = document.getElementById("features-dropdown")
const dropDownSvg = document.querySelectorAll(".dropdown-svg")
const dropDown = document.querySelectorAll(".dropdowns")

menu.addEventListener("click", ()=>{
    navBar.classList.add("show")
})

closeMenu.addEventListener("click", ()=>{
    navBar.classList.remove("show")
})

let firstClick = true

function showDropDown(dropdown, button, svg){
    button.addEventListener("click", ()=>{
        if(firstClick === false){
            dropdown.classList.remove("show")
            svg.src = "images/icon-arrow-down.svg" 
            firstClick = true
            return firstClick;
        }

        dropdown.classList.add("show")
        svg.src = "images/icon-arrow-up.svg"
        firstClick = false
    })
}

showDropDown(featureDropDown, dropDown[0], dropDownSvg[0])
showDropDown(companyDropDown, dropDown[1], dropDownSvg[1])
