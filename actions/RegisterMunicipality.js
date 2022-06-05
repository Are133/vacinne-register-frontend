const registerMunicipality = async() =>{
    const url = "https://localhost:44353/api/municipality";

    let municipalityName = document.getElementById("mName").value;

    jsonObject = {Name: municipalityName}

    jsonObject.Name = municipalityName;
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
    
        alert("Municipio Registrado");
        location.reload();
      } catch {
        alert("Ocurrio un error intenta mas tarde");
      }
}