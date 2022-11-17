let apiKey= "371e304b1b9f8df6a3f0e225dc4511b7";
let urlgenero= `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=with_genres&with_watch_monetization_types=flatrate`;
let qs = location.search;
let qsObj = new URLSearchParams(qs);
let genero = qsObj.get("detallegenero");