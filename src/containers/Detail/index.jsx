import { useEffect, useState } from "react";
import { Conteiner, Background, Cover, Info, ContainerMovie } from "./styles";
import { useParams } from 'react-router-dom'
import { getMovieVideos, getMoviesById, getMoviesCredits, getMoviesSimilar, } from '../../server/getData'
import { getImage } from '../../utils/getImage'
import SpanGenres from "../../components/SpanGeners";
import Credits from "../../components/Credits";
import Slider from '../../components/Slider'
function Detail() {

    const { id } = useParams()

    const [movie, setMovie] = useState()
    const [movieVideos, setMovieVideos] = useState()
    const [movieCredits, setMovieCredits] = useState()
    const [movieSimilar, setMovieSimilae] = useState()

    useEffect(() => {
        async function getDataAll() {
            Promise.all([
                getMoviesById(id),
                getMovieVideos(id),
                getMoviesCredits(id),
                getMoviesSimilar(id),

            ])

                .then(([movie, videos, credits, similar,]) => {
                    setMovie(movie)
                    setMovieVideos(videos)
                    setMovieCredits(credits)
                    setMovieSimilae(similar)

                })
                .catch((error) => (error))

        }

        getDataAll()



    }, [])


    return (

        <>
            {movie && (
                <>
                    <Background image={getImage(movie.backdrop_path)} />
                    <Conteiner>
                        <Cover>
                            <img src={getImage(movie.poster_path)} />
                        </Cover>
                        <Info>
                            <h2>{movie.title}</h2>
                            <SpanGenres genres={movie.genres} />
                            <p>{movie.overview}</p>
                            <div>
                                <Credits credit={movieCredits} />
                            </div>
                        </Info>
                    </Conteiner>
                    <ContainerMovie>
                        {movieVideos && movieVideos.map(video => (
                            <div key={video.id}>
                                <h4>{video.name}</h4>
                                <iframe
                                    src={`http://www.youtube.com/embed/${video.key}`}
                                    title="YouTube Video Player "
                                    height={'500px'}
                                    width={"100%"}
                                ></iframe>
                            </div>
                        ))}
                    </ContainerMovie>

                    {movieSimilar && <Slider info={movieSimilar} title={' Filmes similares '} />}


                </>

            )}
        </>
    )
}

export default Detail