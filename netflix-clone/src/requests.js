const API_KEY = "76592f12cad9234e1be53581c60446d6";

const requests = {
    fetchNetflixOriginals : `/discover/tv?api_key=${API_KEY}&language=en-US&with_networks=213`,
    fetchTrending : `/trending/all/week?api_key=${API_KEY}&language=en-IN`,
    fetchTopRated : `/movie/top_rated?api_key=${API_KEY}&language=en-IN`,
    fetchActionMovies : `/discover/movie?api_key=${API_KEY}&with_genres=28`,
    fetchComedyMovies : `/discover/movie?api_key=${API_KEY}&with_genres=35`,
    fetchHorrorMovies : `/discover/movie?api_key=${API_KEY}&with_genres=27`,
    fetchRomanceMovies : `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
    fetchDocumentaries : `/discover/movie?api_key=${API_KEY}&with_genres=99`
}

export default requests;