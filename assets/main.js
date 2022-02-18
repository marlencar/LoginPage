  const form = document.getElementById('submit') 
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const resetEmail = document.getElementsByClassName("email");
    const resetSenha = document.getElementsByClassName("password");
    const valorEmail = resetEmail[0].value;
    const valorSenha = resetSenha[0].value;
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
    const error = document.querySelector(".password");
    error.innerHTML = "";
  });


function mostraErro() {
  const email = document.querySelector(".email");
  email.style.borderColor = "#FF5757";
  const error = document.querySelector(".error");
  error.innerHTML = "Por favor, insira um email válido";
  return;
}
