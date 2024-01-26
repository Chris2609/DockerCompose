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
        for(let i = 0; i < data.length; i++){
            // contenedorEnlacesTabs.innerHTML += `<a id="tab${numTab}" data-tab="${numTab}" class="tab">${data[i]["nombre"]}</a>`;
            contenedorEnlacesTabs.innerHTML += `<a id="tab${numTab}" data-tab="${numTab}" class="tab ${data[i]["nombre"]}" style="display: none;">${data[i]["nombre"]}</a>`;

            contenedorContenidoTabs.innerHTML += `<div id="tabcontent${numTab}" data-tab="${numTab}" class="tabcontent">
            <div class="fondoTiempo">
            
                <h1 class="temperatura" id="temperatura${data[i]["nombre"]}">${data[i]["temperatura"]}º</h1>
                <h2 class="humedad" id="humedad${data[i]["nombre"]}">Humedad: ${data[i]["humedad"]}%</h2>
                <h2 class="fecha"></h2>
                
            </div>

            <div id="izquierda">
                <div style="background-color: rgb(183, 0, 255); width: 100%; height: 350px;"></div>
                <div style="background-color: aqua; width: 100%; height: 100px; margin-top: 20px;"></div>
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

        setInterval(() => {
            actualizarDatos();
            console.log("actualizado")
        }, 10000);

    } catch (error) {
        console.log(error);
    }
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