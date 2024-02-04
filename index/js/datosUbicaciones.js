async function datosUbicaciones() {
    
    try {
        let respuesta = await fetch(laravelApi + "/api/obtenerDatosActuales", {
            headers: {
                "Content-type": "application/json; charset=UTF-8",
                Authorization: 'Bearer ' + sessionStorage.getItem("token")
            }
        });
        
        let data = await respuesta.json();
        console.log(data);

        var contenedorEnlacesTabs = document.getElementById("enlacesTabs");
        var contenedorContenidoTabs = document.getElementById("contenidoTabs");
        numTab = 2;

        todasPrevisiones = datosEuskalmet();
        arrayPrevisiones = await todasPrevisiones;

        var estadosCielo = ["Clear", "Rain", "Clouds"];
        for(let i = 0; i < data.length; i++){
            contenedorEnlacesTabs.innerHTML += `<a id="tab${numTab}" data-tab="${numTab}" class="tab ${data[i]["nombre"]}" style="display: none;">${data[i]["nombre"]}</a>`;

            let imagenCielo;
            if (!estadosCielo.includes(data[i]["estadoCielo"])) {
                imagenCielo = "Rain.jpg";
            } else {
                imagenCielo = `${data[i]["estadoCielo"]}.jpg`;
            }
            contenedorContenidoTabs.innerHTML += `<div id="tabcontent${numTab}" data-tab="${numTab}" class="tabcontent">
            <div class="fondoTiempo" style="background-image: url(img/${imagenCielo});" title="Previsión para mañana: ${arrayPrevisiones[i]}">
            
                <h1 class="temperatura" id="temperatura${data[i]["nombre"]}">${data[i]["temperatura"]}º</h1>
                <h2 class="humedad" id="humedad${data[i]["nombre"]}">Humedad: ${data[i]["humedad"]}%</h2>
                <h2 class="fecha"></h2>
                
            </div>
            
            <div id="izquierda" style="position: relative;">
                <div style="background-color: rgb(183, 0, 255); width: 100%; height: 350px;">
                    <div class="destino" style="float: left; background-color: yellow; width: 49%; height: 49%;"></div>
                    <div class="destino" style="float: right; background-color: yellow; width: 49%; height: 49%"></div>
                    
                    <div class="destino" style="float: left; background-color: yellow; width: 49%; height: 49%; position: relative; bottom: -7px;"></div>
                    <div class="destino" style="float: right; background-color: yellow; width: 49%; height: 49%; position: relative; bottom: -7px;"></div>
                </div>
                <div class="origen" style="background-color: orange; width: 100%; height: 100px; margin-top: 20px; display: flex; align-items: center;">
                    <div draggable="true" id="sensacionTermica_${data[i]["nombre"]}" style="display: flex; flex-wrap:wrap; align-items: center;">
                        <img draggable="false" src="img/sensacionTermica.png" style="margin-right: 10px">
                        <h4 style="display:none;">${data[i]["sensacionTermica"]}º</h4>
                    </div>
                </div>
            
            
            </div>
            <div id="derecha">
                <input type="date">
                <div style="background-color: yellow; width: 100%; height: 420px; margin-top: 30px;"></div>
            </div>
        </div>`;

        numTab++;

        }
        cargarTabs();
        cargarMapa();
        dragDrop();
        $(document).tooltip();  
    } catch (error) {
        console.log(error);
    }



    setInterval(() => {
        actualizarDatos();
        console.log("actualizado")
    }, 10000);
}

async function actualizarDatos(){
    try {
        let respuesta = await fetch(laravelApi + "/api/obtenerDatosActuales", {
            headers: {
                "Content-type": "application/json; charset=UTF-8",
                Authorization: 'Bearer ' + sessionStorage.getItem("token")
            }
        });
        
        let data = await respuesta.json();

        for (let i = 0; i < data.length; i++) {
            var contenedorTemp = document.getElementById(`temperatura${data[i]["nombre"]}`);
            contenedorTemp.textContent = data[i]["temperatura"] + "º";
            var contenedorHum = document.getElementById(`humedad${data[i]["nombre"]}`);
            contenedorHum.textContent = "Humedad: " + data[i]["humedad"] + "%";
        }
    } catch (error) {
        console.log(error);
    }
}