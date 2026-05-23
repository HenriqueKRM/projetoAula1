function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")

  const img = document.querySelector("#profile img")

  if (html.classList.contains("light")) {
    img.setAttribute("src", "./assets/avatar-light.png")
    img.setAttribute(
      "alt",
      "Homem de óculos e sem barba em um fundo roxo e azul, vestindo camiseta preta e jaqueta de couro.",
    )
  } else {
    img.setAttribute("src", "./assets/avatar.png")
    img.setAttribute(
      "alt",
      "Homem segurando um livro, com camisa preta, sorrindo e um fundo com iluminação vermelha.",
    )
  }
}
