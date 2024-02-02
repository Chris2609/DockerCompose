function dragDrop() {
  $("#sensacionTermica_Hondarribia").on("dragstart", function (event) {
    object = event.target.id;
    console.log("inicio drag");
  });

  $(".destino").on("dragover", function (event) {
    event.preventDefault();
    console.log("hola");
  });

  $(".destino").on("drop", function (event) {
    event.preventDefault();

    $("#sensacionTermica_Hondarribia").appendTo(this);
  });
}
