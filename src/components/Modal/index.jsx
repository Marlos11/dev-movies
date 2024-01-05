import { useEffect, useState } from "react"
import { Background, Container } from "./styles"

import {  getMovieVideos } from "../../server/getData"



// eslint-disable-next-line react/prop-types
function Modal({ movieId,setShowModal }) {

    const [movie, setMovie] = useState()
    useEffect(() => {
        async function getMovies() {
            

            setMovie(await getMovieVideos(movieId))


        }

        getMovies()

    },[])

    return (
        <Background onClick={()=>setShowModal(false)}>
            {movie && (


                <Container >
                    <iframe
                        src={`http://www.youtube.com/embed/${movie.key}`}
                        title="YouTube Video Player "
                        height={'500px'}
                        width={"100%"}
                    ></iframe>
                </Container>
            )}
        </Background>
    )
}

export default Modal 