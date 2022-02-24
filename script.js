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
      manu.classList.remove('show')
   })
}