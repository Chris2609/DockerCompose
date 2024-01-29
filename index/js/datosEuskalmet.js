
async function datosEuskalmet(){

    tokenEuskalmet = "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdWQiOiJtZXQwMS5hcGlrZXkiLCJpc3MiOiJJRVMgUExBSUFVTkRJIEJISSBJUlVOIiwiZXhwIjoyMjM4MTMxMDAyLCJ2ZXJzaW9uIjoiMS4wLjAiLCJpYXQiOjE2Mzk3NDc5MDcsImVtYWlsIjoiaWtiZGJAcGxhaWF1bmRpLm5ldCJ9.Lf9-2osDOWeJhSyguL5nUx94KYVKM1fZOcU9PGsJPG4iyTMq_gTELdGqxssd8UhhgcQ-hsTXxaWUc8FK2cn4_TuvA_I6FXu6VH5utjMmdhQDgOCPCud-uMWYs-6EGCM97zwZJwlqXu-HNilTNUvOUGWuXoL2R3eOIfOI4g5V2n5Wkk1EfXbUunvBaiqIhJPKTC6IK5XiUEO6TKTtPsEgx3V1BX84JGAEa98qTfgUWDWzrnSMd7l-VCcLTScaJqmZI4RtiwHn2D5Og8gnaztpoRHFFLVFuFDwPdz1K9n8FdsdSQoxBugW6NeP-wjgev7PjLYM18Enq6JegRdw6MYjhA";

    let fechaHoy = new Date();
    let hoyFormateado = fechaHoy.toISOString().split('T')[0].replace(/-/g, '/');

    let manana = new Date();
    manana.setDate(fechaHoy.getDate() + 1);
    let mananaFormateado = manana.toISOString().split('T')[0].replace(/-/g, '');

    try {
        let respuesta = await fetch(`https://api.euskadi.eus/euskalmet/weather/regions/basque_country/zones/coast_zone/locations/irun/forecast/at/${hoyFormateado}/for/${mananaFormateado}`, {
            headers: {
                "Content-type": "application/json; charset=UTF-8",
                Authorization: 'Bearer ' + tokenEuskalmet
            }
        });
        
        let data = await respuesta.json();
        previsionIrun = data["forecastText"]["SPANISH"];

    } catch (error) {
        console.log(error);
    }
    
    try {
        let respuesta = await fetch(`https://api.euskadi.eus/euskalmet/weather/regions/basque_country/zones/coast_zone/locations/hondarribia/forecast/at/${hoyFormateado}/for/${mananaFormateado}`, {
            headers: {
                "Content-type": "application/json; charset=UTF-8",
                Authorization: 'Bearer ' + tokenEuskalmet
            }
        });
        
        let data = await respuesta.json();
        previsionHondarribia = data["forecastText"]["SPANISH"];

    } catch (error) {
        console.log(error);
    }

    try {
        let respuesta = await fetch(`https://api.euskadi.eus/euskalmet/weather/regions/basque_country/zones/coast_zone/locations/usurbil/forecast/at/${hoyFormateado}/for/${mananaFormateado}`, {
            headers: {
                "Content-type": "application/json; charset=UTF-8",
                Authorization: 'Bearer ' + tokenEuskalmet
            }
        });
        
        let data = await respuesta.json();
        previsionUsurbil = data["forecastText"]["SPANISH"];

    } catch (error) {
        console.log(error);
    }

    try {
        let respuesta = await fetch(`https://api.euskadi.eus/euskalmet/weather/regions/basque_country/zones/donostialdea/locations/donostia/forecast/at/${hoyFormateado}/for/${mananaFormateado}`, {
            headers: {
                "Content-type": "application/json; charset=UTF-8",
                Authorization: 'Bearer ' + tokenEuskalmet
            }
        });
        
        let data = await respuesta.json();
        previsionDonostia = data["forecastText"]["SPANISH"];

    } catch (error) {
        console.log(error);
    }

    try {
        let respuesta = await fetch(`https://api.euskadi.eus/euskalmet/weather/regions/basque_country/zones/donostialdea/locations/errenteria/forecast/at/${hoyFormateado}/for/${mananaFormateado}`, {
            headers: {
                "Content-type": "application/json; charset=UTF-8",
                Authorization: 'Bearer ' + tokenEuskalmet
            }
        });
        
        let data = await respuesta.json();
        previsionErrenteria = data["forecastText"]["SPANISH"];

    } catch (error) {
        console.log(error);
    }
}


