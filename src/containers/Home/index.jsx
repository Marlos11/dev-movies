



import Button from '../../components/Button'
import Slider from '../../components/Slider'
import api from '../../server/api'
import {getImage} from '../../utils/getImage'
import { Background, Conteiner, Info, Poster, ConteinerButtons } from './styles'
import { useState, useEffect } from 'react'

function Home() {
    const [movies, setMovies] = useState()
    const [topMovies, setTopMovie] = useState()
    useEffect(() => {
        async function getMovies() {
            const { data: { results }
            } = await api.get('/movie/popular')

            setMovies(results[5])

           /*  console.log(results) */
        }

        async function getTopMovie() {
            const { data: { results }
            } = await api.get('/movie/top_rated')

            setTopMovie(results)

            console.log(results)
        }








        getMovies()
        getTopMovie()
    }, [])






    return (

        <>
            {movies && (
                <Background img={getImage(movies.backdrop_path)}>
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
                            < img src={getImage(movies.poster_path)} />
                        </Poster>

                    </Conteiner>
                </Background>
            )}
            {topMovies && <Slider info={topMovies} title={'Top Filmes'} />}
        </>
    )
}

export default Home