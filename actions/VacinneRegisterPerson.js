const buttonRegisterVacinnePerson = document.getElementById("registerVacinnePerson");
let urlPerson = "https://localhost:44353/api/person"

buttonRegisterVacinnePerson.addEventListener("click", () => {
    const url = "https://localhost:44353/api/municipality";

    let selectVacunateAndMunicipilaties = document.getElementById("vacunateAndMunicipilaties");

    console.log(selectVacunateAndMunicipilaties);

  fetch(url)
    .then(function (result) {
      if (result.ok) {
        return result.json();
      }
    })
    .then(function (data) {
        selectVacunateAndMunicipilaties.innerHTML = "";
      data.data.forEach((element) => {
          
          let options = document.createElement("option");
          options.appendChild(document.createTextNode(element.name));
          options.value = element.id;
          console.log(options);
          selectVacunateAndMunicipilaties.appendChild(options);
      });
    });
})

let cboMunicipalities = document.getElementById("vacunateAndMunicipilaties");

cboMunicipalities.addEventListener("change", () => {
    let urlPerson = `https://localhost:44353/api/person?id=${cboMunicipalities.value}`;

    fetch(urlPerson)
  .then(response => response.json())
  .then(function(data){
      let cboVacunateAndVacinnes = document.getElementById("vacunateAndVacinnes");
      cboVacunateAndVacinnes.innerHTML = "";
      data.forEach((element) => {
          let options = document.createElement("option");
          options.appendChild(document.createTextNode(element.text));
          options.value = element.value;
          console.log(cboVacunateAndVacinnes.value);
          cboVacunateAndVacinnes.appendChild(options);
      })
  });
});


const vacinneRegisterPerson = async () =>{
    let url = "https://localhost:44353/api/person"
    
    let personName = document.getElementById("vacunateName").value;
    let personLastName = document.getElementById("vacunateLastsName").value;
    let personCURP = document.getElementById("vacunateCURP").value;
    let cboMunicipalitiesSelected = document.getElementById("vacunateAndMunicipilaties").value;
    let cboVacinnesSelected = document.getElementById("vacunateAndVacinnes").value;

    jsonObject = {
      Name: personName,
      LastNames: personLastName,
      CURP: personCURP,
      IdMunicipality: cboMunicipalitiesSelected,
      IdVacinne: cboVacinnesSelected,
    };

    jsonObject.Name = personName;
    jsonObject.LastNames = personLastName;
    jsonObject.CURP = personCURP;
    jsonObject.IdVacinne = cboVacinnesSelected;
    jsonObject.IdMunicipality = cboMunicipalitiesSelected;

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
    
        alert("Registro completado");
        location.reload();
      } catch {
        alert("Ocurrio un error intenta mas tarde");
      }


}