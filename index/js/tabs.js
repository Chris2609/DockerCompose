function cargarTabs() {
  // DOM Elements
  const tabs = document.querySelectorAll(".tab");
  const tabContents = document.querySelectorAll(".tabcontent");

  // Functions
  const activateTab = (tabnum) => {
    tabs.forEach((tab) => {
      tab.classList.remove("active");
    });

    tabContents.forEach((tabContent) => {
      tabContent.classList.remove("active");
    });

    document.querySelector("#tab" + tabnum).classList.add("active");
    document.querySelector("#tabcontent" + tabnum).classList.add("active");
    //localStorage.setItem('jstabs-opentab', JSON.stringify(tabnum))
  };

  // Event Listeners
  tabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      activateTab(tab.dataset.tab);
    });
  });

  // Retrieve stored data
  const opentab = "1";

  // and..... Action!

  activateTab(opentab);

  // fecha actual del equipo cliente
  var fechaHoy = new Date();

  let mes = fechaHoy.getMonth() + 1;
  if (mes < 10) {
    mes = "0" + mes;
  }
  fechaHoy = fechaHoy.getDate() + "/" + mes + "/" + fechaHoy.getFullYear();

  contenedoresFecha = document.querySelectorAll(".fecha");

  contenedoresFecha.forEach((contenedorFecha) => {
    contenedorFecha.textContent = fechaHoy;
  });
}
