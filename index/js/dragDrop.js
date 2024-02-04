function dragDrop() {

  $("#sensacionTermica_Donostia").on("dragstart", function (event) {
    object = event.target.id;
    console.log("inicio drag");
  });

    $("#sensacionTermica_Errenteria").on("dragstart", function (event) {
    object = event.target.id;
    console.log("inicio drag");
  });

  $("#sensacionTermica_Hondarribia").on("dragstart", function (event) {
    object = event.target.id;
    console.log("inicio drag");
  });

  $("#sensacionTermica_Irun").on("dragstart", function (event) {
    object = event.target.id;
    console.log("inicio drag");
  });

  $("#sensacionTermica_Usurbil").on("dragstart", function (event) {
    object = event.target.id;
    console.log("inicio drag");
  });

  $(".destino").on("dragover", function (event) {
    event.preventDefault();
    console.log("destino");
  });

  $(".destino").on("drop", function (event) {
    event.preventDefault();

    var draggedElement = document.getElementById(object);
      if (event.target !== draggedElement) {
        event.target.appendChild(draggedElement);
        $(draggedElement).find("h4").css("display", "block");
        $(draggedElement).find("img").css("width", "50%");

      }
  });

  $(".origen").on("dragover", function (event) {
    event.preventDefault();
    console.log("origen");
  });

  // Evento de soltar en el div de origen
  $(".origen").on("drop", function (event) {
    event.preventDefault();

    var draggedElement = document.getElementById(object);
    if (event.target !== draggedElement) {
      event.target.appendChild(draggedElement);
      // Ocultar el <h4> en el div de origen una vez que se suelta el elemento
      $(draggedElement).find("h4").css("display", "none");
      $(draggedElement).find("img").css("width", "100%");
    }
  });
}
