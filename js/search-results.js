let qs = location.search; // Aca se guarda un dato parecido a ?busqueda-rick//
let qsObj = new URLSearchParams(qs); // Aca se guarda un objeto literal con la prop busqueda y el valor rick
let peliculaoserie = qsObj.get('busqueda'); // Selecciona el valor, utilizamos las 3 lineas para transformar todo el objeto

let apiKey= "371e304b1b9f8df6a3f0e225dc4511b7"
let urlSearch = `https://api.themoviedb.org/3/search/movie?api_key=<${apiKey}>&language=en-US&page=1&include_adult=false` // se cambia 

fetch(urlSearch)
.then(
    function(response){
        return response.json();
    }
)
.then(
    function(data){
        
        for (let i =0; i < data.results.length; i++){
           
            console.log(data.results[i]) ;// me genera que me imprime cada personaje individual

            

            

        }
            
        return data;
})
.catch(
    function(error){
        console.log(error)
        return error;
    }
)


