function cargarTabs(){
// DOM Elements
const tabs = document.querySelectorAll('.tab')
const tabContents = document.querySelectorAll('.tabcontent')
  
// Functions
const activateTab = tabnum => {
    
    tabs.forEach( tab => {
      tab.classList.remove('active')
    })
    
    tabContents.forEach( tabContent => {
        tabContent.classList.remove('active')
    })
  
    document.querySelector('#tab' + tabnum).classList.add('active')
    document.querySelector('#tabcontent' + tabnum).classList.add('active')
    //localStorage.setItem('jstabs-opentab', JSON.stringify(tabnum))
  
}

// Event Listeners
tabs.forEach(tab => {
    tab.addEventListener('click', () => {
        activateTab(tab.dataset.tab)
    })
})



// Retrieve stored data
const opentab =  '1'

// and..... Action!

activateTab(opentab)

// fecha actual del equipo cliente
var fechaHoy = new Date;

fechaHoy = fechaHoy.getDate() + "/"+ fechaHoy.getMonth() + 1 + "/" +fechaHoy.getFullYear();

contenedoresFecha = document.querySelectorAll('.fecha');

contenedoresFecha.forEach(contenedorFecha => {
    contenedorFecha.textContent = fechaHoy;
});
}