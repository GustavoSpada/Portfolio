function toggleMode() {

  const html = document.documentElement

  html.classList.toggle("light")

  const img = document.querySelector("#Perfil img")
  
  if(html.classList.contains("light")) {
    img.setAttribute("src", "./Images/Perfil/IMG_20230810_190858012.jpg")
  } else {
    img.setAttribute("src", "./Images/Perfil/IMG_20230810_190927112.jpg")
  }
}