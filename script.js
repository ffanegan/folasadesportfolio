let lightmode = document.getElementsByClassName("lightmode");
const theme = document.getElementById("theme")
let dark = document.getElementsByTagName('darkmode')


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

function openSidebar() {}

function closeSidebar() {}