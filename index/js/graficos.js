

async function cargarGrafico(nombre, fechaInicio, fechaFin) {

try {
    let respuesta = await fetch(laravelApi + "/api/obtenerDatosHistorial?nombre=" + nombre + "&fechaInicio="+ fechaInicio + "&fechaFin=" + fechaFin, {
        headers: {
            "Content-type": "application/json; charset=UTF-8",
            Authorization: 'Bearer ' + sessionStorage.getItem("token")
        }
    });
    
    let data = await respuesta.json();
    datosHistorial = data;

    var xValues = [];
    var yValues = [];

    for(let i = 0; i < datosHistorial.length; i++){
      xValues.push(datosHistorial[i]["fecha"]);
      yValues.push(datosHistorial[i]["temperaturaPromedio"]);
    }

    new Chart(`grafico_${nombre}`, {
      type: "line",
      data: {
        labels: xValues,
        datasets: [{
          fill: false,
          lineTension: 0,
          backgroundColor: "#1089b1",
          borderColor: "#4dabab",
          data: yValues
        }]
      },
      options: {
        legend: {display: false},
        scales: {
          yAxes: [{ticks: {min: 0, max:40}}],
        }
      }
    });
} catch (error) {
    
}


}
