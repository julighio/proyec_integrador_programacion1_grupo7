let qs = location.search; // Aca se guarda un dato parecido a ?busqueda-rick//
let qsObj = new URLSearchParams(qs); // Aca se guarda un objeto literal con la prop busqueda y el valor es lo que escribimos
let peliculaoserie = qsObj.get('busqueda'); // Selecciona el valor, utilizamos las 3 lineas para transformar todo el objeto

let resultado = document.querySelector('.resultadoDeBusqueda')
let apiKey= "371e304b1b9f8df6a3f0e225dc4511b7";
let urlSearchMovies = `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&language=en-US&query=${peliculaoserie}&page=1&include_adult=false`; // se cambia 
let urlSearchSeries = `https://api.themoviedb.org/3/search/tv?api_key=${apiKey}&language=en-US&query=${peliculaoserie}&page=1&include_adult=false`;
// Name en el formulario es lo que nos permite crear una query string a traves del formulario
//como capturo la query string? 
//Primero creo una variable q se llama qs que guarda el pedacito de la url que quiero, en este caso search. (?busqueda-rick)
// Como no puedo manipularla en string, creo otra variable donde pongo new urlSearch Params donde se guarda el objeto literal con la propiedad busqueda y como valor lo q escribimos
// creo una nueva variable donde utilizo donde esta guardado mi valor, con . get q es obtener y pongo busqueda que aqui hace que se guarde el valor, en este caso la pelicula que hayamos escrito
let section = document.querySelector(".conteiner")
resultado.innerText= `Resultados de busqueda para: ${peliculaoserie}`;

//Fetch para peliulas
fetch(urlSearchMovies)
.then(
    function(response){
        return response.json();
    }
)
.then(function(data){
    movies=''
    console.log(data);
    let info = data.results;
    if (info.length== 0){
        resultado.innerText=`No existe el resultado para ${peliculaoserie}`;
    } else {
        for (let i =0; i < info.length; i++){ ;
            let titulo = info[i].title
            let imagenes = info[i].poster_path
            let id = info[i].id
            let fecha = info[i].release_date
    
            movies += `<article class="portadaCard">
                            <a href="./detail_movie.html?idPersonaje=${id}">
                            <img class= "portada" src= "https://image.tmdb.org/t/p/w500/${imagenes}">
                            <p > Titulo: ${titulo}</p>
                            <p>Fecha : ${fecha}</p>
                            </a>
                        </article>`
        }
        section.innerHTML=movies;  
        return data;
    }
    
})  
.catch(function(error){
        console.log(error)
        return error;
})

// Fetch para series
fetch(urlSearchSeries)
.then(
    function(response){
        return response.json();
    }
)
.then(function(data){
    series=''
    console.log(data);
    let infoSeries = data.results;
    if (info.length== 0){
        resultado.innerText=`No existe el resultado para ${peliculaoserie}`;
    } else {
        for (let i =0; i < info.length; i++){ ;
            if (infoSeries[i].poster_path != null) {
                let titulo = infoSeries[i].name
                let imagenes = infoSeries[i].poster_path
                let id = infoSeries[i].id
                let fecha = infoSeries[i].first_air_date
    
                series += `<article class="portadaCard">
                                <a href="./detail_movie.html?idPersonaje=${id}">
                                <img class= "portada" src= "https://image.tmdb.org/t/p/w500/${imagenes}">
                                <p > Titulo: ${titulo}</p>
                                <p>Fecha : ${fecha}</p>
                                </a>
                            </article>`
            } 
        }
        section.innerHTML=series;  
        return data;
    }
})  
.catch(function(error){
        console.log(error)
        return error;
})

