const loginButton = document.getElementById('loginButton');

loginButton.addEventListener("click", () => {
    if(loginButton.text === "Salir"){
        localStorage.clear();
        loginButton.innerText = "Login";
        location.reload();
        return;
    }
})

document.addEventListener("DOMContentLoaded", () => {
    let nameUser = document.getElementById("nameUser");
    let emailUser = document.getElementById("emailUser");
    let loginButton = document.getElementById("loginButton");

    let nameUserLogued = localStorage.getItem('name');
    let emailUserLogued = localStorage.getItem('email');

    if(localStorage.getItem('token') !== null){
        nameUser.innerText = nameUserLogued;
        emailUser.innerText = emailUserLogued;
        loginButton.innerText = "Salir";
    }
})

let login = async () => {
  let url = "https://localhost:44353/api/user/login";

  let email = document.getElementById("email").value;
  let password = document.getElementById("password").value;
  let nameUser = document.getElementById("nameUser");
  let emailUser = document.getElementById("emailUser");
  let loginButton = document.getElementById("loginButton");

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
    location.reload();
  } catch {
    alert("Ocurrio un error intenta mas tarde");
  }
};
