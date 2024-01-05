import { useEffect, useState } from "react";
import { Conteiner } from "./styles";
import { useParams } from 'react-router-dom'
import {getMovieVideos, getMoviesById, getMoviesCredits, getMoviesSimilar, } from '../../server/getData'

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
                .catch((error) => console.log(error))

        }

        getDataAll()



    }, [])


    return (
        <Conteiner>
            <div>Detalhes</div>
        </Conteiner>
    )
}

export default Detail