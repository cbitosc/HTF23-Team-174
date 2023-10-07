const apiBaseUrl="https://api.themoviedb.org/3";
const apiKey="fca2d19ad75fd81b3853e159d6b4a0b6";

async function fetchMoviesNowPlaying(){
    const response=await fetch(`${apiBaseUrl}/movie/now_playing?api_key=${apiKey}`);
    const jsonResponse=await response.json();
    const movies=jsonResponse.results;
    console.log(movies);
}