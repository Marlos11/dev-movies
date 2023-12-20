



import Button from '../../components/Button'
import Slider from '../../components/Slider'
import api from '../../server/api'
import { getImage } from '../../utils/getImage'
import { Background, Conteiner, Info, Poster, ConteinerButtons } from './styles'
import { useState, useEffect } from 'react'

function Home() {
    const [movies, setMovies] = useState()
    const [topMovies, setTopMovie] = useState()
    const [topSeries, setTopSeries] = useState()
    const [popularSeries, setPopularSeries] = useState()
    const [popularArtists, setPopularArtists] = useState()
    useEffect(() => {
        async function getMovies() {
            const { data: { results }
            } = await api.get('/movie/popular')

            setMovies(results[5])


        }

        async function getTopMovie() {
            const { data: { results }
            } = await api.get('/movie/top_rated')

            setTopMovie(results)

            console.log(results)
        }

        async function getTopSeries() {
            const { data: { results }
            } = await api.get('/tv/top_rated')

            setTopSeries(results)
        }
        async function getPopularSeries() {
            const { data: { results }
            } = await api.get('/tv/popular')

            setPopularSeries(results)
        }
        async function getPopularArtist() {
            const { data: { results }
            } = await api.get('/person/popular')

            setPopularArtists(results)
        }





        getPopularArtist()
        getPopularSeries()
        getTopSeries()
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
            {topSeries && <Slider info={topSeries} title={'Top Series'} />}
            {popularSeries && <Slider info={popularSeries} title={'Popular Series'} />}
            {popularArtists&& <Slider info={popularArtists} title={'Popular Artistas'} />}
        </>
    )
}

export default Home