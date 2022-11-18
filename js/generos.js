let apiKey= "371e304b1b9f8df6a3f0e225dc4511b7";
let urlgenerospelis= `https://api.themoviedb.org/3/genre/movie/list?api_key=${apiKey}&language=en-US`;
let urlgenerosseries= `https://api.themoviedb.org/3/genre/tv/list?api_key=${apiKey}&language=en-US`;
let sectionpelis = document.querySelector (".generosPeliculas");
let sectionseries = document.querySelector (".generosSeries");

fetch(urlgenerospelis)
.then(function (respuesta) {
    return respuesta.json()
})
.then(function(data) {
    
    console.log(data)
    
    let primerosgeneros="";
    for (let i=0; i<5; i++){
        
        console.log(data.genres[i]);
        
        let tipo= data.genres[i].name;
        let id = data.genres[i].id;
        
        primerosgeneros += ` <article class="boxGeneros">
        <a class="titulosGeneros" href="./detail_genero.html?detallegenero=${id}">${tipo}</a>
        </article>`
    }
    sectionpelis.innerHTML= primerosgeneros;
    return data
})
.catch(function (error) {
    console.log(error);
    return error
})

//section 2

fetch(urlgenerosseries)
.then(function (respuesta) {
    return respuesta.json()
})
.then(function(data) {
    
    console.log(data)
    
    let segundosgeneros="";
    for (let i=0; i<5; i++){
        
        console.log(data.genres[i]);
        
        let tipo= data.genres[i].name;
        let id= data.genres[i].id;
        
        segundosgeneros += ` <section class="generosSeries">
        <article class="boxGeneros">
            <a class="titulosGeneros" href="./detail_genero.html?detallegenero=${id}">${tipo}</a>
        </article>`
    }
    sectionseries.innerHTML= segundosgeneros;
    return data
})
.catch(function (error) {
    console.log(error);
    return error
})