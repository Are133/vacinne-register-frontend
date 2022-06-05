const registerVacinne = document.getElementById("registerVacinne");
const url = "https://localhost:44353/api/municipality";
registerVacinne.addEventListener("click", () => {
 
    let vMunicipilaties = document.getElementById("vMunicipilaties");

  let municipalitiesArray = [];

  fetch(url)
    .then(function (result) {
      if (result.ok) {
        return result.json();
      }
      console.log(municipalitiesArray);
    })
    .then(function (data) {
        vMunicipilaties.innerHTML = "";
      data.data.forEach((element) => {
          
          let options = document.createElement("option");
          options.appendChild(document.createTextNode(element.name));
          options.value = element.id;
          console.log(options);
          vMunicipilaties.appendChild(options);
      });
    });

});

const registerVacinneF = async () =>{
    const url = "https://localhost:44353/api/VacinneRegister"
    let vacinneName = document.getElementById("vname").value;
    let dateOfVacinne = document.getElementById("vDateTime").value;
    let vacinneMunicipalitySelected = document.getElementById("vMunicipilaties").value;

    jsonObject = {
        Name: vacinneName,
        ApplicationDate:dateOfVacinne,
        MunicipalityId:vacinneMunicipalitySelected
      };

      jsonObject.Name = vacinneName;
      jsonObject.ApplicationDate = dateOfVacinne;
      jsonObject.MunicipalityId=vacinneMunicipalitySelected;

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
    
        alert("Vacuna Registrada");
        loginButton.innerText = "Salir";
        location.reload();
      } catch {
        alert("Ocurrio un error intenta mas tarde");
      }
}