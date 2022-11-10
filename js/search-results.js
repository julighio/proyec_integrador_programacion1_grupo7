let buscador = document.querySelector(".buscador");
let resultadoBusqueda = document.querySelector("");

buscador.addEventListener("click", function(e) {
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

