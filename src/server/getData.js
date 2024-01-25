import api from "./api";

export async function getMovies() {
    const { data: { results }
    } = await api.get('/movie/popular')

    return results[0]
}

export async function getTopMovie() {
    const { data: { results }
    } = await api.get('/movie/top_rated')

    return results
}

export async function getTopSeries() {
    const { data: { results }
    } = await api.get('/tv/top_rated')

    return results
}

export async function getPopularSeries() {
    const { data: { results }
    } = await api.get('/tv/popular')

    return results
}
export async function getSeries() {
    const { data: { results }
    } = await api.get('/tv/popular')

    return results[1]
}


export async function getPopularArtist() {
    const { data: { results }
    } = await api.get('/person/popular')

    return results
}

export async function getMovieVideos(movieId) {
    const { data: { results }
    } = await api.get(`/movie/${movieId}/videos`)

    return results
}
<<<<<<< HEAD
export async function getSerieVideos(serieId) {
    const { data: { results }
    } = await api.get(`/tv/${serieId}/videos`)
=======
export async function getSeriesVideos(serieVideoId) {
    const { data: { results }
    } = await api.get(`/tv/${serieVideoId}/videos`)
>>>>>>> e62f67835313ff665d2e82a1a619b488269a766b

    return results
}


export async function getMoviesCredits(movieId) {
   
    const {data:{cast}} = await api.get(`/movie/${movieId}/credits`)

    return cast
}

export async function getMoviesSimilar(movieId) {
    const { data: { results }
    } = await api.get(`movie/${movieId}/similar`)

    return results
}

export async function getMoviesById(movieId) {
    const {data} = await api.get(`movie/${movieId}`)
    return data
} 

