import axios from 'axios'

const api = axios.create({
    baseURL: 'https://api.themoviedb.org/3/',
    params: {
        api_key: '0b9e2aa39f2884fe1e1b71f6dc0b0736',
        language: 'pt-BR',
        page: 1,
    }
})

//https://image.tmdb.org/t/p/original/k1KrbaCMACQiq7EA0Yhw3bdzMv7.jpg

export default api
