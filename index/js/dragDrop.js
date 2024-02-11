function dragDrop() {

  let ubicaciones = ["Donostia", "Errenteria", "Hondarribia", "Irun", "Usurbil"];

  for (let i = 0; i < ubicaciones.length; i++) {
    let ubicacion = ubicaciones[i];
    
    $(`#sensacionTermica_${ubicacion}`).on("dragstart", function (event) {
      object = event.target.id;
    });

    $(`#presionAtmosferica_${ubicacion}`).on("dragstart", function (event) {
      object = event.target.id;
    });

    $(`#velocidadViento_${ubicacion}`).on("dragstart", function (event) {
      object = event.target.id;
    });

    $(`#estadoCielo_${ubicacion}`).on("dragstart", function (event) {
      object = event.target.id;
    });
  }
 

  $(".destino").on("dragover", function (event) {
    event.preventDefault();
  });

  $(".destino").on("drop", function (event) {
    event.preventDefault();

    var draggedElement = document.getElementById(object);
      if (event.target !== draggedElement) {
        event.target.appendChild(draggedElement);
        $(draggedElement).css("width", "100%");
        $(draggedElement).find("h1").css("display", "inline-block");
        $(draggedElement).find("img").css("width", "50%");

      }
  });

  $(".origen").on("dragover", function (event) {
    event.preventDefault();
  });

  //evento de soltar en el div de origen
  $(".origen").on("drop", function (event) {
    event.preventDefault();

    var draggedElement = document.getElementById(object);
    if (event.target !== draggedElement) {
      event.target.appendChild(draggedElement);
      $(draggedElement).css("width", "25%");
      $(draggedElement).find("h1").css("display", "none");
      $(draggedElement).find("img").css("max-width", "100%");
      $(draggedElement).find("img").css("width", "auto");

    }
  });
}
