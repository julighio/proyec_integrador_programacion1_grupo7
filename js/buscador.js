// PUNTO 1, modificando el buscador y sus especificaciones
let buscador = document.querySelector(".formulario");
let resultadoBusqueda = document.querySelector(".buscador");


buscador.addEventListener("submit", function(e) {
    e.preventDefault();
    if (resultadoBusqueda.value == ''){
        alert("Esta vacío. Ingrese una busueda");
    }
    else if (resultadoBusqueda.value.length<3){
        alert("Tiene que contener al menos 3 caracteres")
    }else {
        this.submit();
    } 
});