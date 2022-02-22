const form = document.getElementById("submit");
const email = document.getElementsByClassName("email");
const senha = document.getElementsByClassName("password");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  let valorEmail = email[0].value;
  let valorSenha = senha[0].value;
  let boo = false;

  if (!valorEmail) {
    boo = false;
  } else boo = true;

  if (boo === false) {
    erroEmail();
    return;
  }

  if(valorSenha.length < 4){
    erroSenha();
    return;
  }

  const cssEmail = document.querySelector(".email");
  cssEmail.style.borderColor = "#ffffff";
  const error = document.querySelector(".error");
  error.innerHTML = "";
  const cssSenha = document.querySelector(".password");
  cssSenha.style.borderColor = "#ffffff";
  clearInput();
  return;
});

function erroEmail() {
  const email = document.querySelector(".email");
  email.style.borderColor = "#FF5757";
  const error = document.querySelector(".error");
  error.innerHTML = "Por favor, insira um email válido";
  return;
}

function erroSenha() {
  const senha = document.querySelector(".password");
  senha.style.borderColor = "#FF5757";
  const error = document.querySelector(".error");
  error.innerHTML = "Senha deve conter mais de 4 dígitos";
  return;
}

function clearInput() {
  document.getElementById("submit").reset();
}
