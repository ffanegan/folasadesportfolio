let lightmode = document.getElementsByClassName("lightmode");
const theme = document.getElementById("theme")
let dark = document.getElementsByTagName('darkmode')
const menu_icon = document.getElementById('menu_icon')
const hamburger = document.querySelector("#icon_three")
const tool_bar = document.querySelector(".tool-bar")
let openMenu = false;
const icon_ham = document.querySelector("#icon_ham")
const icon_close = document.querySelector("#icon_close")

function light_bgd() {
    document.body.classList.toggle('lightmode')
}

// function change_tooltip() {
//     const tooltip = document.getElementsByClassName("dark_tooltip")
//     tooltip.textContent.toggle("Light Mode")
// }

// const enableLight = () => {
//     document.body.classList.add('lightmode')
//     localStorage.setItem('lightmode', 'active')
// }

// const disableLight = () => {
//     document.body.classList.remove('lightmode')
//     localStorage.setItem('lightmode', 'null')
// }

// if(lightmode === 'active') enableLight()

// theme.addEventListener("click", () => {
//     lightmode = localStorage.getItem('lightmode')
//     lightmode !== "active"
//     ? enableLight()
//     : disableLight()
// })

// hamburger.addEventListener("click", () => {})

function openSidebar() {
    tool_bar.style.right = '-2%'
    icon_ham.style.display = "none"
    icon_close.style.display = "inline-block"
}

function closeSidebar() {
    tool_bar.style.right = '-100%'
    icon_ham.style.display = "inline-block"
    icon_close.style.display = "none"
}