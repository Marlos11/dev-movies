



import Button from '../../components/Button'
import api from '../../server/api'
import { Background, Conteiner, Info, Poster, ConteinerButtons } from './styles'
import { useState, useEffect } from 'react'

function Home() {
    const [movies, setMovies] = useState()
    useEffect(() => {
        async function getMovies() {
            const { data: { results }
            } = await api.get('/movie/popular')

            setMovies(results[5])

            console.log(results)



        }



        getMovies()
    }, [])






    return (

        <>
            {movies && (
                <Background img={`https://image.tmdb.org/t/p/original${movies.backdrop_path
                    }`}>
                    <Conteiner>
                        <Info>
                            <h1>{movies.title}</h1>

                            <p>{movies.overview}</p>
                            <ConteinerButtons>
                                <Button red={true}>Assita Agora </Button>
                                <Button red={false}>Assistir ao trailer</Button>
                            </ConteinerButtons>
                        </Info>
                        <Poster>
                            < img src={`https://image.tmdb.org/t/p/original${movies.poster_path}`} />
                        </Poster>

                    </Conteiner>
                </Background>
            )}
        </>
    )
}

export default Home