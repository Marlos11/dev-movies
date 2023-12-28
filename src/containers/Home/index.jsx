



import Button from '../../components/Button'
import Modal from '../../components/Modal'
import Slider from '../../components/Slider'

import  { getMovies,getPopularArtist,getPopularSeries,getTopSeries,getTopMovie } from '../../server/getData'
import { useNavigate } from 'react-router-dom'
import { getImage } from '../../utils/getImage'
import { Background, Conteiner, Info, Poster, ConteinerButtons } from './styles'
import { useState, useEffect } from 'react'

function Home() {
    const [showModal, setShowModal] = useState(false)
    const [movies, setMovies] = useState()
    const [topMovies, setTopMovie] = useState()
    const [topSeries, setTopSeries] = useState()
    const [popularSeries, setPopularSeries] = useState()
    const [popularArtists, setPopularArtists] = useState()


    const navigate = useNavigate()

    useEffect(() => {
       
       async function getAllData (){
        setMovies(await getMovies())
        setTopMovie(await getTopMovie())
        setTopSeries(await getTopSeries())
        setPopularSeries(await getPopularSeries())
        setPopularArtists(await getPopularArtist())
        

            }

            getAllData()

        
    }, [])






    return (

        <>
            {movies && (
                <Background img={getImage(movies.backdrop_path)}>
                    {showModal && <Modal movieId={movies.id} setShowModal={setShowModal} />}
                    <Conteiner>
                        <Info>
                            <h1>{movies.title}</h1>

                            <p>{movies.overview}</p>
                            <ConteinerButtons>
                                <Button red={true} onClick={() => navigate(`/detalhes/${movies.id}`)}>
                                    Assita Agora </Button>
                                <Button onClick={() => setShowModal(true)}
                                    red={false}>Assistir ao trailer</Button>
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
            {popularArtists && <Slider info={popularArtists} title={'Popular Artistas'} />}
        </>
    )
}

export default Home