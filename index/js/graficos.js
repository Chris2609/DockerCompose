async function cargarGrafico(nombre, fechaInicio, fechaFin) {

    
let xValues = ["Dia 1", "Dia 2", "Dia 3", "Dia 4", "Dia 5", "Dia 6", "Dia 7"];
let yValues = [0, 32 , 10, 15, 17, 25, 30];
console.log(nombre);
console.log(fechaInicio);
console.log(fechaFin);

try {
    let respuesta = await fetch(laravelApi + "/api/obtenerDatosActuales", {
        headers: {
            "Content-type": "application/json; charset=UTF-8",
            Authorization: 'Bearer ' + sessionStorage.getItem("token")
        }
    });
    
    let data = await respuesta.json();
    console.log(data);
} catch (error) {
    
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
}
