import axios from 'axios'

const api = axios.create({
    baseURL: 'https://api.themoviedb.org/3/',
    params: {
        api_key: '7d0e9a196d9c26c00644f0f8bc0d265d',
        language: 'pt-BR',
        page: 1,
    }
})

//https://image.tmdb.org/t/p/original/k1KrbaCMACQiq7EA0Yhw3bdzMv7.jpg

export default api
