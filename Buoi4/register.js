const regContainer = document.createElement("div")
const title = document.createElement("h3")
title.innerHTML = "Create your account"
regContainer.classList.add("app")

const emailInput = document.createElement("input")
emailInput.setAttribute("placeholder", "Enter your email")

const nameInput = document.createElement("input")
nameInput.placeholder="Username"

const passInput = document.createElement("input")
passInput.type = "password"
passInput.placeholder = "Password"

const confirmpassInput = document.createElement("input")
confirmpassInput.type = "password"
confirmpassInput.placeholder = "Confirm Password"

const submitButton = document.createElement("input")
submitButton.type="submit"
submitButton.value="LOGIN"

const linktoLogin = document.createElement("a")
linktoLogin.innerHTML = "You already have an account?"

regContainer.appendChild(title)
regContainer.appendChild(emailInput)
regContainer.appendChild(nameInput)
regContainer.appendChild(passInput)
regContainer.appendChild(confirmpassInput)
regContainer.appendChild(submitButton)
regContainer.appendChild(linktoLogin)

const regForm = document.createElement("form")
regForm.appendChild(regContainer)

const app = document.getElementById("app")
app.appendChild(regForm)