const loginButton = document.getElementById('loginButton');
const infoActions = document.getElementById("infoActions");
let registerButton = document.getElementById('registerButton');
let registerVacinnes = document.getElementById("registerVacinne");

loginButton.addEventListener("click", () => {
    if(loginButton.text === "Salir"){
        localStorage.clear();
        loginButton.innerText = "Login";
        registerButton.style.display = 'inline';
        location.reload();
        return;
    }
})

document.addEventListener("DOMContentLoaded", () => {
  
    let nameUser = document.getElementById("nameUser");
    let emailUser = document.getElementById("emailUser");
    let loginButton = document.getElementById("loginButton");
    let registerButton = document.getElementById('registerButton');
    let registerVacinnes = document.getElementById("registerVacinne");
    let registerMunicipality = document.getElementById("registerMunicipality");

    let nameUserLogued = localStorage.getItem('name');
    let emailUserLogued = localStorage.getItem('email');

    if(localStorage.getItem('token') !== null){
        nameUser.innerText = nameUserLogued;
        emailUser.innerText = emailUserLogued;
        registerButton.style.display = 'none';
        loginButton.innerText = "Salir";
        return;
    }

    registerVacinnes.style.display = 'none';
    registerMunicipality.style.display = 'none';
})

const login = async () => {
  
  let url = "https://localhost:44353/api/user/login";

  let email = document.getElementById("email").value;
  let password = document.getElementById("password").value;
  let nameUser = document.getElementById("nameUser");
  let emailUser = document.getElementById("emailUser");
  let loginButton = document.getElementById("loginButton");
  let registerVacinnes = document.getElementById("registerVacinne");
  let registerMunicipality = document.getElementById("registerMunicipality");


  jsonObject = {
    Email: email,
    Password: password,
  };

  jsonObject.Email = email;
  jsonObject.Password = password;
  objectJson = JSON.stringify(jsonObject);

  try {
    let config = {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: objectJson,
    };

    let res = await fetch(url, config);
    const json = await res.json();

    localStorage.setItem('email',json.user.email);
    localStorage.setItem('token',json.token);
    localStorage.setItem('name',json.user.name);

    alert("Usuario Logueado");
    loginButton.innerText = "Salir";
    registerVacinnes.style.display = "inline";
    registerMunicipality.style.display = 'inline';
    location.reload();
  } catch {
    alert("Ocurrio un error intenta mas tarde");
  }
};
