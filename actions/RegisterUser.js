
const registerUser = async () => {
    let url = "https://localhost:44353/api/user";

    let userName = document.getElementById("rName").value;
    let userLastName = document.getElementById("rLastName").value;
    let userEmail = document.getElementById("rEmail").value;
    let userTelefono = document.getElementById("rTelefono").value;
    let userAge = document.getElementById("rEdad").value;
    let userPassword = document.getElementById("rPassword").value;

    jsonObject = {
        Name: userName,
        LastName: userLastName,
        Email:userEmail,
        Telefono:userTelefono,
        Edad:userAge,
        Password:userPassword
      };

      jsonObject.Name = userName;
      jsonObject.LastName = userLastName;
      jsonObject.Email = userEmail;
      jsonObject.Telefono = userTelefono;
      jsonObject.Edad = userAge;
      jsonObject.Password = userPassword;
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
    
        alert("Usuario Registrado");
        loginButton.innerText = "Salir";
        location.reload();
      } catch {
        alert("Ocurrio un error intenta mas tarde");
      }
}
