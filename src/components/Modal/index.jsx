import { useEffect, useState } from "react"
import { Background, Container } from "./styles"
import api from "../../server/api"



// eslint-disable-next-line react/prop-types
function Modal({ movieId }) {

    const [movie, setMovie] = useState()
    useEffect(() => {
        async function getMovies() {
            const { data: { results }
            } = await api.get(`/movie/${movieId}/videos`)

            setMovie(results[0])


        }

        getMovies()

    },[])

    return (
        <Background>
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