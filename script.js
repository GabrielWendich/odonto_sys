const menu = document.querySelector("#menu")
const toggle = document.querySelectorAll("#header .toggle")
const links = document.querySelectorAll("#menu ul li a")

for (const element of toggle) {
   element.addEventListener('click', () => {
      menu.classList.toggle('show')
   })
}

for (const link of links) {
   link.addEventListener('click', () => {
      menu.classList.remove('show')
   })
}




const menuConfig = document.querySelector("#menu-config")
const toggleConfig = document.querySelectorAll("#header .toggle-config")

for (const element of toggleConfig) {
   element.addEventListener('click', () => {
      menuConfig.classList.toggle('show')
   })
}

for (const link of links) {
   link.addEventListener('click', () => {
      menuConfig.classList.remove('show')
   })
}