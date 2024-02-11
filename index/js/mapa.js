var map;

async function cargarMapa() {
    carga();
    try {
        let respuesta = await fetch(laravelApi + "/api/obtenerUbicacionLatLon", {
            headers: {
                "Content-type": "application/json; charset=UTF-8",
                Authorization: 'Bearer ' + sessionStorage.getItem("token")
            }
        });
        
        let data = await respuesta.json();
        console.log(data);

        // Define los lugares

        // Crea un nuevo mapa
        if (map) {
            map.remove(); // Remove the existing map if it exists
        }
        map = L.map("mapid").setView([43.34564, -1.79733], 12);
        L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
            attribution: "© OpenStreetMap contributors",
        }).addTo(map);

        var lugares= [];
        for(let i = 0; i < data.length; i++){
            var lugar = {
                nombre: data[i].nombre,
                latitud: data[i].latitud,
                longitud: data[i].longitud
            }
            lugares.push(lugar);
        }

        lugares.forEach(function (lugar) {
            var marker = L.marker([lugar.latitud, lugar.longitud]).addTo(map);
            marker.bindTooltip(lugar.nombre, {
                permanent: false,
                direction: "top",
                offset: L.point(-15, -20),
            });
        
            //comprobar si ya hay ubicaciones en el localstorage, de ser que si, cambiar el color de estos
            var favoritosGuardados = localStorage.getItem('favoritos');
            if (favoritosGuardados && favoritosGuardados.split(',').includes(lugar.nombre)) {
                marker._icon.classList.add("favorito");
                // document.getElementsByClassName(lugar.nombre)[0].style.display = "block";
                mostrarFavoritos(lugar.nombre);
            }
            
            marker.on('click', function() {
                // Verificar si ya existe la clave 'favoritos' en el localStorage
                var favoritos = localStorage.getItem('favoritos');
                if (!favoritos || favoritos == "") {
                    // Si no existe, crear un nuevo array con el nombre del marcador
                    localStorage.setItem('favoritos', lugar.nombre);
                    marker._icon.classList.add("favorito");
                    mostrarFavoritos(lugar.nombre);
                } else {
                    // Si ya existe, dividir la cadena por ',' para verificar si el marcador está presente
                    var favoritosArray = favoritos.split(',');
                    var index = favoritosArray.indexOf(lugar.nombre);
                    if (index !== -1) {
                        // Si el marcador ya está presente, eliminarlo
                        favoritosArray.splice(index, 1);
                        localStorage.setItem('favoritos', favoritosArray.join(','));
                        marker._icon.classList.remove("favorito");
                        ocultarExFavoritos(lugar.nombre);
                    } else {
                        // Si el marcador no está presente, agregarlo
                        marker._icon.classList.add("favorito");
                        localStorage.setItem('favoritos', favoritos + ',' + lugar.nombre);
                        mostrarFavoritos(lugar.nombre);
                    }
                }
            });
        });

        // arreglar que el mapa no se vea bien tras cambiar de tab o cambiar el tamaño del navegador
        function actualizarMapa() {
            map.invalidateSize();
        }

        window.addEventListener('resize', actualizarMapa);
        map.on('zoomend', function() {
            actualizarMapa();
        });
    } catch (error) {
        console.log(error);
    }
    finCarga();
}

function mostrarFavoritos(nombre){
    document.getElementsByClassName(nombre)[0].style.display = "block";
}

function ocultarExFavoritos(nombre){
    document.getElementsByClassName(nombre)[0].style.display = "none";
}