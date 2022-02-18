const form = document.getElementById("submit");
const email = document.getElementsByClassName("email");
const senha = document.getElementsByClassName("password");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  let valorEmail = email[0].value;
  let valorSenha = senha[0].value;
  let boo = false;

  if (!valorEmail || !valorSenha) {
    boo = false;
  } else boo = true;
  console.log(boo);

  if (boo === false) {
    mostraErro();
    return;
  }

  const cssEmail = document.querySelector(".email");
  cssEmail.style.borderColor = "#ffffff";
  const error = document.querySelector(".error");
  error.innerHTML = "";
  clearInput();
  return;
});

function mostraErro() {
  const email = document.querySelector(".email");

  email.style.borderColor = "#FF5757";
  const error = document.querySelector(".error");
  error.innerHTML = "Por favor, insira um email válido";
  return;
}

function clearInput() {
  document.getElementById("submit").reset();
}
