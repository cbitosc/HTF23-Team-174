const apiBaseUrl="https://api.themoviedb.org/3";
const apiKey="fca2d19ad75fd81b3853e159d6b4a0b6";
const imageBaseUrl = 'https://image.tmdb.org/t/p/w300';

const moviesGrid = document.getElementById("movies-Grid")

async function fetchMoviesNowPlaying(){
    const response=await fetch(`${apiBaseUrl}/movie/now_playing?api_key=${apiKey}`);
    const jsonResponse=await response.json();
    const movies=jsonResponse.results;
    displayMovies(movies);
}
function displayMovies(movies) {
    moviesGrid.innerHTML = movies.map(movie => 
				`<div class="movie-card">
	            <img src="${imageBaseUrl}${movie.poster_path}"/>
	            <p>⭐${movie.vote_average}</p>
	            <h1>${movie.title}</h1>
	        </div>`
    ).join("");
}
fetchMoviesNowPlaying();

async function searchmovies(query){
    const response=await fetch(`${apiBaseUrl}/search/movie?api_keys=${apiKey}&query="${query}"`);
    const jsonResponse=await response.json();
    const movies=jsonResponse.results;
    displayMovies(movies);
}
function displayMovies(movies){
    moviesGrid.innerHTML=movies
        .map(
             movie =>
                `<div class ="movie-card">
                    <img src="${imageBaseUrl}${movie.poster_path}"/>
                    <p>⭐${movie.vote_average}</p>
                    <h1>${movie.title}</h1>
                 </div>
                 `
         )
         .join("");
}


