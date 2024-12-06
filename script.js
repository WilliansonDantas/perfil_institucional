document.getElementById("show-summary").addEventListener("click", function () {
  const resumo = document.getElementById("resumo")
  resumo.classList.toggle("hidden")
})

document
  .getElementById("contact-form")
  .addEventListener("submit", function (event) {
    event.preventDefault()

    const name = document.getElementById("name").value
    const email = document.getElementById("email").value
    const message = document.getElementById("message").value

    if (!name || !email || !message) {
      alert("Por favor, preencha todos os campos.")
      return
    }

    alert("Mensagem enviada com sucesso!")
  })
